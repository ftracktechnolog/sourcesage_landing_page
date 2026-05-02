import Link from 'next/link'
import { MessageCircle, Mail, ChevronRight } from 'lucide-react'
import WhatsappCTA from '../../../components/WhatsappCTA'
import LangSwitcher from '../../../components/LangSwitcher'

export const metadata = {
  title: 'Tentang SourceSage — Perolehan Alat Ganti Traktor & Enjin Marin di Malaysia',
  description: 'Pakar perolehan alat ganti traktor pertanian dan enjin diesel marin di Malaysia, berpangkalan di Ipoh, Perak. Meliputi Kubota, Yanmar, Massey Ferguson, John Deere, Perkins, dan Zoomlion.',
  alternates: { canonical: '/ms/about/' },
  openGraph: {
    title: 'Tentang SourceSage — Perolehan Alat Ganti Traktor & Enjin Marin di Malaysia',
    description: 'Pakar perolehan alat ganti traktor pertanian dan enjin diesel marin di Malaysia, berpangkalan di Ipoh, Perak.',
    url: 'https://sourcesage.ai/ms/about/',
    siteName: 'SourceSage.ai',
    type: 'website',
    locale: 'ms_MY',
    images: [{ url: 'https://sourcesage.ai/images/og-home.png', width: 1200, height: 630, alt: 'Tentang SourceSage — Perolehan Alat Ganti Malaysia' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tentang SourceSage — Perolehan Alat Ganti Traktor & Enjin Marin di Malaysia',
    description: 'Pakar perolehan alat ganti traktor pertanian dan enjin diesel marin di Malaysia, berpangkalan di Ipoh, Perak.',
    images: ['https://sourcesage.ai/images/og-home.png'],
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://sourcesage.ai/#organization',
      'inLanguage': 'ms',
      name: 'SourceSage',
      url: 'https://sourcesage.ai',
      logo: 'https://sourcesage.ai/logo.png',
      description: 'Pakar perolehan alat ganti traktor pertanian dan enjin diesel marin di Malaysia, berpangkalan di Ipoh, Perak. Meliputi Kubota, Yanmar, Massey Ferguson, John Deere, Perkins, dan Zoomlion.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ipoh',
        addressRegion: 'Perak',
        addressCountry: 'MY',
      },
      areaServed: { '@type': 'Country', name: 'Malaysia' },
      contactPoint: { '@type': 'ContactPoint', contactType: 'khidmat pelanggan', availableLanguage: ['English', 'Malay', 'Chinese'] },
    },
  ],
}

