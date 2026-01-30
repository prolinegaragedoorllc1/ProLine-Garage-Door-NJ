import React from 'react';
import { MapContainer, TileLayer, Circle, Marker, Popup } from 'react-leaflet';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import 'leaflet/dist/leaflet.css';

export default function ServiceAreaMap() {

  // Center coordinates for ProLine Garage Door LLC in New Jersey
  const center = [40.7831, -74.4745]; // New Jersey center
  const radius = 50000; // 50km radius to cover NJ

  const serviceAreas = [
    'Bergen County', 'Passaic County', 'Hudson County', 'Essex County',
    'Morris County', 'Union County', 'Middlesex County', 'Somerset County',
    'Warren County', 'Sussex County', 'Hunterdon County'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Our Service Area
          </h3>
          <p className="text-slate-600 text-xl">Serving New Jersey and surrounding areas</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[400px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <MapContainer
              center={center}
              zoom={9}
              style={{ height: '100%', width: '100%' }}
              scrollWheelZoom={false}
              aria-label="Service area map"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Circle
                center={center}
                radius={radius}
                pathOptions={{
                  fillColor: '#f97316',
                  fillOpacity: 0.2,
                  color: '#ea580c',
                  weight: 2
                }}
              />
              <Marker position={center}>
                <Popup>
                  ProLine Garage Door LLC<br />Service Area
                </Popup>
              </Marker>
            </MapContainer>
          </motion.div>

          {/* Service Area Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-xl border-none h-full">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-orange-500" />
                  New Jersey Service Area
                </h4>
                
                <div className="mb-6">
                  <p className="text-slate-600 text-lg leading-relaxed">
                    We proudly serve residential garage door repair and maintenance across Northern and Central New Jersey.
                  </p>
                </div>

                <div className="mt-8">
                  <h5 className="font-bold text-lg mb-4">Counties We Serve:</h5>
                  <div className="grid grid-cols-2 gap-2">
                    {serviceAreas.map((area, index) => (
                      <div key={index} className="flex items-center gap-2 text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  <a href="tel:2015033118">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg py-6">
                      Call for Same-Day Service: (201) 503-3118
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}