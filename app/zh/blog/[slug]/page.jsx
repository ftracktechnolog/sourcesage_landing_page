import Link from 'next/link'
import { MessageCircle, Mail } from 'lucide-react'
import { getAllPosts, getPostBySlug } from '../../../../lib/blog'
import WhatsappCTA from '../../../../components/WhatsappCTA'
import LangSwitcher from '../../../../components/LangSwitcher'

export async function generateStaticParams() {
  return getAllPosts('zh').map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = await getPostBySlug(slug, 'zh')
  const ogImage = post.meta.hero_image
    ? `https://sourcesage.ai/images/blog/${post.meta.hero_image}`
    : 'https://sourcesage.ai/images/og-default.png'
  return {
    title: `${post.meta.title} | SourceSage`,
    description: post.meta.meta_description || post.meta.title,
    keywords: post.meta.meta_keywords,
    authors: post.meta.author ? [{ name: post.meta.author }] : [{ name: 'SourceSage Editorial' }],
    alternates: { canonical: `/zh/blog/${post.meta.slug}/` },
    openGraph: {
      title: post.meta.title,
      description: post.meta.meta_description || post.meta.title,
      url: `https://sourcesage.ai/zh/blog/${post.meta.slug}/`,
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
      <Link href="/zh" className="flex items-center">
        <span className="font-bold text-xl text-slate-900 tracking-tight">SourceSage</span>
        <span className="text-blue-600 font-bold text-xl">.ai</span>
      </Link>
      <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
        <Link href="/#brands" className="hover:text-blue-600 transition-colors">品牌</Link>
        <Link href="/#marine" className="hover:text-blue-600 transition-colors">船用</Link>
        <Link href="/#how-it-works" className="hover:text-blue-600 transition-colors">流程</Link>
        <Link href="/about" className="hover:text-blue-600 transition-colors">关于</Link>
        <Link href="/zh/blog" className="hover:text-blue-600 transition-colors">博客</Link>
        <Link href="/#request" className="hover:text-blue-600 transition-colors">提交请求</Link>
      </div>
      <WhatsappCTA
        label="zh-post-navbar"
        message="你好，我需要帮助采购零件。品牌：___ 型号：___ 所需零件：___"
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg font-bold transition-all text-sm flex items-center gap-2"
      >
        <MessageCircle className="w-4 h-4" /> WhatsApp
      </WhatsappCTA>
      <LangSwitcher currentLang="zh-Hans" />
    </div>
  </nav>
)

export default async function ZhBlogPost({ params }) {
  const { slug } = await params
  const post = await getPostBySlug(slug, 'zh')

  const ogImage = post.meta.hero_image
    ? `https://sourcesage.ai/images/blog/${post.meta.hero_image}`
    : 'https://sourcesage.ai/images/og-default.png'

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'inLanguage': 'zh-Hans',
    headline: post.meta.title,
    description: post.meta.meta_description || post.meta.title,
    image: ogImage,
    datePublished: post.meta.publish_date,
    dateModified: post.meta.last_updated || post.meta.publish_date,
    author: { '@type': 'Organization', name: post.meta.author || 'SourceSage Editorial', url: 'https://sourcesage.ai' },
    publisher: { '@type': 'Organization', name: 'SourceSage.ai', url: 'https://sourcesage.ai' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://sourcesage.ai/zh/blog/${post.meta.slug}` },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'inLanguage': 'zh-Hans',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '首页', item: 'https://sourcesage.ai/zh/' },
      { '@type': 'ListItem', position: 2, name: '博客', item: 'https://sourcesage.ai/zh/blog' },
      { '@type': 'ListItem', position: 3, name: post.meta.title },
    ],
  }

  const faqSchema = post.meta.faqs?.length ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'inLanguage': 'zh-Hans',
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
            <Link href="/zh" className="hover:text-blue-600 transition-colors">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/zh/blog" className="hover:text-blue-600 transition-colors">博客</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700 font-medium">{post.meta.title}</span>
          </div>
        </div>
        <article className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                  {new Date(post.meta.publish_date).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
                {post.meta.author && <span className="text-xs text-slate-400">· {post.meta.author}</span>}
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">{post.meta.title}</h1>
            </header>
            <div className="blog-content prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: post.contentBefore }} />
            {post.whatsappLabel && (
              <div className="my-10 pt-8 border-t border-slate-100">
                <WhatsappCTA
                  label="zh-post-cta"
                  message={post.whatsappPrefill || '你好，我需要帮助采购零件。'}
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
                  查看该品牌的零件 →
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
                <p className="text-sm text-slate-500 mt-1">霹雳州怡保 — 马来西亚零配件采购专家</p>
              </div>
              <div className="flex gap-6 text-sm font-semibold">
                <a href="mailto:info@sourcesage.ai" className="hover:text-blue-600 flex items-center gap-2 transition-colors"><Mail className="w-4 h-4" /> info@sourcesage.ai</a>
                <Link href="/zh/blog" className="hover:text-blue-600 transition-colors">博客</Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
