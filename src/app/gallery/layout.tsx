import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Project Gallery | ProShield Epoxy Las Vegas",
  description:
    "Browse completed ProShield installations — epoxy garages, metallic floors, VubaStone driveways, overlays, and commercial projects across Las Vegas.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    url: "https://proshieldepoxy.com/gallery",
  },
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
