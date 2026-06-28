import Link from "next/link"
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

/**
 * Server component. Entrance animations are CSS (.animate-reveal, opacity-only)
 * instead of framer-motion, so this hero — used across most pages — ships zero
 * client JS and keeps framer-motion out of those bundles (INP).
 */
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
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent animate-reveal">
              {badge}
            </span>
          )}
          <h1 className="mt-3 font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] tracking-tight leading-[1.08] max-w-4xl mx-auto text-text-light animate-reveal">
            {title}
            {highlight && (
              <>
                <br />
                <span className="text-accent">{highlight}</span>
              </>
            )}
          </h1>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-text-light-secondary animate-reveal">
            {subtitle}
          </p>
          {ctaText && (
            <div className="mt-6 sm:mt-8 animate-reveal">
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-accent-hover transition-all duration-200 shadow-xl shadow-accent/25"
              >
                {ctaText}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
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
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent animate-reveal">
            {badge}
          </span>
        )}
        <h1
          className={`mt-3 font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] tracking-tight leading-[1.08] max-w-4xl mx-auto animate-reveal ${
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
        </h1>
        <p
          className={`mt-4 sm:mt-5 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed animate-reveal ${
            dark ? "text-text-light-secondary" : "text-gray-500"
          }`}
        >
          {subtitle}
        </p>
        {ctaText && (
          <div className="mt-6 sm:mt-8 animate-reveal">
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-accent-hover transition-all duration-200 shadow-xl shadow-accent/25"
            >
              {ctaText}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
