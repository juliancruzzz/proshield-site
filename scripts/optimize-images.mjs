/**
 * Image Optimization Script for ProShield Epoxy
 * Compresses oversized images in public/images/ to WebP format
 * Run: node scripts/optimize-images.mjs
 */

import sharp from "sharp";
import { readdir, stat, rename } from "fs/promises";
import { join, extname, basename, dirname } from "path";

const PUBLIC_IMAGES = join(process.cwd(), "public", "images");
const MAX_WIDTH = 1920; // max px width
const MAX_FILE_SIZE = 300 * 1024; // 300 KB threshold — compress anything larger
const QUALITY_JPG = 80;
const QUALITY_WEBP = 78;
const QUALITY_PNG = 80;

let totalSaved = 0;
let filesProcessed = 0;

async function getAllImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getAllImages(fullPath)));
    } else {
      const ext = extname(entry.name).toLowerCase();
      if ([".jpg", ".jpeg", ".png", ".webp"].includes(ext)) {
        files.push(fullPath);
      }
    }
  }
  return files;
}

async function optimizeImage(filePath) {
  const fileStats = await stat(filePath);
  if (fileStats.size <= MAX_FILE_SIZE) return; // skip small files

  const ext = extname(filePath).toLowerCase();
  const originalSize = fileStats.size;

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    // Resize if wider than MAX_WIDTH
    const needsResize = metadata.width && metadata.width > MAX_WIDTH;

    let pipeline = sharp(filePath);

    if (needsResize) {
      pipeline = pipeline.resize(MAX_WIDTH, null, {
        withoutEnlargement: true,
        fit: "inside",
      });
    }

    let outputBuffer;
    if (ext === ".png") {
      // Convert large PNGs to WebP (much smaller)
      const webpPath = filePath.replace(/\.png$/i, ".webp");
      outputBuffer = await pipeline
        .webp({ quality: QUALITY_WEBP, effort: 6 })
        .toBuffer();

      // Only save if actually smaller
      if (outputBuffer.length < originalSize * 0.9) {
        await sharp(outputBuffer).toFile(webpPath);
        // Also overwrite the PNG with a compressed version for fallback
        const pngBuffer = await sharp(filePath)
          .resize(MAX_WIDTH, null, { withoutEnlargement: true, fit: "inside" })
          .png({ quality: QUALITY_PNG, compressionLevel: 9 })
          .toBuffer();
        if (pngBuffer.length < originalSize) {
          await sharp(pngBuffer).toFile(filePath);
        }
        const saved = originalSize - outputBuffer.length;
        totalSaved += saved;
        filesProcessed++;
        console.log(
          `  ✓ ${basename(filePath)} → .webp | ${fmt(originalSize)} → ${fmt(outputBuffer.length)} (saved ${fmt(saved)})`
        );
      }
    } else if (ext === ".jpg" || ext === ".jpeg") {
      outputBuffer = await pipeline
        .jpeg({ quality: QUALITY_JPG, mozjpeg: true })
        .toBuffer();

      if (outputBuffer.length < originalSize * 0.9) {
        await sharp(outputBuffer).toFile(filePath);
        const saved = originalSize - outputBuffer.length;
        totalSaved += saved;
        filesProcessed++;
        console.log(
          `  ✓ ${basename(filePath)} | ${fmt(originalSize)} → ${fmt(outputBuffer.length)} (saved ${fmt(saved)})`
        );
      }
    } else if (ext === ".webp") {
      outputBuffer = await pipeline
        .webp({ quality: QUALITY_WEBP, effort: 6 })
        .toBuffer();

      if (outputBuffer.length < originalSize * 0.9) {
        await sharp(outputBuffer).toFile(filePath);
        const saved = originalSize - outputBuffer.length;
        totalSaved += saved;
        filesProcessed++;
        console.log(
          `  ✓ ${basename(filePath)} | ${fmt(originalSize)} → ${fmt(outputBuffer.length)} (saved ${fmt(saved)})`
        );
      }
    }
  } catch (err) {
    console.error(`  ✗ ${basename(filePath)}: ${err.message}`);
  }
}

function fmt(bytes) {
  if (bytes >= 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  return (bytes / 1024).toFixed(0) + " KB";
}

async function main() {
  console.log("🔍 Scanning images in public/images/...\n");
  const images = await getAllImages(PUBLIC_IMAGES);
  console.log(`Found ${images.length} images total\n`);

  // Sort largest first
  const withSizes = await Promise.all(
    images.map(async (f) => ({ path: f, size: (await stat(f)).size }))
  );
  withSizes.sort((a, b) => b.size - a.size);

  const oversized = withSizes.filter((f) => f.size > MAX_FILE_SIZE);
  console.log(
    `${oversized.length} images over ${fmt(MAX_FILE_SIZE)} threshold:\n`
  );
  for (const f of oversized) {
    console.log(`  ${fmt(f.size).padStart(8)} ${f.path.replace(PUBLIC_IMAGES, "")}`);
  }
  console.log("\nOptimizing...\n");

  for (const f of oversized) {
    await optimizeImage(f.path);
  }

  console.log(`\n✅ Done! ${filesProcessed} files processed, ${fmt(totalSaved)} total savings`);
}

main().catch(console.error);
