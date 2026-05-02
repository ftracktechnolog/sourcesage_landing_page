import Link from 'next/link'
import { MessageCircle, Mail, CheckCircle, Wrench, AlertTriangle, MapPin, ChevronRight, ShieldCheck } from 'lucide-react'
import WhatsappCTA from '../../../components/WhatsappCTA'
import LangSwitcher from '../../../components/LangSwitcher'

export const metadata = {
  title: '珀金斯发动机零件马来西亚 — 1104、1000系列采购 | SourceSage',
  description: '马来西亚珀金斯发动机零件。气缸盖、燃油泵、冷却系统零件，适用于珀金斯1104及其他系列。支持停产及现款型号。',
  alternates: { canonical: '/zh/perkins-engine-parts-malaysia/', languages: { 'en': 'https://sourcesage.ai/perkins-engine-parts-malaysia/', 'ms': 'https://sourcesage.ai/ms/perkins-engine-parts-malaysia/', 'zh-Hans': 'https://sourcesage.ai/zh/perkins-engine-parts-malaysia/', 'x-default': 'https://sourcesage.ai/perkins-engine-parts-malaysia/' } },
  openGraph: {
    title: '珀金斯发动机零件马来西亚 — 1104、1000系列采购 | SourceSage',
    description: '马来西亚珀金斯发动机零件。气缸盖、燃油泵、冷却系统零件，适用于珀金斯1104及其他系列。',
    url: 'https://sourcesage.ai/zh/perkins-engine-parts-malaysia/',
    siteName: 'SourceSage.ai', type: 'website', locale: 'zh_CN',
    images: [{ url: 'https://sourcesage.ai/images/og-home.png', width: 1200, height: 630, alt: '珀金斯发动机零件马来西亚 — SourceSage' }],
  },
  twitter: { card: 'summary_large_image', title: '珀金斯发动机零件马来西亚 — 1104、1000系列采购 | SourceSage', description: '马来西亚珀金斯发动机零件。气缸盖、燃油泵、冷却系统零件。', images: ['https://sourcesage.ai/images/og-home.png'] },
}

const ENGINES = [
  { model: 'Perkins A3.152 / AD3.152', displacement: '2.5L 3缸', note: '经典 MF135、MF148、MF165 — 广泛用于马来西亚老旧庄园' },
  { model: 'Perkins A4.248', displacement: '4.1L 4缸', note: 'MF240、MF350、MF375 — 当今马来西亚最常见的珀金斯' },
  { model: 'Perkins AD4.203', displacement: '3.3L 4缸涡轮', note: 'MF385、MF390 — 种植园和重型应用' },
  { model: 'Perkins 1004-4 / 1004-4T', displacement: '4.4L 4缸', note: 'MF6100系列、JCB 3CX/4CX、各种工程设备' },
  { model: 'Perkins 1006-6', displacement: '6.6L 6缸', note: '大型MF和Landini拖拉机、工业应用' },
  { model: 'Perkins 403 / 404 系列', displacement: '1.5–2.2L 3/4缸', note: '紧凑型设备：JCB迷你型、卡特彼勒滑移装载机、发电机' },
]

const MACHINES = [
  { brand: 'Massey Ferguson', models: 'MF135, MF165, MF240, MF350, MF375, MF385, MF390, MF6110–6160' },
  { brand: 'JCB', models: '3CX, 4CX挖掘装载机; 525, 535伸缩臂叉车; 8025–8085迷你挖掘机' },
  { brand: 'Landini', models: 'Globus, Mistral, Powerfarm系列 — 共用A4.248和1004发动机' },
  { brand: 'Caterpillar', models: '部分滑移装载机和紧凑型履带装载机（403/404系列）' },
  { brand: 'Manitou', models: 'MT523, MT625伸缩臂叉车（1004系列）' },
  { brand: '工业 / 发电机', models: 'FG Wilson, Olympian, Newage发电机 — 403至1006系列' },
]

