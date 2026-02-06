/**
 * Generate Static OG Image
 * 
 * This script captures the dynamically generated OG image and saves it as a static PNG.
 * Run this once, then commit the generated image to version control.
 * 
 * Usage:
 *   node scripts/generate-static-og-image.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const SITE_URL = process.env.SITE_URL || 'https://www.gson.io';
const OG_IMAGE_URL = `${SITE_URL}/opengraph-image`;
const OUTPUT_PATH = path.join(__dirname, '..', 'public/images', 'opengraph-image.png');

console.log('🎨 Generating static OG image...');
console.log(`📍 Source: ${OG_IMAGE_URL}`);
console.log(`💾 Output: ${OUTPUT_PATH}`);

const file = fs.createWriteStream(OUTPUT_PATH);

https.get(OG_IMAGE_URL, (response) => {
  if (response.statusCode !== 200) {
    console.error(`❌ Failed to fetch image. Status: ${response.statusCode}`);
    process.exit(1);
  }

  response.pipe(file);

  file.on('finish', () => {
    file.close();
    console.log('✅ Static OG image generated successfully!');
    console.log(`📁 Saved to: ${OUTPUT_PATH}`);
  });

  file.on('error', (err) => {
    console.error('❌ Error writing file:', err);
    fs.unlink(OUTPUT_PATH, () => {}); // Delete the file if error
    process.exit(1);
  });
}).on('error', (err) => {
  console.error('❌ Error fetching image:', err);
  fs.unlink(OUTPUT_PATH, () => {}); // Delete the file if error
  process.exit(1);
});