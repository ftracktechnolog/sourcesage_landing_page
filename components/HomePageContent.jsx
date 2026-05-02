import Link from 'next/link'
import {
  MessageCircle, Wrench, Clock, AlertTriangle,
  ChevronRight, CheckCircle, MapPin, Mail,
  ShieldCheck, Truck, BookOpen
} from 'lucide-react'
import WhatsappCTA from './WhatsappCTA'
import RequestForm from './RequestForm'
import LangSwitcher from './LangSwitcher'
import ScrollReveal from './ScrollReveal'
import { getAllPosts } from '../lib/blog'
import LangSetter from './LangSetter'

const Navbar = ({ t, lang }) => {
  const homeUrl = lang === 'ms' ? '/ms' : lang === 'zh-Hans' ? '/zh' : '/'
  const blogUrl = lang === 'ms' ? '/ms/blog' : lang === 'zh-Hans' ? '/zh/blog' : '/blog'
  const anchorPrefix = lang === 'ms' ? '/ms' : lang === 'zh-Hans' ? '/zh' : ''
  return (
  <nav className="bg-bg/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <Link href={homeUrl} className="flex items-center">
        <span className="font-bold text-xl text-slate-900 tracking-tight">SourceSage</span>
        <span className="text-accent font-bold text-xl">.ai</span>
      </Link>
      <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
        <a href={`${anchorPrefix}/#brands`} className="hover:text-accent transition-colors">{t.nav.brands}</a>
        <a href={`${anchorPrefix}/#marine`} className="hover:text-accent transition-colors">{t.nav.marine}</a>
        <a href={`${anchorPrefix}/#how-it-works`} className="hover:text-accent transition-colors">{t.nav.howItWorks}</a>
        <a href={lang === 'ms' ? '/ms/about' : lang === 'zh-Hans' ? '/zh/about' : '/about'} className="hover:text-accent transition-colors">{t.nav.about || 'About'}</a>
        <a href={blogUrl} className="hover:text-accent transition-colors">{t.nav.blog}</a>
        <a href={`${anchorPrefix}/#request`} className="hover:text-accent transition-colors">{t.nav.requestPart}</a>
      </div>
      <div className="flex items-center gap-2">
        <LangSwitcher currentLang={lang} />
        <WhatsappCTA
          label="navbar"
          message="Hi, I need help sourcing a spare part. Brand: ___ Model: ___ Part needed: ___"
          className="bg-green-500 hover:bg-green-600 text-white px-3 py-2.5 sm:px-4 rounded-lg font-bold transition-all text-sm flex items-center gap-2"
        >
          <MessageCircle className="w-4 h-4" /> <span className="hidden sm:inline">{t.nav.whatsapp}</span>
        </WhatsappCTA>
        <a href="#request" className="bg-accent hover:bg-accent-light text-white px-5 py-2.5 rounded-lg font-bold transition-all text-sm hidden sm:block">
          {t.nav.requestPart}
        </a>
      </div>
    </div>
  </nav>
  )
}

