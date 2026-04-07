import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { Breadcrumbs } from "@/components/sections/breadcrumbs"
import { QuoteForm } from "@/components/forms/quote-form"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact | Get a Free Quote | ProShield Epoxy",
  description: "Get a free quote for your floor coating project. Professional-grade systems for garages, commercial spaces, hangars, and more. Las Vegas metro area.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    url: "https://proshieldepoxy.com/contact",
    images: ["/og-image.webp"],
  },
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Contact Us"
        title="Get a Free Quote"
        subtitle="Tell us about your project and we'll recommend the right system. Free estimates, no obligation."
        ctaText=""
        ctaHref=""
      />

      <Breadcrumbs items={[{ label: "Contact" }]} />

      <section className="section-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form — takes more space */}
            <div className="lg:col-span-3">
              <h2 className="font-heading font-semibold text-2xl text-gray-900 mb-6">
                Request a Quote
              </h2>
              <QuoteForm />
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2">
              <h2 className="font-heading font-semibold text-2xl text-gray-900 mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <a
                  href={`tel:${process.env.NEXT_PUBLIC_PHONE || ""}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="h-11 w-11 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-200">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Phone</div>
                    <div className="text-sm text-gray-500 group-hover:text-accent transition-colors">
                      {process.env.NEXT_PUBLIC_PHONE || "Call us for a quote"}
                    </div>
                  </div>
                </a>

                <a href="mailto:info@proshieldepoxy.com" className="flex items-start gap-4 group">
                  <div className="h-11 w-11 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-200">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Email</div>
                    <div className="text-sm text-gray-500 group-hover:text-accent transition-colors">
                      info@proshieldepoxy.com
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Service Area</div>
                    <div className="text-sm text-gray-500">
                      Las Vegas metro area (including Henderson, North Las Vegas, Summerlin, and surrounding communities)
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Business Hours</div>
                    <div className="text-sm text-gray-500">
                      Monday – Saturday: 7:00 AM – 6:00 PM
                      <br />
                      Sunday: Closed
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick response badge */}
              <div className="mt-8 rounded-xl border border-accent/20 bg-accent/5 p-4">
                <p className="text-sm text-gray-700 font-medium">
                  We respond to all quote requests within 24 hours. For urgent projects, call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
