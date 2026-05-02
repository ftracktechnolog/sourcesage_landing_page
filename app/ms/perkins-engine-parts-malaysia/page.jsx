import Link from 'next/link'
import { MessageCircle, Mail, CheckCircle, Wrench, AlertTriangle, MapPin, ChevronRight, ShieldCheck } from 'lucide-react'
import WhatsappCTA from '../../../components/WhatsappCTA'
import LangSwitcher from '../../../components/LangSwitcher'

export const metadata = {
  title: 'Alat Ganti Enjin Perkins Malaysia — Perolehan Siri 1104, 1000 | SourceSage',
  description: 'Alat ganti enjin Perkins Malaysia. Kepala silinder, pam bahan api, alat ganti sistem penyejukan untuk Perkins 1104 & siri lain. Model dihentikan & semasa disokong.',
  alternates: { canonical: '/ms/perkins-engine-parts-malaysia/', languages: { 'en': 'https://sourcesage.ai/perkins-engine-parts-malaysia/', 'ms': 'https://sourcesage.ai/ms/perkins-engine-parts-malaysia/', 'zh-Hans': 'https://sourcesage.ai/zh/perkins-engine-parts-malaysia/', 'x-default': 'https://sourcesage.ai/perkins-engine-parts-malaysia/' } },
  openGraph: {
    title: 'Alat Ganti Enjin Perkins Malaysia — Perolehan Siri 1104, 1000 | SourceSage',
    description: 'Alat ganti enjin Perkins Malaysia. Kepala silinder, pam bahan api, alat ganti sistem penyejukan untuk Perkins 1104 & siri lain.',
    url: 'https://sourcesage.ai/ms/perkins-engine-parts-malaysia/',
    siteName: 'SourceSage.ai', type: 'website', locale: 'ms_MY',
    images: [{ url: 'https://sourcesage.ai/images/og-home.png', width: 1200, height: 630, alt: 'Alat Ganti Enjin Perkins Malaysia — SourceSage' }],
  },
  twitter: { card: 'summary_large_image', title: 'Alat Ganti Enjin Perkins Malaysia — Perolehan Siri 1104, 1000 | SourceSage', description: 'Alat ganti enjin Perkins Malaysia. Kepala silinder, pam bahan api, alat ganti sistem penyejukan.', images: ['https://sourcesage.ai/images/og-home.png'] },
}

const ENGINES = [
  { model: 'Perkins A3.152 / AD3.152', displacement: '2.5L 3-sil', note: 'Klasik MF135, MF148, MF165 — digunakan secara meluas di estet Malaysia lama' },
  { model: 'Perkins A4.248', displacement: '4.1L 4-sil', note: 'MF240, MF350, MF375 — Perkins paling biasa di Malaysia hari ini' },
  { model: 'Perkins AD4.203', displacement: '3.3L 4-sil Turbo', note: 'MF385, MF390 — aplikasi ladang dan tugas berat' },
  { model: 'Perkins 1004-4 / 1004-4T', displacement: '4.4L 4-sil', note: 'Siri MF6100, JCB 3CX/4CX, pelbagai peralatan pembinaan' },
  { model: 'Perkins 1006-6', displacement: '6.6L 6-sil', note: 'Traktor MF dan Landini besar, aplikasi industri' },
  { model: 'Perkins 403 / 404 Series', displacement: '1.5–2.2L 3/4-sil', note: 'Peralatan padat: JCB mini, Caterpillar skid steer, penjana' },
]

const MACHINES = [
  { brand: 'Massey Ferguson', models: 'MF135, MF165, MF240, MF350, MF375, MF385, MF390, MF6110–6160' },
  { brand: 'JCB', models: '3CX, 4CX backhoe loader; 525, 535 telehandler; 8025–8085 jengkaut mini' },
  { brand: 'Landini', models: 'Siri Globus, Mistral, Powerfarm — kongsi enjin A4.248 dan 1004' },
  { brand: 'Caterpillar', models: 'Skid steer dan track loader padat terpilih (siri 403/404)' },
  { brand: 'Manitou', models: 'Telehandler MT523, MT625 (siri 1004)' },
  { brand: 'Industri / Penjana', models: 'Penjana FG Wilson, Olympian, Newage — siri 403 hingga 1006' },
]

