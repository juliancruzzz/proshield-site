"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Check, Car, Sun, Footprints, Waves } from "lucide-react"

const applications = [
  {
    icon: <Car className="h-5 w-5" />,
    title: "Driveways",
    tagline: "Vehicle-rated & fully permeable",
    tags: ["Residential", "Grand Entrances", "Motor Courts"],
    description:
      "VubaStone driveways are vehicle-rated, fully permeable, and engineered for Las Vegas heat. The resin-bound surface handles daily traffic without cracking or fading — and eliminates standing water entirely.",
    benefits: [
      "Handles vehicle weight",
      "No cracking or settling",
      "Zero standing water",
      "UV-stable color",
    ],
    stats: [
      { value: "5/8\"", label: "Min. depth" },
      { value: "850 L/min", label: "Drainage per m²" },
      { value: "15–20yr", label: "Expected lifespan" },
    ],
    image: "/images/vubastone/vubastone-driveway-stone-columns.webp",
  },
  {
    icon: <Sun className="h-5 w-5" />,
    title: "Patios & Terraces",
    tagline: "Seamless outdoor living surfaces",
    tags: ["Entertaining", "Outdoor Dining", "Fire Pits"],
    description:
      "A seamless, low-maintenance surface that elevates outdoor living and entertaining areas. VubaStone patios create a smooth, continuous finish that flows naturally with your landscape design.",
    benefits: [
      "Seamless finish",
      "Low maintenance",
      "Weed-free surface",
      "Natural stone aesthetic",
    ],
    stats: [
      { value: "3/8\"", label: "Min. depth" },
      { value: "21+", label: "Color blends" },
      { value: "1–2 Day", label: "Install time" },
    ],
    image: "/images/vubastone/vubastone-patio-firepit.webp",
  },
  {
    icon: <Footprints className="h-5 w-5" />,
    title: "Walkways & Paths",
    tagline: "Slip-resistant & weed-free",
    tags: ["Landscaping", "Garden Paths", "Side Yards"],
    description:
      "Non-slip, weed-resistant, and permeable. VubaStone walkways are designed to complement your landscape architecture while providing a stable, attractive surface year-round.",
    benefits: [
      "Naturally slip-resistant",
      "No weed growth",
      "Permeable drainage",
      "Complements landscaping",
    ],
    stats: [
      { value: "3/8\"", label: "Min. depth" },
      { value: "100%", label: "Permeable" },
      { value: "0", label: "Weed growth" },
    ],
    image: "/images/vubastone/vubastone-walkway-wood-inlay.webp",
  },
  {
    icon: <Waves className="h-5 w-5" />,
    title: "Pool Surrounds",
    tagline: "Fast-draining & cool underfoot",
    tags: ["Pool Decks", "Spas", "Water Features"],
    description:
      "Fast-draining and slip-resistant — the ideal surface around water. VubaStone pool surrounds stay cool underfoot, drain immediately, and eliminate the safety hazard of standing water.",
    benefits: [
      "Slip-resistant surface",
      "Fast water drainage",
      "Cool underfoot",
      "No standing water",
    ],
    stats: [
      { value: "850 L", label: "Drain rate/min/m²" },
      { value: "Safe", label: "Slip-resistant" },
      { value: "10yr", label: "Warranty w/ VubaMac" },
    ],
    image: "/images/cool-deck/cool-deck-pool-spa-vegas.webp",
  },
]

export function VubaStoneApplications() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="section-gray py-10 sm:py-16 lg:py-24 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            Applications
          </span>
          <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
            Driveways, Patios, Pool Decks & More
          </h2>
          <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
            VubaStone is designed for any outdoor surface that needs to look premium, drain properly, and hold up to real use.
          </p>
        </div>

        {/* Expandable Application Cards */}
        <div className="max-w-4xl mx-auto flex flex-col gap-3">
          {applications.map((app, i) => {
            const isOpen = openIndex === i

            return (
              <div
                key={app.title}
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
                  {/* Icon badge */}
                  <div
                    className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-gray-600 group-hover:bg-gray-200 group-hover:text-gray-600"
                    }`}
                  >
                    {app.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3
                      className={`font-heading font-semibold text-base sm:text-lg transition-colors duration-300 ${
                        isOpen ? "text-gray-900" : "text-gray-700"
                      }`}
                    >
                      {app.title}
                    </h3>
                    {!isOpen && (
                      <p className="mt-0.5 text-sm text-gray-500 truncate hidden sm:block">
                        {app.tagline}
                      </p>
                    )}
                  </div>

                  {/* Tags on collapsed */}
                  {!isOpen && (
                    <div className="hidden md:flex items-center gap-1.5">
                      {app.tags.slice(0, 2).map((tag) => (
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
                          {app.tags.map((tag) => (
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
                              src={app.image}
                              alt={`VubaStone ${app.title}`}
                              className="h-full w-full object-cover"
                              loading="lazy"
                            />
                          </div>

                          {/* Text content */}
                          <div className="flex-1 flex flex-col">
                            {/* Tagline as subtitle */}
                            <p className="text-xs font-semibold tracking-wider uppercase text-teal mb-2">
                              {app.tagline}
                            </p>

                            <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed">
                              {app.description}
                            </p>

                            {/* Stats row */}
                            <div className="mt-4 grid grid-cols-3 gap-3">
                              {app.stats.map((stat) => (
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

                            {/* Benefits checklist */}
                            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1.5">
                              {app.benefits.map((b) => (
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
