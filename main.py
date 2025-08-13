import os
import ssl
import imaplib
import smtplib
import base64
import logging

import email
from email.header import decode_header
from email.mime.text import MIMEText

import google.generativeai as genai

# --- Logging Configuration ---
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s', force=True)

# --- Required Environment Variables ---
required_env_vars = [
    "EMAIL_ACCOUNT",
    "APP_PASSWORD",
    "IMAP_SERVER",
    "IMAP_PORT",
    "SMTP_SERVER",
    "SMTP_PORT",
    "GEMINI_API_KEY",
    "GEMINI_MODEL"
]

missing = [var for var in required_env_vars if not os.getenv(var)]
if missing:
    print(f"❌ Missing required environment variables: {', '.join(missing)}")
    quit()
else:
    print("✅ All required environment variables are set.")

# --- Environment Variables ---
EMAIL_ACCOUNT = os.environ.get('EMAIL_ACCOUNT')
APP_PASSWORD = os.environ.get('APP_PASSWORD')
IMAP_SERVER = os.environ.get('IMAP_SERVER', 'imap.gmail.com')
SMTP_SERVER = os.environ.get('SMTP_SERVER', 'smtp.gmail.com')
IMAP_PORT = int(os.environ.get('IMAP_PORT', 993))
SMTP_PORT = int(os.environ.get('SMTP_PORT', 587))
GEMINI_API_KEY = os.environ.get('GEMINI_API_KEY')
GEMINI_MODEL = os.environ.get('GEMINI_MODEL', 'gemini-2.5-flash-lite')  # default fallback

# --- Read Unread Email with 'Q-agent' in Subject ---
def read_latest_email():
    mail = None
    try:
        logging.info(f"Connecting to IMAP server: {IMAP_SERVER} on port {IMAP_PORT}")
        mail = imaplib.IMAP4_SSL(IMAP_SERVER, IMAP_PORT)
        mail.login(EMAIL_ACCOUNT, APP_PASSWORD)
        mail.select("inbox")

        # ✅ Search for unread emails
        logging.info("Searching for UNSEEN emails.")
        result, data = mail.search(None, 'UNSEEN')
        if result != 'OK':
            logging.warning("Failed to search for unread emails.")
            return None

        mail_ids = data[0].split()
        logging.info(f"Found {len(mail_ids)} unread emails.")

        if not mail_ids:
            return None

        # Process emails in reverse (latest first)
        for email_id in reversed(mail_ids):
            result, message_data = mail.fetch(email_id, '(RFC822)')
            if result != 'OK':
                continue

            raw_email = message_data[0][1]
            msg = email.message_from_bytes(raw_email)
            from_text = msg['From']
            subject = msg['Subject'] or ""

            decoded_subject, encoding = decode_header(subject)[0]
            if isinstance(decoded_subject, bytes):
                decoded_subject = decoded_subject.decode(encoding or 'utf-8', errors='ignore')

            logging.info(f"Email Subject: {decoded_subject}")
            logging.info(f"Email From: {from_text}")

            # ✅ Filter for 'Q-agent' in subject
            if 'q-agent' not in decoded_subject.lower():
                logging.info("Skipping email without 'Q-agent' in subject.")
                continue

            # ✅ Extract body
            body = ""
            if msg.is_multipart():
                for part in msg.walk():
                    content_type = part.get_content_type()
                    content_disposition = str(part.get("Content-Disposition"))
                    if content_type == 'text/plain' and 'attachment' not in content_disposition:
                        body = part.get_payload(decode=True).decode(errors="ignore")
                        break
            else:
                body = msg.get_payload(decode=True).decode(errors="ignore")

            logging.info("Relevant email found and body extracted.")
            mail.logout()
            return {
                'from': from_text,
                'subject': decoded_subject,
                'body': body
            }

        logging.info("No unread emails with 'Q-agent' in subject.")
        mail.logout()
        return None

    except Exception as e:
        logging.error(f"Error: {e}")
        if mail:
            try:
                mail.logout()
            except:
                pass
        return None

# --- Generate Gemini Response ---
def generate(user_question):
    try:
        genai.configure(api_key=GEMINI_API_KEY)
        model = genai.GenerativeModel(GEMINI_MODEL)

        logging.info(f"Generating response using model: {GEMINI_MODEL}")
        response = model.generate_content(user_question, stream=True)

        total_text = ''
        for chunk in response:
            if chunk.text:
                print(chunk.text, end="")  # streaming output
                total_text += chunk.text
        print()  # newline after stream
        logging.info("Gemini response generated.")
        return total_text
    except Exception as e:
        logging.error(f"Error generating Gemini response: {e}")
        return None

# --- Send Email ---
def send_email(to_address, subject, body):
    server = None
    try:
        msg = MIMEText(body)
        msg['From'] = EMAIL_ACCOUNT
        msg['To'] = to_address
        msg['Subject'] = subject

        logging.info(f"Connecting to SMTP server: {SMTP_SERVER} on port {SMTP_PORT}")
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(EMAIL_ACCOUNT, APP_PASSWORD)

        logging.info(f'Sending email to {to_address} with subject "{subject}"')
        server.sendmail(EMAIL_ACCOUNT, to_address, msg.as_string())
        logging.info(f'✅ Email sent to {to_address}')
    except Exception as e:
        logging.error(f"❌ Failed to send email: {e}")
    finally:
        if server:
            try:
                server.quit()
                logging.info("SMTP server quit.")
            except Exception as quit_e:
                logging.error(f"Error quitting SMTP server: {quit_e}")

# --- Main ---
if __name__ == "__main__":
    logging.info("📧 Reading latest matching email...\n")
    email_data = read_latest_email()

    if email_data:
        combined_text = f"from: {email_data['from']}\nsubject: {email_data['subject']}\nbody:\n{email_data['body']}"
        logging.info("\n🤖 Generating Gemini response...\n")
        gemini_response = generate(combined_text)

        if gemini_response:
            logging.info("\n📤 Sending response via email...\n")
            send_email(email_data['from'], f"Re: {email_data['subject']}", gemini_response)
        else:
            logging.error("Gemini response generation failed.")
    else:
        logging.info("No matching unread email found.")
