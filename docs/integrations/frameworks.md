---
title: Frameworks
description: Supported framework runtimes and the public install assumptions around them.
---

# Frameworks

Bridge currently documents and supports public usage with the following framework cores.

| Framework | Status | Resource |
| --- | --- | --- |
| `ESX` | Officially supported | `es_extended` |
| `QBCore` | Officially supported | `qb-core` |
| `Qbox` | Officially supported | `qbx_core` |

## Install Assumptions

- the framework starts before Bridge
- the framework resource name matches the expected public resource name
- Bridge selectors stay on auto-detect unless support asks for a manual value

```lua
framework = {
    ['ESX'] = { core_script = 'es_extended' },
    ['QBCore'] = { core_script = 'qb-core' }
}
```
