import HomePageContent from '../../components/HomePageContent'
import { ms } from '../../lib/translations/ms'

const msFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'inLanguage': 'ms',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Bolehkah anda membantu saya mencari alat ganti traktor Kubota?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ya. Kami membekalkan alat ganti tulen dan aftermarket untuk Kubota M9000, M9540, L4400, L3408, L3608, V1505 dan banyak lagi. Hubungi kami di WhatsApp dengan model dan keterangan alat ganti.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ke mana sahaja anda menghantar di Malaysia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kami menghantar ke seluruh Malaysia termasuk Semenanjung (Johor, Selangor, Perak, Kedah) dan Malaysia Timur (Sabah, Sarawak). Kargo udara tersedia untuk kecemasan. Kami berpusat di Ipoh, Perak.',
      },
    },
    {
      '@type': 'Question',
      name: 'Bolehkah anda mencari alat ganti enjin marin Yanmar yang telah dihentikan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ya. Kami pakar dalam mencari alat ganti enjin marin Yanmar yang sukar dicari dan telah dihentikan — meliputi siri 1GM, 2GM, 3GM, 3JH, 4JH, 6LY.',
      },
    },
    {
      '@type': 'Question',
      name: 'Adakah anda membekalkan alat ganti OEM atau aftermarket?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kedua-duanya. Alat ganti OEM tulen disertakan dengan kebolehkesanan penuh. Alat ganti aftermarket berkualiti (jenama seperti NPR, Sparex) biasanya 30-60% lebih murah dan digunakan secara meluas di bengkel Malaysia.',
      },
    },
    {
      '@type': 'Question',
      name: 'Bagaimana saya boleh menghubungi anda untuk mendapatkan sebut harga?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hubungi kami di WhatsApp dengan jenama, model dan keterangan alat ganti yang diperlukan. Kami akan membalas dalam masa 24 jam dengan harga dan ketersediaan.',
      },
    },
  ],
}

export const metadata = {
  title: 'Alat Ganti Traktor & Enjin Marin Malaysia | SourceSage',
  description: 'Cari alat ganti traktor dan enjin marin yang sukar diperoleh di Malaysia. Jenama Kubota, Yanmar, Massey Ferguson, John Deere, Perkins & Zoomlion. Semak stok dalam 24 jam.',
  alternates: {
    canonical: '/ms/',
    languages: {
      en: 'https://sourcesage.ai/',
      ms: 'https://sourcesage.ai/ms/',
      'zh-Hans': 'https://sourcesage.ai/zh/',
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
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(msFaqSchema) }} />
      <HomePageContent t={ms} lang="ms" />
    </>
  )
}
