import React, { useState } from 'react';
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
  DoorOpen
} from 'lucide-react';
import ReviewsSlider from '../components/ReviewsSlider';
import ServiceAreaMap from '../components/ServiceAreaMap';

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    service: '',
    details: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon');
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      service: '',
      details: ''
    });
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
      text: 'Best prices I found in the area. The work was done perfectly and quickly. Highly recommend!'
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
      text: 'Outstanding service! Very knowledgeable technicians who explained everything. Fair pricing too.'
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
                <p className="text-xs text-slate-600 font-medium hidden md:block">מומחים לתיקון דלתות מוסך</p>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
              <button 
                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                className="text-slate-700 hover:text-orange-600 transition-colors"
              >
                שירותים
              </button>
              <button 
                onClick={() => document.getElementById('why-us').scrollIntoView({ behavior: 'smooth' })}
                className="text-slate-700 hover:text-orange-600 transition-colors"
              >
                למה אנחנו?
              </button>
              <button 
                onClick={() => document.getElementById('service-area').scrollIntoView({ behavior: 'smooth' })}
                className="text-slate-700 hover:text-orange-600 transition-colors"
              >
                אזור שירות
              </button>
              <button 
                onClick={() => document.getElementById('reviews').scrollIntoView({ behavior: 'smooth' })}
                className="text-slate-700 hover:text-orange-600 transition-colors"
              >
                ביקורות
              </button>
            </nav>

            <div className="flex items-center gap-3">
              <a href="tel:2015033118" className="hidden sm:block">
                <Button 
                  variant="outline" 
                  className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-bold gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span dir="ltr">(201) 503-3118</span>
                </Button>
              </a>
              <Button 
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 font-bold shadow-lg"
                onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
              >
                קבל הצעת מחיר חינם
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
            <div className="flex justify-center gap-6 mb-8 flex-wrap">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-sm font-semibold">רישיון ומבוטח</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle2 className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-semibold">שירות באותו היום</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-semibold">דירוג 5 כוכבים</span>
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              תיקון דלתות מוסך<br/>מקצועי ומהיר
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-slate-100 max-w-2xl mx-auto">
              שירות אמין ומומחה בכל צפון ניו ג'רזי<br/>
              זמינים עכשיו לשירות חירום
            </p>

            <div className="flex gap-4 flex-col sm:flex-row justify-center items-center">
              <a href="tel:2015033118" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-xl px-10 py-7 gap-3 shadow-2xl font-bold hover:scale-105 transition-transform"
                >
                  <Phone className="w-6 h-6" />
                  <span dir="ltr">התקשר (201) 503-3118</span>
                </Button>
              </a>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto bg-white text-slate-900 hover:bg-slate-100 border-2 border-white text-xl px-10 py-7 font-bold shadow-2xl hover:scale-105 transition-transform"
                onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
              >
                קבל הצעת מחיר חינם →
              </Button>
            </div>

            {/* Emergency Banner */}
            <div className="mt-12 bg-red-600/90 backdrop-blur-sm inline-block px-6 py-3 rounded-lg shadow-xl">
              <p className="text-lg font-bold flex items-center gap-2">
                <span className="animate-pulse">🚨</span>
                שירות חירום זמין 24/7
                <span className="animate-pulse">🚨</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-gradient-to-b from-orange-50 via-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">קבל הצעת מחיר חינם תוך 24 שעות</h3>
            <p className="text-xl text-slate-600">
              מלא את הטופס ונחזור אליך בהקדם האפשרי
            </p>
            <p className="text-lg text-orange-600 font-semibold mt-2">
              ⚡ תגובה מהירה מובטחת
            </p>
          </div>
          <Card className="max-w-3xl mx-auto shadow-2xl border-2 border-orange-100">
            <CardContent className="p-8 md:p-12">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-lg mb-8 text-center">
                <p className="font-bold text-lg">💡 רוב התיקונים מבוצעים באותו היום!</p>
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
                <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-xl py-7 font-bold shadow-lg hover:shadow-xl transition-all">
                  שלח בקשה להצעת מחיר חינם →
                </Button>
                <p className="text-center text-sm text-slate-500 mt-4">
                  🔒 המידע שלך מאובטח ולא ישותף עם צדדים שלישיים
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">השירותים שלנו</h3>
            <p className="text-slate-600 text-xl">פתרונות מקצועיים לכל צורך</p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group border-2 border-slate-100 hover:border-orange-200">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 right-4 bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors">{service.title}</h4>
                  <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
                  <button 
                    onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                    className="text-orange-600 font-semibold hover:text-orange-700 flex items-center gap-2 group/btn"
                  >
                    קבל הצעת מחיר
                    <span className="group-hover/btn:translate-x-1 transition-transform">←</span>
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">למה לבחור בנו?</h3>
            <p className="text-slate-600 text-xl">הסיבות שהופכות אותנו למובילים בתחום</p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <Card key={index} className="text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-slate-100 hover:border-orange-200">
                <CardContent className="p-10">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <reason.icon className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4">{reason.title}</h4>
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
      <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="group">
              <div className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">500+</div>
              <p className="text-xl md:text-2xl text-slate-200 font-semibold">לקוחות מרוצים</p>
            </div>
            <div className="group">
              <div className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">1000+</div>
              <p className="text-xl md:text-2xl text-slate-200 font-semibold">תיקונים שבוצעו</p>
            </div>
            <div className="group">
              <div className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">10+</div>
              <p className="text-xl md:text-2xl text-slate-200 font-semibold">שנות ניסיון</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section - Dynamic Slider */}
      <div id="reviews">
        <ReviewsSlider reviews={reviews} />
      </div>
      
      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">מוכן לתקן את דלת המוסך שלך?</h3>
          <p className="text-xl md:text-2xl mb-10 text-orange-50 max-w-2xl mx-auto">
            התקשר עכשיו וקבל שירות מקצועי ומהיר באותו היום
          </p>
          <div className="flex gap-4 flex-col sm:flex-row justify-center items-center">
            <a href="tel:2015033118" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-white text-orange-600 hover:bg-orange-50 text-xl px-12 py-8 gap-3 shadow-2xl font-bold hover:scale-105 transition-transform"
              >
                <Phone className="w-6 h-6" />
                <span dir="ltr">התקשר (201) 503-3118</span>
              </Button>
            </a>
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto bg-transparent border-3 border-white text-white hover:bg-white/10 text-xl px-12 py-8 font-bold shadow-2xl hover:scale-105 transition-transform"
              onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
            >
              קבל הצעת מחיר חינם →
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
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
                  <p className="text-sm text-slate-400">מומחים לתיקון דלתות מוסך</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed text-lg mb-6">
                אנחנו מתמחים בשירותי תיקון דלתות מוסך מקצועיים לנכסים מגורים. 
                שירות מהיר, אמין ומומחה שאתה יכול לסמוך עליו.
              </p>
              <div className="flex gap-4">
                <a href="tel:2015033118">
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 gap-2">
                    <Phone className="w-4 h-4" />
                    התקשר עכשיו
                  </Button>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6 text-orange-400">צור קשר</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-slate-400 mb-1">טלפון</p>
                    <a href="tel:2015033118" className="text-slate-200 hover:text-orange-400 transition-colors font-semibold text-lg" dir="ltr">
                      (201) 503-3118
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-slate-400 mb-1">אימייל</p>
                    <a href="mailto:info@prolinegaragedoorllc.com" className="text-slate-200 hover:text-orange-400 transition-colors break-all">
                      info@prolinegaragedoorllc.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6 text-orange-400">השירותים שלנו</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" />
                  תיקון דלתות מוסך
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" />
                  החלפת קפיצים
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" />
                  תיקון מנוע
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" />
                  תחזוקה שוטפת
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-400">© 2026 ProLine Garage Door LLC - כל הזכויות שמורות</p>
              <div className="flex gap-6 text-sm">
                <a href="/privacy-policy" className="text-slate-400 hover:text-orange-400 transition-colors">מדיניות פרטיות</a>
                <span className="text-slate-600">•</span>
                <a href="/terms-of-service" className="text-slate-400 hover:text-orange-400 transition-colors">תנאי שימוש</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}