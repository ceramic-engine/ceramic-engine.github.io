---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tiled
title: TmxChunk
target: Headless
permalink: api-docs/headless/format/tmx/TmxChunk/
---

# TmxChunk

<div class="view-source"><a href="https://github.com/ceramic-engine/format-tiled/blob/master/format/tmx/Data.hx">View source</a></div>

<div class="type-hierarchy"><strong>format.tmx.TmxChunk</strong> (Class)</div>

This is currently added only for infinite maps. The contents of a chunk element is same as that of
the data element, except it stores the data of the area specified in the attributes.

## Instance Members

<div class="signature field-var has-description" id="x"><code><span class="field-name">x</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#x"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The x coordinate of the chunk in tiles.

<hr class="field-separator" />

<div class="signature field-var has-description" id="y"><code><span class="field-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The y coordinate of the chunk in tiles.

<hr class="field-separator" />

<div class="signature field-var has-description" id="width"><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The width of the chunk in tiles.

<hr class="field-separator" />

<div class="signature field-var has-description" id="height"><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The height of the chunk in tiles.

<hr class="field-separator" />

<div class="signature field-var has-description" id="tiles"><code><span class="field-name">tiles</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/format/tmx/TmxTile/" class="type-link">TmxTile</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#tiles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Decoded tile data

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">tiles</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/format/tmx/TmxTile/" class="type-link">TmxTile</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Description |
|------|------|-------------|
| `x` | [Int](/api-docs/headless/Int/) | The x coordinate of the chunk in tiles. |
| `y` | [Int](/api-docs/headless/Int/) | The y coordinate of the chunk in tiles. |
| `width` | [Int](/api-docs/headless/Int/) | The width of the chunk in tiles. |
| `height` | [Int](/api-docs/headless/Int/) | The height of the chunk in tiles. |
| `tiles` | [Array](/api-docs/headless/Array/)<[TmxTile](/api-docs/headless/format/tmx/TmxTile/)> | Decoded tile data |

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |

