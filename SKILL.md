---
name: fix-conflict
description: Interactive terminal merge conflict resolver with language syntax validation. Use when a Git merge, rebase, or cherry-pick results in conflict markers and requires step-by-step resolution.
version: 1.0.0
author: Dhani078
---

Fix Conflict Skill

Use when assisting developers during a stalled Git merge, rebase, or pull with unresolved conflicts.

Instructions

1. Identify conflicting files:
   ```bash
   npx fix-conflict list
   ```

2. Inspect conflict regions:
   Review the incoming vs current changes to determine business logic intent.

3. Resolve conflict cleanly:
   - Interactive terminal: run `npx fix-conflict`
   - Automated rule: `npx fix-conflict --strategy ours` or `--strategy theirs`

4. Verify syntax and commit:
   - Confirm that all `<<<<<<<`, `=======`, and `>>>>>>>` markers are eliminated.
   - Run project test runner to ensure merged code compiles cleanly.
   - Stage resolved files: `git add <file>`.
