import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { StickyCta } from "@/components/layout/sticky-cta"
import { ChatbotWrapper } from "@/components/ui/chatbot-wrapper"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

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
  title: "ProShield Epoxy | Epoxy Flooring Las Vegas",
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
    url: "https://proshieldepoxy.com",
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
  telephone: "702-728-5484",
  email: "info@proshieldepoxy.com",
  url: "https://proshieldepoxy.com",
  priceRange: "$$",
  image: "https://proshieldepoxy.com/og-image.webp",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
  },
  areaServed: [
    { "@type": "City", name: "Las Vegas", containedInPlace: { "@type": "State", name: "Nevada" } },
    { "@type": "City", name: "Henderson", containedInPlace: { "@type": "State", name: "Nevada" } },
    { "@type": "City", name: "Summerlin", containedInPlace: { "@type": "State", name: "Nevada" } },
    { "@type": "City", name: "North Las Vegas", containedInPlace: { "@type": "State", name: "Nevada" } },
    { "@type": "City", name: "Boulder City", containedInPlace: { "@type": "State", name: "Nevada" } },
    { "@type": "City", name: "Pahrump", containedInPlace: { "@type": "State", name: "Nevada" } },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "43",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "18:00",
    },
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: "36.1699",
    longitude: "-115.1398",
  },
  sameAs: [
    "https://www.facebook.com/p/ProShield-Epoxy-100089795168616/",
    "https://www.instagram.com/proshieldepoxy/",
    "https://www.yelp.com/biz/proshield-epoxy-las-vegas",
  ],
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
        <meta name="google-site-verification" content="UA4h8q_W-9vCOyD1oK56Op2JrPFnBGf9OVRdrVZC9lg" />
        <link rel="preconnect" href="https://web3forms.com" />
        <link rel="preconnect" href="https://api.web3forms.com" />
        {/* Preload LCP hero poster so the browser discovers it before parsing JS */}
        <link rel="preload" href="/images/metallic-hero-poster.jpg" as="image" />
        {/* Defer GTM until first user interaction (scroll/click/touch).
            FB Pixel removed — fbevents.js emits an AttributionReporting
            deprecation warning that tanks the Best-Practices score. Fire
            Meta Pixel via a GTM tag instead if tracking is needed. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
  var loaded=false;
  function loadTracking(){
    if(loaded)return;loaded=true;
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-KGDCHW6C');
  }
  ['scroll','click','touchstart','keydown'].forEach(function(evt){
    window.addEventListener(evt,loadTracking,{once:true,passive:true});
  });
  setTimeout(loadTracking,5000);
})();`,
          }}
        />
        {/* Track phone link clicks */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.addEventListener('click',function(e){var a=e.target.closest('a[href^="tel:"]');if(a){window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:'phone_click',phone_number:a.href.replace('tel:','')});}});`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-text-primary antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KGDCHW6C"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCta />
        <ChatbotWrapper />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
