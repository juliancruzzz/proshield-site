import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { StickyCta } from "@/components/layout/sticky-cta"
import { ChatbotWrapper } from "@/components/ui/chatbot-wrapper"
import { Analytics } from "@vercel/analytics/next"

const spaceGrotesk = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource/space-grotesk/files/space-grotesk-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/space-grotesk/files/space-grotesk-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-space-grotesk",
})

const inter = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource/inter/files/inter-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/inter/files/inter-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/inter/files/inter-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "ProShield Epoxy | Premium Epoxy Flooring",
  description:
    "Professional floor coatings for garages, commercial spaces, and more. Metallic epoxy, flake systems, VubaStone, concrete polishing, and specialty services. Free quotes in the Las Vegas metro.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
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
    images: ["/og-image.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProShield Epoxy | Premium Epoxy Flooring Las Vegas",
    description:
      "Professional floor coatings for garages, commercial spaces, and more. Metallic epoxy, flake systems, VubaStone, and specialty services in Las Vegas.",
    images: ["/og-image.webp"],
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
  email: "info@proshieldepoxy.com",
  areaServed: process.env.NEXT_PUBLIC_CITY || "",
  priceRange: "$$",
  image: `${process.env.NEXT_PUBLIC_SITE_URL || "https://proshieldepoxy.com"}/og-image.webp`,
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
      className={`h-full ${spaceGrotesk.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#111C2E" />
        <link rel="preconnect" href="https://web3forms.com" />
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
        <ChatbotWrapper />
        <Analytics />
      </body>
    </html>
  )
}
