const https = require('https');
const fs = require('fs');
const path = require('path');

const SITE_URL = process.env.SITE_URL || 'https://www.gson.io';
const OG_IMAGE_URL = `${SITE_URL}/api/og`;
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
    fs.unlink(OUTPUT_PATH, () => {}); 
    process.exit(1);
  });
}).on('error', (err) => {
  console.error('❌ Error fetching image:', err);
  fs.unlink(OUTPUT_PATH, () => {});
  process.exit(1);
});