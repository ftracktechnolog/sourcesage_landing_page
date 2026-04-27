import Link from 'next/link'
import { MessageCircle, Mail, CheckCircle, Wrench, AlertTriangle, MapPin, ChevronRight, ShieldCheck } from 'lucide-react'
import WhatsappCTA from '../../components/WhatsappCTA'

export const metadata = {
  title: 'Kubota Tractor Parts Malaysia | SourceSage',
  description: 'Hard-to-find Kubota tractor spare parts in Malaysia. L-series, M-series, B-series and vintage models. Overhaul kits, injectors, hydraulics & more. Fast sourcing nationwide.',
  alternates: { canonical: '/kubota-tractor-parts-malaysia/', languages: { 'en': 'https://sourcesage.ai/kubota-tractor-parts-malaysia/', 'x-default': 'https://sourcesage.ai/kubota-tractor-parts-malaysia/' } },
  openGraph: {
    title: 'Kubota Tractor Parts Malaysia | SourceSage',
    description: 'Hard-to-find Kubota tractor spare parts in Malaysia. L-series, M-series, B-series. Overhaul kits, injectors, hydraulics. Fast sourcing nationwide.',
    url: 'https://sourcesage.ai/kubota-tractor-parts-malaysia/',
    siteName: 'SourceSage.ai',
    type: 'website',
    locale: 'en',
    images: [{ url: 'https://sourcesage.ai/images/og-home.png', width: 1200, height: 630, alt: 'Kubota Tractor Parts Malaysia — SourceSage' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kubota Tractor Parts Malaysia | SourceSage',
    description: 'Hard-to-find Kubota tractor spare parts in Malaysia. L-series, M-series, B-series. Fast sourcing nationwide.',
    images: ['https://sourcesage.ai/images/og-home.png'],
  },
}

const MODEL_SERIES = [
  {
    series: 'L-Series',
    models: 'L3408, L3608, L4400, L4508, L4708',
    note: 'Most popular compact tractors in Malaysian paddy and smallholder farming',
  },
  {
    series: 'M-Series',
    models: 'M9000, M9540, M108S, M5040, M7040',
    note: 'Commercial paddy and plantation tractors — high parts demand',
  },
  {
    series: 'B-Series',
    models: 'B2420, B3030, B3300, B1820',
    note: 'Sub-compact utility tractors used in horticulture and smallholdings',
  },
  {
    series: 'GL / SQ Generators',
    models: 'GL6500, GL7000, SQ Series',
    note: 'Kubota-engine generators — shares parts with tractor engine range',
  },
  {
    series: 'Vintage / Classic',
    models: 'L260, L295, L305, L345, L2850',
    note: 'Older models — OEM parts discontinued, aftermarket sourcing essential',
  },
  {
    series: 'Combine Harvesters',
    models: 'DC-60, DC-68, DC-70, DC-105X',
    note: 'Kubota combine parts including threshing, cutting and drive components',
  },
]

const PARTS = [
  {
    category: 'Engine — Core',
    items: ['Overhaul / rebuild kit', 'Piston, rings & liner set', 'Cylinder head (bare)', 'Full gasket set', 'Head gasket (MLS)'],
  },
  {
    category: 'Fuel System',
    items: ['Injector nozzles', 'Injection pump', 'Lift pump', 'Fuel filter primary & secondary', 'Governor spring kit'],
  },
  {
    category: 'Cooling System',
    items: ['Water pump', 'Thermostat & housing', 'Radiator hoses', 'Fan belt', 'Coolant temperature sender'],
  },
  {
    category: 'Transmission',
    items: ['Clutch plate & pressure plate', 'PTO clutch pack', 'Shuttle shift seals', 'Final drive bearings', 'Gear selector forks'],
  },
  {
    category: 'Hydraulics',
    items: ['Lift pump & relief valve', 'Hydraulic cylinder seals', 'Top link & draft control', '3-point linkage arms', 'Filter elements'],
  },
  {
    category: 'Electrical',
    items: ['Starter motor', 'Alternator', 'Glow plugs', 'Oil & temp senders', 'Instrument cluster'],
  },
]

const ENGINES = [
  { code: 'V1505', use: 'L3240, L3540, L4240, generators' },
  { code: 'V2403', use: 'M5040, M6040, various M-series' },
  { code: 'V2607', use: 'M7040, M8540, larger M-series' },
  { code: 'D1105', use: 'B2420, B3030, small L-series' },
  { code: 'V3800', use: 'M9000, M9540, M108S' },
  { code: 'D905 / D1005', use: 'B-series sub-compact models' },
]

const FAQS = [
  {
    q: 'Which Kubota models are most common in Malaysia?',
    a: 'The L-series (L3408, L3608, L4400) dominates Malaysian paddy farming and smallholder use. The M9000 and M9540 are the most widely used commercial plantation tractors. The B-series is common in horticulture. Kubota also has a large installed base of older models (L260, L295, L305) still working in rural areas.',
  },
  {
    q: 'Can you source parts for old Kubota models that are discontinued?',
    a: 'Yes — this is one of our specialities. Older Kubota engines like the Z482, D905, and early V-series have a strong aftermarket. We cross-reference part numbers and source from our Japan network, secondary dealers, and quality aftermarket suppliers in India and Taiwan.',
  },
  {
    q: 'How do I identify the correct Kubota engine for my tractor?',
    a: 'The engine model and serial number are stamped on the engine block — typically on the left side near the injection pump. The format is a letter-number combination like "V2403-DI-TE4B". If the plate is worn, send us the tractor model, serial number (on the frame), and year and we can identify the engine from our records.',
  },
  {
    q: 'Do you supply Kubota OEM parts or aftermarket?',
    a: 'Both. Genuine Kubota OEM parts come with traceability and are ideal for newer machines under warranty or where tolerance is critical. Quality aftermarket (NPR, Tata for engine kits; Sparex for tractor parts) is well-proven and costs 30–60% less. We clearly label which is which.',
  },
  {
    q: 'How fast can you source Kubota parts?',
    a: 'Common parts (filters, belts, gaskets, injectors) for popular models like the L3408 or M9540 are often available in Malaysia and ship in 1–3 days. Overhaul kits, cylinder heads, and injection pumps for older or uncommon models typically take 7–14 days sourced from Japan or Singapore. Machine-down cases get priority handling.',
  },
]

export default function KubotaPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Kubota Tractor Parts Sourcing Malaysia',
    provider: {
      '@type': 'LocalBusiness',
      name: 'SourceSage.ai',
      url: 'https://sourcesage.ai',
      areaServed: { '@type': 'Country', name: 'Malaysia' },
    },
    description: 'Sourcing of hard-to-find Kubota tractor spare parts across Malaysia — L-series, M-series, B-series, vintage and combine harvesters.',
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
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sourcesage.ai/' },
      { '@type': 'ListItem', position: 2, name: 'Kubota Tractor Parts Malaysia', item: 'https://sourcesage.ai/kubota-tractor-parts-malaysia' },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <WhatsappCTA
        label="kubota-sticky"
        message="Hi, I need a Kubota tractor spare part. Model: ___ Engine code: ___ Part needed: ___"
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
              label="kubota-navbar"
              message="Hi, I need a Kubota tractor spare part. Model: ___ Engine code: ___ Part needed: ___"
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
            <span className="text-slate-700 font-medium">Kubota Tractor Parts Malaysia</span>
          </div>
        </div>

        {/* Hero */}
        <header className="bg-white pt-16 pb-20 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 text-orange-800 text-xs font-bold uppercase tracking-widest mb-6">
                <MapPin className="w-4 h-4 text-orange-600" /> Malaysia's Most-Used Tractor Brand
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                Kubota Tractor Parts Malaysia<br />
                <span className="text-blue-600">L-Series. M-Series. Vintage. All Sourced Fast.</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Overhaul kits, injection pumps, hydraulic seals, clutch assemblies and engine parts for the full Kubota range — including discontinued models that local dealers no longer support. When stock runs dry, we find it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#request"
                  className="px-8 py-4 text-lg font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all text-center flex items-center justify-center gap-2"
                >
                  Request a Kubota Part <ChevronRight className="w-5 h-5" />
                </Link>
                <WhatsappCTA
                  label="kubota-hero"
                  message="Hi, my Kubota tractor needs a spare part. Model: ___ Engine code: ___ Part needed: ___"
                  className="px-8 py-4 text-lg font-bold rounded-xl text-white bg-green-500 hover:bg-green-600 transition-all text-center flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" /> WhatsApp Now
                </WhatsappCTA>
              </div>
            </div>
          </div>
        </header>

        {/* Model series */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">Model Coverage</h2>
              <h3 className="text-3xl font-bold text-slate-900">Kubota Series We Support</h3>
              <p className="mt-4 text-slate-600 max-w-2xl mx-auto">From the ubiquitous L3408 to the M9540 plantation workhorse — including vintage models no longer in the Kubota parts catalogue.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {MODEL_SERIES.map(s => (
                <div key={s.series} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all">
                  <h4 className="text-lg font-bold text-slate-900 mb-1">{s.series}</h4>
                  <p className="text-xs font-semibold text-blue-600 mb-3">{s.models}</p>
                  <p className="text-sm text-slate-500">{s.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Engine codes */}
        <section className="py-16 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">Engine Reference</h2>
              <h3 className="text-2xl font-bold text-slate-900">Common Kubota Engine Codes</h3>
              <p className="mt-3 text-slate-600 max-w-xl mx-auto">Knowing your engine code speeds up parts sourcing. Find it stamped on the block near the injection pump.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
              {ENGINES.map(e => (
                <div key={e.code} className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-center">
                  <p className="font-black text-blue-700 text-lg mb-1">{e.code}</p>
                  <p className="text-xs text-slate-500 leading-snug">{e.use}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/blog/kubota-serial-number-parts-lookup" className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">
                How to read your Kubota serial number →
              </Link>
            </div>
          </div>
        </section>

        {/* Parts catalogue */}
        <section className="py-20 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">Parts Catalogue</h2>
              <h3 className="text-3xl font-bold text-slate-900">What We Source for Kubota</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PARTS.map(cat => (
                <div key={cat.category} className="bg-white rounded-2xl p-6 border border-slate-200">
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

        {/* Why SourceSage */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Why Workshops Choose SourceSage for Kubota Parts</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
                  title: 'Vintage & Discontinued Models',
                  body: 'The L260, L295, and early V-series are decades out of production. Kubota dealers stopped stocking parts years ago. We source through our Japan network and established aftermarket channels that still carry these parts.',
                },
                {
                  icon: <AlertTriangle className="w-6 h-6 text-amber-400" />,
                  title: 'Machine-Down Priority',
                  body: 'Harvest season breakdowns are treated as emergencies. We triage urgent cases, give you a confirmed ETA within hours, and arrange air freight when sea freight is too slow.',
                },
                {
                  icon: <MapPin className="w-6 h-6 text-green-400" />,
                  title: 'Japan Direct Sourcing',
                  body: 'Many hard-to-find Kubota parts are only available from Japan. We have established relationships with Japanese secondary dealers and can source parts that aren\'t available through normal Malaysian channels.',
                },
              ].map(card => (
                <div key={card.title} className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                  <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center mb-5">
                    {card.icon}
                  </div>
                  <h3 className="font-bold text-white text-lg mb-3">{card.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{card.body}</p>
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

        {/* Related guides */}
        <section className="py-16 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Related Kubota Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: 'How to Identify Your Kubota Model', href: '/blog/how-to-identify-your-kubota-tractor-model' },
                { title: 'Kubota Serial Number Parts Lookup', href: '/blog/kubota-serial-number-parts-lookup' },
                { title: 'Kubota V1505 Engine Parts Guide', href: '/blog/kubota-v1505-engine-parts-malaysia' },
              ].map(g => (
                <Link key={g.href} href={g.href} className="bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all">
                  <p className="font-bold text-slate-800 text-sm mb-1">{g.title}</p>
                  <p className="text-xs font-semibold text-blue-600">Read guide →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Need a Kubota Part Now?</h2>
            <p className="text-blue-100 text-lg mb-8">Tell us your tractor model, engine code, and what you need. We'll confirm availability and pricing — usually within 24 hours.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#request" className="px-8 py-4 text-lg font-bold rounded-xl bg-white text-blue-700 hover:bg-blue-50 transition-all text-center">
                Submit a Part Request
              </Link>
              <WhatsappCTA
                label="kubota-final-cta"
                message="Hi, I need a Kubota spare part urgently. Model: ___ Engine code: ___ Part needed: ___"
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
                  label="kubota-footer"
                  message="Hi, I need a Kubota tractor spare part. Model: ___ Part needed: ___"
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
