import React from 'react';
import { Phone, CheckCircle2, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PanelReplacement() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Garage Door Panel Replacement</h1>
          <p className="text-blue-200 text-xl">Dented or damaged panel? We can often replace just the affected section — no need for a full door.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-slate-700 mb-12">
            <p className="text-lg leading-relaxed mb-5">
              A dented or cracked garage door panel doesn't always mean you need a whole new door. In many cases, we can replace just the damaged section — saving you money while restoring the look and function of the door.
            </p>
            <p className="text-lg leading-relaxed mb-5">
              We'll assess the damage and let you know honestly whether a panel replacement makes sense or whether a full door is the better investment given the door's age and condition. No upselling — just a straight answer.
            </p>
            <p className="text-lg leading-relaxed">
              Panel availability depends on the door's manufacturer, style, and age. If an exact match isn't available, we'll discuss your options clearly before proceeding.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-5">Our Panel Replacement Service</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Assess extent of damage',
                'Identify panel manufacturer and style',
                'Source matching replacement panel',
                'Remove damaged section safely',
                'Install and align new panel',
                'Inspect hardware and full door operation',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-800 rounded-2xl p-8 text-white text-center">
            <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="text-2xl font-bold mb-2">Get a Honest Assessment</h3>
            <p className="text-blue-200 mb-6">We'll tell you what actually makes sense for your situation.</p>
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