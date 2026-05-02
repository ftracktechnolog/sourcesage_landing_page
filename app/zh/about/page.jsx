import Link from 'next/link'
import { MessageCircle, Mail, ChevronRight } from 'lucide-react'
import WhatsappCTA from '../../../components/WhatsappCTA'
import LangSwitcher from '../../../components/LangSwitcher'

export const metadata = {
  title: '关于SourceSage — 马来西亚拖拉机与船用发动机配件采购',
  description: '马来西亚农业拖拉机与船用柴油发动机配件采购专家，总部位于霹雳州怡保。覆盖久保田、洋马、麦赛福格森、约翰迪尔、珀金斯和中联重科品牌。',
  alternates: { canonical: '/zh/about/', languages: { 'en': 'https://sourcesage.ai/about/', 'ms': 'https://sourcesage.ai/ms/about/', 'zh-Hans': 'https://sourcesage.ai/zh/about/', 'x-default': 'https://sourcesage.ai/about/' } },
  openGraph: {
    title: '关于SourceSage — 马来西亚拖拉机与船用发动机配件采购',
    description: '马来西亚农业拖拉机与船用柴油发动机配件采购专家，总部位于霹雳州怡保。',
    url: 'https://sourcesage.ai/zh/about/',
    siteName: 'SourceSage.ai',
    type: 'website',
    locale: 'zh_CN',
    images: [{ url: 'https://sourcesage.ai/images/og-home.png', width: 1200, height: 630, alt: '关于SourceSage — 马来西亚配件采购' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '关于SourceSage — 马来西亚拖拉机与船用发动机配件采购',
    description: '马来西亚农业拖拉机与船用柴油发动机配件采购专家，总部位于霹雳州怡保。',
    images: ['https://sourcesage.ai/images/og-home.png'],
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://sourcesage.ai/#organization',
      'inLanguage': 'zh-Hans',
      name: 'SourceSage',
      url: 'https://sourcesage.ai',
      logo: 'https://sourcesage.ai/logo.png',
      description: '马来西亚农业拖拉机与船用柴油发动机配件采购专家，总部位于霹雳州怡保。覆盖久保田、洋马、麦赛福格森、约翰迪尔、珀金斯和中联重科品牌。',
      address: {
        '@type': 'PostalAddress',
        addressLocality: '怡保',
        addressRegion: '霹雳',
        addressCountry: 'MY',
      },
      areaServed: { '@type': 'Country', name: 'Malaysia' },
      contactPoint: { '@type': 'ContactPoint', contactType: '客户服务', availableLanguage: ['English', 'Malay', 'Chinese'] },
    },
  ],
}

export default function ZhAboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <WhatsappCTA label="zh-about-sticky" message="你好，我需要帮助采购零件。品牌：___ 型号：___ 所需零件：___" className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-5 py-3.5 rounded-full shadow-2xl font-bold text-sm flex items-center gap-2 transition-all hover:scale-105">
        <MessageCircle className="w-5 h-5" /> WhatsApp 联系我们
      </WhatsappCTA>
      <div className="min-h-screen font-sans text-slate-900 antialiased">
        <nav className="bg-white shadow-sm sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <Link href="/zh" className="flex items-center">
              <span className="font-heading font-bold text-xl text-accent tracking-tight">SourceSage</span>
              <span className="font-bold text-xl text-green-600">.ai</span>
            </Link>
            <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
              <Link href="/zh/#brands" className="hover:text-accent transition-colors">品牌</Link>
              <Link href="/zh/#marine" className="hover:text-accent transition-colors">船用</Link>
              <Link href="/zh/#how-it-works" className="hover:text-accent transition-colors">流程</Link>
              <Link href="/zh/about" className="text-accent transition-colors">关于</Link>
              <Link href="/zh/blog" className="hover:text-accent transition-colors">博客</Link>
              <Link href="/zh/#request" className="hover:text-accent transition-colors">提交请求</Link>
            </div>
            <div className="flex items-center gap-2">
              <LangSwitcher currentLang="zh-Hans" />
              <WhatsappCTA label="zh-about-navbar" message="你好，我需要帮助采购零件。品牌：___ 型号：___ 所需零件：___" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg font-bold transition-all text-sm flex items-center gap-2">
                <MessageCircle className="w-4 h-4" /> WhatsApp 联系我们
              </WhatsappCTA>
            </div>
          </div>
        </nav>
        <div className="bg-slate-50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-slate-500">
            <Link href="/zh" className="hover:text-accent transition-colors">首页</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700 font-medium">关于</span>
          </div>
        </div>
        <header className="bg-white pt-16 pb-20 border-b border-slate-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">关于SourceSage — 马来西亚拖拉机与船用发动机配件采购</h1>
          </div>
        </header>
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">我们的服务</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">SourceSage 帮助马来西亚企业采购农业拖拉机和船用柴油发动机的备件——包括通过标准经销商渠道难以找到的零件。总部位于霹雳州怡保，我们服务马来西亚半岛和东马（沙巴和砂拉越）的客户。</p>
            <p className="text-lg text-slate-600 leading-relaxed">我们覆盖多个品牌，包括久保田、洋马、麦赛福格森、约翰迪尔、珀金斯和中联重科。</p>
          </div>
        </section>
        <section className="py-16 bg-slate-50 border-y border-slate-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">我们的客户</h2>
            <ul className="space-y-4 text-lg text-slate-600">
              <li className="flex items-start gap-3"><ChevronRight className="w-5 h-5 text-accent shrink-0 mt-1" /><span>需要可靠零件供应的车间和经销商</span></li>
              <li className="flex items-start gap-3"><ChevronRight className="w-5 h-5 text-accent shrink-0 mt-1" /><span>车队运营商和种植园经理</span></li>
              <li className="flex items-start gap-3"><ChevronRight className="w-5 h-5 text-accent shrink-0 mt-1" /><span>设备停机影响重大的农业企业</span></li>
              <li className="flex items-start gap-3"><ChevronRight className="w-5 h-5 text-accent shrink-0 mt-1" /><span>需要柴油发动机组件的船舶运营商</span></li>
            </ul>
            <p className="text-lg text-slate-600 leading-relaxed mt-6">我们服务马来西亚半岛和东马（沙巴和砂拉越）的客户。</p>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">如何与我们合作</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">联系我们并提供您的零件详细信息——型号、描述或照片——我们将跟进回复供应情况和价格信息。</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsappCTA label="zh-about-contact-cta" message="你好，我需要帮助采购零件。品牌：___ 型号：___ 所需零件：___" className="px-8 py-4 text-lg font-bold rounded-xl text-white bg-green-500 hover:bg-green-600 transition-all text-center flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" /> 通过 WhatsApp 联系 SourceSage
              </WhatsappCTA>
              <a href="mailto:info@sourcesage.ai" className="px-8 py-4 text-lg font-bold rounded-xl text-accent bg-accent/10 hover:bg-blue-100 transition-all text-center flex items-center justify-center gap-2 border border-blue-200">
                <Mail className="w-5 h-5" /> 邮件 info@sourcesage.ai
              </a>
            </div>
          </div>
        </section>
        <section className="py-20 bg-accent text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">需要采购零件？</h2>
            <p className="text-blue-100 text-lg mb-8">发送您的零件详细信息，我们将检查供应情况。我们在24小时内回复。</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/zh/#request" className="px-8 py-4 text-lg font-bold rounded-xl bg-white text-accent hover:bg-accent/10 transition-all text-center">提交零件请求</Link>
              <WhatsappCTA label="zh-about-final-cta" message="你好，我需要帮助采购零件。品牌：___ 型号：___ 所需零件：___" className="px-8 py-4 text-lg font-bold rounded-xl bg-green-500 hover:bg-green-600 text-white transition-all flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" /> WhatsApp 联系我们的团队
              </WhatsappCTA>
            </div>
          </div>
        </section>
        <footer className="bg-bg-alt py-12 text-muted border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
              <div>
                <span className="font-heading font-black text-xl tracking-tighter text-accent">SourceSage</span>
                <span className="font-black text-xl text-green-600">.ai</span>
                <p className="text-sm text-muted mt-1">霹雳州怡保 — 马来西亚零配件采购专家</p>
              </div>
              <div className="flex gap-6 text-sm font-semibold">
                <a href="mailto:info@sourcesage.ai" className="hover:text-accent flex items-center gap-2 transition-colors"><Mail className="w-4 h-4" /> info@sourcesage.ai</a>
                <WhatsappCTA label="zh-about-footer" message="你好，我需要帮助采购零件。品牌：___ 型号：___ 所需零件：___" className="hover:text-green-600 flex items-center gap-2 transition-colors">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </WhatsappCTA>
              </div>
            </div>
            <div className="text-center pt-6 border-t border-border">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">© 2026 SourceSage.ai. 农业与船用零件采购，马来西亚。</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
