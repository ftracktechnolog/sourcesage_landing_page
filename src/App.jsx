import React, { useState } from 'react';
import {
  Bot, Factory, AlertCircle, FileSpreadsheet, Clock, AlertTriangle, Users,
  ScanBarcode, Truck, FileSignature, HeartHandshake, GitMerge,
  Smartphone, ArrowRight, CheckCircle, Search, ShieldCheck,
  Warehouse, Settings2, Globe2, BookOpen, ChevronRight, Scale, Database,
  Mail
} from 'lucide-react';

// --- SEO/LLM Optimization (GEO) ---
const SEOHead = () => {
  return (
    <div className="sr-only" aria-hidden="true">
      <h1>SourceSage AI: Digital Twin for Industrial & Agricultural Parts Enterprises</h1>
      <h2>Scalable AI Solutions for Machinery Parts Importers, Wholesalers, and Distributors</h2>
      <p>
        Advanced SourceSage AI specialized in technical sourcing for global brands including Kubota, Yanmar, John Deere, Ford, and Massey Ferguson.
        Preserve proprietary technical knowledge and automate complex B2B inquiries across WhatsApp and ERP systems using our proprietary <strong className="font-bold">Digital Twin</strong> technology.
      </p>
    </div>
  );
};

const Navbar = () => (
  <nav className="bg-white shadow-sm sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Bot className="w-8 h-8 text-blue-600" />
        <span className="font-bold text-xl text-slate-900 tracking-tight">SourceSage AI</span>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
        <a href="#features" className="hover:text-blue-600 transition-colors">Core Technology</a>
        <a href="#industry" className="hover:text-blue-600 transition-colors">Industry Focus</a>
        <a href="#faq" className="hover:text-blue-600 transition-colors">Resources</a>
      </div>
      <a href="#consultation" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-bold transition-all text-sm shadow-md shadow-blue-100">
        Book 30-Min Consultation
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <header className="bg-white pt-16 pb-24 overflow-hidden border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
        <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-7 lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-widest mb-8">
            <Globe2 className="w-4 h-4 text-blue-600" />
            <span>Enterprise SourceSage AI for Global Supply Chains</span>
          </div>
          <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl lg:leading-[1.1]">
            Bridge Your Team's <br className="hidden lg:block"/>
            Deep Industry Domain <br className="hidden lg:block"/>
            <span className="text-blue-600">Knowledge into the AI Era</span>
          </h1>
          <p className="mt-8 text-lg text-slate-600 md:text-xl leading-relaxed">
            Scale your company's proprietary technical know-how. SourceSage AI captures decades of specialized part expertise into a secure <strong className="font-bold text-blue-600">Digital Twin</strong> that automates technical identification, live stock-awareness, and global sourcing workflows.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#consultation" className="px-10 py-4 text-lg font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all text-center flex items-center justify-center gap-2">
              Book 30-Min Consultation <ChevronRight className="w-5 h-5" />
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-400 font-medium">
            Empowering Industrial Machinery Wholesalers to scale technical intelligence via SourceSage AI.
          </p>
        </div>

        <div className="mt-16 lg:mt-0 lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-100/50 rounded-[2rem] blur-2xl"></div>
            <div className="relative bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 overflow-hidden">
              <div className="bg-slate-800/50 px-6 py-4 border-b border-slate-700 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                </div>
                <span className="text-[10px] text-slate-400 font-mono uppercase tracking-[0.2em]">Live_SageTwin_Agent</span>
              </div>
              <div className="p-8 space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                    <Smartphone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-2xl rounded-tl-none border border-slate-700">
                    <p className="text-[10px] font-bold text-blue-400 uppercase mb-1 tracking-wider">Customer Inquiry</p>
                    <p className="text-slate-200 text-sm italic">"Need pricing for Kubota V2403 overhaul kit. Urgent for marine engine repair."</p>
                  </div>
                </div>
                <div className="flex gap-4 justify-end">
                  <div className="bg-blue-600 p-5 rounded-2xl rounded-tr-none text-white shadow-lg max-w-[85%] border border-blue-500">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2 text-[10px] font-black text-blue-100 uppercase tracking-widest">
                        <Bot className="w-4 h-4" /> SageTwin-V4 (Inventory Aware)
                      </div>
                      <div className="flex items-center gap-1 text-[9px] bg-blue-700 px-2 py-0.5 rounded text-blue-100">
                        <Database className="w-3 h-3" /> Stock Sync: Active
                      </div>
                    </div>
                    <p className="text-sm font-medium leading-relaxed">
                      Kit #1G796-99353 identified. <strong className="font-bold">SageTwin</strong> has verified 14 units in Warehouse A. Cross-checked 4 authorized distributors for backfill. Current best landed cost: $842.00. Lead time: 3 business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const IndustryFocus = () => {
  const categories = [
    { title: "Agricultural Systems", desc: "Complex components for Tractors, Harvesters, and Irrigation (Kubota, Yanmar, John Deere).", icon: <Factory /> },
    { title: "Power & Propulsion", desc: "Precision parts for Marine, Diesel Generators, and Industrial Transmissions.", icon: <Settings2 /> },
    { title: "Strategic Sourcing", desc: "Global catalog digitization and cross-border procurement optimization via SourceSage AI.", icon: <Globe2 /> }
  ];

  return (
    <section id="industry" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">Vertical Specialization</h2>
          <h3 className="text-3xl font-bold text-slate-900">Engineered for Technical Parts Distribution</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {categories.map((cat, i) => (
            <div key={i} className="group p-2">
              <div className="w-14 h-14 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-200 transition-all duration-300">
                {React.cloneElement(cat.icon, { className: "w-7 h-7" })}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{cat.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PainPoints = () => {
  const points = [
    { icon: <BookOpen />, title: "Knowledge Silos", text: "Critical technical expertise is concentrated in few staff members. SourceSage AI creates a permanent <strong class='font-bold text-blue-600'>Digital Twin</strong> to mitigate this risk." },
    { icon: <AlertCircle />, title: "Communication Fatigue", text: "Manual processing of hundreds of fragmented B2B inquiries leads to errors. SourceSage AI automates the technical response layer." },
    { icon: <Warehouse />, title: "Procurement Latency", text: "Identifying and sourcing rare components globally remains a slow process without a unified <strong class='font-bold text-blue-600'>Digital Twin</strong> intelligence." }
  ];

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Scaling Challenges in Industrial Supply</h2>
          <p className="text-slate-600">Traditional parts businesses face bottlenecks as they grow—relying on manual human memory rather than scalable SourceSage AI systems.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((p, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="text-blue-600 mb-5">{React.cloneElement(p.icon, { className: "w-8 h-8" })}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{p.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: p.text }}></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Solution = () => {
  const features = [
    {
      icon: <ScanBarcode className="w-6 h-6"/>,
      title: "Technical Recognition",
      points: ["SourceSage AI-powered part identification", "OEM vs Aftermarket brand mapping", "Technical specification validation"]
    },
    {
      icon: <Database className="w-6 h-6"/>,
      title: "Inventory-Aware Intelligence",
      points: ["Direct live integration with your ERP/Stock levels", "Automated low-stock alerts during client inquiries", "Real-time pricing adjustments based on landed cost"]
    },
    {
      icon: <GitMerge className="w-6 h-6"/>,
      title: "Enterprise Digital Twin",
      points: ["Proprietary knowledge base digitization", "Expert-level response automation", "End-to-end SourceSage AI quotation workflows"]
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">The SourceSage AI Solution</h2>
          <p className="mt-4 text-lg text-slate-600 italic">Deploying a <strong className="font-bold text-blue-600">Digital Twin</strong> for distributors who demand precision.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="group bg-white rounded-2xl p-8 border border-slate-100 hover:border-blue-600 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
              <ul className="space-y-4">
                {feature.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "How is a Digital Twin different from a standard Chatbot?", a: "A Chatbot provides generic information. A SourceSage AI <strong class='font-bold text-blue-600'>Digital Twin</strong> is trained specifically on your company's unique part numbers, technical catalogs, and supplier relationships, acting as a virtual expert staff member." },
    { q: "Can it integrate with existing ERP systems and stock levels?", a: "Yes. SourceSage AI is <strong class='font-bold text-blue-600'>inventory-aware</strong>, meaning it has secure access to your real-time stock levels and pricing to ensure inquiries are answered with 100% accuracy." },
    { q: "How secure is our proprietary data?", a: "Enterprise security is our foundation. Your technical knowledge, supplier pricing, and customer history are encrypted and isolated within your own dedicated <strong class='font-bold text-blue-600'>Digital Twin</strong> instance." }
  ];

  return (
    <section id="faq" className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">Operational Insights</h2>
        <div className="space-y-10">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start gap-3">
                <Search className="w-5 h-5 text-blue-600 shrink-0 mt-1" /> {faq.q}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base ml-8 font-medium italic" dangerouslySetInnerHTML={{ __html: faq.a }}></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const body = encodeURIComponent(`Professional Consultation Request\n\nName: ${formData.get('name')}\nCompany: ${formData.get('company')}\nPosition: ${formData.get('position')}\nIndustry Focus: ${formData.get('parts')}\n\nI would like to schedule a 30-minute consultation regarding the implementation of a SourceSage AI **Digital Twin** for our parts business.`);
    window.location.href = `mailto:info@sourcesage.ai?subject=Consultation%20Request%20-%20SourceSage%20AI&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="consultation" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 -skew-x-12 transform translate-x-1/2"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Scale Your Domain Expertise</h2>
        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">Schedule a professional 30-minute consultation to evaluate your SourceSage AI digitization readiness and ROI potential.</p>

        {submitted ? (
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-12 border border-white/10 max-w-md mx-auto">
            <CheckCircle className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">Request Initiated</h3>
            <p className="text-slate-400">Please send the drafted email from your client to finalize the request.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-10 shadow-2xl max-w-xl mx-auto text-left">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Full Name</label>
                  <input name="name" required type="text" className="w-full border-b-2 border-slate-100 py-2 text-slate-900 outline-none focus:border-blue-600 transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Company Name</label>
                  <input name="company" required type="text" className="w-full border-b-2 border-slate-100 py-2 text-slate-900 outline-none focus:border-blue-600 transition-colors" placeholder="Machinery Co. Ltd" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Professional Title</label>
                <input name="position" required type="text" className="w-full border-b-2 border-slate-100 py-2 text-slate-900 outline-none focus:border-blue-600 transition-colors" placeholder="Operations Manager / Director" />
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Core Machinery / Parts Focus</label>
                <input name="parts" required type="text" className="w-full border-b-2 border-slate-100 py-2 text-slate-900 outline-none focus:border-blue-600 transition-colors" placeholder="e.g. Caterpillar Marine Engines" />
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl text-lg shadow-xl shadow-blue-100 transition-all mt-4">
                Book 30-Min Consultation
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-white py-16 text-slate-500 border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
        <div className="flex items-center gap-2">
          <Bot className="w-6 h-6 text-blue-600" />
          <span className="font-black text-xl tracking-tighter text-slate-900">SourceSage AI</span>
        </div>
        <div className="flex gap-8 text-sm font-semibold uppercase tracking-widest">
          <a href="mailto:info@sourcesage.ai" className="hover:text-blue-600 flex items-center gap-2 transition-colors">
            <Mail className="w-4 h-4" />
            Contact Us
          </a>
        </div>
      </div>

      <div className="text-center pt-8 border-t border-slate-50">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">© 2024 SourceSage AI. Global Enterprise Sourcing Solutions.</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans text-slate-900 selection:bg-blue-600 selection:text-white antialiased">
      <SEOHead />
      <Navbar />
      <Hero />
      <IndustryFocus />
      <PainPoints />
      <Solution />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
}