export default function MsAboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <WhatsappCTA label="ms-about-sticky" message="Hi, saya perlukan bantuan mencari alat ganti. Jenama: ___ Model: ___ Alat ganti diperlukan: ___" className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-5 py-3.5 rounded-full shadow-2xl font-bold text-sm flex items-center gap-2 transition-all hover:scale-105">
        <MessageCircle className="w-5 h-5" /> WhatsApp Kami
      </WhatsappCTA>
      <div className="min-h-screen font-sans text-slate-900 antialiased">
        <nav className="bg-white shadow-sm sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <Link href="/ms" className="flex items-center">
              <span className="font-bold text-xl text-slate-900 tracking-tight">SourceSage</span>
              <span className="text-blue-600 font-bold text-xl">.ai</span>
            </Link>
            <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
              <Link href="/#brands" className="hover:text-blue-600 transition-colors">Jenama</Link>
              <Link href="/#marine" className="hover:text-blue-600 transition-colors">Marin</Link>
              <Link href="/#how-it-works" className="hover:text-blue-600 transition-colors">Cara Kerja</Link>
              <Link href="/ms/about" className="text-blue-600 transition-colors">Tentang</Link>
              <Link href="/ms/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
              <Link href="/#request" className="hover:text-blue-600 transition-colors">Minta Sebut Harga</Link>
            </div>
            <div className="flex items-center gap-2">
              <WhatsappCTA label="ms-about-navbar" message="Hi, saya perlukan bantuan mencari alat ganti. Jenama: ___ Model: ___ Alat ganti diperlukan: ___" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg font-bold transition-all text-sm flex items-center gap-2">
                <MessageCircle className="w-4 h-4" /> WhatsApp Kami
              </WhatsappCTA>
              <LangSwitcher currentLang="ms" />
            </div>
          </div>
        </nav>
        <div className="bg-slate-50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-slate-500">
            <Link href="/ms" className="hover:text-blue-600 transition-colors">Laman Utama</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700 font-medium">Tentang</span>
          </div>
        </div>
        <header className="bg-white pt-16 pb-20 border-b border-slate-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">Tentang SourceSage — Perolehan Alat Ganti Traktor & Enjin Marin di Malaysia</h1>
          </div>
        </header>
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Apa Yang Kami Lakukan</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">SourceSage membantu perniagaan di Malaysia mendapatkan alat ganti untuk traktor pertanian dan enjin diesel marin — termasuk alat ganti yang sukar dicari melalui saluran pengedar standard. Berpangkalan di Ipoh, Perak, kami melayani pelanggan di seluruh Semenanjung Malaysia dan Malaysia Timur (Sabah dan Sarawak).</p>
            <p className="text-lg text-slate-600 leading-relaxed">Kami meliputi pelbagai jenama termasuk Kubota, Yanmar, Massey Ferguson, John Deere, Perkins, dan Zoomlion.</p>
          </div>
        </section>
        <section className="py-16 bg-slate-50 border-y border-slate-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Siapa Yang Kami Bantu</h2>
            <ul className="space-y-4 text-lg text-slate-600">
              <li className="flex items-start gap-3"><ChevronRight className="w-5 h-5 text-blue-600 shrink-0 mt-1" /><span>Bengkel dan pengedar yang memerlukan bekalan alat ganti yang boleh dipercayai</span></li>
              <li className="flex items-start gap-3"><ChevronRight className="w-5 h-5 text-blue-600 shrink-0 mt-1" /><span>Pengendali armada dan pengurus ladang</span></li>
              <li className="flex items-start gap-3"><ChevronRight className="w-5 h-5 text-blue-600 shrink-0 mt-1" /><span>Perniagaan pertanian di mana masa henti peralatan memberi kesan kewangan</span></li>
              <li className="flex items-start gap-3"><ChevronRight className="w-5 h-5 text-blue-600 shrink-0 mt-1" /><span>Pengendali marin yang memerlukan komponen enjin diesel</span></li>
            </ul>
            <p className="text-lg text-slate-600 leading-relaxed mt-6">Kami melayani pelanggan di seluruh Semenanjung Malaysia dan Malaysia Timur (Sabah dan Sarawak).</p>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Cara Bekerja Dengan Kami</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">Hubungi kami dengan butiran alat ganti anda — model, penerangan, atau gambar — dan kami akan susuli dengan maklumat ketersediaan dan harga.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsappCTA label="ms-about-contact-cta" message="Hi, saya perlukan bantuan mencari alat ganti. Jenama: ___ Model: ___ Alat ganti diperlukan: ___" className="px-8 py-4 text-lg font-bold rounded-xl text-white bg-green-500 hover:bg-green-600 transition-all text-center flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" /> Hubungi SourceSage di WhatsApp
              </WhatsappCTA>
              <a href="mailto:info@sourcesage.ai" className="px-8 py-4 text-lg font-bold rounded-xl text-blue-700 bg-blue-50 hover:bg-blue-100 transition-all text-center flex items-center justify-center gap-2 border border-blue-200">
                <Mail className="w-5 h-5" /> Emel info@sourcesage.ai
              </a>
            </div>
          </div>
        </section>
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Perlukan Alat Ganti Dicari?</h2>
            <p className="text-blue-100 text-lg mb-8">Hantarkan butiran alat ganti anda dan kami akan menyemak ketersediaan. Kami membalas dalam masa 24 jam.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#request" className="px-8 py-4 text-lg font-bold rounded-xl bg-white text-blue-700 hover:bg-blue-50 transition-all text-center">Hantar Permintaan Alat Ganti</Link>
              <WhatsappCTA label="ms-about-final-cta" message="Hi, saya perlukan bantuan mencari alat ganti. Jenama: ___ Model: ___ Alat ganti diperlukan: ___" className="px-8 py-4 text-lg font-bold rounded-xl bg-green-500 hover:bg-green-600 text-white transition-all flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" /> WhatsApp Pasukan Kami
              </WhatsappCTA>
            </div>
          </div>
        </section>
        <footer className="bg-white py-12 text-slate-500 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
              <div>
                <span className="font-black text-xl tracking-tighter text-slate-900">SourceSage</span>
                <span className="font-black text-xl text-blue-600">.ai</span>
                <p className="text-sm text-slate-500 mt-1">Ipoh, Perak — Pakar Perolehan Alat Ganti di Malaysia</p>
              </div>
              <div className="flex gap-6 text-sm font-semibold">
                <a href="mailto:info@sourcesage.ai" className="hover:text-blue-600 flex items-center gap-2 transition-colors"><Mail className="w-4 h-4" /> info@sourcesage.ai</a>
                <WhatsappCTA label="ms-about-footer" message="Hi, saya perlukan bantuan mencari alat ganti. Jenama: ___ Model: ___ Alat ganti diperlukan: ___" className="hover:text-green-600 flex items-center gap-2 transition-colors">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </WhatsappCTA>
              </div>
            </div>
            <div className="text-center pt-6 border-t border-slate-100">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">© 2026 SourceSage.ai. Perolehan Alat Ganti Pertanian &amp; Marin, Malaysia.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
