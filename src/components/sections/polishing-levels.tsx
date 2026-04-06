"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const polishingLevels = [
  {
    level: "1",
    name: "Ground / Flat",
    grit: "< 100 grit",
    description:
      "Hazy, low-sheen finish. Functional and utilitarian — ideal for industrial spaces and utility areas.",
  },
  {
    level: "2",
    name: "Honed / Satin",
    grit: "100–400 grit",
    description:
      "Subtle satin sheen with moderate reflectivity. The workhorse finish for offices, warehouses, and restaurants.",
  },
  {
    level: "3",
    name: "Semi-Polished",
    grit: "400–800 grit",
    description:
      "Clear reflective quality visible from across the room. A popular choice that balances aesthetics with practical maintenance.",
  },
  {
    level: "4",
    name: "High Polish / Mirror",
    grit: "800–3,000 grit",
    description:
      "Maximum clarity and reflectivity — the floor looks wet. Stunning in showrooms, retail, and upscale commercial spaces.",
  },
]

export function PolishingLevels() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="section-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            Finish Levels
          </span>
          <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
            Four Levels of <span className="text-accent">Refinement</span>
          </h2>
          <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
            From a utilitarian matte to a mirror-like high gloss. Each level is defined by the diamond polishing progression.
          </p>
        </div>

        <div className="space-y-3">
          {polishingLevels.map((lvl, i) => {
            const isOpen = openIndex === i
            return (
              <div key={lvl.level}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={`w-full rounded-xl border bg-white px-5 py-4 sm:px-6 sm:py-5 flex items-center gap-4 text-left transition-all duration-300 ${
                    isOpen
                      ? "border-accent/40 shadow-lg shadow-accent/5"
                      : "border-gray-200 hover:border-accent/20 hover:shadow-md"
                  }`}
                >
                  <div
                    className={`shrink-0 h-11 w-11 sm:h-12 sm:w-12 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      isOpen ? "bg-accent text-white" : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    <span className="font-heading font-bold text-lg sm:text-xl">
                      {lvl.level}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-heading font-semibold text-base sm:text-lg text-gray-900">
                      Level {lvl.level}
                    </h4>
                    <span className="text-xs font-semibold tracking-wider uppercase text-accent">
                      {lvl.name}
                    </span>
                  </div>
                  <div className="shrink-0 flex items-center gap-3">
                    <span className="hidden sm:inline text-xs font-medium text-gray-500 bg-gray-50 rounded-full px-3 py-1">
                      {lvl.grit}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pt-3 pb-5 ml-[3.75rem] sm:ml-[4rem]">
                        <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                          {lvl.description}
                        </p>
                        <div className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-gray-600 bg-gray-50 rounded-lg px-3 py-1.5 sm:hidden">
                          <span className="text-gray-500">Grit:</span> {lvl.grit}
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
