---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: MeshUtils
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/MeshUtils/
---

# MeshUtils

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/MeshUtils.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.MeshUtils</strong> (Class)</div>

Low-level utility class for generating mesh data arrays.

MeshUtils provides static methods for creating vertices, indices, and UV coordinates
for grid-based meshes. These utilities are the foundation for procedural mesh generation
and are used by MeshExtensions for higher-level operations.

Key features:
- Grid vertex generation with staggering support
- Triangle index generation with mirroring options
- UV coordinate mapping for grid texturing
- Support for custom vertex attributes
- Efficient array reuse

Grid coordinate system:
```
0,0 --- 1,0 --- 2,0
 |       |       |
0,1 --- 1,1 --- 2,1
 |       |       |
0,2 --- 1,2 --- 2,2
```

```haxe
// Create a 5x5 grid mesh
var vertices = MeshUtils.createVerticesGrid(null, 5, 5, 200, 200);
var indices = MeshUtils.createIndicesGrid(null, 5, 5);
var uvs = MeshUtils.createUVsGrid(null, 5, 5);

var mesh = new Mesh();
mesh.color = Color.WHITE;
mesh.vertices = vertices;
mesh.indices = indices;
mesh.uvs = uvs;
```

<div class="see"><strong>See:</strong> MeshExtensions For higher-level mesh creation methods, Mesh The mesh class that uses these utilities</div>


## Static Members

<div class="signature field-method has-description" id="createVerticesGrid"><code><span class="field-name">createVerticesGrid</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">vertices</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">columns</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">rows</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">staggerX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">staggerY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">attrLength</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">attrValues</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#createVerticesGrid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a grid of vertices with optional staggering and custom attributes.

Generates vertices arranged in a rectangular grid pattern. Each vertex consists
of x,y coordinates followed by optional custom attributes. The total number of
vertices is (columns+1) × (rows+1).

Staggering creates offset patterns useful for:
- Hexagonal grids (staggerX with odd rows offset)
- Diamond/isometric grids (both staggerX and staggerY)
- Wave effects and deformations

