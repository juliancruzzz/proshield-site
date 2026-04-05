"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Warehouse, CookingPot, FlaskConical, Building2, ChevronDown } from "lucide-react"

const industries = [
  {
    icon: Warehouse,
    title: "Warehouses & Manufacturing",
    description:
      "Heavy-duty polyaspartic systems that withstand forklift traffic, pallet jacks, and constant impact without cracking or delaminating.",
  },
  {
    icon: CookingPot,
    title: "Commercial Kitchens & Food Processing",
    description:
      "USDA-compliant, non-porous surfaces that resist thermal shock, grease, and aggressive cleaning chemicals. Seamless for sanitation.",
  },
  {
    icon: FlaskConical,
    title: "Healthcare & Laboratories",
    description:
      "Chemical-resistant flooring that handles harsh disinfectants and reagents. ESD options available for sensitive equipment areas.",
  },
  {
    icon: Building2,
    title: "Retail & Showrooms",
    description:
      "High-gloss metallic and decorative flake systems that create stunning customer-facing spaces while handling heavy foot traffic.",
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
          className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
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
              src="/images/commercial/commercial-grey-yellow-stripe.jpg"
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
              Built for Every Commercial Environment
            </h2>
            <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
              From thermal shock in kitchens to chemical exposure in labs, we tailor the system to your facility&apos;s unique demands.
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
