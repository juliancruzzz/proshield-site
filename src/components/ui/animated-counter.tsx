"use client"

import { useEffect, useState } from "react"

interface AnimatedCounterProps {
  value: string
  className?: string
}

export function AnimatedCounter({ value, className = "" }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState("0")

  // Extract numeric part, prefix, suffix
  const match = value.match(/^([^\d]*)(\d+\.?\d*)([\+\w\-\*†]*)$/)

  useEffect(() => {
    if (!match) {
      setDisplayValue(value)
      return
    }

    const prefix = match[1]
    const numericTarget = parseFloat(match[2])
    const suffix = match[3]
    const hasDecimal = match[2].includes(".")
    const duration = 2000
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out expo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      const current = eased * numericTarget

      if (hasDecimal) {
        setDisplayValue(`${prefix}${current.toFixed(1)}${suffix}`)
      } else {
        setDisplayValue(`${prefix}${Math.round(current)}${suffix}`)
      }

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  // For non-numeric values like "Lifetime" or "1-Day", just fade in
  if (!match) {
    return (
      <span className={className}>
        {value}
      </span>
    )
  }

  return (
    <span className={className}>
      {displayValue}
    </span>
  )
}
