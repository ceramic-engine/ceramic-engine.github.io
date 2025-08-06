---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tiled
title: TmxData
target: Unity
permalink: api-docs/unity/format/tmx/TmxData/
---

# TmxData

<div class="view-source"><a href="https://github.com/ceramic-engine/format-tiled/blob/master/format/tmx/Data.hx">View source</a></div>

<div class="type-hierarchy"><strong>format.tmx.TmxData</strong> (Class)</div>

When no encoding or compression is given, the tiles are stored as individual XML tile elements.
Next to that, the easiest format to parse is the "csv" (comma separated values) format.

The base64-encoded and optionally compressed layer data is somewhat more complicated to parse.
First you need to base64-decode it, then you may need to decompress it. Now you have an array of bytes,
which should be interpreted as an array of unsigned 32-bit integers using little-endian byte ordering.

Whatever format you choose for your layer data, you will always end up with so called "global tile IDs" (gids).
They are global, since they may refer to a tile from any of the tilesets used by the map.
In order to find out from which tileset the tile is you need to find the tileset with the highest
firstgid that is still lower or equal than the gid. The tilesets are always stored with increasing firstgids.

## Instance Members

<div class="signature field-var has-description" id="encoding"><code><span class="field-name">encoding</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#encoding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The encoding used to encode the tile layer data. When used, it can be "base64" and "csv" at the moment.

<hr class="field-separator" />

<div class="signature field-var has-description" id="compression"><code><span class="field-name">compression</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#compression"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The compression used to compress the tile layer data. Tiled Qt supports "gzip" and "zlib". Optional

<hr class="field-separator" />

<div class="signature field-var has-description" id="tiles"><code><span class="field-name">tiles</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/format/tmx/TmxTile/" class="type-link">TmxTile</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#tiles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Decoded tile data

<hr class="field-separator" />

<div class="signature field-var has-description" id="chunks"><code><span class="field-name">chunks</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/format/tmx/TmxChunk/" class="type-link">TmxChunk</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#chunks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Infinite maps chunk data

<hr class="field-separator" />

<div class="signature field-var has-description" id="data"><code><span class="field-name">data</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a></code><a class="header-anchor" href="#data"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Raw data. Exists for non-tile-layer data objects.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">encoding</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">Anonymous</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">compression</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">Anonymous</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">tiles</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/format/tmx/TmxTile/" class="type-link">TmxTile</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">chunks</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/format/tmx/TmxChunk/" class="type-link">TmxChunk</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Description |
|------|------|-------------|
| `encoding` | [Null](/api-docs/unity/Null/)<Anonymous> | The encoding used to encode the tile layer data. When used, it can be "base64" and "csv" at the moment. |
| `compression` | [Null](/api-docs/unity/Null/)<Anonymous> | The compression used to compress the tile layer data. Tiled Qt supports "gzip" and "zlib". Optional |
| `tiles` | [Null](/api-docs/unity/Null/)<[Array](/api-docs/unity/Array/)<[TmxTile](/api-docs/unity/format/tmx/TmxTile/)>> | Decoded tile data |
| `chunks` | [Null](/api-docs/unity/Null/)<[Array](/api-docs/unity/Array/)<[TmxChunk](/api-docs/unity/format/tmx/TmxChunk/)>> | Infinite maps chunk data |
| `data` | [Null](/api-docs/unity/Null/)<[haxe.io.Bytes](/api-docs/unity/haxe/io/Bytes/)> | Raw data. Exists for non-tile-layer data objects. |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:structInit` | - |

