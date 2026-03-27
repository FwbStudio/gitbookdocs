---
title: Update Bridge
description: Safe update steps for replacing Bridge without losing your custom setup.
---

# Update Bridge

Use this guide when you want to replace Bridge safely without losing your custom overrides or current installation state.

## 1. Back Up The Current Resource

Before replacing anything, keep a full copy of your current `fs_bridge` resource.

## 2. Prefer A Fresh Download

Update with a clean new copy of Bridge instead of trying to merge files into an old install.

## 3. Restore Your Custom Files

If you use custom overrides or manual compatibility, move your existing `unlocked` folder back into the fresh Bridge copy after the update.

## 4. Verify The Runtime

After updating:

1. Restart the server.
2. Check Bridge output in `F8`.
3. Check Bridge output in the server console.
4. Confirm supported integrations still detect correctly.
5. Re-test any manual compatibility you maintain.
