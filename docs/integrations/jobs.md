---
title: Jobs
description: Job-related compatibility, abstractions, and where job APIs are documented.
---

# Jobs

Bridge job handling is exposed mainly through the Player API instead of a separate large Job namespace.

## Where To Look

- [Player: Client](/player/client) for local job reads and boss checks
- [Player: Server](/player/server) for server-side job and player object helpers
- [Manual Compatibility](/guides/manual-compatibility/) if your setup needs custom boss, banking, or dispatch behavior

## Public Expectations

The current public bridge docs focus on `ESX`, `QBCore`, and `Qbox` job flows.

```lua
local job = FWB.Player.Job.Data()
if job then
    print(job.name, job.grade.level)
end
```
