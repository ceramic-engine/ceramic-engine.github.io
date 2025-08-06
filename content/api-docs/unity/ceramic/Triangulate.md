---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Triangulate
target: Unity
permalink: api-docs/unity/ceramic/Triangulate/
---

# Triangulate

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Triangulate.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.Triangulate</strong> (Class)</div>

Utility class for triangulating polygons into triangles.

Triangulate converts complex polygons (defined by vertices) into a set of triangles
by generating appropriate indices. This is essential for rendering filled shapes
on the GPU, which typically only supports triangle primitives.

The triangulation uses the ear-clipping algorithm, which:
- Works with both convex and concave polygons
- Handles clockwise and counter-clockwise winding
- Produces a valid triangulation for simple polygons (no self-intersections)

Common uses:
- Converting Shape paths to renderable triangles
- Filling complex polygons
- Creating meshes from outline data
- Processing vector graphics

```haxe
// Triangulate a square
var vertices = [
    0, 0,    // Top-left
    100, 0,  // Top-right
    100, 100, // Bottom-right
    0, 100   // Bottom-left
];
var indices = [];
Triangulate.triangulate(vertices, indices);
// indices now contains [0, 1, 2, 0, 2, 3]
```

<div class="see"><strong>See:</strong> Shape For automatic triangulation of visual shapes, EarClippingTriangulator The underlying triangulation implementation</div>


## Static Members

<div class="signature field-method has-description" id="triangulate"><code><span class="field-name">triangulate</span><span class="parenthesis">(</span><span class="arg-name">vertices</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">indices</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#triangulate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Triangulates a polygon defined by vertices and fills the indices array.

Takes a list of 2D vertices (as x,y pairs) and generates triangle indices
that define how to connect those vertices into triangles. The polygon
should be simple (no self-intersections) for best results.



| Name | Type | Description |
|------|------|-------------|
| `vertices` | [Array](/api-docs/unity/Array/)<[Float](/api-docs/unity/Float/)> | Array of vertex coordinates as [x0,y0, x1,y1, x2,y2, ...] Must contain at least 6 values (3 vertices).  |
| `indices` | [Array](/api-docs/unity/Array/)<[Int](/api-docs/unity/Int/)> | Output array to fill with triangle indices. Will be cleared before adding new indices. Result length will be 3 × (numVertices - 2). * ```haxe var vertices = [0,0, 100,0, 50,100]; // Triangle var indices = []; Triangulate.triangulate(vertices, indices); // indices = [0, 1, 2] ``` |

## Private Members

<div class="signature field-var no-description" id="tmpVertices"><code><span class="field-name">tmpVertices</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#tmpVertices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="tmpIndices"><code><span class="field-name">tmpIndices</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#tmpIndices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="triangulator"><code><span class="field-name">triangulator</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/_Triangulate/EarClippingTriangulator/" class="type-link">ceramic._Triangulate.EarClippingTriangulator</a></code><a class="header-anchor" href="#triangulator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

