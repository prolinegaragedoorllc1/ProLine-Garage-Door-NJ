import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', zipcode: '', message: '' });
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `New Contact Form Submission - ${formData.name}`;
    const body = `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nZip Code: ${formData.zipcode}\nMessage: ${formData.message}`;
    window.location.href = `mailto:info@prolinegaragedoorllc.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFormSent(true);
  };

  return (
    <div className="min-h-screen bg-white pb-20 lg:pb-0">
      <SiteHeader />

      <section
        className="relative text-white py-16 md:py-24"
        style={{
          backgroundImage: 'linear-gradient(rgba(10,20,60,0.80), rgba(10,20,60,0.72)), url(https://media.base44.com/images/public/6940c0d91636ce363ecbf035/06a2bcba1_Website-background-updated.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-yellow-400 font-semibold mb-3 text-sm uppercase tracking-wide">ProLine Garage Door LLC</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-blue-200 text-xl">Call, email, or fill out the form — we respond fast throughout New Jersey.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Get In Touch</h2>
              <div className="space-y-5 mb-8">
                <a href="tel:+12015033118" className="flex items-center gap-4 p-5 bg-yellow-50 border border-yellow-200 rounded-2xl hover:bg-yellow-100 transition-colors">
                  <div className="bg-yellow-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-0.5">Call or Text</p>
                    <p className="font-bold text-xl text-slate-900">(201) 503-3118</p>
                    <p className="text-sm text-slate-500">Free estimate — most calls answered immediately</p>
                  </div>
                </a>

                <a href="mailto:info@prolinegaragedoorllc.com" className="flex items-center gap-4 p-5 bg-slate-50 border border-slate-200 rounded-2xl hover:bg-slate-100 transition-colors">
                  <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-0.5">Email</p>
                    <p className="font-semibold text-slate-900">info@prolinegaragedoorllc.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-2">Service Hours</p>
                    <div className="space-y-1 text-sm text-slate-600">
                      <div className="flex justify-between gap-6"><span>Monday – Friday</span><span className="font-semibold">6:00 AM – 10:00 PM</span></div>
                      <div className="flex justify-between gap-6"><span>Saturday</span><span className="font-semibold text-red-500">Closed</span></div>
                      <div className="flex justify-between gap-6"><span>Sunday</span><span className="font-semibold">6:00 AM – 10:00 PM</span></div>
                      <div className="flex justify-between gap-6 pt-1 border-t border-slate-100 mt-1"><span>Emergency</span><span className="font-semibold text-green-600">24/7</span></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Service Area</p>
                    <p className="text-sm text-slate-600">Serving all of New Jersey — Bergen County, Morris County, Passaic County, and surrounding areas.</p>
                    <p className="text-xs text-slate-400 mt-1 italic">We are a mobile service — no walk-in storefront.</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-900 rounded-2xl p-5 text-white">
                <p className="font-bold mb-2">NJ HIC License #13VH14019600</p>
                <div className="flex flex-wrap gap-3 text-sm text-blue-200">
                  {['Licensed', 'Insured', 'Bonded', '5-Star Rated'].map(b => (
                    <div key={b} className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-yellow-400" />{b}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Request a Free Estimate</h2>
              {formSent ? (
                <div className="text-center py-16">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-500">We'll get back to you shortly. For urgent issues, please call (201) 503-3118.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Your Name *</label>
                      <input required type="text" placeholder="John Smith" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full border border-slate-300 rounded-xl px-4 py-3 text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number *</label>
                      <input required type="tel" placeholder="(201) 000-0000" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full border border-slate-300 rounded-xl px-4 py-3 text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input type="email" placeholder="your@email.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full border border-slate-300 rounded-xl px-4 py-3 text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Zip Code *</label>
                    <input required type="text" placeholder="07652" value={formData.zipcode} onChange={e => setFormData({...formData, zipcode: e.target.value})} className="w-full border border-slate-300 rounded-xl px-4 py-3 text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Describe the Issue</label>
                    <textarea placeholder="e.g. Spring broke and door won't open..." value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} rows={4} className="w-full border border-slate-300 rounded-xl px-4 py-3 text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" />
                  </div>
                  <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-4 rounded-xl text-lg transition-colors flex items-center justify-center gap-2">
                    <Mail className="w-5 h-5" /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}