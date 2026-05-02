import Link from 'next/link'
import { MessageCircle, Mail, ChevronRight, CheckCircle, Wrench, Fuel, MapPin, Droplets } from 'lucide-react'
import WhatsappCTA from '../../../components/WhatsappCTA'
import LangSwitcher from '../../../components/LangSwitcher'

export const metadata = {
  title: 'John Deere RE525561 — Fuel Filter Assembly | SourceSage',
  description: 'John Deere RE525561 fuel filter assembly. Fits 5E and 6J series tractors. Genuine OEM and aftermarket options. SourceSage supplies Malaysia — fast delivery nationwide.',
  alternates: { canonical: '/parts/john-deere-re525561/', languages: { 'en': 'https://sourcesage.ai/parts/john-deere-re525561/', 'x-default': 'https://sourcesage.ai/parts/john-deere-re525561/' } },
  openGraph: {
    title: 'John Deere RE525561 — Fuel Filter Assembly | SourceSage',
    description: 'John Deere RE525561 fuel filter assembly for 5E and 6J series tractors. Genuine OEM and aftermarket options. SourceSage supplies Malaysia.',
    url: 'https://sourcesage.ai/parts/john-deere-re525561/',
    siteName: 'SourceSage.ai',
    type: 'website',
    locale: 'en',
    images: [{ url: 'https://sourcesage.ai/images/og-home.png', width: 1200, height: 630, alt: 'John Deere RE525561 Fuel Filter Assembly — SourceSage' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Deere RE525561 — Fuel Filter Assembly | SourceSage',
    description: 'John Deere RE525561 fuel filter assembly for 5E and 6J series tractors. Genuine OEM and aftermarket options.',
    images: ['https://sourcesage.ai/images/og-home.png'],
  },
}

const COMPATIBLE_MODELS = [
  { model: '5045E', engine: 'PowerTech 2.9L', note: 'Compact utility tractor — common in Malaysian smallholdings' },
  { model: '5050E', engine: 'PowerTech 2.9L', note: 'Popular 50hp utility tractor' },
  { model: '5075E', engine: 'PowerTech 3.0L', note: 'Higher horsepower E-series' },
  { model: '5090E', engine: 'PowerTech 3.0L', note: 'Largest E-series model' },
  { model: '6090J', engine: 'PowerTech 4.5L', note: 'Mid-range J-series' },
  { model: '6110J', engine: 'PowerTech 4.5L', note: 'Popular plantation tractor' },
]

const FAQS = [
  {
    q: 'What John Deere models does the RE525561 filter fit?',
    a: 'The RE525561 fuel filter assembly fits John Deere 5E series (5045E, 5050E, 5075E, 5090E) and 6J series (6090J, 6110J) tractors. It is the primary fuel filter in the fuel system and should be replaced according to the service schedule.',
  },
  {
    q: 'How often should I replace the RE525561 fuel filter?',
    a: 'John Deere recommends replacing the fuel filter every 500 hours or annually, whichever comes first. In Malaysian conditions with higher humidity and potential fuel contamination, we recommend more frequent replacement — every 250–300 hours for optimal injector protection.',
  },
  {
    q: 'Does the RE525561 assembly include the filter element?',
    a: 'Yes, the RE525561 is a complete fuel filter assembly including the filter head and element. If you only need a replacement element, check your model — some use a separate element part number. We can advise based on your tractor serial number.',
  },
  {
    q: 'Can I use an aftermarket filter instead of genuine John Deere?',
    a: 'Yes, high-quality aftermarket filters from brands like Donaldson and Baldwin meet or exceed OEM specifications at 30–50% lower cost. For tractors under warranty, genuine John Deere is recommended. For older machines, aftermarket is a proven cost-effective alternative.',
  },
  {
    q: 'How do you ship the RE525561 within Malaysia?',
    a: 'We ship nationwide via courier. West Malaysia: 1–2 working days. East Malaysia (Sabah, Sarawak): 3–5 working days. Urgent orders can be dispatched via express service at no additional cost for emergency breakdowns.',
  },
]

export default function JohnDeereRE525561Page() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'inLanguage': 'en',
    name: 'John Deere RE525561 Fuel Filter Assembly Sourcing Malaysia',
    provider: {
      '@type': 'LocalBusiness',
      name: 'SourceSage.ai',
      url: 'https://sourcesage.ai',
      areaServed: { '@type': 'Country', name: 'Malaysia' },
    },
    description: 'Sourcing of John Deere RE525561 fuel filter assembly for 5E and 6J series tractors. Genuine OEM and aftermarket options available in Malaysia.',
    serviceType: 'Parts Sourcing',
    areaServed: [
      { '@type': 'State', name: 'Kedah' },
      { '@type': 'State', name: 'Kelantan' },
      { '@type': 'State', name: 'Perak' },
      { '@type': 'State', name: 'Selangor' },
      { '@type': 'State', name: 'Johor' },
      { '@type': 'State', name: 'Sabah' },
      { '@type': 'State', name: 'Sarawak' },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'inLanguage': 'en',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sourcesage.ai/' },
      { '@type': 'ListItem', position: 2, name: 'Tractor Part Numbers', item: 'https://sourcesage.ai/parts/' },
      { '@type': 'ListItem', position: 3, name: 'John Deere RE525561 Fuel Filter', item: 'https://sourcesage.ai/parts/john-deere-re525561/' },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'inLanguage': 'en',
    mainEntity: FAQS.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'SpeakableSpecification',
    'inLanguage': 'en',
    xpath: ['/html/head/title', "/html/head/meta[@name='description']/@content"],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <WhatsappCTA
        label="re525561-sticky"
        message="Hi, I need a John Deere RE525561 fuel filter assembly. My tractor model: ___"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-5 py-3.5 rounded-full shadow-2xl font-bold text-sm flex items-center gap-2 transition-all hover:scale-105"
      >
        <MessageCircle className="w-5 h-5" /> WhatsApp Us
      </WhatsappCTA>

      <div className="min-h-screen font-sans text-slate-900 antialiased">
        {/* Navbar */}
        <nav className="bg-white shadow-sm sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <span className="font-bold text-xl text-slate-900 tracking-tight">SourceSage</span>
              <span className="text-blue-600 font-bold text-xl">.ai</span>
            </Link>
            <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
              <Link href="/#brands" className="hover:text-blue-600 transition-colors">Brands</Link>
              <Link href="/#marine" className="hover:text-blue-600 transition-colors">Marine</Link>
              <Link href="/#how-it-works" className="hover:text-blue-600 transition-colors">How It Works</Link>
              <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
              <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
              <Link href="/#request" className="hover:text-blue-600 transition-colors">Request a Part</Link>
            </div>
            <LangSwitcher currentLang="en" />
            <WhatsappCTA
              label="re525561-navbar"
              message="Hi, I need a John Deere RE525561 fuel filter assembly. My tractor model: ___"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg font-bold transition-all text-sm flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </WhatsappCTA>
          </div>
        </nav>

        {/* Breadcrumb */}
        <div className="bg-slate-50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-slate-500">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/parts/" className="hover:text-blue-600 transition-colors">Part Numbers</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700 font-medium">John Deere RE525561</span>
          </div>
        </div>

        {/* Hero */}
        <header className="bg-white pt-16 pb-20 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-widest mb-6">
                <Fuel className="w-4 h-4 text-blue-600" /> John Deere OEM Part — Fuel Filter
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
                John Deere RE525561
              </h1>
              <p className="text-2xl font-bold text-blue-600 mb-4">Fuel Filter Assembly — 5E & 6J Series</p>
              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                Complete fuel filter assembly for John Deere 5E and 6J series tractors. Protects fuel injectors and the injection pump from contaminants. Genuine OEM and aftermarket options available.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['OEM: RE525561', 'Tractor: 5E / 6J Series', 'Fuel Filter Assembly', 'Malaysia Stock'].map(tag => (
                  <span key={tag} className="px-3 py-1.5 bg-slate-100 rounded-lg text-xs font-bold text-slate-600">{tag}</span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#request"
                  className="px-8 py-4 text-lg font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all text-center flex items-center justify-center gap-2"
                >
                  Request This Part <ChevronRight className="w-5 h-5" />
                </Link>
                <WhatsappCTA
                  label="re525561-hero"
                  message="Hi, I need a John Deere RE525561 fuel filter assembly. My tractor model: ___"
                  className="px-8 py-4 text-lg font-bold rounded-xl text-white bg-green-500 hover:bg-green-600 transition-all text-center flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" /> WhatsApp Now
                </WhatsappCTA>
              </div>
            </div>
          </div>
        </header>

        {/* Part overview */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4 text-center">Part Overview</h2>
              <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">John Deere RE525561 Fuel Filter Assembly</h3>
              <div className="bg-white rounded-2xl p-8 border border-slate-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { label: 'OEM Part Number', value: 'RE525561' },
                    { label: 'Brand', value: 'John Deere' },
                    { label: 'Part Type', value: 'Fuel Filter Assembly' },
                    { label: 'Filtration', value: '10 micron primary filtration' },
                    { label: 'Compatible Tractors', value: '5E Series, 6J Series' },
                    { label: 'Replaces', value: 'RE524676, RE522273' },
                  ].map(row => (
                    <div key={row.label} className="border-b border-slate-100 pb-3">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{row.label}</p>
                      <p className="font-semibold text-slate-800">{row.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed mt-8">
                The John Deere RE525561 is a complete fuel filter assembly that mounts on the engine or chassis frame. It filters diesel fuel before it reaches the injection pump and injectors, removing water and particulates that can cause injector failure and pump damage. Regular replacement is essential for reliable engine operation, especially in Malaysian conditions where humidity and fuel quality vary.
              </p>
            </div>
          </div>
        </section>

        {/* Compatible models */}
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">Compatible Models</h2>
              <h3 className="text-3xl font-bold text-slate-900">Tractors Using the RE525561</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {COMPATIBLE_MODELS.map(m => (
                <div key={m.model} className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <h4 className="text-lg font-bold text-slate-900 mb-1">{m.model}</h4>
                  <p className="text-xs font-bold text-blue-600 mb-2">Engine: {m.engine}</p>
                  <p className="text-sm text-slate-500">{m.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OEM cross-reference */}
        <section className="py-20 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">OEM Cross-Reference</h2>
              <h3 className="text-3xl font-bold text-slate-900 mb-8">Alternate Part Numbers</h3>
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="text-left px-6 py-4 font-bold text-slate-700">Brand</th>
                      <th className="text-left px-6 py-4 font-bold text-slate-700">Part Number</th>
                      <th className="text-left px-6 py-4 font-bold text-slate-700">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { brand: 'John Deere (OEM)', num: 'RE525561', type: 'Genuine' },
                      { brand: 'John Deere (Superseded)', num: 'RE524676', type: 'Superseded' },
                      { brand: 'John Deere (Superseded)', num: 'RE522273', type: 'Superseded' },
                      { brand: 'Donaldson', num: 'P550940', type: 'Aftermarket' },
                      { brand: 'Baldwin', num: 'BF1318', type: 'Aftermarket' },
                    ].map(row => (
                      <tr key={row.num} className="border-b border-slate-100">
                        <td className="px-6 py-4 font-semibold text-slate-800">{row.brand}</td>
                        <td className="px-6 py-4 text-blue-700 font-bold">{row.num}</td>
                        <td className="px-6 py-4"><span className="px-2 py-1 bg-slate-100 rounded text-xs font-bold text-slate-600">{row.type}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Where to buy */}
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">Where to Buy in Malaysia</h2>
              <h3 className="text-3xl font-bold text-slate-900 mb-8">Source the RE525561 Through SourceSage</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                {[
                  { icon: <MapPin className="w-6 h-6 text-green-500" />, title: 'Nationwide Delivery', body: 'Stock in Malaysia — ship to Kedah, Perak, Selangor, Johor, Sabah and Sarawak.' },
                  { icon: <Droplets className="w-6 h-6 text-blue-500" />, title: 'Water Separation', body: 'Genuine and aftermarket options with effective water separation for Malaysian fuel conditions.' },
                  { icon: <Wrench className="w-6 h-6 text-orange-500" />, title: 'Bulk Filter Pricing', body: 'Workshop and fleet pricing available for regular filter change schedules.' },
                ].map(card => (
                  <div key={card.title} className="bg-slate-50 rounded-xl p-6 border border-slate-200 text-center">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">{card.icon}</div>
                    <h4 className="font-bold text-slate-900 mb-2">{card.title}</h4>
                    <p className="text-sm text-slate-500">{card.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-slate-50 border-t border-slate-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-6">
              {FAQS.map(faq => (
                <div key={faq.q} className="bg-white rounded-2xl p-7 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-3">{faq.q}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Need a John Deere RE525561 Filter?</h2>
            <p className="text-blue-100 text-lg mb-8">Tell us your tractor model and serial number. We'll confirm compatibility and pricing — usually within 24 hours.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#request" className="px-8 py-4 text-lg font-bold rounded-xl bg-white text-blue-700 hover:bg-blue-50 transition-all text-center">
                Submit a Part Request
              </Link>
              <WhatsappCTA
                label="re525561-final-cta"
                message="Hi, I need a John Deere RE525561 fuel filter assembly urgently. My tractor model: ___"
                className="px-8 py-4 text-lg font-bold rounded-xl bg-green-500 hover:bg-green-600 text-white transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp Our Team
              </WhatsappCTA>
            </div>
          </div>
        </section>

        {/* Footer */}
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
                <WhatsappCTA
                  label="re525561-footer"
                  message="Hi, I need a John Deere RE525561 fuel filter assembly. My tractor model: ___"
                  className="hover:text-green-600 flex items-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </WhatsappCTA>
              </div>
            </div>
            <div className="text-center pt-6 border-t border-slate-100">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">© 2026 SourceSage.ai. Agricultural &amp; Marine Parts Sourcing, Malaysia.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
