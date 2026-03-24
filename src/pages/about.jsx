import React from 'react';
import { Phone, CheckCircle2, Shield, Award, Star, Clock, Users } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import GoogleReviewsCarousel from '@/components/GoogleReviewsCarousel';

const values = [
  { icon: Shield, title: 'Licensed, Insured & Bonded', desc: 'We are a fully licensed NJ Home Improvement Contractor (HIC #13VH14019600), fully insured, and bonded. Every job is covered.' },
  { icon: Clock, title: 'Same-Day Response', desc: 'We understand that a broken garage door disrupts your entire day. We prioritize same-day service and respond quickly to every call.' },
  { icon: Award, title: 'Quality Parts Only', desc: 'We refuse to cut corners on parts. Every replacement component meets or exceeds OEM specifications for reliability and longevity.' },
  { icon: Star, title: '5-Star Rated on Google', desc: 'Our reputation is built on customer satisfaction. We\'re proud of our perfect Google rating — a reflection of our commitment to doing things right.' },
  { icon: Users, title: 'Locally Owned & Operated', desc: 'ProLine Garage Door LLC is not a franchise. We\'re a local NJ company — your neighbors. We live and work in the communities we serve.' },
  { icon: CheckCircle2, title: 'Upfront, Honest Pricing', desc: 'No hidden fees, no upselling. We assess your situation, give you a clear price, and do the work. You approve everything before we start.' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white pb-20 lg:pb-0">
      <SiteHeader />

      {/* Hero */}
      <section
        className="relative text-white py-20 md:py-28"
        style={{
          backgroundImage: 'linear-gradient(rgba(10,20,60,0.75), rgba(10,20,60,0.65)), url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-yellow-400 font-semibold mb-3 text-sm uppercase tracking-wide">About ProLine Garage Door LLC</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">North New Jersey's Trusted Garage Door Company</h1>
          <p className="text-blue-200 text-xl max-w-2xl">We're a locally owned and operated garage door company serving homeowners across Bergen, Passaic, and Morris Counties with honest service, quality parts, and fast response times.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-5">Our Story</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                ProLine Garage Door LLC was founded with a simple mission: provide homeowners in North New Jersey with the kind of garage door service we'd want for our own homes. That means showing up on time, diagnosing the problem accurately, recommending the right fix — not the most expensive one — and completing the work cleanly and correctly.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                We've seen too many homeowners get burned by national franchise companies that send inexperienced technicians and push for unnecessary full-door replacements when a simple repair would suffice. We built ProLine to be the opposite of that: local, honest, and focused on the customer's best interest.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Today we serve communities throughout Bergen County, Passaic County, Morris County, and beyond — handling everything from emergency spring repairs to full opener installations. Most of our business comes from referrals, and we take that as the highest compliment.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
                alt="ProLine garage door technician at work"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* License & credentials */}
          <div className="bg-blue-900 text-white rounded-2xl p-8 mb-16 text-center">
            <h2 className="text-2xl font-bold mb-3">Fully Licensed, Insured & Bonded in New Jersey</h2>
            <p className="text-blue-200 mb-4 max-w-2xl mx-auto">We are a registered NJ Home Improvement Contractor. You can verify our license directly with the New Jersey Division of Consumer Affairs.</p>
            <div className="inline-block bg-white/10 px-6 py-3 rounded-xl font-mono text-lg font-bold tracking-wider">NJ HIC License #13VH14019600</div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-2 text-center">What Sets Us Apart</h2>
            <p className="text-slate-500 text-center mb-10">The principles we operate by — every job, every customer.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <div key={i} className="bg-slate-50 rounded-2xl p-6">
                  <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <v.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{v.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Service area */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Service Area</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We serve homeowners throughout North New Jersey, with a primary focus on Bergen County, Passaic County, and Morris County. Our service area includes but is not limited to:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {['Paramus', 'Fair Lawn', 'Wayne', 'Hackensack', 'Teaneck', 'Ridgewood', 'Clifton', 'Passaic', 'Totowa', 'Little Falls', 'Montville', 'Parsippany', 'Woodland Park', 'Garfield', 'Lodi', 'Saddle Brook'].map((town) => (
                <div key={town} className="flex items-center gap-2 text-slate-700 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  {town}
                </div>
              ))}
            </div>
            <p className="text-slate-500 text-sm mt-4 italic">Not on the list? Call us — we likely serve your area. We do not operate a walk-in storefront; all service is performed on-site at your home.</p>
          </div>

          {/* Hours */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="border border-slate-200 rounded-2xl p-6">
              <h3 className="font-bold text-slate-900 mb-4">Service Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-slate-700"><span>Monday – Friday</span><span className="font-semibold">6:00 AM – 10:00 PM</span></div>
                <div className="flex justify-between text-slate-700"><span>Saturday</span><span className="font-semibold text-red-500">Closed</span></div>
                <div className="flex justify-between text-slate-700"><span>Sunday</span><span className="font-semibold">6:00 AM – 10:00 PM</span></div>
                <div className="pt-2 border-t border-slate-100 flex justify-between text-slate-700"><span>Emergency Service</span><span className="font-semibold text-green-600">24/7</span></div>
              </div>
            </div>
            <div className="border border-slate-200 rounded-2xl p-6">
              <h3 className="font-bold text-slate-900 mb-4">Contact Us</h3>
              <div className="space-y-3">
                <a href="tel:+12015033118" className="flex items-center gap-3 text-blue-600 font-semibold hover:text-blue-800">
                  <Phone className="w-5 h-5" /> (201) 503-3118
                </a>
                <a href="mailto:info@prolinegaragedoorllc.com" className="block text-slate-600 text-sm hover:text-blue-600">info@prolinegaragedoorllc.com</a>
                <a
                  href="tel:+12015033118"
                  className="mt-4 flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-3 rounded-xl transition-colors"
                >
                  <Phone className="w-5 h-5" /> Call for Free Estimate
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <GoogleReviewsCarousel />

      <SiteFooter />
    </div>
  );
}