import sharp from "sharp";

const backgroundPath = "public/profile/hero-map-mobile-clean.png";
const portraitPath = "public/profile/alexey-cutout-mobile.png";
const outputPath = "public/profile/hero-map-mobile-composite.png";

const canvasWidth = 941;
const canvasHeight = 1672;
const portraitWidth = 820;
const portraitLeft = 240;
const portraitTop = 64;

const resizedPortrait = await sharp(portraitPath)
  .resize({ width: portraitWidth })
  // Match the darker cinematic map without adding generated skin detail.
  .modulate({ brightness: 0.92, saturation: 0.94 })
  .linear(1.15, -20)
  .sharpen(0.8)
  .png()
  .toBuffer({ resolveWithObject: true });

const portraitHeight = resizedPortrait.info.height;
const lowerFade = Buffer.from(`
  <svg width="${portraitWidth}" height="${portraitHeight}">
    <defs>
      <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="white" stop-opacity="1" />
        <stop offset="68%" stop-color="white" stop-opacity="1" />
        <stop offset="100%" stop-color="white" stop-opacity="0" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#fade)" />
  </svg>
`);

const leftEdgeFade = Buffer.from(`
  <svg width="${portraitWidth}" height="${portraitHeight}">
    <defs>
      <linearGradient id="edge" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="white" stop-opacity="0" />
        <stop offset="9%" stop-color="white" stop-opacity="1" />
        <stop offset="100%" stop-color="white" stop-opacity="1" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#edge)" />
  </svg>
`);

// The fade starts below the face. RGB pixels are untouched; only lower-body alpha changes.
const portrait = await sharp(resizedPortrait.data)
  .composite([
    { input: lowerFade, blend: "dest-in" },
    { input: leftEdgeFade, blend: "dest-in" },
  ])
  .png()
  .toBuffer();

// A blurred copy sits behind the portrait, never over the face.
const portraitShadow = await sharp(portrait)
  .blur(22)
  .modulate({ brightness: 0.22, saturation: 0.4 })
  .png()
  .toBuffer();

const ambientGlow = Buffer.from(`
  <svg width="${canvasWidth}" height="${canvasHeight}">
    <defs>
      <radialGradient id="glow">
        <stop offset="0%" stop-color="#ff8b43" stop-opacity="0.18" />
        <stop offset="42%" stop-color="#183249" stop-opacity="0.10" />
        <stop offset="100%" stop-color="#06101a" stop-opacity="0" />
      </radialGradient>
    </defs>
    <ellipse cx="720" cy="330" rx="360" ry="420" fill="url(#glow)" />
  </svg>
`);

await sharp(backgroundPath)
  .resize(canvasWidth, canvasHeight, { fit: "fill" })
  .composite([
    { input: ambientGlow, left: 0, top: 0 },
    { input: portraitShadow, left: portraitLeft, top: portraitTop + 8 },
    { input: portrait, left: portraitLeft, top: portraitTop },
  ])
  .png({ compressionLevel: 9 })
  .toFile(outputPath);

console.log(outputPath);
