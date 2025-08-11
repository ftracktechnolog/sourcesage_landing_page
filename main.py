import os
import ssl
import imaplib
import smtplib
import base64

import email
from email.header import decode_header
from email.mime.text import MIMEText

import google.generativeai as genai

# --- Environment Variables ---
EMAIL_ACCOUNT = os.environ.get('EMAIL_ACCOUNT')
APP_PASSWORD = os.environ.get('APP_PASSWORD')

IMAP_SERVER = os.environ.get('IMAP_SERVER', 'imap.gmail.com')
IMAP_PORT = int(os.environ.get('IMAP_PORT', 993))
SMTP_SERVER = os.environ.get('SMTP_SERVER', 'smtp.gmail.com')
SMTP_PORT = int(os.environ.get('SMTP_PORT', 587))

GEMINI_API_KEY = os.environ.get('GEMINI_API_KEY')
GEMINI_MODEL = os.environ.get('GEMINI_MODEL', 'gemini-1.5-flash')  # or gemini-1.5-pro


# --- Read Latest Email ---
def read_latest_email():
    try:
        mail = imaplib.IMAP4_SSL(IMAP_SERVER, IMAP_PORT)
        mail.login(EMAIL_ACCOUNT, APP_PASSWORD)
        mail.select('inbox')

        result, data = mail.search(None, 'ALL')
        mail_ids = data[0].split()

        if not mail_ids:
            print("No emails found.")
            return None

        latest_email_id = mail_ids[-1]
        result, message_data = mail.fetch(latest_email_id, '(RFC822)')
        raw_email = message_data[0][1]

        msg = email.message_from_bytes(raw_email)
        from_text = msg['From']
        subject = msg['Subject']

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

        mail.logout()
        return f'from: {from_text}\nsubject: {subject}\nbody:\n{body}'

    except Exception as e:
        print(f"Error reading email: {e}")
        return None


# --- Generate Gemini Response ---
def generate(user_question):
    genai.configure(api_key=GEMINI_API_KEY)
    model = genai.GenerativeModel(GEMINI_MODEL)

    response = model.generate_content(user_question, stream=True)

    total_text = ''
    for chunk in response:
        if chunk.text:
            print(chunk.text, end="")
            total_text += chunk.text
    print()  # newline after stream
    return total_text


# --- Send Email ---
def send_email(to_address, subject, body):
    try:
        msg = MIMEText(body)
        msg['From'] = EMAIL_ACCOUNT
        msg['To'] = to_address
        msg['Subject'] = subject

        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(EMAIL_ACCOUNT, APP_PASSWORD)
        server.sendmail(EMAIL_ACCOUNT, to_address, msg.as_string())
        server.quit()

        print(f'✅ Email sent to {to_address}')

    except Exception as e:
        print(f"❌ Failed to send email: {e}")


# --- Main Script ---
if __name__ == "__main__":
    print("📧 Reading latest email...\n")
    email_body = read_latest_email()

    if email_body:
        print("\n🤖 Generating Gemini response...\n")
        gemini_response = generate(email_body)

        print("\n📤 Sending response via email...\n")
        send_email('nggimseng@gmail.com', 'Monday cool stuff', gemini_response)
    else:
        print("No email to process.")
