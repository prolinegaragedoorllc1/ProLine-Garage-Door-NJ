import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to={createPageUrl('Home')} className="flex items-center gap-3">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6940c0d91636ce363ecbf035/469d1509f_logo-updated1.png" 
                alt="ProLine Garage Door LLC" 
                className="h-12 md:h-16 w-auto"
              />
            </Link>
            <Link to={createPageUrl('Home')}>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                ← Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Reach out to schedule an appointment
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="bg-white border border-slate-200">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-slate-900">Phone</h3>
                      <a href="tel:2015033118" className="text-blue-600 hover:text-blue-700 font-semibold text-lg" dir="ltr">
                        (201) 503-3118
                      </a>
                      <p className="text-slate-600 text-sm mt-2">Call to schedule an appointment</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border border-slate-200">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-slate-900">Email</h3>
                      <a href="mailto:info@prolinegaragedoorllc.com" className="text-blue-600 hover:text-blue-700 break-all">
                        info@prolinegaragedoorllc.com
                      </a>
                      <p className="text-slate-600 text-sm mt-2">Send us your inquiry</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border border-slate-200">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-slate-900">Hours</h3>
                      <p className="text-slate-600">Mon-Fri & Sun: 6:00 AM - 10:00 PM</p>
                      <p className="text-slate-600 text-sm mt-2">By appointment</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border border-slate-200">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-slate-900">Service Area</h3>
                      <p className="text-slate-600">All of New Jersey</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-blue-50 border border-blue-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Important Note</h3>
                <p className="text-slate-700 text-lg leading-relaxed">
                  We are a service-area business operating in New Jersey. We do not operate a walk-in storefront or public office. All services are provided by appointment at the customer's location.
                </p>
              </CardContent>
            </Card>

            <div className="text-center mt-12">
              <h3 className="text-3xl font-bold mb-6 text-slate-900">Ready to Schedule?</h3>
              <div className="flex gap-4 flex-col sm:flex-row justify-center">
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
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-xl px-12 py-8 gap-3"
                  >
                    <Mail className="w-6 h-6" />
                    Email Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}