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
    "Garage Floors and Concrete Coatings in Las Vegas | ProShield Epoxy",
  description:
    "See finished garage floors, compare pool deck finishes or get an estimate for your concrete. ProShield Epoxy serves the Las Vegas Valley.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Garage Floors and Concrete Coatings in Las Vegas | ProShield Epoxy",
    description:
      "See finished garage floors, compare pool deck finishes or get an estimate for your concrete. ProShield Epoxy serves the Las Vegas Valley.",
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
