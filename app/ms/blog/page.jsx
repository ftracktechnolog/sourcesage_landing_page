import Link from 'next/link'
import { MessageCircle, Mail } from 'lucide-react'
import { getAllPosts } from '../../../lib/blog'
import WhatsappCTA from '../../../components/WhatsappCTA'
import LangSwitcher from '../../../components/LangSwitcher'

export const metadata = {
  title: 'Panduan Alat Ganti Traktor & Enjin — Malaysia | SourceSage',
  description: 'Panduan alat ganti untuk bengkel dan pengedar Malaysia. Kubota, Yanmar, Massey Ferguson, John Deere, Perkins & Zoomlion — pengenalan model, tip perolehan, masalah biasa.',
  alternates: { canonical: '/ms/blog/' },
  openGraph: {
    title: 'Panduan Alat Ganti Traktor & Enjin — Malaysia | SourceSage',
    description: 'Panduan alat ganti untuk bengkel dan pengedar Malaysia. Kubota, Yanmar, Massey Ferguson, John Deere, Perkins & Zoomlion — pengenalan model, tip perolehan, masalah biasa.',
    url: 'https://sourcesage.ai/ms/blog/',
    siteName: 'SourceSage.ai',
    type: 'website',
    locale: 'ms_MY',
    images: [{ url: 'https://sourcesage.ai/images/og-home.png', width: 1200, height: 630, alt: 'SourceSage Panduan Alat Ganti Traktor & Enjin Malaysia' }],
  },
}

const Navbar = () => (
  <nav className="bg-white shadow-sm sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <Link href="/ms" className="flex items-center">
        <span className="font-bold text-xl text-slate-900 tracking-tight">SourceSage</span>
        <span className="text-blue-600 font-bold text-xl">.ai</span>
      </Link>
      <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
        <Link href="/#brands" className="hover:text-blue-600 transition-colors">Jenama</Link>
        <Link href="/#marine" className="hover:text-blue-600 transition-colors">Marin</Link>
        <Link href="/#how-it-works" className="hover:text-blue-600 transition-colors">Cara Kerja</Link>
        <Link href="/about" className="hover:text-blue-600 transition-colors">Tentang</Link>
        <Link href="/ms/blog" className="text-blue-600">Blog</Link>
        <Link href="/#request" className="hover:text-blue-600 transition-colors">Minta Sebut Harga</Link>
      </div>
      <WhatsappCTA
        label="ms-blog-navbar"
        message="Hi, saya perlukan bantuan mencari alat ganti. Jenama: ___ Model: ___ Alat ganti diperlukan: ___"
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg font-bold transition-all text-sm flex items-center gap-2"
      >
        <MessageCircle className="w-4 h-4" /> WhatsApp
      </WhatsappCTA>
      <LangSwitcher currentLang="ms" />
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
          <p className="text-sm text-slate-500 mt-1">Ipoh, Perak — Pakar Perolehan Alat Ganti di Malaysia</p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Halaman Alat Ganti</p>
          <ul className="space-y-2 text-sm font-semibold">
            <li><Link href="/kubota-tractor-parts-malaysia" className="hover:text-blue-600 transition-colors">Alat Ganti Kubota</Link></li>
            <li><Link href="/yanmar-marine-parts-malaysia" className="hover:text-blue-600 transition-colors">Alat Ganti Yanmar Marin</Link></li>
            <li><Link href="/massey-ferguson-parts-malaysia" className="hover:text-blue-600 transition-colors">Alat Ganti Massey Ferguson</Link></li>
            <li><Link href="/zoomlion-parts-malaysia" className="hover:text-blue-600 transition-colors">Alat Ganti Zoomlion</Link></li>
            <li><Link href="/john-deere-parts-malaysia" className="hover:text-blue-600 transition-colors">Alat Ganti John Deere</Link></li>
            <li><Link href="/perkins-engine-parts-malaysia" className="hover:text-blue-600 transition-colors">Alat Ganti Enjin Perkins</Link></li>
            <li><Link href="/about" className="hover:text-blue-600 transition-colors">Tentang SourceSage</Link></li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 text-sm font-semibold">
          <a href="mailto:info@sourcesage.ai" className="hover:text-blue-600 flex items-center gap-2 transition-colors">
            <Mail className="w-4 h-4" /> info@sourcesage.ai
          </a>
          <WhatsappCTA label="ms-blog-footer" message="Hi, saya perlukan bantuan mencari alat ganti. Jenama: ___ Model: ___ Alat ganti diperlukan: ___" className="hover:text-green-600 flex items-center gap-2 transition-colors">
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </WhatsappCTA>
        </div>
      </div>
      <div className="text-center pt-6 border-t border-slate-100">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">© 2026 SourceSage.ai. Perolehan Alat Ganti Pertanian &amp; Marin, Malaysia.</p>
      </div>
    </div>
  </footer>
)

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  'inLanguage': 'ms',
  name: 'SourceSage.ai',
  url: 'https://sourcesage.ai',
  description: 'Pakar perolehan alat ganti traktor dan enjin marin di Malaysia.',
  publisher: { '@type': 'Organization', name: 'SourceSage.ai', url: 'https://sourcesage.ai' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'inLanguage': 'ms',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Laman Utama', item: 'https://sourcesage.ai/ms/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://sourcesage.ai/ms/blog' },
  ],
}

export default function MsBlogIndex() {
  const posts = getAllPosts('ms')

  return (
    <div className="min-h-screen font-sans text-slate-900 antialiased">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main>
        <section className="bg-white border-b border-slate-100 py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-600">Panduan &amp; Sumber</div>
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Panduan Alat Ganti &amp; Traktor</h1>
            <p className="text-lg text-slate-500 max-w-2xl">Panduan praktikal tentang mengenal pasti model traktor Kubota, mencari alat ganti, dan mendapatkan komponen sukar dicari di seluruh Malaysia.</p>
          </div>
        </section>
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {posts.length === 0 ? (
            <p className="text-center text-slate-400 py-12">Tiada catatan blog dalam Bahasa Melayu buat masa ini.</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2">
              {posts.map(post => (
                <Link
                  key={post.slug}
                  href={`/ms/blog/${post.slug}`}
                  className="group block bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  <div className="p-6">
                    <div className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">
                      {new Date(post.publish_date).toLocaleDateString('ms-MY', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-slate-500 text-sm line-clamp-3 leading-relaxed">
                      {post.meta_description}
                    </p>
                    <div className="mt-4 text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
                      Baca panduan →
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
