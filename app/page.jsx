'use client'

import React, { useState } from 'react';
import {
  MessageCircle, Wrench, Clock, AlertTriangle,
  ChevronRight, CheckCircle, MapPin, Mail,
  ShieldCheck, Truck
} from 'lucide-react';

// TODO: Replace with your actual WhatsApp number e.g. 60123456789
const WA_NUMBER = '447546185317';
const WA_URL = `https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%20need%20help%20sourcing%20a%20spare%20part.`;

const Navbar = () => (
  <nav className="bg-white shadow-sm sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <div className="flex items-center">
        <span className="font-bold text-xl text-slate-900 tracking-tight">SourceSage</span>
        <span className="text-blue-600 font-bold text-xl">.ai</span>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
        <a href="#brands" className="hover:text-blue-600 transition-colors">Brands</a>
        <a href="#marine" className="hover:text-blue-600 transition-colors">Marine</a>
        <a href="#how-it-works" className="hover:text-blue-600 transition-colors">How It Works</a>
        <a href="#request" className="hover:text-blue-600 transition-colors">Request a Part</a>
      </div>
      <div className="flex items-center gap-3">
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg font-bold transition-all text-sm flex items-center gap-2"
        >
          <MessageCircle className="w-4 h-4" /> WhatsApp
        </a>
        <a href="#request" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-bold transition-all text-sm hidden sm:block">
          Request a Part
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <header className="bg-white pt-16 pb-24 overflow-hidden border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
        <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-7 lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-widest mb-8">
            <MapPin className="w-4 h-4 text-blue-600" />
            <span>Malaysia-Based Parts Sourcing Specialist</span>
          </div>
          <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl lg:leading-[1.1]">
            Hard-to-Find Tractor &amp; Marine Engine Parts —{' '}
            <span className="text-blue-600">Sourced Fast in Malaysia.</span>
          </h1>
          <p className="mt-8 text-lg text-slate-600 md:text-xl leading-relaxed">
            We help dealers and workshops across Malaysia find difficult, discontinued, and urgent spare parts for agricultural tractors and marine diesel engines.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#request"
              className="px-8 py-4 text-lg font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all text-center flex items-center justify-center gap-2"
            >
              Request a Part Now <ChevronRight className="w-5 h-5" />
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-lg font-bold rounded-xl text-white bg-green-500 hover:bg-green-600 transition-all text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp Our Team
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-500 font-medium">
            Covering Kubota, Yanmar, Massey Ferguson, John Deere, Zoomlion, and leading marine diesel brands.
          </p>
        </div>

        <div className="mt-16 lg:mt-0 lg:col-span-5">
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-5">Brands We Source</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Kubota', 'Yanmar', 'Massey Ferguson', 'John Deere', 'Zoomlion', 'Perkins', 'Isuzu', 'Hino'].map(brand => (
                <span key={brand} className="bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-sm font-semibold text-slate-700 shadow-sm">
                  {brand}
                </span>
              ))}
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <p className="text-xs font-bold text-orange-700 uppercase tracking-wider mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" /> Machine Down?
              </p>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                We prioritize urgent breakdown cases. Contact us immediately for fast sourcing.
              </p>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg font-bold text-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const TargetMarket = () => (
  <section className="py-20 bg-blue-600 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Built for the Malaysian Market</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: <Wrench className="w-6 h-6" />, text: 'Supporting agricultural machinery dealers nationwide' },
          { icon: <MapPin className="w-6 h-6" />, text: 'Supplying workshops in Johor, Selangor, Perak, Sabah & Sarawak' },
          { icon: <Clock className="w-6 h-6" />, text: 'Understanding local farming cycles and urgent harvest breakdowns' },
          { icon: <Truck className="w-6 h-6" />, text: 'Fast coordination with regional and overseas suppliers' },
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center shrink-0">
              {item.icon}
            </div>
            <p className="text-blue-100 font-medium leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const BrandGrid = () => {
  const brands = [
    { name: 'Kubota', origin: 'Japan', note: 'Tractors, engines, generators' },
    { name: 'Yanmar', origin: 'Japan', note: 'Tractors & marine engines' },
    { name: 'Massey Ferguson', origin: 'UK/US', note: 'Agricultural tractors' },
    { name: 'John Deere', origin: 'USA', note: 'Farm & construction equipment' },
    { name: 'Zoomlion', origin: 'China', note: 'Growing in Malaysian plantations' },
    { name: 'Chinese Tractors', origin: 'China', note: 'Various brands, plantation use' },
  ];

  return (
    <section id="brands" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">Agricultural Tractor Brands</h2>
          <h3 className="text-3xl font-bold text-slate-900">Tractor Brands We Support</h3>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            We support both established Japanese brands and newer Chinese tractors increasingly used in Malaysian plantations and small farms.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {brands.map((brand, i) => (
            <div key={i} className="border border-slate-200 rounded-2xl p-6 hover:border-blue-400 hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-lg font-bold text-slate-900">{brand.name}</h4>
                <span className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded font-medium">{brand.origin}</span>
              </div>
              <p className="text-sm text-slate-600">{brand.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center">
          <p className="text-slate-700 font-medium">
            <strong className="text-blue-700">Zoomlion now widely used in Malaysian plantations.</strong>{' '}
            We are knowledgeable about newer Chinese equipment where parts sourcing is often harder.
          </p>
        </div>
      </div>
    </section>
  );
};

const MarineSection = () => {
  const brands = [
    'Yanmar marine engines',
    'Kubota-based marine engines',
    'Perkins marine engines',
    'Isuzu marine diesel',
    'Hino industrial/marine engines',
  ];
  const parts = [
    'Overhaul kits',
    'Cylinder heads',
    'Fuel injectors',
    'Cooling system components',
    'Gaskets and seal kits',
    'Starter motors and alternators',
  ];

  return (
    <section id="marine" className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          <div>
            <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">Marine Niche</h2>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Marine Diesel Engine Parts — Coastal &amp; River Support</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We help marine workshops and boat operators source parts quickly. Fast turnaround for fishing boats, transport boats, and small marine operators.
            </p>
            <h4 className="font-bold text-slate-700 uppercase text-xs tracking-widest mb-4">Brands We Cover</h4>
            <ul className="space-y-3 mb-8">
              {brands.map((b, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle className="w-5 h-5 text-blue-500 shrink-0" /> {b}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <h4 className="font-bold text-slate-700 uppercase text-xs tracking-widest mb-6">Parts We Source</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {parts.map((part, i) => (
                  <div key={i} className="flex items-center gap-3 bg-slate-50 rounded-xl p-4 text-sm font-medium text-slate-700">
                    <Wrench className="w-4 h-4 text-blue-500 shrink-0" /> {part}
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3.5 rounded-xl font-bold transition-all"
                >
                  <MessageCircle className="w-5 h-5" /> WhatsApp for Marine Parts
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProblemSection = () => (
  <section className="py-24 bg-slate-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">When a Machine Stops, Income Stops.</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">We understand the urgency. Every hour a machine is down has real cost.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
          <h3 className="font-bold text-lg mb-5 text-white flex items-center gap-3">
            <span className="w-8 h-8 bg-green-700 rounded-lg flex items-center justify-center">🌾</span>
            Agricultural
          </h3>
          <ul className="space-y-3 text-slate-300">
            {[
              'Tractor down during planting or harvest',
              'Irrigation pump failure',
              'Engine overheating during peak season',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
          <h3 className="font-bold text-lg mb-5 text-white flex items-center gap-3">
            <span className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center">⚓</span>
            Marine
          </h3>
          <ul className="space-y-3 text-slate-300">
            {[
              'Boat unable to operate',
              'Missed fishing trips',
              'Delayed transport routes',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-center mt-12">
        <p className="text-white font-bold text-lg mb-6">We prioritize breakdown cases.</p>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all"
        >
          <MessageCircle className="w-5 h-5" /> Contact Us Immediately
        </a>
      </div>
    </div>
  </section>
);

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Send Us Your Details',
      items: ['Brand & model', 'Engine code', 'Part number (if any)', 'Photos (optional)', 'Urgency level'],
    },
    {
      number: '02',
      title: 'We Verify Compatibility',
      items: ['Technical cross-reference check', 'OEM vs aftermarket options', 'Fitment validation'],
    },
    {
      number: '03',
      title: 'We Search Our Network',
      items: ['Local distributors', 'Regional suppliers', 'Overseas OEM & aftermarket'],
    },
    {
      number: '04',
      title: 'We Confirm Everything',
      items: ['Fitment', 'Lead time', 'Price', 'Availability'],
    },
    {
      number: '05',
      title: 'We Coordinate Delivery',
      items: ['Direct to your workshop', 'Fast dispatch for urgent cases'],
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">Process</h2>
          <h3 className="text-3xl font-bold text-slate-900">How It Works</h3>
          <p className="mt-4 text-slate-600">Real people checking specifications. Not guesswork.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all text-center">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-lg font-black mx-auto mb-4">
                {step.number}
              </div>
              <h4 className="font-bold text-slate-900 mb-3 text-sm">{step.title}</h4>
              <ul className="text-xs text-slate-500 space-y-1 text-left">
                {step.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">·</span> {item}
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

const PartsTypes = () => {
  const agricultural = [
    { category: 'Engine', parts: ['Pistons', 'Liners', 'Crankshafts', 'Overhaul kits'] },
    { category: 'Hydraulic', parts: ['Pumps', 'Valves', 'Seals'] },
    { category: 'Transmission', parts: ['Clutch plates', 'Gear assemblies'] },
    { category: 'Electrical', parts: ['Starters', 'Alternators', 'Sensors'] },
  ];
  const marine = [
    'Cylinder head components',
    'Injectors',
    'Fuel pumps',
    'Raw water pumps',
    'Exhaust manifolds',
    'Cooling system components',
  ];

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">Parts Catalogue</h2>
          <h3 className="text-3xl font-bold text-slate-900">Parts We Regularly Source</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-green-100 text-green-700 rounded-lg flex items-center justify-center text-sm">🌾</span>
              Agricultural Tractor Parts
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {agricultural.map((cat, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200">
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
              <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-sm">⚓</span>
              Marine Engine Parts
            </h4>
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {marine.map((part, i) => (
                  <div key={i} className="flex items-center gap-3 bg-slate-50 rounded-xl p-4 text-sm font-medium text-slate-700">
                    <Wrench className="w-4 h-4 text-blue-500 shrink-0" /> {part}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustSection = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Why Workshops and Dealers Work With Us</h2>
          <ul className="space-y-5">
            {[
              'We understand tractor and diesel engine systems',
              'We verify compatibility before quoting',
              'We respond quickly on WhatsApp',
              'We support urgent breakdown cases',
              'We source both OEM and quality aftermarket options',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-12 lg:mt-0">
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-slate-700 text-lg leading-relaxed italic mb-6">
              &quot;They helped us source a Zoomlion engine component that no local supplier had. Fast response and got it delivered within the week.&quot;
            </p>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">— Parts Workshop, Selangor</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const RequestForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
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
    );
    window.location.href = `mailto:info@sourcesage.ai?subject=Part%20Request&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="request" className="py-24 bg-slate-900 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Request a Part</h2>
          <p className="text-slate-400 text-lg">Send us your part details and we&apos;ll get back to you quickly.</p>
        </div>
        {submitted ? (
          <div className="bg-white/5 rounded-2xl p-12 border border-white/10 text-center">
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-3">Request Sent</h3>
            <p className="text-slate-400 mb-6">We&apos;ll review your request and respond shortly. For urgent cases, WhatsApp us directly.</p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold transition-all"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp for Urgent Parts
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-10 shadow-2xl text-left">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Brand *</label>
                  <input name="brand" required type="text" placeholder="e.g. Kubota, Zoomlion" className="w-full border-b-2 border-slate-100 py-2 text-slate-900 outline-none focus:border-blue-600 transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Model *</label>
                  <input name="model" required type="text" placeholder="e.g. L3408, RC504" className="w-full border-b-2 border-slate-100 py-2 text-slate-900 outline-none focus:border-blue-600 transition-colors" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Engine Code</label>
                  <input name="engine_code" type="text" placeholder="e.g. V2403, 4TNV98" className="w-full border-b-2 border-slate-100 py-2 text-slate-900 outline-none focus:border-blue-600 transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Urgency *</label>
                  <select name="urgency" required className="w-full border-b-2 border-slate-100 py-2 text-slate-900 outline-none focus:border-blue-600 transition-colors bg-white">
                    <option value="">Select urgency level</option>
                    <option value="Routine">Routine</option>
                    <option value="Urgent">Urgent</option>
                    <option value="Machine Down">Machine Down — Priority</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Part Description *</label>
                <input name="part_description" required type="text" placeholder="e.g. Overhaul kit, cylinder head, fuel injector" className="w-full border-b-2 border-slate-100 py-2 text-slate-900 outline-none focus:border-blue-600 transition-colors" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Your Name *</label>
                  <input name="name" required type="text" placeholder="Name" className="w-full border-b-2 border-slate-100 py-2 text-slate-900 outline-none focus:border-blue-600 transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Phone / WhatsApp *</label>
                  <input name="contact" required type="text" placeholder="+60 12-XXX XXXX" className="w-full border-b-2 border-slate-100 py-2 text-slate-900 outline-none focus:border-blue-600 transition-colors" />
                </div>
              </div>
              <p className="text-xs text-slate-400 bg-slate-50 rounded-lg p-3">
                📷 Have a photo of the part? Send it via WhatsApp after submitting this form.
              </p>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl text-lg shadow-xl shadow-blue-100 transition-all">
                Send Part Request
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-white py-12 text-slate-500 border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
        <div>
          <span className="font-black text-xl tracking-tighter text-slate-900">SourceSage</span>
          <span className="font-black text-xl text-blue-600">.ai</span>
          <p className="text-sm text-slate-500 mt-1">Malaysia-Based Parts Sourcing Specialist</p>
        </div>
        <div className="flex gap-6 text-sm font-semibold">
          <a href="mailto:info@sourcesage.ai" className="hover:text-blue-600 flex items-center gap-2 transition-colors">
            <Mail className="w-4 h-4" /> info@sourcesage.ai
          </a>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="hover:text-green-600 flex items-center gap-2 transition-colors">
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
        </div>
      </div>
      <div className="text-center pt-6 border-t border-slate-100">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">© 2024 SourceSage.ai. Agricultural &amp; Marine Parts Sourcing, Malaysia.</p>
      </div>
    </div>
  </footer>
);

const StickyWhatsApp = () => (
  <a
    href={WA_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-5 py-3.5 rounded-full shadow-2xl font-bold text-sm flex items-center gap-2 transition-all hover:scale-105"
    aria-label="WhatsApp our team"
  >
    <MessageCircle className="w-5 h-5" /> Send Part Details
  </a>
);

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            'name': 'SourceSage.ai',
            'url': 'https://sourcesage.ai',
            'description': 'Malaysia-based supplier of hard-to-find agricultural tractor and marine engine spare parts. Fast sourcing for urgent breakdowns.',
            'address': { '@type': 'PostalAddress', 'addressCountry': 'MY' },
            'areaServed': 'Malaysia',
            'contactPoint': { '@type': 'ContactPoint', 'email': 'info@sourcesage.ai', 'contactType': 'customer service' }
          })
        }}
      />
      <StickyWhatsApp />
      <div className="min-h-screen font-sans text-slate-900 antialiased">
        <Navbar />
        <Hero />
        <TargetMarket />
        <BrandGrid />
        <MarineSection />
        <ProblemSection />
        <HowItWorks />
        <PartsTypes />
        <TrustSection />
        <RequestForm />
        <Footer />
      </div>
    </>
  );
}
