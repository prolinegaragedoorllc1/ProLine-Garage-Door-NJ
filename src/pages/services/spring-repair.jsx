import React from 'react';
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
  return (
    <PageLayout>
      <ServiceHero
        title="Garage Door Spring Repair & Replacement"
        subtitle="Broken torsion or extension spring? We stock common sizes and can often fix it the same day — safely and affordably."
        backgroundImage="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400&q=80"
        heroFeatures={heroFeatures}
      />

      <ServiceContactForm desktopOnly />

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-5">Expert Spring Repair in North New Jersey</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                A broken garage door spring is one of the most common — and most disruptive — problems homeowners face. When a spring snaps, the door typically won't open at all, leaving your car trapped inside or outside. ProLine Garage Door LLC specializes in fast, professional spring repair and replacement for both <strong>torsion</strong> and <strong>extension</strong> spring systems across Bergen County, Passaic County, Morris County and surrounding areas.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                We stock the most common spring sizes so we can usually complete the repair in a single visit without back-ordering parts. Before starting any work, our technicians assess the full system — springs, cables, drums, and hardware — to ensure nothing else is worn or about to fail.
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>Spring replacement is never a DIY job.</strong> Garage door springs are under extreme tension — typically hundreds of pounds of torque. Mishandling them can cause catastrophic injury. Our licensed, insured technicians handle this safely every day.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80"
                alt="Garage door spring replacement technician"
                className="w-full h-80 object-cover" />
            </div>
          </div>

          {/* Torsion vs Extension */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="bg-blue-50 rounded-2xl p-7">
              <Wrench className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Torsion Spring Systems</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                Torsion springs sit horizontally above the door and are the most common type in modern homes. They wind and unwind to counterbalance the door's weight. They last longer than extension springs and provide smoother operation.
              </p>
              <p className="text-slate-600 text-sm">We replace single and double torsion spring setups and can upgrade you to high-cycle springs for extended life.</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-7">
              <Wrench className="w-8 h-8 text-slate-500 mb-3" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Extension Spring Systems</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                Extension springs run along the horizontal tracks on each side of the door. They stretch and contract as the door moves. Older homes often have this style. If one snaps, the door can become severely imbalanced.
              </p>
              <p className="text-slate-600 text-sm">We always replace both extension springs at the same time and add safety cables to prevent injury if one snaps again.</p>
            </div>
          </div>

          {/* What's included */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">What's Included in Our Spring Service</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {included.map((item, i) =>
              <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </div>
              )}
            </div>
          </div>

          {/* Warning signs */}
          <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-xl p-7 mb-12">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-500" /> Signs Your Spring May Be Failing
            </h2>
            <div className="grid sm:grid-cols-2 gap-2">
              {warningSigns.map((s, i) =>
              <div key={i} className="flex items-start gap-2 text-slate-700">
                  <span className="text-yellow-500 font-bold mt-0.5">•</span>
                  <span>{s}</span>
                </div>
              )}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((f, i) =>
              <div key={i} className="border border-slate-200 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-2">{f.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{f.a}</p>
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