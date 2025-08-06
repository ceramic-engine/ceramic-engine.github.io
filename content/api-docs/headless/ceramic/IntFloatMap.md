---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: IntFloatMap
target: Headless
permalink: api-docs/headless/ceramic/IntFloatMap/
---

# IntFloatMap

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/IntFloatMap.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.IntFloatMap</strong> (Class)</div>

Fallback implementation of IntFloatMap for non-C++/C# targets.
Uses standard Map internally with additional tracking for iteration.

## Instance Members

<div class="signature field-var has-description" id="iterableKeys"><code><span class="field-name">iterableKeys</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#iterableKeys"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When this map is marked as iterable, this array will contain every key.
Only populated if iterable was set to true in constructor.

<hr class="field-separator" />

<div class="signature field-var has-description" id="size"><code><span class="field-name">size</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#size"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The number of entries in the map.

<hr class="field-separator" />

<div class="signature field-method no-description" id="clear"><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="exists"><code><span class="field-name">exists</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#exists"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="set"><code><span class="field-name">set</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#set"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [Int](/api-docs/headless/Int/) |
| `value` | [Float](/api-docs/headless/Float/) |

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="get"><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="remove"><code><span class="field-name">remove</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#remove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getInline"><code><span class="field-name">getInline</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getInline"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="existsInline"><code><span class="field-name">existsInline</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#existsInline"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="copy"><code><span class="field-name">copy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">IntFloatMap</a></code><a class="header-anchor" href="#copy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [IntFloatMap](/api-docs/headless/ceramic/IntFloatMap/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="iterator"><code><span class="field-name">iterator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/IntFloatMapIterator/" class="type-link">IntFloatMapIterator</a></code><a class="header-anchor" href="#iterator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [IntFloatMapIterator](/api-docs/headless/ceramic/IntFloatMapIterator/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="keys"><code><span class="field-name">keys</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/IntFloatMapKeyIterator/" class="type-link">IntFloatMapKeyIterator</a></code><a class="header-anchor" href="#keys"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [IntFloatMapKeyIterator](/api-docs/headless/ceramic/IntFloatMapKeyIterator/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="keyValueIterator"><code><span class="field-name">keyValueIterator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/IntFloatMapKeyValueIterator/" class="type-link">IntFloatMapKeyValueIterator</a></code><a class="header-anchor" href="#keyValueIterator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [IntFloatMapKeyValueIterator](/api-docs/headless/ceramic/IntFloatMapKeyValueIterator/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">16</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">fillFactor</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.5</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">iterable</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `size` | [Int](/api-docs/headless/Int/) | `16` |
| `fillFactor` | [Float](/api-docs/headless/Float/) | `0.5` |
| `iterable` | [Bool](/api-docs/headless/Bool/) | `false` |

## Private Members

<div class="signature field-var has-description" id="intMap"><code><span class="field-name">intMap</span><span class="operator">:</span> <a href="/api-docs/headless/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#intMap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Backing map for storing key-value pairs.

<hr class="field-separator" />

<div class="signature field-var has-description" id="iterableKeysUsed"><code><span class="field-name">iterableKeysUsed</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/IntBoolMap/" class="type-link">IntBoolMap</a></code><a class="header-anchor" href="#iterableKeysUsed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tracks which keys are in iterableKeys to avoid duplicates

