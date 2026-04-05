"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const polishingLevels = [
  { level: "1", name: "Ground / Flat", grit: "< 100 grit", summary: "Hazy, low-sheen. Ideal for industrial and utility areas.", detail: "Minimal diamond progression — the slab is flattened and densified but not refined further. Functional surface with low reflectivity. Best for back-of-house, warehouses, and utility rooms where performance matters more than appearance." },
  { level: "2", name: "Honed / Satin", grit: "100–400 grit", summary: "Subtle satin sheen. The workhorse for offices, warehouses, restaurants.", detail: "Medium diamond progression produces a smooth, low-luster finish. Good light reflectivity without a mirror effect. The most popular commercial choice — clean appearance with easy maintenance. Ideal for offices, restaurants, and retail." },
  { level: "3", name: "Semi-Polished", grit: "400–800 grit", summary: "Clear reflections visible across the room. Balances aesthetics with practicality.", detail: "Extended diamond progression creates noticeable reflections and depth. Objects reflect clearly from several feet away. A premium look that still hides minor imperfections. Great for lobbies, showrooms, and upscale restaurants." },
  { level: "4", name: "High Polish / Mirror", grit: "800–3,000 grit", summary: "Maximum reflectivity — the floor looks wet. Stunning in showrooms and retail.", detail: "Full progressive polish through the finest diamond grits. The surface achieves near-mirror clarity — lights, ceilings, and objects reflect sharply. The most dramatic finish, often paired with decorative scoring or dye. Best for high-end retail, car showrooms, and luxury residential." },
]

const aggregateClasses = [
  { cls: "A", name: "Cream Finish", summary: "Minimal removal. Shows cement paste with very little aggregate.", detail: "The lightest grinding pass removes only the surface cream. The result is a smooth, uniform appearance with the original cement paste visible. Minimal stone exposure gives a clean, contemporary look. Works well with dyes and stains." },
  { cls: "B", name: "Salt & Pepper", summary: "Moderate grind reveals fine aggregate speckle. Most popular commercial choice.", detail: "A slightly deeper cut exposes the fine aggregate just below the surface, creating a subtle speckled texture. The most requested exposure class — provides visual interest without heavy stone patterns. Hides minor slab imperfections well." },
  { cls: "C", name: "Medium Aggregate", summary: "Deeper cut exposing small to medium stones. Terrazzo-like appearance.", detail: "Grinding depth reveals small to medium stones throughout the slab. Creates a terrazzo-inspired look with natural character and depth. Each section of floor shows unique stone patterns. Popular for lobbies, restaurants, and feature areas." },
  { cls: "D", name: "Full Aggregate", summary: "Maximum exposure revealing large stones up to \u00BC\u2033. Every floor is unique.", detail: "The deepest grinding pass exposes large aggregate stones up to \u00BC\u2033 in diameter. The most dramatic and visually striking option — every square foot is different. Requires a slab with quality aggregate. Stunning in large commercial spaces and feature installations." },
]

export function PolishingFinishOptions() {
  const [activeTab, setActiveTab] = useState<"levels" | "aggregate">("levels")
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const items = activeTab === "levels" ? polishingLevels : aggregateClasses

  return (
    <section className="section-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            Customize Your Floor
          </span>
          <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
            Finish Level & <span className="text-accent">Stone Exposure</span>
          </h2>
          <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
            Two independent choices define your floor: how reflective (Level 1–4) and how much stone is revealed (Class A–D).
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex rounded-full bg-gray-100 p-1">
            <button
              onClick={() => { setActiveTab("levels"); setOpenIndex(null) }}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                activeTab === "levels"
                  ? "bg-accent text-white shadow-lg shadow-accent/20"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Finish Levels 1–4
            </button>
            <button
              onClick={() => { setActiveTab("aggregate"); setOpenIndex(null) }}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                activeTab === "aggregate"
                  ? "bg-accent text-white shadow-lg shadow-accent/20"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Aggregate A–D
            </button>
          </div>
        </div>

        {/* Items */}
        <div className="space-y-3">
          {items.map((item, i) => {
            const isOpen = openIndex === i
            const label = activeTab === "levels"
              ? `Level ${(item as typeof polishingLevels[0]).level}`
              : `Class ${(item as typeof aggregateClasses[0]).cls}`
            const badge = activeTab === "levels"
              ? (item as typeof polishingLevels[0]).level
              : (item as typeof aggregateClasses[0]).cls
            const subtitle = activeTab === "levels"
              ? (item as typeof polishingLevels[0]).name
              : (item as typeof aggregateClasses[0]).name
            const rightDetail = activeTab === "levels"
              ? (item as typeof polishingLevels[0]).grit
              : undefined

            return (
              <div key={`${activeTab}-${i}`}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={`w-full rounded-xl border bg-white px-5 py-4 sm:px-6 sm:py-5 text-left transition-all duration-300 ${
                    isOpen
                      ? "border-accent/40 shadow-lg shadow-accent/5 rounded-b-none"
                      : "border-gray-200 hover:border-accent/20 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`shrink-0 h-11 w-11 sm:h-12 sm:w-12 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        isOpen
                          ? "bg-accent text-white"
                          : activeTab === "levels"
                            ? "bg-gray-100 text-gray-700"
                            : "bg-accent/10 text-accent"
                      }`}
                    >
                      <span className="font-heading font-bold text-lg sm:text-xl">{badge}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-heading font-semibold text-base sm:text-lg text-gray-900">
                        {label}
                      </h4>
                      <span className="text-xs font-semibold tracking-wider uppercase text-accent">
                        {subtitle}
                      </span>
                    </div>
                    <div className="shrink-0 flex items-center gap-3">
                      {rightDetail && (
                        <span className="hidden sm:inline text-xs font-medium text-gray-400 bg-gray-50 rounded-full px-3 py-1">
                          {rightDetail}
                        </span>
                      )}
                      <ChevronDown
                        className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>
                  <p className="mt-2 ml-[3.75rem] sm:ml-[4rem] text-sm text-gray-500 leading-relaxed">
                    {item.summary}
                  </p>
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
                      <div className="px-5 sm:px-6 pt-3 pb-5 bg-white border-x border-b border-accent/20 rounded-b-xl">
                        <div className="ml-[3.75rem] sm:ml-[4rem]">
                          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                            {item.detail}
                          </p>
                          {rightDetail && (
                            <div className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-gray-600 bg-gray-50 rounded-lg px-3 py-1.5 sm:hidden">
                              <span className="text-gray-400">Grit:</span> {rightDetail}
                            </div>
                          )}
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
