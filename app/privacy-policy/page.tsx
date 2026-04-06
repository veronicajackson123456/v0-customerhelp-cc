export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-center text-balance">Privacy Policy</h1>
          <p className="text-center text-muted-foreground mt-4">Last updated: April 2026</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Customer Help ({"\""}the Company{"\""}) is committed to protecting your privacy and ensuring transparency about how we collect, use, and safeguard your personal information. This Privacy Policy outlines our practices in accordance with applicable data protection laws, including GDPR and CCPA. By accessing our website and services, you consent to the practices described herein.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  <strong>1.1 Information You Provide Directly:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Contact information: name, email address, phone number, mailing address</li>
                  <li>Account information: username, password, profile details</li>
                  <li>Communication preferences and support inquiries</li>
                  <li>Payment information (processed through secure third-party services)</li>
                  <li>Any additional information you voluntarily provide</li>
                </ul>
                <p className="mt-3">
                  <strong>1.2 Information Collected Automatically:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Device information: device type, operating system, browser type</li>
                  <li>Usage data: pages visited, time spent, referral sources, click behavior</li>
                  <li>IP address and approximate location data</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Log files and analytics data</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">We use your personal information to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Provide, maintain, and improve our services and customer experience</li>
                <li>Process and respond to inquiries, complaints, and requests</li>
                <li>Send service updates, technical notices, and administrative messages</li>
                <li>Send promotional materials and marketing communications (with your consent)</li>
                <li>Prevent fraud and enhance security of our services</li>
                <li>Comply with legal obligations and enforce our terms</li>
                <li>Conduct analytics and monitor website performance</li>
                <li>Personalize your experience and tailor content</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. Information Sharing and Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                <strong>3.1 Third-Party Service Providers:</strong> We may share information with trusted service providers who assist us with hosting, payment processing, email delivery, analytics, and customer support. These providers are contractually bound to use your information only as necessary to provide services.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                <strong>3.2 Legal Requirements:</strong> We may disclose information when required by law, such as in response to subpoenas, court orders, or government requests, or to protect our rights and the safety of our users.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>3.3 We Do Not Sell Your Data:</strong> We do not sell, rent, lease, or trade your personal information to third parties for commercial purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We implement comprehensive security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Encryption of data in transit (SSL/TLS) and at rest</li>
                <li>Secure authentication mechanisms and access controls</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Industry-standard firewalls and intrusion detection systems</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                <strong>Note:</strong> While we take reasonable precautions, no security system is impenetrable. We cannot guarantee absolute security due to the inherent risks of internet transmission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                <strong>5.1 Cookies:</strong> We use cookies and similar technologies to enhance your browsing experience, remember preferences, and analyze website traffic. Cookies may be session-based (temporary) or persistent (long-term).
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                <strong>5.2 Types of Cookies We Use:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Essential cookies: required for website functionality</li>
                <li>Performance cookies: analyze usage and improve performance</li>
                <li>Functional cookies: remember your preferences</li>
                <li>Marketing cookies: track interest for personalized content</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                <strong>5.3 Managing Cookies:</strong> You can control cookie settings through your browser. Please note that disabling cookies may affect website functionality.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites and services. We are not responsible for the privacy practices, security, or content of external sites. We encourage you to review the privacy policies of any third-party websites before providing personal information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law. When information is no longer needed, we securely delete or anonymize it. Your account information is retained while your account is active and for a reasonable period afterward for legal and business purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">8. Your Rights and Choices</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Access: Request copies of the personal data we hold about you</li>
                <li>Correction: Request corrections or updates to inaccurate information</li>
                <li>Deletion: Request deletion of your personal data (right to be forgotten)</li>
                <li>Portability: Request your data in a portable, machine-readable format</li>
                <li>Opt-Out: Unsubscribe from marketing communications</li>
                <li>Restrict Processing: Limit how we use your information</li>
                <li>Object: Object to certain processing activities</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                To exercise these rights, contact us using the information below.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">9. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not intended for individuals under 13 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child under 13, we will take steps to delete such information promptly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">10. International Data Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your information may be transferred to, processed in, and stored in countries other than your country of residence. These countries may have data protection laws that differ from your home country. By using our services, you consent to the transfer of your information to countries outside your country of residence.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">11. California Privacy Rights (CCPA)</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA). You have the right to know what personal information is collected, the right to delete personal information, and the right to opt-out of the sale of personal information. To exercise these rights, please contact us.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">12. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We may update this Privacy Policy periodically to reflect changes in our practices, technology, regulations, or other factors. The date of the most recent update is shown at the top of this policy.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Significant changes will be communicated via email or a prominent notice on our website. Your continued use of our services constitutes acceptance of the updated Privacy Policy.
              </p>
            </div>

            <div className="pt-6 border-t border-border">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-background rounded-lg p-4 text-muted-foreground space-y-2 text-sm">
                <p>
                  <strong>Customer Help</strong>
                </p>
                <p>
                  <strong>Address:</strong> 99 Wall Street, New York, NY 10005 USA
                </p>
                <p>
                  <strong>Email:</strong> support@customerhelp.cc
                </p>
                <p>
                  <strong>Phone:</strong> +1 (646) 820 5995
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-6">
                By using this website and services, you acknowledge that you have read and understood this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
