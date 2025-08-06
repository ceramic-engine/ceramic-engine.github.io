---
layout: api-docs
category: api-docs
subCategory: doc
menu: Unity
title: Vector2
target: Unity
permalink: api-docs/unity/unityengine/Vector2/
---

# Vector2

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/unity/runtime/src/unityengine/Vector2.hx">View source</a></div>

<div class="type-hierarchy"><strong>unityengine.Vector2</strong> (extern class)</div>

Unity Vector2 struct extern binding for Ceramic.
Represents 2D vectors and points with x and y components.

Commonly used for 2D positions, directions, velocities,
and texture coordinates in Unity. This minimal binding
provides the properties and constructor used by Ceramic.

## Instance Members

<div class="signature field-var has-description has-plugin" id="x"><div class="plugin-name">unity</div><code><span class="field-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a></code><a class="header-anchor" href="#x"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The x component of the vector.
Read-only in this binding.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="y"><div class="plugin-name">unity</div><code><span class="field-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a></code><a class="header-anchor" href="#y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The y component of the vector.
Read-only in this binding.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">unity</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new Vector2 with the given x and y components.



| Name | Type | Description |
|------|------|-------------|
| `x` | [Single](/api-docs/unity/Single/) | The x component  |
| `y` | [Single](/api-docs/unity/Single/) | The y component |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |

