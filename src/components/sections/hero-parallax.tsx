"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

/**
 * Deferred decorative layer for the hero: the autoplay video background and the
 * scroll-linked parallax (background scale + darkening overlay). Split out of
 * <Hero> so the hero's LCP layer (poster + headline) is a server component that
 * paints from SSR HTML without waiting on framer-motion hydration. Purely
 * decorative — the poster on the parent <section> already carries text contrast
 * before this hydrates, so nothing here gates the largest contentful paint.
 */
export function HeroParallax() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 0.3])

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Video background, scroll-scaled. preload="none" keeps it off the LCP path. */}
      <motion.div className="absolute inset-0" style={{ scale: bgScale }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/metallic-hero-poster.jpg"
          preload="none"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/metallic-hero-bg.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(17,28,46,0.88) 0%, rgba(14,24,38,0.78) 40%, rgba(11,20,32,0.85) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 75% 70%, rgba(222,134,20,0.08) 0%, transparent 50%),
              radial-gradient(ellipse at 15% 20%, rgba(93,158,226,0.05) 0%, transparent 40%)
            `,
          }}
        />
      </motion.div>

      {/* Scroll-linked darkening */}
      <motion.div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />
    </div>
  )
}
