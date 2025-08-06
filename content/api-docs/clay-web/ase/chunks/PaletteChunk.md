---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ase
title: PaletteChunk
target: Clay (Web)
permalink: api-docs/clay-web/ase/chunks/PaletteChunk/
---

# PaletteChunk

<div class="view-source"><a href="https://github.com/ceramic-engine/ase/blob/master/src/ase/chunks/PaletteChunk.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ase/chunks/Chunk/">Chunk</a> → <strong>ase.chunks.PaletteChunk</strong> (Class)</div>

## Static Members

<div class="signature field-method no-description" id="fromBytes"><code><span class="field-name">fromBytes</span><span class="parenthesis">(</span><span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">PaletteChunk</a></code><a class="header-anchor" href="#fromBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `bytes` | [haxe.io.Bytes](/api-docs/clay-web/haxe/io/Bytes/) |

| Returns |
|---------|
| [PaletteChunk](/api-docs/clay-web/ase/chunks/PaletteChunk/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="fromPaletteEntries"><code><span class="field-name">fromPaletteEntries</span><span class="parenthesis">(</span><span class="arg-name">entries</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ase/PaletteEntry/" class="type-link">ase.PaletteEntry</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">PaletteChunk</a></code><a class="header-anchor" href="#fromPaletteEntries"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `entries` | [Array](/api-docs/clay-web/Array/)<[ase.PaletteEntry](/api-docs/clay-web/ase/PaletteEntry/)> |

| Returns |
|---------|
| [PaletteChunk](/api-docs/clay-web/ase/chunks/PaletteChunk/) |

## Instance Members

<div class="signature field-var no-description" id="paletteSize"><code><span class="field-name">paletteSize</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#paletteSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="firstColorIndex"><code><span class="field-name">firstColorIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#firstColorIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="lastColorIndex"><code><span class="field-name">lastColorIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#lastColorIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="entries"><code><span class="field-name">entries</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#entries"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="addEntry"><code><span class="field-name">addEntry</span><span class="parenthesis">(</span><span class="arg-name">entry</span><span class="operator">:</span> <a href="/api-docs/clay-web/ase/chunks/PaletteChunkEntry/" class="type-link">PaletteChunkEntry</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addEntry"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `entry` | [PaletteChunkEntry](/api-docs/clay-web/ase/chunks/PaletteChunkEntry/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="toBytes"><code><span class="field-name">toBytes</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">out</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/io/BytesOutput/" class="type-link">haxe.io.BytesOutput</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a></code><a class="header-anchor" href="#toBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `out` | [haxe.io.BytesOutput](/api-docs/clay-web/haxe/io/BytesOutput/) | *(optional)* |

| Returns |
|---------|
| [haxe.io.Bytes](/api-docs/clay-web/haxe/io/Bytes/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">createHeader</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `createHeader` | [Bool](/api-docs/clay-web/Bool/) | `false` |

## Private Members

<div class="signature field-method no-description" id="getSizeWithoutHeader"><code><span class="field-name">getSizeWithoutHeader</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getSizeWithoutHeader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

