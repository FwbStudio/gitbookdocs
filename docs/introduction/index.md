---
title: Introduction
description: Understand what fs_bridge abstracts and how to approach the bridge API.
---

# Introduction

`fs_bridge` is a FiveM framework bridge that gives your resources one cleaner public API across `ESX`, `QBCore`, and `Qbox`.

Instead of wiring every script directly to framework-specific exports and resource-specific integrations, the bridge keeps that compatibility layer in one place so your own Lua code can stay smaller and easier to maintain.

## What The Bridge Solves

The bridge is designed to normalize common gameplay and framework concerns such as:

- player state and job reads
- callbacks between client and server
- vehicle helpers like keys, fuel, and runtime entities
- notification and text UI routing
- clothing, target, and inventory compatibility
- cache helpers for repeated reads

```lua
local FWB = exports['fs_bridge']:GetObject()

if FWB.Player.IsLoaded() then
    print(FWB.Player.Name())
end
```

::: info Current Public Focus
The current public docs and compatibility references focus on `ESX`, `QBCore`, and `Qbox` setups with `oxmysql` and common FiveM utility resources.
:::

## Recommended Reading Path

1. [Installation](/installation/) for setup order, requirements, and verification.
2. [Bridge Functions](/bridge-functions/) for the main public helper surface.
3. [Callbacks](/callbacks/), [Vehicles](/vehicles/), and [Player](/player/) for the largest API groups.
4. [Integrations](/integrations/) when you need support-matrix guidance.

## Use The Public API, Not Internals

Bridge docs intentionally focus on the stable public surface. For production scripts, prefer:

- `exports['fs_bridge']:GetObject()`
- direct public exports
- `@fs_bridge/import.lua`

That keeps your code aligned with the documented API instead of internal implementation details.
