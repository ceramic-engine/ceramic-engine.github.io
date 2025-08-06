---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ase
title: ChunkHeader
target: Clay (Native)
permalink: api-docs/clay-native/ase/chunks/ChunkHeader/
---

# ChunkHeader

<div class="view-source"><a href="https://github.com/ceramic-engine/ase/blob/master/src/ase/chunks/ChunkHeader.hx">View source</a></div>

<div class="type-hierarchy"><strong>ase.chunks.ChunkHeader</strong> (Class)</div>

## Static Members

<div class="signature field-var no-description" id="BYTE_SIZE"><code><span class="field-name">BYTE_SIZE</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BYTE_SIZE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="fromBytes"><code><span class="field-name">fromBytes</span><span class="parenthesis">(</span><span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">ChunkHeader</a></code><a class="header-anchor" href="#fromBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `bytes` | [haxe.io.Bytes](/api-docs/clay-native/haxe/io/Bytes/) |

| Returns |
|---------|
| [ChunkHeader](/api-docs/clay-native/ase/chunks/ChunkHeader/) |

## Instance Members

<div class="signature field-var no-description" id="size"><code><span class="field-name">size</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#size"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="type"><code><span class="field-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-native/ase/types/ChunkType/" class="type-link">ase.types.ChunkType</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="toBytes"><code><span class="field-name">toBytes</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">out</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/BytesOutput/" class="type-link">haxe.io.BytesOutput</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a></code><a class="header-anchor" href="#toBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `out` | [haxe.io.BytesOutput](/api-docs/clay-native/haxe/io/BytesOutput/) | *(optional)* |

| Returns |
|---------|
| [haxe.io.Bytes](/api-docs/clay-native/haxe/io/Bytes/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-native/ase/types/ChunkType/" class="type-link">ase.types.ChunkType</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `type` | [ase.types.ChunkType](/api-docs/clay-native/ase/types/ChunkType/) | *(optional)* |

