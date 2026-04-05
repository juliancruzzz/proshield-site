"use client"

import { type ReactNode } from "react"

interface MarqueeProps {
  children: ReactNode
  speed?: number
  pauseOnHover?: boolean
  direction?: "left" | "right"
  className?: string
}

export function Marquee({
  children,
  speed = 30,
  pauseOnHover = true,
  direction = "left",
  className = "",
}: MarqueeProps) {
  const animDirection = direction === "left" ? "normal" : "reverse"

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
      }}
    >
      <div
        className={`flex gap-5 w-max ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
        style={{
          animation: `marquee-scroll ${speed}s linear infinite`,
          animationDirection: animDirection,
        }}
      >
        {children}
        {/* Duplicate for seamless loop */}
        {children}
      </div>
    </div>
  )
}
