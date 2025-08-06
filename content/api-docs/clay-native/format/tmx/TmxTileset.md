---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tiled
title: TmxTileset
target: Clay (Native)
permalink: api-docs/clay-native/format/tmx/TmxTileset/
---

# TmxTileset

<div class="view-source"><a href="https://github.com/ceramic-engine/format-tiled/blob/master/format/tmx/Data.hx">View source</a></div>

<div class="type-hierarchy"><strong>format.tmx.TmxTileset</strong> (Class)</div>

Tileset
TSX files does not contains firstGID and source.
TMX Tilesets can be both full tilesets or point to TSX file. In that case it contains only firstGID and source.
You can merge TSX file TMX Tileset into one by using `new Reader(tsxXML).readTSX(tmxTileset);`.
Since Tiled 0.15, image collection tilesets do not necessarily number their tiles consecutively since gaps can occur when removing tiles.

## Instance Members

<div class="signature field-var has-description" id="firstGID"><code><span class="field-name">firstGID</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#firstGID"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The first global tile ID of this tileset (this global ID maps to the first tile in this tileset).

<hr class="field-separator" />

<div class="signature field-var has-description" id="source"><code><span class="field-name">source</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#source"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If this tileset is stored in an external TSX (Tile Set XML) file, this attribute refers to that file. That TSX file has the same structure as the <tileset> element described here. (There is the firstgid attribute missing and this source attribute is also not there. These two attributes are kept in the TMX map, since they are map specific.)

<hr class="field-separator" />

<div class="signature field-var has-description" id="name"><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The name of this tileset.

<hr class="field-separator" />

<div class="signature field-var has-description" id="tileWidth"><code><span class="field-name">tileWidth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#tileWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The (maximum) width of the tiles in this tileset.

<hr class="field-separator" />

<div class="signature field-var has-description" id="tileHeight"><code><span class="field-name">tileHeight</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#tileHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The (maximum) height of the tiles in this tileset.

<hr class="field-separator" />

<div class="signature field-var has-description" id="spacing"><code><span class="field-name">spacing</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#spacing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The spacing in pixels between the tiles in this tileset (applies to the tileset image).

<hr class="field-separator" />

<div class="signature field-var has-description" id="margin"><code><span class="field-name">margin</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#margin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The margin around the tiles in this tileset (applies to the tileset image).

<hr class="field-separator" />

<div class="signature field-var has-description" id="tileCount"><code><span class="field-name">tileCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#tileCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The number of tiles in this tileset (since 0.13)

<hr class="field-separator" />

<div class="signature field-var has-description" id="columns"><code><span class="field-name">columns</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#columns"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The number of tile columns in the tileset. For image collection tilesets it is editable and is used when displaying the tileset. (since 0.15)

<hr class="field-separator" />

<div class="signature field-var has-description" id="tileOffset"><code><span class="field-name">tileOffset</span><span class="operator">:</span> <a href="/api-docs/clay-native/format/tmx/TmxTileOffset/" class="type-link">TmxTileOffset</a></code><a class="header-anchor" href="#tileOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This element is used to specify an offset in pixels, to be applied when drawing a tile from the related tileset. When not present, no offset is applied. Since 0.8

<hr class="field-separator" />

<div class="signature field-var has-description" id="properties"><code><span class="field-name">properties</span><span class="operator">:</span> <a href="/api-docs/clay-native/format/tmx/TmxProperties/" class="type-link">TmxProperties</a></code><a class="header-anchor" href="#properties"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Since 0.8

<hr class="field-separator" />

<div class="signature field-var has-description" id="image"><code><span class="field-name">image</span><span class="operator">:</span> <a href="/api-docs/clay-native/format/tmx/TmxImage/" class="type-link">TmxImage</a></code><a class="header-anchor" href="#image"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

As of the current version of Tiled Qt, each tileset has a single image associated with it,
which is cut into smaller tiles based on the attributes defined on the tileset element.
Later versions may add support for adding multiple images to a single tileset, as is possible in Tiled Java.

<hr class="field-separator" />

<div class="signature field-var has-description" id="terrainTypes"><code><span class="field-name">terrainTypes</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/format/tmx/TmxTerrain/" class="type-link">TmxTerrain</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#terrainTypes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Terrain type defines. Since 0.9

<hr class="field-separator" />

<div class="signature field-var has-description" id="tiles"><code><span class="field-name">tiles</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/format/tmx/TmxTilesetTile/" class="type-link">TmxTilesetTile</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#tiles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Extended tiles data.

<hr class="field-separator" />

