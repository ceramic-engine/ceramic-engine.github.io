---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: MeshPool
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/MeshPool/
---

# MeshPool

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/MeshPool.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.MeshPool</strong> (Class)</div>

A global object pool for efficiently reusing Mesh instances and their arrays.

MeshPool provides a memory-efficient way to manage Mesh objects by recycling
them instead of creating new instances. This reduces garbage collection pressure
and improves performance in scenarios with frequent mesh creation/destruction.

The pool also manages arrays used by meshes (vertices, indices, colors, uvs)
to further optimize memory usage.

Key features:
- Mesh instance recycling with automatic cleanup
- Array buffer recycling for vertices, indices, colors, and UVs
- Thread-safe array clearing on native platforms
- Debug tracking for allocation and recycling

```haxe
// Get a mesh from pool (creates new if pool is empty)
var mesh = MeshPool.get();
mesh.createQuad(100, 100);
mesh.texture = myTexture;
parent.add(mesh);

// When done, recycle the mesh back to pool
MeshPool.recycle(mesh);
// The mesh is automatically cleaned up and ready for reuse
```

<div class="see"><strong>See:</strong> Mesh The mesh class being pooled</div>


## Static Members

<div class="signature field-method has-description" id="get"><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Mesh/" class="type-link">Mesh</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets a mesh from the pool or creates a new one if the pool is empty.

The returned mesh is:
- Active and ready to be displayed
- Reset to default values (visible, touchable)
- Provided with empty arrays for indices, vertices, colors, and UVs

Debug mode tracks allocation positions for memory leak detection.


| Returns | Description |
|---------|-------------|
| [Mesh](/api-docs/clay-web/ceramic/Mesh/) | A ready-to-use Mesh instance * ```haxe var mesh = MeshPool.get(); mesh.createQuad(100, 100); parent.add(mesh); ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="recycle"><code><span class="field-name">recycle</span><span class="parenthesis">(</span><span class="arg-name">mesh</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Mesh/" class="type-link">Mesh</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#recycle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a mesh to the pool for reuse.

The mesh is automatically:
- Cleared of all visual data
- Removed from its parent (if any)
- Reset to default property values
- Made inactive (not displayed)
- Arrays recycled to their respective pools

Debug mode checks for double-recycling and tracks recycling positions.



| Name | Type | Description |
|------|------|-------------|
| `mesh` | [Mesh](/api-docs/clay-web/ceramic/Mesh/) | The mesh to recycle  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clear"><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clears the entire mesh pool and destroys all pooled meshes.

This permanently destroys all meshes in the pool, freeing their resources.
Use this when:
- Switching between major application states
- Freeing memory before loading new content
- Shutting down the application

Note: Array pools are not cleared by this method.

```haxe
// Before loading a new level
MeshPool.clear();
// All pooled meshes are now destroyed
```

## Private Members

<div class="signature field-var has-description" id="availableMeshes"><code><span class="field-name">availableMeshes</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/Mesh/" class="type-link">Mesh</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#availableMeshes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pool of available mesh instances ready for reuse.

<hr class="field-separator" />

<div class="signature field-var has-description" id="availableFloatArrays"><code><span class="field-name">availableFloatArrays</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#availableFloatArrays"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pool of available float arrays for vertices and UVs.

<hr class="field-separator" />

<div class="signature field-var has-description" id="availableIntArrays"><code><span class="field-name">availableIntArrays</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#availableIntArrays"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pool of available integer arrays for indices and colors.

