import Link from 'next/link'
import { MessageCircle, Mail, CheckCircle, Wrench, AlertTriangle, MapPin, ChevronRight, ShieldCheck } from 'lucide-react'
import WhatsappCTA from '../../../components/WhatsappCTA'
import LangSwitcher from '../../../components/LangSwitcher'

export const metadata = {
  title: '中联重科零件马来西亚 — 重型设备采购 | SourceSage',
  description: '中联重科零件供应商马来西亚。底盘零件、液压接头、发动机组件。为中联重科农业和工程机械快速采购。',
  alternates: { canonical: '/zh/zoomlion-parts-malaysia/', languages: { 'en': 'https://sourcesage.ai/zoomlion-parts-malaysia/', 'ms': 'https://sourcesage.ai/ms/zoomlion-parts-malaysia/', 'zh-Hans': 'https://sourcesage.ai/zh/zoomlion-parts-malaysia/', 'x-default': 'https://sourcesage.ai/zoomlion-parts-malaysia/' } },
  openGraph: {
    title: '中联重科零件马来西亚 — 重型设备采购 | SourceSage',
    description: '中联重科零件供应商马来西亚。底盘零件、液压接头、发动机组件。为中联重科农业和工程机械快速采购。',
    url: 'https://sourcesage.ai/zh/zoomlion-parts-malaysia/',
    siteName: 'SourceSage.ai', type: 'website', locale: 'zh_CN',
    images: [{ url: 'https://sourcesage.ai/images/og-home.png', width: 1200, height: 630, alt: '中联重科零件马来西亚 — SourceSage' }],
  },
  twitter: { card: 'summary_large_image', title: '中联重科零件马来西亚 — 重型设备采购 | SourceSage', description: '中联重科零件供应商马来西亚。底盘零件、液压接头、发动机组件。', images: ['https://sourcesage.ai/images/og-home.png'] },
}

const MACHINES = [
  { model: '中联重科RC系列', type: '水稻联合收割机', detail: 'RC50、RC60、RC70 — 广泛用于吉打和吉兰丹稻区' },
  { model: '中联重科ZP系列', type: '水稻插秧机', detail: 'ZP4、ZP6 — 在西马稻作计划中很受欢迎' },
  { model: '中联重科4LZ系列', type: '小型联合收割机', detail: '4LZ-1.0、4LZ-1.5 — 单行小农户机器' },
  { model: '中联重科履带式起重机', type: '工程机械', detail: 'ZCC系列 — 用于种植园和基础设施项目' },
  { model: '中联重科混凝土泵', type: '工程机械', detail: 'HBT和ZLJ系列 — 全国建筑工地' },
  { model: '中联重科塔式起重机', type: '工程机械', detail: 'ZTT和ZT系列 — 高层建筑施工' },
]

const PARTS = [
  { category: '联合收割机', items: ['切割刀片及刀杆', '脱粒滚筒及凹板', '谷物升运链', '传动带组', '割台传动轴'] },
  { category: '发动机及传动', items: ['柴油发动机垫片组', '燃油喷油器及泵', '发电机及起动机', '液压泵及马达', '终传动齿轮箱密封件'] },
  { category: '水稻插秧机', items: ['插秧叉及取苗器', '浮板及滑板', '秧毯进给滚筒', '传动链及链轮', '插秧凸轮'] },
  { category: '滤清器及易损件', items: ['空气滤芯', '液压回油滤清器', '机油滤清器', '燃油预滤器', '冷却液软管及卡箍'] },
  { category: '底盘', items: ['橡胶履带及钢制履带', '支重轮及托轮', '驱动链轮', '履带张紧器', '支重轮架'] },
  { category: '电气及控制', items: ['仪表盘显示单元', '收割传感器', '电磁阀', '线束', '继电器及保险丝盒'] },
]

