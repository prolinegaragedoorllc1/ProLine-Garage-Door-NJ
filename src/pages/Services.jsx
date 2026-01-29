import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone, Home as HomeIcon, DoorOpen, Wrench, Settings, Shield, Clock, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

export default function Services() {
  const services = [
    {
      icon: Wrench,
      title: "Broken Spring Replacement",
      description: "Fast and reliable spring repair and replacement services for all door types.",
      features: [
        "Same-day service available",
        "High-cycle springs for longer life",
        "Professional safety inspection",
        "Warranty on parts and labor"
      ],
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6940c0d91636ce363ecbf035/377cde803_ChatGPTImageDec16202501_01_48PM.png"
    },
    {
      icon: Settings,
      title: "Garage Door Opener Repair",
      description: "Expert repair and installation of all major opener brands and models.",
      features: [
        "All brands serviced",
        "Smart opener installation",
        "Belt, chain, and screw drives",
        "Remote programming included"
      ],
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6940c0d91636ce363ecbf035/9c4226d0d_ChatGPTImageDec16202512_58_03PM.png"
    },
    {
      icon: Shield,
      title: "Maintenance & Tune-up",
      description: "Preventative maintenance services to keep your garage door running smoothly.",
      features: [
        "Complete 20-point inspection",
        "Lubrication of all moving parts",
        "Safety sensor alignment",
        "Track cleaning and adjustment"
      ],
      image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&auto=format&fit=crop"
    },
    {
      icon: DoorOpen,
      title: "Door Off Track Repair",
      description: "Emergency service for doors that have come off their tracks.",
      features: [
        "Emergency response available",
        "Track realignment",
        "Roller replacement",
        "Full safety check"
      ],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop"
    },
    {
      icon: Settings,
      title: "Cable Replacement",
      description: "Professional cable replacement and repair for safe door operation.",
      features: [
        "High-quality cables",
        "Proper tension adjustment",
        "Safety inspection included",
        "Fast turnaround time"
      ],
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop"
    },
    {
      icon: Clock,
      title: "Emergency Repairs",
      description: "24/7 emergency service for urgent garage door issues.",
      features: [
        "Available 24/7",
        "Rapid response time",
        "Mobile service units",
        "All repairs guaranteed"
      ],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to={createPageUrl('Home')} className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-2 rounded-lg shadow-lg">
                <div className="relative">
                  <HomeIcon className="w-6 h-6 text-white" />
                  <DoorOpen className="w-3 h-3 text-orange-400 absolute -bottom-0.5 -right-0.5" />
                </div>
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-slate-900">
                  ProLine Garage Door <span className="text-xs text-slate-500">LLC</span>
                </h1>
              </div>
            </Link>
            <a href="tel:2015033118">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                <Phone className="w-4 h-4 mr-2" />
                (201) 503-3118
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Professional Services</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Comprehensive garage door solutions for residential properties across North New Jersey
            </p>
            <div className="flex gap-6 justify-center flex-wrap text-sm">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                <Shield className="w-5 h-5" />
                Licensed & Insured
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                <Clock className="w-5 h-5" />
                Same Day Service
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                <CheckCircle2 className="w-5 h-5" />
                Quality Guaranteed
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                    <div className="relative h-64 md:h-auto">
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-blue-600 text-white p-3 rounded-xl shadow-lg">
                        <service.icon className="w-6 h-6" />
                      </div>
                    </div>
                    <CardContent className="p-8 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                        <p className="text-slate-600 mb-6">{service.description}</p>
                        <ul className="space-y-3 mb-6">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button 
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                        onClick={() => window.location.href = 'tel:2015033118'}
                      >
                        Get Service Now
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Garage Door Service?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for fast, professional service. Most repairs completed same day!
          </p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <a href="tel:2015033118">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-slate-100 text-lg px-8 py-6">
                <Phone className="w-5 h-5 mr-2" />
                Call (201) 503-3118
              </Button>
            </a>
            <Link to={createPageUrl('Home')}>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                Get Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}