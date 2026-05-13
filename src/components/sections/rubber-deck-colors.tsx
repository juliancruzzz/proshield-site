"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const gallery = [
  {
    src: "/images/blog/rubber-deck/rubber-deck-pool-hottub.jpg",
    alt: "Two-tone gray rubber pool deck around pool and hot tub in Las Vegas",
    label: "Two-Tone Gray",
  },
  {
    src: "/images/blog/rubber-deck/rubber-deck-terracotta.jpg",
    alt: "Terracotta copper rubber aggregate pool deck showing warm tones around a Las Vegas pool",
    label: "Terracotta / Copper",
  },
  {
    src: "/images/blog/rubber-deck/rubber-deck-pool-slide.jpg",
    alt: "Gray rubber pool deck with slide and pergola in Las Vegas backyard",
    label: "Classic Gray",
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
            Dozens of Color Blends Available
          </h2>
          <p className="mt-3 text-gray-500 text-base sm:text-lg leading-relaxed">
            From classic desert earth tones — sandstone, tan, warm gray — to bolder options like
            terracotta, slate blue, and custom multi-color blends. Multi-zone designs, borders,
            and accent bands are all possible because every pour is hand-troweled.
          </p>
          <p className="mt-3 text-gray-500 text-sm leading-relaxed">
            We bring physical samples to your estimate so you can see the actual colors on
            your concrete in your lighting — screens don&apos;t do them justice.
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
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-base font-semibold text-white hover:bg-accent-hover transition-colors shadow-lg shadow-accent/15"
          >
            See Color Samples at Your Estimate <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
