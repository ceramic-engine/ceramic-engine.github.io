---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Line
target: Unity
permalink: api-docs/unity/ceramic/Line/
---

# Line

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Line.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">Entity</a> → <a href="/api-docs/unity/ceramic/Visual/">Visual</a> → <a href="/api-docs/unity/ceramic/Mesh/">Mesh</a> → <strong>ceramic.Line</strong> (Class)</div>

Display lines composed of multiple segments, curves and paths.

Line extends Mesh to efficiently render stroked paths with configurable
thickness, joins, and caps. It automatically generates the necessary
triangles to represent the line with proper corners and end caps.

Features:
- Variable thickness lines
- Miter and bevel joins for corners
- Butt and square caps for line ends
- Automatic loop closing
- Efficient triangle-based rendering

The line is defined by a series of points in a flat array format:
[x0, y0, x1, y1, x2, y2, ...]

Common uses:
- Drawing paths and routes
- Graph visualization
- UI decorations and dividers
- Debug visualization
- Vector graphics

```haxe
// Create a simple line
var line = new Line();
line.points = [
    10, 10,    // Start point
    50, 30,    // Middle point
    90, 10     // End point
];
line.thickness = 3;
line.color = Color.RED;

// Create a closed shape
var shape = new Line();
shape.points = [
    0, 0,
    100, 0,
    100, 100,
    0, 100,
    0, 0      // Close to start
];
shape.loop = true;
shape.join = MITER;
shape.thickness = 2;
```

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/ceramic/Mesh/">Mesh</a>, <a href="/api-docs/unity/ceramic/LineJoin/">LineJoin</a>, <a href="/api-docs/unity/ceramic/LineCap/">LineCap</a></div>


## Instance Members

<div class="signature field-var has-description" id="points"><code><span class="field-name">points</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#points"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Line points as a flat array of coordinates.

Format: [x0, y0, x1, y1, x2, y2, ...]

Points define the path the line follows. The line will be
stroked along this path with the specified thickness.

Note: when editing array content without reassigning it,
`contentDirty` must be set to `true` to update the line.

```haxe
line.points = [0, 0, 100, 50, 200, 0]; // V-shaped line

// Modifying existing array
line.points[2] = 150; // Change x1
line.contentDirty = true; // Must set to update
```

<hr class="field-separator" />

<div class="signature field-var has-description" id="miterLimit"><code><span class="field-name">miterLimit</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#miterLimit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The limit before miters turn into bevels.

When join is MITER, sharp corners can create very long points.
If the miter length would exceed thickness * miterLimit,
the corner is rendered as a bevel instead.

Lower values create more bevels, higher values allow sharper corners.

Default: 10

<hr class="field-separator" />

<div class="signature field-var has-description" id="thickness"><code><span class="field-name">thickness</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#thickness"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The line thickness in pixels.

Determines how wide the stroked line appears.
The line is centered on the path defined by points.

Default: 1

<hr class="field-separator" />

<div class="signature field-var has-description" id="join"><code><span class="field-name">join</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LineJoin/" class="type-link">LineJoin</a></code><a class="header-anchor" href="#join"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The join type for line corners.

- MITER: Sharp corners (limited by miterLimit)
- BEVEL: Flat corners

MITER creates pointed corners but can extend far on acute angles.
BEVEL creates a flat edge between the two line segments.

Default: BEVEL

<hr class="field-separator" />

<div class="signature field-var has-description" id="cap"><code><span class="field-name">cap</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LineCap/" class="type-link">LineCap</a></code><a class="header-anchor" href="#cap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The cap type for line ends.

- BUTT: Line ends exactly at the point (default)
- SQUARE: Line extends past the point by half thickness

SQUARE caps make lines appear slightly longer but can
look better when lines meet at their endpoints.

Default: BUTT

<hr class="field-separator" />

<div class="signature field-var has-description" id="loop"><code><span class="field-name">loop</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#loop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to close the line into a loop.

If true and the first and last points are close enough,
connects them with proper joining. Creates closed shapes
from open paths.

Useful for drawing polygons, closed curves, and shapes.

Default: false

<hr class="field-separator" />

<div class="signature field-var has-description" id="autoComputeSize"><code><span class="field-name">autoComputeSize</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#autoComputeSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to automatically compute size from line points.

When true, the line's width and height are set to encompass
all points. This ensures proper bounds for hit testing and
culling, but adds a small computation overhead.

Set to false if you manually manage the line's size.

Default: true

<hr class="field-separator" />

<div class="signature field-method has-description" id="computeContent"><code><span class="field-name">computeContent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeContent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generates the line geometry from points and settings.

Uses the polyline library to create triangulated geometry
representing the stroked path. This is called automatically
when the line properties change.

<hr class="field-separator" />

<div class="signature field-method has-description" id="computeSize"><code><span class="field-name">computeSize</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computes the line's bounding box from its points.

Finds the maximum x and y coordinates to set the line's
width and height. Called automatically when autoComputeSize
is true and content changes.

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

