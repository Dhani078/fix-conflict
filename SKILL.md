---
name: fix-conflict
description: Git merge conflict analyzer and smart 3-way resolver CLI and agent skill. Resolves conflict blocks with ours, theirs, or union strategies and verifies syntax integrity.
risk: safe
version: 1.0.0
---

NAME
fix-conflict - Git merge conflict analyzer and resolver

SYNOPSIS
npx fix-conflict [file] [options]

COMMANDS
- scan [file]: Detect and display conflict blocks.
- --ours: Resolve using local branch content.
- --theirs: Resolve using incoming branch content.
- --union: Concatenate both conflicting blocks.
- --check: CI mode, exits with code 1 if conflict markers exist.

OPTIONS
- --dry-run: Simulate resolution without writing to disk.
- --json: Output conflict blocks as JSON.

DETERMINISTIC BEHAVIOR AND INVARIANTS
1. The tool must never overwrite a conflicting file without saving file.conflict-backup.
2. In --check mode, if any residual conflict markers (<<<<<<< or >>>>>>>) exist, the exit code must be 1.
3. If no conflicts are detected, the exit code must be 0.
4. Resolved files must be checked for parseable syntax before finalizing.

AGENT INTEGRATION INSTRUCTIONS
When resolving Git merge conflicts automatically:
1. Run npx fix-conflict --json to inspect conflict blocks.
2. Determine appropriate strategy (ours, theirs, or union).
3. Execute npx fix-conflict --<strategy> <file>.
4. Run tests to confirm behavioral correctness.

AUTHOR
Dhani078 (dhanisepeda@gmail.com)
