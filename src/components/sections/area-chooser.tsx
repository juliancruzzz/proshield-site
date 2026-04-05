"use client"

import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Home, TreePine, Building2, Sofa } from "lucide-react"

const areas = [
  {
    title: "Garages",
    description:
      "ProFlake, metallic epoxy, and solid color systems for residential garages.",
    href: "/areas/garage",
    icon: <Home className="h-6 w-6" />,
    systems: ["ProFlake Epoxy", "Metallic Epoxy", "Solid Color"],
    image: "/images/proflake/flake-garage-porsche-bikes.jpg",
  },
  {
    title: "Exterior",
    description:
      "VubaStone, cool deck textures, paver sealing, and GrassMac turf systems.",
    href: "/areas/exterior",
    icon: <TreePine className="h-6 w-6" />,
    systems: ["VubaStone", "Cool Deck / Patio", "Paver Sealing", "GrassMac & Turf"],
    image: "/images/vubastone/vubastone-pool-deck-pergola.jpg",
  },
  {
    title: "Interior",
    description:
      "Metallic epoxy, decorative overlays, and concrete polishing for indoor spaces.",
    href: "/areas/interior",
    icon: <Sofa className="h-6 w-6" />,
    systems: ["Metallic Epoxy", "Concrete Polishing", "Decorative Overlays"],
    image: "/images/commercial/interior-epoxy-floor.jpg",
  },
  {
    title: "Commercial",
    description:
      "Heavy-duty systems for warehouses, retail, kitchens, and airplane hangars.",
    href: "/areas/commercial",
    icon: <Building2 className="h-6 w-6" />,
    systems: ["Commercial Flooring", "Airplane Hangar", "Concrete Polishing"],
    image: "/images/commercial/commercial-grey-yellow-stripe.jpg",
  },
]

export function AreaChooser() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative bg-gray-50 py-24 lg:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header — centered */}
        <div className="max-w-2xl mx-auto text-center mb-14">
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

        {/* Expandable image panels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-3 lg:h-[400px]">
          {areas.map((area, i) => {
            const isHovered = hoveredIndex === i

            return (
              <div key={area.title} className="relative rounded-2xl overflow-hidden cursor-pointer" onMouseEnter={() => setHoveredIndex(i)} onMouseLeave={() => setHoveredIndex(null)} style={{
                  flex: isHovered ? 2.2 : 1,
                  transition: "flex 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
                }}>
                <Link href={area.href} className="block h-full">
                  {/* Background image */}
                  <img
                    src={area.image}
                    alt={area.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{
                      transform: isHovered ? "scale(1.03)" : "scale(1)",
                      transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                    loading="lazy"
                  />

                  {/* Dark overlay — fades on hover */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.45) 100%)",
                      opacity: isHovered ? 0.5 : 1,
                      transition: "opacity 0.45s ease",
                    }}
                  />
                  {/* Base overlay always present */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.15) 50%)",
                    }}
                  />

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-5 sm:p-6 min-h-[200px] lg:min-h-0 lg:justify-between">
                    {/* Top — icon (desktop only) */}
                    <div className="hidden lg:flex items-start">
                      <div
                        className="h-10 w-10 rounded-lg flex items-center justify-center bg-white/10 text-white"
                      >
                        {area.icon}
                      </div>
                    </div>

                    {/* Bottom content */}
                    <div className="mt-auto">
                      <div className="flex items-center gap-3 mb-2 lg:hidden">
                        <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-white/10 text-white">
                          {area.icon}
                        </div>
                        <h3 className="font-heading font-bold text-xl text-white">
                          {area.title}
                        </h3>
                      </div>
                      <h3 className="hidden lg:block font-heading font-bold text-2xl text-white">
                        {area.title}
                      </h3>
                      <p className="mt-1 text-sm lg:text-base text-white/80 leading-relaxed line-clamp-2">
                        {area.description}
                      </p>

                      {/* System tags + CTA — always on mobile, hover on desktop */}
                      <div className="lg:hidden mt-3">
                        <div className="flex items-center gap-1.5 text-sm font-medium text-accent">
                          See Systems
                          <ArrowRight className="h-3.5 w-3.5" />
                        </div>
                      </div>
                      <AnimatePresence>
                        {isHovered && (
                          <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 6 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="hidden lg:block"
                          >
                            <div className="mt-3 flex flex-wrap gap-1.5">
                              {area.systems.map((sys) => (
                                <span
                                  key={sys}
                                  className="inline-block rounded-full bg-white/15 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white/90"
                                >
                                  {sys}
                                </span>
                              ))}
                            </div>
                            <div className="mt-3 flex items-center gap-1.5 text-sm font-medium text-accent">
                              See Systems
                              <ArrowRight className="h-3.5 w-3.5" />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
