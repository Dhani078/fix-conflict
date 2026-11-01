fix-conflict

[![Release](https://img.shields.io/github/v/release/Dhani078/fix-conflict?color=blue)](https://github.com/Dhani078/fix-conflict/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D20.0.0-green.svg)](https://nodejs.org/)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen.svg)](#)

Interactive terminal merge conflict resolver with language syntax validation. Parses standard Git conflict markers (<<<<<<<, =======, >>>>>>>), displays clear side-by-side diffs in the terminal, provides single-keystroke resolution actions, and verifies syntax integrity before writing files.

---

The Problem

Resolving Git merge conflicts manually is painful and risky:
- Developers accidentally leave dangling conflict markers in production code.
- Selecting either "ours" or "theirs" blindly breaks downstream imports and syntax.
- Heavy GUI tools require launching complex desktop applications.
- Text editors often format or re-indent surrounding code unintentionally.

---

The Solution

fix-conflict provides a lightweight, focused terminal workflow:
- Scans the repository for unresolved conflict markers.
- Displays each conflict block with context, branch provenance, and clear options:
  - Keep Ours (current branch)
  - Keep Theirs (incoming branch)
  - Keep Both (ours followed by theirs)
  - Custom Edit in default editor
- Validates that the resolved file parses without syntax errors before clearing Git conflict state.

---

Installation and Usage

Run directly via npx when in a conflicting merge state:

```bash
npx fix-conflict
```

List all files currently containing conflict markers:

```bash
npx fix-conflict list
```

Auto-resolve non-code files by choosing current branch:

```bash
npx fix-conflict resolve-all --strategy ours
```

---

CLI Options

- `--strategy <name>`: Automated batch resolution strategy: ours, theirs, both.
- `--syntax-check`: Validate code syntax using language parser after resolving.
- `--dry-run`: Preview resolution outcomes without modifying files on disk.
- `--backup`: Save `.bak` copies of files prior to stripping conflict markers.

---

Author

Dhani078
