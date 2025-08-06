---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: Clay
target: Clay (Native)
permalink: api-docs/clay-native/clay/Clay/
---

# Clay

<div class="view-source"><a href="https://github.com/ceramic-engine/clay/blob/master/src/clay/Clay.hx">View source</a></div>

<div class="type-hierarchy"><strong>clay.Clay</strong> (Class)</div>

Clay app

## Static Members

<div class="signature field-var has-description" id="app"><code><span class="field-name">app</span><span class="operator">:</span> <a href="#" class="type-link">Clay</a></code><a class="header-anchor" href="#app"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get Clay instance from anywhere with `Clay.app`

## Instance Members

<div class="signature field-var has-description" id="config"><code><span class="field-name">config</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/Config/" class="type-link">Config</a></code><a class="header-anchor" href="#config"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clay config

<hr class="field-separator" />

<div class="signature field-var has-description" id="events"><code><span class="field-name">events</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/Events/" class="type-link">Events</a></code><a class="header-anchor" href="#events"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clay events handler

<hr class="field-separator" />

<div class="signature field-var has-description" id="io"><code><span class="field-name">io</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/IO/" class="type-link">IO</a></code><a class="header-anchor" href="#io"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clay io
(implementation varies depending on the target)

<hr class="field-separator" />

<div class="signature field-var has-description" id="assets"><code><span class="field-name">assets</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/Assets/" class="type-link">Assets</a></code><a class="header-anchor" href="#assets"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clay assets

<hr class="field-separator" />

<div class="signature field-var has-description" id="audio"><code><span class="field-name">audio</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/Audio/" class="type-link">Audio</a></code><a class="header-anchor" href="#audio"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clay audio

<hr class="field-separator" />

<div class="signature field-var has-description" id="input"><code><span class="field-name">input</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/Input/" class="type-link">Input</a></code><a class="header-anchor" href="#input"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clay input

<hr class="field-separator" />

<div class="signature field-var has-description" id="runtime"><code><span class="field-name">runtime</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/Runtime/" class="type-link">Runtime</a></code><a class="header-anchor" href="#runtime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clay runtime
(implementation varies depending on the target)

<hr class="field-separator" />

<div class="signature field-var has-description" id="shuttingDown"><code><span class="field-name">shuttingDown</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#shuttingDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

`true` if shut down has begun

<hr class="field-separator" />

<div class="signature field-var has-description" id="hasShutdown"><code><span class="field-name">hasShutdown</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasShutdown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

`true` if shut down has completed

<hr class="field-separator" />

<div class="signature field-var has-description" id="timestamp"><code><span class="field-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#timestamp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The last known timestamp in seconds, or `-1` if not defined yet

<hr class="field-separator" />

<div class="signature field-var has-description" id="appId"><code><span class="field-name">appId</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#appId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

App identifier

<hr class="field-separator" />

<div class="signature field-var has-description" id="screenWidth"><code><span class="field-name">screenWidth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#screenWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Main window screen width

<hr class="field-separator" />

<div class="signature field-var has-description" id="screenHeight"><code><span class="field-name">screenHeight</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#screenHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Main window screen height

<hr class="field-separator" />

<div class="signature field-var has-description" id="screenDensity"><code><span class="field-name">screenDensity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#screenDensity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Main window screen density (device pixel ratio)

<hr class="field-separator" />

<div class="signature field-var has-description" id="backgroundQueue"><code><span class="field-name">backgroundQueue</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/BackgroundQueue/" class="type-link">BackgroundQueue</a></code><a class="header-anchor" href="#backgroundQueue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shared background queue

<hr class="field-separator" />

<div class="signature field-var no-description" id="immediateShutdown"><code><span class="field-name">immediateShutdown</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#immediateShutdown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="freeze"><code><span class="field-name">freeze</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#freeze"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether or not we are frozen, ignoring events i.e backgrounded/paused

<hr class="field-separator" />

<div class="signature field-var has-description" id="ready"><code><span class="field-name">ready</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#ready"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether or not the ready state has been reached

<hr class="field-separator" />

