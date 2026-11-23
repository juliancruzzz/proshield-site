"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Garage Floor Coatings",
    subtitle: "Flake finish",
    description:
      "Our ProFlake garage floor has a polyurea base, a full layer of decorative flakes and a clear polyaspartic topcoat.",
    image: "/images/proflake/flake-garage-porsche-bikes.webp",
    href: "/proflake",
    tags: ["150+ flake blends", "Clear topcoat"],
  },
  {
    title: "Metallic Epoxy",
    subtitle: "Custom color",
    description:
      "Here, white and gray run through a blue metallic finish. The pigments blend as the epoxy is poured.",
    image: "/images/metallic/metallic-epoxy-blue-ocean.webp",
    href: "/metallic-epoxy",
    tags: ["Custom colors", "Marbled finish"],
  },
  {
    title: "VubaStone",
    subtitle: "Resin-bound stone",
    description:
      "Small pieces of stone are bound with clear resin. Choose a single blend or a contrasting border.",
    image: "/images/vubastone/vubastone-driveway-landscaping.webp",
    href: "/vubastone",
    tags: ["Driveways", "Paths", "Pool surrounds"],
  },
  {
    title: "Commercial Flooring",
    subtitle: "Floors for working spaces",
    description:
      "Compare finishes for customer areas, equipment aisles and rooms that see frequent washdowns.",
    image: "/images/commercial/commercial-warehouse-flake.webp",
    href: "/commercial-flooring",
    tags: ["Resin quartz", "Urethane cement"],
  },
  {
    title: "Airplane Hangar",
    subtitle: "Aircraft storage and maintenance",
    description:
      "Choose a finish around the aircraft, ground equipment and fluids used in the hangar.",
    image: "/images/hangar/hangar-floor-drone-desert.webp",
    href: "/airplane-hangar",
    tags: ["Parking bays", "Line markings"],
  },
  {
    title: "Concrete Polishing",
    subtitle: "Ground and polished concrete",
    description:
      "Polishing brings out the stone already in the slab. Choose how much aggregate shows and how glossy the floor looks.",
    image: "/images/concrete-polishing/polished-floor-showroom.webp",
    href: "/concrete-polishing",
    tags: ["Sheen", "Aggregate exposure"],
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
            Floor finishes
          </h2>
          <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
            Compare materials, colors and uses.
          </p>
        </div>

        {/* Featured row — top 3 services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-5 sm:mb-6">
          {services.slice(0, 3).map((service, i) => (
            <div key={service.title}>
              <Link href={service.href} className="group block h-full">
                <div className="h-full rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300">
                  {/* Image */}
                  <div className="relative aspect-[16/9] sm:aspect-[16/10] overflow-hidden">
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
                  <div className="p-4 sm:p-6">
                    <h3 className="font-heading font-semibold text-gray-900 text-lg sm:text-xl group-hover:text-accent transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 sm:mt-2 text-sm text-gray-500 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] font-medium text-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-3 sm:mt-4 flex items-center gap-1.5 text-sm font-medium text-accent-text opacity-0 group-hover:opacity-100 transition-opacity duration-200">
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
                  <div className="relative aspect-[16/9] sm:aspect-[4/3] overflow-hidden">
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
                    <p className="mt-1 text-xs text-gray-500 font-medium">
                      {service.subtitle}
                    </p>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                    <div className="mt-3 flex items-center gap-1.5 text-sm font-medium text-accent-text opacity-0 group-hover:opacity-100 transition-opacity duration-200">
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
