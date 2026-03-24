import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ChevronDown, ChevronUp, Shield, Zap, Volume2, Wrench, AlertTriangle, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet';

const faqs = [
  {
    category: 'Safety',
    icon: Shield,
    color: 'text-red-500',
    bg: 'bg-red-50',
    questions: [
      {
        q: 'Is it safe to use my garage door if the spring is broken?',
        a: 'No. A broken spring means the door is not counterbalanced — it can fall unexpectedly and cause serious injury or damage to your vehicle. Do not use the door until the spring is professionally replaced. Call us for same-day emergency service.',
      },
      {
        q: 'How do I know if my garage door is safe to operate?',
        a: 'Perform a visual check: look for frayed cables, rust on springs, bent tracks, or a door that doesn\'t sit level when closed. If you notice any of these, stop using the door and call a technician. We offer free on-site safety inspections.',
      },
      {
        q: 'How often should I have my garage door professionally inspected?',
        a: 'We recommend a full safety inspection at least once a year. Regular maintenance prevents most emergency repairs and extends the life of your door by 3–5 years.',
      },
      {
        q: 'My garage door reverses before closing completely — is this dangerous?',
        a: 'This is actually a safety feature: your door\'s sensors detect an obstruction. However, if the sensors are misaligned or dirty, the door won\'t close properly. This needs to be fixed promptly — a door that won\'t close is a security risk.',
      },
    ],
  },
  {
    category: 'Noise & Performance',
    icon: Volume2,
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    questions: [
      {
        q: 'Why is my garage door so loud?',
        a: 'Loud operation is usually caused by dry rollers, worn hinges, or a chain-drive opener that needs lubrication. In some cases, it indicates failing components. A tune-up with proper lubrication typically resolves this within one visit.',
      },
      {
        q: 'My garage door is making a grinding noise — what does that mean?',
        a: 'Grinding sounds often point to worn rollers, a bent track, or metal-on-metal contact. Left untreated, this can lead to an off-track door or full system failure. Call us soon — this is usually an affordable fix when caught early.',
      },
      {
        q: 'Why does my door shake or vibrate when opening?',
        a: 'Vibration is commonly caused by loose hardware (bolts, brackets) or unbalanced tension in the springs. We can tighten and realign everything in a single maintenance visit.',
      },
      {
        q: 'Can I make my garage door quieter without replacing it?',
        a: 'Yes! In most cases, replacing plastic rollers with nylon rollers, lubricating all moving parts, and tightening loose hardware reduces noise by 70–80%. We offer a full tune-up service for this.',
      },
    ],
  },
  {
    category: 'Emergency Repairs',
    icon: Zap,
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
    questions: [
      {
        q: 'My garage door won\'t open and my car is stuck inside — what do I do?',
        a: 'Most garage door openers have a red emergency release cord hanging from the rail. Pull it to disconnect the opener and operate the door manually. If the door still won\'t open, it may have a broken spring — call us immediately at (201) 503-3118 for same-day service.',
      },
      {
        q: 'Do you offer 24/7 emergency garage door repair?',
        a: 'Yes. We provide emergency service throughout North New Jersey. For urgent situations like a stuck door, broken spring, or door that won\'t close, call us anytime at (201) 503-3118.',
      },
      {
        q: 'How fast can a technician arrive for an emergency?',
        a: 'For most areas in Bergen, Passaic, and Morris County, we can typically have a technician on-site within 2–4 hours. Same-day service is available Monday through Sunday.',
      },
      {
        q: 'My garage door came off the tracks — is this an emergency?',
        a: 'Yes. An off-track door is dangerous and should not be operated. The door can fall or cause injury. Stop using it immediately and call us. An off-track repair is usually completed in one visit.',
      },
    ],
  },
  {
    category: 'Repairs & Cost',
    icon: Wrench,
    color: 'text-green-500',
    bg: 'bg-green-50',
    questions: [
      {
        q: 'How much does garage door spring replacement cost in New Jersey?',
        a: 'Spring replacement typically costs between $150–$350 depending on the type of spring (torsion vs. extension) and whether you need one or both replaced. We provide upfront pricing after a free on-site assessment — no hidden fees.',
      },
      {
        q: 'How long does a typical garage door repair take?',
        a: 'Most repairs — spring replacement, opener repair, cable replacement, off-track fixes — are completed in 1–2 hours in a single visit. We come stocked with the most common parts.',
      },
      {
        q: 'Should I repair or replace my garage door?',
        a: 'If your door is structurally sound and less than 15 years old, repair is almost always the better value. If the panels are cracked, the door is heavily rusted, or multiple systems are failing simultaneously, replacement may be more cost-effective. We\'ll give you an honest recommendation after inspection.',
      },
      {
        q: 'Do you charge for the initial inspection?',
        a: 'No. We offer a free on-site inspection and assessment. You\'ll receive a clear written estimate before any work begins.',
      },
    ],
  },
];

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-start gap-4 p-5 text-left bg-white hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-900 text-base leading-snug">{question}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-5 bg-white border-t border-slate-100">
          <p className="text-slate-600 leading-relaxed pt-4">{answer}</p>
          <a
            href="tel:+12015033118"
            className="inline-flex items-center gap-2 mt-4 bg-yellow-500 hover:bg-yellow-400 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call Now — (201) 503-3118
          </a>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.flatMap((cat) =>
      cat.questions.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      }))
    ),
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/">
            <img
              src="https://media.base44.com/images/public/6940c0d91636ce363ecbf035/0f4671081_WebsiteLOGO.png"
              alt="ProLine Garage Door LLC"
              className="h-16 w-auto"
            />
          </Link>
          <a
            href="tel:+12015033118"
            className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-white font-bold px-5 py-3 rounded-xl transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="hidden sm:inline">(201) 503-3118</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-blue-800 text-white py-14">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Garage Door FAQ</h1>
          <p className="text-blue-200 text-xl max-w-2xl mx-auto">
            Answers to the most common questions about garage door safety, noise, and emergency repairs in New Jersey.
          </p>
          <a
            href="tel:+12015033118"
            className="inline-flex items-center gap-3 mt-8 bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors"
          >
            <Phone className="w-5 h-5" />
            Need Help Now? Call (201) 503-3118
          </a>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          {faqs.map((cat) => (
            <div key={cat.category} className="mb-12">
              <div className={`flex items-center gap-3 mb-6 p-4 rounded-xl ${cat.bg}`}>
                <cat.icon className={`w-6 h-6 ${cat.color}`} />
                <h2 className="text-2xl font-bold text-slate-900">{cat.category}</h2>
              </div>
              <div className="space-y-3">
                {cat.questions.map((faq) => (
                  <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
                ))}
              </div>

              {/* Mid-section CTA */}
              <div className="mt-8 bg-slate-900 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-white font-semibold text-lg">Still have questions?</p>
                  <p className="text-slate-400 text-sm">Our technicians are available 7 days a week.</p>
                </div>
                <a
                  href="tel:+12015033118"
                  className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-white font-bold px-6 py-3 rounded-xl transition-colors whitespace-nowrap"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <AlertTriangle className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Garage Door Emergency?</h2>
          <p className="text-blue-200 text-xl mb-8 max-w-xl mx-auto">
            Don't wait. A broken spring or stuck door can be dangerous. We offer same-day service across North New Jersey.
          </p>
          <a
            href="tel:+12015033118"
            className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-xl px-12 py-5 rounded-xl transition-colors"
          >
            <Phone className="w-6 h-6" />
            Call (201) 503-3118
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
        <p>© 2026 ProLine Garage Door LLC · NJ License HIC #13VH14019600</p>
        <div className="flex justify-center gap-6 mt-3">
          <Link to="/" className="hover:text-white">Home</Link>
          <Link to="/blog" className="hover:text-white">Tips & Maintenance</Link>
          <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
        </div>
      </footer>
    </div>
  );
}