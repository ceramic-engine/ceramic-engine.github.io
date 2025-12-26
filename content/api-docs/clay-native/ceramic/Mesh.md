---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Mesh
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/Mesh/
---

# Mesh

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Mesh.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-native/ceramic/Visual/">Visual</a> → <strong>ceramic.Mesh</strong> (Class) → <a href="/api-docs/clay-native/ceramic/AntialiasedTriangle/">AntialiasedTriangle</a>, <a href="/api-docs/clay-native/ceramic/Arc/">Arc</a>, <a href="/api-docs/clay-native/ceramic/Border/">Border</a>, <a href="/api-docs/clay-native/ceramic/CeramicLogo/">CeramicLogo</a>, <a href="/api-docs/clay-native/ceramic/Line/">Line</a>, <a href="/api-docs/clay-native/ceramic/Ngon/">Ngon</a>, <a href="/api-docs/clay-native/ceramic/Shape/">Shape</a>, <a href="/api-docs/clay-native/ceramic/TilemapMesh/">TilemapMesh</a>, <a href="/api-docs/clay-native/ceramic/Triangle/">Triangle</a>, <a href="/api-docs/clay-native/elements/BiBorderedTriangle/">elements.BiBorderedTriangle</a></div>

A flexible visual for drawing custom shapes composed of triangles.

Mesh allows you to create complex 2D geometry by defining vertices (points),
indices (triangles), and optional attributes like colors and texture coordinates.
This is the foundation for advanced visuals like deformable sprites, particle
systems, and custom shape rendering.

Features:
- Custom vertex positions for any shape
- Per-vertex coloring with color interpolation
- Texture mapping with UV coordinates
- Custom shader attributes support
- Complex hit testing at triangle level
- Optimized rendering through batching

The mesh is defined by:
- `vertices`: Array of x,y coordinates for each vertex
- `indices`: Array defining triangles (every 3 indices form a triangle)
- `colors`: Optional per-vertex colors
- `uvs`: Texture coordinates when using a texture

