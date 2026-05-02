import Link from 'next/link'
import { MessageCircle, Mail, CheckCircle, Wrench, AlertTriangle, MapPin, ChevronRight, ShieldCheck } from 'lucide-react'
import WhatsappCTA from '../../../components/WhatsappCTA'
import LangSwitcher from '../../../components/LangSwitcher'

export const metadata = {
  title: 'Alat Ganti Traktor Kubota Malaysia — Perolehan Pantas | SourceSage',
  description: 'Perlukan alat ganti traktor Kubota di Malaysia? SourceSage membekalkan alat ganti tulen & aftermarket untuk Kubota M9000, L4400, L3408, L3608 & banyak lagi. Semakan ketersediaan 24 jam.',
  alternates: { canonical: '/ms/kubota-tractor-parts-malaysia/', languages: { 'en': 'https://sourcesage.ai/kubota-tractor-parts-malaysia/', 'ms': 'https://sourcesage.ai/ms/kubota-tractor-parts-malaysia/', 'zh-Hans': 'https://sourcesage.ai/zh/kubota-tractor-parts-malaysia/', 'x-default': 'https://sourcesage.ai/kubota-tractor-parts-malaysia/' } },
  openGraph: {
    title: 'Alat Ganti Traktor Kubota Malaysia — Perolehan Pantas | SourceSage',
    description: 'Perlukan alat ganti traktor Kubota di Malaysia? SourceSage membekalkan alat ganti tulen & aftermarket untuk Kubota M9000, L4400, L3408, L3608 & banyak lagi.',
    url: 'https://sourcesage.ai/ms/kubota-tractor-parts-malaysia/',
    siteName: 'SourceSage.ai', type: 'website', locale: 'ms_MY',
    images: [{ url: 'https://sourcesage.ai/images/og-home.png', width: 1200, height: 630, alt: 'Alat Ganti Traktor Kubota Malaysia — SourceSage' }],
  },
  twitter: { card: 'summary_large_image', title: 'Alat Ganti Traktor Kubota Malaysia — Perolehan Pantas | SourceSage', description: 'Perlukan alat ganti traktor Kubota di Malaysia? SourceSage membekalkan alat ganti tulen & aftermarket.', images: ['https://sourcesage.ai/images/og-home.png'] },
}

const FAQS = [
  { q: 'Berapa lama masa yang diambil untuk mendapatkan alat ganti Kubota di Malaysia?', a: 'Alat ganti biasa (penapis, tali sawat, gasket, penyuntik) untuk model popular seperti L3408 atau M9540 sering tersedia di Malaysia dan dihantar dalam 1-3 hari. Kit overhaul, kepala silinder, dan pam suntikan untuk model lama biasanya mengambil 7-14 hari dari Jepun atau Singapura.' },
  { q: 'Adakah anda membekalkan alat ganti Kubota tulen atau aftermarket?', a: 'Kedua-duanya. Alat ganti OEM Kubota tulen disertakan dengan kebolehkesanan dan sesuai untuk mesin baru di bawah jaminan. Aftermarket berkualiti (NPR, Tata untuk kit enjin; Sparex untuk alat ganti traktor) terbukti dan kos 30-60% lebih rendah.' },
  { q: 'Model Kubota mana yang anda bantu?', a: 'Kami meliputi majoriti traktor Kubota yang digunakan di Malaysia: siri-L (L3408, L3608, L4400, L4508), siri-M (M9000, M9540), siri-B, traktor vintaj, dan mesin penuai Kubota.' },
  { q: 'Bolehkah anda mendapatkan alat ganti untuk traktor Kubota lama?', a: 'Ya — alat ganti vintaj dan yang dihentikan adalah kepakaran kami. Rangkaian pengedar sekunder Jepun kami sangat kukuh untuk model Kubota yang lebih lama yang tidak lagi disokong oleh pengedar tempatan.' },
  { q: 'Adakah anda menghantar ke Sabah dan Sarawak?', a: 'Ya — kami menghantar ke seluruh Malaysia termasuk Malaysia Timur melalui kurier berpenjejak atau kargo udara untuk pesanan segera.' },
]

