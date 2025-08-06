---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tilemap
title: TilemapLayerData
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/TilemapLayerData/
---

# TilemapLayerData

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/tilemap/runtime/src/ceramic/TilemapLayerData.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-native/tracker/Model/">tracker.Model</a> → <strong>ceramic.TilemapLayerData</strong> (Class)</div>

Data model representing a single layer within a tilemap.

TilemapLayerData holds all the information needed to render and interact with a tilemap layer,
including tile indices, dimensions, positioning, and visual properties. This is a reactive Model
that notifies observers when properties change, allowing TilemapLayer visuals to update automatically.

## Features

- **Tile Storage**: Holds tile indices referencing tilesets via global IDs (GIDs)
- **Auto-tiling Support**: Can store both original and computed tiles after auto-tiling
- **Per-tile Properties**: Supports per-tile alpha and offset values
- **Layer Properties**: Position, size, visibility, opacity, and blending modes
- **Reactive Updates**: Extends Model for automatic change notifications

## Usage Example

```haxe
// Create a new layer data
var layer = new TilemapLayerData();
layer.name = 'collision';
layer.grid(20, 15); // 20x15 tiles
layer.tileSize(32, 32); // 32x32 pixel tiles

// Set tiles (array of TilemapTile values)
var tiles = [];
for (i in 0...300) {
    tiles.push(i == 150 ? 1 : 0); // Single tile in center
}
layer.tiles = tiles;

// Configure visual properties
layer.opacity = 0.8;
layer.color = Color.RED;
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/TilemapData/">TilemapData</a>, <a href="/api-docs/clay-native/ceramic/TilemapLayer/">TilemapLayer</a>, <a href="/api-docs/clay-native/ceramic/TilemapTile/">TilemapTile</a></div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="ldtkLayer"><div class="plugin-name">ldtk</div><code><span class="field-name">ldtkLayer</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/LdtkLayerInstance/" class="type-link">LdtkLayerInstance</a></code><a class="header-anchor" href="#ldtkLayer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reference to the source LDtk layer instance when this layer was imported from LDtk.
Provides access to additional LDtk-specific data and properties.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="name"><div class="plugin-name">tilemap</div><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The name of the layer

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="x"><div class="plugin-name">tilemap</div><code><span class="field-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#x"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The x position of the layer in tiles

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="y"><div class="plugin-name">tilemap</div><code><span class="field-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The y position of the layer in tiles

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="columns"><div class="plugin-name">tilemap</div><code><span class="field-name">columns</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#columns"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The width of the layer in tiles

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="rows"><div class="plugin-name">tilemap</div><code><span class="field-name">rows</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#rows"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The height of the layer in tiles

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="opacity"><div class="plugin-name">tilemap</div><code><span class="field-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#opacity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The opacity of the layer

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="visible"><div class="plugin-name">tilemap</div><code><span class="field-name">visible</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#visible"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this layer is visible or not

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="offsetX"><div class="plugin-name">tilemap</div><code><span class="field-name">offsetX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#offsetX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

X offset for this layer in points.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="offsetY"><div class="plugin-name">tilemap</div><code><span class="field-name">offsetY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#offsetY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Y offset for this layer in points.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="explicitDepth"><div class="plugin-name">tilemap</div><code><span class="field-name">explicitDepth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#explicitDepth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Explicit depth, or null of that should be computed by `Tilemap` instead

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="blending"><div class="plugin-name">tilemap</div><code><span class="field-name">blending</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Blending/" class="type-link">Blending</a></code><a class="header-anchor" href="#blending"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tile default blending

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="color"><div class="plugin-name">tilemap</div><code><span class="field-name">color</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#color"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tile default (tint) color

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="extraBlending"><div class="plugin-name">tilemap</div><code><span class="field-name">extraBlending</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Blending/" class="type-link">Blending</a></code><a class="header-anchor" href="#extraBlending"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Extra tile default blending

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="extraOpacity"><div class="plugin-name">tilemap</div><code><span class="field-name">extraOpacity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#extraOpacity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Extra tile default alpha

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tiles"><div class="plugin-name">tilemap</div><code><span class="field-name">tiles</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/TilemapTile/" class="type-link">TilemapTile</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#tiles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tiles

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tilesAlpha"><div class="plugin-name">tilemap</div><code><span class="field-name">tilesAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#tilesAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Per-tile alpha, or null if there is no custom alpha per tile

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tilesOffsetX"><div class="plugin-name">tilemap</div><code><span class="field-name">tilesOffsetX</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#tilesOffsetX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Per-tile x offset in pixels, or null if there is no offset

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tilesOffsetY"><div class="plugin-name">tilemap</div><code><span class="field-name">tilesOffsetY</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#tilesOffsetY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Per-tile y offset in pixels, or null if there is no offset

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="computedTiles"><div class="plugin-name">tilemap</div><code><span class="field-name">computedTiles</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/TilemapTile/" class="type-link">TilemapTile</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#computedTiles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computed tiles, after applying auto-tiling (if any).
Will be `null` if no auto-tiling is used.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="computedTilesAlpha"><div class="plugin-name">tilemap</div><code><span class="field-name">computedTilesAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#computedTilesAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Per-computed tile alpha, or null if there is no custom alpha per computed tile

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="computedTilesOffsetX"><div class="plugin-name">tilemap</div><code><span class="field-name">computedTilesOffsetX</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#computedTilesOffsetX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Per-computed tile x offset in pixels, or null if there is no offset per computed tile

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="computedTilesOffsetY"><div class="plugin-name">tilemap</div><code><span class="field-name">computedTilesOffsetY</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#computedTilesOffsetY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Per-computed tile y offset in pixels, or null if there is no offset per computed tile

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="hasTiles"><div class="plugin-name">tilemap</div><code><span class="field-name">hasTiles</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasTiles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is `true` if this layer has tiles. Some layers don't have tile and
don't need to be rendered with tilemap layer quads, but are still
available as containers to add custom objects (like LDtk entities).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="shouldRenderTiles"><div class="plugin-name">tilemap</div><code><span class="field-name">shouldRenderTiles</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#shouldRenderTiles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is `true` (default) if this layer should have its tiles rendered (if any).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tileWidth"><div class="plugin-name">tilemap</div><code><span class="field-name">tileWidth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#tileWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The width of a tile in this layer

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tileHeight"><div class="plugin-name">tilemap</div><code><span class="field-name">tileHeight</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#tileHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The height of a tile in this layer

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateLdtkLayer"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateLdtkLayer</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateLdtkLayer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateName"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateName</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateX"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateX</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateY"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateY</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateColumns"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateColumns</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateColumns"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateRows"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateRows</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateRows"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateOpacity"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateOpacity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateOpacity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateVisible"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateVisible</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateVisible"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateOffsetX"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateOffsetX</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateOffsetX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateOffsetY"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateOffsetY</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateOffsetY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateExplicitDepth"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateExplicitDepth</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateExplicitDepth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateBlending"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateBlending</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateBlending"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateColor"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateExtraBlending"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateExtraBlending</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateExtraBlending"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateExtraOpacity"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateExtraOpacity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateExtraOpacity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTiles"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateTiles</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTiles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTilesAlpha"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateTilesAlpha</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTilesAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTilesOffsetX"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateTilesOffsetX</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTilesOffsetX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTilesOffsetY"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateTilesOffsetY</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTilesOffsetY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateComputedTiles"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateComputedTiles</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateComputedTiles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateComputedTilesAlpha"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateComputedTilesAlpha</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateComputedTilesAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateComputedTilesOffsetX"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateComputedTilesOffsetX</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateComputedTilesOffsetX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateComputedTilesOffsetY"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateComputedTilesOffsetY</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateComputedTilesOffsetY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateHasTiles"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateHasTiles</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateHasTiles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateShouldRenderTiles"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateShouldRenderTiles</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateShouldRenderTiles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTileWidth"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateTileWidth</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTileWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTileHeight"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateTileHeight</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTileHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="grid"><div class="plugin-name">tilemap</div><code><span class="field-name">grid</span><span class="parenthesis">(</span><span class="arg-name">columns</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">rows</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#grid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A shorthand to set `columns` and `rows`


| Name | Type | Description |
|------|------|-------------|
| `columns` | [Int](/api-docs/clay-native/Int/) | * |
| `rows` | [Int](/api-docs/clay-native/Int/) |  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="pos"><div class="plugin-name">tilemap</div><code><span class="field-name">pos</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A shorthand to set `x` and `y`


| Name | Type |
|------|------|
| `x` | [Int](/api-docs/clay-native/Int/) |
| `y` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="offset"><div class="plugin-name">tilemap</div><code><span class="field-name">offset</span><span class="parenthesis">(</span><span class="arg-name">offsetX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">offsetY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#offset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A shorthand to set `offsetX` and `offsetY`


| Name | Type |
|------|------|
| `offsetX` | [Int](/api-docs/clay-native/Int/) |
| `offsetY` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="tileSize"><div class="plugin-name">tilemap</div><code><span class="field-name">tileSize</span><span class="parenthesis">(</span><span class="arg-name">tileWidth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">tileHeight</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#tileSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A shorthand to set `tileWidth` and `tileHeight`


| Name | Type | Description |
|------|------|-------------|
| `tileWidth` | [Int](/api-docs/clay-native/Int/) | * |
| `tileHeight` | [Int](/api-docs/clay-native/Int/) |  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="indexFromColumnAndRow"><div class="plugin-name">tilemap</div><code><span class="field-name">indexFromColumnAndRow</span><span class="parenthesis">(</span><span class="arg-name">column</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">row</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#indexFromColumnAndRow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts column and row coordinates to a tile index.


| Name | Type | Description |
|------|------|-------------|
| `column` | [Int](/api-docs/clay-native/Int/) | The column position (0-based)  |
| `row` | [Int](/api-docs/clay-native/Int/) | The row position (0-based)  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-native/Int/) | The tile index in the flat tiles array |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="tileByColumnAndRow"><div class="plugin-name">tilemap</div><code><span class="field-name">tileByColumnAndRow</span><span class="parenthesis">(</span><span class="arg-name">column</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">row</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TilemapTile/" class="type-link">TilemapTile</a></code><a class="header-anchor" href="#tileByColumnAndRow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Retrieves the tile at the specified column and row position from the tiles array.


| Name | Type | Description |
|------|------|-------------|
| `column` | [Int](/api-docs/clay-native/Int/) | The column position (0-based)  |
| `row` | [Int](/api-docs/clay-native/Int/) | The row position (0-based)  |

| Returns | Description |
|---------|-------------|
| [TilemapTile](/api-docs/clay-native/ceramic/TilemapTile/) | The TilemapTile at the position |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="computedTileByColumnAndRow"><div class="plugin-name">tilemap</div><code><span class="field-name">computedTileByColumnAndRow</span><span class="parenthesis">(</span><span class="arg-name">column</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">row</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TilemapTile/" class="type-link">TilemapTile</a></code><a class="header-anchor" href="#computedTileByColumnAndRow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Retrieves the computed tile at the specified column and row position.
Used when auto-tiling has been applied to get the final tile value.


| Name | Type | Description |
|------|------|-------------|
| `column` | [Int](/api-docs/clay-native/Int/) | The column position (0-based)  |
| `row` | [Int](/api-docs/clay-native/Int/) | The row position (0-based)  |

| Returns | Description |
|---------|-------------|
| [TilemapTile](/api-docs/clay-native/ceramic/TilemapTile/) | The computed TilemapTile at the position |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="columnAtIndex"><div class="plugin-name">tilemap</div><code><span class="field-name">columnAtIndex</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#columnAtIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the column position from a tile index.


| Name | Type | Description |
|------|------|-------------|
| `index` | [Int](/api-docs/clay-native/Int/) | The tile index in the flat array  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-native/Int/) | The column position (0-based) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="rowAtIndex"><div class="plugin-name">tilemap</div><code><span class="field-name">rowAtIndex</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#rowAtIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the row position from a tile index.


| Name | Type | Description |
|------|------|-------------|
| `index` | [Int](/api-docs/clay-native/Int/) | The tile index in the flat array  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-native/Int/) | The row position (0-based) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">tilemap</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description has-plugin" id="unobservedLdtkLayer"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedLdtkLayer</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/LdtkLayerInstance/" class="type-link">LdtkLayerInstance</a></code><a class="header-anchor" href="#unobservedLdtkLayer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedName"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedName</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#unobservedName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedX"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unobservedX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedY"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unobservedY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedColumns"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedColumns</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unobservedColumns"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedRows"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedRows</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unobservedRows"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedOpacity"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedOpacity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#unobservedOpacity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedVisible"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedVisible</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedVisible"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedOffsetX"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedOffsetX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unobservedOffsetX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedOffsetY"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedOffsetY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unobservedOffsetY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedExplicitDepth"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedExplicitDepth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#unobservedExplicitDepth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedBlending"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedBlending</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Blending/" class="type-link">Blending</a></code><a class="header-anchor" href="#unobservedBlending"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedColor"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedColor</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#unobservedColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedExtraBlending"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedExtraBlending</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Blending/" class="type-link">Blending</a></code><a class="header-anchor" href="#unobservedExtraBlending"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedExtraOpacity"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedExtraOpacity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#unobservedExtraOpacity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedTiles"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedTiles</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/TilemapTile/" class="type-link">TilemapTile</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#unobservedTiles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedTilesAlpha"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedTilesAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#unobservedTilesAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedTilesOffsetX"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedTilesOffsetX</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#unobservedTilesOffsetX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedTilesOffsetY"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedTilesOffsetY</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#unobservedTilesOffsetY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedComputedTiles"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedComputedTiles</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/TilemapTile/" class="type-link">TilemapTile</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#unobservedComputedTiles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedComputedTilesAlpha"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedComputedTilesAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#unobservedComputedTilesAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedComputedTilesOffsetX"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedComputedTilesOffsetX</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#unobservedComputedTilesOffsetX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedComputedTilesOffsetY"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedComputedTilesOffsetY</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#unobservedComputedTilesOffsetY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedHasTiles"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedHasTiles</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedHasTiles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedShouldRenderTiles"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedShouldRenderTiles</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedShouldRenderTiles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedTileWidth"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedTileWidth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unobservedTileWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedTileHeight"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedTileHeight</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unobservedTileHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitLdtkLayerChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitLdtkLayerChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/LdtkLayerInstance/" class="type-link">LdtkLayerInstance</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/LdtkLayerInstance/" class="type-link">LdtkLayerInstance</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitLdtkLayerChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when ldtkLayer field changes.

| Name | Type |
|------|------|
| `current` | [LdtkLayerInstance](/api-docs/clay-native/ceramic/LdtkLayerInstance/) |
| `previous` | [LdtkLayerInstance](/api-docs/clay-native/ceramic/LdtkLayerInstance/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitNameChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitNameChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitNameChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when name field changes.

| Name | Type |
|------|------|
| `current` | [String](/api-docs/clay-native/String/) |
| `previous` | [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitXChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitXChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitXChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when x field changes.

| Name | Type |
|------|------|
| `current` | [Int](/api-docs/clay-native/Int/) |
| `previous` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitYChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitYChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitYChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when y field changes.

| Name | Type |
|------|------|
| `current` | [Int](/api-docs/clay-native/Int/) |
| `previous` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitColumnsChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitColumnsChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitColumnsChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when columns field changes.

| Name | Type |
|------|------|
| `current` | [Int](/api-docs/clay-native/Int/) |
| `previous` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitRowsChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitRowsChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitRowsChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when rows field changes.

| Name | Type |
|------|------|
| `current` | [Int](/api-docs/clay-native/Int/) |
| `previous` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitOpacityChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitOpacityChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitOpacityChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when opacity field changes.

| Name | Type |
|------|------|
| `current` | [Float](/api-docs/clay-native/Float/) |
| `previous` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitVisibleChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitVisibleChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitVisibleChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when visible field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/clay-native/Bool/) |
| `previous` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitOffsetXChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitOffsetXChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitOffsetXChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when offsetX field changes.

| Name | Type |
|------|------|
| `current` | [Int](/api-docs/clay-native/Int/) |
| `previous` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitOffsetYChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitOffsetYChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitOffsetYChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when offsetY field changes.

| Name | Type |
|------|------|
| `current` | [Int](/api-docs/clay-native/Int/) |
| `previous` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitExplicitDepthChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitExplicitDepthChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitExplicitDepthChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when explicitDepth field changes.

| Name | Type |
|------|------|
| `current` | [Null](/api-docs/clay-native/Null/)<[Float](/api-docs/clay-native/Float/)> |
| `previous` | [Null](/api-docs/clay-native/Null/)<[Float](/api-docs/clay-native/Float/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitBlendingChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitBlendingChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Blending/" class="type-link">Blending</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Blending/" class="type-link">Blending</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitBlendingChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when blending field changes.

| Name | Type |
|------|------|
| `current` | [Blending](/api-docs/clay-native/ceramic/Blending/) |
| `previous` | [Blending](/api-docs/clay-native/ceramic/Blending/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitColorChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitColorChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Color/" class="type-link">Color</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Color/" class="type-link">Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitColorChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when color field changes.

| Name | Type |
|------|------|
| `current` | [Color](/api-docs/clay-native/ceramic/Color/) |
| `previous` | [Color](/api-docs/clay-native/ceramic/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitExtraBlendingChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitExtraBlendingChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Blending/" class="type-link">Blending</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Blending/" class="type-link">Blending</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitExtraBlendingChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when extraBlending field changes.

| Name | Type |
|------|------|
| `current` | [Blending](/api-docs/clay-native/ceramic/Blending/) |
| `previous` | [Blending](/api-docs/clay-native/ceramic/Blending/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitExtraOpacityChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitExtraOpacityChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitExtraOpacityChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when extraOpacity field changes.

| Name | Type |
|------|------|
| `current` | [Float](/api-docs/clay-native/Float/) |
| `previous` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitTilesChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitTilesChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/TilemapTile/" class="type-link">TilemapTile</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/TilemapTile/" class="type-link">TilemapTile</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTilesChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when tiles field changes.

| Name | Type |
|------|------|
| `current` | [ReadOnlyArray](/api-docs/clay-native/ceramic/ReadOnlyArray/)<[TilemapTile](/api-docs/clay-native/ceramic/TilemapTile/)> |
| `previous` | [ReadOnlyArray](/api-docs/clay-native/ceramic/ReadOnlyArray/)<[TilemapTile](/api-docs/clay-native/ceramic/TilemapTile/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitTilesAlphaChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitTilesAlphaChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTilesAlphaChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when tilesAlpha field changes.

| Name | Type |
|------|------|
| `current` | [ReadOnlyArray](/api-docs/clay-native/ceramic/ReadOnlyArray/)<[Float](/api-docs/clay-native/Float/)> |
| `previous` | [ReadOnlyArray](/api-docs/clay-native/ceramic/ReadOnlyArray/)<[Float](/api-docs/clay-native/Float/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitTilesOffsetXChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitTilesOffsetXChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTilesOffsetXChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when tilesOffsetX field changes.

| Name | Type |
|------|------|
| `current` | [ReadOnlyArray](/api-docs/clay-native/ceramic/ReadOnlyArray/)<[Int](/api-docs/clay-native/Int/)> |
| `previous` | [ReadOnlyArray](/api-docs/clay-native/ceramic/ReadOnlyArray/)<[Int](/api-docs/clay-native/Int/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitTilesOffsetYChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitTilesOffsetYChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTilesOffsetYChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when tilesOffsetY field changes.

| Name | Type |
|------|------|
| `current` | [ReadOnlyArray](/api-docs/clay-native/ceramic/ReadOnlyArray/)<[Int](/api-docs/clay-native/Int/)> |
| `previous` | [ReadOnlyArray](/api-docs/clay-native/ceramic/ReadOnlyArray/)<[Int](/api-docs/clay-native/Int/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitComputedTilesChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitComputedTilesChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/TilemapTile/" class="type-link">TilemapTile</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/TilemapTile/" class="type-link">TilemapTile</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitComputedTilesChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when computedTiles field changes.

| Name | Type |
|------|------|
| `current` | [ReadOnlyArray](/api-docs/clay-native/ceramic/ReadOnlyArray/)<[TilemapTile](/api-docs/clay-native/ceramic/TilemapTile/)> |
| `previous` | [ReadOnlyArray](/api-docs/clay-native/ceramic/ReadOnlyArray/)<[TilemapTile](/api-docs/clay-native/ceramic/TilemapTile/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitComputedTilesAlphaChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitComputedTilesAlphaChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitComputedTilesAlphaChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when computedTilesAlpha field changes.

| Name | Type |
|------|------|
| `current` | [ReadOnlyArray](/api-docs/clay-native/ceramic/ReadOnlyArray/)<[Float](/api-docs/clay-native/Float/)> |
| `previous` | [ReadOnlyArray](/api-docs/clay-native/ceramic/ReadOnlyArray/)<[Float](/api-docs/clay-native/Float/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitComputedTilesOffsetXChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitComputedTilesOffsetXChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitComputedTilesOffsetXChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when computedTilesOffsetX field changes.

| Name | Type |
|------|------|
| `current` | [ReadOnlyArray](/api-docs/clay-native/ceramic/ReadOnlyArray/)<[Int](/api-docs/clay-native/Int/)> |
| `previous` | [ReadOnlyArray](/api-docs/clay-native/ceramic/ReadOnlyArray/)<[Int](/api-docs/clay-native/Int/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitComputedTilesOffsetYChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitComputedTilesOffsetYChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitComputedTilesOffsetYChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when computedTilesOffsetY field changes.

| Name | Type |
|------|------|
| `current` | [ReadOnlyArray](/api-docs/clay-native/ceramic/ReadOnlyArray/)<[Int](/api-docs/clay-native/Int/)> |
| `previous` | [ReadOnlyArray](/api-docs/clay-native/ceramic/ReadOnlyArray/)<[Int](/api-docs/clay-native/Int/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitHasTilesChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitHasTilesChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitHasTilesChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when hasTiles field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/clay-native/Bool/) |
| `previous` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitShouldRenderTilesChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitShouldRenderTilesChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitShouldRenderTilesChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when shouldRenderTiles field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/clay-native/Bool/) |
| `previous` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitTileWidthChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitTileWidthChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTileWidthChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when tileWidth field changes.

| Name | Type |
|------|------|
| `current` | [Int](/api-docs/clay-native/Int/) |
| `previous` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitTileHeightChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitTileHeightChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTileHeightChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when tileHeight field changes.

| Name | Type |
|------|------|
| `current` | [Int](/api-docs/clay-native/Int/) |
| `previous` | [Int](/api-docs/clay-native/Int/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |
| `:build` | tracker.macros.SerializableMacro.build() |
| `:autoBuild` | tracker.macros.SerializableMacro.build() |

