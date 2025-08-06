---
layout: api-docs
category: api-docs
subCategory: doc
menu: Unity
title: Mesh
target: Unity
permalink: api-docs/unity/unityengine/Mesh/
---

# Mesh

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/unity/runtime/src/unityengine/Mesh.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/unityengine/Object/">Object</a> → <strong>unityengine.Mesh</strong> (extern class)</div>

Represents 3D geometry data for rendering.
Meshes contain vertex positions, normals, UVs, colors, and triangle indices.

In Ceramic's Unity backend, Meshes are used for efficient batch rendering
of 2D sprites and shapes. The backend dynamically builds meshes from
Ceramic's visual elements for optimal GPU performance.

Key components:
- Vertex buffer: Per-vertex data (position, UV, color, etc.)
- Index buffer: Triangle definitions referencing vertices
- SubMeshes: Separate sections for different materials

Modern Unity mesh API features:
- Direct buffer access for performance
- Multiple vertex streams
- 32-bit index support for large meshes
- Efficient update flags

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/unityengine/MeshTopology/">MeshTopology</a>, VertexAttributeDescriptor</div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="subMeshCount"><div class="plugin-name">unity</div><code><span class="field-name">subMeshCount</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#subMeshCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Number of sub-meshes in this mesh.
Each sub-mesh can use a different material.

Ceramic typically uses one sub-mesh per draw call,
allowing batching of similar visuals.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="SetVertexBufferParams"><div class="plugin-name">unity</div><code><span class="field-name">SetVertexBufferParams</span><span class="parenthesis">(</span><span class="arg-name">vertexCount</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">attributes</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/unityengine/rendering/VertexAttributeDescriptor/" class="type-link">unityengine.rendering.VertexAttributeDescriptor</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetVertexBufferParams"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Defines the vertex buffer layout and size.
Must be called before setting vertex data.



| Name | Type | Description |
|------|------|-------------|
| `vertexCount` | [Int](/api-docs/unity/Int/) | Total number of vertices  |
| `attributes` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[unityengine.rendering.VertexAttributeDescriptor](/api-docs/unity/unityengine/rendering/VertexAttributeDescriptor/)> | Array defining vertex data layout: - Position (Vector3) - UV coordinates (Vector2) - Color (Color32) - Normal (Vector3) etc. * This configures how vertex data is interpreted by shaders. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="SetVertexBufferData"><div class="plugin-name">unity</div><code><span class="field-name">SetVertexBufferData</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">dataStart</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">meshBufferStart</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">count</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">stream</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/rendering/MeshUpdateFlags/" class="type-link">unityengine.rendering.MeshUpdateFlags</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetVertexBufferData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Uploads vertex data to the GPU.
Data must match the layout from SetVertexBufferParams.



| Name | Type | Description |
|------|------|-------------|
| `data` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Single](/api-docs/unity/Single/)> | Source array of vertex data (interleaved floats)  |
| `dataStart` | [Int](/api-docs/unity/Int/) | Starting index in source array  |
| `meshBufferStart` | [Int](/api-docs/unity/Int/) | Starting vertex index in mesh  |
| `count` | [Int](/api-docs/unity/Int/) | Number of floats to copy  |
| `stream` | [Int](/api-docs/unity/Int/) | Vertex stream index (0 for main stream)  |
| `flags` | [unityengine.rendering.MeshUpdateFlags](/api-docs/unity/unityengine/rendering/MeshUpdateFlags/) | Update behavior: - Default: Normal update - DontValidateIndices: Skip validation for performance - DontResetBoneBounds: Preserve skeletal bounds * For Ceramic, this typically contains position, UV, and color data. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="SetIndexBufferParams"><div class="plugin-name">unity</div><code><span class="field-name">SetIndexBufferParams</span><span class="parenthesis">(</span><span class="arg-name">indexCount</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/rendering/IndexFormat/" class="type-link">unityengine.rendering.IndexFormat</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetIndexBufferParams"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Defines the index buffer size and format.
Must be called before setting index data.



| Name | Type | Description |
|------|------|-------------|
| `indexCount` | [Int](/api-docs/unity/Int/) | Total number of indices (3 per triangle)  |
| `format` | [unityengine.rendering.IndexFormat](/api-docs/unity/unityengine/rendering/IndexFormat/) | Index data type: - UInt16: 16-bit indices (max 65k vertices) - UInt32: 32-bit indices (max 4B vertices) * Ceramic uses UInt16 for most cases as meshes are rebuilt frequently. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="SetIndexBufferData"><div class="plugin-name">unity</div><code><span class="field-name">SetIndexBufferData</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/UInt16/" class="type-link">cs.types.UInt16</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">dataStart</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">meshBufferStart</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">count</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/rendering/MeshUpdateFlags/" class="type-link">unityengine.rendering.MeshUpdateFlags</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetIndexBufferData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Uploads triangle index data to the GPU.
Defines which vertices form triangles.



| Name | Type | Description |
|------|------|-------------|
| `data` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.UInt16](/api-docs/unity/cs/types/UInt16/)> | Source array of indices (triangle vertex references)  |
| `dataStart` | [Int](/api-docs/unity/Int/) | Starting index in source array  |
| `meshBufferStart` | [Int](/api-docs/unity/Int/) | Starting index in mesh buffer  |
| `count` | [Int](/api-docs/unity/Int/) | Number of indices to copy  |
| `flags` | [unityengine.rendering.MeshUpdateFlags](/api-docs/unity/unityengine/rendering/MeshUpdateFlags/) | Update behavior flags * Indices should be in groups of 3 for triangle topology. Winding order affects face culling (clockwise = front). |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="SetSubMesh"><div class="plugin-name">unity</div><code><span class="field-name">SetSubMesh</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">desc</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/rendering/SubMeshDescriptor/" class="type-link">unityengine.rendering.SubMeshDescriptor</a><span class="operator">,</span> <span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/rendering/MeshUpdateFlags/" class="type-link">unityengine.rendering.MeshUpdateFlags</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetSubMesh"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Defines a sub-mesh within the mesh.
Each sub-mesh can render with a different material.



| Name | Type | Description |
|------|------|-------------|
| `index` | [Int](/api-docs/unity/Int/) | Sub-mesh index (0 to subMeshCount-1)  |
| `desc` | [unityengine.rendering.SubMeshDescriptor](/api-docs/unity/unityengine/rendering/SubMeshDescriptor/) | Sub-mesh definition: - indexStart: First index in buffer - indexCount: Number of indices - topology: Usually MeshTopology.Triangles  |
| `flags` | [unityengine.rendering.MeshUpdateFlags](/api-docs/unity/unityengine/rendering/MeshUpdateFlags/) | Update behavior flags * Ceramic uses sub-meshes to batch visuals by texture/shader. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">unity</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new empty Mesh.
Must set vertex and index data before use.

Creating a simple quad:
```haxe
var mesh = new Mesh();
mesh.SetVertexBufferParams(4, vertexLayout);
// Set vertices...
mesh.SetIndexBufferParams(6, IndexFormat.UInt16);
// Set indices...
```

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |

