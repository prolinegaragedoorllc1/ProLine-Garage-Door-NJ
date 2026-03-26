import React from 'react';
import { Phone, CheckCircle2, AlertTriangle, Clock } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import ServiceHero from '@/components/ServiceHero';
import ServiceContactForm from '@/components/ServiceContactForm';
import GoogleReviewsCarousel from '@/components/GoogleReviewsCarousel';

const included = [
'Damage and panel match assessment',
'Measurement of existing panels',
'Panel sourcing and ordering',
'Old panel removal',
'New panel installation',
'Hinge and hardware check',
'Balance and alignment test',
'Final visual and operational inspection'];

const warningSigns = [
'Dented panel from vehicle impact',
'Cracked or split panel sections',
'Rust or severe corrosion on steel panels',
'Panel gaps causing drafts or pest entry',
'Water or moisture damage on wood panels',
'Bent panel affecting door movement'];

const faqs = [
{ q: 'Can you match my existing door panels?', a: 'In most cases, yes. We work with major manufacturers and distributors to source matching panels. Older or discontinued doors may be harder to match — we\'ll assess this during the initial visit and give you honest options.' },
{ q: 'Is it cheaper to replace a panel or the whole door?', a: 'Replacing a single panel is almost always significantly cheaper than a full door replacement. However, if multiple panels are damaged or the door is very old, a full replacement may be more cost-effective in the long run.' },
{ q: 'How long does panel replacement take?', a: 'The assessment visit takes 20–30 minutes. If we have the panel in stock, installation is typically done in 1–2 hours. Special-order panels typically arrive within 3–7 business days.' },
{ q: 'Will my insurance cover panel replacement from a car impact?', a: 'Accidental damage to your garage door is often covered under homeowner\'s insurance. We can provide documentation and photos to support your claim.' }];

const heroFeatures = [
'Panel matching for all major brands',
'No need to replace the full door',
'Free on-site damage assessment',
'Steel, insulated & wood-look panels',
'Licensed & insured technicians',
'Licensed, Insured & Bonded',
];

export default function PanelReplacement() {
  return (
    <PageLayout>
      <ServiceHero
        title="Garage Door Panel Replacement"
        subtitle="Dented, cracked, or damaged panel? You don't need a whole new door — we can often replace just the affected section and restore your door's look and function."
        backgroundImage="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1400&q=80"
        heroFeatures={heroFeatures}
      />

      <ServiceContactForm desktopOnly />

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-5">Restore Your Door's Appearance & Function</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                A damaged garage door panel is one of the most common calls we receive — and one of the most satisfying to fix. Whether it's from a vehicle backup, a basketball, weather damage, or age-related corrosion, a dented or cracked panel doesn't have to mean a full door replacement. ProLine Garage Door LLC specializes in locating, sourcing, and installing matching replacement panels throughout North New Jersey.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                We start by assessing the damage and the current condition of the door. If the door is structurally sound and only 1–2 panels are damaged, replacement is almost always the most economical choice. We work to source panels that match your existing door's style, color, and texture as closely as possible.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Beyond the cosmetic fix, damaged panels can compromise your garage's insulation, security, and structural integrity. A bent panel can also interfere with track alignment and put extra strain on your opener — so it's always worth addressing promptly.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80"
                alt="Garage door panel replacement"
                className="w-full h-80 object-cover" />
            </div>
          </div>

          {/* Panel types */}
          <div className="grid md:grid-cols-3 gap-5 mb-12">
            {[
            { name: 'Steel Panels', desc: 'The most common material. Durable, low-maintenance, and available in many styles. Can be painted or matched to existing finish.' },
            { name: 'Insulated Panels', desc: 'Double or triple-layer with foam core insulation. Best for attached garages or homes in temperature extremes. Energy efficient.' },
            { name: 'Wood & Wood-Look', desc: 'Classic and beautiful, but requires more maintenance. We work with real wood and composite wood-look panels to match traditional doors.' }].
            map((t, i) =>
            <div key={i} className="bg-slate-50 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-2">{t.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{t.desc}</p>
              </div>
            )}
          </div>

          {/* What's included */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Panel Replacement Process</h2>
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
              <AlertTriangle className="w-5 h-5 text-yellow-500" /> When to Replace a Panel
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

          <div className="bg-blue-800 rounded-2xl p-8 text-white text-center">
            <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="text-2xl font-bold mb-2">Free Assessment — No Obligation</h3>
            <p className="text-blue-200 mb-6">We'll come out, assess the damage, and give you an honest recommendation — whether that's a panel replacement or something else entirely.</p>
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