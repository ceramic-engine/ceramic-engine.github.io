---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: App
target: Headless
permalink: api-docs/headless/ceramic/App/
---

# App

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/App.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/ceramic/Entity/">Entity</a> → <strong>ceramic.App</strong> (Class)</div>

`App` class is the root instance of any ceramic app.

App serves as the main entry point and lifecycle manager for Ceramic applications.
It handles initialization, update loops, rendering, and provides global access to
core systems and settings.

Key responsibilities:
- Application lifecycle management (ready, update, draw)
- Default asset loading and management
- Screen and audio system initialization
- Settings and persistent data management
- Error handling and crash reporting
- Background/foreground state transitions

The App instance is a singleton accessible via `app` static property or
through the `ceramic.Shortcuts.app` convenience reference.

<div class="see"><strong>See:</strong> <a href="/api-docs/headless/ceramic/Screen/">Screen</a>, <a href="/api-docs/headless/ceramic/Audio/">Audio</a>, <a href="/api-docs/headless/ceramic/Settings/">Settings</a>, <a href="/api-docs/headless/ceramic/Scene/">Scene</a></div>


## Static Members

<div class="signature field-var has-description" id="app"><code><span class="field-name">app</span><span class="operator">:</span> <a href="#" class="type-link">App</a></code><a class="header-anchor" href="#app"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shared `App` instance singleton.

## Instance Members

<div class="signature field-var has-description" id="inUpdate"><code><span class="field-name">inUpdate</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#inUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

`true` if the app is currently running its update phase.

<hr class="field-separator" />

<div class="signature field-var has-description" id="computedFps"><code><span class="field-name">computedFps</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#computedFps"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computed fps of the app. Read only.
Value is automatically computed from last second of frame updates.

<hr class="field-separator" />

<div class="signature field-var has-description" id="frame"><code><span class="field-name">frame</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#frame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current frame number

<hr class="field-separator" />

<div class="signature field-var has-description" id="delta"><code><span class="field-name">delta</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#delta"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current frame delta time (never above `settings.maxDelta`)

<hr class="field-separator" />

<div class="signature field-var has-description" id="realDelta"><code><span class="field-name">realDelta</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#realDelta"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current frame real delta time (the actual elapsed time since last frame update)

<hr class="field-separator" />

<div class="signature field-var has-description" id="backend"><code><span class="field-name">backend</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Backend/" class="type-link">backend.Backend</a></code><a class="header-anchor" href="#backend"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Backend instance

<hr class="field-separator" />

<div class="signature field-var has-description" id="screen"><code><span class="field-name">screen</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Screen/" class="type-link">Screen</a></code><a class="header-anchor" href="#screen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Screen instance

<hr class="field-separator" />

<div class="signature field-var has-description" id="audio"><code><span class="field-name">audio</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Audio/" class="type-link">Audio</a></code><a class="header-anchor" href="#audio"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Audio instance

<hr class="field-separator" />

<div class="signature field-var has-description" id="settings"><code><span class="field-name">settings</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Settings/" class="type-link">Settings</a></code><a class="header-anchor" href="#settings"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

App settings

<hr class="field-separator" />

<div class="signature field-var has-description" id="systems"><code><span class="field-name">systems</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Systems/" class="type-link">Systems</a></code><a class="header-anchor" href="#systems"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Systems are objects to structure app work/phases and update cycle

<hr class="field-separator" />

<div class="signature field-var has-description" id="logger"><code><span class="field-name">logger</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Logger/" class="type-link">Logger</a></code><a class="header-anchor" href="#logger"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Logger. Used by log shortcut

<hr class="field-separator" />

<div class="signature field-var has-description" id="visuals"><code><span class="field-name">visuals</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#visuals"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Visuals (ordered)
Active list of visuals being managed by ceramic.
This list is ordered and updated at every frame.
In between, it could contain destroyed visuals as they
are removed only at the end of the frame for performance reasons.

<hr class="field-separator" />

<div class="signature field-var has-description" id="pendingVisuals"><code><span class="field-name">pendingVisuals</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#pendingVisuals"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pending visuals: visuals that have been created this frame
but were not added to the `visual` list yet

<hr class="field-separator" />

<div class="signature field-var has-description" id="destroyedVisuals"><code><span class="field-name">destroyedVisuals</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#destroyedVisuals"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pending destroyed visuals: visuals that have been destroyed this frame
but were not removed to the `visual` list yet

<hr class="field-separator" />

<div class="signature field-var has-description" id="groups"><code><span class="field-name">groups</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/Group/" class="type-link">Group</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/Entity/" class="type-link">Entity</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#groups"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

