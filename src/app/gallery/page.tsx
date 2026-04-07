"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { PageHero } from "@/components/sections/page-hero"
import { Breadcrumbs } from "@/components/sections/breadcrumbs"
import { CtaSection } from "@/components/sections/cta-section"

const filters = ["All", "Garage", "Commercial", "Metallic", "Flake", "VubaStone", "Overlay", "Turf", "Hangar"]

const projects = [
  // ── Metallic Epoxy ──────────────────────────────────────────
  { id: 1, title: "Metallic Epoxy — Red & Black Swirl", type: "Metallic", image: "/images/metallic/metallic-epoxy-red-black-swirl.webp", color: "from-red-300 to-red-100" },
  { id: 2, title: "Metallic Epoxy — Red & Black Angle", type: "Metallic", image: "/images/metallic/metallic-epoxy-red-black-angle2.webp", color: "from-red-200 to-red-100" },
  { id: 3, title: "Metallic Epoxy — Blue Ocean Garage", type: "Metallic", image: "/images/metallic/metallic-epoxy-blue-ocean-garage.webp", color: "from-blue-300 to-blue-100" },
  { id: 4, title: "Metallic Epoxy — Pink Magenta Salon", type: "Metallic", image: "/images/metallic/metallic-epoxy-pink-magenta-salon.webp", color: "from-pink-300 to-pink-100" },
  { id: 5, title: "Metallic Epoxy — Silver Kitchen", type: "Metallic", image: "/images/metallic/metallic-epoxy-silver-kitchen-real.webp", color: "from-gray-300 to-gray-100" },
  { id: 6, title: "Metallic Epoxy — Silver Hallway", type: "Metallic", image: "/images/metallic/metallic-epoxy-silver-hallway.webp", color: "from-gray-200 to-gray-100" },
  { id: 7, title: "Metallic Epoxy — Commercial with Stairs", type: "Metallic", image: "/images/metallic/metallic-epoxy-commercial-stairs.webp", color: "from-zinc-300 to-zinc-100" },
  { id: 8, title: "Metallic Epoxy — Commercial Silver Wide", type: "Metallic", image: "/images/metallic/metallic-epoxy-commercial-silver-wide.webp", color: "from-slate-300 to-slate-100" },
  { id: 9, title: "Metallic Epoxy — Chop Shop Neon", type: "Metallic", image: "/images/metallic/metallic-epoxy-chopshop-neon.webp", color: "from-zinc-400 to-zinc-100" },
  { id: 10, title: "Metallic Epoxy — Chop Shop Porsche Wall", type: "Metallic", image: "/images/metallic/metallic-epoxy-chopshop-porsche.webp", color: "from-gray-300 to-gray-100" },
  { id: 11, title: "Metallic Epoxy — Chop Shop Red Wall", type: "Metallic", image: "/images/metallic/metallic-epoxy-chopshop-redwall.webp", color: "from-red-200 to-red-100" },
  { id: 12, title: "Metallic Epoxy — Vegas Neon Showroom", type: "Metallic", image: "/images/metallic/metallic-epoxy-vegas-neon.webp", color: "from-purple-200 to-purple-100" },
  { id: 13, title: "Metallic Epoxy — Red & Black Garage", type: "Metallic", image: "/images/metallic/metallic-epoxy-red-black-garage.webp", color: "from-red-200 to-red-100" },
  { id: 14, title: "Metallic Epoxy — Blue Ocean", type: "Metallic", image: "/images/metallic/metallic-epoxy-blue-ocean.webp", color: "from-blue-300 to-blue-100" },
  { id: 15, title: "Metallic Epoxy — Porsche Showroom", type: "Metallic", image: "/images/metallic/metallic-epoxy-porsche-showroom.webp", color: "from-slate-200 to-slate-50" },
  { id: 16, title: "Metallic Epoxy — Pink Salon Floor", type: "Metallic", image: "/images/metallic/metallic-epoxy-salon-pink.webp", color: "from-pink-200 to-pink-100" },
  { id: 17, title: "Metallic Epoxy — Silver Kitchen Stock", type: "Metallic", image: "/images/metallic/metallic-epoxy-kitchen-silver.webp", color: "from-gray-300 to-gray-100" },
  // ── ProFlake Epoxy ──────────────────────────────────────────
  { id: 18, title: "ProFlake Garage — Porsche & Bikes", type: "Flake", image: "/images/proflake/flake-garage-porsche-bikes.webp", color: "from-amber-200 to-amber-100" },
  { id: 19, title: "ProFlake Garage — Blue Paver Border", type: "Flake", image: "/images/proflake/flake-garage-blue-paver-border.webp", color: "from-blue-200 to-blue-100" },
  { id: 20, title: "ProFlake Garage — Sunlight & Paver", type: "Flake", image: "/images/proflake/flake-garage-sunlight-paver.webp", color: "from-amber-100 to-amber-50" },
  { id: 21, title: "ProFlake Garage — Dark Grey", type: "Flake", image: "/images/proflake/flake-garage-dark-grey.webp", color: "from-gray-300 to-gray-100" },
  { id: 22, title: "ProFlake — Wall Coating", type: "Flake", image: "/images/proflake/flake-wall-coating.webp", color: "from-gray-200 to-gray-100" },
  { id: 23, title: "ProFlake Garage — Wide & Clean", type: "Flake", image: "/images/proflake/flake-garage-wide-clean.webp", color: "from-gray-200 to-gray-50" },
  { id: 24, title: "ProFlake Garage — Open Door & Shelving", type: "Flake", image: "/images/proflake/flake-garage-open-door-shelving.webp", color: "from-stone-200 to-stone-100" },
  { id: 25, title: "ProFlake Garage — Exterior View", type: "Flake", image: "/images/proflake/flake-garage-exterior-view.webp", color: "from-stone-200 to-stone-50" },
  { id: 26, title: "ProFlake Garage — Wide Angle", type: "Flake", image: "/images/proflake/flake-garage-wide-angle.webp", color: "from-blue-200 to-blue-100" },
  { id: 27, title: "ProFlake Garage — Blue Closeup", type: "Flake", image: "/images/proflake/flake-garage-blue-closeup.webp", color: "from-sky-200 to-sky-100" },
  // ── Commercial ──────────────────────────────────────────────
  { id: 28, title: "Commercial Warehouse — Flake System", type: "Commercial", image: "/images/commercial/commercial-warehouse-flake.webp", color: "from-blue-200 to-blue-100" },
  { id: 29, title: "Commercial Floor — Solid Epoxy", type: "Commercial", image: "/images/commercial/commercial-floor-solid.webp", color: "from-gray-200 to-gray-100" },
  // ── Hangar ──────────────────────────────────────────────────
  { id: 30, title: "Airplane Hangar — Drone Shot Desert", type: "Hangar", image: "/images/hangar/hangar-floor-drone-desert.webp", color: "from-sky-200 to-sky-100" },
  { id: 31, title: "Airplane Hangar — Desert Installation", type: "Hangar", image: "/images/gallery/hangar-floor-drone.webp", color: "from-sky-300 to-sky-100" },
  // ── Cool Deck / Overlay ─────────────────────────────────────
  { id: 32, title: "Cool Deck — Pool & Spa Vegas", type: "Overlay", image: "/images/cool-deck/cool-deck-pool-spa-vegas.webp", color: "from-amber-200 to-amber-100" },
  { id: 33, title: "Cool Deck — Two-Tone Pool Deck", type: "Overlay", image: "/images/cool-deck/cool-deck-twotone-pool.webp", color: "from-amber-200 to-amber-50" },
  { id: 34, title: "Cool Deck — Patio with Turf Border", type: "Overlay", image: "/images/cool-deck/cool-deck-patio-turf-border.webp", color: "from-green-200 to-green-100" },
  { id: 35, title: "Concrete Overlay — Commercial Palms", type: "Overlay", image: "/images/concrete-overlay/concrete-overlay-commercial-palms.webp", color: "from-gray-300 to-gray-100" },
  { id: 36, title: "Cool Deck — Pool & Spa", type: "Overlay", image: "/images/concrete-overlay/stamped-patio.webp", color: "from-amber-200 to-amber-100" },
  { id: 37, title: "Cool Deck — Pool with Turf Border", type: "Overlay", image: "/images/cool-deck/cool-deck-pool-turf.webp", color: "from-green-200 to-green-100" },
  // ── VubaStone ───────────────────────────────────────────────
  { id: 38, title: "VubaStone Driveway — Stone Columns", type: "VubaStone", image: "/images/vubastone/vubastone-driveway-stone-columns.webp", color: "from-yellow-200 to-amber-100" },
  { id: 39, title: "VubaStone Driveway — Two-Tone Garage", type: "VubaStone", image: "/images/vubastone/vubastone-driveway-twotone-garage.webp", color: "from-orange-200 to-orange-100" },
  { id: 40, title: "VubaStone Steps — Two-Tone Contrast", type: "VubaStone", image: "/images/vubastone/vubastone-steps-twotone.webp", color: "from-gray-200 to-gray-100" },
  { id: 41, title: "VubaStone Pool Deck — Paver Border", type: "VubaStone", image: "/images/vubastone/vubastone-pool-paver-border.webp", color: "from-blue-200 to-blue-100" },
  { id: 42, title: "VubaStone Walkway — Wood Inlay", type: "VubaStone", image: "/images/vubastone/vubastone-walkway-wood-inlay.webp", color: "from-yellow-200 to-yellow-100" },
  { id: 43, title: "VubaStone Pool Deck — Mountain Pergola", type: "VubaStone", image: "/images/cool-deck/vubastone-pool-pergola-mountains.webp", color: "from-cyan-200 to-blue-100" },
  { id: 44, title: "VubaStone Patio — Turf Border", type: "VubaStone", image: "/images/vubastone/vubastone-patio-turf-border.webp", color: "from-green-200 to-green-100" },
  { id: 45, title: "VubaStone Driveway — Craftsman Home", type: "VubaStone", image: "/images/vubastone/vubastone-driveway-craftsman.webp", color: "from-amber-200 to-amber-100" },
  { id: 46, title: "VubaStone Driveway — Stone Entry", type: "VubaStone", image: "/images/vubastone/vubastone-driveway-stone-entry.webp", color: "from-stone-200 to-stone-100" },
  { id: 47, title: "Cool Deck — Knockdown Pool Surround", type: "Overlay", image: "/images/cool-deck/cool-deck-knockdown-pool.webp", color: "from-gray-200 to-gray-50" },
  { id: 48, title: "VubaStone Exterior — Resin Bound Pathway", type: "VubaStone", image: "/images/vubastone/vubastone-exterior-real.webp", color: "from-amber-200 to-amber-100" },
  { id: 49, title: "Commercial Urethane Cement — Kitchen/Processing", type: "Commercial", image: "/images/commercial/commercial-urethane-cement.webp", color: "from-gray-200 to-gray-100" },
  { id: 50, title: "Commercial Resin Quartz Floor", type: "Commercial", image: "/images/commercial/commercial-resin-quartz.webp", color: "from-gray-300 to-gray-100" },
  { id: 51, title: "Commercial Garage — Epoxy with Safety Lines", type: "Commercial", image: "/images/commercial/commercial-garage-epoxy.webp", color: "from-gray-200 to-gray-50" },
]

