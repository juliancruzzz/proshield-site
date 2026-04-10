"use client"

import { useRef, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GripVertical, ArrowRight, Star, X } from "lucide-react"
import Link from "next/link"

export function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [sliderPos, setSliderPos] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [selectedBlend, setSelectedBlend] = useState<number | null>(0)

  const featuredBlends = [
    { name: "Waxwing", code: "FB-968", image: "/images/flake/signature/waxwing.jpg" },
    { name: "Tidal Wave", code: "FB-807", image: "/images/flake/signature/tidal-wave.jpg" },
    { name: "Coyote", code: "FB-513", image: "/images/flake/signature/coyote.jpg" },
    { name: "Nightfall", code: "FB-715", image: "/images/flake/signature/nightfall.jpg" },
    { name: "Polar", code: "FB-330", image: "/images/flake/modern/polar.jpg" },
    { name: "Dovetail", code: "FB-823", image: "/images/flake/modern/dovetail.jpg" },
  ]

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100))
    setSliderPos(percent)
  }, [])

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging) updatePosition(e.clientX)
    },
    [isDragging, updatePosition]
  )
  const handleMouseUp = () => setIsDragging(false)
  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      updatePosition(e.touches[0].clientX)
    },
    [updatePosition]
  )

  return (
    <section ref={sectionRef} className="relative bg-white py-24 lg:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Two-column layout: left = text + stats, right = slider */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column — text content */}
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-accent">
              <Star className="h-3.5 w-3.5 fill-accent text-accent" />
              Our Flagship System
            </span>
            <h2 className="mt-4 font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight">
              The ProFlake{" "}
              <span className="text-accent">Difference</span>
            </h2>
            <p className="mt-5 text-gray-500 text-lg leading-relaxed">
              Drag the slider to see a raw concrete floor transformed with our
              Torginol ProFlake system. One day. One floor. Complete
              transformation.
            </p>

            {/* Stats row */}
            <div className="mt-8 flex items-center divide-x divide-gray-200">
              {[
                { val: "1 Day", label: "Install Time" },
                { val: "150+", label: "Color Blends" },
                { val: "Lifetime", label: "Warranty" },
              ].map((s, i) => (
                <div key={s.label} className={`${i === 0 ? "pr-6" : "px-6"}`}>
                  <div className="text-xl font-heading font-bold text-accent">
                    {s.val}
                  </div>
                  <div className="text-sm text-gray-500 mt-0.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA button — hidden on mobile, shown on desktop */}
            <div className="mt-8 hidden lg:block">
              <Link
                href="/proflake"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-base font-semibold text-white hover:bg-accent-hover transition-all duration-200 shadow-lg shadow-accent/15"
              >
                Explore the ProFlake System
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right column — before/after slider */}
          <div>
            <div
              ref={containerRef}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-col-resize select-none shadow-xl border border-gray-200"
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchMove={handleTouchMove}
              onTouchEnd={() => setIsDragging(false)}
            >
              {/* "After" image — full background (finished floor) */}
              <img
                src="/images/proflake/flake-garage-after-coated.webp"
                alt="Finished garage floor with ProFlake epoxy coating"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
                width={1200}
                height={1599}
              />

              {/* "Before" image — clipped overlay (raw concrete) */}
              <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              >
                <img
                  src="/images/proflake/flake-garage-before-concrete.webp"
                  alt="Raw concrete garage floor before ProFlake epoxy installation"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width={1000}
                  height={1791}
                />
              </div>

              {/* Labels */}
              <div className="absolute top-4 left-4 rounded-full bg-gray-800/70 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white uppercase tracking-wider">
                Before
              </div>
              <div className="absolute top-4 right-4 rounded-full bg-accent/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white uppercase tracking-wider">
                After
              </div>

              {/* Slider handle */}
              <div
                className="absolute top-0 bottom-0 z-10"
                style={{
                  left: `${sliderPos}%`,
                  transform: "translateX(-50%)",
                }}
                onMouseDown={handleMouseDown}
                onTouchStart={() => setIsDragging(true)}
              >
                <div className="h-full w-0.5 bg-white shadow-lg" />
                <div
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white shadow-xl flex items-center justify-center transition-transform duration-150 ${
                    isDragging ? "scale-110" : ""
                  }`}
                >
                  <GripVertical className="h-5 w-5 text-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile CTA — below the slider image */}
        <div className="mt-8 lg:hidden text-center">
          <Link
            href="/proflake"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-base font-semibold text-white hover:bg-accent-hover transition-all duration-200 shadow-lg shadow-accent/15"
          >
            Explore the ProFlake System
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Featured flake color blends */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-teal leading-normal">
              Popular Flake Blends
            </h3>
            <Link
              href="/proflake"
              className="text-sm font-medium text-gray-500 hover:text-accent transition-colors flex items-center gap-1.5"
            >
              See all 150+ colors <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Expanded preview */}
          <AnimatePresence>
            {selectedBlend !== null && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden mb-5"
              >
                <div className="flex items-center gap-6 rounded-2xl bg-white border border-gray-200 p-4 shadow-sm">
                  <div className="h-28 w-28 sm:h-36 sm:w-36 shrink-0 rounded-xl overflow-hidden">
                    <img
                      src={featuredBlends[selectedBlend].image}
                      alt={featuredBlends[selectedBlend].name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      {featuredBlends[selectedBlend].code}
                    </p>
                    <h4 className="mt-1 font-heading font-bold text-xl text-gray-900">
                      {featuredBlends[selectedBlend].name}
                    </h4>
                    <p className="mt-2 text-sm text-gray-500">
                      Full-flake blend. Available in 1/4&quot; chip size.
                    </p>
                    <Link
                      href="/proflake"
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
                    >
                      View in ProFlake system <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                  <button
                    onClick={() => setSelectedBlend(null)}
                    className="shrink-0 h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-gray-600 hover:bg-gray-200 transition-colors self-start"
                    aria-label="Close preview"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {featuredBlends.map((blend, i) => (
              <div key={blend.code}>
                <button
                  onClick={() => setSelectedBlend(selectedBlend === i ? null : i)}
                  className={`group w-full text-left transition-all duration-200 rounded-xl ${
                    selectedBlend === i ? "ring-2 ring-accent ring-offset-2 scale-105" : "opacity-85 hover:opacity-100"
                  }`}
                >
                  <div className={`aspect-square rounded-xl overflow-hidden border-2 shadow-sm transition-all duration-200 cursor-pointer ${
                    selectedBlend === i ? "border-accent shadow-md" : "border-gray-200 group-hover:shadow-md"
                  }`}>
                    <img
                      src={blend.image}
                      alt={`${blend.name} flake blend`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <p className={`mt-2 text-center text-xs font-semibold transition-colors ${
                    selectedBlend === i ? "text-accent" : "text-gray-600 group-hover:text-gray-800"
                  }`}>
                    {blend.name}
                  </p>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
