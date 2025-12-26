---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: RoundedRect
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/RoundedRect/
---

# RoundedRect

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/RoundedRect.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-web/ceramic/Visual/">Visual</a> → <a href="/api-docs/clay-web/ceramic/Mesh/">Mesh</a> → <a href="/api-docs/clay-web/ceramic/Shape/">Shape</a> → <strong>ceramic.RoundedRect</strong> (Class)</div>

A specialized shape that creates a rectangle with rounded corners.

RoundedRect extends Shape to generate smooth, curved corners using
configurable radius values and segment counts. Each corner can have
a different radius, allowing for asymmetric designs.

The shape is constructed by generating arc segments for each corner
and connecting them with straight lines. The number of segments
determines the smoothness of the curves.

Common uses:
- UI buttons and panels
- Dialog boxes and tooltips
- Card layouts
- Any rectangular element requiring soft edges

```haxe
// Create a uniformly rounded rectangle
var rect = new RoundedRect();
rect.size(200, 100);
rect.radius(20);  // All corners 20px radius

// Create asymmetric rounded rectangle
var card = new RoundedRect();
card.size(300, 200);
card.radius(30, 30, 10, 10);  // Top corners more rounded
```

<div class="see"><strong>See:</strong> Shape The base class for custom shapes</div>


## Instance Members

<div class="signature field-var has-description" id="segments"><code><span class="field-name">segments</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#segments"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Number of segments used to create each rounded corner.

More segments create smoother curves but use more vertices.
The segments are distributed equally across the 90-degree arc
of each corner.

Recommended values:
- 1-3: Very low poly, visible corners
- 4-6: Good balance for small radii
- 7-10: Smooth curves for larger radii
- \>10: Diminishing returns, rarely needed

Default: 10 (smooth curves)

<hr class="field-separator" />

<div class="signature field-var has-description" id="radiusTopLeft"><code><span class="field-name">radiusTopLeft</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#radiusTopLeft"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Radius of the top-left corner in pixels.

A value of 0 creates a sharp corner.
The radius is clamped to half the smaller dimension
to prevent overlapping corners.

<hr class="field-separator" />

<div class="signature field-var has-description" id="radiusTopRight"><code><span class="field-name">radiusTopRight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#radiusTopRight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Radius of the top-right corner in pixels.

A value of 0 creates a sharp corner.
The radius is clamped to half the smaller dimension
to prevent overlapping corners.

<hr class="field-separator" />

<div class="signature field-var has-description" id="radiusBottomRight"><code><span class="field-name">radiusBottomRight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#radiusBottomRight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Radius of the bottom-right corner in pixels.

A value of 0 creates a sharp corner.
The radius is clamped to half the smaller dimension
to prevent overlapping corners.

<hr class="field-separator" />

<div class="signature field-var has-description" id="radiusBottomLeft"><code><span class="field-name">radiusBottomLeft</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#radiusBottomLeft"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Radius of the bottom-left corner in pixels.

A value of 0 creates a sharp corner.
The radius is clamped to half the smaller dimension
to prevent overlapping corners.

<hr class="field-separator" />

<div class="signature field-method has-description" id="computeContent"><code><span class="field-name">computeContent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeContent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generates the points that define the rounded rectangle shape.

This method creates a series of points around the perimeter:
1. Calculates sine/cosine tables for the quarter circle
2. Generates points for each corner arc in clockwise order:
   - Top-left (0° to 90°)
   - Top-right (90° to 180°)
   - Bottom-right (180° to 270°)
   - Bottom-left (270° to 360°)

The straight edges between corners are implicit in the
point ordering and handled by the Shape triangulation.

<hr class="field-separator" />

<div class="signature field-method has-description" id="radius"><code><span class="field-name">radius</span><span class="parenthesis">(</span><span class="arg-name">topLeft</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">topRight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">bottomRight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">bottomLeft</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#radius"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the radius for all corners at once.

This convenience method allows setting corner radii with various
parameter combinations:
- 1 parameter: All corners use the same radius
- 2 parameters: Top corners use first value, bottom corners use second
- 4 parameters: Each corner gets its own radius



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `topLeft` | [Float](/api-docs/clay-web/Float/) | | Radius for top-left corner (required)  |
| `topRight` | [Float](/api-docs/clay-web/Float/) | *(optional)* | Radius for top-right corner (optional)  |
| `bottomRight` | [Float](/api-docs/clay-web/Float/) | *(optional)* | Radius for bottom-right corner (optional)  |
| `bottomLeft` | [Float](/api-docs/clay-web/Float/) | *(optional)* | Radius for bottom-left corner (optional) * ```haxe // All corners 20px rect.radius(20); * // Top corners 20px, bottom corners 10px rect.radius(20, 10); * // Each corner different rect.radius(20, 15, 10, 5); ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new RoundedRect instance.

The shape starts with sharp corners (all radii = 0) and
must be configured using the radius properties or radius() method.
Auto-size computation is disabled since the size is explicitly set.

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |

