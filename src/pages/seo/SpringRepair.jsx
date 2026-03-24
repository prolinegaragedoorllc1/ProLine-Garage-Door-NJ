import React from 'react';
import { Phone, CheckCircle2, AlertTriangle, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

const included = [
  'Safety inspection before and after work',
  'Old spring removal and disposal',
  'Torsion or extension spring replacement',
  'Cable and drum inspection',
  'Spring tension calibration',
  'Full door balance test',
  'Lubrication of all moving parts',
  'Opener force adjustment check',
];

const faqs = [
  { q: 'How much does spring repair cost in New Jersey?', a: 'Most torsion spring replacements range from $150–$300 depending on the spring size and type. We provide a clear, flat price before starting any work.' },
  { q: 'How long does spring replacement take?', a: 'In most cases, 45–90 minutes for a standard residential door. We carry common spring sizes in our trucks for same-day service.' },
  { q: 'Should I replace one spring or both?', a: 'If both springs are the original age, we recommend replacing both. If one broke, the other is likely close behind — replacing both saves you a second service call soon after.' },
  { q: 'Is it safe to try and fix the spring myself?', a: 'No. Garage door springs are under extreme tension and can cause serious injury or death if mishandled. This is one repair we strongly urge homeowners NOT to attempt.' },
];

export default function SpringRepair() {
  return (
    <div className="min-h-screen bg-white pb-20 lg:pb-0">
      <SiteHeader />
      <section
        className="relative text-white py-20 md:py-28"
        style={{
          backgroundImage: 'linear-gradient(rgba(10,20,60,0.72), rgba(10,20,60,0.65)), url(https://media.base44.com/images/public/6940c0d91636ce363ecbf035/7864d5cca_generated_image.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-yellow-400 font-semibold mb-3 text-sm uppercase tracking-wide">ProLine Garage Door LLC — New Jersey</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">Garage Door Spring Repair in New Jersey</h1>
          <p className="text-blue-200 text-xl mb-8 max-w-2xl">Broken spring? Don't risk it — springs are under deadly tension. Our technicians replace torsion and extension springs safely, same day.</p>
          <a href="tel:+12015033118" className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-lg px-10 py-4 rounded-xl transition-colors">
            <Phone className="w-5 h-5" /> Call Now: (201) 503-3118
          </a>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-5">Professional Spring Replacement in New Jersey</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                A broken garage door spring is the most common — and most dangerous — garage door failure. Torsion springs store enormous energy, and a snapped spring can cause the door to crash down or fly apart violently. ProLine Garage Door LLC handles spring replacements safely for homeowners throughout New Jersey, including Bergen County, Morris County, and Passaic County.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                We carry replacement springs in standard sizes for single and double-car doors. In most cases, we can replace your spring the same day you call. We also calibrate the new spring's tension precisely to match your door's weight — ensuring smooth, balanced operation that doesn't strain your opener.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We service all towns across New Jersey: Paramus, Fair Lawn, Wayne, Hackensack, Clifton, Morristown, Parsippany, and more. If you heard a loud bang from your garage or your door suddenly won't open, call us immediately.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" alt="Garage door spring repair New Jersey" className="w-full h-80 object-cover" />
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-xl p-7 mb-12">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-500" /> Warning Signs of a Broken Spring
            </h2>
            <div className="grid sm:grid-cols-2 gap-2">
              {['Loud bang from the garage', 'Door won\'t open with opener', 'Door very heavy to lift manually', 'Visible gap in the spring coil', 'Cable hanging loose on one side', 'Door opens unevenly or crooked'].map((s, i) => (
                <div key={i} className="flex items-start gap-2 text-slate-700">
                  <span className="text-yellow-500 font-bold mt-0.5">•</span><span>{s}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">What's Included in Our Spring Service</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {included.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <div key={i} className="border border-slate-200 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-2">{f.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-6 mb-8 text-sm text-slate-600">
            <p>Related services: <Link to="/garage-door-repair" className="text-blue-600 hover:underline font-medium">Full Garage Door Repair</Link> · <Link to="/garage-door-cable-repair" className="text-blue-600 hover:underline font-medium">Cable Repair</Link> · <Link to="/garage-door-opener-repair" className="text-blue-600 hover:underline font-medium">Opener Repair</Link></p>
          </div>

          <div className="bg-blue-800 rounded-2xl p-8 text-white text-center">
            <Shield className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="text-2xl font-bold mb-2">Don't Operate a Door With a Broken Spring</h3>
            <p className="text-blue-200 mb-6">Call us now — we'll assess and replace the spring the same day in most cases throughout New Jersey.</p>
            <a href="tel:+12015033118" className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-lg px-10 py-4 rounded-xl transition-colors">
              <Phone className="w-5 h-5" /> (201) 503-3118
            </a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}