import HomePageContent from '../components/HomePageContent'
import { en } from '../lib/translations/en'

export const metadata = {
  description: 'Find hard-to-find tractor & marine engine parts in Malaysia. Kubota, Yanmar, Massey Ferguson, John Deere, Perkins & Zoomlion. 24hr availability check. Ship nationwide.',
}

export default function Home() {
  return <HomePageContent t={en} lang="en" />
}
