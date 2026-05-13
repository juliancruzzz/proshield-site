import { MetadataRoute } from "next"

export const dynamic = "force-static"

const BASE_URL = "https://proshieldepoxy.com"

// Hardcoded per-route lastmod. Update the date when the page's content meaningfully changes.
// Do NOT use new Date() here — Google ignores sitemaps that report every URL as freshly modified
// on every build. Be honest about freshness so the freshness signal is actually credited.

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    // Core pages
    { url: `${BASE_URL}/`, lastModified: "2026-05-04", priority: 1.0, changeFrequency: "weekly" },
    { url: `${BASE_URL}/contact`, lastModified: "2026-04-10", priority: 0.9, changeFrequency: "monthly" },

    // Service pages
    { url: `${BASE_URL}/proflake`, lastModified: "2026-04-10", priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/metallic-epoxy`, lastModified: "2026-04-10", priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/vubastone`, lastModified: "2026-04-10", priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/concrete-polishing`, lastModified: "2026-04-10", priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/commercial-flooring`, lastModified: "2026-05-12", priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/concrete-overlay`, lastModified: "2026-04-10", priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/cool-deck`, lastModified: "2026-04-10", priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/rubber-pool-deck`, lastModified: "2026-04-10", priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/tile-flooring`, lastModified: "2026-04-10", priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/plank-flooring`, lastModified: "2026-04-10", priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/paver-sealing`, lastModified: "2026-04-10", priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/airplane-hangar`, lastModified: "2026-04-10", priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/artificial-turf`, lastModified: "2026-04-10", priority: 0.7, changeFrequency: "monthly" },

    // Area pages
    { url: `${BASE_URL}/areas/garage`, lastModified: "2026-05-12", priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/areas/exterior`, lastModified: "2026-04-10", priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/areas/interior`, lastModified: "2026-04-10", priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/areas/commercial`, lastModified: "2026-04-10", priority: 0.8, changeFrequency: "monthly" },

    // Supporting pages
    { url: `${BASE_URL}/services`, lastModified: "2026-04-10", priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/gallery`, lastModified: "2026-04-16", priority: 0.7, changeFrequency: "weekly" },
    { url: `${BASE_URL}/about`, lastModified: "2026-05-12", priority: 0.6, changeFrequency: "monthly" },
    { url: `${BASE_URL}/faq`, lastModified: "2026-04-10", priority: 0.7, changeFrequency: "monthly" },

    // Blog (lastmod = the post's actual dateModified or datePublished from its schema)
    { url: `${BASE_URL}/blog`, lastModified: "2026-05-03", priority: 0.7, changeFrequency: "weekly" },
    { url: `${BASE_URL}/blog/epoxy-garage-floor-cost-las-vegas`, lastModified: "2026-05-03", priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/blog/epoxy-garage-floor-vs-polyaspartic`, lastModified: "2026-04-01", priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/blog/hot-tire-pickup-prevention-garage-floor`, lastModified: "2026-03-28", priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/blog/polished-concrete-vs-epoxy`, lastModified: "2026-03-18", priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/blog/best-pool-deck-coatings-las-vegas`, lastModified: "2026-04-06", priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/blog/epoxy-floor-maintenance-tips`, lastModified: "2026-04-07", priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/blog/metallic-epoxy-flooring-las-vegas`, lastModified: "2026-05-03", priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/blog/coolest-pool-deck-flooring-las-vegas`, lastModified: "2026-05-03", priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/blog/rubber-pool-deck-las-vegas`, lastModified: "2026-05-03", priority: 0.7, changeFrequency: "monthly" },

    // Service areas
    { url: `${BASE_URL}/service-areas`, lastModified: "2026-04-16", priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/service-areas/henderson`, lastModified: "2026-04-10", priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/service-areas/summerlin`, lastModified: "2026-04-10", priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/service-areas/north-las-vegas`, lastModified: "2026-04-10", priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/service-areas/boulder-city`, lastModified: "2026-04-10", priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/service-areas/pahrump`, lastModified: "2026-04-10", priority: 0.8, changeFrequency: "monthly" },
  ]

  return routes
}
