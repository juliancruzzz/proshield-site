"use client"

import { type ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "left" | "right" | "none"
  once?: boolean
}

/**
 * ScrollReveal — renders children immediately.
 *
 * The previous framer-motion useInView implementation caused a permanent
 * opacity:0 bug under SSR hydration (intersection observer fires before
 * React hydrates, once:true prevents retry). Stripped to a plain wrapper
 * so every page that imports ScrollReveal still works without changes.
 */
export function ScrollReveal({
  children,
  className = "",
}: ScrollRevealProps) {
  return <div className={className}>{children}</div>
}
