"use client"

import { useState, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GripVertical } from "lucide-react"

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface Project {
  label: string
  system: string
  location: string
  before: string
  after: string
}

const projects: Project[] = [
  {
    label: "Pool Deck Resurface",
    system: "Cool Deck",
    location: "Henderson, NV",
    before: "/images/vubastone/vubastone-pool-deck-closeup.webp",
    after: "/images/cool-deck/cool-deck-pool-spa-vegas.webp",
  },
  {
    label: "Driveway Transformation",
    system: "VubaStone",
    location: "Summerlin, NV",
    before: "/images/cool-deck/cool-deck-patio-turf-border.webp",
    after: "/images/vubastone/vubastone-driveway-stone-columns.webp",
  },
  {
    label: "Patio Upgrade",
    system: "VubaStone",
    location: "Las Vegas, NV",
    before: "/images/vubastone/vubastone-steps-contrast.webp",
    after: "/images/vubastone/vubastone-patio-firepit.webp",
  },
]

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function ExteriorBeforeAfter() {
  const [active, setActive] = useState(0)
  const [sliderPos, setSliderPos] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const project = projects[active]

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

  const switchProject = (i: number) => {
    setActive(i)
    setSliderPos(50)
  }

  return (
    <section
      ref={sectionRef}
      className="relative bg-gray-50 py-20 lg:py-28 overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold tracking-widest uppercase text-teal">
            Real Results
          </span>
          <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight">
            See the Difference
          </h2>
          <p className="mt-4 text-gray-500 text-lg leading-relaxed">
            Drag the slider to compare — actual exterior projects by ProShield.
          </p>
        </div>

        {/* Tabs at the top */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {projects.map((p, i) => {
            const isActive = active === i
            return (
              <button
                key={p.label}
                onClick={() => switchProject(i)}
                className={`
                  flex flex-col items-center rounded-xl px-5 py-2.5 transition-all duration-300 cursor-pointer border
                  ${
                    isActive
                      ? "bg-white border-accent/30 shadow-lg shadow-accent/5"
                      : "bg-white/60 border-gray-200 hover:bg-white hover:border-gray-300"
                  }
                `}
              >
                <span
                  className={`text-sm font-semibold transition-colors duration-200 ${
                    isActive ? "text-accent" : "text-gray-700"
                  }`}
                >
                  {p.system}
                </span>
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.span
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="text-xs text-gray-500 mt-0.5 overflow-hidden"
                    >
                      {p.label} &middot; {p.location}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            )
          })}
        </div>

        {/* Slider */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div
                ref={sliderRef}
                className="relative w-full aspect-[16/9] sm:aspect-[2/1] rounded-2xl overflow-hidden cursor-col-resize select-none shadow-xl"
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleMouseUp}
              >
                {/* After image (full, underneath) */}
                <img
                  src={project.after}
                  alt={`${project.label} — after`}
                  className="absolute inset-0 w-full h-full object-cover"
                  draggable={false}
                />

                {/* Before image (clipped) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPos}%` }}
                >
                  <img
                    src={project.before}
                    alt={`${project.label} — before`}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                      width: sliderRef.current
                        ? `${sliderRef.current.offsetWidth}px`
                        : "100vw",
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

                {/* Before / After labels */}
                <span className="absolute top-4 left-4 z-10 rounded-full bg-black/50 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-white/90">
                  Before
                </span>
                <span className="absolute top-4 right-4 z-10 rounded-full bg-accent/80 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  After
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
