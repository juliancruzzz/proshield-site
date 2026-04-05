"use client"

import { useRef, useState, type ReactNode, type MouseEvent } from "react"
import { motion } from "framer-motion"

interface TiltCardProps {
  children: ReactNode
  className?: string
  tiltStrength?: number
  glareEnabled?: boolean
}

export function TiltCard({
  children,
  className = "",
  tiltStrength = 10,
  glareEnabled = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 })
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 })

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setTilt({
      rotateX: (0.5 - y) * tiltStrength,
      rotateY: (x - 0.5) * tiltStrength,
    })
    setGlare({ x: x * 100, y: y * 100, opacity: 0.15 })
  }

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 })
    setGlare({ x: 50, y: 50, opacity: 0 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ perspective: 1000, transformStyle: "preserve-3d" }}
      className={`relative ${className}`}
    >
      {children}
      {glareEnabled && (
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          animate={{ opacity: glare.opacity }}
          transition={{ duration: 0.2 }}
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.25) 0%, transparent 60%)`,
          }}
        />
      )}
    </motion.div>
  )
}
