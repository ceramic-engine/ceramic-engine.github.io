---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tiled
title: TmxWangSetTile
target: Clay (Native)
permalink: api-docs/clay-native/format/tmx/TmxWangSetTile/
---

# TmxWangSetTile

<div class="view-source"><a href="https://github.com/ceramic-engine/format-tiled/blob/master/format/tmx/Data.hx">View source</a></div>

<div class="type-hierarchy"><strong>format.tmx.TmxWangSetTile</strong> (Class)</div>

Defines a Wang tile, by referring to a tile in the tileset and associating it with a certain Wang ID.

## Instance Members

<div class="signature field-var has-description" id="tileID"><code><span class="field-name">tileID</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#tileID"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The tile ID.

<hr class="field-separator" />

<div class="signature field-var has-description" id="wangID"><code><span class="field-name">wangID</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#wangID"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The Wang ID, which is a 32-bit unsigned integer stored in the format 0xCECECECE
(where each C is a corner color and each E is an edge color, from right to left clockwise, starting with the top edge)

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">tileID</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">wangID</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Description |
|------|------|-------------|
| `tileID` | [Int](/api-docs/clay-native/Int/) | The tile ID. |
| `wangID` | [Int](/api-docs/clay-native/Int/) | * The Wang ID, which is a 32-bit unsigned integer stored in the format 0xCECECECE (where each C is a corner color and each E is an edge color, from right to left clockwise, starting with the top edge) |

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |

