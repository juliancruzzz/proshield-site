"use client"

import { useState, useEffect } from "react"

/**
 * Returns true after the component has mounted on the client.
 * Use this to gate framer-motion `animate` props so they only
 * fire after hydration, avoiding the SSR initial-state stuck-at-zero bug.
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  return mounted
}
