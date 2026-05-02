import Link from 'next/link'
import { MessageCircle, Mail, CheckCircle, Wrench, AlertTriangle, MapPin, ChevronRight, ShieldCheck } from 'lucide-react'
import WhatsappCTA from '../../../components/WhatsappCTA'
import LangSwitcher from '../../../components/LangSwitcher'

export const metadata = {
  title: '麦赛福格森零件马来西亚 — 珀金斯发动机零件采购 | SourceSage',
  description: '马来西亚麦赛福格森拖拉机零件供应商。变速箱密封件、转向部件、MF型号发动机零件。当独家经销商缺货时进行采购。',
  alternates: { canonical: '/zh/massey-ferguson-parts-malaysia/', languages: { 'en': 'https://sourcesage.ai/massey-ferguson-parts-malaysia/', 'ms': 'https://sourcesage.ai/ms/massey-ferguson-parts-malaysia/', 'zh-Hans': 'https://sourcesage.ai/zh/massey-ferguson-parts-malaysia/', 'x-default': 'https://sourcesage.ai/massey-ferguson-parts-malaysia/' } },
  openGraph: {
    title: '麦赛福格森零件马来西亚 — 珀金斯发动机零件采购 | SourceSage',
    description: '马来西亚麦赛福格森拖拉机零件供应商。变速箱密封件、转向部件、MF型号发动机零件。当独家经销商缺货时进行采购。',
    url: 'https://sourcesage.ai/zh/massey-ferguson-parts-malaysia/',
    siteName: 'SourceSage.ai', type: 'website', locale: 'zh_CN',
    images: [{ url: 'https://sourcesage.ai/images/og-home.png', width: 1200, height: 630, alt: '麦赛福格森零件马来西亚 — SourceSage' }],
  },
  twitter: { card: 'summary_large_image', title: '麦赛福格森零件马来西亚 — 珀金斯发动机零件采购 | SourceSage', description: '马来西亚麦赛福格森拖拉机零件供应商。变速箱密封件、转向部件、MF型号发动机零件。', images: ['https://sourcesage.ai/images/og-home.png'] },
}

const MODELS = [
  { model: 'MF 240', engine: 'Perkins A4.248 / AD3.152', note: '马来西亚稻田和种植园最常见的MF型号' },
  { model: 'MF 350', engine: 'Perkins A4.248', note: '中型主力机型，广泛分布于吉打和霹雳' },
  { model: 'MF 375', engine: 'Perkins A4.248 / AD4.203', note: '受欢迎的种植园拖拉机' },
  { model: 'MF 385', engine: 'Perkins AD4.203 Turbo', note: '重型种植园及行播作物用途' },
  { model: 'MF 390', engine: 'Perkins AD4.203 Turbo', note: '出口型号，在东马占有重要地位' },
  { model: 'MF 135 / MF 165', engine: 'Perkins AD3.152', note: '经典型号 — 零件越来越稀少' },
]

const PARTS = [
  { category: '珀金斯发动机', items: ['全套大修/重建套件', '气缸盖（裸装或组装）', '喷油嘴及喷油泵', '水泵及节温器', '缸盖垫片及全套垫片组'] },
  { category: '变速箱', items: ['离合器片及压盘', 'PTO轴密封件及轴承', '换档拨叉', '终传动油封', '差速锁组件'] },
  { category: '液压系统', items: ['提升臂及油缸密封件', '液压泵', '上拉杆及牵引控制零件', '滤芯及O型圈', '溢流阀'] },
  { category: '转向及车桥', items: ['转向油缸密封件', '主销及衬套套件', '前桥枢轴销', '轮毂轴承组', '横拉杆端头'] },
  { category: '电气系统', items: ['起动机（12V）', '发电机', '预热塞（AD系列）', '温度及机油压力传感器', '仪表盘'] },
  { category: '滤清器及保养', items: ['发动机机油滤清器', '燃油滤清器（一级和二级）', '空气滤清器及预滤器', '液压回油滤清器', '珀金斯发动机皮带'] },
]

