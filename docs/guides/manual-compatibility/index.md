---
title: Manual Compatibility
description: Override-based compatibility for unsupported or custom resource setups.
---

# Manual Compatibility

Use manual compatibility when your resource is unsupported or when the public auto-detect path is not enough for your server.

## Override Files

```lua
fs_bridge/unlocked/client.lua
fs_bridge/unlocked/server.lua
```

## Pages

- [Client Overrides](/guides/manual-compatibility/client-overrides)
- [Server Overrides](/guides/manual-compatibility/server-overrides)

::: warning Keep Custom Code In `unlocked`
For normal installs, do not patch locked internals. Put custom compatibility logic into the documented override files only.
:::
