'use client'

const WA_NUMBER = '447546185317'
const DEFAULT_MESSAGE = 'Hi, I need help sourcing a spare part. Brand: ___ Model: ___ Part needed: ___'
const SIGNATURE = '\n\nPowered by SourceSage AI'

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSd2mFulfYnK1rV_tEgyK4Tu3NftwEMNLePZ0Td_b6iOKSLUpw/formResponse'

function withAttribution(message) {
  return message + SIGNATURE
}

function getDevice() {
  if (typeof navigator === 'undefined') return 'unknown'
  return /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) ? 'mobile' : 'desktop'
}

function getUTM() {
  if (typeof window === 'undefined') return 'none'
  const p = new URLSearchParams(window.location.search)
  const parts = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
    .filter(k => p.get(k))
    .map(k => `${k}=${p.get(k)}`)
  return parts.length ? parts.join('&') : 'none'
}

function logClick(label) {
  try {
    const body = new FormData()
    body.append('entry.1554049717', typeof window !== 'undefined' ? window.location.href : '')
    body.append('entry.335722213', label || 'whatsapp_cta')
    body.append('entry.2124462189', getDevice())
    body.append('entry.93308425', getUTM())
    body.append('entry.757958076', typeof document !== 'undefined' ? document.referrer : '')
    fetch(FORM_URL, { method: 'POST', mode: 'no-cors', body })
  // eslint-disable-next-line no-empty
  } catch { }
}

export default function WhatsappCTA({ label, message, className, children }) {
  const text = withAttribution(message || DEFAULT_MESSAGE)
  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`

  const handleClick = () => {
    logClick(label)
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: label || 'whatsapp_cta',
      })
    }
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
      aria-label="Contact on WhatsApp"
    >
      {children}
    </a>
  )
}
