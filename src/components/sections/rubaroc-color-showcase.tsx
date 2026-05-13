"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronDown } from "lucide-react"

interface RubarocColor {
  name: string
  slug: string
  image: string
  tones: string
  recipe?: string
}

const baseColors: RubarocColor[] = [
  { name: "Eggshell", slug: "eggshell", image: "/images/rubaroc/base/eggshell.webp", tones: "Warm off-white with creamy undertones" },
  { name: "Beige", slug: "beige", image: "/images/rubaroc/base/beige.webp", tones: "Classic warm tan — the most popular neutral" },
  { name: "Brown", slug: "brown", image: "/images/rubaroc/base/brown.webp", tones: "Rich chocolate brown" },
  { name: "Red", slug: "red", image: "/images/rubaroc/base/red.webp", tones: "Deep brick red — bold accent color" },
  { name: "Light Grey", slug: "light-grey", image: "/images/rubaroc/base/light-grey.webp", tones: "Soft neutral silver-gray" },
  { name: "Medium Grey", slug: "medium-grey", image: "/images/rubaroc/base/medium-grey.webp", tones: "Mid-tone blue-gray" },
  { name: "Dark Grey", slug: "dark-grey", image: "/images/rubaroc/base/dark-grey.webp", tones: "Charcoal with cool undertones" },
  { name: "Black", slug: "black", image: "/images/rubaroc/base/black.webp", tones: "Deep matte black" },
  { name: "Light Blue", slug: "light-blue", image: "/images/rubaroc/base/light-blue.webp", tones: "Sky blue — great for pool-adjacent areas" },
  { name: "Medium Blue", slug: "medium-blue", image: "/images/rubaroc/base/medium-blue.webp", tones: "Vivid cobalt blue" },
  { name: "Dark Blue", slug: "dark-blue", image: "/images/rubaroc/base/dark-blue.webp", tones: "Deep navy" },
  { name: "Teal", slug: "teal", image: "/images/rubaroc/base/teal.webp", tones: "Soft aqua-teal — coastal feel" },
  { name: "Light Green", slug: "light-green", image: "/images/rubaroc/base/light-green.webp", tones: "Sage green" },
  { name: "Dark Green", slug: "dark-green", image: "/images/rubaroc/base/dark-green.webp", tones: "Forest green" },
  { name: "Yellow", slug: "yellow", image: "/images/rubaroc/base/yellow.webp", tones: "Bright citrus yellow" },
  { name: "Orange", slug: "orange", image: "/images/rubaroc/base/orange.webp", tones: "Vibrant tangerine orange" },
]

const blendColors: RubarocColor[] = [
  { name: "Platinum", slug: "platinum", image: "/images/rubaroc/blends/platinum.webp", tones: "Light, airy silver — clean modern look", recipe: "50% Light Grey · 50% Eggshell" },
  { name: "Nickel", slug: "nickel", image: "/images/rubaroc/blends/nickel.webp", tones: "Balanced three-tone gray with depth", recipe: "33% Light Grey · 33% Eggshell · 33% Black" },
  { name: "Slate", slug: "slate", image: "/images/rubaroc/blends/slate.webp", tones: "Cool dark gray — dramatic and refined", recipe: "50% Black · 50% Light Grey" },
  { name: "Brownstone", slug: "brownstone", image: "/images/rubaroc/blends/brownstone.webp", tones: "Warm multi-tone natural stone appearance", recipe: "33% Brown · 33% Eggshell · 33% Light Grey" },
  { name: "Sandstone", slug: "sandstone", image: "/images/rubaroc/blends/sandstone.webp", tones: "Desert earth blend — classic Las Vegas choice", recipe: "33% Light Grey · 33% Beige · 33% Brown" },
  { name: "Limestone", slug: "limestone", image: "/images/rubaroc/blends/limestone.webp", tones: "Warm cream and tan — soft natural palette", recipe: "33% Eggshell · 33% Beige · 33% Brown" },
  { name: "Sandalwood", slug: "sandalwood", image: "/images/rubaroc/blends/sandalwood.webp", tones: "Warm beige-dominant with subtle brown accent", recipe: "75% Beige · 25% Brown" },
  { name: "Mocha", slug: "mocha", image: "/images/rubaroc/blends/mocha.webp", tones: "Dark rich coffee blend — sophisticated accent", recipe: "33% Black · 33% Brown · 33% Beige" },
  { name: "Terracotta", slug: "terracotta", image: "/images/rubaroc/blends/terracotta.webp", tones: "Warm copper-red — Southwestern character", recipe: "50% Red · 50% Brown" },
  { name: "Santa Fe", slug: "santa-fe", image: "/images/rubaroc/blends/santa-fe.webp", tones: "Adobe red-brown with cream — desert sunset", recipe: "33% Red · 33% Brown · 33% Beige" },
  { name: "Caspian", slug: "caspian", image: "/images/rubaroc/blends/caspian.webp", tones: "Cool blue-gray — coastal pool deck favorite", recipe: "33% Light Blue · 33% Light Grey · 33% Eggshell" },
  { name: "Lily Pad", slug: "lily-pad", image: "/images/rubaroc/blends/lily-pad.webp", tones: "Soft green and cream — garden-inspired", recipe: "50% Light Green · 50% Beige" },
]

