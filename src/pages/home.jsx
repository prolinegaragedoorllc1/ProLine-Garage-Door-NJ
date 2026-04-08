import React, { useState, useEffect, useRef } from 'react';
import ServiceAreaMap from '../components/ServiceAreaMap';
import GoogleReviewsCarousel from '../components/GoogleReviewsCarousel';
import WhyBestSection from '../components/WhyBestSection';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  Mail,
  Shield,
  Wrench,
  Settings,
  CheckCircle2,
  Star,
  AlertTriangle,
  Clock,
  Award,
  ChevronRight,
  ChevronDown,
  MapPin } from
'lucide-react';
import { Link } from 'react-router-dom';
import { getTrackingParams } from '@/lib/TrackingParamPreserver';


const serviceLinks = [
{ label: 'Garage Door Spring Repair', path: '/garage-door-spring-repair' },
{ label: 'Garage Door Cable Repair', path: '/garage-door-cable-repair' },
{ label: 'Garage Door Roller Replacement', path: '/garage-door-roller-replacement' },
{ label: 'Garage Door Panel Replacement', path: '/garage-door-panel-replacement' },
{ label: 'Garage Door Openers', path: '/garage-door-openers' }];


const GoogleLogo = () =>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-6 h-6 flex-shrink-0">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
  </svg>;


const StarRow = ({ count = 5 }) =>
<div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) =>
  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
  )}
  </div>;


