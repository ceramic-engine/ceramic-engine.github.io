---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: BytesOutput
target: Unity
permalink: api-docs/unity/haxe/io/BytesOutput/
---

# BytesOutput

<div class="type-hierarchy"><a href="/api-docs/unity/haxe/io/Output/">Output</a> → <strong>haxe.io.BytesOutput</strong> (Class)</div>

## Instance Members

<div class="signature field-method no-description" id="writeByte"><code><span class="field-name">writeByte</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#writeByte"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `c` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="writeBytes"><code><span class="field-name">writeBytes</span><span class="parenthesis">(</span><span class="arg-name">buf</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/io/Bytes/" class="type-link">Bytes</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">len</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#writeBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buf` | [Bytes](/api-docs/unity/haxe/io/Bytes/) |
| `pos` | [Int](/api-docs/unity/Int/) |
| `len` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getBytes"><code><span class="field-name">getBytes</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/io/Bytes/" class="type-link">Bytes</a></code><a class="header-anchor" href="#getBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the `Bytes` of this output.

This function should not be called more than once on a given
`BytesOutput` instance.
| Returns |
|---------|
| [Bytes](/api-docs/unity/haxe/io/Bytes/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description" id="b"><code><span class="field-name">b</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/io/BytesBuffer/" class="type-link">BytesBuffer</a></code><a class="header-anchor" href="#b"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

