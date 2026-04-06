"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Garage Floors",
    description: "Transform your garage with a showroom-quality floor coating system.",
    href: "/areas/garage",
    gradient: "from-orange-600/20 to-amber-700/10",
  },
  {
    title: "Commercial & Industrial",
    description: "Heavy-duty floors for warehouses, retail, and high-traffic facilities.",
    href: "/areas/commercial",
    gradient: "from-blue-600/20 to-indigo-700/10",
  },
  {
    title: "Metallic Epoxy",
    description: "One-of-a-kind flowing finishes with stunning pearlescent depth.",
    href: "/services",
    gradient: "from-purple-600/20 to-fuchsia-700/10",
  },
  {
    title: "VubaStone",
    description: "Resin-bound natural stone — fully permeable, durable, and beautiful.",
    href: "/services",
    gradient: "from-amber-600/20 to-yellow-700/10",
  },
  {
    title: "GrassMac & Turf",
    description: "Engineered permeable base beneath premium artificial grass.",
    href: "/grassmac",
    gradient: "from-green-600/20 to-emerald-700/10",
  },
  {
    title: "Airplane Hangar",
    description: "Specialty systems built to resist jet fuel, hydraulic fluid, and heavy loads.",
    href: "/airplane-hangar",
    gradient: "from-slate-600/20 to-zinc-700/10",
  },
]

export function ServicesPreview() {
  return (
    <section className="section-gray py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            What We Do
          </span>
          <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl lg:text-[40px] text-gray-900 tracking-tight">
            Premium Floor Coatings
          </h2>
          <p className="mt-4 text-gray-500 text-lg leading-relaxed">
            From residential garages to commercial facilities — we match the right
            professional-grade system to your space.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div key={service.title}>
              <Link href={service.href} className="group block h-full">
                <div className="relative h-full rounded-2xl border border-gray-200 bg-white p-6 overflow-hidden transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1">
                  {/* Gradient accent */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  <div className="relative">
                    {/* Placeholder for project photo */}
                    <div className="h-40 rounded-xl bg-gray-100 mb-5 overflow-hidden">
                      <div className="h-full w-full bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center">
                        <span className="text-gray-500 text-xs font-medium">Photo</span>
                      </div>
                    </div>

                    <h3 className="font-heading font-semibold text-lg text-gray-900 group-hover:text-accent transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-accent-text opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Learn More
                      <ArrowRight className="h-3.5 w-3.5" />
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
