"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface StoneBlend {
  name: string
  image: string
  tones: string
}

const blends: StoneBlend[] = [
  { name: "Alaskan Tundra Blend", image: "/images/vubastone/colors/alaskan-tundra-blend.jpg", tones: "Cool gray and white marble with icy silver undertones" },
  { name: "Arc de Triomphe", image: "/images/vubastone/colors/arc-de-triomphe.jpg", tones: "Warm cream and gold with soft brown accents" },
  { name: "Big Sur", image: "/images/vubastone/colors/big-sur.jpg", tones: "Deep ocean blue with gray and charcoal tones" },
  { name: "Breckenridge", image: "/images/vubastone/colors/breckenridge.jpg", tones: "Earthy brown and tan with warm copper highlights" },
  { name: "Cano Cristales", image: "/images/vubastone/colors/cano-cristales.jpg", tones: "Vibrant multi-color blend inspired by Colombia's river of five colors" },
  { name: "China Town", image: "/images/vubastone/colors/china-town.jpg", tones: "Rich terracotta red with warm earth accents" },
  { name: "Coral Springs", image: "/images/vubastone/colors/coral-springs.png", tones: "Soft white, grey, and warm brown — coastal-inspired finish" },
  { name: "Ellis Island", image: "/images/vubastone/colors/ellis-island.jpg", tones: "Classic gray blend with subtle warm undertones" },
  { name: "Idaho Falls", image: "/images/vubastone/colors/idaho-falls.png", tones: "Natural river stone with gray and tan variation" },
  { name: "Ipanema Beach", image: "/images/vubastone/colors/ipanema-beach.jpg", tones: "Warm sand and golden tones with tropical character" },
  { name: "Juneau", image: "/images/vubastone/colors/juneau.png", tones: "Cool slate gray with blue-green mineral undertones" },
  { name: "Kaimu Beach", image: "/images/vubastone/colors/kaimu-beach.png", tones: "Dark volcanic stone with charcoal and black tones" },
  { name: "Key West", image: "/images/vubastone/colors/key-west.jpg", tones: "Warm coral and cream with sunset-inspired tones" },
  { name: "Lake Tahoe", image: "/images/vubastone/colors/lake-tahoe.jpg", tones: "Clear blue-gray with cool alpine undertones" },
  { name: "Manhattan", image: "/images/vubastone/colors/manhattan.jpg", tones: "Sophisticated gray blend with urban character" },
  { name: "Milano Marble", image: "/images/vubastone/colors/milano-marble.jpg", tones: "Classic white and silver marble with refined elegance" },
  { name: "Monticello", image: "/images/vubastone/colors/monticello.jpg", tones: "Warm heritage cream with soft gray accents" },
  { name: "Monument Valley", image: "/images/vubastone/colors/monument-valley.jpg", tones: "Red and coshel aggregates — rugged desert landscape tones" },
  { name: "Nevada", image: "/images/vubastone/colors/nevada.png", tones: "Desert sand with warm neutral tones — local favorite" },
  { name: "Palazzo", image: "/images/vubastone/colors/palazzo.jpg", tones: "Warm Italian stone with golden and beige marble" },
  { name: "Pont du Gard", image: "/images/vubastone/colors/pont-du-gard.jpg", tones: "French limestone tones — warm honey and cream" },
]

export function VubaStoneColorShowcase() {
  const [selectedBlend, setSelectedBlend] = useState<StoneBlend | null>(null)

  return (
    <section className="section-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            Stone Palette
          </span>
          <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-gray-900 tracking-tight">
            Natural Spanish Marble Blends
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-500 text-base sm:text-lg leading-relaxed">
            24+ crushed marble blends — from warm desert tones to cool coastal grays. Click any swatch to see details.
          </p>
        </div>

        {/* Blend detail panel — shows when a swatch is selected */}
        <AnimatePresence>
          {selectedBlend && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden mb-8"
            >
              <div className="max-w-2xl mx-auto rounded-2xl bg-white border border-gray-200 shadow-lg overflow-hidden">
                <div className="flex flex-col sm:flex-row">
                  {/* Large swatch preview */}
                  <div className="sm:w-[240px] h-[200px] sm:h-auto shrink-0 overflow-hidden">
                    <img
                      src={selectedBlend.image}
                      alt={`${selectedBlend.name} stone blend`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {/* Blend info */}
                  <div className="p-6 sm:p-8 flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-heading font-bold text-xl text-gray-900">
                        {selectedBlend.name}
                      </h3>
                      <button
                        onClick={() => setSelectedBlend(null)}
                        className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer"
                        aria-label="Close"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <span className="text-sm text-accent font-medium">Natural Spanish Marble</span>
                    <p className="mt-3 text-gray-500 text-sm leading-relaxed">{selectedBlend.tones}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Blend grid */}
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-2.5 sm:gap-3 max-w-4xl mx-auto">
          {blends.map((blend, i) => {
            const isSelected = selectedBlend?.name === blend.name
            return (
              <button key={blend.name} className="group text-left cursor-pointer" onClick={() => setSelectedBlend(isSelected ? null : blend)}>
                <div className={`aspect-square rounded-xl overflow-hidden border-2 bg-white shadow-sm transition-all duration-200 ${
                  isSelected
                    ? "border-accent shadow-lg shadow-accent/10 scale-[1.05]"
                    : "border-gray-200 group-hover:border-accent/30 group-hover:shadow-md group-hover:scale-[1.03]"
                }`}>
                  <img
                    src={blend.image}
                    alt={`${blend.name} stone blend`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="mt-2 text-center">
                  <p className={`text-sm font-medium transition-colors duration-150 leading-tight ${
                    isSelected ? "text-accent" : "text-gray-700 group-hover:text-accent"
                  }`}>
                    {blend.name}
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
