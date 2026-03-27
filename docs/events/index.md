---
title: Events
description: Guidance on public event usage and why the bridge docs focus on exports and callbacks.
---

# Events

The public Bridge docs intentionally emphasize exports, namespaced functions, and callbacks over undocumented internal runtime events.

## Why This Section Is Small Today

Internal bridge orchestration can change more often than the public API. For production scripts, prefer:

- documented exports
- `FWB` helpers from `GetObject()` or `import.lua`
- public callback helpers

::: warning Public Event Surface
If an event is not documented here or on a related API page, do not treat it as a stable public contract for long-term scripts.
:::

As more stable public event hooks are promoted, this section can expand without forcing the rest of the docs structure to change.
