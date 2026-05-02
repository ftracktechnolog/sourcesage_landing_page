import Link from 'next/link'
import { MessageCircle, Mail, CheckCircle, Wrench, AlertTriangle, MapPin, ChevronRight, ShieldCheck } from 'lucide-react'
import WhatsappCTA from '../../../components/WhatsappCTA'
import LangSwitcher from '../../../components/LangSwitcher'

export const metadata = {
  title: '洋马船用发动机零件马来西亚 — 难寻零件专家 | SourceSage',
  description: '马来西亚洋马船用发动机零件。1GM、2GM、3GM、3JH、4JH 和 6LY 系列。燃油喷射器、垫片、气缸盖等。紧急订单可提供空运。',
  alternates: { canonical: '/zh/yanmar-marine-parts-malaysia/', languages: { 'en': 'https://sourcesage.ai/yanmar-marine-parts-malaysia/', 'ms': 'https://sourcesage.ai/ms/yanmar-marine-parts-malaysia/', 'zh-Hans': 'https://sourcesage.ai/zh/yanmar-marine-parts-malaysia/', 'x-default': 'https://sourcesage.ai/yanmar-marine-parts-malaysia/' } },
  openGraph: {
    title: '洋马船用发动机零件马来西亚 — 难寻零件专家 | SourceSage',
    description: '马来西亚洋马船用发动机零件。1GM、2GM、3GM、3JH、4JH 和 6LY 系列。燃油喷射器、垫片、气缸盖等。',
    url: 'https://sourcesage.ai/zh/yanmar-marine-parts-malaysia/',
    siteName: 'SourceSage.ai', type: 'website', locale: 'zh_CN',
    images: [{ url: 'https://sourcesage.ai/images/og-home.png', width: 1200, height: 630, alt: '洋马船用发动机零件马来西亚 — SourceSage' }],
  },
  twitter: { card: 'summary_large_image', title: '洋马船用发动机零件马来西亚 — 难寻零件专家 | SourceSage', description: '马来西亚洋马船用发动机零件。1GM、2GM、3GM、3JH、4JH 和 6LY 系列。', images: ['https://sourcesage.ai/images/og-home.png'] },
}

const MODELS = [
  { series: '1GM10', hp: '9 hp', use: '帆船、小艇' },
  { series: '2GM20', hp: '18 hp', use: '帆船、小型工作船' },
  { series: '3GM30', hp: '27 hp', use: '中型帆船' },
  { series: '3JH5', hp: '39 hp', use: '渔船、巡逻艇' },
  { series: '4JH4', hp: '54 hp', use: '商业工作船、渡轮' },
  { series: '4JH45', hp: '45 hp', use: '渔船、交通艇' },
  { series: '6LY3', hp: '315 hp', use: '高速巡逻艇、大型船舶' },
]

const PARTS = [
  { category: '冷却系统', items: ['海水泵叶轮', '热交换器', '节温器及外壳', '淡水泵', '锌阳极'] },
  { category: '燃油系统', items: ['喷油嘴', '喷油泵', '燃油滤清器元件', '提升泵', '放气螺钉'] },
  { category: '发动机密封件', items: ['全套垫片组', '缸盖垫片', '曲轴油封', '气门杆油封', 'O型圈套件'] },
  { category: '电气系统', items: ['发电机', '启动马达', '预热塞', '传感器（温度/机油）', '线束'] },
  { category: '传动系统', items: ['龙骨冷却器', '轴封（PSS）', '齿轮箱油封', '联轴器弹性盘', '发动机支架'] },
  { category: '维修套件', items: ['大修套件', '小型维修套件', '皮带和软管套件', '滤清器服务包', '锌块组'] },
]

