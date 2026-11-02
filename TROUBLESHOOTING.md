TROUBLESHOOTING: fix-conflict

Diagnostic Runbook for Common Failures

Problem 1: Error: Malformed conflict marker sequence
- Symptom: CLI reports unexpected marker order.
- Cause: Conflict markers were manually edited or nested.
- Solution: Restore from Git using git checkout --conflict=merge <file> to regenerate clean markers.

Problem 2: Residual conflict markers committed to Git
- Symptom: Production build fails with syntax error on <<<<<<< HEAD.
- Cause: Commit was made without running conflict validation.
- Solution: Add npx fix-conflict --check to your pre-commit hook to block commits with residual markers.

Problem 3: Backup files clutter working directory
- Symptom: Multiple .conflict-backup files left in project.
- Cause: Leftover files after successful merge verification.
- Solution: Run git clean -f or delete .conflict-backup files once merge is verified and committed.
