const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');
const glob = require('glob');

const ROOT_DIR = path.join(__dirname, '..');
const IMAGES_DIR = path.join(ROOT_DIR, 'static/img');

async function optimizeImages() {
  // Find all PNG, JPG, and JPEG images
  const images = glob.sync('**/*.{png,jpg,jpeg}', { 
    cwd: IMAGES_DIR,
    ignore: ['**/node_modules/**']
  });

  console.log(`Found ${images.length} images to optimize`);

  // Convert each image to WebP
  for (const image of images) {
    const inputPath = path.join(IMAGES_DIR, image);
    const outputPath = inputPath.replace(/\.(png|jpg|jpeg)$/, '.webp');

    try {
      await sharp(inputPath).webp().toFile(outputPath);
      console.log(`Converted ${image} to WebP`);
      
      // Delete the original image
      await fs.unlink(inputPath);
      console.log(`Deleted original ${image}`);
    } catch (error) {
      console.error(`Error processing ${image}:`, error);
    }
  }

  // Update references in markdown files
  const mdFiles = glob.sync('**/*.md', { 
    cwd: ROOT_DIR,
    ignore: ['**/node_modules/**']
  });

  for (const mdFile of mdFiles) {
    const filePath = path.join(ROOT_DIR, mdFile);
    let content = await fs.readFile(filePath, 'utf8');
    
    // Replace image extensions in markdown
    content = content.replace(/\.(png|jpg|jpeg)(?=\))/g, '.webp');
    
    await fs.writeFile(filePath, content, 'utf8');
    console.log(`Updated references in ${mdFile}`);
  }
}

optimizeImages().catch(console.error); 