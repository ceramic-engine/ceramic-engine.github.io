---
layout: api-docs
category: api-docs
subCategory: doc
menu: Unity
title: Application
target: Unity
permalink: api-docs/unity/unityengine/Application/
---

# Application

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/unity/runtime/src/unityengine/Application.hx">View source</a></div>

<div class="type-hierarchy"><strong>unityengine.Application</strong> (extern class)</div>

Unity Application class extern binding for Ceramic.
Provides access to Unity application runtime data and settings.

This is a minimal binding that only includes the properties
needed by the Ceramic Unity backend.

## Static Members

<div class="signature field-var has-description has-plugin" id="absoluteURL"><div class="plugin-name">unity</div><code><span class="field-name">absoluteURL</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#absoluteURL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The absolute URL to the web player data folder.
For web builds, this returns the URL of the folder containing the build data.
Read-only property.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="targetFrameRate"><div class="plugin-name">unity</div><code><span class="field-name">targetFrameRate</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#targetFrameRate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Instructs the game to try to render at a specific frame rate.
Set to -1 to render as fast as possible (default).
Set to a positive value like 60 or 30 to cap the frame rate.

Note: The actual frame rate may be lower if the hardware
cannot achieve the target rate.

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |

