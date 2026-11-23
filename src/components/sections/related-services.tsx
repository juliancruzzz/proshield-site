"use client"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ServiceItem {
  title: string
  href: string
  description: string
}

interface RelatedServicesProps {
  currentService: string
  services?: ServiceItem[]
  variant?: "white" | "gray"
}

// Complete service map with all ProShield offerings
const allServices: Record<string, ServiceItem> = {
  proflake: {
    title: "ProFlake Floors",
    href: "/proflake",
    description: "Decorative flake over a polyurea base with a clear topcoat.",
  },
  "metallic-epoxy": {
    title: "Metallic Epoxy",
    href: "/metallic-epoxy",
    description: "Pigmented epoxy for a marbled floor in custom colors.",
  },
  vubastone: {
    title: "VubaStone",
    href: "/vubastone",
    description: "Resin-bound natural stone for driveways and patios.",
  },
  "concrete-polishing": {
    title: "Concrete Polishing",
    href: "/concrete-polishing",
    description: "The existing slab, ground and polished to your choice of sheen.",
  },
  "concrete-overlay": {
    title: "Decorative Overlay",
    href: "/concrete-overlay",
    description: "Add texture or a stamped pattern to sound concrete.",
  },
  "airplane-hangar": {
    title: "Hangar Flooring",
    href: "/airplane-hangar",
    description: "Floor coatings for aircraft parking and maintenance bays.",
  },
  "cool-deck": {
    title: "Cool Deck",
    href: "/cool-deck",
    description: "Acrylic knockdown texture for patios and pool surrounds.",
  },
  "rubber-pool-deck": {
    title: "Rubber Pool Deck",
    href: "/rubber-pool-deck",
    description: "Bound rubber granules for a softer pool surround.",
  },
  "paver-sealing": {
    title: "Paver Sealing",
    href: "/paver-sealing",
    description: "Clean and reseal existing pavers in a natural or wet-look finish.",
  },
  "commercial-flooring": {
    title: "Commercial Flooring",
    href: "/commercial-flooring",
    description: "Resin flooring for shops, kitchens and warehouses.",
  },
}

// Service groupings for intelligent related service selection
const serviceGroups = {
  interiorFloorCoatings: [
    "proflake",
    "metallic-epoxy",
    "concrete-polishing",
  ],
  exterior: [
    "vubastone",
    "cool-deck",
    "rubber-pool-deck",
    "paver-sealing",
  ],
  specialty: [
    "airplane-hangar",
    "commercial-flooring",
    "concrete-overlay",
  ],
}

/**
 * Get related services based on the current service
 * Prefers services from the same group, then mixes in services from other groups
 */
function getRelatedServices(
  currentServiceSlug: string,
  overrideServices?: ServiceItem[]
): ServiceItem[] {
  // If override services are provided, use those
  if (overrideServices && overrideServices.length > 0) {
    return overrideServices
  }

  // Find which group the current service belongs to
  const groupEntries = Object.entries(serviceGroups) as [keyof typeof serviceGroups, string[]][]
  const found = groupEntries.find(([, slugs]) => slugs.includes(currentServiceSlug))

  // If current service not found in groups, default to showing diverse services
  if (!found) {
    const allSlugs = Object.keys(allServices).filter(
      (slug: string) => slug !== currentServiceSlug
    )
    return allSlugs.slice(0, 3).map((slug: string) => allServices[slug as keyof typeof allServices])
  }

  const currentGroup = found[0]

  // Get other group names
  const otherGroups = groupEntries
    .map(([name]) => name)
    .filter((groupName) => groupName !== currentGroup)

  // Collect candidates: prefer same group first
  const sameGroupServices = serviceGroups[currentGroup]
    .filter((slug: string) => slug !== currentServiceSlug)
    .map((slug: string) => allServices[slug as keyof typeof allServices])

  const otherGroupServices = otherGroups
    .flatMap((groupName) => serviceGroups[groupName])
    .map((slug: string) => allServices[slug as keyof typeof allServices])

  // Build result: up to 3 items, preferring same group
  const result: ServiceItem[] = []

  // Add 1-2 from same group
  result.push(...sameGroupServices.slice(0, 2))

  // Fill remaining slots with other groups
  const remainingSlots = 3 - result.length
  result.push(...otherGroupServices.slice(0, remainingSlots))

  return result.slice(0, 3)
}

export function RelatedServices({
  currentService,
  services,
  variant = "white",
}: RelatedServicesProps) {
  const relatedServices = getRelatedServices(currentService, services)

  return (
    <section className={`border-t border-gray-200 py-10 lg:py-12 ${variant === "gray" ? "section-gray" : "section-white"}`}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-6">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            Related Services
          </p>
        </div>

        {/* Compact inline cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {relatedServices.map((service, index) => (
            <div key={service.href}>
              <Link href={service.href}>
                <div className="group flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3 transition-all duration-200 hover:border-gray-300 hover:shadow-sm">
                  <div className="min-w-0">
                    <h3 className="font-medium text-sm text-gray-900 group-hover:text-accent transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-500 truncate mt-0.5">
                      {service.description}
                    </p>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 flex-shrink-0 ml-3 text-gray-300 transition-all duration-200 group-hover:text-accent group-hover:translate-x-0.5" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
