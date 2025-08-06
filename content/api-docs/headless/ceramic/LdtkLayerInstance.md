---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ldtk
title: LdtkLayerInstance
target: Headless
permalink: api-docs/headless/ceramic/LdtkLayerInstance/
---

# LdtkLayerInstance

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ldtk/runtime/src/ceramic/LdtkData.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.LdtkLayerInstance</strong> (Class)</div>

An instance of a layer in a level.

Contains the actual tile data, entity instances, and int grid values
for this specific layer in this specific level.

## Instance Members

<div class="signature field-var has-description has-plugin" id="ceramicLayer"><div class="plugin-name">ldtk</div><code><span class="field-name">ceramicLayer</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/TilemapLayerData/" class="type-link">TilemapLayerData</a></code><a class="header-anchor" href="#ceramicLayer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The Ceramic layer generated from this level

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="level"><div class="plugin-name">ldtk</div><code><span class="field-name">level</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/LdtkLevel/" class="type-link">LdtkLevel</a></code><a class="header-anchor" href="#level"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The LDtk level this layer instance belongs to

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="def"><div class="plugin-name">ldtk</div><code><span class="field-name">def</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/LdtkLayerDefinition/" class="type-link">LdtkLayerDefinition</a></code><a class="header-anchor" href="#def"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The related layer definition

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="opacity"><div class="plugin-name">ldtk</div><code><span class="field-name">opacity</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#opacity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Layer opacity as Float [0-1]

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="cWid"><div class="plugin-name">ldtk</div><code><span class="field-name">cWid</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#cWid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Grid-based width

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="cHei"><div class="plugin-name">ldtk</div><code><span class="field-name">cHei</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#cHei"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Grid-based height

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="pxTotalOffsetX"><div class="plugin-name">ldtk</div><code><span class="field-name">pxTotalOffsetX</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#pxTotalOffsetX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Total layer X pixel offset, including both instance and definition offsets.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="pxTotalOffsetY"><div class="plugin-name">ldtk</div><code><span class="field-name">pxTotalOffsetY</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#pxTotalOffsetY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Total layer Y pixel offset, including both instance and definition offsets.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tileset"><div class="plugin-name">ldtk</div><code><span class="field-name">tileset</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/LdtkTilesetDefinition/" class="type-link">LdtkTilesetDefinition</a></code><a class="header-anchor" href="#tileset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The corresponding Tileset definition, if any.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="autoLayerTiles"><div class="plugin-name">ldtk</div><code><span class="field-name">autoLayerTiles</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#autoLayerTiles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An array containing all tile info generated by Auto-layer rules. The array is already sorted in display order (ie. 1st tile is beneath 2nd, which is beneath 3rd etc.).
Note: if multiple tiles are stacked in the same cell as the result of different rules, all tiles behind opaque ones will be discarded.
One tile is stored into 7 int values:

[0] The Tile ID in the corresponding tileset.

[1] "Flip bits", a 2-bits integer to represent the mirror transformations of the tile.
   - Bit 0 = X flip
   - Bit 1 = Y flip

Examples: f=0 (no flip), f=1 (X flip only), f=2 (Y flip only), f=3 (both flips)

[2] Pixel X coordinate of the tile in the layer. Don't forget optional layer offsets, if they exist!

[3] Pixel Y coordinate of the tile in the layer. Don't forget optional layer offsets, if they exist!

[4] Pixel X coordinate of the tile in the tileset.

[5] Pixel Y coordinate of the tile in the tileset.

[6] Pixel alpha [0-4096].

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="entityInstances"><div class="plugin-name">ldtk</div><code><span class="field-name">entityInstances</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/LdtkEntityInstance/" class="type-link">LdtkEntityInstance</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#entityInstances"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Entity instances (only on Entity layers)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="gridTiles"><div class="plugin-name">ldtk</div><code><span class="field-name">gridTiles</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#gridTiles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tile instances (only on Tile layers)

One tile is stored into 7 int values:

[0] The Tile ID in the corresponding tileset.

[1] "Flip bits", a 2-bits integer to represent the mirror transformations of the tile.
   - Bit 0 = X flip
   - Bit 1 = Y flip

Examples: f=0 (no flip), f=1 (X flip only), f=2 (Y flip only), f=3 (both flips)

[2] Pixel X coordinate of the tile in the layer. Don't forget optional layer offsets, if they exist!

[3] Pixel Y coordinate of the tile in the layer. Don't forget optional layer offsets, if they exist!

[4] Pixel X coordinate of the tile in the tileset.

[5] Pixel Y coordinate of the tile in the tileset.

[6] Pixel alpha [0-4096].

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="iid"><div class="plugin-name">ldtk</div><code><span class="field-name">iid</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#iid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unique layer instance identifier

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="intGrid"><div class="plugin-name">ldtk</div><code><span class="field-name">intGrid</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#intGrid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A list of all values in the IntGrid layer
Order is from left to right, and top to bottom (ie. first row from left to right, followed by second row, etc).
0 means "empty cell" and IntGrid values start at 1.
The array size is cWid x cHei cells.
(only IntGrid layers)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="levelId"><div class="plugin-name">ldtk</div><code><span class="field-name">levelId</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#levelId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reference to the UID of the level containing this layer instance

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="pxOffsetX"><div class="plugin-name">ldtk</div><code><span class="field-name">pxOffsetX</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#pxOffsetX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

X offset in pixels to render this layer, usually 0
(IMPORTANT: this should be added to the LayerDef optional offset, so you should probably prefer using `pxTotalOffsetX` which contains the total offset value)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="pxOffsetY"><div class="plugin-name">ldtk</div><code><span class="field-name">pxOffsetY</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#pxOffsetY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Y offset in pixels to render this layer, usually 0
(IMPORTANT: this should be added to the LayerDef optional offset, so you should probably prefer using `pxTotalOffsetY` which contains the total offset value)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="visible"><div class="plugin-name">ldtk</div><code><span class="field-name">visible</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#visible"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Layer instance visibility

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="optionalRules"><div class="plugin-name">ldtk</div><code><span class="field-name">optionalRules</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#optionalRules"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An Array containing the UIDs of optional rules that were enabled in this specific layer instance.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="seed"><div class="plugin-name">ldtk</div><code><span class="field-name">seed</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#seed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Random seed used for Auto-Layers rendering

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="toString"><div class="plugin-name">ldtk</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">ldtk</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">level</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/LdtkLevel/" class="type-link">LdtkLevel</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">ldtkData</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/LdtkData/" class="type-link">LdtkData</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">ldtkWorld</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/LdtkWorld/" class="type-link">LdtkWorld</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `level` | [LdtkLevel](/api-docs/headless/ceramic/LdtkLevel/) | *(optional)* |
| `ldtkData` | [LdtkData](/api-docs/headless/ceramic/LdtkData/) | *(optional)* |
| `ldtkWorld` | [LdtkWorld](/api-docs/headless/ceramic/LdtkWorld/) | *(optional)* |
| `json` | [haxe.DynamicAccess](/api-docs/headless/haxe/DynamicAccess/)<[Dynamic](/api-docs/headless/Dynamic/)> | *(optional)* |

