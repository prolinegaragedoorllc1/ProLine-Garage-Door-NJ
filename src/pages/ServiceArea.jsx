import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, CheckCircle2, Home as HomeIcon, DoorOpen, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { MapContainer, TileLayer, Circle, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import SEOHead from '../components/SEOHead';

export default function ServiceArea() {
  const centerLocation = [40.8584, -74.1638]; // North NJ center

  const counties = [
    'Bergen County',
    'Passaic County',
    'Essex County',
    'Hudson County',
    'Morris County'
  ];

  const cities = [
    { name: 'Maywood', zip: '07607' },
    { name: 'Hackensack', zip: '07601' },
    { name: 'Paramus', zip: '07652' },
    { name: 'Teaneck', zip: '07666' },
    { name: 'Ridgewood', zip: '07450' },
    { name: 'Fair Lawn', zip: '07410' },
    { name: 'Garfield', zip: '07026' },
    { name: 'Lodi', zip: '07644' },
    { name: 'Rochelle Park', zip: '07662' },
    { name: 'River Edge', zip: '07661' },
    { name: 'Saddle Brook', zip: '07663' },
    { name: 'Elmwood Park', zip: '07407' },
    { name: 'Hasbrouck Heights', zip: '07604' },
    { name: 'Wood-Ridge', zip: '07075' },
    { name: 'Carlstadt', zip: '07072' },
    { name: 'East Rutherford', zip: '07073' },
    { name: 'Rutherford', zip: '07070' },
    { name: 'Wallington', zip: '07057' },
    { name: 'Clifton', zip: '07011' },
    { name: 'Paterson', zip: '07501' },
    { name: 'Montclair', zip: '07042' },
    { name: 'Bloomfield', zip: '07003' },
    { name: 'Nutley', zip: '07110' },
    { name: 'Livingston', zip: '07039' },
    { name: 'Morristown', zip: '07960' },
    { name: 'Morris Plains', zip: '07950' },
    { name: 'Morris Township', zip: '07960' },
    { name: 'Madison', zip: '07940' },
    { name: 'Chatham', zip: '07928' },
    { name: 'Florham Park', zip: '07932' },
    { name: 'Parsippany-Troy Hills', zip: '07054' },
    { name: 'Denville', zip: '07834' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEOHead 
        title="Service Area - ProLine Garage Door LLC | Serving Bergen, Passaic, Essex, Hudson & Morris Counties NJ"
        description="ProLine Garage Door LLC proudly serves 30+ cities across Bergen, Passaic, Essex, Hudson & Morris Counties including Maywood, Hackensack, Paramus, Morristown, Clifton, Paterson & more. Professional garage door service."
        keywords="garage door repair bergen county, garage door maywood nj, garage door hackensack, garage door paramus, garage door morristown, garage door clifton nj, garage door service new jersey"
        includeBusiness={true}
      />

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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Service Area</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Proudly serving residential garage door customers throughout New Jersey
            </p>
            <div className="flex gap-6 justify-center flex-wrap text-sm">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                <Clock className="w-5 h-5" />
                Same Day Service
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                <MapPin className="w-5 h-5" />
                30+ Cities • 5 Counties
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                <Phone className="w-5 h-5" />
                Fast Response
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden shadow-2xl">
              <CardContent className="p-0">
                <div className="h-[500px] relative">
                  <MapContainer
                    center={centerLocation}
                    zoom={11}
                    className="h-full w-full"
                    scrollWheelZoom={false}
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    />
                    <Circle
                      center={centerLocation}
                      radius={20000}
                      pathOptions={{
                        fillColor: '#2563eb',
                        fillOpacity: 0.2,
                        color: '#2563eb',
                        weight: 2
                      }}
                    />
                    <Marker position={centerLocation}>
                      <Popup>
                        <div className="text-center">
                          <strong>ProLine Garage Door LLC</strong>
                          <br />
                          Serving North New Jersey
                        </div>
                      </Popup>
                    </Marker>
                  </MapContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Counties */}
      <section className="py-12 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Counties We Serve</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {counties.map((county, index) => (
              <div key={index} className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg">
                {county}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Cities We Serve</h2>
            <p className="text-xl text-slate-600">Professional garage door service in these New Jersey communities</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {cities.map((city, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
              >
                <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-bold text-slate-900">{city.name}</h3>
                    <p className="text-sm text-slate-500">{city.zip}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6 text-lg">
              Don't see your city? <strong>Give us a call!</strong> We may still service your area.
            </p>
            <a href="tel:2015033118">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                <Phone className="w-5 h-5 mr-2" />
                Call (201) 503-3118
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us in Your Area */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-8">Why North New Jersey Trusts Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Fast Response</h3>
                  <p className="text-slate-600">Average response time under 2 hours for emergency calls</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Local Experts</h3>
                  <p className="text-slate-600">Serving New Jersey communities with professional expertise</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Always Nearby</h3>
                  <p className="text-slate-600">Multiple service vehicles across the region</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Garage Door Service in Your Area?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Call now for service in Bergen, Passaic, Essex, Hudson & Morris Counties
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