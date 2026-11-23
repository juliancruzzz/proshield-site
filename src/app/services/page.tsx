import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { Breadcrumbs } from "@/components/sections/breadcrumbs"
import { CtaSection } from "@/components/sections/cta-section"
import { ServicesGrid } from "@/components/sections/services-grid"
import { SpecialtyServices } from "@/components/sections/specialty-services"

export const metadata: Metadata = {
  title: "Garage Floors, Pool Decks and Concrete Finishes | ProShield Epoxy",
  description:
    "Explore garage and commercial floor coatings, concrete polishing and pool deck resurfacing in Las Vegas.",
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
        subtitle="Explore epoxy and polyurea garage floors, pool deck finishes and coatings for commercial spaces."
      />

      <Breadcrumbs items={[{ label: "Services" }]} />

      <ServicesGrid />

      <SpecialtyServices />

      <CtaSection />
    </>
  )
}
