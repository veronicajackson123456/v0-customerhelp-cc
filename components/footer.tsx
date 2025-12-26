import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm">
              <p>For complaints or customer service inquiries, reach us at:</p>
              <p className="font-semibold mt-3">Mailing Address:</p>
              <p>99 Wall Street, New York, NY 10005 USA  </p>
              <p className="font-semibold mt-3">Email:</p>
              <p>support@customerhelp.cc</p>
              <p className="mt-4">We're here to make your experience smooth, hassle-free, and satisfactory.</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <Link href="/" className="block hover:underline">
                Home
              </Link>
              <Link href="/privacy-policy" className="block hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="block hover:underline">
                Terms and Conditions
              </Link>
              <Link href="/contact" className="block hover:underline">
                Contact
              </Link>
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>Copyright © 2025 Customer Support</p>
          <p>Powered by Customer Help</p>
        </div>
      </div>
    </footer>
  )
}
