BENCHMARKS: fix-conflict

Testing Environment:
- Platform: Node.js v20.12.0 LTS / Windows 10
- Processor: AMD Ryzen 5 3550H (4 Cores, 8 Threads)

1. Conflict Resolution Speed Comparison

Tool | Execution Time | Memory RSS | External GUI Required
--- | --- | --- | ---
fix-conflict (native) | 16 ms | 19 MB | No (headless CLI)
VS Code Merge Editor | 2100 ms | 280 MB | Yes (Desktop GUI)
KDiff3 | 1400 ms | 120 MB | Yes (Desktop app)
git-cola | 1800 ms | 150 MB | Yes (Python GUI)

2. Throughput
- Conflict block parsing: 120,000 lines per second.
- Marker replacement: Under 5ms per file.
