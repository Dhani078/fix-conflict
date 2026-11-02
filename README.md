fix-conflict

[![Release](https://img.shields.io/github/v/release/Dhani078/fix-conflict?color=blue)](https://github.com/Dhani078/fix-conflict/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D20.0.0-green.svg)](https://nodejs.org/)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen.svg)](#)

Zero-dependency Git merge conflict analyzer and smart 3-way resolver CLI. Parses Git conflict markers, analyzes differences between conflicting branches, provides automated resolution strategies (ours, theirs, union), and validates code syntax post-resolution.

---

THE PROBLEM

Merge conflicts derail engineering flow and lead to broken builds:
- Manually scanning through thousands of lines to find conflict markers is error-prone.
- Accidental residual conflict markers (<<<<<<< or >>>>>>>) get committed and crash production.
- Monorepos and long-running feature branches produce hundreds of mechanical conflicts in package manifests and import lists.
- Heavy GUI diff tools require hundreds of megabytes of RAM and slow down developer machines.
- Blindly choosing accept current or accept incoming often causes silent syntax errors.

---

THE SOLUTION

fix-conflict provides clean command-line resolution:
- Conflict Marker Detection: Finds every conflict block in the repository instantly.
- Resolution Strategies: Select --ours, --theirs, or --union with a single command.
- Smart Import and List Merging: Combines import declarations and array elements without duplicates.
- Post-Resolution Syntax Validation: Verifies JavaScript and JSON integrity before saving files.
- Safe Backups: Automatically preserves .conflict-backup files before modifying source code.

---

QUICKSTART

Scan repository for active merge conflicts:

```bash
npx fix-conflict
```

Resolve all conflicts by accepting current branch (ours):

```bash
npx fix-conflict --ours
```

Resolve all conflicts by accepting incoming branch (theirs):

```bash
npx fix-conflict --theirs
```

Combine both conflicting sides cleanly:

```bash
npx fix-conflict --union
```

---

COMMAND MATRIX

Command | Argument | Description | Default
--- | --- | --- | ---
fix-conflict | [file] | Scan file or repository for conflict markers | Interactive scan
fix-conflict --ours | [file] | Resolve conflicts using current branch changes | Backs up original
fix-conflict --theirs | [file] | Resolve conflicts using incoming branch changes | Backs up original
fix-conflict --union | [file] | Concatenate both sides without duplicate markers | Combines both
fix-conflict --check | None | CI gate mode, fails with code 1 if markers exist | Non-destructive
fix-conflict --help | None | Print command list and flags | Flag
fix-conflict --version | None | Print current semantic version | Flag

---

CLI OPTIONS

- `--ours`: Accept local/current branch code block.
- `--theirs`: Accept remote/incoming branch code block.
- `--union`: Combine both sides sequentially.
- `--dry-run`: Preview resolution without modifying files.
- `--check`: Fails with exit code 1 if residual conflict markers are found.
- `--json`: Output structured JSON report of all detected conflict blocks.

---

INTERACTIVE WORKFLOW PREVIEW

```
$ npx fix-conflict

[fix-conflict] Scanning repository for merge conflict markers...

File: src/services/auth.ts (2 conflicts found)
[Block 1] Lines 24-38
  Ours:   import { verifyToken, refreshToken } from './jwt';
  Theirs: import { verifyToken, decodeToken } from './jwt';
  Action: Recommended: Union (Combine unique imports)

[Block 2] Lines 95-112
  Ours:   const timeout = 5000;
  Theirs: const timeout = 10000;
  Action: Select resolution strategy: [1] Ours [2] Theirs [3] Union

Resolved 2 conflicts in src/services/auth.ts (18ms).
Post-resolution syntax check: PASSED.
```

---

DATA SAFETY GUARANTEES

- Automatic Backup: Creates file.conflict-backup before applying resolution.
- Syntax Verification: Validates syntax to ensure resolution does not introduce broken code.
- 100 Percent Offline: Built strictly with Node.js standard library.

---

LICENSE AND AUTHOR

- License: MIT License
- Author: Dhani078 (dhanisepeda@gmail.com)
- Source Repository: https://github.com/Dhani078/fix-conflict
