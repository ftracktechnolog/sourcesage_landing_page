import Link from 'next/link'
import { MessageCircle, Mail, ChevronRight, CheckCircle, Wrench, Gauge, MapPin, ShieldCheck } from 'lucide-react'
import WhatsappCTA from '../../../components/WhatsappCTA'
import LangSwitcher from '../../../components/LangSwitcher'

export const metadata = {
  title: 'Perkins 4115P502 — Cylinder Head Gasket for 1104C-44 | SourceSage',
  description: 'Perkins 4115P502 MLS cylinder head gasket. Fits Perkins 1104C-44 engine. Genuine and aftermarket options. SourceSage supplies Malaysia — fast delivery, workshop pricing.',
  alternates: { canonical: '/parts/perkins-4115p502/', languages: { 'en': 'https://sourcesage.ai/parts/perkins-4115p502/', 'x-default': 'https://sourcesage.ai/parts/perkins-4115p502/' } },
  openGraph: {
    title: 'Perkins 4115P502 — Cylinder Head Gasket for 1104C-44 | SourceSage',
    description: 'Perkins 4115P502 MLS cylinder head gasket for 1104C-44 engine. Genuine and aftermarket options. SourceSage supplies Malaysia.',
    url: 'https://sourcesage.ai/parts/perkins-4115p502/',
    siteName: 'SourceSage.ai',
    type: 'website',
    locale: 'en',
    images: [{ url: 'https://sourcesage.ai/images/og-home.png', width: 1200, height: 630, alt: 'Perkins 4115P502 Cylinder Head Gasket — SourceSage' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Perkins 4115P502 — Cylinder Head Gasket for 1104C-44 | SourceSage',
    description: 'Perkins 4115P502 MLS cylinder head gasket for 1104C-44 engine. Genuine and aftermarket options.',
    images: ['https://sourcesage.ai/images/og-home.png'],
  },
}

const COMPATIBLE_MODELS = [
  { model: '1104C-44', engine: '1104C-44', note: '4.4L industrial diesel — common in generators, tractors, and construction' },
  { model: '1104C-44T', engine: '1104C-44T', note: 'Turbocharged variant of the 1104C-44' },
  { model: '1104C-44TA', engine: '1104C-44TA', note: 'Turbocharged and aftercooled — higher output' },
]

const FAQS = [
  {
    q: 'What is the Perkins 4115P502 gasket made of?',
    a: 'The 4115P502 is a Multi-Layer Steel (MLS) cylinder head gasket. MLS gaskets consist of multiple layers of spring steel with a elastomeric coating. They provide superior sealing compared to older composite gaskets and are designed for high-compression diesel engines.',
  },
  {
    q: 'What engines does the 4115P502 fit?',
    a: 'The 4115P502 cylinder head gasket is designed for the Perkins 1104C-44 engine family, including 1104C-44, 1104C-44T (turbo), and 1104C-44TA (turbo-aftercooled) variants.',
  },
  {
    q: 'When should I replace the cylinder head gasket?',
    a: 'Replace the head gasket if you see coolant in the oil (milky appearance), white smoke from the exhaust, coolant loss without visible leaks, engine overheating, or compression loss between cylinders. Always replace head bolts and check the cylinder head for warping when doing this job.',
  },
  {
    q: 'Do I need a full gasket set or just the head gasket?',
    a: 'If you are removing the cylinder head for a specific repair (e.g., valve job or injector replacement), you may only need the head gasket. For a full engine overhaul, we recommend a complete gasket set which includes valve stem seals, intake/exhaust gaskets, and all sealing rings.',
  },
  {
    q: 'How long does delivery take for the 4115P502 in Malaysia?',
    a: 'We stock the 4115P502 in Malaysia. Standard delivery is 1–3 working days to West Malaysia and 3–5 working days to Sabah and Sarawak. Express options are available for urgent rebuilds.',
  },
]

export default function Perkins4115Page() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'inLanguage': 'en',
    name: 'Perkins 4115P502 Cylinder Head Gasket Sourcing Malaysia',
    provider: {
      '@type': 'LocalBusiness',
      name: 'SourceSage.ai',
      url: 'https://sourcesage.ai',
      areaServed: { '@type': 'Country', name: 'Malaysia' },
    },
    description: 'Sourcing of Perkins 4115P502 MLS cylinder head gasket for 1104C-44 engine. Genuine and aftermarket options available in Malaysia.',
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
      { '@type': 'ListItem', position: 3, name: 'Perkins 4115P502 Head Gasket', item: 'https://sourcesage.ai/parts/perkins-4115p502/' },
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
        label="4115p502-sticky"
        message="Hi, I need a Perkins 4115P502 cylinder head gasket. My engine model: ___"
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
              label="4115p502-navbar"
              message="Hi, I need a Perkins 4115P502 cylinder head gasket. My engine model: ___"
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
            <span className="text-slate-700 font-medium">Perkins 4115P502</span>
          </div>
        </div>

        {/* Hero */}
        <header className="bg-white pt-16 pb-20 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-widest mb-6">
                <Gauge className="w-4 h-4 text-blue-600" /> Perkins OEM Part — Head Gasket
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
                Perkins 4115P502
              </h1>
              <p className="text-2xl font-bold text-blue-600 mb-4">MLS Cylinder Head Gasket — 1104C-44 Engine</p>
              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                Multi-Layer Steel (MLS) cylinder head gasket for the Perkins 1104C-44 industrial diesel engine family. Fits naturally aspirated, turbo, and turbo-aftercooled variants.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['OEM: 4115P502', 'Engine: 1104C-44', 'MLS Gasket', 'Malaysia Stock'].map(tag => (
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
                  label="4115p502-hero"
                  message="Hi, I need a Perkins 4115P502 cylinder head gasket. My engine model: ___"
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
              <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Perkins 4115P502 Cylinder Head Gasket</h3>
              <div className="bg-white rounded-2xl p-8 border border-slate-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { label: 'OEM Part Number', value: '4115P502' },
                    { label: 'Brand', value: 'Perkins' },
                    { label: 'Part Type', value: 'Cylinder Head Gasket (MLS)' },
                    { label: 'Material', value: 'Multi-Layer Steel' },
                    { label: 'Compatible Engines', value: '1104C-44, 1104C-44T, 1104C-44TA' },
                    { label: 'Replaces', value: '4115P501, 4115P500' },
                  ].map(row => (
                    <div key={row.label} className="border-b border-slate-100 pb-3">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{row.label}</p>
                      <p className="font-semibold text-slate-800">{row.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed mt-8">
                The Perkins 4115P502 is a Multi-Layer Steel (MLS) cylinder head gasket engineered for the Perkins 1104C-44 engine family. MLS gaskets offer superior durability and sealing performance compared to traditional composite gaskets, especially in turbocharged and high-compression applications. This gasket is essential for engine rebuilds, head removal for valve jobs, or replacing a blown gasket.
              </p>
            </div>
          </div>
        </section>

        {/* Compatible models */}
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">Compatible Models</h2>
              <h3 className="text-3xl font-bold text-slate-900">Engines Using the 4115P502</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
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
                      { brand: 'Perkins (OEM)', num: '4115P502', type: 'Genuine' },
                      { brand: 'Perkins (Superseded)', num: '4115P501', type: 'Superseded' },
                      { brand: 'Perkins (Superseded)', num: '4115P500', type: 'Superseded' },
                      { brand: 'Aftermarket', num: 'HG-1104C-44', type: 'Aftermarket' },
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
              <h3 className="text-3xl font-bold text-slate-900 mb-8">Source the 4115P502 Through SourceSage</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                {[
                  { icon: <MapPin className="w-6 h-6 text-green-500" />, title: 'Local Stock', body: '4115P502 stocked in Malaysia — ready for immediate dispatch to any state.' },
                  { icon: <ShieldCheck className="w-6 h-6 text-blue-500" />, title: 'OEM Specification', body: 'All gaskets meet Perkins OEM specifications. Aftermarket options tested for equivalent performance.' },
                  { icon: <Wrench className="w-6 h-6 text-orange-500" />, title: 'Workshop Pricing', body: 'Competitive pricing for workshops ordering multiple gasket sets. Bulk discounts available.' },
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
            <h2 className="text-3xl font-bold mb-4">Need a Perkins 4115P502 Head Gasket?</h2>
            <p className="text-blue-100 text-lg mb-8">Tell us your engine model and serial number. We'll confirm compatibility and pricing — usually within 24 hours.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#request" className="px-8 py-4 text-lg font-bold rounded-xl bg-white text-blue-700 hover:bg-blue-50 transition-all text-center">
                Submit a Part Request
              </Link>
              <WhatsappCTA
                label="4115p502-final-cta"
                message="Hi, I need a Perkins 4115P502 cylinder head gasket urgently. My engine model: ___"
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
                  label="4115p502-footer"
                  message="Hi, I need a Perkins 4115P502 cylinder head gasket. My engine model: ___"
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
