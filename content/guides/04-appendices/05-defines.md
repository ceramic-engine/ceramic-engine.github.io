---
layout: guides
category: guides
menu: Appendices
title: Ceramic Defines
permalink: guides/defines/
---
# Ceramic Defines

Ceramic apps can be fine-tuned using [defines](/guides/ceramic-yml-reference/#defines). Here is a list of supported defines and how they affect the build.

## `ceramic_web_minify`

When exporting for `web` (with `clay` backend), this will enable minification of the js output. Uses uglifyjs internally.

## `ceramic_use_openal`

When exporting to native targets (with `clay` backend), this will make ceramic use OpenAL for audio instead of Soloud. This is mostly a compatibility define as OpenAL used to be the default audio implementation for clay, but is now replaced by Soloud in more recent Ceramic versions.

## `ceramic_disable_background_sleep`

Ceramic has a mecanism of sleeping for very short amount of times at each frame if it is running in background. This is to prevent the app from eating all CPU resources and running at thousands of frames per second in that case. You can use this define to disable that behaviour.

## `ceramic_browser_clipboard`

Enable clipboard when using a Ceramic app from the browser. This may trigger a permission request, that is why it is disabled by default.

## `ceramic_debug_clipboard`

A define that will add more logs to the console to help debug clipboard.

## `ceramic_debug_draw`

A defines that will make Ceramic print detailed logs about what is rendered, every 10 seconds. The logs allow to know the number of draw calls and what is triggering additional draw calls, which can help optimize rendering of the app.

## `ceramic_sqlite`

When exporting to native targets (with `clay` backend), Ceramic can use `SQLite` instead of regular file system access to save data if this is defined. Could be useful to take advantage of additional concistency mecanisms provided by SQLite (ACID compliant etc...)

## `ceramic_no_multitexture`

By default, Ceramic's default shaders are optimized to enable multi-texture batching. This is a very useful optimization that you should keep enabled in most situations, but you can disable with this define, which could still be useful if you want to debug rendering.

## `ceramic_no_skip`

By default, Ceramic will skip Haxe compilation if no file have changed in project directory. However, you might want to disable this behaviour temporarily if you work on files that are not located within that project directory. This define will do that.

## `ceramic_debug_entity_allocs`

When defined, additional logs will be printed every 5 second to show how many entities are currently allocated. Can be useful to debug memory leaks related to Ceramic entities.

## `ceramic_debug_autorun`

When defined, additional logs will be printed to know when an `autorun` is invalidated and run again. Can be useful to track autorun invalidations in a Ceramic app that uses them.

## `ceramic_no_unity_catch_exit`

When exporting for `unity`, the default behaviour of the app is to stop executing update code when a critical error happens. This can be disabled with this define: even when failing, the code will be executed again at the next update loop iteration.

## `ceramic_no_clip`

Disable clipping entirely.

## `ceramic_no_mesh`

Disable mesh rendering.

## `ceramic_debug_unsafe`

Allow to debug unsafe access. Only useful if you want to debug `unsafeGet()` or `unsafeSet()` methods provided by `ceramic.Extensions`.