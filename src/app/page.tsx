import type { Metadata } from "next"
import { Hero } from "@/components/sections/hero"
import { HeroStats } from "@/components/sections/hero-stats"
import { AreaChooser } from "@/components/sections/area-chooser"
import { SystemsShowcase } from "@/components/sections/systems-showcase"
import { BeforeAfterSlider } from "@/components/sections/before-after-slider"
import { ProcessTimeline } from "@/components/sections/process-timeline"
import { GoogleReviews } from "@/components/sections/google-reviews"
import { CtaV3 as CtaSection } from "@/components/sections/cta-v3"

export const metadata: Metadata = {
  title:
    "Epoxy Flooring Las Vegas | Garage, Commercial & Outdoor Coatings | ProShield Epoxy",
  description:
    "Las Vegas epoxy flooring by ProShield Epoxy. Metallic epoxy, flake systems, VubaStone, concrete polishing, cool deck, hangar floors & more. 1-day install, lifetime warranty. Free quotes — 702-728-5484.",
  openGraph: {
    title:
      "Epoxy Flooring Las Vegas | Garage, Commercial & Outdoor Coatings | ProShield Epoxy",
    description:
      "Las Vegas epoxy flooring by ProShield Epoxy. Metallic epoxy, flake systems, VubaStone, concrete polishing, cool deck, hangar floors & more. 1-day install, lifetime warranty. Free quotes.",
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <HeroStats />
      <AreaChooser />
      <SystemsShowcase />
      <BeforeAfterSlider />
      <ProcessTimeline />
      <GoogleReviews />
      <CtaSection />
    </>
  )
}
