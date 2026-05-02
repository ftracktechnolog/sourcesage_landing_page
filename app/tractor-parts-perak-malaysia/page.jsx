import Link from 'next/link'
import { MessageCircle, Mail, CheckCircle, Wrench, AlertTriangle, MapPin, ChevronRight, ShieldCheck, Truck } from 'lucide-react'
import WhatsappCTA from '../../components/WhatsappCTA'

export const metadata = {
  title: 'Tractor & Marine Engine Parts Ipoh, Perak — SourceSage',
  description: 'Tractor and marine engine parts in Ipoh, Perak. Fast delivery to Taiping, Kuala Kangsar, Teluk Intan, Sitiawan. Kubota, Yanmar, MF, John Deere, Perkins & Zoomlion parts sourcing.',
  alternates: { canonical: '/tractor-parts-perak-malaysia/', languages: { 'en': 'https://sourcesage.ai/tractor-parts-perak-malaysia/', 'x-default': 'https://sourcesage.ai/tractor-parts-perak-malaysia/' } },
  openGraph: {
    title: 'Tractor & Marine Engine Parts Ipoh, Perak — SourceSage',
    description: 'Tractor and marine engine parts in Ipoh, Perak. Fast delivery to Taiping, Kuala Kangsar, Teluk Intan, Sitiawan. Kubota, Yanmar, MF, John Deere, Perkins & Zoomlion parts sourcing.',
    url: 'https://sourcesage.ai/tractor-parts-perak-malaysia/',
    siteName: 'SourceSage.ai',
    type: 'website',
    locale: 'en',
    images: [{ url: 'https://sourcesage.ai/images/og-home.png', width: 1200, height: 630, alt: 'Tractor Parts Ipoh, Perak — SourceSage' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tractor & Marine Engine Parts Ipoh, Perak — SourceSage',
    description: 'Tractor and marine engine parts in Ipoh, Perak. Fast delivery to Taiping, Kuala Kangsar, Teluk Intan, Sitiawan.',
    images: ['https://sourcesage.ai/images/og-home.png'],
  },
}

const FAQS = [
  {
    q: 'Do you serve customers in Perak?',
    a: 'Yes — SourceSage is based in Ipoh, Perak. We serve workshops, plantations, and farms across the entire state including Ipoh, Taiping, Kuala Kangsar, Teluk Intan, Sitiawan, Batu Gajah, Kampar, and Bidor.',
  },
  {
    q: 'How fast can you deliver tractor parts to Perak locations?',
    a: 'For common parts stocked locally, same-day or next-day delivery across Ipoh and surrounding areas. For parts that require sourcing, typically 3–7 working days via courier. Air freight is available for urgent needs.',
  },
  {
    q: 'What agricultural areas in Perak do you cover?',
    a: 'We cover Perak\'s major agricultural zones: the Kinta Valley (oil palm, vegetables), Kerian district (paddy — Malaysia\'s rice bowl), Batang Padang (oil palm, rubber), Manjung (palm oil, marine), and Larut/Matang (mixed agriculture).',
  },
  {
    q: 'Which tractor and engine brands do you handle in Perak?',
    a: 'We source parts for Kubota, Yanmar, Massey Ferguson, John Deere, Perkins, and Zoomlion — all common brands in Perak\'s agriculture and marine sectors.',
  },
  {
    q: 'Can I pick up parts directly from your Ipoh location?',
    a: 'Yes — contact us via WhatsApp to arrange collection from our Ipoh, Perak base. We can also courier to any Perak address.',
  },
]

const COVERAGE_AREAS = [
  { area: 'Ipoh & Kinta Valley', note: 'Oil palm plantations, vegetable farms, workshops — same-day delivery' },
  { area: 'Taiping & Larut', note: 'Mixed agriculture, rubber — next-day courier delivery' },
  { area: 'Kuala Kangsar', note: 'Paddy, fruit orchards, smallholdings — next-day courier' },
  { area: 'Teluk Intan & Hilir Perak', note: 'Oil palm, paddy — 1–2 day courier delivery' },
  { area: 'Sitiawan & Manjung', note: 'Marine engine parts, palm oil — 1–2 day courier' },
  { area: 'Kampar & Batang Padang', note: 'Oil palm, fruit farms — next-day courier delivery' },
  { area: 'Bidor & Tapah', note: 'Fruit orchards, oil palm — 2-day courier delivery' },
  { area: 'Grik & Hulu Perak', note: 'Orang Asli settlements, boundary farms — 2–3 day delivery' },
]

export default function PerakPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'inLanguage': 'en',
    name: 'Tractor & Marine Engine Parts Sourcing Perak, Malaysia',
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
      areaServed: { '@type': 'State', name: 'Perak' },
    },
    description: 'Fast tractor and marine engine parts sourcing in Perak, Malaysia. Based in Ipoh, serving Kuala Kangsar, Taiping, Teluk Intan, Sitiawan and all Perak districts.',
    serviceType: 'Parts Sourcing',
    areaServed: [
      { '@type': 'City', name: 'Ipoh' },
      { '@type': 'City', name: 'Taiping' },
      { '@type': 'City', name: 'Kuala Kangsar' },
      { '@type': 'City', name: 'Teluk Intan' },
      { '@type': 'City', name: 'Sitiawan' },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'inLanguage': 'en',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sourcesage.ai/' },
      { '@type': 'ListItem', position: 2, name: 'Tractor Parts Perak, Malaysia', item: 'https://sourcesage.ai/tractor-parts-perak-malaysia' },
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <WhatsappCTA
        label="perak-sticky"
        message="Hi, I need tractor or marine parts in Perak. Location: ___ Part needed: ___"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-5 py-3.5 rounded-full shadow-2xl font-bold text-sm flex items-center gap-2 transition-all hover:scale-105"
      >
        <MessageCircle className="w-5 h-5" /> WhatsApp Us
      </WhatsappCTA>

      <div className="min-h-screen font-sans text-slate-900 antialiased">
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
              <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
              <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
              <Link href="/#request" className="hover:text-blue-600 transition-colors">Request a Part</Link>
            </div>
            <WhatsappCTA
              label="perak-navbar"
              message="Hi, I need tractor or marine parts in Perak. Location: ___ Part needed: ___"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg font-bold transition-all text-sm flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </WhatsappCTA>
          </div>
        </nav>

        <div className="bg-slate-50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-slate-500">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700 font-medium">Tractor Parts — Perak, Malaysia</span>
          </div>
        </div>

        <header className="bg-white pt-16 pb-20 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-widest mb-6">
              <MapPin className="w-4 h-4" /> Based in Ipoh, Perak
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6 max-w-3xl">
              Tractor & Marine Engine Parts in Ipoh, Perak
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              SourceSage is based in Ipoh, Perak — we source hard-to-find tractor and marine engine parts for workshops, plantations, and farms across all Perak districts. Same-day availability check, fast courier delivery statewide.
            </p>
          </div>
        </header>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Perak Coverage — Where We Deliver</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {COVERAGE_AREAS.map(loc => (
                <div key={loc.area} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <p className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                    <Truck className="w-4 h-4 text-blue-600 shrink-0" /> {loc.area}
                  </p>
                  <p className="text-slate-500 text-xs">{loc.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Agricultural Zones in Perak We Serve</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-7 border border-slate-200">
                <h3 className="font-bold text-lg text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-green-100 text-green-700 rounded-lg flex items-center justify-center text-sm">🌾</span>
                  Kerian — Malaysia's Rice Bowl
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  The Kerian district in northern Perak, bordering Penang, is one of Malaysia's most productive paddy-growing regions. Tractors here run 12–16 hours per day during planting and harvest seasons. Common requests: Kubota L-series and M-series engine parts, transmission seals, hydraulic pumps, and PTO components.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-7 border border-slate-200">
                <h3 className="font-bold text-lg text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-green-100 text-green-700 rounded-lg flex items-center justify-center text-sm">🌴</span>
                  Kinta Valley — Oil Palm & Vegetables
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  The Kinta Valley around Ipoh, Batu Gajah, and Kampar supports extensive oil palm plantations and vegetable farming. Equipment here is often older — 10-20 year-old tractors still running. We specialise in sourcing parts for these older machines when dealers no longer stock them.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-7 border border-slate-200">
                <h3 className="font-bold text-lg text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-sm">⚓</span>
                  Manjung & Sitiawan — Marine
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Coastal Perak around Lumut, Sitiawan, and Pangkor Island has a significant fishing fleet. Many vessels run Yanmar marine diesel engines. We supply marine engine parts — gaskets, cylinder heads, injectors, cooling pumps — with air freight options for vessels stuck in port.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-7 border border-slate-200">
                <h3 className="font-bold text-lg text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-amber-100 text-amber-700 rounded-lg flex items-center justify-center text-sm">🌳</span>
                  Batang Padang & Hulu Perak
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Southern Perak (Tapah, Bidor, Tanjung Malim) and Upper Perak (Grik, Lenggong) have substantial rubber, oil palm, and fruit farms. Delivery times are slightly longer here — typically 2–3 working days — but we maintain regular courier service to all areas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Perak Workshops Choose SourceSage</h2>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Local presence in Ipoh</strong>
                      <p className="text-sm text-slate-600 mt-1">We're based right here in Perak. You're not dealing with a KL or Johor supplier who doesn't know the Perak market.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <ShieldCheck className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Multi-brand, not single-brand</strong>
                      <p className="text-sm text-slate-600 mt-1">Perak farms often run mixed fleets — Kubota for paddy, Massey Ferguson for estates, Yanmar for marine. We cover all of them.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Truck className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Fast courier to all Perak districts</strong>
                      <p className="text-sm text-slate-600 mt-1">Same-day delivery in Ipoh/Kinta. Next-day to Taiping, Kuala Kangsar, Kampar. 1–2 days to coastal and southern districts.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Older tractors are our specialty</strong>
                      <p className="text-sm text-slate-600 mt-1">Perak has thousands of 15–25 year-old tractors. We actively source discontinued and vintage parts that dealers have stopped carrying.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mt-12 lg:mt-0">
                <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                  <h3 className="font-bold text-lg text-slate-900 mb-4">Common Part Requests in Perak</h3>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-blue-600 shrink-0" /> Kubota L-series overhaul gasket kits
                    </li>
                    <li className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-blue-600 shrink-0" /> Yanmar 3TNV88 and 4TNV88 injectors
                    </li>
                    <li className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-blue-600 shrink-0" /> Massey Ferguson MF240 clutch kits
                    </li>
                    <li className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-blue-600 shrink-0" /> Perkins 1104C-44 cylinder heads & gaskets
                    </li>
                    <li className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-blue-600 shrink-0" /> John Deere 5310 hydraulic seals
                    </li>
                    <li className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-blue-600 shrink-0" /> Zoomlion RC60 threshing chains
                    </li>
                    <li className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-blue-600 shrink-0" /> Yanmar marine engine raw water pumps
                    </li>
                    <li className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-blue-600 shrink-0" /> Kubota M9540 fuel injection pumps
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-blue-200">
                    <WhatsappCTA
                      label="perak-request"
                      message="Hi, I need tractor or marine parts in Perak. Location: ___ Part needed: ___"
                      className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3.5 rounded-xl font-bold transition-all w-full"
                    >
                      <MessageCircle className="w-5 h-5" /> Request a Part from Ipoh, Perak
                    </WhatsappCTA>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Machine Down in Perak?</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
              We prioritise breakdown requests from Perak customers. Same-day availability check, fast dispatch from Ipoh.
            </p>
            <WhatsappCTA
              label="perak-urgent"
              message="Hi, my tractor is DOWN in Perak and I need urgent help. Location: ___ Machine: ___ Part needed: ___"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp Us Now — Urgent Perak Parts
            </WhatsappCTA>
          </div>
        </section>

        <footer className="bg-white py-12 text-slate-500 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
              <div>
                <span className="font-black text-xl tracking-tighter text-slate-900">SourceSage</span>
                <span className="font-black text-xl text-blue-600">.ai</span>
                <p className="text-sm text-slate-500 mt-1">Ipoh, Perak — Malaysia Parts Sourcing Specialist</p>
              </div>
              <div className="flex gap-6 text-sm font-semibold">
                <a href="mailto:info@sourcesage.ai" className="hover:text-blue-600 flex items-center gap-2 transition-colors">
                  <Mail className="w-4 h-4" /> info@sourcesage.ai
                </a>
                <WhatsappCTA
                  label="perak-footer"
                  message="Hi, I need tractor or marine parts in Perak. Location: ___ Part needed: ___"
                  className="hover:text-green-600 flex items-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </WhatsappCTA>
              </div>
            </div>
            <div className="text-center pt-6 border-t border-slate-100">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">© 2026 SourceSage.ai. Tractor & Marine Parts Sourcing — Ipoh, Perak, Malaysia.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
