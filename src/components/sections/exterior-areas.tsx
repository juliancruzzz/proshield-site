"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  Waves,
  TreePalm,
  Car,
  Footprints,
  Leaf,
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
    id: "pool-deck",
    label: "Pool Deck",
    icon: <Waves className="h-5 w-5" />,
    tagline: "Cool, slip-resistant surfaces designed for the Las Vegas heat.",
    systems: [
      {
        name: "VubaStone",
        description:
          "Resin-bound natural crushed Spanish marble. Fully permeable at 850 L/min — water drains through, not around. Beautiful natural stone finish.",
        highlights: [
          "Fully permeable surface",
          "Natural stone aesthetic",
          "20–25 year lifespan",
        ],
        href: "/vubastone",
        image: "/images/vubastone/vubastone-exterior-real.jpg",
        tag: "Most Popular",
      },
      {
        name: "Cool Deck / Knockdown Texture",
        description:
          "Acrylic-based knockdown texture that reduces surface temperature with lighter color options. Sealed with acrylic or acrylic/urethane blend for lasting protection.",
        highlights: [
          "Heat-reflective lighter colors",
          "Slip-resistant texture",
          "Acrylic/urethane sealer",
        ],
        href: "/cool-deck",
        image: "/images/cool-deck/cool-deck-knockdown-pool.jpg",
      },
      {
        name: "ProFlake Epoxy",
        description:
          "Epoxy base with full flake broadcast and polyaspartic topcoat. Works on any exterior concrete surface for a durable, decorative finish.",
        highlights: [
          "Works on any concrete surface",
          "Full flake broadcast",
          "Polyaspartic topcoat",
        ],
        href: "/proflake",
        image: "/images/proflake/flake-garage-porsche-bikes.jpg",
      },
    ],
  },
  {
    id: "patio",
    label: "Patio",
    icon: <TreePalm className="h-5 w-5" />,
    tagline: "Transform your outdoor living area into a showpiece.",
    systems: [
      {
        name: "VubaStone",
        description:
          "Polyurethane resin-bound aggregate surfacing with a seamless, decorative finish. Dozens of natural color blends to complement your home.",
        highlights: [
          "Seamless decorative finish",
          "Dozens of color blends",
          "Permeable — no standing water",
        ],
        href: "/vubastone",
        image: "/images/vubastone/vubastone-patio-firepit.webp",
        tag: "Most Popular",
      },
      {
        name: "Cool Deck / Knockdown Texture",
        description:
          "Acrylic knockdown texture creates a comfortable, slip-resistant patio surface. Great when you want a classic textured look.",
        highlights: [
          "Comfortable underfoot",
          "Classic textured look",
          "Heat-reflective options",
        ],
        href: "/cool-deck",
        image: "/images/cool-deck/cool-deck-knockdown-pool.jpg",
      },
      {
        name: "ProFlake Epoxy",
        description:
          "Epoxy base with full flake broadcast and polyaspartic topcoat. A versatile system that works on any exterior concrete patio.",
        highlights: [
          "Works on any concrete surface",
          "Dozens of flake color options",
          "Polyaspartic topcoat",
        ],
        href: "/proflake",
        image: "/images/proflake/flake-garage-porsche-bikes.jpg",
      },
      {
        name: "Paver Sealing",
        description:
          "Already have pavers? We'll seal and protect them — enhancing color and defending against stains and fading.",
        highlights: [
          "Enhances existing pavers",
          "Color & stain protection",
          "Periodic reapplication available",
        ],
        href: "/paver-sealing",
        image: "/images/paver-sealing/paver-walkway-sealed.jpg",
      },
    ],
  },
  {
    id: "driveway",
    label: "Driveway",
    icon: <Car className="h-5 w-5" />,
    tagline: "Curb appeal that lasts — durable enough for daily traffic.",
    systems: [
      {
        name: "VubaStone",
        description:
          "Resin-bound natural stone that handles vehicle traffic while looking stunning. Permeable surface means no puddles or drainage issues.",
        highlights: [
          "Handles vehicle traffic",
          "No puddles or pooling",
          "Premium curb appeal",
        ],
        href: "/vubastone",
        image: "/images/vubastone/vubastone-driveway-stone-columns.jpg",
        tag: "Most Popular",
      },
      {
        name: "ProFlake Epoxy",
        description:
          "Epoxy base with full flake broadcast and polyaspartic topcoat. Durable enough for vehicle traffic on any concrete driveway.",
        highlights: [
          "Works on any concrete surface",
          "Durable under vehicle traffic",
          "Polyaspartic topcoat",
        ],
        href: "/proflake",
        image: "/images/proflake/flake-garage-porsche-bikes.jpg",
      },
      {
        name: "Paver Sealing",
        description:
          "Protect and restore your existing paver driveway. Sealing enhances color and helps prevent weed growth between joints.",
        highlights: [
          "Restores faded pavers",
          "Helps reduce weed growth",
          "UV & stain protection",
        ],
        href: "/paver-sealing",
        image: "/images/paver-sealing/paver-walkway-sealed.jpg",
      },
    ],
  },
  {
    id: "walkways",
    label: "Walkways",
    icon: <Footprints className="h-5 w-5" />,
    tagline: "Safe, beautiful pathways that tie your outdoor space together.",
    systems: [
      {
        name: "VubaStone",
        description:
          "Create stunning, seamless walkways with natural stone aggregate. Slip-resistant texture and permeable design for safety in all conditions.",
        highlights: [
          "Seamless transitions",
          "Slip-resistant surface",
          "Natural stone beauty",
        ],
        href: "/vubastone",
        image: "/images/vubastone/vubastone-walkway-wood-inlay.jpg",
        tag: "Most Popular",
      },
      {
        name: "ProFlake Epoxy",
        description:
          "Epoxy base with full flake broadcast and polyaspartic topcoat. A clean, decorative finish for any concrete walkway.",
        highlights: [
          "Works on any concrete surface",
          "Slip-resistant flake texture",
          "Polyaspartic topcoat",
        ],
        href: "/proflake",
        image: "/images/proflake/flake-garage-porsche-bikes.jpg",
      },
      {
        name: "Paver Sealing",
        description:
          "Seal existing paver walkways to lock in color and create a cleaner, more polished look throughout your property.",
        highlights: [
          "Locks in color",
          "Cleaner finished look",
          "Protects investment",
        ],
        href: "/paver-sealing",
        image: "/images/paver-sealing/paver-walkway-sealed.jpg",
      },
    ],
  },
  {
    id: "lawn",
    label: "Lawn & Turf",
    icon: <Leaf className="h-5 w-5" />,
    tagline: "Low-maintenance green space — perfect for Las Vegas.",
    systems: [
      {
        name: "GrassMac & Turf Installation",
        description:
          "GrassMac engineered permeable base beneath premium artificial grass. Built with SRM, VubaMac resin, and recycled rubber + aggregate for proper drainage.",
        highlights: [
          "Engineered drainage base",
          "Low maintenance",
          "Great for pets & play areas",
        ],
        href: "/grassmac",
        image: "/images/grassmac/dog-on-grass.jpg",
        tag: "Full Install",
      },
    ],
  },
]

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function ExteriorAreas() {
  const [activeArea, setActiveArea] = useState<string>("pool-deck")
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
            Choose Your Area
          </span>
          <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight">
            What Are You Transforming?
          </h2>
          <p className="mt-4 text-gray-500 text-lg leading-relaxed">
            Select an area below and we&apos;ll show you the best systems for the job.
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
