import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = './public';
const images = [
  'ai-monitoring.jpg',
  'deployment-planning.jpg',
  'hero-robot.jpg',
  'human-ai-collab.jpg',
  'logo-dark.png',
  'logo-light.png',
  'support-ops.jpg',
  'support-staff.jpg'
];

async function compressImage(imageName) {
  const inputPath = path.join(publicDir, imageName);
  const outputPath = path.join(publicDir, `compressed-${imageName}`);
  
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    console.log(`Compressing ${imageName} (${(metadata.size / 1024 / 1024).toFixed(2)} MB)`);
    
    // Convert to WebP with quality 80 for better compression
    await image
      .webp({ quality: 80 })
      .toFile(outputPath);
    
    const compressedSize = fs.statSync(outputPath).size;
    const originalSize = metadata.size;
    const savings = ((originalSize - compressedSize) / originalSize * 100).toFixed(1);
    
    console.log(`✓ ${imageName}: ${(originalSize / 1024 / 1024).toFixed(2)} MB → ${(compressedSize / 1024 / 1024).toFixed(2)} MB (${savings}% reduction)`);
    
    // Replace original with compressed version
    fs.copyFileSync(outputPath, inputPath);
    fs.unlinkSync(outputPath);
    
  } catch (error) {
    console.error(`Error compressing ${imageName}:`, error.message);
  }
}

async function compressAllImages() {
  console.log('Starting image compression...\n');
  
  for (const image of images) {
    await compressImage(image);
  }
  
  console.log('\n✓ Image compression complete!');
}

compressAllImages().catch(console.error);
