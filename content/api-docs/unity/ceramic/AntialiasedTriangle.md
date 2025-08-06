---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: AntialiasedTriangle
target: Unity
permalink: api-docs/unity/ceramic/AntialiasedTriangle/
---

# AntialiasedTriangle

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/AntialiasedTriangle.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">Entity</a> → <a href="/api-docs/unity/ceramic/Visual/">Visual</a> → <a href="/api-docs/unity/ceramic/Mesh/">Mesh</a> → <strong>ceramic.AntialiasedTriangle</strong> (Class)</div>

A specialized triangle shape that simulates antialiasing using additional vertices.

This class creates a smooth-edged triangle without requiring multisampling or hardware antialiasing.
It achieves this by adding extra vertices around the edges with alpha transparency,
creating a gradient effect that simulates antialiased edges.

The triangle uses 6 vertices instead of the typical 3:
- 3 inner vertices forming the main triangle (fully opaque)
- 3 outer vertices extending beyond the triangle bounds (fully transparent)

```haxe
var triangle = new AntialiasedTriangle();
triangle.size(200, 150);
triangle.color = Color.RED;
triangle.antialiasing = 2; // 2-pixel antialiasing border
triangle.pos(100, 100);
```

<div class="see"><strong>See:</strong> Triangle For a simpler triangle without antialiasing, Mesh The base class for custom geometry</div>


## Instance Members

<div class="signature field-var has-description" id="antialiasing"><code><span class="field-name">antialiasing</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#antialiasing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The width of the antialiasing border in pixels.
Higher values create a smoother but wider gradient edge.
Default value is 1 pixel.

Common values:
- 0.5: Very subtle antialiasing
- 1.0: Standard antialiasing (default)
- 2.0: Strong antialiasing for larger triangles

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new antialiased triangle.
Initializes the mesh with 6 vertices and the appropriate indices
for rendering the antialiased edges.

## Private Members

<div class="signature field-method has-description" id="updateVertices"><code><span class="field-name">updateVertices</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateVertices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the vertex positions based on current width, height, and antialiasing values.

The vertex layout is:
- Vertices 0,1,2: Inner triangle vertices (opaque)
- Vertices 3,4,5: Outer vertices for antialiasing (transparent)

The outer vertices are positioned beyond the triangle bounds by the antialiasing amount.

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

