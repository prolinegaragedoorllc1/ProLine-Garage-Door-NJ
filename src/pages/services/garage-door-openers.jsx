import React from 'react';
import { Phone, CheckCircle2, AlertTriangle, Clock, Settings } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import ServiceHero from '@/components/ServiceHero';
import ServiceContactForm from '@/components/ServiceContactForm';
import GoogleReviewsCarousel from '@/components/GoogleReviewsCarousel';

const included = [
'Opener diagnostic and assessment',
'Motor, gear, and drive inspection',
'Safety sensor alignment and test',
'Force and travel adjustment',
'Remote and keypad programming',
'Wall button and wiring check',
'MyQ / smart home integration setup',
'Final cycle test and safety check'];

const openerTypes = [
{ name: 'Belt Drive', desc: 'The quietest option. A rubber belt moves the trolley with minimal noise — ideal for garages adjacent to bedrooms or living areas. We carry and install top brands including Chamberlain and LiftMaster.' },
{ name: 'Chain Drive', desc: 'The most common and most affordable type. Uses a metal chain to move the trolley. Slightly louder than belt drive but extremely reliable and long-lasting. Great for detached garages.' },
{ name: 'Screw Drive', desc: 'Uses a threaded rod to move the trolley. Fewer moving parts means less maintenance. Works well in stable climates but can be affected by extreme temperature swings.' },
{ name: 'Smart / WiFi Openers', desc: 'Modern openers with built-in WiFi allow you to open, close, and monitor your garage from anywhere using a smartphone. Compatible with Alexa, Google Home, and Apple HomeKit.' },
{ name: 'Battery Backup', desc: 'A critical feature for power outages. Openers with built-in battery backup let you open and close your door even when the power is out — essential for NJ storm seasons.' },
{ name: 'Commercial / Heavy Duty', desc: 'For oversized or heavy doors, we install commercial-grade jackshaft and trolley openers rated for heavier loads and higher cycle counts.' }];

const warningSigns = [
'Opener runs but door doesn\'t move',
'Door reverses before fully closing',
'Motor runs intermittently or makes grinding noise',
'Remote range has decreased significantly',
'Opener only responds to wall button, not remote',
'Door opens on its own or won\'t stay closed'];

const faqs = [
{ q: 'How long do garage door openers last?', a: 'Most openers last 10–15 years with regular maintenance. The motor, circuit board, and drive mechanism are the most common failure points. We can often repair rather than replace if the unit is relatively new.' },
{ q: 'Can you repair my opener instead of replacing it?', a: 'Often, yes. We diagnose the issue first. Common repairable problems include: broken gear sprockets, faulty circuit boards, worn drive belts/chains, and sensor misalignment. We\'ll tell you honestly if repair vs. replacement makes more sense.' },
{ q: 'Can you program my remote after replacing the opener?', a: 'Yes — we program all remotes, keypads, and vehicle HomeLink systems before we leave. We also help you set up the app if you have a smart opener.' },
{ q: 'What horsepower opener do I need?', a: '½ HP is standard for most single-car doors. ¾ HP is recommended for two-car doors or insulated/heavy doors. 1 HP+ is for very heavy, oversized, or commercial doors. We\'ll recommend the right size for your door.' },
{ q: 'Do you install smart openers that work with my phone?', a: 'Yes — we install and configure LiftMaster myQ, Chamberlain, and other WiFi-enabled openers. We can also integrate your new opener with existing smart home systems.' }];

const heroFeatures = [
'All major brands serviced & installed',
'Smart openers with phone control',
'Same-day repair available',
'Remote & keypad programming included',
'Battery backup installation available',
'Licensed, Insured & Bonded',
];

export default function GarageDoorOpeners() {
  return (
    <PageLayout>
      <ServiceHero
        title="Garage Door Opener Repair & Installation"
        subtitle="Opener acting up? Not responding? We diagnose, repair, and install all major brands — including smart openers with phone control."
        backgroundImage="https://media.base44.com/images/public/6940c0d91636ce363ecbf035/834ea193b_Garage_door_opener.jpg"
        heroFeatures={heroFeatures}
      />

      <ServiceContactForm desktopOnly />

      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-5">Opener Repair & Installation in New Jersey</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Opener not responding? Making grinding noises? We diagnose and fix all major brands — LiftMaster, Chamberlain, Genie, and more. Most repairs are done in a single visit with parts we carry on the truck.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                We also install smart openers with phone control and battery backup — great for NJ storm season. We'll tell you honestly whether repair or replacement makes more sense.
              </p>
              <a href="tel:+12015033118" className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-xl transition-colors text-base">
                📞 Call Now — Same Day Repair
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://media.base44.com/images/public/6940c0d91636ce363ecbf035/20fe26ae2_garage-door-opener.png"
                alt="Garage door opener installation"
                className="w-full h-80 object-cover object-center" />
            </div>
          </div>

          {/* Opener types */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Opener Types We Install & Service</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {openerTypes.map((t, i) =>
              <div key={i} className="bg-gradient-to-br from-blue-50 to-slate-100 border border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <Settings className="w-6 h-6 text-blue-600 mb-3" />
                  <h3 className="font-bold text-slate-900 mb-2">{t.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{t.desc}</p>
                </div>
              )}
            </div>
          </div>

          {/* What's included */}
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-8 mb-12 text-white shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <h2 className="text-2xl font-bold mb-6 relative">What's Included in Our Opener Service</h2>
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
              <h2 className="text-xl font-bold text-slate-900">Signs Your Opener Needs Service</h2>
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
            <h3 className="text-2xl font-bold mb-2">Same-Day Repair & Next-Day Installation</h3>
            <p className="text-blue-200 mb-6">We carry parts for the most common opener issues. Call now and we'll get your opener working today.</p>
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