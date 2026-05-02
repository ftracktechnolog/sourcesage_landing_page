import Link from 'next/link'
import { MessageCircle, Mail, ChevronRight, CheckCircle, Wrench, Droplets, Thermometer, MapPin } from 'lucide-react'
import WhatsappCTA from '../../../components/WhatsappCTA'
import LangSwitcher from '../../../components/LangSwitcher'

export const metadata = {
  title: 'Kubota 1G772-03310 — Water Pump for L-Series | SourceSage',
  description: 'Kubota 1G772-03310 genuine water pump. Fits L3408, L3608, L4400 tractors with V1505 & V2403 engines. SourceSage stocks in Malaysia. OEM quality, fast delivery.',
  alternates: { canonical: '/parts/kubota-1g772-03310/', languages: { 'en': 'https://sourcesage.ai/parts/kubota-1g772-03310/', 'x-default': 'https://sourcesage.ai/parts/kubota-1g772-03310/' } },
  openGraph: {
    title: 'Kubota 1G772-03310 — Water Pump for L-Series | SourceSage',
    description: 'Kubota 1G772-03310 genuine water pump. Fits L3408, L3608, L4400 tractors with V1505 & V2403 engines. OEM quality, fast delivery in Malaysia.',
    url: 'https://sourcesage.ai/parts/kubota-1g772-03310/',
    siteName: 'SourceSage.ai',
    type: 'website',
    locale: 'en',
    images: [{ url: 'https://sourcesage.ai/images/og-home.png', width: 1200, height: 630, alt: 'Kubota 1G772-03310 Water Pump — SourceSage' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kubota 1G772-03310 — Water Pump for L-Series | SourceSage',
    description: 'Kubota 1G772-03310 genuine water pump. Fits L3408, L3608, L4400 tractors with V1505 & V2403 engines.',
    images: ['https://sourcesage.ai/images/og-home.png'],
  },
}

const COMPATIBLE_MODELS = [
  { model: 'L3408', engine: 'V1505', note: 'Compact utility tractor — most common L-series in Malaysia' },
  { model: 'L3608', engine: 'V1505', note: 'Popular in paddy farming' },
  { model: 'L4400', engine: 'V2403', note: 'Higher horsepower L-series' },
  { model: 'L4508', engine: 'V2403', note: 'Medium-duty farm tractor' },
  { model: 'L4708', engine: 'V2403', note: 'Latest L-series model' },
]

const FAQS = [
  {
    q: 'What engines does the Kubota 1G772-03310 water pump fit?',
    a: 'The 1G772-03310 water pump is designed for Kubota V1505 and V2403 diesel engines. These engines power the L3408, L3608, L4400, L4508, and L4708 tractors, as well as some Kubota generator sets.',
  },
  {
    q: 'Is the 1G772-03310 a genuine OEM Kubota part?',
    a: 'Yes, 1G772-03310 is the genuine Kubota OEM part number. We stock both genuine Kubota and high-quality aftermarket alternatives. Aftermarket options typically cost 30–50% less while meeting OEM specifications.',
  },
  {
    q: 'How do I know if my water pump needs replacing?',
    a: 'Common symptoms include coolant leaks from the pump weep hole, engine overheating, squealing noise from the pump bearing, and visible corrosion or rust around the pump housing. If you notice any of these, replace the pump immediately to avoid engine damage.',
  },
  {
    q: 'Do I need to replace other parts when changing the water pump?',
    a: 'It is recommended to replace the thermostat, thermostat gasket, and coolant at the same time. Inspect the fan belt and radiator hoses for wear. Replacing these together saves labour costs and prevents future cooling system failures.',
  },
  {
    q: 'How fast can you deliver the 1G772-03310 in Malaysia?',
    a: 'We carry stock in Malaysia for the 1G772-03310 water pump. Standard delivery is 1–3 working days to most states including Kedah, Perak, Selangor, Johor, Kelantan, Sabah and Sarawak. Express shipping is available for urgent machine-down situations.',
  },
]

export default function Kubota1G772Page() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'inLanguage': 'en',
    name: 'Kubota 1G772-03310 Water Pump Sourcing Malaysia',
    provider: {
      '@type': 'LocalBusiness',
      name: 'SourceSage.ai',
      url: 'https://sourcesage.ai',
      areaServed: { '@type': 'Country', name: 'Malaysia' },
    },
    description: 'Sourcing of Kubota 1G772-03310 water pump for L-Series tractors with V1505 and V2403 engines. Genuine OEM and aftermarket options available.',
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
      { '@type': 'ListItem', position: 3, name: 'Kubota 1G772-03310 Water Pump', item: 'https://sourcesage.ai/parts/kubota-1g772-03310/' },
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
        label="1g772-sticky"
        message="Hi, I need a Kubota 1G772-03310 water pump. My tractor model: ___ Engine: ___"
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
              label="1g772-navbar"
              message="Hi, I need a Kubota 1G772-03310 water pump. My tractor model: ___ Engine: ___"
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
            <span className="text-slate-700 font-medium">Kubota 1G772-03310</span>
          </div>
        </div>

        {/* Hero */}
        <header className="bg-white pt-16 pb-20 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-6">
                <Droplets className="w-4 h-4 text-accent" /> Kubota OEM Part — Water Pump
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
                Kubota 1G772-03310
              </h1>
              <p className="text-2xl font-bold text-accent mb-4">Water Pump — V1505 & V2403 Engines</p>
              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                Genuine Kubota water pump for L3408, L3608, L4400, L4508 and L4708 tractors. Also compatible with Kubota generator sets using V1505 and V2403 engines.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['OEM: 1G772-03310', 'Engine: V1505 / V2403', 'L-Series Compatible', 'Malaysia Stock'].map(tag => (
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
                  label="1g772-hero"
                  message="Hi, I need a Kubota 1G772-03310 water pump. My tractor model: ___ Engine: ___"
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
              <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Kubota 1G772-03310 Water Pump</h3>
              <div className="bg-white rounded-2xl p-8 border border-slate-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { label: 'OEM Part Number', value: '1G772-03310' },
                    { label: 'Brand', value: 'Kubota' },
                    { label: 'Part Type', value: 'Water Pump (Engine Cooling)' },
                    { label: 'Material', value: 'Cast Iron Housing, Steel Impeller' },
                    { label: 'Compatible Engines', value: 'V1505, V2403' },
                    { label: 'Replaces', value: '1G772-03311 (superseded)' },
                  ].map(row => (
                    <div key={row.label} className="border-b border-slate-100 pb-3">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{row.label}</p>
                      <p className="font-semibold text-slate-800">{row.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed mt-8">
                The Kubota 1G772-03310 is a direct-replacement engine water pump used in the cooling system of Kubota V1505 and V2403 diesel engines. It circulates coolant through the engine block, cylinder head, and radiator to maintain optimal operating temperature. A failed water pump can cause rapid overheating and severe engine damage — replacement at the first sign of leakage or bearing wear is critical.
              </p>
            </div>
          </div>
        </section>

        {/* Compatible models */}
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-sm font-black text-accent uppercase tracking-[0.3em] mb-4">Compatible Models</h2>
              <h3 className="text-3xl font-bold text-slate-900">Tractors Using the 1G772-03310</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {COMPATIBLE_MODELS.map(m => (
                <div key={m.model} className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <h4 className="text-lg font-bold text-slate-900 mb-1">{m.model}</h4>
                  <p className="text-sm font-semibold text-accent mb-2">Engine: {m.engine}</p>
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
                      { brand: 'Kubota (OEM)', num: '1G772-03310', type: 'Genuine' },
                      { brand: 'Kubota (Superseded)', num: '1G772-03311', type: 'Superseded' },
                      { brand: 'Aftermarket', num: 'WP-V1505', type: 'Aftermarket' },
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
              <h3 className="text-3xl font-bold text-slate-900 mb-8">Source the 1G772-03310 Through SourceSage</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                {[
                  { icon: <MapPin className="w-6 h-6 text-green-500" />, title: 'Local Stock', body: 'We maintain inventory in Malaysia for fast dispatch to workshops nationwide.' },
                  { icon: <Thermometer className="w-6 h-6 text-accent" />, title: 'OEM & Aftermarket', body: 'Choose genuine Kubota or cost-effective aftermarket alternatives — both tested.' },
                  { icon: <Wrench className="w-6 h-6 text-orange-500" />, title: 'Bulk & Fleet Pricing', body: 'Discounted pricing for workshops and agricultural fleets ordering multiple units.' },
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
            <h2 className="text-3xl font-bold mb-4">Need a Kubota 1G772-03310 Water Pump?</h2>
            <p className="text-blue-100 text-lg mb-8">Tell us your tractor model and engine code. We'll confirm availability and pricing — usually within 24 hours.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#request" className="px-8 py-4 text-lg font-bold rounded-xl bg-white text-accent hover:bg-accent/10 transition-all text-center">
                Submit a Part Request
              </Link>
              <WhatsappCTA
                label="1g772-final-cta"
                message="Hi, I need a Kubota 1G772-03310 water pump urgently. My tractor model: ___ Engine: ___"
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
                  label="1g772-footer"
                  message="Hi, I need a Kubota 1G772-03310 water pump. My tractor model: ___"
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
