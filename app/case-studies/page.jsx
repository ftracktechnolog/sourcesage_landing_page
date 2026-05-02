import Link from 'next/link'
import { MessageCircle, Mail, ChevronRight, Clock, CheckCircle, MapPin, ShieldCheck, AlertTriangle } from 'lucide-react'
import WhatsappCTA from '../../components/WhatsappCTA'
import LangSwitcher from '../../components/LangSwitcher'

export const metadata = {
  title: 'Case Studies — Real Parts Sourcing Stories | SourceSage',
  description: 'Real case studies of how SourceSage sourced hard-to-find tractor and marine engine parts for customers across Malaysia — from discontinued Yanmar parts to urgent Kubota engine overhauls.',
  alternates: { canonical: '/case-studies/', languages: { 'en': 'https://sourcesage.ai/case-studies/', 'x-default': 'https://sourcesage.ai/case-studies/' } },
  openGraph: {
    title: 'Case Studies — Real Parts Sourcing Stories | SourceSage',
    description: 'Real case studies of how SourceSage sourced hard-to-find parts for customers across Malaysia.',
    url: 'https://sourcesage.ai/case-studies/',
    siteName: 'SourceSage.ai', type: 'website', locale: 'en',
    images: [{ url: 'https://sourcesage.ai/images/og-home.png', width: 1200, height: 630, alt: 'Case Studies — SourceSage Parts Sourcing Success Stories' }],
  },
  twitter: { card: 'summary_large_image', title: 'Case Studies — Real Parts Sourcing Stories | SourceSage', description: 'Real case studies of how SourceSage sourced hard-to-find parts.', images: ['https://sourcesage.ai/images/og-home.png'] },
}

