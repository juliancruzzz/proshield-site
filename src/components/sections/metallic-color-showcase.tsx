"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface Pigment {
  name: string
  code: string
  color: string
  description: string
}

const metallicPigments: Pigment[] = [
  { name: "Pearl White", code: "MP-101", color: "#E8E4DF", description: "Clean pearl finish with soft iridescent shimmer" },
  { name: "Champagne", code: "MP-102", color: "#D4B896", description: "Warm golden champagne with subtle sparkle" },
  { name: "Silver", code: "MP-103", color: "#B8BFC6", description: "Classic brushed silver with cool metallic depth" },
  { name: "Titanium", code: "MP-104", color: "#8A8D91", description: "Industrial titanium gray with fine metallic grain" },
  { name: "Gunmetal", code: "MP-105", color: "#52565A", description: "Deep gunmetal with dark reflective undertones" },
  { name: "Onyx", code: "MP-106", color: "#2C2E30", description: "Rich black with metallic flake highlights" },
  { name: "Copper", code: "MP-107", color: "#C07A4E", description: "Warm copper with red-bronze highlights" },
  { name: "Bronze", code: "MP-108", color: "#8B6B3D", description: "Classic bronze with deep amber undertones" },
  { name: "Gold", code: "MP-109", color: "#C5A55A", description: "Rich gold with warm reflective shimmer" },
  { name: "Ocean Blue", code: "MP-110", color: "#4A6E8B", description: "Deep ocean blue with metallic pearlescence" },
  { name: "Emerald", code: "MP-111", color: "#3D6B5E", description: "Dark emerald with subtle green metallic shift" },
  { name: "Espresso", code: "MP-112", color: "#5C4033", description: "Deep espresso brown with warm metallic depth" },
  { name: "Rose Gold", code: "MP-113", color: "#C4907A", description: "Soft rose gold with pink-copper finish" },
  { name: "Midnight Blue", code: "MP-114", color: "#2A3A5C", description: "Deep navy with blue metallic shimmer" },
]

export function MetallicColorShowcase() {
  const [selected, setSelected] = useState<Pigment | null>(null)

  return (
    <section className="section-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            Torginol Metallic Pigments
          </span>
          <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-gray-900 tracking-tight">
            Choose Your Palette
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-500 text-base sm:text-lg leading-relaxed">
            Premium metallic pigments from Torginol. Each pigment creates a unique flow when applied — colors can be blended for custom effects.
          </p>
        </div>

        {/* Selected pigment detail panel — matches flake blend format */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden mb-8"
            >
              <div className="max-w-2xl mx-auto rounded-2xl bg-white border border-gray-200 shadow-lg overflow-hidden">
                <div className="flex flex-col sm:flex-row">
                  {/* Large color swatch preview */}
                  <div
                    className="sm:w-[240px] h-[200px] sm:h-auto shrink-0"
                    style={{
                      background: `
                        radial-gradient(ellipse at 30% 30%, rgba(255,255,255,0.25) 0%, transparent 50%),
                        radial-gradient(ellipse at 70% 70%, rgba(0,0,0,0.15) 0%, transparent 50%),
                        linear-gradient(145deg, ${selected.color}ee, ${selected.color}, ${selected.color}cc)
                      `,
                    }}
                  />
                  {/* Pigment info */}
                  <div className="p-6 sm:p-8 flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-heading font-bold text-xl text-gray-900">
                        {selected.name}
                      </h3>
                      <button
                        onClick={() => setSelected(null)}
                        className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer"
                        aria-label="Close"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <span className="text-sm text-accent font-medium">{selected.code}</span>
                    <p className="mt-3 text-gray-500 text-sm leading-relaxed">{selected.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pigment swatch grid — 5 per row, flake-matched sizing */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 sm:gap-4 max-w-3xl mx-auto">
          {metallicPigments.map((pigment, i) => {
            const isSelected = selected?.code === pigment.code
            return (
              <button key={pigment.code} className="group text-left cursor-pointer" onClick={() => setSelected(isSelected ? null : pigment)}>
                <div
                  className={`aspect-square rounded-xl overflow-hidden border-2 bg-white shadow-sm transition-all duration-200 ${
                    isSelected
                      ? "border-accent shadow-lg shadow-accent/10 scale-[1.05]"
                      : "border-gray-200 group-hover:border-accent/30 group-hover:shadow-md group-hover:scale-[1.03]"
                  }`}
                  style={{
                    background: `
                      radial-gradient(ellipse at 30% 30%, rgba(255,255,255,0.2) 0%, transparent 50%),
                      radial-gradient(ellipse at 70% 70%, rgba(0,0,0,0.1) 0%, transparent 50%),
                      linear-gradient(145deg, ${pigment.color}ee, ${pigment.color}, ${pigment.color}cc)
                    `,
                  }}
                />
                <div className="mt-2 text-center">
                  <p className={`text-sm font-medium transition-colors duration-150 ${
                    isSelected ? "text-accent" : "text-gray-700 group-hover:text-accent"
                  }`}>
                    {pigment.name}
                  </p>
                </div>
              </button>
            )
          })}
        </div>

      </div>
    </section>
  )
}
