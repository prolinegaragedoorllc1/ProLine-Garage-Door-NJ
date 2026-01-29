import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Shield, 
  Award, 
  Wrench,
  Home as HomeIcon,
  Building2,
  Settings,
  CheckCircle2,
  Star,
  DoorOpen,
  Facebook,
  Instagram,
  Linkedin
} from 'lucide-react';
import { createPageUrl } from './utils';
import ReviewsSlider from '../components/ReviewsSlider';
import ServiceAreaMap from '../components/ServiceAreaMap';
import FAQSection from '../components/FAQSection';
import ExitIntentPopup from '../components/ExitIntentPopup';
import LiveChat from '../components/LiveChat';

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    service: '',
    details: ''
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await base44.integrations.Core.SendEmail({
        to: 'info@prolinegaragedoorllc.com',
        subject: '🎯 New Quote Request from Website',
        body: `
          <h2>New Quote Request</h2>
          <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Service:</strong> ${formData.service}</p>
          <p><strong>Details:</strong> ${formData.details}</p>
          <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        `
      });

      base44.analytics.track({
        eventName: 'quote_form_submitted',
        properties: { service: formData.service }
      });

      alert('Thank you! We will contact you within 24 hours.');
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        service: '',
        details: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your request. Please call us at (201) 503-3118');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      icon: Wrench,
      title: 'Broken Spring Replacement',
      description: 'Fast and reliable spring repair and replacement services',
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6940c0d91636ce363ecbf035/377cde803_ChatGPTImageDec16202501_01_48PM.png'
    },
    {
      icon: Settings,
      title: 'Opener Repair',
      description: 'Professional garage door opener repair services',
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6940c0d91636ce363ecbf035/9c4226d0d_ChatGPTImageDec16202512_58_03PM.png'
    },
    {
      icon: Shield,
      title: 'Maintenance & Tune-up',
      description: 'Preventative maintenance services to keep your garage door running smoothly',
      image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&auto=format&fit=crop'
    }
  ];

  const reasons = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Professional team with all necessary licenses and insurance'
    },
    {
      icon: CheckCircle2,
      title: 'Same Day Service',
      description: 'Most repairs completed on the same day'
    },
    {
      icon: Star,
      title: 'Quality Guaranteed',
      description: 'Full warranty on all work and materials'
    }
  ];

  const reviews = [
    {
      name: 'John Smith',
      rating: 5,
      text: 'Excellent service! They arrived within an hour and fixed the door on the spot. Professional and friendly.'
    },
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Excellent work and very professional! The technician was knowledgeable and efficient. Highly recommend!'
    },
    {
      name: 'Michael Brown',
      rating: 5,
      text: 'Great experience! They installed a new garage door for me and everything works perfectly. Thank you!'
    },
    {
      name: 'David Martinez',
      rating: 5,
      text: 'Fast response time and excellent workmanship. Fixed my broken spring same day. Highly professional!'
    },
    {
      name: 'Lisa Anderson',
      rating: 5,
      text: 'Outstanding service! Very knowledgeable technicians who explained everything clearly and professionally.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-2 rounded-lg shadow-lg">
                  <div className="relative">
                    <HomeIcon className="w-6 h-6 text-white" />
                    <DoorOpen className="w-3 h-3 text-orange-400 absolute -bottom-0.5 -right-0.5" />
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">
                  ProLine Garage Door
                  <span className="text-[10px] ml-1 text-slate-500">LLC</span>
                </h1>
                <p className="text-xs text-slate-600 font-medium hidden md:block">Professional Garage Door Experts</p>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
              <button 
                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                className="text-slate-700 hover:text-blue-600 transition-colors"
              >
                Services
              </button>
              <a href={createPageUrl('Services')} className="text-slate-700 hover:text-blue-600 transition-colors">
                All Services
              </a>
              <a href={createPageUrl('Gallery')} className="text-slate-700 hover:text-blue-600 transition-colors">
                Gallery
              </a>
              <a href={createPageUrl('Blog')} className="text-slate-700 hover:text-blue-600 transition-colors">
                Blog
              </a>
              <button 
                onClick={() => document.getElementById('reviews').scrollIntoView({ behavior: 'smooth' })}
                className="text-slate-700 hover:text-blue-600 transition-colors"
              >
                Reviews
              </button>
            </nav>

            <div className="flex items-center gap-3">
              <a href="tel:2015033118" className="hidden sm:block">
                <Button 
                  variant="outline" 
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span dir="ltr">(201) 503-3118</span>
                </Button>
              </a>
              <Button 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 font-bold shadow-lg"
                onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
              >
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative min-h-[85vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6940c0d91636ce363ecbf035/73ee13fec_ChatGPTImageDec16202512_52_34PM.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Trust Badges */}
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20">
                <Shield className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-semibold">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20">
                <CheckCircle2 className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-semibold">Same Day Service</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-semibold">5-Star Rated</span>
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Professional Garage Door<br/>Repair & Service
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-slate-100 max-w-2xl mx-auto">
              Fast, Reliable Expert Service Across North New Jersey<br/>
              Available Now for Emergency Repairs
            </p>

            <div className="flex gap-4 flex-col sm:flex-row justify-center items-center">
              <a href="tel:2015033118" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-xl px-10 py-7 gap-3 shadow-2xl font-bold hover:scale-105 transition-transform"
                >
                  <Phone className="w-6 h-6" />
                  Call (201) 503-3118
                </Button>
              </a>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto bg-white text-slate-900 hover:bg-slate-100 border-2 border-white text-xl px-10 py-7 font-bold shadow-2xl hover:scale-105 transition-transform"
                onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
              >
                Get Free Quote →
              </Button>
            </div>

            {/* Emergency Banner */}
            <div className="mt-12 bg-red-600/90 backdrop-blur-sm inline-block px-6 py-3 rounded-xl shadow-xl border border-red-500/50">
              <p className="text-lg font-bold flex items-center gap-2">
                <span className="animate-pulse">🚨</span>
                24/7 Emergency Service Available
                <span className="animate-pulse">🚨</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-gradient-to-b from-slate-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Get Your Free Quote in 24 Hours</h3>
            <p className="text-xl text-slate-600">
              Fill out the form and we'll get back to you ASAP
            </p>
            <p className="text-lg text-blue-600 font-semibold mt-2">
              ⚡ Fast Response Guaranteed
            </p>
          </div>
          <Card className="max-w-3xl mx-auto shadow-2xl border border-slate-200 rounded-2xl overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-5 rounded-xl mb-8 text-center">
                <p className="font-bold text-lg">💡 Most Repairs Completed Same Day!</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    required
                  />
                  <Input
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <select
                  className="w-full p-3 border rounded-md"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  required
                >
                  <option value="">Select Service</option>
                  <option value="repair">Garage Door Repair</option>
                  <option value="spring">Spring Replacement</option>
                  <option value="motor">Opener Repair</option>
                  <option value="maintenance">Maintenance & Tune-up</option>
                  <option value="other">Other</option>
                </select>
                <Textarea
                  placeholder="Project Details"
                  value={formData.details}
                  onChange={(e) => setFormData({...formData, details: e.target.value})}
                  rows={4}
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-xl py-7 font-bold shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Free Quote Request →'}
                </Button>
                <p className="text-center text-sm text-slate-500 mt-4">
                  🔒 Your information is secure and will never be shared
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Our Services</h3>
            <p className="text-slate-600 text-xl">Professional Solutions for Every Need</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-700 mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group bg-white border border-slate-200 rounded-2xl hover:border-blue-300 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-2xl font-bold text-white mb-2">{service.title}</h4>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                  <button 
                    onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                    className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2 group/btn"
                  >
                    Get Quote
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Why Choose Us?</h3>
            <p className="text-slate-600 text-xl">The reasons that make us industry leaders</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-700 mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <Card key={index} className="text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl">
                <CardContent className="p-10">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <reason.icon className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-slate-900">{reason.title}</h4>
                  <p className="text-slate-600 text-lg leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <div id="service-area">
        <ServiceAreaMap />
      </div>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="group">
              <div className="text-6xl md:text-7xl font-bold mb-4 text-white group-hover:scale-110 transition-transform">500+</div>
              <p className="text-xl md:text-2xl text-blue-100 font-semibold">Happy Customers</p>
            </div>
            <div className="group">
              <div className="text-6xl md:text-7xl font-bold mb-4 text-white group-hover:scale-110 transition-transform">1000+</div>
              <p className="text-xl md:text-2xl text-blue-100 font-semibold">Repairs Completed</p>
            </div>
            <div className="group">
              <div className="text-6xl md:text-7xl font-bold mb-4 text-white group-hover:scale-110 transition-transform">10+</div>
              <p className="text-xl md:text-2xl text-blue-100 font-semibold">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section - Dynamic Slider */}
      <div id="reviews">
        <ReviewsSlider reviews={reviews} />
      </div>

      {/* FAQ Section */}
      <FAQSection />
      
      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Ready to Fix Your Garage Door?</h3>
          <p className="text-xl md:text-2xl mb-10 text-slate-300 max-w-2xl mx-auto">
            Call now and get professional same-day service
          </p>
          <div className="flex gap-4 flex-col sm:flex-row justify-center items-center">
            <a href="tel:2015033118" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-xl px-12 py-8 gap-3 shadow-2xl font-bold hover:scale-105 transition-transform"
              >
                <Phone className="w-6 h-6" />
                Call (201) 503-3118
              </Button>
            </a>
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto bg-white text-slate-900 hover:bg-slate-100 border-2 border-white text-xl px-12 py-8 font-bold shadow-2xl hover:scale-105 transition-transform"
              onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
            >
              Get Free Quote →
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-3 rounded-xl shadow-lg">
                    <div className="relative">
                      <HomeIcon className="w-7 h-7 text-white" />
                      <DoorOpen className="w-4 h-4 text-orange-400 absolute -bottom-1 -right-1" />
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-bold">
                    ProLine Garage Door <span className="text-sm text-slate-400">LLC</span>
                  </h4>
                  <p className="text-sm text-slate-400">Professional Garage Door Experts</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed text-lg mb-6">
                We specialize in professional garage door repair services for residential properties. 
                Fast, reliable, and expert service you can trust.
              </p>
              <div className="flex gap-4">
                <a href="tel:2015033118">
                  <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 gap-2">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </Button>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6 text-blue-400">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Phone</p>
                    <a href="tel:2015033118" className="text-slate-200 hover:text-blue-400 transition-colors font-semibold text-lg" dir="ltr">
                      (201) 503-3118
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Email</p>
                    <a href="mailto:info@prolinegaragedoorllc.com" className="text-slate-200 hover:text-blue-400 transition-colors break-all">
                      info@prolinegaragedoorllc.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6 text-blue-400">Our Services</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  Garage Door Repair
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  Spring Replacement
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  Opener Repair
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  Maintenance & Tune-up
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6 text-blue-400">Follow Us</h4>
              <div className="flex gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <div className="mt-6">
                <a href={createPageUrl('Blog')} className="text-slate-300 hover:text-blue-400 transition-colors block mb-2">Blog & Resources</a>
                <a href={createPageUrl('Gallery')} className="text-slate-300 hover:text-blue-400 transition-colors block mb-2">Project Gallery</a>
                <a href={createPageUrl('Services')} className="text-slate-300 hover:text-blue-400 transition-colors block">All Services</a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-400">© 2026 ProLine Garage Door LLC - All Rights Reserved</p>
              <div className="flex gap-6 text-sm">
                <a href="/privacy-policy" className="text-slate-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
                <span className="text-slate-600">•</span>
                <a href="/terms-of-service" className="text-slate-400 hover:text-blue-400 transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Exit Intent Popup */}
      <ExitIntentPopup />

      {/* Live Chat */}
      <LiveChat />
    </div>
  );
}

// Add Google Analytics
if (typeof window !== 'undefined') {
  // Google Analytics 4
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');

  // Facebook Pixel (example)
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
}