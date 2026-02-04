import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Phone, 
  Mail, 
  Shield, 
  Wrench,
  Settings,
  CheckCircle2,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

export default function Home() {
  const services = [
    {
      icon: Wrench,
      title: 'Spring Replacement',
      description: 'Professional garage door spring repair and replacement services',
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6940c0d91636ce363ecbf035/6946e0e87_spring-repair.png'
    },
    {
      icon: Settings,
      title: 'Opener Repair',
      description: 'Garage door opener repair and maintenance services',
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6940c0d91636ce363ecbf035/90397e288_opener-repair.png'
    },
    {
      icon: Shield,
      title: 'Maintenance Services',
      description: 'Regular maintenance to keep your garage door functioning properly',
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6940c0d91636ce363ecbf035/437d2a987_door-repair.png'
    }
  ];

  const reviews = [
    {
      name: 'Briana Nardozza',
      rating: 5,
      text: 'My mom\'s car got stuck inside the garage since it didn\'t open, I called this company and the technician was very helpful and came quick to fix the problem. Very happy with the service thanks!'
    },
    {
      name: 'Peter Ruiz',
      rating: 5,
      text: 'Our garage door suddenly wouldn\'t open this morning. I called ProLine and they responded quickly. Great service!! And they cleaned after themselves. Would definitely recommend'
    },
    {
      name: 'Sabrina Kicaj',
      rating: 5,
      text: 'Quick response, on time service, and very professional. The technician explained everything clearly and fixed the issue fast. Fair pricing and great work...my garage door works perfectly now. Highly recommend!'
    },
    {
      name: 'Samantha Pernetti',
      rating: 5,
      text: 'Fantastic and reliable service at a reasonable price. We had an issue with the garage door and weren\'t able to get the car out during a time we needed to be somewhere in a pinch! Fast response time and turnover with a stressful situation that was handled extremely professional and smooth! Thank you ProLine!'
    },
    {
      name: 'Dennis DeMarco',
      rating: 5,
      text: 'Great and smooth service, clean work. Recommended, thank you!!'
    },
    {
      name: 'Suzana Durollari-Albiez',
      rating: 5,
      text: 'Outstanding service! They were highly recommended to me, and they absolutely lived up to the praise. The team was knowledgeable, courteous, and made sure everything was working perfectly before leaving. I\'m very happy with the experience and would definitely recommend them to anyone in need of garage door service.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6940c0d91636ce363ecbf035/469d1509f_logo-updated1.png" 
                alt="ProLine Garage Door LLC" 
                className="h-14 md:h-16 w-auto"
              />
            </div>

            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
              <button 
                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                className="text-slate-700 hover:text-blue-600"
              >
                Services
              </button>
              <button 
                onClick={() => document.getElementById('reviews').scrollIntoView({ behavior: 'smooth' })}
                className="text-slate-700 hover:text-blue-600"
              >
                Reviews
              </button>
              <Link to={createPageUrl('Contact')} className="text-slate-700 hover:text-blue-600">
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <a href="tel:2015033118">
                <Button 
                  variant="outline" 
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span dir="ltr">(201) 503-3118</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.4)), url(https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6940c0d91636ce363ecbf035/3d55fe6ad_website-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20">
                <Shield className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-semibold">Insured</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20">
                <CheckCircle2 className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-semibold">Service Area Business</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Professional Garage Door Services
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-slate-100 max-w-2xl mx-auto">
              Local service provider based in New Jersey<br/>
              Mon-Fri & Sun: 6 AM - 10 PM • By appointment
            </p>

            <div className="flex gap-4 flex-col sm:flex-row justify-center items-center">
              <a href="tel:2015033118">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-xl px-10 py-7 gap-3"
                >
                  <Phone className="w-6 h-6" />
                  Call (201) 503-3118
                </Button>
              </a>
              <a href="mailto:info@prolinegaragedoorllc.com">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-white text-slate-900 hover:bg-slate-100 border-2 border-white text-xl px-10 py-7"
                >
                  <Mail className="w-6 h-6" />
                  Email Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Our Services</h2>
            <p className="text-slate-600 text-xl">Professional garage door services in New Jersey</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden bg-white border border-slate-200">
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
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">About ProLine Garage Door LLC</h2>
            <p className="text-slate-600 text-xl max-w-3xl mx-auto">
              We are a service-area business operating in New Jersey. We provide professional garage door repair and maintenance services by appointment. We do not operate a walk-in storefront.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="text-center bg-white border border-slate-200">
              <CardContent className="p-10">
                <div className="bg-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Insured</h3>
                <p className="text-slate-600 text-lg leading-relaxed">Professional team with full insurance coverage</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-white border border-slate-200">
              <CardContent className="p-10">
                <div className="bg-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Service Area</h3>
                <p className="text-slate-600 text-lg leading-relaxed">Serving all of New Jersey</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-white border border-slate-200">
              <CardContent className="p-10">
                <div className="bg-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Quality Work</h3>
                <p className="text-slate-600 text-lg leading-relaxed">Professional service with warranty on work and materials</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Customer Reviews</h2>
            <p className="text-slate-600 text-xl">What our customers say</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-white border border-slate-200">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-4 leading-relaxed">{review.text}</p>
                  <p className="text-slate-900 font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h2>
          <p className="text-xl md:text-2xl mb-10 text-slate-300 max-w-2xl mx-auto">
            Call or email to schedule an appointment
          </p>
          <div className="flex gap-4 flex-col sm:flex-row justify-center items-center">
            <a href="tel:2015033118">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-xl px-12 py-8 gap-3"
              >
                <Phone className="w-6 h-6" />
                Call (201) 503-3118
              </Button>
            </a>
            <a href="mailto:info@prolinegaragedoorllc.com">
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white text-slate-900 hover:bg-slate-100 border-2 border-white text-xl px-12 py-8"
              >
                <Mail className="w-6 h-6" />
                Email Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6940c0d91636ce363ecbf035/469d1509f_logo-updated1.png" 
                  alt="ProLine Garage Door LLC" 
                  className="h-20 w-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">ProLine Garage Door LLC</h3>
              <p className="text-slate-300 leading-relaxed text-lg mb-3">
                Locally owned & operated garage door service
              </p>
              <p className="text-slate-300 leading-relaxed text-lg mb-6">
                Professional garage door repair services for residential properties in New Jersey.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-blue-400">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Phone</p>
                    <a href="tel:2015033118" className="text-slate-200 hover:text-blue-400 font-semibold text-lg" dir="ltr">
                      (201) 503-3118
                    </a>
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
                  className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-2"
                >
                  View us on Google Maps →
                </a>
                </div>
                </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-blue-400">Service Area</h3>
              <p className="text-slate-300 mb-4">All of New Jersey</p>
              <p className="text-slate-400 text-sm italic">We are a service-area business. We do not operate a walk-in storefront.</p>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-400">© 2026 ProLine Garage Door LLC - All Rights Reserved</p>
              <div className="flex gap-6 text-sm">
                <Link to={createPageUrl('PrivacyPolicy')} className="text-slate-400 hover:text-blue-400">Privacy Policy</Link>
                <span className="text-slate-600">•</span>
                <Link to={createPageUrl('TermsOfService')} className="text-slate-400 hover:text-blue-400">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}