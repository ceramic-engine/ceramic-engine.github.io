---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: IntFloatMapKeyIterator
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/IntFloatMapKeyIterator/
---

# IntFloatMapKeyIterator

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/IntFloatMap.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.IntFloatMapKeyIterator</strong> (Class)</div>

Iterator implementation for IntFloatMap keys.
Allows iterating over integer keys in the map when it was created with iterable=true.

## Instance Members

<div class="signature field-method no-description" id="hasNext"><code><span class="field-name">hasNext</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasNext"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="next"><code><span class="field-name">next</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#next"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

## Private Members

<div class="signature field-var no-description" id="iterableKeys"><code><span class="field-name">iterableKeys</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#iterableKeys"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="i"><code><span class="field-name">i</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#i"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="len"><code><span class="field-name">len</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#len"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">intFloatMap</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/IntFloatMap/" class="type-link">IntFloatMap</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `intFloatMap` | [IntFloatMap](/api-docs/clay-native/ceramic/IntFloatMap/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:allow` | ceramic.IntFloatMap |