export default function Home() {
  const [city, setCity] = React.useState('Near You');

  React.useEffect(() => {
    fetch('https://ipapi.co/json/').
    then((r) => r.json()).
    then((data) => {
      const isUS = data.country_code === 'US';
      const isNJ = data.region === 'New Jersey';
      const hasCity = typeof data.city === 'string' && data.city.trim().length > 0;
      // Only show city if we have high confidence: US + NJ + city + accuracy ≤ 20km
      const isAccurate = !data.accuracy || data.accuracy <= 2;
      if (isUS && isNJ && hasCity && isAccurate) {
        setCity('in ' + data.city.trim());
      }
    }).
    catch(() => {});
  }, []);
  const [formData, setFormData] = useState({ name: '', phone: '', zipcode: '', message: '' });
  const [formSent, setFormSent] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState('');
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const header = document.getElementById('main-header');
    if (!header) return;
    const update = () => setHeaderHeight(header.offsetHeight);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  const formatPhone = (value) => {
    const digits = value.replace(/\D/g, '').slice(0, 10);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const handleFormSubmit = async (e) => {
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
      ...(tracking.utm_campaign ? { utm_campaign: tracking.utm_campaign } : {})
    });
    const res = await fetch('https://formspree.io/f/xjgpgbpq', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString()
    });
    const data = await res.json();
    setFormLoading(false);
    if (res.ok) {
      setFormSent(true);
    } else {
      setFormError(data?.errors?.[0]?.message || 'Something went wrong. Please call us directly.');
    }
  };

  const services = [
  { icon: Wrench, title: 'Spring Replacement', description: 'Torsion & extension spring repair and replacement — same day service available.', image: 'https://media.base44.com/images/public/6940c0d91636ce363ecbf035/b61bfbf96_garage-door-spring-madison-huntsville-alabama-overhead-door-company-.jpg' },
  { icon: Settings, title: 'Opener Repair & Installation', description: 'All major brands — belt-drive, chain-drive, and smart openers.', image: 'https://media.base44.com/images/public/6940c0d91636ce363ecbf035/d7286b14f_garage-door-opener.png' },
  { icon: Shield, title: 'Off-Track Repair', description: 'Rollers replaced and door re-aligned — most jobs completed in under 2 hours.', image: 'https://media.base44.com/images/public/6940c0d91636ce363ecbf035/8f122331d_generated_image.png' },
  { icon: Award, title: 'New Door Installation', description: 'Modern steel and raised-panel doors — transform your home\'s curb appeal.', image: 'https://media.base44.com/images/public/6940c0d91636ce363ecbf035/42ad8fe28_generated_image.png' },
  { icon: CheckCircle2, title: 'Full Tune-Up & Maintenance', description: 'Lubrication, balance check, hardware tightening — extends door life by years.', image: 'https://media.base44.com/images/public/6940c0d91636ce363ecbf035/55372ee69_generated_image.png' },
  { icon: AlertTriangle, title: 'Weatherseal & Cable Repair', description: 'Bottom seal, side seals, and cable replacement — keep your garage weatherproofed.', image: 'https://media.base44.com/images/public/6940c0d91636ce363ecbf035/406671c24_1.jpg' }];


  const heroFeatures = [
  'Broken Garage Door Spring Repair',
  'Opener Repair & Installation',
  'Cable Replacement',
  'Off-Track Door Repair',
  'Routine Maintenance & Tune-Up',
  'Licensed, Insured & Bonded'];


  return (
    <div className="min-h-screen bg-white pb-20 lg:pb-0">

      {/* Mobile Trust Bar - Sticky */}
      <div className="md:hidden bg-blue-800 text-white py-3 px-4 sticky top-0 z-40">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <CheckCircle2 className="w-4 h-4 text-yellow-400" aria-hidden="true" />
            <span>Same Day Service</span>
          </div>
          <a href="tel:+12015033118" aria-label="Call ProLine Garage Door now" className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold px-4 py-2 rounded-lg transition-colors text-sm">
            Call Now!
          </a>
        </div>
      </div>

      {/* Header */}
      <header id="main-header" className="bg-white border-b border-slate-200 md:sticky md:top-0 md:z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4 gap-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="https://media.base44.com/images/public/6940c0d91636ce363ecbf035/0f4671081_WebsiteLOGO.png"
                alt="ProLine Garage Door LLC"
                className="h-20 md:h-28 w-auto"
                width="200"
                height="80"
                fetchpriority="high" />
              
            </div>

            {/* Services Nav Dropdown */}
            <div className="hidden md:block relative">
              <button
              onClick={() => setServicesOpen((v) => !v)}
              onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              className="flex items-center gap-1.5 text-slate-700 font-semibold text-base hover:text-blue-700 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors">
              Services <ChevronDown className="w-4 h-4" aria-hidden="true" />
              </button>
              {servicesOpen &&
              <div className="absolute top-full left-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-xl z-50 min-w-[260px] py-2">
                 {serviceLinks.map((s) =>
                <Link
                  key={s.path}
                  to={s.path}
                  className="block px-5 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-700 text-sm font-medium transition-colors"
                  onClick={() => {
                    setServicesOpen(false);
                    window.scrollTo(0, 0);
                  }}>

                     {s.label}
                   </Link>
                )}
                </div>
              }
            </div>

            {/* Google Reviews Badge */}
            <a
              href="https://www.google.com/maps/place/ProLine+Garage+Door/data=!4m2!3m1!1s0x0:0x7b39662917debd08?sa=X&ved=1t:2428&hl=en&ictx=111"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-slate-200 rounded-xl px-3 py-2 md:px-6 md:py-3 hover:bg-slate-50 transition-colors">
              
              <GoogleLogo />
              <div className="flex flex-col">
                <span className="text-xs md:text-sm text-slate-500 leading-none mb-1">Rated 5/5 Based On</span>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) =>
                  <Star key={i} className="w-3.5 h-3.5 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                  )}
                </div>
                <span className="text-xs md:text-sm font-semibold text-slate-700 mt-0.5">Google Reviews</span>
              </div>
            </a>

            {/* CTA Phone - Desktop only */}
            <a href="tel:+12015033118" aria-label="Call ProLine Garage Door for a free on-site inspection" className="hidden md:flex flex-shrink-0">
              <div className="bg-yellow-500 hover:bg-yellow-400 transition-colors rounded-xl px-8 py-4 flex items-center gap-4 cursor-pointer">
                <div className="bg-white/20 rounded-lg p-2.5">
                  <Phone className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-slate-900 text-sm font-semibold">Free On-Site Inspection</span>
                  <span className="text-slate-900 font-bold text-2xl md:text-3xl" dir="ltr">(201) 503-3118</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Sticky Call Button - Bottom */}
      <a
        href="tel:+12015033118"
        aria-label="Call ProLine Garage Door for a free inspection"
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-yellow-500 flex items-center justify-center gap-4 py-4 shadow-2xl">
        <div className="bg-white/20 rounded-full p-2">
          <Phone className="w-6 h-6 text-white" aria-hidden="true" />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-slate-900 text-sm font-semibold">Call Now - Free Inspection</span>
          <span className="text-slate-900 font-bold text-2xl" dir="ltr">(201) 503-3118</span>
        </div>
      </a>

      {/* Trust Bar - sticky below header (Desktop only) */}
      <div className="hidden md:block bg-blue-800 text-white py-2.5 sticky z-40" style={{ top: headerHeight }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-1 text-sm font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-yellow-400" />
              <span>Same Day Service</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-yellow-400" />
              <span>No Hidden Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-yellow-400" />
              <span>5/5 Rating on Google</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section
        className="relative min-h-[75vh] flex items-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(10,20,60,0.65), rgba(10,20,60,0.55)), url(https://media.base44.com/images/public/6940c0d91636ce363ecbf035/06a2bcba1_Website-background-updated.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          contentVisibility: 'auto'
        }}>
        
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl">
            <h1 id="main-headline" className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Garage Door Repair <span id="city-name">{city}</span>
            </h1>
            <p className="text-xl text-blue-100 mb-3">Stuck Garage Door? We Fix It Today </p>
            <div className="flex items-center gap-2 mb-8">
              <span className="w-3 h-3 rounded-full bg-green-400 inline-block animate-pulse"></span>
              <span className="text-green-300 font-semibold text-base">Tech Arrives in 30-60 Min</span>
            </div>

            <ul className="mb-10 space-y-3">
              {heroFeatures.map((f, i) =>
              <li key={i} className="flex items-center gap-3 text-lg">
                  <span className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-blue-900" />
                  </span>
                  {f}
                </li>
              )}
            </ul>

            <div className="flex gap-4 flex-col sm:flex-row">
              <a href="tel:+12015033118" aria-label="Call ProLine Garage Door now" className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold text-xl px-10 py-4 rounded-xl transition-colors w-full sm:w-auto justify-center">
                <Phone className="w-6 h-6" aria-hidden="true" />
                Give Us A Call
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* Lead Form - Mobile only, right after hero */}
      <section id="contact-form-mobile" className="md:hidden bg-blue-800 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white text-center mb-2">Get a Free Quote</h2>
          <p className="text-blue-200 text-center mb-6 text-sm">No obligation. Most calls returned within minutes.</p>
          {formSent ?
          <div className="max-w-2xl mx-auto text-center py-6">
              <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <p className="text-white text-lg font-semibold">Thank you, we will call you shortly</p>
            </div> :
          <form onSubmit={handleFormSubmit} className="max-w-2xl mx-auto flex flex-col gap-3">
              <input type="text" name="honeypot" value={formData.honeypot || ''} onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })} style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
              <div className="flex flex-col gap-1">
                <label htmlFor="mob-name" className="text-blue-200 text-sm font-semibold">Full Name</label>
                <input id="mob-name" required name="name" type="text" placeholder="Your Name" autoComplete="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="rounded-lg px-4 py-3 text-slate-900 text-base outline-none focus:ring-2 focus:ring-yellow-400" />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="mob-phone" className="text-blue-200 text-sm font-semibold">Phone Number</label>
                <input id="mob-phone" required name="phone" type="tel" placeholder="Phone Number" autoComplete="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: formatPhone(e.target.value) })} className="rounded-lg px-4 py-3 text-slate-900 text-base outline-none focus:ring-2 focus:ring-yellow-400" />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="mob-zip" className="text-blue-200 text-sm font-semibold">Zip Code</label>
                <input id="mob-zip" required name="zipcode" type="text" inputMode="numeric" placeholder="Zip Code" autoComplete="postal-code" value={formData.zipcode} onChange={(e) => setFormData({ ...formData, zipcode: e.target.value.replace(/\D/g, '').slice(0, 5) })} className="rounded-lg px-4 py-3 text-slate-900 text-base outline-none focus:ring-2 focus:ring-yellow-400" />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="mob-message" className="text-blue-200 text-sm font-semibold">Message</label>
                <textarea id="mob-message" name="message" placeholder="Describe your issue" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={3} className="rounded-lg px-4 py-3 text-slate-900 text-base outline-none focus:ring-2 focus:ring-yellow-400 resize-none" />
              </div>
              {formError && <p role="alert" className="text-red-300 text-sm text-center">{formError}</p>}
              <button type="submit" disabled={formLoading} aria-label="Submit contact form" className="bg-yellow-500 hover:bg-yellow-400 disabled:opacity-70 text-slate-900 font-bold rounded-lg px-6 py-3 text-base flex items-center justify-center gap-2 transition-colors">
                {formLoading ? 'Sending...' : <> Contact Us <ChevronRight className="w-5 h-5" aria-hidden="true" /></>}
              </button>
            </form>
          }
        </div>
      </section>

      {/* Lead Form - Desktop only */}
      <section id="contact-form" className="hidden md:block bg-blue-800 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
            Get a Free Quote — We'll Call You Back Fast!
          </h2>
          <p className="text-blue-200 text-center mb-8 text-base">No obligation. Most calls returned within minutes.</p>
          {formSent ?
          <div className="max-w-2xl mx-auto text-center py-6">
              <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <p className="text-white text-xl font-semibold">Thank you, we will call you shortly</p>
            </div> :

          <form onSubmit={handleFormSubmit} className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Honeypot */}
              <input type="text" name="honeypot" value={formData.honeypot || ''} onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })} style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
              <div className="flex flex-col gap-1">
                <label htmlFor="desk-name" className="text-blue-200 text-sm font-semibold">Full Name</label>
                <input id="desk-name" required name="name" type="text" placeholder="Your Name" autoComplete="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="rounded-lg px-4 py-3 text-slate-900 text-base outline-none focus:ring-2 focus:ring-yellow-400" />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="desk-phone" className="text-blue-200 text-sm font-semibold">Phone Number</label>
                <input id="desk-phone" required name="phone" type="tel" placeholder="Phone Number" autoComplete="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: formatPhone(e.target.value) })} className="rounded-lg px-4 py-3 text-slate-900 text-base outline-none focus:ring-2 focus:ring-yellow-400" />
              </div>
              <div className="flex flex-col gap-1 sm:col-span-2">
                <label htmlFor="desk-zip" className="text-blue-200 text-sm font-semibold">Zip Code</label>
                <input id="desk-zip" required name="zipcode" type="text" inputMode="numeric" placeholder="Zip Code" autoComplete="postal-code" value={formData.zipcode} onChange={(e) => setFormData({ ...formData, zipcode: e.target.value.replace(/\D/g, '').slice(0, 5) })} className="rounded-lg px-4 py-3 text-slate-900 text-base outline-none focus:ring-2 focus:ring-yellow-400" />
              </div>
              <div className="flex flex-col gap-1 sm:col-span-2">
                <label htmlFor="desk-message" className="text-blue-200 text-sm font-semibold">Message</label>
                <textarea id="desk-message" name="message" placeholder="Describe your issue" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={3} className="rounded-lg px-4 py-3 text-slate-900 text-base outline-none focus:ring-2 focus:ring-yellow-400 resize-none" />
              </div>
              {formError && <p role="alert" className="text-red-300 text-sm text-center sm:col-span-2">{formError}</p>}
              <button type="submit" disabled={formLoading} aria-label="Submit contact form" className="bg-yellow-500 hover:bg-yellow-400 disabled:opacity-70 text-slate-900 font-bold rounded-lg px-6 py-3 text-base flex items-center justify-center gap-2 transition-colors sm:col-span-2">
                {formLoading ? 'Sending...' : <> Contact Us <ChevronRight className="w-5 h-5" aria-hidden="true" /></>}
              </button>
            </form>
          }
        </div>
      </section>

      {/* Services Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">Professional Garage Door Repair Services In Your Area</h2>
          <p className="text-slate-600 text-lg leading-relaxed text-center">ProLine Garage Door is a locally-owned and operated garage door repair company serving New Jersey. We specialize in spring replacement, opener repair, cable repair, panel replacement, and comprehensive maintenance services. With over a decade of experience, our licensed and insured technicians respond quickly to emergency calls and provide same-day repairs for most residential garage door issues.

          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Our Services</h2>
            <p className="text-slate-600 text-xl">Professional garage door services throughout New Jersey</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) =>
            <Card key={index} className="overflow-hidden bg-white border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="relative h-56 overflow-hidden">
                  <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="224"
                  className="w-full h-full object-cover" />
                
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
                  <div className="absolute top-4 right-4 bg-white/95 p-3 rounded-xl">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                  </div>
                </div>
                <CardContent className="p-5">
                  <p className="text-slate-600 leading-relaxed text-sm">{service.description}</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">

          {/* Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
            <Card className="text-center bg-white border border-slate-200">
              <CardContent className="p-8">
                <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">Licensed</h3>
                <p className="text-slate-500 text-sm">HIC #13VH14019600</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-white border border-slate-200">
              <CardContent className="p-8">
                <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">Insured</h3>
                <p className="text-slate-500 text-sm">Full insurance coverage</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-white border border-slate-200">
              <CardContent className="p-8">
                <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">Bonded</h3>
                <p className="text-slate-500 text-sm">Surety bond protected</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-white border border-slate-200">
              <CardContent className="p-8">
                <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">5-Star Rated</h3>
                <p className="text-slate-500 text-sm">Top-rated on Google</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Best Section */}
      <WhyBestSection />

      {/* Google Reviews Carousel */}
      <GoogleReviewsCarousel />

      {/* Service Areas Section */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="w-7 h-7 text-blue-600" aria-hidden="true" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Service Areas</h2>
          </div>
          <p className="text-lg text-blue-700 font-semibold mb-4">Serving New Jersey</p>
          <p className="text-slate-600 text-lg max-w-4xl mx-auto">
            Bergen, Hudson, Essex, Union, Middlesex, Monmouth, Ocean, Passaic, Morris, Somerset, Hunterdon, Warren, Sussex, Mercer, Burlington, Camden, Gloucester, Atlantic, Cape May, Cumberland, Salem County and surrounding areas.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Fix Your Garage Door?</h2>
          <p className="text-xl mb-10 text-blue-200 max-w-2xl mx-auto">
            Call or email to schedule your free on-site assessment
          </p>
          <div className="flex gap-4 flex-col sm:flex-row justify-center items-center">
            <a href="tel:+12015033118" aria-label="Call ProLine Garage Door at (201) 503-3118" className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold text-xl px-12 py-5 rounded-xl transition-colors">
              <Phone className="w-6 h-6" aria-hidden="true" />
              Call (201) 503-3118
            </a>
            <a href="mailto:info@prolinegaragedoorllc.com" aria-label="Email ProLine Garage Door" className="inline-flex items-center gap-3 bg-white text-blue-950 hover:bg-slate-100 font-bold text-xl px-12 py-5 rounded-xl transition-colors">
              <Mail className="w-6 h-6" aria-hidden="true" />
              Email Us
            </a>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">ProLine Garage Door LLC</h3>
              <p className="text-slate-300 mb-2">Locally owned & operated garage door service</p>
              <p className="text-slate-400 text-sm">Licensed · Insured · Bonded</p>
              <p className="text-slate-400 text-sm">HIC License #13VH14019600</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-blue-400">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Phone</p>
                    <a href="tel:+12015033118" className="text-slate-200 hover:text-blue-400 font-semibold text-lg" dir="ltr">(201) 503-3118</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Email</p>
                    <a href="mailto:info@prolinegaragedoorllc.com" className="text-slate-200 hover:text-blue-400">
                      info@prolinegaragedoorllc.com
                    </a>
                  </div>
                </div>
              </div>

            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">Our Services</h3>
              <ul className="space-y-2 mb-6">
                {serviceLinks.map((s) =>
                <li key={s.path}>
                    <Link to={s.path} onClick={() => window.scrollTo(0, 0)} className="text-slate-400 hover:text-blue-400 text-sm transition-colors">{s.label}</Link>
                  </li>
                )}
              </ul>
              <h3 className="text-xl font-bold mb-2 text-blue-400">Service Areas</h3>
              <p className="text-slate-300 font-semibold mb-1">Serving New Jersey</p>
              <p className="text-slate-400 text-sm mb-4">Bergen, Hudson, Essex, Union, Middlesex, Monmouth, Ocean, Passaic, Morris, Somerset, Hunterdon, Warren, Sussex, Mercer, Burlington, Camden, Gloucester, Atlantic, Cape May, Cumberland, Salem County and surrounding areas.</p>
              <p className="text-slate-400 text-sm italic mb-6">We are a service-area business. We do not operate a walk-in storefront.</p>
              <div className="space-y-1 text-slate-400 text-sm">
                <p className="text-green-400 font-semibold">24/7 Emergency Service</p>
                <p>Available around the clock</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <p className="text-slate-400">© 2026 ProLine Garage Door LLC — All Rights Reserved</p>
                <span className="hidden md:block text-slate-600">•</span>
                <p className="text-slate-400 text-sm">NJ Home Improvement Contractor License HIC #13VH14019600</p>
              </div>
              <div className="flex gap-6 text-sm">
                <Link to="/privacy-policy" className="text-slate-400 hover:text-blue-400">Privacy Policy</Link>
                <span className="text-slate-600">•</span>
                <Link to="/terms" className="text-slate-400 hover:text-blue-400">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>);

}