```haxe
// Create a colored triangle
var mesh = new Mesh();
mesh.vertices = [
    100, 100,  // Vertex 0
    200, 100,  // Vertex 1
    150, 200   // Vertex 2
];
mesh.indices = [0, 1, 2];
mesh.colors = [
    Color.RED,
    Color.GREEN,
    Color.BLUE
];

// Create a textured quad
var mesh = new Mesh();
mesh.color = Color.WHITE; // Use fill color instead of explicit colors array
mesh.texture = assets.texture('image');
mesh.vertices = [
    0, 0,      // Top-left
    100, 0,    // Top-right
    100, 100,  // Bottom-right
    0, 100     // Bottom-left
];
mesh.indices = [
    0, 1, 2,   // First triangle
    0, 2, 3    // Second triangle
];
mesh.uvs = [
    0, 0,      // Top-left UV
    1, 0,      // Top-right UV
    1, 1,      // Bottom-right UV
    0, 1       // Bottom-left UV
];
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/Visual/">Visual</a>, <a href="/api-docs/clay-native/ceramic/Quad/">Quad</a>, <a href="/api-docs/clay-native/ceramic/MeshPool/">MeshPool</a></div>


## Instance Members

<div class="signature field-var has-description" id="colorMapping"><code><span class="field-name">colorMapping</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/MeshColorMapping/" class="type-link">MeshColorMapping</a></code><a class="header-anchor" href="#colorMapping"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Defines how colors are applied to the mesh.
- MESH: Use the mesh's color array
- TEXTURE: Use texture colors only
- VERTICES: Multiply vertex colors with texture

<hr class="field-separator" />

<div class="signature field-var has-description" id="customFloatAttributesSize"><code><span class="field-name">customFloatAttributesSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#customFloatAttributesSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The number of additional float values per vertex for custom shader attributes.
Default is 0 (only x,y coordinates). Set this when using shaders that require
extra per-vertex data like secondary UVs, vertex weights, etc.
The total floats per vertex becomes: 2 + customFloatAttributesSize

<hr class="field-separator" />

<div class="signature field-var has-description" id="complexHit"><code><span class="field-name">complexHit</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#complexHit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When set to `true`, hit testing checks individual triangles instead of just bounds.
This provides accurate hit detection for complex shapes but is more expensive.
Use only when you need precise interaction with non-rectangular meshes.
Default is false (uses bounding box).

<hr class="field-separator" />

<div class="signature field-var has-description" id="color"><code><span class="field-name">color</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#color"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Convenience property for setting a single color for the entire mesh.
When set, updates the colors array with this color for all vertices.
When getting, returns the first vertex color or WHITE if no colors are set.
For multi-colored meshes, use the colors array directly.

<hr class="field-separator" />

<div class="signature field-var has-description" id="vertices"><code><span class="field-name">vertices</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#vertices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An array of vertex positions as alternating x,y coordinates.
Each vertex requires 2 floats (or 2 + customFloatAttributesSize if using custom attributes).
Example: [x0, y0, x1, y1, x2, y2, ...]
These define the shape of your mesh.

<hr class="field-separator" />

<div class="signature field-var has-description" id="vertices32"><code><span class="field-name">vertices32</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Float32Array/" class="type-link">Float32Array</a></code><a class="header-anchor" href="#vertices32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Alternative way of storing vertices, which is using twice less
memory than `vertices`, at the cost of less precision and needing a fixed size.
If set, this is used instead of the `vertices` array.

<hr class="field-separator" />

<div class="signature field-var has-description" id="indices"><code><span class="field-name">indices</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#indices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An array of vertex indices defining triangles.
Every 3 consecutive indices form one triangle.
Indices refer to positions in the vertices array (0-based).
Example: [0, 1, 2, 0, 2, 3] defines two triangles sharing vertices 0 and 2.

<hr class="field-separator" />

<div class="signature field-var has-description" id="colors"><code><span class="field-name">colors</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#colors"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An array of colors for each vertex.
Colors are interpolated across triangles for smooth gradients.
Each color includes alpha channel for transparency.
Array length should match the number of vertices.

<hr class="field-separator" />

<div class="signature field-var has-description" id="floatColors"><code><span class="field-name">floatColors</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Float32Array/" class="type-link">Float32Array</a></code><a class="header-anchor" href="#floatColors"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

High-precision color array using 4 floats per color (RGBA).
Use this instead of `colors` when you need:
- Extra color precision beyond 8-bit per channel
- To avoid CPU premultiplication of alpha
- HDR color values
Format: [r0, g0, b0, a0, r1, g1, b1, a1, ...]
If set, this is used instead of the `colors` array.

<hr class="field-separator" />

<div class="signature field-var has-description" id="texture"><code><span class="field-name">texture</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Texture/" class="type-link">Texture</a></code><a class="header-anchor" href="#texture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The texture to apply to this mesh.
When set, you must also provide UV coordinates in the `uvs` array.
The texture's asset reference count is automatically managed.
Set to null for untextured meshes.

<hr class="field-separator" />

<div class="signature field-var has-description" id="uvs"><code><span class="field-name">uvs</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#uvs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Texture coordinates for each vertex, ranging from 0.0 to 1.0.
Required when using a texture. Array format: [u0, v0, u1, v1, ...]
- (0,0) = top-left of texture
- (1,1) = bottom-right of texture
Values outside 0-1 range will wrap or clamp based on texture settings.

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="computeSize"><code><span class="field-name">computeSize</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compute and set the mesh's width and height based on vertex positions.
Scans all vertices to find the maximum x and y coordinates.
Useful after modifying vertices to update the mesh bounds.

<hr class="field-separator" />

<div class="signature field-method has-description" id="grid"><code><span class="field-name">grid</span><span class="parenthesis">(</span><span class="arg-name">cols</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">rows</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#grid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compute vertices and indices to obtain a grid with `cols` columns
and `rows` rows at the requested `width` and `height`.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `cols` | [Int](/api-docs/clay-native/Int/) | | The number of columnns in the grid  |
| `rows` | [Int](/api-docs/clay-native/Int/) | | The number of rows in the grid  |
| `width` | [Float](/api-docs/clay-native/Float/) | `-1` | The width of the grid  |
| `height` | [Float](/api-docs/clay-native/Float/) | `-1` | The height of the grid |

<hr class="field-separator" />

<div class="signature field-method has-description" id="gridFromTexture"><code><span class="field-name">gridFromTexture</span><span class="parenthesis">(</span><span class="arg-name">cols</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">rows</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#gridFromTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compute vertices, indices and uvs to obtain a grid with `cols` columns
and `rows` rows to fit the given texture or mesh's current texture.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `cols` | [Int](/api-docs/clay-native/Int/) | | The number of columnns in the grid  |
| `rows` | [Int](/api-docs/clay-native/Int/) | | The number of rows in the grid  |
| `texture` | [Texture](/api-docs/clay-native/ceramic/Texture/) | *(optional)* | The texture used to generate the grid. If not provided, will use mesh's current texture |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new Mesh.
The mesh starts empty - you must set vertices, indices, and other
properties before it will render anything.

## Private Members

<div class="signature field-method no-description" id="textureDestroyed"><code><span class="field-name">textureDestroyed</span><span class="parenthesis">(</span><span class="arg-name">_</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Entity/" class="type-link">Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#textureDestroyed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `_` | [Entity](/api-docs/clay-native/ceramic/Entity/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="hitTest"><code><span class="field-name">hitTest</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">matrix</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Transform/" class="type-link">Transform</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hitTest"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Test if a point hits this mesh.
If complexHit is true, tests against individual triangles for accuracy.
Otherwise uses the bounding box for performance.


| Name | Type | Description |
|------|------|-------------|
| `x` | [Float](/api-docs/clay-native/Float/) | X coordinate to test  |
| `y` | [Float](/api-docs/clay-native/Float/) | Y coordinate to test  |
| `matrix` | [Transform](/api-docs/clay-native/ceramic/Transform/) | Transform matrix for coordinate conversion  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if the point hits the mesh |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:allow` | ceramic.MeshPool |

