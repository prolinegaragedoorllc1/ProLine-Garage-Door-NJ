import React, { useState } from 'react';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { base44 } from '@/api/base44Client';

export default function ServiceContactForm({ mobileOnly = false, desktopOnly = false }) {
  const [formData, setFormData] = useState({ name: '', phone: '', zipcode: '', message: '' });
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.honeypot) return;
    await base44.functions.invoke('submitContactForm', { ...formData });
    setFormSent(true);
  };

  const visibility = mobileOnly ? 'md:hidden' : desktopOnly ? 'hidden md:block' : '';

  return (
    <section className={`bg-blue-800 py-12 ${visibility}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
          Get a Free Quote — We'll Call You Back Fast!
        </h2>
        <p className="text-blue-200 text-center mb-8 text-base">No obligation. Most calls returned within minutes.</p>
        {formSent ? (
          <div className="max-w-2xl mx-auto text-center py-6">
            <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <p className="text-white text-xl font-semibold">Thank you, we will call you shortly</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Honeypot */}
            <input type="text" name="honeypot" value={formData.honeypot || ''} onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })} style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
            <input
              required
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="rounded-lg px-4 py-3 text-slate-900 text-base outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              required
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="rounded-lg px-4 py-3 text-slate-900 text-base outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              required
              type="text"
              placeholder="Zip Code"
              value={formData.zipcode}
              onChange={(e) => setFormData({ ...formData, zipcode: e.target.value })}
              className="rounded-lg px-4 py-3 text-slate-900 text-base outline-none focus:ring-2 focus:ring-yellow-400 sm:col-span-2"
            />
            <textarea
              placeholder="Message (describe your issue)"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={3}
              className="rounded-lg px-4 py-3 text-slate-900 text-base outline-none focus:ring-2 focus:ring-yellow-400 sm:col-span-2 resize-none"
            />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold rounded-lg px-6 py-3 text-base flex items-center justify-center gap-2 transition-colors sm:col-span-2">
              Contact Us <ChevronRight className="w-5 h-5" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}