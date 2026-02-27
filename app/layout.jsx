import './globals.css'

export const metadata = {
  title: 'SourceSage AI | Digital Twin for Industrial Parts Enterprises',
  description: 'Scale your technical know-how with SourceSage AI. Automate B2B parts inquiries, technical identification, and global sourcing workflows for industrial machinery distributors.',
  metadataBase: new URL('https://sourcesage.ai'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'SourceSage AI | Digital Twin for Industrial Parts Enterprises',
    description: 'Scale your technical know-how with SourceSage AI. Automate B2B parts inquiries, technical identification, and global sourcing workflows for industrial machinery distributors.',
    url: 'https://sourcesage.ai',
    siteName: 'SourceSage AI',
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
