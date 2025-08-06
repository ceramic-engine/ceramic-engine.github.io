---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tiled
title: TmxTilesetTile
target: Unity
permalink: api-docs/unity/format/tmx/TmxTilesetTile/
---

# TmxTilesetTile

<div class="view-source"><a href="https://github.com/ceramic-engine/format-tiled/blob/master/format/tmx/Data.hx">View source</a></div>

<div class="type-hierarchy"><strong>format.tmx.TmxTilesetTile</strong> (Class)</div>

## Instance Members

<div class="signature field-var has-description" id="id"><code><span class="field-name">id</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#id"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The local tile ID within its tileset.

<hr class="field-separator" />

<div class="signature field-var no-description" id="type"><code><span class="field-name">type</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="terrain"><code><span class="field-name">terrain</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#terrain"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Defines the terrain type of each corner of the tile,
given as comma-separated indexes in the terrain types array in the order
top-left, top-right, bottom-left, bottom-right. Leaving out a value means
that corner has no terrain. (optional) (since 0.9.0)

<hr class="field-separator" />

<div class="signature field-var has-description" id="probability"><code><span class="field-name">probability</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#probability"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A percentage indicating the probability that this tile is chosen when it
competes with others while editing with the terrain tool. (optional) (since 0.9.0)

<hr class="field-separator" />

<div class="signature field-var no-description" id="properties"><code><span class="field-name">properties</span><span class="operator">:</span> <a href="/api-docs/unity/format/tmx/TmxProperties/" class="type-link">TmxProperties</a></code><a class="header-anchor" href="#properties"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="image"><code><span class="field-name">image</span><span class="operator">:</span> <a href="/api-docs/unity/format/tmx/TmxImage/" class="type-link">TmxImage</a></code><a class="header-anchor" href="#image"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Since 0.9

<hr class="field-separator" />

<div class="signature field-var has-description" id="objectGroup"><code><span class="field-name">objectGroup</span><span class="operator">:</span> <a href="/api-docs/unity/format/tmx/TmxObjectGroup/" class="type-link">TmxObjectGroup</a></code><a class="header-anchor" href="#objectGroup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Since 0.10.
This group represents collision of tile and never contains Tile object type.

<hr class="field-separator" />

<div class="signature field-var has-description" id="animation"><code><span class="field-name">animation</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/format/tmx/TmxTilesetTileFrame/" class="type-link">TmxTilesetTileFrame</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#animation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Since 0.10.
Present, if tile does not static and contains animation.
Contains a list of animation frames.
As of Tiled 0.10, each tile can have exactly one animation associated with it. In the future, there could be support for multiple named animations on a tile.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">terrain</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">probability</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">properties</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/format/tmx/TmxProperties/" class="type-link">TmxProperties</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">image</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/format/tmx/TmxImage/" class="type-link">TmxImage</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">objectGroup</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/format/tmx/TmxObjectGroup/" class="type-link">TmxObjectGroup</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">animation</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/format/tmx/TmxTilesetTileFrame/" class="type-link">TmxTilesetTileFrame</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Description |
|------|------|-------------|
| `id` | [Int](/api-docs/unity/Int/) | The local tile ID within its tileset. |
| `type` | [Null](/api-docs/unity/Null/)<[String](/api-docs/unity/String/)> |  |
| `terrain` | [Null](/api-docs/unity/Null/)<[String](/api-docs/unity/String/)> | * Defines the terrain type of each corner of the tile, given as comma-separated indexes in the terrain types array in the order top-left, top-right, bottom-left, bottom-right. Leaving out a value means that corner has no terrain. (optional) (since 0.9.0) |
| `probability` | [Null](/api-docs/unity/Null/)<[Float](/api-docs/unity/Float/)> | * A percentage indicating the probability that this tile is chosen when it competes with others while editing with the terrain tool. (optional) (since 0.9.0) |
| `properties` | [Null](/api-docs/unity/Null/)<[TmxProperties](/api-docs/unity/format/tmx/TmxProperties/)> |  |
| `image` | [Null](/api-docs/unity/Null/)<[TmxImage](/api-docs/unity/format/tmx/TmxImage/)> | * Since 0.9 |
| `objectGroup` | [Null](/api-docs/unity/Null/)<[TmxObjectGroup](/api-docs/unity/format/tmx/TmxObjectGroup/)> | * Since 0.10. This group represents collision of tile and never contains Tile object type. |
| `animation` | [Null](/api-docs/unity/Null/)<[Array](/api-docs/unity/Array/)<[TmxTilesetTileFrame](/api-docs/unity/format/tmx/TmxTilesetTileFrame/)>> | * Since 0.10. Present, if tile does not static and contains animation. Contains a list of animation frames. As of Tiled 0.10, each tile can have exactly one animation associated with it. In the future, there could be support for multiple named animations on a tile. |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:structInit` | - |

