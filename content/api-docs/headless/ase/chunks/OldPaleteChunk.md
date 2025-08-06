---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ase
title: OldPaleteChunk
target: Headless
permalink: api-docs/headless/ase/chunks/OldPaleteChunk/
---

# OldPaleteChunk

<div class="view-source"><a href="https://github.com/ceramic-engine/ase/blob/master/src/ase/chunks/OldPaleteChunk.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/ase/chunks/Chunk/">Chunk</a> → <strong>ase.chunks.OldPaleteChunk</strong> (Class)</div>

## Static Members

<div class="signature field-method no-description" id="fromBytes"><code><span class="field-name">fromBytes</span><span class="parenthesis">(</span><span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">OldPaleteChunk</a></code><a class="header-anchor" href="#fromBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `bytes` | [haxe.io.Bytes](/api-docs/headless/haxe/io/Bytes/) |

| Returns |
|---------|
| [OldPaleteChunk](/api-docs/headless/ase/chunks/OldPaleteChunk/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="fromPaletteEntries"><code><span class="field-name">fromPaletteEntries</span><span class="parenthesis">(</span><span class="arg-name">entries</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/ase/PaletteEntry/" class="type-link">ase.PaletteEntry</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">OldPaleteChunk</a></code><a class="header-anchor" href="#fromPaletteEntries"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `entries` | [Array](/api-docs/headless/Array/)<[ase.PaletteEntry](/api-docs/headless/ase/PaletteEntry/)> |

| Returns |
|---------|
| [OldPaleteChunk](/api-docs/headless/ase/chunks/OldPaleteChunk/) |

## Instance Members

<div class="signature field-var no-description" id="numPackets"><code><span class="field-name">numPackets</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#numPackets"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="packets"><code><span class="field-name">packets</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/ase/chunks/Packet/" class="type-link">Packet</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#packets"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

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

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">createHeader</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `createHeader` | [Bool](/api-docs/headless/Bool/) | `false` |

