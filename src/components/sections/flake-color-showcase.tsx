"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface Blend {
  name: string
  code: string
  image: string
  tones?: string
}

const collections = [
  {
    name: "Signature Collection",
    description: "Our most requested blends — refined neutrals and earth tones that pair with any space.",
    blends: [
      { name: "Waxwing", code: "FB-968", image: "/images/flake/signature/waxwing.jpg", tones: "Warm gray with tan accents" },
      { name: "Thyme", code: "FB-977", image: "/images/flake/signature/thyme.jpg", tones: "Sage green with neutral chips" },
      { name: "Wombat", code: "FB-616", image: "/images/flake/signature/wombat.jpg", tones: "Rich brown with cream flecks" },
      { name: "Tidal Wave", code: "FB-807", image: "/images/flake/signature/tidal-wave.jpg", tones: "Ocean blue with gray and white" },
      { name: "Coyote", code: "FB-513", image: "/images/flake/signature/coyote.jpg", tones: "Desert tan with warm accents" },
      { name: "Gravel", code: "FB-414", image: "/images/flake/signature/gravel.jpg", tones: "Classic gray multi-tone" },
      { name: "Creekbed", code: "FB-716", image: "/images/flake/signature/creekbed.jpg", tones: "Natural stone tones" },
      { name: "Loon", code: "FB-966", image: "/images/flake/signature/loon.jpg", tones: "Charcoal with silver flecks" },
      { name: "Nightfall", code: "FB-715", image: "/images/flake/signature/nightfall.jpg", tones: "Deep black with subtle chips" },
    ],
  },
  {
    name: "Modern Collection",
    description: "Contemporary palettes — bold statements and refined contemporary blends.",
    blends: [
      { name: "Polar", code: "FB-330", image: "/images/flake/modern/polar.jpg", tones: "Crisp white with gray accents" },
      { name: "Antler", code: "FB-601", image: "/images/flake/modern/antler.jpg", tones: "Warm beige multi-tone" },
      { name: "Madras", code: "FB-706", image: "/images/flake/modern/madras.jpg", tones: "Spiced brown with orange" },
      { name: "Keystone", code: "FB-713", image: "/images/flake/modern/keystone.jpg", tones: "Slate gray with blue undertones" },
      { name: "Koala", code: "FB-811", image: "/images/flake/modern/koala.jpg", tones: "Soft gray-brown blend" },
      { name: "Dovetail", code: "FB-823", image: "/images/flake/modern/dovetail.jpg", tones: "Warm gray with taupe" },
      { name: "Heron", code: "FB-976", image: "/images/flake/modern/heron.jpg", tones: "Cool blue-gray tones" },
      { name: "Citrine", code: "FB-978", image: "/images/flake/modern/citrine.jpg", tones: "Golden amber blend" },
      { name: "Morel", code: "FB-979", image: "/images/flake/modern/morel.jpg", tones: "Earthy mushroom tones" },
      { name: "Dingo", code: "FB-980", image: "/images/flake/modern/dingo.jpg", tones: "Sandy tan with rust" },
      { name: "Chenille", code: "FB-981", image: "/images/flake/modern/chenille.jpg", tones: "Soft cream multi-tone" },
      { name: "Nordic Green", code: "FB-514", image: "/images/flake/modern/nordic-green.jpg", tones: "Forest green with gray" },
      { name: "Reed", code: "FB-507", image: "/images/flake/modern/reed.jpg", tones: "Olive-green blend" },
      { name: "Stony Creek", code: "FB-806", image: "/images/flake/modern/stony-creek.jpg", tones: "River stone gray" },
      { name: "Rocky Ridge", code: "FB-801", image: "/images/flake/modern/rocky-ridge.jpg", tones: "Mountain granite tones" },
    ],
  },
]

export function FlakeColorShowcase() {
  const [activeTab, setActiveTab] = useState(0)
  const [selectedBlend, setSelectedBlend] = useState<Blend | null>(null)

  const currentCollection = collections[activeTab]

  return (
    <section className="section-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            Torginol Polymer Flake
          </span>
          <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-gray-900 tracking-tight">
            Choose Your Blend
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-500 text-base sm:text-lg leading-relaxed">
            Premium decorative flake blends from Torginol. Click any swatch to see details.
          </p>
        </div>

        {/* Collection tabs */}
        <div className="flex items-center justify-center gap-2 mb-6">
          {collections.map((col, i) => (
            <button
              key={col.name}
              onClick={() => { setActiveTab(i); setSelectedBlend(null) }}
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
                      alt={`${selectedBlend.name} flake blend`}
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
                    <span className="text-sm text-accent font-medium">{selectedBlend.code}</span>
                    {selectedBlend.tones && (
                      <p className="mt-3 text-gray-500 text-sm leading-relaxed">{selectedBlend.tones}</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Blend grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
          {currentCollection.blends.map((blend, i) => {
            const isSelected = selectedBlend?.code === blend.code
            return (
              <button
                key={blend.code}
                onClick={() => setSelectedBlend(isSelected ? null : blend)}
                className="group text-left cursor-pointer"
              >
                <div className={`aspect-square rounded-xl overflow-hidden border-2 bg-white shadow-sm transition-all duration-200 ${
                  isSelected
                    ? "border-accent shadow-lg shadow-accent/10 scale-[1.05]"
                    : "border-gray-200 group-hover:border-accent/30 group-hover:shadow-md group-hover:scale-[1.03]"
                }`}>
                  <img
                    src={blend.image}
                    alt={`${blend.name} flake blend`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="mt-2 text-center">
                  <p className={`text-sm font-medium transition-colors duration-150 ${
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
