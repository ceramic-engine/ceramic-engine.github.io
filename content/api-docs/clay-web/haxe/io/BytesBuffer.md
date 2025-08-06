---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: BytesBuffer
target: Clay (Web)
permalink: api-docs/clay-web/haxe/io/BytesBuffer/
---

# BytesBuffer

<div class="type-hierarchy"><strong>haxe.io.BytesBuffer</strong> (Class)</div>

## Instance Members

<div class="signature field-method no-description" id="addByte"><code><span class="field-name">addByte</span><span class="parenthesis">(</span><span class="arg-name">byte</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addByte"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `byte` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="add"><code><span class="field-name">add</span><span class="parenthesis">(</span><span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/io/Bytes/" class="type-link">Bytes</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#add"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `src` | [Bytes](/api-docs/clay-web/haxe/io/Bytes/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addInt32"><code><span class="field-name">addInt32</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addInt32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `v` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addBytes"><code><span class="field-name">addBytes</span><span class="parenthesis">(</span><span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/io/Bytes/" class="type-link">Bytes</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">len</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `src` | [Bytes](/api-docs/clay-web/haxe/io/Bytes/) |
| `pos` | [Int](/api-docs/clay-web/Int/) |
| `len` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getBytes"><code><span class="field-name">getBytes</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/io/Bytes/" class="type-link">Bytes</a></code><a class="header-anchor" href="#getBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns either a copy or a reference of the current bytes.
Once called, the buffer should no longer be used.
| Returns |
|---------|
| [Bytes](/api-docs/clay-web/haxe/io/Bytes/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description" id="buffer"><code><span class="field-name">buffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/ArrayBuffer/" class="type-link">js.lib.ArrayBuffer</a></code><a class="header-anchor" href="#buffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="view"><code><span class="field-name">view</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/DataView/" class="type-link">js.lib.DataView</a></code><a class="header-anchor" href="#view"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="u8"><code><span class="field-name">u8</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Uint8Array/" class="type-link">js.lib.Uint8Array</a></code><a class="header-anchor" href="#u8"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="pos"><code><span class="field-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#pos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="size"><code><span class="field-name">size</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#size"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="grow"><code><span class="field-name">grow</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#grow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `delta` | [Int](/api-docs/clay-web/Int/) |

