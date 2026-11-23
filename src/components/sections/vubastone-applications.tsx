"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Check, Car, Sun, Footprints, Waves } from "lucide-react"

const applications = [
  {
    icon: <Car className="h-5 w-5" />,
    title: "Driveways",
    tagline: "Stone for vehicle traffic",
    tags: ["Residential", "Driveway entrances", "Motor Courts"],
    description:
      "The turn into a garage puts different loads on a driveway than a straight run. Traffic, the existing base and the height of the garage threshold help determine the build.",
    benefits: [
      "Garage threshold height",
      "Base condition",
      "Direction of runoff",
      "Vehicle turning areas",
    ],
    image: "/images/vubastone/vubastone-driveway-stone-columns.webp",
    alt: "Stone driveway meeting the garage threshold",
  },
  {
    icon: <Sun className="h-5 w-5" />,
    title: "Patios & Terraces",
    tagline: "Stone around outdoor seating",
    tags: ["Entertaining", "Outdoor Dining", "Fire Pits"],
    description:
      "The small stones form a continuous surface around patio furniture and planting beds.",
    benefits: [
      "Stone borders",
      "Patio thresholds",
      "Water runoff",
      "Aggregate color blends",
    ],
    image: "/images/vubastone/vubastone-patio-firepit.webp",
    alt: "Stone patio surrounding a raised fire pit",
  },
  {
    icon: <Footprints className="h-5 w-5" />,
    title: "Walkways & Paths",
    tagline: "Paths between planting beds",
    tags: ["Landscaping", "Garden Paths", "Side Yards"],
    description:
      "A resin-bound path can follow a curve without loose gravel spilling into the planting bed. Edging and the change in height where the path meets a patio are part of the layout.",
    benefits: [
      "Curved borders",
      "Garden edging",
      "Path slope",
      "Connections to existing paving",
    ],
    image: "/images/vubastone/vubastone-walkway-wood-inlay.webp",
    alt: "Light stone path with a dark crosswise border",
  },
  {
    icon: <Waves className="h-5 w-5" />,
    title: "Pool Surrounds",
    tagline: "Stone at the pool edge",
    tags: ["Pool Decks", "Spas", "Water Features"],
    description:
      "The stone border needs to meet the coping and drains at the right height. Plan around those edges before choosing the blend. Wet surfaces can still be slippery.",
    benefits: [
      "Coping height",
      "Drain access",
      "Sun and shade",
      "Border color",
    ],
    image: "/images/vubastone/vubastone-pool-deck-closeup.webp",
    alt: "Mixed stone colors beside a pool",
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
            Where you plan to walk, park or turn a vehicle makes a difference to the base and the depth of stone.
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
                              alt={app.alt}
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

                            {/* Finish details */}
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
