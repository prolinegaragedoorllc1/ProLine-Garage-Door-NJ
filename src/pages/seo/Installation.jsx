import React from 'react';
import { Phone, CheckCircle2, Award, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

const doorTypes = [
  { name: 'Steel Doors', desc: 'The most popular choice — durable, low-maintenance, and available in dozens of styles and colors. Excellent insulation options available.' },
  { name: 'Raised Panel', desc: 'Classic look that suits most NJ homes. Available in steel, composite, and wood. The most requested style in Bergen and Morris Counties.' },
  { name: 'Carriage House Style', desc: 'Elegant, traditional look with modern convenience. Available with decorative hardware and windows to match any home aesthetic.' },
  { name: 'Modern / Flush Panel', desc: 'Clean, contemporary lines for modern homes. Available in full-view aluminum/glass or flush steel for a sleek curb appeal upgrade.' },
  { name: 'Insulated Doors', desc: 'Double or triple-layer construction significantly reduces energy loss, noise, and temperature fluctuation in attached garages.' },
  { name: 'Custom Sizes', desc: 'Non-standard openings, oversized garages, or unique configurations — we source and install doors for any size opening.' },
];

export default function Installation() {
  return (
    <div className="min-h-screen bg-white pb-20 lg:pb-0">
      <SiteHeader />
      <section
        className="relative text-white py-20 md:py-28"
        style={{
          backgroundImage: 'linear-gradient(rgba(10,20,60,0.72), rgba(10,20,60,0.65)), url(https://media.base44.com/images/public/6940c0d91636ce363ecbf035/42ad8fe28_generated_image.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-yellow-400 font-semibold mb-3 text-sm uppercase tracking-wide">ProLine Garage Door LLC — New Jersey</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">Garage Door Installation in New Jersey</h1>
          <p className="text-blue-200 text-xl mb-8 max-w-2xl">New door installation for Bergen County, Morris County, and all of New Jersey. Transform your home's curb appeal with a quality replacement door.</p>
          <a href="tel:+12015033118" className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-lg px-10 py-4 rounded-xl transition-colors">
            <Phone className="w-5 h-5" /> Call Now: (201) 503-3118
          </a>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-5">New Garage Door Installation — New Jersey</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                A new garage door is one of the highest-ROI home improvements you can make. It boosts curb appeal, improves energy efficiency, and adds a layer of security that aging doors simply can't provide. ProLine Garage Door LLC installs quality doors for homeowners throughout New Jersey — Bergen County, Morris County, Passaic County, and beyond.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                We work with you to choose the right door style, material, and insulation level for your home. We measure your opening precisely, handle all hardware removal, and complete the installation cleanly and efficiently. Most single-door installations are completed in half a day.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We serve homeowners in Paramus, Ridgewood, Wayne, Hackensack, Morristown, Parsippany, Clifton, Fair Lawn, and throughout the region. Call for a free, no-obligation estimate.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80" alt="New garage door installation New Jersey" className="w-full h-80 object-cover" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-6">Door Styles We Install</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {doorTypes.map((d, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-2">{d.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-5">What's Included in Our Installation</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {['Site measurement and door sizing', 'Old door and hardware removal', 'New track and hardware installation', 'New door panel installation', 'Opener compatibility check', 'Spring and cable setup', 'Balance and safety test', 'Clean-up after completion'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-6 mb-8 text-sm text-slate-600">
            <p>Related services: <Link to="/garage-door-repair" className="text-blue-600 hover:underline font-medium">Garage Door Repair</Link> · <Link to="/garage-door-opener-repair" className="text-blue-600 hover:underline font-medium">Opener Installation</Link> · <Link to="/services/panel-replacement" className="text-blue-600 hover:underline font-medium">Panel Replacement</Link></p>
          </div>

          <div className="bg-blue-800 rounded-2xl p-8 text-white text-center">
            <Award className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="text-2xl font-bold mb-2">Free On-Site Estimate — No Obligation</h3>
            <p className="text-blue-200 mb-6">We'll measure your opening, show you door options, and give you a clear price — before any commitment.</p>
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