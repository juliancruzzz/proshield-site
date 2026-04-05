"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Sun, ThermometerSun, Droplets, ChevronDown, Check } from "lucide-react"

const advantages = [
  {
    icon: <Sun className="h-5 w-5" />,
    title: "UV-Stable Finish",
    badge: "100% UV Stable",
    badgeStyle: "bg-teal-subtle text-teal border border-teal/20",
    activeBadgeStyle: "bg-teal text-white border border-teal",
    description:
      "Polyaspartic topcoat won't yellow or fade under UV exposure. Your floor maintains its color and gloss over time — no chalking, no discoloration.",
    features: [
      "No yellowing or fading over time",
      "Maintains gloss year after year",
      "Zero chalking or discoloration",
      "Ideal for sun-exposed garages",
    ],
  },
  {
    icon: <ThermometerSun className="h-5 w-5" />,
    title: "Hot Tire Resistant",
    badge: "Zero Peel-Up",
    badgeStyle: "bg-accent-subtle text-accent border border-accent/20",
    activeBadgeStyle: "bg-accent text-white border border-accent",
    description:
      "No tire marks from hot tires. The polyaspartic topcoat resists heat transfer that causes peel-up and staining on standard epoxy floors.",
    features: [
      "Resists heat transfer from tires",
      "No peel-up or delamination",
      "Zero staining from hot rubber",
      "Built for daily driver use",
    ],
  },
  {
    icon: <Droplets className="h-5 w-5" />,
    title: "Chemical Resistant",
    badge: "Oil · Gas · Brake Fluid",
    badgeStyle: "bg-teal-subtle text-teal border border-teal/20",
    activeBadgeStyle: "bg-teal text-white border border-teal",
    description:
      "Stands up to oil, gasoline, brake fluid, and common garage chemicals. Easy to clean — just wipe and go. Built for real garage use.",
    features: [
      "Resists oil, gas, and brake fluid",
      "Easy wipe-clean maintenance",
      "No staining from household chemicals",
      "Built for real garage use",
    ],
  },
]

export function ProFlakeWhyChoose() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative py-10 sm:py-16 lg:py-24 section-gray">
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            Why ProFlake
          </span>
          <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
            The Polyaspartic Advantage
          </h2>
          <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
            Standard epoxy topcoats yellow, chalk, and peel. Our polyaspartic topcoat is what sets ProFlake apart.
          </p>
        </div>

        {/* Expandable advantage rows */}
        <div className="space-y-3">
          {advantages.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={item.title}>
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
                          isOpen ? item.activeBadgeStyle : item.badgeStyle
                        }`}
                      >
                        {item.badge}
                      </span>
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-gray-900">
                        {item.title}
                      </h3>
                    </div>
                    <div className="shrink-0 flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-teal-subtle flex items-center justify-center text-teal shrink-0">
                        {item.icon}
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    {item.description}
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
                        <ul className="space-y-2.5">
                          {item.features.map((f) => (
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
