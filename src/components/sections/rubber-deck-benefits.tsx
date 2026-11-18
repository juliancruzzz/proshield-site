"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Footprints, Wrench, Zap, Baby, FlaskConical } from "lucide-react"

const benefits = [
  {
    icon: ShieldCheck,
    title: "Wet Traction",
    description:
      "Texture can help provide traction, but wet surfaces can still be slippery. Compare the proposed finish’s slip-resistance information and keep the deck clean. Cushioning does not prevent falls or guarantee protection from injury.",
  },
  {
    icon: Footprints,
    title: "Surface Heat",
    description:
      "Any pool deck can become hot in direct sun. Temperature depends on product, color, shade and weather. Ask for test results for the proposed finish under comparable conditions; no material is guaranteed safe for bare feet.",
  },
  {
    icon: Baby,
    title: "Underfoot Feel",
    description:
      "Rubber has a softer underfoot feel than a hard finish. Cushioning does not guarantee protection from injury.",
  },
  {
    icon: Zap,
    title: "Existing Cracks",
    description:
      "Existing cracks and substrate movement need assessment. Resurfacing is not a structural repair and does not guarantee cracks stay hidden.",
  },
  {
    icon: Wrench,
    title: "Product-Specific Care",
    description:
      "Remove loose debris and follow the selected product’s cleaning instructions. Ask which cleaners and equipment are allowed and when the surface should be inspected or refreshed. Resealing needs vary by system and condition.",
  },
  {
    icon: FlaskConical,
    title: "Sun & Pool Chemicals",
    description:
      "Confirm the selected binder and topcoat’s exterior-use and chemical-exposure requirements. Follow product instructions for spills and cleaning.",
  },
]

export function RubberDeckBenefits() {
  return (
    <section className="section-gray py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            Why Rubber Decking
          </span>
          <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
            Engineered for Las Vegas Pool Decks
          </h2>
          <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">Compare the proposed finish against the sun exposure, wear and existing concrete at your pool.</p>
        </div>

        {/* Benefit grid — 3x2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="group relative rounded-xl bg-white border border-gray-200 p-6 sm:p-7 hover:shadow-lg hover:border-teal/30 transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal-subtle text-teal group-hover:bg-accent-subtle group-hover:text-accent transition-colors">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-4 font-heading font-semibold text-gray-900 text-base sm:text-lg">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
