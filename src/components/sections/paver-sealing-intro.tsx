"use client"

import { useRef, useState, useCallback } from "react"
import { Check, GripVertical } from "lucide-react"

const highlights = [
  "Full pressure wash and surface prep before sealing",
  "Polymeric sand joint stabilization included",
  "Wet-look, matte, and color-enhancing sealer options",
  "Stain removal and old sealer stripping available",
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
      {/* After — sealed pavers (full bg, right side) */}
      <img
        src="/images/paver-sealing/paver-walkway-after.webp"
        alt="After — sealed and color-enhanced paver walkway"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Before — unsealed pavers (clipped, left side) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img
          src="/images/paver-sealing/paver-walkway-before.webp"
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

export function PaverSealingIntro() {
  const ref = useRef<HTMLDivElement>(null)
  return (
    <section ref={ref} className="section-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Before/After Slider */}
          <div>
            <PaverBeforeAfter />
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase text-teal">
              Professional Paver Care
            </span>
            <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
              Protect, Restore & Seal{" "}
              <span className="text-accent">Your Pavers</span>
            </h2>
            <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
              Las Vegas heat, UV, and monsoon rains degrade unsealed pavers
              fast &mdash; fading color, loosening joints, and letting weeds
              take over. We handle the full process: pressure wash, stain
              removal, polymeric sand stabilization, and professional sealer
              application. Your pavers come back looking new and stay protected.
            </p>

            <ul className="mt-6 space-y-3">
              {highlights.map((item, i) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-subtle text-teal">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
