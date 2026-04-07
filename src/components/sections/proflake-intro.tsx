"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import { Check, GripVertical } from "lucide-react"

const highlights = [
  "Polyaspartic topcoat — the only residential system that features it",
  "UV-stable, chemical resistant, and hot tire resistant",
  "150+ Torginol color blends for unmatched customization",
  "Walk-on in 24 hours — drive-on in 48 hours",
]

export function ProFlakeIntro() {
  const [sliderPos, setSliderPos] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [containerWidth, setContainerWidth] = useState<number | null>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateWidth = () => {
      if (sliderRef.current) {
        setContainerWidth(sliderRef.current.offsetWidth)
      }
    }
    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  const updatePosition = useCallback((clientX: number) => {
    if (!sliderRef.current) return
    const rect = sliderRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percent = Math.max(4, Math.min(96, (x / rect.width) * 100))
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
    (e: React.TouchEvent) => updatePosition(e.touches[0].clientX),
    [updatePosition]
  )

  return (
    <section className="section-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Before/After Slider */}
          <div className="relative">
            <div
              ref={sliderRef}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-col-resize select-none shadow-2xl shadow-gray-900/10"
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleMouseUp}
            >
              {/* After image (full, underneath) */}
              <img
                src="/images/proflake/flake-garage-after-coated.webp"
                alt="Finished garage floor with ProFlake polyurea coating and decorative flakes"
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
              />

              {/* Before image (clipped) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPos}%` }}
              >
                <img
                  src="/images/proflake/flake-garage-before-concrete.webp"
                  alt="Raw concrete garage floor before ProFlake coating installation"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    width: containerWidth
                      ? `${containerWidth}px`
                      : "100%",
                    maxWidth: "none",
                  }}
                  draggable={false}
                />
              </div>

              {/* Slider handle */}
              <div
                className="absolute top-0 bottom-0 z-20"
                style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
              >
                <div className="h-full w-[3px] bg-white/90 shadow-lg" />
                <div
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-white shadow-xl flex items-center justify-center cursor-col-resize hover:scale-110 transition-transform"
                  onMouseDown={handleMouseDown}
                  onTouchStart={handleMouseDown}
                >
                  <GripVertical className="h-5 w-5 text-gray-500" />
                </div>
              </div>

              {/* Labels */}
              <span className="absolute top-4 left-4 z-10 rounded-full bg-black/50 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-white/90">
                Before
              </span>
              <span className="absolute top-4 right-4 z-10 rounded-full bg-accent/80 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                After
              </span>
            </div>
          </div>

          {/* Content side */}
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase text-teal">
              Premium Garage Floor System
            </span>
            <h2 className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight leading-tight">
              What Is ProFlake?
            </h2>
            <p className="mt-4 sm:mt-5 text-gray-600 text-base sm:text-lg leading-relaxed">
              ProFlake is a premium, multi-layer polyurea coating system that outperforms traditional epoxy in every way. Built with a polyurea basecoat and polyaspartic topcoat, ProFlake delivers superior UV stability, chemical resistance, and hot tire resistance — everything you need in a garage floor.
            </p>

            {/* Highlight checklist */}
            <ul className="mt-6 sm:mt-8 space-y-3">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 h-5 w-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Check className="h-3 w-3 text-accent" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-600 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