const FAQS = [
  {
    q: '在马来西亚获取洋马船用零件需要多长时间？',
    a: '对于常见系列（3JH、4JH、2GM），我们通常在24小时内确认供应情况。马来西亚库存的零件当天或次日发货。从日本采购的零件通常5-10个工作日到达。紧急情况优先处理。',
  },
  {
    q: '你们供应洋马原厂零件还是替换零件？',
    a: '两种都供应。原厂零件具有完整的洋马可追溯性。优质替换零件（用于叶轮、滤清器、锌块等磨损件）会明确标识，成本低30-50%。由您选择。',
  },
  {
    q: '可以发货到沙巴和砂拉越吗？',
    a: '可以 — 东马是我们的核心市场。亚庇、山打根、美里和古晋的渔船队和潜水运营商在当地库存商缺货时经常依赖我们。我们使用可靠的可追踪快递。',
  },
  {
    q: '我的洋马序列号磨损了，还能识别零件吗？',
    a: '可以。请发送发动机、零件和任何可见标记的照片。我们的团队通常可以通过铸造编号、尺寸或船舶登记记录进行交叉参考。',
  },
  {
    q: '你们有洋马舷外驱动零件吗？',
    a: '有的 — SD50、SD60 和 SD20 在我们的服务范围内。波纹管、密封件、螺旋桨轴油封和支腿油封是我们经常满足的常见需求。',
  },
]

