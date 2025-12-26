---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: Utf8
target: Clay (Native)
permalink: api-docs/clay-native/loreline/Utf8/
---

# Utf8

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Utf8.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.Utf8</strong> (Class)</div>

UTF-8 aware string operations that can be used as extension methods.
Use with: using loreline.Utf8;

## Static Members

<div class="signature field-method has-description" id="uLength"><code><span class="field-name">uLength</span><span class="parenthesis">(</span><span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#uLength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

UTF-8 aware string length

| Name | Type |
|------|------|
| `str` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="uSubstr"><code><span class="field-name">uSubstr</span><span class="parenthesis">(</span><span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">len</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#uSubstr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

UTF-8 aware substring extraction

| Name | Type | Default |
|------|------|---------|
| `str` | [String](/api-docs/clay-native/String/) | |
| `pos` | [Int](/api-docs/clay-native/Int/) | |
| `len` | [Int](/api-docs/clay-native/Int/) | *(optional)* |

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="uSubstring"><code><span class="field-name">uSubstring</span><span class="parenthesis">(</span><span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">startIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">endIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#uSubstring"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

UTF-8 aware substring with end position

| Name | Type | Default |
|------|------|---------|
| `str` | [String](/api-docs/clay-native/String/) | |
| `startIndex` | [Int](/api-docs/clay-native/Int/) | |
| `endIndex` | [Int](/api-docs/clay-native/Int/) | *(optional)* |

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="uCharCodeAt"><code><span class="field-name">uCharCodeAt</span><span class="parenthesis">(</span><span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#uCharCodeAt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

UTF-8 aware character code at position

| Name | Type |
|------|------|
| `str` | [String](/api-docs/clay-native/String/) |
| `pos` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Null](/api-docs/clay-native/Null/)<[Int](/api-docs/clay-native/Int/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="uIndexOf"><code><span class="field-name">uIndexOf</span><span class="parenthesis">(</span><span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">substr</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">startIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#uIndexOf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

UTF-8 aware indexOf

| Name | Type | Default |
|------|------|---------|
| `str` | [String](/api-docs/clay-native/String/) | |
| `substr` | [String](/api-docs/clay-native/String/) | |
| `startIndex` | [Int](/api-docs/clay-native/Int/) | *(optional)* |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="uLastIndexOf"><code><span class="field-name">uLastIndexOf</span><span class="parenthesis">(</span><span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">substr</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">startIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#uLastIndexOf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

UTF-8 aware lastIndexOf

| Name | Type | Default |
|------|------|---------|
| `str` | [String](/api-docs/clay-native/String/) | |
| `substr` | [String](/api-docs/clay-native/String/) | |
| `startIndex` | [Int](/api-docs/clay-native/Int/) | *(optional)* |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="uToChars"><code><span class="field-name">uToChars</span><span class="parenthesis">(</span><span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#uToChars"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

UTF-8 aware string to char array

| Name | Type |
|------|------|
| `str` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [Array](/api-docs/clay-native/Array/)<[String](/api-docs/clay-native/String/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="uCharAt"><code><span class="field-name">uCharAt</span><span class="parenthesis">(</span><span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#uCharAt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

UTF-8 aware charAt

| Name | Type |
|------|------|
| `str` | [String](/api-docs/clay-native/String/) |
| `pos` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

