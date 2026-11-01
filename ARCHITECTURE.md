ARCHITECTURE: fix-conflict

Data Flow Diagram

```
+-----------------------------------------------------------+
|                        CLI Entrypoint                     |
|                    (bin/fix-conflict.js)                  |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|                     Conflict Scanner                      |
|   - Scans git status --porcelain for UU / conflict flags  |
|   - Streams file lines looking for <<<<<<< markers        |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|                     Block Segmenter                       |
|   - Parses: Ours block, Separator, Theirs block           |
|   - Preserves surrounding indentation and whitespace      |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|                   Resolution Controller                   |
|   - Prompts user (Ours / Theirs / Both / Edit)            |
|   - Assembles unified resolved buffer                     |
+-----------------------------+-----------------------------+
                              |
                              v
+-----------------------------------------------------------+
|                    Syntax Verification                    |
|   - Invokes language-specific syntax compiler             |
|   - Rollback to .bak if syntax verification fails         |
+-----------------------------------------------------------+
```

Component Responsibilities

- bin/fix-conflict.js: Main interactive terminal loop.
- src/scanner.js: Repository status and conflict detector.
- src/parser.js: Conflict marker block parser.
- src/resolver.js: Block merger and file rewriter.
- src/validator.js: In-memory syntax compiler.