const PARTS = [
  {
    category: 'Baik Pulih Enjin',
    items: ['Kit overhaul / inframe penuh', 'Kepala silinder (kosong atau dipasang)', 'Gasket kepala & set gasket penuh', 'Kit omboh & pelapik', 'Set galas utama & hujung besar'],
  },
  {
    category: 'Sistem Bahan Api',
    items: ['Muncung penyuntik (CAV / Lucas / Delphi)', 'Pam suntikan (CAV DPA / DPS)', 'Pam angkat & penapis bahan api', 'Salur bahan api & kelengkapan banjo', 'Pendikit & pautan pengawal'],
  },
  {
    category: 'Sistem Penyejukan',
    items: ['Pam air lengkap', 'Termostat & perumahan', 'Hos radiator atas & bawah', 'Tali sawat kipas & penegang', 'Teras radiator (perkhidmatan semula)'],
  },
  {
    category: 'Pelinciran',
    items: ['Pam minyak lengkap', 'Injap pelega tekanan minyak', 'Penapis minyak (jenis spin-on)', 'Gasket bah & gasket penutup roker', 'Seal minyak hadapan & belakang crankshaft'],
  },
  {
    category: 'TRAIN Injap',
    items: ['Injap masuk & ekzos', 'Spring injap & collet', 'Camshaft & pengikut', 'Roker arm & pemasangan shaft', 'Gear pemasaan & seal penutup'],
  },
  {
    category: 'Elektrik & Penghidup',
    items: ['Motor penghidup (12V / 24V)', 'Alternator & regulator', 'Palam pijar (model suntikan tak langsung)', 'Penghantar suhu & tekanan minyak', 'Solenoid henti (pam CAV)'],
  },
]

const FAQS = [
  {
    q: 'Enjin Perkins yang mana dalam traktor Massey Ferguson saya?',
    a: 'Yang paling biasa: MF240/350/375 menggunakan A4.248 (4-silinder tanpa turbo); MF385/390 menggunakan AD4.203 (turbo). MF135/165 lama menggunakan A3.152/AD3.152 (3-silinder). Sahkan dengan membaca plat siri enjin pada blok — ia akan menunjukkan kod keluarga enjin.',
  },
  {
    q: 'Adakah alat ganti Perkins untuk model lama (A4.248, AD3.152) masih ada di Malaysia?',
    a: 'Ya, walaupun ketersediaan melalui pengedar MF menipis untuk mesin berusia lebih 15 tahun. A4.248 mempunyai pangkalan pemasangan global yang besar — alat ganti boleh didapati melalui pembekal khusus melalui pengeluar serasi OEM dan rangkaian aftermarket Perkins, selalunya pada harga lebih rendah daripada harga pengedar.',
  },
  {
    q: 'Apakah perbezaan antara pam suntikan CAV DPA dan DPS?',
    a: 'Kedua-duanya adalah pam pengedar berputar buatan CAV (kini Delphi). DPA adalah rekaan lama pada enjin A3.152 dan A4.248; DPS adalah rekaan kemudian yang lebih padat pada siri 1004. Ia tidak boleh ditukar ganti. Sentiasa kenal pasti dengan nombor siri pam yang dicop pada badan pam.',
  },
  {
    q: 'Bolehkah anda mendapatkan alat ganti Perkins untuk mesin bukan MF (JCB, penjana)?',
    a: 'Ya. Alat ganti enjin Perkins adalah khusus enjin, bukan khusus mesin. Kit overhaul 1004-4 untuk JCB 3CX adalah sama seperti untuk MF6110. Kami sumber mengikut model enjin dan nombor siri tanpa mengira mesin hos.',
  },
  {
    q: 'Bagaimana saya mengenal pasti model enjin Perkins saya?',
    a: 'Plat siri enjin dicop pada blok, biasanya di sebelah kiri berhampiran penapis minyak. Ia menunjukkan keluarga enjin (contohnya A4.248), nombor senarai binaan, dan nombor siri. Nombor senarai binaan adalah penting untuk mengenal pasti spesifikasi yang tepat — terutamanya untuk sistem bahan api dan varian pelepasan.',
  },
]

