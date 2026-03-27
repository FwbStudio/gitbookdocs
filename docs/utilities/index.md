---
title: Utilities
description: Small shared helpers that support higher-level bridge integrations and scripts.
---

# Utilities

Utilities are the smaller helper groups that support the main bridge workflows without living inside the Player, Vehicle, or Callback sections.

## Utility Pages

| Page | Purpose |
| --- | --- |
| [Math](/utilities/math) | Shared math helpers |
| [String](/utilities/string) | Shared string helpers |
| [Table](/utilities/table) | Shared table helpers |
| [Set Clipboard](/utilities/set-clipboard) | Client clipboard helper |
| [Version](/utilities/version) | Version and update helpers |

```lua
local copied = exports['fs_bridge']:SetClipboard('plate:ABC123')
print(copied)
```
