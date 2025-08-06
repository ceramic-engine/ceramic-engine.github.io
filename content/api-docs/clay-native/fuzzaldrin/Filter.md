---
layout: api-docs
category: api-docs
subCategory: doc
menu: Fuzzaldrin
title: Filter
target: Clay (Native)
permalink: api-docs/clay-native/fuzzaldrin/Filter/
---

# Filter

<div class="view-source"><a href="https://github.com/jeremyfa/fuzzaldrin/blob/master/src/fuzzaldrin/Filter.hx">View source</a></div>

<div class="type-hierarchy"><strong>fuzzaldrin.Filter</strong> (Class)</div>

## Static Members

<div class="signature field-method no-description" id="filter"><code><span class="field-name">filter</span><span class="parenthesis">(</span><span class="arg-name">candidates</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">filter.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">query</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">queryHasSlashes</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <span class="type-name">AnonStruct</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">filter.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#filter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `candidates` | [Array](/api-docs/clay-native/Array/)<filter.T> | |
| `query` | [String](/api-docs/clay-native/String/) | |
| `queryHasSlashes` | [Bool](/api-docs/clay-native/Bool/) | |
| `options` | AnonStruct | *(optional)* |

| Returns |
|---------|
| [Array](/api-docs/clay-native/Array/)<filter.T> |

## Private Members

<div class="signature field-method no-description" id="pluckCandidates"><code><span class="field-name">pluckCandidates</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <span class="type-name">AnonStruct</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#pluckCandidates"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | AnonStruct |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-native/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="sortCandidates"><code><span class="field-name">sortCandidates</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <span class="type-name">AnonStruct</span><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <span class="type-name">AnonStruct</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#sortCandidates"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | AnonStruct |
| `b` | AnonStruct |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

