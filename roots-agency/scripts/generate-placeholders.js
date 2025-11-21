/**
 * Generate Placeholder Images Script
 * 
 * This script creates simple SVG placeholder images for the project.
 * Run: node scripts/generate-placeholders.js
 */

const fs = require('fs');
const path = require('path');

// Colors
const colors = {
  purple: '#5d3a5d',
  grey: '#eaeaea',
  yellow: '#fff56e',
  white: '#ffffff',
};

// Create SVG placeholder
function createSVGPlaceholder(width, height, text, bgColor, textColor) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="${bgColor}"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">
    ${text}
  </text>
</svg>`;
}

// Ensure directory exists
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Generate placeholders
const placeholders = [
  // Hero
  { path: 'public/images/hero-poster.jpg', width: 1920, height: 1080, text: 'ROOTS', bg: colors.purple, fg: colors.yellow },
  
  // About
  { path: 'public/images/about-story.jpg', width: 1200, height: 900, text: 'Our Story', bg: colors.grey, fg: colors.purple },
  
  // Portfolio - Urban Brew
  { path: 'public/images/portfolio/urban-brew-hero.jpg', width: 800, height: 1000, text: 'Urban Brew', bg: colors.purple, fg: colors.yellow },
  { path: 'public/images/portfolio/urban-brew-1.jpg', width: 1200, height: 900, text: 'Urban Brew 1', bg: colors.grey, fg: colors.purple },
  { path: 'public/images/portfolio/urban-brew-2.jpg', width: 1200, height: 900, text: 'Urban Brew 2', bg: colors.purple, fg: colors.white },
  { path: 'public/images/portfolio/urban-brew-3.jpg', width: 1200, height: 900, text: 'Urban Brew 3', bg: colors.grey, fg: colors.purple },
  { path: 'public/images/portfolio/urban-brew-4.jpg', width: 1200, height: 900, text: 'Urban Brew 4', bg: colors.purple, fg: colors.yellow },
  
  // Portfolio - Nexus
  { path: 'public/images/portfolio/nexus-hero.jpg', width: 800, height: 1000, text: 'Nexus', bg: colors.purple, fg: colors.yellow },
  { path: 'public/images/portfolio/nexus-1.jpg', width: 1200, height: 900, text: 'Nexus 1', bg: colors.grey, fg: colors.purple },
  { path: 'public/images/portfolio/nexus-2.jpg', width: 1200, height: 900, text: 'Nexus 2', bg: colors.purple, fg: colors.white },
  { path: 'public/images/portfolio/nexus-3.jpg', width: 1200, height: 900, text: 'Nexus 3', bg: colors.grey, fg: colors.purple },
  { path: 'public/images/portfolio/nexus-4.jpg', width: 1200, height: 900, text: 'Nexus 4', bg: colors.purple, fg: colors.yellow },
  
  // Portfolio - EarthWise
  { path: 'public/images/portfolio/earthwise-hero.jpg', width: 800, height: 1000, text: 'EarthWise', bg: colors.purple, fg: colors.yellow },
  { path: 'public/images/portfolio/earthwise-1.jpg', width: 1200, height: 900, text: 'EarthWise 1', bg: colors.grey, fg: colors.purple },
  { path: 'public/images/portfolio/earthwise-2.jpg', width: 1200, height: 900, text: 'EarthWise 2', bg: colors.purple, fg: colors.white },
  { path: 'public/images/portfolio/earthwise-3.jpg', width: 1200, height: 900, text: 'EarthWise 3', bg: colors.grey, fg: colors.purple },
  { path: 'public/images/portfolio/earthwise-4.jpg', width: 1200, height: 900, text: 'EarthWise 4', bg: colors.purple, fg: colors.yellow },
  
  // Portfolio - Lumina
  { path: 'public/images/portfolio/lumina-hero.jpg', width: 800, height: 1000, text: 'Lumina', bg: colors.purple, fg: colors.yellow },
  { path: 'public/images/portfolio/lumina-1.jpg', width: 1200, height: 900, text: 'Lumina 1', bg: colors.grey, fg: colors.purple },
  { path: 'public/images/portfolio/lumina-2.jpg', width: 1200, height: 900, text: 'Lumina 2', bg: colors.purple, fg: colors.white },
  { path: 'public/images/portfolio/lumina-3.jpg', width: 1200, height: 900, text: 'Lumina 3', bg: colors.grey, fg: colors.purple },
  { path: 'public/images/portfolio/lumina-4.jpg', width: 1200, height: 900, text: 'Lumina 4', bg: colors.purple, fg: colors.yellow },
  
  // Portfolio - Pulse
  { path: 'public/images/portfolio/pulse-hero.jpg', width: 800, height: 1000, text: 'Pulse Fitness', bg: colors.purple, fg: colors.yellow },
  { path: 'public/images/portfolio/pulse-1.jpg', width: 1200, height: 900, text: 'Pulse 1', bg: colors.grey, fg: colors.purple },
  { path: 'public/images/portfolio/pulse-2.jpg', width: 1200, height: 900, text: 'Pulse 2', bg: colors.purple, fg: colors.white },
  { path: 'public/images/portfolio/pulse-3.jpg', width: 1200, height: 900, text: 'Pulse 3', bg: colors.grey, fg: colors.purple },
  { path: 'public/images/portfolio/pulse-4.jpg', width: 1200, height: 900, text: 'Pulse 4', bg: colors.purple, fg: colors.yellow },
  
  // Portfolio - Artisan
  { path: 'public/images/portfolio/artisan-hero.jpg', width: 800, height: 1000, text: 'Artisan', bg: colors.purple, fg: colors.yellow },
  { path: 'public/images/portfolio/artisan-1.jpg', width: 1200, height: 900, text: 'Artisan 1', bg: colors.grey, fg: colors.purple },
  { path: 'public/images/portfolio/artisan-2.jpg', width: 1200, height: 900, text: 'Artisan 2', bg: colors.purple, fg: colors.white },
  { path: 'public/images/portfolio/artisan-3.jpg', width: 1200, height: 900, text: 'Artisan 3', bg: colors.grey, fg: colors.purple },
  { path: 'public/images/portfolio/artisan-4.jpg', width: 1200, height: 900, text: 'Artisan 4', bg: colors.purple, fg: colors.yellow },
  
  // Team
  { path: 'public/images/team/sarah.jpg', width: 600, height: 800, text: 'Sarah Chen', bg: colors.purple, fg: colors.white },
  { path: 'public/images/team/marcus.jpg', width: 600, height: 800, text: 'Marcus Johnson', bg: colors.grey, fg: colors.purple },
  { path: 'public/images/team/emma.jpg', width: 600, height: 800, text: 'Emma Rodriguez', bg: colors.purple, fg: colors.yellow },
  { path: 'public/images/team/david.jpg', width: 600, height: 800, text: 'David Kim', bg: colors.grey, fg: colors.purple },
];

console.log('🎨 Generating placeholder images...\n');

placeholders.forEach(({ path: filePath, width, height, text, bg, fg }) => {
  const fullPath = path.join(process.cwd(), filePath);
  const dir = path.dirname(fullPath);
  
  ensureDir(dir);
  
  const svg = createSVGPlaceholder(width, height, text, bg, fg);
  
  // Save as SVG (you can convert to JPG later with a tool if needed)
  const svgPath = fullPath.replace('.jpg', '.svg');
  fs.writeFileSync(svgPath, svg);
  
  console.log(`✅ Created: ${svgPath}`);
});

console.log('\n✨ All placeholder images generated!');
console.log('\n📝 Note: These are SVG files. For production, replace with actual JPG/PNG images.');
console.log('   The website will work with these SVG placeholders for development.\n');

