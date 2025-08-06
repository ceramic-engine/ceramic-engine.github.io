---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ase
title: LayerChunk
target: Unity
permalink: api-docs/unity/ase/chunks/LayerChunk/
---

# LayerChunk

<div class="view-source"><a href="https://github.com/ceramic-engine/ase/blob/master/src/ase/chunks/LayerChunk.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ase/chunks/Chunk/">Chunk</a> → <strong>ase.chunks.LayerChunk</strong> (Class)</div>

## Static Members

<div class="signature field-method no-description" id="fromBytes"><code><span class="field-name">fromBytes</span><span class="parenthesis">(</span><span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">LayerChunk</a></code><a class="header-anchor" href="#fromBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `bytes` | [haxe.io.Bytes](/api-docs/unity/haxe/io/Bytes/) |

| Returns |
|---------|
| [LayerChunk](/api-docs/unity/ase/chunks/LayerChunk/) |

## Instance Members

<div class="signature field-var no-description" id="flags"><code><span class="field-name">flags</span><span class="operator">:</span> <a href="/api-docs/unity/ase/chunks/LayerFlags/" class="type-link">LayerFlags</a></code><a class="header-anchor" href="#flags"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="layerType"><code><span class="field-name">layerType</span><span class="operator">:</span> <a href="/api-docs/unity/ase/chunks/LayerType/" class="type-link">LayerType</a></code><a class="header-anchor" href="#layerType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="childLevel"><code><span class="field-name">childLevel</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#childLevel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="defaultWidth"><code><span class="field-name">defaultWidth</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#defaultWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="defaultHeight"><code><span class="field-name">defaultHeight</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#defaultHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="blendMode"><code><span class="field-name">blendMode</span><span class="operator">:</span> <a href="/api-docs/unity/ase/chunks/LayerBlendMode/" class="type-link">LayerBlendMode</a></code><a class="header-anchor" href="#blendMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="opacity"><code><span class="field-name">opacity</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#opacity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="name"><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="tilesetIndex"><code><span class="field-name">tilesetIndex</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#tilesetIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="toBytes"><code><span class="field-name">toBytes</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">out</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/io/BytesOutput/" class="type-link">haxe.io.BytesOutput</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a></code><a class="header-anchor" href="#toBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `out` | [haxe.io.BytesOutput](/api-docs/unity/haxe/io/BytesOutput/) | *(optional)* |

| Returns |
|---------|
| [haxe.io.Bytes](/api-docs/unity/haxe/io/Bytes/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">createHeader</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `createHeader` | [Bool](/api-docs/unity/Bool/) | `false` |

## Private Members

<div class="signature field-method no-description" id="getSizeWithoutHeader"><code><span class="field-name">getSizeWithoutHeader</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getSizeWithoutHeader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

