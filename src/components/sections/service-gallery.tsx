"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowRight, Expand } from "lucide-react"

interface GalleryImage {
  src: string
  alt: string
  span?: string
}

interface ServiceGalleryProps {
  images: GalleryImage[]
}

export function ServiceGallery({ images }: ServiceGalleryProps) {
  const [lightbox, setLightbox] = useState<number | null>(null)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] sm:auto-rows-[240px] md:auto-rows-[220px] gap-3 sm:gap-4">
        {images.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className={`rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200 group h-full cursor-pointer relative ${img.span || ""}`}
            onClick={() => setLightbox(i)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Expand className="h-3.5 w-3.5 text-white" />
            </div>
          </div>
        ))}
      </div>

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
              className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            >
              <X className="h-5 w-5 text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                setLightbox((lightbox - 1 + images.length) % images.length)
              }}
              className="absolute left-4 sm:left-8 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            >
              <ArrowRight className="h-5 w-5 text-white rotate-180" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setLightbox((lightbox + 1) % images.length)
              }}
              className="absolute right-4 sm:right-8 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
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
                src={images[lightbox].src}
                alt={images[lightbox].alt}
                className="w-full h-full max-h-[85vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent rounded-b-lg">
                <p className="text-white font-semibold text-sm sm:text-base">{images[lightbox].alt}</p>
                <span className="text-white/60 text-xs">{lightbox + 1} / {images.length}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
