import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "public/images/original";
const outputDir = "public/images/optimized";

// créer dossier si inexistant
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach(async (file) => {
  const inputPath = path.join(inputDir, file);

  // skip si ce n'est pas une image
  if (!file.match(/\.(jpg|jpeg|png)$/i)) return;

  const name = path.parse(file).name;
  const outputPath = path.join(outputDir, `${name}.webp`);

  await sharp(inputPath)
    .resize({ width: 1600 }) // ajuste si besoin
    .webp({ quality: 70 })
    .toFile(outputPath);

  console.log(`✔ Optimized: ${file} → ${name}.webp`);
});
