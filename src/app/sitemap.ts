import { MetadataRoute } from "next"

const BASE_URL = "https://proshieldepoxy.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split("T")[0]

  const routes: MetadataRoute.Sitemap = [
    // Core pages
    { url: `${BASE_URL}/`, lastModified: today, priority: 1.0, changeFrequency: "weekly" },
    { url: `${BASE_URL}/contact`, lastModified: today, priority: 0.9, changeFrequency: "monthly" },

    // Service pages
    { url: `${BASE_URL}/proflake`, lastModified: today, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/metallic-epoxy`, lastModified: today, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/vubastone`, lastModified: today, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/concrete-polishing`, lastModified: today, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/commercial-flooring`, lastModified: today, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/concrete-overlay`, lastModified: today, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/cool-deck`, lastModified: today, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/tile-flooring`, lastModified: today, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/plank-flooring`, lastModified: today, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/paver-sealing`, lastModified: today, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/airplane-hangar`, lastModified: today, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/artificial-turf`, lastModified: today, priority: 0.7, changeFrequency: "monthly" },

    // Area pages
    { url: `${BASE_URL}/areas/garage`, lastModified: today, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/areas/exterior`, lastModified: today, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/areas/interior`, lastModified: today, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/areas/commercial`, lastModified: today, priority: 0.8, changeFrequency: "monthly" },

    // Supporting pages
    { url: `${BASE_URL}/services`, lastModified: today, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/gallery`, lastModified: today, priority: 0.7, changeFrequency: "weekly" },
    { url: `${BASE_URL}/about`, lastModified: today, priority: 0.6, changeFrequency: "monthly" },
    { url: `${BASE_URL}/faq`, lastModified: today, priority: 0.7, changeFrequency: "monthly" },

    // Blog
    { url: `${BASE_URL}/blog`, lastModified: today, priority: 0.7, changeFrequency: "weekly" },
    { url: `${BASE_URL}/blog/epoxy-garage-floor-vs-polyaspartic`, lastModified: today, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/blog/epoxy-garage-floor-cost-las-vegas`, lastModified: today, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/blog/hot-tire-pickup-prevention-garage-floor`, lastModified: today, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/blog/polished-concrete-vs-epoxy`, lastModified: today, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/blog/best-pool-deck-coatings-las-vegas`, lastModified: today, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/blog/epoxy-floor-maintenance-tips`, lastModified: today, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/blog/how-long-does-epoxy-flooring-last`, lastModified: today, priority: 0.7, changeFrequency: "monthly" },

    // Service areas
    { url: `${BASE_URL}/service-areas`, lastModified: today, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/service-areas/henderson`, lastModified: today, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/service-areas/summerlin`, lastModified: today, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/service-areas/north-las-vegas`, lastModified: today, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/service-areas/boulder-city`, lastModified: today, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/service-areas/pahrump`, lastModified: today, priority: 0.8, changeFrequency: "monthly" },
  ]

  return routes
}
