import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Shield } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6940c0d91636ce363ecbf035/469d1509f_logo-updated1.png" 
                alt="ProLine Garage Door LLC" 
                className="h-12 md:h-16 w-auto"
              />
            </Link>
            <Link to="/">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                ← Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <Shield className="w-8 h-8 text-blue-600" />
                <h1 className="text-4xl font-bold text-slate-900">Privacy Policy</h1>
              </div>

              <p className="text-slate-600 mb-8">
                <strong>Last Updated:</strong> January 30, 2026
              </p>

              <div className="space-y-8 text-slate-700 leading-relaxed">
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
                  <p>
                    ProLine Garage Door LLC ("we," "us," or "our") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>
                  
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-4">Personal Information</h3>
                  <p className="mb-3">We may collect personally identifiable information that you voluntarily provide to us when you:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Request a quote or service</li>
                    <li>Contact us via phone, email, or contact forms</li>
                    <li>Subscribe to our newsletter or updates</li>
                    <li>Interact with our website or social media pages</li>
                  </ul>

                  <p className="mt-4 mb-3">This information may include:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Mailing address</li>
                    <li>Property details related to garage door service</li>
                    <li>Payment information (processed securely through third-party processors)</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Automatically Collected Information</h3>
                  <p className="mb-3">When you visit our website, we may automatically collect certain information about your device, including:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Pages visited and time spent on pages</li>
                    <li>Referring website</li>
                    <li>Date and time of visit</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">2. How We Use Your Information</h2>
                  <p className="mb-3">We use the information we collect for the following purposes:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li><strong>Service Delivery:</strong> To provide, maintain, and improve our garage door services</li>
                    <li><strong>Communication:</strong> To respond to your inquiries, schedule appointments, and provide customer support</li>
                    <li><strong>Billing:</strong> To process payments and send invoices</li>
                    <li><strong>Marketing:</strong> To send you promotional materials, newsletters, and service updates (you can opt-out at any time)</li>
                    <li><strong>Website Improvement:</strong> To analyze website usage and improve our online experience</li>
                    <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
                    <li><strong>Safety and Security:</strong> To protect our business and customers from fraud or illegal activity</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Share Your Information</h2>
                  <p className="mb-3">We do not sell, trade, or rent your personal information to third parties. We may share your information in the following limited circumstances:</p>
                  
                  <ul className="list-disc ml-6 space-y-3">
                    <li>
                      <strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you (e.g., payment processors, scheduling software, email services). These providers are contractually obligated to keep your information confidential.
                    </li>
                    <li>
                      <strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., court order, subpoena).
                    </li>
                    <li>
                      <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of all or a portion of our business, your information may be transferred to the acquiring entity.
                    </li>
                    <li>
                      <strong>Protection of Rights:</strong> We may disclose information to protect and defend our rights or property, prevent fraud, or protect the personal safety of our employees or customers.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Cookies and Tracking Technologies</h2>
                  <p className="mb-3">
                    Our website may use "cookies" and similar tracking technologies to enhance your experience. Cookies are small data files stored on your device that help us:
                  </p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Remember your preferences</li>
                    <li>Understand how you use our website</li>
                    <li>Provide personalized content</li>
                    <li>Analyze website traffic and usage patterns</li>
                  </ul>
                  <p className="mt-4">
                    You can set your browser to refuse cookies or alert you when cookies are being sent. However, some parts of our website may not function properly without cookies.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Data Security</h2>
                  <p>
                    We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These measures include:
                  </p>
                  <ul className="list-disc ml-6 space-y-2 mt-3">
                    <li>Secure Socket Layer (SSL) encryption for data transmission</li>
                    <li>Restricted access to personal information</li>
                    <li>Regular security assessments and updates</li>
                    <li>Secure storage of physical and electronic records</li>
                  </ul>
                  <p className="mt-4">
                    However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Third-Party Links</h2>
                  <p>
                    Our website may contain links to third-party websites or services that are not owned or controlled by ProLine Garage Door LLC. We are not responsible for the privacy practices of these third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Your Rights and Choices</h2>
                  <p className="mb-3">You have the following rights regarding your personal information:</p>
                  
                  <ul className="list-disc ml-6 space-y-3">
                    <li>
                      <strong>Access:</strong> You can request access to the personal information we hold about you.
                    </li>
                    <li>
                      <strong>Correction:</strong> You can request that we correct any inaccurate or incomplete information.
                    </li>
                    <li>
                      <strong>Deletion:</strong> You can request that we delete your personal information, subject to certain legal exceptions.
                    </li>
                    <li>
                      <strong>Opt-Out:</strong> You can opt out of receiving marketing communications from us by following the unsubscribe instructions in our emails or contacting us directly.
                    </li>
                    <li>
                      <strong>Do Not Track:</strong> Our website does not currently respond to "Do Not Track" browser signals.
                    </li>
                  </ul>

                  <p className="mt-4">
                    To exercise any of these rights, please contact us using the information provided below.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Children's Privacy</h2>
                  <p>
                    Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us, and we will take steps to delete such information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">9. California Privacy Rights</h2>
                  <p>
                    If you are a California resident, you may have additional rights under the California Consumer Privacy Act (CCPA), including:
                  </p>
                  <ul className="list-disc ml-6 space-y-2 mt-3">
                    <li>The right to know what personal information is collected, used, shared, or sold</li>
                    <li>The right to delete personal information</li>
                    <li>The right to opt-out of the sale of personal information (we do not sell personal information)</li>
                    <li>The right to non-discrimination for exercising your rights</li>
                  </ul>
                  <p className="mt-4">
                    To exercise these rights, please contact us at the information provided below.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Changes to This Privacy Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website with a new "Last Updated" date. Your continued use of our services after any changes indicates your acceptance of the updated policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Contact Us</h2>
                  <p className="mb-3">
                    If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
                  </p>
                  
                  <div className="bg-slate-50 p-6 rounded-lg mt-4">
                    <p className="font-semibold text-slate-900 mb-3">ProLine Garage Door LLC</p>
                    <p>Phone: <a href="tel:2015033118" className="text-blue-600 hover:underline">(201) 503-3118</a></p>
                    <p>Email: <a href="mailto:info@prolinegaragedoorllc.com" className="text-blue-600 hover:underline">info@prolinegaragedoorllc.com</a></p>
                    <p className="mt-3">Service Area: All of New Jersey</p>
                  </div>
                </section>

                <section className="pt-8 border-t border-slate-200">
                  <p className="text-sm text-slate-500">
                    By using our website and services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
                  </p>
                </section>
              </div>

              <div className="mt-12 text-center">
                <Link to="/">
                  <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                    Return to Home
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}