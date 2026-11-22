"use client"

import { useEffect } from "react"
import { rememberVisitSource } from "@/lib/lead-source"

export function VisitSource() {
  useEffect(() => { rememberVisitSource() }, [])
  return null
}
