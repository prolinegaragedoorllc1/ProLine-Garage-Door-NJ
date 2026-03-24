import React from 'react';
import { Phone, CheckCircle2, Clock, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GarageDoorOpeners() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Garage Door Openers</h1>
          <p className="text-blue-200 text-xl">Repair or replacement of all major opener brands — belt-drive, chain-drive, and smart openers.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-slate-700 mb-12">
            <p className="text-lg leading-relaxed mb-5">
              Garage door openers fail for various reasons — motor burnout, stripped gears, circuit board issues, or just age. ProLine diagnoses and repairs openers from most major brands, and installs new units when repair isn't the right call.
            </p>
            <p className="text-lg leading-relaxed mb-5">
              We install belt-drive openers (quiet, good for attached garages), chain-drive (reliable, cost-effective), and Wi-Fi enabled smart openers that let you control your door from your phone.
            </p>
            <p className="text-lg leading-relaxed">
              If your opener is more than 10–12 years old and failing, replacement is often more economical than repair. We'll give you a straightforward recommendation either way.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 mb-10">
            {[
              { title: 'Belt Drive', desc: 'Quiet operation. Great for garages attached to living spaces.' },
              { title: 'Chain Drive', desc: 'Durable and affordable. Slight more noise but very reliable.' },
              { title: 'Smart Opener', desc: 'Wi-Fi enabled. Control and monitor your door from anywhere.' },
            ].map((type, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <Settings className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">{type.title}</h3>
                <p className="text-slate-600 text-sm">{type.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-5">Opener Services We Provide</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Opener diagnosis and repair',
                'Full opener replacement & installation',
                'Remote and keypad programming',
                'Safety sensor alignment',
                'Smart opener setup & Wi-Fi connection',
                'Force and travel limit adjustment',
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
            <h3 className="text-2xl font-bold mb-2">Opener Not Working?</h3>
            <p className="text-blue-200 mb-6">We carry common replacement units and can often install the same day.</p>
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