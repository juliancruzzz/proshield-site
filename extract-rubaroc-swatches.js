/**
 * Extract Rubaroc color swatches from the Contec Supply PDF.
 *
 * Usage:  npm install pdfjs-dist canvas   (one-time)
 *         node extract-rubaroc-swatches.js
 *
 * Outputs 28 webp images to public/images/rubaroc/base/ and public/images/rubaroc/blends/
 */

const fs = require("fs");
const path = require("path");
const https = require("https");

const PDF_URL =
  "https://contecsupply.com/wp-content/uploads/2024/06/RUBAROC%C2%AE-COLOUR-CHART-RECIPES-2023-compressed.pdf";

const BASE_DIR = path.join(__dirname, "public", "images", "rubaroc", "base");
const BLEND_DIR = path.join(__dirname, "public", "images", "rubaroc", "blends");

// Swatch regions as fractions of page width/height (estimated from the PDF layout)
// Page 1: 4x4 grid of base colors
const PAGE1_SWATCHES = [
  // Row 1
  { name: "eggshell",     col: 0, row: 0 },
  { name: "beige",        col: 1, row: 0 },
  { name: "brown",        col: 2, row: 0 },
  { name: "red",          col: 3, row: 0 },
  // Row 2
  { name: "light-grey",   col: 0, row: 1 },
  { name: "medium-grey",  col: 1, row: 1 },
  { name: "dark-grey",    col: 2, row: 1 },
  { name: "black",        col: 3, row: 1 },
  // Row 3
  { name: "light-blue",   col: 0, row: 2 },
  { name: "medium-blue",  col: 1, row: 2 },
  { name: "dark-blue",    col: 2, row: 2 },
  { name: "teal",         col: 3, row: 2 },
  // Row 4
  { name: "light-green",  col: 0, row: 3 },
  { name: "dark-green",   col: 1, row: 3 },
  { name: "yellow",       col: 2, row: 3 },
  { name: "orange",       col: 3, row: 3 },
];

// Page 2: 4x3 grid of blends
const PAGE2_SWATCHES = [
  // Row 1
  { name: "platinum",    col: 0, row: 0 },
  { name: "nickel",      col: 1, row: 0 },
  { name: "slate",       col: 2, row: 0 },
  { name: "brownstone",  col: 3, row: 0 },
  // Row 2
  { name: "sandstone",   col: 0, row: 1 },
  { name: "limestone",   col: 1, row: 1 },
  { name: "sandalwood",  col: 2, row: 1 },
  { name: "mocha",       col: 3, row: 1 },
  // Row 3
  { name: "terracotta",  col: 0, row: 2 },
  { name: "santa-fe",    col: 1, row: 2 },
  { name: "caspian",     col: 2, row: 2 },
  { name: "lily-pad",    col: 3, row: 2 },
];

function downloadPdf(url) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadPdf(res.headers.location).then(resolve).catch(reject);
      }
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => resolve(Buffer.concat(chunks)));
      res.on("error", reject);
    }).on("error", reject);
  });
}

async function main() {
  // Ensure output dirs exist
  fs.mkdirSync(BASE_DIR, { recursive: true });
  fs.mkdirSync(BLEND_DIR, { recursive: true });

  console.log("Downloading PDF...");
  const pdfData = await downloadPdf(PDF_URL);
  console.log(`PDF downloaded: ${(pdfData.length / 1024).toFixed(0)} KB`);

  // Load pdfjs-dist
  const pdfjsLib = require("pdfjs-dist/legacy/build/pdf.js");

  // Render scale — higher = sharper swatches
  const SCALE = 3;

  const doc = await pdfjsLib.getDocument({ data: pdfData }).promise;
  console.log(`PDF has ${doc.numPages} pages`);

  const { createCanvas } = require("canvas");
  const sharp = require("sharp");

  for (let pageNum = 1; pageNum <= 2; pageNum++) {
    const page = await doc.getPage(pageNum);
    const viewport = page.getViewport({ scale: SCALE });
    const canvas = createCanvas(viewport.width, viewport.height);
    const ctx = canvas.getContext("2d");

    await page.render({ canvasContext: ctx, viewport }).promise;
    console.log(`Page ${pageNum} rendered: ${viewport.width}x${viewport.height}`);

    const fullBuf = canvas.toBuffer("image/png");

    const swatches = pageNum === 1 ? PAGE1_SWATCHES : PAGE2_SWATCHES;
    const outDir = pageNum === 1 ? BASE_DIR : BLEND_DIR;

    // Grid geometry (fractions of PDF page)
    // Page 1: title ~12% from top, swatches start ~18%, 4 rows, each ~20% height, 4 cols
    // Page 2: title ~18% from top, swatches start ~25%, 3 rows, each ~22% height, 4 cols
    const gridCfg = pageNum === 1
      ? { startX: 0.08, startY: 0.16, cellW: 0.22, cellH: 0.20, swatchR: 0.09 }
      : { startX: 0.08, startY: 0.24, cellW: 0.22, cellH: 0.24, swatchR: 0.09 };

    for (const sw of swatches) {
      const cx = (gridCfg.startX + sw.col * gridCfg.cellW + gridCfg.cellW / 2) * viewport.width;
      const cy = (gridCfg.startY + sw.row * gridCfg.cellH + gridCfg.swatchR * (viewport.width / viewport.height) * 1.8) * viewport.height;
      const r = gridCfg.swatchR * viewport.width;

      // Crop a square around the swatch center
      const left = Math.max(0, Math.round(cx - r));
      const top = Math.max(0, Math.round(cy - r));
      const size = Math.round(r * 2);

      try {
        await sharp(fullBuf)
          .extract({
            left,
            top,
            width: Math.min(size, viewport.width - left),
            height: Math.min(size, viewport.height - top),
          })
          .resize(400, 400, { fit: "cover" })
          .webp({ quality: 85 })
          .toFile(path.join(outDir, `${sw.name}.webp`));

        console.log(`  ✓ ${sw.name}.webp`);
      } catch (err) {
        console.error(`  ✗ ${sw.name}: ${err.message}`);
      }
    }
  }

  console.log("\nDone! Swatch images saved to public/images/rubaroc/");
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
