'use client'

import { useState } from 'react'
import { MessageCircle, CheckCircle } from 'lucide-react'
import WhatsappCTA from './WhatsappCTA'

export default function RequestForm({ t }) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const f = new FormData(e.target)
    const body = encodeURIComponent(
      `Spare Part Request\n\n` +
      `Brand: ${f.get('brand')}\n` +
      `Model: ${f.get('model')}\n` +
      `Engine Code: ${f.get('engine_code')}\n` +
      `Part Description: ${f.get('part_description')}\n` +
      `Urgency: ${f.get('urgency')}\n\n` +
      `Name: ${f.get('name')}\n` +
      `Phone / WhatsApp: ${f.get('contact')}\n\n` +
      `Note: Photos can be sent via WhatsApp.`
    )
    window.location.href = `mailto:info@sourcesage.ai?subject=Part%20Request&body=${body}`
    setSubmitted(true)
  }

  return (
    <section id="request" className="py-24 bg-slate-900 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.heading}</h2>
          <p className="text-slate-400 text-lg">{t.body}</p>
        </div>
        {submitted ? (
          <div className="bg-white/5 rounded-2xl p-12 border border-white/10 text-center">
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-3">{t.successHeading}</h3>
            <p className="text-slate-400 mb-6">{t.successBody}</p>
            <WhatsappCTA
              label="post_form_submit"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold transition-all"
            >
              <MessageCircle className="w-5 h-5" /> {t.successCta}
            </WhatsappCTA>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-10 shadow-2xl text-left">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{t.labelBrand}</label>
                  <input name="brand" required type="text" placeholder={t.placeholderBrand} className="w-full border-b-2 border-slate-100 py-2 text-slate-900 outline-none focus:border-blue-600 transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{t.labelModel}</label>
                  <input name="model" required type="text" placeholder={t.placeholderModel} className="w-full border-b-2 border-slate-100 py-2 text-slate-900 outline-none focus:border-blue-600 transition-colors" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{t.labelEngineCode}</label>
                  <input name="engine_code" type="text" placeholder={t.placeholderEngineCode} className="w-full border-b-2 border-slate-100 py-2 text-slate-900 outline-none focus:border-blue-600 transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{t.labelUrgency}</label>
                  <select name="urgency" required className="w-full border-b-2 border-slate-100 py-2 text-slate-900 outline-none focus:border-blue-600 transition-colors bg-white">
                    <option value="">{t.placeholderUrgency}</option>
                    <option value="Routine">{t.urgencyRoutine}</option>
                    <option value="Urgent">{t.urgencyUrgent}</option>
                    <option value="Machine Down">{t.urgencyMachineDown}</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{t.labelPartDescription}</label>
                <input name="part_description" required type="text" placeholder={t.placeholderPart} className="w-full border-b-2 border-slate-100 py-2 text-slate-900 outline-none focus:border-blue-600 transition-colors" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{t.labelName}</label>
                  <input name="name" required type="text" placeholder={t.placeholderName} className="w-full border-b-2 border-slate-100 py-2 text-slate-900 outline-none focus:border-blue-600 transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{t.labelContact}</label>
                  <input name="contact" required type="text" placeholder={t.placeholderContact} className="w-full border-b-2 border-slate-100 py-2 text-slate-900 outline-none focus:border-blue-600 transition-colors" />
                </div>
              </div>
              <p className="text-xs text-slate-400 bg-slate-50 rounded-lg p-3">{t.photoNote}</p>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl text-lg shadow-xl shadow-blue-100 transition-all">
                {t.submit}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
