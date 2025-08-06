---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ase
title: Chunk
target: Headless
permalink: api-docs/headless/ase/chunks/Chunk/
---

# Chunk

<div class="view-source"><a href="https://github.com/ceramic-engine/ase/blob/master/src/ase/chunks/Chunk.hx">View source</a></div>

<div class="type-hierarchy"><strong>ase.chunks.Chunk</strong> (Class) → <a href="/api-docs/headless/ase/chunks/CelChunk/">CelChunk</a>, <a href="/api-docs/headless/ase/chunks/CelExtraChunk/">CelExtraChunk</a>, <a href="/api-docs/headless/ase/chunks/ColorProfileChunk/">ColorProfileChunk</a>, <a href="/api-docs/headless/ase/chunks/ExternalFilesChunk/">ExternalFilesChunk</a>, <a href="/api-docs/headless/ase/chunks/LayerChunk/">LayerChunk</a>, <a href="/api-docs/headless/ase/chunks/MaskChunk/">MaskChunk</a>, <a href="/api-docs/headless/ase/chunks/OldPaleteChunk/">OldPaleteChunk</a>, <a href="/api-docs/headless/ase/chunks/PaletteChunk/">PaletteChunk</a>, <a href="/api-docs/headless/ase/chunks/SliceChunk/">SliceChunk</a>, <a href="/api-docs/headless/ase/chunks/TagsChunk/">TagsChunk</a>, <a href="/api-docs/headless/ase/chunks/TilesetChunk/">TilesetChunk</a>, <a href="/api-docs/headless/ase/chunks/UserDataChunk/">UserDataChunk</a></div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/headless/ase/types/Serializable/">ase.types.Serializable</a></div>

## Static Members

<div class="signature field-method no-description" id="fromBytes"><code><span class="field-name">fromBytes</span><span class="parenthesis">(</span><span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Chunk</a></code><a class="header-anchor" href="#fromBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `bytes` | [haxe.io.Bytes](/api-docs/headless/haxe/io/Bytes/) |

| Returns |
|---------|
| [Chunk](/api-docs/headless/ase/chunks/Chunk/) |

## Instance Members

<div class="signature field-var no-description" id="header"><code><span class="field-name">header</span><span class="operator">:</span> <a href="/api-docs/headless/ase/chunks/ChunkHeader/" class="type-link">ChunkHeader</a></code><a class="header-anchor" href="#header"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="userData"><code><span class="field-name">userData</span><span class="operator">:</span> <a href="/api-docs/headless/ase/chunks/UserDataChunk/" class="type-link">UserDataChunk</a></code><a class="header-anchor" href="#userData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="size"><code><span class="field-name">size</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#size"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="toBytes"><code><span class="field-name">toBytes</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">out</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/io/BytesOutput/" class="type-link">haxe.io.BytesOutput</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a></code><a class="header-anchor" href="#toBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `out` | [haxe.io.BytesOutput](/api-docs/headless/haxe/io/BytesOutput/) | *(optional)* |

| Returns |
|---------|
| [haxe.io.Bytes](/api-docs/headless/haxe/io/Bytes/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

## Private Members

<div class="signature field-method no-description" id="getSizeWithoutHeader"><code><span class="field-name">getSizeWithoutHeader</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getSizeWithoutHeader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="writeHeaderBytes"><code><span class="field-name">writeHeaderBytes</span><span class="parenthesis">(</span><span class="arg-name">out</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/io/BytesOutput/" class="type-link">haxe.io.BytesOutput</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#writeHeaderBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `out` | [haxe.io.BytesOutput](/api-docs/headless/haxe/io/BytesOutput/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">createHeader</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/headless/ase/types/ChunkType/" class="type-link">ase.types.ChunkType</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `createHeader` | [Bool](/api-docs/headless/Bool/) | `false` |
| `type` | [ase.types.ChunkType](/api-docs/headless/ase/types/ChunkType/) | *(optional)* |

