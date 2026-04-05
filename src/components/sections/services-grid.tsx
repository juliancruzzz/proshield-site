"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Garage Floor Coatings",
    subtitle: "ProFlake System",
    description:
      "Epoxy base coat, full flake broadcast, and polyaspartic topcoat. 150+ Torginol color blends. Often completed in 1 day.",
    image: "/images/proflake/flake-garage-porsche-bikes.jpg",
    href: "/proflake",
    tags: ["1-day install*", "Hot tire resistant", "150+ colors"],
  },
  {
    title: "Metallic Epoxy",
    subtitle: "Flowing Metallic Finishes",
    description:
      "One-of-a-kind pearlescent depth with 3D liquid-metal effect. Every floor is unique. 2–3 day installation.",
    image: "/images/metallic/metallic-epoxy-blue-ocean.jpg",
    href: "/metallic-epoxy",
    tags: ["Unique every time", "3D depth", "Custom combos"],
  },
  {
    title: "VubaStone",
    subtitle: "Resin-Bound Natural Stone",
    description:
      "Polyurethane resin-bound crushed Spanish marble. Fully permeable at 850 L/min. 20–25 year lifespan.",
    image: "/images/vubastone/vubastone-driveway-landscaping.webp",
    href: "/vubastone",
    tags: ["Fully permeable", "Natural stone", "20–25 years"],
  },
  {
    title: "Commercial Flooring",
    subtitle: "Resinous Systems",
    description:
      "Resin quartz, urethane cement, and ProFlake for commercial environments. Engineered for heavy traffic and chemical exposure.",
    image: "/images/commercial/commercial-warehouse-flake.jpg",
    href: "/commercial-flooring",
    tags: ["Resin quartz", "Urethane cement", "Chemical rated"],
  },
  {
    title: "Tile Flooring",
    subtitle: "Porcelain, Ceramic & Stone",
    description:
      "Professional installation of porcelain, ceramic, and natural stone. Scratch and water resistant.",
    image: "/images/tile/tile-luxury-interior.jpg",
    href: "/tile-flooring",
    tags: ["Porcelain & ceramic", "Natural stone", "Water resistant"],
  },
  {
    title: "Plank Flooring",
    subtitle: "LVP, SPC & Engineered Hardwood",
    description:
      "Realistic wood-grain finishes with waterproof cores and click-lock installation. Low maintenance.",
    image: "/images/plank/plank-luxury.jpg",
    href: "/plank-flooring",
    tags: ["LVP / SPC / WPC", "Waterproof core", "Click-lock"],
  },
  {
    title: "Airplane Hangar",
    subtitle: "Specialty Chemical-Resistant",
    description:
      "Systems built to resist Skydrol, jet fuel, oils, and rolling loads. Chemical-resistant polyurethane topcoat.",
    image: "/images/commercial/commercial-floor-solid.jpg",
    href: "/airplane-hangar",
    tags: ["Skydrol resistant", "Impact rated", "Non-slip"],
  },
  {
    title: "Concrete Polishing",
    subtitle: "Mechanical Refinement",
    description:
      "Not a coating — a mechanical refinement process. Levels 1–4, Classes A–D. Low maintenance, professional finish.",
    image: "/images/concrete-polishing/polished-floor-showroom.jpg",
    href: "/concrete-polishing",
    tags: ["Not a coating", "Multiple levels", "Low maintenance"],
  },
]

export function ServicesGrid() {
  return (
    <section className="section-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            Our Systems
          </span>
          <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
            Professional-Grade Floor Coatings
          </h2>
          <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
            Every system is matched to your space, traffic, and performance
            requirements.
          </p>
        </div>

        {/* Featured row — top 3 services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-5 sm:mb-6">
          {services.slice(0, 3).map((service, i) => (
            <div key={service.title}>
              <Link href={service.href} className="group block h-full">
                <div className="h-full rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span className="inline-block rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold tracking-wide uppercase text-accent">
                        {service.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="font-heading font-semibold text-gray-900 text-lg sm:text-xl group-hover:text-accent transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] font-medium text-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Learn More{" "}
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Remaining services — 5 in a compact grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
          {services.slice(3).map((service, i) => (
            <div key={service.title}>
              <Link href={service.href} className="group block h-full">
                <div className="h-full rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5">
                    <h3 className="font-heading font-semibold text-gray-900 text-base group-hover:text-accent transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-xs text-gray-400 font-medium">
                      {service.subtitle}
                    </p>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                    <div className="mt-3 flex items-center gap-1.5 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Learn More{" "}
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
