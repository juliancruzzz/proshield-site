"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Phone, MessageSquare } from "lucide-react"
import { PHONE_HREF } from "@/lib/phone"

export function StickyCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] flex items-center gap-3">
        <Link
          href="/contact"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-white hover:bg-accent-hover transition-colors shadow-lg shadow-accent/20"
        >
          <MessageSquare className="h-4 w-4" />
          Get a Free Quote
        </Link>
        <a
          href={PHONE_HREF}
          className="inline-flex items-center justify-center h-12 w-12 rounded-lg border border-gray-200 bg-white text-gray-600 hover:text-teal hover:border-teal/30 transition-colors shrink-0"
          aria-label="Call us"
        >
          <Phone className="h-5 w-5" />
        </a>
      </div>
    </div>
  )
}
