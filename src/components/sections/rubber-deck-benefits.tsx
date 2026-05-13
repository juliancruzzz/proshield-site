"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Footprints, Wrench, Zap, Baby, FlaskConical } from "lucide-react"

const benefits = [
  {
    icon: ShieldCheck,
    title: "Slip-Resistant When Wet",
    description:
      "Textured rubber granules provide built-in traction that stays grippy over time — the grip is in the material itself, not a topcoat that wears off. Exceeds ADA slip resistance standards.",
  },
  {
    icon: Footprints,
    title: "Comfortable Barefoot",
    description:
      "The rubber layer insulates your feet from hot concrete below. Low thermal conductivity means heat transfers to your skin slowly, even when the surface is warm.",
  },
  {
    icon: Baby,
    title: "Cushioned Impact Protection",
    description:
      "Same material principle used in commercial playground surfaces. A slip on rubber is a non-event — a slip on concrete can mean stitches. Critical for families with kids.",
  },
  {
    icon: Zap,
    title: "Bridges Concrete Cracks",
    description:
      "Las Vegas concrete moves daily with thermal cycling. The flexible elastomeric membrane spans cracks up to 1/8″ without breaking or showing through — rigid coatings can't do this.",
  },
  {
    icon: Wrench,
    title: "Low Maintenance",
    description:
      "Sweep weekly, hose monthly. Reseal every 3–4 years with a pressure wash and clear coat roll-on. Compare that to cool deck's 1–2 year reseal cycle.",
  },
  {
    icon: FlaskConical,
    title: "UV & Chemical Resistant",
    description:
      "The polyurethane binder is formulated for extended UV exposure. Rubber granules are chemically inert — resistant to chlorine, salt, muriatic acid, and pool chemical splatter.",
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
          <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
            115°F+ summers, daily thermal cycling, and relentless UV — rubber pool deck surfacing
            handles all of it while keeping your deck safe and comfortable.
          </p>
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
