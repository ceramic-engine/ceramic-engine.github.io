---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tiled
title: TmxMap
target: Unity
permalink: api-docs/unity/format/tmx/TmxMap/
---

# TmxMap

<div class="view-source"><a href="https://github.com/ceramic-engine/format-tiled/blob/master/format/tmx/Data.hx">View source</a></div>

<div class="type-hierarchy"><strong>format.tmx.TmxMap</strong> (Class)</div>

General .tmx map file

## Instance Members

<div class="signature field-var has-description" id="version"><code><span class="field-name">version</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#version"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The TMX format version, generally 1.0.

<hr class="field-separator" />

<div class="signature field-var has-description" id="tiledVersion"><code><span class="field-name">tiledVersion</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#tiledVersion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The Tiled version used to save the file (since Tiled 1.0.1). May be a date (for snapshot builds).

<hr class="field-separator" />

<div class="signature field-var has-description" id="orientation"><code><span class="field-name">orientation</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#orientation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Map orientation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="width"><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The map width in tiles.

<hr class="field-separator" />

<div class="signature field-var has-description" id="height"><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The map height in tiles.

<hr class="field-separator" />

<div class="signature field-var has-description" id="tileWidth"><code><span class="field-name">tileWidth</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#tileWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The width of a tile.

The tilewidth and tileheight properties determine the general grid size of the map.
The individual tiles may have different sizes. Larger tiles will extend at the top and right (anchored to the bottom left).


<hr class="field-separator" />

<div class="signature field-var has-description" id="tileHeight"><code><span class="field-name">tileHeight</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#tileHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The height of a tile.

The tilewidth and tileheight properties determine the general grid size of the map.
The individual tiles may have different sizes. Larger tiles will extend at the top and right (anchored to the bottom left).

<hr class="field-separator" />

<div class="signature field-var has-description" id="backgroundColor"><code><span class="field-name">backgroundColor</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#backgroundColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The background color of the map. Since 0.9, optional.

<hr class="field-separator" />

<div class="signature field-var has-description" id="renderOrder"><code><span class="field-name">renderOrder</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#renderOrder"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The order in which tiles on tile layers are rendered. Since 0.10, but only for orthogonal orientation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="staggerIndex"><code><span class="field-name">staggerIndex</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#staggerIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

For staggered and hexagonal maps, determines whether the "even" or "odd" indexes along the staggered axis are shifted. Since 0.11

<hr class="field-separator" />

<div class="signature field-var has-description" id="staggerAxis"><code><span class="field-name">staggerAxis</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#staggerAxis"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

For staggered and hexagonal maps, determines which axis (x or y) is staggered. (since 0.11);
Ex staggerDirection.

<hr class="field-separator" />

<div class="signature field-var has-description" id="hexSideLength"><code><span class="field-name">hexSideLength</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#hexSideLength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Only for hexagonal maps. Determines the width or height (depending on the staggered axis) of the tile's edge, in pixels. Since 0.11

<hr class="field-separator" />

<div class="signature field-var has-description" id="nextObjectId"><code><span class="field-name">nextObjectId</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#nextObjectId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Stores the next available ID for new objects. This number is stored to prevent reuse of the same ID after objects have been removed. (since 0.11)

<hr class="field-separator" />

<div class="signature field-var has-description" id="nextLayerId"><code><span class="field-name">nextLayerId</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#nextLayerId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Stores the next available ID for new layers. This number is stored to prevent reuse of the same ID after layers have been removed. (since 1.2)

<hr class="field-separator" />

<div class="signature field-var has-description" id="properties"><code><span class="field-name">properties</span><span class="operator">:</span> <a href="/api-docs/unity/format/tmx/TmxProperties/" class="type-link">TmxProperties</a></code><a class="header-anchor" href="#properties"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Properties of the map

<hr class="field-separator" />

<div class="signature field-var has-description" id="tilesets"><code><span class="field-name">tilesets</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/format/tmx/TmxTileset/" class="type-link">TmxTileset</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#tilesets"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tilesets used in map

<hr class="field-separator" />

<div class="signature field-var has-description" id="layers"><code><span class="field-name">layers</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Anonymous</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#layers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of all layers in map. Tile layers, object groups and image layers.