export default function GalleryPage() {
  const [active, setActive] = useState("All")
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered = active === "All" ? projects : projects.filter((p) => p.type === active)

  return (
    <>
      <PageHero
        badge="Our Work"
        title="Project Gallery"
        subtitle="Browse completed ProShield installations. Real projects, real results."
      />

      <Breadcrumbs items={[{ label: "Gallery" }]} />

      <section className="section-white py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-14">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  active === f
                    ? "bg-accent text-white shadow-lg shadow-accent/20"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <button
                    onClick={() => setLightbox(project.id)}
                    className="group w-full text-left"
                  >
                    <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200 bg-gray-50">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      ) : (
                        <div
                          className={`h-full w-full bg-gradient-to-br ${project.color} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}
                        >
                          <span className="text-gray-500/60 text-xs font-medium">Photo</span>
                        </div>
                      )}
                    </div>
                    <div className="mt-2 sm:mt-3 flex items-center justify-between">
                      <h3 className="text-xs sm:text-sm font-heading font-medium text-gray-900 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs font-semibold text-accent">{project.type}</span>
                    </div>
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-200"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const p = projects.find((pr) => pr.id === lightbox)
                return p?.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className={`h-full w-full bg-gradient-to-br ${p?.color} flex items-center justify-center`}>
                    <span className="text-gray-500/60 text-sm font-medium">{p?.title}</span>
                  </div>
                )
              })()}
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 h-10 w-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                aria-label="Close lightbox"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CtaSection />
    </>
  )
}
