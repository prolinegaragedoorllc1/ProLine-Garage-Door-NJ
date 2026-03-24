import React from 'react';
import { Phone, CheckCircle2, Wrench, Shield, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

const services = [
  { title: 'Spring Repair', desc: 'Broken torsion or extension spring? We replace it same day.', path: '/garage-door-spring-repair' },
  { title: 'Opener Repair', desc: 'Diagnose and fix any opener brand — LiftMaster, Chamberlain, Craftsman.', path: '/garage-door-opener-repair' },
  { title: 'Cable Repair', desc: 'Snapped or frayed cable? We restore balance and safe operation.', path: '/garage-door-cable-repair' },
  { title: 'New Door Installation', desc: 'Upgrade your home with a modern, insulated garage door.', path: '/garage-door-installation' },
  { title: 'Off-Track Repair', desc: 'Door derailed from the track? We realign and secure it fast.', path: '/garage-door-repair' },
  { title: 'Full Tune-Up', desc: 'Lubrication, balance check, hardware tightening — extends door life.', path: '/garage-door-repair' },
];

export default function GarageDoorRepair() {
  return (
    <div className="min-h-screen bg-white pb-20 lg:pb-0">
      <SiteHeader />

      {/* SEO Meta (injected via Helmet would be ideal, but inline for now) */}
      <section
        className="relative text-white py-20 md:py-28"
        style={{
          backgroundImage: 'linear-gradient(rgba(10,20,60,0.72), rgba(10,20,60,0.60)), url(https://media.base44.com/images/public/6940c0d91636ce363ecbf035/06a2bcba1_Website-background-updated.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-yellow-400 font-semibold mb-3 text-sm uppercase tracking-wide">ProLine Garage Door LLC — New Jersey</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">Garage Door Repair in New Jersey</h1>
          <p className="text-blue-200 text-xl mb-8 max-w-2xl">Fast, reliable garage door repair for homeowners across Bergen County, Morris County, Passaic County and all of New Jersey. Same-day service available.</p>
          <a href="tel:+12015033118" className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-lg px-10 py-4 rounded-xl transition-colors">
            <Phone className="w-5 h-5" /> Call Now: (201) 503-3118
          </a>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Intro */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-5">Your Local Garage Door Repair Experts</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                When your garage door stops working, you need a company that responds fast and gets it right the first time. ProLine Garage Door LLC has been serving New Jersey homeowners with professional, honest garage door repair — no unnecessary upsells, no hidden fees.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Whether your door won't open, makes a loud bang, or moves unevenly, our experienced technicians diagnose the problem quickly and carry the parts needed to fix most issues in a single visit. We service all brands and door types — wood, steel, aluminum, and composite.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We serve communities throughout New Jersey including Paramus, Wayne, Fair Lawn, Hackensack, Clifton, Morristown, Parsippany, and dozens more. Emergency service is available 24/7 — because garage door failures don't wait for business hours.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80" alt="Garage door repair technician New Jersey" className="w-full h-80 object-cover" />
            </div>
          </div>

          {/* Services grid */}
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Repair Services We Provide</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {services.map((s, i) => (
              <Link key={i} to={s.path} className="bg-slate-50 rounded-2xl p-6 hover:shadow-md transition-shadow group block">
                <Wrench className="w-6 h-6 text-blue-600 mb-3" />
                <h3 className="font-bold text-slate-900 mb-1 group-hover:text-blue-700">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>

          {/* Trust */}
          <div className="grid sm:grid-cols-3 gap-5 mb-14">
            {[
              { icon: Clock, title: 'Same-Day Service', desc: 'We prioritize rapid response — most repairs completed the same day you call.' },
              { icon: Shield, title: 'Licensed & Insured', desc: 'NJ HIC License #13VH14019600. Fully insured and bonded for your peace of mind.' },
              { icon: Star, title: '5-Star Rated', desc: 'Perfect Google rating built on hundreds of satisfied New Jersey homeowners.' },
            ].map((t, i) => (
              <div key={i} className="bg-blue-50 rounded-2xl p-6 text-center">
                <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <t.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{t.title}</h3>
                <p className="text-slate-600 text-sm">{t.desc}</p>
              </div>
            ))}
          </div>

          {/* What to expect */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-5">What to Expect When You Call ProLine</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'You Call or Request a Quote', desc: 'Reach us at (201) 503-3118. We\'ll ask a few quick questions to understand what\'s happening.' },
                { step: '2', title: 'We Arrive — Often Same Day', desc: 'Our technician arrives with the tools and parts to handle most common repairs on the spot.' },
                { step: '3', title: 'Honest Diagnosis & Clear Quote', desc: 'We explain exactly what\'s wrong and give you a flat price — before any work begins.' },
                { step: '4', title: 'Repair Completed & Tested', desc: 'We fix the problem, test the door fully, and clean up before we leave.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0">{item.step}</div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-800 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-2">Need Garage Door Repair in New Jersey?</h3>
            <p className="text-blue-200 mb-6">Call now for a free estimate — we're available same day throughout Bergen, Morris, and Passaic Counties.</p>
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