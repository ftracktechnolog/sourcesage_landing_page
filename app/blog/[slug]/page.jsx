import Link from 'next/link'
import { MessageCircle, Mail } from 'lucide-react'
import { getAllPosts, getPostBySlug } from '../../../lib/blog'
import WhatsappCTA from '../../../components/WhatsappCTA'

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  return {
    title: `${post.meta.title} | SourceSage`,
    description: post.meta.meta_description || post.meta.title,
    keywords: post.meta.meta_keywords,
    alternates: { canonical: `/blog/${post.meta.slug}` },
    openGraph: {
      title: post.meta.title,
      description: post.meta.meta_description || post.meta.title,
      url: `https://sourcesage.ai/blog/${post.meta.slug}`,
    },
  }
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
        <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
        <Link href="/#request" className="hover:text-blue-600 transition-colors">Request a Part</Link>
      </div>
      <WhatsappCTA
        label="blog-post-navbar"
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
          <WhatsappCTA label="blog-post-footer" className="hover:text-green-600 flex items-center gap-2 transition-colors">
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

export default async function BlogPost({ params }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  return (
    <div className="min-h-screen font-sans text-slate-900 antialiased">
      <Navbar />
      <main>
        {/* Hero image */}
        {post.heroHtmls.length > 0 && (
          <div
            className="w-full bg-slate-100 overflow-hidden [&_figure]:m-0 [&_img]:w-full [&_img]:h-96 [&_img]:object-cover [&_img]:rounded-none"
            dangerouslySetInnerHTML={{ __html: post.heroHtmls[0] }}
          />
        )}

        {/* Post header */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 pb-6">
          <Link href="/blog" className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors mb-6 inline-block">
            ← Back to guides
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
            {post.meta.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span className="bg-slate-100 px-3 py-1 rounded-full font-medium">
              Last updated: {post.lastUpdated}
            </span>
          </div>
        </div>

        {/* Article body — before CTA */}
        <article className="blog-content max-w-3xl mx-auto px-4 sm:px-6 pb-8">
          <div dangerouslySetInnerHTML={{ __html: post.contentBefore }} />
        </article>

        {/* WhatsApp CTA */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
          <div className="bg-green-50 border border-green-100 rounded-2xl p-8 text-center">
            <p className="text-slate-700 font-semibold mb-5 text-lg">
              Need help identifying your Kubota or finding the right part?
            </p>
            <WhatsappCTA
              label={`blog_${post.meta.id}`}
              message={post.whatsappPrefill}
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all"
            >
              <MessageCircle className="w-6 h-6" />
              {post.whatsappLabel}
            </WhatsappCTA>
          </div>
        </div>

        {/* Article body — after CTA (if any) */}
        {post.contentAfter && (
          <article className="blog-content max-w-3xl mx-auto px-4 sm:px-6 pb-8">
            <div dangerouslySetInnerHTML={{ __html: post.contentAfter }} />
          </article>
        )}

        {/* Last updated footer note */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
          <p className="text-sm text-slate-400 italic">Last updated: {post.lastUpdated}</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
