"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Grid3X3, Layers, Trees } from "lucide-react"

const layers = [
  {
    number: "01",
    icon: Grid3X3,
    title: "Vuba SRM Mesh",
    tag: "Foundation",
    description:
      "Laid over the compacted sub-base with 6-inch overlapping joints. Provides structural integrity and prevents lateral movement across the entire area.",
    color: "gray",
  },
  {
    number: "02",
    icon: Layers,
    title: "GrassMac Resin Base",
    tag: "Permeable Core",
    description:
      "Mixed on-site: recycled aggregate and SBR rubber bound with VubaMac resin. Applied at 15 mm for pedestrian areas, 30 mm for vehicle areas. Fully permeable — liquid drains straight through.",
    color: "accent",
  },
  {
    number: "03",
    icon: Trees,
    title: "Premium Artificial Turf",
    tag: "Surface",
    description:
      "Laid on the cured GrassMac base within hours. Can be lifted, washed, and re-laid for maintenance — the base stays perfectly intact underneath.",
    color: "green",
  },
]

const colorMap: Record<string, { ring: string; bg: string; icon: string; num: string; tagBg: string; tagText: string; activeBorder: string }> = {
  gray: {
    ring: "ring-gray-200",
    bg: "bg-gray-50",
    icon: "text-gray-500",
    num: "text-gray-300",
    tagBg: "bg-gray-100",
    tagText: "text-gray-600",
    activeBorder: "border-gray-300",
  },
  accent: {
    ring: "ring-accent/20",
    bg: "bg-accent/5",
    icon: "text-accent",
    num: "text-accent/20",
    tagBg: "bg-accent/10",
    tagText: "text-accent",
    activeBorder: "border-accent/40",
  },
  green: {
    ring: "ring-green-200",
    bg: "bg-green-50",
    icon: "text-green-600",
    num: "text-green-200",
    tagBg: "bg-green-100",
    tagText: "text-green-700",
    activeBorder: "border-green-300",
  },
}

export function GrassMacSystem() {
  const [active, setActive] = useState(0)

  const current = layers[active]
  const cm = colorMap[current.color]

  return (
    <section className="section-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            The System
          </span>
          <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
            3-Layer Engineered Build
          </h2>
          <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
            Each layer works together to create a permeable, stable, shock-absorbing base
            that outlasts traditional sand and crusher-run installations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Diagram */}
          <div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/diagrams/grassmac-buildup.webp"
                alt="GrassMac 3-layer system diagram showing turf, resin-bound base, and structural mesh"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Interactive layer selector */}
          <div>
            {/* Layer tabs */}
            <div className="flex gap-2 mb-6">
              {layers.map((layer, i) => {
                const Icon = layer.icon
                const c = colorMap[layer.color]
                const isActive = active === i
                return (
                  <button
                    key={layer.number}
                    onClick={() => setActive(i)}
                    className={`flex-1 flex flex-col items-center gap-2 rounded-xl px-3 py-4 transition-all cursor-pointer ${
                      isActive
                        ? `${c.bg} ring-2 ${c.ring} shadow-sm`
                        : "bg-gray-50 hover:bg-gray-100"
                    }`}
                  >
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                      isActive ? `bg-white shadow-sm ${c.icon}` : "bg-white text-gray-400"
                    }`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className={`text-xs font-semibold text-center leading-tight ${
                      isActive ? "text-gray-900" : "text-gray-400"
                    }`}>
                      {layer.title.split(" ").slice(-2).join(" ")}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Active layer detail card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className={`rounded-2xl border-2 ${cm.activeBorder} ${cm.bg} p-6 sm:p-8`}
              >
                {/* Large step number */}
                <span className={`font-heading font-bold text-5xl ${cm.num}`}>
                  {current.number}
                </span>

                <div className="mt-2 flex items-center gap-3 flex-wrap">
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-gray-900">
                    {current.title}
                  </h3>
                  <span className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${cm.tagBg} ${cm.tagText}`}>
                    {current.tag}
                  </span>
                </div>

                <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
                  {current.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Progress dots */}
            <div className="flex justify-center gap-2 mt-5">
              {layers.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    active === i
                      ? "w-8 bg-teal"
                      : "w-2 bg-gray-200 hover:bg-gray-300"
                  }`}
                  aria-label={`View layer ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
