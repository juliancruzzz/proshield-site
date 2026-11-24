import { NextRequest } from "next/server"
import { AUDIT_COOKIE } from "@/lib/audit-mode"

export function GET(request: NextRequest) {
  const headers = {
    "Cache-Control": "private, no-store",
    "Vary": "Cookie, Sec-Fetch-Dest",
    "X-Robots-Tag": "noindex, nofollow",
    "Referrer-Policy": "no-referrer",
  }
  const destination = request.headers.get("sec-fetch-dest")
  if (request.cookies.get(AUDIT_COOKIE)?.value === "1" || (destination && destination !== "iframe")) {
    return new Response(null, { status: 204, headers })
  }
  return new Response(null, {
    status: 307,
    headers: { ...headers, Location: "https://www.googletagmanager.com/ns.html?id=GTM-KGDCHW6C" },
  })
}
