---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ldtk-haxe-api
title: SimpleRuleTileset
target: Clay (Native)
permalink: api-docs/clay-native/ldtk/rules/SimpleRuleTileset/
---

# SimpleRuleTileset

<div class="type-hierarchy"><strong>ldtk.rules.SimpleRuleTileset</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-native/ldtk/rules/RuleTileset/">RuleTileset</a></div>

Tileset geometry computed from plain numbers, as found in the project JSON.
`opaqueTiles` is the `cachedPixelData.opaqueTiles` string: one char per tile id, "1" = fully opaque.

## Static Members

<div class="signature field-method no-description" id="computeCWid"><code><span class="field-name">computeCWid</span><span class="parenthesis">(</span><span class="arg-name">pxWid</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">tileGridSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">padding</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">spacing</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#computeCWid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `pxWid` | [Int](/api-docs/clay-native/Int/) |
| `tileGridSize` | [Int](/api-docs/clay-native/Int/) |
| `padding` | [Int](/api-docs/clay-native/Int/) |
| `spacing` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="fromJson"><code><span class="field-name">fromJson</span><span class="parenthesis">(</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/clay-native/ldtk/TilesetDefJson/" class="type-link">ldtk.TilesetDefJson</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">SimpleRuleTileset</a></code><a class="header-anchor" href="#fromJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `json` | [ldtk.TilesetDefJson](/api-docs/clay-native/ldtk/TilesetDefJson/) |

| Returns |
|---------|
| [SimpleRuleTileset](/api-docs/clay-native/ldtk/rules/SimpleRuleTileset/) |

## Instance Members

<div class="signature field-var no-description" id="cWid"><code><span class="field-name">cWid</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#cWid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="cHei"><code><span class="field-name">cHei</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#cHei"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="tileGridSize"><code><span class="field-name">tileGridSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#tileGridSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="padding"><code><span class="field-name">padding</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#padding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="spacing"><code><span class="field-name">spacing</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#spacing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="setOpaqueTiles"><code><span class="field-name">setOpaqueTiles</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">opaqueTiles</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setOpaqueTiles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `opaqueTiles` | [String](/api-docs/clay-native/String/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getTileCx"><code><span class="field-name">getTileCx</span><span class="parenthesis">(</span><span class="arg-name">tileId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getTileCx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `tileId` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getTileCy"><code><span class="field-name">getTileCy</span><span class="parenthesis">(</span><span class="arg-name">tileId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getTileCy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `tileId` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getTileSourceX"><code><span class="field-name">getTileSourceX</span><span class="parenthesis">(</span><span class="arg-name">tileId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getTileSourceX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `tileId` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getTileSourceY"><code><span class="field-name">getTileSourceY</span><span class="parenthesis">(</span><span class="arg-name">tileId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getTileSourceY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `tileId` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isTileOpaque"><code><span class="field-name">isTileOpaque</span><span class="parenthesis">(</span><span class="arg-name">tileId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isTileOpaque"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `tileId` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">cWid</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">cHei</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">tileGridSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">padding</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">spacing</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">opaqueTiles</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `cWid` | [Int](/api-docs/clay-native/Int/) | |
| `cHei` | [Int](/api-docs/clay-native/Int/) | |
| `tileGridSize` | [Int](/api-docs/clay-native/Int/) | |
| `padding` | [Int](/api-docs/clay-native/Int/) | |
| `spacing` | [Int](/api-docs/clay-native/Int/) | |
| `opaqueTiles` | [String](/api-docs/clay-native/String/) | *(optional)* |

## Private Members

<div class="signature field-var no-description" id="opaque"><code><span class="field-name">opaque</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/haxe/ds/Vector/" class="type-link">haxe.ds.Vector</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#opaque"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

