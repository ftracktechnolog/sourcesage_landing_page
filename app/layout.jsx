import './globals.css'
import Script from 'next/script'

export const metadata = {
  title: 'Hard-to-Find Tractor & Marine Parts Malaysia | SourceSage',
  description: 'Hard-to-find tractor & marine engine parts in Malaysia. Fast sourcing for urgent breakdowns — Kubota, Yanmar, Massey Ferguson, Perkins, Isuzu & more.',
  metadataBase: new URL('https://sourcesage.ai'),
  alternates: {
    canonical: '/',
    languages: {
      en: 'https://sourcesage.ai/',
      ms: 'https://sourcesage.ai/ms/',
      'zh-Hans': 'https://sourcesage.ai/zh/',
      'x-default': 'https://sourcesage.ai/',
    },
  },
  openGraph: {
    title: 'Hard-to-Find Tractor & Marine Parts Malaysia | SourceSage',
    description: 'Hard-to-find tractor & marine engine parts in Malaysia. Fast sourcing for urgent breakdowns — Kubota, Yanmar, Massey Ferguson, Perkins & more.',
    url: 'https://sourcesage.ai/',
    siteName: 'SourceSage.ai',
    type: 'website',
    locale: 'en',
    images: [{ url: 'https://sourcesage.ai/images/og-home.png', width: 1200, height: 630, alt: 'SourceSage — Malaysian Tractor & Marine Engine Parts Sourcing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hard-to-Find Tractor & Marine Parts Malaysia | SourceSage',
    description: 'Hard-to-find tractor & marine engine parts in Malaysia. Fast sourcing for urgent breakdowns.',
    images: ['https://sourcesage.ai/images/og-home.png'],
  },
  robots: { index: true, follow: true }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Script id="lang-detect" strategy="beforeInteractive">{`
          (function(){
            var p=document.location.pathname;
            document.documentElement.lang=p.indexOf('/zh')===0?'zh-Hans':p.indexOf('/ms')===0?'ms':'en';
          })();
        `}</Script>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WQ8FKH8GY6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WQ8FKH8GY6');
        `}</Script>
      </body>
    </html>
  )
}
