import React, { useState } from 'react';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { getTrackingParams } from '@/lib/TrackingParamPreserver';


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
    const tracking = getTrackingParams();
    const body = new URLSearchParams({
      name: formData.name,
      phone: formData.phone,
      zipcode: formData.zipcode,
      message: formData.message || '',
      ...(tracking.gclid ? { gclid: tracking.gclid } : {}),
      ...(tracking.utm_source ? { utm_source: tracking.utm_source } : {}),
      ...(tracking.utm_medium ? { utm_medium: tracking.utm_medium } : {}),
      ...(tracking.utm_campaign ? { utm_campaign: tracking.utm_campaign } : {}),
    });
    const res = await fetch('https://formspree.io/f/xjgpgbpq', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    });
    const data = await res.json();
    setFormLoading(false);
    if (res.ok) {
      setFormSent(true);
    } else {
      setFormError(data?.errors?.[0]?.message || 'Something went wrong. Please call us directly.');
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
            <input type="text" name="honeypot" value={formData.honeypot || ''} onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })} style={{ display: 'none' }} tabIndex="-1" autoComplete="off" aria-hidden="true" />
            <div className="flex flex-col gap-1">
              <label htmlFor="scf-name" className="text-blue-200 text-sm font-semibold">Full Name</label>
              <input
                id="scf-name"
                required
                name="name"
                type="text"
                placeholder="Your Name"
                autoComplete="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="rounded-lg px-4 py-3 text-slate-900 text-base outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="scf-phone" className="text-blue-200 text-sm font-semibold">Phone Number</label>
              <input
                id="scf-phone"
                required
                name="phone"
                type="tel"
                placeholder="(555) 555-5555"
                autoComplete="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: formatPhone(e.target.value) })}
                className="rounded-lg px-4 py-3 text-slate-900 text-base outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="flex flex-col gap-1 sm:col-span-2">
              <label htmlFor="scf-zip" className="text-blue-200 text-sm font-semibold">Zip Code</label>
              <input
                id="scf-zip"
                required
                name="zipcode"
                type="text"
                inputMode="numeric"
                placeholder="Zip Code"
                autoComplete="postal-code"
                value={formData.zipcode}
                onChange={(e) => setFormData({ ...formData, zipcode: e.target.value.replace(/\D/g, '').slice(0, 5) })}
                className="rounded-lg px-4 py-3 text-slate-900 text-base outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="flex flex-col gap-1 sm:col-span-2">
              <label htmlFor="scf-message" className="text-blue-200 text-sm font-semibold">Message</label>
              <textarea
                id="scf-message"
                name="message"
                placeholder="Describe your issue"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={3}
                className="rounded-lg px-4 py-3 text-slate-900 text-base outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
              />
            </div>
            {formError && <p role="alert" className="text-red-300 text-sm text-center sm:col-span-2">{formError}</p>}
            <button
              type="submit"
              disabled={formLoading}
              aria-label="Submit contact form"
              className="bg-yellow-500 hover:bg-yellow-400 disabled:opacity-70 text-white font-bold rounded-lg px-6 py-3 text-base flex items-center justify-center gap-2 transition-colors sm:col-span-2">
              {formLoading ? 'Sending...' : <> Contact Us <ChevronRight className="w-5 h-5" aria-hidden="true" /></>}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}