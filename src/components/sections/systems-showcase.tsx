"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useMounted } from "@/hooks/use-mounted"

const systems = [
  {
    title: "ProFlake Epoxy",
    tag: "Most Popular",
    description:
      "Epoxy base + full flake broadcast + polyaspartic topcoat. 150+ Torginol color blends. Often completed in 1 day.",
    href: "/proflake",
    image: "/images/proflake/flake-garage-porsche-bikes.jpg",
    locations: ["Garages", "Commercial"],
  },
  {
    title: "Metallic Epoxy",
    description:
      "One-of-a-kind flowing metallic finishes with stunning pearlescent depth. 2\u20133 day installation.",
    href: "/metallic-epoxy",
    image: "/images/metallic/metallic-epoxy-red-black-swirl.jpg",
    locations: ["Garages", "Interior", "Commercial"],
  },
  {
    title: "VubaStone",
    description:
      "Resin-bound natural crushed Spanish marble. Fully permeable, 20\u201325 year lifespan.",
    href: "/vubastone",
    image: "/images/vubastone/vubastone-driveway-stone-columns.jpg",
    locations: ["Exterior"],
  },
  {
    title: "Concrete Polishing",
    description:
      "Mechanical refinement process \u2014 not a coating. Levels 1\u20134, Classes A\u2013D.",
    href: "/concrete-polishing",
    image: "/images/concrete-polishing/polished-concrete-aci.jpg",
    locations: ["Interior", "Commercial"],
  },
  {
    title: "Cool Deck / Patio",
    description:
      "Acrylic-based knockdown texture for pool decks and patios. Reduces surface temperature.",
    href: "/cool-deck",
    image: "/images/vubastone/vubastone-pool-deck-pergola.jpg",
    locations: ["Exterior"],
  },
  {
    title: "Turf & GrassMac",
    description:
      "Premium artificial turf and GrassMac resin-bound systems for lawns, pet areas, and putting greens.",
    href: "/turf",
    image: "/images/grassmac/dog-on-grass.jpg",
    locations: ["Exterior"],
  },
  {
    title: "Airplane Hangar",
    description:
      "High-performance coatings engineered for aircraft hangars. Resists jet fuel, hydraulic fluid, and heavy loads.",
    href: "/airplane-hangar",
    image: "/images/hangar/hangar-floor-drone-desert.jpg",
    locations: ["Commercial"],
  },
]

const DESKTOP_CARD_WIDTH = 520
const MOBILE_CARD_WIDTH = 300
const GAP = 20
// Pixels per second for auto-scroll
const AUTO_SPEED = 35

// Double items for seamless infinite loop
const doubled = [...systems, ...systems]

