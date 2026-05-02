import Link from 'next/link'
import { MessageCircle, Mail, CheckCircle, Wrench, AlertTriangle, MapPin, ChevronRight, ShieldCheck } from 'lucide-react'
import WhatsappCTA from '../../../components/WhatsappCTA'
import LangSwitcher from '../../../components/LangSwitcher'

export const metadata = {
  title: '约翰迪尔拖拉机零件马来西亚 — 5E、5310和6J系列 | SourceSage',
  description: '约翰迪尔拖拉机零件马来西亚。液压密封件、电气元件、发动机零件。多供应商采购网络，提供本地经销商不库存的零件。',
  alternates: { canonical: '/zh/john-deere-parts-malaysia/', languages: { 'en': 'https://sourcesage.ai/john-deere-parts-malaysia/', 'ms': 'https://sourcesage.ai/ms/john-deere-parts-malaysia/', 'zh-Hans': 'https://sourcesage.ai/zh/john-deere-parts-malaysia/', 'x-default': 'https://sourcesage.ai/john-deere-parts-malaysia/' } },
  openGraph: {
    title: '约翰迪尔拖拉机零件马来西亚 — 5E、5310和6J系列 | SourceSage',
    description: '约翰迪尔拖拉机零件马来西亚。液压密封件、电气元件、发动机零件。多供应商采购网络，提供本地经销商不库存的零件。',
    url: 'https://sourcesage.ai/zh/john-deere-parts-malaysia/',
    siteName: 'SourceSage.ai', type: 'website', locale: 'zh_CN',
    images: [{ url: 'https://sourcesage.ai/images/og-home.png', width: 1200, height: 630, alt: '约翰迪尔拖拉机零件马来西亚 — SourceSage' }],
  },
  twitter: { card: 'summary_large_image', title: '约翰迪尔拖拉机零件马来西亚 — 5E、5310和6J系列 | SourceSage', description: '约翰迪尔拖拉机零件马来西亚。液压密封件、电气元件、发动机零件。', images: ['https://sourcesage.ai/images/og-home.png'] },
}

const MODELS = [
  { model: 'John Deere 5075E', engine: 'JD PowerTech 3.4L 4缸', note: '马来西亚稻田中最受欢迎的现代JD型号' },
  { model: 'John Deere 5310', engine: 'JD 3029D / 3029T 3.0L', note: '广泛用于吉打、吉兰丹的稻田庄园' },
  { model: 'John Deere 5055E', engine: 'JD PowerTech 3.4L 4缸', note: '入门级实用型，常见于小农户农场' },
  { model: 'John Deere 6110J / 6115J', engine: 'JD PowerTech 6.8L 6缸', note: '种植园和大型庄园的主力机型' },
  { model: 'John Deere 5403 / 5415', engine: 'JD 3029D', note: '保有量大的老款型号' },
  { model: 'JD 2WD 经典 (4020, 4040)', engine: '各种JD发动机', note: '仍在老庄园中运行的老式设备' },
]

const PARTS = [
  { category: '发动机（PowerTech / 3029）', items: ['全套大修/重建套件', '气缸盖及缸盖垫片组', '喷油嘴（Stanadyne / Bosch）', '水泵及节温器', '正时齿轮组及凸轮轴'] },
  { category: '变速箱及PTO', items: ['离合器片及压盘', 'PTO轴密封件及轴承', '同步环及换档拨叉', '终传动密封件及轴承', '差速锁组件'] },
  { category: '液压系统（开式中心）', items: ['液压泵', '提升油缸密封件及活塞', '控制阀O型圈套件', '液压滤清器及滤网', '遥控接头密封件'] },
  { category: '转向及前桥', items: ['转向油缸修复套件', '主销及衬套组', '前轮轮毂轴承', '横拉杆端头及球头', '转向机密封件'] },
  { category: '电气及仪表', items: ['起动机（12V）', '发电机及调节器', '预热塞（6伏型）', '温度及机油压力传感器', '仪表盘及仪表'] },
  { category: '滤清器及保养件', items: ['发动机机油滤清器（JD规格）', '燃油滤清器（一级和二级）', '空气滤芯及预滤器', '液压/变速箱滤清器', '散热器软管及皮带'] },
]

