---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Touch
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/Touch/
---

# Touch

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Touch.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.Touch</strong> (Class)</div>

Represents a single touch point in a multi-touch interaction.

Touch contains information about a finger or stylus touching the screen,
including its position and movement. Each touch has a unique index that
persists throughout the touch lifetime (from touchdown to touchup).

Touch instances are managed by the Screen class and accessed through
screen.touches or multi-touch events.

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/ceramic/Screen/">Screen</a>, <a href="/api-docs/clay-web/ceramic/Touches/">Touches</a></div>


## Instance Members

<div class="signature field-var has-description" id="index"><code><span class="field-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#index"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unique identifier for this touch point.
The index remains constant throughout the touch lifetime.

<hr class="field-separator" />

<div class="signature field-var has-description" id="x"><code><span class="field-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#x"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current X coordinate of the touch in screen space.

<hr class="field-separator" />

<div class="signature field-var has-description" id="y"><code><span class="field-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current Y coordinate of the touch in screen space.

<hr class="field-separator" />

<div class="signature field-var has-description" id="deltaX"><code><span class="field-name">deltaX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#deltaX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Change in X position since the last frame.

<hr class="field-separator" />

<div class="signature field-var has-description" id="deltaY"><code><span class="field-name">deltaY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#deltaY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Change in Y position since the last frame.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">deltaX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">deltaY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Description |
|------|------|-------------|
| `index` | [Int](/api-docs/clay-web/Int/) | * Unique identifier for this touch point. The index remains constant throughout the touch lifetime. |
| `x` | [Float](/api-docs/clay-web/Float/) | * Current X coordinate of the touch in screen space. |
| `y` | [Float](/api-docs/clay-web/Float/) | * Current Y coordinate of the touch in screen space. |
| `deltaX` | [Float](/api-docs/clay-web/Float/) | * Change in X position since the last frame. |
| `deltaY` | [Float](/api-docs/clay-web/Float/) | * Change in Y position since the last frame. |

## Private Members

<div class="signature field-method has-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a string representation of this touch.

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-web/String/) | String showing all touch properties |

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |
| `:allow` | ceramic.Screen |

