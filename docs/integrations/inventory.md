---
title: Inventory
description: Supported inventory resources and public bridge expectations around item and stash helpers.
---

# Inventory

Bridge includes public compatibility for several inventory resources.

| Resource | Status |
| --- | --- |
| `ox_inventory` | Supported |
| `ak47_inventory` | Supported |
| `qs-inventory` | Supported |
| `qb-inventory` | Supported |
| `lj-Inventory` | Supported |
| `ps-inventory` | Supported |
| `pappu-inventorynp` | Supported |
| `codem-inventory` | Supported |

## Public Guidance

- keep inventory selectors on auto-detect
- start the inventory before Bridge
- use manual overrides for unsupported inventory flows

::: warning Ordering Still Matters
If Bridge starts before your inventory, item lookups can fail even when the items are present.
:::
