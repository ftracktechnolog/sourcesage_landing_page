import Link from 'next/link'
import { MessageCircle, Mail, ChevronRight, CheckCircle, Wrench, Droplets, Thermometer, MapPin } from 'lucide-react'
import WhatsappCTA from '../../../components/WhatsappCTA'
import LangSwitcher from '../../../components/LangSwitcher'

export const metadata = {
  title: 'Kubota 1A021-12340 — Oil Filter for L & M Series | SourceSage',
  description: 'Kubota 1A021-12340 genuine oil filter. Fits L3408, L3608, L4400, M9000, M9540 and more. OEM spec, in-stock Malaysia. Fast delivery nationwide.',
  alternates: { canonical: '/parts/kubota-1a021-12340/', languages: { 'en': 'https://sourcesage.ai/parts/kubota-1a021-12340/', 'x-default': 'https://sourcesage.ai/parts/kubota-1a021-12340/' } },
  openGraph: {
    title: 'Kubota 1A021-12340 — Oil Filter for L & M Series | SourceSage',
    description: 'Kubota 1A021-12340 genuine oil filter. Fits L3408, L3608, L4400, M9000, M9540 and more. OEM spec, in-stock Malaysia.',
    url: 'https://sourcesage.ai/parts/kubota-1a021-12340/',
    siteName: 'SourceSage.ai',
    type: 'website',
    locale: 'en',
    images: [{ url: 'https://sourcesage.ai/images/og-home.png', width: 1200, height: 630, alt: 'Kubota 1A021-12340 Oil Filter — SourceSage' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kubota 1A021-12340 — Oil Filter for L & M Series | SourceSage',
    description: 'Kubota 1A021-12340 genuine oil filter. Fits L3408, L3608, L4400, M9000, M9540 and more.',
    images: ['https://sourcesage.ai/images/og-home.png'],
  },
}

const COMPATIBLE_MODELS = [
  { model: 'L3408', engine: 'V1505', note: 'Compact utility tractor — most common L-series in Malaysia' },
  { model: 'L3608', engine: 'V1505', note: 'Popular in paddy farming' },
  { model: 'L4400', engine: 'V2403', note: 'Higher horsepower L-series' },
  { model: 'L4508', engine: 'V2403', note: 'Medium-duty farm tractor' },
  { model: 'L4708', engine: 'V2403', note: 'Heavy-duty compact tractor' },
  { model: 'M9000', engine: 'V3800', note: 'Commercial plantation workhorse' },
  { model: 'M9540', engine: 'V3800', note: 'Higher HP M-series' },
  { model: 'B2420', engine: 'D1105', note: 'Sub-compact utility tractor' },
  { model: 'B3030', engine: 'D1105', note: 'Popular sub-compact model' },
]

const FAQS = [
  {
    q: 'Is the Kubota 1A021-12340 an OEM part?',
    a: 'Yes — 1A021-12340 is the genuine Kubota OEM oil filter part number. It meets Kubota factory specifications for filtration efficiency and bypass valve pressure. Quality aftermarket equivalents are also available if you prefer a cost-saving alternative.',
  },
  {
    q: 'What is the recommended oil change interval with this filter?',
    a: 'Kubota recommends changing the oil filter every 100–150 hours of operation, or at every oil change. For tractors in heavy use during planting or harvest seasons, more frequent changes are recommended. Always use the correct SAE grade engine oil specified for your engine model.',
  },
  {
    q: 'What is the thread size and sealing method?',
    a: 'The Kubota 1A021-12340 uses a 3/4"-16 UNF thread with a rubber gasket sealing ring. The filter diameter is approximately 76mm and height is 90mm. These specifications match the OEM filter housing on all compatible L-series and M-series engines.',
  },
  {
    q: 'Can I use an aftermarket filter instead of OEM?',
    a: 'Yes — quality aftermarket filters meeting or exceeding OEM specifications are widely used in Malaysia. Brands like Vic, Fleetguard, and Baldwin offer compatible alternatives at 30–50% lower cost. We stock both OEM and aftermarket options and can advise which is best for your application and budget.',
  },
  {
    q: 'How fast can you deliver this filter in Malaysia?',
    a: 'The 1A021-12340 filter is commonly in stock and ships within 1–3 working days across Peninsular Malaysia and 3–7 working days to East Malaysia (Sabah & Sarawak). Same-day delivery is available within the Ipoh/Kinta Valley area. Emergency courier options are available for urgent breakdowns.',
  },
]

export default function KubotaOilFilterPage() {
  const serviceSchema = {
    '@context': 'https://schema.org', '@type': 'Product', 'inLanguage': 'en',
    name: 'Kubota 1A021-12340 Oil Filter',
    description: 'Genuine Kubota OEM oil filter compatible with L3408, L3608, L4400, M9000, M9540 and other Kubota tractor models. Thread: 3/4"-16 UNF.',
    brand: { '@type': 'Brand', name: 'Kubota' },
    offers: { '@type': 'Offer', priceCurrency: 'MYR', availability: 'https://schema.org/InStock', itemCondition: 'https://schema.org/NewCondition', url: 'https://sourcesage.ai/parts/kubota-1a021-12340/' },
  }

  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage', 'inLanguage': 'en',
    mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  }

  const speakableSchema = {
    '@context': 'https://schema.org', '@type': 'SpeakableSpecification', 'inLanguage': 'en',
    xpath: ["/html/head/title", "/html/head/meta[@name='description']/@content"],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', 'inLanguage': 'en', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sourcesage.ai/' }, { '@type': 'ListItem', position: 2, name: 'Parts Lookup', item: 'https://sourcesage.ai/parts' }, { '@type': 'ListItem', position: 3, name: 'Kubota 1A021-12340 Oil Filter' }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <WhatsappCTA
        label="part-kubota-oil-filter-sticky"
        message="Hi, I need a Kubota 1A021-12340 oil filter. Quantity: ___"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-5 py-3.5 rounded-full shadow-2xl font-bold text-sm flex items-center gap-2 transition-all hover:scale-105"
      >
        <MessageCircle className="w-5 h-5" /> WhatsApp Us
      </WhatsappCTA>

      <div className="min-h-screen font-sans text-slate-900 antialiased">
        <nav className="bg-white shadow-sm sticky top-0 z-50">
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
              label="part-kubota-oil-filter-navbar"
              message="Hi, I need a Kubota 1A021-12340 oil filter."
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg font-bold transition-all text-sm flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </WhatsappCTA>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs text-slate-400 font-medium">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/parts" className="hover:text-accent transition-colors">Parts Lookup</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-600">Kubota 1A021-12340</span>
          </nav>
        </div>

        <main>
          <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <div className="inline-block bg-orange-400 text-orange-900 text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
                  Genuine Kubota OEM Part — Malaysia Stock
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
                  Kubota 1A021-12340 Oil Filter
                </h1>
                <p className="text-xl text-slate-300 mb-2 font-semibold">OEM Engine Oil Filter for L & M Series Tractors</p>
                <p className="text-slate-400 leading-relaxed mb-8">
                  Genuine Kubota OEM oil filter. Thread: 3/4"-16 UNF. Fits L3408, L3608, L4400, L4508, L4708, M9000, M9540 and more. In-stock in Malaysia — fast delivery anywhere.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <WhatsappCTA
                    label="part-kubota-oil-filter-hero"
                    message="Hi, I need a Kubota 1A021-12340 oil filter. Quantity: ___"
                    className="bg-orange-400 hover:bg-orange-300 text-orange-900 px-8 py-4 rounded-xl font-black text-lg transition-all flex items-center gap-3 justify-center"
                  >
                    <MessageCircle className="w-6 h-6" /> Request This Part
                  </WhatsappCTA>
                  <a href="#compatible" className="border-2 border-slate-500 text-slate-300 hover:bg-slate-800 px-8 py-4 rounded-xl font-bold text-lg transition-all text-center">
                    View Compatible Models
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div><div className="text-xl font-black text-orange-600">OEM</div><div className="text-xs text-slate-500 font-semibold mt-1">Genuine Kubota</div></div>
                <div><div className="text-xl font-black text-orange-600">3/4"-16</div><div className="text-xs text-slate-500 font-semibold mt-1">Thread Size (UNF)</div></div>
                <div><div className="text-xl font-black text-orange-600">9 Models</div><div className="text-xs text-slate-500 font-semibold mt-1">Compatible</div></div>
                <div><div className="text-xl font-black text-orange-600">In Stock</div><div className="text-xs text-slate-500 font-semibold mt-1">Malaysia</div></div>
              </div>
            </div>
          </section>

          <section id="compatible" className="py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-2 text-xs font-bold uppercase tracking-widest text-orange-600">Compatible Models</div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Tractors That Use This Oil Filter</h2>
              <p className="text-slate-500 mb-10 max-w-2xl">The 1A021-12340 is the standard oil filter across Kubota's L-series and M-series tractor range in Malaysia, covering both V1505 and V2403 / V3800 engine families.</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {COMPATIBLE_MODELS.map(m => (
                  <div key={m.model} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                    <div className="font-black text-lg text-slate-900 mb-1">{m.model}</div>
                    <div className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-2">{m.engine}</div>
                    <p className="text-slate-500 text-sm">{m.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-2 text-xs font-bold uppercase tracking-widest text-orange-600">Part Details</div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6">OEM Cross-Reference & Specifications</h2>
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <dl className="space-y-4 text-sm">
                  <div className="flex justify-between"><dt className="text-slate-500 font-medium">OEM Part Number</dt><dd className="font-bold text-slate-900">1A021-12340</dd></div>
                  <div className="flex justify-between"><dt className="text-slate-500 font-medium">Brand</dt><dd className="font-bold text-slate-900">Kubota</dd></div>
                  <div className="flex justify-between"><dt className="text-slate-500 font-medium">Type</dt><dd className="font-bold text-slate-900">Full-flow spin-on oil filter</dd></div>
                  <div className="flex justify-between"><dt className="text-slate-500 font-medium">Thread Size</dt><dd className="font-bold text-slate-900">3/4"-16 UNF</dd></div>
                  <div className="flex justify-between"><dt className="text-slate-500 font-medium">Gasket Diameter</dt><dd className="font-bold text-slate-900">62mm (inner) / 72mm (outer)</dd></div>
                  <div className="flex justify-between"><dt className="text-slate-500 font-medium">Filter Height</dt><dd className="font-bold text-slate-900">90mm</dd></div>
                  <div className="flex justify-between"><dt className="text-slate-500 font-medium">By-Pass Valve</dt><dd className="font-bold text-slate-900">Integrated (1.7 bar)</dd></div>
                </dl>
              </div>
              <div className="mt-6 bg-amber-50 border border-amber-100 rounded-xl p-5">
                <p className="text-sm text-amber-800 font-medium flex items-start gap-2">
                  <span className="text-lg">💡</span>
                  <span>Don't have the part number? Send us your tractor model and engine code. We can cross-reference the correct oil filter for your machine.</span>
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-2 text-xs font-bold uppercase tracking-widest text-orange-600">FAQ</div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-10">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {FAQS.map(f => (
                  <div key={f.q} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                    <h3 className="font-bold text-slate-900 mb-3">{f.q}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Need a Kubota 1A021-12340 Oil Filter?</h2>
              <p className="text-slate-300 text-lg mb-8">
                We stock genuine OEM and quality aftermarket options. Tell us how many you need and your location — we'll confirm pricing and delivery.
              </p>
              <WhatsappCTA
                label="part-kubota-oil-filter-final"
                message="Hi, I need a Kubota 1A021-12340 oil filter. Quantity: ___ Location: ___"
                className="inline-flex items-center gap-3 bg-orange-400 hover:bg-orange-300 text-orange-900 px-10 py-5 rounded-2xl font-black text-xl transition-all"
              >
                <MessageCircle className="w-7 h-7" /> WhatsApp Us Now
              </WhatsappCTA>
              <p className="text-slate-400 text-sm mt-6">Or email: info@sourcesage.ai</p>
            </div>
          </section>
        </main>

        <footer className="bg-white py-12 text-slate-500 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <span className="font-black text-xl tracking-tighter text-slate-900">SourceSage</span>
                <span className="font-black text-xl text-accent">.ai</span>
                <p className="text-sm text-slate-500 mt-1">Malaysia-Based Parts Sourcing Specialist</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Parts Pages</p>
                <ul className="space-y-2 text-sm font-semibold">
                  <li><Link href="/kubota-tractor-parts-malaysia" className="hover:text-accent transition-colors">Kubota Tractor Parts</Link></li>
                  <li><Link href="/yanmar-marine-parts-malaysia" className="hover:text-accent transition-colors">Yanmar Marine Parts</Link></li>
                  <li><Link href="/massey-ferguson-parts-malaysia" className="hover:text-accent transition-colors">Massey Ferguson Parts</Link></li>
                  <li><Link href="/zoomlion-parts-malaysia" className="hover:text-accent transition-colors">Zoomlion Parts</Link></li>
                  <li><Link href="/john-deere-parts-malaysia" className="hover:text-accent transition-colors">John Deere Parts</Link></li>
                  <li><Link href="/perkins-engine-parts-malaysia" className="hover:text-accent transition-colors">Perkins Engine Parts</Link></li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 text-sm font-semibold">
                <a href="mailto:info@sourcesage.ai" className="hover:text-accent flex items-center gap-2 transition-colors">
                  <Mail className="w-4 h-4" /> info@sourcesage.ai
                </a>
                <WhatsappCTA label="part-kubota-oil-filter-footer" message="Hi, I need help sourcing a spare part. Brand: ___ Model: ___ Part needed: ___" className="hover:text-green-600 flex items-center gap-2 transition-colors">
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
