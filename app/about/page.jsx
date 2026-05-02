import Link from 'next/link'
import { MessageCircle, Mail, ChevronRight } from 'lucide-react'
import WhatsappCTA from '../../components/WhatsappCTA'
import LangSwitcher from '../../components/LangSwitcher'

export const metadata = {
  title: 'About SourceSage — Tractor & Marine Parts Sourcing Malaysia | SourceSage',
  description: 'Malaysia-based spare parts sourcing for agricultural tractors and marine diesel engines. Covers Kubota, Yanmar, Massey Ferguson, John Deere, Perkins, and Zoomlion.',
  alternates: { canonical: '/about/', languages: { 'en': 'https://sourcesage.ai/about/', 'ms': 'https://sourcesage.ai/ms/about/', 'zh-Hans': 'https://sourcesage.ai/zh/about/', 'x-default': 'https://sourcesage.ai/about/' } },
  openGraph: {
    title: 'About SourceSage — Tractor & Marine Parts Sourcing Malaysia | SourceSage',
    description: 'Malaysia-based spare parts sourcing for agricultural tractors and marine diesel engines. Covers Kubota, Yanmar, Massey Ferguson, John Deere, Perkins, and Zoomlion.',
    url: 'https://sourcesage.ai/about/',
    siteName: 'SourceSage.ai',
    type: 'website',
    locale: 'en',
    images: [{ url: 'https://sourcesage.ai/images/og-home.png', width: 1200, height: 630, alt: 'About SourceSage — Parts Sourcing Malaysia' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About SourceSage — Tractor & Marine Parts Sourcing Malaysia | SourceSage',
    description: 'Malaysia-based spare parts sourcing for agricultural tractors and marine diesel engines. Covers Kubota, Yanmar, Massey Ferguson, John Deere, Perkins, and Zoomlion.',
    images: ['https://sourcesage.ai/images/og-home.png'],
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://sourcesage.ai/#organization',
      'inLanguage': 'en',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ipoh',
        addressRegion: 'Perak',
        addressCountry: 'MY',
      },
      name: 'SourceSage',
      url: 'https://sourcesage.ai',
      logo: 'https://sourcesage.ai/logo.png',
      description: 'Malaysia-based spare parts sourcing for agricultural tractors and marine diesel engines. Covers Kubota, Yanmar, Massey Ferguson, John Deere, Perkins, and Zoomlion.',
      areaServed: {
        '@type': 'Country',
        name: 'Malaysia',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: ['English', 'Malay', 'Chinese'],
      },
    },
  ],
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

      <WhatsappCTA
        label="about-sticky"
        message="Hi, I need help sourcing a spare part. Brand: ___ Model: ___ Part needed: ___"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-5 py-3.5 rounded-full shadow-2xl font-bold text-sm flex items-center gap-2 transition-all hover:scale-105"
      >
        <MessageCircle className="w-5 h-5" /> WhatsApp Us
      </WhatsappCTA>

      <div className="min-h-screen font-sans text-slate-900 antialiased">
        <nav className="bg-bg/95 backdrop-blur-sm border-b border-border sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <span className="font-heading font-bold text-xl text-accent tracking-tight">SourceSage</span>
              <span className="font-bold text-xl text-green-600">.ai</span>
            </Link>
            <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
              <Link href="/#brands" className="hover:text-accent transition-colors">Brands</Link>
              <Link href="/#marine" className="hover:text-accent transition-colors">Marine</Link>
              <Link href="/#how-it-works" className="hover:text-accent transition-colors">How It Works</Link>
              <Link href="/about" className="text-accent transition-colors">About</Link>
              <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
              <Link href="/#request" className="hover:text-accent transition-colors">Request a Part</Link>
            </div>
            <LangSwitcher currentLang="en" />
            <WhatsappCTA
              label="about-navbar"
              message="Hi, I need help sourcing a spare part. Brand: ___ Model: ___ Part needed: ___"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg font-bold transition-all text-sm flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </WhatsappCTA>
          </div>
        </nav>

        <div className="bg-bg-alt border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700 font-medium">About</span>
          </div>
        </div>

        <header className="bg-bg pt-16 pb-20 border-b border-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              About SourceSage — Tractor & Marine Parts Sourcing Malaysia | SourceSage
            </h1>
          </div>
        </header>

        <section className="py-16 bg-bg">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 font-heading">What We Do</h2>
            <p className="text-lg text-muted leading-relaxed mb-6">
              SourceSage helps businesses in Malaysia source spare parts for agricultural tractors and marine diesel engines — including parts that are hard to find through standard dealer channels. Based in Ipoh, Perak, we serve customers across Peninsula Malaysia and East Malaysia (Sabah and Sarawak).
            </p>
            <p className="text-lg text-muted leading-relaxed">
              We cover a range of brands including Kubota, Yanmar, Massey Ferguson, John Deere, Perkins, and Zoomlion.
            </p>
          </div>
        </section>

        <section className="py-16 bg-bg-alt border-y border-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 font-heading">Who We Help</h2>
            <ul className="space-y-4 text-lg text-muted">
              <li className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-accent shrink-0 mt-1" />
                <span>Workshops and dealers needing reliable parts supply</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-accent shrink-0 mt-1" />
                <span>Fleet operators and plantation managers</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-accent shrink-0 mt-1" />
                <span>Agricultural businesses where equipment downtime matters</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-accent shrink-0 mt-1" />
                <span>Marine operators requiring diesel engine components</span>
              </li>
            </ul>
            <p className="text-lg text-muted leading-relaxed mt-6">
              We serve customers across Peninsula Malaysia and East Malaysia (Sabah and Sarawak).
            </p>
          </div>
        </section>

        <section className="py-16 bg-bg">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 font-heading">How to Work With Us</h2>
            <p className="text-lg text-muted leading-relaxed mb-8">
              Get in touch with your part details — model, description, or photos — and we will follow up with availability and pricing information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsappCTA
                label="about-contact-cta"
                message="Hi, I need help sourcing a spare part. Brand: ___ Model: ___ Part needed: ___"
                className="px-8 py-4 text-lg font-bold rounded-xl text-white bg-green-500 hover:bg-green-600 transition-all text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" /> Contact SourceSage on WhatsApp
              </WhatsappCTA>
              <a
                href="mailto:info@sourcesage.ai"
                className="px-8 py-4 text-lg font-bold rounded-xl text-accent bg-accent/10 hover:bg-accent/15 transition-all text-center flex items-center justify-center gap-2 border border-accent/20"
              >
                <Mail className="w-5 h-5" /> Email info@sourcesage.ai
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 bg-accent text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Need a Part Sourced?</h2>
            <p className="text-accent/30 text-lg mb-8">Send us your part details and we'll check availability. We respond within 24 hours.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#request"
                className="px-8 py-4 text-lg font-bold rounded-xl bg-white text-accent hover:bg-accent/10 transition-all text-center"
              >
                Submit a Part Request
              </Link>
              <WhatsappCTA
                label="about-final-cta"
                message="Hi, I need help sourcing a spare part. Brand: ___ Model: ___ Part needed: ___"
                className="px-8 py-4 text-lg font-bold rounded-xl bg-green-500 hover:bg-green-600 text-white transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp Our Team
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
                <p className="text-sm text-muted mt-1">Ipoh, Perak — Malaysia Parts Sourcing Specialist</p>
              </div>
              <div className="flex gap-6 text-sm font-semibold">
                <a href="mailto:info@sourcesage.ai" className="hover:text-accent flex items-center gap-2 transition-colors">
                  <Mail className="w-4 h-4" /> info@sourcesage.ai
                </a>
                <WhatsappCTA
                  label="about-footer"
                  message="Hi, I need help sourcing a spare part. Brand: ___ Model: ___ Part needed: ___"
                  className="hover:text-green-600 flex items-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </WhatsappCTA>
              </div>
            </div>
            <div className="text-center pt-6 border-t border-border">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">© 2026 SourceSage.ai. Agricultural &amp; Marine Parts Sourcing, Malaysia.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
