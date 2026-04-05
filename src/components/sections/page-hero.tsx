"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface PageHeroProps {
  badge?: string
  title: string
  highlight?: string
  subtitle: string
  ctaText?: string
  ctaHref?: string
  dark?: boolean
  /** Path to a background image — when provided, renders a full-bleed photo hero like the hangar page */
  backgroundImage?: string
  /** Alt text for the background image */
  backgroundAlt?: string
}

export function PageHero({
  badge,
  title,
  highlight,
  subtitle,
  ctaText = "Get a Free Quote",
  ctaHref = "/contact",
  dark = true,
  backgroundImage,
  backgroundAlt = "",
}: PageHeroProps) {
  /* ── Image hero (hangar-style) ── */
  if (backgroundImage) {
    return (
      <section className="relative pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt={backgroundAlt}
            className="h-full w-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gray-950/70" />
          {/* Accent glow */}
          <div className="absolute top-1/3 right-[15%] w-48 sm:w-72 h-48 sm:h-72 bg-accent/8 rounded-full blur-[80px] sm:blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          {badge && (
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="inline-block text-xs font-semibold tracking-widest uppercase text-accent"
            >
              {badge}
            </motion.span>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="mt-3 font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] tracking-tight leading-[1.08] max-w-4xl mx-auto text-text-light"
          >
            {title}
            {highlight && (
              <>
                <br />
                <span className="text-accent">{highlight}</span>
              </>
            )}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="mt-4 sm:mt-5 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-text-light-secondary"
          >
            {subtitle}
          </motion.p>
          {ctaText && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="mt-6 sm:mt-8"
            >
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-accent-hover transition-all duration-200 shadow-xl shadow-accent/25"
              >
                {ctaText}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          )}
        </div>
      </section>
    )
  }

  /* ── Original mesh-gradient / gray hero (fallback) ── */
  return (
    <section
      className={`relative pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-40 lg:pb-28 overflow-hidden ${
        dark ? "mesh-gradient" : "section-gray"
      }`}
    >
      {dark && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-[15%] w-48 sm:w-72 h-48 sm:h-72 bg-accent/5 rounded-full blur-[80px] sm:blur-[100px]" />
        </div>
      )}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="inline-block text-xs font-semibold tracking-widest uppercase text-accent"
          >
            {badge}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className={`mt-3 font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] tracking-tight leading-[1.08] max-w-4xl mx-auto ${
            dark ? "text-text-light" : "text-gray-900"
          }`}
        >
          {title}
          {highlight && (
            <>
              <br />
              <span className="text-accent">{highlight}</span>
            </>
          )}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className={`mt-4 sm:mt-5 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed ${
            dark ? "text-text-light-secondary" : "text-gray-500"
          }`}
        >
          {subtitle}
        </motion.p>
        {ctaText && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="mt-6 sm:mt-8"
          >
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-accent-hover transition-all duration-200 shadow-xl shadow-accent/25"
            >
              {ctaText}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}
