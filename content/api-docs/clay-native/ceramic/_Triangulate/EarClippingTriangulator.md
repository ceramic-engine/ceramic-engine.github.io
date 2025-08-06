---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: EarClippingTriangulator
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/_Triangulate/EarClippingTriangulator/
---

# EarClippingTriangulator

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Triangulate.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic._Triangulate.EarClippingTriangulator</strong> (private class)</div>

Implementation of the ear-clipping algorithm for polygon triangulation.

A simple implementation of the ear cutting algorithm to triangulate simple polygons without holes.
The algorithm works by:
1. Finding "ear" vertices (vertices that form triangles with no other vertices inside)
2. Clipping these ears one by one
3. Repeating until only one triangle remains

For more information:
- http://cgm.cs.mcgill.ca/~godfried/teaching/cg-projects/97/Ian/algorithm2.html
- http://www.geometrictools.com/Documentation/TriangulationByEarClipping.pdf

Performance characteristics:
- Time complexity: O(n²) for n vertices
- Works with both convex and concave polygons
- Handles degenerate cases (nearly collinear vertices)

Limitations:
- If the input polygon is not simple (self-intersects), there will be output
but it is of unspecified quality (garbage in, garbage out).
- If the polygon vertices are very large or very close together then
GeometryUtils.isClockwise() may not be able to properly assess the winding
(because it uses floats). In that case the vertices should be adjusted,
eg by finding the smallest X and Y values and subtracting that from each vertex.

@author badlogicgames@gmail.com
@author Nicolas Gramlich (optimizations, collinear edge support)
@author Eric Spitz
@author Thomas ten Cate (bugfixes, optimizations)
@author Nathan Sweet (rewrite, return indices, no allocation, optimizations)
@author Jérémy Faivre (ported to Haxe)

## Instance Members

<div class="signature field-method has-description" id="computeTriangles"><code><span class="field-name">computeTriangles</span><span class="parenthesis">(</span><span class="arg-name">vertices</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">count</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">outputTriangles</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#computeTriangles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Triangulates the given (convex or concave) simple polygon to a list of triangle vertices.

The algorithm automatically detects and handles the winding order of the input,
always producing triangles in clockwise order. The triangulation is performed
in-place with minimal allocations.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `vertices` | [Array](/api-docs/clay-native/Array/)<[Float](/api-docs/clay-native/Float/)> | | Pairs describing vertices of the polygon [x0,y0, x1,y1, ...], in either clockwise or counterclockwise order.  |
| `offset` | [Int](/api-docs/clay-native/Int/) | `0` | The offset into the vertices array (in array elements, not vertices). Default: 0  |
| `count` | [Int](/api-docs/clay-native/Int/) | `-1` | The number of array elements to use (not vertex count). Use -1 to process all remaining elements. Default: -1  |
| `outputTriangles` | [Array](/api-docs/clay-native/Array/)<[Int](/api-docs/clay-native/Int/)> | *(optional)* | Optional array to fill with triangle indices. Will be cleared before use. If not provided, a new array is created.  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-native/Array/)<[Int](/api-docs/clay-native/Int/)> | Array of triangle indices in clockwise order. Each group of 3 indices forms one triangle. * ```haxe var triangulator = new EarClippingTriangulator(); var vertices = [0,0, 100,0, 100,100, 0,100]; // Square var indices = triangulator.computeTriangles(vertices); // indices = [0,1,2, 0,2,3] (two triangles) ``` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description" id="CONCAVE"><code><span class="field-name">CONCAVE</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#CONCAVE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="CONVEX"><code><span class="field-name">CONVEX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#CONVEX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="indices"><code><span class="field-name">indices</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#indices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="vertexTypes"><code><span class="field-name">vertexTypes</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#vertexTypes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="vertices"><code><span class="field-name">vertices</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#vertices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="vertexCount"><code><span class="field-name">vertexCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#vertexCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="triangles"><code><span class="field-name">triangles</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#triangles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="computeSpannedAreaSign"><code><span class="field-name">computeSpannedAreaSign</span><span class="parenthesis">(</span><span class="arg-name">p1x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">p1y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">p2x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">p2y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">p3x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">p3y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#computeSpannedAreaSign"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computes the sign of the area of the triangle formed by three points.

