import HomePageContent from '../../components/HomePageContent'
import { zh } from '../../lib/translations/zh'

const zhFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'inLanguage': 'zh-Hans',
  mainEntity: [
    {
      '@type': 'Question',
      name: '你们能帮我找到久保田拖拉机的零件吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '是的。我们为久保田M9000、M9540、L4400、L3408、L3608、V1505等型号提供原厂和替换零件。请通过WhatsApp联系我们并提供型号和零件描述。',
      },
    },
    {
      '@type': 'Question',
      name: '你们发货到马来西亚哪些地区？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '我们发货到马来西亚全境，包括西马（柔佛、雪兰莪、霹雳、吉打）和东马（沙巴、砂拉越）。空运可满足紧急需求。我们总部位于霹雳州怡保。',
      },
    },
    {
      '@type': 'Question',
      name: '能帮助找到已经停产的洋马船用柴油机零件吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '可以。我们专门寻找难以找到和已停产的洋马船用柴油机零件，涵盖1GM、2GM、3GM、3JH、4JH、6LY系列。',
      },
    },
    {
      '@type': 'Question',
      name: '你们供应原厂零件还是替代零件？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '两者都供应。原厂零件（OEM）提供完整可追溯性，质量有保证。优质替代零件（如NPR、Sparex等品牌）价格通常低30-60%，在许多马来西亚车间广泛使用并取得良好效果。',
      },
    },
    {
      '@type': 'Question',
      name: '如何联系你们获取报价？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '通过WhatsApp联系我们，提供您的设备品牌、型号和所需零件描述。我们会在24小时内回复并确认供应情况和价格。',
      },
    },
  ],
}

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
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(zhFaqSchema) }} />
      <HomePageContent t={zh} lang="zh-Hans" />
    </>
  )
}
