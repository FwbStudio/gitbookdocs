---
title: Callbacks
description: Await values safely between client and server through the public bridge callback layer.
---

# Callbacks

Bridge callbacks let your resources exchange return values between client and server without wiring your own callback framework.

## Callback Surface

| Page | Purpose |
| --- | --- |
| [Client](/callbacks/client) | Await server callbacks and register client callbacks |
| [Server](/callbacks/server) | Await client callbacks and register server callbacks |

```lua
local result = FWB.CB.Await('garage:getLabel', 'ABC123')
print(result)
```

::: info Use Named Contracts
Treat callback names like API contracts. Keep names stable and arguments explicit so your resources remain easy to maintain.
:::
