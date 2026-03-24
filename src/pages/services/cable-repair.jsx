import React from 'react';
import { Phone, CheckCircle2, AlertTriangle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CableRepair() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/"><img src="https://media.base44.com/images/public/6940c0d91636ce363ecbf035/0f4671081_WebsiteLOGO.png" alt="ProLine Garage Door LLC" className="h-16 w-auto" /></Link>
          <a href="tel:+12015033118" className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2 transition-colors">
            <Phone className="w-5 h-5" /> (201) 503-3118
          </a>
        </div>
      </header>

      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-yellow-400 font-semibold mb-2">ProLine Garage Door LLC — North New Jersey</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Garage Door Cable Repair</h1>
          <p className="text-blue-200 text-xl">Frayed, snapped, or loose cable? Don't operate the door — call us for a fast, safe repair.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-slate-700 mb-12">
            <p className="text-lg leading-relaxed mb-5">
              Garage door cables work alongside the springs to lift and lower the door safely. When a cable snaps or comes off the drum, the door can drop unevenly, get stuck, or become completely inoperable. In some cases it creates a serious safety hazard.
            </p>
            <p className="text-lg leading-relaxed mb-5">
              ProLine replaces cables quickly and properly — making sure both sides are tensioned evenly so the door tracks straight and lasts. We use galvanized steel cables rated for residential garage door use.
            </p>
            <p className="text-lg leading-relaxed">
              If a cable breaks, we also check the drums, pulleys, and bottom brackets — because these parts often wear together and replacing just the cable without inspecting the rest is a short-term fix.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-5">Our Cable Repair Process</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Inspect both cables and drums',
                'Remove damaged cable safely',
                'Install properly rated replacement',
                'Re-thread and tension both sides evenly',
                'Check pulleys and bottom brackets',
                'Full operational test before leaving',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-xl p-7 mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-500" /> Warning Signs
            </h2>
            <ul className="space-y-2 text-slate-700">
              <li>• Door tilts or hangs at an angle</li>
              <li>• Visible slack or fraying on the cable</li>
              <li>• Cable lying on the garage floor</li>
              <li>• Door jerks or shakes when moving</li>
              <li>• Grinding noise near the drum or pulley</li>
            </ul>
          </div>

          <div className="bg-blue-800 rounded-2xl p-8 text-white text-center">
            <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="text-2xl font-bold mb-2">Don't Operate a Door With a Broken Cable</h3>
            <p className="text-blue-200 mb-6">Call us and we'll take care of it safely and quickly.</p>
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