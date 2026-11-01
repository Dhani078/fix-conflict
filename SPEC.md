SPECIFICATION: fix-conflict

1. Scope and Objective

fix-conflict detects, parses, and resolves standard Git merge conflict markers across text files while enforcing syntax validation on resolved content.

2. Marker Parsing Specification

A valid conflict block conforms to:
- Start Marker: `<<<<<<< <ref>`
- Ours Section: Block lines
- Separator: `=======`
- Theirs Section: Block lines
- End Marker: `>>>>>>> <ref>`

3. Syntax Validation Capabilities

- JavaScript / TypeScript: Validates via Node.js native vm.compileFunction.
- JSON: Validates via native JSON.parse.
- Markdown / Plain Text: Validates elimination of orphaned markers.

4. Exit Codes

- 0: All conflicts successfully resolved with zero syntax errors.
- 1: Unresolved conflicts remain.
- 2: Resolved file failed post-resolution syntax check.
- 3: Not inside a Git repository.
