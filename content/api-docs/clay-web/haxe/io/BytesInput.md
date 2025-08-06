---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: BytesInput
target: Clay (Web)
permalink: api-docs/clay-web/haxe/io/BytesInput/
---

# BytesInput

<div class="type-hierarchy"><a href="/api-docs/clay-web/haxe/io/Input/">Input</a> → <strong>haxe.io.BytesInput</strong> (Class) → <a href="/api-docs/clay-web/haxe/io/StringInput/">StringInput</a></div>

## Instance Members

<div class="signature field-var has-description" id="position"><code><span class="field-name">position</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#position"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The current position in the stream in bytes.

<hr class="field-separator" />

<div class="signature field-var has-description" id="length"><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The length of the stream in bytes.

<hr class="field-separator" />

<div class="signature field-method no-description" id="readByte"><code><span class="field-name">readByte</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#readByte"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="readBytes"><code><span class="field-name">readBytes</span><span class="parenthesis">(</span><span class="arg-name">buf</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/io/Bytes/" class="type-link">Bytes</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">len</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#readBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buf` | [Bytes](/api-docs/clay-web/haxe/io/Bytes/) |
| `pos` | [Int](/api-docs/clay-web/Int/) |
| `len` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/io/Bytes/" class="type-link">Bytes</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">len</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `b` | [Bytes](/api-docs/clay-web/haxe/io/Bytes/) | |
| `pos` | [Int](/api-docs/clay-web/Int/) | *(optional)* |
| `len` | [Int](/api-docs/clay-web/Int/) | *(optional)* |

## Private Members

<div class="signature field-var no-description" id="b"><code><span class="field-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Uint8Array/" class="type-link">js.lib.Uint8Array</a></code><a class="header-anchor" href="#b"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="pos"><code><span class="field-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#pos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="len"><code><span class="field-name">len</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#len"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="totlen"><code><span class="field-name">totlen</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#totlen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

