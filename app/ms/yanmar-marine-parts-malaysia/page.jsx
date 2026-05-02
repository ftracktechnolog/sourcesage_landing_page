import Link from 'next/link'
import { MessageCircle, Mail, CheckCircle, Wrench, AlertTriangle, MapPin, ChevronRight, ShieldCheck } from 'lucide-react'
import WhatsappCTA from '../../../components/WhatsappCTA'
import LangSwitcher from '../../../components/LangSwitcher'

export const metadata = {
  title: 'Alat Ganti Enjin Marin Yanmar Malaysia — Pakar Perolehan | SourceSage',
  description: 'Alat ganti enjin marin Yanmar di Malaysia. Siri 1GM, 2GM, 3GM, 3JH, 4JH & 6LY. Suntikan bahan api, gasket, kepala silinder & banyak lagi. Penghantaran udara tersedia untuk pesanan segera.',
  alternates: { canonical: '/ms/yanmar-marine-parts-malaysia/', languages: { 'en': 'https://sourcesage.ai/yanmar-marine-parts-malaysia/', 'ms': 'https://sourcesage.ai/ms/yanmar-marine-parts-malaysia/', 'zh-Hans': 'https://sourcesage.ai/zh/yanmar-marine-parts-malaysia/', 'x-default': 'https://sourcesage.ai/yanmar-marine-parts-malaysia/' } },
  openGraph: {
    title: 'Alat Ganti Enjin Marin Yanmar Malaysia — Pakar Perolehan | SourceSage',
    description: 'Alat ganti enjin marin Yanmar di Malaysia. Siri 1GM, 2GM, 3GM, 3JH, 4JH & 6LY. Suntikan bahan api, gasket, kepala silinder & banyak lagi.',
    url: 'https://sourcesage.ai/ms/yanmar-marine-parts-malaysia/',
    siteName: 'SourceSage.ai', type: 'website', locale: 'ms_MY',
    images: [{ url: 'https://sourcesage.ai/images/og-home.png', width: 1200, height: 630, alt: 'Alat Ganti Enjin Marin Yanmar Malaysia — SourceSage' }],
  },
  twitter: { card: 'summary_large_image', title: 'Alat Ganti Enjin Marin Yanmar Malaysia — Pakar Perolehan | SourceSage', description: 'Alat ganti enjin marin Yanmar di Malaysia. Siri 1GM, 2GM, 3GM, 3JH, 4JH & 6LY.', images: ['https://sourcesage.ai/images/og-home.png'] },
}

const MODELS = [
  { series: '1GM10', hp: '9 hp', use: 'Bot layar, bot kecil' },
  { series: '2GM20', hp: '18 hp', use: 'Bot layar, bot kerja kecil' },
  { series: '3GM30', hp: '27 hp', use: 'Bot layar sederhana' },
  { series: '3JH5', hp: '39 hp', use: 'Bot nelayan, bot peronda' },
  { series: '4JH4', hp: '54 hp', use: 'Bot kerja komersial, feri' },
  { series: '4JH45', hp: '45 hp', use: 'Kapal nelayan, lancang' },
  { series: '6LY3', hp: '315 hp', use: 'Peronda laju, kapal besar' },
]

const PARTS = [
  { category: 'Sistem Penyejukan', items: ['Pendesak pam air mentah', 'Penukar haba', 'Termostat & perumahan', 'Pam air tawar', 'Anod zink'] },
  { category: 'Sistem Bahan Api', items: ['Muncung penyuntik', 'Pam suntikan', 'Elemen penapis bahan api', 'Pam angkat', 'Skru bolong'] },
  { category: 'Pengedap Enjin', items: ['Set gasket penuh', 'Gasket kepala', 'Seal minyak engkol', 'Seal batang injap', 'Kit gelang-O'] },
  { category: 'Elektrik', items: ['Alternator', 'Motor penghidup', 'Palam pijar', 'Unit penghantar (suhu/minyak)', 'Abah-abah pendawaian'] },
  { category: 'Transmisi', items: ['Pendingin lunas', 'Seal aci (PSS)', 'Seal minyak kotak gear', 'Cakera fleksibel gandingan', 'Pemasangan enjin'] },
  { category: 'Kit Servis', items: ['Kit overhaul utama', 'Kit servis kecil', 'Kit tali sawat & hos', 'Pek servis penapis', 'Set zink'] },
]

