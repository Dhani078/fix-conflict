FAQ: fix-conflict

Q1: Does fix-conflict delete my original file?
A: Never. When modifying any file, fix-conflict creates a file.conflict-backup copy containing the exact original unresolved markers.

Q2: Can fix-conflict resolve conflicts across an entire repository at once?
A: Yes. Running npx fix-conflict --ours or --theirs without specifying a file argument scans and resolves all conflicting files in the repository.

Q3: What happens if a resolved file has syntax errors?
A: fix-conflict runs a syntax verification check on JSON and JavaScript files after resolution. If syntax errors are found, it alerts you immediately.

Q4: Does fix-conflict run git add automatically?
A: No. fix-conflict safely leaves staging to you so you can review changes with git diff before staging.
