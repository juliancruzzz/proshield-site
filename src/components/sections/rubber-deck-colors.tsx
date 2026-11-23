"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const gallery = [
  {
    src: "/images/blog/rubber-deck/rubber-deck-pool-hottub.jpg",
    alt: "Surface example: Two-tone gray rubber pool deck around pool and hot tub",
    label: "Example: Two-Tone Gray",
  },
  {
    src: "/images/blog/rubber-deck/rubber-deck-terracotta.jpg",
    alt: "Surface example: Terracotta copper rubber aggregate pool deck showing warm tones around a pool",
    label: "Example: Terracotta / Copper",
  },
  {
    src: "/images/blog/rubber-deck/rubber-deck-pool-slide.jpg",
    alt: "Surface example: Gray rubber pool deck with slide and pergola backyard",
    label: "Example: Classic Gray",
  },
]

export function RubberDeckColors() {
  return (
    <section className="section-gray py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-10 sm:mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            Colors & Design
          </span>
          <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
            Rubber colors and borders
          </h2>
          <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
            A single blend gives the pool surround a consistent color. A second blend can outline the pool or separate a seating area from the walkway.
          </p>
          <p className="mt-3 text-gray-500 text-sm leading-relaxed">
            These examples show how a blend looks across a whole deck.
          </p>
        </div>

        {/* Gallery grid — 3 equal columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {gallery.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <span className="text-sm font-medium text-white/90 drop-shadow">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-base font-semibold text-navy hover:bg-accent-hover transition-colors shadow-lg shadow-accent/15"
          >
            Ask About Rubber Colors <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
