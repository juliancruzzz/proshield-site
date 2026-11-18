import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { Breadcrumbs } from "@/components/sections/breadcrumbs"
import { ProjectCards } from "@/components/sections/project-cards"
import { CtaSection } from "@/components/sections/cta-section"

const title = "Completed Floor Coating Projects | ProShield Epoxy"
const description = "Explore ProShield garage and metallic epoxy projects, with real installation photos from Las Vegas, Henderson and a showroom floor."
export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/projects" },
  openGraph: { title, description, url: "https://proshieldepoxy.com/projects", images: ["/images/projects/nightfall-garage.webp"] },
  twitter: { card: "summary_large_image", title, description, images: ["/images/projects/nightfall-garage.webp"] },
}

export default function ProjectsPage() {
  return <>
    <PageHero badge="Our Work" title="Completed Projects" subtitle="See the floor, the finish and the details from real ProShield installations." ctaText="Get a Free Quote" ctaHref="/contact" />
    <Breadcrumbs items={[{ label: "Projects" }]} />
    <ProjectCards heading="Garage & Metallic Floors" />
    <CtaSection />
  </>
}
