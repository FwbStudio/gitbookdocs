---
title: Exports
description: How to think about the documented direct export surface in fs_bridge.
---

# Exports

Bridge exposes many public helpers as direct exports for cases where you do not want the full `FWB` object.

## Common Patterns

```lua
local FWB = exports['fs_bridge']:GetObject()
local loaded = exports['fs_bridge']:IsPlayerLoaded()
local result = exports['fs_bridge']:AwaitCallback('garage:getLabel', 'ABC123')
```

## When To Use Direct Exports

Use direct exports when:

- you only need one or two helpers
- you do not want to load `import.lua`
- you want a very small integration surface in a single file

Use [Bridge Functions: Access Patterns](/bridge-functions/access-patterns) for the complete public entry-point overview.
