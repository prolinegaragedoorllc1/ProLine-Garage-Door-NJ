import React, { useState, useEffect, useRef } from 'react';
import ServiceAreaMap from '../components/ServiceAreaMap';
import GoogleReviewsCarousel from '../components/GoogleReviewsCarousel';
import WhyBestSection from '../components/WhyBestSection';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
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
  MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

const serviceLinks = [
  { label: 'Garage Door Spring Repair', path: '/services/spring-repair' },
  { label: 'Garage Door Cable Repair', path: '/services/cable-repair' },
  { label: 'Garage Door Roller Replacement', path: '/services/roller-replacement' },
  { label: 'Garage Door Panel Replacement', path: '/services/panel-replacement' },
  { label: 'Garage Door Openers', path: '/services/garage-door-openers' },
];

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
  const [formData, setFormData] = useState({ name: '', phone: '', zipcode: '', message: '' });
  const [formSent, setFormSent] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const subject = `New Contact Form Submission - ${formData.name}`;
    const body = `Name: ${formData.name}\nPhone: ${formData.phone}\nZip Code: ${formData.zipcode}\nMessage: ${formData.message}`;
    window.location.href = `mailto:info@prolinegaragedoorllc.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFormSent(true);
  };

  const services = [
  { icon: Wrench, title: 'Spring Repair & Replacement', description: 'Torsion & extension spring repair and replacement — same day service available.', image: 'https://media.base44.com/images/public/6940c0d91636ce363ecbf035/7864d5cca_generated_image.png', path: '/services/spring-repair' },
  { icon: Settings, title: 'Opener Repair & Installation', description: 'All major brands — belt-drive, chain-drive, and smart openers.', image: 'https://media.base44.com/images/public/6940c0d91636ce363ecbf035/d454f09ac_generated_image.png', path: '/services/garage-door-openers' },
  { icon: Shield, title: 'Roller Replacement', description: 'Noisy or jerky door? New nylon rollers restore smooth, quiet operation fast.', image: 'https://media.base44.com/images/public/6940c0d91636ce363ecbf035/8f122331d_generated_image.png', path: '/services/roller-replacement' },
  { icon: Award, title: 'Panel Replacement', description: 'Dented or cracked panel? We match and replace individual sections — no full door needed.', image: 'https://media.base44.com/images/public/6940c0d91636ce363ecbf035/42ad8fe28_generated_image.png', path: '/services/panel-replacement' },
  { icon: CheckCircle2, title: 'Full Tune-Up & Maintenance', description: 'Lubrication, balance check, hardware tightening — extends door life by years.', image: 'https://media.base44.com/images/public/6940c0d91636ce363ecbf035/55372ee69_generated_image.png', path: null },
  { icon: AlertTriangle, title: 'Cable Repair & Replacement', description: 'Frayed or snapped cable? We carry common sizes and replace both cables same day.', image: 'https://media.base44.com/images/public/6940c0d91636ce363ecbf035/0d4cbef2c_generated_image.png', path: '/services/cable-repair' }];


  const heroFeatures = [
  'Broken Garage Door Spring Repair',
  'Opener Repair & Installation',
  'Off-Track Door Repair',
  'Cable Replacement',
  'Routine Maintenance & Tune-Up',
  'Licensed, Insured & Bonded'];


  return (
    <div className="min-h-screen bg-white pb-20 lg:pb-0">
      <SiteHeader />

      {/* Hero Section */}
      <section
        className="relative min-h-[75vh] flex items-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(10,20,60,0.65), rgba(10,20,60,0.55)), url(https://media.base44.com/images/public/6940c0d91636ce363ecbf035/06a2bcba1_Website-background-updated.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
        
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">Garage Door Repair
In Your Area
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Reliable & Professional Local Garage Door Company
            </p>

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
              <a href="tel:+12015033118" className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-xl px-10 py-4 rounded-xl transition-colors w-full sm:w-auto justify-center">
                <Phone className="w-6 h-6" />
                Give Us A Call
              </a>
              <button
                onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl px-10 py-4 rounded-xl transition-colors w-full sm:w-auto justify-center">
                
                Free Estimate
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section id="contact-form" className="bg-blue-800 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
            Get a Free Quote — We'll Call You Back Fast!
          </h2>
          <p className="text-blue-200 text-center mb-8 text-base">No obligation. Most calls returned within minutes.</p>
          {formSent ?
          <div className="max-w-2xl mx-auto text-center py-6">
              <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <p className="text-white text-xl font-semibold">Thank you! We'll be in touch shortly.</p>
            </div> :

          <form onSubmit={handleFormSubmit} className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
              required
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="rounded-lg px-4 py-3 text-slate-900 text-base outline-none focus:ring-2 focus:ring-yellow-400" />
            
              <input
              required
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="rounded-lg px-4 py-3 text-slate-900 text-base outline-none focus:ring-2 focus:ring-yellow-400" />
            
              <input
              required
              type="text"
              placeholder="Zip Code"
              value={formData.zipcode}
              onChange={(e) => setFormData({ ...formData, zipcode: e.target.value })}
              className="rounded-lg px-4 py-3 text-slate-900 text-base outline-none focus:ring-2 focus:ring-yellow-400 sm:col-span-2" />
            
              <textarea
              placeholder="Message (describe your issue)"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={3}
              className="rounded-lg px-4 py-3 text-slate-900 text-base outline-none focus:ring-2 focus:ring-yellow-400 sm:col-span-2 resize-none" />
            
              <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold rounded-lg px-6 py-3 text-base flex items-center justify-center gap-2 transition-colors sm:col-span-2">
              
                Contact Us <ChevronRight className="w-5 h-5" />
              </button>
            </form>
          }
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
            <MapPin className="w-7 h-7 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Service Areas</h2>
          </div>
          <p className="text-lg text-blue-700 font-semibold mb-4">Serving North New Jersey</p>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Paramus, Fair Lawn, Wayne, Bergen County, Passaic County, Morris County and surrounding areas.
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
            <a href="tel:+12015033118" className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-xl px-12 py-5 rounded-xl transition-colors">
              <Phone className="w-6 h-6" />
              Call (201) 503-3118
            </a>
            <a href="mailto:info@prolinegaragedoorllc.com" className="inline-flex items-center gap-3 bg-white text-blue-950 hover:bg-slate-100 font-bold text-xl px-12 py-5 rounded-xl transition-colors">
              <Mail className="w-6 h-6" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>);

}