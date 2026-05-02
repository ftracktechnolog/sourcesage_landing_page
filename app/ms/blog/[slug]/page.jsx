import Link from 'next/link'
import { MessageCircle, Mail } from 'lucide-react'
import { getAllPosts, getPostBySlug } from '../../../../lib/blog'
import WhatsappCTA from '../../../../components/WhatsappCTA'
import LangSwitcher from '../../../../components/LangSwitcher'

export async function generateStaticParams() {
  return getAllPosts('ms').map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = await getPostBySlug(slug, 'ms')
  const ogImage = post.meta.hero_image
    ? `https://sourcesage.ai/images/blog/${post.meta.hero_image}`
    : 'https://sourcesage.ai/images/og-default.png'
  return {
    title: `${post.meta.title} | SourceSage`,
    description: post.meta.meta_description || post.meta.title,
    keywords: post.meta.meta_keywords,
    authors: post.meta.author ? [{ name: post.meta.author }] : [{ name: 'SourceSage Editorial' }],
    alternates: { canonical: `/ms/blog/${post.meta.slug}/` },
    openGraph: {
      title: post.meta.title,
      description: post.meta.meta_description || post.meta.title,
      url: `https://sourcesage.ai/ms/blog/${post.meta.slug}/`,
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
      <Link href="/ms" className="flex items-center">
        <span className="font-bold text-xl text-slate-900 tracking-tight">SourceSage</span>
        <span className="text-blue-600 font-bold text-xl">.ai</span>
      </Link>
      <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
        <Link href="/#brands" className="hover:text-blue-600 transition-colors">Jenama</Link>
        <Link href="/#marine" className="hover:text-blue-600 transition-colors">Marin</Link>
        <Link href="/#how-it-works" className="hover:text-blue-600 transition-colors">Cara Kerja</Link>
        <Link href="/ms/about" className="hover:text-blue-600 transition-colors">Tentang</Link>
        <Link href="/ms/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
        <Link href="/#request" className="hover:text-blue-600 transition-colors">Minta Sebut Harga</Link>
      </div>
      <WhatsappCTA
        label="ms-post-navbar"
        message="Hi, saya perlukan bantuan mencari alat ganti. Jenama: ___ Model: ___ Alat ganti diperlukan: ___"
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg font-bold transition-all text-sm flex items-center gap-2"
      >
        <MessageCircle className="w-4 h-4" /> WhatsApp
      </WhatsappCTA>
      <LangSwitcher currentLang="ms" />
    </div>
  </nav>
)

export default async function MsBlogPost({ params }) {
  const { slug } = await params
  const post = await getPostBySlug(slug, 'ms')

  const ogImage = post.meta.hero_image
    ? `https://sourcesage.ai/images/blog/${post.meta.hero_image}`
    : 'https://sourcesage.ai/images/og-default.png'

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'inLanguage': 'ms',
    headline: post.meta.title,
    description: post.meta.meta_description || post.meta.title,
    image: ogImage,
    datePublished: post.meta.publish_date,
    dateModified: post.meta.last_updated || post.meta.publish_date,
    author: { '@type': 'Organization', name: post.meta.author || 'SourceSage Editorial', url: 'https://sourcesage.ai' },
    publisher: { '@type': 'Organization', name: 'SourceSage.ai', url: 'https://sourcesage.ai' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://sourcesage.ai/ms/blog/${post.meta.slug}` },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'inLanguage': 'ms',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Laman Utama', item: 'https://sourcesage.ai/ms/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://sourcesage.ai/ms/blog' },
      { '@type': 'ListItem', position: 3, name: post.meta.title },
    ],
  }

  const faqSchema = post.meta.faqs?.length ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'inLanguage': 'ms',
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
        {post.heroHtmls?.length > 0 && (
          <div className="bg-white border-b border-slate-100">
            <div className="max-w-4xl mx-auto" dangerouslySetInnerHTML={{ __html: post.heroHtmls[0] }} />
          </div>
        )}
        <div className="bg-slate-50 border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-slate-500">
            <Link href="/ms" className="hover:text-blue-600 transition-colors">Laman Utama</Link>
            <span className="mx-2">/</span>
            <Link href="/ms/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700 font-medium">{post.meta.title}</span>
          </div>
        </div>
        <article className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                  {new Date(post.meta.publish_date).toLocaleDateString('ms-MY', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
                {post.meta.author && <span className="text-xs text-slate-400">· {post.meta.author}</span>}
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">{post.meta.title}</h1>
            </header>
            <div className="blog-content prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: post.contentBefore }} />
            {post.whatsappLabel && (
              <div className="my-10 pt-8 border-t border-slate-100">
                <WhatsappCTA
                  label="ms-post-cta"
                  message={post.whatsappPrefill || 'Hi, saya perlukan bantuan mencari alat ganti.'}
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-xl font-bold text-lg transition-all w-full"
                >
                  <MessageCircle className="w-5 h-5" /> {post.whatsappLabel}
                </WhatsappCTA>
              </div>
            )}
            {post.contentAfter && (
              <div className="blog-content prose prose-slate max-w-none mt-10 pt-8 border-t border-slate-100" dangerouslySetInnerHTML={{ __html: post.contentAfter }} />
            )}
            {post.meta.related_page && (
              <div className="mt-12 pt-8 border-t border-slate-100">
                <Link href={post.meta.related_page} className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">
                  Lihat alat ganti untuk jenama ini →
                </Link>
              </div>
            )}
          </div>
        </article>
        <footer className="bg-white py-12 text-slate-500 border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <span className="font-black text-xl tracking-tighter text-slate-900">SourceSage</span>
                <span className="font-black text-xl text-blue-600">.ai</span>
                <p className="text-sm text-slate-500 mt-1">Ipoh, Perak — Pakar Perolehan Alat Ganti di Malaysia</p>
              </div>
              <div className="flex gap-6 text-sm font-semibold">
                <a href="mailto:info@sourcesage.ai" className="hover:text-blue-600 flex items-center gap-2 transition-colors"><Mail className="w-4 h-4" /> info@sourcesage.ai</a>
                <Link href="/ms/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
