import Link from 'next/link'
import { MessageCircle, Mail, CheckCircle, Wrench, AlertTriangle, MapPin, ChevronRight, ShieldCheck } from 'lucide-react'
import WhatsappCTA from '../../components/WhatsappCTA'

export const metadata = {
  title: 'Massey Ferguson Parts Malaysia — Genuine + Aftermarket | SourceSage',
  description: 'Massey Ferguson tractor parts supplier Malaysia. Transmission seals, steering components, engine parts for MF models. Sourcing when sole distributor is out of stock.',
  alternates: { canonical: '/massey-ferguson-parts-malaysia/', languages: { 'en': 'https://sourcesage.ai/massey-ferguson-parts-malaysia/', 'x-default': 'https://sourcesage.ai/massey-ferguson-parts-malaysia/' } },
  openGraph: {
    title: 'Massey Ferguson Parts Malaysia — Genuine + Aftermarket | SourceSage',
    description: 'Massey Ferguson tractor parts supplier Malaysia. Transmission seals, steering components, engine parts for MF models. Sourcing when sole distributor is out of stock.',
    url: 'https://sourcesage.ai/massey-ferguson-parts-malaysia/',
    siteName: 'SourceSage.ai',
    type: 'website',
    locale: 'en',
    images: [{ url: 'https://sourcesage.ai/images/og-home.png', width: 1200, height: 630, alt: 'Massey Ferguson Spare Parts Malaysia — SourceSage' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Massey Ferguson Parts Malaysia — Genuine + Aftermarket | SourceSage',
    description: 'Massey Ferguson tractor parts supplier Malaysia. Transmission seals, steering components, engine parts for MF models. Sourcing when sole distributor is out of stock.',
    images: ['https://sourcesage.ai/images/og-home.png'],
  },
}

const MODELS = [
  { model: 'MF 240', engine: 'Perkins A4.248 / AD3.152', note: 'Most common MF in Malaysian paddy & plantations' },
  { model: 'MF 350', engine: 'Perkins A4.248', note: 'Mid-range workhorse, widespread in Kedah & Perak' },
  { model: 'MF 375', engine: 'Perkins A4.248 / AD4.203', note: 'Popular plantation tractor' },
  { model: 'MF 385', engine: 'Perkins AD4.203 Turbo', note: 'Heavier-duty plantation & row crop use' },
  { model: 'MF 390', engine: 'Perkins AD4.203 Turbo', note: 'Export model, strong presence in East Malaysia' },
  { model: 'MF 135 / MF 165', engine: 'Perkins AD3.152', note: 'Classic models — parts increasingly rare' },
]

const PARTS = [
  {
    category: 'Perkins Engine',
    items: ['Full overhaul / rebuild kit', 'Cylinder head (bare or assembled)', 'Injector nozzles & pump', 'Water pump & thermostat', 'Head gasket & full gasket set'],
  },
  {
    category: 'Transmission',
    items: ['Clutch plate & pressure plate', 'PTO shaft seal & bearing', 'Gear selector forks', 'Final drive oil seals', 'Differential lock components'],
  },
  {
    category: 'Hydraulics',
    items: ['Lift arm & ram cylinder seals', 'Hydraulic pump', 'Top link & draft control parts', 'Filter elements & O-rings', 'Relief valve'],
  },
  {
    category: 'Steering & Axle',
    items: ['Steering cylinder seals', 'King pin & bush kit', 'Front axle pivot pin', 'Wheel bearing sets', 'Track rod ends'],
  },
  {
    category: 'Electrical',
    items: ['Starter motor (12V)', 'Alternator', 'Glow plugs (AD series)', 'Temperature & oil pressure senders', 'Instrument panel'],
  },
  {
    category: 'Filters & Service',
    items: ['Engine oil filter', 'Fuel filter primary & secondary', 'Air filter & pre-cleaner', 'Hydraulic return filter', 'Perkins engine belts'],
  },
]

const FAQS = [
  {
    q: 'Why are Massey Ferguson parts hard to find in Malaysia?',
    a: 'AGCO (MF\'s parent) has limited authorised dealer presence in Malaysia compared to Kubota or Yanmar. Many MF tractors were sold through agricultural schemes in the 1980s–2000s and the parts supply chain never fully caught up. Dealers that do exist often focus on newer models and don\'t stock parts for older MF240 or MF135 machines.',
  },
  {
    q: 'Which Perkins engine does my MF tractor use?',
    a: 'MF240 and MF350 most commonly use the Perkins A4.248 (naturally aspirated, 4-cylinder). MF375 and MF385 typically use the AD4.203 (turbocharged). The MF135 uses the AD3.152 (3-cylinder). Always confirm from the engine plate — some export-market MF tractors use different engine variants.',
  },
  {
    q: 'Can you source parts for very old MF tractors (MF135, MF165)?',
    a: 'Yes, these are within scope. The Perkins AD3.152 and A4.212 used in classic MF machines have a large aftermarket ecosystem. Overhaul kits, cylinder heads, and injection pumps for these engines are sourceable — though lead times from the UK or India may apply.',
  },
  {
    q: 'How long does sourcing take?',
    a: 'Common MF240/MF350 parts (filters, seals, clutch) are often available in Malaysia and ship in 1–3 days. Engine overhaul kits and injection pumps for older models typically take 7–14 days sourced from the UK, India, or Singapore. We confirm availability and ETA before you commit.',
  },
  {
    q: 'Do you supply OEM AGCO parts or aftermarket?',
    a: 'Both. OEM AGCO / Perkins parts carry full traceability. Quality aftermarket from established brands (Sparex, David Brown Tractor Parts equivalents, Indian-manufactured Perkins kits) are clearly labelled and cost significantly less. Many Malaysian workshops run exclusively on quality aftermarket with excellent results.',
  },
]

export default function MasseyFergusonPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Massey Ferguson Spare Parts Sourcing Malaysia',
    provider: {
      '@type': 'LocalBusiness',
      name: 'SourceSage.ai',
      url: 'https://sourcesage.ai',
      areaServed: { '@type': 'Country', name: 'Malaysia' },
    },
    description: 'Sourcing of hard-to-find Massey Ferguson tractor spare parts with Perkins engines across Malaysia.',
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
      { '@type': 'ListItem', position: 2, name: 'Massey Ferguson Spare Parts Malaysia', item: 'https://sourcesage.ai/massey-ferguson-parts-malaysia' },
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
        label="mf-sticky"
        message="Hi, I need a Massey Ferguson spare part. Tractor model: ___ Part needed: ___"
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
              label="mf-navbar"
              message="Hi, I need a Massey Ferguson spare part. Tractor model: ___ Part needed: ___"
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
            <span className="text-slate-700 font-medium">Massey Ferguson Spare Parts Malaysia</span>
          </div>
        </div>

        {/* Hero */}
        <header className="bg-white pt-16 pb-20 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-red-800 text-xs font-bold uppercase tracking-widest mb-6">
                <MapPin className="w-4 h-4 text-red-600" /> Perkins-Powered Tractors — Malaysia
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                Massey Ferguson Spare Parts Malaysia<br />
                <span className="text-blue-600">Perkins Engine Parts. Hard to Find. Fast to Source.</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Overhaul kits, injection pumps, clutch assemblies, hydraulic seals, and Perkins engine parts for MF240, MF350, MF375, MF385 and classic MF tractors. When local AGCO dealers can't help, we find it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#request"
                  className="px-8 py-4 text-lg font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all text-center flex items-center justify-center gap-2"
                >
                  Request an MF Part <ChevronRight className="w-5 h-5" />
                </Link>
                <WhatsappCTA
                  label="mf-hero"
                  message="Hi, my Massey Ferguson tractor needs a spare part. Model: ___ Part needed: ___"
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
              <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">Models Covered</h2>
              <h3 className="text-3xl font-bold text-slate-900">Massey Ferguson Tractors We Support</h3>
              <p className="mt-4 text-slate-600 max-w-2xl mx-auto">From the ubiquitous MF240 to classic vintage models — if it's a Massey Ferguson or carries a Perkins engine, we can source the part.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {MODELS.map(m => (
                <div key={m.model} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all">
                  <h4 className="text-xl font-bold text-slate-900 mb-1">{m.model}</h4>
                  <p className="text-xs font-semibold text-blue-600 mb-3">{m.engine}</p>
                  <p className="text-sm text-slate-500">{m.note}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-slate-500 text-sm mb-3">Don't see your model?</p>
              <WhatsappCTA
                label="mf-model-unlisted"
                message="Hi, I need a part for my Massey Ferguson tractor. Model: ___ Year: ___ Part needed: ___"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" /> Ask Us About Your Model
              </WhatsappCTA>
            </div>
          </div>
        </section>

        {/* Perkins callout */}
        <section className="py-16 bg-amber-50 border-y border-amber-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-5 max-w-3xl mx-auto">
              <Wrench className="w-8 h-8 text-amber-600 shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">It's Really a Perkins Parts Problem</h2>
                <p className="text-slate-600 leading-relaxed mb-3">
                  Most Massey Ferguson tractors in Malaysia run Perkins engines — the AD3.152, A4.248, or AD4.203. These are well-built engines with a large global aftermarket, but authorised Perkins parts channels in Malaysia are thin outside of industrial distributors.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  We source Perkins engine parts through UK-origin, Indian-manufactured, and OEM channels. Both the tractor-side components (clutch, hydraulics, axle) and the Perkins engine internals are within our scope.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Parts catalogue */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">Parts Catalogue</h2>
              <h3 className="text-3xl font-bold text-slate-900">What We Source for Massey Ferguson</h3>
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

        {/* Why SourceSage */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Why Workshops Choose SourceSage for MF Parts</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
                  title: 'Classic Model Expertise',
                  body: 'The MF135 and MF240 are decades old. We know which Perkins engine variants were fitted to which export-market MF models, and which aftermarket kits are genuinely compatible vs. incorrectly labelled.',
                },
                {
                  icon: <AlertTriangle className="w-6 h-6 text-amber-400" />,
                  title: 'Breakdown Priority',
                  body: 'A tractor down during planting or harvest costs more than the part. We triage urgent breakdowns, quote air freight options if needed, and give you a hard ETA — not "check back in a week."',
                },
                {
                  icon: <MapPin className="w-6 h-6 text-green-400" />,
                  title: 'Malaysia-Wide Delivery',
                  body: 'Peninsular and East Malaysia covered. Tracked courier with WhatsApp updates. Parts sourced from the UK or India arrive in 7–14 working days; locally-available parts ship same or next day.',
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

        {/* Final CTA */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Need a Massey Ferguson Part Now?</h2>
            <p className="text-blue-100 text-lg mb-8">Tell us your tractor model and what you need. We'll confirm availability and pricing — usually within 24 hours.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#request"
                className="px-8 py-4 text-lg font-bold rounded-xl bg-white text-blue-700 hover:bg-blue-50 transition-all text-center"
              >
                Submit a Part Request
              </Link>
              <WhatsappCTA
                label="mf-final-cta"
                message="Hi, I need a Massey Ferguson spare part urgently. Tractor model: ___ Part needed: ___"
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
                  label="mf-footer"
                  message="Hi, I need a Massey Ferguson spare part. Tractor model: ___ Part needed: ___"
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
