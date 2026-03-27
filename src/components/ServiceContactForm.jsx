import React, { useState } from 'react';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { base44 } from '@/api/base44Client';

export default function ServiceContactForm({ mobileOnly = false, desktopOnly = false }) {
  const [formData, setFormData] = useState({ name: '', phone: '', zipcode: '', message: '' });
  const [formSent, setFormSent] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState('');

  const formatPhone = (value) => {
    const digits = value.replace(/\D/g, '').slice(0, 10);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0,3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6)}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.honeypot) return;
    const digits = formData.phone.replace(/\D/g, '');
    if (digits.length !== 10) {
      setFormError('Please enter a valid 10-digit US phone number.');
      return;
    }
    setFormLoading(true);
    setFormError('');
    try {
      const res = await fetch('https://formspree.io/f/xlgrbnwg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormSent(true);
      } else {
        setFormError('Something went wrong. Please call us directly.');
      }
    } catch (err) {
      setFormError('Something went wrong. Please call us directly.');
    } finally {
      setFormLoading(false);
    }
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
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="rounded-lg px-4 py-3 text-slate-900 text-base outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              required
              name="phone"
              type="tel"
              placeholder="(555) 555-5555"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: formatPhone(e.target.value) })}
              className="rounded-lg px-4 py-3 text-slate-900 text-base outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              required
              name="zipcode"
              type="text"
              inputMode="numeric"
              placeholder="Zip Code"
              value={formData.zipcode}
              onChange={(e) => setFormData({ ...formData, zipcode: e.target.value.replace(/\D/g, '').slice(0, 5) })}
              className="rounded-lg px-4 py-3 text-slate-900 text-base outline-none focus:ring-2 focus:ring-yellow-400 sm:col-span-2"
            />
            <textarea
              name="message"
              placeholder="Message (describe your issue)"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={3}
              className="rounded-lg px-4 py-3 text-slate-900 text-base outline-none focus:ring-2 focus:ring-yellow-400 sm:col-span-2 resize-none"
            />
            {formError && <p className="text-red-300 text-sm text-center sm:col-span-2">{formError}</p>}
            <button
              type="submit"
              disabled={formLoading}
              className="bg-yellow-500 hover:bg-yellow-400 disabled:opacity-70 text-white font-bold rounded-lg px-6 py-3 text-base flex items-center justify-center gap-2 transition-colors sm:col-span-2">
              {formLoading ? 'Sending...' : <> Contact Us <ChevronRight className="w-5 h-5" /></>}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}