All groups of entities in this app

<hr class="field-separator" />

<div class="signature field-var has-description" id="input"><code><span class="field-name">input</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Input/" class="type-link">Input</a></code><a class="header-anchor" href="#input"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shared instance of `Input`

<hr class="field-separator" />

<div class="signature field-var has-description" id="renderTextures"><code><span class="field-name">renderTextures</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/RenderTexture/" class="type-link">RenderTexture</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#renderTextures"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

All active render textures in this app

<hr class="field-separator" />

<div class="signature field-var has-description" id="assets"><code><span class="field-name">assets</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Assets/" class="type-link">Assets</a></code><a class="header-anchor" href="#assets"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

App level assets. Used to load default assets (font, texture, shader)
required to make ceramic work properly.

<hr class="field-separator" />

<div class="signature field-var has-description" id="defaultTexturedShader"><code><span class="field-name">defaultTexturedShader</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Shader/" class="type-link">Shader</a></code><a class="header-anchor" href="#defaultTexturedShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default textured shader.
This is the shader used for any visual (quad or mesh) that don't have a custom shader assigned.

<hr class="field-separator" />

<div class="signature field-var has-description" id="defaultWhiteTexture"><code><span class="field-name">defaultWhiteTexture</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Texture/" class="type-link">Texture</a></code><a class="header-anchor" href="#defaultWhiteTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default white texture.
When a quad or mesh doesn't have a texture assigned, it will use the default white texture
instead to render as plain flat coloured object. This means that the same default shader
is used and everything can be batched together (textured & non-textured in the same batch).

<hr class="field-separator" />

<div class="signature field-var has-description" id="defaultFont"><code><span class="field-name">defaultFont</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/BitmapFont/" class="type-link">BitmapFont</a></code><a class="header-anchor" href="#defaultFont"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default font used by `Text` instances.

<hr class="field-separator" />

<div class="signature field-var has-description" id="projectDir"><code><span class="field-name">projectDir</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#projectDir"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Project directory. May be null depending on the platform.

<hr class="field-separator" />

<div class="signature field-var has-description" id="persistent"><code><span class="field-name">persistent</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/PersistentData/" class="type-link">PersistentData</a></code><a class="header-anchor" href="#persistent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

App level persistent data.
This is a simple key-value store ready to be used.
Don't forget to call `persistent.save()` to apply changes permanently.

<hr class="field-separator" />

<div class="signature field-var has-description" id="textInput"><code><span class="field-name">textInput</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/TextInput/" class="type-link">TextInput</a></code><a class="header-anchor" href="#textInput"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shared text input manager. Usually not used directly as is.
You might want to use `EditText` component instead.

<hr class="field-separator" />

<div class="signature field-var has-description" id="converters"><code><span class="field-name">converters</span><span class="operator">:</span> <a href="/api-docs/headless/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#converters"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converters are used to transform field data in `Fragment` instances.
This map is matching a type (as string, like `"Array<Float>"`) with an instance
of a `ConvertField` subclass.

<hr class="field-separator" />

<div class="signature field-var has-description" id="timelines"><code><span class="field-name">timelines</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Timelines/" class="type-link">Timelines</a></code><a class="header-anchor" href="#timelines"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

All active timelines in this app.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scenes"><code><span class="field-name">scenes</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/SceneSystem/" class="type-link">SceneSystem</a></code><a class="header-anchor" href="#scenes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shared scene system.

<hr class="field-separator" />

