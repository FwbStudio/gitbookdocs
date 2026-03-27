---
title: Configuration
description: Understand the editable fs_bridge config surfaces before changing selectors or runtime behavior.
---

# Configuration

Bridge exposes three main config files for public setups.

| File | Purpose |
| --- | --- |
| `config/sh_config.lua` | Shared bridge configuration and integration selectors |
| `config/cl_config.lua` | Client-side zone and runtime settings |
| `config/sv_config.lua` | Server-side configuration, database, and plate generation settings |

## Configuration Philosophy

For most installs, the safest workflow is:

- keep supported selectors on `1`
- change only the values you understand
- prefer overrides when a resource is unsupported
- avoid editing locked internals for normal public setups

```lua
Inventory = {
    selected_key = 1,
    supported_keys = {
        { key = 1, resource = 'auto' }
    }
}
```

::: warning Change Selectors Carefully
Manual selector changes are usually only needed when support asks for them. Public installs should rely on auto-detect whenever possible.
:::

## Configuration Pages

- [Shared Config](/installation/configuration/shared-config)
- [Client Config](/installation/configuration/client-config)
- [Server Config](/installation/configuration/server-config)
