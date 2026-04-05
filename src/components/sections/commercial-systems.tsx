// Expandable accordion commercial systems
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Droplets, Shield, Thermometer, Layers, ChevronDown, Check } from "lucide-react"

const systems = [
  {
    icon: <Droplets className="h-5 w-5" />,
    title: "Resin Quartz Floors",
    tagline: "Heavy-duty impact & chemical resistance",
    tags: ["Warehouses", "Manufacturing", "Healthcare"],
    description:
      "Seamless systems combining epoxy or urethane resin with colored quartz granules. Extremely durable against impacts and heavy loads with a naturally slip-resistant textured surface.",
    benefits: [
      "Impact and abrasion resistant",
      "Slip-resistant quartz texture",
      "Seamless and sanitary",
      "Chemical resistant",
    ],
    stats: [
      { value: "20–30", label: "Year lifespan" },
      { value: "2–3 Day", label: "Install time" },
      { value: "100%", label: "Seamless surface" },
    ],
    image: "/images/commercial/commercial-resin-quartz.jpg",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Solid Color Urethane Floors",
    tagline: "UV-stable color for branded spaces",
    tags: ["Retail", "Offices", "Clean Rooms"],
    description:
      "Polyurethane-based systems offering excellent UV resistance and color retention. Available in unlimited solid colors for branding or design requirements.",
    benefits: [
      "UV-stable color retention",
      "Fast cure (12–24 hrs)",
      "Chemical resistant",
      "Custom color matching",
    ],
    stats: [
      { value: "24hr", label: "Return to service" },
      { value: "0%", label: "UV yellowing" },
      { value: "10+", label: "Year lifespan" },
    ],
    image: "/images/commercial/commercial-solid-grey-epoxy.jpg",
  },
  {
    icon: <Thermometer className="h-5 w-5" />,
    title: "Urethane Cement",
    tagline: "Extreme thermal shock resistance",
    tags: ["Kitchens", "Food Processing", "Breweries"],
    description:
      "High-performance cementitious urethane engineered for extreme environments. Handles thermal shock from steam cleaning to freezer temperatures without cracking or delaminating.",
    benefits: [
      "Thermal shock resistant",
      "Steam-cleanable",
      "Bonds to green concrete",
      "FDA/USDA compliant",
    ],
    stats: [
      { value: "-100°F", label: "to 220°F rated" },
      { value: "Extreme", label: "Chemical resistance" },
      { value: "12hr", label: "Return to service" },
    ],
    image: "/images/commercial/commercial-urethane-cement.jpg",
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: "ProFlake System",
    tagline: "Decorative durability, fastest cure",
    tags: ["Showrooms", "Retail", "Commercial Garages"],
    description:
      "Our signature epoxy flake system adapted for commercial environments. Epoxy base coat with decorative chip broadcast and polyaspartic topcoat in 150+ Torginol color blends.",
    benefits: [
      "150+ color options",
      "Polyaspartic topcoat",
      "UV-stable finish",
      "Fast return to service",
    ],
    stats: [
      { value: "150+", label: "Color blends" },
      { value: "Next Day", label: "Walk-on ready" },
      { value: "1 Day", label: "Typical install" },
    ],
    image: "/images/commercial/commercial-warehouse-flake.jpg",
  },
]

export function CommercialSystems() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="section-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            Systems
          </span>
          <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
            Commercial Flooring Systems
          </h2>
          <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
            Each system is engineered for different conditions. We match the right one to your environment.
          </p>
        </div>

        {/* Expandable System Cards */}
        <div className="max-w-4xl mx-auto flex flex-col gap-3">
          {systems.map((system, i) => {
            const isOpen = openIndex === i

            return (
              <div
                key={system.title}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-gray-900/10 shadow-xl bg-white ring-1 ring-gray-900/5"
                    : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-md"
                }`}
              >
                {/* Collapsed header — always visible */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center gap-4 p-4 sm:p-5 text-left cursor-pointer group"
                >
                  {/* Number badge */}
                  <div
                    className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 font-heading font-bold text-sm ${
                      isOpen
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-gray-400 group-hover:bg-gray-200 group-hover:text-gray-600"
                    }`}
                  >
                    {system.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3
                      className={`font-heading font-semibold text-base sm:text-lg transition-colors duration-300 ${
                        isOpen ? "text-gray-900" : "text-gray-700"
                      }`}
                    >
                      {system.title}
                    </h3>
                    {!isOpen && (
                      <p className="mt-0.5 text-sm text-gray-400 truncate hidden sm:block">
                        {system.tagline}
                      </p>
                    )}
                  </div>

                  {/* Tags on collapsed */}
                  {!isOpen && (
                    <div className="hidden md:flex items-center gap-1.5">
                      {system.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 text-gray-900"
                        : "text-gray-300 group-hover:text-gray-500"
                    }`}
                  />
                </button>

                {/* Expanded content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 pb-6">
                        {/* Tags row */}
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                          {system.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs font-medium px-3 py-1 rounded-full bg-teal/10 text-teal border border-teal/15"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Image + Details row */}
                        <div className="flex flex-col sm:flex-row gap-5">
                          {/* Image */}
                          <div className="sm:w-2/5 h-48 sm:h-56 rounded-xl bg-gray-100 overflow-hidden shrink-0">
                            <img
                              src={system.image}
                              alt={system.title}
                              className="h-full w-full object-cover"
                              loading="lazy"
                            />
                          </div>

                          {/* Text content */}
                          <div className="flex-1 flex flex-col">
                            {/* Tagline as subtitle */}
                            <p className="text-xs font-semibold tracking-wider uppercase text-teal mb-2">
                              {system.tagline}
                            </p>

                            <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed">
                              {system.description}
                            </p>

                            {/* Stats row */}
                            <div className="mt-4 grid grid-cols-3 gap-3">
                              {system.stats.map((stat) => (
                                <div
                                  key={stat.label}
                                  className="bg-gray-50 rounded-lg px-3 py-2.5 text-center"
                                >
                                  <div className="font-heading font-bold text-lg sm:text-xl text-gray-900 leading-tight">
                                    {stat.value}
                                  </div>
                                  <div className="text-[10px] sm:text-[11px] font-medium uppercase tracking-wider text-gray-400 mt-0.5">
                                    {stat.label}
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Benefits as check list */}
                            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1.5">
                              {system.benefits.map((b) => (
                                <span
                                  key={b}
                                  className="text-xs sm:text-sm text-gray-600 flex items-center gap-2"
                                >
                                  <Check className="h-3.5 w-3.5 text-teal shrink-0" />
                                  {b}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
