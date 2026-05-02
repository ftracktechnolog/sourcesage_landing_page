import Link from 'next/link'
import { MessageCircle, Mail } from 'lucide-react'
import { getAllPosts } from '../../lib/blog'
import WhatsappCTA from '../../components/WhatsappCTA'
import LangSwitcher from '../../components/LangSwitcher'

export const metadata = {
  title: 'Tractor & Marine Parts Guides — Malaysia | SourceSage',
  description: 'Parts guides for Malaysian workshops and dealers. Kubota, Yanmar, Massey Ferguson, John Deere, Perkins & Zoomlion — model identification, sourcing tips, common problems.',
  alternates: { canonical: '/blog/', languages: { 'en': 'https://sourcesage.ai/blog/', 'ms': 'https://sourcesage.ai/ms/blog/', 'zh-Hans': 'https://sourcesage.ai/zh/blog/', 'x-default': 'https://sourcesage.ai/blog/' } },
  openGraph: {
    title: 'Tractor & Marine Parts Guides — Malaysia | SourceSage',
    description: 'Parts guides for Malaysian workshops and dealers. Kubota, Yanmar, Massey Ferguson, John Deere, Perkins & Zoomlion — model identification, sourcing tips, common problems.',
    url: 'https://sourcesage.ai/blog/',
    siteName: 'SourceSage.ai',
    type: 'website',
    locale: 'en',
    images: [{ url: 'https://sourcesage.ai/images/og-home.png', width: 1200, height: 630, alt: 'SourceSage Tractor & Marine Parts Guides Malaysia' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tractor & Marine Parts Guides — Malaysia | SourceSage',
    description: 'Parts guides for Malaysian workshops and dealers. Kubota, Yanmar, Massey Ferguson, John Deere, Perkins & Zoomlion — model identification, sourcing tips, common problems.',
    images: ['https://sourcesage.ai/images/og-home.png'],
  },
}

const Navbar = () => (
  <nav className="bg-white shadow-sm sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <Link href="/" className="flex items-center">
        <span className="font-bold text-xl text-slate-900 tracking-tight">SourceSage</span>
        <span className="text-blue-600 font-bold text-xl">.ai</span>
      </Link>
      <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
        <Link href="/#brands" className="hover:text-blue-600 transition-colors">Brands</Link>
        <Link href="/#marine" className="hover:text-blue-600 transition-colors">Marine</Link>
        <Link href="/#how-it-works" className="hover:text-blue-600 transition-colors">How It Works</Link>
        <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
        <Link href="/blog" className="text-blue-600">Blog</Link>
        <Link href="/#request" className="hover:text-blue-600 transition-colors">Request a Part</Link>
      </div>
      <LangSwitcher currentLang="en" />
      <WhatsappCTA
        label="blog-navbar"
        message="Hi, I need help sourcing a spare part. Brand: ___ Model: ___ Part needed: ___"
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
          <p className="text-sm text-slate-500 mt-1">Malaysia-Based Parts Sourcing Specialist</p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Parts Pages</p>
          <ul className="space-y-2 text-sm font-semibold">
            <li><Link href="/kubota-tractor-parts-malaysia" className="hover:text-blue-600 transition-colors">Kubota Tractor Parts</Link></li>
            <li><Link href="/yanmar-marine-parts-malaysia" className="hover:text-blue-600 transition-colors">Yanmar Marine Parts</Link></li>
            <li><Link href="/massey-ferguson-parts-malaysia" className="hover:text-blue-600 transition-colors">Massey Ferguson Parts</Link></li>
            <li><Link href="/zoomlion-parts-malaysia" className="hover:text-blue-600 transition-colors">Zoomlion Parts</Link></li>
            <li><Link href="/john-deere-parts-malaysia" className="hover:text-blue-600 transition-colors">John Deere Parts</Link></li>
            <li><Link href="/perkins-engine-parts-malaysia" className="hover:text-blue-600 transition-colors">Perkins Engine Parts</Link></li>
            <li><Link href="/about" className="hover:text-blue-600 transition-colors">About SourceSage</Link></li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 text-sm font-semibold">
          <a href="mailto:info@sourcesage.ai" className="hover:text-blue-600 flex items-center gap-2 transition-colors">
            <Mail className="w-4 h-4" /> info@sourcesage.ai
          </a>
          <WhatsappCTA label="blog-footer" message="Hi, I need help sourcing a spare part. Brand: ___ Model: ___ Part needed: ___" className="hover:text-green-600 flex items-center gap-2 transition-colors">
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </WhatsappCTA>
        </div>
      </div>
      <div className="text-center pt-6 border-t border-slate-100">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">© 2026 SourceSage.ai. Agricultural &amp; Marine Parts Sourcing, Malaysia.</p>
      </div>
    </div>
  </footer>
)

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  'inLanguage': 'en',
  name: 'SourceSage.ai',
  url: 'https://sourcesage.ai',
  description: 'Malaysia-based tractor and marine engine parts sourcing specialist.',
  publisher: { '@type': 'Organization', name: 'SourceSage.ai', url: 'https://sourcesage.ai' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'inLanguage': 'en',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sourcesage.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://sourcesage.ai/blog' },
  ],
}

export default function BlogIndex() {
  const posts = getAllPosts('en')

  return (
    <div className="min-h-screen font-sans text-slate-900 antialiased">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main>
        <section className="bg-white border-b border-slate-100 py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-600">Guides &amp; Resources</div>
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Parts &amp; Tractor Guides</h1>
            <p className="text-lg text-slate-500 max-w-2xl">Practical guides on identifying Kubota tractor models, finding spare parts, and sourcing hard-to-find components across Malaysia.</p>
          </div>
        </section>
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-2">
            {posts.map(post => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="p-6">
                  <div className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">
                    {new Date(post.publish_date).toLocaleDateString('en-MY', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-slate-500 text-sm line-clamp-3 leading-relaxed">
                    {post.meta_description}
                  </p>
                  <div className="mt-4 text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
                    Read guide →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
