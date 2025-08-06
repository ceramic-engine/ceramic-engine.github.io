---
layout: api-docs
category: api-docs
subCategory: doc
menu: Unity
title: GameObject
target: Unity
permalink: api-docs/unity/unityengine/GameObject/
---

# GameObject

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/unity/runtime/src/unityengine/GameObject.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/unityengine/Object/">Object</a> → <strong>unityengine.GameObject</strong> (extern class)</div>

Unity GameObject class extern binding for Ceramic.
The fundamental object in Unity scenes representing entities
that can have components attached.

This is a minimal binding exposing properties used by
the Ceramic Unity backend for scene management.

## Instance Members

<div class="signature field-var has-description has-plugin" id="activeInHierarchy"><div class="plugin-name">unity</div><code><span class="field-name">activeInHierarchy</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#activeInHierarchy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if the GameObject is active in the scene hierarchy.
Returns true only if the GameObject and all its parents are active.
This determines whether the GameObject is actually processed and rendered.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="activeSelf"><div class="plugin-name">unity</div><code><span class="field-name">activeSelf</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#activeSelf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The local active state of this GameObject.
This property ignores the active state of parent GameObjects.
Read-only - use SetActive() to change the active state.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="isStatic"><div class="plugin-name">unity</div><code><span class="field-name">isStatic</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isStatic"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Controls whether the GameObject is static for optimization purposes.
Static GameObjects can be batched more efficiently and are included
in precomputed lighting and navigation data.
Should be set to true for non-moving environment objects.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="layer"><div class="plugin-name">unity</div><code><span class="field-name">layer</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#layer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The layer this GameObject is assigned to (0-31).
Layers are used for selective rendering, physics collisions,
and raycasting. Layer 0 is the default layer.

Common Unity layers:
- 0: Default
- 2: Ignore Raycast
- 5: UI

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tag"><div class="plugin-name">unity</div><code><span class="field-name">tag</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#tag"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The tag assigned to this GameObject.
Tags are used to identify GameObjects for scripting purposes.
Common tags include "Player", "Enemy", "MainCamera", etc.
Default tag is "Untagged".

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |

