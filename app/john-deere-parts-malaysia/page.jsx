import Link from 'next/link'
import { MessageCircle, Mail, CheckCircle, Wrench, AlertTriangle, MapPin, ChevronRight, ShieldCheck } from 'lucide-react'
import WhatsappCTA from '../../components/WhatsappCTA'

export const metadata = {
  title: 'John Deere Tractor Parts Malaysia | SourceSage',
  description: 'Hard-to-find John Deere tractor spare parts in Malaysia. 5E, 6J, 5075E, 5310 series and vintage models. Fast sourcing for paddy farms, plantations & construction nationwide.',
  alternates: { canonical: '/john-deere-parts-malaysia/', languages: { 'en': 'https://sourcesage.ai/john-deere-parts-malaysia/', 'x-default': 'https://sourcesage.ai/john-deere-parts-malaysia/' } },
  openGraph: {
    title: 'John Deere Tractor Parts Malaysia | SourceSage',
    description: 'Hard-to-find John Deere tractor spare parts in Malaysia. 5E, 6J series and vintage models. Fast sourcing nationwide.',
    url: 'https://sourcesage.ai/john-deere-parts-malaysia/',
    siteName: 'SourceSage.ai',
    type: 'website',
    images: [{ url: 'https://sourcesage.ai/images/og-home.png', width: 1200, height: 630, alt: 'John Deere Tractor Parts Malaysia — SourceSage' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Deere Tractor Parts Malaysia | SourceSage',
    description: 'Hard-to-find John Deere tractor spare parts in Malaysia. 5E, 6J series and vintage models.',
    images: ['https://sourcesage.ai/images/og-home.png'],
  },
}

const MODELS = [
  { model: 'John Deere 5075E', engine: 'JD PowerTech 3.4L 4-cyl', note: 'Most popular modern JD in Malaysian paddy sector' },
  { model: 'John Deere 5310', engine: 'JD 3029D / 3029T 3.0L', note: 'Widely used in Kedah, Kelantan paddy estates' },
  { model: 'John Deere 5055E', engine: 'JD PowerTech 3.4L 4-cyl', note: 'Entry-level utility, common in smallholder farms' },
  { model: 'John Deere 6110J / 6115J', engine: 'JD PowerTech 6.8L 6-cyl', note: 'Plantation & large estate workhorse' },
  { model: 'John Deere 5403 / 5415', engine: 'JD 3029D', note: 'Legacy models with large installed base' },
  { model: 'John Deere 2WD Classics (4020, 4040)', engine: 'Various JD engines', note: 'Vintage units still operating in older estates' },
]

const PARTS = [
  {
    category: 'Engine (PowerTech / 3029)',
    items: ['Full overhaul / rebuild kit', 'Cylinder head & head gasket set', 'Injector nozzles (Stanadyne / Bosch)', 'Water pump & thermostat', 'Timing gear set & camshaft'],
  },
  {
    category: 'Transmission & PTO',
    items: ['Clutch disc & pressure plate', 'PTO shaft seal & bearing', 'Synchro rings & shift forks', 'Final drive seals & bearings', 'Differential lock components'],
  },
  {
    category: 'Hydraulics (Open Centre)',
    items: ['Hydraulic pump', 'Lift cylinder seals & piston', 'Control valve O-ring kits', 'Hydraulic filter & strainer', 'Remote coupler seals'],
  },
  {
    category: 'Steering & Front Axle',
    items: ['Steering cylinder rebuild kit', 'King pin & bush set', 'Front wheel hub bearing', 'Track rod end & ball joint', 'Steering gear box seals'],
  },
  {
    category: 'Electrical & Instruments',
    items: ['Starter motor (12V)', 'Alternator & regulator', 'Glow plugs (6-volt type)', 'Temperature & oil pressure senders', 'Instrument cluster & gauges'],
  },
  {
    category: 'Filters & Service Items',
    items: ['Engine oil filter (John Deere spec)', 'Fuel filter primary & secondary', 'Air filter element & pre-cleaner', 'Hydraulic / transmission filter', 'Radiator hoses & belts'],
  },
]

const FAQS = [
  {
    q: 'Do you stock genuine John Deere parts or aftermarket?',
    a: 'We source both — genuine John Deere parts via authorised channels for critical drivetrain components, and OEM-compatible aftermarket (e.g. Stanadyne, Bosch) for consumables and wear items. We discuss options and pricing for each part request.',
  },
  {
    q: 'My John Deere dealer says the part is discontinued. Can you help?',
    a: 'Yes. For older models like the 5310 and 5403, we source from Japan\'s secondary market and specialist dismantlers. Parts officially discontinued in Malaysia can often be found through these channels.',
  },
  {
    q: 'What John Deere models do you support?',
    a: 'Primarily the 5E and 6J series common in Malaysia, plus the older 5310, 5403, and 5415 models. For vintage units (4020, 4040), we assess availability case by case.',
  },
  {
    q: 'How quickly can you deliver?',
    a: 'For in-stock items, typically 1–3 business days within Peninsular Malaysia, 3–5 days for East Malaysia. Sourced items from Japan or China take 10–21 days. We confirm lead time before you commit.',
  },
  {
    q: 'Can I send you a photo of the failed part instead of a part number?',
    a: 'Absolutely. A clear photo — front, back, with a ruler or coin for scale — usually lets us identify the component and match it to a part number within a few hours.',
  },
]

const jsonLd = {
  service: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'John Deere Tractor Parts Sourcing Malaysia',
    serviceType: 'Agricultural Machinery Parts Supply',
    description: 'Sourcing hard-to-find John Deere tractor spare parts across Malaysia — 5E, 6J, 5310 series and vintage models.',
    provider: { '@type': 'Organization', name: 'SourceSage.ai', url: 'https://sourcesage.ai' },
    areaServed: { '@type': 'Country', name: 'Malaysia' },
    offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', priceCurrency: 'MYR' },
  },
  faq: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  },
  breadcrumb: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sourcesage.ai/' },
      { '@type': 'ListItem', position: 2, name: 'John Deere Parts Malaysia', item: 'https://sourcesage.ai/john-deere-parts-malaysia' },
    ],
  },
}