const FAQS = [
  { q: '为什么中联重科零件在马来西亚很难找到？', a: '中联重科是中国制造商，在西马稻区以外授权经销商网络有限。许多机器由个体贸易商而非官方经销商进口，因此零件从未进入正常供应链。我们直接从中国和库存中联重科兼容零件的二级经销商处采购。' },
  { q: '采购中联重科零件需要多长时间？', a: '马来西亚有现货的零件在1-2天内发货。直接从中国采购的零件通常需要7-14个工作日空运。对于紧急机器停机情况，我们使用快递运输并在您确认前给出确定的预计到达时间。' },
  { q: '你们供应原厂中联重科零件还是售后零件？', a: '两者都有。原厂零件带有中联重科零件号和可追溯性。对于高磨损件（刀片、皮带、链条），提供优质售后替代品，通常便宜40-60%。我们会清楚标明是哪种，以便您做出选择。' },
  { q: '如果只有机器型号而没有零件号，你们能帮忙吗？', a: '可以。发送机器型号、年份以及零件描述或照片。我们的团队会对照中联重科零件图进行交叉比对，在订购前确定正确的零件。' },
  { q: '你们也覆盖中联重科工程机械吗？还是只做农业机械？', a: '都覆盖 — 农业机械（联合收割机、插秧机）和工程机械（履带式起重机、混凝土泵、塔式起重机）都在服务范围内。同时经营两类设备的种植园公司是我们的重要客户。' },
]

