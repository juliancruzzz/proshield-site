"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Sun, ShieldCheck, Bug, Paintbrush, ChevronDown } from "lucide-react"

const benefits = [
  {
    icon: Sun,
    title: "UV & Fade Protection",
    description:
      "Professional-grade sealer blocks UV rays that bleach and dull paver color — critical in Las Vegas where surfaces take 300+ days of direct sun per year. Without sealer, pavers fade noticeably within 1–2 seasons.",
  },
  {
    icon: ShieldCheck,
    title: "Stain & Spill Resistance",
    description:
      "Sealed pavers repel oil, grease, rust, and food stains on contact. Spills wipe clean instead of soaking into the stone. Especially important for driveways and outdoor kitchens where staining is constant.",
  },
  {
    icon: Bug,
    title: "Weed & Ant Prevention",
    description:
      "Sealer hardens joint sand and locks it in place, eliminating the gaps where weeds sprout and ants build colonies between pavers. No more pulling weeds every weekend or dealing with sand washout after rain.",
  },
  {
    icon: Paintbrush,
    title: "Color Restoration",
    description:
      "A wet-look sealer deepens and enriches faded paver color back to its original richness — like the difference between a dry and wet river stone. Or choose a natural-look sealer for invisible protection without changing appearance.",
  },
]

export function PaverSealingBenefits() {
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
                Why Seal Your Pavers
              </span>
              <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
                Protection That Pays<br className="hidden sm:block" /> for Itself
              </h2>
              <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
                Unsealed pavers fade, stain, and shift within a couple of Las Vegas seasons.
                Professional sealing locks in color, hardens joints, and creates a barrier
                against UV, oil, and water — extending the life of your investment by years.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon
                const isOpen = openIndex === i
                return (
                  <div key={benefit.title} className={`group rounded-xl bg-white border transition-all duration-200 ${
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
                      <h3 className="flex-1 font-heading font-semibold text-gray-900 text-base">{benefit.title}</h3>
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
                            <p className="text-sm text-gray-500 leading-relaxed">{benefit.description}</p>
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
              src="/images/paver-sealing/sealed-paver-driveway.webp"
              alt="Glossy wet-look sealed brick paver driveway"
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
