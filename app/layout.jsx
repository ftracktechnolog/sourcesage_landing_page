import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
