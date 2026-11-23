"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Building2, Warehouse, UtensilsCrossed, Car, ChevronDown } from "lucide-react"

const applications = [
  {
    icon: Building2,
    title: "Retail & Showrooms",
    description:
      "Choose the sheen in the lighting used for your displays. A sample area on your slab shows both the reflection and the amount of exposed stone.",
  },
  {
    icon: Warehouse,
    title: "Warehouses & Distribution",
    description:
      "Identify forklift aisles and loading areas. Existing joint repairs may stay visible after polishing.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants & Hospitality",
    description:
      "Wet service areas need different traction and care considerations from a dining room. Review the proposed finish for each area.",
  },
  {
    icon: Car,
    title: "Auto Dealerships",
    description:
      "Compare the finish beneath a display vehicle with the entrance and service lanes. Include wheel traffic and spill cleanup in the scope.",
  },
]

function ExpandableItem({
  app,
  index,
}: {
  app: (typeof applications)[number]
  index: number
}) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 py-3 text-left group"
      >
        <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
          <app.icon className="h-5 w-5" />
        </div>
        <span className="flex-1 text-sm sm:text-base font-semibold text-gray-900 group-hover:text-accent transition-colors">
          {app.title}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="pl-14 pb-3 text-sm text-gray-500 leading-relaxed">
              {app.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function PolishingApplications() {
  return (
    <section className="section-gray py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* Image */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-gray-900/10">
            <img
              src="/images/concrete-polishing/polished-aggregate-closeup.webp"
              alt="Exposed aggregate in a polished concrete surface"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase text-teal">
              Applications
            </span>
            <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
              Polished Concrete <span className="text-accent">by Use</span>
            </h2>
            <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
              Select a space to see how traffic, lighting and cleaning affect the choice of finish.
            </p>

            <div className="mt-6 divide-y divide-gray-100">
              {applications.map((app, i) => (
                <ExpandableItem
                  key={app.title}
                  app={app}
                  index={i}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