Vertex data layout: [x, y, ...customAttributes]



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `vertices` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* | Existing array to reuse, or null to create new array. If provided and larger than needed, will be truncated.  |
| `columns` | [Int](/api-docs/clay-web/Int/) | | Number of columns in the grid (cells, not vertices)  |
| `rows` | [Int](/api-docs/clay-web/Int/) | | Number of rows in the grid (cells, not vertices)  |
| `width` | [Float](/api-docs/clay-web/Float/) | | Total width of the grid in pixels  |
| `height` | [Float](/api-docs/clay-web/Float/) | | Total height of the grid in pixels  |
| `staggerX` | [Float](/api-docs/clay-web/Float/) | `0` | Horizontal offset applied to odd-numbered rows. Use cellWidth*0.5 for hexagonal grids.  |
| `staggerY` | [Float](/api-docs/clay-web/Float/) | `0` | Vertical offset applied to odd-numbered columns. Rarely used, but can create diamond patterns.  |
| `attrLength` | [Int](/api-docs/clay-web/Int/) | `0` | Number of custom float attributes per vertex. Common values: 2 for UV, 4 for color, etc.  |
| `attrValues` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* | Array of attribute values to assign. If null, attributes are initialized to 0. Length must equal (columns+1)×(rows+1)×attrLength.  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | Array of vertex data with length (columns+1)×(rows+1)×(2+attrLength) * ```haxe // Simple 10x10 grid var vertices = MeshUtils.createVerticesGrid(null, 10, 10, 400, 400); * // Hexagonal grid with horizontal stagger var cellWidth = 40; var vertices = MeshUtils.createVerticesGrid( null, 10, 10, 400, 400, cellWidth * 0.5, 0 ); * // Grid with per-vertex colors (4 floats: r,g,b,a) var colors = [ // color data ]; var vertices = MeshUtils.createVerticesGrid( null, 10, 10, 400, 400, 0, 0, 4, colors ); ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createIndicesGrid"><code><span class="field-name">createIndicesGrid</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">indices</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">columns</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">rows</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">mirrorX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">mirrorY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">mirrorFlip</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#createIndicesGrid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates triangle indices for a grid of vertices.

Generates indices that connect grid vertices into triangles, with each grid cell
split into two triangles. The total number of triangles is columns×rows×2.

Triangle winding order (default, no mirroring):
```
TL --- TR
|\     |
| \    |  Cell split: TL-TR-BL and TR-BR-BL
|  \   |
|   \  |
|    \ |
BL --- BR
```

Mirroring options change the diagonal direction in alternating cells,
which helps:
- Reduce visual patterns in deformed meshes
- Create more natural-looking terrain
- Improve shading on curved surfaces



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `indices` | [Array](/api-docs/clay-web/Array/)<[Int](/api-docs/clay-web/Int/)> | *(optional)* | Existing array to reuse, or null to create new array. If provided and larger than needed, will be truncated.  |
| `columns` | [Int](/api-docs/clay-web/Int/) | | Number of columns in the grid (cells, not vertices)  |
| `rows` | [Int](/api-docs/clay-web/Int/) | | Number of rows in the grid (cells, not vertices)  |
| `mirrorX` | [Bool](/api-docs/clay-web/Bool/) | `false` | Mirror triangle diagonal in odd-numbered columns. Creates horizontal alternation pattern.  |
| `mirrorY` | [Bool](/api-docs/clay-web/Bool/) | `false` | Mirror triangle diagonal in odd-numbered rows. Creates vertical alternation pattern.  |
| `mirrorFlip` | [Bool](/api-docs/clay-web/Bool/) | `false` | Inverts the mirroring pattern. If true, mirrors even cells instead of odd.  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-web/Array/)<[Int](/api-docs/clay-web/Int/)> | Array of indices with length columns×rows×6 (2 triangles × 3 vertices per cell) * ```haxe // Standard grid triangulation var indices = MeshUtils.createIndicesGrid(null, 10, 10); * // Alternating pattern for natural terrain var indices = MeshUtils.createIndicesGrid( null, 10, 10, true, true // Mirror both X and Y ); * // Custom pattern with flipped mirroring var indices = MeshUtils.createIndicesGrid( null, 10, 10, true, false, true // Mirror X on even columns ); ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createUVsGrid"><code><span class="field-name">createUVsGrid</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">uvs</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">columns</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">rows</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">offsetX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">offsetY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#createUVsGrid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates UV coordinates for a grid of vertices.

Generates UV coordinates that map linearly across the grid from 0 to 1,
stretching any applied texture across the entire mesh. Each vertex gets
a UV coordinate based on its grid position.

UV mapping:
- Top-left vertex: (0, 0)
- Top-right vertex: (1, 0)
- Bottom-left vertex: (0, 1)
- Bottom-right vertex: (1, 1)

Offsets allow texture scrolling and tiling effects.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `uvs` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* | Existing array to reuse, or null to create new array. If provided and larger than needed, will be truncated.  |
| `columns` | [Int](/api-docs/clay-web/Int/) | | Number of columns in the grid (cells, not vertices)  |
| `rows` | [Int](/api-docs/clay-web/Int/) | | Number of rows in the grid (cells, not vertices)  |
| `offsetX` | [Float](/api-docs/clay-web/Float/) | `0` | Horizontal UV offset for texture scrolling. Values > 1 create tiling if texture wrap is enabled.  |
| `offsetY` | [Float](/api-docs/clay-web/Float/) | `0` | Vertical UV offset for texture scrolling. Values > 1 create tiling if texture wrap is enabled.  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | Array of UV coordinates with length (columns+1)×(rows+1)×2 * ```haxe // Standard UV mapping (texture stretched across grid) var uvs = MeshUtils.createUVsGrid(null, 10, 10); * // Scrolling texture effect var uvs = MeshUtils.createUVsGrid( null, 10, 10, time * 0.1, 0 // Scroll horizontally over time ); * // Tiled texture (requires texture wrap mode) var uvs = MeshUtils.createUVsGrid( null, 10, 10, 0, 0 // UVs will go from 0 to 1 ); // Then scale UVs by tile count in shader or modify here ``` |