<div class="signature field-method has-description" id="onceImmediate"><code><span class="field-name">onceImmediate</span><span class="parenthesis">(</span><span class="arg-name">owner</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Entity/" class="type-link">Entity</a><span class="operator">,</span> <span class="arg-name">handleImmediate</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#onceImmediate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Schedule immediate callback that is garanteed to be executed before the next time frame
(before elements are drawn onto screen)


| Name | Type | Description |
|------|------|-------------|
| `owner` | [Entity](/api-docs/headless/ceramic/Entity/) | Owner of this callback, allowing to cancel callback if owner is destroyed  |
| `handleImmediate` | Function | The callback to execute |

<hr class="field-separator" />

<div class="signature field-method has-description" id="oncePostFlushImmediate"><code><span class="field-name">oncePostFlushImmediate</span><span class="parenthesis">(</span><span class="arg-name">owner</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Entity/" class="type-link">Entity</a><span class="operator">,</span> <span class="arg-name">handlePostFlushImmediate</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">defer</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#oncePostFlushImmediate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Schedule callback that is garanteed to be executed when no immediate callback are pending anymore.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `owner` | [Entity](/api-docs/headless/ceramic/Entity/) | | Owner of this callback, allowing to cancel callback if owner is destroyed  |
| `handlePostFlushImmediate` | Function | | The callback to execute  |
| `defer` | [Bool](/api-docs/headless/Bool/) | `true` | if `true` (default), will box this call into an immediate callback |

<hr class="field-separator" />

<div class="signature field-method has-description" id="flushImmediate"><code><span class="field-name">flushImmediate</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#flushImmediate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Execute and flush every awaiting immediate callback, including the ones that
could have been added with `onceImmediate()` after executing the existing callbacks.

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | `true` if anything was flushed |

<hr class="field-separator" />

<div class="signature field-method has-description" id="onceXUpdates"><code><span class="field-name">onceXUpdates</span><span class="parenthesis">(</span><span class="arg-name">owner</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Entity/" class="type-link">Entity</a><span class="operator">,</span> <span class="arg-name">numUpdates</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#onceXUpdates"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Schedule a callback to be executed after a specific number of update frames.


| Name | Type | Description |
|------|------|-------------|
| `owner` | [Entity](/api-docs/headless/ceramic/Entity/) | The entity that owns this callback (used to prevent execution if owner is destroyed)  |
| `numUpdates` | [Int](/api-docs/headless/Int/) | Number of update frames to wait before executing the callback  |
| `callback` | Function | The function to execute after numUpdates frames |

<hr class="field-separator" />

<div class="signature field-method has-description" id="offXUpdates"><code><span class="field-name">offXUpdates</span><span class="parenthesis">(</span><span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#offXUpdates"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Remove a previously scheduled extended update callback


| Name | Type | Description |
|------|------|-------------|
| `callback` | Function | The callback to remove |

<hr class="field-separator" />

<div class="signature field-method has-description" id="quit"><code><span class="field-name">quit</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#quit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Quit the application.
Works on desktop (windows, mac, linux), unity.
Can also work on web by closing the window if **electron** plugin is enabled
and the app is running via electron instead of a regular browser.

<hr class="field-separator" />

<div class="signature field-method has-description" id="group"><code><span class="field-name">group</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">createIfNeeded</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Group/" class="type-link">Group</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/Entity/" class="type-link">Entity</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#group"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get a group with the given id.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `id` | [String](/api-docs/headless/String/) | | The id of the group  |
| `createIfNeeded` | [Bool](/api-docs/headless/Bool/) | `true` | `true` (default) to create a group if not created already for this id  |

| Returns | Description |
|---------|-------------|
| [Group](/api-docs/headless/ceramic/Group/)<[Entity](/api-docs/headless/ceramic/Entity/)> | the group or null if no group was found and none created. |

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="arcade"><div class="plugin-name">arcade</div><code><span class="field-name">arcade</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/ArcadeSystem/" class="type-link">ArcadeSystem</a></code><a class="header-anchor" href="#arcade"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shared arcade system.
(arcade plugin)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="nape"><div class="plugin-name">nape</div><code><span class="field-name">nape</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/NapeSystem/" class="type-link">NapeSystem</a></code><a class="header-anchor" href="#nape"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shared nape system.
(nape plugin)

## Private Members

<div class="signature field-var no-description" id="preInitCallbacks"><code><span class="field-name">preInitCallbacks</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Function</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#preInitCallbacks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="immediateCallbacks"><code><span class="field-name">immediateCallbacks</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Function</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#immediateCallbacks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of callbacks to be executed immediately before the next frame.
These callbacks are guaranteed to run before visual updates and rendering.

<hr class="field-separator" />

<div class="signature field-var has-description" id="immediateCallbacksCapacity"><code><span class="field-name">immediateCallbacksCapacity</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#immediateCallbacksCapacity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current capacity of immediate callbacks array to optimize array operations

<hr class="field-separator" />

<div class="signature field-var has-description" id="immediateCallbacksLen"><code><span class="field-name">immediateCallbacksLen</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#immediateCallbacksLen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current number of pending immediate callbacks

<hr class="field-separator" />

<div class="signature field-var has-description" id="postFlushImmediateCallbacks"><code><span class="field-name">postFlushImmediateCallbacks</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Function</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#postFlushImmediateCallbacks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of callbacks to be executed after all immediate callbacks are done

<hr class="field-separator" />

<div class="signature field-var has-description" id="postFlushImmediateCallbacksCapacity"><code><span class="field-name">postFlushImmediateCallbacksCapacity</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#postFlushImmediateCallbacksCapacity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current capacity of post flush immediate callbacks array

<hr class="field-separator" />

<div class="signature field-var has-description" id="postFlushImmediateCallbacksLen"><code><span class="field-name">postFlushImmediateCallbacksLen</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#postFlushImmediateCallbacksLen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current number of pending post flush immediate callbacks

<hr class="field-separator" />

<div class="signature field-var no-description" id="hierarchyDirty"><code><span class="field-name">hierarchyDirty</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hierarchyDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="visualsContentDirty"><code><span class="field-name">visualsContentDirty</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#visualsContentDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="beginUpdateCallbacks"><code><span class="field-name">beginUpdateCallbacks</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Function</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#beginUpdateCallbacks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

List of functions that will be called and purged when update iteration begins.
Useful to run some specific code once exactly before update event is sent.

<hr class="field-separator" />

<div class="signature field-var no-description" id="disposedEntities"><code><span class="field-name">disposedEntities</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/Entity/" class="type-link">Entity</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#disposedEntities"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="oncePreInit"><code><span class="field-name">oncePreInit</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#oncePreInit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitReady"><code><span class="field-name">emitReady</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitReady"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired when the app is ready
and the game logic can be started.

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitUpdate"><code><span class="field-name">emitUpdate</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired as many times as there are frames per seconds.
It is in sync with screen FPS but used for everything that needs
to get updated depending on time (ceramic.Timer relies on it).
Use this event to update your contents before they get drawn again.


| Name | Type | Description |
|------|------|-------------|
| `delta` | [Float](/api-docs/headless/Float/) | The elapsed delta time since last frame |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitPreUpdate"><code><span class="field-name">emitPreUpdate</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitPreUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired right before update event and
can be used when you want to run garantee your code
will be run before regular update event.


| Name | Type | Description |
|------|------|-------------|
| `delta` | [Float](/api-docs/headless/Float/) | The elapsed delta time since last frame |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitPostUpdate"><code><span class="field-name">emitPostUpdate</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitPostUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired right after update event and
can be used when you want to run garantee your code
will be run after regular update event.


| Name | Type | Description |
|------|------|-------------|
| `delta` | [Float](/api-docs/headless/Float/) | The elapsed delta time since last frame |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitDefaultAssetsLoad"><code><span class="field-name">emitDefaultAssetsLoad</span><span class="parenthesis">(</span><span class="arg-name">assets</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Assets/" class="type-link">Assets</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitDefaultAssetsLoad"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired right before default assets are being loaded.


| Name | Type | Description |
|------|------|-------------|
| `assets` | [Assets](/api-docs/headless/ceramic/Assets/) | * The `Assets` instance used to load default assets. If you add custom assets to this instance, they will be loaded as well. |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitCriticalError"><code><span class="field-name">emitCriticalError</span><span class="parenthesis">(</span><span class="arg-name">error</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">stack</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Anonymous</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitCriticalError"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired when the app hits an critical (uncaught) error.
Can be used to perform custom crash reporting.
If this even is handled, app exit should be performed by the event handler.


| Name | Type | Description |
|------|------|-------------|
| `error` | [Dynamic](/api-docs/headless/Dynamic/) | The error  |
| `stack` | [Array](/api-docs/headless/Array/)<Anonymous> | The stack trace of the error |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitBeginEnterBackground"><code><span class="field-name">emitBeginEnterBackground</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitBeginEnterBackground"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired when the app will enter background state.

CAUTION: Can execute outside main thread!

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitFinishEnterBackground"><code><span class="field-name">emitFinishEnterBackground</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitFinishEnterBackground"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired when the app did finish entering background state.

CAUTION: Can execute outside main thread!

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitBeginEnterForeground"><code><span class="field-name">emitBeginEnterForeground</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitBeginEnterForeground"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired when the app will enter foreground state.

CAUTION: Can execute outside main thread!

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitFinishEnterForeground"><code><span class="field-name">emitFinishEnterForeground</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitFinishEnterForeground"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired when the app did finish entering foreground state.

CAUTION: Can execute outside main thread!

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitBeginSortVisuals"><code><span class="field-name">emitBeginSortVisuals</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitBeginSortVisuals"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired right before sorting all visuals.
Visual are sorted at each frame depending on their properties:
depth, texture, blending, shader...

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitFinishSortVisuals"><code><span class="field-name">emitFinishSortVisuals</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitFinishSortVisuals"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired right after all visuals have been sort.

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitBeginDraw"><code><span class="field-name">emitBeginDraw</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitBeginDraw"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired right before drawing phase of visuals.

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitFinishDraw"><code><span class="field-name">emitFinishDraw</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitFinishDraw"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired right after drawing phase of visuals.

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitLowMemory"><code><span class="field-name">emitLowMemory</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitLowMemory"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired if the app is running low on memory.
(not be implemented by all platforms/targets).

CAUTION: Can execute outside main thread!

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitTerminate"><code><span class="field-name">emitTerminate</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTerminate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired when the app terminates.

CAUTION: Can execute outside main thread!

<hr class="field-separator" />

<div class="signature field-method has-description" id="tickOnceXUpdates"><code><span class="field-name">tickOnceXUpdates</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#tickOnceXUpdates"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal method to handle execution of extended update callbacks

<hr class="field-separator" />

<div class="signature field-method no-description" id="cleanXUpdatesNullValues"><code><span class="field-name">cleanXUpdatesNullValues</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#cleanXUpdatesNullValues"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="backendReady"><code><span class="field-name">backendReady</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#backendReady"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When backend is ready, initialize core systems and load default assets.
Steps:
1. Initialize persistent data and text input
2. Bind settings
3. Run pre-init callbacks
4. Initialize field converters and collections
5. Load default shaders, fonts and textures

<hr class="field-separator" />

<div class="signature field-method has-description" id="bindSettings"><code><span class="field-name">bindSettings</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindSettings"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Bind app settings to their corresponding backend implementations.
Currently handles FPS target synchronization.

<hr class="field-separator" />

<div class="signature field-method has-description" id="initFieldConverters"><code><span class="field-name">initFieldConverters</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initFieldConverters"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initialize all field converters used to transform field data in Fragment instances.
Registers default converters for common types like:
- Textures, Fonts, Colors
- Maps and Arrays
- Components

<hr class="field-separator" />

<div class="signature field-method has-description" id="initCollections"><code><span class="field-name">initCollections</span><span class="parenthesis">(</span><span class="arg-name">collections</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/AutoCollections/" class="type-link">AutoCollections</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initCollections"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initialize collections from app info configuration.
Loads collection data from assets and instantiates collection entries.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `collections` | [AutoCollections](/api-docs/headless/ceramic/AutoCollections/) | | The collections container  |
| `info` | [Dynamic](/api-docs/headless/Dynamic/) | *(optional)* | Optional info object containing collection definitions |

<hr class="field-separator" />

<div class="signature field-method has-description" id="assetsLoaded"><code><span class="field-name">assetsLoaded</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#assetsLoaded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when all default assets are loaded.
Proceeds with running any pending loaders.

<hr class="field-separator" />

<div class="signature field-method has-description" id="runNextLoader"><code><span class="field-name">runNextLoader</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#runNextLoader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Run pending loaders sequentially until none remain,
then trigger app ready state.

<hr class="field-separator" />

<div class="signature field-method has-description" id="runReady"><code><span class="field-name">runReady</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#runReady"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initialize app ready state:
- Run platform specific initialization
- Setup debug entity tracking if enabled
- Configure screen
- Setup update/render pipeline
- Configure input handling

<hr class="field-separator" />

<div class="signature field-method has-description" id="updatePreReady"><code><span class="field-name">updatePreReady</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updatePreReady"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Update method called before the app is fully ready.
Handles basic asset and immediate callback processing.

| Name | Type |
|------|------|
| `delta` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="update"><code><span class="field-name">update</span><span class="parenthesis">(</span><span class="arg-name">realDelta</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#update"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Main update method called every frame once the app is ready.
Handles:
- Frame timing and FPS management
- System updates
- Input processing
- Visual hierarchy updates
- Entity lifecycle


| Name | Type | Description |
|------|------|-------------|
| `realDelta` | [Float](/api-docs/headless/Float/) | Actual time elapsed since last frame |

<hr class="field-separator" />

<div class="signature field-method has-description" id="render"><code><span class="field-name">render</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#render"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Main render method called every frame.
Handles the complete rendering pipeline:
- Begins draw phase
- Renders all visible visuals
- Ends draw phase
- Handles display buffer swapping

<hr class="field-separator" />

<div class="signature field-method has-description" id="syncPendingVisuals"><code><span class="field-name">syncPendingVisuals</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#syncPendingVisuals"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Synchronize pending visuals into the main visuals list.

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if any visuals were synchronized |

<hr class="field-separator" />

<div class="signature field-method has-description" id="syncDestroyedVisuals"><code><span class="field-name">syncDestroyedVisuals</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#syncDestroyedVisuals"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Remove destroyed visuals from the main visuals list.
Uses an efficient gap-closing algorithm to maintain array density.

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.AppMacro.build() |
| `:allow` | ceramic.Visual |
| `:allow` | ceramic.Screen |
| `:allow` | ceramic.Entity |
| `:allow` | ceramic.Timer |