const PARTS = [
  {
    category: '发动机大修',
    items: ['全套大修/原位大修套件', '气缸盖（裸装或组装）', '缸盖垫片及全套垫片组', '活塞和缸套套件', '主轴承和连杆轴承组'],
  },
  {
    category: '燃油系统',
    items: ['喷油嘴（CAV / Lucas / Delphi）', '喷油泵（CAV DPA / DPS）', '提升泵和燃油滤清器', '燃油管和管接头', '油门和调速器连杆'],
  },
  {
    category: '冷却系统',
    items: ['完整水泵', '节温器及外壳', '上下散热器软管', '风扇皮带和张紧器', '散热器芯（重新加工服务）'],
  },
  {
    category: '润滑系统',
    items: ['完整机油泵', '机油泄压阀', '机油滤清器（旋装式）', '油底壳垫片和摇臂盖垫片', '曲轴前后油封'],
  },
  {
    category: '气门机构',
    items: ['进气和排气门', '气门弹簧和锁夹', '凸轮轴及挺杆', '摇臂和摇臂轴总成', '正时齿轮和盖密封件'],
  },
  {
    category: '电气与启动',
    items: ['启动马达（12V/24V）', '发电机和调节器', '预热塞（间接喷射型号）', '温度和机油压力传感器', '停机电磁铁（CAV泵）'],
  },
]

const FAQS = [
  {
    q: '我的Massey Ferguson拖拉机用的是哪款珀金斯发动机？',
    a: '最常见：MF240/350/375使用A4.248（自然吸气4缸）；MF385/390使用AD4.203（涡轮增压）。老款MF135/165使用A3.152/AD3.152（3缸）。请通过读取缸体上的发动机序列号牌确认 — 它会显示发动机系列代码。',
  },
  {
    q: '老款型号（A4.248、AD3.152）的珀金斯零件在马来西亚还能买到吗？',
    a: '可以，尽管通过MF经销商的供应对于超过15年的机器会减少。A4.248拥有庞大的全球装机量 — 零件可通过OEM兼容制造商和珀金斯售后网络的专业供应商获得，价格通常低于经销商定价。',
  },
  {
    q: 'CAV DPA和DPS喷油泵有什么区别？',
    a: '两者都是CAV（现为Delphi）制造的旋转分配泵。DPA是A3.152和A4.248发动机上的旧设计；DPS是1004系列上的较新、更紧凑的设计。它们不可互换。务必通过泵体上 stamped 的泵序列号进行识别。',
  },
  {
    q: '您能为非MF机器（JCB、发电机）采购珀金斯零件吗？',
    a: '可以。珀金斯发动机零件是发动机特定的，而非机器特定的。用于JCB 3CX的1004-4大修套件与用于MF6110的相同。我们根据发动机型号和序列号采购，无论主机是什么。',
  },
  {
    q: '如何识别我的珀金斯发动机型号？',
    a: '发动机序列号牌 stamped 在缸体上，通常在机油滤清器附近的左侧。它显示发动机系列（例如A4.248）、制造清单号和序列号。制造清单号对于识别确切规格至关重要 — 特别是对于燃油系统和排放变体。',
  },
]

const jsonLd = {
  service: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'inLanguage': 'zh-Hans',
    name: '珀金斯发动机零件采购马来西亚',
    serviceType: '柴油发动机零件供应',
    description: '在马来西亚采购珀金斯柴油发动机零件 — A3.152、A4.248、AD4.203、1004和403系列，适用于Massey Ferguson、JCB及其他珀金斯动力设备。',
    provider: { '@type': 'Organization', name: 'SourceSage.ai', url: 'https://sourcesage.ai' },
    areaServed: { '@type': 'Country', name: 'Malaysia' },
    offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', priceCurrency: 'MYR' },
  },
  faq: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'inLanguage': 'zh-Hans',
    mainEntity: FAQS.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  },
  breadcrumb: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'inLanguage': 'zh-Hans',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '首页', item: 'https://sourcesage.ai/zh/' },
      { '@type': 'ListItem', position: 2, name: '珀金斯发动机零件马来西亚', item: 'https://sourcesage.ai/zh/perkins-engine-parts-malaysia' },
    ],
  },
}

