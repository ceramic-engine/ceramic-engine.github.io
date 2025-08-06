---
layout: api-docs
category: api-docs
subCategory: doc
menu: Unity
title: Vector3
target: Unity
permalink: api-docs/unity/unityengine/Vector3/
---

# Vector3

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/unity/runtime/src/unityengine/Vector3.hx">View source</a></div>

<div class="type-hierarchy"><strong>unityengine.Vector3</strong> (extern class)</div>

Unity Vector3 struct extern binding for Ceramic.
Represents 3D vectors and points with x, y, and z components.

Used throughout Unity for 3D positions, directions, scales,
and other spatial data. This minimal binding provides the
properties and constructor needed by the Ceramic backend.

## Instance Members

<div class="signature field-var has-description has-plugin" id="x"><div class="plugin-name">unity</div><code><span class="field-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a></code><a class="header-anchor" href="#x"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The x component of the vector.
Typically represents left/right in world space.
Read-only in this binding.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="y"><div class="plugin-name">unity</div><code><span class="field-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a></code><a class="header-anchor" href="#y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The y component of the vector.
Typically represents up/down in world space.
Read-only in this binding.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="z"><div class="plugin-name">unity</div><code><span class="field-name">z</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a></code><a class="header-anchor" href="#z"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The z component of the vector.
Typically represents forward/backward in world space.
Read-only in this binding.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">unity</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new Vector3 with the given x, y, and z components.



| Name | Type | Description |
|------|------|-------------|
| `x` | [Single](/api-docs/unity/Single/) | The x component  |
| `y` | [Single](/api-docs/unity/Single/) | The y component  |
| `z` | [Single](/api-docs/unity/Single/) | The z component |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |

