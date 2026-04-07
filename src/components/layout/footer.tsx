import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const systemLinks = [
  { label: "ProFlake Epoxy", href: "/proflake" },
  { label: "Metallic Epoxy", href: "/metallic-epoxy" },
  { label: "VubaStone", href: "/vubastone" },
  { label: "Concrete Polishing", href: "/concrete-polishing" },
  { label: "Commercial Flooring", href: "/commercial-flooring" },
  { label: "Cool Deck / Patio", href: "/cool-deck" },
  { label: "Tile Flooring", href: "/tile-flooring" },
  { label: "Plank Flooring", href: "/plank-flooring" },
  { label: "Paver Sealing", href: "/paver-sealing" },
  { label: "Concrete Overlay", href: "/concrete-overlay" },
  { label: "Airplane Hangar", href: "/airplane-hangar" },
  { label: "Artificial Turf", href: "/artificial-turf" },
]

const areaLinks = [
  { label: "Garage", href: "/areas/garage" },
  { label: "Exterior", href: "/areas/exterior" },
  { label: "Interior", href: "/areas/interior" },
  { label: "Commercial", href: "/areas/commercial" },
]

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      {/* Main Footer — light gray */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
            {/* Brand */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logos/proshield-logo-orange-dark.png"
                  alt="ProShield Epoxy"
                  width={200}
                  height={32}
                  className="h-8 w-auto"
                />
              </Link>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                Professional-grade floor coatings for residential and commercial spaces.
                Serving the Las Vegas metro and surrounding areas.
              </p>
              <div className="space-y-2.5 pt-2">
                <a
                  href={`tel:${process.env.NEXT_PUBLIC_PHONE || ""}`}
                  className="flex items-center gap-2.5 text-sm text-gray-500 hover:text-accent transition-colors duration-150"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>{process.env.NEXT_PUBLIC_PHONE || "Call Us"}</span>
                </a>
                <a
                  href="mailto:info@proshieldepoxy.com"
                  className="flex items-center gap-2.5 text-sm text-gray-500 hover:text-accent transition-colors duration-150"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  <span>info@proshieldepoxy.com</span>
                </a>
                <div className="flex items-center gap-2.5 text-sm text-gray-500">
                  <MapPin className="h-4 w-4 shrink-0" />
                  <span>Las Vegas metro &amp; surrounding areas</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-gray-500">
                  <Clock className="h-4 w-4 shrink-0" />
                  <span>Mon – Sat: 7am – 6pm</span>
                </div>
              </div>
            </div>

            {/* Systems */}
            <div>
              <h3 className="font-heading font-semibold text-xs text-gray-600 mb-4 tracking-widest uppercase">
                Our Systems
              </h3>
              <ul className="space-y-2.5">
                {systemLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-accent transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas + Company */}
            <div>
              <h3 className="font-heading font-semibold text-xs text-gray-600 mb-4 tracking-widest uppercase">
                By Area
              </h3>
              <ul className="space-y-2.5">
                {areaLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-accent transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <h3 className="font-heading font-semibold text-xs text-gray-400 mb-4 mt-8 tracking-widest uppercase">
                Company
              </h3>
              <ul className="space-y-2.5">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-accent transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-xs text-gray-600 mb-4 tracking-widest uppercase">
                Ready to Start?
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Get a free, no-obligation quote. We&apos;ll recommend the right system
                for your space.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover transition-colors duration-200 shadow-lg shadow-accent/15"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar — dark navy */}
      <div className="bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 pb-20 lg:pb-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-light-secondary">
            &copy; {currentYear} ProShield Epoxy. All rights reserved.
          </p>
          <p className="text-xs text-text-light-secondary">
            Licensed &amp; Insured &bull; Professional Floor Coating Specialists
          </p>
        </div>
      </div>
    </footer>
  )
}
