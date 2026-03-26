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
'Insurance claim documentation provided',
];

export default function PanelReplacement() {
  return (
    <PageLayout>
      <ServiceHero
        title="Garage Door Panel Replacement"
        subtitle="Dented, cracked, or damaged panel? You don't need a whole new door — we can often replace just the affected section and restore your door's look and function."
        backgroundImage="https://media.base44.com/images/public/6940c0d91636ce363ecbf035/48f63688c_panels-in-stock-2.jpg"
        heroFeatures={heroFeatures}
      />

      <ServiceContactForm desktopOnly />

      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-5">Restore Your Door's Appearance & Function</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Dented or cracked panel? You likely don't need a full door replacement. We source matching panels for most major brands and install them fast — saving you hundreds compared to a full door swap.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                We assess the damage on-site, find the closest match, and handle the full installation. Homeowner's insurance often covers vehicle impact damage — we provide the documentation.
              </p>
              <a href="tel:+12015033118" className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-xl transition-colors text-base">
                📞 Call for a Free Assessment
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://media.base44.com/images/public/6940c0d91636ce363ecbf035/a7cb82888_Garage-Door-Panel.jpg"
                alt="Garage door panel replacement"
                className="w-full h-80 object-cover object-center" />
            </div>
          </div>

          {/* Panel types */}
          <div className="grid md:grid-cols-3 gap-5 mb-12">
            {[
            { name: 'Steel Panels', desc: 'The most common material. Durable, low-maintenance, and available in many styles. Can be painted or matched to existing finish.' },
            { name: 'Insulated Panels', desc: 'Double or triple-layer with foam core insulation. Best for attached garages or homes in temperature extremes. Energy efficient.' },
            { name: 'Wood & Wood-Look', desc: 'Classic and beautiful, but requires more maintenance. We work with real wood and composite wood-look panels to match traditional doors.' }].
            map((t, i) =>
            <div key={i} className="bg-gradient-to-br from-blue-50 to-slate-100 border border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-slate-900 mb-2">{t.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{t.desc}</p>
              </div>
            )}
          </div>

          {/* What's included */}
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-8 mb-12 text-white shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <h2 className="text-2xl font-bold mb-6 relative">Our Panel Replacement Process</h2>
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
              <h2 className="text-xl font-bold text-slate-900">When to Replace a Panel</h2>
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