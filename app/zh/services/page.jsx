import Link from 'next/link'
import { MessageCircle, Mail, Wrench, MapPin, Clock, Truck, CheckCircle, ChevronRight, ShieldCheck } from 'lucide-react'
import WhatsappCTA from '../../../components/WhatsappCTA'
import LangSwitcher from '../../../components/LangSwitcher'

export const metadata = {
  title: '马来西亚零件采购服务 — 如何运作 | SourceSage',
  description: '我们在马来西亚的零件采购服务如何运作。5步流程：提交请求、供应确认、报价与交期、确认订单、配送。涵盖农业拖拉机和船用柴油发动机零件。',
  alternates: { canonical: '/zh/services/', languages: { 'en': 'https://sourcesage.ai/services/', 'zh-Hans': 'https://sourcesage.ai/zh/services/', 'x-default': 'https://sourcesage.ai/services/' } },
  openGraph: {
    title: '马来西亚零件采购服务 — 如何运作 | SourceSage',
    description: '我们在马来西亚的零件采购服务如何运作。5步流程从提交请求到配送。',
    url: 'https://sourcesage.ai/zh/services/',
    siteName: 'SourceSage.ai',
    type: 'website',
    locale: 'zh_CN',
    images: [{ url: 'https://sourcesage.ai/images/og-home.png', width: 1200, height: 630, alt: 'SourceSage 零件采购服务 — 如何运作' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '马来西亚零件采购服务 — 如何运作 | SourceSage',
    description: '我们在马来西亚的零件采购服务如何运作。5步流程从提交请求到配送。',
    images: ['https://sourcesage.ai/images/og-home.png'],
  },
}

const FAQS = [
  { q: '你们确认零件供应需要多长时间？', a: '我们通常在24-48小时内回复，提供价格、供应情况和预计送达时间。紧急请求会优先处理 — 请在留言中注明「机器停机」。' },
  { q: '如果我需要的零件已停产怎么办？', a: '我们通过日本、新加坡、印度和英国的二级经销商网络进行搜索。许多停产零件通过这些渠道仍然可以获取。在您确认之前，我们会如实告知供应情况。' },
  { q: '你们覆盖哪些品牌和设备？', a: '农业拖拉机方面：久保田、洋马、麦赛福格森、约翰迪尔、珀金斯和中联重科。船用柴油发动机方面：洋马、珀金斯、五十铃和日野。我们也处理马来西亚种植园中日益常见的中国制造设备。' },
  { q: '有最低订单量或服务费吗？', a: '没有最低订单量。我们处理单个零件请求与批量订单一视同仁。没有预付服务费 — 您只需在确认报价后支付零件和运费。' },
  { q: '你们服务马来西亚哪些地区？', a: '马来西亚所有州属，包括沙巴和砂拉越。我们总部位于霹雳州怡保，为怡保/近打谷提供当日快递，为马来西亚半岛提供1-3天配送。东马配送通过追踪快递或空运处理。' },
]

const STEPS = [
  { number: '1', title: '提交零件请求', items: ['提供品牌、型号和零件描述', '尽可能附上照片或尺寸', '告知机器是否当前停机'] },
  { number: '2', title: '供应确认', items: ['我们搜索多供应商网络', '包括OEM、替换件和二级经销商', '平均响应：24-48小时'] },
  { number: '3', title: '报价与交期', items: ['我们提供价格和配送选项', '空运（3-7天）vs海运（14-21天）', '如有区域库存则本地快递'] },
  { number: '4', title: '确认订单', items: ['查看报价并确认订单', '发货前付款', '提供全程追踪'] },
  { number: '5', title: '配送', items: ['配送至您在马来西亚的地点', '半岛：1-3个工作日本地快递', '东马：追踪快递或空运'] },
]

export default function ZhServicesPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'inLanguage': 'zh-Hans',
    name: '马来西亚拖拉机与船用发动机零件采购',
    provider: { '@type': 'LocalBusiness', name: 'SourceSage.ai', url: 'https://sourcesage.ai', address: { '@type': 'PostalAddress', addressLocality: 'Ipoh', addressRegion: 'Perak', addressCountry: 'MY' } },
    description: '为马来西亚农业拖拉机和船用柴油发动机提供5步零件采购服务。提交请求，24-48小时内获得供应确认，配送到马来西亚任何地点。',
    serviceType: '零件采购',
    areaServed: { '@type': 'Country', name: 'Malaysia' },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'inLanguage': 'zh-Hans',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '首页', item: 'https://sourcesage.ai/zh/' },
      { '@type': 'ListItem', position: 2, name: '服务', item: 'https://sourcesage.ai/zh/services' },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'inLanguage': 'zh-Hans',
    mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <WhatsappCTA label="zh-services-sticky" message="你好，我需要帮助采购零件。品牌：___ 型号：___ 所需零件：___" className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-5 py-3.5 rounded-full shadow-2xl font-bold text-sm flex items-center gap-2 transition-all hover:scale-105">
        <MessageCircle className="w-5 h-5" /> WhatsApp 联系我们
      </WhatsappCTA>
      <div className="min-h-screen font-sans text-slate-900 antialiased">
        <nav className="bg-white shadow-sm sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <Link href="/zh" className="flex items-center">
              <span className="font-bold text-xl text-slate-900 tracking-tight">SourceSage</span>
              <span className="text-blue-600 font-bold text-xl">.ai</span>
            </Link>
            <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
              <Link href="/zh/#brands" className="hover:text-blue-600 transition-colors">品牌</Link>
              <Link href="/zh/#marine" className="hover:text-blue-600 transition-colors">船用</Link>
              <Link href="/zh/services" className="text-blue-600 transition-colors">服务</Link>
              <Link href="/zh/about" className="hover:text-blue-600 transition-colors">关于</Link>
              <Link href="/zh/blog" className="hover:text-blue-600 transition-colors">博客</Link>
              <Link href="/zh/#request" className="hover:text-blue-600 transition-colors">提交请求</Link>
            </div>
            <div className="flex items-center gap-2">
              <WhatsappCTA label="zh-services-navbar" message="你好，我需要帮助采购零件。品牌：___ 型号：___ 所需零件：___" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg font-bold transition-all text-sm flex items-center gap-2">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </WhatsappCTA>
              <LangSwitcher currentLang="zh-Hans" />
            </div>
          </div>
        </nav>
        <div className="bg-slate-50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-slate-500">
            <Link href="/zh" className="hover:text-blue-600 transition-colors">首页</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700 font-medium">服务</span>
          </div>
        </div>
        <header className="bg-white pt-16 pb-20 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-widest mb-6">
              <Clock className="w-4 h-4" /> 快速采购，全马来西亚
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6 max-w-3xl">我们的零件采购服务如何运作</h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">5步流程，带您从「我需要这个零件」到「货已送达」——透明定价、多种配送选项，覆盖马来西亚所有州属。</p>
          </div>
        </header>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {STEPS.map((step, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all text-center">
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-lg font-black mx-auto mb-4">{step.number}</div>
                  <h3 className="font-bold text-slate-900 mb-3 text-sm">{step.title}</h3>
                  <ul className="text-xs text-slate-500 space-y-1 text-left">
                    {step.items.map((item, j) => (<li key={j} className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">·</span> {item}</li>))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">为什么选择我们的采购服务</h2>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4"><Wrench className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" /><div><strong className="text-slate-900">多品牌，非单一品牌</strong><p className="text-sm text-slate-600 mt-1">我们同时搜索所有主要农业和船用品牌 — 您无需联系多个经销商。</p></div></li>
                  <li className="flex items-start gap-4"><MapPin className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" /><div><strong className="text-slate-900">总部位于霹雳州怡保</strong><p className="text-sm text-slate-600 mt-1">本地化服务意味着更快的沟通、本地快递选项，以及对马来西亚农业和船用市场的深入了解。</p></div></li>
                  <li className="flex items-start gap-4"><Truck className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" /><div><strong className="text-slate-900">多种配送选项</strong><p className="text-sm text-slate-600 mt-1">紧急件空运（3-7天），经济件海运（14-21天），区域库存本地快递（1-3天）。</p></div></li>
                  <li className="flex items-start gap-4"><ShieldCheck className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" /><div><strong className="text-slate-900">OEM与替换件选项</strong><p className="text-sm text-slate-600 mt-1">我们提供原厂OEM和优质替换件，附带清晰的标注和保修条款。</p></div></li>
                </ul>
              </div>
              <div className="mt-12 lg:mt-0 bg-blue-50 rounded-2xl p-8 border border-blue-100">
                <h3 className="font-bold text-lg text-slate-900 mb-4">准备开始？</h3>
                <p className="text-slate-600 mb-6">发送您的零件详情。我们将在24-48小时内确认供应 — 无义务，无预付费用。</p>
                <WhatsappCTA label="zh-services-main-cta" message="你好，我需要帮助采购零件。品牌：___ 型号：___ 所需零件：___" className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3.5 rounded-xl font-bold transition-all w-full">
                  <MessageCircle className="w-5 h-5" /> 提交零件请求
                </WhatsappCTA>
              </div>
            </div>
          </div>
        </section>
        <footer className="bg-white py-12 text-slate-500 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
              <div><span className="font-black text-xl tracking-tighter text-slate-900">SourceSage</span><span className="font-black text-xl text-blue-600">.ai</span><p className="text-sm text-slate-500 mt-1">霹雳州怡保 — 马来西亚零配件采购专家</p></div>
              <div className="flex gap-6 text-sm font-semibold">
                <a href="mailto:info@sourcesage.ai" className="hover:text-blue-600 flex items-center gap-2 transition-colors"><Mail className="w-4 h-4" /> info@sourcesage.ai</a>
                <WhatsappCTA label="zh-services-footer" message="你好，我需要帮助采购零件。品牌：___ 型号：___ 所需零件：___" className="hover:text-green-600 flex items-center gap-2 transition-colors"><MessageCircle className="w-4 h-4" /> WhatsApp</WhatsappCTA>
              </div>
            </div>
            <div className="text-center pt-6 border-t border-slate-100"><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">© 2026 SourceSage.ai. 零件采购服务，马来西亚。</p></div>
          </div>
        </footer>
      </div>
    </>
  )
}
