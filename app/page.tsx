import Link from "next/link"
import { ArrowRight, Clock, Shield, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background z-0" />
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/receptionists-5975962-DaQQhOFaIkNsYaEIhRCZGOlpIxE7mH.jpg"
          alt="Customer Support Representative"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance text-accent-foreground">Welcome to Customer Support</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-card">
            Your trusted partner for exceptional service and support
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">Why Choose Us?</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Quick Resolutions</h3>
              <p className="text-muted-foreground leading-relaxed">
                Receive fast and efficient solutions to your concerns.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Transparent Policies</h3>
              <p className="text-muted-foreground leading-relaxed">
                Clear terms and a strong commitment to protecting your privacy.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Headphones className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Dedicated Support</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our team is here to assist with all inquiries, complaints, and service requests.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="#contact">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-20" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-balance">How We Help</h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
            Whether you have a question, need assistance, or wish to provide feedback, we're just an email or message
            away. Your satisfaction is our priority.
          </p>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            For complaints or customer service inquiries, reach us at:
          </h2>
          <div className="space-y-4 mb-8">
            <div>
              <p className="text-lg font-semibold mb-2">Mailing Address:</p>
              <p className="text-lg">99 Wall Street, New York, NY 10005 USA     </p>
            </div>
            <div>
              <p className="text-lg font-semibold mb-2">Email:</p>
              <p className="text-lg">support@customerhelp.cc</p>
            </div>
          </div>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed">
            We're here to make your experience smooth, hassle-free, and satisfactory.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
