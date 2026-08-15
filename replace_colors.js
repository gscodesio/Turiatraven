const fs = require('fs');
const path = require('path');

const directories = [
  path.join(__dirname, 'src', 'components'),
  path.join(__dirname, 'src', 'app')
];

const replacements = {
  'bg-forest': 'bg-secondary',
  'text-forest': 'text-secondary',
  'border-forest': 'border-secondary',
  'bg-terracotta': 'bg-primary',
  'text-terracotta': 'text-primary',
  'border-terracotta': 'border-primary',
  'bg-ivory': 'bg-white',
  'text-ivory': 'text-white',
  'bg-sand': 'bg-background-alt',
  'font-serif': 'font-primary',
  'font-sans': 'font-primary',
};

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      
      for (const [key, value] of Object.entries(replacements)) {
        const regex = new RegExp(`\\b${key}\\b`, 'g');
        content = content.replace(regex, value);
      }
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

directories.forEach(processDirectory);
console.log('Done replacing colors.');
