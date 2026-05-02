import Link from 'next/link'
import { MessageCircle, Mail, CheckCircle, Wrench, AlertTriangle, MapPin, ChevronRight, ShieldCheck } from 'lucide-react'
import WhatsappCTA from '../../components/WhatsappCTA'
import LangSwitcher from '../../components/LangSwitcher'

export const metadata = {
  title: 'Kubota V1505 Engine Parts Malaysia — OEM & Aftermarket | SourceSage',
  description: 'Kubota V1505 engine parts in Malaysia — overhaul kits, cylinder heads, injectors, water pumps for KX41/KX71 mini-excavators, generators & compact tractors. 24hr availability check.',
  alternates: { canonical: '/kubota-v1505-parts/', languages: { 'en': 'https://sourcesage.ai/kubota-v1505-parts/', 'x-default': 'https://sourcesage.ai/kubota-v1505-parts/' } },
  openGraph: {
    title: 'Kubota V1505 Engine Parts Malaysia — OEM & Aftermarket | SourceSage',
    description: 'Kubota V1505 engine parts in Malaysia — overhaul kits, cylinder heads, injectors, water pumps for KX41/KX71 mini-excavators, generators & compact tractors. 24hr availability check.',
    url: 'https://sourcesage.ai/kubota-v1505-parts/',
    siteName: 'SourceSage.ai',
    type: 'website',
    locale: 'en',
    images: [{ url: 'https://sourcesage.ai/images/og-home.png', width: 1200, height: 630, alt: 'Kubota V1505 Engine Parts Malaysia — SourceSage' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kubota V1505 Engine Parts Malaysia — OEM & Aftermarket | SourceSage',
    description: 'Kubota V1505 engine parts in Malaysia — overhaul kits, cylinder heads, injectors, water pumps for KX41/KX71 mini-excavators, generators & compact tractors. 24hr availability check.',
    images: ['https://sourcesage.ai/images/og-home.png'],
  },
}

const APPLICATIONS = [
  {
    category: 'Mini-Excavators',
    models: 'Kubota KX41, KX71, KX91 — compact excavator range',
    note: 'Highest-volume V1505 application; parts demand driven by rental fleet maintenance',
  },
  {
    category: 'Generators',
    models: 'Kubota GL6500, GL7000, J Series, SQ Series gen sets',
    note: 'Industrial standby and prime power — extended runtime drives overhaul intervals',
  },
  {
    category: 'Compact Tractors',
    models: 'Kubota L3240, L3540, L4240, B3030, B3300',
    note: 'V1505 powers many L and B-series tractors in Malaysian smallholder farming',
  },
  {
    category: 'OEM Equipment',
    models: 'Bobcat loaders, Takeuchi excavators, Multiquip light towers',
    note: 'Third-party OEM installations — parts cross-reference required',
  },
]

const V1505_PARTS = [
  {
    category: 'Engine — Core',
    items: ['Overhaul / rebuild kit (pistons, rings, liners, bearings)', 'Piston, ring & liner set', 'Cylinder head (bare or complete)', 'Full gasket set (top end + bottom end)', 'Head gasket (MLS — multi-layer steel)'],
  },
  {
    category: 'Fuel System',
    items: ['Injector nozzles (set of 4) — Denso OEM', 'Injection pump (VRZ or governor type)', 'Lift pump (mechanical)', 'Fuel filter primary & secondary', 'Governor spring kit'],
  },
  {
    category: 'Cooling System',
    items: ['Water pump (with/without housing)', 'Thermostat & housing (82°C)', 'Radiator hoses (upper & lower)', 'Fan belt & tensioner', 'Coolant temperature sender'],
  },
  {
    category: 'Lubrication',
    items: ['Oil pump (complete unit)', 'Oil pump repair kit', 'Oil cooler gasket set', 'Oil pressure sender', 'Crankshaft seal kit (front & rear)'],
  },
  {
    category: 'Timing & Valve Train',
    items: ['Timing gear set (crank, cam, idler gears)', 'Valve stem seals', 'Push rods & rocker arms', 'Valve spring set', 'Camshaft & bearings'],
  },
  {
    category: 'Electrical & Starting',
    items: ['Starter motor (12V, 2.0 kW)', 'Alternator (12V, 55A)', 'Glow plugs (set of 4)', 'Pre-heat timer relay', 'Wiring harness sections'],
  },
]

const FAQS = [
  {
    q: 'What machines use the Kubota V1505 engine in Malaysia?',
    a: 'The V1505 is most common in Kubota KX41 and KX71 mini-excavators (the highest-volume application), GL6500/GL7000 generators, and L3240/L3540 compact tractors. It is also found in Bobcat compact loaders and Takeuchi excavators. This wide cross-application use means parts are in demand from multiple sectors simultaneously.',
  },
  {
    q: 'Can I get V1505 overhaul kits in Malaysia?',
    a: 'Yes. Basic service parts (filters, belts, thermostat) are usually available at Kubota dealers, but overhaul kits are rarely stocked locally — most need to come from Singapore or Japan with 2–4 week lead times. We maintain regional stock access and can often locate kits faster through our supplier network.',
  },
  {
    q: 'Are V1505 and V1505-T (turbo) parts interchangeable?',
    a: 'Most core engine parts are shared — pistons, rings, liners, bearings, and timing gears are identical. The differences are mainly in the injection pump (turbo variant uses a different calibration), pistons (turbo may use a lower-compression piston), and the turbocharger assembly itself. Always confirm your engine serial number before ordering injectors or the injection pump.',
  },
  {
    q: 'OEM vs aftermarket — which is better for V1505 parts?',
    a: 'Quality aftermarket overhaul kits (Tata, NPR or equivalent) are well-proven in Malaysia and cost 40–60% less than OEM. For injectors, we recommend OEM Denso where possible — spray pattern consistency matters. For the head gasket on a rebuilt head, use OEM MLS gasket for best reliability. Water pumps are reliable from either source but confirm impeller diameter matches your variant.',
  },
  {
    q: 'How fast can I get V1505 parts in Malaysia?',
    a: 'Common items like filters, belts, and gaskets ship in 1–3 days if in local stock. Overhaul kits, cylinder heads, and injection pumps typically take 7–14 days sourced from Japan or Singapore. Machine-down cases get priority handling — we can arrange air freight when needed. East Malaysia (Sabah, Sarawak) may take a few days longer.',
  },
]

export default function KubotaV1505Page() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'inLanguage': 'en',
    name: 'Kubota V1505 Engine Parts Sourcing Malaysia',
    provider: {
      '@type': 'LocalBusiness',
      name: 'SourceSage.ai',
      url: 'https://sourcesage.ai',
      areaServed: { '@type': 'Country', name: 'Malaysia' },
    },
    description: 'Sourcing of Kubota V1505 engine spare parts across Malaysia — mini-excavators, generators, compact tractors and OEM equipment.',
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
      { '@type': 'ListItem', position: 2, name: 'Kubota V1505 Engine Parts Malaysia', item: 'https://sourcesage.ai/kubota-v1505-parts' },
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
        label="v1505-sticky"
        message="Hi, I need parts for my Kubota V1505 engine. Machine model: [X] Part needed: [X]"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-5 py-3.5 rounded-full shadow-2xl font-bold text-sm flex items-center gap-2 transition-all hover:scale-105"
      >
        <MessageCircle className="w-5 h-5" /> WhatsApp Us
      </WhatsappCTA>

      <div className="min-h-screen font-sans text-slate-900 antialiased">
        {/* Navbar */}
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
              label="v1505-navbar"
              message="Hi, I need parts for my Kubota V1505 engine. Machine model: [X] Part needed: [X]"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg font-bold transition-all text-sm flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </WhatsappCTA>
          </div>
        </nav>

        {/* Breadcrumb */}
        <div className="bg-slate-50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-slate-500">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700 font-medium">Kubota V1505 Engine Parts Malaysia</span>
          </div>
        </div>

        {/* Hero */}
        <header className="bg-white pt-16 pb-20 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 text-orange-800 text-xs font-bold uppercase tracking-widest mb-6">
                <MapPin className="w-4 h-4 text-orange-600" /> Kubota's Most Widely Deployed Engine
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                Kubota V1505 Engine Parts Malaysia<br />
                <span className="text-accent">Mini-Excavators. Generators. Compact Tractors.</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Overhaul kits, cylinder heads, injectors, water pumps and oil pumps for the Kubota V1505 — the 1.5L four-cylinder diesel powering KX41/KX71 mini-excavators, GL-series generators, and L/B-series tractors across Malaysia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/kubota-tractor-parts-malaysia"
                  className="px-8 py-4 text-lg font-bold rounded-xl text-white bg-accent hover:bg-accent-light shadow-xl shadow-accent/20 transition-all text-center flex items-center justify-center gap-2"
                >
                  All Kubota Parts <ChevronRight className="w-5 h-5" />
                </Link>
                <WhatsappCTA
                  label="v1505-hero"
                  message="Hi, I need parts for my Kubota V1505 engine. Machine model: [X] Engine serial: [X] Part needed: [X]"
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
              <h2 className="text-sm font-black text-accent uppercase tracking-[0.3em] mb-4">Applications</h2>
              <h3 className="text-3xl font-bold text-slate-900">Where You'll Find the V1505</h3>
              <p className="mt-4 text-slate-600 max-w-2xl mx-auto">The V1505 is one of Kubota's most cross-deployed engines — from compact excavators to standby generators to compact tractors. Common parts across all applications.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {APPLICATIONS.map(a => (
                <div key={a.category} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-accent/40 hover:shadow-md transition-all">
                  <h4 className="text-lg font-bold text-slate-900 mb-1">{a.category}</h4>
                  <p className="text-xs font-semibold text-accent mb-3">{a.models}</p>
                  <p className="text-sm text-slate-500">{a.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* V1505-T compatibility note */}
        <section className="py-12 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">V1505-T (Turbo) Compatibility</h3>
                  <p className="text-slate-600 leading-relaxed">
                    The V1505-T turbo variant shares most core engine parts with the naturally aspirated V1505 — pistons, rings, liners, bearings, timing gears, and gaskets are identical. Differences are limited to the injection pump calibration, compression ratio (turbo uses a lower-compression piston in some builds), and the turbocharger assembly. Always confirm your engine serial number before ordering injectors or the injection pump.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Parts catalogue */}
        <section className="py-20 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-sm font-black text-accent uppercase tracking-[0.3em] mb-4">Parts Catalogue</h2>
              <h3 className="text-3xl font-bold text-slate-900">V1505 Parts We Source</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {V1505_PARTS.map(cat => (
                <div key={cat.category} className="bg-white rounded-2xl p-6 border border-slate-200">
                  <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wide mb-4 flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-accent" /> {cat.category}
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

        {/* OEM vs Aftermarket */}
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-sm font-black text-accent uppercase tracking-[0.3em] mb-4">OEM vs Aftermarket</h2>
                <h3 className="text-3xl font-bold text-slate-900">What We Recommend for the V1505</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-lg mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-accent" /> Overhaul Kits
                  </h4>
                  <p className="text-slate-600 leading-relaxed">Quality aftermarket (Tata, NPR or equivalent) is well-proven and 40–60% cheaper than OEM. Many workshops in Malaysia have run millions of hours on these kits.</p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-lg mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-accent" /> Injectors
                  </h4>
                  <p className="text-slate-600 leading-relaxed">Source OEM Denso where possible, especially at normal hours — spray pattern consistency matters. Aftermarket injectors are available but quality varies significantly.</p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-lg mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-accent" /> Gaskets
                  </h4>
                  <p className="text-slate-600 leading-relaxed">Aftermarket is fine for most gaskets. Use OEM for the head gasket on rebuilt heads to ensure MLS (multi-layer steel) quality and proper sealing.</p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-lg mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-accent" /> Water Pump
                  </h4>
                  <p className="text-slate-600 leading-relaxed">Either OEM or aftermarket is reliable — confirm the impeller diameter matches your specific variant (V1505 vs V1503 differ in impeller sizing) before ordering.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why SourceSage */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Why Workshops Choose SourceSage for V1505 Parts</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <ShieldCheck className="w-6 h-6 text-accent/60" />,
                  title: 'Cross-Application Expertise',
                  body: 'The V1505 serves excavators, generators, tractors, and OEM equipment. We understand the part number cross-reference between these applications and can find stock faster than a single-dealer channel.',
                },
                {
                  icon: <AlertTriangle className="w-6 h-6 text-amber-400" />,
                  title: 'Discontinued Pump & Injector Support',
                  body: 'Older V1505 variants with discontinued injection pumps are common in Malaysia. We cross-reference obsolete part numbers against compatible replacements from our Japan and regional supplier network.',
                },
                {
                  icon: <MapPin className="w-6 h-6 text-green-400" />,
                  title: 'Regional Stock Access',
                  body: 'Overhaul kits are rarely stocked locally. We access regional inventory in Singapore, Thailand, and Japan — cutting weeks off the lead time you would face ordering direct from Kubota.',
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
                { title: 'Kubota Tractor Parts — All Models', href: '/kubota-tractor-parts-malaysia' },
                { title: 'V1505 Engine Parts Guide (Blog)', href: '/blog/kubota-v1505-engine-parts-malaysia' },
                { title: 'How to Identify Your Kubota Model', href: '/blog/how-to-identify-your-kubota-tractor-model' },
              ].map(g => (
                <Link key={g.href} href={g.href} className="bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all">
                  <p className="font-bold text-slate-800 text-sm mb-1">{g.title}</p>
                  <p className="text-xs font-semibold text-accent">Read guide →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-accent text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Need a V1505 Part Now?</h2>
            <p className="text-blue-100 text-lg mb-8">Tell us your machine model, engine serial number, and what you need. We'll confirm availability and pricing — usually within 24 hours.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#request" className="px-8 py-4 text-lg font-bold rounded-xl bg-white text-accent hover:bg-accent/10 transition-all text-center">
                Submit a Part Request
              </Link>
              <WhatsappCTA
                label="v1505-final-cta"
                message="Hi, I need a Kubota V1505 engine part urgently. Machine model: [X] Engine serial: [X] Part needed: [X]"
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
                <span className="font-heading font-black text-xl tracking-tighter text-accent">SourceSage</span>
                <span className="font-black text-xl text-green-600">.ai</span>
                <p className="text-sm text-slate-500 mt-1">Malaysia-Based Parts Sourcing Specialist</p>
              </div>
              <div className="flex gap-6 text-sm font-semibold">
                <a href="mailto:info@sourcesage.ai" className="hover:text-accent flex items-center gap-2 transition-colors">
                  <Mail className="w-4 h-4" /> info@sourcesage.ai
                </a>
                <WhatsappCTA
                  label="v1505-footer"
                  message="Hi, I need a Kubota V1505 engine part. Model: [X] Part needed: [X]"
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
