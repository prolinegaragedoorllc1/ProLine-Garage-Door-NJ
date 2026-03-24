import React from 'react';
import { Phone, CheckCircle2, AlertTriangle, Clock } from 'lucide-react';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

const included = [
  'Full roller and track inspection',
  'Old roller removal',
  'Installation of new nylon or steel rollers',
  'Track alignment check',
  'Hinge and bracket inspection',
  'Track lubrication',
  'Balance test after installation',
  'Noise reduction check',
];

const warningSigns = [
  'Loud grinding or squeaking during operation',
  'Shaking or vibrating door movement',
  'Door struggling to move smoothly along tracks',
  'Visually cracked or chipped roller wheels',
  'Door coming partially off the track',
  'Rollers visibly wobbling during movement',
];

const rollerTypes = [
  { name: 'Nylon Rollers', desc: 'The best choice for quiet, smooth operation. 10-ball bearing nylon rollers reduce noise significantly and don\'t require frequent lubrication. Ideal for attached garages adjacent to living spaces.' },
  { name: 'Steel Rollers', desc: 'Highly durable and load-bearing. Best for heavy doors or high-cycle use. They require more lubrication and can be louder than nylon but are extremely long-lasting in the right application.' },
  { name: 'High-Cycle Rollers', desc: 'Rated for 100,000+ cycles. Ideal if you open and close your door many times per day. These use sealed bearings and premium materials for maximum longevity.' },
];

const faqs = [
  { q: 'How many rollers does my garage door have?', a: 'A standard single-car door typically has 10–12 rollers. A double-car door has 12–14. The exact count depends on the door height and track configuration.' },
  { q: 'How long do garage door rollers last?', a: 'Standard steel rollers last 5–7 years. Quality nylon rollers last 12–15 years. High-cycle rollers can last 20+ years with proper maintenance.' },
  { q: 'Will new rollers really make my door quieter?', a: 'Yes — significantly. Worn steel rollers are often the #1 cause of noisy garage doors. Replacing them with 10-ball nylon rollers is one of the most effective noise reduction upgrades available.' },
  { q: 'Can I replace rollers myself?', a: 'The bottom roller brackets are under spring tension and are dangerous to replace without the right tools and training. We strongly recommend professional service for a complete roller replacement.' },
];

export default function RollerReplacement() {
  return (
    <div className="min-h-screen bg-white pb-20 lg:pb-0">
      <SiteHeader />

      {/* Hero */}
      <section
        className="relative text-white py-20 md:py-28"
        style={{
          backgroundImage: 'linear-gradient(rgba(10,20,60,0.72), rgba(10,20,60,0.65)), url(https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=1400&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-yellow-400 font-semibold mb-3 text-sm uppercase tracking-wide">ProLine Garage Door LLC — New Jersey</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">Garage Door Roller Replacement</h1>
          <p className="text-blue-200 text-xl mb-8 max-w-2xl">Noisy, shaky, or rough door operation? New rollers can make your garage door quiet and smooth again — often in under an hour.</p>
          <a href="tel:+12015033118" className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-lg px-10 py-4 rounded-xl transition-colors">
            <Phone className="w-5 h-5" /> Call Now: (201) 503-3118
          </a>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-5">Smoother, Quieter Door Operation</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Garage door rollers are small wheels that ride inside the vertical and horizontal tracks, guiding the door up and down. Over time, these rollers wear out — the ball bearings deteriorate, the wheels crack, or they simply accumulate too much dirt and grime to spin properly. The result is a noisy, jerky door that strains your opener.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                ProLine Garage Door LLC offers professional roller replacement throughout New Jersey. We use quality nylon and steel rollers to restore smooth, quiet operation. Whether your door sounds like it's waking the neighborhood or it's visibly shaking on the way up, new rollers often solve the problem instantly.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We always perform a full inspection during roller replacement — checking the tracks for alignment, the hinges for wear, and the overall balance of the door — so we catch any related issues before they become bigger problems.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
                alt="Garage door roller replacement service"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>

          {/* Roller types */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Roller Options We Offer</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {rollerTypes.map((r, i) => (
                <div key={i} className="bg-slate-50 rounded-2xl p-6">
                  <h3 className="font-bold text-slate-900 mb-2">{r.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What's included */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">What's Included in Our Roller Service</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {included.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Warning signs */}
          <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-xl p-7 mb-12">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-500" /> Signs Your Rollers Need Replacing
            </h2>
            <div className="grid sm:grid-cols-2 gap-2">
              {warningSigns.map((s, i) => (
                <div key={i} className="flex items-start gap-2 text-slate-700">
                  <span className="text-yellow-500 font-bold mt-0.5">•</span>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
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

          <div className="bg-blue-800 rounded-2xl p-8 text-white text-center">
            <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="text-2xl font-bold mb-2">Quick Turnaround — Most Jobs Under 1 Hour</h3>
            <p className="text-blue-200 mb-6">Call us today — roller replacement is one of our fastest services. We're in and out, and your door is back to normal.</p>
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