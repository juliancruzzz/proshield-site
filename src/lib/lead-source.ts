import { isAuditVisit } from "./audit-mode"

// Store only a channel label for this tab. Never store referrer URLs or search terms.
export function getVisitSource(url: URL, referrer: string): string | undefined {
  const tags = url.searchParams
  const medium = tags.get("utm_medium")?.toLowerCase()
  if (tags.has("gclid") || tags.has("msclkid") || ["cpc", "ppc", "paid", "paid_search"].includes(medium ?? "")) return "Paid traffic"
  if (tags.get("utm_source") === "google" && medium === "organic" && tags.get("utm_campaign") === "gbp") return "Google Business Profile"
  if (tags.get("utm_source") === "chatgpt.com") return "AI referral"
  if (!referrer) return undefined
  let host: string
  try { host = new URL(referrer).hostname.toLowerCase() } catch { return undefined }
  if (host === url.hostname) return undefined
  const from = (domain: string) => host === domain || host.endsWith("." + domain)
  if (["chatgpt.com", "perplexity.ai", "copilot.microsoft.com", "gemini.google.com", "claude.ai"].some(from)) return "AI referral"
  if (host === "maps.google.com") return "Google Maps"
  if (["google.com", "www.google.com", "bing.com", "www.bing.com", "duckduckgo.com", "search.yahoo.com"].includes(host)) return "Search referral"
  return "Other referral"
}

const key = "proshield-visit-source"
export function rememberVisitSource(): string {
  if (isAuditVisit()) return "Internal audit"
  if (typeof window === "undefined") return "Unknown"
  const source = getVisitSource(new URL(window.location.href), document.referrer)
  try {
    if (source) sessionStorage.setItem(key, source)
    else if (!document.referrer && performance.getEntriesByType("navigation").some(entry => (entry as PerformanceNavigationTiming).type === "navigate")) {
      sessionStorage.removeItem(key)
    }
    return source || sessionStorage.getItem(key) || "Unknown"
  } catch {
    return source || "Unknown"
  }
}

export function getQuoteSource(): string {
  if (isAuditVisit()) return "Internal audit"
  try {
    const saved = sessionStorage.getItem(key)
    if (saved) return saved
  } catch { /* Use the current page if storage is disabled. */ }
  return rememberVisitSource()
}
