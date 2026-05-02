import Link from 'next/link'
import { MessageCircle, Mail, CheckCircle, Wrench, MapPin, ChevronRight, ShieldCheck, Truck, Anchor } from 'lucide-react'
import WhatsappCTA from '../../components/WhatsappCTA'
import LangSwitcher from '../../components/LangSwitcher'

export const metadata = {
  title: 'Tractor & Marine Engine Parts Sabah Malaysia — SourceSage',
  description: 'Tractor and marine engine parts in Sabah, Malaysia. Fast delivery to Kota Kinabalu, Sandakan, Tawau, Lahad Datu, Keningau. Kubota, Yanmar, Perkins & marine diesel parts sourcing.',
  alternates: { canonical: '/tractor-parts-sabah-malaysia/', languages: { 'en': 'https://sourcesage.ai/tractor-parts-sabah-malaysia/', 'x-default': 'https://sourcesage.ai/tractor-parts-sabah-malaysia/' } },
  openGraph: {
    title: 'Tractor & Marine Engine Parts Sabah Malaysia — SourceSage',
    description: 'Tractor and marine engine parts in Sabah, Malaysia. Fast delivery to Kota Kinabalu, Sandakan, Tawau, Lahad Datu, Keningau. Kubota, Yanmar, Perkins & marine diesel parts sourcing.',
    url: 'https://sourcesage.ai/tractor-parts-sabah-malaysia/',
    siteName: 'SourceSage.ai',
    type: 'website',
    locale: 'en',
    images: [{ url: 'https://sourcesage.ai/images/og-home.png', width: 1200, height: 630, alt: 'Tractor & Marine Parts Sabah — SourceSage' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tractor & Marine Engine Parts Sabah Malaysia — SourceSage',
    description: 'Tractor and marine engine parts in Sabah. Fast delivery to KK, Sandakan, Tawau. Marine diesel & plantation machinery parts.',
    images: ['https://sourcesage.ai/images/og-home.png'],
  },
}

const FAQS = [
  {
    q: 'Do you serve customers in Sabah, East Malaysia?',
    a: 'Yes — SourceSage actively serves Sabah. We ship parts to Kota Kinabalu, Sandakan, Tawau, Lahad Datu, Keningau, and all Sabah districts via tracked courier or air freight for urgent cases.',
  },
  {
    q: 'How fast can you deliver parts to Sabah?',
    a: 'Standard courier to Sabah: 3–7 working days. Air freight for urgent orders: 1–2 working days to KK or Sandakan. We use tracked courier (Pos Laju, GDEX, DHL) for full visibility.',
  },
  {
    q: 'Do you supply marine engine parts for Sabah fishing boats?',
    a: 'Yes — Sabah has a large fishing fleet. We source parts for Yanmar, Perkins, Isuzu, and Hino marine diesel engines: raw water pumps, injectors, cylinder heads, gasket kits, cooling components, and more.',
  },
  {
    q: 'What plantation machinery parts do you cover in Sabah?',
    a: 'Sabah is a major palm oil producer. We source tractor and machinery parts for Kubota, Massey Ferguson, John Deere, and Zoomlion — commonly used in Sabah plantations. Engine overhaul kits, hydraulic pumps, transmission parts, and undercarriage components.',
  },
  {
    q: 'Can you help with discontinued or hard-to-find parts in Sabah?',
    a: 'Yes — we specialise in discontinued and hard-to-find parts. Sabah workshops often run older equipment because shipping turnarounds are longer. We search our Japan, Singapore, and regional supplier networks for parts local dealers no longer stock.',
  },
]

const COVERAGE_AREAS = [
  { area: 'Kota Kinabalu & West Coast', note: 'Fishing fleet hub, palm oil logistics — 3–5 day courier' },
  { area: 'Sandakan', note: 'Commercial fishing, aquaculture — 4–6 day courier' },
  { area: 'Tawau', note: 'Palm oil, marine engines, cocoa — 4–6 day courier' },
  { area: 'Lahad Datu', note: 'Palm oil plantations, marine — 4–6 day courier' },
  { area: 'Keningau & Interior', note: 'Agriculture, rubber, mixed farming — 5–7 day courier' },
  { area: 'Kudat & Northern', note: 'Fishing, coconut, smallholdings — 5–7 day courier' },
  { area: 'Semporna & East Coast', note: 'Fishing, seaweed farming — 5–7 day courier' },
  { area: 'Beaufort & Tenom', note: 'Paddy, rubber, fruit farms — 5–7 day courier' },
]

export default function SabahPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'inLanguage': 'en',
    name: 'Tractor & Marine Engine Parts Sourcing Sabah, Malaysia',
    provider: {
      '@type': 'LocalBusiness',
      name: 'SourceSage.ai',
      url: 'https://sourcesage.ai',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ipoh',
        addressRegion: 'Perak',
        addressCountry: 'MY',
      },
    },
    description: 'Fast tractor and marine engine parts sourcing for Sabah, East Malaysia. Serving Kota Kinabalu, Sandakan, Tawau and all Sabah districts with tracked courier and air freight delivery.',
    serviceType: 'Parts Sourcing',
    areaServed: { '@type': 'State', name: 'Sabah' },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'inLanguage': 'en',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sourcesage.ai/' },
      { '@type': 'ListItem', position: 2, name: 'Tractor Parts Sabah, Malaysia', item: 'https://sourcesage.ai/tractor-parts-sabah-malaysia' },
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
    xpath: ["/html/head/title", "/html/head/meta[@name='description']/@content"],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <WhatsappCTA
        label="sabah-sticky"
        message="Hi, I need tractor or marine parts in Sabah. Location: ___ Part needed: ___"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-5 py-3.5 rounded-full shadow-2xl font-bold text-sm flex items-center gap-2 transition-all hover:scale-105"
      >
        <MessageCircle className="w-5 h-5" /> WhatsApp Us
      </WhatsappCTA>

      <div className="min-h-screen font-sans text-slate-900 antialiased">
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
              label="sabah-navbar"
              message="Hi, I need tractor or marine parts in Sabah. Location: ___ Part needed: ___"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg font-bold transition-all text-sm flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </WhatsappCTA>
          </div>
        </nav>

        <div className="bg-slate-50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-slate-500">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700 font-medium">Tractor Parts — Sabah, Malaysia</span>
          </div>
        </div>

        <header className="bg-white pt-16 pb-20 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-6">
              <MapPin className="w-4 h-4" /> Serving Sabah, East Malaysia
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6 max-w-3xl">
              Tractor & Marine Engine Parts in Sabah, East Malaysia
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              SourceSage delivers tractor and marine engine parts to Sabah — from Kota Kinabalu to Tawau. We source hard-to-find parts for fishing boats, plantation machinery, and agricultural tractors, with tracked courier and air freight to all Sabah districts.
            </p>
          </div>
        </header>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Sabah Coverage — Where We Deliver</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {COVERAGE_AREAS.map(loc => (
                <div key={loc.area} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <p className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                    <Truck className="w-4 h-4 text-accent shrink-0" /> {loc.area}
                  </p>
                  <p className="text-slate-500 text-xs">{loc.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Sabah Industries We Serve</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-7 border border-slate-200">
                <h3 className="font-bold text-lg text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-100 text-accent rounded-lg flex items-center justify-center text-sm"><Anchor className="w-4 h-4" /></span>
                  Marine & Fishing — Sabah's Largest Industry
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Sabah has Malaysia's largest fishing fleet, operating from KK, Sandakan, Tawau, and Semporna. Common engines: Yanmar 6LY, 4JH, 3JH series; Perkins M92B, M130C; Isuzu UM-series marine diesels. We supply marine engine parts — raw water pumps, heat exchangers, injectors, overhaul kits — with air freight for vessels stuck in port.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-7 border border-slate-200">
                <h3 className="font-bold text-lg text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-green-100 text-green-700 rounded-lg flex items-center justify-center text-sm">🌴</span>
                  Palm Oil — Sabah's Plantation Backbone
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Sabah is Malaysia's largest palm oil producer. Plantations in Lahad Datu, Tawau, Sandakan, and Kinabatangan run extensive tractor fleets — Kubota M-series, Massey Ferguson, John Deere. Common requests: engine overhaul kits, hydraulic pumps, transmission seals, undercarriage parts for plantation tractors running 12+ hours daily.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-7 border border-slate-200">
                <h3 className="font-bold text-lg text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-amber-100 text-amber-700 rounded-lg flex items-center justify-center text-sm">🌾</span>
                  Agriculture & Smallholdings
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Beyond palm oil, Sabah has active paddy farming (Kota Belud, Beaufort, Tenom), rubber smallholdings (Keningau, Tenom), and mixed vegetable farming (Ranau, Kundasang highlands). Compact tractors like Kubota L-series and B-series are common here. We source parts for these smaller machines just as urgently as for plantation-scale equipment.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-7 border border-slate-200">
                <h3 className="font-bold text-lg text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-purple-100 text-purple-700 rounded-lg flex items-center justify-center text-sm"><Truck className="w-4 h-4" /></span>
                  Logistics & Delivery to Sabah
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We understand East Malaysia logistics. Parts ship from Peninsula via tracked courier (Pos Laju, GDEX) or air freight (MASkargo) for urgent breakdowns. Standard delivery: 3–7 working days. Air freight priority: 1–2 working days to KK or Sandakan. All shipments include tracking — we WhatsApp you the tracking number once dispatched.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Sabah Workshops Choose SourceSage</h2>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <Anchor className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Marine engine specialists</strong>
                      <p className="text-sm text-slate-600 mt-1">Sabah's fishing fleet depends on marine diesels. We understand Yanmar, Perkins, Isuzu, and Hino marine engines — and we know which parts fail most often in tropical saltwater conditions.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <ShieldCheck className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Tracked delivery, full visibility</strong>
                      <p className="text-sm text-slate-600 mt-1">Every shipment to Sabah comes with a tracking number. You'll know exactly where your parts are and when they arrive — no guessing, no waiting in the dark.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Truck className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Air freight for emergencies</strong>
                      <p className="text-sm text-slate-600 mt-1">Vessel stuck in Sandakan port? Tractor down during harvest in Lahad Datu? We offer air freight priority shipping for machine-down cases — parts can arrive in 1–2 days.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Multi-brand, one contact</strong>
                      <p className="text-sm text-slate-600 mt-1">Sabah workshops often maintain mixed fleets — Kubota tractors, Yanmar marine engines, Perkins generators. We source across all these brands so you don't need multiple suppliers.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mt-12 lg:mt-0">
                <div className="bg-accent/10 rounded-2xl p-8 border border-blue-100">
                  <h3 className="font-bold text-lg text-slate-900 mb-4">Common Part Requests in Sabah</h3>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-accent shrink-0" /> Yanmar 6LY/4JH raw water pump kits
                    </li>
                    <li className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-accent shrink-0" /> Perkins M92B heat exchanger gaskets
                    </li>
                    <li className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-accent shrink-0" /> Kubota M9000/M9540 overhaul kits
                    </li>
                    <li className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-accent shrink-0" /> Isuzu 6BG1/6HK1 marine injectors
                    </li>
                    <li className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-accent shrink-0" /> John Deere 6068 marine head gaskets
                    </li>
                    <li className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-accent shrink-0" /> Yanmar 3TNV88/4TNV88 engine bearings
                    </li>
                    <li className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-accent shrink-0" /> Massey Ferguson MF240 clutch kits
                    </li>
                    <li className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-accent shrink-0" /> Kubota L3408/L4400 hydraulic pumps
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-blue-200">
                    <WhatsappCTA
                      label="sabah-request"
                      message="Hi, I need tractor or marine parts in Sabah. Location: ___ Part needed: ___"
                      className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3.5 rounded-xl font-bold transition-all w-full"
                    >
                      <MessageCircle className="w-5 h-5" /> Request Parts for Sabah
                    </WhatsappCTA>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Machine Down in Sabah?</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
              Vessel out of action? Tractor stopped mid-harvest? We prioritise Sabah breakdown requests with air freight options for same-week delivery.
            </p>
            <WhatsappCTA
              label="sabah-urgent"
              message="Hi, machine is DOWN in Sabah — urgent help needed. Location: ___ Machine: ___ Part needed: ___"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp Now — Urgent Sabah Parts
            </WhatsappCTA>
          </div>
        </section>

        <footer className="bg-white py-12 text-slate-500 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
              <div>
                <span className="font-black text-xl tracking-tighter text-slate-900">SourceSage</span>
                <span className="font-black text-xl text-accent">.ai</span>
                <p className="text-sm text-slate-500 mt-1">Ipoh, Perak — Malaysia Parts Sourcing Specialist</p>
              </div>
              <div className="flex gap-6 text-sm font-semibold">
                <a href="mailto:info@sourcesage.ai" className="hover:text-accent flex items-center gap-2 transition-colors">
                  <Mail className="w-4 h-4" /> info@sourcesage.ai
                </a>
                <WhatsappCTA
                  label="sabah-footer"
                  message="Hi, I need tractor or marine parts in Sabah. Location: ___ Part needed: ___"
                  className="hover:text-green-600 flex items-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </WhatsappCTA>
              </div>
            </div>
            <div className="text-center pt-6 border-t border-slate-100">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">© 2026 SourceSage.ai. Tractor & Marine Parts Sourcing — Sabah, Malaysia.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
