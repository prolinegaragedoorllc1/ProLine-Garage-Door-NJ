import React from 'react';
import { Phone, CheckCircle2, AlertTriangle, Clock } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import ServiceHero from '@/components/ServiceHero';
import ServiceContactForm from '@/components/ServiceContactForm';
import GoogleReviewsCarousel from '@/components/GoogleReviewsCarousel';

const included = [
'Full roller and track inspection',
'Old roller removal',
'Installation of new nylon or steel rollers',
'Track alignment check',
'Hinge and bracket inspection',
'Track lubrication',
'Balance test after installation',
'Noise reduction check'];

const warningSigns = [
'Loud grinding or squeaking during operation',
'Shaking or vibrating door movement',
'Door struggling to move smoothly along tracks',
'Visually cracked or chipped roller wheels',
'Door coming partially off the track',
'Rollers visibly wobbling during movement'];

const rollerTypes = [
{ name: 'Nylon Rollers', desc: 'The best choice for quiet, smooth operation. 10-ball bearing nylon rollers reduce noise significantly and don\'t require frequent lubrication. Ideal for attached garages adjacent to living spaces.' },
{ name: 'Steel Rollers', desc: 'Highly durable and load-bearing. Best for heavy doors or high-cycle use. They require more lubrication and can be louder than nylon but are extremely long-lasting in the right application.' },
{ name: 'High-Cycle Rollers', desc: 'Rated for 100,000+ cycles. Ideal if you open and close your door many times per day. These use sealed bearings and premium materials for maximum longevity.' }];

const faqs = [
{ q: 'How many rollers does my garage door have?', a: 'A standard single-car door typically has 10–12 rollers. A double-car door has 12–14. The exact count depends on the door height and track configuration.' },
{ q: 'How long do garage door rollers last?', a: 'Standard steel rollers last 5–7 years. Quality nylon rollers last 12–15 years. High-cycle rollers can last 20+ years with proper maintenance.' },
{ q: 'Will new rollers really make my door quieter?', a: 'Yes — significantly. Worn steel rollers are often the #1 cause of noisy garage doors. Replacing them with 10-ball nylon rollers is one of the most effective noise reduction upgrades available.' },
{ q: 'Can I replace rollers myself?', a: 'The bottom roller brackets are under spring tension and are dangerous to replace without the right tools and training. We strongly recommend professional service for a complete roller replacement.' }];

const heroFeatures = [
'Nylon & steel roller options',
'Most jobs completed in under 1 hour',
'Significant noise reduction guaranteed',
'Track alignment check included',
'Licensed & insured technicians',
'High-cycle rollers available (100,000+ cycles)',
];

export default function RollerReplacement() {
  return (
    <PageLayout>
      <ServiceHero
        title="Garage Door Roller Replacement"
        subtitle="Noisy, shaky, or rough door operation? New rollers can make your garage door quiet and smooth again — often in under an hour."
        backgroundImage="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1400&q=80"
        heroFeatures={heroFeatures}
      />

      <ServiceContactForm desktopOnly />

      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
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
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Garage door roller replacement service"
                className="w-full h-80 object-cover" />
            </div>
          </div>

          {/* Roller types */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Roller Options We Offer</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {rollerTypes.map((r, i) =>
              <div key={i} className="bg-gradient-to-br from-blue-50 to-slate-100 border border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-slate-900 mb-2">{r.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{r.desc}</p>
                </div>
              )}
            </div>
          </div>

          {/* What's included */}
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-8 mb-12 text-white shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <h2 className="text-2xl font-bold mb-6 relative">What's Included in Our Roller Service</h2>
            <div className="grid sm:grid-cols-2 gap-3 relative">
              {included.map((item, i) =>
              <div key={i} className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-blue-50 text-sm">{item}</span>
                </div>
              )}
            </div>
          </div>

          {/* Warning signs */}
          <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-7 mb-12 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-yellow-500 rounded-xl p-2">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Signs Your Rollers Need Replacing</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {warningSigns.map((s, i) =>
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl px-4 py-3 shadow-sm">
                  <span className="text-yellow-500 font-bold text-lg mt-0.5">!</span>
                  <span className="text-slate-700 text-sm">{s}</span>
                </div>
              )}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((f, i) =>
              <div key={i} className="group border-l-4 border-blue-600 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="text-blue-600 font-black text-lg">Q</span> {f.q}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed pl-6">{f.a}</p>
                </div>
              )}
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

      <ServiceContactForm mobileOnly />
      <GoogleReviewsCarousel />
    </PageLayout>
  );
}