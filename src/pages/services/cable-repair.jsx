import React from 'react';
import { Phone, CheckCircle2, AlertTriangle, Clock, Shield } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import ServiceHero from '@/components/ServiceHero';
import ServiceContactForm from '@/components/ServiceContactForm';
import GoogleReviewsCarousel from '@/components/GoogleReviewsCarousel';

const included = [
'Visual inspection of both cables and drums',
'Broken cable removal',
'Replacement with correct-gauge cable',
'Drum and pulley inspection',
'Cable tension & balance adjustment',
'Bottom bracket inspection',
'Full safety test before completion',
'Lubrication of all moving parts'];

const warningSigns = [
'Cable hanging loosely off the drum',
'Door appears crooked or tilted when opening',
'Grinding or scraping noise during operation',
'Door jerks or hesitates on one side',
'Visible fraying, kinking, or rust on the cable',
'Door falls faster on one side when closing'];

const faqs = [
{ q: 'How long do garage door cables last?', a: 'Cables typically last 8–15 years depending on use and climate. Humidity and salt air (near the coast) can accelerate corrosion. We recommend inspection every 2 years.' },
{ q: 'Can I replace just one cable?', a: 'We strongly recommend replacing both cables at the same time. If one has worn enough to break, the other is close behind. Replacing both ensures balanced lifting and prevents a second service call.' },
{ q: 'Is a broken cable dangerous?', a: 'Yes. With a broken cable the door becomes extremely unbalanced. Operating it can damage the opener, bend tracks, or cause the door to drop suddenly. Stop using the door and call us immediately.' },
{ q: 'Do you carry cables for all door types?', a: 'We carry cables for most standard residential door widths (8ft, 9ft, 10ft, 16ft) and heights. We also carry high-lift and low-headroom configurations.' }];

const heroFeatures = [
'Broken & frayed cable replacement',
'Both cables replaced for safety',
'Same-day service available',
'Licensed & insured technicians',
'Drum and pulley inspection included',
'Safety cables installed on extension springs',
];

export default function CableRepair() {
  return (
    <PageLayout>
      <ServiceHero
        title="Garage Door Cable Repair & Replacement"
        subtitle="Broken or frayed cable? A snapped cable can make your door dangerous — we'll fix it fast, the right way."
        backgroundImage="https://media.base44.com/images/public/6940c0d91636ce363ecbf035/6d6d915ae_1.jpg"
        heroFeatures={heroFeatures}
      />

      <ServiceContactForm desktopOnly />

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-5">Professional Cable Repair in New Jersey</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                A snapped or frayed cable makes your door dangerous — it can drop suddenly and damage the opener. <strong>Stop using the door immediately</strong> and call us. We carry cables for most residential doors and can fix it the same day.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                We replace both cables at once, inspect the drums and pulleys, and make sure everything is balanced before we leave.
              </p>
              <a href="tel:+12015033118" className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-xl transition-colors text-base">
                📞 Call Now — Same Day Service
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                alt="Garage door cable repair technician"
                className="w-full h-80 object-cover" />
            </div>
          </div>

          {/* How cables work */}
          <div className="bg-blue-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">How Garage Door Cables Work</h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Your garage door has two cables — one on each side. They wrap around drums (cylinders) mounted to the torsion bar above the door. As the spring winds and unwinds, it rotates the drums, which wind and unwind the cables, raising or lowering the door evenly on both sides.
            </p>
            <p className="text-slate-600 leading-relaxed">
              If a cable frays, snaps, or pops off the drum, one side of the door loses its lifting support. The door tilts, the tracks bind, and in severe cases the door can drop or the opener can be permanently damaged. The sooner you call, the less secondary damage occurs.
            </p>
          </div>

          {/* What's included */}
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-8 mb-12 text-white shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <h2 className="text-2xl font-bold mb-6 relative">What's Included in Our Cable Service</h2>
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
              <h2 className="text-xl font-bold text-slate-900">Warning Signs of Cable Failure</h2>
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

          {/* CTA */}
          <div className="bg-blue-800 rounded-2xl p-8 text-white text-center">
            <Shield className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="text-2xl font-bold mb-2">Don't Risk Using a Door With a Broken Cable</h3>
            <p className="text-blue-200 mb-6">Call us now for a fast response — we'll assess and repair the cable the same day in most cases.</p>
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