export default function ZhPerkinsPartsPage() {
  const partsListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'inLanguage': 'zh-Hans',
    name: '珀金斯零件分类',
    description: '珀金斯柴油发动机零件按系统分类 — 发动机大修、燃油系统、冷却、润滑、气门机构、电气与启动。',
    numberOfItems: PARTS.length,
    itemListElement: PARTS.map((cat, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Product',
        name: `珀金斯 ${cat.category}`,
        description: `${cat.items.join(', ')}`,
      },
    })),
  }

  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'SpeakableSpecification',
    'inLanguage': 'zh-Hans',
    xpath: ["/html/head/title", "/html/head/meta[@name='description']/@content"],
  }

  return (
    <div className="min-h-screen font-sans text-slate-900 antialiased">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(partsListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/zh" className="flex items-center">
            <span className="font-bold text-xl text-slate-900 tracking-tight">SourceSage</span>
            <span className="text-blue-600 font-bold text-xl">.ai</span>
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
            <Link href="/zh/#brands" className="hover:text-blue-600 transition-colors">品牌</Link>
            <Link href="/zh/#marine" className="hover:text-blue-600 transition-colors">船用</Link>
            <Link href="/zh/#how-it-works" className="hover:text-blue-600 transition-colors">流程</Link>
            <Link href="/zh/about" className="hover:text-blue-600 transition-colors">关于</Link>
            <Link href="/zh/blog" className="hover:text-blue-600 transition-colors">博客</Link>
            <Link href="/zh/#request" className="hover:text-blue-600 transition-colors">提交请求</Link>
          </div>
          <LangSwitcher currentLang="zh-Hans" />
          <WhatsappCTA
            label="zh-perkins-navbar"
            message="你好，我需要帮助采购珀金斯发动机零件。发动机型号：___ 机器：___ 所需零件：___"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg font-bold transition-all text-sm flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </WhatsappCTA>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav className="flex items-center gap-2 text-xs text-slate-400 font-medium">
          <Link href="/zh" className="hover:text-blue-600 transition-colors">首页</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-600">珀金斯发动机零件马来西亚</span>
        </nav>
      </div>

      <main>
        <section className="bg-gradient-to-br from-amber-900 via-amber-800 to-orange-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-block bg-amber-400 text-amber-900 text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
                珀金斯发动机零件专家 — 马来西亚
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
                珀金斯柴油发动机零件<br />在马来西亚
              </h1>
              <p className="text-lg text-amber-100 mb-8 leading-relaxed">
                在马来西亚采购珀金斯发动机零件 — A3.152、A4.248、AD4.203、1004和403系列。适用于Massey Ferguson拖拉机、JCB设备、发电机及所有珀金斯动力机械。原厂和OEM兼容。快速响应。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsappCTA
                  label="zh-perkins-hero-primary"
                  message="你好，我需要帮助采购珀金斯发动机零件。发动机型号：___ 机器：___ 所需零件：___"
                  className="bg-amber-400 hover:bg-amber-300 text-amber-900 px-8 py-4 rounded-xl font-black text-lg transition-all flex items-center gap-3 justify-center"
                >
                  <MessageCircle className="w-6 h-6" /> 申请零件
                </WhatsappCTA>
                <a
                  href="#engines"
                  className="border-2 border-amber-300 text-amber-100 hover:bg-amber-800 px-8 py-4 rounded-xl font-bold text-lg transition-all text-center"
                >
                  查看发动机系列
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white border-b border-slate-100 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { label: '响应时间', value: '< 24小时' },
                { label: '发动机系列', value: 'A3 · A4 · AD4 · 1004 · 403' },
                { label: '覆盖范围', value: '半岛 + 东马' },
                { label: '来源', value: '原厂及OEM兼容' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <div className="text-xl font-black text-amber-700">{value}</div>
                  <div className="text-xs text-slate-500 font-semibold mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="engines" className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-2 text-xs font-bold uppercase tracking-widest text-amber-700">发动机系列</div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">我们采购零件的珀金斯发动机</h2>
            <p className="text-slate-500 mb-10 max-w-2xl">
              从经典Massey Ferguson拖拉机中的A3.152到JCB和工程设备中的现代1004系列 — 我们覆盖马来西亚常见的全系列珀金斯发动机。
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {ENGINES.map(({ model, displacement, note }) => (
                <div key={model} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                  <div className="font-black text-lg text-slate-900 mb-1">{model}</div>
                  <div className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-2">{displacement}</div>
                  <p className="text-slate-500 text-sm">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-2 text-xs font-bold uppercase tracking-widest text-amber-700">主机设备</div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">珀金斯驱动的不只是Massey Ferguson</h2>
            <p className="text-slate-500 mb-10 max-w-2xl">
              珀金斯是全球最大的OEM柴油发动机供应商之一。一旦您知道发动机型号和序列号，无论安装在哪种机器上，我们都能采购到零件。
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {MACHINES.map(({ brand, models }) => (
                <div key={brand} className="bg-slate-50 rounded-2xl border border-slate-100 p-6">
                  <div className="font-bold text-slate-900 mb-2">{brand}</div>
                  <p className="text-slate-500 text-sm leading-relaxed">{models}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-2 text-xs font-bold uppercase tracking-widest text-amber-700">零件目录</div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">我们采购什么</h2>
            <p className="text-slate-500 mb-10 max-w-2xl">
              从发动机全面大修到单个消耗品 — 喷油嘴、CAV泵套件、冷却组件和电气零件，涵盖所有珀金斯系列。
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PARTS.map(({ category, items }) => (
                <div key={category} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <Wrench className="w-4 h-4 text-amber-700" />
                    <h3 className="font-bold text-slate-900">{category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {items.map(item => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-amber-50 border-y border-amber-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">CAV / Lucas / Delphi — 同一油泵，不同名称</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    大多数A系列和1004珀金斯发动机上的旋转喷油泵由CAV制造 — 后来成为Lucas CAV，再后来成为Delphi。油泵在三个品牌中是相同的；只有维修文档发生了变化。订购油泵修理套件、泵头和转子组或电磁铁时，任何这些品牌参考都能找到正确的零件。
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    除了发动机型号外，务必通过泵体上 stamped 的泵序列号识别油泵 — DPA和DPS设计的内部结构不同，不可互换。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-amber-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-2 text-xs font-bold uppercase tracking-widest text-amber-300">沙巴 &amp; 砂拉越</div>
            <h2 className="text-3xl font-extrabold mb-4">东马覆盖范围</h2>
            <p className="text-amber-100 mb-8 max-w-2xl">
              珀金斯动力的Massey Ferguson拖拉机和JCB设备在沙巴和砂拉越的油棕种植园很常见。我们发货到所有东马主要城市 — 相同的采购网络，相同的响应时间。
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
              {['亚庇', '山打根', '斗湖', '古晋', '美里', '诗巫'].map(city => (
                <div key={city} className="flex items-center gap-2 bg-amber-800 rounded-xl px-3 py-2.5">
                  <MapPin className="w-3 h-3 text-amber-300 flex-shrink-0" />
                  <span className="text-sm font-semibold text-amber-100">{city}</span>
                </div>
              ))}
            </div>
            <WhatsappCTA
              label="zh-perkins-east-malaysia"
              message="你好，我需要珀金斯发动机零件 — 我在东马（沙巴/砂拉越）。发动机：___ 机器：___ 所需零件：___"
              className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-amber-900 px-8 py-4 rounded-xl font-black text-base transition-all"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp 咨询东马业务
            </WhatsappCTA>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-2 text-xs font-bold uppercase tracking-widest text-amber-700">为什么选我们</div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-10">为什么用户选择 SourceSage 购买珀金斯零件</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <ShieldCheck className="w-6 h-6 text-amber-600" />,
                  title: '珀金斯目录知识',
                  body: 'A4.248和1004共享一些零件号但在关键尺寸上有所不同。我们交叉参考制造清单号 — 而不仅仅是发动机系列代码 — 以确保您获得适合您特定发动机变体的零件。',
                },
                {
                  icon: <Wrench className="w-6 h-6 text-amber-600" />,
                  title: 'CAV / Delphi 喷射系统专长',
                  body: '喷油泵修理套件、泵头和转子组以及电磁铁是我们最常见的珀金斯咨询。我们库存或可以快速采购所有常见A系列和1004系列应用的DPA和DPS泵组件。',
                },
                {
                  icon: <MessageCircle className="w-6 h-6 text-amber-600" />,
                  title: '机器无关采购',
                  body: '无论您的珀金斯发动机在MF拖拉机、JCB挖掘装载机、发电机组还是Manitou搬运车中 — 发动机就是发动机。我们根据发动机序列号而非机器品牌进行采购。',
                },
              ].map(({ icon, title, body }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">{icon}</div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-2 text-xs font-bold uppercase tracking-widest text-amber-700">常见问题</div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-10">常见问题</h2>
            <div className="space-y-6">
              {FAQS.map(({ q, a }) => (
                <div key={q} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-3">{q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/zh/massey-ferguson-parts-malaysia"
              className="flex items-center justify-between bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:bg-slate-100 transition-colors group"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-1">相关页面</p>
                <p className="text-slate-800 font-bold text-lg group-hover:text-amber-700 transition-colors">
                  查看Massey Ferguson拖拉机零件 →
                </p>
              </div>
              <span className="bg-amber-600 group-hover:bg-amber-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all whitespace-nowrap ml-4">
                查看零件
              </span>
            </Link>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-amber-900 to-orange-900 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">需要珀金斯发动机零件？</h2>
            <p className="text-amber-100 text-lg mb-8">
              告诉我们发动机型号、序列号和您需要的零件。我们将在24小时内回复供应情况和价格。
            </p>
            <WhatsappCTA
              label="zh-perkins-final-cta"
              message="你好，我需要帮助采购珀金斯发动机零件。发动机型号：___ 序列号：___ 机器：___ 所需零件：___"
              className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-amber-900 px-10 py-5 rounded-2xl font-black text-xl transition-all"
            >
              <MessageCircle className="w-7 h-7" /> 立即 WhatsApp 联系我们
            </WhatsappCTA>
            <p className="text-amber-300 text-sm mt-6">或电邮：info@sourcesage.ai</p>
          </div>
        </section>
      </main>

      <footer className="bg-white py-12 text-slate-500 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <span className="font-black text-xl tracking-tighter text-slate-900">SourceSage</span>
              <span className="font-black text-xl text-blue-600">.ai</span>
              <p className="text-sm text-slate-500 mt-1">马来西亚零配件采购专家</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">零件页面</p>
              <ul className="space-y-2 text-sm font-semibold">
                <li><Link href="/zh/kubota-tractor-parts-malaysia" className="hover:text-blue-600 transition-colors">久保田拖拉机零件</Link></li>
                <li><Link href="/zh/yanmar-marine-parts-malaysia" className="hover:text-blue-600 transition-colors">洋马船用零件</Link></li>
                <li><Link href="/zh/massey-ferguson-parts-malaysia" className="hover:text-blue-600 transition-colors">Massey Ferguson 零件</Link></li>
                <li><Link href="/zh/zoomlion-parts-malaysia" className="hover:text-blue-600 transition-colors">中联重科零件</Link></li>
                <li><Link href="/zh/john-deere-parts-malaysia" className="hover:text-blue-600 transition-colors">约翰迪尔零件</Link></li>
                <li><Link href="/zh/perkins-engine-parts-malaysia" className="hover:text-blue-600 transition-colors">珀金斯发动机零件</Link></li>
              </ul>
            </div>
            <div className="flex flex-col gap-3 text-sm font-semibold">
              <a href="mailto:info@sourcesage.ai" className="hover:text-blue-600 flex items-center gap-2 transition-colors">
                <Mail className="w-4 h-4" /> info@sourcesage.ai
              </a>
              <WhatsappCTA label="zh-perkins-footer" message="你好，我需要帮助采购零件。品牌：___ 型号：___ 所需零件：___" className="hover:text-green-600 flex items-center gap-2 transition-colors">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </WhatsappCTA>
            </div>
          </div>
          <div className="text-center pt-6 border-t border-slate-100">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">© 2026 SourceSage.ai. 农业与船用零件采购，马来西亚。</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
