FAQ: fix-conflict

Q: Can fix-conflict corrupt my source code?
A: Every file is automatically backed up to `<filename>.bak` prior to resolution. If the post-resolution syntax compiler detects syntax errors, the file is immediately reverted.

Q: How does the syntax validation work?
A: For JavaScript and TypeScript, it compiles the resolved code in an isolated Node.js VM context to guarantee zero syntax and parsing exceptions.
