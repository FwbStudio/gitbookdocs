---
layout: home

hero:
  name: FWB Bridge
  text: FiveM framework bridge documentation
  tagline: Production-ready docs for a scalable Lua-first bridge across ESX, QBCore, and Qbox.
  actions:
    - theme: brand
      text: Start Installation
      link: /installation/
    - theme: alt
      text: Browse API
      link: /bridge-functions/
    - theme: alt
      text: See Examples
      link: /examples/

features:
  - title: Lua-first API reference
    details: Every major page is optimized for actual FiveM usage with example Lua snippets, return values, and notes that are easy to scan in the editor.
  - title: Long-term scalable structure
    details: Core sections are split into focused groups like Bridge Functions, Callbacks, Vehicles, Player, Notifications, Zones, and future-facing integration references.
  - title: GitHub Pages ready
    details: The project includes a production VitePress setup, dynamic Pages base handling, and a deployment workflow for main-branch publishing.
---

## Why This Docs Site Exists

`fs_bridge` is designed to hide framework and integration differences behind one cleaner API surface. That only works well when the docs are easy to trust, easy to search, and easy to expand as the bridge grows.

This site rebuilds the current GitBook content into a VitePress structure that works better for long-term developer documentation:

- focused landing pages instead of one giant index
- API groups split by responsibility
- client and server concerns separated clearly
- future-ready sections for integrations and expansion areas

::: tip Recommended Reading Order
If you are new to the bridge, start with [Introduction](/introduction/), then [Installation](/installation/), then [Bridge Functions](/bridge-functions/).
:::

## Quick Links

- [Introduction](/introduction/)
- [Installation](/installation/)
- [Bridge Functions](/bridge-functions/)
- [Callbacks](/callbacks/)
- [Vehicles](/vehicles/)
- [Player](/player/)
- [Integrations](/integrations/)
- [Examples](/examples/)
