"use client"

import { ProjectCards } from "@/components/sections/project-cards"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { PageHero } from "@/components/sections/page-hero"
import { Breadcrumbs } from "@/components/sections/breadcrumbs"
import { CtaSection } from "@/components/sections/cta-section"

const filters = ["All", "Garage", "Commercial", "Metallic", "Flake", "VubaStone", "Overlay", "Hangar"]

const projects = [
  // ── Metallic Epoxy ──────────────────────────────────────────
  { id: 1, title: "Red and silver streaks across a black floor", type: "Metallic", image: "/images/metallic/metallic-epoxy-red-black-swirl.webp", color: "from-red-300 to-red-100" },
  { id: 2, title: "Silver streaks through dark metallic epoxy", type: "Metallic", image: "/images/metallic/metallic-epoxy-red-black-angle2.webp", color: "from-red-200 to-red-100" },
  { id: 3, title: "Blue and white metallic garage floor", type: "Metallic", garage: true, image: "/images/metallic/metallic-epoxy-blue-ocean-garage.webp", color: "from-blue-300 to-blue-100" },
  { id: 4, title: "Pink and burgundy with white accents", type: "Metallic", image: "/images/metallic/metallic-epoxy-pink-magenta-salon.webp", color: "from-pink-300 to-pink-100" },
  { id: 5, title: "Silver and charcoal in a white kitchen", type: "Metallic", image: "/images/metallic/metallic-epoxy-silver-kitchen-real.webp", color: "from-gray-300 to-gray-100" },
  { id: 6, title: "Gray metallic finish through a hallway", type: "Metallic", image: "/images/metallic/metallic-epoxy-silver-hallway.webp", color: "from-gray-200 to-gray-100" },
  { id: 7, title: "Charcoal and silver beneath an open staircase", type: "Metallic", image: "/images/metallic/metallic-epoxy-commercial-stairs.webp", color: "from-zinc-300 to-zinc-100" },
  { id: 8, title: "Soft gray and silver against white walls", type: "Metallic", image: "/images/metallic/metallic-epoxy-commercial-silver-wide.webp", color: "from-slate-300 to-slate-100" },
  { id: 9, title: "Light and dark metallic bands across a showroom", type: "Metallic", image: "/images/metallic/metallic-epoxy-chopshop-neon.webp", color: "from-zinc-400 to-zinc-100" },
  { id: 10, title: "Silver and charcoal showroom floor", type: "Metallic", image: "/images/metallic/metallic-epoxy-chopshop-porsche.webp", color: "from-gray-300 to-gray-100" },
  { id: 11, title: "Dark metallic floor beside a red wall", type: "Metallic", image: "/images/metallic/metallic-epoxy-chopshop-redwall.webp", color: "from-red-200 to-red-100" },
  { id: 12, title: "Glossy gray floor beneath a mezzanine", type: "Metallic", image: "/images/metallic/metallic-epoxy-vegas-neon.webp", color: "from-purple-200 to-purple-100" },
  { id: 13, title: "Red and black across two garage bays", type: "Metallic", garage: true, image: "/images/metallic/metallic-epoxy-red-black-garage.webp", color: "from-red-200 to-red-100" },
  // ── ProFlake Epoxy ──────────────────────────────────────────
  { id: 18, title: "Light gray flake beneath a car and motorcycles", type: "Flake", garage: true, image: "/images/proflake/flake-garage-porsche-bikes.webp", color: "from-amber-200 to-amber-100" },
  { id: 19, title: "Blue-gray flake at the garage threshold", type: "Flake", garage: true, image: "/images/proflake/flake-garage-blue-paver-border.webp", color: "from-blue-200 to-blue-100" },
  { id: 20, title: "Light flake beside a paver driveway", type: "Flake", garage: true, image: "/images/proflake/flake-garage-sunlight-paver.webp", color: "from-amber-100 to-amber-50" },
  { id: 21, title: "Charcoal flake with a light perimeter", type: "Flake", garage: true, image: "/images/proflake/flake-garage-dark-grey.webp", color: "from-gray-300 to-gray-100" },
  { id: 23, title: "Gray flake across an open garage bay", type: "Flake", garage: true, image: "/images/proflake/flake-garage-wide-clean.webp", color: "from-gray-200 to-gray-50" },
  { id: 24, title: "Warm gray flake beneath garage shelving", type: "Flake", garage: true, image: "/images/proflake/flake-garage-open-door-shelving.webp", color: "from-stone-200 to-stone-100" },
  { id: 25, title: "Tan flake against the concrete driveway", type: "Flake", garage: true, image: "/images/proflake/flake-garage-exterior-view.webp", color: "from-stone-200 to-stone-50" },
  { id: 26, title: "Gray flake from the threshold to the back wall", type: "Flake", garage: true, image: "/images/proflake/flake-garage-wide-angle.webp", color: "from-blue-200 to-blue-100" },
  // ── Commercial ──────────────────────────────────────────────
  { id: 28, title: "Light speckled floor beneath steel roof trusses", type: "Commercial", image: "/images/commercial/commercial-warehouse-flake.webp", color: "from-blue-200 to-blue-100" },
  { id: 29, title: "Gray floor with a darker wall base", type: "Commercial", image: "/images/commercial/commercial-floor-solid.webp", color: "from-gray-200 to-gray-100" },
  // ── Hangar ──────────────────────────────────────────────────
  { id: 30, title: "Gray hangar floor at the open doors", type: "Hangar", image: "/images/hangar/hangar-floor-drone-desert.webp", color: "from-sky-200 to-sky-100" },
  // ── Cool Deck / Overlay ─────────────────────────────────────
  { id: 32, title: "Light deck around a raised round spa", type: "Overlay", image: "/images/cool-deck/cool-deck-pool-spa-vegas.webp", color: "from-amber-200 to-amber-100" },
  { id: 33, title: "Tan deck along a curved pool edge", type: "Overlay", image: "/images/cool-deck/cool-deck-twotone-pool.webp", color: "from-amber-200 to-amber-50" },
  { id: 34, title: "Muted rose finish on a covered patio", type: "Patio", image: "/images/cool-deck/cool-deck-patio-turf-border.webp", color: "from-green-200 to-green-100" },
  { id: 35, title: "Gray driveway with straight joint lines", type: "Overlay", image: "/images/concrete-overlay/concrete-overlay-commercial-palms.webp", color: "from-gray-300 to-gray-100" },
  { id: 36, title: "Pale pool deck with matching steps", type: "Overlay", image: "/images/concrete-overlay/stamped-patio.webp", color: "from-amber-200 to-amber-100" },
  // ── VubaStone ───────────────────────────────────────────────
  { id: 38, title: "Two-tone stone driveway at the front entrance", type: "VubaStone", image: "/images/vubastone/vubastone-driveway-stone-columns.webp", color: "from-yellow-200 to-amber-100" },
  { id: 39, title: "Terracotta border around a gray driveway", type: "VubaStone", image: "/images/vubastone/vubastone-driveway-twotone-garage.webp", color: "from-orange-200 to-orange-100" },
  { id: 40, title: "Pale stone walkway with dark bands", type: "VubaStone", image: "/images/vubastone/vubastone-steps-twotone.webp", color: "from-gray-200 to-gray-100" },
  { id: 41, title: "Curved stone border between pavers and pool", type: "VubaStone", image: "/images/vubastone/vubastone-pool-paver-border.webp", color: "from-blue-200 to-blue-100" },
  { id: 42, title: "Light stone path with a dark inlay", type: "VubaStone", image: "/images/vubastone/vubastone-walkway-wood-inlay.webp", color: "from-yellow-200 to-yellow-100" },
  { id: 43, title: "Pale aggregate beside a poolside pergola", type: "VubaStone", image: "/images/cool-deck/vubastone-pool-pergola-mountains.webp", color: "from-cyan-200 to-blue-100" },
  { id: 45, title: "Light driveway with a narrow gray border", type: "VubaStone", image: "/images/vubastone/vubastone-driveway-craftsman.webp", color: "from-amber-200 to-amber-100" },
  { id: 47, title: "Textured pool deck with scored lines", type: "Overlay", image: "/images/cool-deck/cool-deck-knockdown-pool.webp", color: "from-gray-200 to-gray-50" },
  { id: 49, title: "Gray textured floor beneath kitchen counters", type: "Commercial", image: "/images/commercial/commercial-urethane-cement.webp", color: "from-gray-200 to-gray-100" },
  { id: 50, title: "Fine gray floor with a dark strip along the wall", type: "Commercial", image: "/images/commercial/commercial-resin-quartz.webp", color: "from-gray-300 to-gray-100" },
  { id: 51, title: "Yellow aisle markings on a gray floor", type: "Commercial", image: "/images/commercial/commercial-garage-epoxy.webp", color: "from-gray-200 to-gray-50" },
]

export default function GalleryPage() {
  const [active, setActive] = useState("All")
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered = active === "All" ? projects : projects.filter((p) => active === "Garage" ? p.garage : p.type === active)

  return (
    <>
      <PageHero
        badge="Floor Finishes"
        title="Project Gallery"
        subtitle="Explore floor finishes for garages, homes and commercial spaces."
      />

      <Breadcrumbs items={[{ label: "Gallery" }]} />
      <ProjectCards />

      <section className="section-white py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 font-heading font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight">Floor Finish Ideas</h2>
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-14">
            {filters.map((f) => (
              <button
                key={f}
                aria-pressed={active === f}
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
