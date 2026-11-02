SPECIFICATION: fix-conflict

1. Scope and Technical Purpose
fix-conflict parses standard Git conflict markers in UTF-8 source files, extracts isolated conflicting blocks, and replaces markers with resolved code based on deterministic resolution strategies.

2. Marker Parsing Grammar
A conflict block is defined by the following pattern:
- Start Marker: <<<<<<< <HEAD-REF>
- Local Content: Chunk of text representing local branch edits
- Divider Marker: =======
- Incoming Content: Chunk of text representing incoming branch edits
- End Marker: >>>>>>> <INCOMING-REF>

3. Resolution Strategies
- STRATEGY-OURS: Discards divider, end marker, and incoming content; preserves local content.
- STRATEGY-THEIRS: Discards start marker, local content, and divider; preserves incoming content.
- STRATEGY-UNION: Discards markers; concatenates local content followed by incoming content.

4. Exit Codes
- 0: Successful resolution or no conflicts found.
- 1: Conflicts present under --check mode or unresolved markers remain.
- 2: File reading or parsing error.