const Hero = ({ t }) => (
  <header className="bg-bg pt-20 pb-28 overflow-hidden border-b border-border">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
        <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-7 lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-6">
            <MapPin className="w-4 h-4 text-accent" />
            <span>{t.hero.badge}</span>
          </div>
          <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl lg:leading-[1.1]">
            {t.hero.h1Line1}{' '}
            <span className="text-accent">{t.hero.h1Line2}</span>
          </h1>
          <div className="w-16 h-1 bg-accent mt-6 mb-6 sm:mx-auto lg:mx-0" />
          <p className="text-lg text-muted md:text-xl leading-relaxed">
            {t.hero.body}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#request"
              className="px-8 py-4 text-lg font-bold rounded-xl text-white bg-accent hover:bg-accent-light transition-all text-center flex items-center justify-center gap-2"
            >
              {t.hero.cta1} <ChevronRight className="w-5 h-5" />
            </a>
            <WhatsappCTA
              label="hero_main"
              message="Hi, I need a spare part. Brand: ___ Model: ___ Part needed: ___"
              className="px-8 py-4 text-lg font-bold rounded-xl text-white bg-green-500 hover:bg-green-600 transition-all text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" /> {t.hero.cta2}
            </WhatsappCTA>
          </div>
          <p className="mt-6 text-sm text-muted font-medium">
            {t.hero.brandsFootnote}
          </p>
        </div>

        <div className="mt-16 lg:mt-0 lg:col-span-5">
          <div className="bg-white rounded-2xl p-8 border border-border shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-muted mb-5">{t.hero.brandsLabel}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {(t.hero.brands || ['Kubota', 'Yanmar', 'Massey Ferguson', 'John Deere', 'Zoomlion', 'Perkins', 'Isuzu', 'Hino']).map(brand => (
                <span key={brand} className="bg-white border border-border px-3 py-1.5 rounded-lg text-sm font-semibold text-slate-700 shadow-sm">
                  {brand}
                </span>
              ))}
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <p className="text-xs font-bold text-orange-700 uppercase tracking-wider mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" /> {t.hero.machineBadge}
              </p>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                {t.hero.machineBody}
              </p>
              <WhatsappCTA
                label="hero_machine_down"
                message="Hi, my machine is DOWN and I need urgent help! Brand: ___ Model: ___ Part needed: ___"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg font-bold text-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" /> {t.hero.machineCta}
              </WhatsappCTA>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
)

const targetIcons = [
  <Wrench key="w" className="w-6 h-6" />,
  <MapPin key="m" className="w-6 h-6" />,
  <Clock key="c" className="w-6 h-6" />,
  <Truck key="t" className="w-6 h-6" />,
]

const TargetMarket = ({ t }) => (
  <section className="py-20 bg-accent text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">{t.targetMarket.heading}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {t.targetMarket.items.map((text, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="w-10 h-10 bg-accent-light rounded-xl flex items-center justify-center shrink-0">
              {targetIcons[i]}
            </div>
            <p className="text-accent/30 font-medium leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const BRAND_LINKS = {
  'Kubota': '/kubota-tractor-parts-malaysia',
  'Yanmar': '/yanmar-marine-parts-malaysia',
  'Massey Ferguson': '/massey-ferguson-parts-malaysia',
  'Zoomlion': '/zoomlion-parts-malaysia',
  'John Deere': '/john-deere-parts-malaysia',
}

const BrandGrid = ({ t }) => (
  <section id="brands" className="py-24 bg-bg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-sm font-black text-accent uppercase tracking-[0.3em] mb-4">{t.brandGrid.label}</h2>
        <h3 className="text-3xl font-bold text-slate-900">{t.brandGrid.heading}</h3>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">{t.brandGrid.body}</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {t.brandGrid.brands.map((brand, i) => {
          const href = brand.slug
          const inner = (
            <>
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-lg font-bold text-slate-900">{brand.name}</h4>
                <span className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded font-medium">{brand.origin}</span>
              </div>
              <p className="text-sm text-slate-600">{brand.note}</p>
              {href && <p className="text-xs font-bold text-accent mt-3">{t.brandGrid.viewParts}</p>}
            </>
          )
          return href ? (
            <Link key={i} href={href} className="border border-border rounded-2xl p-6 hover:border-accent/40 hover:shadow-md transition-all block">
              {inner}
            </Link>
          ) : (
            <div key={i} className="border border-border rounded-2xl p-6 hover:border-accent/40 hover:shadow-md transition-all">
              {inner}
            </div>
          )
        })}
      </div>
      <div className="mt-10 bg-accent/10 border border-accent/20 rounded-2xl p-6 text-center">
        <p className="text-slate-700 font-medium">
          <strong className="text-accent">{t.brandGrid.zoomlionNote}</strong>{' '}
          {t.brandGrid.zoomlionBody}
        </p>
      </div>
    </div>
  </section>
)

