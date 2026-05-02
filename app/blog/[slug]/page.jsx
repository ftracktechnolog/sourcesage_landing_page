import Link from 'next/link'
import { MessageCircle, Mail } from 'lucide-react'
import { getAllPosts, getPostBySlug } from '../../../lib/blog'
import WhatsappCTA from '../../../components/WhatsappCTA'

export async function generateStaticParams() {
  return getAllPosts('en').map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = await getPostBySlug(slug, 'en')
  const ogImage = post.meta.hero_image
    ? `https://sourcesage.ai/images/blog/${post.meta.hero_image}`
    : 'https://sourcesage.ai/images/og-default.png'
  return {
    title: `${post.meta.title} | SourceSage`,
    description: post.meta.meta_description || post.meta.title,
    keywords: post.meta.meta_keywords,
    authors: post.meta.author ? [{ name: post.meta.author }] : [{ name: 'SourceSage Editorial' }],
    alternates: { canonical: `/blog/${post.meta.slug}/` },
    openGraph: {
      title: post.meta.title,
      description: post.meta.meta_description || post.meta.title,
      url: `https://sourcesage.ai/blog/${post.meta.slug}/`,
      type: 'article',
      publishedTime: post.meta.publish_date,
      modifiedTime: post.meta.last_updated,
      authors: [post.meta.author || 'SourceSage Editorial'],
      images: [{ url: ogImage, width: 1200, height: 675, alt: post.meta.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.meta.title,
      description: post.meta.meta_description || post.meta.title,
      images: [ogImage],
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
        <Link href="/#how-it-works" className="hover:text-blue-600 transition-colors">How It Works</Link>
        <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
        <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
        <Link href="/#request" className="hover:text-blue-600 transition-colors">Request a Part</Link>
      </div>
      <WhatsappCTA
        label="blog-post-navbar"
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
          </ul>
        </div>
        <div className="flex flex-col gap-3 text-sm font-semibold">
          <a href="mailto:info@sourcesage.ai" className="hover:text-blue-600 flex items-center gap-2 transition-colors">
            <Mail className="w-4 h-4" /> info@sourcesage.ai
          </a>
          <WhatsappCTA label="blog-post-footer" message="Hi, I need help sourcing a spare part. Brand: ___ Model: ___ Part needed: ___" className="hover:text-green-600 flex items-center gap-2 transition-colors">
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

export default async function BlogPost({ params }) {
  const { slug } = await params
  const post = await getPostBySlug(slug, 'en')

  const ogImage = post.meta.hero_image
    ? `https://sourcesage.ai/images/blog/${post.meta.hero_image}`
    : 'https://sourcesage.ai/images/og-default.png'

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'inLanguage': 'en',
    headline: post.meta.title,
    description: post.meta.meta_description || post.meta.title,
    image: ogImage,
    datePublished: post.meta.publish_date,
    dateModified: post.meta.last_updated || post.meta.publish_date,
    author: { '@type': 'Organization', name: post.meta.author || 'SourceSage Editorial', url: 'https://sourcesage.ai' },
    publisher: { '@type': 'Organization', name: 'SourceSage.ai', url: 'https://sourcesage.ai' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://sourcesage.ai/blog/${post.meta.slug}` },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'inLanguage': 'en',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sourcesage.ai/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://sourcesage.ai/blog' },
      { '@type': 'ListItem', position: 3, name: post.meta.title },
    ],
  }

  const faqSchema = post.meta.faqs?.length ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'inLanguage': 'en',
    mainEntity: post.meta.faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  } : null

  return (
    <div className="min-h-screen font-sans text-slate-900 antialiased">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <Navbar />
      <main>
        {/* Hero image */}
        {post.heroHtmls.length > 0 && (
          <div
            className="w-full bg-slate-100 overflow-hidden aspect-[3/1] sm:aspect-[4/1] [&_figure]:m-0 [&_img]:w-full [&_img]:h-full [&_img]:object-contain [&_img]:rounded-none"
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
          <div className="flex items-center gap-3 text-sm text-slate-500 flex-wrap">
            {post.meta.author && (
              <span className="font-medium text-slate-600">By {post.meta.author}</span>
            )}
            <span className="bg-slate-100 px-3 py-1 rounded-full font-medium">
              Updated: {/^\d{4}-\d{2}-\d{2}$/.test(post.lastUpdated)
                ? new Date(post.lastUpdated + 'T00:00:00').toLocaleDateString('en-MY', { month: 'long', year: 'numeric' })
                : post.lastUpdated}
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

        {/* Related parts page banner */}
        {post.meta.related_page && (
          <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-8">
            <Link
              href={post.meta.related_page}
              className="flex items-center justify-between bg-blue-50 border border-blue-100 rounded-2xl p-6 hover:bg-blue-100 transition-colors group"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1">Parts Catalogue</p>
                <p className="text-slate-800 font-bold text-lg group-hover:text-blue-700 transition-colors">
                  View all available parts for this brand →
                </p>
              </div>
              <span className="bg-blue-600 group-hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all whitespace-nowrap ml-4">
                View parts
              </span>
            </Link>
          </div>
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
