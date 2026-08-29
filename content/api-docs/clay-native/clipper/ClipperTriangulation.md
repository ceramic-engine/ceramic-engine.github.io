---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clipper
title: ClipperTriangulation
target: Clay (Native)
permalink: api-docs/clay-native/clipper/ClipperTriangulation/
---

# ClipperTriangulation

<div class="type-hierarchy"><strong>clipper.ClipperTriangulation</strong> (Class)</div>

High-level triangulation function.

## Static Members

<div class="signature field-method has-description" id="triangulate"><code><span class="field-name">triangulate</span><span class="parenthesis">(</span><span class="arg-name">paths</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/Paths64/" class="type-link">Paths64</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">useDelaunay</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">AnonStruct</span></code><a class="header-anchor" href="#triangulate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Triangulates a set of paths using Constrained Delaunay Triangulation.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `paths` | [Paths64](/api-docs/clay-native/clipper/Paths64/) | | Input paths (polygons) to triangulate  |
| `useDelaunay` | [Bool](/api-docs/clay-native/Bool/) | `true` | Whether to use Delaunay optimization (default true)  |

| Returns | Description |
|---------|-------------|
| AnonStruct | Object containing result status and solution triangles |

