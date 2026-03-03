import './globals.css'
import Script from 'next/script'

export const metadata = {
  title: 'Hard-to-Find Tractor & Marine Engine Parts Malaysia | SourceSage',
  description: 'Supplier of hard-to-find agricultural tractor and marine engine parts in Malaysia. Fast sourcing for urgent breakdowns. Kubota, Yanmar, Massey Ferguson, John Deere, Zoomlion.',
  metadataBase: new URL('https://sourcesage.ai'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Hard-to-Find Tractor & Marine Engine Parts Malaysia | SourceSage',
    description: 'Supplier of hard-to-find agricultural tractor and marine engine parts in Malaysia. Fast sourcing for urgent breakdowns.',
    url: 'https://sourcesage.ai',
    siteName: 'SourceSage.ai',
    type: 'website',
  },
  robots: { index: true, follow: true }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
