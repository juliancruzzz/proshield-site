"use client"

import { useEffect } from "react"
import { rememberLandingPage, rememberVisitSource } from "@/lib/lead-source"

export function VisitSource({ publicPaths }: { publicPaths: string[] }) {
  useEffect(() => {
    rememberLandingPage(publicPaths)
    rememberVisitSource()
  }, [publicPaths])
  return null
}
