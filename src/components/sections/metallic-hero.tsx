"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function MetallicHero() {
  return (
    <section className="relative pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/metallic-hero-poster.jpg"
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/metallic-hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 30% 60%, rgba(247,148,29,0.10) 0%, transparent 55%),
              radial-gradient(ellipse at 75% 25%, rgba(247,148,29,0.06) 0%, transparent 45%),
              linear-gradient(180deg, rgba(17,28,46,0.85) 0%, rgba(17,28,46,0.75) 50%, rgba(17,28,46,0.88) 100%)
            `,
          }}
        />
      </div>

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-[15%] w-48 sm:w-72 h-48 sm:h-72 bg-accent/5 rounded-full blur-[80px] sm:blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="inline-block text-xs font-semibold tracking-widest uppercase text-accent"
        >
          Custom Luxury Flooring
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mt-3 font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] tracking-tight leading-[1.08] max-w-4xl mx-auto text-text-light"
        >
          Metallic Epoxy
          <br />
          <span className="text-accent">Floors</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="mt-4 sm:mt-5 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-text-light-secondary"
        >
          Hand-crafted liquid-metal floors with real depth and movement. Every pour is an original — designed, blended, and installed specifically for your space.
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
            Book a Design Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
