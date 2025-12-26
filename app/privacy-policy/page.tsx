export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-center text-balance">Privacy Policy</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                This Privacy Policy outlines how the Company collects, uses, and protects the personal information of
                the Customer. By using the services of the Company, the Customer consents to the practices described
                herein.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">1. Information Collection</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                1.1 The Company collects personal information provided voluntarily by the Customer, such as name, email
                address, mailing address, and phone number, during registration or inquiries.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                1.2 The Company may automatically collect certain technical information, including IP address, browser
                type, device information, and usage data, to enhance the service experience.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. Use of Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                2.1 The Company uses the Customer's information to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Provide and improve services.</li>
                <li>Respond to inquiries, complaints, or requests.</li>
                <li>Communicate updates, promotions, or changes to policies.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                2.2 The Company will not sell or share the Customer's personal information with third parties unless
                required by law or with explicit consent from the Customer.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                3.1 The Company employs industry-standard security measures to protect the Customer's data from
                unauthorized access, alteration, or disclosure.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                3.2 While the Company takes reasonable precautions, it cannot guarantee absolute security due to the
                inherent risks of online communication.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                4.1 The Company uses cookies and similar technologies to enhance the Customer's browsing experience and
                analyze website traffic.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                4.2 Customers can manage their cookie preferences through their browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                5.1 The website may contain links to third-party services. The Company is not responsible for the
                privacy practices of these external sites and recommends reviewing their policies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Customer Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">6.1 The Customer has the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Access and review their personal data collected by the Company.</li>
                <li>Request corrections or updates to their personal information.</li>
                <li>Request deletion of their personal data, subject to legal or contractual obligations.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                6.2 To exercise these rights, the Customer can contact the Company through the provided contact details.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Updates to Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                7.1 The Company reserves the right to update this Privacy Policy at any time.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                7.2 Customers are encouraged to review the Privacy Policy periodically to stay informed about any
                changes.
              </p>
            </div>

            <div className="pt-6 border-t border-border">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                For any questions or concerns regarding this Privacy Policy, the Customer may contact:
              </p>
              <p className="text-muted-foreground">
                <strong>Address:</strong> 99 Wall Street, New York, NY 10005
                <br />
                <strong>Email:</strong> support@customerhelp.cc
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                By using this website, the Customer agrees to the terms of this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
