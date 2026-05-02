import Link from 'next/link'
import { MessageCircle, Mail, ChevronRight } from 'lucide-react'
import WhatsappCTA from '../../components/WhatsappCTA'
import LangSwitcher from '../../components/LangSwitcher'
import ContactForm from './contact-form'

export const metadata = {
  title: 'Contact Us — SourceSage Parts Sourcing Malaysia',
  description: 'Contact SourceSage for hard-to-find tractor and marine engine parts. WhatsApp, email, or use our contact form. Based in Ipoh, Perak — serving all Malaysia.',
  alternates: { canonical: '/contact/', languages: { 'en': 'https://sourcesage.ai/contact/', 'x-default': 'https://sourcesage.ai/contact/' } },
  openGraph: {
    title: 'Contact Us — SourceSage Parts Sourcing Malaysia',
    description: 'Contact SourceSage for hard-to-find tractor and marine engine parts. Based in Ipoh, Perak — serving all Malaysia.',
    url: 'https://sourcesage.ai/contact/',
    siteName: 'SourceSage.ai', type: 'website', locale: 'en',
    images: [{ url: 'https://sourcesage.ai/images/og-home.png', width: 1200, height: 630, alt: 'Contact SourceSage — Parts Sourcing Malaysia' }],
  },
  twitter: { card: 'summary_large_image', title: 'Contact Us — SourceSage Parts Sourcing Malaysia', description: 'Contact SourceSage for hard-to-find tractor and marine engine parts.', images: ['https://sourcesage.ai/images/og-home.png'] },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen font-sans text-slate-900 antialiased">
      <nav className="bg-bg/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className="font-bold text-xl text-slate-900 tracking-tight">SourceSage</span>
            <span className="text-accent font-bold text-xl">.ai</span>
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-semibold text-muted">
            <Link href="/#brands" className="hover:text-accent transition-colors">Brands</Link>
            <Link href="/#marine" className="hover:text-accent transition-colors">Marine</Link>
            <Link href="/how-it-works" className="hover:text-accent transition-colors">How It Works</Link>
            <Link href="/about" className="hover:text-accent transition-colors">About</Link>
            <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
            <Link href="/#request" className="hover:text-accent transition-colors">Request a Part</Link>
          </div>
          <LangSwitcher currentLang="en" />
          <WhatsappCTA
            label="contact-navbar"
            message="Hi, I need help sourcing a spare part. Brand: ___ Model: ___ Part needed: ___"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg font-bold transition-all text-sm flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp Us
          </WhatsappCTA>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav className="flex items-center gap-2 text-xs text-muted font-medium">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-600">Contact Us</span>
        </nav>
      </div>

      <main>
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 font-heading">Contact Us</h1>
              <p className="text-lg text-muted leading-relaxed">
                The fastest way to reach us is via WhatsApp. For detailed requests, use our contact form below or email us directly.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="bg-bg-alt rounded-2xl p-8 border border-border mb-8">
                  <h2 className="text-xl font-bold text-slate-900 mb-6 font-heading">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                        <MessageCircle className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-sm mb-1">WhatsApp (Fastest)</h3>
                        <WhatsappCTA
                          label="contact-whatsapp"
                          message="Hi, I need help sourcing a spare part. Brand: ___ Model: ___ Part needed: ___"
                          className="text-accent hover:text-accent-light font-semibold transition-colors text-sm"
                        >
                          Send us a message
                        </WhatsappCTA>
                        <p className="text-xs text-muted mt-1">Typical response: within 1-2 hours during business hours</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-sm mb-1">Email</h3>
                        <a href="mailto:info@sourcesage.ai" className="text-accent hover:text-accent-light font-semibold transition-colors text-sm">
                          info@sourcesage.ai
                        </a>
                        <p className="text-xs text-muted mt-1">We respond to all emails within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-bg-alt rounded-2xl p-8 border border-border">
                  <h2 className="text-xl font-bold text-slate-900 mb-4 font-heading">Office Location</h2>
                  <p className="text-muted text-sm leading-relaxed">
                    Ipoh, Perak, Malaysia<br />
                    Serving customers nationwide — Peninsular Malaysia, Sabah, and Sarawak.
                  </p>
                </div>
              </div>
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-accent text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 font-heading">Prefer WhatsApp?</h2>
            <p className="text-accent/80 text-lg mb-8">Most customers get the fastest response through WhatsApp. Message us now.</p>
            <WhatsappCTA
              label="contact-final-cta"
              message="Hi, I need help sourcing a spare part. Brand: ___ Model: ___ Part needed: ___"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all"
            >
              <MessageCircle className="w-7 h-7" /> WhatsApp Us Now
            </WhatsappCTA>
          </div>
        </section>
      </main>

      <footer className="bg-bg-alt py-12 text-muted border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div>
              <span className="font-black text-xl tracking-tighter text-slate-900">SourceSage</span>
              <span className="font-black text-xl text-accent">.ai</span>
              <p className="text-sm text-muted mt-1">Ipoh, Perak — Malaysia Parts Sourcing Specialist</p>
            </div>
            <div className="flex gap-6 text-sm font-semibold">
              <a href="mailto:info@sourcesage.ai" className="hover:text-accent flex items-center gap-2 transition-colors">
                <Mail className="w-4 h-4" /> info@sourcesage.ai
              </a>
              <WhatsappCTA label="contact-footer" message="Hi, I need help sourcing a spare part. Brand: ___ Model: ___ Part needed: ___" className="hover:text-green-600 flex items-center gap-2 transition-colors">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </WhatsappCTA>
            </div>
          </div>
          <div className="text-center pt-6 border-t border-border">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">© 2026 SourceSage.ai. Parts Sourcing Service, Malaysia.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
