
import base64
import os
from google import genai
from google.genai import types
import imaplib
import email
from email.header import decode_header
import ssl

EMAIL_ACCOUNT = os.environ.get('EMAIL_ACCOUNT')
APP_PASSWORD = os.environ.get('APP_PASSWORD')

# Gmail IMAP and SMTP servers
IMAP_SERVER = os.environ.get('IMAP_SERVER', 'imap.gmail.com')
IMAP_PORT = int(os.environ.get('IMAP_PORT', 993))
SMTP_SERVER = os.environ.get('SMTP_SERVER', 'smtp.gmail.com')
SMTP_PORT = int(os.environ.get('SMTP_PORT', 587))

GEMINI_API_KEY = os.environ.get('GEMINI_API_KEY')
GEMINI_MODEL = os.environ.get('GEMINI_MODEL', 'gemini-2.5-flash-lite')

def read_latest_email():
    # Connect to Gmail's IMAP server
    mail = imaplib.IMAP4_SSL(IMAP_SERVER, IMAP_PORT)
    mail.login(EMAIL_ACCOUNT, APP_PASSWORD)
    mail.select('inbox')

    # Search all emails, get the latest
    result, data = mail.search(None, 'ALL')
    mail_ids = data[0].split()
    latest_email_id = mail_ids[-1]

    # Fetch the email by ID
    result, message_data = mail.fetch(latest_email_id, '(RFC822)')
    raw_email = message_data[0][1]

    # Parse email content
    msg = email.message_from_bytes(raw_email)
    print('From:', msg['From'])
    print('Subject:', msg['Subject'])
    from_text=  msg['From']
    subject = msg['Subject']

    # Extract the email body
    if msg.is_multipart():
        for part in msg.walk():
            content_type = part.get_content_type()
            content_disposition = str(part.get("Content-Disposition"))
            if content_type == 'text/plain' and 'attachment' not in content_disposition:
                body = part.get_payload(decode=True).decode()
                print('Body:', body)
                break
    else:
        body = msg.get_payload(decode=True).decode()
        print('Body:', body)

    mail.logout()
    return f'from:{from_text}, subject:{subject}, body:{body}'
def generate(user_question):
    client = genai.Client(
        api_key=GEMINI_API_KEY,
    )

    model = GEMINI_MODEL

    contents = [
        types.Content(
            role="user",
            parts=[
                types.Part.from_text(text=user_question),
            ],
        ),
    ]
    tools = [
        types.Tool(googleSearch=types.GoogleSearch(
        )),
    ]
    generate_content_config = types.GenerateContentConfig(
        thinking_config = types.ThinkingConfig(
            thinking_budget=-1,
        ),
        tools=tools,
    )
    total_text = ''
    for chunk in client.models.generate_content_stream(
        model=model,
        contents=contents,
        config=generate_content_config,
    ):
        print(chunk.text, end="")
        total_text += chunk.text
    return total_text

def send_email(to_address, subject, body):
    msg = MIMEText(body)
    msg['From'] = EMAIL_ACCOUNT
    msg['To'] = to_address
    msg['Subject'] = subject

    # Connect to Gmail SMTP server and send email
    server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
    server.starttls()
    server.login(EMAIL_ACCOUNT, APP_PASSWORD)
    server.sendmail(EMAIL_ACCOUNT, to_address, msg.as_string())
    server.quit()
    print(f'Email sent to {to_address}')


if __name__ == "__main__":
  print("Hello, World!")
  email_body = read_latest_email()
  send_email('nggimseng@gmail.com', 'Monday cool stuff', email_body)
