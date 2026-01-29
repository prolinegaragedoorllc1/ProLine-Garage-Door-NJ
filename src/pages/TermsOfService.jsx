import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Home as HomeIcon, DoorOpen } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-slate-900 text-white py-6">
        <div className="container mx-auto px-4">
          <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity w-fit">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-2.5 rounded-lg">
              <div className="relative">
                <HomeIcon className="w-6 h-6 text-white" />
                <DoorOpen className="w-3.5 h-3.5 text-orange-400 absolute -bottom-1 -right-1" />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold">
                ProLine Garage Door <span className="text-xs text-slate-400">LLC</span>
              </h1>
            </div>
          </a>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Card className="shadow-xl">
          <CardContent className="p-8 md:p-12">
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
            <p className="text-slate-600 mb-8">Last updated: January 2026</p>

            <div className="space-y-6 text-slate-700 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
                <p>By accessing and using the ProLine Garage Door LLC website and services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Services Description</h2>
                <p>ProLine Garage Door LLC provides professional garage door repair, maintenance, and installation services including:</p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Garage door spring replacement</li>
                  <li>Garage door opener repair and installation</li>
                  <li>Maintenance and tune-up services</li>
                  <li>Emergency repair services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Service Estimates</h2>
                <p>All estimates provided are approximate and subject to change based on the actual condition of your garage door system upon inspection. Final pricing will be provided before any work begins.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Payment Terms</h2>
                <p>Payment is due upon completion of services unless otherwise agreed in writing. We accept cash, checks, and major credit cards. A service fee may apply for certain payment methods.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Warranties</h2>
                <p>We provide warranties on parts and labor as specified in your service agreement. Warranty terms vary by service type and manufacturer specifications. Warranties do not cover:</p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Damage caused by misuse or neglect</li>
                  <li>Normal wear and tear</li>
                  <li>Modifications made by others</li>
                  <li>Acts of nature or accidents</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Liability Limitations</h2>
                <p>ProLine Garage Door LLC shall not be liable for any indirect, incidental, special, or consequential damages arising from our services. Our total liability shall not exceed the amount paid for the specific service in question.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Cancellation Policy</h2>
                <p>Service appointments may be cancelled or rescheduled with at least 24 hours notice. Late cancellations may incur a fee. Emergency services may have different cancellation terms.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Customer Responsibilities</h2>
                <p>Customers are responsible for:</p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Providing accurate information about the service needed</li>
                  <li>Ensuring access to the work area</li>
                  <li>Securing pets during service visits</li>
                  <li>Maintaining their garage door system per manufacturer recommendations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. Intellectual Property</h2>
                <p>All content on this website, including text, graphics, logos, and images, is the property of ProLine Garage Door LLC and protected by copyright laws.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">10. Dispute Resolution</h2>
                <p>Any disputes arising from these terms or our services shall be resolved through binding arbitration in accordance with New Jersey state law.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">11. Changes to Terms</h2>
                <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">12. Contact Information</h2>
                <p>For questions about these Terms of Service, please contact us:</p>
                <div className="mt-4 p-4 bg-slate-100 rounded-lg">
                  <p><strong>ProLine Garage Door LLC</strong></p>
                  <p>Email: info@prolinegaragedoorllc.com</p>
                  <p>Phone: (201) 503-3118</p>
                </div>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}