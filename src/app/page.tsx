import type { Metadata } from "next"
import { Hero } from "@/components/sections/hero"
import { HeroStats } from "@/components/sections/hero-stats"
import { AreaChooser } from "@/components/sections/area-chooser"
import { SystemsShowcase } from "@/components/sections/systems-showcase"
import { BeforeAfterSlider } from "@/components/sections/before-after-slider"
import { ProcessTimeline } from "@/components/sections/process-timeline"
import { GoogleReviews } from "@/components/sections/google-reviews"
import { CtaV3 as CtaSection } from "@/components/sections/cta-v3"
import { Credentials } from "@/components/sections/credentials"

export const metadata: Metadata = {
  title:
    "Epoxy Flooring Las Vegas | Garage Floor Coatings | ProShield Epoxy",
  description:
    "Las Vegas epoxy flooring pros — garage floors, metallic epoxy, commercial coatings & pool decks. Licensed, insured, 5-star rated. Same-week scheduling. Free estimates: 702-728-5484.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Epoxy Flooring Las Vegas | ProShield Epoxy",
    description:
      "Las Vegas epoxy flooring — metallic epoxy, flake systems, VubaStone, concrete polishing, cool deck & more. Free quotes. Call 702-728-5484.",
    url: "https://proshieldepoxy.com/",
    images: ["/og-image.webp"],
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
      <Credentials />
      <CtaSection />
    </>
  )
}
