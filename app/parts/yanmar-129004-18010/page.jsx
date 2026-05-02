import Link from 'next/link'
import { MessageCircle, Mail, ChevronRight, CheckCircle, Wrench, Fuel, MapPin, Gauge } from 'lucide-react'
import WhatsappCTA from '../../../components/WhatsappCTA'
import LangSwitcher from '../../../components/LangSwitcher'

export const metadata = {
  title: 'Yanmar 129004-18010 — Fuel Injector for 3TNV/4TNV | SourceSage',
  description: 'Yanmar 129004-18010 fuel injector nozzle. Fits 3TNV88, 4TNV98 engines. Genuine OEM Yanmar. SourceSage supplies Malaysia workshops — fast delivery, competitive pricing.',
  alternates: { canonical: '/parts/yanmar-129004-18010/', languages: { 'en': 'https://sourcesage.ai/parts/yanmar-129004-18010/', 'x-default': 'https://sourcesage.ai/parts/yanmar-129004-18010/' } },
  openGraph: {
    title: 'Yanmar 129004-18010 — Fuel Injector for 3TNV/4TNV | SourceSage',
    description: 'Yanmar 129004-18010 fuel injector nozzle. Fits 3TNV88, 4TNV98 engines. Genuine OEM Yanmar. SourceSage supplies Malaysia workshops.',
    url: 'https://sourcesage.ai/parts/yanmar-129004-18010/',
    siteName: 'SourceSage.ai',
    type: 'website',
    locale: 'en',
    images: [{ url: 'https://sourcesage.ai/images/og-home.png', width: 1200, height: 630, alt: 'Yanmar 129004-18010 Fuel Injector — SourceSage' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yanmar 129004-18010 — Fuel Injector for 3TNV/4TNV | SourceSage',
    description: 'Yanmar 129004-18010 fuel injector nozzle. Fits 3TNV88, 4TNV98 engines. Genuine OEM Yanmar.',
    images: ['https://sourcesage.ai/images/og-home.png'],
  },
}

const COMPATIBLE_MODELS = [
  { model: '3TNV88', engine: '3TNV88', note: 'Compact diesel — used in generators, mini-excavators, compact tractors' },
  { model: '4TNV98', engine: '4TNV98', note: 'Industrial diesel — common in tractors and construction equipment' },
  { model: '3TNV82A', engine: '3TNV82A', note: 'Smaller TNV series — cross-check fitment' },
  { model: '4TNV84T', engine: '4TNV84T', note: 'Turbo variant — shares injector family' },
]

const FAQS = [
  {
    q: 'What engines does the Yanmar 129004-18010 injector fit?',
    a: 'The 129004-18010 is a fuel injector nozzle designed for Yanmar TNV series engines, primarily the 3TNV88 and 4TNV98. It may also fit other TNV variants — confirm your engine serial number before ordering.',
  },
  {
    q: 'How do I know if my injector needs replacing?',
    a: 'Symptoms include hard starting, rough idling, black or white exhaust smoke, reduced power, increased fuel consumption, and fuel knock. A professional injector test bench can confirm spray pattern and opening pressure.',
  },
  {
    q: 'Should I replace all injectors at once?',
    a: 'Yes — it is strongly recommended to replace all injectors as a set. Mixing old and new injectors leads to uneven fuel delivery, cylinder imbalance, and poor engine performance. Always replace the entire set.',
  },
  {
    q: 'Do you supply genuine Yanmar or aftermarket injectors?',
    a: 'We supply both genuine Yanmar OEM 129004-18010 injectors and high-quality aftermarket alternatives from trusted manufacturers. Genuine is recommended for newer engines under warranty; aftermarket is cost-effective for older models.',
  },
  {
    q: 'Can you ship the 129004-18010 to Sabah or Sarawak?',
    a: 'Yes. We ship to all Malaysian states including Sabah and Sarawak. East Malaysia deliveries typically take 3–5 working days. We also arrange air freight for urgent orders.',
  },
]

export default function Yanmar129004Page() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'inLanguage': 'en',
    name: 'Yanmar 129004-18010 Fuel Injector Sourcing Malaysia',
    provider: {
      '@type': 'LocalBusiness',
      name: 'SourceSage.ai',
      url: 'https://sourcesage.ai',
      areaServed: { '@type': 'Country', name: 'Malaysia' },
    },
    description: 'Sourcing of Yanmar 129004-18010 fuel injector nozzle for 3TNV88 and 4TNV98 engines. Genuine OEM and aftermarket options available in Malaysia.',
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
      { '@type': 'ListItem', position: 3, name: 'Yanmar 129004-18010 Fuel Injector', item: 'https://sourcesage.ai/parts/yanmar-129004-18010/' },
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
        label="129004-sticky"
        message="Hi, I need a Yanmar 129004-18010 fuel injector. My engine model: ___"
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
              <span className="text-accent font-bold text-xl">.ai</span>
            </Link>
            <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
              <Link href="/#brands" className="hover:text-accent transition-colors">Brands</Link>
              <Link href="/#marine" className="hover:text-accent transition-colors">Marine</Link>
              <Link href="/#how-it-works" className="hover:text-accent transition-colors">How It Works</Link>
              <Link href="/about" className="hover:text-accent transition-colors">About</Link>
              <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
              <Link href="/#request" className="hover:text-accent transition-colors">Request a Part</Link>
            </div>
            <LangSwitcher currentLang="en" />
            <WhatsappCTA
              label="129004-navbar"
              message="Hi, I need a Yanmar 129004-18010 fuel injector. My engine model: ___"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg font-bold transition-all text-sm flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </WhatsappCTA>
          </div>
        </nav>

        {/* Breadcrumb */}
        <div className="bg-slate-50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-slate-500">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/parts/" className="hover:text-accent transition-colors">Part Numbers</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700 font-medium">Yanmar 129004-18010</span>
          </div>
        </div>

        {/* Hero */}
        <header className="bg-white pt-16 pb-20 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-6">
                <Fuel className="w-4 h-4 text-accent" /> Yanmar OEM Part — Fuel Injector
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
                Yanmar 129004-18010
              </h1>
              <p className="text-2xl font-bold text-accent mb-4">Fuel Injector Nozzle — 3TNV88 & 4TNV98 Engines</p>
              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                Genuine Yanmar fuel injector nozzle for 3TNV88 and 4TNV98 diesel engines. Used in compact tractors, mini-excavators, generators, and industrial equipment across Malaysia.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['OEM: 129004-18010', 'Engine: 3TNV88 / 4TNV98', 'TNV Series Compatible', 'Malaysia Stock'].map(tag => (
                  <span key={tag} className="px-3 py-1.5 bg-slate-100 rounded-lg text-xs font-bold text-slate-600">{tag}</span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#request"
                  className="px-8 py-4 text-lg font-bold rounded-xl text-white bg-accent hover:bg-accent-light shadow-xl shadow-accent/20 transition-all text-center flex items-center justify-center gap-2"
                >
                  Request This Part <ChevronRight className="w-5 h-5" />
                </Link>
                <WhatsappCTA
                  label="129004-hero"
                  message="Hi, I need a Yanmar 129004-18010 fuel injector. My engine model: ___"
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
              <h2 className="text-sm font-black text-accent uppercase tracking-[0.3em] mb-4 text-center">Part Overview</h2>
              <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Yanmar 129004-18010 Fuel Injector</h3>
              <div className="bg-white rounded-2xl p-8 border border-slate-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { label: 'OEM Part Number', value: '129004-18010' },
                    { label: 'Brand', value: 'Yanmar' },
                    { label: 'Part Type', value: 'Fuel Injector Nozzle' },
                    { label: 'Opening Pressure', value: '19.6 MPa (200 kgf/cm²)' },
                    { label: 'Compatible Engines', value: '3TNV88, 4TNV98' },
                    { label: 'Replaces', value: '129004-18000, 129907-18010' },
                  ].map(row => (
                    <div key={row.label} className="border-b border-slate-100 pb-3">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{row.label}</p>
                      <p className="font-semibold text-slate-800">{row.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed mt-8">
                The Yanmar 129004-18010 is a precision fuel injector nozzle designed for Yanmar TNV-series industrial diesel engines. It atomises fuel at high pressure for efficient combustion. Worn or clogged injectors cause power loss, excessive smoke, and increased fuel consumption. Regular inspection and timely replacement keep your Yanmar engine running efficiently.
              </p>
            </div>
          </div>
        </section>

        {/* Compatible models */}
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-sm font-black text-accent uppercase tracking-[0.3em] mb-4">Compatible Models</h2>
              <h3 className="text-3xl font-bold text-slate-900">Engines Using the 129004-18010</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {COMPATIBLE_MODELS.map(m => (
                <div key={m.model} className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <h4 className="text-lg font-bold text-slate-900 mb-1">{m.model}</h4>
                  <p className="text-xs font-bold text-accent mb-2">Engine: {m.engine}</p>
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
              <h2 className="text-sm font-black text-accent uppercase tracking-[0.3em] mb-4">OEM Cross-Reference</h2>
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
                      { brand: 'Yanmar (OEM)', num: '129004-18010', type: 'Genuine' },
                      { brand: 'Yanmar (Superseded)', num: '129004-18000', type: 'Superseded' },
                      { brand: 'Yanmar (Alt)', num: '129907-18010', type: 'Alternate' },
                      { brand: 'Aftermarket', num: 'DN0PDN126', type: 'Aftermarket (Denso)' },
                    ].map(row => (
                      <tr key={row.num} className="border-b border-slate-100">
                        <td className="px-6 py-4 font-semibold text-slate-800">{row.brand}</td>
                        <td className="px-6 py-4 text-accent font-bold">{row.num}</td>
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
              <h2 className="text-sm font-black text-accent uppercase tracking-[0.3em] mb-4">Where to Buy in Malaysia</h2>
              <h3 className="text-3xl font-bold text-slate-900 mb-8">Source the 129004-18010 Through SourceSage</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                {[
                  { icon: <MapPin className="w-6 h-6 text-green-500" />, title: 'Malaysia Stock', body: 'Injectors in stock at our Malaysia warehouse — ready for same-week dispatch.' },
                  { icon: <Gauge className="w-6 h-6 text-accent" />, title: 'Tested & Certified', body: 'Every injector is verified for correct opening pressure and spray pattern before shipping.' },
                  { icon: <Wrench className="w-6 h-6 text-orange-500" />, title: 'Set Pricing Available', body: 'Order complete injector sets at discounted pricing for workshops and fleet operators.' },
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
        <section className="py-20 bg-accent text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Need a Yanmar 129004-18010 Injector?</h2>
            <p className="text-blue-100 text-lg mb-8">Tell us your engine model and serial number. We'll confirm compatibility and pricing — usually within 24 hours.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#request" className="px-8 py-4 text-lg font-bold rounded-xl bg-white text-accent hover:bg-accent/10 transition-all text-center">
                Submit a Part Request
              </Link>
              <WhatsappCTA
                label="129004-final-cta"
                message="Hi, I need a Yanmar 129004-18010 fuel injector urgently. My engine model: ___"
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
                <span className="font-black text-xl text-accent">.ai</span>
                <p className="text-sm text-slate-500 mt-1">Malaysia-Based Parts Sourcing Specialist</p>
              </div>
              <div className="flex gap-6 text-sm font-semibold">
                <a href="mailto:info@sourcesage.ai" className="hover:text-accent flex items-center gap-2 transition-colors">
                  <Mail className="w-4 h-4" /> info@sourcesage.ai
                </a>
                <WhatsappCTA
                  label="129004-footer"
                  message="Hi, I need a Yanmar 129004-18010 fuel injector. My engine model: ___"
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
