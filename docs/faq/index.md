---
title: FAQ
description: Common public setup and usage questions for fs_bridge.
---

# FAQ

## Do I Need To Edit Locked Bridge Files?

No. A normal public setup should work through:

- `config/sh_config.lua`
- `unlocked/client.lua`
- `unlocked/server.lua`

## Should I Keep Supported Selectors On `1`?

Yes. `1` is the recommended public default because it lets Bridge auto-detect supported resources.

## When Do I Need An Override?

Use an override when:

- your resource is unsupported
- auto-detect cannot resolve your setup
- you need custom integration behavior

## Where Do I Paste Override Snippets?

- Client overrides go in `fs_bridge/unlocked/client.lua`
- Server overrides go in `fs_bridge/unlocked/server.lua`

## How Do I Check What Bridge Detected?

Restart the server, inspect Bridge output in `F8` and the server console, then use:

- `/fs_bridge_c`
- `fs_bridge_s`

## What Frameworks Are Covered In The Public Docs?

The current public documentation focuses on `ESX`, `QBCore`, and `Qbox`.