const FAQS = [
  { q: '为什么麦赛福格森零件在马来西亚很难找到？', a: 'AGCO（MF母公司）在马来西亚的授权经销商网络相比久保田或洋马有限。许多MF拖拉机在1980年代至2000年代通过农业计划销售，零件供应链从未完全建立。现有的经销商通常专注于新型号，不备有老款MF240或MF135机器的零件。' },
  { q: '我的MF拖拉机使用哪种珀金斯发动机？', a: 'MF240和MF350最常用Perkins A4.248（自然吸气，4缸）。MF375和MF385通常使用AD4.203（涡轮增压）。MF135使用AD3.152（3缸）。始终从发动机铭牌确认 — 一些出口市场的MF拖拉机使用不同的发动机变体。' },
  { q: '你们能为非常老的MF拖拉机（MF135、MF165）采购零件吗？', a: '可以，这些在服务范围内。经典MF机器中使用的Perkins AD3.152和A4.212拥有庞大的售后市场生态系统。这些发动机的大修套件、气缸盖和喷油泵都可以采购到 — 尽管可能需要从英国或印度发货，交货周期较长。' },
  { q: '采购需要多长时间？', a: '常见的MF240/MF350零件（滤清器、密封件、离合器）通常在马来西亚有现货，1-3天发货。老款型号的发动机大修套件和喷油泵通常需要7-14天，从英国、印度或新加坡采购。我们在您确认前会确认供货情况和预计到货时间。' },
  { q: '你们供应原厂AGCO零件还是售后零件？', a: '两者都有。原厂AGCO/珀金斯零件具有完全可追溯性。来自知名品牌（Sparex、David Brown Tractor Parts等效产品、印度制造的珀金斯套件）的优质售后零件会明确标注，成本大幅降低。许多马来西亚维修厂完全使用优质售后零件，效果出色。' },
]

