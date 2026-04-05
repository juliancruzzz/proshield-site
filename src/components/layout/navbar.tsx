"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, Phone } from "lucide-react"

const areaLinks = [
  { label: "Garage", href: "/areas/garage" },
  { label: "Exterior", href: "/areas/exterior" },
  { label: "Interior", href: "/areas/interior" },
  { label: "Commercial", href: "/areas/commercial" },
]

const systemGroups = [
  {
    heading: "Epoxy & Coatings",
    items: [
      { label: "ProFlake Epoxy", href: "/proflake" },
      { label: "Metallic Epoxy", href: "/metallic-epoxy" },
      { label: "Commercial Flooring", href: "/commercial-flooring" },
      { label: "Airplane Hangar", href: "/airplane-hangar" },
    ],
  },
  {
    heading: "Flooring",
    items: [
      { label: "Concrete Polishing", href: "/concrete-polishing" },
      { label: "Tile Flooring", href: "/tile-flooring" },
      { label: "Plank Flooring", href: "/plank-flooring" },
    ],
  },
  {
    heading: "Outdoor & Resurfacing",
    items: [
      { label: "Concrete Overlay", href: "/concrete-overlay" },
      { label: "Cool Deck / Patio", href: "/cool-deck" },
      { label: "Paver Sealing", href: "/paver-sealing" },
      { label: "VubaStone", href: "/vubastone" },
      { label: "GrassMac & Turf", href: "/grassmac" },
    ],
  },
]

// Flat list for backward compat (mobile, etc.)
const systemLinks = systemGroups.flatMap((g) => g.items)

type NavLink = {
  label: string
  href: string
  children?: { label: string; href: string }[]
  groups?: { heading: string; items: { label: string; href: string }[] }[]
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Areas", href: "/areas/garage", children: areaLinks },
  { label: "Systems", href: "/services", children: systemLinks, groups: systemGroups },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

function DropdownMenu({
  items,
  isOpen,
  onClose,
  scrolled,
}: {
  items: { label: string; href: string }[]
  isOpen: boolean
  onClose: () => void
  scrolled: boolean
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 max-h-[70vh] overflow-y-auto rounded-xl border shadow-2xl backdrop-blur-xl py-2 ${
            scrolled
              ? "bg-white/95 border-gray-200 shadow-gray-300/40"
              : "bg-gray-900/95 border-white/10 shadow-black/50"
          }`}
          onMouseLeave={onClose}
        >
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className={`block px-4 py-2.5 text-[14px] font-medium transition-colors duration-150 ${
                scrolled
                  ? "text-gray-600 hover:text-accent hover:bg-accent/5"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function MegaDropdownMenu({
  groups,
  isOpen,
  onClose,
  scrolled,
}: {
  groups: { heading: string; items: { label: string; href: string }[] }[]
  isOpen: boolean
  onClose: () => void
  scrolled: boolean
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 rounded-xl border shadow-2xl backdrop-blur-xl p-5 ${
            scrolled
              ? "bg-white/95 border-gray-200 shadow-gray-300/40"
              : "bg-gray-900/95 border-white/10 shadow-black/50"
          }`}
          style={{ width: "max-content", minWidth: "540px" }}
          onMouseLeave={onClose}
        >
          <div className="grid grid-cols-3 gap-6">
            {groups.map((group) => (
              <div key={group.heading}>
                <span
                  className={`block px-2 pb-2 mb-1 text-[11px] font-bold uppercase tracking-widest ${
                    scrolled ? "text-accent" : "text-accent"
                  }`}
                >
                  {group.heading}
                </span>
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={`block rounded-lg px-2 py-2 text-[14px] font-medium transition-colors duration-150 ${
                      scrolled
                        ? "text-gray-600 hover:text-accent hover:bg-accent/5"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div
            className={`mt-4 pt-3 border-t ${
              scrolled ? "border-gray-200" : "border-white/10"
            }`}
          >
            <Link
              href="/services"
              onClick={onClose}
              className="flex items-center gap-1.5 px-2 text-[13px] font-semibold text-accent hover:text-accent-hover transition-colors duration-150"
            >
              View All Systems →
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  const handleDropdownEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpenDropdown(label)
  }

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="h-9 w-9 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-white font-heading font-bold text-sm">PS</span>
            </div>
            <span
              className={`font-heading font-bold text-lg tracking-tight transition-colors duration-300 ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              ProShield Epoxy
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && handleDropdownEnter(link.label)}
                onMouseLeave={() => link.children && handleDropdownLeave()}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 px-3 py-2 text-[15px] font-medium transition-colors duration-200 ${
                    scrolled
                      ? "text-gray-500 hover:text-gray-900"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>
                {link.children && !link.groups && (
                  <DropdownMenu
                    items={link.children}
                    isOpen={openDropdown === link.label}
                    onClose={() => setOpenDropdown(null)}
                    scrolled={scrolled}
                  />
                )}
                {link.groups && (
                  <MegaDropdownMenu
                    groups={link.groups}
                    isOpen={openDropdown === link.label}
                    onClose={() => setOpenDropdown(null)}
                    scrolled={scrolled}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${process.env.NEXT_PUBLIC_PHONE || ""}`}
              className={`flex items-center gap-2 text-sm transition-colors duration-200 ${
                scrolled ? "text-gray-500 hover:text-teal" : "text-white/70 hover:text-teal"
              }`}
              aria-label="Call us"
            >
              <Phone className="h-4 w-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover transition-colors duration-200 shadow-lg shadow-accent/20"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden flex items-center justify-center h-11 w-11 rounded-lg transition-colors duration-200 ${
              scrolled
                ? "text-gray-600 hover:bg-gray-100"
                : "text-white/80 hover:bg-white/10"
            }`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-t border-gray-200 bg-white/95 backdrop-blur-xl"
          >
            <div className="max-h-[calc(100vh-4rem)] overflow-y-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileExpanded(mobileExpanded === link.label ? null : link.label)
                        }
                        className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-[15px] font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-150"
                      >
                        {link.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            mobileExpanded === link.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === link.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-4"
                          >
                            {link.groups
                              ? link.groups.map((group) => (
                                  <div key={group.heading} className="mb-2">
                                    <span className="block px-3 pt-3 pb-1 text-[11px] font-bold uppercase tracking-widest text-accent">
                                      {group.heading}
                                    </span>
                                    {group.items.map((child) => (
                                      <Link
                                        key={child.href}
                                        href={child.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="block rounded-lg px-3 py-2.5 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-150"
                                      >
                                        {child.label}
                                      </Link>
                                    ))}
                                  </div>
                                ))
                              : link.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block rounded-lg px-3 py-2.5 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-150"
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-3 py-3 text-[15px] font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-gray-200 space-y-3">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-accent-hover transition-colors duration-200"
                >
                  Get a Free Quote
                </Link>
                <a
                  href={`tel:${process.env.NEXT_PUBLIC_PHONE || ""}`}
                  className="flex items-center justify-center gap-2 w-full rounded-lg border border-gray-200 px-5 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-150"
                >
                  <Phone className="h-4 w-4" />
                  Call Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
