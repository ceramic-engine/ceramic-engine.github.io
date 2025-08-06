---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ldtk
title: LdtkTilesetDefinition
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/LdtkTilesetDefinition/
---

# LdtkTilesetDefinition

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ldtk/runtime/src/ceramic/LdtkData.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.LdtkTilesetDefinition</strong> (Class)</div>

## Instance Members

<div class="signature field-var has-description has-plugin" id="defs"><div class="plugin-name">ldtk</div><code><span class="field-name">defs</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/LdtkDefinitions/" class="type-link">LdtkDefinitions</a></code><a class="header-anchor" href="#defs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `LdtkDefinitions` object this tileset belongs to

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="ceramicTileset"><div class="plugin-name">ldtk</div><code><span class="field-name">ceramicTileset</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Tileset/" class="type-link">Tileset</a></code><a class="header-anchor" href="#ceramicTileset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The Ceramic tileset generated from this tileset

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="cHei"><div class="plugin-name">ldtk</div><code><span class="field-name">cHei</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#cHei"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Grid-based height

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="cWid"><div class="plugin-name">ldtk</div><code><span class="field-name">cWid</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#cWid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Grid-based width

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="customData"><div class="plugin-name">ldtk</div><code><span class="field-name">customData</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/LdtkTileCustomData/" class="type-link">LdtkTileCustomData</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#customData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An array of custom tile metadata

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="embedAtlas"><div class="plugin-name">ldtk</div><code><span class="field-name">embedAtlas</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/LdtkEmbedAtlas/" class="type-link">LdtkEmbedAtlas</a></code><a class="header-anchor" href="#embedAtlas"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If this value isn't `None`, then it means that this atlas uses an internal LDtk atlas image instead of a loaded one.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="enumTags"><div class="plugin-name">ldtk</div><code><span class="field-name">enumTags</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/LdtkEnumTag/" class="type-link">LdtkEnumTag</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#enumTags"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tileset tags using Enum values specified by tagsSourceEnumId. This array contains 1 element per Enum value, which contains an array of all Tile IDs that are tagged with it.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="identifier"><div class="plugin-name">ldtk</div><code><span class="field-name">identifier</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#identifier"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

User defined unique identifier

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="padding"><div class="plugin-name">ldtk</div><code><span class="field-name">padding</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#padding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Distance in pixels from image borders

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="pxHei"><div class="plugin-name">ldtk</div><code><span class="field-name">pxHei</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#pxHei"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Image height in pixels

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="pxWid"><div class="plugin-name">ldtk</div><code><span class="field-name">pxWid</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#pxWid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Image width in pixels

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="relPath"><div class="plugin-name">ldtk</div><code><span class="field-name">relPath</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#relPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Path to the source file, relative to the current project JSON file
It can be null if no image was provided, or when using an embed atlas.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="spacing"><div class="plugin-name">ldtk</div><code><span class="field-name">spacing</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#spacing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Space in pixels between all tiles

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tags"><div class="plugin-name">ldtk</div><code><span class="field-name">tags</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#tags"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An array of user-defined tags to organize the Tilesets

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tagsSourceEnumUid"><div class="plugin-name">ldtk</div><code><span class="field-name">tagsSourceEnumUid</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#tagsSourceEnumUid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optional Enum definition UID used for this tileset meta-data

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tileGridSize"><div class="plugin-name">ldtk</div><code><span class="field-name">tileGridSize</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#tileGridSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The size of a tile in this tileset

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="uid"><div class="plugin-name">ldtk</div><code><span class="field-name">uid</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#uid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unique Int identifier

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="averageColors"><div class="plugin-name">ldtk</div><code><span class="field-name">averageColors</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#averageColors"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of colors (with alpha) for this tileset tiles.
Can be useful to know if a tile is opaque or not.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="tileIdByCustomData"><div class="plugin-name">ldtk</div><code><span class="field-name">tileIdByCustomData</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#tileIdByCustomData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `data` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="averageColor"><div class="plugin-name">ldtk</div><code><span class="field-name">averageColor</span><span class="parenthesis">(</span><span class="arg-name">tileId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/AlphaColor/" class="type-link">AlphaColor</a></code><a class="header-anchor" href="#averageColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `tileId` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [AlphaColor](/api-docs/clay-web/ceramic/AlphaColor/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="toString"><div class="plugin-name">ldtk</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">ldtk</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">defs</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/LdtkDefinitions/" class="type-link">LdtkDefinitions</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `defs` | [LdtkDefinitions](/api-docs/clay-web/ceramic/LdtkDefinitions/) | *(optional)* |
| `json` | [haxe.DynamicAccess](/api-docs/clay-web/haxe/DynamicAccess/)<[Dynamic](/api-docs/clay-web/Dynamic/)> | *(optional)* |

