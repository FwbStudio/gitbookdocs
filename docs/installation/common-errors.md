---
title: Common Errors
description: Frequent fs_bridge setup mistakes and what they usually mean.
---

# Common Errors

Below are the most common Bridge-related issues in public installs.

## Bridge Keeps Printing "waiting to start load properly"

This usually means Bridge is waiting for a framework or integration that does not match your actual server setup.

Check that:

- the correct framework is installed for your server
- your Bridge setup matches `ESX`, `QBCore`, or `Qbox`
- the framework resource is already running before Bridge starts

## Items Exist, But Bridge Says They Were Not Found

This usually points to a bad start order or wrong inventory detection.

Check that:

- the supported inventory starts before `fs_bridge`
- your `[fs]` group is near the bottom of `server.cfg`
- `fs_bridge` is ensured last
- you restarted the full server after changing the order

## Clothing Or Skin Exports Cannot Be Found

If the console says an export could not be found in a clothing resource, Bridge likely started before the clothing system was ready.

Check that:

- your clothing resource starts before `fs_bridge`
- `fs_bridge` is ensured last
- you restarted the full server instead of only refreshing one resource

## "attempt to index a nil value"

If this happens right after uploading or starting an escrowed resource, it often points to an upload problem rather than a bridge API problem.

Recommended fix:

1. Re-upload the resource with a transfer tool that preserves escrowed files correctly.
2. Avoid tools that damage escrowed resource contents.
3. Restart the server after uploading again.

::: tip Debug Faster
When in doubt, verify install order first. Most public Bridge issues come from resource order, not from the API calls themselves.
:::