const jsonLd = {
  service: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'inLanguage': 'ms',
    name: 'Perolehan Alat Ganti Enjin Perkins Malaysia',
    serviceType: 'Bekalan Alat Ganti Enjin Diesel',
    description: 'Perolehan alat ganti enjin diesel Perkins di Malaysia — A3.152, A4.248, AD4.203, 1004 dan siri 403 untuk Massey Ferguson, JCB dan peralatan berkuasa Perkins lain.',
    provider: { '@type': 'Organization', name: 'SourceSage.ai', url: 'https://sourcesage.ai' },
    areaServed: { '@type': 'Country', name: 'Malaysia' },
    offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', priceCurrency: 'MYR' },
  },
  faq: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'inLanguage': 'ms',
    mainEntity: FAQS.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  },
  breadcrumb: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'inLanguage': 'ms',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Laman Utama', item: 'https://sourcesage.ai/ms/' },
      { '@type': 'ListItem', position: 2, name: 'Alat Ganti Enjin Perkins Malaysia', item: 'https://sourcesage.ai/ms/perkins-engine-parts-malaysia' },
    ],
  },
}

export default function MsPerkinsPartsPage() {
  const partsListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'inLanguage': 'ms',
    name: 'Kategori Alat Ganti Perkins',
    description: 'Alat ganti enjin diesel Perkins yang tersedia mengikut sistem — baik pulih enjin, bahan api, penyejukan, pelinciran, train injap, elektrik & penghidup.',
    numberOfItems: PARTS.length,
    itemListElement: PARTS.map((cat, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Product',
        name: `Perkins ${cat.category}`,
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
    <div className="min-h-screen font-sans text-slate-900 antialiased">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(partsListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/ms" className="flex items-center">
            <span className="font-heading font-bold text-xl text-accent tracking-tight">SourceSage</span>
            <span className="font-bold text-xl text-green-600">.ai</span>
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
            label="ms-perkins-navbar"
            message="Hi, saya perlukan bantuan mendapatkan alat ganti enjin Perkins. Model enjin: ___ Mesin: ___ Alat ganti diperlukan: ___"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg font-bold transition-all text-sm flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp Kami
          </WhatsappCTA>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav className="flex items-center gap-2 text-xs text-slate-400 font-medium">
          <Link href="/ms" className="hover:text-accent transition-colors">Laman Utama</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-600">Alat Ganti Enjin Perkins Malaysia</span>
        </nav>
      </div>

      <main>
        <section className="bg-gradient-to-br from-amber-900 via-amber-800 to-orange-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-block bg-amber-400 text-amber-900 text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
                Pakar Alat Ganti Enjin Perkins — Malaysia
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
                Alat Ganti Enjin Diesel Perkins<br />di Malaysia
              </h1>
              <p className="text-lg text-amber-100 mb-8 leading-relaxed">
                Perolehan alat ganti enjin Perkins di Malaysia — A3.152, A4.248, AD4.203, 1004 dan siri 403. Untuk traktor Massey Ferguson, peralatan JCB, penjana, dan semua mesin berkuasa Perkins. Tulen dan serasi OEM. Respons pantas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsappCTA
                  label="ms-perkins-hero-primary"
                  message="Hi, saya perlukan bantuan mendapatkan alat ganti enjin Perkins. Model enjin: ___ Mesin: ___ Alat ganti diperlukan: ___"
                  className="bg-amber-400 hover:bg-amber-300 text-amber-900 px-8 py-4 rounded-xl font-black text-lg transition-all flex items-center gap-3 justify-center"
                >
                  <MessageCircle className="w-6 h-6" /> Minta Alat Ganti
                </WhatsappCTA>
                <a
                  href="#engines"
                  className="border-2 border-amber-300 text-amber-100 hover:bg-amber-800 px-8 py-4 rounded-xl font-bold text-lg transition-all text-center"
                >
                  Lihat Siri Enjin
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white border-b border-slate-100 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { label: 'Masa respons', value: '< 24 jam' },
                { label: 'Siri enjin', value: 'A3 · A4 · AD4 · 1004 · 403' },
                { label: 'Liputan', value: 'Semenanjung + Timur MY' },
                { label: 'Sumber', value: 'Tulen & serasi OEM' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <div className="text-xl font-black text-amber-700">{value}</div>
                  <div className="text-xs text-slate-500 font-semibold mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="engines" className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-2 text-xs font-bold uppercase tracking-widest text-amber-700">Siri Enjin</div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Enjin Perkins Kami Dapatkan Alat Ganti</h2>
            <p className="text-slate-500 mb-10 max-w-2xl">
              Daripada A3.152 klasik dalam traktor Massey Ferguson vintaj kepada siri 1004 moden dalam JCB dan peralatan pembinaan — kami meliputi rangkaian Perkins penuh yang biasa di Malaysia.
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

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-2 text-xs font-bold uppercase tracking-widest text-amber-700">Mesin Hos</div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Perkins Kuasai Lebih Dari Massey Ferguson</h2>
            <p className="text-slate-500 mb-10 max-w-2xl">
              Perkins adalah salah satu pembekal enjin diesel OEM terbesar dunia. Sebaik anda tahu model enjin dan nombor siri anda, kami boleh mendapatkan alat ganti tanpa mengira mesin di mana ia dipasang.
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

        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-2 text-xs font-bold uppercase tracking-widest text-amber-700">Katalog Alat Ganti</div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Apa Yang Kami Sumberkan</h2>
            <p className="text-slate-500 mb-10 max-w-2xl">
              Baik pulih enjin penuh hingga ke barang guna individu — muncung penyuntik, kit pam CAV, komponen penyejukan dan alat ganti elektrik merentas semua siri Perkins.
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

        <section className="py-12 bg-amber-50 border-y border-amber-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">CAV / Lucas / Delphi — Pam Sama, Nama Berbeza</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    Pam suntikan berputar pada kebanyakan enjin A-series dan 1004 Perkins dibuat oleh CAV — yang menjadi Lucas CAV, kemudian Delphi. Pam adalah unit yang sama merentas ketiga-tiga jenama; hanya dokumentasi perkhidmatan yang berubah. Apabila memesan kit pembaikan pam, set kepala dan rotor, atau solenoid, mana-mana rujukan jenama ini akan menemui alat ganti yang betul.
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Sentiasa kenal pasti pam dengan nombor sirinya sendiri (dicop pada badan pam) sebagai tambahan kepada model enjin — reka bentuk DPA dan DPS mempunyai dalaman yang berbeza dan tidak boleh ditukar ganti.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-amber-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-2 text-xs font-bold uppercase tracking-widest text-amber-300">Sabah &amp; Sarawak</div>
            <h2 className="text-3xl font-extrabold mb-4">Liputan Malaysia Timur</h2>
            <p className="text-amber-100 mb-8 max-w-2xl">
              Traktor Massey Ferguson dan peralatan JCB berkuasa Perkins adalah biasa di estet sawit Sabah dan Sarawak. Kami menghantar ke semua bandar utama Malaysia Timur — rangkaian perolehan sama, masa respons sama.
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
              label="ms-perkins-east-malaysia"
              message="Hi, saya perlukan alat ganti enjin Perkins — saya di Malaysia Timur (Sabah/Sarawak). Enjin: ___ Mesin: ___ Alat ganti diperlukan: ___"
              className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-amber-900 px-8 py-4 rounded-xl font-black text-base transition-all"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp untuk Pertanyaan Malaysia Timur
            </WhatsappCTA>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-2 text-xs font-bold uppercase tracking-widest text-amber-700">Kenapa Kami</div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-10">Kenapa Pengendali Pilih SourceSage untuk Alat Ganti Perkins</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <ShieldCheck className="w-6 h-6 text-amber-600" />,
                  title: 'Pengetahuan Katalog Perkins',
                  body: 'A4.248 dan 1004 berkongsi beberapa nombor alat ganti tetapi berbeza dalam dimensi kritikal. Kami merujuk silang nombor senarai binaan — bukan hanya kod keluarga enjin — untuk memastikan anda mendapat alat ganti yang sesuai dengan varian enjin khusus anda.',
                },
                {
                  icon: <Wrench className="w-6 h-6 text-amber-600" />,
                  title: 'Kepakaran Suntikan CAV / Delphi',
                  body: 'Kit pembaikan pam suntikan, set kepala dan rotor, dan solenoid adalah pertanyaan Perkins paling biasa kami. Kami menyimpan atau boleh mendapatkan komponen untuk pam DPA dan DPS dengan cepat merentas semua aplikasi A-series dan 1004-series biasa.',
                },
                {
                  icon: <MessageCircle className="w-6 h-6 text-amber-600" />,
                  title: 'Perolehan Bebas Mesin',
                  body: 'Sama ada enjin Perkins anda dalam traktor MF, jengkaut JCB, set penjana, atau pengendali Manitou — enjin tetaplah enjin. Kami sumber mengikut nombor siri enjin, bukan jenama mesin.',
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

        <section className="py-16 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-2 text-xs font-bold uppercase tracking-widest text-amber-700">FAQ</div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-10">Soalan Lazim</h2>
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

        <section className="py-10 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/ms/massey-ferguson-parts-malaysia"
              className="flex items-center justify-between bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:bg-slate-100 transition-colors group"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-1">Halaman Berkaitan</p>
                <p className="text-slate-800 font-bold text-lg group-hover:text-amber-700 transition-colors">
                  Lihat Alat Ganti Traktor Massey Ferguson →
                </p>
              </div>
              <span className="bg-amber-600 group-hover:bg-amber-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all whitespace-nowrap ml-4">
                Lihat alat ganti
              </span>
            </Link>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-amber-900 to-orange-900 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Perlukan Alat Ganti Enjin Perkins?</h2>
            <p className="text-amber-100 text-lg mb-8">
              Beritahu kami model enjin, nombor siri, dan apa yang anda perlukan. Kami akan kembali dengan ketersediaan dan harga — biasanya dalam 24 jam.
            </p>
            <WhatsappCTA
              label="ms-perkins-final-cta"
              message="Hi, saya perlukan bantuan mendapatkan alat ganti enjin Perkins. Model enjin: ___ Siri: ___ Mesin: ___ Alat ganti diperlukan: ___"
              className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-amber-900 px-10 py-5 rounded-2xl font-black text-xl transition-all"
            >
              <MessageCircle className="w-7 h-7" /> WhatsApp Kami Sekarang
            </WhatsappCTA>
            <p className="text-amber-300 text-sm mt-6">Atau e-mel: info@sourcesage.ai</p>
          </div>
        </section>
      </main>

      <footer className="bg-white py-12 text-slate-500 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <span className="font-heading font-black text-xl tracking-tighter text-accent">SourceSage</span>
              <span className="font-black text-xl text-green-600">.ai</span>
              <p className="text-sm text-slate-500 mt-1">Pakar Perolehan Alat Ganti di Malaysia</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Halaman Alat Ganti</p>
              <ul className="space-y-2 text-sm font-semibold">
                <li><Link href="/ms/kubota-tractor-parts-malaysia" className="hover:text-accent transition-colors">Alat Ganti Kubota</Link></li>
                <li><Link href="/ms/yanmar-marine-parts-malaysia" className="hover:text-accent transition-colors">Alat Ganti Marin Yanmar</Link></li>
                <li><Link href="/ms/massey-ferguson-parts-malaysia" className="hover:text-accent transition-colors">Alat Ganti Massey Ferguson</Link></li>
                <li><Link href="/ms/zoomlion-parts-malaysia" className="hover:text-accent transition-colors">Alat Ganti Zoomlion</Link></li>
                <li><Link href="/ms/john-deere-parts-malaysia" className="hover:text-accent transition-colors">Alat Ganti John Deere</Link></li>
                <li><Link href="/ms/perkins-engine-parts-malaysia" className="hover:text-accent transition-colors">Alat Ganti Enjin Perkins</Link></li>
              </ul>
            </div>
            <div className="flex flex-col gap-3 text-sm font-semibold">
              <a href="mailto:info@sourcesage.ai" className="hover:text-accent flex items-center gap-2 transition-colors">
                <Mail className="w-4 h-4" /> info@sourcesage.ai
              </a>
              <WhatsappCTA label="ms-perkins-footer" message="Hi, saya perlukan bantuan mendapatkan alat ganti. Jenama: ___ Model: ___ Alat ganti diperlukan: ___" className="hover:text-green-600 flex items-center gap-2 transition-colors">
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
  )
}
