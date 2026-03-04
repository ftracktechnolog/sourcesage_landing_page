Perfect. Next.js makes the GA4 implementation clean. Here's exactly what to do:

**Option 1: Using `next/script` (recommended for Next.js)**

In your `app/layout.tsx` (or `_app.tsx` if using pages router):

```tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WQ8FKH8GY6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WQ8FKH8GY6');
          `}
        </Script>
      </body>
    </html>
  )
}
```

**Option 2: WhatsApp click tracking component**

Create `components/WhatsappCTA.tsx`:

```tsx
'use client'

declare global {
  interface Window { gtag: Function }
}

export default function WhatsappCTA({ phone, message, label }) {
  const handleClick = () => {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'engagement',
      event_label: label || 'whatsapp_cta'
    })
  }

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <a href={url} target="_blank" onClick={handleClick}>
      Chat on WhatsApp
    </a>
  )
}
```

Then use it anywhere:
```tsx
<WhatsappCTA 
  phone="60123456789"
  message="Hi, I found you via SourceSage"
  label="farmtrack_hero"
/>
```

**In Claude Code, just tell it:**
> "Add GA4 with measurement ID G-WQ8FKH8GY6 to my Next.js app layout, and create a WhatsApp CTA component that fires a gtag event on click"

It'll find the right files and do it. Are you on App Router or Pages Router?