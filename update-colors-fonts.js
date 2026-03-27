#!/usr/bin/env node

/**
 * Script to update all old purple colors and Mona Sans fonts to new green Porto style
 * Run with: node update-colors-fonts.js
 */

const fs = require('fs');
const path = require('path');

// Color mappings: old -> new
const colorReplacements = [
  // Main purple colors to green
  { from: /#A752A9/gi, to: '#00A878' },
  { from: /#3F2578/gi, to: '#00A878' },
  { from: /#3f2578/gi, to: '#00A878' },
  
  // Secondary/muted purples to grays
  { from: /#655193/gi, to: '#666666' },
  { from: /#8c7cae/gi, to: '#666666' },
  { from: /#b2a8c9/gi, to: '#E5E5E5' },
  
  // SVG stroke colors
  { from: /stroke="var\(--stroke-0, #A752A9\)"/gi, to: 'stroke="var(--stroke-0, #00A878)"' },
  { from: /stroke="var\(--stroke-0, #3F2578\)"/gi, to: 'stroke="var(--stroke-0, #00A878)"' },
  { from: /stroke="#3F2578"/gi, to: 'stroke="#00A878"' },
  { from: /stroke="#A752A9"/gi, to: 'stroke="#00A878"' },
  
  // Border colors
  { from: /border-\[#3f2578\]/gi, to: 'border-[#00A878]' },
  { from: /border-\[#A752A9\]/gi, to: 'border-[#00A878]' },
  
  // Background colors in classes
  { from: /bg-\[#3f2578\]/gi, to: 'bg-[#00A878]' },
  { from: /bg-\[#A752A9\]/gi, to: 'bg-[#00A878]' },
  { from: /bg-\[#b2a8c9\]/gi, to: 'bg-[#E5E5E5]' },
  
  // Text colors in classes
  { from: /text-\[#3f2578\]/gi, to: 'text-[#1A1A1A]' },
  { from: /text-\[#A752A9\]/gi, to: 'text-[#00A878]' },
  { from: /text-\[#655193\]/gi, to: 'text-[#666666]' },
  { from: /text-\[#8c7cae\]/gi, to: 'text-[#666666]' },
  
  // Gradient backgrounds
  { from: /backgroundImage: "linear-gradient\(90deg, #A752A9 0%, #3F2578 100%\)"/gi, 
    to: 'backgroundImage: "linear-gradient(90deg, #00A878 0%, #007A5E 100%)"' },
];

// Font replacements
const fontReplacements = [
  // Main Mona Sans variants to Inter
  { from: /font-\['Mona_Sans',sans-serif\]/gi, to: "font-['Inter',sans-serif]" },
  { from: /font-\['Mona_Sans_VF:Bold',sans-serif\]/gi, to: "font-['Inter',sans-serif]" },
  { from: /font-\['Mona_Sans_VF:Medium',sans-serif\]/gi, to: "font-['Inter',sans-serif]" },
  { from: /font-\['Mona_Sans_VF:Regular',sans-serif\]/gi, to: "font-['Inter',sans-serif]" },
  { from: /font-\['Mona_Sans_VF:Display_Medium',sans-serif\]/gi, to: "font-['Inter',sans-serif]" },
  { from: /font-\['Mona_Sans_VF:Semi_Bold',sans-serif\]/gi, to: "font-['Inter',sans-serif]" },
];

function updateFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply color replacements
    colorReplacements.forEach(({ from, to }) => {
      content = content.replace(from, to);
    });
    
    // Apply font replacements
    fontReplacements.forEach(({ from, to }) => {
      content = content.replace(from, to);
    });
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Updated: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`✗ Error updating ${filePath}:`, error.message);
    return false;
  }
}

function walkDir(dir, filePattern = /\.(tsx|ts|jsx|js)$/) {
  const files = fs.readdirSync(dir);
  const updatedFiles = [];
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and hidden directories
      if (!file.startsWith('.') && file !== 'node_modules') {
        updatedFiles.push(...walkDir(filePath, filePattern));
      }
    } else if (filePattern.test(file)) {
      if (updateFile(filePath)) {
        updatedFiles.push(filePath);
      }
    }
  });
  
  return updatedFiles;
}

// Main execution
console.log('🎨 Starting color and font update...\n');

const srcDir = path.join(__dirname, 'src');
const updatedFiles = walkDir(srcDir);

console.log(`\n✅ Complete! Updated ${updatedFiles.length} file(s).`);

if (updatedFiles.length > 0) {
  console.log('\nUpdated files:');
  updatedFiles.forEach(file => console.log(`  - ${path.relative(__dirname, file)}`));
}
