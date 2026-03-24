import React from 'react';
import { Phone, CheckCircle2, AlertTriangle, Clock, Settings } from 'lucide-react';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

const included = [
  'Opener diagnostic and assessment',
  'Motor, gear, and drive inspection',
  'Safety sensor alignment and test',
  'Force and travel adjustment',
  'Remote and keypad programming',
  'Wall button and wiring check',
  'MyQ / smart home integration setup',
  'Final cycle test and safety check',
];

const openerTypes = [
  { name: 'Belt Drive', desc: 'The quietest option. A rubber belt moves the trolley with minimal noise — ideal for garages adjacent to bedrooms or living areas. We carry and install top brands including Chamberlain and LiftMaster.' },
  { name: 'Chain Drive', desc: 'The most common and most affordable type. Uses a metal chain to move the trolley. Slightly louder than belt drive but extremely reliable and long-lasting. Great for detached garages.' },
  { name: 'Screw Drive', desc: 'Uses a threaded rod to move the trolley. Fewer moving parts means less maintenance. Works well in stable climates but can be affected by extreme temperature swings.' },
  { name: 'Smart / WiFi Openers', desc: 'Modern openers with built-in WiFi allow you to open, close, and monitor your garage from anywhere using a smartphone. Compatible with Alexa, Google Home, and Apple HomeKit.' },
  { name: 'Battery Backup', desc: 'A critical feature for power outages. Openers with built-in battery backup let you open and close your door even when the power is out — essential for NJ storm seasons.' },
  { name: 'Commercial / Heavy Duty', desc: 'For oversized or heavy doors, we install commercial-grade jackshaft and trolley openers rated for heavier loads and higher cycle counts.' },
];

const warningSigns = [
  'Opener runs but door doesn\'t move',
  'Door reverses before fully closing',
  'Motor runs intermittently or makes grinding noise',
  'Remote range has decreased significantly',
  'Opener only responds to wall button, not remote',
  'Door opens on its own or won\'t stay closed',
];

const faqs = [
  { q: 'How long do garage door openers last?', a: 'Most openers last 10–15 years with regular maintenance. The motor, circuit board, and drive mechanism are the most common failure points. We can often repair rather than replace if the unit is relatively new.' },
  { q: 'Can you repair my opener instead of replacing it?', a: 'Often, yes. We diagnose the issue first. Common repairable problems include: broken gear sprockets, faulty circuit boards, worn drive belts/chains, and sensor misalignment. We\'ll tell you honestly if repair vs. replacement makes more sense.' },
  { q: 'Can you program my remote after replacing the opener?', a: 'Yes — we program all remotes, keypads, and vehicle HomeLink systems before we leave. We also help you set up the app if you have a smart opener.' },
  { q: 'What horsepower opener do I need?', a: '½ HP is standard for most single-car doors. ¾ HP is recommended for two-car doors or insulated/heavy doors. 1 HP+ is for very heavy, oversized, or commercial doors. We\'ll recommend the right size for your door.' },
  { q: 'Do you install smart openers that work with my phone?', a: 'Yes — we install and configure LiftMaster myQ, Chamberlain, and other WiFi-enabled openers. We can also integrate your new opener with existing smart home systems.' },
];

export default function GarageDoorOpeners() {
  return (
    <div className="min-h-screen bg-white pb-20 lg:pb-0">
      <SiteHeader />

      {/* Hero */}
      <section
        className="relative text-white py-20 md:py-28"
        style={{
          backgroundImage: 'linear-gradient(rgba(10,20,60,0.72), rgba(10,20,60,0.65)), url(https://images.unsplash.com/photo-1558002038-1055907df827?w=1400&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-yellow-400 font-semibold mb-3 text-sm uppercase tracking-wide">ProLine Garage Door LLC — New Jersey</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">Garage Door Opener Repair & Installation</h1>
          <p className="text-blue-200 text-xl mb-8 max-w-2xl">Opener acting up? Not responding? We diagnose, repair, and install all major brands — including smart openers with phone control.</p>
          <a href="tel:+12015033118" className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-lg px-10 py-4 rounded-xl transition-colors">
            <Phone className="w-5 h-5" /> Call Now: (201) 503-3118
          </a>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-5">Opener Repair & Installation in North New Jersey</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Your garage door opener is the workhorse of your garage — it opens and closes your door potentially thousands of times per year. When it starts acting up, it disrupts your entire routine. ProLine Garage Door LLC provides comprehensive opener diagnostics, repair, and full installation services for homeowners throughout New Jersey.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                We service and install all major brands: LiftMaster, Chamberlain, Craftsman, Genie, Linear, and more. Whether your opener needs a simple adjustment, a new logic board, or a full replacement, our technicians carry common parts and can often solve the problem in a single visit.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We also install the latest smart garage door openers with WiFi connectivity, battery backup, and phone control — a meaningful upgrade that adds convenience and security to your home.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
                alt="Garage door opener installation"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>

          {/* Opener types */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Opener Types We Install & Service</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {openerTypes.map((t, i) => (
                <div key={i} className="bg-slate-50 rounded-2xl p-6">
                  <Settings className="w-6 h-6 text-blue-600 mb-3" />
                  <h3 className="font-bold text-slate-900 mb-2">{t.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What's included */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">What's Included in Our Opener Service</h2>
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
              <AlertTriangle className="w-5 h-5 text-yellow-500" /> Signs Your Opener Needs Service
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
            <h3 className="text-2xl font-bold mb-2">Same-Day Repair & Next-Day Installation</h3>
            <p className="text-blue-200 mb-6">We carry parts for the most common opener issues. Call now and we'll get your opener working today.</p>
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