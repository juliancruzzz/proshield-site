import { NextRequest, NextResponse } from "next/server"
import { AUDIT_COOKIE } from "@/lib/audit-mode"

const headers = {
  "Cache-Control": "private, no-store",
  "Vary": "Cookie",
  "X-Robots-Tag": "noindex, nofollow",
  "Referrer-Policy": "no-referrer",
}

export function GET(request: NextRequest) {
  const mode = request.nextUrl.searchParams.get("mode")
  if (mode !== "on" && mode !== "off") {
    return new Response("Use mode=on or mode=off.", { status: 400, headers })
  }
  const response = new NextResponse(null, { status: 303, headers: { ...headers, Location: "/" } })
  response.cookies.set(AUDIT_COOKIE, mode === "on" ? "1" : "", {
    path: "/",
    secure: request.nextUrl.protocol === "https:",
    sameSite: "lax",
    maxAge: mode === "on" ? 365 * 24 * 60 * 60 : 0,
  })
  return response
}
