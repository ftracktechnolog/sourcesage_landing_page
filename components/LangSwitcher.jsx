'use client'

const langLinks = { en: '/', ms: '/ms', 'zh-Hans': '/zh' }
const langLabels = { en: 'EN', ms: 'BM', 'zh-Hans': '中文' }

export default function LangSwitcher({ currentLang }) {
  return (
    <div className="flex items-center text-xs font-bold text-slate-400 border border-slate-200 rounded-lg overflow-hidden shrink-0">
      {Object.entries(langLinks).map(([code, href]) => (
        <a
          key={code}
          href={href}
          className={`px-2 py-1.5 sm:px-2.5 transition-colors ${currentLang === code ? 'bg-blue-600 text-white' : 'hover:bg-slate-50 hover:text-slate-700'}`}
        >
          {langLabels[code]}
        </a>
      ))}
    </div>
  )
}
