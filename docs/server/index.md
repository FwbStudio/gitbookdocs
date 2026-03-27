---
title: Server
description: A curated map of the server-side public bridge surface.
---

# Server

This page is a server-side map of the documented Bridge API.

## Server-Facing API Areas

- [Callbacks: Server](/callbacks/server)
- [Player: Server](/player/server)
- [Vehicles: Server](/vehicles/server)
- [Notifications: Server](/notifications/server)
- [Configuration: Server Config](/installation/configuration/server-config)
- [Manual Compatibility: Server Overrides](/guides/manual-compatibility/server-overrides)
- [Integrations: Database](/integrations/database)

```lua
local FWB = exports['fs_bridge']:GetObject()

FWB.CB.Register('bridge:serverReady', function(source)
    return true
end)
```

## Server Guidance

Keep authoritative money, permissions, society, and persistence logic on the server. Use callbacks and documented exports instead of depending on internal bridge event flow.
