---
title: Zones
description: Client spatial helpers for zones and points from the public bridge surface.
---

# Zones

The bridge exposes client-side spatial helpers for common gameplay interactions.

## Pages

| Page | Purpose |
| --- | --- |
| [Client API](/zones/client) | Zone helpers from `import.lua` |
| [Points](/zones/points) | Point-based enter, exit, and nearby logic |

```lua
local point = FWB.Points.new({
    coords = vec3(441.2, -981.9, 30.7),
    distance = 2.0
})
```

::: tip Spatial Helpers
Use points for light-weight enter and exit logic. Use the broader zone helpers when you need richer area handling.
:::
