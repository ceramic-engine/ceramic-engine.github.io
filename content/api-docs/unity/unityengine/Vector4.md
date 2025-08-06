---
layout: api-docs
category: api-docs
subCategory: doc
menu: Unity
title: Vector4
target: Unity
permalink: api-docs/unity/unityengine/Vector4/
---

# Vector4

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/unity/runtime/src/unityengine/Vector4.hx">View source</a></div>

<div class="type-hierarchy"><strong>unityengine.Vector4</strong> (extern class)</div>

Unity Vector4 struct extern binding for Ceramic.
Represents 4D vectors with x, y, z, and w components.

Commonly used for shader parameters, homogeneous coordinates,
and RGBA color values in certain contexts. This minimal binding
provides the properties and constructor used by Ceramic.

## Instance Members

<div class="signature field-var has-description has-plugin" id="x"><div class="plugin-name">unity</div><code><span class="field-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a></code><a class="header-anchor" href="#x"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The x component of the vector.
First component in the 4D vector.
Read-only in this binding.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="y"><div class="plugin-name">unity</div><code><span class="field-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a></code><a class="header-anchor" href="#y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The y component of the vector.
Second component in the 4D vector.
Read-only in this binding.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="z"><div class="plugin-name">unity</div><code><span class="field-name">z</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a></code><a class="header-anchor" href="#z"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The z component of the vector.
Third component in the 4D vector.
Read-only in this binding.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="w"><div class="plugin-name">unity</div><code><span class="field-name">w</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a></code><a class="header-anchor" href="#w"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The w component of the vector.
Fourth component, often used for homogeneous coordinates
or alpha channel in color representations.
Read-only in this binding.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">unity</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">w</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new Vector4 with the given components.



| Name | Type | Description |
|------|------|-------------|
| `x` | [Single](/api-docs/unity/Single/) | The x component  |
| `y` | [Single](/api-docs/unity/Single/) | The y component  |
| `z` | [Single](/api-docs/unity/Single/) | The z component  |
| `w` | [Single](/api-docs/unity/Single/) | The w component |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |

