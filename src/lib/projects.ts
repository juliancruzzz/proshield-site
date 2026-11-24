export interface FloorProject {
  slug: string
  title: string
  description: string
  location?: string
  finish: string
  service: { label: string; href: string }
  intro: string
  details: string[]
  photos: { src: string; width: number; height: number; alt: string; caption: string }[]
}

// Only verified job photographs belong here. Source and publication holds:
// AIOS changes/proshield-website-audit-2026-11-17.md, PSA-026.
// Do not infer job size, installation date, chemistry or customer endorsement.
export const floorProjects: FloorProject[] = [
  {
    slug: "nightfall-garage-las-vegas",
    title: "Nightfall Garage Floor in Las Vegas",
    description: "A completed ProShield Nightfall flake garage floor in Las Vegas. See the finished floor, coated edges and a second view of the garage.",
    location: "Las Vegas, NV",
    finish: "Nightfall flake",
    service: { label: "ProFlake Garage Floors", href: "/proflake" },
    intro: "The Nightfall flake continues up the concrete edge along the wall.",
    details: [
      "From the driveway, the floor looks dark gray. Up close, you can see the black, gray and white flakes.",
      "You can still see the original joints in the concrete.",
    ],
    photos: [
      { src: "/images/projects/nightfall-garage.webp", width: 1800, height: 1350, alt: "Completed Nightfall flake garage floor in Las Vegas viewed toward the open garage door", caption: "Finished Nightfall floor, looking toward the driveway." },
      { src: "/images/projects/nightfall-finish.webp", width: 1800, height: 2400, alt: "Nightfall flake finish and coated perimeter inside the same Las Vegas garage", caption: "A second view of the floor and coated perimeter." },
    ],
  },
  {
    slug: "shoreline-garage-henderson",
    title: "Shoreline Garage Floor in Henderson",
    description: "See a completed ProShield ProFlake garage floor in Henderson with the Shoreline blend, including a full-floor view and close-up of the finish.",
    location: "Henderson, NV",
    finish: "Shoreline flake",
    service: { label: "ProFlake Garage Floors", href: "/proflake" },
    intro: "The Shoreline blend has a light background with dark flakes.",
    details: [
      "Shoreline looks lighter across a full garage than the Nightfall blend.",
    ],
    photos: [
      { src: "/images/service-areas/henderson/henderson-proflake-garage.jpg", width: 1200, height: 1200, alt: "Completed Shoreline ProFlake garage floor in Henderson", caption: "The finished Shoreline garage floor in Henderson." },
      { src: "/images/service-areas/henderson/henderson-proflake-flake-detail.jpg", width: 1200, height: 1200, alt: "Close-up of the Shoreline flakes on the same Henderson garage floor", caption: "A close-up of the installed Shoreline finish." },
    ],
  },
  {
    slug: "metallic-showroom-floor",
    title: "Metallic Epoxy Showroom Floor",
    description: "See the showroom floor before coating and after the silver and charcoal metallic epoxy was applied.",
    finish: "Silver and charcoal metallic epoxy",
    service: { label: "Metallic Epoxy Floors", href: "/metallic-epoxy" },
    intro: "The first photo shows the silver and charcoal epoxy finish. The second shows the same showroom floor before we applied it.",
    details: [
      "The darker swirls stand out against the silver when the overhead light hits the floor.",
    ],
    photos: [
      { src: "/images/metallic/metallic-epoxy-chopshop-porsche.webp", width: 1500, height: 1999, alt: "Silver and charcoal metallic epoxy floor in a showroom during installation", caption: "Metallic epoxy after application in the showroom." },
      { src: "/images/blog/metallic/metallic-before-showroom-1.jpg", width: 1200, height: 1600, alt: "Exposed showroom floor during work before the metallic finish was applied", caption: "The same showroom during the work, before the metallic finish." },
    ],
  },
]
