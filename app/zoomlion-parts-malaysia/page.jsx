import Link from 'next/link'
import { MessageCircle, Mail, CheckCircle, Wrench, AlertTriangle, MapPin, ChevronRight, ShieldCheck } from 'lucide-react'
import WhatsappCTA from '../../components/WhatsappCTA'
import LangSwitcher from '../../components/LangSwitcher'

export const metadata = {
  title: 'Zoomlion Spare Parts Malaysia — Heavy Equipment Sourcing | SourceSage',
  description: 'Zoomlion parts supplier Malaysia. Undercarriage parts, hydraulic fittings, engine components. Fast sourcing for Zoomlion agricultural & construction machinery.',
  alternates: { canonical: '/zoomlion-parts-malaysia/', languages: { 'en': 'https://sourcesage.ai/zoomlion-parts-malaysia/', 'x-default': 'https://sourcesage.ai/zoomlion-parts-malaysia/' } },
  openGraph: {
    title: 'Zoomlion Spare Parts Malaysia — Heavy Equipment Sourcing | SourceSage',
    description: 'Zoomlion parts supplier Malaysia. Undercarriage parts, hydraulic fittings, engine components. Fast sourcing for Zoomlion agricultural & construction machinery.',
    url: 'https://sourcesage.ai/zoomlion-parts-malaysia/',
    siteName: 'SourceSage.ai',
    type: 'website',
    locale: 'en',
    images: [{ url: 'https://sourcesage.ai/images/og-home.png', width: 1200, height: 630, alt: 'Zoomlion Spare Parts Malaysia — SourceSage' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zoomlion Spare Parts Malaysia — Heavy Equipment Sourcing | SourceSage',
    description: 'Zoomlion parts supplier Malaysia. Undercarriage parts, hydraulic fittings, engine components. Fast sourcing for Zoomlion agricultural & construction machinery.',
    images: ['https://sourcesage.ai/images/og-home.png'],
  },
}

const MACHINES = [
  { model: 'Zoomlion RC Series', type: 'Rice combine harvester', detail: 'RC50, RC60, RC70 — widely used in Kedah & Kelantan paddy belts' },
  { model: 'Zoomlion ZP Series', type: 'Paddy transplanter', detail: 'ZP4, ZP6 — popular in Peninsular paddy schemes' },
  { model: 'Zoomlion 4LZ Series', type: 'Small combine', detail: '4LZ-1.0, 4LZ-1.5 — single-row smallholder machines' },
  { model: 'Zoomlion Crawler Crane', type: 'Construction', detail: 'ZCC series — used in plantation & infrastructure projects' },
  { model: 'Zoomlion Concrete Pump', type: 'Construction', detail: 'HBT & ZLJ series — construction sites nationwide' },
  { model: 'Zoomlion Tower Crane', type: 'Construction', detail: 'ZTT & ZT series — high-rise construction' },
]

const PARTS = [
  {
    category: 'Combine Harvester',
    items: ['Cutting blade & cutter bar', 'Threshing drum & concave', 'Grain elevator chain', 'Transmission belt set', 'Header drive shaft'],
  },
  {
    category: 'Engine & Drive',
    items: ['Diesel engine gasket set', 'Fuel injector & pump', 'Alternator & starter', 'Hydraulic pump & motor', 'Final drive gearbox seals'],
  },
  {
    category: 'Paddy Transplanter',
    items: ['Planting fork & pick-up', 'Float shoe & skid', 'Seedling mat feed roller', 'Drive chain & sprocket', 'Transplanting cam'],
  },
  {
    category: 'Filters & Wear Parts',
    items: ['Air filter element', 'Hydraulic return filter', 'Oil filter cartridge', 'Fuel pre-filter', 'Coolant hose & clamps'],
  },
  {
    category: 'Undercarriage',
    items: ['Rubber track & steel track', 'Idler & carrier roller', 'Drive sprocket', 'Track tensioner', 'Bogie wheel'],
  },
  {
    category: 'Electrical & Controls',
    items: ['Dashboard display unit', 'Harvesting sensor', 'Solenoid valve', 'Wiring loom', 'Relay & fuse box'],
  },
]

const FAQS = [
  {
    q: 'Why are Zoomlion spare parts hard to find in Malaysia?',
    a: 'Zoomlion is a Chinese manufacturer with limited authorised dealer presence outside Peninsular paddy regions. Many machines were imported by individual traders rather than official distributors, so parts never entered the normal supply chain. We source directly from China and from secondary dealers who stock Zoomlion-compatible components.',
  },
  {
    q: 'How long does it take to get Zoomlion parts sourced?',
    a: 'Parts available in Malaysia ship within 1–2 days. Parts sourced directly from China typically take 7–14 working days by air freight. For urgent machine-down situations we use express freight and give you a firm ETA before you commit.',
  },
  {
    q: 'Do you supply OEM Zoomlion parts or aftermarket?',
    a: 'Both. OEM parts come with Zoomlion part numbers and traceability. For high-wear items (blades, belts, chains) quality aftermarket alternatives are available and often 40–60% cheaper. We clearly identify which is which so you can make the call.',
  },
  {
    q: 'Can you help if I only have the machine model, not the part number?',
    a: 'Yes. Send us the machine model, year, and a description or photo of the part. Our team cross-references against Zoomlion parts diagrams to identify the correct component before ordering.',
  },
  {
    q: 'Do you cover Zoomlion construction equipment as well as agricultural machines?',
    a: 'Yes — both agricultural (combine harvesters, transplanters) and construction (crawler cranes, concrete pumps, tower cranes) are within scope. Plantation companies operating both types of equipment are a key customer for us.',
  },
]

export default function ZoomlionPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'inLanguage': 'en',
    name: 'Zoomlion Spare Parts Sourcing Malaysia',
    provider: {
      '@type': 'LocalBusiness',
      name: 'SourceSage.ai',
      url: 'https://sourcesage.ai',
      areaServed: { '@type': 'Country', name: 'Malaysia' },
    },
    description: 'Sourcing of hard-to-find Zoomlion agricultural and construction equipment spare parts across Malaysia.',
    serviceType: 'Parts Sourcing',
    areaServed: [
      { '@type': 'State', name: 'Kedah' },
      { '@type': 'State', name: 'Kelantan' },
      { '@type': 'State', name: 'Perak' },
      { '@type': 'State', name: 'Selangor' },
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
      { '@type': 'ListItem', position: 2, name: 'Zoomlion Spare Parts Malaysia', item: 'https://sourcesage.ai/zoomlion-parts-malaysia' },
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

  const partsListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'inLanguage': 'en',
    name: 'Zoomlion Parts Categories',
    description: 'Zoomlion spare parts available by category — combine harvester, engine & drive, paddy transplanter, filters & wear parts, undercarriage, electrical & controls.',
    numberOfItems: PARTS.length,
    itemListElement: PARTS.map((cat, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Product',
        name: `Zoomlion ${cat.category} Parts`,
        description: `${cat.items.join(', ')}`,
      },
    })),
  }

  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'SpeakableSpecification',
    'inLanguage': 'en',
    xpath: ["/html/head/title", "/html/head/meta[@name='description']/@content"],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(partsListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <WhatsappCTA
        label="zoomlion-sticky"
        message="Hi, I need a Zoomlion spare part. Machine model: ___ Part needed: ___"
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
            <WhatsappCTA
              label="zoomlion-navbar"
              message="Hi, I need a Zoomlion spare part. Machine model: ___ Part needed: ___"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg font-bold transition-all text-sm flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </WhatsappCTA>
            <LangSwitcher currentLang="en" />
          </div>
        </nav>

        {/* Breadcrumb */}
        <div className="bg-slate-50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-slate-500">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700 font-medium">Zoomlion Spare Parts Malaysia</span>
          </div>
        </div>

        {/* Hero */}
        <header className="bg-white pt-16 pb-20 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 text-green-800 text-xs font-bold uppercase tracking-widest mb-6">
                <MapPin className="w-4 h-4 text-green-600" /> Agricultural & Construction Equipment
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                Zoomlion Spare Parts Malaysia<br />
                <span className="text-blue-600">When Dealers Can't Help. We Can.</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Combine harvester blades, transplanter pick-ups, hydraulic seals, engine parts and electrical components for Zoomlion agricultural and construction machinery. Sourced from China and local secondary dealers — fast.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#request"
                  className="px-8 py-4 text-lg font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all text-center flex items-center justify-center gap-2"
                >
                  Request a Zoomlion Part <ChevronRight className="w-5 h-5" />
                </Link>
                <WhatsappCTA
                  label="zoomlion-hero"
                  message="Hi, my Zoomlion machine is down. Machine model: ___ Part needed: ___ Location: ___"
                  className="px-8 py-4 text-lg font-bold rounded-xl text-white bg-green-500 hover:bg-green-600 transition-all text-center flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" /> WhatsApp Now
                </WhatsappCTA>
              </div>
            </div>
          </div>
        </header>

        {/* Why parts are hard to find — the problem */}
        <section className="py-16 bg-amber-50 border-y border-amber-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-5 max-w-3xl mx-auto">
              <AlertTriangle className="w-8 h-8 text-amber-500 shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">The Zoomlion Parts Problem in Malaysia</h2>
                <p className="text-slate-600 leading-relaxed mb-3">
                  Zoomlion entered Malaysia primarily through small importers and government agriculture schemes rather than through an authorised distributor network. That means no official parts depot, no guaranteed stock, and long waits when your harvester breaks down mid-season.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  We bypass the gap by sourcing directly from Zoomlion-approved suppliers in China and from established secondary dealers. Most parts enquiries get a confirmed availability update within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Machines covered */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">Equipment Range</h2>
              <h3 className="text-3xl font-bold text-slate-900">Zoomlion Machines We Cover</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {MACHINES.map(m => (
                <div key={m.model} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all">
                  <p className="text-xs font-black text-blue-600 uppercase tracking-widest mb-1">{m.type}</p>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{m.model}</h4>
                  <p className="text-sm text-slate-500">{m.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <p className="text-slate-500 text-sm mb-3">Don't see your model listed?</p>
              <WhatsappCTA
                label="zoomlion-model-unlisted"
                message="Hi, I need a part for my Zoomlion machine. Model: ___ Year: ___ Part needed: ___"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" /> Ask Us About Your Model
              </WhatsappCTA>
            </div>
          </div>
        </section>

        {/* Parts catalogue */}
        <section className="py-20 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">Parts Catalogue</h2>
              <h3 className="text-3xl font-bold text-slate-900">What We Source for Zoomlion</h3>
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

        {/* Harvest season urgency */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-900/50 text-amber-300 text-xs font-bold uppercase tracking-widest mb-6">
                <AlertTriangle className="w-4 h-4" /> Harvest Season Priority
              </div>
              <h2 className="text-3xl font-bold mb-6">A Broken Harvester at Harvest Season Costs More Than the Part</h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Paddy harvest windows in Malaysia — especially in Kedah, Kelantan, and Sekinchan — are tight. A combine that goes down for 3 days waiting for a cutter blade or threshing belt can cost thousands in lost paddy.
              </p>
              <p className="text-slate-300 leading-relaxed mb-8">
                We handle machine-down cases as emergencies. WhatsApp us with your model and the fault, and we'll give you a sourcing timeline within hours. Air freight from China is available for critical parts.
              </p>
              <WhatsappCTA
                label="zoomlion-harvest-emergency"
                message="Hi, my Zoomlion combine harvester is DOWN during harvest! Machine model: ___ Fault/Part needed: ___ Location: ___"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3.5 rounded-xl font-bold transition-all"
              >
                <MessageCircle className="w-5 h-5" /> Emergency WhatsApp — Machine Down
              </WhatsappCTA>
            </div>
            <div className="mt-12 lg:mt-0 grid grid-cols-2 gap-4">
              {[
                { region: 'Kedah', note: 'Double-season paddy — Muda Scheme' },
                { region: 'Kelantan', note: 'Single-season paddy & mixed crops' },
                { region: 'Sekinchan', note: 'Selangor rice bowl' },
                { region: 'Perak', note: 'Kerian Irrigation Scheme' },
                { region: 'Sabah', note: 'Mixed agriculture & plantation' },
                { region: 'Sarawak', note: 'Paddy & upland rice' },
              ].map(r => (
                <div key={r.region} className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                  <p className="font-bold text-white text-sm mb-1">{r.region}</p>
                  <p className="text-slate-400 text-xs">{r.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why SourceSage */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-900">Why Farmers & Contractors Choose SourceSage</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <MapPin className="w-6 h-6 text-green-500" />,
                  title: 'China-Direct Sourcing',
                  body: 'We have established relationships with Zoomlion-approved parts suppliers in China. No middlemen inflating prices — and we share full part numbers and traceability with every order.',
                },
                {
                  icon: <AlertTriangle className="w-6 h-6 text-amber-500" />,
                  title: 'Machine-Down Triage',
                  body: 'Broken machinery during season is triaged as an emergency. We prioritise your case, quote air freight options if sea freight is too slow, and give a hard ETA — not "we\'ll try our best."',
                },
                {
                  icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
                  title: 'Technical Identification',
                  body: 'No part number? No problem. Send a photo of the broken part or the machine plate. Our team cross-references against Zoomlion parts diagrams to find the right component.',
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
            <h2 className="text-3xl font-bold mb-4">Need a Zoomlion Part Now?</h2>
            <p className="text-blue-100 text-lg mb-8">Tell us your machine model and the part you need. We'll confirm availability and pricing — usually within 24 hours.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#request"
                className="px-8 py-4 text-lg font-bold rounded-xl bg-white text-blue-700 hover:bg-blue-50 transition-all text-center"
              >
                Submit a Part Request
              </Link>
              <WhatsappCTA
                label="zoomlion-final-cta"
                message="Hi, I need a Zoomlion spare part urgently. Machine model: ___ Part needed: ___ Location: ___"
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
                  label="zoomlion-footer"
                  message="Hi, I need a Zoomlion spare part. Machine model: ___ Part needed: ___"
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
