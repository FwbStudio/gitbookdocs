---
title: Bridge Functions
description: The main public helper surface for fs_bridge.
---

# Bridge Functions

This section documents the public Bridge helper surface that your own resources call most often.

## Access The API

You can work with the bridge in three common ways:

- `exports['fs_bridge']:GetObject()` for the full namespaced object
- direct exports when you only need a small number of helpers
- `@fs_bridge/import.lua` when you want `FWB` and `Cache` available directly

```lua
shared_script '@fs_bridge/import.lua'

if FWB.Player.IsLoaded() then
    print(FWB.Player.Name())
end
```

## Main Function Groups

| Group | What it covers |
| --- | --- |
| [Access Patterns](/bridge-functions/access-patterns) | `GetObject()`, direct exports, and `import.lua` |
| [Cache](/bridge-functions/cache) | Repeated reads, memoized values, and cache listeners |
| [Blip](/bridge-functions/blip) | Static and moving runtime blips |
| [Entity](/bridge-functions/entity) | Nearby and closest entity helpers |
| [Ped](/bridge-functions/ped) | Runtime ped helpers |
| [Clothing](/bridge-functions/clothing/) | Clothing resource detection and player clothing helpers |

## API Design Notes

The bridge is organized to keep framework and resource compatibility behind a stable public layer.

::: tip For Production Scripts
If your file makes several bridge calls, prefer `GetObject()` or `import.lua`. If you only need one helper, a direct export is usually the cleanest option.
:::
