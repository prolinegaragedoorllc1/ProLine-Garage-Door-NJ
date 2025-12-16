import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Shield, 
  Award, 
  Wrench,
  Home as HomeIcon,
  Building2,
  Settings,
  CheckCircle2,
  Star
} from 'lucide-react';

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
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop'
    },
    {
      icon: Settings,
      title: 'Opener Repair & Installation',
      description: 'Professional garage door opener repair and installation services',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop'
    },
    {
      icon: Shield,
      title: 'Maintenance & Tune-up',
      description: 'Preventative maintenance services to keep your garage door running smoothly',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop'
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
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <HomeIcon className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Garage Door NJ</h1>
              <p className="text-xs text-slate-300">New Jersey</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 gap-2">
              <Phone className="w-4 h-4" />
              <span className="hidden md:inline">Call Now</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative h-[600px] flex items-center justify-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Garage Door Repair & Installation Services
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-slate-200">
            Professional and Fast Service Throughout New Jersey
          </p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 gap-2"
            onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
          >
            <Phone className="w-5 h-5" />
            Get Free Estimate
          </Button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 bg-gradient-to-b from-slate-100 to-white">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold text-center mb-2">Get Free Estimate</h3>
              <p className="text-center text-slate-600 mb-8">
                Fill out the form and we'll get back to you as soon as possible
              </p>
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
                  <option value="motor">Opener Repair/Installation</option>
                  <option value="panel">Panel Replacement</option>
                  <option value="maintenance">Maintenance & Tune-up</option>
                  <option value="other">Other</option>
                </select>
                <Textarea
                  placeholder="Project Details"
                  value={formData.details}
                  onChange={(e) => setFormData({...formData, details: e.target.value})}
                  rows={4}
                />
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
                  Submit Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Our Services</h3>
            <p className="text-slate-600 text-lg">Professional solutions for every need</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 right-4 bg-blue-600 p-3 rounded-lg">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                  <p className="text-slate-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Why Choose Us?</h3>
            <p className="text-slate-600 text-lg">The reasons that make us leaders in the field</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <reason.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{reason.title}</h4>
                  <p className="text-slate-600">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <p className="text-xl text-blue-100">Happy Customers</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">1000+</div>
              <p className="text-xl text-blue-100">Repairs Completed</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10+</div>
              <p className="text-xl text-blue-100">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">What Our Customers Say</h3>
            <p className="text-slate-600 text-lg">Real reviews from satisfied customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-4 leading-relaxed">{review.text}</p>
                  <p className="font-bold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <HomeIcon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold">Garage Door NJ</h4>
              </div>
              <p className="text-slate-300 leading-relaxed">
                We specialize in garage door repair and installation for residential and commercial properties throughout New Jersey. 
                Professional, fast, and reliable service.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">(732) 555-1234</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">info@garagedoor-nj.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">New Jersey, USA</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">Mon-Sun: 8AM - 8PM</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Our Services</h4>
              <ul className="space-y-2 text-slate-300">
                <li>• Garage Door Repair</li>
                <li>• Spring Replacement</li>
                <li>• Opener Repair & Installation</li>
                <li>• Maintenance & Tune-up</li>
                <li>• Panel Replacement</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>© 2024 Garage Door NJ - All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}