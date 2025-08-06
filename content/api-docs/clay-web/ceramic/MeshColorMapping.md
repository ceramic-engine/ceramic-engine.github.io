---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: MeshColorMapping
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/MeshColorMapping/
---

# MeshColorMapping

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/MeshColorMapping.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.MeshColorMapping</strong> (Abstract)</div>

Defines how colors are mapped to a mesh's geometry.

This enum controls the color mapping strategy for Mesh objects, determining
whether colors are applied uniformly, per-triangle, or per-vertex.
The choice affects both visual appearance and performance.

Performance considerations:
- MESH: Fastest, uses least memory (single color)
- INDICES: Moderate, one color per triangle
- VERTICES: Slowest, most flexible (smooth gradients possible)

```haxe
var mesh = new Mesh();

// Single color for entire mesh
mesh.colorMapping = MESH;
mesh.color = Color.RED;

// Different color per triangle
mesh.colorMapping = INDICES;
mesh.colors = [Color.RED, Color.GREEN, Color.BLUE];

// Color per vertex (for gradients)
mesh.colorMapping = VERTICES;
mesh.colors = [Color.RED, Color.GREEN, Color.BLUE, Color.YELLOW];
```

<div class="see"><strong>See:</strong> Mesh The mesh class that uses this color mapping</div>


## Metadata

| Name | Parameters |
|------|------------|
| `:enum` | - |

