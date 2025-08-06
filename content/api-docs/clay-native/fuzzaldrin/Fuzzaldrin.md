---
layout: api-docs
category: api-docs
subCategory: doc
menu: Fuzzaldrin
title: Fuzzaldrin
target: Clay (Native)
permalink: api-docs/clay-native/fuzzaldrin/Fuzzaldrin/
---

# Fuzzaldrin

<div class="view-source"><a href="https://github.com/jeremyfa/fuzzaldrin/blob/master/src/fuzzaldrin/Fuzzaldrin.hx">View source</a></div>

<div class="type-hierarchy"><strong>fuzzaldrin.Fuzzaldrin</strong> (Class)</div>

## Static Members

<div class="signature field-var no-description" id="PATH_SEPARATOR"><code><span class="field-name">PATH_SEPARATOR</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#PATH_SEPARATOR"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="RE_SPACE"><code><span class="field-name">RE_SPACE</span><span class="operator">:</span> <a href="/api-docs/clay-native/EReg/" class="type-link">EReg</a></code><a class="header-anchor" href="#RE_SPACE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="filter"><code><span class="field-name">filter</span><span class="parenthesis">(</span><span class="arg-name">candidates</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">filter.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">query</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <span class="type-name">AnonStruct</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">filter.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#filter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `candidates` | [Array](/api-docs/clay-native/Array/)<filter.T> | |
| `query` | [String](/api-docs/clay-native/String/) | |
| `options` | AnonStruct | *(optional)* |

| Returns |
|---------|
| [Array](/api-docs/clay-native/Array/)<filter.T> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="score"><code><span class="field-name">score</span><span class="parenthesis">(</span><span class="arg-name">string</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">query</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#score"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `string` | [String](/api-docs/clay-native/String/) |
| `query` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

## Private Members

<div class="signature field-method no-description" id="sortMatches"><code><span class="field-name">sortMatches</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#sortMatches"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Int](/api-docs/clay-native/Int/) |
| `b` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="match"><code><span class="field-name">match</span><span class="parenthesis">(</span><span class="arg-name">string</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">query</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#match"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `string` | [String](/api-docs/clay-native/String/) |
| `query` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [Array](/api-docs/clay-native/Array/)<[Int](/api-docs/clay-native/Int/)> |