export default function ZhYanmarMarinePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'inLanguage': 'zh-Hans',
    name: '洋马船用发动机零件采购马来西亚',
    provider: {
      '@type': 'LocalBusiness',
      name: 'SourceSage.ai',
      url: 'https://sourcesage.ai',
      areaServed: { '@type': 'Country', name: 'Malaysia' },
    },
    description: '在马来西亚（包括沙巴和砂拉越）采购难以找到的洋马船用柴油发动机零件。',
    serviceType: '零件采购',
    areaServed: [
      { '@type': 'State', name: 'Sabah' },
      { '@type': 'State', name: 'Sarawak' },
      { '@type': 'State', name: 'Selangor' },
      { '@type': 'State', name: 'Johor' },
      { '@type': 'State', name: 'Perak' },
      { '@type': 'State', name: 'Kedah' },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'inLanguage': 'zh-Hans',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '首页', item: 'https://sourcesage.ai/zh/' },
      { '@type': 'ListItem', position: 2, name: '洋马船用发动机零件马来西亚', item: 'https://sourcesage.ai/zh/yanmar-marine-parts-malaysia' },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'inLanguage': 'zh-Hans',
    mainEntity: FAQS.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const partsListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'inLanguage': 'zh-Hans',
    name: '洋马船用零件分类',
    description: '洋马船用发动机零件按系统分类 — 冷却、燃油、发动机密封、电气、传动、维修套件。',
    numberOfItems: PARTS.length,
    itemListElement: PARTS.map((cat, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Product',
        name: `洋马船用 ${cat.category}`,
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
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(partsListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <WhatsappCTA
        label="zh-yanmar-sticky"
        message="你好，我需要洋马船用发动机零件。发动机型号：___ 所需零件：___"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-5 py-3.5 rounded-full shadow-2xl font-bold text-sm flex items-center gap-2 transition-all hover:scale-105"
      >
        <MessageCircle className="w-5 h-5" /> WhatsApp 联系我们
      </WhatsappCTA>

      <div className="min-h-screen font-sans text-slate-900 antialiased">
        <nav className="bg-white shadow-sm sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <Link href="/zh" className="flex items-center">
              <span className="font-bold text-xl text-slate-900 tracking-tight">SourceSage</span>
              <span className="text-accent font-bold text-xl">.ai</span>
            </Link>
            <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
              <Link href="/zh/#brands" className="hover:text-accent transition-colors">品牌</Link>
              <Link href="/zh/#marine" className="hover:text-accent transition-colors">船用</Link>
              <Link href="/zh/#how-it-works" className="hover:text-accent transition-colors">流程</Link>
              <Link href="/zh/about" className="hover:text-accent transition-colors">关于</Link>
              <Link href="/zh/blog" className="hover:text-accent transition-colors">博客</Link>
              <Link href="/zh/#request" className="hover:text-accent transition-colors">提交请求</Link>
            </div>
            <LangSwitcher currentLang="zh-Hans" />
            <WhatsappCTA
              label="zh-yanmar-navbar"
              message="你好，我需要洋马船用发动机零件。发动机型号：___ 所需零件：___"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg font-bold transition-all text-sm flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </WhatsappCTA>
          </div>
        </nav>

        <div className="bg-slate-50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-slate-500">
            <Link href="/zh" className="hover:text-accent transition-colors">首页</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700 font-medium">洋马船用发动机零件马来西亚</span>
          </div>
        </div>

        <header className="bg-white pt-16 pb-20 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-6">
                <MapPin className="w-4 h-4 text-accent" /> 马来西亚 — 半岛、沙巴和砂拉越
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                洋马船用发动机零件<br />
                <span className="text-accent">难寻。快速采购。</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                为洋马 1GM、2GM、3GM、3JH、4JH 和 6LY 系列发动机提供喷油器、叶轮、热交换器、垫片组和大修套件。当本地经销商缺货时，我们帮您找到。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/zh/#request"
                  className="px-8 py-4 text-lg font-bold rounded-xl text-white bg-accent hover:bg-accent-light shadow-xl shadow-accent/20 transition-all text-center flex items-center justify-center gap-2"
                >
                  申请洋马零件 <ChevronRight className="w-5 h-5" />
                </Link>
                <WhatsappCTA
                  label="zh-yanmar-hero"
                  message="你好，我的洋马发动机故障。发动机型号：___ 所需零件：___ 船舶位置：___"
                  className="px-8 py-4 text-lg font-bold rounded-xl text-white bg-green-500 hover:bg-green-600 transition-all text-center flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" /> 立即 WhatsApp
                </WhatsappCTA>
              </div>
            </div>
          </div>
        </header>

        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-sm font-black text-accent uppercase tracking-[0.3em] mb-4">发动机系列</h2>
              <h3 className="text-3xl font-bold text-slate-900">我们覆盖的洋马型号</h3>
              <p className="mt-4 text-slate-600 max-w-2xl mx-auto">从单缸帆船辅机到高输出商用柴油机 — 只要带有洋马标志，我们就能采购到零件。</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {MODELS.map(m => (
                <div key={m.series} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-accent/40 hover:shadow-md transition-all">
                  <p className="text-xs font-black text-accent uppercase tracking-widest mb-1">{m.hp}</p>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">洋马 {m.series}</h4>
                  <p className="text-sm text-slate-500">{m.use}</p>
                </div>
              ))}
              <div className="bg-accent rounded-2xl p-6 text-white flex flex-col justify-between">
                <p className="text-sm font-semibold mb-3">找不到您的型号？</p>
                <WhatsappCTA
                  label="zh-yanmar-model-not-listed"
                  message="你好，我需要洋马发动机零件。型号：___ 所需零件：___"
                  className="inline-flex items-center gap-2 bg-white text-accent px-4 py-2.5 rounded-xl font-bold text-sm transition-all hover:bg-accent/10"
                >
                  <MessageCircle className="w-4 h-4" /> 咨询我们
                </WhatsappCTA>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-sm font-black text-accent uppercase tracking-[0.3em] mb-4">零件目录</h2>
              <h3 className="text-3xl font-bold text-slate-900">我们为洋马船用发动机采购的零件</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PARTS.map(cat => (
                <div key={cat.category} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wide mb-4 flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-accent" /> {cat.category}
                  </h4>
                  <ul className="space-y-2">
                    {cat.items.map(item => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/80 text-accent/40 text-xs font-bold uppercase tracking-widest mb-6">
                  <MapPin className="w-4 h-4" /> 东马覆盖范围
                </div>
                <h2 className="text-3xl font-bold mb-6">服务沙巴和砂拉越渔船队</h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  亚庇、山打根、斗湖、美里、诗巫和古晋的船主面临一个现实问题：以半岛为中心的经销商很少库存老款洋马发动机的零件，而运输延误让您损失捕鱼天数。
                </p>
                <p className="text-slate-300 leading-relaxed mb-8">
                  我们将东马视为优先市场。确认库存的零件在24小时内发货。日本采购的零件在5-10个工作日内到达。我们使用马来语、英语和中文沟通。
                </p>
                <WhatsappCTA
                  label="zh-yanmar-east-malaysia"
                  message="你好，我在沙巴/砂拉越，急需洋马船用零件。发动机：___ 零件：___ 位置：___"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3.5 rounded-xl font-bold transition-all"
                >
                  <MessageCircle className="w-5 h-5" /> WhatsApp 咨询东马业务
                </WhatsappCTA>
              </div>
              <div className="mt-12 lg:mt-0 grid grid-cols-2 gap-4">
                {[
                  { city: '亚庇', type: '渔船队和潜水运营商' },
                  { city: '山打根', type: '商业渔业、水产养殖' },
                  { city: '斗湖', type: '棕榈油驳船发动机' },
                  { city: '美里', type: '海上支援船' },
                  { city: '诗巫', type: '河渡轮和长船' },
                  { city: '古晋', type: '游艇和工作船' },
                ].map(loc => (
                  <div key={loc.city} className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                    <p className="font-bold text-white text-sm mb-1">{loc.city}</p>
                    <p className="text-slate-400 text-xs">{loc.type}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">船主选择 SourceSage 的原因</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <AlertTriangle className="w-6 h-6 text-amber-500" />,
                  title: '停机优先处理',
                  body: '船舶停运意味着收入损失。我们优先处理停机案例，并在几小时内（而非几天）为您提供确认的时间表。',
                },
                {
                  icon: <ShieldCheck className="w-6 h-6 text-accent" />,
                  title: '原厂与优质替换件',
                  body: '我们采购正品洋马原厂零件和明确标注的优质替换件。没有灰色市场惊喜。',
                },
                {
                  icon: <MapPin className="w-6 h-6 text-green-500" />,
                  title: '全马配送',
                  body: '覆盖半岛和东马。可追踪快递，每个阶段通过 WhatsApp 更新，让您确切知道零件何时到达。',
                },
              ].map(card => (
                <div key={card.title} className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                  <div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-5 shadow-sm">
                    {card.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-3">{card.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50 border-t border-slate-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">常见问题</h2>
            </div>
            <div className="space-y-6">
              {FAQS.map(faq => (
                <div key={faq.q} className="bg-white rounded-2xl p-7 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-3">{faq.q}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-accent text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">现在需要洋马零件？</h2>
            <p className="text-blue-100 text-lg mb-8">告诉我们您的发动机系列和所需零件。我们将在几小时内回复供应情况和价格。</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/zh/#request"
                className="px-8 py-4 text-lg font-bold rounded-xl bg-white text-accent hover:bg-accent/10 transition-all text-center"
              >
                提交零件请求
              </Link>
              <WhatsappCTA
                label="zh-yanmar-final-cta"
                message="你好，我急需洋马船用发动机零件。发动机型号：___ 所需零件：___ 船舶位置：___"
                className="px-8 py-4 text-lg font-bold rounded-xl bg-green-500 hover:bg-green-600 text-white transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp 联系团队
              </WhatsappCTA>
            </div>
          </div>
        </section>

        <footer className="bg-white py-12 text-slate-500 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
              <div>
                <span className="font-black text-xl tracking-tighter text-slate-900">SourceSage</span>
                <span className="font-black text-xl text-accent">.ai</span>
                <p className="text-sm text-slate-500 mt-1">马来西亚零配件采购专家</p>
              </div>
              <div className="flex gap-6 text-sm font-semibold">
                <a href="mailto:info@sourcesage.ai" className="hover:text-accent flex items-center gap-2 transition-colors">
                  <Mail className="w-4 h-4" /> info@sourcesage.ai
                </a>
                <WhatsappCTA
                  label="zh-yanmar-footer"
                  message="你好，我需要洋马船用发动机零件。发动机型号：___ 所需零件：___"
                  className="hover:text-green-600 flex items-center gap-2 transition-colors"
                >
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
    </>
  )
}
