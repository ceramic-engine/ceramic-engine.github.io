---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tiled
title: TmxWangSet
target: Unity
permalink: api-docs/unity/format/tmx/TmxWangSet/
---

# TmxWangSet

<div class="view-source"><a href="https://github.com/ceramic-engine/format-tiled/blob/master/format/tmx/Data.hx">View source</a></div>

<div class="type-hierarchy"><strong>format.tmx.TmxWangSet</strong> (Class)</div>

Defines a list of corner colors and a list of edge colors, and any number of Wang tiles using these colors.

## Instance Members

<div class="signature field-var has-description" id="name"><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The name of the Wang set.

<hr class="field-separator" />

<div class="signature field-var has-description" id="tile"><code><span class="field-name">tile</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#tile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The tile ID of the tile representing this Wang set.

<hr class="field-separator" />

<div class="signature field-var has-description" id="corners"><code><span class="field-name">corners</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/format/tmx/TmxWangSetColor/" class="type-link">TmxWangSetColor</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#corners"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A color that can be used to define the corner of a Wang tile.

<hr class="field-separator" />

<div class="signature field-var has-description" id="edges"><code><span class="field-name">edges</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/format/tmx/TmxWangSetColor/" class="type-link">TmxWangSetColor</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#edges"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A color that can be used to define the edge of a Wang tile.

<hr class="field-separator" />

<div class="signature field-var has-description" id="tiles"><code><span class="field-name">tiles</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/format/tmx/TmxWangSetTile/" class="type-link">TmxWangSetTile</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#tiles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Defines a Wang tile, by referring to a tile in the tileset and associating it with a certain Wang ID.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">tile</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">corners</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/format/tmx/TmxWangSetColor/" class="type-link">TmxWangSetColor</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">edges</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/format/tmx/TmxWangSetColor/" class="type-link">TmxWangSetColor</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">tiles</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/format/tmx/TmxWangSetTile/" class="type-link">TmxWangSetTile</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/unity/String/) | The name of the Wang set. |
| `tile` | [Int](/api-docs/unity/Int/) | The tile ID of the tile representing this Wang set. |
| `corners` | [Array](/api-docs/unity/Array/)<[TmxWangSetColor](/api-docs/unity/format/tmx/TmxWangSetColor/)> | A color that can be used to define the corner of a Wang tile. |
| `edges` | [Array](/api-docs/unity/Array/)<[TmxWangSetColor](/api-docs/unity/format/tmx/TmxWangSetColor/)> | A color that can be used to define the edge of a Wang tile. |
| `tiles` | [Array](/api-docs/unity/Array/)<[TmxWangSetTile](/api-docs/unity/format/tmx/TmxWangSetTile/)> | Defines a Wang tile, by referring to a tile in the tileset and associating it with a certain Wang ID. |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:structInit` | - |

