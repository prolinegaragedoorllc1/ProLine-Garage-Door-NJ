import React from 'react';
import { Phone, CheckCircle2, AlertTriangle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SpringRepair() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/">
            <img src="https://media.base44.com/images/public/6940c0d91636ce363ecbf035/0f4671081_WebsiteLOGO.png" alt="ProLine Garage Door LLC" className="h-16 w-auto" />
          </Link>
          <a href="tel:+12015033118" className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2 transition-colors">
            <Phone className="w-5 h-5" /> (201) 503-3118
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-yellow-400 font-semibold mb-2">ProLine Garage Door LLC — North New Jersey</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Garage Door Spring Repair</h1>
          <p className="text-blue-200 text-xl">Broken torsion or extension spring? We carry common sizes and can often fix it the same day.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none text-slate-700 mb-12">
            <p className="text-lg leading-relaxed mb-5">
              A broken garage door spring is one of the most common — and most disruptive — garage door problems. When a spring snaps, the door typically won't open at all, leaving your car stuck inside or outside. ProLine Garage Door LLC handles spring repairs and replacements for both <strong>torsion</strong> and <strong>extension</strong> spring systems across North New Jersey.
            </p>
            <p className="text-lg leading-relaxed mb-5">
              We stock the most common spring sizes and can usually complete the replacement in a single visit. Before starting any work, we assess the full system to make sure nothing else is worn or about to fail — so you're not calling us back in two weeks.
            </p>
            <p className="text-lg leading-relaxed">
              Spring replacement is not a DIY job. Garage door springs are under extreme tension and can cause serious injury if mishandled. Our technicians are trained and equipped to do this safely and correctly.
            </p>
          </div>

          {/* What's included */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-5">What's Included in Our Spring Service</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Full spring system inspection',
                'Broken spring removal',
                'Replacement with correct-spec spring',
                'Balance and tension adjustment',
                'Lubrication of all moving parts',
                'Safety check before we leave',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Warning signs */}
          <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-xl p-7 mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-500" /> Signs Your Spring May Be Failing
            </h2>
            <ul className="space-y-2 text-slate-700">
              <li>• Door feels very heavy when lifted manually</li>
              <li>• Loud bang from the garage (spring snapping)</li>
              <li>• Door opens only a few inches then stops</li>
              <li>• Visible gap or break in the spring coil</li>
              <li>• Opener straining or reversing immediately</li>
            </ul>
          </div>

          <div className="bg-blue-800 rounded-2xl p-8 text-white text-center">
            <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="text-2xl font-bold mb-2">Same-Day Service Available</h3>
            <p className="text-blue-200 mb-6">Call us and we'll get a technician out to you as quickly as possible.</p>
            <a href="tel:+12015033118" className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-lg px-10 py-4 rounded-xl transition-colors">
              <Phone className="w-5 h-5" /> (201) 503-3118
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
        <p>© 2026 ProLine Garage Door LLC · NJ HIC License #13VH14019600</p>
        <Link to="/" className="text-blue-400 hover:text-blue-300 mt-1 inline-block">← Back to Home</Link>
      </footer>
    </div>
  );
}