const CASES = [
  {
    title: 'Discontinued Yanmar Part Found in 48 Hours',
    tag: 'Marine Emergency',
    icon: <AlertTriangle className="w-6 h-6 text-amber-500" />,
    situation: 'A workshop manager in Johor had a fishing vessel stranded with a failed raw water pump on a Yanmar 4JH engine. The part was discontinued by Yanmar Malaysia with no stock available nationwide.',
    solution: 'Our team contacted secondary dealers in Japan and Singapore within hours. A compatible NOS (New Old Stock) pump was located in Osaka. We arranged air freight to KLIA, customs-cleared, and couriered to Johor.',
    outcome: 'Part arrived in 48 hours. The vessel was back in operation within 3 days. The workshop manager has since become a regular client.',
  },
  {
    title: 'Kubota M9000 Overhaul Kit for Perak Rice Farmer',
    tag: 'Agricultural Urgent',
    icon: <Clock className="w-6 h-6 text-blue-500" />,
    situation: 'A rice farmer in Perak had his Kubota M9000 tractor suffer a blown head gasket mid-harvest season. Local dealers quoted 3-week lead time for the overhaul kit.',
    solution: 'We sourced a genuine Kubota overhaul kit (gaskets, piston rings, bearings) from a Singapore distributor with whom we have a standing relationship. Parts were shipped via air freight to Penang within 24 hours.',
    outcome: 'Farmer received the kit in 4 days. Repair completed over a weekend. Harvest was completed on schedule. He saved an estimated RM 15,000 in lost crop value versus waiting for the dealer.',
  },
  {
    title: 'Perkins 1004 Cylinder Head for Sabah Estate',
    tag: 'East Malaysia Logistics',
    icon: <MapPin className="w-6 h-6 text-green-500" />,
    situation: 'An oil palm estate in Sandakan, Sabah had a Perkins 1004-4T engine fail on their JCB 3CX backhoe. The cylinder head was cracked and no stockist in Sabah had the part.',
    solution: 'We sourced an OEM-compatible cylinder head from a supplier in India (a Perkins-licensed manufacturer). Arranged sea freight to Kota Kinabalu port, then courier to Sandakan.',
    outcome: 'Part arrived in 10 working days — faster than the dealer\'s 4-week estimate and at 40% lower cost. The backhoe is now running, and the estate has added us to their approved vendor list.',
  },
  {
    title: 'John Deere Hydraulic Seal Kit for Kedah Workshop',
    tag: 'Quick Turnaround',
    icon: <CheckCircle className="w-6 h-6 text-green-500" />,
    situation: 'A tractor workshop in Kedah needed a hydraulic cylinder seal kit for a John Deere 5310. The local JD dealer was out of stock and the next shipment was 6 weeks away.',
    solution: 'We cross-referenced the JD part number to an aftermarket equivalent from a Malaysian distributor. Stock was available in KL. We couriered it overnight.',
    outcome: 'Workshop received the seal kit the next morning. Customer paid 60% less than JD OEM pricing. Workshop now contacts us first for hard-to-find parts.',
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen font-sans text-slate-900 antialiased">
      <nav className="bg-bg/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className="font-bold text-xl text-slate-900 tracking-tight">SourceSage</span>
            <span className="text-accent font-bold text-xl">.ai</span>
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-semibold text-muted">
            <Link href="/#brands" className="hover:text-accent transition-colors">Brands</Link>
            <Link href="/#marine" className="hover:text-accent transition-colors">Marine</Link>
            <Link href="/how-it-works" className="hover:text-accent transition-colors">How It Works</Link>
            <Link href="/about" className="hover:text-accent transition-colors">About</Link>
            <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
            <Link href="/#request" className="hover:text-accent transition-colors">Request a Part</Link>
          </div>
          <LangSwitcher currentLang="en" />
          <WhatsappCTA
            label="case-studies-navbar"
            message="Hi, I need help sourcing a spare part. Brand: ___ Model: ___ Part needed: ___"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg font-bold transition-all text-sm flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp Us
          </WhatsappCTA>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav className="flex items-center gap-2 text-xs text-muted font-medium">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-600">Case Studies</span>
        </nav>
      </div>

      <main>
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 font-heading">Real Parts Sourcing Stories</h1>
              <p className="text-lg text-muted leading-relaxed">
                Every part we source has a story. Here are real cases where our network and persistence made the difference between a machine sitting idle and getting back to work.
              </p>
            </div>
            <div className="space-y-12">
              {CASES.map((c, i) => (
                <div key={i} className="bg-bg-alt rounded-2xl p-8 md:p-10 border border-border">
                  <div className="flex items-center gap-3 mb-6">
                    {c.icon}
                    <span className="text-xs font-black uppercase tracking-widest text-accent">{c.tag}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 font-heading">{c.title}</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-muted mb-2">Situation</h3>
                      <p className="text-slate-700 text-sm leading-relaxed">{c.situation}</p>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-muted mb-2">Solution</h3>
                      <p className="text-slate-700 text-sm leading-relaxed">{c.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-muted mb-2">Outcome</h3>
                      <p className="text-slate-700 text-sm leading-relaxed">{c.outcome}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-accent text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 font-heading">Need a Similar Rescue?</h2>
            <p className="text-accent/80 text-lg mb-8">Tell us what you need. If we can source it, we will. If we can't, we'll tell you honestly.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#request" className="px-8 py-4 text-lg font-bold rounded-xl bg-white text-accent hover:bg-accent/10 transition-all text-center">
                Submit a Part Request
              </Link>
              <WhatsappCTA
                label="case-studies-cta"
                message="Hi, I need help sourcing a spare part. Brand: ___ Model: ___ Part needed: ___"
                className="px-8 py-4 text-lg font-bold rounded-xl bg-green-500 hover:bg-green-600 text-white transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp Our Team
              </WhatsappCTA>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-bg-alt py-12 text-muted border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div>
              <span className="font-black text-xl tracking-tighter text-slate-900">SourceSage</span>
              <span className="font-black text-xl text-accent">.ai</span>
              <p className="text-sm text-muted mt-1">Ipoh, Perak — Malaysia Parts Sourcing Specialist</p>
            </div>
            <div className="flex gap-6 text-sm font-semibold">
              <a href="mailto:info@sourcesage.ai" className="hover:text-accent flex items-center gap-2 transition-colors">
                <Mail className="w-4 h-4" /> info@sourcesage.ai
              </a>
              <WhatsappCTA label="case-studies-footer" message="Hi, I need help sourcing a spare part. Brand: ___ Model: ___ Part needed: ___" className="hover:text-green-600 flex items-center gap-2 transition-colors">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </WhatsappCTA>
            </div>
          </div>
          <div className="text-center pt-6 border-t border-border">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">© 2026 SourceSage.ai. Parts Sourcing Service, Malaysia.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
