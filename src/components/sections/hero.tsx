"use client"

import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, MapPin } from "lucide-react"
import { useRef } from "react"
import { useMounted } from "@/hooks/use-mounted"

export function Hero() {
  const mounted = useMounted()
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 0.3])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[85vh] sm:min-h-screen flex items-end sm:items-center overflow-hidden"
    >
      {/* Video Background */}
      <motion.div className="absolute inset-0" style={{ scale: bgScale }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/metallic-hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay so text remains readable */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(160deg, rgba(17,28,46,0.85) 0%, rgba(14,24,38,0.78) 40%, rgba(11,20,32,0.82) 100%)
            `,
          }}
        />
        {/* Subtle warm glow — bottom right */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 75% 70%, rgba(231,132,39,0.08) 0%, transparent 50%),
              radial-gradient(ellipse at 15% 20%, rgba(93,158,226,0.05) 0%, transparent 40%)
            `,
          }}
        />
      </motion.div>

      {/* Scroll-linked darkening */}
      <motion.div
        className="absolute inset-0 bg-black pointer-events-none"
        style={{ opacity: overlayOpacity }}
      />

      {/* Single soft ambient orb */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] right-[5%] w-96 h-96 bg-accent/5 rounded-full blur-[150px] animate-drift" />
      </div>

      {/* Main content */}
      <motion.div
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-14 sm:pt-32 sm:pb-24 z-10 w-full"
        style={{ y: textY }}
      >
        <div className="max-w-3xl">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="font-heading font-bold text-4xl sm:text-5xl md:text-7xl lg:text-[76px] text-white leading-[1.08] tracking-[-0.03em]"
          >
            Professional-Grade
            <br />
            <span className="text-accent">Floor Coatings</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            className="mt-6 text-lg sm:text-xl text-white/60 max-w-lg leading-relaxed"
          >
            Epoxy, metallic, VubaStone, and polished concrete systems for
            garages, commercial spaces, and beyond.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mt-10 flex flex-col sm:flex-row items-start gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white hover:bg-accent-hover transition-colors duration-200 shadow-xl shadow-accent/20"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/12 bg-white/[0.04] px-8 py-4 text-base font-semibold text-white/80 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200"
            >
              View Our Work
            </Link>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
            className="mt-8 inline-flex items-center gap-2 text-sm text-white/50"
          >
            <MapPin className="h-3.5 w-3.5 text-accent" />
            Las Vegas Metro &amp; Surrounding Areas
          </motion.div>

        </div>
      </motion.div>

    </section>
  )
}
