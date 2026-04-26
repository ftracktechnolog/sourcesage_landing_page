import Link from 'next/link'
import { MessageCircle, Mail } from 'lucide-react'
import { getAllPosts } from '../../lib/blog'
import WhatsappCTA from '../../components/WhatsappCTA'

export const metadata = {
  title: 'Kubota Tractor Parts Blog | SourceSage Malaysia',
  description: 'Guides on identifying Kubota tractor models, finding spare parts, and sourcing hard-to-find components in Malaysia.',
  alternates: { canonical: '/blog' },
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
        <Link href="/blog" className="text-blue-600">Blog</Link>
        <Link href="/#request" className="hover:text-blue-600 transition-colors">Request a Part</Link>
      </div>
      <WhatsappCTA
        label="blog-navbar"
        message="Hi SourceSage, I need help sourcing a spare part. Brand: ___ Model: ___ Part needed: ___"
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
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
        <div>
          <span className="font-black text-xl tracking-tighter text-slate-900">SourceSage</span>
          <span className="font-black text-xl text-blue-600">.ai</span>
          <p className="text-sm text-slate-500 mt-1">Malaysia-Based Parts Sourcing Specialist</p>
        </div>
        <div className="flex gap-6 text-sm font-semibold">
          <a href="mailto:info@sourcesage.ai" className="hover:text-blue-600 flex items-center gap-2 transition-colors">
            <Mail className="w-4 h-4" /> info@sourcesage.ai
          </a>
          <WhatsappCTA label="blog-footer" message="Hi SourceSage, I need help sourcing a spare part. Brand: ___ Model: ___ Part needed: ___" className="hover:text-green-600 flex items-center gap-2 transition-colors">
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </WhatsappCTA>
        </div>
      </div>
      <div className="text-center pt-6 border-t border-slate-100">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">© 2024 SourceSage.ai. Agricultural &amp; Marine Parts Sourcing, Malaysia.</p>
      </div>
    </div>
  </footer>
)

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen font-sans text-slate-900 antialiased">
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
