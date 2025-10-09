
const fs = require('fs');
const path = require('path');

// Read the help section template
const TEMPLATE_PATH = path.join(__dirname, '_help-section-template.md');
const HELP_SECTION = '\n\n' + fs.readFileSync(TEMPLATE_PATH, 'utf8');

function addHelpSectionToFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add the new help section at the end
    content = content.trimEnd() + HELP_SECTION;
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated help section in: ${path.basename(filePath)}`);
    return true;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function main() {
  const adaptorsDir = path.join(__dirname, '../adaptors');
  
  if (!fs.existsSync(adaptorsDir)) {
    console.error('Adaptors directory not found!');
    process.exit(1);
  }
  
  const files = fs.readdirSync(adaptorsDir);
  const markdownFiles = files.filter(file => file.endsWith('.md') && file !== 'intro.mdx');
  
  console.log(`Found ${markdownFiles.length} markdown files in adaptors directory`);
  
  let updated = 0;
  for (const file of markdownFiles) {
    const filePath = path.join(adaptorsDir, file);
    if (addHelpSectionToFile(filePath)) {
      updated++;
    }
  }
  
  console.log(`\nProcessed ${markdownFiles.length} files, updated ${updated} files`);
}

if (require.main === module) {
  main();
}

module.exports = { addHelpSectionToFile, HELP_SECTION };
