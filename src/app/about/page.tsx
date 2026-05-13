import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/sections/page-hero"
import { Breadcrumbs } from "@/components/sections/breadcrumbs"
import { CtaSection } from "@/components/sections/cta-section"
import {
  ShieldCheck,
  FileText,
  Scale,
  Award,
  Wrench,
  Heart,
  CheckCircle2,
  MapPin,
  Clock,
  Hammer,
  BadgeCheck,
  DollarSign,
  Building2,
} from "lucide-react"

export const metadata: Metadata = {
  title: "About ProShield Epoxy | Las Vegas Epoxy Flooring Experts",
  description:
    "Las Vegas epoxy flooring company founded by Julian Cruz. Licensed, insured, 5-star rated — garage floors, commercial coatings & decorative epoxy. See why 100+ homeowners trust us.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    url: "https://proshieldepoxy.com/about",
    images: ["/og-image.webp"],
  },
}

const milestones: { label: string; href?: string }[] = [
  { label: "Polyaspartic & epoxy garage floors", href: "/areas/garage" },
  { label: "Commercial chemical-resistant systems", href: "/commercial-flooring" },
  { label: "Airplane hangar coatings", href: "/airplane-hangar" },
  { label: "Resin-bound VubaStone driveways", href: "/vubastone" },
  { label: "Concrete polishing & overlays", href: "/concrete-polishing" },
  { label: "Cool deck & pool deck coatings", href: "/cool-deck" },
]

const values = [
  {
    icon: <Wrench className="h-5 w-5" />,
    title: "Craftsmanship",
    description:
      "Every floor is installed with precision. We don't cut corners — we cut concrete.",
  },
  {
    icon: <Award className="h-5 w-5" />,
    title: "Professional-Grade Materials",
    description:
      "We prioritize professional-grade materials from trusted U.S. manufacturers where applicable.",
  },
  {
    icon: <Heart className="h-5 w-5" />,
    title: "Local & Reliable",
    description:
      "We're your neighbor. We show up on time, do the work right, and stand behind it.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About Us"
        title="Built on Quality,"
        highlight="Backed by Results"
        subtitle="ProShield Epoxy is a premium floor coating company founded by Julian Cruz. We prioritize professional-grade materials from trusted U.S. manufacturers where applicable."
      />

      <Breadcrumbs items={[{ label: "About" }]} />

      {/* Story Section — no photo, text-forward layout */}
      <section className="section-white py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <span className="text-sm font-semibold tracking-widest uppercase text-teal">
              Our Story
            </span>
            <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
              Why ProShield Exists
            </h2>
            <div className="mt-6 space-y-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              <p>
                ProShield Epoxy was founded with a simple goal: deliver floor coatings that
                actually last. Too many companies use basic epoxy that yellows, cracks, and
                fails within a few years. We saw an opportunity to do it right.
              </p>
              <p>
                We match the right professional-grade system to every space — from polyaspartic
                topcoats on residential garages to chemical-resistant systems for airplane
                hangars, resin-bound VubaStone for driveways, and concrete polishing for
                commercial floors.
              </p>
              <p>
                We&apos;re not a franchise. We&apos;re not a fly-by-night operation. We&apos;re
                a local business that takes pride in every floor we install — and we stand
                behind our work with a real warranty.
              </p>
            </div>

            {/* What we do list */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {milestones.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal shrink-0" />
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-sm sm:text-base text-gray-700 font-medium hover:text-teal transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-sm sm:text-base text-gray-700 font-medium">{item.label}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-gray py-14 sm:py-20 lg:py-28 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
              What Drives Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-lg sm:rounded-xl lg:rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 lg:p-8 text-center"
              >
                <div className="mx-auto h-12 w-12 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                  {v.icon}
                </div>
                <h3 className="font-heading font-semibold text-base sm:text-lg text-gray-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-500 leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* License & Credentials — real data */}
      <section className="section-white py-14 sm:py-20 lg:py-28 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-sm font-semibold tracking-widest uppercase text-teal">
              Credentials
            </span>
            <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
              Licensed, Bonded &amp; Insured
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-500">
              We&apos;re fully credentialed with the State of Nevada so you can hire with
              confidence.
            </p>
          </div>

          {/* License card */}
          <div className="max-w-2xl mx-auto rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 lg:p-10 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-teal/10 flex items-center justify-center">
                <Building2 className="h-5 w-5 text-teal" />
              </div>
              <div>
                <div className="text-xs font-semibold tracking-wider uppercase text-teal">
                  State of Nevada
                </div>
                <div className="font-heading font-bold text-gray-900 text-lg">
                  Contractor&apos;s License
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-1">
                    Company
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-gray-900">
                    ProShield Epoxy &amp; Concrete LLC
                  </div>
                </div>
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-1">
                    License #
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-gray-900">0094652</div>
                </div>
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-1">
                    Classification
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-gray-900">
                    C-5 Concrete Contracting
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-1">
                    Status
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600">
                    <BadgeCheck className="h-4 w-4" />
                    Active
                  </div>
                </div>
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-1">
                    Bid Limit
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-gray-900">$200,000</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-gray-200">
            </div>
          </div>

          {/* Trust badges row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto mt-8">
            <div className="rounded-lg sm:rounded-xl lg:rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 text-center">
              <ShieldCheck className="h-8 w-8 text-accent mx-auto mb-3" />
              <div className="text-sm font-semibold text-gray-900">Limited Lifetime Warranty</div>
              <div className="mt-1 text-xs text-gray-500">On qualifying residential systems</div>
            </div>
            <div className="rounded-lg sm:rounded-xl lg:rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 text-center">
              <FileText className="h-8 w-8 text-accent mx-auto mb-3" />
              <div className="text-sm font-semibold text-gray-900">NV License #0094652</div>
              <div className="mt-1 text-xs text-gray-500">C-5 Concrete Contracting</div>
            </div>
            <div className="rounded-lg sm:rounded-xl lg:rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 text-center">
              <Scale className="h-8 w-8 text-accent mx-auto mb-3" />
              <div className="text-sm font-semibold text-gray-900">Bonded &amp; Insured</div>
              <div className="mt-1 text-xs text-gray-500">Full protection on every job</div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
