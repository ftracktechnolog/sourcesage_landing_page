import Link from 'next/link'
import { MessageCircle, Mail, CheckCircle, Wrench, MapPin, ChevronRight, ShieldCheck, Truck, Anchor } from 'lucide-react'
import WhatsappCTA from '../../components/WhatsappCTA'
import LangSwitcher from '../../components/LangSwitcher'

export const metadata = {
  title: 'Tractor & Marine Engine Parts Sarawak Malaysia — SourceSage',
  description: 'Tractor and marine engine parts in Sarawak, Malaysia. Fast delivery to Kuching, Miri, Sibu, Bintulu, Sri Aman. Kubota, Yanmar, Perkins & marine diesel parts for river and offshore vessels.',
  alternates: { canonical: '/tractor-parts-sarawak-malaysia/', languages: { 'en': 'https://sourcesage.ai/tractor-parts-sarawak-malaysia/', 'x-default': 'https://sourcesage.ai/tractor-parts-sarawak-malaysia/' } },
  openGraph: {
    title: 'Tractor & Marine Engine Parts Sarawak Malaysia — SourceSage',
    description: 'Tractor and marine engine parts in Sarawak, Malaysia. Fast delivery to Kuching, Miri, Sibu, Bintulu. Marine diesel parts for river & offshore vessels, plantation machinery.',
    url: 'https://sourcesage.ai/tractor-parts-sarawak-malaysia/',
    siteName: 'SourceSage.ai',
    type: 'website',
    locale: 'en',
    images: [{ url: 'https://sourcesage.ai/images/og-home.png', width: 1200, height: 630, alt: 'Tractor & Marine Parts Sarawak — SourceSage' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tractor & Marine Engine Parts Sarawak Malaysia — SourceSage',
    description: 'Tractor and marine engine parts in Sarawak. Fast delivery to Kuching, Miri, Sibu. Marine diesel & plantation machinery parts for East Malaysia.',
    images: ['https://sourcesage.ai/images/og-home.png'],
  },
}

const FAQS = [
  {
    q: 'Do you serve customers in Sarawak, East Malaysia?',
    a: 'Yes — SourceSage ships parts to all Sarawak divisions: Kuching, Miri, Sibu, Bintulu, Sri Aman, Sarikei, Kapit, and Limbang. Tracked courier and air freight options available.',
  },
  {
    q: 'How fast can you deliver parts to Sarawak?',
    a: 'Standard courier to Sarawak: 3–7 working days. Air freight for urgent orders: 1–2 working days to Kuching, Miri, or Sibu. All shipments include tracking via Pos Laju, GDEX, or DHL.',
  },
  {
    q: 'Do you supply marine engine parts for Sarawak river vessels?',
    a: 'Yes — Sarawak has extensive river transport networks. We source parts for Yanmar, Perkins, Isuzu, and Hino marine diesels used on river ferries, workboats, tugs, and express boats. Common requests: raw water pumps, injectors, gasket kits, cooling system components.',
  },
  {
    q: 'What about offshore support vessel parts?',
    a: 'Miri and Bintulu are major offshore oil & gas hubs. We source parts for larger marine diesels (Yanmar 6LY, Perkins M130C, Isuzu 6HK1) used on crew boats, supply vessels, and workboats. Air freight available for urgent offshore vessel needs.',
  },
  {
    q: 'What plantation machinery parts do you cover in Sarawak?',
    a: 'Sarawak has extensive oil palm plantations, particularly around Miri, Bintulu, and Sibu. We source parts for Kubota, Massey Ferguson, John Deere, and Zoomlion tractors — engine overhaul kits, hydraulic pumps, transmission components, and more.',
  },
]

const COVERAGE_AREAS = [
  { area: 'Kuching & Southern', note: 'Plantations, marine pleasure craft, workshops — 3–5 day courier' },
  { area: 'Miri', note: 'Offshore support vessels, oil palm — 3–5 day courier' },
  { area: 'Sibu', note: 'River ferries, workboats, timber — 4–6 day courier' },
  { area: 'Bintulu', note: 'Offshore vessels, plantations, LNG — 4–6 day courier' },
  { area: 'Sri Aman & Sarikei', note: 'Palm oil, pepper, agriculture — 5–7 day courier' },
  { area: 'Kapit & Interior', note: 'River transport, logging, longhouses — 5–7 day courier' },
  { area: 'Sarikei & Central', note: 'Fishing, agriculture, mixed farming — 5–7 day courier' },
  { area: 'Limbang & Lawas', note: 'Border trade, agriculture, logging — 6–8 day courier' },
]

export default function SarawakPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'inLanguage': 'en',
    name: 'Tractor & Marine Engine Parts Sourcing Sarawak, Malaysia',
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
    description: 'Fast tractor and marine engine parts sourcing for Sarawak, East Malaysia. Serving Kuching, Miri, Sibu, Bintulu and all Sarawak divisions with tracked courier and air freight delivery.',
    serviceType: 'Parts Sourcing',
    areaServed: { '@type': 'State', name: 'Sarawak' },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'inLanguage': 'en',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sourcesage.ai/' },
      { '@type': 'ListItem', position: 2, name: 'Tractor Parts Sarawak, Malaysia', item: 'https://sourcesage.ai/tractor-parts-sarawak-malaysia' },
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
        label="sarawak-sticky"
        message="Hi, I need tractor or marine parts in Sarawak. Location: ___ Part needed: ___"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-5 py-3.5 rounded-full shadow-2xl font-bold text-sm flex items-center gap-2 transition-all hover:scale-105"
      >
        <MessageCircle className="w-5 h-5" /> WhatsApp Us
      </WhatsappCTA>

      <div className="min-h-screen font-sans text-slate-900 antialiased">
        <nav className="bg-white shadow-sm sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <span className="font-heading font-bold text-xl text-accent tracking-tight">SourceSage</span>
              <span className="font-bold text-xl text-green-600">.ai</span>
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
              label="sarawak-navbar"
              message="Hi, I need tractor or marine parts in Sarawak. Location: ___ Part needed: ___"
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
            <span className="text-slate-700 font-medium">Tractor Parts — Sarawak, Malaysia</span>
          </div>
        </div>

        <header className="bg-white pt-16 pb-20 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-6">
              <MapPin className="w-4 h-4" /> Serving Sarawak, East Malaysia
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6 max-w-3xl">
              Tractor & Marine Engine Parts in Sarawak, East Malaysia
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              SourceSage delivers tractor and marine engine parts to Sarawak — from Kuching to Limbang. We source hard-to-find parts for river vessels, offshore support boats, plantation machinery, and agricultural tractors with tracked courier and air freight to all Sarawak divisions.
            </p>
          </div>
        </header>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Sarawak Coverage — Where We Deliver</h2>
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
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Sarawak Industries We Serve</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-7 border border-slate-200">
                <h3 className="font-bold text-lg text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-100 text-accent rounded-lg flex items-center justify-center text-sm"><Anchor className="w-4 h-4" /></span>
                  River & Coastal Transport — Sarawak's Lifeline
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Sarawak's extensive river network — the Rajang, Baram, and Lupar — moves goods and people by water. Express boats, river ferries, tugboats, and workboats run Yanmar and Perkins marine diesels daily. Common needs: cooling pumps, injectors, heat exchangers, marine gaskets. We understand the urgency when a river ferry goes down.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-7 border border-slate-200">
                <h3 className="font-bold text-lg text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-purple-100 text-purple-700 rounded-lg flex items-center justify-center text-sm"><Anchor className="w-4 h-4" /></span>
                  Offshore Oil & Gas — Miri & Bintulu
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Miri and Bintulu are key offshore support hubs. Crew boats, supply vessels, and anchor handlers operate around the clock. Marine engine parts we source: Perkins M130C/M92B overhaul kits, Yanmar 6LY fuel systems, Isuzu 6HK1 cooling components, Caterpillar C-series marine alternatives. Air freight priority for vessels on standby.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-7 border border-slate-200">
                <h3 className="font-bold text-lg text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-green-100 text-green-700 rounded-lg flex items-center justify-center text-sm">🌴</span>
                  Palm Oil & Plantation — Sarawak's Growth Sector
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Sarawak's oil palm acreage has expanded significantly, concentrated around Miri-Bintulu-Sibu corridor and Kuching-Samarahan. Plantations run Kubota M-series, Massey Ferguson, and John Deere tractors. Frequent requests: engine overhaul kits, transmission clutch plates, hydraulic seals, PTO shafts, and undercarriage components for older plantation tractors.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-7 border border-slate-200">
                <h3 className="font-bold text-lg text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-amber-100 text-amber-700 rounded-lg flex items-center justify-center text-sm">🌾</span>
                  Agriculture & Food Production
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Pepper farming (Sarikei, Sri Aman), paddy (Limbang, Lawas), and fruit orchards (Kuching, Samarahan) use compact tractors — Kubota L-series, B-series, and Yanmar models. These smaller operations often run older machines. We specialise in sourcing parts the local dealers have stopped carrying for out-of-production models.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Sarawak Workshops Choose SourceSage</h2>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <Anchor className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Marine & river vessel expertise</strong>
                      <p className="text-sm text-slate-600 mt-1">Sarawak moves on water. We understand the marine diesels that power express boats, ferries, workboats, and offshore vessels — and we know the parts that fail most often in tropical river and coastal conditions.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <ShieldCheck className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Serving remote divisions</strong>
                      <p className="text-sm text-slate-600 mt-1">Sarawak's interior divisions — Kapit, Belaga, Baram — are accessible primarily by river. We coordinate with local courier partners who understand last-mile delivery to remote longhouses and upriver settlements.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Truck className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Air freight for urgent vessel breakdowns</strong>
                      <p className="text-sm text-slate-600 mt-1">Express boat down on the Rajang? Crew boat stuck in Miri port? We use air freight to get critical parts to Kuching, Miri, or Sibu within 1–2 working days — then local courier for final delivery.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Multi-brand, single contact</strong>
                      <p className="text-sm text-slate-600 mt-1">Sarawak workshops and plantations run mixed fleets — Kubota tractors, Yanmar marine engines, Perkins generators, John Deere equipment. One WhatsApp message covers all brands. No need to contact five separate dealers.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mt-12 lg:mt-0">
                <div className="bg-accent/10 rounded-2xl p-8 border border-blue-100">
                  <h3 className="font-bold text-lg text-slate-900 mb-4">Common Part Requests in Sarawak</h3>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-accent shrink-0" /> Yanmar 6LY/4JH marine cooling pumps
                    </li>
                    <li className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-accent shrink-0" /> Perkins M92B/M130C gasket sets
                    </li>
                    <li className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-accent shrink-0" /> Isuzu 6BG1/6HK1 fuel injectors
                    </li>
                    <li className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-accent shrink-0" /> Kubota M9540 engine overhaul kits
                    </li>
                    <li className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-accent shrink-0" /> John Deere 6068 marine cylinder heads
                    </li>
                    <li className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-accent shrink-0" /> Massey Ferguson MF375 clutch assemblies
                    </li>
                    <li className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-accent shrink-0" /> Yanmar 3TNV88 engine bearings & seals
                    </li>
                    <li className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-accent shrink-0" /> Kubota V1505 water pumps & thermostats
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-blue-200">
                    <WhatsappCTA
                      label="sarawak-request"
                      message="Hi, I need tractor or marine parts in Sarawak. Location: ___ Part needed: ___"
                      className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3.5 rounded-xl font-bold transition-all w-full"
                    >
                      <MessageCircle className="w-5 h-5" /> Request Parts for Sarawak
                    </WhatsappCTA>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Vessel or Machine Down in Sarawak?</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
              River ferry out of service? Offshore vessel on standby? Tractor down during planting? We prioritise Sarawak breakdowns with air freight to Kuching, Miri, and Sibu.
            </p>
            <WhatsappCTA
              label="sarawak-urgent"
              message="Hi, machine is DOWN in Sarawak — urgent help needed. Location: ___ Machine: ___ Part needed: ___"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp Now — Urgent Sarawak Parts
            </WhatsappCTA>
          </div>
        </section>

        <footer className="bg-white py-12 text-slate-500 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
              <div>
                <span className="font-heading font-black text-xl tracking-tighter text-accent">SourceSage</span>
                <span className="font-black text-xl text-green-600">.ai</span>
                <p className="text-sm text-slate-500 mt-1">Ipoh, Perak — Malaysia Parts Sourcing Specialist</p>
              </div>
              <div className="flex gap-6 text-sm font-semibold">
                <a href="mailto:info@sourcesage.ai" className="hover:text-accent flex items-center gap-2 transition-colors">
                  <Mail className="w-4 h-4" /> info@sourcesage.ai
                </a>
                <WhatsappCTA
                  label="sarawak-footer"
                  message="Hi, I need tractor or marine parts in Sarawak. Location: ___ Part needed: ___"
                  className="hover:text-green-600 flex items-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </WhatsappCTA>
              </div>
            </div>
            <div className="text-center pt-6 border-t border-slate-100">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">© 2026 SourceSage.ai. Tractor & Marine Parts Sourcing — Sarawak, Malaysia.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
