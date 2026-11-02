ARCHITECTURE: fix-conflict

1. Architectural Pipeline

```
+-------------------------------------------------------------+
|                      CONFLICT DETECTOR                      |
|   - Reads target file or recursively scans repository       |
|   - Matches regex pattern for <<<<<<<, =======, >>>>>>>     |
+------------------------------+------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|                     BLOCK PARSER & AST                      |
|   - Extracts line ranges and reference identifiers          |
|   - Separates ours chunk and theirs chunk                   |
+------------------------------+------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|                     STRATEGY RESOLVER                       |
|   - Applies selected resolution (ours, theirs, union)       |
|   - Strips markers and reconstitutes file string            |
+------------------------------+------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|                   SYNTAX VALIDATOR & SAVER                  |
|   - Creates file.conflict-backup                            |
|   - Runs syntax check (JSON.parse / Node syntax check)      |
|   - Writes resolved file to filesystem                      |
+-------------------------------------------------------------+
```

2. Standard Library Mapping
- Filesystem: node:fs readFileSync, writeFileSync, readdirSync.
- Path Resolution: node:path resolve, join.
- Process: node:process cwd, exit.

3. Performance Guarantees
- Sub-20ms resolution time on standard source files.
- Zero npm package dependencies.
