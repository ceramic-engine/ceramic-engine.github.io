---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Rect
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/Rect/
---

# Rect

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Rect.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.Rect</strong> (Class)</div>

Represents a rectangular area defined by position and dimensions.

Rect is a simple data structure for storing rectangular bounds,
commonly used for collision detection, viewport definitions, texture
regions, and UI layout calculations. The rectangle is defined by its
top-left corner (x, y) and its dimensions (width, height).

The @:structInit metadata allows convenient struct-style initialization:
```haxe
// Different ways to create rectangles
var rect1 = new Rect(10, 20, 100, 50);
var rect2:Rect = {x: 10, y: 20, width: 100, height: 50};
var rect3 = new Rect(); // Defaults to (0, 0, 0, 0)

// Common usage patterns
var bounds = new Rect(visual.x, visual.y, visual.width, visual.height);
var viewport:Rect = {x: 0, y: 0, width: screen.width, height: screen.height};

// Accessing properties
var right = rect.x + rect.width;
var bottom = rect.y + rect.height;
var area = rect.width * rect.height;
```

Note: This class does not include utility methods for intersection,
containment, or other geometric operations. Use GeometryUtils for
such calculations.

<div class="see"><strong>See:</strong> ceramic.GeometryUtils For rectangle intersection and containment tests, ceramic.Visual For visual bounds, ceramic.Screen For screen viewport</div>


## Instance Members

<div class="signature field-var has-description" id="x"><code><span class="field-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#x"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The X coordinate of the rectangle's top-left corner.
In screen coordinates, this represents the horizontal position.

<hr class="field-separator" />

<div class="signature field-var has-description" id="y"><code><span class="field-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The Y coordinate of the rectangle's top-left corner.
In screen coordinates, this represents the vertical position.

<hr class="field-separator" />

<div class="signature field-var has-description" id="width"><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The width of the rectangle.
Should typically be positive for a valid rectangle.

<hr class="field-separator" />

<div class="signature field-var has-description" id="height"><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The height of the rectangle.
Should typically be positive for a valid rectangle.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new Rect instance with the specified position and dimensions.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `x` | [Float](/api-docs/clay-web/Float/) | `0` | The X coordinate of the top-left corner (default: 0)  |
| `y` | [Float](/api-docs/clay-web/Float/) | `0` | The Y coordinate of the top-left corner (default: 0)  |
| `width` | [Float](/api-docs/clay-web/Float/) | `0` | The width of the rectangle (default: 0)  |
| `height` | [Float](/api-docs/clay-web/Float/) | `0` | The height of the rectangle (default: 0) |

## Private Members

<div class="signature field-method has-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a string representation of this rectangle.
Format: "Rect(x, y, width, height)" with the actual numeric values.


| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-web/String/) | String representation of the rectangle |

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |

