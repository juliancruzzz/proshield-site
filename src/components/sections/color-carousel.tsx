"use client"

import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ColorItem {
  name: string
  image: string
}

export function ColorCarousel({ items }: { items: ColorItem[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
  }

  useEffect(() => {
    checkScroll()
    const el = scrollRef.current
    if (el) el.addEventListener("scroll", checkScroll, { passive: true })
    return () => el?.removeEventListener("scroll", checkScroll)
  }, [])

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return
    const amount = el.clientWidth * 0.7
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" })
  }

  return (
    <div className="relative group/carousel">
      {/* Navigation arrows */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/90 border border-gray-200 shadow-lg flex items-center justify-center text-gray-600 hover:text-accent hover:border-accent/30 transition-all -translate-x-1/2 opacity-0 group-hover/carousel:opacity-100"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/90 border border-gray-200 shadow-lg flex items-center justify-center text-gray-600 hover:text-accent hover:border-accent/30 transition-all translate-x-1/2 opacity-0 group-hover/carousel:opacity-100"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      )}

      {/* Fade edges */}
      {canScrollLeft && (
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-[5] pointer-events-none" />
      )}
      {canScrollRight && (
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-[5] pointer-events-none" />
      )}

      {/* Scrollable strip */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-2 -mx-1 px-1 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item) => (
          <div
            key={item.name}
            className="shrink-0 w-44 sm:w-52 snap-start group"
          >
            <div className="aspect-square rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm transition-all duration-200 group-hover:shadow-md group-hover:border-accent/30 group-hover:scale-105">
              <img
                src={item.image}
                alt={`${item.name} color sample`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="mt-2.5 text-sm font-medium text-gray-600 text-center group-hover:text-accent transition-colors duration-150 leading-tight">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
