---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: Utf8Vector
target: Headless
permalink: api-docs/headless/loreline/Utf8Vector/
---

# Utf8Vector

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Utf8Vector.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.Utf8Vector</strong> (Class)</div>

Mirrors the loreline.Utf8 extension API but over a Vector<Int> of code
points, so a lexer/scanner whose source buffer is a Vector<Int> can index
characters in O(1) on every target. Enabled via -D loreline_utf8_vector.

Use with: using loreline.Utf8Vector;

Method names, signatures and return types match loreline.Utf8, so call
sites (input.uCharCodeAt(pos), input.uSubstr(...), ...) resolve here or on
loreline.Utf8 purely by the receiver type, with no other change.

## Static Members

<div class="signature field-method no-description" id="uLength"><code><span class="field-name">uLength</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/ds/Vector/" class="type-link">haxe.ds.Vector</a><span class="operator">&lt;</span><a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#uLength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `v` | [haxe.ds.Vector](/api-docs/headless/haxe/ds/Vector/)<[Int](/api-docs/headless/Int/)> |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="uCharCodeAt"><code><span class="field-name">uCharCodeAt</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/ds/Vector/" class="type-link">haxe.ds.Vector</a><span class="operator">&lt;</span><a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#uCharCodeAt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `v` | [haxe.ds.Vector](/api-docs/headless/haxe/ds/Vector/)<[Int](/api-docs/headless/Int/)> |
| `pos` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="uSubstr"><code><span class="field-name">uSubstr</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/ds/Vector/" class="type-link">haxe.ds.Vector</a><span class="operator">&lt;</span><a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">len</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#uSubstr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `v` | [haxe.ds.Vector](/api-docs/headless/haxe/ds/Vector/)<[Int](/api-docs/headless/Int/)> | |
| `pos` | [Int](/api-docs/headless/Int/) | |
| `len` | [Int](/api-docs/headless/Int/) | *(optional)* |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="uSubstring"><code><span class="field-name">uSubstring</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/ds/Vector/" class="type-link">haxe.ds.Vector</a><span class="operator">&lt;</span><a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">startIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">endIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#uSubstring"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `v` | [haxe.ds.Vector](/api-docs/headless/haxe/ds/Vector/)<[Int](/api-docs/headless/Int/)> | |
| `startIndex` | [Int](/api-docs/headless/Int/) | |
| `endIndex` | [Int](/api-docs/headless/Int/) | *(optional)* |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="uCharAt"><code><span class="field-name">uCharAt</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/ds/Vector/" class="type-link">haxe.ds.Vector</a><span class="operator">&lt;</span><a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#uCharAt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `v` | [haxe.ds.Vector](/api-docs/headless/haxe/ds/Vector/)<[Int](/api-docs/headless/Int/)> |
| `pos` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="uIndexOf"><code><span class="field-name">uIndexOf</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/ds/Vector/" class="type-link">haxe.ds.Vector</a><span class="operator">&lt;</span><a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">substr</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">startIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#uIndexOf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `v` | [haxe.ds.Vector](/api-docs/headless/haxe/ds/Vector/)<[Int](/api-docs/headless/Int/)> | |
| `substr` | [String](/api-docs/headless/String/) | |
| `startIndex` | [Int](/api-docs/headless/Int/) | *(optional)* |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

## Private Members

<div class="signature field-method no-description" id="slice"><code><span class="field-name">slice</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/ds/Vector/" class="type-link">haxe.ds.Vector</a><span class="operator">&lt;</span><a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">start</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">end</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#slice"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `v` | [haxe.ds.Vector](/api-docs/headless/haxe/ds/Vector/)<[Int](/api-docs/headless/Int/)> |
| `start` | [Int](/api-docs/headless/Int/) |
| `end` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

