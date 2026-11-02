INTEGRATION GUIDE: fix-conflict

1. Pre-Commit Hook Marker Gate
Block accidental commits containing residual conflict markers:

```bash
npx fix-conflict --check
```

2. GitHub Actions CI Check (.github/workflows/conflict-check.yml)

```yaml
name: Residual Conflict Marker Gate
on: [push, pull_request]

jobs:
  check-conflicts:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Verify no conflict markers remain
        run: npx fix-conflict --check
```

3. Git Merge Driver Integration
Configure fix-conflict in your .gitattributes and git config:

```bash
git config --global merge.fix-conflict.name "fix-conflict automated resolver"
```
