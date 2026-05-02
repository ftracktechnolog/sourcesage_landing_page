import Link from 'next/link'
import { MessageCircle, Mail, CheckCircle, Wrench, AlertTriangle, MapPin, ShieldCheck } from 'lucide-react'
import WhatsappCTA from '../../../components/WhatsappCTA'
import LangSwitcher from '../../../components/LangSwitcher'

export const metadata = {
  title: '久保田拖拉机零件马来西亚 — 快速采购 | SourceSage',
  description: '在马来西亚需要久保田拖拉机零件？SourceSage 供应 M9000、L4400、L3408、L3608 等型号的原厂及替换零件。24小时供应确认。',
  alternates: { canonical: '/zh/kubota-tractor-parts-malaysia/', languages: { 'en': 'https://sourcesage.ai/kubota-tractor-parts-malaysia/', 'ms': 'https://sourcesage.ai/ms/kubota-tractor-parts-malaysia/', 'zh-Hans': 'https://sourcesage.ai/zh/kubota-tractor-parts-malaysia/', 'x-default': 'https://sourcesage.ai/kubota-tractor-parts-malaysia/' } },
  openGraph: {
    title: '久保田拖拉机零件马来西亚 — 快速采购 | SourceSage',
    description: '在马来西亚需要久保田拖拉机零件？SourceSage 供应 M9000、L4400、L3408、L3608 等型号的原厂及替换零件。',
    url: 'https://sourcesage.ai/zh/kubota-tractor-parts-malaysia/',
    siteName: 'SourceSage.ai', type: 'website', locale: 'zh_CN',
    images: [{ url: 'https://sourcesage.ai/images/og-home.png', width: 1200, height: 630, alt: '久保田拖拉机零件马来西亚 — SourceSage' }],
  },
  twitter: { card: 'summary_large_image', title: '久保田拖拉机零件马来西亚 — 快速采购 | SourceSage', description: '在马来西亚需要久保田拖拉机零件？SourceSage 供应原厂及替换零件。', images: ['https://sourcesage.ai/images/og-home.png'] },
}

const FAQS = [
  { q: '在马来西亚获取久保田零件需要多长时间？', a: '常见零件（滤清器、皮带、垫片、喷油嘴）对于 L3408 或 M9540 等热门型号，通常在马来西亚有现货，1-3天发货。老款型号的大修套件、缸盖和喷油泵通常需要7-14天，从日本或新加坡采购。' },
  { q: '你们供应原厂还是替换零件？', a: '两者都有。原厂久保田OEM零件具有完全可追溯性，适合保修期内的新机器。优质替换件（NPR、Tata用于发动机套件；Sparex用于拖拉机零件）经过验证，价格低30-60%。' },
  { q: '你们覆盖哪些久保田型号？', a: '我们覆盖马来西亚使用的大部分久保田拖拉机：L系列（L3408、L3608、L4400、L4508）、M系列（M9000、M9540）、B系列、老式拖拉机以及久保田收割机。' },
  { q: '能找到老款久保田拖拉机的零件吗？', a: '可以 — 老式和停产零件是我们的专长。我们的日本二级经销商网络对本地经销商不再支持的老款久保田型号非常有效。' },
  { q: '你们发货到沙巴和砂拉越吗？', a: '是的 — 我们发货到包括东马在内的马来西亚全境，通过追踪快递或紧急空运。' },
]

const SECTIONS = [
  { title: '发动机 — 核心', items: ['大修/重建套件', '活塞、环和缸套组', '气缸盖（裸）', '全套垫片', '缸盖垫（MLS）'] },
  { title: '燃油系统', items: ['喷油嘴', '喷油泵', '提升泵', '燃油滤清器', '调速器弹簧套件'] },
  { title: '冷却系统', items: ['水泵', '节温器及外壳', '散热器软管', '风扇皮带', '冷却液温度传感器'] },
  { title: '变速箱', items: ['离合器片及压盘', 'PTO离合器组', '换向密封件', '最终传动轴承', '换档拨叉'] },
  { title: '液压系统', items: ['提升泵及减压阀', '液压缸密封件', '上连杆及牵引控制', '三点连杆臂', '滤清器元件'] },
  { title: '电气系统', items: ['启动马达', '发电机', '预热塞', '机油及温度传感器', '仪表盘'] },
]

