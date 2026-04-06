"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const aggregateClasses = [
  {
    cls: "A",
    name: "Cream Finish",
    description:
      "Minimal surface removal. Shows original cement paste with very little aggregate visible. Clean, uniform, contemporary look.",
    composition: "85–95% cement fines, 5–15% fine aggregate",
  },
  {
    cls: "B",
    name: "Salt & Pepper",
    description:
      "Moderate grinding reveals fine aggregate speckle. The most popular commercial choice — subtle visual texture without heavy exposure.",
    composition: "85–95% fine aggregate, 5–15% blend",
  },
  {
    cls: "C",
    name: "Medium Aggregate",
    description:
      "Deeper cut exposing small to medium stones. Creates a terrazzo-like appearance with more visual depth and natural character.",
    composition: "80–90% coarse aggregate, 10–20% blend",
  },
  {
    cls: "D",
    name: "Full Aggregate",
    description:
      "Maximum exposure revealing large stones up to \u00BC\u2033. The most dramatic look — each floor becomes completely unique.",
    composition: "Heavy coarse aggregate, ~\u00BC\u2033 cut depth",
  },
]

export function PolishingAggregate() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="section-gray py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            Aggregate Exposure
          </span>
          <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
            Choose Your <span className="text-accent">Stone Exposure</span>
          </h2>
          <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
            Grinding depth determines how much natural aggregate is revealed. From a clean cream surface to full stone exposure — each class creates a distinct look.
          </p>
        </div>

        <div className="space-y-3">
          {aggregateClasses.map((agg, i) => {
            const isOpen = openIndex === i
            return (
              <div key={agg.cls}>
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
                      isOpen ? "bg-accent text-white" : "bg-accent/10 text-accent"
                    }`}
                  >
                    <span className="font-heading font-bold text-lg sm:text-xl">
                      {agg.cls}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-heading font-semibold text-base sm:text-lg text-gray-900">
                      Class {agg.cls}
                    </h4>
                    <span className="text-xs font-semibold tracking-wider uppercase text-teal">
                      {agg.name}
                    </span>
                  </div>
                  <ChevronDown
                    className={`shrink-0 h-5 w-5 text-gray-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
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
                          {agg.description}
                        </p>
                        <div className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-gray-600 bg-gray-50 rounded-lg px-3 py-1.5">
                          <span className="text-gray-500">Composition:</span> {agg.composition}
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