<hr class="field-separator" />

<div class="signature field-var has-description" id="infinite"><code><span class="field-name">infinite</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#infinite"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is that map infinite?

<hr class="field-separator" />

<div class="signature field-var has-description" id="localPath"><code><span class="field-name">localPath</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#localPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Local path of the TmxMap supplied during parsing.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">version</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">tiledVersion</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">orientation</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">tileWidth</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">tileHeight</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">backgroundColor</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">renderOrder</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">Anonymous</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">staggerIndex</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">Anonymous</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">staggerAxis</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">Anonymous</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">hexSideLength</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">nextObjectId</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">nextLayerId</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">properties</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/format/tmx/TmxProperties/" class="type-link">TmxProperties</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">tilesets</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/format/tmx/TmxTileset/" class="type-link">TmxTileset</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">layers</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Anonymous</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">infinite</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">localPath</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Description |
|------|------|-------------|
| `version` | [String](/api-docs/unity/String/) | The TMX format version, generally 1.0. |
| `tiledVersion` | [String](/api-docs/unity/String/) | The Tiled version used to save the file (since Tiled 1.0.1). May be a date (for snapshot builds). |
| `orientation` | Anonymous | Map orientation. |
| `width` | [Int](/api-docs/unity/Int/) | The map width in tiles. |
| `height` | [Int](/api-docs/unity/Int/) | The map height in tiles. |
| `tileWidth` | [Int](/api-docs/unity/Int/) | * The width of a tile. * The tilewidth and tileheight properties determine the general grid size of the map. The individual tiles may have different sizes. Larger tiles will extend at the top and right (anchored to the bottom left).  |
| `tileHeight` | [Int](/api-docs/unity/Int/) | * The height of a tile. * The tilewidth and tileheight properties determine the general grid size of the map. The individual tiles may have different sizes. Larger tiles will extend at the top and right (anchored to the bottom left). |
| `backgroundColor` | [Null](/api-docs/unity/Null/)<[Int](/api-docs/unity/Int/)> | The background color of the map. Since 0.9, optional. |
| `renderOrder` | [Null](/api-docs/unity/Null/)<Anonymous> | The order in which tiles on tile layers are rendered. Since 0.10, but only for orthogonal orientation. |
| `staggerIndex` | [Null](/api-docs/unity/Null/)<Anonymous> | For staggered and hexagonal maps, determines whether the "even" or "odd" indexes along the staggered axis are shifted. Since 0.11 |
| `staggerAxis` | [Null](/api-docs/unity/Null/)<Anonymous> | * For staggered and hexagonal maps, determines which axis (x or y) is staggered. (since 0.11); Ex staggerDirection. |
| `hexSideLength` | [Null](/api-docs/unity/Null/)<[Int](/api-docs/unity/Int/)> | Only for hexagonal maps. Determines the width or height (depending on the staggered axis) of the tile's edge, in pixels. Since 0.11 |
| `nextObjectId` | [Null](/api-docs/unity/Null/)<[Int](/api-docs/unity/Int/)> | Stores the next available ID for new objects. This number is stored to prevent reuse of the same ID after objects have been removed. (since 0.11) |
| `nextLayerId` | [Null](/api-docs/unity/Null/)<[Int](/api-docs/unity/Int/)> | Stores the next available ID for new layers. This number is stored to prevent reuse of the same ID after layers have been removed. (since 1.2) |
| `properties` | [Null](/api-docs/unity/Null/)<[TmxProperties](/api-docs/unity/format/tmx/TmxProperties/)> | Properties of the map |
| `tilesets` | [Array](/api-docs/unity/Array/)<[TmxTileset](/api-docs/unity/format/tmx/TmxTileset/)> | Tilesets used in map |
| `layers` | [Array](/api-docs/unity/Array/)<Anonymous> | Array of all layers in map. Tile layers, object groups and image layers. |
| `infinite` | [Bool](/api-docs/unity/Bool/) | Is that map infinite? |
| `localPath` | [Null](/api-docs/unity/Null/)<[String](/api-docs/unity/String/)> | Local path of the TmxMap supplied during parsing. |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:structInit` | - |