export default function ZhKubotaPage() {
  const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', 'inLanguage': 'zh-Hans', name: '久保田拖拉机零件采购马来西亚', provider: { '@type': 'LocalBusiness', name: 'SourceSage.ai', url: 'https://sourcesage.ai', areaServed: { '@type': 'Country', name: 'Malaysia' } }, description: '在马来西亚采购难以找到的久保田拖拉机零件 — L系列、M系列、B系列、老式及收割机。', serviceType: '零件采购', areaServed: [{ '@type': 'State', name: '吉打' }, { '@type': 'State', name: '霹雳' }, { '@type': 'State', name: '雪兰莪' }, { '@type': 'State', name: '柔佛' }, { '@type': 'State', name: '沙巴' }, { '@type': 'State', name: '砂拉越' }] }
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', 'inLanguage': 'zh-Hans', itemListElement: [{ '@type': 'ListItem', position: 1, name: '首页', item: 'https://sourcesage.ai/zh/' }, { '@type': 'ListItem', position: 2, name: '久保田拖拉机零件马来西亚', item: 'https://sourcesage.ai/zh/kubota-tractor-parts-malaysia' }] }
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', 'inLanguage': 'zh-Hans', mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
  const partsListSchema = { '@context': 'https://schema.org', '@type': 'ItemList', 'inLanguage': 'zh-Hans', name: '久保田零件分类', description: '久保田拖拉机零件按系统分类 — 发动机、燃油、冷却、变速箱、液压、电气。', numberOfItems: SECTIONS.length, itemListElement: SECTIONS.map((cat, i) => ({ '@type': 'ListItem', position: i + 1, item: { '@type': 'Product', name: `久保田 ${cat.title}`, description: `${cat.items.join(', ')}` } })) }
  const speakableSchema = { '@context': 'https://schema.org', '@type': 'SpeakableSpecification', 'inLanguage': 'zh-Hans', xpath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(partsListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <WhatsappCTA label="zh-kubota-sticky" message="你好，我需要久保田拖拉机零件。型号：___ 发动机代码：___ 所需零件：___" className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-5 py-3.5 rounded-full shadow-2xl font-bold text-sm flex items-center gap-2 transition-all hover:scale-105"><MessageCircle className="w-5 h-5" /> WhatsApp 联系我们</WhatsappCTA>
      <div className="min-h-screen font-sans text-slate-900 antialiased">
        <nav className="bg-white shadow-sm sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <Link href="/zh" className="flex items-center"><span className="font-heading font-bold text-xl text-accent tracking-tight">SourceSage</span><span className="font-bold text-xl text-green-600">.ai</span></Link>
            <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
              <Link href="/zh/#brands" className="hover:text-accent transition-colors">品牌</Link>
              <Link href="/zh/#marine" className="hover:text-accent transition-colors">船用</Link>
              <Link href="/zh/#how-it-works" className="hover:text-accent transition-colors">流程</Link>
              <Link href="/zh/about" className="hover:text-accent transition-colors">关于</Link>
              <Link href="/zh/blog" className="hover:text-accent transition-colors">博客</Link>
              <Link href="/zh/#request" className="hover:text-accent transition-colors">提交请求</Link>
            </div>
            <div className="flex items-center gap-2">
              <LangSwitcher currentLang="zh-Hans" />
              <WhatsappCTA label="zh-kubota-navbar" message="你好，我需要久保田拖拉机零件。型号：___ 发动机代码：___ 所需零件：___" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg font-bold transition-all text-sm flex items-center gap-2"><MessageCircle className="w-4 h-4" /> WhatsApp</WhatsappCTA>
            </div>
          </div>
        </nav>
        <div className="bg-slate-50 border-b border-slate-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-slate-500"><Link href="/zh" className="hover:text-accent transition-colors">首页</Link><span className="mx-2">/</span><span className="text-slate-700 font-medium">久保田拖拉机零件</span></div></div>
        <header className="bg-white pt-16 pb-20 border-b border-slate-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-6"><MapPin className="w-4 h-4" /> 马来西亚快速采购</div><h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6 max-w-3xl">久保田拖拉机零件在马来西亚</h1><p className="text-lg text-slate-600 max-w-2xl leading-relaxed">我们采购难以找到的久保田拖拉机零件 — 包括本地经销商不库存的零件。快速采购，24小时供应确认，发货马来西亚全境。</p></div></header>
        <section className="py-16 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><h2 className="text-2xl font-bold text-slate-900 mb-8">零件类别</h2><div className="grid grid-cols-2 md:grid-cols-3 gap-4">{SECTIONS.map(({ title, items }) => (<div key={title} className="bg-slate-50 rounded-xl p-5 border border-slate-200"><h3 className="font-bold text-slate-800 text-sm mb-3 uppercase tracking-wide">{title}</h3><ul className="space-y-1.5">{items.map((item, j) => (<li key={j} className="text-sm text-slate-600 flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0" /> {item}</li>))}</ul></div>))}</div></div></section>
        <section className="py-16 bg-slate-50 border-y border-slate-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-16 items-start"><div><h2 className="text-2xl font-bold text-slate-900 mb-6">中国客户选择SourceSage的原因</h2><ul className="space-y-4 text-sm text-slate-600"><li className="flex items-start gap-3"><ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" /><span>多品牌采购 — 非单一品牌代理商</span></li><li className="flex items-start gap-3"><MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" /><span>总部位于霹雳州怡保 — 本地化服务</span></li><li className="flex items-start gap-3"><Wrench className="w-5 h-5 text-accent shrink-0 mt-0.5" /><span>OEM + 优质替换件，价格有竞争力</span></li><li className="flex items-start gap-3"><AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" /><span>老式和停产拖拉机是我们的专长</span></li></ul></div><div className="mt-12 lg:mt-0 bg-accent/10 rounded-2xl p-8 border border-blue-100"><h3 className="font-bold text-lg text-slate-900 mb-4">需要久保田零件？</h3><p className="text-slate-600 mb-6">发送您的型号和所需零件。我们在24-48小时内确认供应。</p><WhatsappCTA label="zh-kubota-main-cta" message="你好，我需要久保田拖拉机零件。型号：___ 发动机代码：___ 所需零件：___" className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3.5 rounded-xl font-bold transition-all w-full"><MessageCircle className="w-5 h-5" /> 请求久保田零件报价</WhatsappCTA></div></div></section>
        <section className="py-16 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><h2 className="text-2xl font-bold text-slate-900 mb-8">我们支持的久保田型号</h2><div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-medium">{['L3408', 'L3608', 'L4400', 'L4508', 'M9000', 'M9540', 'B2420', 'B3030', 'V1505（发动机）', 'V2403（发动机）', '老式L系列', '联合收割机'].map(m => (<div key={m} className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-slate-700 flex items-center gap-2"><Wrench className="w-4 h-4 text-accent shrink-0" />{m}</div>))}</div></div></section>
        <footer className="bg-white py-12 text-slate-500 border-t border-slate-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8"><div><span className="font-heading font-black text-xl tracking-tighter text-accent">SourceSage</span><span className="font-black text-xl text-green-600">.ai</span><p className="text-sm text-slate-500 mt-1">霹雳州怡保 — 马来西亚零配件采购专家</p></div><div className="flex gap-6 text-sm font-semibold"><a href="mailto:info@sourcesage.ai" className="hover:text-accent flex items-center gap-2 transition-colors"><Mail className="w-4 h-4" /> info@sourcesage.ai</a><WhatsappCTA label="zh-kubota-footer" message="你好，我需要久保田拖拉机零件。型号：___ 发动机代码：___ 所需零件：___" className="hover:text-green-600 flex items-center gap-2 transition-colors"><MessageCircle className="w-4 h-4" /> WhatsApp</WhatsappCTA></div></div><div className="text-center pt-6 border-t border-slate-100"><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">© 2026 SourceSage.ai. 农业与船用零件采购，马来西亚。</p></div></div></footer>
      </div>
    </>
  )
}