export default function ZhZoomlionPage() {
  const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', 'inLanguage': 'zh-Hans', name: '中联重科零件采购马来西亚', provider: { '@type': 'LocalBusiness', name: 'SourceSage.ai', url: 'https://sourcesage.ai', areaServed: { '@type': 'Country', name: 'Malaysia' } }, description: '在马来西亚采购难以找到的中联重科农业和工程机械零件。', serviceType: '零件采购', areaServed: [{ '@type': 'State', name: '吉打' }, { '@type': 'State', name: '吉兰丹' }, { '@type': 'State', name: '霹雳' }, { '@type': 'State', name: '雪兰莪' }, { '@type': 'State', name: '沙巴' }, { '@type': 'State', name: '砂拉越' }] }
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', 'inLanguage': 'zh-Hans', itemListElement: [{ '@type': 'ListItem', position: 1, name: '首页', item: 'https://sourcesage.ai/zh/' }, { '@type': 'ListItem', position: 2, name: '中联重科零件马来西亚', item: 'https://sourcesage.ai/zh/zoomlion-parts-malaysia' }] }
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', 'inLanguage': 'zh-Hans', mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
  const partsListSchema = { '@context': 'https://schema.org', '@type': 'ItemList', 'inLanguage': 'zh-Hans', name: '中联重科零件分类', description: '中联重科零件按类别分类 — 联合收割机、发动机及传动、水稻插秧机、滤清器及易损件、底盘、电气及控制。', numberOfItems: PARTS.length, itemListElement: PARTS.map((cat, i) => ({ '@type': 'ListItem', position: i + 1, item: { '@type': 'Product', name: `中联重科 ${cat.category}`, description: `${cat.items.join(', ')}` } })) }
  const speakableSchema = { '@context': 'https://schema.org', '@type': 'SpeakableSpecification', 'inLanguage': 'zh-Hans', xpath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(partsListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <WhatsappCTA label="zh-zl-sticky" message="你好，我需要中联重科零件。机器型号：___ 所需零件：___" className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-5 py-3.5 rounded-full shadow-2xl font-bold text-sm flex items-center gap-2 transition-all hover:scale-105"><MessageCircle className="w-5 h-5" /> WhatsApp 联系我们</WhatsappCTA>
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
              <WhatsappCTA label="zh-zl-navbar" message="你好，我需要中联重科零件。机器型号：___ 所需零件：___" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg font-bold transition-all text-sm flex items-center gap-2"><MessageCircle className="w-4 h-4" /> WhatsApp</WhatsappCTA>
            </div>
          </div>
        </nav>
        <div className="bg-slate-50 border-b border-slate-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-slate-500"><Link href="/zh" className="hover:text-blue-600 transition-colors">首页</Link><span className="mx-2">/</span><span className="text-slate-700 font-medium">中联重科零件马来西亚</span></div></div>
        <header className="bg-white pt-16 pb-20 border-b border-slate-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl"><div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 text-green-800 text-xs font-bold uppercase tracking-widest mb-6"><MapPin className="w-4 h-4 text-green-600" /> 农业及工程机械</div><h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">中联重科零件马来西亚<br /><span className="text-blue-600">当经销商无能为力时。我们能做到。</span></h1><p className="text-xl text-slate-600 leading-relaxed mb-8">联合收割机刀片、插秧机取苗器、液压密封件、发动机零件和电气元件，适用于中联重科农业和工程机械。从中国和本地二级经销商采购 — 快速。</p><div className="flex flex-col sm:flex-row gap-4"><Link href="/zh/#request" className="px-8 py-4 text-lg font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all text-center flex items-center justify-center gap-2">请求中联重科零件 <ChevronRight className="w-5 h-5" /></Link><WhatsappCTA label="zh-zl-hero" message="你好，我的中联重科机器停机了。机器型号：___ 所需零件：___ 位置：___" className="px-8 py-4 text-lg font-bold rounded-xl text-white bg-green-500 hover:bg-green-600 transition-all text-center flex items-center justify-center gap-2"><MessageCircle className="w-5 h-5" /> WhatsApp 联系</WhatsappCTA></div></div></div></header>
        <section className="py-16 bg-amber-50 border-y border-amber-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="flex items-start gap-5 max-w-3xl mx-auto"><AlertTriangle className="w-8 h-8 text-amber-500 shrink-0 mt-1" /><div><h2 className="text-xl font-bold text-slate-900 mb-3">马来西亚中联重科零件问题</h2><p className="text-slate-600 leading-relaxed mb-3">中联重科主要通过小型进口商和政府农业计划进入马来西亚，而非通过授权经销商网络。这意味着没有官方零件仓库，没有有保障的库存，当您的收割机在季中故障时，等待时间漫长。</p><p className="text-slate-600 leading-relaxed">我们通过直接从中国的中联重科授权供应商以及成熟的二级经销商采购来绕过这一缺口。大多数零件查询在24小时内获得确认的供应更新。</p></div></div></div></section>
        <section className="py-20 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">设备范围</h2><h3 className="text-3xl font-bold text-slate-900">我们覆盖的中联重科机器</h3></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">{MACHINES.map(m => (<div key={m.model} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all"><p className="text-xs font-black text-blue-600 uppercase tracking-widest mb-1">{m.type}</p><h4 className="text-lg font-bold text-slate-900 mb-2">{m.model}</h4><p className="text-sm text-slate-500">{m.detail}</p></div>))}</div><div className="mt-6 text-center"><p className="text-slate-500 text-sm mb-3">没有看到您的型号？</p><WhatsappCTA label="zh-zl-model-unlisted" message="你好，我需要为中联重科机器购买零件。型号：___ 年份：___ 所需零件：___" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all"><MessageCircle className="w-4 h-4" /> 询问您的型号</WhatsappCTA></div></div></section>
        <section className="py-20 bg-slate-50 border-t border-slate-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">零件目录</h2><h3 className="text-3xl font-bold text-slate-900">我们为中联重科采购的内容</h3></div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{PARTS.map(cat => (<div key={cat.category} className="bg-white rounded-2xl p-6 border border-slate-200"><h4 className="font-bold text-slate-800 text-sm uppercase tracking-wide mb-4 flex items-center gap-2"><Wrench className="w-4 h-4 text-blue-500" /> {cat.category}</h4><ul className="space-y-2">{cat.items.map(item => (<li key={item} className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0" /> {item}</li>))}</ul></div>))}</div></div></section>
        <section className="py-20 bg-slate-900 text-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-16 items-center"><div><div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-900/50 text-amber-300 text-xs font-bold uppercase tracking-widest mb-6"><AlertTriangle className="w-4 h-4" /> 收割季节优先级</div><h2 className="text-3xl font-bold mb-6">收割季节收割机故障的代价远超零件本身</h2><p className="text-slate-300 text-lg leading-relaxed mb-6">马来西亚的水稻收割窗口 — 尤其是在吉打、吉兰丹和适耕庄 — 非常紧张。联合收割机因等待切割刀片或脱粒皮带而停机3天，可能造成数千令吉的稻谷损失。</p><p className="text-slate-300 leading-relaxed mb-8">我们将机器故障情况作为紧急情况处理。通过WhatsApp发送您的型号和故障描述，我们将在几小时内给出采购时间表。可从中国空运关键零件。</p><WhatsappCTA label="zh-zl-harvest-emergency" message="你好，我的中联重科联合收割机在收割季节停机了！机器型号：___ 故障/所需零件：___ 位置：___" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3.5 rounded-xl font-bold transition-all"><MessageCircle className="w-5 h-5" /> 紧急 WhatsApp — 机器故障</WhatsappCTA></div><div className="mt-12 lg:mt-0 grid grid-cols-2 gap-4">{[{region: '吉打', note: '双季稻 — 慕达计划'},{region: '吉兰丹', note: '单季稻及混合作物'},{region: '适耕庄', note: '雪兰莪米仓'},{region: '霹雳', note: '吉辇灌溉计划'},{region: '沙巴', note: '混合农业及种植园'},{region: '砂拉越', note: '水稻及旱稻'}].map(r => (<div key={r.region} className="bg-slate-800 rounded-xl p-4 border border-slate-700"><p className="font-bold text-white text-sm mb-1">{r.region}</p><p className="text-slate-400 text-xs">{r.note}</p></div>))}</div></div></section>
        <section className="py-20 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><h3 className="text-3xl font-bold text-slate-900">为什么农民和承包商选择SourceSage</h3></div><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{[{icon: <MapPin className="w-6 h-6 text-green-500" />, title: '中国直采', body: '我们与中联重科授权的中国零件供应商建立了稳固关系。没有中间商抬高价格 — 我们每次订购都分享完整的零件号和可追溯性。'},{icon: <AlertTriangle className="w-6 h-6 text-amber-500" />, title: '机器故障分类', body: '农忙季节的机器故障被列为紧急情况处理。我们优先处理您的案例，如果海运太慢则提供空运选项，并给出确定的预计到达时间 — 而不是"我们尽力而为。"'},{icon: <ShieldCheck className="w-6 h-6 text-blue-500" />, title: '技术识别', body: '没有零件号？没问题。发送损坏的零件或机器铭牌照片。我们的团队对照中联重科零件图进行交叉比对，找到正确的零件。'}].map(card => (<div key={card.title} className="bg-slate-50 rounded-2xl p-8 border border-slate-100"><div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-5 shadow-sm">{card.icon}</div><h3 className="font-bold text-slate-900 text-lg mb-3">{card.title}</h3><p className="text-slate-600 leading-relaxed">{card.body}</p></div>))}</div></div></section>
        <section className="py-20 bg-slate-50 border-t border-slate-100"><div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><h2 className="text-3xl font-bold text-slate-900">常见问题</h2></div><div className="space-y-6">{FAQS.map(faq => (<div key={faq.q} className="bg-white rounded-2xl p-7 border border-slate-200"><h3 className="font-bold text-slate-900 mb-3">{faq.q}</h3><p className="text-slate-600 leading-relaxed">{faq.a}</p></div>))}</div></div></section>
        <section className="py-20 bg-blue-600 text-white"><div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h2 className="text-3xl font-bold mb-4">现在需要中联重科零件？</h2><p className="text-blue-100 text-lg mb-8">告诉我们您的机器型号和所需零件。我们将在24小时内确认供应情况和价格。</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><Link href="/zh/#request" className="px-8 py-4 text-lg font-bold rounded-xl bg-white text-blue-700 hover:bg-blue-50 transition-all text-center">提交零件请求</Link><WhatsappCTA label="zh-zl-final-cta" message="你好，我急需中联重科零件。机器型号：___ 所需零件：___ 位置：___" className="px-8 py-4 text-lg font-bold rounded-xl bg-green-500 hover:bg-green-600 text-white transition-all flex items-center justify-center gap-2"><MessageCircle className="w-5 h-5" /> WhatsApp 联系团队</WhatsappCTA></div></div></section>
        <footer className="bg-white py-12 text-slate-500 border-t border-slate-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8"><div><span className="font-black text-xl tracking-tighter text-slate-900">SourceSage</span><span className="font-black text-xl text-blue-600">.ai</span><p className="text-sm text-slate-500 mt-1">霹雳州怡保 — 马来西亚零配件采购专家</p></div><div className="flex gap-6 text-sm font-semibold"><a href="mailto:info@sourcesage.ai" className="hover:text-blue-600 flex items-center gap-2 transition-colors"><Mail className="w-4 h-4" /> info@sourcesage.ai</a><WhatsappCTA label="zh-zl-footer" message="你好，我需要中联重科零件。机器型号：___ 所需零件：___" className="hover:text-green-600 flex items-center gap-2 transition-colors"><MessageCircle className="w-4 h-4" /> WhatsApp</WhatsappCTA></div></div><div className="text-center pt-6 border-t border-slate-100"><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">© 2026 SourceSage.ai. 农业与船用零件采购，马来西亚。</p></div></div></footer>
      </div>
    </>
  )
}
