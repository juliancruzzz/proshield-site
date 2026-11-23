"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface Pigment {
  name: string
  color: string
  description: string
}

const metallicPigments: Pigment[] = [
  { name: "Pearl White", color: "#E8E4DF", description: "Pearl white" },
  { name: "Champagne", color: "#D4B896", description: "Warm beige with a gold tint" },
  { name: "Silver", color: "#B8BFC6", description: "Cool silver gray" },
  { name: "Titanium", color: "#8A8D91", description: "Medium gray" },
  { name: "Gunmetal", color: "#52565A", description: "Dark charcoal gray" },
  { name: "Onyx", color: "#2C2E30", description: "Near black" },
  { name: "Copper", color: "#C07A4E", description: "Reddish copper" },
  { name: "Bronze", color: "#8B6B3D", description: "Warm bronze brown" },
  { name: "Gold", color: "#C5A55A", description: "Muted gold" },
  { name: "Ocean Blue", color: "#4A6E8B", description: "Gray blue" },
  { name: "Emerald", color: "#3D6B5E", description: "Dark green" },
  { name: "Espresso", color: "#5C4033", description: "Dark brown" },
  { name: "Rose Gold", color: "#C4907A", description: "Muted pink with copper tones" },
  { name: "Midnight Blue", color: "#2A3A5C", description: "Deep navy blue" },
]

export function MetallicColorShowcase() {
  const [selected, setSelected] = useState<Pigment | null>(null)

  return (
    <section className="section-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            Color ideas
          </span>
          <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-gray-900 tracking-tight">
            Metallic Color Options
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-500 text-base sm:text-lg leading-relaxed">
            These on-screen colors illustrate possible combinations. The finished floor also picks up light and reflections in the room.
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
            const isSelected = selected?.name === pigment.name
            return (
              <button key={pigment.name} className="group text-left cursor-pointer" onClick={() => setSelected(isSelected ? null : pigment)}>
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
