EXAMPLES: fix-conflict

Scenario 1: Scanning for Conflicts in Repository
```bash
$ npx fix-conflict
[fix-conflict] Found 1 file with active merge conflicts:
- src/config.ts (1 conflict block at lines 12-24)
```

Scenario 2: Accepting Local Changes (Ours)
```bash
$ npx fix-conflict --ours src/config.ts
[fix-conflict] Saved backup: src/config.ts.conflict-backup
[fix-conflict] Resolved 1 conflict using strategy: ours.
[fix-conflict] Syntax check: OK.
```

Scenario 3: Accepting Incoming Changes (Theirs)
```bash
$ npx fix-conflict --theirs src/config.ts
[fix-conflict] Resolved 1 conflict using strategy: theirs.
```

Scenario 4: CI Residual Marker Detection
```bash
$ npx fix-conflict --check
[fix-conflict] FAILED: Residual conflict marker found in src/api.ts:45.
Exiting with code 1.
```

Scenario 5: Structured JSON Report
```bash
$ npx fix-conflict --json
{
  "totalFiles": 1,
  "conflictsCount": 1,
  "files": [
    {
      "path": "src/config.ts",
      "blocks": [
        {
          "startLine": 12,
          "endLine": 24,
          "oursRef": "HEAD",
          "theirsRef": "feat/api-upgrade"
        }
      ]
    }
  ]
}
```
