"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  CookingPot,
  Sofa,
  Building2,
  Warehouse,
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
    id: "kitchen-bathroom",
    label: "Kitchen & Bathroom",
    icon: <CookingPot className="h-5 w-5" />,
    tagline: "Water-resistant surfaces that look stunning and last.",
    systems: [
      {
        name: "Tile Flooring",
        description:
          "Porcelain, ceramic, and natural stone. Scratch-resistant, water-resistant, and available in endless patterns. Premium finishes for high-traffic wet areas.",
        highlights: [
          "Water & scratch resistant",
          "Endless design options",
          "Premium stone & porcelain",
        ],
        href: "/tile-flooring",
        image: "/images/tile/tile-luxury-interior.jpg",
        tag: "Most Popular",
      },
      {
        name: "Metallic Epoxy",
        description:
          "Seamless, waterproof floor with stunning visual depth. A showpiece finish for modern kitchens and master baths.",
        highlights: [
          "Seamless & waterproof",
          "Unique 3D depth",
          "Easy to clean",
        ],
        href: "/metallic-epoxy",
        image: "/images/metallic/metallic-epoxy-red-black-swirl.jpg",
      },
    ],
  },
  {
    id: "living-bedroom",
    label: "Living & Bedroom",
    icon: <Sofa className="h-5 w-5" />,
    tagline: "Comfort and style for the rooms you live in most.",
    systems: [
      {
        name: "Plank Flooring",
        description:
          "LVP, SPC, WPC, and engineered hardwood. Realistic wood-grain looks with waterproof cores. Comfortable underfoot and low maintenance.",
        highlights: [
          "Realistic wood look",
          "Waterproof core",
          "Click-lock install",
        ],
        href: "/plank-flooring",
        image: "/images/plank/plank-room.jpg",
        tag: "Most Popular",
      },
      {
        name: "Tile Flooring",
        description:
          "Large-format porcelain or natural stone for a sleek, modern look. Durable enough for high-traffic living spaces.",
        highlights: [
          "Large format options",
          "Timeless style",
          "Extremely durable",
        ],
        href: "/tile-flooring",
        image: "/images/tile/tile-hexagon.jpg",
      },
    ],
  },
  {
    id: "showroom-office",
    label: "Showroom & Office",
    icon: <Building2 className="h-5 w-5" />,
    tagline: "Make a lasting impression with every step.",
    systems: [
      {
        name: "Metallic Epoxy",
        description:
          "Flowing pearlescent finishes that turn floors into art. Every installation is unique — perfect for spaces that need to impress.",
        highlights: [
          "One-of-a-kind design",
          "Professional aesthetic",
          "Protective topcoat",
        ],
        href: "/metallic-epoxy",
        image: "/images/metallic/metallic-epoxy-red-black-swirl.jpg",
        tag: "Premium",
      },
      {
        name: "Concrete Polishing",
        description:
          "Mechanical refinement for a sleek, modern industrial look. Low maintenance with a professional finish. Levels 1–4.",
        highlights: [
          "Modern industrial look",
          "Ultra-low maintenance",
          "No coatings to wear off",
        ],
        href: "/concrete-polishing",
        image: "/images/concrete-polishing/polished-concrete-aci.jpg",
      },
    ],
  },
  {
    id: "utility-bonus",
    label: "Utility & Bonus Rooms",
    icon: <Warehouse className="h-5 w-5" />,
    tagline: "Upgrade underused spaces into finished, functional rooms.",
    systems: [
      {
        name: "Decorative Overlays",
        description:
          "Thin-section coatings over existing concrete. Cover imperfections and create beautiful finishes — microtoppings, stampable overlays, and polishable systems.",
        highlights: [
          "Covers imperfections",
          "Multiple finish styles",
          "10–20+ year lifespan",
        ],
        href: "/concrete-overlay",
        image: "/images/concrete-overlay/concrete-overlay-commercial-palms.jpg",
        tag: "Most Versatile",
      },
      {
        name: "Plank Flooring",
        description:
          "Waterproof luxury vinyl or SPC plank with click-lock install. Fast installation over existing concrete with a warm, comfortable feel.",
        highlights: [
          "100% waterproof",
          "Click-lock install",
          "Warm & comfortable",
        ],
        href: "/plank-flooring",
        image: "/images/plank/plank-luxury.jpg",
      },
    ],
  },
]

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function InteriorAreas() {
  const [activeArea, setActiveArea] = useState<string>("kitchen-bathroom")
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
            What Room Are You Transforming?
          </h2>
          <p className="mt-4 text-gray-500 text-lg leading-relaxed">
            Select your space and we&apos;ll recommend the right flooring system.
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
                          <Check className="h-4 w-4 text-teal shrink-0 mt-0.5" />
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
