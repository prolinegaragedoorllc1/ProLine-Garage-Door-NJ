import React, { useState } from 'react';
import { MapContainer, TileLayer, Circle, Marker, Popup } from 'react-leaflet';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, CheckCircle, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import 'leaflet/dist/leaflet.css';

export default function ServiceAreaMap() {
  const [address, setAddress] = useState('');
  const [checkResult, setCheckResult] = useState(null);

  // Center coordinates for ProLine Garage Door LLC in New Jersey
  const center = [40.9168, -74.1718]; // North Jersey area
  const radius = 40000; // 40km radius

  const serviceAreas = [
    'Bergen County', 'Passaic County', 'Hudson County', 'Essex County',
    'Morris County', 'Union County', 'Middlesex County', 'Somerset County',
    'Warren County', 'Sussex County', 'Hunterdon County'
  ];

  const handleCheckAddress = () => {
    // Simple check - in production, you'd use a geocoding API
    const njKeywords = ['nj', 'new jersey', 'jersey'];
    const isInArea = njKeywords.some(keyword => 
      address.toLowerCase().includes(keyword)
    );
    
    setCheckResult(isInArea);
  };

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
                  Check Your Service Area
                </h4>
                
                <div className="space-y-4 mb-6">
                  <Input
                    placeholder="Enter your address or zip code"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="text-lg py-6"
                  />
                  <Button
                    onClick={handleCheckAddress}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-lg py-6"
                  >
                    Check Availability
                  </Button>
                </div>

                {checkResult !== null && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`p-4 rounded-lg flex items-center gap-3 ${
                      checkResult 
                        ? 'bg-green-50 text-green-800' 
                        : 'bg-red-50 text-red-800'
                    }`}
                  >
                    {checkResult ? (
                      <>
                        <CheckCircle className="w-6 h-6" />
                        <div>
                          <p className="font-bold">Great News!</p>
                          <p className="text-sm">We service your area. Call us now!</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-6 h-6" />
                        <div>
                          <p className="font-bold">Sorry</p>
                          <p className="text-sm">We don't currently service this area.</p>
                        </div>
                      </>
                    )}
                  </motion.div>
                )}

                <div className="mt-8">
                  <h5 className="font-bold text-lg mb-4">Primary Service Areas:</h5>
                  <div className="grid grid-cols-2 gap-2">
                    {serviceAreas.map((area, index) => (
                      <div key={index} className="flex items-center gap-2 text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}