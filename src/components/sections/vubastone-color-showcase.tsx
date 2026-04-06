"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronDown } from "lucide-react"

interface StoneBlend {
  name: string
  image: string
  tones: string
}

const blends: StoneBlend[] = [
  { name: "Alaskan Tundra Blend", image: "/images/vubastone/colors/alaskan-tundra-blend.webp", tones: "Cool gray and white marble with icy silver undertones" },
  { name: "Arc de Triomphe", image: "/images/vubastone/colors/arc-de-triomphe.webp", tones: "Warm cream and gold with soft brown accents" },
  { name: "Big Sur", image: "/images/vubastone/colors/big-sur.webp", tones: "Deep ocean blue with gray and charcoal tones" },
  { name: "Breckenridge", image: "/images/vubastone/colors/breckenridge.webp", tones: "Earthy brown and tan with warm copper highlights" },
  { name: "Cano Cristales", image: "/images/vubastone/colors/cano-cristales.webp", tones: "Vibrant multi-color blend inspired by Colombia's river of five colors" },
  { name: "China Town", image: "/images/vubastone/colors/china-town.webp", tones: "Rich terracotta red with warm earth accents" },
  { name: "Coral Springs", image: "/images/vubastone/colors/coral-springs.webp", tones: "Soft white, grey, and warm brown — coastal-inspired finish" },
  { name: "Ellis Island", image: "/images/vubastone/colors/ellis-island.webp", tones: "Classic gray blend with subtle warm undertones" },
  { name: "Idaho Falls", image: "/images/vubastone/colors/idaho-falls.webp", tones: "Natural river stone with gray and tan variation" },
  { name: "Ipanema Beach", image: "/images/vubastone/colors/ipanema-beach.webp", tones: "Warm sand and golden tones with tropical character" },
  { name: "Juneau", image: "/images/vubastone/colors/juneau.webp", tones: "Cool slate gray with blue-green mineral undertones" },
  { name: "Kaimu Beach", image: "/images/vubastone/colors/kaimu-beach.webp", tones: "Dark volcanic stone with charcoal and black tones" },
  { name: "Key West", image: "/images/vubastone/colors/key-west.webp", tones: "Warm coral and cream with sunset-inspired tones" },
  { name: "Lake Tahoe", image: "/images/vubastone/colors/lake-tahoe.webp", tones: "Clear blue-gray with cool alpine undertones" },
  { name: "Manhattan", image: "/images/vubastone/colors/manhattan.webp", tones: "Sophisticated gray blend with urban character" },
  { name: "Milano Marble", image: "/images/vubastone/colors/milano-marble.webp", tones: "Classic white and silver marble with refined elegance" },
  { name: "Monticello", image: "/images/vubastone/colors/monticello.webp", tones: "Warm heritage cream with soft gray accents" },
  { name: "Monument Valley", image: "/images/vubastone/colors/monument-valley.webp", tones: "Red and coshel aggregates — rugged desert landscape tones" },
  { name: "Nevada", image: "/images/vubastone/colors/nevada.webp", tones: "Desert sand with warm neutral tones — local favorite" },
  { name: "Palazzo", image: "/images/vubastone/colors/palazzo.webp", tones: "Warm Italian stone with golden and beige marble" },
  { name: "Pont du Gard", image: "/images/vubastone/colors/pont-du-gard.webp", tones: "French limestone tones — warm honey and cream" },
]

const INITIAL_VISIBLE = 12

export function VubaStoneColorShowcase() {
  const [selectedBlend, setSelectedBlend] = useState<StoneBlend | null>(null)
  const [showAll, setShowAll] = useState(false)

  const visibleBlends = showAll ? blends : blends.slice(0, INITIAL_VISIBLE)
  const hasMore = blends.length > INITIAL_VISIBLE

  return (
    <section className="section-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            Stone Palette
          </span>
          <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-gray-900 tracking-tight">
            Natural Spanish Marble Blends
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-500 text-base sm:text-lg leading-relaxed">
            21 crushed marble blends — from warm desert tones to cool coastal grays. Tap any swatch to see details.
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
                        className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer"
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

        {/* Blend grid — 3 cols mobile, 4 sm, 5 md, 7 lg */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {visibleBlends.map((blend) => {
            const isSelected = selectedBlend?.name === blend.name
            return (
              <button
                key={blend.name}
                className="group text-left cursor-pointer"
                onClick={() => setSelectedBlend(isSelected ? null : blend)}
              >
                <div
                  className={`aspect-square rounded-xl overflow-hidden border-2 bg-white shadow-sm transition-all duration-200 ${
                    isSelected
                      ? "border-accent shadow-lg shadow-accent/10 scale-[1.05]"
                      : "border-gray-200 group-hover:border-accent/30 group-hover:shadow-md group-hover:scale-[1.03]"
                  }`}
                >
                  <img
                    src={blend.image}
                    alt={`${blend.name} stone blend`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="mt-2 text-center">
                  <p
                    className={`text-xs sm:text-sm font-medium transition-colors duration-150 leading-tight ${
                      isSelected ? "text-accent" : "text-gray-700 group-hover:text-accent"
                    }`}
                  >
                    {blend.name}
                  </p>
                </div>
              </button>
            )
          })}
        </div>

        {/* Show more / less toggle */}
        {hasMore && (
          <div className="text-center mt-6 sm:mt-8">
            <button
              onClick={() => { setShowAll(!showAll); if (showAll) setSelectedBlend(null) }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-accent transition-colors cursor-pointer"
            >
              {showAll ? "Show fewer blends" : `Show all ${blends.length} blends`}
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
