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
import logging

# --- Logging Configuration ---
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s', force=True)

# --- Environment Variables ---
EMAIL_ACCOUNT = os.environ.get('EMAIL_ACCOUNT')
APP_PASSWORD = os.environ.get('APP_PASSWORD')

IMAP_SERVER = os.environ.get('IMAP_SERVER', 'imap.gmail.com')
IMAP_PORT = int(os.environ.get('IMAP_PORT', 993))
SMTP_SERVER = os.environ.get('SMTP_SERVER', 'smtp.gmail.com')
SMTP_PORT = int(os.environ.get('SMTP_PORT', 587))

GEMINI_API_KEY = os.environ.get('GEMINI_API_KEY')
GEMINI_MODEL = os.environ.get('GEMINI_MODEL', 'gemini-2.5-flash-lite')  # or gemini-1.5-pro

# --- Logging Environment Variables ---
logging.info(f"EMAIL_ACCOUNT last 4: {EMAIL_ACCOUNT[-6:] if EMAIL_ACCOUNT else 'N/A'}")
logging.info(f"APP_PASSWORD last 4: {APP_PASSWORD[-6:] if APP_PASSWORD else 'N/A'}")
logging.info(f"IMAP_SERVER last 4: {IMAP_SERVER[-6:] if IMAP_SERVER else 'N/A'}")
logging.info(f"IMAP_PORT: {IMAP_PORT}")
logging.info(f"SMTP_SERVER last 4: {SMTP_SERVER[-6:] if SMTP_SERVER else 'N/A'}")
logging.info(f"SMTP_PORT: {SMTP_PORT}")
logging.info(f"GEMINI_API_KEY last 4: {GEMINI_API_KEY[-6:] if GEMINI_API_KEY else 'N/A'}")
logging.info(f"GEMINI_MODEL: {GEMINI_MODEL}")


# --- Read Latest Email ---
def read_latest_email():
    mail = None
    try:
        logging.info(f"Connecting to IMAP server: {IMAP_SERVER} on port {IMAP_PORT}")
        mail = imaplib.IMAP4_SSL(IMAP_SERVER, IMAP_PORT)
        logging.info("IMAP connection successful.")
    except Exception as e:
        logging.error(f"Error connecting to IMAP server: {e}")
        return None

    try:
        logging.info(f"Logging in with account: {EMAIL_ACCOUNT}")
        mail.login(EMAIL_ACCOUNT, APP_PASSWORD)
        logging.info("IMAP login successful.")
    except Exception as e:
        logging.error(f"Error logging into IMAP server: {e}")
        if mail:
            try:
                mail.logout()
            except Exception as logout_e:
                logging.error(f"Error during logout after login failure: {logout_e}")
        return None

    try:
        logging.info("Selecting inbox.")
        mail.select('inbox')
        logging.info("Inbox selected.")
    except Exception as e:
        logging.error(f"Error selecting inbox: {e}")
        if mail:
            try:
                mail.logout()
            except Exception as logout_e:
                logging.error(f"Error during logout after select failure: {logout_e}")
        return None

    try:
        logging.info("Searching for all emails.")
        result, data = mail.search(None, 'ALL')
        mail_ids = data[0].split()
        logging.info(f"Found {len(mail_ids)} emails.")
    except Exception as e:
        logging.error(f"Error searching for emails: {e}")
        if mail:
            try:
                mail.logout()
            except Exception as logout_e:
                logging.error(f"Error during logout after search failure: {logout_e}")
        return None


    if not mail_ids:
        logging.info("No emails found.")
        if mail:
            try:
                mail.logout()
            except Exception as logout_e:
                logging.error(f"Error during logout after no emails found: {logout_e}")
        return None

    try:
        latest_email_id = mail_ids[-1]
        logging.info(f"Fetching latest email with ID: {latest_email_id}")
        result, message_data = mail.fetch(latest_email_id, '(RFC822)')
        raw_email = message_data[0][1]
        logging.info("Latest email fetched.")
    except Exception as e:
        logging.error(f"Error fetching latest email: {e}")
        if mail:
            try:
                mail.logout()
            except Exception as logout_e:
                logging.error(f"Error during logout after fetch failure: {logout_e}")
        return None

    try:
        msg = email.message_from_bytes(raw_email)
        from_text = msg['From']
        subject = msg['Subject']
        logging.info(f"Email Subject: {subject}")
        logging.info(f"Email From: {from_text}")

        # Extract the email body
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
        logging.info("Email body extracted.")

    except Exception as e:
        logging.error(f"Error parsing email or extracting body: {e}")
        if mail:
            try:
                mail.logout()
            except Exception as logout_e:
                logging.error(f"Error during logout after parsing failure: {logout_e}")
        return None

    try:
        mail.logout()
        logging.info("IMAP logout successful.")
    except Exception as e:
        logging.error(f"Error during IMAP logout: {e}")


    return f'from: {from_text}\nsubject: {subject}\nbody:\n{body}'


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
                print(chunk.text, end="") # Keep print here for streaming output
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
        logging.info("SMTP connection successful.")

        logging.info("Starting TLS.")
        server.starttls()
        logging.info("TLS started.")

        logging.info(f"Logging in with account: {EMAIL_ACCOUNT}")
        server.login(EMAIL_ACCOUNT, APP_PASSWORD)
        logging.info("SMTP login successful.")

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


# --- Main Script ---
if __name__ == "__main__":
    logging.info("📧 Reading latest email...\n")
    email_body = read_latest_email()

    if email_body:
        logging.info("\n🤖 Generating Gemini response...\n")
        gemini_response = generate(email_body)

        if gemini_response:
            logging.info("\n📤 Sending response via email...\n")
            send_email('nggimseng@gmail.com', 'Monday cool stuff', gemini_response)
        else:
            logging.error("Gemini response generation failed.")
    else:
        logging.info("No email to process.")