const FAQS = [
  { q: '你们提供原厂约翰迪尔零件还是售后零件？', a: '我们两者都提供 — 关键传动系统组件通过授权渠道提供原厂约翰迪尔零件，消耗品和易损件提供OEM兼容的售后零件（如Stanadyne、Bosch）。我们会为每个零件需求讨论选项和价格。' },
  { q: '我的约翰迪尔经销商说零件已停产。你们能帮忙吗？', a: '可以。对于5310和5403等老款型号，我们从日本的二级市场和专业拆解商那里采购。在马来西亚正式停产的零件通常可以通过这些渠道找到。' },
  { q: '你们支持哪些约翰迪尔型号？', a: '主要是马来西亚常见的5E和6J系列，以及较旧的5310、5403和5415型号。对于老式设备（4020、4040），我们逐案评估供应情况。' },
  { q: '你们能多快交货？', a: '对于库存商品，西马通常1-3个工作日，东马3-5天。从日本或中国采购的商品需要10-21天。我们会在您确认前确认交货周期。' },
  { q: '我能发送损坏零件的照片而不是零件号吗？', a: '完全可以。清晰的照片 — 正面、背面，放一把尺子或硬币作为参照 — 通常可以让我们在几小时内识别出组件并匹配到零件号。' },
]

export default function ZhJohnDeerePage() {
  const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', 'inLanguage': 'zh-Hans', name: '约翰迪尔拖拉机零件采购马来西亚', serviceType: '农业机械零件供应', description: '在马来西亚采购难以找到的约翰迪尔拖拉机零件 — 5E、6J、5310系列及老款型号。', provider: { '@type': 'Organization', name: 'SourceSage.ai', url: 'https://sourcesage.ai' }, areaServed: { '@type': 'Country', name: 'Malaysia' }, offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', priceCurrency: 'MYR' } }
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', 'inLanguage': 'zh-Hans', itemListElement: [{ '@type': 'ListItem', position: 1, name: '首页', item: 'https://sourcesage.ai/zh/' }, { '@type': 'ListItem', position: 2, name: '约翰迪尔零件马来西亚', item: 'https://sourcesage.ai/zh/john-deere-parts-malaysia' }] }
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', 'inLanguage': 'zh-Hans', mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
  const partsListSchema = { '@context': 'https://schema.org', '@type': 'ItemList', 'inLanguage': 'zh-Hans', name: '约翰迪尔零件分类', description: '约翰迪尔拖拉机零件按系统分类 — 发动机、变速箱、液压系统、转向及前桥、电气及仪表、滤清器及保养件。', numberOfItems: PARTS.length, itemListElement: PARTS.map((cat, i) => ({ '@type': 'ListItem', position: i + 1, item: { '@type': 'Product', name: `约翰迪尔 ${cat.category}`, description: `${cat.items.join(', ')}` } })) }
  const speakableSchema = { '@context': 'https://schema.org', '@type': 'SpeakableSpecification', 'inLanguage': 'zh-Hans', xpath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(partsListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <WhatsappCTA label="zh-jd-sticky" message="你好，我需要约翰迪尔拖拉机零件。型号：___ 所需零件：___" className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-5 py-3.5 rounded-full shadow-2xl font-bold text-sm flex items-center gap-2 transition-all hover:scale-105"><MessageCircle className="w-5 h-5" /> WhatsApp 联系我们</WhatsappCTA>
      <div className="min-h-screen font-sans text-slate-900 antialiased">
        <nav className="bg-white shadow-sm sticky top-0 z-50">
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
              <WhatsappCTA label="zh-jd-navbar" message="你好，我需要约翰迪尔拖拉机零件。型号：___ 所需零件：___" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg font-bold transition-all text-sm flex items-center gap-2"><MessageCircle className="w-4 h-4" /> WhatsApp</WhatsappCTA>
              <LangSwitcher currentLang="zh-Hans" />
            </div>
          </div>
        </nav>
        <div className="bg-slate-50 border-b border-slate-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-slate-500"><Link href="/zh" className="hover:text-blue-600 transition-colors">首页</Link><span className="mx-2">/</span><span className="text-slate-700 font-medium">约翰迪尔零件马来西亚</span></div></div>
        <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl"><div className="inline-block bg-yellow-400 text-green-900 text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">约翰迪尔零件专家 — 马来西亚</div><h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">约翰迪尔拖拉机零件<br />在马来西亚</h1><p className="text-lg text-green-100 mb-8 leading-relaxed">在马来西亚半岛和东马采购难以找到的约翰迪尔零件 — 5E和6J系列、较旧的5310和5403型号以及老式设备。原厂和OEM兼容。快速响应，有竞争力的价格。</p><div className="flex flex-col sm:flex-row gap-4"><WhatsappCTA label="zh-jd-hero-primary" message="你好，我需要约翰迪尔拖拉机零件。型号：___ 所需零件：___" className="bg-yellow-400 hover:bg-yellow-300 text-green-900 px-8 py-4 rounded-xl font-black text-lg transition-all flex items-center gap-3 justify-center"><MessageCircle className="w-6 h-6" /> 请求零件</WhatsappCTA><a href="#models" className="border-2 border-green-300 text-green-100 hover:bg-green-700 px-8 py-4 rounded-xl font-bold text-lg transition-all text-center">查看支持的型号</a></div></div></div></section>
        <section className="bg-white border-b border-slate-100 py-6"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">{[{label: '响应时间', value: '< 24小时'},{label: '覆盖型号', value: '5E, 6J, 5310, 5403+'},{label: '覆盖范围', value: '西马 + 东马'},{label: '来源', value: '原厂和OEM兼容'}].map(({ label, value }) => (<div key={label}><div className="text-xl font-black text-green-700">{value}</div><div className="text-xs text-slate-500 font-semibold mt-1">{label}</div></div>))}</div></div></section>
        <section id="models" className="py-16 bg-slate-50"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="mb-2 text-xs font-bold uppercase tracking-widest text-green-700">支持的型号</div><h2 className="text-3xl font-extrabold text-slate-900 mb-4">我们采购零件的约翰迪尔型号</h2><p className="text-slate-500 mb-10 max-w-2xl">5E和5310系列主导马来西亚稻田；6J常见于大型庄园。我们也支持经销商零件供应已经减少的老款型号。</p><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{MODELS.map(({ model, engine, note }) => (<div key={model} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm"><div className="font-black text-lg text-slate-900 mb-1">{model}</div><div className="text-xs font-bold text-green-700 uppercase tracking-wide mb-2">{engine}</div><p className="text-slate-500 text-sm">{note}</p></div>))}</div><p className="mt-6 text-sm text-slate-400 italic">没有看到您的型号？联系我们 — 我们评估所有约翰迪尔农业设备的供应情况。</p></div></section>
        <section className="py-16 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="mb-2 text-xs font-bold uppercase tracking-widest text-green-700">零件目录</div><h2 className="text-3xl font-extrabold text-slate-900 mb-4">我们采购的内容</h2><p className="text-slate-500 mb-10 max-w-2xl">从PowerTech和3029发动机的大修套件到液压密封件和电气元件 — 我们覆盖全面的维护和维修范围。</p><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{PARTS.map(({ category, items }) => (<div key={category} className="bg-slate-50 rounded-2xl p-6 border border-slate-100"><div className="flex items-center gap-2 mb-4"><Wrench className="w-4 h-4 text-green-700" /><h3 className="font-bold text-slate-900">{category}</h3></div><ul className="space-y-2">{items.map(item => (<li key={item} className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />{item}</li>))}</ul></div>))}</div></div></section>
        <section className="py-12 bg-yellow-50 border-y border-yellow-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl"><div className="flex items-start gap-4"><AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" /><div><h3 className="font-bold text-slate-900 text-lg mb-2">订购前了解您的JD发动机代码</h3><p className="text-slate-600 text-sm leading-relaxed mb-4">约翰迪尔在其拖拉机系列中使用多种发动机系列：较旧的5310和5403型号使用<strong>3029D/T</strong>（3.0L 3缸），5055E和5075E使用<strong>PowerTech 3.4L</strong>（3029DF/TF）。这些共享一些零件，但喷油器、大修套件和气缸盖是型号特定的。提供发动机序列号 — 位于交流发电机附近的缸体上 — 可确保您获得正确的零件。</p><p className="text-slate-600 text-sm leading-relaxed">6J系列使用<strong>6.8L PowerTech 6缸</strong>（6068）发动机。该发动机的零件完全不同，不应与4缸机组交叉订购。</p></div></div></div></div></section>
        <section className="py-16 bg-green-900 text-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="mb-2 text-xs font-bold uppercase tracking-widest text-green-300">沙巴和砂拉越</div><h2 className="text-3xl font-extrabold mb-4">我们也覆盖东马</h2><p className="text-green-100 mb-8 max-w-2xl">约翰迪尔设备在沙巴和砂拉越的油棕和稻田庄园中很常见。我们发货到亚庇、山打根、斗湖、古晋、美里和诗巫 — 同样的采购网络，同样的响应时间。</p><div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">{['亚庇', '山打根', '斗湖', '古晋', '美里', '诗巫'].map(city => (<div key={city} className="flex items-center gap-2 bg-green-800 rounded-xl px-3 py-2.5"><MapPin className="w-3 h-3 text-green-300 flex-shrink-0" /><span className="text-sm font-semibold text-green-100">{city}</span></div>))}</div><WhatsappCTA label="zh-jd-east-malaysia" message="你好，我需要约翰迪尔拖拉机零件 — 我在东马（沙巴/砂拉越）。型号：___ 所需零件：___" className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-green-900 px-8 py-4 rounded-xl font-black text-base transition-all"><MessageCircle className="w-5 h-5" /> WhatsApp 联系东马业务</WhatsappCTA></div></section>
        <section className="py-16 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="mb-2 text-xs font-bold uppercase tracking-widest text-green-700">为什么选择我们</div><h2 className="text-3xl font-extrabold text-slate-900 mb-10">为什么马来西亚运营商选择SourceSage</h2><div className="grid md:grid-cols-3 gap-8">{[{icon: <ShieldCheck className="w-6 h-6 text-green-600" />, title: '超越经销商网络', body: '当授权经销商说"停产"或报价6周的交货周期时，我们前往日本的二级市场、台湾的OEM兼容工厂和本地拆解商寻找您需要的零件。'},{icon: <Wrench className="w-6 h-6 text-green-600" />, title: '发动机代码专业知识', body: '我们知道3029D和3029TF之间的区别，以及为什么这对您的喷油器订单很重要。正确的识别可以防止昂贵的退货和停机时间。'},{icon: <MessageCircle className="w-6 h-6 text-green-600" />, title: '快速WhatsApp响应', body: '发送零件号、照片或仅描述故障。我们回复供货情况和价格 — 通常在24小时内，经常当天回复。'}].map(({ icon, title, body }) => (<div key={title} className="flex gap-4"><div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">{icon}</div><div><h3 className="font-bold text-slate-900 mb-2">{title}</h3><p className="text-slate-500 text-sm leading-relaxed">{body}</p></div></div>))}</div></div></section>
        <section className="py-16 bg-slate-50"><div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"><div className="mb-2 text-xs font-bold uppercase tracking-widest text-green-700">常见问题</div><h2 className="text-3xl font-extrabold text-slate-900 mb-10">常见问题</h2><div className="space-y-6">{FAQS.map(({ q, a }) => (<div key={q} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm"><h3 className="font-bold text-slate-900 mb-3">{q}</h3><p className="text-slate-600 text-sm leading-relaxed">{a}</p></div>))}</div></div></section>
        <section className="py-20 bg-gradient-to-br from-green-900 to-green-800 text-white"><div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h2 className="text-3xl sm:text-4xl font-extrabold mb-4">需要约翰迪尔零件？</h2><p className="text-green-100 text-lg mb-8">告诉我们型号和您需要的零件。我们将在24小时内回复供应情况和价格。</p><WhatsappCTA label="zh-jd-final-cta" message="你好，我需要约翰迪尔拖拉机零件。型号：___ 序列号：___ 所需零件：___" className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-green-900 px-10 py-5 rounded-2xl font-black text-xl transition-all"><MessageCircle className="w-7 h-7" /> WhatsApp 联系我们</WhatsappCTA><p className="text-green-300 text-sm mt-6">或电邮：info@sourcesage.ai</p></div></section>
        <footer className="bg-white py-12 text-slate-500 border-t border-slate-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8"><div><span className="font-black text-xl tracking-tighter text-slate-900">SourceSage</span><span className="font-black text-xl text-blue-600">.ai</span><p className="text-sm text-slate-500 mt-1">霹雳州怡保 — 马来西亚零配件采购专家</p></div><div className="flex gap-6 text-sm font-semibold"><a href="mailto:info@sourcesage.ai" className="hover:text-blue-600 flex items-center gap-2 transition-colors"><Mail className="w-4 h-4" /> info@sourcesage.ai</a><WhatsappCTA label="zh-jd-footer" message="你好，我需要约翰迪尔拖拉机零件。型号：___ 所需零件：___" className="hover:text-green-600 flex items-center gap-2 transition-colors"><MessageCircle className="w-4 h-4" /> WhatsApp</WhatsappCTA></div></div><div className="text-center pt-6 border-t border-slate-100"><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">© 2026 SourceSage.ai. 农业与船用零件采购，马来西亚。</p></div></div></footer>
      </div>
    </>
  )
}
