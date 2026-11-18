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
    intro: "A dark flake finish gives this Las Vegas garage a consistent look across the floor and coated edges. These photographs show the completed Nightfall floor from inside the garage and at the entrance.",
    details: [
      "The black, gray and white flake blend reads as a dark gray floor from a distance. The closer view shows the individual flakes and the finish around the perimeter.",
      "The photographs show the joints in the slab remaining visible. A garage coating follows the existing space; the final layout and preparation depend on the condition of your concrete.",
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
    intro: "This Henderson garage has a lighter Shoreline flake finish. The full-floor photograph shows how the blend looks across the garage, while the close-up shows the individual flakes and surface texture.",
    details: [
      "Light and dark flakes create a different overall look from the darker Nightfall project. Compare the wide view with the close-up when choosing a blend for your garage.",
      "Lighting changes how a floor looks in a photograph. The two views show the same installed finish at different distances, including a closer look at its texture.",
    ],
    photos: [
      { src: "/images/service-areas/henderson/henderson-proflake-garage.jpg", width: 1200, height: 1200, alt: "Completed Shoreline ProFlake garage floor in Henderson", caption: "The finished Shoreline garage floor in Henderson." },
      { src: "/images/service-areas/henderson/henderson-proflake-flake-detail.jpg", width: 1200, height: 1200, alt: "Close-up of the Shoreline flakes on the same Henderson garage floor", caption: "A close-up of the installed Shoreline finish." },
    ],
  },
  {
    slug: "metallic-showroom-floor",
    title: "Metallic Epoxy Showroom Floor",
    description: "A ProShield metallic epoxy showroom project with real installation photographs. Compare the exposed floor during work with the completed silver and charcoal finish.",
    finish: "Silver and charcoal metallic epoxy",
    service: { label: "Metallic Epoxy Floors", href: "/metallic-epoxy" },
    intro: "Silver and charcoal movement gives this showroom floor its reflective finish. The installation photographs show the exposed floor during the work and the metallic surface after application.",
    details: [
      "The finished photograph shows flowing metallic patterns across the floor and reflections from the room above. The pattern belongs to this installation; each metallic floor has its own appearance.",
      "The two views show the exposed floor and the metallic surface from different positions in the same showroom.",
    ],
    photos: [
      { src: "/images/metallic/metallic-epoxy-chopshop-porsche.webp", width: 1500, height: 1999, alt: "Silver and charcoal metallic epoxy floor in a showroom during installation", caption: "Metallic epoxy after application in the showroom." },
      { src: "/images/blog/metallic/metallic-before-showroom-1.jpg", width: 1200, height: 1600, alt: "Exposed showroom floor during work before the metallic finish was applied", caption: "The same showroom during the work, before the metallic finish." },
    ],
  },
]
