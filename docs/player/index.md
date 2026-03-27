---
title: Player
description: Public player, job, status, and request helpers for client and server code.
---

# Player

The Player API is one of the largest Bridge surfaces. It covers loaded-state checks, player data, job helpers, statuses, and client request helpers.

## Sections

| Page | Purpose |
| --- | --- |
| [Client](/player/client) | Local player state, job data, statuses, and request helpers |
| [Server](/player/server) | Server-side player objects, money, permissions, and job helpers |

```lua
if FWB.Player.IsLoaded() then
    print(FWB.Player.Job.Name())
end
```

## Related Docs

- [Vehicles](/vehicles/)
- [Callbacks](/callbacks/)
- [Integrations: Jobs](/integrations/jobs)
