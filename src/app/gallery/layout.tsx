import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Project Gallery | ProShield Epoxy Las Vegas",
  description:
    "Explore garage and metallic epoxy project details, plus floor finish ideas for homes and commercial spaces.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    url: "https://proshieldepoxy.com/gallery",
    images: ["/og-image.webp"],
  },
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
