import Link from 'next/link'
import { MessageCircle, Mail, Wrench, MapPin, Clock, Truck, CheckCircle, ChevronRight, ShieldCheck } from 'lucide-react'
import WhatsappCTA from '../../../components/WhatsappCTA'
import LangSwitcher from '../../../components/LangSwitcher'

export const metadata = {
  title: 'Perkhidmatan Perolehan Alat Ganti Malaysia — Cara Ia Berfungsi | SourceSage',
  description: 'Bagaimana perkhidmatan perolehan alat ganti kami berfungsi di Malaysia. Proses 5 langkah: hantar permintaan, semakan ketersediaan, sebut harga & masa penyediaan, sahkan pesanan, penghantaran. Alat ganti traktor pertanian dan enjin marin diesel.',
  alternates: { canonical: '/ms/services/', languages: { 'en': 'https://sourcesage.ai/services/', 'ms': 'https://sourcesage.ai/ms/services/', 'x-default': 'https://sourcesage.ai/services/' } },
  openGraph: {
    title: 'Perkhidmatan Perolehan Alat Ganti Malaysia — Cara Ia Berfungsi | SourceSage',
    description: 'Bagaimana perkhidmatan perolehan alat ganti kami berfungsi di Malaysia. Proses 5 langkah dari permintaan hingga penghantaran.',
    url: 'https://sourcesage.ai/ms/services/',
    siteName: 'SourceSage.ai',
    type: 'website',
    locale: 'ms_MY',
    images: [{ url: 'https://sourcesage.ai/images/og-home.png', width: 1200, height: 630, alt: 'Perkhidmatan Perolehan Alat Ganti SourceSage — Cara Ia Berfungsi' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Perkhidmatan Perolehan Alat Ganti Malaysia — Cara Ia Berfungsi | SourceSage',
    description: 'Bagaimana perkhidmatan perolehan alat ganti kami berfungsi di Malaysia. Proses 5 langkah dari permintaan hingga penghantaran.',
    images: ['https://sourcesage.ai/images/og-home.png'],
  },
}

const FAQS = [
  { q: 'Berapa cepat anda boleh mengesahkan ketersediaan alat ganti?', a: 'Kami biasanya memberikan respons dalam 24-48 jam dengan harga, ketersediaan, dan anggaran masa penghantaran. Permintaan segera diutamakan — nyatakan "mesin rosak" dalam mesej anda.' },
  { q: 'Apa yang berlaku jika alat ganti yang saya perlukan telah dihentikan?', a: 'Kami mencari melalui rangkaian pengedar sekunder kami di Jepun, Singapura, India, dan UK. Banyak alat ganti yang dihentikan masih tersedia melalui saluran ini. Kami akan telus tentang ketersediaan sebelum anda membuat komitmen.' },
  { q: 'Jenama dan peralatan apa yang anda liputi?', a: 'Kubota, Yanmar, Massey Ferguson, John Deere, Perkins, dan Zoomlion untuk traktor pertanian. Yanmar, Perkins, Isuzu, dan Hino untuk enjin marin diesel. Kami juga mengendalikan peralatan buatan China yang semakin biasa di ladang-ladang Malaysia.' },
  { q: 'Adakah terdapat pesanan minimum atau yuran perkhidmatan?', a: 'Tiada pesanan minimum. Kami mengendalikan permintaan satu alat ganti sama seperti pesanan pukal. Tiada yuran perkhidmatan pendahuluan — anda bayar untuk alat ganti dan penghantaran hanya selepas mengesahkan sebut harga.' },
  { q: 'Kawasan mana di Malaysia yang anda layani?', a: 'Semua negeri di Malaysia termasuk Sabah dan Sarawak. Kami berpangkalan di Ipoh, Perak, dengan kurier hari yang sama untuk Ipoh/Lembah Kinta dan penghantaran 1-3 hari di Semenanjung Malaysia. Penghantaran Malaysia Timur dikendalikan melalui kurier berpenjejak atau kargo udara.' },
]

const STEPS = [
  { number: '1', title: 'Hantar Permintaan Alat Ganti', items: ['Kongsi jenama, model, dan keterangan alat ganti', 'Sertakan gambar atau ukuran jika boleh', 'Beritahu kami jika mesin sedang rosak'] },
  { number: '2', title: 'Semakan Ketersediaan', items: ['Kami mencari dalam rangkaian pelbagai pembekal', 'Termasuk OEM, aftermarket, dan pengedar sekunder', 'Purata respons: 24-48 jam'] },
  { number: '3', title: 'Sebut Harga & Masa Penyediaan', items: ['Kami kongsi harga dan pilihan penghantaran', 'Kargo udara (3-7 hari) vs kargo laut (14-21 hari)', 'Kurier tempatan jika kami ada stok serantau'] },
  { number: '4', title: 'Sahkan & Bayar', items: ['Semak sebut harga dan sahkan pesanan anda', 'Pembayaran sebelum penghantaran', 'Penjejakan penuh disediakan'] },
  { number: '5', title: 'Penghantaran', items: ['Dihantar ke lokasi anda di Malaysia', 'Semenanjung: 1-3 hari bekerja kurier tempatan', 'Malaysia Timur: kurier berpenjejak atau kargo udara'] },
]

export default function MsServicesPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'inLanguage': 'ms',
    name: 'Perolehan Alat Ganti Traktor & Enjin Marin Malaysia',
    provider: { '@type': 'LocalBusiness', name: 'SourceSage.ai', url: 'https://sourcesage.ai', address: { '@type': 'PostalAddress', addressLocality: 'Ipoh', addressRegion: 'Perak', addressCountry: 'MY' } },
    description: 'Perkhidmatan perolehan alat ganti 5 langkah untuk traktor pertanian dan enjin marin diesel di Malaysia. Hantar permintaan, terima pengesahan ketersediaan dalam 24-48 jam, dan dapatkan penghantaran ke mana-mana di Malaysia.',
    serviceType: 'Perolehan Alat Ganti',
    areaServed: { '@type': 'Country', name: 'Malaysia' },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'inLanguage': 'ms',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Laman Utama', item: 'https://sourcesage.ai/ms/' },
      { '@type': 'ListItem', position: 2, name: 'Perkhidmatan', item: 'https://sourcesage.ai/ms/services' },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'inLanguage': 'ms',
    mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <WhatsappCTA label="ms-services-sticky" message="Hi, saya perlukan bantuan mendapatkan alat ganti. Jenama: ___ Model: ___ Alat ganti diperlukan: ___" className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-5 py-3.5 rounded-full shadow-2xl font-bold text-sm flex items-center gap-2 transition-all hover:scale-105">
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
              <Link href="/ms/#brands" className="hover:text-blue-600 transition-colors">Jenama</Link>
              <Link href="/ms/#marine" className="hover:text-blue-600 transition-colors">Marin</Link>
              <Link href="/ms/services" className="text-blue-600 transition-colors">Perkhidmatan</Link>
              <Link href="/ms/about" className="hover:text-blue-600 transition-colors">Tentang</Link>
              <Link href="/ms/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
              <Link href="/ms/#request" className="hover:text-blue-600 transition-colors">Minta Sebut Harga</Link>
            </div>
            <div className="flex items-center gap-2">
              <LangSwitcher currentLang="ms" />
              <WhatsappCTA label="ms-services-navbar" message="Hi, saya perlukan bantuan mendapatkan alat ganti. Jenama: ___ Model: ___ Alat ganti diperlukan: ___" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg font-bold transition-all text-sm flex items-center gap-2">
                <MessageCircle className="w-4 h-4" /> WhatsApp Kami
              </WhatsappCTA>
            </div>
          </div>
        </nav>
        <div className="bg-slate-50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-slate-500">
            <Link href="/ms" className="hover:text-blue-600 transition-colors">Laman Utama</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700 font-medium">Perkhidmatan</span>
          </div>
        </div>
        <header className="bg-white pt-16 pb-20 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-widest mb-6">
              <Clock className="w-4 h-4" /> Perolehan Pantas, Seluruh Malaysia
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6 max-w-3xl">Bagaimana Perkhidmatan Perolehan Alat Ganti Kami Berfungsi</h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">Proses 5 langkah yang membawa anda dari "Saya perlukan alat ganti ini" kepada "ia sudah sampai" — dengan harga telus, pelbagai pilihan penghantaran, dan liputan di semua negeri Malaysia.</p>
          </div>
        </header>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {STEPS.map((step, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all text-center">
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-lg font-black mx-auto mb-4">{step.number}</div>
                  <h3 className="font-bold text-slate-900 mb-3 text-sm">{step.title}</h3>
                  <ul className="text-xs text-slate-500 space-y-1 text-left">
                    {step.items.map((item, j) => (<li key={j} className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">·</span> {item}</li>))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Kenapa Pilih Perkhidmatan Perolehan Kami</h2>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4"><Wrench className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" /><div><strong className="text-slate-900">Pelbagai jenama, bukan satu jenama</strong><p className="text-sm text-slate-600 mt-1">Kami mencari merentasi semua jenama pertanian dan marin utama serentak — anda tidak perlu menghubungi pelbagai pengedar.</p></div></li>
                  <li className="flex items-start gap-4"><MapPin className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" /><div><strong className="text-slate-900">Berpangkalan di Ipoh, Perak</strong><p className="text-sm text-slate-600 mt-1">Kehadiran tempatan bermaksud komunikasi lebih pantas, pilihan kurier tempatan, dan pemahaman tentang pasaran pertanian dan marin Malaysia.</p></div></li>
                  <li className="flex items-start gap-4"><Truck className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" /><div><strong className="text-slate-900">Pelbagai pilihan penghantaran</strong><p className="text-sm text-slate-600 mt-1">Kargo udara untuk segera (3-7 hari), kargo laut untuk bajet (14-21 hari), atau kurier tempatan untuk stok serantau (1-3 hari).</p></div></li>
                  <li className="flex items-start gap-4"><ShieldCheck className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" /><div><strong className="text-slate-900">Pilihan OEM dan aftermarket</strong><p className="text-sm text-slate-600 mt-1">Kami bentangkan kedua-dua OEM tulen dan alternatif aftermarket berkualiti dengan pelabelan jelas dan terma jaminan.</p></div></li>
                </ul>
              </div>
              <div className="mt-12 lg:mt-0 bg-blue-50 rounded-2xl p-8 border border-blue-100">
                <h3 className="font-bold text-lg text-slate-900 mb-4">Sedia Untuk Bermula?</h3>
                <p className="text-slate-600 mb-6">Hantarkan butiran alat ganti anda. Kami akan sahkan ketersediaan dalam 24-48 jam — tiada kewajipan, tiada yuran pendahuluan.</p>
                <WhatsappCTA label="ms-services-main-cta" message="Hi, saya perlukan bantuan mendapatkan alat ganti. Jenama: ___ Model: ___ Alat ganti diperlukan: ___" className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3.5 rounded-xl font-bold transition-all w-full">
                  <MessageCircle className="w-5 h-5" /> Hantar Permintaan Alat Ganti
                </WhatsappCTA>
              </div>
            </div>
          </div>
        </section>
        <footer className="bg-bg-alt py-12 text-muted border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
              <div><span className="font-black text-xl tracking-tighter text-slate-900">SourceSage</span><span className="font-black text-xl text-accent">.ai</span><p className="text-sm text-muted mt-1">Ipoh, Perak — Pakar Perolehan Alat Ganti di Malaysia</p></div>
              <div className="flex gap-6 text-sm font-semibold">
                <a href="mailto:info@sourcesage.ai" className="hover:text-accent flex items-center gap-2 transition-colors"><Mail className="w-4 h-4" /> info@sourcesage.ai</a>
                <WhatsappCTA label="ms-services-footer" message="Hi, saya perlukan bantuan mendapatkan alat ganti. Jenama: ___ Model: ___ Alat ganti diperlukan: ___" className="hover:text-green-600 flex items-center gap-2 transition-colors"><MessageCircle className="w-4 h-4" /> WhatsApp</WhatsappCTA>
              </div>
            </div>
            <div className="text-center pt-6 border-t border-border"><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">© 2026 SourceSage.ai. Perkhidmatan Perolehan Alat Ganti, Malaysia.</p></div>
          </div>
        </footer>
      </div>
    </>
  )
}