export default function JohnDeerePartsPage() {
  return (
    <div className="min-h-screen font-sans text-slate-900 antialiased">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.breadcrumb) }} />

      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
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
            label="jd-navbar"
            message="Hi, I need help sourcing a John Deere tractor part. Model: ___ Part needed: ___"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg font-bold transition-all text-sm flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp Us
          </WhatsappCTA>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav className="flex items-center gap-2 text-xs text-slate-400 font-medium">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-600">John Deere Parts Malaysia</span>
        </nav>
      </div>

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-block bg-yellow-400 text-green-900 text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
                John Deere Parts Specialist — Malaysia
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
                John Deere Tractor Parts<br />in Malaysia
              </h1>
              <p className="text-lg text-green-100 mb-8 leading-relaxed">
                Sourcing hard-to-find John Deere spare parts across Peninsular and East Malaysia — 5E and 6J series, older 5310 and 5403 models, and vintage units. Genuine and OEM-compatible. Fast response, competitive pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsappCTA
                  label="jd-hero-primary"
                  message="Hi, I need help sourcing a John Deere tractor part. Model: ___ Part needed: ___"
                  className="bg-yellow-400 hover:bg-yellow-300 text-green-900 px-8 py-4 rounded-xl font-black text-lg transition-all flex items-center gap-3 justify-center"
                >
                  <MessageCircle className="w-6 h-6" /> Request a Part
                </WhatsappCTA>
                <a
                  href="#models"
                  className="border-2 border-green-300 text-green-100 hover:bg-green-700 px-8 py-4 rounded-xl font-bold text-lg transition-all text-center"
                >
                  View Supported Models
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="bg-white border-b border-slate-100 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { label: 'Response time', value: '< 24 hours' },
                { label: 'Models covered', value: '5E, 6J, 5310, 5403+' },
                { label: 'Coverage', value: 'Peninsular + East MY' },
                { label: 'Source', value: 'Genuine & OEM-compat.' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <div className="text-xl font-black text-green-700">{value}</div>
                  <div className="text-xs text-slate-500 font-semibold mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported models */}
        <section id="models" className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-2 text-xs font-bold uppercase tracking-widest text-green-700">Supported Models</div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">John Deere Models We Source Parts For</h2>
            <p className="text-slate-500 mb-10 max-w-2xl">
              The 5E and 5310 series dominate Malaysian paddy fields; the 6J is common on larger estates. We also support older models where dealer parts supply has thinned.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {MODELS.map(({ model, engine, note }) => (
                <div key={model} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                  <div className="font-black text-lg text-slate-900 mb-1">{model}</div>
                  <div className="text-xs font-bold text-green-700 uppercase tracking-wide mb-2">{engine}</div>
                  <p className="text-slate-500 text-sm">{note}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate-400 italic">Don't see your model? Contact us — we assess availability for all John Deere agricultural equipment.</p>
          </div>
        </section>

        {/* Parts catalogue */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-2 text-xs font-bold uppercase tracking-widest text-green-700">Parts Catalogue</div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">What We Source</h2>
            <p className="text-slate-500 mb-10 max-w-2xl">
              From overhaul kits for the PowerTech and 3029 engines to hydraulic seals and electrical components — we cover the full maintenance and repair spectrum.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PARTS.map(({ category, items }) => (
                <div key={category} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <div className="flex items-center gap-2 mb-4">
                    <Wrench className="w-4 h-4 text-green-700" />
                    <h3 className="font-bold text-slate-900">{category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {items.map(item => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* John Deere engine note */}
        <section className="py-12 bg-yellow-50 border-y border-yellow-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Know Your JD Engine Code Before You Order</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    John Deere uses several engine families across its tractor range: the <strong>3029D/T</strong> (3.0L 3-cylinder) in older 5310 and 5403 models, and the <strong>PowerTech 3.4L</strong> (3029DF/TF) in the 5055E and 5075E. These share some components but injectors, overhaul kits, and cylinder heads are model-specific. Quoting the engine serial number — found on the block near the alternator — ensures you get the right part.
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    The 6J series uses a <strong>6.8L PowerTech 6-cylinder</strong> (6068) engine. Parts for this engine are different again and should not be cross-ordered with the 4-cylinder units.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* East Malaysia */}
        <section className="py-16 bg-green-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-2 text-xs font-bold uppercase tracking-widest text-green-300">Sabah &amp; Sarawak</div>
            <h2 className="text-3xl font-extrabold mb-4">We Cover East Malaysia Too</h2>
            <p className="text-green-100 mb-8 max-w-2xl">
              John Deere equipment is common on Sabah and Sarawak oil palm and paddy estates. We ship to Kota Kinabalu, Sandakan, Tawau, Kuching, Miri, and Sibu — same sourcing network, same response time.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
              {['Kota Kinabalu', 'Sandakan', 'Tawau', 'Kuching', 'Miri', 'Sibu'].map(city => (
                <div key={city} className="flex items-center gap-2 bg-green-800 rounded-xl px-3 py-2.5">
                  <MapPin className="w-3 h-3 text-green-300 flex-shrink-0" />
                  <span className="text-sm font-semibold text-green-100">{city}</span>
                </div>
              ))}
            </div>
            <WhatsappCTA
              label="jd-east-malaysia"
              message="Hi, I need John Deere tractor parts — I'm based in East Malaysia (Sabah/Sarawak). Model: ___ Part needed: ___"
              className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-green-900 px-8 py-4 rounded-xl font-black text-base transition-all"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp for East Malaysia Enquiries
            </WhatsappCTA>
          </div>
        </section>

        {/* Why SourceSage */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-2 text-xs font-bold uppercase tracking-widest text-green-700">Why Us</div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-10">Why Malaysian Operators Choose SourceSage</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <ShieldCheck className="w-6 h-6 text-green-600" />,
                  title: 'Beyond the Dealer Network',
                  body: 'When the authorised dealer says "discontinued" or quotes a 6-week lead time, we go to Japan\'s secondary market, OEM-compatible factories in Taiwan, and local dismantlers to find what you need.',
                },
                {
                  icon: <Wrench className="w-6 h-6 text-green-600" />,
                  title: 'Engine-Code Expertise',
                  body: 'We know the difference between a 3029D and 3029TF, and why it matters for your injector order. Correct identification prevents costly return shipments and downtime.',
                },
                {
                  icon: <MessageCircle className="w-6 h-6 text-green-600" />,
                  title: 'Fast WhatsApp Response',
                  body: 'Send us a part number, photo, or just describe the failure. We respond with availability and pricing — usually within 24 hours, often the same day.',
                },
              ].map(({ icon, title, body }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">{icon}</div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-2 text-xs font-bold uppercase tracking-widest text-green-700">FAQ</div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-10">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {FAQS.map(({ q, a }) => (
                <div key={q} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-3">{q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-green-900 to-green-800 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Need a John Deere Part?</h2>
            <p className="text-green-100 text-lg mb-8">
              Tell us the model and what you need. We'll come back with availability and pricing — usually within 24 hours.
            </p>
            <WhatsappCTA
              label="jd-final-cta"
              message="Hi, I need help sourcing a John Deere tractor part. Model: ___ Serial: ___ Part needed: ___"
              className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-green-900 px-10 py-5 rounded-2xl font-black text-xl transition-all"
            >
              <MessageCircle className="w-7 h-7" /> WhatsApp Us Now
            </WhatsappCTA>
            <p className="text-green-300 text-sm mt-6">Or email: info@sourcesage.ai</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-12 text-slate-500 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <span className="font-black text-xl tracking-tighter text-slate-900">SourceSage</span>
              <span className="font-black text-xl text-blue-600">.ai</span>
              <p className="text-sm text-slate-500 mt-1">Malaysia-Based Parts Sourcing Specialist</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Parts Pages</p>
              <ul className="space-y-2 text-sm font-semibold">
                <li><Link href="/kubota-tractor-parts-malaysia" className="hover:text-blue-600 transition-colors">Kubota Tractor Parts</Link></li>
                <li><Link href="/yanmar-marine-parts-malaysia" className="hover:text-blue-600 transition-colors">Yanmar Marine Parts</Link></li>
                <li><Link href="/massey-ferguson-parts-malaysia" className="hover:text-blue-600 transition-colors">Massey Ferguson Parts</Link></li>
                <li><Link href="/zoomlion-parts-malaysia" className="hover:text-blue-600 transition-colors">Zoomlion Parts</Link></li>
                <li><Link href="/john-deere-parts-malaysia" className="hover:text-blue-600 transition-colors">John Deere Parts</Link></li>
              </ul>
            </div>
            <div className="flex flex-col gap-3 text-sm font-semibold">
              <a href="mailto:info@sourcesage.ai" className="hover:text-blue-600 flex items-center gap-2 transition-colors">
                <Mail className="w-4 h-4" /> info@sourcesage.ai
              </a>
              <WhatsappCTA label="jd-footer" message="Hi, I need help sourcing a spare part. Brand: ___ Model: ___ Part needed: ___" className="hover:text-green-600 flex items-center gap-2 transition-colors">
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
  )
}
