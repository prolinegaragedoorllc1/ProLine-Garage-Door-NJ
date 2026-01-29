import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Home as HomeIcon, DoorOpen } from 'lucide-react';

export default function PrivacyPolicy() {
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
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <p className="text-slate-600 mb-8">Last updated: January 2026</p>

            <div className="space-y-6 text-slate-700 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                <p>When you contact ProLine Garage Door LLC through our website, we collect the following information:</p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Name (First and Last)</li>
                  <li>Phone number</li>
                  <li>Email address</li>
                  <li>Service details and project information you provide</li>
                  <li>Address or location for service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                <p>We use the information collected to:</p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Respond to your service requests and inquiries</li>
                  <li>Schedule appointments and provide estimates</li>
                  <li>Communicate with you about our services</li>
                  <li>Improve our customer service</li>
                  <li>Send periodic emails regarding your service or company updates</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Information Protection</h2>
                <p>We implement appropriate security measures to protect your personal information. Your data is stored securely and is only accessible by authorized personnel who need it to perform their job duties.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Information Sharing</h2>
                <p>We do not sell, trade, or transfer your personal information to outside parties. We may share information with trusted third parties who assist us in operating our website or conducting our business, as long as they agree to keep this information confidential.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Cookies</h2>
                <p>Our website may use cookies to enhance user experience. You can choose to disable cookies through your browser settings, though this may affect website functionality.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Third-Party Links</h2>
                <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
                <p>If you have questions about this Privacy Policy, please contact us:</p>
                <div className="mt-4 p-4 bg-slate-100 rounded-lg">
                  <p><strong>ProLine Garage Door LLC</strong></p>
                  <p>Email: info@prolinegaragedoorllc.com</p>
                  <p>Phone: (201) 503-3118</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. Changes to This Policy</h2>
                <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.</p>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}