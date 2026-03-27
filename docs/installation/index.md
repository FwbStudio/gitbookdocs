---
title: Installation
description: Install fs_bridge with the right start order, dependencies, and verification steps.
---

# Installation

This guide covers the recommended public installation flow for `fs_bridge` on a FiveM server.

## Requirements

Before Bridge starts, make sure your core stack is already working:

| Requirement | Notes |
| --- | --- |
| `oxmysql` | Required database library |
| `es_extended`, `qb-core`, or `qbx_core` | One supported framework must already be running |
| `fs_bridge` | The bridge resource itself |

## Recommended Resource Layout

Keep Bridge and your related FWB resources inside the same `[fs]` folder.

```text
resources/
`-- [fs]/
    |-- fs_bridge
    |-- your_fs_script_1
    |-- your_fs_script_2
    `-- your_fs_script_3
```

This keeps the load order easier to reason about and makes support issues much easier to debug.

## Start Order Rules

Bridge should start after the framework and after the resources it needs to detect.

```ini
ensure [framework]
ensure [standalone]
ensure [fs]
ensure fs_bridge
```

::: warning Keep `fs_bridge` last
If Bridge starts too early, it may miss clothing, inventory, notification, or framework integrations and your exports can fail even though the resources are installed.
:::

## Selector Guidance

For supported integrations, leave `selected_key = 1` unless support specifically tells you to force a manual resource.

```lua
selected_key = 1
```

That keeps public installs aligned with the bridge auto-detect flow.

## Verify The Installation

After setup:

1. Restart the full server.
2. Check Bridge output in `F8`.
3. Check Bridge output in the server console.
4. Confirm the expected framework and integrations were detected.

Useful verification commands:

| Command | Where to run it | Purpose |
| --- | --- | --- |
| `/fs_bridge_c` | In-game chat | Inspect client-side detection |
| `fs_bridge_s` | Server console | Inspect server-side detection |

## Continue With

- [Configuration](/installation/configuration/)
- [Common Errors](/installation/common-errors)
- [Integrations](/integrations/)