const FAQS = [
  {
    q: 'Berapa lama masa untuk mendapatkan alat ganti marin Yanmar di Malaysia?',
    a: 'Untuk siri biasa (3JH, 4JH, 2GM) kami biasanya mengesahkan ketersediaan dalam 24 jam. Alat ganti dalam stok di Malaysia dihantar hari yang sama atau keesokan hari. Alat ganti sumber dari Jepun biasanya tiba dalam 5–10 hari bekerja. Kes kecemasan diberi keutamaan.',
  },
  {
    q: 'Adakah anda membekalkan alat ganti Yanmar OEM atau aftermarket?',
    a: 'Kami sumber kedua-duanya. Alat ganti OEM datang dengan kebolehkesanan Yanmar penuh. Alternatif aftermarket berkualiti (untuk barang haus seperti pendesak, penapis, zink) dikenal pasti dengan jelas dan kos 30–50% lebih rendah. Anda pilih.',
  },
  {
    q: 'Bolehkah anda menghantar ke Sabah dan Sarawak?',
    a: 'Ya — Malaysia Timur adalah pasaran teras kami. Armada nelayan dan pengendali menyelam di Kota Kinabalu, Sandakan, Miri, dan Kuching kerap bergantung kepada kami apabila stokis tempatan kehabisan. Kami menggunakan kurier boleh dipercayai dengan penjejakan penuh.',
  },
  {
    q: 'Nombor siri Yanmar saya telah hapus. Bolehkah anda masih mengenal pasti alat ganti?',
    a: 'Ya. Hantarkan foto enjin, alat ganti, dan sebarang tanda yang kelihatan. Pasukan kami biasanya boleh merujuk silang menggunakan nombor tuangan, dimensi, atau rekod pendaftaran kapal.',
  },
  {
    q: 'Adakah anda menyimpan alat ganti saildrive Yanmar?',
    a: 'Ya — SD50, SD60, dan SD20 adalah dalam skop kami. Bellows, seal, seal aci kipas, dan seal minyak kaki adalah permintaan biasa yang kami penuhi secara tetap.',
  },
]

