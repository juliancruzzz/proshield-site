"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Layers, Shield, Sofa, TreePine, ChevronDown } from "lucide-react"

const plankTypes = [
  {
    icon: Layers,
    title: "Luxury Vinyl Plank (LVP)",
    description:
      "Multi-layer synthetic flooring with a realistic wood-grain design layer and durable wear layer. Water-resistant, affordable, and installs via click-lock or glue-down.",
    highlights: ["Water-resistant", "Click-lock install", "Budget-friendly"],
  },
  {
    icon: Shield,
    title: "SPC (Stone Polymer Composite)",
    description:
      "Rigid-core plank with a limestone and PVC composite base. Completely waterproof, highly impact-resistant, and dimensionally stable across temperature changes.",
    highlights: ["100% waterproof", "Rigid core", "Impact-resistant"],
  },
  {
    icon: Sofa,
    title: "WPC (Wood Polymer Composite)",
    description:
      "Wood fiber and polymer core that delivers a softer, cushioned feel underfoot. Waterproof with excellent sound absorption — ideal for living spaces and bedrooms.",
    highlights: ["Comfortable underfoot", "Sound absorbing", "Waterproof"],
  },
  {
    icon: TreePine,
    title: "Engineered Hardwood",
    description:
      "Real wood veneer bonded to high-density plywood plies. More dimensionally stable than solid hardwood — less expansion with humidity. Can be refinished.",
    highlights: ["Real wood surface", "Dimensionally stable", "Refinishable"],
  },
]

export function PlankTypes() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="section-gray py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Content side */}
          <div>
            <div>
              <span className="text-sm font-semibold tracking-widest uppercase text-teal">
                Options
              </span>
              <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
                Plank Flooring Types
              </h2>
              <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
                Each type has strengths suited to specific spaces. We&apos;ll help you choose the right plank for your lifestyle and budget.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {plankTypes.map((plank, i) => {
                const Icon = plank.icon
                const isOpen = openIndex === i
                return (
                  <div key={plank.title} className={`group rounded-xl bg-white border transition-all duration-200 ${
                      isOpen ? "border-teal/40 shadow-md" : "border-gray-200 hover:border-teal/30 hover:shadow-sm"
                    }`}>
                    <button
                      onClick={() => toggle(i)}
                      className="w-full flex items-center gap-4 p-4 sm:p-5 text-left cursor-pointer"
                    >
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors ${
                        isOpen ? "bg-accent-subtle text-accent" : "bg-teal-subtle text-teal group-hover:bg-accent-subtle group-hover:text-accent"
                      }`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="flex-1 font-heading font-semibold text-gray-900 text-base">{plank.title}</h3>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className={`shrink-0 ${isOpen ? "text-accent" : "text-gray-500"}`}
                      >
                        <ChevronDown className="h-5 w-5" />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 sm:px-5 pb-4 sm:pb-5 pl-[72px] sm:pl-[76px]">
                            <p className="text-sm text-gray-500 leading-relaxed">{plank.description}</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                              {plank.highlights.map((h) => (
                                <span
                                  key={h}
                                  className="inline-block rounded-full bg-teal-subtle px-2.5 py-0.5 text-xs font-medium text-teal"
                                >
                                  {h}
                                </span>
                              ))}
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

          {/* Image side */}
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/plank/plank-luxury.webp"
              alt="Close-up of light wood-grain plank flooring showing natural texture"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