Uses the cross product to determine orientation:
- Positive: Counter-clockwise winding (convex in a clockwise polygon)
- Negative: Clockwise winding (concave in a clockwise polygon)
- Zero: Collinear points



| Name | Type | Description |
|------|------|-------------|
| `p1x` | [Float](/api-docs/clay-native/Float/) | X coordinate of first point  |
| `p1y` | [Float](/api-docs/clay-native/Float/) | Y coordinate of first point  |
| `p2x` | [Float](/api-docs/clay-native/Float/) | X coordinate of second point  |
| `p2y` | [Float](/api-docs/clay-native/Float/) | Y coordinate of second point  |
| `p3x` | [Float](/api-docs/clay-native/Float/) | X coordinate of third point  |
| `p3y` | [Float](/api-docs/clay-native/Float/) | Y coordinate of third point  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-native/Int/) | 1 for positive area, -1 for negative area, 0 for collinear |

<hr class="field-separator" />

<div class="signature field-method no-description" id="triangulate"><code><span class="field-name">triangulate</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#triangulate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="classifyVertex"><code><span class="field-name">classifyVertex</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#classifyVertex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determines if a vertex is convex or concave based on the sign of the area
spanned by it and its adjacent vertices.



| Name | Type | Description |
|------|------|-------------|
| `index` | [Int](/api-docs/clay-native/Int/) | The vertex index to classify  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-native/Int/) | CONVEX (1) if the vertex forms a convex angle, CONCAVE (-1) if it forms a concave angle, or 0 if the vertices are collinear |

<hr class="field-separator" />

<div class="signature field-method has-description" id="findEarTip"><code><span class="field-name">findEarTip</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#findEarTip"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds a vertex that can be safely removed as an ear tip.

An ear tip is a vertex that:
1. Is convex (or tangential)
2. Forms a triangle with its neighbors that contains no other vertices

If no valid ear is found (degenerate polygon), falls back to:
1. Any convex vertex
2. The first vertex (if all are concave - shouldn't happen in valid polygons)


| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-native/Int/) | Index of the ear tip vertex to remove |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isEarTip"><code><span class="field-name">isEarTip</span><span class="parenthesis">(</span><span class="arg-name">earTipIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isEarTip"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tests whether a vertex is a valid ear tip that can be clipped.

A vertex is an ear tip if:
1. It's convex (not concave)
2. The triangle formed with its neighbors contains no other polygon vertices

The test uses the sign of computed areas to determine if points are inside
the triangle. Points exactly on edges are considered inside.



| Name | Type | Description |
|------|------|-------------|
| `earTipIndex` | [Int](/api-docs/clay-native/Int/) | The vertex index to test  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | true if the vertex is a valid ear tip |

<hr class="field-separator" />

<div class="signature field-method has-description" id="cutEarTip"><code><span class="field-name">cutEarTip</span><span class="parenthesis">(</span><span class="arg-name">earTipIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#cutEarTip"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes an ear tip vertex and adds the resulting triangle to the output.

Creates a triangle from the ear tip and its two neighbors, then removes
the ear tip vertex from further consideration.



| Name | Type | Description |
|------|------|-------------|
| `earTipIndex` | [Int](/api-docs/clay-native/Int/) | The index of the ear tip vertex to remove |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getPreviousIndex"><code><span class="field-name">getPreviousIndex</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getPreviousIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `index` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getNextIndex"><code><span class="field-name">getNextIndex</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getNextIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `index` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:allow` | ceramic.Triangulate |

