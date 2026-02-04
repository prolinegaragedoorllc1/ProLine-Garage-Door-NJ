import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { FileText } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to={createPageUrl('Home')} className="flex items-center gap-3">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6940c0d91636ce363ecbf035/469d1509f_logo-updated1.png"
                alt="ProLine Garage Door LLC"
                className="h-12 md:h-16 w-auto" />

            </Link>
            <Link to={createPageUrl('Home')}>
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
                <FileText className="w-8 h-8 text-blue-600" />
                <h1 className="text-4xl font-bold text-slate-900">Terms of Service</h1>
              </div>

              <p className="text-slate-600 mb-8">
                <strong>Last Updated:</strong> January 30, 2026
              </p>

              <div className="space-y-8 text-slate-700 leading-relaxed">
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Agreement to Terms</h2>
                  <p>
                    Welcome to ProLine Garage Door LLC. By accessing our website at prolinegaragedoorllc.com or using our services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree with any part of these Terms, you may not access our website or use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Service Description</h2>
                  <p className="mb-3">
                    ProLine Garage Door LLC provides professional garage door repair, maintenance, and installation services throughout New Jersey, including but not limited to:
                  </p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Garage door spring replacement (torsion and extension springs)</li>
                    <li>Garage door opener repair and installation</li>
                    <li>Cable and roller replacement</li>
                    <li>Track repair and alignment</li>
                    <li>Safety sensor installation and repair</li>
                    <li>Preventative maintenance and tune-ups</li>
                    <li>Emergency garage door services</li>
                  </ul>
                  <p className="mt-4">
                    All services are provided by insured technicians serving all of New Jersey.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Scheduling and Appointments</h2>
                  <ul className="list-disc ml-6 space-y-3">
                    <li>
                      <strong>Scheduling:</strong> All service appointments must be scheduled by calling (201) 503-3118 or through our website contact form.
                    </li>
                    <li>
                      <strong>Service Windows:</strong> We operate Monday-Friday and Sunday from 6:00 AM to 10:00 PM. We are closed on Saturdays.
                    </li>
                    <li>
                      <strong>Same-Day Service:</strong> While we strive to provide same-day service when possible, availability depends on scheduling and location.
                    </li>
                    <li>
                      <strong>Cancellations:</strong> If you need to cancel or reschedule, please provide at least 2 hours notice to avoid potential cancellation fees.
                    </li>
                    <li>
                      <strong>No-Show Policy:</strong> Customers who are not present at the scheduled appointment time without prior notice may be subject to a service call fee.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Estimates and Pricing</h2>
                  <ul className="list-disc ml-6 space-y-3">
                    <li>
                      <strong>Free Estimates:</strong> We provide free, no-obligation estimates for all services.
                    </li>
                    <li>
                      <strong>On-Site Assessment:</strong> Final pricing is determined after an on-site assessment by our technician.
                    </li>
                    <li>
                      <strong>Price Changes:</strong> If additional work is required beyond the initial estimate, you will be informed and must approve any additional charges before work proceeds.
                    </li>
                    <li>
                      <strong>Diagnostic Fee:</strong> In some cases, a diagnostic fee may apply if no repair is performed. This fee will be disclosed upfront.
                    </li>
                    <li>
                      <strong>Pricing Accuracy:</strong> We strive for accurate estimates, but prices may vary based on specific conditions, accessibility, or unforeseen complications.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Payment Terms</h2>
                  <ul className="list-disc ml-6 space-y-3">
                    <li>
                      <strong>Payment Methods:</strong> We accept cash, check, and major credit cards.
                    </li>
                    <li>
                      <strong>Payment Timing:</strong> Payment is due upon completion of services unless other arrangements have been made in advance.
                    </li>
                    <li>
                      <strong>Late Payment:</strong> Accounts not paid within 30 days may be subject to a late fee of 1.5% per month (18% annually) or the maximum allowed by law.
                    </li>
                    <li>
                      <strong>Disputed Charges:</strong> If you believe there is an error in billing, please contact us within 7 days of receiving the invoice.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Limitation of Liability</h2>
                  <p className="mb-3">
                    To the fullest extent permitted by law:
                  </p>
                  <ul className="list-disc ml-6 space-y-3">
                    <li>
                      ProLine Garage Door LLC's liability for any claim arising from our services is limited to the amount paid for the specific service that gave rise to the claim.
                    </li>
                    <li>
                      We are not liable for indirect, incidental, special, consequential, or punitive damages, including but not limited to lost profits, loss of use, or property damage not directly caused by our services.
                    </li>
                    <li>
                      We are not responsible for pre-existing conditions, damage, or defects not disclosed or discovered during our initial assessment.
                    </li>
                    <li>
                      We are not liable for delays or failures in service due to circumstances beyond our reasonable control (weather, natural disasters, supplier delays, etc.).
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Customer Responsibilities</h2>
                  <p className="mb-3">As a customer, you agree to:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Provide accurate information about your garage door system and any known issues</li>
                    <li>Ensure safe access to the work area and removal of any obstacles</li>
                    <li>Keep pets and children away from the work area during service</li>
                    <li>Inform us of any special circumstances or safety concerns before service begins</li>
                    <li>Follow all maintenance recommendations provided by our technicians</li>
                    <li>Refrain from using the garage door system if advised that it is unsafe</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Safety Disclaimers</h2>
                  <p className="mb-3">
                    <strong>WARNING:</strong> Garage doors are heavy mechanical systems that can cause serious injury or death if improperly handled. Do not attempt to repair, adjust, or replace garage door springs, cables, or other high-tension components yourself.
                  </p>
                  <p className="mb-3">Important safety information:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Never try to repair a broken spring - always call a professional</li>
                    <li>Test safety sensors monthly to ensure proper operation</li>
                    <li>Keep hands and fingers clear of door sections and tracks during operation</li>
                    <li>Never run or play under a moving garage door</li>
                    <li>Keep remote controls away from children</li>
                    <li>Do not pull the emergency release unless the door is in the down position</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Intellectual Property</h2>
                  <p>
                    All content on the ProLine Garage Door LLC website, including text, graphics, logos, images, and software, is the property of ProLine Garage Door LLC or its content suppliers and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Website Use</h2>
                  <p className="mb-3">When using our website, you agree not to:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Use the website for any illegal purpose</li>
                    <li>Attempt to gain unauthorized access to any portion of the website</li>
                    <li>Interfere with or disrupt the website or servers</li>
                    <li>Transmit any viruses, malware, or harmful code</li>
                    <li>Collect information about other users without their consent</li>
                    <li>Impersonate any person or entity</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Dispute Resolution</h2>
                  
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-4">Governing Law</h3>
                  <p className="mb-3">
                    These Terms are governed by the laws of the State of New Jersey, without regard to its conflict of law provisions.
                  </p>

                  <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-4">Dispute Process</h3>
                  <p className="mb-3">
                    In the event of any dispute, claim, or controversy, you agree to first contact us at (201) 503-3118 to attempt to resolve the matter informally. If we cannot resolve the dispute within 30 days, either party may pursue legal action.
                  </p>

                  <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-4">Venue</h3>
                  <p>
                    Any legal action arising from these Terms or our services shall be brought exclusively in the state or federal courts located in Bergen County, New Jersey.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Changes to Terms</h2>
                  <p>
                    We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website with an updated "Last Updated" date. Your continued use of our services after any changes constitutes acceptance of the modified Terms. We encourage you to review these Terms periodically.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Severability</h2>
                  <p>
                    If any provision of these Terms is found to be unenforceable or invalid by a court of law, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Entire Agreement</h2>
                  <p>
                    These Terms, together with our Privacy Policy, constitute the entire agreement between you and ProLine Garage Door LLC regarding the use of our website and services, superseding any prior agreements.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Contact Information</h2>
                  <p className="mb-3">
                    For questions about these Terms of Service or our services, please contact us:
                  </p>
                  
                  <div className="bg-slate-50 p-6 rounded-lg mt-4">
                    <p className="font-semibold text-slate-900 mb-3">ProLine Garage Door LLC</p>
                    <p>Phone: <a href="tel:2015033118" className="text-blue-600 hover:underline">(201) 503-3118</a></p>
                    <p>Email: <a href="mailto:info@prolinegaragedoorllc.com" className="text-blue-600 hover:underline">info@prolinegaragedoorllc.com</a></p>
                    <p className="mt-3">Service Area: All of New Jersey</p>
                    <p className="mt-3">Hours: Mon-Fri & Sun: 6:00 AM - 10:00 PM</p>
                  </div>
                </section>

                <section className="pt-8 border-t border-slate-200">
                  <p className="text-sm text-slate-500">
                    By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                  </p>
                </section>
              </div>

              <div className="mt-12 text-center">
                <Link to={createPageUrl('Home')}>
                  <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                    Return to Home
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>);

}