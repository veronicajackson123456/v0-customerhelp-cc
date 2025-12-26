export default function TermsAndConditions() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-center text-balance">Terms and Conditions</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms and Conditions ("Terms") govern the use of services provided by the Company to the Customer.
                By using this website or accessing the services, the Customer agrees to these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">1. Use of Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                1.1 The Customer agrees to use the services offered by the Company for lawful purposes only.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                1.2 The Company reserves the right to suspend or terminate services without prior notice if the Customer
                is found in violation of these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                2.1 All content provided by the Company, including text, images, and designs, is the property of the
                Company and is protected by copyright laws.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                2.2 The Customer is prohibited from reproducing, modifying, or distributing any content without explicit
                permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                3.1 The Company is not liable for any direct, indirect, incidental, or consequential damages arising
                from the use of its services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                3.2 The Customer agrees that the Company's liability is limited to the extent permitted by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Payment and Refund Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                4.1 All payments for services must be made in accordance with the terms specified at the time of
                purchase.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                4.2 Refunds will only be issued if the Company is unable to deliver the agreed-upon services due to its
                own fault.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Privacy and Data Protection</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                5.1 The Company is committed to protecting the Customer's personal information and adhering to
                applicable data protection laws.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                5.2 The Customer consents to the collection and use of their data as outlined in the Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Amendments to Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                6.1 The Company reserves the right to modify these Terms at any time.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                6.2 The Customer is encouraged to review these Terms periodically to stay informed of any changes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                7.1 These Terms are governed by and construed in accordance with the laws of the applicable jurisdiction
                where the Company operates.
              </p>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-muted-foreground leading-relaxed">
                By using this website or the services provided, the Customer acknowledges that they have read,
                understood, and agreed to these Terms and Conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
