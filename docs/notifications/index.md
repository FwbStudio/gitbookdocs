---
title: Notifications
description: Public notify and text UI helpers, plus integration-aware UI routing.
---

# Notifications

Bridge can route notifications and text UI calls through the selected compatible resource while keeping your own Lua usage stable.

## Pages

| Page | Purpose |
| --- | --- |
| [Client Notify](/notifications/client) | Client-side `FWB.Notify` usage |
| [Server Notify](/notifications/server) | Forward notifications from the server |
| [Text UI](/notifications/text-ui) | Show and hide text UI through the selected resource |

```lua
FWB.Notify({
    title = 'Garage',
    description = 'Vehicle stored successfully',
    type = 'success'
})
```

## Integration Reference

Need support-matrix details instead of API usage? See [Integrations: Notifications](/integrations/notifications).
