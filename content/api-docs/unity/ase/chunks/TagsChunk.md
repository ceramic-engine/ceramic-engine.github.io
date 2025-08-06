---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ase
title: TagsChunk
target: Unity
permalink: api-docs/unity/ase/chunks/TagsChunk/
---

# TagsChunk

<div class="view-source"><a href="https://github.com/ceramic-engine/ase/blob/master/src/ase/chunks/TagsChunk.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ase/chunks/Chunk/">Chunk</a> → <strong>ase.chunks.TagsChunk</strong> (Class)</div>

## Static Members

<div class="signature field-method no-description" id="fromBytes"><code><span class="field-name">fromBytes</span><span class="parenthesis">(</span><span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">TagsChunk</a></code><a class="header-anchor" href="#fromBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `bytes` | [haxe.io.Bytes](/api-docs/unity/haxe/io/Bytes/) |

| Returns |
|---------|
| [TagsChunk](/api-docs/unity/ase/chunks/TagsChunk/) |

## Instance Members

<div class="signature field-var no-description" id="numTags"><code><span class="field-name">numTags</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#numTags"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="tags"><code><span class="field-name">tags</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/ase/chunks/Tag/" class="type-link">Tag</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#tags"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="toBytes"><code><span class="field-name">toBytes</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">out</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/io/BytesOutput/" class="type-link">haxe.io.BytesOutput</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a></code><a class="header-anchor" href="#toBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `out` | [haxe.io.BytesOutput](/api-docs/unity/haxe/io/BytesOutput/) | *(optional)* |

| Returns |
|---------|
| [haxe.io.Bytes](/api-docs/unity/haxe/io/Bytes/) |

## Private Members

<div class="signature field-method no-description" id="getSizeWithoutHeader"><code><span class="field-name">getSizeWithoutHeader</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getSizeWithoutHeader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">createHeader</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `createHeader` | [Bool](/api-docs/unity/Bool/) | `false` |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

