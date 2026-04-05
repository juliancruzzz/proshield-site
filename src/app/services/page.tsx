import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { CtaSection } from "@/components/sections/cta-section"
import { ServicesGrid } from "@/components/sections/services-grid"
import { SpecialtyServices } from "@/components/sections/specialty-services"

export const metadata: Metadata = {
  title: "Floor Coating Services Las Vegas | ProShield Epoxy",
  description:
    "Professional floor coatings — metallic epoxy, flake systems, VubaStone, concrete polishing, airplane hangar flooring, GrassMac turf, paver sealing, and more in Las Vegas.",
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Our Services"
        title="What We Do"
        subtitle="From residential garages to airplane hangars — we match the right professional-grade system to your space."
      />

      <ServicesGrid />

      <SpecialtyServices />

      <CtaSection />
    </>
  )
}
