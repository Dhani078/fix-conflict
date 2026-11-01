#!/usr/bin/env node
const fs = require('node:fs');

function parseConflict(content) {
  const regex = /<<<<<<<\s*(.*?)\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>>\s*(.*?)(?:\n|$)/g;
  const blocks = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    blocks.push({
      startRef: match[1],
      ours: match[2],
      theirs: match[3],
      endRef: match[4]
    });
  }
  return blocks;
}

function resolveText(content, strategy = 'ours') {
  const regex = /<<<<<<<\s*(.*?)\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>>\s*(.*?)(?:\n|$)/g;
  return content.replace(regex, (match, r1, ours, theirs) => {
    if (strategy === 'theirs') return theirs;
    if (strategy === 'both') return ours + theirs;
    return ours;
  });
}

function run() {
  const args = process.argv.slice(2);
  if (args.includes('--help') || args.includes('-h')) {
    console.log('fix-conflict - Git merge conflict resolver');
    console.log('Usage: npx fix-conflict [file] [--strategy ours|theirs|both]');
    process.exit(0);
  }
  if (args.includes('--version') || args.includes('-v')) {
    console.log('fix-conflict v1.0.0');
    process.exit(0);
  }

  const file = args[0] || 'index.js';
  if (!fs.existsSync(file)) {
    console.log('No conflict file specified or file not found.');
    process.exit(0);
  }

  const content = fs.readFileSync(file, 'utf-8');
  const conflicts = parseConflict(content);
  console.log(`Found ${conflicts.length} conflict blocks in ${file}.`);
}

if (require.main === module) {
  run();
}

module.exports = { parseConflict, resolveText, run };
