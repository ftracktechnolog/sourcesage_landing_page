import HomePageContent from '../../components/HomePageContent'
import { zh } from '../../lib/translations/zh'

export const metadata = {
  title: '马来西亚拖拉机及船用发动机配件 | SourceSage',
  description: '马来西亚农业拖拉机和船用柴油发动机难找零配件供应商。紧急故障快速采购 — 久保田、洋马、麦赛福格森及更多品牌。',
  alternates: {
    canonical: '/zh/',
    languages: {
      en: 'https://sourcesage.ai/',
      ms: 'https://sourcesage.ai/ms/',
      zh: 'https://sourcesage.ai/zh/',
      'x-default': 'https://sourcesage.ai/',
    },
  },
  openGraph: {
    title: '马来西亚拖拉机及船用发动机配件 | SourceSage',
    description: '马来西亚农业拖拉机和船用柴油发动机难找零配件供应商。',
    url: 'https://sourcesage.ai/zh/',
    siteName: 'SourceSage.ai',
    type: 'website',
    locale: 'zh_CN',
    images: [{ url: 'https://sourcesage.ai/images/og-home.png', width: 1200, height: 630, alt: 'SourceSage — 马来西亚拖拉机及船用配件采购' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '马来西亚拖拉机及船用发动机配件 | SourceSage',
    description: '马来西亚农业拖拉机和船用柴油发动机难找零配件供应商。',
    images: ['https://sourcesage.ai/images/og-home.png'],
  },
}

export default function ZhHome() {
  return <HomePageContent t={zh} lang="zh" />
}
