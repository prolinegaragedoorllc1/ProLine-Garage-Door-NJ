import React from 'react';
import { Phone, CheckCircle2, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

const towns = ['Clifton', 'Passaic', 'Paterson', 'Wayne', 'Totowa', 'Little Falls', 'Woodland Park', 'Pompton Lakes', 'Ringwood', 'Wanaque', 'Hawthorne', 'Prospect Park', 'Haledon', 'North Haledon', 'Bloomingdale', 'West Milford'];

export default function PassaicCountyRepair() {
  return (
    <div className="min-h-screen bg-white pb-20 lg:pb-0">
      <SiteHeader />
      <section
        className="relative text-white py-20 md:py-28"
        style={{
          backgroundImage: 'linear-gradient(rgba(10,20,60,0.75), rgba(10,20,60,0.65)), url(https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1400&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-yellow-400 font-semibold mb-3 text-sm uppercase tracking-wide">ProLine Garage Door LLC — Passaic County, NJ</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">Garage Door Repair in Passaic County, NJ</h1>
          <p className="text-blue-200 text-xl mb-8 max-w-2xl">Professional garage door repair throughout Passaic County — Wayne, Clifton, Totowa, Little Falls, and more. Same-day service available.</p>
          <a href="tel:+12015033118" className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-lg px-10 py-4 rounded-xl transition-colors">
            <Phone className="w-5 h-5" /> Call Now: (201) 503-3118
          </a>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-5">Serving Passaic County Homeowners</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                ProLine Garage Door LLC provides expert garage door repair, spring replacement, opener installation, and new door service throughout Passaic County, New Jersey. Whether you're in Wayne, Clifton, Totowa, Little Falls, or Woodland Park — we respond fast and fix it right.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our technicians are familiar with Passaic County neighborhoods and carry common replacement parts for same-day repair. We provide honest, flat-rate pricing before we start — no surprises on the final bill.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We are a licensed New Jersey Home Improvement Contractor (HIC #13VH14019600) with a perfect 5-star Google rating built on real customer experiences across Passaic County and the surrounding region.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80" alt="Garage door repair Passaic County NJ" className="w-full h-80 object-cover" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-6">Services Available in Passaic County</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
            {[
              { label: 'Spring Repair', path: '/garage-door-spring-repair' },
              { label: 'Opener Repair & Install', path: '/garage-door-opener-repair' },
              { label: 'Cable Repair', path: '/garage-door-cable-repair' },
              { label: 'Roller Replacement', path: '/services/roller-replacement' },
              { label: 'Panel Replacement', path: '/services/panel-replacement' },
              { label: 'New Door Installation', path: '/garage-door-installation' },
            ].map((s, i) => (
              <Link key={i} to={s.path} className="flex items-center gap-3 bg-slate-50 rounded-xl px-5 py-4 hover:bg-blue-50 hover:text-blue-700 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="font-semibold text-slate-800">{s.label}</span>
              </Link>
            ))}
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-blue-600" /> Towns We Serve in Passaic County
            </h2>
            <p className="text-slate-500 text-sm mb-5">We service all of Passaic County including but not limited to:</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {towns.map((t) => (
                <div key={t} className="flex items-center gap-2 text-slate-700 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />{t}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-800 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-2">Garage Door Repair in Passaic County — Call Now</h3>
            <p className="text-blue-200 mb-6">Same-day service available. Free estimate. No hidden fees.</p>
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