<div class="signature field-method no-description" id="shutdown"><code><span class="field-name">shutdown</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#shutdown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var has-description" id="nextTick"><code><span class="field-name">nextTick</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#nextTick"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Used for update loop and update rate

<hr class="field-separator" />

<div class="signature field-var no-description" id="windowInBackground"><code><span class="field-name">windowInBackground</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#windowInBackground"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="init"><code><span class="field-name">init</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#init"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="emitQuit"><code><span class="field-name">emitQuit</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitQuit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="shouldUpdate"><code><span class="field-name">shouldUpdate</span><span class="parenthesis">(</span><span class="arg-name">newTimestamp</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#shouldUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `newTimestamp` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="emitTick"><code><span class="field-name">emitTick</span><span class="parenthesis">(</span><span class="arg-name">newTimestamp</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTick"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `newTimestamp` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="emitRender"><code><span class="field-name">emitRender</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitRender"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="emitWindowEvent"><code><span class="field-name">emitWindowEvent</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/WindowEventType/" class="type-link">WindowEventType</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">windowId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitWindowEvent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `type` | [WindowEventType](/api-docs/clay-native/clay/WindowEventType/) |
| `timestamp` | [Float](/api-docs/clay-native/Float/) |
| `windowId` | [Int](/api-docs/clay-native/Int/) |
| `x` | [Int](/api-docs/clay-native/Int/) |
| `y` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="emitAppEvent"><code><span class="field-name">emitAppEvent</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/AppEventType/" class="type-link">AppEventType</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitAppEvent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `type` | [AppEventType](/api-docs/clay-native/clay/AppEventType/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="extractAppId"><code><span class="field-name">extractAppId</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#extractAppId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="defaultConfig"><code><span class="field-name">defaultConfig</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/Config/" class="type-link">Config</a></code><a class="header-anchor" href="#defaultConfig"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Config](/api-docs/clay-native/clay/Config/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="defaultWindowConfig"><code><span class="field-name">defaultWindowConfig</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/WindowConfig/" class="type-link">WindowConfig</a></code><a class="header-anchor" href="#defaultWindowConfig"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [WindowConfig](/api-docs/clay-native/clay/WindowConfig/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="defaultRenderConfig"><code><span class="field-name">defaultRenderConfig</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/RenderConfig/" class="type-link">RenderConfig</a></code><a class="header-anchor" href="#defaultRenderConfig"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [RenderConfig](/api-docs/clay-native/clay/RenderConfig/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="defaultRuntimeConfig"><code><span class="field-name">defaultRuntimeConfig</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/RuntimeConfig/" class="type-link">RuntimeConfig</a></code><a class="header-anchor" href="#defaultRuntimeConfig"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [RuntimeConfig](/api-docs/clay-native/clay/RuntimeConfig/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="copyWindowConfig"><code><span class="field-name">copyWindowConfig</span><span class="parenthesis">(</span><span class="arg-name">config</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/WindowConfig/" class="type-link">WindowConfig</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/WindowConfig/" class="type-link">WindowConfig</a></code><a class="header-anchor" href="#copyWindowConfig"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `config` | [WindowConfig](/api-docs/clay-native/clay/WindowConfig/) |

| Returns |
|---------|
| [WindowConfig](/api-docs/clay-native/clay/WindowConfig/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="copyRenderConfig"><code><span class="field-name">copyRenderConfig</span><span class="parenthesis">(</span><span class="arg-name">config</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/RenderConfig/" class="type-link">RenderConfig</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/RenderConfig/" class="type-link">RenderConfig</a></code><a class="header-anchor" href="#copyRenderConfig"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `config` | [RenderConfig](/api-docs/clay-native/clay/RenderConfig/) |

| Returns |
|---------|
| [RenderConfig](/api-docs/clay-native/clay/RenderConfig/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="updateScreen"><code><span class="field-name">updateScreen</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateScreen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">configure</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="arg-name">events</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/Events/" class="type-link">Events</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new Clay app


| Name | Type | Description |
|------|------|-------------|
| `configure` | Function |  |
| `events` | [Events](/api-docs/clay-native/clay/Events/) | Events handler to get feedback from Clay |

