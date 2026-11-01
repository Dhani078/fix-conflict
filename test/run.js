const assert = require('node:assert');
const { parseConflict, resolveText } = require('../bin/cli.js');

console.log('Running fix-conflict tests...');
const conflicted = '<<<<<<< HEAD\nconst a = 1;\n=======\nconst a = 2;\n>>>>>>> feature\n';
const blocks = parseConflict(conflicted);
assert.strictEqual(blocks.length, 1);
assert.strictEqual(blocks[0].startRef, 'HEAD');

const resolvedOurs = resolveText(conflicted, 'ours');
assert(resolvedOurs.includes('const a = 1;'));
assert(!resolvedOurs.includes('<<<<<<<'));

const resolvedTheirs = resolveText(conflicted, 'theirs');
assert(resolvedTheirs.includes('const a = 2;'));
console.log('fix-conflict tests passed cleanly.');
process.exit(0);
