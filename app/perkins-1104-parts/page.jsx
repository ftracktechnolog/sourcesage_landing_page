import Link from 'next/link'
import { MessageCircle, Mail, CheckCircle, Wrench, AlertTriangle, MapPin, ChevronRight, ShieldCheck } from 'lucide-react'
import WhatsappCTA from '../../components/WhatsappCTA'
import LangSwitcher from '../../components/LangSwitcher'

export const metadata = {
  title: 'Perkins 1104 Engine Parts Malaysia — 1104C-44, 1104A-44 | SourceSage',
  description: 'Perkins 1104 engine parts in Malaysia — cylinder heads, overhaul kits, fuel systems, cooling parts for 1104C-44, 1104A-44 & 1104D variants. Used in JCB backhoes, MF tractors & generators.',
  alternates: { canonical: '/perkins-1104-parts/', languages: { 'en': 'https://sourcesage.ai/perkins-1104-parts/', 'x-default': 'https://sourcesage.ai/perkins-1104-parts/' } },
  openGraph: {
    title: 'Perkins 1104 Engine Parts Malaysia — 1104C-44, 1104A-44 | SourceSage',
    description: 'Perkins 1104 engine parts in Malaysia — cylinder heads, overhaul kits, fuel systems, cooling parts for 1104C-44, 1104A-44 & 1104D variants. Used in JCB backhoes, MF tractors & generators.',
    url: 'https://sourcesage.ai/perkins-1104-parts/',
    siteName: 'SourceSage.ai',
    type: 'website',
    locale: 'en',
    images: [{ url: 'https://sourcesage.ai/images/og-home.png', width: 1200, height: 630, alt: 'Perkins 1104 Engine Parts Malaysia — SourceSage' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Perkins 1104 Engine Parts Malaysia — 1104C-44, 1104A-44 | SourceSage',
    description: 'Perkins 1104 engine parts in Malaysia — cylinder heads, overhaul kits, fuel systems, cooling parts for 1104C-44, 1104A-44 & 1104D variants. Used in JCB backhoes, MF tractors & generators.',
    images: ['https://sourcesage.ai/images/og-home.png'],
  },
}

const APPLICATIONS = [
  {
    category: 'Agricultural Tractors',
    models: 'Massey Ferguson MF240, MF350, MF375, MF385, MF390',
    note: '1104 series replaced the A4.248 in MF tractors — most common Perkins-powered tractors in Malaysia',
  },
  {
    category: 'Construction Equipment',
    models: 'JCB 3CX, 4CX backhoe loaders; selected Caterpillar skid steers',
    note: 'High-hour rental fleet machines with regular rebuild cycles — strong parts demand',
  },
  {
    category: 'Generators',
    models: 'FG Wilson, Olympian, Newage gen sets — 1104-powered',
    note: 'Industrial standby and prime power generators — extended runtime drives overhaul intervals',
  },
  {
    category: 'Marine',
    models: 'Perkins Sabre M92B, M130C; auxiliary gen sets on fishing vessels',
    note: 'Marine variants require corrosion-resistant components and specific cooling system parts',
  },
]

const VARIANTS = [
  { code: '1104C-44', aspiration: 'Naturally Aspirated', power: '60–85 HP', common_in: 'MF240, MF350, generators' },
  { code: '1104C-44T', aspiration: 'Turbocharged', power: '80–110 HP', common_in: 'MF375, MF385, JCB 3CX' },
  { code: '1104C-44TA', aspiration: 'Turbo Aftercooled', power: '100–130 HP', common_in: 'MF390, larger gen sets' },
  { code: '1104A-44', aspiration: 'Naturally Aspirated (Stage II)', power: '65–90 HP', common_in: 'Industrial pumps, welders' },
  { code: '1104D-44', aspiration: 'Electronic (Stage III)', power: '70–120 HP', common_in: 'Later MF models, Tier 3 applications' },
]

const PARTS_BY_SYSTEM = [
  {
    system: 'Engine',
    items: ['Cylinder head (bare or assembled)', 'MLS head gasket & full gasket set', 'Overhaul / inframe kit (pistons, liners, bearings)', 'Head bolts (torque-to-yield)', 'Valve stem seals & keepers', 'Camshaft & followers'],
  },
  {
    system: 'Fuel System',
    items: ['Injector nozzles (set of 4)', 'Injection pump & calibration', 'Lift pump (mechanical)', 'Injector sleeves & O-rings', 'Fuel filter head & elements', 'Governor weights & springs'],
  },
  {
    system: 'Cooling System',
    items: ['Water pump (complete)', 'Thermostat & housing', 'Radiator hoses (upper/lower)', 'Fan & viscous hub', 'Coolant expansion tank', 'Intercooler (TA variants)'],
  },
  {
    system: 'Electrical & Starting',
    items: ['Starter motor (12V, 3.0 kW)', 'Alternator (12V, 65A)', 'Glow plugs & relay', 'Engine harness & senders', 'ECU & sensors (1104D)'],
  },
  {
    system: 'Lubrication',
    items: ['Oil pump (complete)', 'Oil cooler assembly', 'Oil filter head', 'Crankshaft seal kit', 'Breather & separator'],
  },
  {
    system: 'Air & Exhaust',
    items: ['Air filter & housing', 'Turbocharger (44T / 44TA)', 'Exhaust manifold gasket', 'Exhaust manifold (cast iron)', 'EGR valve (1104D)'],
  },
]

const PART_CROSS_REFERENCE = [
  { description: 'Cylinder head (bare) — 1104C-44', perkins_pn: 'U5MK0127 / U5MK0128', notes: 'Check build list prefix RE/RG/RH' },
  { description: 'Cylinder head (bare) — 1104C-44T', perkins_pn: 'U5MK0129 / U5MK0130', notes: 'Valve materials differ from NA variant' },
  { description: 'MLS head gasket', perkins_pn: '3245K043 / 3245K045', notes: 'Always replace — never reuse' },
  { description: 'Full gasket set (top end)', perkins_pn: '3245J058', notes: 'Includes valve stem seals' },
  { description: 'Full gasket set (engine)', perkins_pn: '3245J059', notes: 'Crank seals included' },
  { description: 'Injector nozzle (single)', perkins_pn: '2648A019 / 2648A020', notes: 'Set of 4 required' },
  { description: 'Injection pump — 1104C-44', perkins_pn: '2644B001 / 2644B002', notes: 'Rotary DPA type' },
  { description: 'Water pump — 1104C', perkins_pn: '4212A001', notes: 'Includes gasket' },
  { description: 'Thermostat (82°C)', perkins_pn: '4215A003', notes: 'Also fits 1000 Series' },
  { description: 'Turbocharger — 1104C-44T', perkins_pn: '2674A069', notes: 'Garrett T25 core' },
]

const FAQS = [
  {
    q: 'What is the difference between Perkins 1104C-44 and 1104A-44?',
    a: 'The 1104C-44 is the earlier mechanical injection variant (pre-2004), while the 1104A-44 introduced Stage II emissions compliance with minor internal changes. The 1104D-44 is the electronic (ECU-controlled) Stage III variant. Cylinder heads and many core engine parts differ between variants — always check your engine\'s build list number before ordering major components.',
  },
  {
    q: 'Which machines use the Perkins 1104 engine in Malaysia?',
    a: 'The most common applications are Massey Ferguson tractors (MF240, MF350, MF375, MF385, MF390), JCB 3CX and 4CX backhoe loaders, FG Wilson and Olympian generator sets, and various industrial pumps and welders. The 1104 also appears in Perkins Sabre marine engines and auxiliary gen sets on fishing vessels.',
  },
  {
    q: 'How do I find the correct Perkins part number for my 1104?',
    a: 'The engine serial number plate is riveted to the cylinder block on the injection pump side. The build list number prefix tells you the variant: RE/RG/RH for industrial 1104C-44, NJ/NK for agricultural (MF) 1104C-44T, PJ/PK for turbo-aftercooled. Quote your full engine serial number when ordering — cylinder heads are not interchangeable between variants.',
  },
  {
    q: 'Can I get Perkins 1104 overhaul kits in Malaysia?',
    a: 'Yes. Basic service parts (filters, belts, gaskets) are available from Perkins/Sime Darby Industrial or regional stockists. Overhaul kits are less commonly stocked locally — expect 3–7 days for aftermarket kits from Singapore or Thailand, and 2–4 weeks for OEM from the UK. We confirm availability and ETA within 24–48 hours.',
  },
  {
    q: 'How much does a Perkins 1104 cylinder head cost in Malaysia?',
    a: 'New OEM from Perkins ranges from RM 4,000–7,000+. Quality aftermarket (Indian/Turkish foundries) costs RM 1,800–3,500. Reconditioned heads, if confirmed crack-free and properly tested, run RM 1,200–2,000. Labour for head replacement is typically RM 800–1,500 depending on the workshop.',
  },
]

export default function Perkins1104Page() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'inLanguage': 'en',
    name: 'Perkins 1104 Engine Parts Sourcing Malaysia',
    provider: {
      '@type': 'LocalBusiness',
      name: 'SourceSage.ai',
      url: 'https://sourcesage.ai',
      areaServed: { '@type': 'Country', name: 'Malaysia' },
    },
    description: 'Sourcing of Perkins 1104 engine spare parts across Malaysia — 1104C-44, 1104A-44 and 1104D variants for agricultural, construction, generator and marine applications.',
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
      { '@type': 'ListItem', position: 2, name: 'Perkins 1104 Engine Parts Malaysia', item: 'https://sourcesage.ai/perkins-1104-parts' },
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
        label="perkins1104-sticky"
        message="Hi, I need a Perkins 1104 cylinder head or related parts. Engine model: ___ Machine: ___"
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
            <LangSwitcher currentLang="en" />
            <WhatsappCTA
              label="perkins1104-navbar"
              message="Hi, I need a Perkins 1104 cylinder head or related parts. Engine model: ___ Machine: ___"
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
            <span className="text-slate-700 font-medium">Perkins 1104 Engine Parts Malaysia</span>
          </div>
        </div>

        {/* Hero */}
        <header className="bg-white pt-16 pb-20 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 text-orange-800 text-xs font-bold uppercase tracking-widest mb-6">
                <MapPin className="w-4 h-4 text-orange-600" /> Perkins' Most Versatile 4-Cylinder Series
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                Perkins 1104 Engine Parts Malaysia<br />
                <span className="text-blue-600">1104C-44. 1104A-44. 1104D. All Variants Supported.</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Cylinder heads, overhaul kits, fuel injection, cooling and electrical parts for the Perkins 1104 Series — the 4.4L four-cylinder diesel powering Massey Ferguson tractors, JCB backhoe loaders, industrial generators and marine applications across Malaysia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/perkins-engine-parts-malaysia"
                  className="px-8 py-4 text-lg font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all text-center flex items-center justify-center gap-2"
                >
                  All Perkins Parts <ChevronRight className="w-5 h-5" />
                </Link>
                <WhatsappCTA
                  label="perkins1104-hero"
                  message="Hi, I need a Perkins 1104 engine part. Engine model: [X] Machine: [X] Part needed: [X]"
                  className="px-8 py-4 text-lg font-bold rounded-xl text-white bg-green-500 hover:bg-green-600 transition-all text-center flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" /> WhatsApp Now
                </WhatsappCTA>
              </div>
            </div>
          </div>
        </header>

        {/* Applications */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">Applications</h2>
              <h3 className="text-3xl font-bold text-slate-900">Where You'll Find the Perkins 1104</h3>
              <p className="mt-4 text-slate-600 max-w-2xl mx-auto">The 1104 Series powers a wide range of equipment across Malaysia — from the ubiquitous MF240 tractor to JCB backhoes, industrial generators, and marine installations.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {APPLICATIONS.map(a => (
                <div key={a.category} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all">
                  <h4 className="text-lg font-bold text-slate-900 mb-1">{a.category}</h4>
                  <p className="text-xs font-semibold text-blue-600 mb-3">{a.models}</p>
                  <p className="text-sm text-slate-500">{a.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Variant reference */}
        <section className="py-16 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">Variant Reference</h2>
              <h3 className="text-2xl font-bold text-slate-900">1104 Series — Variant Comparison</h3>
              <p className="mt-3 text-slate-600 max-w-xl mx-auto">Know your variant code to order the correct parts. Engine serial number is stamped on the block near the injection pump.</p>
            </div>
            <div className="overflow-x-auto max-w-5xl mx-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left py-3 px-4 font-bold text-slate-800">Variant</th>
                    <th className="text-left py-3 px-4 font-bold text-slate-800">Aspiration</th>
                    <th className="text-left py-3 px-4 font-bold text-slate-800">Power Range</th>
                    <th className="text-left py-3 px-4 font-bold text-slate-800">Common Applications</th>
                  </tr>
                </thead>
                <tbody>
                  {VARIANTS.map(v => (
                    <tr key={v.code} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-bold text-blue-700">{v.code}</td>
                      <td className="py-3 px-4 text-slate-600">{v.aspiration}</td>
                      <td className="py-3 px-4 text-slate-600">{v.power}</td>
                      <td className="py-3 px-4 text-slate-600">{v.common_in}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Parts by system */}
        <section className="py-20 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">Parts by System</h2>
              <h3 className="text-3xl font-bold text-slate-900">What We Source for the 1104 Series</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PARTS_BY_SYSTEM.map(sys => (
                <div key={sys.system} className="bg-white rounded-2xl p-6 border border-slate-200">
                  <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wide mb-4 flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-blue-500" /> {sys.system}
                  </h4>
                  <ul className="space-y-2">
                    {sys.items.map(item => (
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

        {/* Part number cross-reference */}
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">Part Number Reference</h2>
              <h3 className="text-2xl font-bold text-slate-900">Perkins 1104 Cross-Reference</h3>
              <p className="mt-3 text-slate-600 max-w-xl mx-auto">Common Perkins part numbers for the 1104 Series. Share your engine serial number for confirmation before ordering critical components.</p>
            </div>
            <div className="overflow-x-auto max-w-5xl mx-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left py-3 px-4 font-bold text-slate-800">Part Description</th>
                    <th className="text-left py-3 px-4 font-bold text-slate-800">Perkins Part No.</th>
                    <th className="text-left py-3 px-4 font-bold text-slate-800">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {PART_CROSS_REFERENCE.map(p => (
                    <tr key={p.perkins_pn} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 text-slate-800">{p.description}</td>
                      <td className="py-3 px-4 font-mono text-blue-700 font-bold">{p.perkins_pn}</td>
                      <td className="py-3 px-4 text-slate-600">{p.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Why SourceSage */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Why Workshops Choose SourceSage for Perkins 1104 Parts</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
                  title: 'Variant-Level Precision',
                  body: 'The 1104C, 1104A, and 1104D have different cylinder heads, injection systems, and electrical architectures. We cross-reference your build list number against our database to deliver the correct parts the first time.',
                },
                {
                  icon: <AlertTriangle className="w-6 h-6 text-amber-400" />,
                  title: 'Cylinder Head Expertise',
                  body: 'The 1104 cylinder head is its most failure-prone component and the most common sourcing challenge. We help you choose between OEM, quality aftermarket, and reconditioning — including crack-testing referrals in Klang Valley and Johor.',
                },
                {
                  icon: <MapPin className="w-6 h-6 text-green-400" />,
                  title: 'Multi-Channel Sourcing',
                  body: 'Perkins OEM parts go through Sime Darby Industrial (2–4 weeks from UK). We also access aftermarket stock in Singapore and Thailand for 3–7 day delivery. Machine-down cases get priority air freight.',
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
            <h2 className="text-xl font-bold text-slate-900 mb-6">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: 'Perkins Engine Parts — All Models', href: '/perkins-engine-parts-malaysia' },
                { title: 'Perkins 1104 Cylinder Head Guide (Blog)', href: '/blog/perkins-1104-cylinder-head-malaysia' },
                { title: 'How to Identify Your Perkins Engine', href: '/blog/how-to-identify-your-perkins-tractor-model' },
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
            <h2 className="text-3xl font-bold mb-4">Need a Perkins 1104 Part Now?</h2>
            <p className="text-blue-100 text-lg mb-8">Tell us your engine variant, machine model, and what you need. We'll confirm compatibility and pricing — usually within 24 hours.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#request" className="px-8 py-4 text-lg font-bold rounded-xl bg-white text-blue-700 hover:bg-blue-50 transition-all text-center">
                Submit a Part Request
              </Link>
              <WhatsappCTA
                label="perkins1104-final-cta"
                message="Hi, I need a Perkins 1104 engine part urgently. Engine model: [X] Machine: [X] Part needed: [X]"
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
                  label="perkins1104-footer"
                  message="Hi, I need a Perkins 1104 engine part. Model: [X] Part needed: [X]"
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