const SECTIONS = [
  { title: 'Enjin — Teras', items: ['Kit overhaul / bina semula', 'Set omboh, gelang & pelapik', 'Kepala silinder', 'Set gasket penuh', 'Gasket kepala (MLS)'] },
  { title: 'Sistem Bahan Api', items: ['Muncung penyuntik', 'Pam suntikan', 'Pam angkat', 'Penapis bahan api', 'Kit spring pengawal'] },
  { title: 'Sistem Penyejukan', items: ['Pam air', 'Termostat & perumahan', 'Hos radiator', 'Tali sawat kipas', 'Penghantar suhu penyejuk'] },
  { title: 'Transmisi', items: ['Plat klac & plat tekanan', 'Pek klac PTO', 'Seal ulang-alik', 'Galas pacuan akhir', 'Garpu pemilih gear'] },
  { title: 'Hidraulik', items: ['Pam angkat & injap pelega', 'Seal silinder hidraulik', 'Pautan atas & kawalan draf', 'Lengan pautan 3-titik', 'Elemen penapis'] },
  { title: 'Elektrik', items: ['Motor penghidup', 'Alternator', 'Palam pijar', 'Penghantar minyak & suhu', 'Kluster instrumen'] },
]

export default function MsKubotaPage() {
  const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', 'inLanguage': 'ms', name: 'Perolehan Alat Ganti Traktor Kubota Malaysia', provider: { '@type': 'LocalBusiness', name: 'SourceSage.ai', url: 'https://sourcesage.ai', areaServed: { '@type': 'Country', name: 'Malaysia' } }, description: 'Perolehan alat ganti traktor Kubota yang sukar dicari di seluruh Malaysia — siri-L, siri-M, siri-B, vintaj dan mesin penuai.', serviceType: 'Perolehan Alat Ganti', areaServed: [{ '@type': 'State', name: 'Kedah' }, { '@type': 'State', name: 'Perak' }, { '@type': 'State', name: 'Selangor' }, { '@type': 'State', name: 'Johor' }, { '@type': 'State', name: 'Sabah' }, { '@type': 'State', name: 'Sarawak' }] }
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', 'inLanguage': 'ms', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Laman Utama', item: 'https://sourcesage.ai/ms/' }, { '@type': 'ListItem', position: 2, name: 'Alat Ganti Traktor Kubota Malaysia', item: 'https://sourcesage.ai/ms/kubota-tractor-parts-malaysia' }] }
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', 'inLanguage': 'ms', mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
  const partsListSchema = { '@context': 'https://schema.org', '@type': 'ItemList', 'inLanguage': 'ms', name: 'Kategori Alat Ganti Kubota', description: 'Alat ganti traktor Kubota yang tersedia mengikut sistem — enjin, bahan api, penyejukan, transmisi, hidraulik, elektrik.', numberOfItems: SECTIONS.length, itemListElement: SECTIONS.map((cat, i) => ({ '@type': 'ListItem', position: i + 1, item: { '@type': 'Product', name: `Kubota ${cat.title}`, description: `${cat.items.join(', ')}` } })) }
  const speakableSchema = { '@context': 'https://schema.org', '@type': 'SpeakableSpecification', 'inLanguage': 'ms', xpath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(partsListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <WhatsappCTA label="ms-kubota-sticky" message="Hi, saya perlukan alat ganti traktor Kubota. Model: ___ Kod enjin: ___ Alat ganti diperlukan: ___" className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-5 py-3.5 rounded-full shadow-2xl font-bold text-sm flex items-center gap-2 transition-all hover:scale-105"><MessageCircle className="w-5 h-5" /> WhatsApp Kami</WhatsappCTA>
      <div className="min-h-screen font-sans text-slate-900 antialiased">
        <nav className="bg-white shadow-sm sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <Link href="/ms" className="flex items-center"><span className="font-bold text-xl text-slate-900 tracking-tight">SourceSage</span><span className="text-blue-600 font-bold text-xl">.ai</span></Link>
            <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
              <Link href="/ms/#brands" className="hover:text-blue-600 transition-colors">Jenama</Link>
              <Link href="/ms/#marine" className="hover:text-blue-600 transition-colors">Marin</Link>
              <Link href="/ms/#how-it-works" className="hover:text-blue-600 transition-colors">Cara Kerja</Link>
              <Link href="/ms/about" className="hover:text-blue-600 transition-colors">Tentang</Link>
              <Link href="/ms/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
              <Link href="/ms/#request" className="hover:text-blue-600 transition-colors">Minta Sebut Harga</Link>
            </div>
            <div className="flex items-center gap-2">
              <LangSwitcher currentLang="ms" />
              <WhatsappCTA label="ms-kubota-navbar" message="Hi, saya perlukan alat ganti traktor Kubota. Model: ___ Kod enjin: ___ Alat ganti diperlukan: ___" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg font-bold transition-all text-sm flex items-center gap-2"><MessageCircle className="w-4 h-4" /> WhatsApp Kami</WhatsappCTA>
            </div>
          </div>
        </nav>
        <div className="bg-slate-50 border-b border-slate-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-slate-500"><Link href="/ms" className="hover:text-blue-600 transition-colors">Laman Utama</Link><span className="mx-2">/</span><span className="text-slate-700 font-medium">Alat Ganti Traktor Kubota</span></div></div>
        <header className="bg-white pt-16 pb-20 border-b border-slate-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-widest mb-6"><MapPin className="w-4 h-4" /> Perolehan Pantas di Malaysia</div><h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6 max-w-3xl">Alat Ganti Traktor Kubota di Malaysia</h1><p className="text-lg text-slate-600 max-w-2xl leading-relaxed">Kami mendapatkan alat ganti traktor Kubota yang sukar dicari — termasuk alat ganti yang tidak disimpan oleh pengedar tempatan. Perolehan pantas, semakan ketersediaan 24 jam, penghantaran ke seluruh Malaysia.</p></div></header>
        <section className="py-16 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><h2 className="text-2xl font-bold text-slate-900 mb-8">Kategori Alat Ganti</h2><div className="grid grid-cols-2 md:grid-cols-3 gap-4">{SECTIONS.map(({ title, items }) => (<div key={title} className="bg-slate-50 rounded-xl p-5 border border-slate-200"><h3 className="font-bold text-slate-800 text-sm mb-3 uppercase tracking-wide">{title}</h3><ul className="space-y-1.5">{items.map((item, j) => (<li key={j} className="text-sm text-slate-600 flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0" /> {item}</li>))}</ul></div>))}</div></div></section>
        <section className="py-16 bg-slate-50 border-y border-slate-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-16 items-start"><div><h2 className="text-2xl font-bold text-slate-900 mb-6">Kenapa Bengkel Perak Pilih SourceSage</h2><ul className="space-y-4 text-sm text-slate-600"><li className="flex items-start gap-3"><ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" /><span>Perolehan pelbagai jenama — bukan ejen jenama tunggal</span></li><li className="flex items-start gap-3"><MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" /><span>Berpangkalan di Ipoh, Perak — kehadiran tempatan</span></li><li className="flex items-start gap-3"><Wrench className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" /><span>OEM + aftermarket berkualiti dengan harga kompetitif</span></li><li className="flex items-start gap-3"><AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" /><span>Traktor vintaj dan yang dihentikan adalah kepakaran kami</span></li></ul></div><div className="mt-12 lg:mt-0 bg-blue-50 rounded-2xl p-8 border border-blue-100"><h3 className="font-bold text-lg text-slate-900 mb-4">Perlukan Alat Ganti Kubota?</h3><p className="text-slate-600 mb-6">Hantarkan model dan alat ganti yang diperlukan. Kami mengesahkan ketersediaan dalam 24-48 jam.</p><WhatsappCTA label="ms-kubota-main-cta" message="Hi, saya perlukan alat ganti traktor Kubota. Model: ___ Kod enjin: ___ Alat ganti diperlukan: ___" className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3.5 rounded-xl font-bold transition-all w-full"><MessageCircle className="w-5 h-5" /> Minta Sebut Harga Alat Ganti Kubota</WhatsappCTA></div></div></section>
        <section className="py-16 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><h2 className="text-2xl font-bold text-slate-900 mb-8">Model Kubota Yang Kami Sokong</h2><div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-medium">{['L3408', 'L3608', 'L4400', 'L4508', 'M9000', 'M9540', 'B2420', 'B3030', 'V1505 (enjin)', 'V2403 (enjin)', 'Vintage L-series', 'Combine harvesters'].map(m => (<div key={m} className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-slate-700 flex items-center gap-2"><Wrench className="w-4 h-4 text-blue-500 shrink-0" />{m}</div>))}</div></div></section>
        <footer className="bg-white py-12 text-slate-500 border-t border-slate-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8"><div><span className="font-black text-xl tracking-tighter text-slate-900">SourceSage</span><span className="font-black text-xl text-blue-600">.ai</span><p className="text-sm text-slate-500 mt-1">Ipoh, Perak — Pakar Perolehan Alat Ganti di Malaysia</p></div><div className="flex gap-6 text-sm font-semibold"><a href="mailto:info@sourcesage.ai" className="hover:text-blue-600 flex items-center gap-2 transition-colors"><Mail className="w-4 h-4" /> info@sourcesage.ai</a><WhatsappCTA label="ms-kubota-footer" message="Hi, saya perlukan alat ganti traktor Kubota. Model: ___ Kod enjin: ___ Alat ganti diperlukan: ___" className="hover:text-green-600 flex items-center gap-2 transition-colors"><MessageCircle className="w-4 h-4" /> WhatsApp</WhatsappCTA></div></div><div className="text-center pt-6 border-t border-slate-100"><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">© 2026 SourceSage.ai. Perolehan Alat Ganti Pertanian &amp; Marin, Malaysia.</p></div></div></footer>
      </div>
    </>
  )
}