const collections = [
  { name: "Base Colors", description: "16 individual EPDM rubber granule colors — mix and match for custom blends.", colors: baseColors },
  { name: "Signature Blends", description: "12 pre-mixed recipes — our most requested combinations, ready to pour.", colors: blendColors },
]

export function RubarocColorShowcase() {
  const [activeTab, setActiveTab] = useState(0)
  const [selected, setSelected] = useState<RubarocColor | null>(null)
  const [showAll, setShowAll] = useState(false)

  const current = collections[activeTab]
  const INITIAL = 12
  const visible = showAll ? current.colors : current.colors.slice(0, INITIAL)
  const hasMore = current.colors.length > INITIAL

  return (
    <section className="section-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            Rubaroc EPDM Rubber
          </span>
          <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-gray-900 tracking-tight">
            Choose Your Color
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-500 text-base sm:text-lg leading-relaxed">
            16 base colors and 12 signature blends — plus unlimited custom mixes. Tap any swatch to see details.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-2 mb-6">
          {collections.map((col, i) => (
            <button
              key={col.name}
              onClick={() => { setActiveTab(i); setSelected(null); setShowAll(false) }}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeTab === i
                  ? "bg-accent text-white shadow-lg shadow-accent/20"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300"
              }`}
            >
              {col.name}
            </button>
          ))}
        </div>

        <div className="mb-8" />

        {/* Detail panel */}
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
                  {/* Large swatch image */}
                  <div className="sm:w-[240px] h-[200px] sm:h-auto shrink-0 overflow-hidden">
                    <img
                      src={selected.image}
                      alt={`${selected.name} rubber granule swatch`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {/* Info */}
                  <div className="p-6 sm:p-8 flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-heading font-bold text-xl text-gray-900">
                        {selected.name}
                      </h3>
                      <button
                        onClick={() => setSelected(null)}
                        className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer"
                        aria-label="Close"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <span className="text-sm text-accent font-medium">
                      {selected.recipe ? "Signature Blend" : "Base Color"}
                    </span>
                    <p className="mt-3 text-gray-500 text-sm leading-relaxed">{selected.tones}</p>
                    {selected.recipe && (
                      <p className="mt-2 text-xs text-gray-400 font-mono">{selected.recipe}</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Color grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
          {visible.map((color) => {
            const isSelected = selected?.name === color.name
            return (
              <button
                key={color.slug}
                onClick={() => setSelected(isSelected ? null : color)}
                className="group text-left cursor-pointer"
              >
                <div
                  className={`aspect-square rounded-xl overflow-hidden border-2 bg-gray-100 shadow-sm transition-all duration-200 ${
                    isSelected
                      ? "border-accent shadow-lg shadow-accent/10 scale-[1.05]"
                      : "border-gray-200 group-hover:border-accent/30 group-hover:shadow-md group-hover:scale-[1.03]"
                  }`}
                >
                  <img
                    src={color.image}
                    alt={`${color.name} rubber granule swatch`}
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
                    {color.name}
                  </p>
                </div>
              </button>
            )
          })}
        </div>

        {/* Show more */}
        {hasMore && (
          <div className="text-center mt-6 sm:mt-8">
            <button
              onClick={() => { setShowAll(!showAll); if (showAll) setSelected(null) }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-accent transition-colors cursor-pointer"
            >
              {showAll ? "Show fewer colors" : `Show all ${current.colors.length} colors`}
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
            </button>
          </div>
        )}

        {/* Note about samples */}
        <p className="mt-8 text-center text-xs text-gray-400 max-w-lg mx-auto">
          We bring physical samples to every estimate — screens don&apos;t do them justice. Custom blends available on request.
        </p>
      </div>
    </section>
  )
}
