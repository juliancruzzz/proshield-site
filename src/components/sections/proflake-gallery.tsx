"use client"
import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Expand, X } from "lucide-react"

const photos = [
  {
    src: "/images/proflake/flake-garage-porsche-bikes.jpg",
    alt: "ProFlake epoxy motorcycle showroom garage",
    label: "Motorcycle Showroom",
    tag: "Garage",
  },
  {
    src: "/images/proflake/flake-garage-dark-grey.jpg",
    alt: "ProFlake dark grey residential garage floor",
    label: "Dark Grey Residential",
    tag: "Garage",
  },
  {
    src: "/images/proflake/flake-garage-blue-paver-border.jpg",
    alt: "ProFlake garage with blue paver border",
    label: "Blue Paver Border",
    tag: "Garage",
  },
  {
    src: "/images/proflake/flake-garage-sunlight-paver.jpg",
    alt: "ProFlake garage with sunlit paver design",
    label: "Sunlight Paver",
    tag: "Garage",
  },
  {
    src: "/images/proflake/flake-garage-wide-clean.jpg",
    alt: "ProFlake wide clean garage installation",
    label: "Wide Clean Finish",
    tag: "Garage",
  },
  {
    src: "/images/proflake/flake-garage-open-door-shelving.jpg",
    alt: "ProFlake garage with open door and shelving",
    label: "Open Door Display",
    tag: "Garage",
  },
]

export function ProFlakeGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  return (
    <>
      <section className="section-gray py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <span className="text-sm font-semibold tracking-widest uppercase text-teal">
                Our Work
              </span>
              <h2 className="mt-2 font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight">
                ProFlake In Action
              </h2>
            </div>
            <Link
              href="/gallery"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors shrink-0"
            >
              View Full Gallery <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Masonry-style grid: large left + 2×2 right */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">
            {/* Feature image — large */}
            <div
              className="md:col-span-7 group relative cursor-pointer"
              onClick={() => setLightbox(0)}
            >
              <div className="aspect-[4/3] md:aspect-auto md:h-full rounded-2xl overflow-hidden bg-gray-100">
                <img
                  src={photos[0].src}
                  alt={photos[0].alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div>
                  <span className="inline-block rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-[11px] font-semibold text-white uppercase tracking-wider mb-2">
                    {photos[0].tag}
                  </span>
                  <p className="text-white font-semibold text-lg">{photos[0].label}</p>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <Expand className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>

            {/* Right 2×2 grid */}
            <div className="md:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
              {photos.slice(1).map((photo, i) => (
                <div
                  key={photo.src}
                  className={`group relative cursor-pointer ${i >= 2 ? "hidden md:block" : ""}`}
                  onClick={() => setLightbox(i + 1)}
                >
                  <div className="aspect-square rounded-xl overflow-hidden bg-gray-100">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-sm font-medium">{photo.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="mt-6 text-center sm:hidden">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
            >
              View Full Gallery <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="h-5 w-5 text-white" />
            </button>

            {/* Nav arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                setLightbox((lightbox - 1 + photos.length) % photos.length)
              }}
              className="absolute left-4 sm:left-8 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ArrowRight className="h-5 w-5 text-white rotate-180" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setLightbox((lightbox + 1) % photos.length)
              }}
              className="absolute right-4 sm:right-8 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ArrowRight className="h-5 w-5 text-white" />
            </button>

            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[lightbox].src}
                alt={photos[lightbox].alt}
                className="w-full h-full max-h-[85vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent rounded-b-lg">
                <span className="inline-block rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-[11px] font-semibold text-white uppercase tracking-wider mb-1">
                  {photos[lightbox].tag}
                </span>
                <p className="text-white font-semibold">{photos[lightbox].label}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
