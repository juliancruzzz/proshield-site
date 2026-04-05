/**
 * Build-time script: fetches Google reviews via the Places API (New)
 * and writes them to src/data/google-reviews.json.
 *
 * Requires:
 *   GOOGLE_PLACES_API_KEY   – server-side only (never NEXT_PUBLIC_)
 *   NEXT_PUBLIC_GOOGLE_PLACE_ID – already in .env.local
 *
 * Run manually:  node scripts/fetch-google-reviews.mjs
 * Runs automatically via the "prebuild" npm script.
 */

import { writeFileSync, readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT = resolve(__dirname, "../src/data/google-reviews.json");

/* ---------- load .env.local manually (no dotenv dependency) ---------- */
function loadEnv() {
  try {
    const envPath = resolve(__dirname, "../.env.local");
    const lines = readFileSync(envPath, "utf-8").split("\n");
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eqIdx = trimmed.indexOf("=");
      if (eqIdx === -1) continue;
      const key = trimmed.slice(0, eqIdx).trim();
      const val = trimmed.slice(eqIdx + 1).trim();
      if (!process.env[key]) process.env[key] = val;
    }
  } catch {
    // .env.local may not exist in CI
  }
}

loadEnv();

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE_ID = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;

if (!API_KEY) {
  console.warn(
    "\x1b[33m⚠  GOOGLE_PLACES_API_KEY is not set – skipping review fetch, keeping existing data.\x1b[0m"
  );
  process.exit(0);
}

if (!PLACE_ID) {
  console.warn(
    "\x1b[33m⚠  NEXT_PUBLIC_GOOGLE_PLACE_ID is not set – skipping review fetch.\x1b[0m"
  );
  process.exit(0);
}

/* ---------- fetch via Places API (New) ---------- */
async function fetchReviews() {
  const url = `https://places.googleapis.com/v1/places/${PLACE_ID}?fields=rating,userRatingCount,reviews&languageCode=en&key=${API_KEY}`;

  console.log(`Fetching reviews for place ${PLACE_ID}...`);

  const res = await fetch(url);

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Places API returned ${res.status}: ${body}`);
  }

  const data = await res.json();

  const reviews = (data.reviews || []).map((r) => ({
    name: r.authorAttribution?.displayName || "Google User",
    profilePhoto: r.authorAttribution?.photoUri || "",
    rating: r.rating || 5,
    text:
      r.text?.text ||
      r.originalText?.text ||
      "",
    date: r.relativePublishTimeDescription || "",
    publishTime: r.publishTime || "",
  }));

  const output = {
    rating: data.rating || 0,
    totalReviews: data.userRatingCount || 0,
    reviews,
    fetchedAt: new Date().toISOString(),
  };

  writeFileSync(OUTPUT, JSON.stringify(output, null, 2), "utf-8");
  console.log(
    `\x1b[32m✓  Wrote ${reviews.length} reviews (${output.rating}★, ${output.totalReviews} total) to src/data/google-reviews.json\x1b[0m`
  );
}

fetchReviews().catch((err) => {
  console.error("\x1b[31m✗  Failed to fetch reviews:\x1b[0m", err.message);
  console.warn("   Build will continue with existing review data.");
  process.exit(0); // don't break the build
});
