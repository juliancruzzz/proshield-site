"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Timer, DollarSign, Shield, ChevronDown } from "lucide-react"

const serviceTypes = [
  {
    badge: "Budget-Friendly",
    badgeStyle: "bg-teal-subtle text-teal border border-teal/20",
    activeBadgeStyle: "bg-teal text-white border border-teal",
    title: "Grind & Seal",
    description:
      "Surface grinding followed by a protective topical sealer. A great option for lighter-traffic spaces or budget-conscious projects.",
    features: [
      "Ground to 100–200 grit, then sealed",
      "Faster turnaround",
      "Sealer can be refreshed",
      "Ideal for residential or light commercial",
    ],
    timeline: "1–2 Day Install",
    cost: "Lower Cost",
    durability: "Reseal Periodically",
  },
  {
    badge: "Maximum Durability",
    badgeStyle: "bg-accent-subtle text-accent border border-accent/20",
    activeBadgeStyle: "bg-accent text-white border border-accent",
    title: "Mechanically Polished",
    description:
      "Full progressive diamond polishing up to 3,000 grit. The shine comes from the concrete itself after densification — no coating to scratch or peel.",
    features: [
      "Full grit progression: 30 → 3,000 grit",
      "Lithium silicate densifier for permanent hardening",
      "Shine is inherent to the slab",
      "Best for retail, warehouses, showrooms",
    ],
    timeline: "3–5 Day Install",
    cost: "Higher Upfront",
    durability: "25–40 Year Life",
  },
]

export function PolishingServiceTypes() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="section-gray py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            Two Approaches
          </span>
          <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
            Choose Your Polishing System
          </h2>
          <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
            The right choice depends on your traffic levels, aesthetic goals, and budget.
          </p>
        </div>

        <div className="space-y-3">
          {serviceTypes.map((svc, i) => {
            const isOpen = openIndex === i
            return (
              <div key={svc.title}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={`w-full rounded-xl border bg-white px-5 py-4 sm:px-6 sm:py-5 text-left transition-all duration-300 ${
                    isOpen
                      ? "border-accent/40 shadow-lg shadow-accent/5 rounded-b-none"
                      : "border-gray-200 hover:border-accent/20 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-1 min-w-0">
                      <span
                        className={`inline-block rounded-full px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wide mb-1.5 transition-colors duration-300 ${
                          isOpen ? svc.activeBadgeStyle : svc.badgeStyle
                        }`}
                      >
                        {svc.badge}
                      </span>
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-gray-900">
                        {svc.title}
                      </h3>
                    </div>
                    <div className="shrink-0 flex items-center gap-3">
                      <div className="flex items-center gap-3 text-sm sm:text-base font-semibold text-gray-500">
                        <span className="flex items-center gap-1.5">
                          <Timer className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                          {svc.timeline}
                        </span>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    {svc.description}
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
                      <div className="px-5 sm:px-6 pt-4 pb-5 bg-white border-x border-b border-accent/20 rounded-b-xl">
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1.5">
                            <Timer className="h-4 w-4 text-accent" />
                            {svc.timeline}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <DollarSign className="h-4 w-4 text-accent" />
                            {svc.cost}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Shield className="h-4 w-4 text-accent" />
                            {svc.durability}
                          </span>
                        </div>
                        <ul className="mt-4 space-y-2.5">
                          {svc.features.map((f) => (
                            <li key={f} className="flex items-start gap-2.5">
                              <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-600">{f}</span>
                            </li>
                          ))}
                        </ul>
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
