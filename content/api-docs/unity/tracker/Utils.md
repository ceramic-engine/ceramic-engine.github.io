---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tracker
title: Utils
target: Unity
permalink: api-docs/unity/tracker/Utils/
---

# Utils

<div class="view-source"><a href="https://github.com/jeremyfa/tracker/blob/master/src/tracker/Utils.hx">View source</a></div>

<div class="type-hierarchy"><strong>tracker.Utils</strong> (Class)</div>

## Static Members

<div class="signature field-method has-description" id="uniformFrequencyList"><code><span class="field-name">uniformFrequencyList</span><span class="parenthesis">(</span><span class="arg-name">values</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">frequencies</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#uniformFrequencyList"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generate an uniform list of the requested size,
containing values uniformly repartited from frequencies.

| Name | Type | Description |
|------|------|-------------|
| `values` | [Array](/api-docs/unity/Array/)<[Int](/api-docs/unity/Int/)> | the values to put in list |
| `frequencies` | [Array](/api-docs/unity/Array/)<[Float](/api-docs/unity/Float/)> |  |
| `size` | [Int](/api-docs/unity/Int/) | the size of the final list |

| Returns |
|---------|
| [Array](/api-docs/unity/Array/)<[Int](/api-docs/unity/Int/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="uniqueId"><code><span class="field-name">uniqueId</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#uniqueId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Provides an identifier which is garanteed to be unique on the current session.
It however doesn't garantee that this identifier is not predictable.
| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="base62Id"><code><span class="field-name">base62Id</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">val</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#base62Id"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `val` | [Int](/api-docs/unity/Int/) | *(optional)* |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="encodeChangesetData"><code><span class="field-name">encodeChangesetData</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#encodeChangesetData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `data` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="decodeChangesetData"><code><span class="field-name">decodeChangesetData</span><span class="parenthesis">(</span><span class="arg-name">rawData</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">AnonStruct</span></code><a class="header-anchor" href="#decodeChangesetData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `rawData` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| AnonStruct |

<hr class="field-separator" />

<div class="signature field-method has-description" id="equalAny"><code><span class="field-name">equalAny</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/unity/Any/" class="type-link">Any</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/unity/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#equalAny"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Used as a workaround in targets like C++ to compare arrays
because in some situation basic equality check won't work
without typing the objects as `Any` or `Dynamic`.

| Name | Type |
|------|------|
| `a` | [Any](/api-docs/unity/Any/) |
| `b` | [Any](/api-docs/unity/Any/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

