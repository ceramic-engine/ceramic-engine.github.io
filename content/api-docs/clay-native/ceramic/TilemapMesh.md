---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tilemap
title: TilemapMesh
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/TilemapMesh/
---

# TilemapMesh

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/tilemap/runtime/src/ceramic/TilemapMesh.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-native/ceramic/Visual/">Visual</a> → <a href="/api-docs/clay-native/ceramic/Mesh/">Mesh</a> → <strong>ceramic.TilemapMesh</strong> (Class)</div>

Specialized Mesh visual used to render multiple tiles in a tilemap layer.

TilemapMesh extends the basic Mesh to add tilemap-specific properties and implements
object pooling for efficient memory management. Each quad represents a single visible
tile within a TilemapLayer and is automatically managed by the layer's rendering system.

## Features

- **Object Pooling**: Reuses instances to minimize garbage collection
- **Tile Mesh Properties**: Stores tile index, position, and tile data
- **Automatic Management**: Created and recycled automatically by TilemapLayer

## Internal Usage

This class is primarily used internally by TilemapLayer. Direct instantiation
is not recommended - use the static `get()` method to obtain pooled instances.

```haxe
// Internal usage by TilemapLayer
var mesh = TilemapMesh.get();
mesh.layerIndex = layerIndex;
mesh.textureIndex = textureIndex;
// ... configure visual properties

// When done, recycle back to pool:
mesh.recycle();
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/TilemapLayer/">TilemapLayer</a>, <a href="/api-docs/clay-native/ceramic/TilemapTile/">TilemapTile</a>, <a href="/api-docs/clay-native/ceramic/Quad/">Quad</a></div>


## Static Members

<div class="signature field-method has-description has-plugin" id="get"><div class="plugin-name">tilemap</div><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">TilemapMesh</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets a TilemapMesh instance from the object pool.
If the pool is empty, creates a new instance.
The returned quad will be active and ready for use.

| Returns | Description |
|---------|-------------|
| [TilemapMesh](/api-docs/clay-native/ceramic/TilemapMesh/) | A TilemapQuad instance ready for configuration |

## Instance Members

<div class="signature field-var has-description has-plugin" id="layerIndex"><div class="plugin-name">tilemap</div><code><span class="field-name">layerIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#layerIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The sub-layer index in the rendered layer.
Set to -1 when the mesh is not in use.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="textureIndex"><div class="plugin-name">tilemap</div><code><span class="field-name">textureIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#textureIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The index of texture being used.

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="nextVertexIndice"><div class="plugin-name">tilemap</div><code><span class="field-name">nextVertexIndice</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#nextVertexIndice"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="nextIndexIndice"><div class="plugin-name">tilemap</div><code><span class="field-name">nextIndexIndice</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#nextIndexIndice"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="nextColorIndice"><div class="plugin-name">tilemap</div><code><span class="field-name">nextColorIndice</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#nextColorIndice"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="nextQuadIndice"><div class="plugin-name">tilemap</div><code><span class="field-name">nextQuadIndice</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#nextQuadIndice"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="recycle"><div class="plugin-name">tilemap</div><code><span class="field-name">recycle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#recycle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns this TilemapMesh to the object pool for reuse.
Automatically removes the quad from its parent, resets all properties,
and marks it as inactive. This method should be called when the mesh
is no longer needed to free memory and reduce garbage collection.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">tilemap</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var has-description has-plugin" id="pool"><div class="plugin-name">tilemap</div><code><span class="field-name">pool</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Pool/" class="type-link">Pool</a><span class="operator">&lt;</span><a href="#" class="type-link">TilemapMesh</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#pool"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Static object pool for recycling TilemapMesh instances.
Initialized on first use to reduce memory allocation.

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

