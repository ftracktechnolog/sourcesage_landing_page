import HomePageContent from '../components/HomePageContent'
import { en } from '../lib/translations/en'

export const metadata = {
  title: 'Hard-to-Find Tractor & Marine Parts Malaysia | SourceSage',
  description: 'Find hard-to-find tractor & marine engine parts in Malaysia. Kubota, Yanmar, Massey Ferguson, John Deere, Perkins & Zoomlion. 24hr availability check. Ship nationwide.',
  openGraph: {
    title: 'Hard-to-Find Tractor & Marine Parts Malaysia | SourceSage',
    description: 'Find hard-to-find tractor & marine engine parts in Malaysia. Kubota, Yanmar, Massey Ferguson, John Deere, Perkins & Zoomlion. 24hr availability check. Ship nationwide.',
    url: 'https://sourcesage.ai/',
    siteName: 'SourceSage.ai',
    type: 'website',
    locale: 'en',
    images: [{ url: 'https://sourcesage.ai/images/og-home.png', width: 1200, height: 630, alt: 'SourceSage — Malaysian Tractor & Marine Engine Parts Sourcing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hard-to-Find Tractor & Marine Parts Malaysia | SourceSage',
    description: 'Find hard-to-find tractor & marine engine parts in Malaysia. Kubota, Yanmar, Massey Ferguson, John Deere, Perkins & Zoomlion. 24hr availability check. Ship nationwide.',
    images: ['https://sourcesage.ai/images/og-home.png'],
  },
}

export default function Home() {
  return <HomePageContent t={en} lang="en" />
}
