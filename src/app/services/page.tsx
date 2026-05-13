import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { Breadcrumbs } from "@/components/sections/breadcrumbs"
import { CtaSection } from "@/components/sections/cta-section"
import { ServicesGrid } from "@/components/sections/services-grid"
import { SpecialtyServices } from "@/components/sections/specialty-services"

export const metadata: Metadata = {
  title: "Epoxy Flooring Services Las Vegas | Garage, Commercial & Pool Deck | ProShield",
  description:
    "Epoxy flooring services in Las Vegas — garage coatings, metallic epoxy, commercial systems, polished concrete, pool deck & more. Free estimates · 702-728-5484.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    url: "https://proshieldepoxy.com/services",
    images: ["/og-image.webp"],
  },
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Our Services"
        title="Floor Coating Services"
        highlight="Las Vegas"
        subtitle="From residential garages to airplane hangars — we match the right professional-grade system to your space."
      />

      <Breadcrumbs items={[{ label: "Services" }]} />

      <ServicesGrid />

      <SpecialtyServices />

      <CtaSection />
    </>
  )
}
