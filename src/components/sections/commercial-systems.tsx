// Expandable accordion commercial systems
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Droplets, Shield, Thermometer, Layers, ChevronDown, Check } from "lucide-react"

const systems = [
  {
    icon: <Droplets className="h-5 w-5" />,
    title: "Resin Quartz Floors",
    tagline: "Quartz texture underfoot",
    tags: ["Warehouses", "Manufacturing", "Healthcare"],
    description:
      "Colored quartz granules are set into resin. The amount and size of the quartz influence both the texture and the cleaning routine.",
    benefits: ["Colored quartz aggregate", "Texture selection", "Wall and drain details"],
    stats: [
      { value: "Quartz", label: "Surface texture" },
      { value: "Resin", label: "Binder" },
    ],
    image: "/images/commercial/commercial-resin-quartz.webp",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Solid Color Urethane Floors",
    tagline: "One continuous color",
    tags: ["Retail", "Offices", "Clean Rooms"],
    description:
      "A solid-color coating suits stockrooms, retail aisles and work areas where striping or clear aisle markings are part of the plan.",
    benefits: ["Solid-color finish", "Aisle markings", "Topcoat selection"],
    stats: [
      { value: "Solid", label: "Color finish" },
      { value: "Optional", label: "Floor markings" },
    ],
    image: "/images/commercial/commercial-solid-grey-epoxy.jpg",
  },
  {
    icon: <Thermometer className="h-5 w-5" />,
    title: "Urethane Cement",
    tagline: "For wet process areas",
    tags: ["Kitchens", "Food Processing", "Breweries"],
    description:
      "Urethane cement is an option for commercial kitchens and processing rooms. Compare each product’s limits with the wash temperature, cleaning chemicals and equipment in the room.",
    benefits: ["Washdown conditions", "Cove and drain details", "Cleaning products"],
    stats: [
      { value: "Washdown", label: "Temperature" },
      { value: "Drains", label: "Edge details" },
    ],
    image: "/images/commercial/commercial-urethane-cement.webp",
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: "ProFlake System",
    tagline: "A decorative flake finish",
    tags: ["Showrooms", "Retail", "Commercial Garages"],
    description:
      "ProFlake pairs a polyurea base with decorative flakes and a clear polyaspartic coat. The blend sets the color across the floor.",
    benefits: ["Full flake coverage", "Clear polyaspartic topcoat", "Choice of flake blend"],
    stats: [
      { value: "150+", label: "Color blends" },
      { value: "Polyurea", label: "Base coat" },
    ],
    image: "/images/commercial/commercial-warehouse-flake.webp",
  },
]

export function CommercialSystems() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="section-gray py-10 sm:py-16 lg:py-24">
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
            Compare the texture, appearance and typical uses of each system.
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
                        : "bg-gray-100 text-gray-600 group-hover:bg-gray-200 group-hover:text-gray-600"
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
                      <p className="mt-0.5 text-sm text-gray-500 truncate hidden sm:block">
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
                          className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-600"
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
                                  <div className="text-[10px] sm:text-[11px] font-medium uppercase tracking-wider text-gray-500 mt-0.5">
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
