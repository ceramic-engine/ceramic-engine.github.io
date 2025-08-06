---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: MeshExtensions
target: Unity
permalink: api-docs/unity/ceramic/MeshExtensions/
---

# MeshExtensions

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/MeshExtensions.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.MeshExtensions</strong> (Class)</div>

Static extension class providing utility methods for Mesh manipulation.

This class contains helper methods for common mesh operations such as:
- Creating quad geometry
- Setting dark colors for special shaders
- Creating arc/ring/pie geometry
- Creating grid-based meshes

These methods are available on any Mesh instance through Haxe's static extension feature.

```haxe
using ceramic.MeshExtensions;

var mesh = new Mesh();
mesh.createQuad(100, 100); // Creates a 100x100 quad
mesh.createArc(50, 180, 10, 32, INSIDE); // Creates a semi-circle arc
```

<div class="see"><strong>See:</strong> Mesh The base mesh class these extensions apply to, MeshUtils For lower-level mesh manipulation utilities</div>


## Static Members

<div class="signature field-method has-description" id="createQuad"><code><span class="field-name">createQuad</span><span class="parenthesis">(</span><span class="arg-name">mesh</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Mesh/" class="type-link">Mesh</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">floatsPerVertex</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#createQuad"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generates vertices, indices and uvs to form a rectangular quad.

Creates a quad with 4 vertices arranged as:
```
0 -- 1
|    |
3 -- 2
```

The quad is positioned with its top-left corner at (0,0).
UV coordinates are mapped from 0 to 1 across the quad.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `mesh` | [Mesh](/api-docs/unity/ceramic/Mesh/) | | The mesh to configure as a quad  |
| `width` | [Float](/api-docs/unity/Float/) | | Width of the quad in pixels  |
| `height` | [Float](/api-docs/unity/Float/) | | Height of the quad in pixels  |
| `floatsPerVertex` | [Int](/api-docs/unity/Int/) | `-1` | Number of floats per vertex in the vertex buffer. - 2: Standard quad (x, y) - 6: Quad with dark color support (x, y, r, g, b, a) - -1: Auto-detect from mesh.customFloatAttributesSize Must be at least 2. * ```haxe var mesh = new Mesh(); mesh.createQuad(200, 150); // Creates a 200x150 quad mesh.texture = myTexture; // Apply texture ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setDarkColor"><code><span class="field-name">setDarkColor</span><span class="parenthesis">(</span><span class="arg-name">mesh</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Mesh/" class="type-link">Mesh</a><span class="operator">,</span> <span class="arg-name">darkColor</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setDarkColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Assigns a dark color to all vertices in the mesh.

This method is used with special shaders that support a secondary "dark" color
for advanced rendering effects. The dark color is stored in vertex attributes
positions 2-5 (r, g, b, a) of each vertex.

Requirements:
- Mesh must have 6 floats per vertex
- Vertex layout: [x, y, darkR, darkG, darkB, darkA]



| Name | Type | Description |
|------|------|-------------|
| `mesh` | [Mesh](/api-docs/unity/ceramic/Mesh/) | The mesh to modify. Must have 6 floats per vertex.  |
| `darkColor` | [Color](/api-docs/unity/ceramic/Color/) | The dark color to apply to all vertices. Alpha is automatically set to 1.0. * ```haxe var mesh = new Mesh(); mesh.createQuad(100, 100, 6); // 6 floats per vertex mesh.setDarkColor(Color.PURPLE); // Set dark color mesh.shader = myDarkColorShader; // Use compatible shader ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setDarkAlphaColor"><code><span class="field-name">setDarkAlphaColor</span><span class="parenthesis">(</span><span class="arg-name">mesh</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Mesh/" class="type-link">Mesh</a><span class="operator">,</span> <span class="arg-name">darkAlphaColor</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setDarkAlphaColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Assigns a dark color with alpha to all vertices in the mesh.

Similar to setDarkColor but preserves the alpha channel from the provided color.
Used with special shaders that support transparent dark colors for effects
like shadows or overlays.

Requirements:
- Mesh must have 6 floats per vertex
- Vertex layout: [x, y, darkR, darkG, darkB, darkA]



| Name | Type | Description |
|------|------|-------------|
| `mesh` | [Mesh](/api-docs/unity/ceramic/Mesh/) | The mesh to modify. Must have 6 floats per vertex.  |
| `darkAlphaColor` | [AlphaColor](/api-docs/unity/ceramic/AlphaColor/) | The dark color with alpha to apply to all vertices. * ```haxe var mesh = new Mesh(); mesh.createQuad(100, 100, 6); // 6 floats per vertex var shadowColor = AlphaColor.fromRGBA(0, 0, 0, 128); // 50% black mesh.setDarkAlphaColor(shadowColor); ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createArc"><code><span class="field-name">createArc</span><span class="parenthesis">(</span><span class="arg-name">mesh</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Mesh/" class="type-link">Mesh</a><span class="operator">,</span> <span class="arg-name">radius</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">angle</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">thickness</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">sides</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">borderPosition</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#createArc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generates vertices and indices to create arc, pie, ring or disc geometry.

This versatile method can create various circular shapes:
- Arc: Partial circle outline (angle < 360, thickness < radius)
- Ring: Full circle outline (angle = 360, thickness < radius)
- Pie: Filled partial circle (angle < 360, thickness = radius, borderPosition = INSIDE)
- Disc: Filled full circle (angle = 360, thickness = radius, borderPosition = INSIDE)

The shape is centered at (radius, radius) to ensure all vertices are positive.



| Name | Type | Description |
|------|------|-------------|
| `mesh` | [Mesh](/api-docs/unity/ceramic/Mesh/) | The mesh to configure with arc geometry  |
| `radius` | [Float](/api-docs/unity/Float/) | Outer radius of the arc in pixels  |
| `angle` | [Float](/api-docs/unity/Float/) | Arc angle in degrees (0-360). 360 creates a full circle.  |
| `thickness` | [Float](/api-docs/unity/Float/) | Width of the arc stroke. Set equal to radius with INSIDE position for filled shapes.  |
| `sides` | [Int](/api-docs/unity/Int/) | Number of segments. More sides = smoother curves but more vertices. Recommended: 32 for small arcs, 64+ for large arcs.  |
| `borderPosition` | Anonymous | Controls thickness direction: - INSIDE: Thickness extends inward from radius - OUTSIDE: Thickness extends outward from radius - MIDDLE: Thickness extends equally in both directions * ```haxe // Create a 90-degree arc mesh.createArc(50, 90, 10, 32, MIDDLE); * // Create a filled semi-circle (pie) mesh.createArc(50, 180, 50, 32, INSIDE); * // Create a ring (donut) mesh.createArc(50, 360, 20, 64, MIDDLE); ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createVerticesGrid"><code><span class="field-name">createVerticesGrid</span><span class="parenthesis">(</span><span class="arg-name">mesh</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Mesh/" class="type-link">Mesh</a><span class="operator">,</span> <span class="arg-name">columns</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">rows</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">staggerX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">staggerY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">attrLength</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">attrValues</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#createVerticesGrid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a grid of vertices with optional staggering and custom attributes.

Generates a rectangular grid of vertices that can be used for:
- Terrain meshes
- Grid-based effects
- Deformable surfaces
- Tilemap rendering

Vertices are arranged in row-major order (left to right, top to bottom).

<div class="see"><strong>See:</strong> createIndicesGrid To create matching triangle indices, createUVsGrid To create matching UV coordinates, MeshUtils.createVerticesGrid The underlying implementation</div>


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `mesh` | [Mesh](/api-docs/unity/ceramic/Mesh/) | | The mesh to populate with grid vertices  |
| `columns` | [Int](/api-docs/unity/Int/) | | Number of columns (vertices per row)  |
| `rows` | [Int](/api-docs/unity/Int/) | | Number of rows  |
| `width` | [Float](/api-docs/unity/Float/) | | Total width of the grid in pixels  |
| `height` | [Float](/api-docs/unity/Float/) | | Total height of the grid in pixels  |
| `staggerX` | [Float](/api-docs/unity/Float/) | `0` | Horizontal offset applied to odd rows (for hexagonal grids)  |
| `staggerY` | [Float](/api-docs/unity/Float/) | `0` | Vertical offset applied to odd columns (for diamond grids)  |
| `attrLength` | [Int](/api-docs/unity/Int/) | `0` | Number of custom float attributes per vertex (beyond x,y)  |
| `attrValues` | [Array](/api-docs/unity/Array/)<[Float](/api-docs/unity/Float/)> | *(optional)* | Optional array of custom attribute values. Length must equal (columns+1) * (rows+1) * attrLength * ```haxe // Create a 10x10 grid for terrain deformation mesh.createVerticesGrid(10, 10, 400, 400); mesh.createIndicesGrid(10, 10); * // Create hexagonal grid mesh.createVerticesGrid(10, 10, 400, 400, cellWidth * 0.5, 0); ``` * |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createIndicesGrid"><code><span class="field-name">createIndicesGrid</span><span class="parenthesis">(</span><span class="arg-name">mesh</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Mesh/" class="type-link">Mesh</a><span class="operator">,</span> <span class="arg-name">columns</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">rows</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">mirrorX</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">mirrorY</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">mirrorFlip</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#createIndicesGrid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates triangle indices for a grid of vertices.

Generates indices that connect grid vertices into triangles.
Each grid cell is split into two triangles. The mirroring options
allow for alternating triangle orientations, useful for:
- Reducing visual patterns in deformed meshes
- Creating more natural-looking terrain
- Special tessellation patterns

Default triangle pattern (no mirroring):
```
0---1
|\  |
| \ |
|  \|
3---2
```

<div class="see"><strong>See:</strong> createVerticesGrid Must be called first to create vertices, MeshUtils.createIndicesGrid The underlying implementation</div>


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `mesh` | [Mesh](/api-docs/unity/ceramic/Mesh/) | | The mesh to populate with indices  |
| `columns` | [Int](/api-docs/unity/Int/) | | Number of columns in the vertex grid  |
| `rows` | [Int](/api-docs/unity/Int/) | | Number of rows in the vertex grid  |
| `mirrorX` | [Bool](/api-docs/unity/Bool/) | `false` | Mirror triangle orientation in odd columns  |
| `mirrorY` | [Bool](/api-docs/unity/Bool/) | `false` | Mirror triangle orientation in odd rows  |
| `mirrorFlip` | [Bool](/api-docs/unity/Bool/) | `false` | Inverts the mirroring pattern (even instead of odd) * ```haxe // Standard grid mesh.createIndicesGrid(10, 10); * // Alternating pattern for better deformation mesh.createIndicesGrid(10, 10, true, true); ``` * |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createUVsGrid"><code><span class="field-name">createUVsGrid</span><span class="parenthesis">(</span><span class="arg-name">mesh</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Mesh/" class="type-link">Mesh</a><span class="operator">,</span> <span class="arg-name">columns</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">rows</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">offsetX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">offsetY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#createUVsGrid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates UV coordinates for a grid of vertices.

Generates UV coordinates that map linearly across the grid,
stretching any applied texture across the entire mesh.
UVs range from (0+offsetX, 0+offsetY) to (1+offsetX, 1+offsetY).

This is useful for:
- Applying textures to terrain meshes
- Creating texture-based deformation maps
- Mapping effects across grid surfaces

<div class="see"><strong>See:</strong> createVerticesGrid Must be called first to create vertices, MeshUtils.createUVsGrid The underlying implementation</div>


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `mesh` | [Mesh](/api-docs/unity/ceramic/Mesh/) | | The mesh to populate with UV coordinates  |
| `columns` | [Int](/api-docs/unity/Int/) | | Number of columns in the vertex grid  |
| `rows` | [Int](/api-docs/unity/Int/) | | Number of rows in the vertex grid  |
| `offsetX` | [Float](/api-docs/unity/Float/) | `0` | UV offset in the X direction (texture scrolling)  |
| `offsetY` | [Float](/api-docs/unity/Float/) | `0` | UV offset in the Y direction (texture scrolling) * ```haxe // Standard UV mapping mesh.createUVsGrid(10, 10); * // Scrolling texture effect mesh.createUVsGrid(10, 10, time * 0.1, 0); ``` * |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

