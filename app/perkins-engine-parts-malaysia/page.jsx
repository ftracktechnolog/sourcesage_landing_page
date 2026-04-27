import Link from 'next/link'
import { MessageCircle, Mail, CheckCircle, Wrench, AlertTriangle, MapPin, ChevronRight, ShieldCheck } from 'lucide-react'
import WhatsappCTA from '../../components/WhatsappCTA'

export const metadata = {
  title: 'Perkins Engine Parts Malaysia | SourceSage',
  description: 'Perkins diesel engine parts in Malaysia — A3.152, A4.248, AD4.203, 1004 series. For Massey Ferguson tractors, JCB equipment and other Perkins-powered machines. Fast sourcing nationwide.',
  alternates: { canonical: '/perkins-engine-parts-malaysia/', languages: { 'en': 'https://sourcesage.ai/perkins-engine-parts-malaysia/', 'x-default': 'https://sourcesage.ai/perkins-engine-parts-malaysia/' } },
  openGraph: {
    title: 'Perkins Engine Parts Malaysia | SourceSage',
    description: 'Perkins diesel engine parts in Malaysia — A4.248, AD4.203, 1004 series for Massey Ferguson, JCB and more. Fast sourcing nationwide.',
    url: 'https://sourcesage.ai/perkins-engine-parts-malaysia/',
    siteName: 'SourceSage.ai',
    type: 'website',
    images: [{ url: 'https://sourcesage.ai/images/og-home.png', width: 1200, height: 630, alt: 'Perkins Engine Parts Malaysia — SourceSage' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Perkins Engine Parts Malaysia | SourceSage',
    description: 'Perkins diesel engine parts in Malaysia — A4.248, AD4.203, 1004 series for Massey Ferguson, JCB and more.',
    images: ['https://sourcesage.ai/images/og-home.png'],
  },
}

const ENGINES = [
  { model: 'Perkins A3.152 / AD3.152', displacement: '2.5L 3-cyl', note: 'Classic MF135, MF148, MF165 — widely used in older Malaysian estates' },
  { model: 'Perkins A4.248', displacement: '4.1L 4-cyl', note: 'MF240, MF350, MF375 — the most common Perkins in Malaysia today' },
  { model: 'Perkins AD4.203', displacement: '3.3L 4-cyl Turbo', note: 'MF385, MF390 — plantation and heavier-duty applications' },
  { model: 'Perkins 1004-4 / 1004-4T', displacement: '4.4L 4-cyl', note: 'MF6100 series, JCB 3CX/4CX, various construction equipment' },
  { model: 'Perkins 1006-6', displacement: '6.6L 6-cyl', note: 'Larger MF and Landini tractors, industrial applications' },
  { model: 'Perkins 403 / 404 Series', displacement: '1.5–2.2L 3/4-cyl', note: 'Compact equipment: JCB mini, Caterpillar skid steers, generators' },
]

const MACHINES = [
  { brand: 'Massey Ferguson', models: 'MF135, MF165, MF240, MF350, MF375, MF385, MF390, MF6110–6160' },
  { brand: 'JCB', models: '3CX, 4CX backhoe loaders; 525, 535 telehandlers; 8025–8085 mini excavators' },
  { brand: 'Landini', models: 'Globus, Mistral, Powerfarm series — shares A4.248 and 1004 engines' },
  { brand: 'Caterpillar', models: 'Selected skid steers and compact track loaders (403/404 series)' },
  { brand: 'Manitou', models: 'MT523, MT625 telehandlers (1004 series)' },
  { brand: 'Industrial / Generators', models: 'FG Wilson, Olympian, Newage generators — 403 through 1006 series' },
]

const PARTS = [
  {
    category: 'Engine Rebuild',
    items: ['Full overhaul / inframe kit', 'Cylinder head (bare or assembled)', 'Head gasket & full gasket set', 'Piston & liner kit', 'Main & big-end bearing set'],
  },
  {
    category: 'Fuel System',
    items: ['Injector nozzles (CAV / Lucas / Delphi)', 'Injection pump (CAV DPA / DPS)', 'Lift pump & fuel filter', 'Fuel lines & banjo fittings', 'Throttle & governor linkage'],
  },
  {
    category: 'Cooling System',
    items: ['Water pump complete', 'Thermostat & housing', 'Radiator hoses upper & lower', 'Fan belt & tensioner', 'Radiator core (re-core service)'],
  },
  {
    category: 'Lubrication',
    items: ['Oil pump complete', 'Oil pressure relief valve', 'Oil filter (spin-on type)', 'Sump gasket & rocker cover gasket', 'Crankshaft front & rear oil seals'],
  },
  {
    category: 'Valve Train',
    items: ['Valves inlet & exhaust', 'Valve springs & collets', 'Camshaft & followers', 'Rocker arm & shaft assembly', 'Timing gears & cover seals'],
  },
  {
    category: 'Electrical & Starting',
    items: ['Starter motor (12V / 24V)', 'Alternator & regulator', 'Glow plugs (indirect injection models)', 'Temp & oil pressure senders', 'Stop solenoid (CAV pump)'],
  },
]

const FAQS = [
  {
    q: 'Which Perkins engine is in my Massey Ferguson tractor?',
    a: 'The most common: MF240/350/375 use the A4.248 (naturally aspirated 4-cylinder); MF385/390 use the AD4.203 (turbocharged). Older MF135/165 models use the A3.152/AD3.152 (3-cylinder). Confirm by reading the engine serial plate on the block — it will show the engine family code.',
  },
  {
    q: 'Are Perkins parts for older models (A4.248, AD3.152) still available in Malaysia?',
    a: 'Yes, though availability through MF dealers thins out for machines over 15 years old. The A4.248 has an enormous global install base — parts are available through specialist suppliers via OEM-compatible manufacturers and the Perkins aftermarket network, often at lower cost than dealer pricing.',
  },
  {
    q: 'What is the difference between a CAV DPA and DPS injection pump?',
    a: 'Both are rotary distributor pumps made by CAV (now Delphi). The DPA is the older design found on A3.152 and A4.248 engines; the DPS is a later, more compact design on the 1004 series. They are not interchangeable. Always identify by the pump serial number stamped on the pump body.',
  },
  {
    q: 'Can you source Perkins parts for non-MF machines (JCB, generators)?',
    a: 'Yes. Perkins engine parts are engine-specific, not machine-specific. A 1004-4 overhaul kit for a JCB 3CX is the same as for an MF6110. We source by engine model and serial number regardless of the host machine.',
  },
  {
    q: 'How do I identify my Perkins engine model?',
    a: 'The engine serial plate is stamped on the block, usually on the left side near the oil filter. It shows the engine family (e.g. A4.248), the build list number, and the serial number. The build list number is critical for identifying the exact specification — particularly for fuel systems and emission variants.',
  },
]

const jsonLd = {
  service: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Perkins Engine Parts Sourcing Malaysia',
    serviceType: 'Diesel Engine Parts Supply',
    description: 'Sourcing Perkins diesel engine parts across Malaysia — A3.152, A4.248, AD4.203, 1004 and 403 series for Massey Ferguson, JCB and other Perkins-powered equipment.',
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
      { '@type': 'ListItem', position: 2, name: 'Perkins Engine Parts Malaysia', item: 'https://sourcesage.ai/perkins-engine-parts-malaysia' },
    ],
  },
}

