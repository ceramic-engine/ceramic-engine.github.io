---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tiled
title: Tools
target: Unity
permalink: api-docs/unity/format/tmx/Tools/
---

# Tools

<div class="view-source"><a href="https://github.com/ceramic-engine/format-tiled/blob/master/format/tmx/Tools.hx">View source</a></div>

<div class="type-hierarchy"><strong>format.tmx.Tools</strong> (Class)</div>

...
@author Yanrishatum

## Static Members

<div class="signature field-method no-description" id="applyTSX"><code><span class="field-name">applyTSX</span><span class="parenthesis">(</span><span class="arg-name">tsx</span><span class="operator">:</span> <a href="/api-docs/unity/format/tmx/TmxTileset/" class="type-link">TmxTileset</a><span class="operator">,</span> <span class="arg-name">base</span><span class="operator">:</span> <a href="/api-docs/unity/format/tmx/TmxTileset/" class="type-link">TmxTileset</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#applyTSX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `tsx` | [TmxTileset](/api-docs/unity/format/tmx/TmxTileset/) |
| `base` | [TmxTileset](/api-docs/unity/format/tmx/TmxTileset/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="applyObjectTypeTemplate"><code><span class="field-name">applyObjectTypeTemplate</span><span class="parenthesis">(</span><span class="arg-name">obj</span><span class="operator">:</span> <a href="/api-docs/unity/format/tmx/TmxObject/" class="type-link">TmxObject</a><span class="operator">,</span> <span class="arg-name">ot</span><span class="operator">:</span> <a href="/api-docs/unity/format/tmx/TmxObjectTypeTemplate/" class="type-link">TmxObjectTypeTemplate</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#applyObjectTypeTemplate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `obj` | [TmxObject](/api-docs/unity/format/tmx/TmxObject/) |
| `ot` | [TmxObjectTypeTemplate](/api-docs/unity/format/tmx/TmxObjectTypeTemplate/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="resolveOTExternalTile"><code><span class="field-name">resolveOTExternalTile</span><span class="parenthesis">(</span><span class="arg-name">map</span><span class="operator">:</span> <a href="/api-docs/unity/format/tmx/TmxMap/" class="type-link">TmxMap</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">mapPath</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resolveOTExternalTile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resolves OTExternalTile into OTTile.
Only works if templates and tilesets were resolved and their paths are relative.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `map` | [TmxMap](/api-docs/unity/format/tmx/TmxMap/) | |  |
| `mapPath` | [String](/api-docs/unity/String/) | *(optional)* | Optional local path to the map file used for accurate TSX path resolving when comparing tilesets. |

<hr class="field-separator" />

<div class="signature field-method has-description" id="linearLayers"><code><span class="field-name">linearLayers</span><span class="parenthesis">(</span><span class="arg-name">map</span><span class="operator">:</span> <a href="/api-docs/unity/format/tmx/TmxMap/" class="type-link">TmxMap</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Anonymous</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#linearLayers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns linear array of layers removing all nested groups.
IMPORTANT! This function will apply group offset/opacity/visibility values to nested layers, don't use it if you need to keep them unchanged.

| Name | Type |
|------|------|
| `map` | [TmxMap](/api-docs/unity/format/tmx/TmxMap/) |

| Returns |
|---------|
| [Array](/api-docs/unity/Array/)<Anonymous> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="propagateObjectTypeToObject"><code><span class="field-name">propagateObjectTypeToObject</span><span class="parenthesis">(</span><span class="arg-name">obj</span><span class="operator">:</span> <a href="/api-docs/unity/format/tmx/TmxObject/" class="type-link">TmxObject</a><span class="operator">,</span> <span class="arg-name">types</span><span class="operator">:</span> <a href="/api-docs/unity/Map/" class="type-link">Map</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#propagateObjectTypeToObject"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Propagates properties from Object Type Template for specific object

| Name | Type | Description |
|------|------|-------------|
| `obj` | [TmxObject](/api-docs/unity/format/tmx/TmxObject/) | @param types |
| `types` | [Map](/api-docs/unity/Map/) |  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="propagateTilePropertiesToObject"><code><span class="field-name">propagateTilePropertiesToObject</span><span class="parenthesis">(</span><span class="arg-name">obj</span><span class="operator">:</span> <a href="/api-docs/unity/format/tmx/TmxObject/" class="type-link">TmxObject</a><span class="operator">,</span> <span class="arg-name">map</span><span class="operator">:</span> <a href="/api-docs/unity/format/tmx/TmxMap/" class="type-link">TmxMap</a><span class="operator">,</span> <span class="arg-name">gid</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#propagateTilePropertiesToObject"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Propagates tile properties of tile object in tileset to specific object.

| Name | Type | Description |
|------|------|-------------|
| `obj` | [TmxObject](/api-docs/unity/format/tmx/TmxObject/) | Object to propagate tile data to. |
| `map` | [TmxMap](/api-docs/unity/format/tmx/TmxMap/) | @param gid Global tile ID from which to take properties. |
| `gid` | [Int](/api-docs/unity/Int/) | Global tile ID from which to take properties. |

<hr class="field-separator" />

<div class="signature field-method no-description" id="propagateTileProperties"><code><span class="field-name">propagateTileProperties</span><span class="parenthesis">(</span><span class="arg-name">map</span><span class="operator">:</span> <a href="/api-docs/unity/format/tmx/TmxMap/" class="type-link">TmxMap</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#propagateTileProperties"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `map` | [TmxMap](/api-docs/unity/format/tmx/TmxMap/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="propagateObjectTypes"><code><span class="field-name">propagateObjectTypes</span><span class="parenthesis">(</span><span class="arg-name">map</span><span class="operator">:</span> <a href="/api-docs/unity/format/tmx/TmxMap/" class="type-link">TmxMap</a><span class="operator">,</span> <span class="arg-name">types</span><span class="operator">:</span> <a href="/api-docs/unity/Map/" class="type-link">Map</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">propagateObjectLayers</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">propagateTileColliders</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#propagateObjectTypes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Propagates properties from Object Type templates to all objects on the map.

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `map` | [TmxMap](/api-docs/unity/format/tmx/TmxMap/) | | Map to which properties should propagate. |
| `types` | [Map](/api-docs/unity/Map/) | | List of Object Type Templates by names. |
| `propagateObjectLayers` | [Bool](/api-docs/unity/Bool/) | `true` | Should propagate to objects on ObjectLayers? |
| `propagateTileColliders` | [Bool](/api-docs/unity/Bool/) | `true` | Should propagate to objects in collisions of tile objects? |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getTileByGid"><code><span class="field-name">getTileByGid</span><span class="parenthesis">(</span><span class="arg-name">map</span><span class="operator">:</span> <a href="/api-docs/unity/format/tmx/TmxMap/" class="type-link">TmxMap</a><span class="operator">,</span> <span class="arg-name">gid</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/format/tmx/TmxTilesetTile/" class="type-link">TmxTilesetTile</a></code><a class="header-anchor" href="#getTileByGid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns Tile settings for given tile global ID.

| Name | Type |
|------|------|
| `map` | [TmxMap](/api-docs/unity/format/tmx/TmxMap/) |
| `gid` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [TmxTilesetTile](/api-docs/unity/format/tmx/TmxTilesetTile/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getTilesetByGid"><code><span class="field-name">getTilesetByGid</span><span class="parenthesis">(</span><span class="arg-name">map</span><span class="operator">:</span> <a href="/api-docs/unity/format/tmx/TmxMap/" class="type-link">TmxMap</a><span class="operator">,</span> <span class="arg-name">gid</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/format/tmx/TmxTileset/" class="type-link">TmxTileset</a></code><a class="header-anchor" href="#getTilesetByGid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns tileset in which given global ID present.

| Name | Type |
|------|------|
| `map` | [TmxMap](/api-docs/unity/format/tmx/TmxMap/) |
| `gid` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [TmxTileset](/api-docs/unity/format/tmx/TmxTileset/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getTilesetIndexByGid"><code><span class="field-name">getTilesetIndexByGid</span><span class="parenthesis">(</span><span class="arg-name">map</span><span class="operator">:</span> <a href="/api-docs/unity/format/tmx/TmxMap/" class="type-link">TmxMap</a><span class="operator">,</span> <span class="arg-name">gid</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getTilesetIndexByGid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns tileset index in which given global ID present.

| Name | Type |
|------|------|
| `map` | [TmxMap](/api-docs/unity/format/tmx/TmxMap/) |
| `gid` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getTileUVByLidUnsafe"><code><span class="field-name">getTileUVByLidUnsafe</span><span class="parenthesis">(</span><span class="arg-name">tileset</span><span class="operator">:</span> <a href="/api-docs/unity/format/tmx/TmxTileset/" class="type-link">TmxTileset</a><span class="operator">,</span> <span class="arg-name">localId</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#getTileUVByLidUnsafe"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `x` and `y` values to `output` relative to tile position on source image of tileset.
Note: Currently do not supports non-zero margin and spacing values.

| Name | Type | Description |
|------|------|-------------|
| `tileset` | [TmxTileset](/api-docs/unity/format/tmx/TmxTileset/) | * |
| `localId` | [Int](/api-docs/unity/Int/) | * |
| `output` | [Dynamic](/api-docs/unity/Dynamic/) |  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fixObjectPlacement"><code><span class="field-name">fixObjectPlacement</span><span class="parenthesis">(</span><span class="arg-name">map</span><span class="operator">:</span> <a href="/api-docs/unity/format/tmx/TmxMap/" class="type-link">TmxMap</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#fixObjectPlacement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shifts origin of objects from bottom-left edge to top-left edge.
Left out for compatibility

| Name | Type |
|------|------|
| `map` | [TmxMap](/api-docs/unity/format/tmx/TmxMap/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="topLeftObjectOrigin"><code><span class="field-name">topLeftObjectOrigin</span><span class="parenthesis">(</span><span class="arg-name">map</span><span class="operator">:</span> <a href="/api-docs/unity/format/tmx/TmxMap/" class="type-link">TmxMap</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#topLeftObjectOrigin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shifts origin of objects from bottom-left edge to top-left edge.

| Name | Type |
|------|------|
| `map` | [TmxMap](/api-docs/unity/format/tmx/TmxMap/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getTilesCountInLineOnTileset"><code><span class="field-name">getTilesCountInLineOnTileset</span><span class="parenthesis">(</span><span class="arg-name">tileset</span><span class="operator">:</span> <a href="/api-docs/unity/format/tmx/TmxTileset/" class="type-link">TmxTileset</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getTilesCountInLineOnTileset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns amount of tiles in one line in given tileset. Use it for UV calculation.

| Name | Type |
|------|------|
| `tileset` | [TmxTileset](/api-docs/unity/format/tmx/TmxTileset/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getTilesCountInColumnOnTileset"><code><span class="field-name">getTilesCountInColumnOnTileset</span><span class="parenthesis">(</span><span class="arg-name">tileset</span><span class="operator">:</span> <a href="/api-docs/unity/format/tmx/TmxTileset/" class="type-link">TmxTileset</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getTilesCountInColumnOnTileset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns amount of tiles in one column in given tileset. UV calculation.

| Name | Type |
|------|------|
| `tileset` | [TmxTileset](/api-docs/unity/format/tmx/TmxTileset/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getTilesCountInTileset"><code><span class="field-name">getTilesCountInTileset</span><span class="parenthesis">(</span><span class="arg-name">tileset</span><span class="operator">:</span> <a href="/api-docs/unity/format/tmx/TmxTileset/" class="type-link">TmxTileset</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getTilesCountInTileset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns total amount of tiles in tileset.

| Name | Type |
|------|------|
| `tileset` | [TmxTileset](/api-docs/unity/format/tmx/TmxTileset/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="tilePosition"><code><span class="field-name">tilePosition</span><span class="parenthesis">(</span><span class="arg-name">map</span><span class="operator">:</span> <a href="/api-docs/unity/format/tmx/TmxMap/" class="type-link">TmxMap</a><span class="operator">,</span> <span class="arg-name">tx</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">ty</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">tileset</span><span class="operator">:</span> <a href="/api-docs/unity/format/tmx/TmxTileset/" class="type-link">TmxTileset</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">lid</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">AnonStruct</span></code><a class="header-anchor" href="#tilePosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns visual tile position based on the map parameters and optionally on tileset sizes.

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `map` | [TmxMap](/api-docs/unity/format/tmx/TmxMap/) | |  |
| `tx` | [Int](/api-docs/unity/Int/) | |  |
| `ty` | [Int](/api-docs/unity/Int/) | |  |
| `tileset` | [TmxTileset](/api-docs/unity/format/tmx/TmxTileset/) | *(optional)* | Optional tileset reference. If present, it's tile sizes will be used for position calculation. |
| `lid` | [Int](/api-docs/unity/Int/) | *(optional)* | Optional local tile ID on tileset. Required for imageset tilesets. |

| Returns |
|---------|
| AnonStruct |

## Private Members

<div class="signature field-method no-description" id="resolveOTExternalTileInternal"><code><span class="field-name">resolveOTExternalTileInternal</span><span class="parenthesis">(</span><span class="arg-name">map</span><span class="operator">:</span> <a href="/api-docs/unity/format/tmx/TmxMap/" class="type-link">TmxMap</a><span class="operator">,</span> <span class="arg-name">layer</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">mapPath</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">paths</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resolveOTExternalTileInternal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `map` | [TmxMap](/api-docs/unity/format/tmx/TmxMap/) |
| `layer` | Anonymous |
| `mapPath` | [String](/api-docs/unity/String/) |
| `paths` | [Array](/api-docs/unity/Array/)<[String](/api-docs/unity/String/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="linearLayersInternal"><code><span class="field-name">linearLayersInternal</span><span class="parenthesis">(</span><span class="arg-name">group</span><span class="operator">:</span> <a href="/api-docs/unity/format/tmx/TmxGroup/" class="type-link">TmxGroup</a><span class="operator">,</span> <span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Anonymous</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#linearLayersInternal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `group` | [TmxGroup](/api-docs/unity/format/tmx/TmxGroup/) |
| `output` | [Array](/api-docs/unity/Array/)<Anonymous> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="propagateTilePropertiesLayer"><code><span class="field-name">propagateTilePropertiesLayer</span><span class="parenthesis">(</span><span class="arg-name">map</span><span class="operator">:</span> <a href="/api-docs/unity/format/tmx/TmxMap/" class="type-link">TmxMap</a><span class="operator">,</span> <span class="arg-name">layer</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#propagateTilePropertiesLayer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `map` | [TmxMap](/api-docs/unity/format/tmx/TmxMap/) |
| `layer` | Anonymous |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

