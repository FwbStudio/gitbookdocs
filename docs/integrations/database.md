---
title: Database
description: Database expectations for public fs_bridge installs.
---

# Database

The current public install flow expects `oxmysql`.

## Required Database Library

| Library | Status |
| --- | --- |
| `oxmysql` | Required for documented public setup |

Bridge server configuration and many server-side integrations assume that `oxmysql` is already working before Bridge starts.

```ini
ensure oxmysql
ensure [framework]
ensure [fs]
ensure fs_bridge
```

::: info Where Database Settings Live
Database-related bridge settings belong in [Server Config](/installation/configuration/server-config).
:::

