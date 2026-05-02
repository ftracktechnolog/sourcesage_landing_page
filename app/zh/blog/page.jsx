import Link from 'next/link'
import { MessageCircle, Mail } from 'lucide-react'
import { getAllPosts } from '../../../lib/blog'
import WhatsappCTA from '../../../components/WhatsappCTA'
import LangSwitcher from '../../../components/LangSwitcher'

export const metadata = {
  title: '拖拉机与船用发动机零件指南 — 马来西亚 | SourceSage',
  description: '为马来西亚车间和经销商提供的零件指南。久保田、洋马、麦赛福格森、约翰迪尔、珀金斯和中联重科 — 型号识别、采购技巧、常见问题。',
  alternates: { canonical: '/zh/blog/', languages: { 'en': 'https://sourcesage.ai/blog/', 'ms': 'https://sourcesage.ai/ms/blog/', 'zh-Hans': 'https://sourcesage.ai/zh/blog/', 'x-default': 'https://sourcesage.ai/blog/' } },
  openGraph: {
    title: '拖拉机与船用发动机零件指南 — 马来西亚 | SourceSage',
    description: '为马来西亚车间和经销商提供的零件指南。久保田、洋马、麦赛福格森、约翰迪尔、珀金斯和中联重科 — 型号识别、采购技巧、常见问题。',
    url: 'https://sourcesage.ai/zh/blog/',
    siteName: 'SourceSage.ai',
    type: 'website',
    locale: 'zh_CN',
    images: [{ url: 'https://sourcesage.ai/images/og-home.png', width: 1200, height: 630, alt: 'SourceSage 拖拉机与船用发动机零件指南 马来西亚' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '拖拉机与船用发动机零件指南 — 马来西亚 | SourceSage',
    description: '为马来西亚车间和经销商提供的零件指南。久保田、洋马、麦赛福格森、约翰迪尔、珀金斯和中联重科 — 型号识别、采购技巧、常见问题。',
    images: ['https://sourcesage.ai/images/og-home.png'],
  },
}

const Navbar = () => (
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
        <Link href="/zh/blog" className="text-blue-600">博客</Link>
        <Link href="/zh/#request" className="hover:text-blue-600 transition-colors">提交请求</Link>
      </div>
      <LangSwitcher currentLang="zh-Hans" />
      <WhatsappCTA
        label="zh-blog-navbar"
        message="你好，我需要帮助采购零件。品牌：___ 型号：___ 所需零件：___"
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg font-bold transition-all text-sm flex items-center gap-2"
      >
        <MessageCircle className="w-4 h-4" /> WhatsApp
      </WhatsappCTA>
    </div>
  </nav>
)

const Footer = () => (
  <footer className="bg-white py-12 text-slate-500 border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <span className="font-black text-xl tracking-tighter text-slate-900">SourceSage</span>
          <span className="font-black text-xl text-blue-600">.ai</span>
          <p className="text-sm text-slate-500 mt-1">霹雳州怡保 — 马来西亚零配件采购专家</p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">零件页面</p>
          <ul className="space-y-2 text-sm font-semibold">
            <li><Link href="/zh/kubota-tractor-parts-malaysia" className="hover:text-blue-600 transition-colors">久保田零件</Link></li>
            <li><Link href="/yanmar-marine-parts-malaysia" className="hover:text-blue-600 transition-colors">洋马船用零件</Link></li>
            <li><Link href="/massey-ferguson-parts-malaysia" className="hover:text-blue-600 transition-colors">麦赛福格森零件</Link></li>
            <li><Link href="/zoomlion-parts-malaysia" className="hover:text-blue-600 transition-colors">中联重科零件</Link></li>
            <li><Link href="/john-deere-parts-malaysia" className="hover:text-blue-600 transition-colors">约翰迪尔零件</Link></li>
            <li><Link href="/perkins-engine-parts-malaysia" className="hover:text-blue-600 transition-colors">珀金斯发动机零件</Link></li>
            <li><Link href="/zh/about" className="hover:text-blue-600 transition-colors">关于SourceSage</Link></li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 text-sm font-semibold">
          <a href="mailto:info@sourcesage.ai" className="hover:text-blue-600 flex items-center gap-2 transition-colors">
            <Mail className="w-4 h-4" /> info@sourcesage.ai
          </a>
          <WhatsappCTA label="zh-blog-footer" message="你好，我需要帮助采购零件。品牌：___ 型号：___ 所需零件：___" className="hover:text-green-600 flex items-center gap-2 transition-colors">
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </WhatsappCTA>
        </div>
      </div>
      <div className="text-center pt-6 border-t border-slate-100">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">© 2026 SourceSage.ai. 农业与船用零件采购，马来西亚。</p>
      </div>
    </div>
  </footer>
)

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  'inLanguage': 'zh-Hans',
  name: 'SourceSage.ai',
  url: 'https://sourcesage.ai',
  description: '马来西亚拖拉机和船用发动机零件采购专家。',
  publisher: { '@type': 'Organization', name: 'SourceSage.ai', url: 'https://sourcesage.ai' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'inLanguage': 'zh-Hans',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '首页', item: 'https://sourcesage.ai/zh/' },
    { '@type': 'ListItem', position: 2, name: '博客', item: 'https://sourcesage.ai/zh/blog' },
  ],
}

export default function ZhBlogIndex() {
  const posts = getAllPosts('zh')

  return (
    <div className="min-h-screen font-sans text-slate-900 antialiased">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main>
        <section className="bg-white border-b border-slate-100 py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-600">指南与资源</div>
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">零件与拖拉机指南</h1>
            <p className="text-lg text-slate-500 max-w-2xl">关于识别久保田拖拉机型号、寻找备件以及在马来西亚采购难以找到的组件的实用指南。</p>
          </div>
        </section>
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {posts.length === 0 ? (
            <p className="text-center text-slate-400 py-12">目前没有中文博客文章。</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2">
              {posts.map(post => (
                <Link
                  key={post.slug}
                  href={`/zh/blog/${post.slug}`}
                  className="group block bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  <div className="p-6">
                    <div className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">
                      {new Date(post.publish_date).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-slate-500 text-sm line-clamp-3 leading-relaxed">
                      {post.meta_description}
                    </p>
                    <div className="mt-4 text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
                      阅读指南 →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  )
}
