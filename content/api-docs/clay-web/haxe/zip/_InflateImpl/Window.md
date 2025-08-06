---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Window
target: Clay (Web)
permalink: api-docs/clay-web/haxe/zip/_InflateImpl/Window/
---

# Window

<div class="type-hierarchy"><strong>haxe.zip._InflateImpl.Window</strong> (private class)</div>

## Instance Members

<div class="signature field-var no-description" id="buffer"><code><span class="field-name">buffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a></code><a class="header-anchor" href="#buffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="pos"><code><span class="field-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#pos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="slide"><code><span class="field-name">slide</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#slide"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="addBytes"><code><span class="field-name">addBytes</span><span class="parenthesis">(</span><span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a><span class="operator">,</span> <span class="arg-name">p</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">len</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `b` | [haxe.io.Bytes](/api-docs/clay-web/haxe/io/Bytes/) |
| `p` | [Int](/api-docs/clay-web/Int/) |
| `len` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addByte"><code><span class="field-name">addByte</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addByte"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `c` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getLastChar"><code><span class="field-name">getLastChar</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getLastChar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="available"><code><span class="field-name">available</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#available"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="checksum"><code><span class="field-name">checksum</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/crypto/Adler32/" class="type-link">haxe.crypto.Adler32</a></code><a class="header-anchor" href="#checksum"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [haxe.crypto.Adler32](/api-docs/clay-web/haxe/crypto/Adler32/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">hasCrc</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `hasCrc` | [Bool](/api-docs/clay-web/Bool/) |

## Private Members

<div class="signature field-var no-description" id="crc"><code><span class="field-name">crc</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/crypto/Adler32/" class="type-link">haxe.crypto.Adler32</a></code><a class="header-anchor" href="#crc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

