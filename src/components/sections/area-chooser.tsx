"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowRight, Home, TreePine, Building2, Sofa } from "lucide-react"

const areas = [
  {
    title: "Garages",
    description:
      "ProFlake, metallic epoxy, and solid color systems for residential garages.",
    href: "/areas/garage",
    icon: Home,
    systems: ["ProFlake Epoxy", "Metallic Epoxy", "Solid Color"],
    image: "/images/proflake/flake-garage-porsche-bikes.webp",
  },
  {
    title: "Exterior",
    description:
      "VubaStone, cool deck textures, paver sealing, and GrassMac turf systems.",
    href: "/areas/exterior",
    icon: TreePine,
    systems: ["VubaStone", "Cool Deck / Patio", "Paver Sealing", "GrassMac & Turf"],
    image: "/images/vubastone/vubastone-pool-deck-pergola.webp",
  },
  {
    title: "Interior",
    description:
      "Metallic epoxy, decorative overlays, and concrete polishing for indoor spaces.",
    href: "/areas/interior",
    icon: Sofa,
    systems: ["Metallic Epoxy", "Concrete Polishing", "Decorative Overlays"],
    image: "/images/commercial/interior-epoxy-floor.webp",
  },
  {
    title: "Commercial",
    description:
      "Heavy-duty systems for warehouses, retail, kitchens, and airplane hangars.",
    href: "/areas/commercial",
    icon: Building2,
    systems: ["Commercial Flooring", "Airplane Hangar", "Concrete Polishing"],
    image: "/images/commercial/commercial-grey-yellow-stripe.webp",
  },
]

export function AreaChooser() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative bg-white py-14 sm:py-24 lg:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            Where Do You Need Floors?
          </span>
          <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight">
            Choose Your Area
          </h2>
          <p className="mt-4 text-gray-500 text-lg leading-relaxed">
            We match the right professional-grade system to your space. Pick an
            area to see which systems we recommend.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {areas.map((area, i) => {
            const isHovered = hoveredIndex === i
            const Icon = area.icon

            return (
              <Link
                key={area.title}
                href={area.href}
                className="group relative rounded-2xl overflow-hidden"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image */}
                <div className="aspect-[4/3] sm:aspect-[3/4] relative overflow-hidden">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  {/* Accent line at top */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 bg-accent transition-transform duration-300 origin-left"
                    style={{ transform: isHovered ? "scaleX(1)" : "scaleX(0)" }}
                  />
                </div>

                {/* Content overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  {/* Icon */}
                  <div
                    className="h-10 w-10 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
                    style={{
                      backgroundColor: isHovered ? "rgba(218,130,49,0.9)" : "rgba(255,255,255,0.15)",
                    }}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-1">
                    {area.title}
                  </h3>

                  {/* Description — always visible */}
                  <p className="text-sm text-white/70 leading-relaxed line-clamp-2 mb-3">
                    {area.description}
                  </p>

                  {/* System tags — fade in on hover */}
                  <div
                    className="flex flex-wrap gap-1.5 mb-3 transition-all duration-300"
                    style={{
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered ? "translateY(0)" : "translateY(4px)",
                      maxHeight: isHovered ? "80px" : "0",
                      overflow: "hidden",
                    }}
                  >
                    {area.systems.map((sys) => (
                      <span
                        key={sys}
                        className="inline-block rounded-full bg-white/15 backdrop-blur-sm px-2.5 py-0.5 text-xs font-medium text-white/90"
                      >
                        {sys}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-accent">
                    See Systems
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
