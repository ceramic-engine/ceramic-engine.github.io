---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tilemap
title: Tileset
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/Tileset/
---

# Tileset

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/tilemap/runtime/src/ceramic/Tileset.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-native/tracker/Model/">tracker.Model</a> → <strong>ceramic.Tileset</strong> (Class)</div>

Represents a collection of tiles used by a tilemap.

A tileset contains the image data and metadata for tiles that can be placed in a tilemap.
Each tile is identified by a global ID (GID) that's unique across all tilesets in a tilemap.
Tilesets support various features including tile spacing, margins, and slope definitions for
physics interactions.

## Features

- **Tile Organization**: Tiles arranged in a grid with configurable spacing and margins
- **Global IDs**: Each tile has a unique GID for referencing across layers
- **Slope Support**: Define collision slopes for individual tiles
- **Grid Orientation**: Support for orthogonal and isometric tile arrangements
- **Reactive Properties**: Extends Model for automatic change notifications

## Usage Example

```haxe
var tileset = new Tileset();
tileset.name = "terrain";
tileset.firstGid = 1;
tileset.tileSize(32, 32);
tileset.image = tilesetImage;

// Add a slope for tile index 5
tileset.slope(5, {
    index: 5,
    y0: 0.0,    // Left edge height (0 = bottom, 1 = top)
    y1: 0.5,    // Right edge height
    rotation: 0 // Optional rotation
});
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/TilemapData/">TilemapData</a>, <a href="/api-docs/clay-native/ceramic/TilesetImage/">TilesetImage</a>, <a href="/api-docs/clay-native/ceramic/TileSlope/">TileSlope</a></div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="ldtkTileset"><div class="plugin-name">ldtk</div><code><span class="field-name">ldtkTileset</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/LdtkTilesetDefinition/" class="type-link">LdtkTilesetDefinition</a></code><a class="header-anchor" href="#ldtkTileset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reference to the source LDtk tileset definition when this tileset was imported from LDtk.
Provides access to additional LDtk-specific metadata.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="firstGid"><div class="plugin-name">tilemap</div><code><span class="field-name">firstGid</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#firstGid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

First global id. Maps to the first tile in this tileset.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="name"><div class="plugin-name">tilemap</div><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The name of this tileset

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tileWidth"><div class="plugin-name">tilemap</div><code><span class="field-name">tileWidth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#tileWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The (maximum) width of tiles in this tileset

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tileHeight"><div class="plugin-name">tilemap</div><code><span class="field-name">tileHeight</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#tileHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The (maximum) height of tiles in this tileset

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="spacing"><div class="plugin-name">tilemap</div><code><span class="field-name">spacing</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#spacing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The spacing between tiles in this tileset

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="margin"><div class="plugin-name">tilemap</div><code><span class="field-name">margin</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#margin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The margin around the tiles in this tileset

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tileCount"><div class="plugin-name">tilemap</div><code><span class="field-name">tileCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#tileCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The number of tiles in this tileset

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="columns"><div class="plugin-name">tilemap</div><code><span class="field-name">columns</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#columns"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The number of tile columns in this tileset

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="rows"><div class="plugin-name">tilemap</div><code><span class="field-name">rows</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#rows"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The number of tile rows in this tileset

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="image"><div class="plugin-name">tilemap</div><code><span class="field-name">image</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TilesetImage/" class="type-link">TilesetImage</a></code><a class="header-anchor" href="#image"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The image used to display tiles in this tileset

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="gridOrientation"><div class="plugin-name">tilemap</div><code><span class="field-name">gridOrientation</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#gridOrientation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Orientation of the grid for the tiles in this tileset.
Only used in case of isometric orientation,
to determine how tile overlays for terrain an collision information are rendered.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="gridCellWidth"><div class="plugin-name">tilemap</div><code><span class="field-name">gridCellWidth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#gridCellWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Width of a grid cell.
Only used in case of isometric orientation,
to determine how tile overlays for terrain an collision information are rendered.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="gridCellHeight"><div class="plugin-name">tilemap</div><code><span class="field-name">gridCellHeight</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#gridCellHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Height of a grid cell.
Only used in case of isometric orientation,
to determine how tile overlays for terrain an collision information are rendered.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="texture"><div class="plugin-name">tilemap</div><code><span class="field-name">texture</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Texture/" class="type-link">Texture</a></code><a class="header-anchor" href="#texture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The texture used to display tiles in this tileset.
This is a shorthand of `image.texture`

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="slopes"><div class="plugin-name">tilemap</div><code><span class="field-name">slopes</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/TileSlope/" class="type-link">TileSlope</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#slopes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Slopes in this tileset or null if there is no slope.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateLdtkTileset"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateLdtkTileset</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateLdtkTileset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateFirstGid"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateFirstGid</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateFirstGid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateName"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateName</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTileWidth"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateTileWidth</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTileWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTileHeight"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateTileHeight</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTileHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateSpacing"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateSpacing</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateSpacing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateMargin"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateMargin</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateMargin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTileCount"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateTileCount</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTileCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateColumns"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateColumns</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateColumns"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateRows"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateRows</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateRows"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateImage"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateImage</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateImage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateGridOrientation"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateGridOrientation</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateGridOrientation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateGridCellWidth"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateGridCellWidth</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateGridCellWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateGridCellHeight"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateGridCellHeight</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateGridCellHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="tileSize"><div class="plugin-name">tilemap</div><code><span class="field-name">tileSize</span><span class="parenthesis">(</span><span class="arg-name">tileWidth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">tileHeight</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#tileSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A shorthand to set `tileWidth` and `tileHeight`


| Name | Type | Description |
|------|------|-------------|
| `tileWidth` | [Int](/api-docs/clay-native/Int/) | * |
| `tileHeight` | [Int](/api-docs/clay-native/Int/) |  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="gidAtPosition"><div class="plugin-name">tilemap</div><code><span class="field-name">gidAtPosition</span><span class="parenthesis">(</span><span class="arg-name">column</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">row</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#gidAtPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get the global id from the given column and row coordinates in the tileset.


| Name | Type | Description |
|------|------|-------------|
| `column` | [Float](/api-docs/clay-native/Float/) | The column position in the tileset (0-based)  |
| `row` | [Float](/api-docs/clay-native/Float/) | The row position in the tileset (0-based)  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-native/Int/) | The global tile ID at the specified position |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="columnForGid"><div class="plugin-name">tilemap</div><code><span class="field-name">columnForGid</span><span class="parenthesis">(</span><span class="arg-name">gid</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#columnForGid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the column position of a tile within this tileset from its global ID.


| Name | Type | Description |
|------|------|-------------|
| `gid` | [Int](/api-docs/clay-native/Int/) | The global tile ID  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-native/Int/) | The column position (0-based) within the tileset |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="rowForGid"><div class="plugin-name">tilemap</div><code><span class="field-name">rowForGid</span><span class="parenthesis">(</span><span class="arg-name">gid</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#rowForGid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the row position of a tile within this tileset from its global ID.


| Name | Type | Description |
|------|------|-------------|
| `gid` | [Int](/api-docs/clay-native/Int/) | The global tile ID  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-native/Int/) | The row position (0-based) within the tileset |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateSlopes"><div class="plugin-name">tilemap</div><code><span class="field-name">invalidateSlopes</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateSlopes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="slope"><div class="plugin-name">tilemap</div><code><span class="field-name">slope</span><span class="parenthesis">(</span><span class="arg-name">slope</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TileSlope/" class="type-link">TileSlope</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#slope"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Add a slope to this tileset.

| Name | Type |
|------|------|
| `slope` | [TileSlope](/api-docs/clay-native/ceramic/TileSlope/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="destroy"><div class="plugin-name">tilemap</div><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">tilemap</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description has-plugin" id="unobservedLdtkTileset"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedLdtkTileset</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/LdtkTilesetDefinition/" class="type-link">LdtkTilesetDefinition</a></code><a class="header-anchor" href="#unobservedLdtkTileset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedFirstGid"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedFirstGid</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unobservedFirstGid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedName"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedName</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#unobservedName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedTileWidth"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedTileWidth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unobservedTileWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedTileHeight"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedTileHeight</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unobservedTileHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedSpacing"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedSpacing</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unobservedSpacing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedMargin"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedMargin</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unobservedMargin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedTileCount"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedTileCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unobservedTileCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedColumns"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedColumns</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unobservedColumns"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedRows"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedRows</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unobservedRows"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedImage"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedImage</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TilesetImage/" class="type-link">TilesetImage</a></code><a class="header-anchor" href="#unobservedImage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedGridOrientation"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedGridOrientation</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#unobservedGridOrientation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedGridCellWidth"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedGridCellWidth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unobservedGridCellWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedGridCellHeight"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedGridCellHeight</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unobservedGridCellHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="slopesMapping"><div class="plugin-name">tilemap</div><code><span class="field-name">slopesMapping</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/IntIntMap/" class="type-link">IntIntMap</a></code><a class="header-anchor" href="#slopesMapping"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A mapping to access a given slope by it's tile index
without having to walk through the whole slope array

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="implicitImage"><div class="plugin-name">tilemap</div><code><span class="field-name">implicitImage</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#implicitImage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal: `true` if TilesetImage instance was created
implicitly from assigning a texture object.

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedSlopes"><div class="plugin-name">tilemap</div><code><span class="field-name">unobservedSlopes</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/TileSlope/" class="type-link">TileSlope</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#unobservedSlopes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitLdtkTilesetChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitLdtkTilesetChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/LdtkTilesetDefinition/" class="type-link">LdtkTilesetDefinition</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/LdtkTilesetDefinition/" class="type-link">LdtkTilesetDefinition</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitLdtkTilesetChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when ldtkTileset field changes.

| Name | Type |
|------|------|
| `current` | [LdtkTilesetDefinition](/api-docs/clay-native/ceramic/LdtkTilesetDefinition/) |
| `previous` | [LdtkTilesetDefinition](/api-docs/clay-native/ceramic/LdtkTilesetDefinition/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitFirstGidChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitFirstGidChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitFirstGidChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when firstGid field changes.

| Name | Type |
|------|------|
| `current` | [Int](/api-docs/clay-native/Int/) |
| `previous` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitNameChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitNameChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitNameChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when name field changes.

| Name | Type |
|------|------|
| `current` | [String](/api-docs/clay-native/String/) |
| `previous` | [String](/api-docs/clay-native/String/) |

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

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitSpacingChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitSpacingChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitSpacingChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when spacing field changes.

| Name | Type |
|------|------|
| `current` | [Int](/api-docs/clay-native/Int/) |
| `previous` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitMarginChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitMarginChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitMarginChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when margin field changes.

| Name | Type |
|------|------|
| `current` | [Int](/api-docs/clay-native/Int/) |
| `previous` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitTileCountChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitTileCountChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTileCountChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when tileCount field changes.

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

<div class="signature field-method has-description has-plugin" id="emitImageChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitImageChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TilesetImage/" class="type-link">TilesetImage</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TilesetImage/" class="type-link">TilesetImage</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitImageChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when image field changes.

| Name | Type |
|------|------|
| `current` | [TilesetImage](/api-docs/clay-native/ceramic/TilesetImage/) |
| `previous` | [TilesetImage](/api-docs/clay-native/ceramic/TilesetImage/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitGridOrientationChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitGridOrientationChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitGridOrientationChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when gridOrientation field changes.

| Name | Type |
|------|------|
| `current` | Anonymous |
| `previous` | Anonymous |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitGridCellWidthChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitGridCellWidthChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitGridCellWidthChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when gridCellWidth field changes.

| Name | Type |
|------|------|
| `current` | [Int](/api-docs/clay-native/Int/) |
| `previous` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitGridCellHeightChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitGridCellHeightChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitGridCellHeightChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when gridCellHeight field changes.

| Name | Type |
|------|------|
| `current` | [Int](/api-docs/clay-native/Int/) |
| `previous` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitSlopesChange"><div class="plugin-name">tilemap</div><code><span class="field-name">emitSlopesChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/TileSlope/" class="type-link">TileSlope</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/TileSlope/" class="type-link">TileSlope</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitSlopesChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when slopes field changes.

| Name | Type |
|------|------|
| `current` | [ReadOnlyArray](/api-docs/clay-native/ceramic/ReadOnlyArray/)<[TileSlope](/api-docs/clay-native/ceramic/TileSlope/)> |
| `previous` | [ReadOnlyArray](/api-docs/clay-native/ceramic/ReadOnlyArray/)<[TileSlope](/api-docs/clay-native/ceramic/TileSlope/)> |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="toString"><div class="plugin-name">tilemap</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

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