export default function ZhMasseyFergusonPage() {
  const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', 'inLanguage': 'zh-Hans', name: '麦赛福格森零件采购马来西亚', provider: { '@type': 'LocalBusiness', name: 'SourceSage.ai', url: 'https://sourcesage.ai', areaServed: { '@type': 'Country', name: 'Malaysia' } }, description: '在马来西亚采购难以找到的配备珀金斯发动机的麦赛福格森拖拉机零件。', serviceType: '零件采购', areaServed: [{ '@type': 'State', name: '吉打' }, { '@type': 'State', name: '吉兰丹' }, { '@type': 'State', name: '霹雳' }, { '@type': 'State', name: '雪兰莪' }, { '@type': 'State', name: '柔佛' }, { '@type': 'State', name: '沙巴' }, { '@type': 'State', name: '砂拉越' }] }
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', 'inLanguage': 'zh-Hans', itemListElement: [{ '@type': 'ListItem', position: 1, name: '首页', item: 'https://sourcesage.ai/zh/' }, { '@type': 'ListItem', position: 2, name: '麦赛福格森零件马来西亚', item: 'https://sourcesage.ai/zh/massey-ferguson-parts-malaysia' }] }
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', 'inLanguage': 'zh-Hans', mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
  const partsListSchema = { '@context': 'https://schema.org', '@type': 'ItemList', 'inLanguage': 'zh-Hans', name: '麦赛福格森零件分类', description: '麦赛福格森拖拉机零件按系统分类 — 珀金斯发动机、变速箱、液压系统、转向及车桥、电气系统、滤清器及保养。', numberOfItems: PARTS.length, itemListElement: PARTS.map((cat, i) => ({ '@type': 'ListItem', position: i + 1, item: { '@type': 'Product', name: `麦赛福格森 ${cat.category}`, description: `${cat.items.join(', ')}` } })) }
  const speakableSchema = { '@context': 'https://schema.org', '@type': 'SpeakableSpecification', 'inLanguage': 'zh-Hans', xpath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(partsListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <WhatsappCTA label="zh-mf-sticky" message="你好，我需要麦赛福格森零件。拖拉机型号：___ 所需零件：___" className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-5 py-3.5 rounded-full shadow-2xl font-bold text-sm flex items-center gap-2 transition-all hover:scale-105"><MessageCircle className="w-5 h-5" /> WhatsApp 联系我们</WhatsappCTA>
      <div className="min-h-screen font-sans text-slate-900 antialiased">
        <nav className="bg-white shadow-sm sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <Link href="/zh" className="flex items-center"><span className="font-bold text-xl text-slate-900 tracking-tight">SourceSage</span><span className="text-blue-600 font-bold text-xl">.ai</span></Link>
            <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
              <Link href="/zh/#brands" className="hover:text-blue-600 transition-colors">品牌</Link>
              <Link href="/zh/#marine" className="hover:text-blue-600 transition-colors">船用</Link>
              <Link href="/zh/#how-it-works" className="hover:text-blue-600 transition-colors">流程</Link>
              <Link href="/zh/about" className="hover:text-blue-600 transition-colors">关于</Link>
              <Link href="/zh/blog" className="hover:text-blue-600 transition-colors">博客</Link>
              <Link href="/zh/#request" className="hover:text-blue-600 transition-colors">提交请求</Link>
            </div>
            <div className="flex items-center gap-2">
              <LangSwitcher currentLang="zh-Hans" />
              <WhatsappCTA label="zh-mf-navbar" message="你好，我需要麦赛福格森零件。拖拉机型号：___ 所需零件：___" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg font-bold transition-all text-sm flex items-center gap-2"><MessageCircle className="w-4 h-4" /> WhatsApp</WhatsappCTA>
            </div>
          </div>
        </nav>
        <div className="bg-slate-50 border-b border-slate-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-slate-500"><Link href="/zh" className="hover:text-blue-600 transition-colors">首页</Link><span className="mx-2">/</span><span className="text-slate-700 font-medium">麦赛福格森零件马来西亚</span></div></div>
        <header className="bg-white pt-16 pb-20 border-b border-slate-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl"><div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-red-800 text-xs font-bold uppercase tracking-widest mb-6"><MapPin className="w-4 h-4 text-red-600" /> 珀金斯动力拖拉机 — 马来西亚</div><h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">麦赛福格森零件马来西亚<br /><span className="text-blue-600">珀金斯发动机零件。难以找到。快速采购。</span></h1><p className="text-xl text-slate-600 leading-relaxed mb-8">为MF240、MF350、MF375、MF385及经典MF拖拉机提供大修套件、喷油泵、离合器总成、液压密封件和珀金斯发动机零件。当本地AGCO经销商无法提供帮助时，我们来找到它。</p><div className="flex flex-col sm:flex-row gap-4"><Link href="/zh/#request" className="px-8 py-4 text-lg font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all text-center flex items-center justify-center gap-2">请求MF零件 <ChevronRight className="w-5 h-5" /></Link><WhatsappCTA label="zh-mf-hero" message="你好，我的麦赛福格森拖拉机需要零件。型号：___ 所需零件：___" className="px-8 py-4 text-lg font-bold rounded-xl text-white bg-green-500 hover:bg-green-600 transition-all text-center flex items-center justify-center gap-2"><MessageCircle className="w-5 h-5" /> WhatsApp 联系</WhatsappCTA></div></div></div></header>
        <section className="py-20 bg-slate-50"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">覆盖型号</h2><h3 className="text-3xl font-bold text-slate-900">我们支持的麦赛福格森拖拉机</h3><p className="mt-4 text-slate-600 max-w-2xl mx-auto">从普及的MF240到经典老款车型 — 只要是麦赛福格森或搭载珀金斯发动机的，我们都能采购到零件。</p></div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">{MODELS.map(m => (<div key={m.model} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all"><h4 className="text-xl font-bold text-slate-900 mb-1">{m.model}</h4><p className="text-xs font-semibold text-blue-600 mb-3">{m.engine}</p><p className="text-sm text-slate-500">{m.note}</p></div>))}</div><div className="mt-8 text-center"><p className="text-slate-500 text-sm mb-3">没有看到您的型号？</p><WhatsappCTA label="zh-mf-model-unlisted" message="你好，我需要为我的麦赛福格森拖拉机购买零件。型号：___ 年份：___ 所需零件：___" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all"><MessageCircle className="w-4 h-4" /> 询问您的型号</WhatsappCTA></div></div></section>
        <section className="py-16 bg-amber-50 border-y border-amber-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="flex items-start gap-5 max-w-3xl mx-auto"><Wrench className="w-8 h-8 text-amber-600 shrink-0 mt-1" /><div><h2 className="text-xl font-bold text-slate-900 mb-3">这实际上是珀金斯零件的问题</h2><p className="text-slate-600 leading-relaxed mb-3">马来西亚的大多数麦赛福格森拖拉机使用珀金斯发动机 — AD3.152、A4.248或AD4.203。这些是制造精良的发动机，拥有庞大的全球售后市场，但马来西亚的授权珀金斯零件渠道除了工业经销商外非常薄弱。</p><p className="text-slate-600 leading-relaxed">我们通过英国来源、印度制造和原厂渠道采购珀金斯发动机零件。拖拉机侧部件（离合器、液压系统、车桥）和珀金斯发动机内部零件都在我们的服务范围内。</p></div></div></div></section>
        <section className="py-20 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">零件目录</h2><h3 className="text-3xl font-bold text-slate-900">我们为麦赛福格森采购的内容</h3></div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{PARTS.map(cat => (<div key={cat.category} className="bg-slate-50 rounded-2xl p-6 border border-slate-100"><h4 className="font-bold text-slate-800 text-sm uppercase tracking-wide mb-4 flex items-center gap-2"><Wrench className="w-4 h-4 text-blue-500" /> {cat.category}</h4><ul className="space-y-2">{cat.items.map(item => (<li key={item} className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0" /> {item}</li>))}</ul></div>))}</div></div></section>
        <section className="py-20 bg-slate-900 text-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><h2 className="text-3xl font-bold">为什么维修厂为MF零件选择SourceSage</h2></div><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{[{icon: <ShieldCheck className="w-6 h-6 text-blue-400" />, title: '经典型号专业知识', body: 'MF135和MF240已有数十年历史。我们知道哪些珀金斯发动机变体被安装到哪些出口市场的MF型号上，以及哪些售后套件真正兼容，哪些标记错误。'},{icon: <AlertTriangle className="w-6 h-6 text-amber-400" />, title: '故障优先处理', body: '拖拉机在种植或收割季节停工造成的损失远超零件本身。我们优先处理紧急故障，提供空运选项，并给出确切的预计到货时间 — 而不是"下周再查。"'},{icon: <MapPin className="w-6 h-6 text-green-400" />, title: '马来西亚全境配送', body: '覆盖西马和东马。可追踪快递，WhatsApp实时更新。从英国或印度采购的零件在7-14个工作日内到达；本地现货当天或次日发货。'}].map(card => (<div key={card.title} className="bg-slate-800 rounded-2xl p-8 border border-slate-700"><div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center mb-5">{card.icon}</div><h3 className="font-bold text-white text-lg mb-3">{card.title}</h3><p className="text-slate-300 leading-relaxed">{card.body}</p></div>))}</div></div></section>
        <section className="py-20 bg-slate-50 border-t border-slate-100"><div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><h2 className="text-3xl font-bold text-slate-900">常见问题</h2></div><div className="space-y-6">{FAQS.map(faq => (<div key={faq.q} className="bg-white rounded-2xl p-7 border border-slate-200"><h3 className="font-bold text-slate-900 mb-3">{faq.q}</h3><p className="text-slate-600 leading-relaxed">{faq.a}</p></div>))}</div></div></section>
        <section className="py-20 bg-blue-600 text-white"><div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h2 className="text-3xl font-bold mb-4">现在需要麦赛福格森零件？</h2><p className="text-blue-100 text-lg mb-8">告诉我们您的拖拉机型号和所需零件。我们将在24小时内确认供应情况和价格。</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><Link href="/zh/#request" className="px-8 py-4 text-lg font-bold rounded-xl bg-white text-blue-700 hover:bg-blue-50 transition-all text-center">提交零件请求</Link><WhatsappCTA label="zh-mf-final-cta" message="你好，我急需麦赛福格森零件。型号：___ 所需零件：___" className="px-8 py-4 text-lg font-bold rounded-xl bg-green-500 hover:bg-green-600 text-white transition-all flex items-center justify-center gap-2"><MessageCircle className="w-5 h-5" /> WhatsApp 联系团队</WhatsappCTA></div></div></section>
        <footer className="bg-white py-12 text-slate-500 border-t border-slate-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8"><div><span className="font-black text-xl tracking-tighter text-slate-900">SourceSage</span><span className="font-black text-xl text-blue-600">.ai</span><p className="text-sm text-slate-500 mt-1">霹雳州怡保 — 马来西亚零配件采购专家</p></div><div className="flex gap-6 text-sm font-semibold"><a href="mailto:info@sourcesage.ai" className="hover:text-blue-600 flex items-center gap-2 transition-colors"><Mail className="w-4 h-4" /> info@sourcesage.ai</a><WhatsappCTA label="zh-mf-footer" message="你好，我需要麦赛福格森零件。拖拉机型号：___ 所需零件：___" className="hover:text-green-600 flex items-center gap-2 transition-colors"><MessageCircle className="w-4 h-4" /> WhatsApp</WhatsappCTA></div></div><div className="text-center pt-6 border-t border-slate-100"><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">© 2026 SourceSage.ai. 农业与船用零件采购，马来西亚。</p></div></div></footer>
      </div>
    </>
  )
}