function SystemCard({
  sys,
  index,
  imgErrors,
  onImgError,
}: {
  sys: (typeof systems)[number]
  index: number
  imgErrors: Record<number, boolean>
  onImgError: (i: number) => void
}) {
  return (
    <Link href={sys.href} className="group block h-full" draggable={false}>
      <div className="flex flex-col sm:flex-row h-auto sm:h-[220px] rounded-2xl border border-gray-200 bg-white overflow-hidden hover:shadow-md transition-shadow duration-300">
        {/* Image */}
        <div className="relative w-full sm:w-[44%] h-[160px] sm:h-full shrink-0 overflow-hidden">
          {sys.image && !imgErrors[index] ? (
            <img
              src={sys.image}
              alt={sys.title}
              className="h-full w-full object-cover pointer-events-none"
              loading="lazy"
              draggable={false}
              onError={() => onImgError(index)}
            />
          ) : (
            <div className="h-full w-full bg-gray-100" />
          )}
          {sys.tag && (
            <span className="absolute top-3 left-3 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white uppercase tracking-wider shadow-lg z-10">
              {sys.tag}
            </span>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center p-5 sm:p-7 w-full sm:w-[56%]">
          {/* Location tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {sys.locations.map((loc) => (
              <span
                key={loc}
                className="inline-block rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-500 uppercase tracking-wide"
              >
                {loc}
              </span>
            ))}
          </div>

          <h3 className="font-heading font-bold text-lg text-gray-900 group-hover:text-accent transition-colors duration-200">
            {sys.title}
          </h3>
          <p className="mt-1.5 text-sm text-gray-500 leading-relaxed line-clamp-2">
            {sys.description}
          </p>
          <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
            Learn More{" "}
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}

export function SystemsShowcase() {
  const headerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const mounted = useMounted()
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({})
  const [cardWidth, setCardWidth] = useState(DESKTOP_CARD_WIDTH)

  // Responsive card width
  useEffect(() => {
    const updateWidth = () => {
      setCardWidth(window.innerWidth < 640 ? MOBILE_CARD_WIDTH : DESKTOP_CARD_WIDTH)
    }
    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  const SINGLE_SET_WIDTH = systems.length * (cardWidth + GAP)

  // JS-driven scroll state
  const offsetRef = useRef(0)
  const pausedRef = useRef(false)
  const dragRef = useRef({ isDragging: false, startX: 0, startOffset: 0, hasDragged: false })
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleImgError = (i: number) => {
    setImgErrors((prev) => ({ ...prev, [i]: true }))
  }

  // Wrap offset so it loops seamlessly
  const wrapOffset = (val: number) => {
    let o = val % SINGLE_SET_WIDTH
    if (o < 0) o += SINGLE_SET_WIDTH
    return o
  }

  // Apply transform
  const applyTransform = useCallback(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`
    }
  }, [])

  // Auto-scroll via requestAnimationFrame
  useEffect(() => {
    if (!mounted) return
    let lastTime: number | null = null
    let rafId: number

    const tick = (time: number) => {
      if (lastTime !== null && !pausedRef.current) {
        const delta = (time - lastTime) / 1000 // seconds
        offsetRef.current = wrapOffset(offsetRef.current + AUTO_SPEED * delta)
        applyTransform()
      }
      lastTime = time
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [mounted, applyTransform])

  // Pause & resume helpers
  const pause = useCallback(() => {
    pausedRef.current = true
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
  }, [])

  const scheduleResume = useCallback((ms: number) => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
    resumeTimerRef.current = setTimeout(() => {
      pausedRef.current = false
    }, ms)
  }, [])

  // Arrow buttons — smooth animated jump one card
  const animatingRef = useRef(false)
  const jumpBy = useCallback(
    (dir: number) => {
      if (animatingRef.current) return
      pause()
      animatingRef.current = true
      const start = offsetRef.current
      const target = start + dir * (cardWidth + GAP)
      const duration = 400 // ms
      const startTime = performance.now()

      const step = (now: number) => {
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3)
        offsetRef.current = wrapOffset(start + (target - start) * eased)
        applyTransform()
        if (progress < 1) {
          requestAnimationFrame(step)
        } else {
          animatingRef.current = false
          scheduleResume(3000)
        }
      }
      requestAnimationFrame(step)
    },
    [pause, scheduleResume, applyTransform, cardWidth]
  )

  // Mouse drag
  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      // Don't hijack clicks on links
      pause()
      dragRef.current = {
        isDragging: true,
        startX: e.clientX,
        startOffset: offsetRef.current,
        hasDragged: false,
      }
      ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
    },
    [pause]
  )

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragRef.current.isDragging) return
      const dx = e.clientX - dragRef.current.startX
      if (Math.abs(dx) > 4) dragRef.current.hasDragged = true
      offsetRef.current = wrapOffset(dragRef.current.startOffset - dx)
      applyTransform()
    },
    [applyTransform]
  )

  const onPointerUp = useCallback(() => {
    dragRef.current.isDragging = false
    scheduleResume(2000)
  }, [scheduleResume])

  // Wheel scroll — horizontal scrub
  const onWheel = useCallback(
    (e: React.WheelEvent) => {
      // Only hijack if mostly horizontal or shift held
      const dx = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.shiftKey ? e.deltaY : 0
      if (dx === 0) return
      e.preventDefault()
      pause()
      offsetRef.current = wrapOffset(offsetRef.current + dx * 1.5)
      applyTransform()
      scheduleResume(2000)
    },
    [pause, scheduleResume, applyTransform]
  )

  // Prevent click navigation if user was dragging
  const onClickCapture = useCallback((e: React.MouseEvent) => {
    if (dragRef.current.hasDragged) {
      e.preventDefault()
      e.stopPropagation()
      dragRef.current.hasDragged = false
    }
  }, [])

  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header row — title left, arrows + link right */}
        <div className="mb-12" ref={headerRef}>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <span className="text-sm font-semibold tracking-widest uppercase text-teal">
                Our Systems
              </span>
              <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl lg:text-[44px] text-gray-900 tracking-tight leading-[1.1]">
                Floor Systems Built for
                <br className="hidden lg:block" />
                Every Environment
              </h2>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <Link
                href="/services"
                className="text-sm font-medium text-gray-400 hover:text-accent transition-colors hidden sm:inline-flex items-center gap-1.5"
              >
                View all <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => jumpBy(-1)}
                  className="h-10 w-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-300 hover:text-gray-600 transition-colors"
                  aria-label="Previous system"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => jumpBy(1)}
                  className="h-10 w-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-300 hover:text-gray-600 transition-colors"
                  aria-label="Next system"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Continuous marquee carousel — contained, interactive */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div
            className="overflow-hidden w-full rounded-2xl cursor-grab active:cursor-grabbing"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onWheel={onWheel}
            onClickCapture={onClickCapture}
          >
            <div
              ref={trackRef}
              className="flex gap-5 w-max will-change-transform"
            >
              {doubled.map((sys, i) => (
                <div
                  key={`${sys.title}-${i}`}
                  className="shrink-0"
                  style={{ width: `${cardWidth}px` }}
                >
                  <SystemCard
                    sys={sys}
                    index={i % systems.length}
                    imgErrors={imgErrors}
                    onImgError={handleImgError}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-only view all link */}
      <div className="mt-8 sm:hidden text-center px-4">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
        >
          View All Services <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  )
}
