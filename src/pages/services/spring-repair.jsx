import React from 'react';
import useVisitorCity from '@/hooks/useVisitorCity';
import { Phone, CheckCircle2, AlertTriangle, Clock, Wrench } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import ServiceHero from '@/components/ServiceHero';
import ServiceContactForm from '@/components/ServiceContactForm';
import GoogleReviewsCarousel from '@/components/GoogleReviewsCarousel';

const included = [
'Full spring system inspection',
'Broken spring removal & disposal',
'Replacement with correct-spec spring',
'Tension & balance adjustment',
'Lubrication of all moving parts',
'Cable & drum check',
'Safety reversal test',
'Same-day completion (most cases)'];

const warningSigns = [
'Loud bang from the garage (spring snapping)',
'Door feels extremely heavy when lifted manually',
'Door opens only a few inches then stops',
'Visible gap or break in the spring coil',
'Opener motor straining or reversing immediately',
'Uneven or crooked door movement'];

const faqs = [
{ q: 'How long does a garage door spring last?', a: 'Most torsion springs are rated for 10,000–20,000 cycles. With average use (2–4 times per day), that\'s about 7–14 years. Extension springs typically last shorter.' },
{ q: 'Can I open my garage door with a broken spring?', a: 'Technically yes via the emergency cord, but we strongly advise against it. The door is extremely heavy without spring support and can cause injury or damage to the opener.' },
{ q: 'Should I replace both springs at the same time?', a: 'Yes — if one spring has broken, the other is likely near the end of its life too. Replacing both saves you a second service call and keeps the door balanced.' },
{ q: 'Do you offer a warranty on spring replacements?', a: 'Yes, we warranty our parts and labor. Ask our technician for details on your specific replacement.' }];

const heroFeatures = [
'Torsion & extension spring repair',
'Same-day service available',
'Licensed & insured technicians',
'Upfront, honest pricing',
'Warranty on parts & labor',
'Both springs replaced for balanced lifting',
];

export default function SpringRepair() {
  const city = useVisitorCity();
  return (
    <PageLayout>
      <ServiceHero
        title="Garage Door Spring Repair & Replacement"
        subtitle="Broken torsion or extension spring? We stock common sizes and can often fix it the same day — safely and affordably."
        backgroundImage="https://media.base44.com/images/public/6940c0d91636ce363ecbf035/d931dcfc4_garage-door-spring-madison-huntsville-alabama-overhead-door-company-.jpg"
        heroFeatures={heroFeatures}
      />

      <ServiceContactForm desktopOnly />

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-5">Expert Spring Repair in {city}</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                When a spring snaps, your door won't open — and the fix is dangerous without the right tools. ProLine technicians arrive fast, diagnose the full system, and replace your springs on the same visit in most cases.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                We stock common spring sizes for torsion and extension systems. <strong>Don't attempt a DIY fix</strong> — springs are under extreme tension and can cause serious injury.
              </p>
              <a href="tel:+12015033118" className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-xl transition-colors text-base">
                📞 Call Now — Same Day Service
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://media.base44.com/images/public/6940c0d91636ce363ecbf035/b857ec4a0_81hxJg4vvrL.jpg"
                alt="Garage door spring replacement technician"
                className="w-full h-80 object-cover object-center" />
            </div>
          </div>

          {/* Torsion vs Extension */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-7 shadow-sm">
              <Wrench className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Torsion Spring Systems</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                Torsion springs sit horizontally above the door and are the most common type in modern homes. They wind and unwind to counterbalance the door's weight. They last longer than extension springs and provide smoother operation.
              </p>
              <p className="text-slate-600 text-sm">We replace single and double torsion spring setups and can upgrade you to high-cycle springs for extended life.</p>
            </div>
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-300 rounded-2xl p-7 shadow-sm">
              <Wrench className="w-8 h-8 text-slate-500 mb-3" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Extension Spring Systems</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                Extension springs run along the horizontal tracks on each side of the door. They stretch and contract as the door moves. Older homes often have this style. If one snaps, the door can become severely imbalanced.
              </p>
              <p className="text-slate-600 text-sm">We always replace both extension springs at the same time and add safety cables to prevent injury if one snaps again.</p>
            </div>
          </div>

          {/* What's included */}
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-8 mb-12 text-white shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <h2 className="text-2xl font-bold mb-6 relative">What's Included in Our Spring Service</h2>
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
              <h2 className="text-xl font-bold text-slate-900">Signs Your Spring May Be Failing</h2>
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
            <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="text-2xl font-bold mb-2">Same-Day Service Available</h3>
            <p className="text-blue-200 mb-6">Call us and we'll dispatch a technician to you as quickly as possible — most repairs done within hours.</p>
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