<div class="signature field-var has-description" id="grid"><code><span class="field-name">grid</span><span class="operator">:</span> <a href="/api-docs/clay-native/format/tmx/TmxTilesetGrid/" class="type-link">TmxTilesetGrid</a></code><a class="header-anchor" href="#grid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Since 1.0

<hr class="field-separator" />

<div class="signature field-var has-description" id="wangSets"><code><span class="field-name">wangSets</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/format/tmx/TmxWangSet/" class="type-link">TmxWangSet</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#wangSets"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Since 1.1

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">firstGID</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">source</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">tileWidth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">tileHeight</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">spacing</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">margin</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">tileCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">columns</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">tileOffset</span><span class="operator">:</span> <a href="/api-docs/clay-native/format/tmx/TmxTileOffset/" class="type-link">TmxTileOffset</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">properties</span><span class="operator">:</span> <a href="/api-docs/clay-native/format/tmx/TmxProperties/" class="type-link">TmxProperties</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">image</span><span class="operator">:</span> <a href="/api-docs/clay-native/format/tmx/TmxImage/" class="type-link">TmxImage</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">terrainTypes</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/format/tmx/TmxTerrain/" class="type-link">TmxTerrain</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">tiles</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/format/tmx/TmxTilesetTile/" class="type-link">TmxTilesetTile</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">grid</span><span class="operator">:</span> <a href="/api-docs/clay-native/format/tmx/TmxTilesetGrid/" class="type-link">TmxTilesetGrid</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">wangSets</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/format/tmx/TmxWangSet/" class="type-link">TmxWangSet</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `firstGID` | [Int](/api-docs/clay-native/Int/) | *(optional)* | The first global tile ID of this tileset (this global ID maps to the first tile in this tileset). |
| `source` | [String](/api-docs/clay-native/String/) | *(optional)* | If this tileset is stored in an external TSX (Tile Set XML) file, this attribute refers to that file. That TSX file has the same structure as the <tileset> element described here. (There is the firstgid attribute missing and this source attribute is also not there. These two attributes are kept in the TMX map, since they are map specific.) |
| `name` | [String](/api-docs/clay-native/String/) | *(optional)* | The name of this tileset. |
| `tileWidth` | [Int](/api-docs/clay-native/Int/) | *(optional)* | The (maximum) width of the tiles in this tileset. |
| `tileHeight` | [Int](/api-docs/clay-native/Int/) | *(optional)* | The (maximum) height of the tiles in this tileset. |
| `spacing` | [Int](/api-docs/clay-native/Int/) | *(optional)* | The spacing in pixels between the tiles in this tileset (applies to the tileset image). |
| `margin` | [Int](/api-docs/clay-native/Int/) | *(optional)* | The margin around the tiles in this tileset (applies to the tileset image). |
| `tileCount` | [Int](/api-docs/clay-native/Int/) | *(optional)* | The number of tiles in this tileset (since 0.13) |
| `columns` | [Int](/api-docs/clay-native/Int/) | *(optional)* | The number of tile columns in the tileset. For image collection tilesets it is editable and is used when displaying the tileset. (since 0.15) |
| `tileOffset` | [TmxTileOffset](/api-docs/clay-native/format/tmx/TmxTileOffset/) | *(optional)* | This element is used to specify an offset in pixels, to be applied when drawing a tile from the related tileset. When not present, no offset is applied. Since 0.8 |
| `properties` | [TmxProperties](/api-docs/clay-native/format/tmx/TmxProperties/) | *(optional)* | Since 0.8 |
| `image` | [TmxImage](/api-docs/clay-native/format/tmx/TmxImage/) | *(optional)* | * As of the current version of Tiled Qt, each tileset has a single image associated with it, which is cut into smaller tiles based on the attributes defined on the tileset element. Later versions may add support for adding multiple images to a single tileset, as is possible in Tiled Java. |
| `terrainTypes` | [Array](/api-docs/clay-native/Array/)<[TmxTerrain](/api-docs/clay-native/format/tmx/TmxTerrain/)> | *(optional)* | Terrain type defines. Since 0.9 |
| `tiles` | [Array](/api-docs/clay-native/Array/)<[TmxTilesetTile](/api-docs/clay-native/format/tmx/TmxTilesetTile/)> | *(optional)* | Extended tiles data. |
| `grid` | [TmxTilesetGrid](/api-docs/clay-native/format/tmx/TmxTilesetGrid/) | *(optional)* | Since 1.0 |
| `wangSets` | [Array](/api-docs/clay-native/Array/)<[TmxWangSet](/api-docs/clay-native/format/tmx/TmxWangSet/)> | *(optional)* | Since 1.1 |

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |

