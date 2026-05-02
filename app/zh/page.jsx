import HomePageContent from '../../components/HomePageContent'
import { zh } from '../../lib/translations/zh'

export const metadata = {
  title: '马来西亚拖拉机及船用发动机配件 | SourceSage',
  description: '在马来西亚寻找难以找到的拖拉机和船用发动机配件？我们供应 Kubota、Yanmar、Massey Ferguson、John Deere、Perkins 及 Zoomlion 品牌配件。24小时内确认供应。',
  alternates: {
    canonical: '/zh/',
    languages: {
      en: 'https://sourcesage.ai/',
      ms: 'https://sourcesage.ai/ms/',
      'zh-Hans': 'https://sourcesage.ai/zh/',
      'x-default': 'https://sourcesage.ai/',
    },
  },
  openGraph: {
    title: '马来西亚拖拉机及船用发动机配件 | SourceSage',
    description: '在马来西亚寻找难以找到的拖拉机和船用发动机配件？我们供应 Kubota、Yanmar、Massey Ferguson、John Deere、Perkins 及 Zoomlion 品牌配件。24小时内确认供应。',
    url: 'https://sourcesage.ai/zh/',
    siteName: 'SourceSage.ai',
    type: 'website',
    locale: 'zh_CN',
    images: [{ url: 'https://sourcesage.ai/images/og-home.png', width: 1200, height: 630, alt: 'SourceSage — 马来西亚拖拉机及船用配件采购' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '马来西亚拖拉机及船用发动机配件 | SourceSage',
    description: '在马来西亚寻找难以找到的拖拉机和船用发动机配件？我们供应 Kubota、Yanmar、Massey Ferguson、John Deere、Perkins 及 Zoomlion 品牌配件。24小时内确认供应。',
    images: ['https://sourcesage.ai/images/og-home.png'],
  },
}

export default function ZhHome() {
  return <HomePageContent t={zh} lang="zh-Hans" />
}
