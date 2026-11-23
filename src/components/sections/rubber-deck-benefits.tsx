"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Footprints, Wrench, Zap, Baby, FlaskConical } from "lucide-react"

const benefits = [
  {
    icon: ShieldCheck,
    title: "Wet Traction",
    description:
      "The textured surface still needs cleaning. Water and pool residue can make the deck slippery.",
  },
  {
    icon: Footprints,
    title: "Surface Heat",
    description:
      "Rubber can get hot in direct sun. Compare colors where the deck gets the most afternoon sun.",
  },
  {
    icon: Baby,
    title: "Underfoot Feel",
    description:
      "Rubber has more give than a hard coating or paver. A sample helps you decide whether you like that feel for your pool surround.",
  },
  {
    icon: Zap,
    title: "Existing Cracks",
    description:
      "A rubber layer follows the existing deck. Movement underneath can show through, so loose coatings and moving cracks need attention first.",
  },
  {
    icon: Wrench,
    title: "Product-Specific Care",
    description:
      "Sweep off leaves and rinse dirt from between the granules. Check the binder’s care instructions before choosing a cleaner.",
  },
  {
    icon: FlaskConical,
    title: "Sun & Pool Chemicals",
    description:
      "Use cleaners suited to the binder and rinse away spills. Concentrated pool chemicals need different handling from ordinary splashed water.",
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
            Choosing rubber for your deck
          </h2>
          <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">Start with how you want the surface to feel, then check the details at the drains, steps and coping.</p>
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
