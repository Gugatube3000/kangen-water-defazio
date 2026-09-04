const sharp = require("sharp");
const path = require("path");

const src = path.join(__dirname, "..", "waterpipeimg", "waterpippe.png");
const outDir = path.join(__dirname, "..", "public");

// Generate two outputs:
// - lead-water-pipe.webp (modern browsers — small, fast)
// - lead-water-pipe.jpg  (universal fallback — also small)
// Crop bottom whitespace and resize to a max width that still looks crisp on retina.

async function run() {
  const meta = await sharp(src).metadata();
  console.log(`Source: ${meta.width}×${meta.height} ${meta.format}`);

  // The text "LEAD WATER PIPE" plus the arrow at the top of the source is
  // useful but we'll let the site's caption handle that — crop ~12% off the
  // top so the photo is just the pipe.
  const cropTop = Math.round(meta.height * 0.12);
  const cropBottom = Math.round(meta.height * 0.08);

  const targetWidth = 1400; // plenty for a half-width hero panel @ 2x

  await sharp(src)
    .extract({
      left: 0,
      top: cropTop,
      width: meta.width,
      height: meta.height - cropTop - cropBottom,
    })
    .resize({ width: targetWidth, withoutEnlargement: true })
    .webp({ quality: 82, effort: 5 })
    .toFile(path.join(outDir, "lead-water-pipe.webp"));

  await sharp(src)
    .extract({
      left: 0,
      top: cropTop,
      width: meta.width,
      height: meta.height - cropTop - cropBottom,
    })
    .resize({ width: targetWidth, withoutEnlargement: true })
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(path.join(outDir, "lead-water-pipe.jpg"));

  for (const name of [
    "lead-water-pipe.webp",
    "lead-water-pipe.jpg",
  ]) {
    const fs = require("fs");
    const stat = fs.statSync(path.join(outDir, name));
    console.log(`${name}: ${(stat.size / 1024).toFixed(1)} KB`);
  }
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
