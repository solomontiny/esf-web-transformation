const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const assetsDir = path.join(__dirname, "../src/assets");

const supported = [".jpg", ".jpeg", ".png", ".webp"];

async function optimize(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await optimize(fullPath);
      continue;
    }

    const ext = path.extname(file).toLowerCase();

    if (!supported.includes(ext)) continue;

    try {
const tempFile = fullPath + ".tmp" + ext;
      if (ext === ".jpg" || ext === ".jpeg") {
        await sharp(fullPath)
          .jpeg({
            quality: 85,
            mozjpeg: true,
          })
          .toFile(tempFile);
      } else if (ext === ".png") {
        await sharp(fullPath)
          .png({
            compressionLevel: 9,
          })
          .toFile(tempFile);
      } else if (ext === ".webp") {
        await sharp(fullPath)
          .webp({
            quality: 85,
          })
          .toFile(tempFile);
      }

      fs.renameSync(tempFile, fullPath);

      console.log(`✓ Optimized ${file}`);
    } catch (err) {
      console.error(`✗ Failed: ${file}`);
      console.error(err);
    }
  }
}

optimize(assetsDir).then(() => {
  console.log("\n✅ Image optimization complete!");
});