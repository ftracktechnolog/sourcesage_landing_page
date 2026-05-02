import Link from 'next/link'
import { MessageCircle, Mail, ChevronRight, Search, ClipboardCheck, Truck, ShieldCheck } from 'lucide-react'
import WhatsappCTA from '../../components/WhatsappCTA'
import LangSwitcher from '../../components/LangSwitcher'

export const metadata = {
  title: 'How It Works — Parts Sourcing Process | SourceSage',
  description: 'Our 5-step parts sourcing process: submit a request, availability check, quote & lead time, confirm order, delivery to your workshop in Malaysia.',
  alternates: { canonical: '/how-it-works/', languages: { 'en': 'https://sourcesage.ai/how-it-works/', 'x-default': 'https://sourcesage.ai/how-it-works/' } },
  openGraph: {
    title: 'How It Works — Parts Sourcing Process | SourceSage',
    description: 'Our 5-step parts sourcing process: submit a request, availability check, quote & lead time, confirm order, delivery to your workshop in Malaysia.',
    url: 'https://sourcesage.ai/how-it-works/',
    siteName: 'SourceSage.ai', type: 'website', locale: 'en',
    images: [{ url: 'https://sourcesage.ai/images/og-home.png', width: 1200, height: 630, alt: 'How It Works — SourceSage Parts Sourcing Process' }],
  },
  twitter: { card: 'summary_large_image', title: 'How It Works — Parts Sourcing Process | SourceSage', description: 'Our 5-step parts sourcing process from request to delivery.', images: ['https://sourcesage.ai/images/og-home.png'] },
}

const STEPS = [
  {
    number: 1,
    title: 'Submit a Request',
    body: 'Tell us the brand, model, and part number you need. Include your machine\'s serial number if available. Use our WhatsApp, email, or the request form on our homepage.',
    details: [
      'Include photos of the part or serial plate if possible',
      'Mention "machine down" for urgent prioritisation',
      'We respond within hours, not days',
    ],
  },
  {
    number: 2,
    title: 'Availability Check',
    body: 'We search our network of suppliers across Malaysia, Japan, Singapore, India, and the UK. Local stock is checked within hours; international sourcing takes 24-48 hours.',
    details: [
      'We check OEM and quality aftermarket options',
      'Discontinued parts searched through secondary dealer network',
      'You get a transparent answer on what\'s available and what\'s not',
    ],
  },
  {
    number: 3,
    title: 'Quote & Lead Time',
    body: 'You receive a clear quote with part price, shipping cost, and estimated delivery date. No hidden fees. No pressure to commit — we present options and you decide.',
    details: [
      'OEM and aftermarket pricing presented side by side',
      'Multiple shipping options: air, sea, or local courier',
      'Quote valid for 7 days unless market conditions change',
    ],
  },
  {
    number: 4,
    title: 'Confirm Order',
    body: 'Once you confirm, we place the order with our supplier. You receive a confirmation with tracking details and expected delivery milestones.',
    details: [
      'Payment via bank transfer (Malaysia)',
      'Order confirmation within 24 hours of payment',
      'WhatsApp updates at every stage',
    ],
  },
  {
    number: 5,
    title: 'Delivery',
    body: 'Parts shipped to your workshop or specified address anywhere in Malaysia — Peninsular, Sabah, and Sarawak. Tracked courier with delivery confirmation.',
    details: [
      'Air freight: 3-7 working days',
      'Sea freight: 14-21 working days',
      'Local courier (in-stock): 1-3 working days',
    ],
  },
]

export default function HowItWorksPage() {
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
            <Link href="/how-it-works" className="text-accent transition-colors">How It Works</Link>
            <Link href="/about" className="hover:text-accent transition-colors">About</Link>
            <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
            <Link href="/#request" className="hover:text-accent transition-colors">Request a Part</Link>
          </div>
          <LangSwitcher currentLang="en" />
          <WhatsappCTA
            label="how-it-works-navbar"
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
          <span className="text-slate-600">How It Works</span>
        </nav>
      </div>

      <main>
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">How Parts Sourcing Works</h1>
              <p className="text-lg text-muted leading-relaxed">
                From the moment you contact us to the day the part arrives at your workshop — here is exactly how our process works. No guesswork, no surprises.
              </p>
            </div>
            <div className="space-y-16">
              {STEPS.map((step, i) => (
                <div key={i} className="grid md:grid-cols-5 gap-8 items-start">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="w-12 h-12 bg-accent text-white rounded-2xl flex items-center justify-center text-xl font-black shrink-0">
                        {step.number}
                      </span>
                      <h2 className="text-2xl font-bold text-slate-900 font-heading">{step.title}</h2>
                    </div>
                    <p className="text-muted leading-relaxed">{step.body}</p>
                  </div>
                  <div className="md:col-span-3 bg-bg-alt rounded-2xl p-8 border border-border">
                    <ul className="space-y-4">
                      {step.details.map((detail, j) => (
                        <li key={j} className="flex items-start gap-3 text-slate-700">
                          <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-accent text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 font-heading">Ready to Get Started?</h2>
            <p className="text-accent/80 text-lg mb-8">Send us your part request now. We'll confirm availability and pricing within 24-48 hours.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#request" className="px-8 py-4 text-lg font-bold rounded-xl bg-white text-accent hover:bg-accent/10 transition-all text-center">
                Submit a Part Request
              </Link>
              <WhatsappCTA
                label="how-it-works-cta"
                message="Hi, I need help sourcing a spare part. Brand: ___ Model: ___ Part needed: ___"
                className="px-8 py-4 text-lg font-bold rounded-xl bg-green-500 hover:bg-green-600 text-white transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp Our Team
              </WhatsappCTA>
            </div>
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
              <WhatsappCTA label="how-it-works-footer" message="Hi, I need help sourcing a spare part. Brand: ___ Model: ___ Part needed: ___" className="hover:text-green-600 flex items-center gap-2 transition-colors">
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
