const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const certsDir = path.join(process.cwd(), 'public', 'certificates');
const thumbsDir = path.join(process.cwd(), 'public', 'thumbnails');
const dataFile = path.join(process.cwd(), 'app', 'data', 'certificates.json');

// Ensure directories exist
if (!fs.existsSync(thumbsDir)) {
  fs.mkdirSync(thumbsDir, { recursive: true });
}

function generate() {
  console.log('🏗️  Generating Certificate Previews (using system poppler-utils)...');

  if (!fs.existsSync(certsDir)) {
    console.warn('⚠️ No certificates folder found in public/certificates');
    fs.writeFileSync(dataFile, JSON.stringify([]));
    return;
  }
  
  const files = fs.readdirSync(certsDir).filter(f => f.toLowerCase().endsWith('.pdf'));
  const certData = [];

  for (const file of files) {
    const pdfPath = path.join(certsDir, file);
    const baseName = file.replace(/\.pdf$/i, '');
    const finalImageName = `${baseName}.png`;
    const finalImagePath = path.join(thumbsDir, finalImageName);

    // 1. Check if thumbnail exists
    if (!fs.existsSync(finalImagePath)) {
      console.log(`📸 Converting: ${file}`);
      try {
        const cmd = `pdftoppm -png -f 1 -l 1 -scale-to 600 "${pdfPath}" "${path.join(thumbsDir, baseName)}"`;
        execSync(cmd);

        // Rename the generated "name-1.png" to "name.png"
        const generatedFile = path.join(thumbsDir, `${baseName}-1.png`);
        if (fs.existsSync(generatedFile)) {
          fs.renameSync(generatedFile, finalImagePath);
        }
      } catch (err) {
        console.error(`❌ Failed to convert ${file}. Is poppler-utils installed? (sudo apt install poppler-utils)`);
        console.error(err.message);
        continue; 
      }
    }

    // 2. Parse Filename for Metadata
    const parts = baseName.split('__');
    const name = (parts[0] || baseName).replace(/_/g, ' ');
    const issuer = (parts[1] || 'Certificate').replace(/_/g, ' ');

    certData.push({
      id: baseName,
      name,
      issuer,
      pdf: `/certificates/${file}`,
      thumbnail: `/thumbnails/${finalImageName}`
    });
  }

  // 3. Write the JSON manifest
  fs.writeFileSync(dataFile, JSON.stringify(certData, null, 2));
  console.log(`✅ Generated manifest with ${certData.length} certificates.`);
}

generate();