export default function MsYanmarMarinePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'inLanguage': 'ms',
    name: 'Perolehan Alat Ganti Enjin Marin Yanmar Malaysia',
    provider: {
      '@type': 'LocalBusiness',
      name: 'SourceSage.ai',
      url: 'https://sourcesage.ai',
      areaServed: { '@type': 'Country', name: 'Malaysia' },
    },
    description: 'Perolehan alat ganti enjin diesel marin Yanmar yang sukar dicari di seluruh Malaysia termasuk Sabah dan Sarawak.',
    serviceType: 'Perolehan Alat Ganti',
    areaServed: [
      { '@type': 'State', name: 'Sabah' },
      { '@type': 'State', name: 'Sarawak' },
      { '@type': 'State', name: 'Selangor' },
      { '@type': 'State', name: 'Johor' },
      { '@type': 'State', name: 'Perak' },
      { '@type': 'State', name: 'Kedah' },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'inLanguage': 'ms',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Laman Utama', item: 'https://sourcesage.ai/ms/' },
      { '@type': 'ListItem', position: 2, name: 'Alat Ganti Enjin Marin Yanmar Malaysia', item: 'https://sourcesage.ai/ms/yanmar-marine-parts-malaysia' },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'inLanguage': 'ms',
    mainEntity: FAQS.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const partsListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'inLanguage': 'ms',
    name: 'Kategori Alat Ganti Marin Yanmar',
    description: 'Alat ganti enjin marin Yanmar yang tersedia mengikut sistem — penyejukan, bahan api, pengedap enjin, elektrik, transmisi, kit servis.',
    numberOfItems: PARTS.length,
    itemListElement: PARTS.map((cat, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Product',
        name: `Yanmar Marin ${cat.category}`,
        description: `${cat.items.join(', ')}`,
      },
    })),
  }

  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'SpeakableSpecification',
    'inLanguage': 'ms',
    xpath: ["/html/head/title", "/html/head/meta[@name='description']/@content"],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(partsListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <WhatsappCTA
        label="ms-yanmar-sticky"
        message="Hi, saya perlukan alat ganti enjin marin Yanmar. Model enjin: ___ Alat ganti diperlukan: ___"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-5 py-3.5 rounded-full shadow-2xl font-bold text-sm flex items-center gap-2 transition-all hover:scale-105"
      >
        <MessageCircle className="w-5 h-5" /> WhatsApp Kami
      </WhatsappCTA>

      <div className="min-h-screen font-sans text-slate-900 antialiased">
        <nav className="bg-white shadow-sm sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <Link href="/ms" className="flex items-center">
              <span className="font-bold text-xl text-slate-900 tracking-tight">SourceSage</span>
              <span className="text-accent font-bold text-xl">.ai</span>
            </Link>
            <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
              <Link href="/ms/#brands" className="hover:text-accent transition-colors">Jenama</Link>
              <Link href="/ms/#marine" className="hover:text-accent transition-colors">Marin</Link>
              <Link href="/ms/#how-it-works" className="hover:text-accent transition-colors">Cara Kerja</Link>
              <Link href="/ms/about" className="hover:text-accent transition-colors">Tentang</Link>
              <Link href="/ms/blog" className="hover:text-accent transition-colors">Blog</Link>
              <Link href="/ms/#request" className="hover:text-accent transition-colors">Minta Sebut Harga</Link>
            </div>
            <LangSwitcher currentLang="ms" />
            <WhatsappCTA
              label="ms-yanmar-navbar"
              message="Hi, saya perlukan alat ganti enjin marin Yanmar. Model enjin: ___ Alat ganti diperlukan: ___"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg font-bold transition-all text-sm flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Kami
            </WhatsappCTA>
          </div>
        </nav>

        <div className="bg-slate-50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-slate-500">
            <Link href="/ms" className="hover:text-accent transition-colors">Laman Utama</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700 font-medium">Alat Ganti Enjin Marin Yanmar Malaysia</span>
          </div>
        </div>

        <header className="bg-white pt-16 pb-20 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-6">
                <MapPin className="w-4 h-4 text-accent" /> Malaysia — Semenanjung, Sabah & Sarawak
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                Alat Ganti Enjin Marin Yanmar<br />
                <span className="text-accent">Sukar Dicari. Pantas Diperoleh.</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Penyuntik, pendesak, penukar haba, set gasket dan kit overhaul untuk enjin Yanmar siri 1GM, 2GM, 3GM, 3JH, 4JH dan 6LY. Apabila stokis tempatan kehabisan stok, kami mencarinya.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/ms/#request"
                  className="px-8 py-4 text-lg font-bold rounded-xl text-white bg-accent hover:bg-accent-light shadow-xl shadow-accent/20 transition-all text-center flex items-center justify-center gap-2"
                >
                  Minta Alat Ganti Yanmar <ChevronRight className="w-5 h-5" />
                </Link>
                <WhatsappCTA
                  label="ms-yanmar-hero"
                  message="Hi, enjin Yanmar saya rosak. Model enjin: ___ Alat ganti diperlukan: ___ Lokasi kapal: ___"
                  className="px-8 py-4 text-lg font-bold rounded-xl text-white bg-green-500 hover:bg-green-600 transition-all text-center flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" /> WhatsApp Sekarang
                </WhatsappCTA>
              </div>
            </div>
          </div>
        </header>

        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-sm font-black text-accent uppercase tracking-[0.3em] mb-4">Siri Enjin</h2>
              <h3 className="text-3xl font-bold text-slate-900">Model Yanmar Yang Kami Liputi</h3>
              <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Daripada alat bantu bot layar satu-silinder kepada diesel komersial berkuasa tinggi — jika ia membawa lencana Yanmar, kami boleh mendapatkan alat gantinya.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {MODELS.map(m => (
                <div key={m.series} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-accent/40 hover:shadow-md transition-all">
                  <p className="text-xs font-black text-accent uppercase tracking-widest mb-1">{m.hp}</p>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Yanmar {m.series}</h4>
                  <p className="text-sm text-slate-500">{m.use}</p>
                </div>
              ))}
              <div className="bg-accent rounded-2xl p-6 text-white flex flex-col justify-between">
                <p className="text-sm font-semibold mb-3">Tidak nampak model anda?</p>
                <WhatsappCTA
                  label="ms-yanmar-model-not-listed"
                  message="Hi, saya perlukan alat ganti untuk enjin Yanmar saya. Model: ___ Alat ganti diperlukan: ___"
                  className="inline-flex items-center gap-2 bg-white text-accent px-4 py-2.5 rounded-xl font-bold text-sm transition-all hover:bg-accent/10"
                >
                  <MessageCircle className="w-4 h-4" /> Tanya Kami
                </WhatsappCTA>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-sm font-black text-accent uppercase tracking-[0.3em] mb-4">Katalog Alat Ganti</h2>
              <h3 className="text-3xl font-bold text-slate-900">Apa Yang Kami Sumberkan untuk Yanmar Marin</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PARTS.map(cat => (
                <div key={cat.category} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
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

        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/80 text-accent/40 text-xs font-bold uppercase tracking-widest mb-6">
                  <MapPin className="w-4 h-4" /> Liputan Malaysia Timur
                </div>
                <h2 className="text-3xl font-bold mb-6">Menyajikan Armada Nelayan Sabah & Sarawak</h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  Pengendali bot di Kota Kinabalu, Sandakan, Tawau, Miri, Sibu, dan Kuching menghadapi masalah sebenar: pengedar berpusat di Semenanjung jarang menyimpan alat ganti untuk enjin Yanmar lama, dan kelewatan penghantaran menyebabkan kehilangan hari hasil tangkapan.
                </p>
                <p className="text-slate-300 leading-relaxed mb-8">
                  Kami menganggap Malaysia Timur sebagai pasaran keutamaan. Alat ganti yang disahkan dalam stok dihantar dalam 24 jam. Alat ganti sumber Jepun tiba dalam 5–10 hari bekerja. Kami berkomunikasi dalam Bahasa Melayu, Inggeris, dan Mandarin.
                </p>
                <WhatsappCTA
                  label="ms-yanmar-east-malaysia"
                  message="Hi, saya di Sabah/Sarawak dan perlukan alat ganti marin Yanmar segera. Enjin: ___ Alat ganti: ___ Lokasi: ___"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3.5 rounded-xl font-bold transition-all"
                >
                  <MessageCircle className="w-5 h-5" /> WhatsApp untuk Pertanyaan Malaysia Timur
                </WhatsappCTA>
              </div>
              <div className="mt-12 lg:mt-0 grid grid-cols-2 gap-4">
                {[
                  { city: 'Kota Kinabalu', type: 'Armada nelayan & pengendali selam' },
                  { city: 'Sandakan', type: 'Perikanan komersial, akuakultur' },
                  { city: 'Tawau', type: 'Enjin tongkang minyak sawit' },
                  { city: 'Miri', type: 'Kapal sokongan luar pesisir' },
                  { city: 'Sibu', type: 'Feri sungai & bot panjang' },
                  { city: 'Kuching', type: 'Bot rekreasi & bot kerja' },
                ].map(loc => (
                  <div key={loc.city} className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                    <p className="font-bold text-white text-sm mb-1">{loc.city}</p>
                    <p className="text-slate-400 text-xs">{loc.type}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">Kenapa Pengendali Bot Pilih SourceSage</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <AlertTriangle className="w-6 h-6 text-amber-500" />,
                  title: 'Keutamaan Mesin Rosak',
                  body: 'Kapal tidak beroperasi bermakna kehilangan pendapatan. Kami mengutamakan kes mesin rosak dan memberi anda garis masa yang disahkan dalam beberapa jam, bukan hari.',
                },
                {
                  icon: <ShieldCheck className="w-6 h-6 text-accent" />,
                  title: 'OEM & Aftermarket Berkualiti',
                  body: 'Kami sumber alat ganti Yanmar OEM tulen dan alternatif aftermarket berkualiti yang dilabel dengan jelas. Tiada kejutan pasaran kelabu.',
                },
                {
                  icon: <MapPin className="w-6 h-6 text-green-500" />,
                  title: 'Penghantaran Seluruh Malaysia',
                  body: 'Semenanjung dan Malaysia Timur dilindungi. Kurier berpenjejak dengan kemas kini WhatsApp di setiap peringkat supaya anda tahu bila alat ganti tiba.',
                },
              ].map(card => (
                <div key={card.title} className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                  <div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-5 shadow-sm">
                    {card.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-3">{card.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50 border-t border-slate-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">Soalan Lazim</h2>
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

        <section className="py-20 bg-accent text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Perlukan Alat Ganti Yanmar Sekarang?</h2>
            <p className="text-blue-100 text-lg mb-8">Beritahu kami siri enjin dan alat ganti yang anda perlukan. Kami akan kembali dengan ketersediaan dan harga — biasanya dalam beberapa jam.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ms/#request"
                className="px-8 py-4 text-lg font-bold rounded-xl bg-white text-accent hover:bg-accent/10 transition-all text-center"
              >
                Hantar Permintaan Alat Ganti
              </Link>
              <WhatsappCTA
                label="ms-yanmar-final-cta"
                message="Hi, saya perlukan alat ganti enjin marin Yanmar segera. Model enjin: ___ Alat ganti diperlukan: ___ Lokasi kapal: ___"
                className="px-8 py-4 text-lg font-bold rounded-xl bg-green-500 hover:bg-green-600 text-white transition-all flex items-center justify-center gap-2"
              >
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
                <span className="font-black text-xl text-accent">.ai</span>
                <p className="text-sm text-slate-500 mt-1">Pakar Perolehan Alat Ganti di Malaysia</p>
              </div>
              <div className="flex gap-6 text-sm font-semibold">
                <a href="mailto:info@sourcesage.ai" className="hover:text-accent flex items-center gap-2 transition-colors">
                  <Mail className="w-4 h-4" /> info@sourcesage.ai
                </a>
                <WhatsappCTA
                  label="ms-yanmar-footer"
                  message="Hi, saya perlukan alat ganti enjin marin Yanmar. Model enjin: ___ Alat ganti diperlukan: ___"
                  className="hover:text-green-600 flex items-center gap-2 transition-colors"
                >
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
