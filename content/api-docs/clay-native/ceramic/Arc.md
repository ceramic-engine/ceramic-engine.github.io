---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Arc
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/Arc/
---

# Arc

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Arc.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-native/ceramic/Visual/">Visual</a> → <a href="/api-docs/clay-native/ceramic/Mesh/">Mesh</a> → <strong>ceramic.Arc</strong> (Class)</div>

A mesh subclass for drawing arcs, pies, rings, and disc geometry.

Arc provides a convenient way to create circular and arc-shaped graphics
with configurable radius, angle, thickness, and smoothness. It can render
various circular shapes by adjusting its properties:

Shape configurations:
- Arc: Partial circle outline (angle < 360°)
- Ring: Complete circle outline (angle = 360°)
- Disc/Circle: Filled circle (angle = 360°, borderPosition = INSIDE)
- Pie: Filled arc segment (thickness = radius, borderPosition = INSIDE)
- Ring segment: Thick arc outline

The arc is centered at its anchor point (default 0.5, 0.5) and
renders from 0° (right) counter-clockwise.

```haxe
// Create a simple arc
var arc = new Arc();
arc.radius = 100;
arc.angle = 90; // Quarter circle
arc.thickness = 20;
arc.color = Color.BLUE;

// Create a pie chart segment
var pie = new Arc();
pie.radius = 80;
pie.thickness = 80; // Same as radius
pie.borderPosition = INSIDE;
pie.angle = 120; // One third of circle
pie.color = Color.GREEN;

// Create a smooth ring
var ring = new Arc();
ring.radius = 50;
ring.thickness = 10;
ring.angle = 360; // Full circle
ring.sides = 64; // Smoother circle
ring.color = Color.YELLOW;
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/Mesh/">Mesh</a>, <a href="/api-docs/clay-native/ceramic/BorderPosition/">BorderPosition</a></div>


## Instance Members

<div class="signature field-var has-description" id="sides"><code><span class="field-name">sides</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#sides"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Number of sides used to approximate the arc.

Higher values create smoother curves but use more vertices.
- 3: Triangle
- 6: Hexagon
- 32: Smooth arc (default)
- 64+: Very smooth, suitable for large arcs

Performance consideration: vertex count = sides * 2 for rings

<hr class="field-separator" />

<div class="signature field-var has-description" id="radius"><code><span class="field-name">radius</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#radius"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Radius of the arc in pixels.

Defines the outer edge distance from the center.
The arc's total size will be radius * 2.

Default: 64

<hr class="field-separator" />

<div class="signature field-var has-description" id="angle"><code><span class="field-name">angle</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#angle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Arc angle in degrees (0 to 360).

Determines how much of the circle to draw:
- 0°: No arc
- 90°: Quarter circle
- 180°: Semicircle
- 270°: Three quarters (default)
- 360°: Full circle/ring

The arc starts at 0° (right) and draws counter-clockwise.

<hr class="field-separator" />

<div class="signature field-var has-description" id="borderPosition"><code><span class="field-name">borderPosition</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#borderPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Position of the arc border relative to the radius.

- INSIDE: Border inside radius (fills toward center)
- MIDDLE: Border centered on radius line (default)
- OUTSIDE: Border outside radius (extends outward)

Use INSIDE with thickness = radius to create filled shapes.

<hr class="field-separator" />

<div class="signature field-var has-description" id="thickness"><code><span class="field-name">thickness</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#thickness"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Thickness of the arc stroke in pixels.

Determines the width of the arc line:
- Small values: Thin outlines
- Large values: Thick rings
- Equal to radius with INSIDE border: Filled pie/disc

Default: 16

<hr class="field-separator" />

<div class="signature field-method has-description" id="computeContent"><code><span class="field-name">computeContent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeContent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generates the arc mesh geometry.

Creates vertices and indices to represent the arc shape
based on current properties. Called automatically when
properties change.

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

