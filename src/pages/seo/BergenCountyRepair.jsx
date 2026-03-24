import React from 'react';
import { Phone, CheckCircle2, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

const towns = ['Paramus', 'Fair Lawn', 'Hackensack', 'Teaneck', 'Ridgewood', 'Englewood', 'Fort Lee', 'Garfield', 'Lodi', 'Saddle Brook', 'Rochelle Park', 'Elmwood Park', 'Mahwah', 'Ramsey', 'Wyckoff', 'Midland Park'];

export default function BergenCountyRepair() {
  return (
    <div className="min-h-screen bg-white pb-20 lg:pb-0">
      <SiteHeader />
      <section
        className="relative text-white py-20 md:py-28"
        style={{
          backgroundImage: 'linear-gradient(rgba(10,20,60,0.75), rgba(10,20,60,0.65)), url(https://media.base44.com/images/public/6940c0d91636ce363ecbf035/06a2bcba1_Website-background-updated.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-yellow-400 font-semibold mb-3 text-sm uppercase tracking-wide">ProLine Garage Door LLC — Bergen County, NJ</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">Garage Door Repair in Bergen County, NJ</h1>
          <p className="text-blue-200 text-xl mb-8 max-w-2xl">Trusted garage door repair throughout Bergen County — Paramus, Fair Lawn, Hackensack, Ridgewood, and more. Same-day service available.</p>
          <a href="tel:+12015033118" className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-lg px-10 py-4 rounded-xl transition-colors">
            <Phone className="w-5 h-5" /> Call Now: (201) 503-3118
          </a>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-5">Bergen County's Garage Door Specialists</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                ProLine Garage Door LLC is Bergen County's trusted garage door repair company. We provide fast, honest service for homeowners throughout Paramus, Fair Lawn, Hackensack, Teaneck, Ridgewood, and the surrounding communities — with same-day response in most cases.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Bergen County homeowners call us for spring repairs, broken cables, opener failures, off-track doors, and new door installations. We arrive on time, diagnose quickly, and carry the parts to fix most problems in one visit.
              </p>
              <p className="text-slate-600 leading-relaxed">
                As a locally owned NJ company, we know Bergen County well — the older homes near Hackensack, the newer developments in Mahwah, the historic neighborhoods in Ridgewood. We bring local knowledge and professional expertise to every job.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" alt="Garage door repair Bergen County NJ" className="w-full h-80 object-cover" />
            </div>
          </div>

          {/* Services */}
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Services Available in Bergen County</h2>
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

          {/* Towns */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-blue-600" /> Towns We Serve in Bergen County
            </h2>
            <p className="text-slate-500 text-sm mb-5">We service all of Bergen County including but not limited to:</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {towns.map((t) => (
                <div key={t} className="flex items-center gap-2 text-slate-700 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />{t}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-800 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-2">Garage Door Repair in Bergen County — Call Now</h3>
            <p className="text-blue-200 mb-6">Same-day service available. Free on-site estimate. Licensed & insured.</p>
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