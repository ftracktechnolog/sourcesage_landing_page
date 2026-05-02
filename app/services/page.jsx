import Link from 'next/link'
import { MessageCircle, Mail, Wrench, MapPin, Clock, Truck, CheckCircle, ChevronRight, ShieldCheck } from 'lucide-react'
import WhatsappCTA from '../../components/WhatsappCTA'
import LangSwitcher from '../../components/LangSwitcher'

export const metadata = {
  title: 'Spare Parts Sourcing Service Malaysia — How It Works | SourceSage',
  description: 'How our parts sourcing service works in Malaysia. 5-step process: submit request, availability check, quote & lead time, confirm order, delivery. Agricultural and marine diesel engine parts.',
  alternates: { canonical: '/services/', languages: { 'en': 'https://sourcesage.ai/services/', 'x-default': 'https://sourcesage.ai/services/' } },
  openGraph: {
    title: 'Spare Parts Sourcing Service Malaysia — How It Works | SourceSage',
    description: 'How our parts sourcing service works in Malaysia. 5-step process from request to delivery.',
    url: 'https://sourcesage.ai/services/',
    siteName: 'SourceSage.ai',
    type: 'website',
    locale: 'en',
    images: [{ url: 'https://sourcesage.ai/images/og-home.png', width: 1200, height: 630, alt: 'SourceSage Parts Sourcing Service — How It Works' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spare Parts Sourcing Service Malaysia — How It Works | SourceSage',
    description: 'How our parts sourcing service works in Malaysia. 5-step process from request to delivery.',
    images: ['https://sourcesage.ai/images/og-home.png'],
  },
}

const FAQS = [
  { q: 'How quickly can you confirm part availability?', a: 'We typically respond within 24-48 hours with pricing, availability, and estimated delivery time. Urgent requests are prioritised — mention "machine down" in your message.' },
  { q: 'What happens if the part I need is discontinued?', a: 'We search our secondary dealer network across Japan, Singapore, India, and the UK. Many discontinued parts are still available through these channels. We will be transparent about availability before you commit.' },
  { q: 'What brands and equipment do you cover?', a: 'Kubota, Yanmar, Massey Ferguson, John Deere, Perkins, and Zoomlion for agricultural tractors. Yanmar, Perkins, Isuzu, and Hino for marine diesel engines. We also handle Chinese-manufactured equipment increasingly common in Malaysian plantations.' },
  { q: 'Is there a minimum order or service fee?', a: 'No minimum order. We handle single-part requests the same as bulk orders. There is no upfront service fee — you pay for the part and shipping only after confirming the quote.' },
  { q: 'What areas in Malaysia do you serve?', a: 'All states in Malaysia including Sabah and Sarawak. We are based in Ipoh, Perak, with same-day courier for Ipoh/Kinta Valley and 1-3 day delivery across Peninsula Malaysia. East Malaysia shipping is handled via tracked courier or air freight.' },
]

const STEPS = [
  { number: '1', title: 'Submit a Part Request', items: ['Share your brand, model, and part description', 'Include photos or measurements if possible', 'Tell us if the machine is currently down'] },
  { number: '2', title: 'Availability Check', items: ['We search our multi-supplier network', 'Includes OEM, aftermarket, and secondary dealers', 'Average response: 24-48 hours'] },
  { number: '3', title: 'Quote & Lead Time', items: ['We share pricing and delivery options', 'Air freight (3-7 days) vs sea freight (14-21 days)', 'Local courier if we have regional stock'] },
  { number: '4', title: 'Confirm & Pay', items: ['Review quote and confirm your order', 'Payment before dispatch', 'Full tracking provided'] },
  { number: '5', title: 'Delivery', items: ['Dispatched to your location in Malaysia', 'Peninsula: 1-3 working days local courier', 'East Malaysia: tracked courier or air freight'] },
]

export default function ServicesPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'inLanguage': 'en',
    name: 'Tractor & Marine Engine Parts Sourcing Malaysia',
    provider: { '@type': 'LocalBusiness', name: 'SourceSage.ai', url: 'https://sourcesage.ai', address: { '@type': 'PostalAddress', addressLocality: 'Ipoh', addressRegion: 'Perak', addressCountry: 'MY' } },
    description: '5-step spare parts sourcing service for agricultural tractors and marine diesel engines in Malaysia. Submit a request, receive availability confirmation within 24-48 hours, and get delivery anywhere in Malaysia.',
    serviceType: 'Parts Sourcing',
    areaServed: { '@type': 'Country', name: 'Malaysia' },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'inLanguage': 'en',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sourcesage.ai/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://sourcesage.ai/services' },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'inLanguage': 'en',
    mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <WhatsappCTA label="services-sticky" message="Hi, I need help sourcing a spare part. Brand: ___ Model: ___ Part needed: ___" className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-5 py-3.5 rounded-full shadow-2xl font-bold text-sm flex items-center gap-2 transition-all hover:scale-105">
        <MessageCircle className="w-5 h-5" /> WhatsApp Us
      </WhatsappCTA>
      <div className="min-h-screen font-sans text-slate-900 antialiased">
        <nav className="bg-bg/95 backdrop-blur-sm border-b border-border sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <span className="font-bold text-xl text-slate-900 tracking-tight">SourceSage</span>
              <span className="text-accent font-bold text-xl">.ai</span>
            </Link>
            <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
              <Link href="/#brands" className="hover:text-accent transition-colors">Brands</Link>
              <Link href="/#marine" className="hover:text-accent transition-colors">Marine</Link>
              <Link href="/services" className="text-accent transition-colors">Services</Link>
              <Link href="/about" className="hover:text-accent transition-colors">About</Link>
              <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
              <Link href="/#request" className="hover:text-accent transition-colors">Request a Part</Link>
            </div>
            <div className="flex items-center gap-2">
              <WhatsappCTA label="services-navbar" message="Hi, I need help sourcing a spare part. Brand: ___ Model: ___ Part needed: ___" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg font-bold transition-all text-sm flex items-center gap-2">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </WhatsappCTA>
              <LangSwitcher currentLang="en" />
            </div>
          </div>
        </nav>
        <div className="bg-bg-alt border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700 font-medium">Services</span>
          </div>
        </div>
        <header className="bg-bg pt-16 pb-20 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-6">
              <Clock className="w-4 h-4" /> Fast Sourcing, Malaysia-Wide
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6 max-w-3xl">How Our Parts Sourcing Service Works</h1>
            <p className="text-lg text-muted max-w-2xl leading-relaxed">A 5-step process that takes you from "I need this part" to "it's here" — with transparent pricing, multiple shipping options, and coverage across all Malaysian states.</p>
          </div>
        </header>
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {STEPS.map((step, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow text-center">
                  <div className="w-14 h-14 bg-accent text-white rounded-2xl flex items-center justify-center text-lg font-black mx-auto mb-4">{step.number}</div>
                  <h3 className="font-bold text-slate-900 mb-3 text-sm font-heading">{step.title}</h3>
                  <ul className="text-xs text-muted space-y-1 text-left">
                    {step.items.map((item, j) => (<li key={j} className="flex items-start gap-2"><span className="text-accent/60 mt-0.5">·</span> {item}</li>))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 bg-bg-alt border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Choose Our Sourcing Service</h2>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4"><Wrench className="w-6 h-6 text-accent shrink-0 mt-0.5" /><div><strong className="text-slate-900">Multi-brand, not single-brand</strong><p className="text-sm text-muted mt-1">We search across all major agricultural and marine brands simultaneously — you don't need to contact multiple dealers.</p></div></li>
                  <li className="flex items-start gap-4"><MapPin className="w-6 h-6 text-accent shrink-0 mt-0.5" /><div><strong className="text-slate-900">Based in Ipoh, Perak</strong><p className="text-sm text-muted mt-1">Local presence means faster communication, local courier options, and understanding of Malaysian agricultural and marine markets.</p></div></li>
                  <li className="flex items-start gap-4"><Truck className="w-6 h-6 text-accent shrink-0 mt-0.5" /><div><strong className="text-slate-900">Multiple shipping options</strong><p className="text-sm text-muted mt-1">Air freight for urgency (3-7 days), sea freight for budget (14-21 days), or local courier for regional stock (1-3 days).</p></div></li>
                  <li className="flex items-start gap-4"><ShieldCheck className="w-6 h-6 text-accent shrink-0 mt-0.5" /><div><strong className="text-slate-900">OEM and aftermarket options</strong><p className="text-sm text-muted mt-1">We present both genuine OEM and quality aftermarket alternatives with clear labelling and warranty terms.</p></div></li>
                </ul>
              </div>
              <div className="mt-12 lg:mt-0 bg-accent/10 border border-accent/20 rounded-2xl p-8">
                <h3 className="font-bold text-lg text-slate-900 mb-4">Ready to Start?</h3>
                <p className="text-muted mb-6">Send us your part details. We'll confirm availability within 24-48 hours — no obligation, no upfront fee.</p>
                <WhatsappCTA label="services-main-cta" message="Hi, I need help sourcing a spare part. Brand: ___ Model: ___ Part needed: ___" className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3.5 rounded-xl font-bold transition-all w-full">
                  <MessageCircle className="w-5 h-5" /> Submit a Part Request
                </WhatsappCTA>
              </div>
            </div>
          </div>
        </section>
        <footer className="bg-bg-alt py-12 text-muted border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
              <div><span className="font-black text-xl tracking-tighter text-slate-900">SourceSage</span><span className="font-black text-xl text-accent">.ai</span><p className="text-sm text-muted mt-1">Ipoh, Perak — Malaysia Parts Sourcing Specialist</p></div>
              <div className="flex gap-6 text-sm font-semibold">
                <a href="mailto:info@sourcesage.ai" className="hover:text-accent flex items-center gap-2 transition-colors"><Mail className="w-4 h-4" /> info@sourcesage.ai</a>
                <WhatsappCTA label="services-footer" message="Hi, I need help sourcing a spare part. Brand: ___ Model: ___ Part needed: ___" className="hover:text-green-600 flex items-center gap-2 transition-colors"><MessageCircle className="w-4 h-4" /> WhatsApp</WhatsappCTA>
              </div>
            </div>
            <div className="text-center pt-6 border-t border-border"><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">© 2026 SourceSage.ai. Parts Sourcing Service, Malaysia.</p></div>
          </div>
        </footer>
      </div>
    </>
  )
}
