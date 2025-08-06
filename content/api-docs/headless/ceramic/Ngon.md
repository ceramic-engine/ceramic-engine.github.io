---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Ngon
target: Headless
permalink: api-docs/headless/ceramic/Ngon/
---

# Ngon

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Ngon.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/ceramic/Entity/">Entity</a> → <a href="/api-docs/headless/ceramic/Visual/">Visual</a> → <a href="/api-docs/headless/ceramic/Mesh/">Mesh</a> → <strong>ceramic.Ngon</strong> (Class)</div>

A mesh that creates regular polygons with a configurable number of sides.

Ngon (N-gon) can create any regular polygon from triangles to circles.
The shape is centered at its anchor point (default 0.5, 0.5) with
vertices evenly distributed around the perimeter.

Common shapes by side count:
- 3: Triangle
- 4: Square (rotated 45°)
- 5: Pentagon
- 6: Hexagon
- 8: Octagon
- 32+: Circle approximation

The first vertex is positioned at (radius, 0) relative to center,
with subsequent vertices placed counter-clockwise.

```haxe
// Create a hexagon
var hexagon = new Ngon();
hexagon.sides = 6;
hexagon.radius = 40;
hexagon.color = Color.YELLOW;

// Create a smooth circle
var circle = new Ngon();
circle.sides = 64;
circle.radius = 50;
circle.color = Color.WHITE;

// Animated shape morphing
var morph = new Ngon();
morph.radius = 30;
morph.color = Color.PINK;
app.onUpdate(this, delta -> {
    morph.sides = Math.round(3 + Math.sin(Timer.now) * 3);
});
```

<div class="see"><strong>See:</strong> <a href="/api-docs/headless/ceramic/Mesh/">Mesh</a>, <a href="/api-docs/headless/ceramic/Arc/">Arc</a></div>


## Instance Members

<div class="signature field-var has-description" id="sides"><code><span class="field-name">sides</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#sides"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Number of sides for the polygon.

Minimum 3 for a triangle. Higher values create
smoother shapes that approximate a circle.

Default: 32 (smooth circle approximation)

<hr class="field-separator" />

<div class="signature field-var has-description" id="radius"><code><span class="field-name">radius</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#radius"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Radius of the polygon in pixels.

Distance from center to vertices. The total size
will be radius * 2 in both width and height.

Default: 50

<hr class="field-separator" />

<div class="signature field-method has-description" id="computeContent"><code><span class="field-name">computeContent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeContent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generates the polygon mesh geometry.

Creates a fan of triangles from the center point to
vertices distributed evenly around the perimeter.
The first perimeter vertex is at angle 0 (right side).

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new N-gon polygon.

The shape is anchored at its center (0.5, 0.5) by default,
making rotation and scaling behave naturally.

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