export default function PerkinsPartsPage() {
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
            label="perkins-navbar"
            message="Hi, I need help sourcing a Perkins engine part. Engine model: ___ Machine: ___ Part needed: ___"
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
          <span className="text-slate-600">Perkins Engine Parts Malaysia</span>
        </nav>
      </div>

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-amber-900 via-amber-800 to-orange-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-block bg-amber-400 text-amber-900 text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
                Perkins Engine Parts Specialist — Malaysia
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
                Perkins Diesel Engine Parts<br />in Malaysia
              </h1>
              <p className="text-lg text-amber-100 mb-8 leading-relaxed">
                Sourcing Perkins engine parts across Malaysia — A3.152, A4.248, AD4.203, 1004 and 403 series. For Massey Ferguson tractors, JCB equipment, generators, and all Perkins-powered machines. Genuine and OEM-compatible. Fast response.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsappCTA
                  label="perkins-hero-primary"
                  message="Hi, I need help sourcing a Perkins engine part. Engine model: ___ Machine: ___ Part needed: ___"
                  className="bg-amber-400 hover:bg-amber-300 text-amber-900 px-8 py-4 rounded-xl font-black text-lg transition-all flex items-center gap-3 justify-center"
                >
                  <MessageCircle className="w-6 h-6" /> Request a Part
                </WhatsappCTA>
                <a
                  href="#engines"
                  className="border-2 border-amber-300 text-amber-100 hover:bg-amber-800 px-8 py-4 rounded-xl font-bold text-lg transition-all text-center"
                >
                  View Engine Series
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
                { label: 'Engine series', value: 'A3 · A4 · AD4 · 1004 · 403' },
                { label: 'Coverage', value: 'Peninsular + East MY' },
                { label: 'Source', value: 'Genuine & OEM-compat.' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <div className="text-xl font-black text-amber-700">{value}</div>
                  <div className="text-xs text-slate-500 font-semibold mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Engine series */}
        <section id="engines" className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-2 text-xs font-bold uppercase tracking-widest text-amber-700">Engine Series</div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Perkins Engines We Source Parts For</h2>
            <p className="text-slate-500 mb-10 max-w-2xl">
              From the classic A3.152 in vintage Massey Ferguson tractors to the modern 1004 series in JCB and construction equipment — we cover the full Perkins range common in Malaysia.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {ENGINES.map(({ model, displacement, note }) => (
                <div key={model} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                  <div className="font-black text-lg text-slate-900 mb-1">{model}</div>
                  <div className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-2">{displacement}</div>
                  <p className="text-slate-500 text-sm">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Machines using Perkins */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-2 text-xs font-bold uppercase tracking-widest text-amber-700">Host Machines</div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Perkins Powers More Than Massey Ferguson</h2>
            <p className="text-slate-500 mb-10 max-w-2xl">
              Perkins is one of the world's largest OEM diesel engine suppliers. Once you know your engine model and serial number, we can source parts regardless of which machine it's fitted in.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {MACHINES.map(({ brand, models }) => (
                <div key={brand} className="bg-slate-50 rounded-2xl border border-slate-100 p-6">
                  <div className="font-bold text-slate-900 mb-2">{brand}</div>
                  <p className="text-slate-500 text-sm leading-relaxed">{models}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Parts catalogue */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-2 text-xs font-bold uppercase tracking-widest text-amber-700">Parts Catalogue</div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">What We Source</h2>
            <p className="text-slate-500 mb-10 max-w-2xl">
              Full engine rebuild through to individual consumables — injector nozzles, CAV pump kits, cooling components and electrical parts across all Perkins series.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PARTS.map(({ category, items }) => (
                <div key={category} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <Wrench className="w-4 h-4 text-amber-700" />
                    <h3 className="font-bold text-slate-900">{category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {items.map(item => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CAV injection note */}
        <section className="py-12 bg-amber-50 border-y border-amber-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">CAV / Lucas / Delphi — Same Pump, Different Names</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    The rotary injection pump on most A-series and 1004 Perkins engines was made by CAV — which became Lucas CAV, then Delphi. The pump is the same unit across all three brand names; only the service documentation changed. When ordering pump repair kits, head and rotor sets, or solenoids, any of these brand references will find the correct part.
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Always identify the pump by its own serial number (stamped on the pump body) in addition to the engine model — the DPA and DPS designs have different internals and are not interchangeable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* East Malaysia */}
        <section className="py-16 bg-amber-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-2 text-xs font-bold uppercase tracking-widest text-amber-300">Sabah &amp; Sarawak</div>
            <h2 className="text-3xl font-extrabold mb-4">East Malaysia Coverage</h2>
            <p className="text-amber-100 mb-8 max-w-2xl">
              Perkins-powered Massey Ferguson tractors and JCB equipment are common on Sabah and Sarawak oil palm estates. We ship to all major East Malaysian cities — same sourcing network, same response time.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
              {['Kota Kinabalu', 'Sandakan', 'Tawau', 'Kuching', 'Miri', 'Sibu'].map(city => (
                <div key={city} className="flex items-center gap-2 bg-amber-800 rounded-xl px-3 py-2.5">
                  <MapPin className="w-3 h-3 text-amber-300 flex-shrink-0" />
                  <span className="text-sm font-semibold text-amber-100">{city}</span>
                </div>
              ))}
            </div>
            <WhatsappCTA
              label="perkins-east-malaysia"
              message="Hi, I need Perkins engine parts — I'm based in East Malaysia (Sabah/Sarawak). Engine: ___ Machine: ___ Part needed: ___"
              className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-amber-900 px-8 py-4 rounded-xl font-black text-base transition-all"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp for East Malaysia Enquiries
            </WhatsappCTA>
          </div>
        </section>

        {/* Why SourceSage */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-2 text-xs font-bold uppercase tracking-widest text-amber-700">Why Us</div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-10">Why Operators Choose SourceSage for Perkins Parts</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <ShieldCheck className="w-6 h-6 text-amber-600" />,
                  title: 'Perkins Catalogue Knowledge',
                  body: 'The A4.248 and 1004 share some part numbers but differ in critical dimensions. We cross-reference build list numbers — not just engine family codes — to ensure you get the part that fits your specific engine variant.',
                },
                {
                  icon: <Wrench className="w-6 h-6 text-amber-600" />,
                  title: 'CAV / Delphi Injection Expertise',
                  body: 'Injection pump repair kits, head and rotor sets, and solenoids are our most common Perkins enquiry. We stock or can rapidly source components for DPA and DPS pumps across all common A-series and 1004-series applications.',
                },
                {
                  icon: <MessageCircle className="w-6 h-6 text-amber-600" />,
                  title: 'Machine-Agnostic Sourcing',
                  body: 'Whether your Perkins engine is in an MF tractor, a JCB backhoe, a generator set, or a Manitou handler — the engine is the engine. We source by engine serial number, not by machine brand.',
                },
              ].map(({ icon, title, body }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">{icon}</div>
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
            <div className="mb-2 text-xs font-bold uppercase tracking-widest text-amber-700">FAQ</div>
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

        {/* Related page */}
        <section className="py-10 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/massey-ferguson-parts-malaysia"
              className="flex items-center justify-between bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:bg-slate-100 transition-colors group"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-1">Related Page</p>
                <p className="text-slate-800 font-bold text-lg group-hover:text-amber-700 transition-colors">
                  View Massey Ferguson Tractor Parts →
                </p>
              </div>
              <span className="bg-amber-600 group-hover:bg-amber-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all whitespace-nowrap ml-4">
                View parts
              </span>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-amber-900 to-orange-900 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Need a Perkins Engine Part?</h2>
            <p className="text-amber-100 text-lg mb-8">
              Tell us the engine model, serial number, and what you need. We'll come back with availability and pricing — usually within 24 hours.
            </p>
            <WhatsappCTA
              label="perkins-final-cta"
              message="Hi, I need help sourcing a Perkins engine part. Engine model: ___ Serial: ___ Machine: ___ Part needed: ___"
              className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-amber-900 px-10 py-5 rounded-2xl font-black text-xl transition-all"
            >
              <MessageCircle className="w-7 h-7" /> WhatsApp Us Now
            </WhatsappCTA>
            <p className="text-amber-300 text-sm mt-6">Or email: info@sourcesage.ai</p>
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
                <li><Link href="/perkins-engine-parts-malaysia" className="hover:text-blue-600 transition-colors">Perkins Engine Parts</Link></li>
              </ul>
            </div>
            <div className="flex flex-col gap-3 text-sm font-semibold">
              <a href="mailto:info@sourcesage.ai" className="hover:text-blue-600 flex items-center gap-2 transition-colors">
                <Mail className="w-4 h-4" /> info@sourcesage.ai
              </a>
              <WhatsappCTA label="perkins-footer" message="Hi, I need help sourcing a spare part. Brand: ___ Model: ___ Part needed: ___" className="hover:text-green-600 flex items-center gap-2 transition-colors">
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
  )
}