const MarineSection = ({ t }) => (
  <section id="marine" className="py-24 bg-bg-alt border-y border-border">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
        <div>
          <h2 className="text-sm font-black text-accent uppercase tracking-[0.3em] mb-4">{t.marine.label}</h2>
          <h3 className="text-3xl font-bold text-slate-900 mb-6">{t.marine.heading}</h3>
          <p className="text-slate-600 mb-8 leading-relaxed">{t.marine.body}</p>
          <h4 className="font-bold text-slate-700 uppercase text-xs tracking-widest mb-4">{t.marine.brandsHeading}</h4>
          <ul className="space-y-3 mb-8">
            {t.marine.brands.map((b, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle className="w-5 h-5 text-accent shrink-0" /> {b}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
            <h4 className="font-bold text-slate-700 uppercase text-xs tracking-widest mb-6">{t.marine.partsHeading}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {t.marine.parts.map((part, i) => (
                <div key={i} className="flex items-center gap-3 bg-white border-border rounded-xl p-4 text-sm font-medium text-slate-700">
                  <Wrench className="w-4 h-4 text-accent shrink-0" /> {part}
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <WhatsappCTA
                label="marine_section"
                message="Hi, I need a marine engine part. Engine brand: ___ Model: ___ Part needed: ___"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3.5 rounded-xl font-bold transition-all"
              >
                <MessageCircle className="w-5 h-5" /> {t.marine.cta}
              </WhatsappCTA>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const ProblemSection = ({ t }) => (
  <section className="py-24 bg-slate-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.problem.heading}</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">{t.problem.body}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
          <h3 className="font-bold text-lg mb-5 text-white flex items-center gap-3">
            <span className="w-8 h-8 bg-green-700 rounded-lg flex items-center justify-center">🌾</span>
            {t.problem.agriculturalHeading}
          </h3>
          <ul className="space-y-3 text-slate-300">
            {t.problem.agriculturalItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
          <h3 className="font-bold text-lg mb-5 text-white flex items-center gap-3">
            <span className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center">⚓</span>
            {t.problem.marineHeading}
          </h3>
          <ul className="space-y-3 text-slate-300">
            {t.problem.marineItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-center mt-12">
        <p className="text-white font-bold text-lg mb-6">{t.problem.priority}</p>
        <WhatsappCTA
          label="problem_section"
          message="Hi, I need urgent help finding a hard-to-source spare part. Brand: ___ Model: ___ Part needed: ___"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all"
        >
          <MessageCircle className="w-5 h-5" /> {t.problem.cta}
        </WhatsappCTA>
      </div>
    </div>
  </section>
)

const HowItWorks = ({ t }) => (
  <section id="how-it-works" className="py-24 bg-bg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-sm font-black text-accent uppercase tracking-[0.3em] mb-4">{t.howItWorks.label}</h2>
        <h3 className="text-3xl font-bold text-slate-900">{t.howItWorks.heading}</h3>
        <p className="mt-4 text-muted">{t.howItWorks.body}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {t.howItWorks.steps.map((step, i) => (
          <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow text-center">
            <div className="w-14 h-14 bg-accent text-white rounded-2xl flex items-center justify-center text-lg font-black mx-auto mb-4">
              {step.number}
            </div>
            <h4 className="font-bold text-slate-900 mb-3 text-sm font-heading">{step.title}</h4>
            <ul className="text-xs text-muted space-y-1 text-left">
              {step.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2">
                  <span className="text-accent/60 mt-0.5">·</span> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const PartsTypes = ({ t }) => (
  <section className="py-24 bg-bg-alt border-y border-border">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-sm font-black text-accent uppercase tracking-[0.3em] mb-4">{t.parts.label}</h2>
        <h3 className="text-3xl font-bold text-slate-900">{t.parts.heading}</h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-green-100 text-green-700 rounded-lg flex items-center justify-center text-sm">🌾</span>
            {t.parts.agriculturalHeading}
          </h4>
          <div className="grid grid-cols-2 gap-4">
            {t.parts.agricultural.map((cat, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-border">
                <h5 className="font-bold text-slate-800 text-sm mb-3 uppercase tracking-wide">{cat.category}</h5>
                <ul className="space-y-1.5">
                  {cat.parts.map((part, j) => (
                    <li key={j} className="text-sm text-slate-600 flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0" /> {part}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-accent/15 text-accent rounded-lg flex items-center justify-center text-sm">⚓</span>
            {t.parts.marineHeading}
          </h4>
          <div className="bg-white rounded-2xl p-6 border border-border">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {t.parts.marine.map((part, i) => (
                <div key={i} className="flex items-center gap-3 bg-bg-alt rounded-xl p-4 text-sm font-medium text-slate-700">
                  <Wrench className="w-4 h-4 text-accent shrink-0" /> {part}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const SLA = ({ t }) => (
  <section id="sla" className="py-24 bg-bg-alt border-y border-border">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-sm font-black text-accent uppercase tracking-[0.3em] mb-4">{t.sla.label}</h2>
        <h3 className="text-3xl font-bold text-slate-900">{t.sla.heading}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {t.sla.items.map((item, i) => (
          <div key={i} className="bg-white rounded-2xl p-8 border border-border text-center hover:shadow-md transition-all">
            <div className="w-16 h-16 bg-accent/15 rounded-2xl flex items-center justify-center mx-auto mb-5">
              {i === 0 ? <Clock className="w-8 h-8 text-accent" /> : i === 1 ? <AlertTriangle className="w-8 h-8 text-amber-500" /> : <ShieldCheck className="w-8 h-8 text-green-600" />}
            </div>
            <p className="text-lg font-bold text-slate-900 mb-2">{item.metric}</p>
            <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const Logistics = ({ t }) => (
  <section id="logistics" className="py-24 bg-bg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-sm font-black text-accent uppercase tracking-[0.3em] mb-4">{t.logistics.label}</h2>
        <h3 className="text-3xl font-bold text-slate-900">{t.logistics.heading}</h3>
        <p className="mt-4 text-muted max-w-2xl mx-auto">{t.logistics.body}</p>
      </div>
      <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-bg-alt text-left">
              <th className="px-6 py-4 font-bold text-slate-700">{t.logistics.thRegion}</th>
              <th className="px-6 py-4 font-bold text-slate-700">{t.logistics.thTime}</th>
              <th className="px-6 py-4 font-bold text-slate-700">{t.logistics.thMethod}</th>
              <th className="px-6 py-4 font-bold text-slate-700">{t.logistics.thTracking}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {t.logistics.rows.map((row, i) => (
              <tr key={i} className="hover:bg-bg-alt">
                <td className="px-6 py-4 font-semibold text-slate-900">{row.region}</td>
                <td className="px-6 py-4 text-muted">{row.time}</td>
                <td className="px-6 py-4 text-muted">{row.method}</td>
                <td className="px-6 py-4"><span className="inline-flex items-center gap-1 text-green-600 font-semibold"><CheckCircle className="w-4 h-4" /> {t.logistics.trackingLabel}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
)

const RecentParts = ({ t }) => (
  <section id="recent-parts" className="py-24 bg-bg-alt border-y border-border">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-sm font-black text-accent uppercase tracking-[0.3em] mb-4">{t.recentParts.label}</h2>
        <h3 className="text-3xl font-bold text-slate-900">{t.recentParts.heading}</h3>
        <p className="mt-4 text-muted max-w-2xl mx-auto">{t.recentParts.body}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {t.recentParts.items.map((item, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 border border-border hover:border-accent/30 hover:shadow-md transition-all">
            <p className="text-xs font-black text-green-600 uppercase tracking-widest mb-2">{item.time}</p>
            <p className="font-bold text-slate-900 text-sm mb-2">{item.part}</p>
            <p className="text-xs text-slate-500 flex items-center gap-1"><MapPin className="w-3 h-3" /> {item.location}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const TrustSection = ({ t }) => (
  <section className="py-24 bg-bg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">{t.trust.heading}</h2>
          <ul className="space-y-5">
            {t.trust.points.map((point, i) => (
              <li key={i} className="flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-12 lg:mt-0">
          <div className="bg-bg-alt rounded-2xl p-8 border border-border">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-slate-700 text-lg leading-relaxed italic mb-6">
              {t.trust.testimonial}
            </p>
            <p className="text-sm font-bold text-muted uppercase tracking-widest">{t.trust.testimonialSource}</p>
          </div>
        </div>
      </div>
      <blockquote className="max-w-3xl mx-auto mt-16 border-l-[3px] border-accent pl-6 md:pl-8">
        <p className="text-xl md:text-2xl font-heading text-slate-900 italic leading-relaxed">
          {t.testimonial.quote}
        </p>
        <cite className="block mt-4 text-sm text-muted not-italic font-medium">
          {t.testimonial.cite}
        </cite>
      </blockquote>
    </div>
  </section>
)

const EAST_MY_CITIES = [
  { city: 'Kota Kinabalu', note: 'Fishing fleets & dive operators' },
  { city: 'Sandakan', note: 'Commercial fishing & aquaculture' },
  { city: 'Tawau', note: 'Palm oil & marine engines' },
  { city: 'Miri', note: 'Offshore support vessels' },
  { city: 'Sibu', note: 'River ferries & workboats' },
  { city: 'Kuching', note: 'Pleasure craft & plantations' },
]

const EastMalaysiaSection = ({ t }) => (
  <section className="py-24 bg-slate-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-16 items-center">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/80 text-accent/40 text-xs font-bold uppercase tracking-widest mb-6">
          <MapPin className="w-4 h-4" /> {t.eastMalaysia.label}
        </div>
        <h2 className="text-3xl font-bold mb-6">{t.eastMalaysia.heading}</h2>
        <p className="text-muted text-lg leading-relaxed mb-8">{t.eastMalaysia.body}</p>
        <WhatsappCTA
          label="east_malaysia"
          message="Hi, I'm in Sabah/Sarawak and need help sourcing a spare part urgently. Equipment: ___ Part needed: ___ Location: ___"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3.5 rounded-xl font-bold transition-all"
        >
          <MessageCircle className="w-5 h-5" /> {t.eastMalaysia.cta}
        </WhatsappCTA>
      </div>
      <div className="mt-12 lg:mt-0 grid grid-cols-2 gap-4">
        {(t.eastMalaysia.cities || EAST_MY_CITIES).map(loc => (
          <div key={loc.city} className="bg-slate-800 rounded-xl p-4 border border-slate-700">
            <p className="font-bold text-white text-sm mb-1">{loc.city}</p>
            <p className="text-muted text-xs">{loc.note}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const RESCUE_STORIES = [
  {
    outcome: 'Sourced in 4 days',
    label: 'Kubota Combine — Kedah',
    story: 'Cutter bar main gear sheared mid-harvest. Local dealers quoted 3 weeks. We sourced the part from our Japan network and had it on-site in 4 working days — harvest completed before the rains.',
  },
  {
    outcome: 'Sourced in 48 hours',
    label: 'Yanmar 4JH — Sandakan',
    story: 'Raw water pump seized on a commercial fishing vessel. Two local marine shops had nothing. We located the impeller kit and pump housing, and couriered to Sandakan — vessel back at sea in two days.',
  },
  {
    outcome: 'Sourced in 5 days',
    label: 'Massey Ferguson MF240 — Perak',
    story: 'Bosch injection pump failed on a plantation tractor. The model was discontinued. We cross-referenced to a compatible reconditioned unit from our secondary network and delivered within the week.',
  },
  {
    outcome: 'Same-day sourced',
    label: 'Zoomlion RC60 — Kelantan',
    story: 'Threshing chain snapped on day 2 of harvest season. No local Zoomlion dealer in the region. We located a compatible chain locally and arranged same-day delivery.',
  },
]

const RescueStories = ({ t }) => (
  <section className="py-24 bg-bg border-t border-border">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-sm font-black text-accent uppercase tracking-[0.3em] mb-4">{t.rescueStories.label}</h2>
        <h3 className="text-3xl font-bold text-slate-900">{t.rescueStories.heading}</h3>
        <p className="mt-4 text-muted max-w-2xl mx-auto">{t.rescueStories.body}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {(t.rescueStories.stories || RESCUE_STORIES).map(s => (
          <div key={s.label} className="bg-white rounded-2xl p-7 border border-border hover:border-accent/20 hover:shadow-md transition-all">
            <span className="inline-block bg-green-100 text-green-800 text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4">{s.outcome}</span>
            <h4 className="font-bold text-slate-900 text-base mb-3">{s.label}</h4>
            <p className="text-muted leading-relaxed text-sm">{s.story}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const BlogSection = ({ t, posts, lang }) => {
  const blogBase = lang === 'ms' ? '/ms/blog' : lang === 'zh-Hans' ? '/zh/blog' : '/blog'
  return (
  <section id="blog" className="py-24 bg-bg-alt border-y border-border">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between mb-12">
        <div>
          <h2 className="text-sm font-black text-accent uppercase tracking-[0.3em] mb-4">{t.blog.label}</h2>
          <h3 className="text-3xl font-bold text-slate-900">{t.blog.heading}</h3>
          <p className="mt-3 text-muted max-w-xl">{t.blog.body}</p>
        </div>
        <Link href={blogBase} className="hidden md:flex items-center gap-2 text-sm font-bold text-accent hover:text-accent-light transition-colors shrink-0 ml-8">
          {t.blog.allGuides} <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map(post => (
          <Link
            key={post.slug}
            href={`${blogBase}/${post.slug}`}
            className="group bg-white rounded-2xl border border-border p-7 hover:border-accent/40 hover:shadow-md transition-all flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                <BookOpen className="w-4 h-4 text-accent" />
              </span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                {new Date(post.publish_date).toLocaleDateString('en-MY', { month: 'long', year: 'numeric' })}
              </span>
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-accent transition-colors leading-snug">
              {post.title}
            </h4>
            <p className="text-sm text-muted leading-relaxed line-clamp-3 flex-1">
              {post.meta_description}
            </p>
            <span className="mt-5 text-sm font-bold text-accent group-hover:text-accent flex items-center gap-1 transition-colors">
              {t.blog.readGuide} <ChevronRight className="w-4 h-4" />
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-8 text-center md:hidden">
        <Link href={blogBase} className="text-sm font-bold text-accent hover:text-accent-light transition-colors">
          {t.blog.seeAllGuides}
        </Link>
      </div>
    </div>
  </section>
)
}

const Footer = ({ t, lang }) => {
  const aboutUrl = lang === 'ms' ? '/ms/about' : lang === 'zh-Hans' ? '/zh/about' : '/about'
  return (
  <footer className="bg-white py-12 text-slate-500 border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <span className="font-black text-xl tracking-tighter text-slate-900">SourceSage</span>
          <span className="font-black text-xl text-blue-600">.ai</span>
          <p className="text-sm text-slate-500 mt-1">{t.footer.tagline}</p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">{t.footer.partsHeading}</p>
          <ul className="space-y-2 text-sm font-semibold">
            {(t.footer.brandLinks || []).map(link => (
              <li key={link.slug}><Link href={link.slug} className="hover:text-blue-600 transition-colors">{link.label}</Link></li>
            ))}
            <li><Link href={aboutUrl} className="hover:text-blue-600 transition-colors">{t.footer.about}</Link></li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 text-sm font-semibold">
          <a href="mailto:info@sourcesage.ai" className="hover:text-blue-600 flex items-center gap-2 transition-colors">
            <Mail className="w-4 h-4" /> info@sourcesage.ai
          </a>
          <WhatsappCTA label="footer" message="Hi, I need help sourcing a spare part. Brand: ___ Model: ___ Part needed: ___" className="hover:text-green-600 flex items-center gap-2 transition-colors">
            <MessageCircle className="w-4 h-4" /> {t.footer.whatsapp}
          </WhatsappCTA>
        </div>
      </div>
      <div className="text-center pt-6 border-t border-slate-100">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">{t.footer.copyright}</p>
      </div>
    </div>
  </footer>
  )
}

const StickyWhatsApp = ({ t }) => (
  <WhatsappCTA
    label="sticky_button"
    message="Hi, my machine is down and I need urgent help sourcing a spare part. Brand: ___ Model: ___ Part needed: ___"
    className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-5 py-3.5 rounded-full shadow-2xl font-bold text-sm flex items-center gap-2 transition-all hover:scale-105"
  >
    <MessageCircle className="w-5 h-5" /> {t.sticky.cta}
  </WhatsappCTA>
)

const StatsRow = ({ t }) => (
  <section className="border-y border-border">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex justify-center gap-8 md:gap-16 flex-wrap">
      {t.stats.items.map((item, i) => (
        <div key={i} className="text-center">
          <span className="block text-3xl md:text-4xl font-heading text-accent font-bold">
            {item.number}
          </span>
          <span className="block text-xs text-muted uppercase tracking-widest mt-1">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  </section>
)

export default function HomePageContent({ t, lang }) {
  const posts = getAllPosts(lang)

  return (
    <>
      <LangSetter lang={lang} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            'inLanguage': lang,
            'name': 'SourceSage.ai',
            'url': 'https://sourcesage.ai',
            'description': 'Malaysia-based supplier of hard-to-find agricultural tractor and marine engine spare parts. Fast sourcing for urgent breakdowns. Based in Ipoh, Perak.',
            'address': { '@type': 'PostalAddress', 'addressLocality': 'Ipoh', 'addressRegion': 'Perak', 'addressCountry': 'MY' },
            'areaServed': [
              { '@type': 'State', 'name': 'Johor' },
              { '@type': 'State', 'name': 'Selangor' },
              { '@type': 'State', 'name': 'Perak' },
              { '@type': 'State', 'name': 'Kedah' },
              { '@type': 'State', 'name': 'Sabah' },
              { '@type': 'State', 'name': 'Sarawak' },
            ],
            'knowsAbout': ['Kubota tractor parts', 'Yanmar marine diesel engine parts', 'Massey Ferguson tractor parts', 'John Deere parts Malaysia', 'Zoomlion combine harvester parts', 'vintage parts sourcing Malaysia', 'OEM engine parts cross-reference'],
            'contactPoint': { '@type': 'ContactPoint', 'email': 'info@sourcesage.ai', 'contactType': 'customer service' }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SpeakableSpecification',
            'inLanguage': lang,
            xpath: ["/html/head/title", "/html/head/meta[@name='description']/@content"]
          })
        }}
      />
      <StickyWhatsApp t={t} />
      <div className="min-h-screen font-sans text-slate-900 antialiased">
        <Navbar t={t} lang={lang} />
        <Hero t={t} />
        <StatsRow t={t} />
        <ScrollReveal><TargetMarket t={t} /></ScrollReveal>
        <ScrollReveal><BrandGrid t={t} /></ScrollReveal>
        <ScrollReveal><MarineSection t={t} /></ScrollReveal>
        <ScrollReveal><ProblemSection t={t} /></ScrollReveal>
        <ScrollReveal><HowItWorks t={t} /></ScrollReveal>
        <ScrollReveal><PartsTypes t={t} /></ScrollReveal>
        <ScrollReveal><TrustSection t={t} /></ScrollReveal>
        <ScrollReveal><SLA t={t} /></ScrollReveal>
        <ScrollReveal><Logistics t={t} /></ScrollReveal>
        <ScrollReveal><RecentParts t={t} /></ScrollReveal>
        <ScrollReveal><EastMalaysiaSection t={t} /></ScrollReveal>
        <ScrollReveal><RescueStories t={t} /></ScrollReveal>
        {posts.length > 0 && <ScrollReveal><BlogSection t={t} posts={posts} lang={lang} /></ScrollReveal>}
        <RequestForm t={t.form} />
        <Footer t={t} lang={lang} />
      </div>
    </>
  )
}
