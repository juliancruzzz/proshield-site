"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Building2, Warehouse, UtensilsCrossed, Car, ChevronDown } from "lucide-react"

const applications = [
  {
    icon: Building2,
    title: "Retail & Showrooms",
    description:
      "High-gloss finishes that showcase products beautifully. Reflective floors elevate customer experience and reduce lighting costs.",
  },
  {
    icon: Warehouse,
    title: "Warehouses & Distribution",
    description:
      "Seamless, densified surfaces that withstand pallet jacks, forklifts, and constant heavy traffic without deterioration.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants & Hospitality",
    description:
      "Non-porous, food-safe surfaces that meet health standards. Easy to clean and maintain in demanding kitchen environments.",
  },
  {
    icon: Car,
    title: "Auto Dealerships",
    description:
      "Mirror-finish floors that enhance vehicle presentation. Resistant to hot-tire pickup, oils, and automotive chemicals.",
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
              alt="Large warehouse with polished concrete flooring and reflective surface"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase text-teal">
              Applications
            </span>
            <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
              Built for Every <span className="text-accent">Environment</span>
            </h2>
            <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
              Polished concrete performs across industries. We tailor the finish level and aggregate exposure to match your space&apos;s specific demands.
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
