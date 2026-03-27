---
title: Vehicles
description: Public vehicle helpers for lookups, runtime entities, keys, fuel, and ownership flows.
---

# Vehicles

The Vehicle API combines nearby lookups, fuel helpers, key integrations, generated plates, and tracked runtime vehicle entries.

## Sections

| Page | Purpose |
| --- | --- |
| [Client](/vehicles/client) | Nearby lookups, keys, fuel, labels, props, and runtime vehicles |
| [Server](/vehicles/server) | Server-side keys, runtime vehicles, and ownership helpers |

```lua
local plate = FWB.Vehicle.GeneratePlate()
local vehicle = FWB.Vehicle.GetByPlate(plate)
```

::: tip Runtime Helpers
Use the runtime `FWB.Vehicle` helpers when you want Bridge to keep tracking and updating vehicles after creation.
:::
