---
layout: api-docs
category: api-docs
subCategory: doc
menu: Unity
title: Rect
target: Unity
permalink: api-docs/unity/unityengine/Rect/
---

# Rect

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/unity/runtime/src/unityengine/Rect.hx">View source</a></div>

<div class="type-hierarchy"><strong>unityengine.Rect</strong> (extern class)</div>

Unity Rect struct extern binding for Ceramic.
Represents a 2D rectangle defined by position and size.

Used throughout Unity for GUI positioning, texture coordinates,
viewport definitions, and other 2D spatial data. The rectangle
is defined by its bottom-left corner (x,y) and dimensions.

## Instance Members

<div class="signature field-var has-description has-plugin" id="x"><div class="plugin-name">unity</div><code><span class="field-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a></code><a class="header-anchor" href="#x"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The x coordinate of the rectangle's bottom-left corner.
In screen space, this is typically pixels from the left edge.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="y"><div class="plugin-name">unity</div><code><span class="field-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a></code><a class="header-anchor" href="#y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The y coordinate of the rectangle's bottom-left corner.
In screen space, this is typically pixels from the bottom edge.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="width"><div class="plugin-name">unity</div><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The width of the rectangle in the same units as x.
Must be positive for a valid rectangle.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="height"><div class="plugin-name">unity</div><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The height of the rectangle in the same units as y.
Must be positive for a valid rectangle.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">unity</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new Rect with the specified position and dimensions.



| Name | Type | Description |
|------|------|-------------|
| `x` | [Single](/api-docs/unity/Single/) | The x coordinate of the rectangle's bottom-left corner  |
| `y` | [Single](/api-docs/unity/Single/) | The y coordinate of the rectangle's bottom-left corner  |
| `width` | [Single](/api-docs/unity/Single/) | The width of the rectangle  |
| `height` | [Single](/api-docs/unity/Single/) | The height of the rectangle |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |

