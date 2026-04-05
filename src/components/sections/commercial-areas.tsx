"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  Factory,
  Plane,
  Store,
  Utensils,
  Check,
} from "lucide-react"

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface System {
  name: string
  description: string
  highlights: string[]
  href: string
  image: string
  tag?: string
}

interface Area {
  id: string
  label: string
  icon: React.ReactNode
  tagline: string
  systems: System[]
}

const areas: Area[] = [
  {
    id: "warehouse-manufacturing",
    label: "Warehouse & Manufacturing",
    icon: <Factory className="h-5 w-5" />,
    tagline: "Heavy-duty systems built for forklifts, chemicals, and constant traffic.",
    systems: [
      {
        name: "Commercial Resinous Flooring",
        description:
          "Seamless resinous flooring systems — resin quartz, solid color urethane, and urethane cement. System-matched to your specific environment and chemical exposure.",
        highlights: [
          "Chemical resistant",
          "Forklift & heavy traffic rated",
          "Seamless & sanitary",
        ],
        href: "/commercial-flooring",
        image: "/images/commercial/commercial-grey-yellow-stripe.jpg",
        tag: "Most Popular",
      },
      {
        name: "ProFlake System",
        description:
          "Epoxy base with full flake broadcast and polyaspartic topcoat. Durable, decorative, and fast — a great option for lighter-duty warehouse spaces.",
        highlights: [
          "Fast installation",
          "Decorative finish",
          "Chemical resistant topcoat",
        ],
        href: "/proflake",
        image: "/images/proflake/flake-garage-porsche-bikes.jpg",
      },
    ],
  },
  {
    id: "aviation-hangar",
    label: "Aviation & Hangar",
    icon: <Plane className="h-5 w-5" />,
    tagline: "Resists jet fuel, Skydrol, oils, and rolling loads.",
    systems: [
      {
        name: "Airplane Hangar Flooring",
        description:
          "Purpose-built system that resists Skydrol, jet fuel, oils, abrasion, and rolling loads. Chemical-resistant topcoat with non-slip safety finish.",
        highlights: [
          "Skydrol & jet fuel resistant",
          "Non-slip safety finish",
          "Heavy rolling load rated",
        ],
        href: "/airplane-hangar",
        image: "/images/hangar/hangar-floor-drone-desert.jpg",
        tag: "Specialty",
      },
    ],
  },
  {
    id: "retail-showroom",
    label: "Retail & Showroom",
    icon: <Store className="h-5 w-5" />,
    tagline: "First impressions matter — floors that wow customers.",
    systems: [
      {
        name: "Solid Color System",
        description:
          "UV-stable polyurethane-based flooring in unlimited custom colors. Seamless, professional finish that matches your brand identity.",
        highlights: [
          "Unlimited custom colors",
          "UV-stable finish",
          "Premium visual impact",
        ],
        href: "/commercial-flooring",
        image: "/images/commercial/commercial-solid-grey-epoxy.jpg",
      },
      {
        name: "Concrete Polishing",
        description:
          "Sleek, modern polished concrete for a clean retail aesthetic. Low maintenance and extremely durable under foot traffic.",
        highlights: [
          "Modern aesthetic",
          "Ultra-low maintenance",
          "Highly durable",
        ],
        href: "/concrete-polishing",
        image: "/images/concrete-polishing/polished-concrete-aci.jpg",
        tag: "Premium",
      },
      {
        name: "Commercial Resinous",
        description:
          "Custom color resinous systems for branded retail environments. Seamless, easy to clean, and built to handle high foot traffic.",
        highlights: [
          "Custom brand colors",
          "Seamless finish",
          "Easy to maintain",
        ],
        href: "/commercial-flooring",
        image: "/images/commercial/commercial-floor-solid.jpg",
      },
    ],
  },
  {
    id: "restaurant-medical",
    label: "Restaurant & Medical",
    icon: <Utensils className="h-5 w-5" />,
    tagline: "Sanitary, slip-resistant, and easy to clean.",
    systems: [
      {
        name: "Urethane Cement",
        description:
          "The gold standard for commercial kitchens, breweries, and food processing. Thermal shock resistant, antimicrobial compatible, and seamless.",
        highlights: [
          "Thermal shock resistant",
          "Antimicrobial compatible",
          "FDA/USDA compliant options",
        ],
        href: "/commercial-flooring",
        image: "/images/commercial/commercial-urethane-cement.jpg",
        tag: "Industry Standard",
      },
      {
        name: "Resin Quartz",
        description:
          "Broadcast quartz aggregate in a resinous matrix. Slip-resistant, chemical resistant, and built for constant wet environments.",
        highlights: [
          "Superior slip resistance",
          "Chemical resistant",
          "Textured safety surface",
        ],
        href: "/commercial-flooring",
        image: "/images/commercial/commercial-resin-quartz.jpg",
      },
    ],
  },
]

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function CommercialAreas() {
  const [activeArea, setActiveArea] = useState<string>("warehouse-manufacturing")
  const sectionRef = useRef<HTMLDivElement>(null)
  const current = areas.find((a) => a.id === activeArea)!

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-20 lg:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            Find Your System
          </span>
          <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight">
            What&apos;s Your Environment?
          </h2>
          <p className="mt-4 text-gray-500 text-lg leading-relaxed">
            Select your industry and we&apos;ll recommend the right flooring system.
          </p>
        </div>

        {/* Area selector pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {areas.map((area) => {
            const isActive = area.id === activeArea
            return (
              <button
                key={area.id}
                onClick={() => setActiveArea(area.id)}
                className={`
                  group relative flex items-center gap-2 rounded-full px-5 py-2.5
                  text-sm font-semibold transition-all duration-300 cursor-pointer
                  ${
                    isActive
                      ? "bg-accent text-white shadow-lg shadow-accent/20"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                  }
                `}
              >
                <span
                  className={`transition-colors duration-300 ${
                    isActive ? "text-white" : "text-gray-400 group-hover:text-gray-600"
                  }`}
                >
                  {area.icon}
                </span>
                {area.label}
              </button>
            )
          })}
        </div>

        {/* Tagline for active area */}
        <AnimatePresence mode="wait">
          <motion.p
            key={current.id + "-tagline"}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="text-center text-gray-500 text-base mb-10 max-w-lg mx-auto"
          >
            {current.tagline}
          </motion.p>
        </AnimatePresence>

        {/* Systems for selected area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`grid gap-6 ${
              current.systems.length === 1
                ? "max-w-xl mx-auto"
                : current.systems.length === 2
                  ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
                  : current.systems.length === 4
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                    : "grid-cols-1 md:grid-cols-3"
            }`}
          >
            {current.systems.map((system, i) => (
              <Link key={system.name + current.id} href={system.href} className="group block">
                <div className="h-full rounded-2xl border border-gray-200 bg-white overflow-hidden transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative h-48 bg-gray-100 overflow-hidden">
                    <img
                      src={system.image}
                      alt={system.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {system.tag && (
                      <span className="absolute top-3 right-3 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white shadow-md">
                        {system.tag}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-heading font-semibold text-lg text-gray-900 group-hover:text-accent transition-colors duration-200">
                      {system.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                      {system.description}
                    </p>

                    {/* Highlights */}
                    <ul className="mt-4 space-y-2">
                      {system.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Learn More <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
