---
title: Client
description: A curated map of the client-side public bridge surface.
---

# Client

This page is a client-side map of the documented Bridge API.

## Client-Facing API Areas

- [Callbacks: Client](/callbacks/client)
- [Player: Client](/player/client)
- [Vehicles: Client](/vehicles/client)
- [Notifications: Client](/notifications/client)
- [Notifications: Text UI](/notifications/text-ui)
- [Zones: Client](/zones/client)
- [Zones: Points](/zones/points)
- [Bridge Functions](/bridge-functions/)
- [Utilities](/utilities/)

```lua
local FWB = exports['fs_bridge']:GetObject()
FWB.Notify({
    title = 'Bridge',
    description = 'Client API loaded',
    type = 'success'
})
```

## Client Guidance

Client code is where request helpers, UI routing, spatial helpers, and most local player APIs live. Keep UI and entity logic on the client, and use server callbacks when you need authoritative state.
