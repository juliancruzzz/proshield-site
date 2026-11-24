"use client"

import { useSyncExternalStore } from "react"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { isAuditVisit } from "@/lib/audit-mode"

const subscribe = () => () => {}
const canTrack = () => !isAuditVisit()
const beforeHydration = () => false
function allowVisitorEvent<T>(event: T): T | null {
  return isAuditVisit() ? null : event
}

export function VisitorAnalytics() {
  const enabled = useSyncExternalStore(subscribe, canTrack, beforeHydration)
  if (!enabled) return null
  return <><Analytics beforeSend={allowVisitorEvent} /><SpeedInsights beforeSend={allowVisitorEvent} /></>
}
