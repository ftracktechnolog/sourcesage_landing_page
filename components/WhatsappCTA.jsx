'use client'

const WA_NUMBER = '447546185317'
const DEFAULT_MESSAGE = 'Hi, I need help sourcing a spare part. (via sourcesage.ai)'

export default function WhatsappCTA({ label, message, className, children }) {
  const text = message || DEFAULT_MESSAGE
  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`

  const handleClick = () => {
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
    >
      {children}
    </a>
  )
}
