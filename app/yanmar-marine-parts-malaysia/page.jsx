import Link from 'next/link'
import { MessageCircle, Mail, CheckCircle, Wrench, AlertTriangle, MapPin, ChevronRight, ShieldCheck } from 'lucide-react'
import WhatsappCTA from '../../components/WhatsappCTA'

export const metadata = {
  title: 'Yanmar Marine Engine Parts Malaysia | SourceSage',
  description: 'Hard-to-find Yanmar marine diesel engine parts in Malaysia. 3JH, 4JH, 2GM, 3GM series. Fast sourcing for fishing boats, workboats & pleasure craft — Sabah, Sarawak & Peninsular Malaysia.',
  alternates: { canonical: '/yanmar-marine-parts-malaysia/', languages: { 'en': 'https://sourcesage.ai/yanmar-marine-parts-malaysia/', 'x-default': 'https://sourcesage.ai/yanmar-marine-parts-malaysia/' } },
  openGraph: {
    title: 'Yanmar Marine Engine Parts Malaysia | SourceSage',
    description: 'Hard-to-find Yanmar marine diesel engine parts in Malaysia. 3JH, 4JH, 2GM, 3GM series. Fast sourcing for fishing boats & workboats.',
    url: 'https://sourcesage.ai/yanmar-marine-parts-malaysia/',
    siteName: 'SourceSage.ai',
    type: 'website',
    images: [{ url: 'https://sourcesage.ai/images/og-home.png', width: 1200, height: 630, alt: 'Yanmar Marine Engine Parts Malaysia — SourceSage' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yanmar Marine Engine Parts Malaysia | SourceSage',
    description: 'Hard-to-find Yanmar marine diesel engine parts in Malaysia. 3JH, 4JH, 2GM, 3GM series.',
    images: ['https://sourcesage.ai/images/og-home.png'],
  },
}

const MODELS = [
  { series: '1GM10', hp: '9 hp', use: 'Sailboats, small dinghies' },
  { series: '2GM20', hp: '18 hp', use: 'Sailboats, small workboats' },
  { series: '3GM30', hp: '27 hp', use: 'Mid-size sailboats' },
  { series: '3JH5', hp: '39 hp', use: 'Fishing boats, patrol craft' },
  { series: '4JH4', hp: '54 hp', use: 'Commercial workboats, ferries' },
  { series: '4JH45', hp: '45 hp', use: 'Fishing vessels, launches' },
  { series: '6LY3', hp: '315 hp', use: 'High-speed patrol, large vessels' },
]

const PARTS = [
  { category: 'Cooling System', items: ['Raw water pump impeller', 'Heat exchanger', 'Thermostat & housing', 'Freshwater pump', 'Zinc anodes'] },
  { category: 'Fuel System', items: ['Injector nozzles', 'Injection pump', 'Fuel filter elements', 'Lift pump', 'Bleed screws'] },
  { category: 'Engine Seals', items: ['Full gasket set', 'Head gasket', 'Crankshaft oil seal', 'Valve stem seals', 'O-ring kits'] },
  { category: 'Electrical', items: ['Alternator', 'Starter motor', 'Glow plugs', 'Sender units (temp/oil)', 'Wiring harness'] },
  { category: 'Transmission', items: ['Keel cooler', 'Shaft seal (PSS)', 'Gearbox oil seals', 'Coupling flex disc', 'Engine mounts'] },
  { category: 'Service Kits', items: ['Major overhaul kit', 'Minor service kit', 'Belt & hose kit', 'Filter service pack', 'Zincs set'] },
]

const FAQS = [
  {
    q: 'How long does sourcing Yanmar marine parts take in Malaysia?',
    a: 'For common series (3JH, 4JH, 2GM) we typically confirm availability within 24 hours. Parts in stock in Malaysia ship same or next day. Sourced-from-Japan parts usually arrive in 5–10 working days. Emergency cases get priority handling.',
  },
  {
    q: 'Do you supply Yanmar OEM parts or aftermarket?',
    a: 'We source both. OEM parts come with full Yanmar traceability. Quality aftermarket alternatives (for wear items like impellers, filters, zincs) are clearly identified and cost 30–50% less. You choose.',
  },
  {
    q: 'Can you ship to Sabah and Sarawak?',
    a: 'Yes — East Malaysia is a core market for us. Fishing fleets and dive operators in Kota Kinabalu, Sandakan, Miri, and Kuching regularly rely on us when local stockists run dry. We use reliable couriers with full tracking.',
  },
  {
    q: 'My Yanmar serial number is worn off. Can you still identify the part?',
    a: 'Yes. Send us a photo of the engine, the part, and any visible markings. Our team can usually cross-reference using casting numbers, dimensions, or the vessel\'s registration records.',
  },
  {
    q: 'Do you stock Yanmar saildrive parts?',
    a: 'Yes — SD50, SD60, and SD20 saildrives are within scope. Bellows, seals, prop shaft seals, and leg oil seals are common requests we fulfil regularly.',
  },
]

export default function YanmarMarinePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Yanmar Marine Engine Parts Sourcing Malaysia',
    provider: {
      '@type': 'LocalBusiness',
      name: 'SourceSage.ai',
      url: 'https://sourcesage.ai',
      areaServed: { '@type': 'Country', name: 'Malaysia' },
    },
    description: 'Sourcing of hard-to-find Yanmar marine diesel engine parts across Malaysia including Sabah and Sarawak.',
    serviceType: 'Parts Sourcing',
    areaServed: [
      { '@type': 'State', name: 'Sabah' },
      { '@type': 'State', name: 'Sarawak' },
      { '@type': 'State', name: 'Selangor' },
      { '@type': 'State', name: 'Johor' },
      { '@type': 'State', name: 'Perak' },
      { '@type': 'State', name: 'Kedah' },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sourcesage.ai/' },
      { '@type': 'ListItem', position: 2, name: 'Yanmar Marine Engine Parts Malaysia', item: 'https://sourcesage.ai/yanmar-marine-parts-malaysia' },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Sticky button */}
      <WhatsappCTA
        label="yanmar-sticky"
        message="Hi, I need a Yanmar marine engine part. Engine model: ___ Part needed: ___"
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
              <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
              <Link href="/#request" className="hover:text-blue-600 transition-colors">Request a Part</Link>
            </div>
            <WhatsappCTA
              label="yanmar-navbar"
              message="Hi, I need a Yanmar marine engine part. Engine model: ___ Part needed: ___"
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
            <span className="text-slate-700 font-medium">Yanmar Marine Engine Parts Malaysia</span>
          </div>
        </div>

        {/* Hero */}
        <header className="bg-white pt-16 pb-20 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-widest mb-6">
                <MapPin className="w-4 h-4 text-blue-600" /> Malaysia — Peninsular, Sabah & Sarawak
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                Yanmar Marine Engine Parts<br />
                <span className="text-blue-600">Hard to Find. Fast to Source.</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Injectors, impellers, heat exchangers, gasket sets and overhaul kits for Yanmar 1GM, 2GM, 3GM, 3JH, 4JH and 6LY series engines. When your local stockist is out of stock, we find it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#request"
                  className="px-8 py-4 text-lg font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all text-center flex items-center justify-center gap-2"
                >
                  Request a Yanmar Part <ChevronRight className="w-5 h-5" />
                </Link>
                <WhatsappCTA
                  label="yanmar-hero"
                  message="Hi, my Yanmar engine is down. Engine model: ___ Part needed: ___ Vessel location: ___"
                  className="px-8 py-4 text-lg font-bold rounded-xl text-white bg-green-500 hover:bg-green-600 transition-all text-center flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" /> WhatsApp Now
                </WhatsappCTA>
              </div>
            </div>
          </div>
        </header>

        {/* Models covered */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">Engine Series</h2>
              <h3 className="text-3xl font-bold text-slate-900">Yanmar Models We Cover</h3>
              <p className="mt-4 text-slate-600 max-w-2xl mx-auto">From single-cylinder sailboat auxiliaries to high-output commercial diesels — if it carries a Yanmar badge, we can source the part.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {MODELS.map(m => (
                <div key={m.series} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all">
                  <p className="text-xs font-black text-blue-600 uppercase tracking-widest mb-1">{m.hp}</p>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Yanmar {m.series}</h4>
                  <p className="text-sm text-slate-500">{m.use}</p>
                </div>
              ))}
              <div className="bg-blue-600 rounded-2xl p-6 text-white flex flex-col justify-between">
                <p className="text-sm font-semibold mb-3">Don't see your model?</p>
                <WhatsappCTA
                  label="yanmar-model-not-listed"
                  message="Hi, I need a part for my Yanmar engine. Model: ___ Part needed: ___"
                  className="inline-flex items-center gap-2 bg-white text-blue-700 px-4 py-2.5 rounded-xl font-bold text-sm transition-all hover:bg-blue-50"
                >
                  <MessageCircle className="w-4 h-4" /> Ask Us
                </WhatsappCTA>
              </div>
            </div>
          </div>
        </section>

        {/* Parts we source */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">Parts Catalogue</h2>
              <h3 className="text-3xl font-bold text-slate-900">What We Source for Yanmar Marine</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PARTS.map(cat => (
                <div key={cat.category} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wide mb-4 flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-blue-500" /> {cat.category}
                  </h4>
                  <ul className="space-y-2">
                    {cat.items.map(item => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* East Malaysia callout */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-900 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6">
                  <MapPin className="w-4 h-4" /> East Malaysia Coverage
                </div>
                <h2 className="text-3xl font-bold mb-6">Serving Sabah & Sarawak Fishing Fleets</h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  Boat operators in Kota Kinabalu, Sandakan, Tawau, Miri, Sibu, and Kuching face a real problem: West Malaysia-centric distributors rarely stock parts for ageing Yanmar engines, and shipping delays cost you fishing days.
                </p>
                <p className="text-slate-300 leading-relaxed mb-8">
                  We treat East Malaysia as a priority market. Parts confirmed in stock ship within 24 hours. Japan-sourced parts arrive in 5–10 working days. We communicate in English, Malay, and Mandarin.
                </p>
                <WhatsappCTA
                  label="yanmar-east-malaysia"
                  message="Hi, I'm in Sabah/Sarawak and need a Yanmar marine part urgently. Engine: ___ Part: ___ Location: ___"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3.5 rounded-xl font-bold transition-all"
                >
                  <MessageCircle className="w-5 h-5" /> WhatsApp for East Malaysia Enquiries
                </WhatsappCTA>
              </div>
              <div className="mt-12 lg:mt-0 grid grid-cols-2 gap-4">
                {[
                  { city: 'Kota Kinabalu', type: 'Fishing fleets & dive operators' },
                  { city: 'Sandakan', type: 'Commercial fishing, aquaculture' },
                  { city: 'Tawau', type: 'Palm oil barge engines' },
                  { city: 'Miri', type: 'Offshore support vessels' },
                  { city: 'Sibu', type: 'River ferries & longboats' },
                  { city: 'Kuching', type: 'Pleasure craft & workboats' },
                ].map(loc => (
                  <div key={loc.city} className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                    <p className="font-bold text-white text-sm mb-1">{loc.city}</p>
                    <p className="text-slate-400 text-xs">{loc.type}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why SourceSage */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">Why Boat Operators Choose SourceSage</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <AlertTriangle className="w-6 h-6 text-amber-500" />,
                  title: 'Machine Down Priority',
                  body: 'Vessel out of service means lost revenue. We triage machine-down cases first and give you a confirmed timeline within hours, not days.',
                },
                {
                  icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
                  title: 'OEM & Quality Aftermarket',
                  body: 'We source genuine Yanmar OEM parts and clearly labelled quality aftermarket alternatives. No grey-market surprises.',
                },
                {
                  icon: <MapPin className="w-6 h-6 text-green-500" />,
                  title: 'Malaysia-Wide Delivery',
                  body: 'Peninsular and East Malaysia covered. Tracked courier with WhatsApp updates at every stage so you know exactly when your parts arrive.',
                },
              ].map(card => (
                <div key={card.title} className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                  <div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-5 shadow-sm">
                    {card.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-3">{card.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{card.body}</p>
                </div>
              ))}
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
            <h2 className="text-3xl font-bold mb-4">Need a Yanmar Part Now?</h2>
            <p className="text-blue-100 text-lg mb-8">Tell us your engine series and the part you need. We'll come back with availability and pricing — usually within a few hours.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#request"
                className="px-8 py-4 text-lg font-bold rounded-xl bg-white text-blue-700 hover:bg-blue-50 transition-all text-center"
              >
                Submit a Part Request
              </Link>
              <WhatsappCTA
                label="yanmar-final-cta"
                message="Hi, I need an urgent Yanmar marine engine part. Engine model: ___ Part needed: ___ Vessel location: ___"
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
                  label="yanmar-footer"
                  message="Hi, I need a Yanmar marine engine part. Engine model: ___ Part needed: ___"
                  className="hover:text-green-600 flex items-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </WhatsappCTA>
              </div>
            </div>
            <div className="text-center pt-6 border-t border-slate-100">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">© 2024 SourceSage.ai. Agricultural &amp; Marine Parts Sourcing, Malaysia.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
