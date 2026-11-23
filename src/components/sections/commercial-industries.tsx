"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Warehouse, CookingPot, FlaskConical, Building2, ChevronDown } from "lucide-react"

const industries = [
  {
    icon: Warehouse,
    title: "Warehouses & Manufacturing",
    description:
      "Wheel material, loaded weight and tight turns affect the coating specified for a forklift aisle. Mark high-wear routes on the plan.",
  },
  {
    icon: CookingPot,
    title: "Commercial Kitchens & Food Processing",
    description:
      "Washdown temperature, grease, drains and cleaning products matter when choosing a kitchen floor. Share any facility specifications with the estimate request.",
  },
  {
    icon: FlaskConical,
    title: "Healthcare & Laboratories",
    description:
      "List the disinfectants or reagents that contact the floor. Include electrical or other facility requirements if the room has them.",
  },
  {
    icon: Building2,
    title: "Retail & Showrooms",
    description:
      "Solid colors, flake and metallic finishes create different looks in customer areas. Decide how the finish will meet adjoining rooms and entrances.",
  },
]

function ExpandableItem({
  item,
  index,
}: {
  item: (typeof industries)[number]
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
          <item.icon className="h-5 w-5" />
        </div>
        <span className="flex-1 text-sm sm:text-base font-semibold text-gray-900 group-hover:text-accent transition-colors">
          {item.title}
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
              {item.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function CommercialIndustries() {
  return (
    <section className="section-gray py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* Image */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-gray-900/10">
            <img
              src="/images/commercial/commercial-grey-yellow-stripe.webp"
              alt="Commercial warehouse floor with safety line markings"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase text-teal">
              Industries Served
            </span>
            <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
              How the Space Is Used
            </h2>
            <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
              Choose a facility type for examples of what belongs in the flooring scope.
            </p>

            <div className="mt-6 divide-y divide-gray-100">
              {industries.map((ind, i) => (
                <ExpandableItem
                  key={ind.title}
                  item={ind}
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
