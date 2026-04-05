import type { Metadata } from "next"
import "@fontsource/space-grotesk/600.css"
import "@fontsource/space-grotesk/700.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/600.css"
import "./globals.css"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { StickyCta } from "@/components/layout/sticky-cta"
import { Chatbot } from "@/components/ui/chatbot"

export const metadata: Metadata = {
  title: "ProShield Epoxy | Premium Epoxy Flooring",
  description:
    "Professional floor coatings for garages, commercial spaces, and more. Metallic epoxy, flake systems, VubaStone, concrete polishing, and specialty services. Free quotes in the Las Vegas metro.",
  keywords: [
    "epoxy flooring",
    "garage floor coating",
    "metallic epoxy",
    "commercial flooring",
    "concrete polishing",
    "VubaStone",
    "flake epoxy",
    "airplane hangar flooring",
    "GrassMac turf",
    "paver sealing",
    "Las Vegas",
  ],
  openGraph: {
    title: "ProShield Epoxy | Premium Epoxy Flooring Las Vegas",
    description:
      "Professional floor coatings for garages, commercial spaces, and more. Metallic epoxy, flake systems, VubaStone, and specialty services in Las Vegas.",
    images: ["/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProShield Epoxy | Premium Epoxy Flooring Las Vegas",
    description:
      "Professional floor coatings for garages, commercial spaces, and more. Metallic epoxy, flake systems, VubaStone, and specialty services in Las Vegas.",
    images: ["/og-image.jpg"],
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://proshieldepoxy.com"
  ),
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ProShield Epoxy",
  description:
    "Professional floor coatings for residential and commercial spaces in the Las Vegas metro. Metallic epoxy, flake systems, VubaStone, concrete polishing, airplane hangar flooring, and more.",
  telephone: process.env.NEXT_PUBLIC_PHONE || "",
  email: "juliancruz@proshieldepoxy.com",
  areaServed: process.env.NEXT_PUBLIC_CITY || "",
  priceRange: "$$",
  image: `${process.env.NEXT_PUBLIC_SITE_URL || "https://proshieldepoxy.com"}/og-image.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: process.env.NEXT_PUBLIC_CITY || "",
    addressRegion: process.env.NEXT_PUBLIC_STATE || "",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className="h-full"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-text-primary antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCta />
        <Chatbot />
      </body>
    </html>
  )
}
