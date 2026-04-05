"use client"

import { useRef, useState, useCallback } from "react"
import {
  Sun,
  ThermometerSun,
  Droplets,
  Shield,
  Eye,
  Zap,
  GripVertical,
} from "lucide-react"

const benefits = [
  { icon: Sun, text: "UV-stable — won't yellow" },
  { icon: ThermometerSun, text: "Built for 110°F+ heat" },
  { icon: Droplets, text: "Breathable formula" },
  { icon: Shield, text: "No cracking or peeling" },
  { icon: Eye, text: "Wet-look or matte" },
  { icon: Zap, text: "Not sold at retail" },
]

function PaverBeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [sliderPos, setSliderPos] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

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
    [isDragging, updatePosition],
  )
  const handleMouseUp = () => setIsDragging(false)
  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => updatePosition(e.touches[0].clientX),
    [updatePosition],
  )

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-col-resize select-none shadow-2xl shadow-gray-900/10"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setIsDragging(false)}
    >
      {/* After — sealed pavers (full bg) */}
      <img
        src="/images/paver-sealing/paver-walkway-before.png"
        alt="After — sealed and color-enhanced paver walkway"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Before — unsealed pavers */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img
          src="/images/paver-sealing/paver-walkway-after.png"
          alt="Before — faded, unsealed paver walkway"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      {/* Labels */}
      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 rounded-full bg-black/50 backdrop-blur-sm px-3 py-1 text-[10px] sm:text-xs font-semibold text-white uppercase tracking-wider">
        Before
      </div>
      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 rounded-full bg-accent/80 backdrop-blur-sm px-3 py-1 text-[10px] sm:text-xs font-semibold text-white uppercase tracking-wider">
        After
      </div>

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 z-10"
        style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
        onMouseDown={handleMouseDown}
        onTouchStart={() => setIsDragging(true)}
      >
        <div className="h-full w-[3px] bg-white/90 shadow-lg" />
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white shadow-xl flex items-center justify-center transition-transform duration-150 ${
            isDragging ? "scale-110" : ""
          }`}
        >
          <GripVertical className="h-5 w-5 text-accent" />
        </div>
      </div>
    </div>
  )
}

export function PaverSealingSolution() {
  const ref = useRef<HTMLDivElement>(null)
  return (
    <section ref={ref} className="section-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: before/after slider */}
          <div>
            <PaverBeforeAfter />
          </div>

          {/* Right: sealer info */}
          <div>
            <div>
              <span className="text-sm font-semibold tracking-widest uppercase text-teal">
                The Solution
              </span>
              <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
                Professional-Grade Sealer,{" "}
                <span className="text-accent">Desert-Engineered</span>
              </h2>
              <p className="mt-4 text-gray-500 text-base sm:text-lg leading-relaxed">
                UV-stable, non-yellowing, breathable, and built to resist
                cracking in sustained triple-digit heat. Wet-look gloss or
                natural matte — same formula, same protection.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-4 sm:gap-y-5">
              {benefits.map((b, i) => {
                const Icon = b.icon
                return (
                  <div key={b.text} className="flex gap-3 items-center">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-subtle text-teal">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-gray-700 text-sm font-medium">
                      {b.text}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
