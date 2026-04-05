"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function HangarHero() {
  return (
    <section className="relative pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/hangar/hero-hangar.jpg"
          alt="Private jets in a clean airplane hangar with glossy coated floor"
          className="h-full w-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gray-950/70" />
        {/* Accent glow */}
        <div className="absolute top-1/3 right-[15%] w-48 sm:w-72 h-48 sm:h-72 bg-accent/8 rounded-full blur-[80px] sm:blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="inline-block text-xs font-semibold tracking-widest uppercase text-accent"
        >
          Aviation-Grade Floor Systems
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mt-3 font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] tracking-tight leading-[1.08] max-w-4xl mx-auto text-text-light"
        >
          Airplane Hangar
          <br />
          <span className="text-accent">Floor Coating</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="mt-4 sm:mt-5 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-text-light-secondary"
        >
          High-performance coating systems engineered to resist Skydrol, jet fuel, and the extreme demands of aviation environments. Not a residential product — built for hangars.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="mt-6 sm:mt-8"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-accent-hover transition-all duration-200 shadow-xl shadow-accent/25"
          >
            Get a Free Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
