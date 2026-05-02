import Link from 'next/link'
import { MessageCircle, Mail, ChevronRight, Search, Wrench, BookOpen, ShoppingCart } from 'lucide-react'
import WhatsappCTA from '../../components/WhatsappCTA'

export const metadata = {
  title: 'Tractor Part Numbers — Cross-Reference & Sourcing | SourceSage',
  description: 'Look up OEM part numbers for Kubota, Yanmar, Perkins, John Deere & more. SourceSage cross-references part numbers to compatible models and locates stock in Malaysia, Japan & Singapore.',
  alternates: { canonical: '/parts/', languages: { 'en': 'https://sourcesage.ai/parts/', 'x-default': 'https://sourcesage.ai/parts/' } },
  openGraph: {
    title: 'Tractor Part Numbers — Cross-Reference & Sourcing | SourceSage',
    description: 'Look up OEM part numbers for Kubota, Yanmar, Perkins, John Deere & more. SourceSage cross-references part numbers to compatible models.',
    url: 'https://sourcesage.ai/parts/',
    siteName: 'SourceSage.ai',
    type: 'website',
    locale: 'en',
    images: [{ url: 'https://sourcesage.ai/images/og-home.png', width: 1200, height: 630, alt: 'Tractor Part Numbers — SourceSage' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tractor Part Numbers — Cross-Reference & Sourcing | SourceSage',
    description: 'Look up OEM part numbers for Kubota, Yanmar, Perkins, John Deere & more. SourceSage cross-references part numbers to compatible models.',
    images: ['https://sourcesage.ai/images/og-home.png'],
  },
}

const PART_NUMBERS = [
  { part: '1G772-03310', brand: 'Kubota', type: 'Water Pump', engines: 'V1505, V2403, D1105', link: '/parts/kubota-1g772-03310/' },
  { part: '129004-18010', brand: 'Yanmar', type: 'Fuel Injector Nozzle', engines: '3TNV88, 4TNV98', link: '/parts/yanmar-129004-18010/' },
  { part: '4115P502', brand: 'Perkins', type: 'Cylinder Head Gasket (MLS)', engines: '1104C-44', link: '/parts/perkins-4115p502/' },
  { part: 'RE525561', brand: 'John Deere', type: 'Fuel Filter Assembly', engines: '5E, 6J Series', link: '/parts/john-deere-re525561/' },
  { part: '1A021-12340', brand: 'Kubota', type: 'Oil Filter', engines: 'L-Series, M-Series', link: '/parts/kubota-1a021-12340/' },
]

const FAQS = [
  {
    q: 'How do I find the correct OEM part number for my tractor?',
    a: 'The OEM part number is stamped on the part itself or listed in your tractor\'s parts manual. You can also find it by searching your tractor model and engine code on our part-number pages below. If you\'re unsure, send us your tractor model, serial number, and a photo of the part — we\'ll cross-reference it for free.',
  },
  {
    q: 'Can SourceSage find parts that are discontinued?',
    a: 'Yes. Many OEM part numbers are superseded or discontinued. We cross-reference old numbers to current equivalents and source through our Japan, India, and Taiwan networks. If a direct replacement is no longer available, we can recommend quality aftermarket alternatives.',
  },
  {
    q: 'What information do I need to provide for a part-number search?',
    a: 'At minimum, the OEM part number and your tractor/engine model. For best results, also include the engine serial number, year of manufacture, and a photo of the part or the part number stamping. This helps us verify compatibility and locate stock faster.',
  },
  {
    q: 'Are all part numbers interchangeable across brands?',
    a: 'No. OEM part numbers are brand-specific, though some cross-reference to common aftermarket numbers (e.g., Baldwin or Donaldson filter numbers). Our part-number pages list the specific brand and compatible models for each OEM number. Always verify fitment before ordering.',
  },
]

export default function PartsIndexPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'inLanguage': 'en',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sourcesage.ai/' },
      { '@type': 'ListItem', position: 2, name: 'Tractor Part Numbers', item: 'https://sourcesage.ai/parts/' },
    ],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'inLanguage': 'en',
    name: 'Tractor Part Number Cross-Reference & Sourcing Malaysia',
    provider: {
      '@type': 'LocalBusiness',
      name: 'SourceSage.ai',
      url: 'https://sourcesage.ai',
      areaServed: { '@type': 'Country', name: 'Malaysia' },
    },
    description: 'Cross-reference and source OEM tractor part numbers for Kubota, Yanmar, Perkins, John Deere and more. Available in Malaysia, Japan and Singapore.',
    serviceType: 'Parts Sourcing & Cross-Reference',
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

  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'SpeakableSpecification',
    'inLanguage': 'en',
    xpath: ['/html/head/title', "/html/head/meta[@name='description']/@content"],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <WhatsappCTA
        label="parts-sticky"
        message="Hi, I need help finding a tractor part. Part number: ___ Tractor model: ___"
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
              label="parts-navbar"
              message="Hi, I need help finding a tractor part. Part number: ___ Tractor model: ___"
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
            <span className="text-slate-700 font-medium">Tractor Part Numbers</span>
          </div>
        </div>

        {/* Hero */}
        <header className="bg-white pt-16 pb-20 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-widest mb-6">
                <Search className="w-4 h-4 text-blue-600" /> OEM Part Number Directory
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                Tractor Part Numbers —<br />
                <span className="text-blue-600">Cross-Reference & Sourcing</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Every tractor part has a number. We help you decode it, cross-reference it across brands and engine models, then locate stock in Malaysia, Japan and Singapore. No guesswork, no wrong parts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#request"
                  className="px-8 py-4 text-lg font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all text-center flex items-center justify-center gap-2"
                >
                  Search a Part Number <ChevronRight className="w-5 h-5" />
                </Link>
                <WhatsappCTA
                  label="parts-hero"
                  message="Hi, I need help finding a tractor part. Part number: ___ Tractor model: ___"
                  className="px-8 py-4 text-lg font-bold rounded-xl text-white bg-green-500 hover:bg-green-600 transition-all text-center flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" /> WhatsApp Now
                </WhatsappCTA>
              </div>
            </div>
          </div>
        </header>

        {/* What are part numbers */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">Understanding Part Numbers</h2>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">What Are OEM Part Numbers?</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Every tractor and engine manufacturer assigns a unique part number to each component they produce. These OEM (Original Equipment Manufacturer) numbers are the key to sourcing the exact correct replacement — whether you need a water pump for a Kubota L-series or a fuel injector for a Yanmar 3TNV engine.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg mt-4">
                SourceSage cross-references these part numbers across brands, engine families, and model years. We maintain a network of suppliers in Malaysia, Japan, Singapore, India, and Taiwan to locate stock — even for numbers that have been superseded or discontinued.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
              {[
                { icon: <Search className="w-6 h-6 text-blue-600" />, title: 'Find the Number', body: 'Check the part itself, your parts manual, or our part-number pages below for the OEM number.' },
                { icon: <BookOpen className="w-6 h-6 text-blue-600" />, title: 'Cross-Reference', body: 'We verify compatibility with your tractor model, engine code, and serial number against our database.' },
                { icon: <ShoppingCart className="w-6 h-6 text-blue-600" />, title: 'Source & Ship', body: 'We locate stock across our network, quote you pricing, and ship to your workshop in Malaysia.' },
              ].map(card => (
                <div key={card.title} className="bg-white rounded-2xl p-6 border border-slate-200 text-center">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">{card.icon}</div>
                  <h4 className="font-bold text-slate-900 mb-2">{card.title}</h4>
                  <p className="text-sm text-slate-500">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Part numbers table/grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">Part Number Directory</h2>
              <h3 className="text-3xl font-bold text-slate-900">Browse Available Part Numbers</h3>
              <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Click any part number below for full specifications, compatible models, OEM cross-reference, and sourcing information.</p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-6 py-4 font-bold text-slate-700">Part Number</th>
                    <th className="text-left px-6 py-4 font-bold text-slate-700">Brand</th>
                    <th className="text-left px-6 py-4 font-bold text-slate-700">Part Type</th>
                    <th className="text-left px-6 py-4 font-bold text-slate-700">Compatible Engines / Models</th>
                    <th className="text-left px-6 py-4 font-bold text-slate-700">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {PART_NUMBERS.map(p => (
                    <tr key={p.part} className="border-b border-slate-100 hover:bg-blue-50/50 transition-colors">
                      <td className="px-6 py-5 font-bold text-blue-700">{p.part}</td>
                      <td className="px-6 py-5 text-slate-700">{p.brand}</td>
                      <td className="px-6 py-5 text-slate-700">{p.type}</td>
                      <td className="px-6 py-5 text-slate-600">{p.engines}</td>
                      <td className="px-6 py-5">
                        <Link href={p.link} className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-bold text-xs uppercase tracking-wider">
                          View Page <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Why part numbers matter */}
        <section className="py-20 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4 text-center">Why It Matters</h2>
              <h3 className="text-3xl font-bold text-slate-900 mb-10 text-center">Using the Wrong Part Number Costs Time & Money</h3>
              <div className="space-y-6">
                {[
                  { title: 'Superseded Numbers', body: 'OEMs frequently supersede part numbers. A Kubota 1G772-03310 may replace an older number. We track supersessions so you get the correct current part.' },
                  { title: 'Cross-Brand Compatibility', body: 'Many aftermarket parts carry multiple OEM numbers. A fuel filter may be listed under Kubota, Baldwin, and Donaldson numbers — we map them all.' },
                  { title: 'Malaysia-Specific Availability', body: 'Not every part number is available in Malaysia. We know which numbers are stocked locally, which need to come from Japan or Singapore, and the fastest route to your workshop.' },
                ].map(item => (
                  <div key={item.title} className="bg-white rounded-2xl p-7 border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-6">
              {FAQS.map(faq => (
                <div key={faq.q} className="bg-slate-50 rounded-2xl p-7 border border-slate-200">
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
            <h2 className="text-3xl font-bold mb-4">Can't Find Your Part Number?</h2>
            <p className="text-blue-100 text-lg mb-8">Send us the part number, your tractor model, and engine code. We'll cross-reference it and confirm availability — usually within 24 hours.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#request" className="px-8 py-4 text-lg font-bold rounded-xl bg-white text-blue-700 hover:bg-blue-50 transition-all text-center">
                Submit a Part Request
              </Link>
              <WhatsappCTA
                label="parts-final-cta"
                message="Hi, I need help finding a tractor part. Part number: ___ Tractor model: ___"
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
                  label="parts-footer"
                  message="Hi, I need help finding a tractor part. Part number: ___ Tractor model: ___"
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
