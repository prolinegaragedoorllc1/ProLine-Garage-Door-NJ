import React from 'react';
import { Phone, CheckCircle2, AlertTriangle, Settings, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
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
  { name: 'Belt Drive', desc: 'Quietest option — rubber belt with minimal noise. Ideal for garages near living spaces. We install top brands including LiftMaster and Chamberlain.' },
  { name: 'Chain Drive', desc: 'Most common and affordable. Metal chain drive is extremely reliable and long-lasting. Great for detached garages.' },
  { name: 'Smart / WiFi Openers', desc: 'Open and monitor your garage from anywhere via smartphone. Compatible with Alexa, Google Home, and Apple HomeKit.' },
  { name: 'Battery Backup', desc: 'Opens your door even during power outages — essential for NJ storm seasons. A critical upgrade we strongly recommend.' },
  { name: 'Screw Drive', desc: 'Fewer moving parts means less maintenance. Works well in stable climates.' },
  { name: 'Commercial / Heavy Duty', desc: 'For oversized or heavy doors — commercial-grade jackshaft and trolley openers rated for heavy loads.' },
];

const warningSigns = [
  'Opener runs but door doesn\'t move',
  'Door reverses before fully closing',
  'Motor makes grinding or buzzing noise',
  'Remote range has decreased significantly',
  'Opener only responds to wall button',
  'Door opens on its own or won\'t stay closed',
];

const faqs = [
  { q: 'How long do garage door openers last?', a: 'Most openers last 10–15 years. The motor, circuit board, and drive are the most common failure points. We can often repair rather than replace if the unit is relatively new.' },
  { q: 'Can you repair my opener instead of replacing it?', a: 'Often, yes. Common repairable problems: broken gear sprockets, faulty circuit boards, worn belts/chains, and sensor misalignment. We\'ll give you an honest recommendation.' },
  { q: 'Do you install smart openers that work with my phone?', a: 'Yes — we install and configure LiftMaster myQ, Chamberlain, and other WiFi-enabled openers. We also integrate with existing smart home systems.' },
  { q: 'What horsepower opener do I need?', a: '½ HP for most single-car doors. ¾ HP for two-car or insulated/heavy doors. 1 HP+ for very heavy or commercial doors. We\'ll recommend the right size for your door.' },
];

export default function OpenerRepair() {
  return (
    <div className="min-h-screen bg-white pb-20 lg:pb-0">
      <SiteHeader />
      <section
        className="relative text-white py-20 md:py-28"
        style={{
          backgroundImage: 'linear-gradient(rgba(10,20,60,0.72), rgba(10,20,60,0.65)), url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-yellow-400 font-semibold mb-3 text-sm uppercase tracking-wide">ProLine Garage Door LLC — New Jersey</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">Garage Door Opener Repair & Installation in New Jersey</h1>
          <p className="text-blue-200 text-xl mb-8 max-w-2xl">Opener not responding? We diagnose, repair, and install all major brands — including smart openers with phone control. Same-day service available.</p>
          <a href="tel:+12015033118" className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-lg px-10 py-4 rounded-xl transition-colors">
            <Phone className="w-5 h-5" /> Call Now: (201) 503-3118
          </a>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-5">Opener Repair & Installation in New Jersey</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Your garage door opener works thousands of cycles per year. When it starts acting up, it disrupts your entire routine. ProLine Garage Door LLC provides comprehensive opener diagnostics, repair, and full installation services for homeowners throughout New Jersey — from Bergen County to Morris County and beyond.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                We service and install all major brands: LiftMaster, Chamberlain, Craftsman, Genie, Linear, and more. Whether your opener needs a simple adjustment, a new logic board, or a full replacement, our technicians carry common parts and can often resolve the issue in a single visit.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We also install the latest smart garage door openers with WiFi connectivity, battery backup, and smartphone control — a meaningful security and convenience upgrade for any New Jersey home.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" alt="Garage door opener repair New Jersey" className="w-full h-80 object-cover" />
            </div>
          </div>

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

          <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-xl p-7 mb-12">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-500" /> Signs Your Opener Needs Service
            </h2>
            <div className="grid sm:grid-cols-2 gap-2">
              {warningSigns.map((s, i) => (
                <div key={i} className="flex items-start gap-2 text-slate-700">
                  <span className="text-yellow-500 font-bold mt-0.5">•</span><span>{s}</span>
                </div>
              ))}
            </div>
          </div>

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

          <div className="bg-blue-50 rounded-2xl p-6 mb-8 text-sm text-slate-600">
            <p>Related services: <Link to="/garage-door-repair" className="text-blue-600 hover:underline font-medium">Full Garage Door Repair</Link> · <Link to="/garage-door-spring-repair" className="text-blue-600 hover:underline font-medium">Spring Repair</Link> · <Link to="/garage-door-cable-repair" className="text-blue-600 hover:underline font-medium">Cable Repair</Link></p>
          </div>

          <div className="bg-blue-800 rounded-2xl p-8 text-white text-center">
            <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="text-2xl font-bold mb-2">Same-Day Opener Repair — New Jersey</h3>
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