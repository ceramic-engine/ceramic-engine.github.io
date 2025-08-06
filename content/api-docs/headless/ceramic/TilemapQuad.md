---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tilemap
title: TilemapQuad
target: Headless
permalink: api-docs/headless/ceramic/TilemapQuad/
---

# TilemapQuad

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/tilemap/runtime/src/ceramic/TilemapQuad.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/ceramic/Entity/">Entity</a> → <a href="/api-docs/headless/ceramic/Visual/">Visual</a> → <a href="/api-docs/headless/ceramic/Quad/">Quad</a> → <strong>ceramic.TilemapQuad</strong> (Class)</div>

Specialized Quad visual used to render individual tiles in a tilemap layer.

TilemapQuad extends the basic Quad to add tilemap-specific properties and implements
object pooling for efficient memory management. Each quad represents a single visible
tile within a TilemapLayer and is automatically managed by the layer's rendering system.

## Features

- **Object Pooling**: Reuses instances to minimize garbage collection
- **Tile Properties**: Stores tile index, position, and tile data
- **Arcade Physics**: When arcade plugin is enabled, can have physics bodies attached
- **Automatic Management**: Created and recycled automatically by TilemapLayer

## Internal Usage

This class is primarily used internally by TilemapLayer. Direct instantiation
is not recommended - use the static `get()` method to obtain pooled instances.

```haxe
// Internal usage by TilemapLayer
var quad = TilemapQuad.get();
quad.index = tileIndex;
quad.column = col;
quad.row = row;
quad.tilemapTile = tileData;
// ... configure visual properties

// When done, recycle back to pool:
quad.recycle();
```

<div class="see"><strong>See:</strong> <a href="/api-docs/headless/ceramic/TilemapLayer/">TilemapLayer</a>, <a href="/api-docs/headless/ceramic/TilemapTile/">TilemapTile</a>, <a href="/api-docs/headless/ceramic/Quad/">Quad</a></div>


## Static Members

<div class="signature field-method has-description has-plugin" id="get"><div class="plugin-name">tilemap</div><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">TilemapQuad</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets a TilemapQuad instance from the object pool.
If the pool is empty, creates a new instance.
The returned quad will be active and ready for use.

| Returns | Description |
|---------|-------------|
| [TilemapQuad](/api-docs/headless/ceramic/TilemapQuad/) | A TilemapQuad instance ready for configuration |

## Instance Members

<div class="signature field-var has-description has-plugin" id="index"><div class="plugin-name">tilemap</div><code><span class="field-name">index</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#index"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The tile index in the layer's flat tile array.
Set to -1 when the quad is not in use.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="column"><div class="plugin-name">tilemap</div><code><span class="field-name">column</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#column"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The column position of this tile in the tilemap grid (0-based).
Set to -1 when the quad is not in use.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="row"><div class="plugin-name">tilemap</div><code><span class="field-name">row</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#row"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The row position of this tile in the tilemap grid (0-based).
Set to -1 when the quad is not in use.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tilemapTile"><div class="plugin-name">tilemap</div><code><span class="field-name">tilemapTile</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/TilemapTile/" class="type-link">TilemapTile</a></code><a class="header-anchor" href="#tilemapTile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The tile data including GID and flip flags.
Contains the global tile ID and transformation information.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="recycle"><div class="plugin-name">tilemap</div><code><span class="field-name">recycle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#recycle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns this TilemapQuad to the object pool for reuse.
Automatically removes the quad from its parent, resets all properties,
and marks it as inactive. This method should be called when the tile
is no longer needed to free memory and reduce garbage collection.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">tilemap</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var has-description has-plugin" id="pool"><div class="plugin-name">tilemap</div><code><span class="field-name">pool</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Pool/" class="type-link">Pool</a><span class="operator">&lt;</span><a href="#" class="type-link">TilemapQuad</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#pool"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Static object pool for recycling TilemapQuad instances.
Initialized on first use to reduce memory allocation.

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

