---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ase
title: UserDataChunk
target: Headless
permalink: api-docs/headless/ase/chunks/UserDataChunk/
---

# UserDataChunk

<div class="view-source"><a href="https://github.com/ceramic-engine/ase/blob/master/src/ase/chunks/UserDataChunk.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/ase/chunks/Chunk/">Chunk</a> → <strong>ase.chunks.UserDataChunk</strong> (Class)</div>

## Static Members

<div class="signature field-method no-description" id="fromBytes"><code><span class="field-name">fromBytes</span><span class="parenthesis">(</span><span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">UserDataChunk</a></code><a class="header-anchor" href="#fromBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `bytes` | [haxe.io.Bytes](/api-docs/headless/haxe/io/Bytes/) |

| Returns |
|---------|
| [UserDataChunk](/api-docs/headless/ase/chunks/UserDataChunk/) |

## Instance Members

<div class="signature field-var no-description" id="flags"><code><span class="field-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#flags"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="text"><code><span class="field-name">text</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#text"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="hasText"><code><span class="field-name">hasText</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="hasColor"><code><span class="field-name">hasColor</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="red"><code><span class="field-name">red</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#red"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="green"><code><span class="field-name">green</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#green"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="blue"><code><span class="field-name">blue</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#blue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="alpha"><code><span class="field-name">alpha</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#alpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="toBytes"><code><span class="field-name">toBytes</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">out</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/io/BytesOutput/" class="type-link">haxe.io.BytesOutput</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a></code><a class="header-anchor" href="#toBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `out` | [haxe.io.BytesOutput](/api-docs/headless/haxe/io/BytesOutput/) | *(optional)* |

| Returns |
|---------|
| [haxe.io.Bytes](/api-docs/headless/haxe/io/Bytes/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">createHeader</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `createHeader` | [Bool](/api-docs/headless/Bool/) | `false` |

## Private Members

<div class="signature field-method no-description" id="getSizeWithoutHeader"><code><span class="field-name">getSizeWithoutHeader</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getSizeWithoutHeader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

