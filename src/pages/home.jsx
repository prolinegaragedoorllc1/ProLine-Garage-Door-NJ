import React, { useState, useEffect, useRef } from 'react';
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
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

const GoogleLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-6 h-6 flex-shrink-0">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

const StarRow = ({ count = 5 }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
    ))}
  </div>
);

export default function Home() {
  const [formData, setFormData] = useState({ name: '', phone: '', zipcode: '', message: '' });
  const [formSent, setFormSent] = useState(false);
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const header = document.getElementById('main-header');
    if (!header) return;
    const update = () => setHeaderHeight(header.offsetHeight);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const subject = `New Contact Form Submission - ${formData.name}`;
    const body = `Name: ${formData.name}\nPhone: ${formData.phone}\nZip Code: ${formData.zipcode}\nMessage: ${formData.message}`;
    window.location.href = `mailto:info@prolinegaragedoorllc.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFormSent(true);
  };

  const services = [
    { icon: Wrench, title: 'Spring Replacement', description: 'Torsion & extension spring repair and replacement', image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6940c0d91636ce363ecbf035/6946e0e87_spring-repair.png' },
    { icon: Settings, title: 'Opener Repair', description: 'All major brands — repair and installation', image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6940c0d91636ce363ecbf035/90397e288_opener-repair.png' },
    { icon: Shield, title: 'Maintenance', description: 'Full tune-up, alignment, balance & inspection', image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6940c0d91636ce363ecbf035/437d2a987_door-repair.png' }
  ];

  const heroFeatures = [
    'Broken Garage Door Spring Repair',
    'Opener Repair & Installation',
    'Off-Track Door Repair',
    'Cable Replacement',
    'Routine Maintenance & Tune-Up',
    'Licensed, Insured & Bonded',
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <header id="main-header" className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4 gap-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="https://media.base44.com/images/public/6940c0d91636ce363ecbf035/0f4671081_WebsiteLOGO.png"
                alt="ProLine Garage Door LLC"
                className="h-20 md:h-28 w-auto"
              />
            </div>

            {/* Google Reviews Badge - Desktop */}
            <a
              href="https://share.google/N5gumsMwdf6KKGSWK"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-3 border border-slate-200 rounded-xl px-6 py-3 hover:bg-slate-50 transition-colors"
            >
              <GoogleLogo />
              <div className="flex flex-col">
                <span className="text-sm text-slate-500 leading-none mb-1">Rated 5/5 Based On</span>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-slate-700 mt-0.5">Google Reviews</span>
              </div>
            </a>

            {/* CTA Phone */}
            <a href="tel:2015033118" className="flex-shrink-0">
              <div className="bg-yellow-500 hover:bg-yellow-400 transition-colors rounded-xl px-8 py-4 flex items-center gap-4 cursor-pointer">
                <div className="bg-white/20 rounded-lg p-2.5">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-white text-sm font-semibold">Free Onsite Inspection</span>
                  <span className="text-white font-bold text-2xl md:text-3xl" dir="ltr">(201) 503-3118</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </header>

      {/* Trust Bar - sticky below header */}
      <div className="bg-blue-950 text-white py-2.5 sticky z-40" style={{ top: headerHeight }}>
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

      {/* Business Name Banner */}
      <div className="bg-white border-b border-slate-100 py-2 text-center">
        <span className="text-slate-700 font-semibold text-base tracking-wide">ProLine Garage Door LLC</span>
      </div>

      {/* Hero Section */}
      <section
        className="relative min-h-[75vh] flex items-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(10,20,60,0.65), rgba(10,20,60,0.55)), url(https://media.base44.com/images/public/6940c0d91636ce363ecbf035/06a2bcba1_Website-background-updated.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Garage Door Repair<br/>In New Jersey
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Reliable & Professional Local Garage Door Company
            </p>

            <ul className="mb-10 space-y-3">
              {heroFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-lg">
                  <span className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-blue-900" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex gap-4 flex-col sm:flex-row">
              <a href="tel:2015033118" className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-xl px-10 py-4 rounded-xl transition-colors w-full sm:w-auto justify-center">
                <Phone className="w-6 h-6" />
                Give Us A Call
              </a>
              <button
                onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-3 bg-blue-800 hover:bg-blue-900 text-white font-bold text-xl px-10 py-4 rounded-xl transition-colors w-full sm:w-auto justify-center"
              >
                Free Estimate
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section id="contact-form" className="bg-blue-950 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Leave Your Details And We Will Contact You!
          </h2>
          {formSent ? (
            <div className="max-w-2xl mx-auto text-center py-6">
              <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <p className="text-white text-xl font-semibold">Thank you! We'll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                required
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                className="rounded-lg px-4 py-3 text-slate-900 text-base outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                required
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
                className="rounded-lg px-4 py-3 text-slate-900 text-base outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                required
                type="text"
                placeholder="Zip Code"
                value={formData.zipcode}
                onChange={e => setFormData({...formData, zipcode: e.target.value})}
                className="rounded-lg px-4 py-3 text-slate-900 text-base outline-none focus:ring-2 focus:ring-yellow-400 sm:col-span-2"
              />
              <textarea
                placeholder="Message (describe your issue)"
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                rows={3}
                className="rounded-lg px-4 py-3 text-slate-900 text-base outline-none focus:ring-2 focus:ring-yellow-400 sm:col-span-2 resize-none"
              />
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold rounded-lg px-6 py-3 text-base flex items-center justify-center gap-2 transition-colors sm:col-span-2"
              >
                Contact Us <ChevronRight className="w-5 h-5" />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Our Services</h2>
            <p className="text-slate-600 text-xl">Professional garage door services throughout New Jersey</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden bg-white border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
                  <div className="absolute top-4 right-4 bg-white/95 p-3 rounded-xl">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{service.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">About ProLine Garage Door LLC</h2>
          </div>

          <div className="max-w-4xl mx-auto mb-14">
            <Card className="bg-white border border-slate-200">
              <CardContent className="p-8 md:p-12">
                <p className="text-slate-700 leading-relaxed mb-5">
                  ProLine Garage Door LLC provides professional garage door repair, maintenance, and installation services throughout New Jersey. We work with residential garage doors and common systems, handling a wide range of issues including broken springs, malfunctioning openers, off-track doors, worn cables, and general performance problems.
                </p>
                <p className="text-slate-700 leading-relaxed mb-5">
                  Each service call starts with an on-site assessment to identify the issue and determine the appropriate solution. Many repairs can be completed in a single visit, depending on the condition of the door and the required parts.
                </p>
                <p className="text-slate-700 leading-relaxed mb-5">
                  ProLine Garage Door LLC uses quality replacement parts that are compatible with most major garage door brands and systems. In addition to repairs, we provide routine maintenance and adjustments to help extend the life of garage door systems.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-5 mt-6">
                  <p className="text-slate-900 font-semibold">
                    To request an assessment or schedule a service visit, call <a href="tel:2015033118" className="text-blue-600 hover:text-blue-700" dir="ltr">(201) 503-3118</a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

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

      {/* Google Reviews - Elfsight */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <GoogleLogo />
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Google Reviews</h2>
            </div>
            <p className="text-slate-600 text-xl">See what our customers are saying</p>
          </div>

          {/* Elfsight Widget - replace the widget ID after creating your Elfsight account at elfsight.com */}
          <div className="elfsight-app-REPLACE_WITH_YOUR_WIDGET_ID" data-elfsight-app-lazy></div>

          <div className="text-center mt-8">
            <a
              href="https://share.google/N5gumsMwdf6KKGSWK"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white text-slate-800 hover:bg-slate-100 border-2 border-slate-300 gap-3 text-lg px-8 py-6 shadow-sm">
                <GoogleLogo />
                View Our Google Business Profile
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-blue-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Fix Your Garage Door?</h2>
          <p className="text-xl mb-10 text-blue-200 max-w-2xl mx-auto">
            Call or email to schedule your free on-site assessment
          </p>
          <div className="flex gap-4 flex-col sm:flex-row justify-center items-center">
            <a href="tel:2015033118" className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-xl px-12 py-5 rounded-xl transition-colors">
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
                  <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Phone</p>
                    <a href="tel:2015033118" className="text-slate-200 hover:text-blue-400 font-semibold text-lg" dir="ltr">(201) 503-3118</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Email</p>
                    <a href="mailto:info@prolinegaragedoorllc.com" className="text-slate-200 hover:text-blue-400">
                      info@prolinegaragedoorllc.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-700">
                <a
                  href="https://share.google/N5gumsMwdf6KKGSWK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-2 mb-4"
                >
                  View us on Google Maps →
                </a>
                <div className="rounded-xl overflow-hidden border border-slate-700">
                  <iframe
                    src="https://maps.google.com/maps?q=ProLine+Garage+Door+LLC+New+Jersey+(201)+503-3118&output=embed"
                    width="100%"
                    height="180"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ProLine Garage Door LLC - New Jersey"
                  ></iframe>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-blue-400">Service Area</h3>
              <p className="text-slate-300 mb-2">All of New Jersey</p>
              <p className="text-slate-400 text-sm italic mb-6">We are a service-area business. We do not operate a walk-in storefront.</p>
              <div className="space-y-1 text-slate-400 text-sm">
                <p>Mon–Sun: 8 AM – 8 PM</p>
                <p>By appointment</p>
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
                <Link to={createPageUrl('privacy-policy')} className="text-slate-400 hover:text-blue-400">Privacy Policy</Link>
                <span className="text-slate-600">•</span>
                <Link to={createPageUrl('terms')} className="text-slate-400 hover:text-blue-400">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}