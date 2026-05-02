'use client'
import { useState } from 'react'
import { Send } from 'lucide-react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-bg-alt rounded-2xl p-8 border border-border text-center py-12">
        <div className="w-16 h-16 text-green-500 mx-auto mb-4">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Thank You!</h3>
        <p className="text-muted">We have received your message and will get back to you within 24 hours.</p>
      </div>
    )
  }

  return (
    <div className="bg-bg-alt rounded-2xl p-8 border border-border">
      <h2 className="text-xl font-bold text-slate-900 mb-6 font-heading">Send Us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Your Name</label>
          <input type="text" required className="w-full px-4 py-3 rounded-xl border border-border bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" placeholder="John Tan" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Email</label>
          <input type="email" required className="w-full px-4 py-3 rounded-xl border border-border bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" placeholder="john@example.com" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Phone / WhatsApp</label>
          <input type="tel" className="w-full px-4 py-3 rounded-xl border border-border bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" placeholder="+60 12-345 6789" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Part Details</label>
          <textarea rows={4} required className="w-full px-4 py-3 rounded-xl border border-border bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" placeholder="Brand, model, part number, and any additional information..." />
        </div>
        <button
          type="submit"
          className="w-full bg-accent hover:bg-accent-light text-white px-6 py-3.5 rounded-xl font-bold transition-all text-sm flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4" /> Send Message
        </button>
      </form>
    </div>
  )
}
