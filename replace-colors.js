const fs = require('fs');
const path = require('path');

// Recursively find all .tsx files
function findTsxFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.includes('node_modules')) {
      findTsxFiles(filePath, fileList);
    } else if (file.endsWith('.tsx')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Replace all colors and fonts
function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Replace purple colors with green
  const colorReplacements = [
    [/#3f2578/gi, '#00A878'],
    [/#3F2578/g, '#00A878'],
    [/#A752A9/gi, '#00A878'],
    [/#655193/gi, '#666666'],
    [/#8c7cae/gi, '#999999'],
    [/#b2a8c9/gi, '#CCCCCC'],
    [/#d1cce0/gi, '#E5E5E5'],
    [/#6b5e8a/gi, '#666666'],
    [/#d4c8ed/gi, '#E5E5E5'],
    [/#321e60/gi, '#1A1A1A'],
    [/rgba\(167,\s*82,\s*169/gi, 'rgba(0, 168, 120'],
    [/rgba\(63,\s*37,\s*120/gi, 'rgba(0, 168, 120'],
    [/rgb\(167,\s*82,\s*169\)/gi, 'rgb(0, 168, 120)'],
    [/rgb\(63,\s*37,\s*120\)/gi, 'rgb(0, 168, 120)'],
  ];
  
  colorReplacements.forEach(([from, to]) => {
    if (content.includes(from) || new RegExp(from).test(content)) {
      content = content.replace(new RegExp(from, 'g'), to);
      modified = true;
    }
  });
  
  // Replace Mona Sans font with Inter
  const fontReplacements = [
    [/font-\['Mona_Sans[^']*',sans-serif\]/g, "font-['Inter',sans-serif]"],
    [/Mona Sans/g, 'Inter'],
  ];
  
  fontReplacements.forEach(([from, to]) => {
    if (new RegExp(from).test(content)) {
      content = content.replace(from, to);
      modified = true;
    }
  });
  
  // Replace gradient backgrounds
  const gradientFrom = /linear-gradient\(90deg,\s*#A752A9\s+0%,\s*#3F2578\s+100%\)/gi;
  const gradientTo = 'linear-gradient(90deg, #00A878 0%, #00A878 100%)';
  if (gradientFrom.test(content)) {
    content = content.replace(gradientFrom, gradientTo);
    modified = true;
  }
  
  const gradient2From = /linear-gradient\(263\.233deg,\s*rgb\(167,\s*82,\s*169\)\s+0%,\s*rgb\(63,\s*37,\s*120\)\s+100%\)/gi;
  const gradient2To = '#00A878';
  if (gradient2From.test(content)) {
    content = content.replace(gradient2From, gradient2To);
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  
  return false;
}

// Main execution
const srcDir = path.join(__dirname, 'src');
const tsxFiles = findTsxFiles(srcDir);

console.log(`Found ${tsxFiles.length} .tsx files`);

let modifiedCount = 0;
tsxFiles.forEach(file => {
  if (replaceInFile(file)) {
    modifiedCount++;
    console.log(`✓ Modified: ${file}`);
  }
});

console.log(`\nModified ${modifiedCount} files`);
