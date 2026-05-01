import HomePageContent from '../../components/HomePageContent'
import { ms } from '../../lib/translations/ms'

export const metadata = {
  title: 'Alat Ganti Traktor & Enjin Marin Malaysia | SourceSage',
  description: 'Cari alat ganti traktor dan enjin marin yang sukar diperoleh di Malaysia. Jenama Kubota, Yanmar, Massey Ferguson, John Deere, Perkins & Zoomlion. Semak stok dalam 24 jam.',
  alternates: {
    canonical: '/ms/',
    languages: {
      en: 'https://sourcesage.ai/',
      ms: 'https://sourcesage.ai/ms/',
      zh: 'https://sourcesage.ai/zh/',
      'x-default': 'https://sourcesage.ai/',
    },
  },
  openGraph: {
    title: 'Alat Ganti Traktor & Enjin Marin Malaysia | SourceSage',
    description: 'Cari alat ganti traktor dan enjin marin yang sukar diperoleh di Malaysia. Jenama Kubota, Yanmar, Massey Ferguson, John Deere, Perkins & Zoomlion. Semak stok dalam 24 jam.',
    url: 'https://sourcesage.ai/ms/',
    siteName: 'SourceSage.ai',
    type: 'website',
    locale: 'ms_MY',
    images: [{ url: 'https://sourcesage.ai/images/og-home.png', width: 1200, height: 630, alt: 'SourceSage — Perolehan Alat Ganti Traktor & Marin Malaysia' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alat Ganti Traktor & Enjin Marin Malaysia | SourceSage',
    description: 'Cari alat ganti traktor dan enjin marin yang sukar diperoleh di Malaysia. Jenama Kubota, Yanmar, Massey Ferguson, John Deere, Perkins & Zoomlion. Semak stok dalam 24 jam.',
    images: ['https://sourcesage.ai/images/og-home.png'],
  },
}

export default function MalayHome() {
  return <HomePageContent t={ms} lang="ms" />
}
