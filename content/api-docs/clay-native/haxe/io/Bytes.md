---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Bytes
target: Clay (Native)
permalink: api-docs/clay-native/haxe/io/Bytes/
---

# Bytes

<div class="type-hierarchy"><strong>haxe.io.Bytes</strong> (Class)</div>

## Static Members

<div class="signature field-method has-description" id="alloc"><code><span class="field-name">alloc</span><span class="parenthesis">(</span><span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Bytes</a></code><a class="header-anchor" href="#alloc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a new `Bytes` instance with the given `length`. The values of the
bytes are not initialized and may not be zero.

| Name | Type |
|------|------|
| `length` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Bytes](/api-docs/clay-native/haxe/io/Bytes/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="ofString"><code><span class="field-name">ofString</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">encoding</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Bytes</a></code><a class="header-anchor" href="#ofString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the `Bytes` representation of the given `String`, using the
specified encoding (UTF-8 by default).

| Name | Type | Default |
|------|------|---------|
| `s` | [String](/api-docs/clay-native/String/) | |
| `encoding` | Anonymous | *(optional)* |

| Returns |
|---------|
| [Bytes](/api-docs/clay-native/haxe/io/Bytes/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="ofData"><code><span class="field-name">ofData</span><span class="parenthesis">(</span><span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/BytesData/" class="type-link">BytesData</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Bytes</a></code><a class="header-anchor" href="#ofData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the `Bytes` representation of the given `BytesData`.

| Name | Type |
|------|------|
| `b` | [BytesData](/api-docs/clay-native/haxe/io/BytesData/) |

| Returns |
|---------|
| [Bytes](/api-docs/clay-native/haxe/io/Bytes/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="ofHex"><code><span class="field-name">ofHex</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Bytes</a></code><a class="header-anchor" href="#ofHex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts the given hexadecimal `String` to `Bytes`. `s` must be a string of
even length consisting only of hexadecimal digits. For example:
`"0FDA14058916052309"`.

| Name | Type |
|------|------|
| `s` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [Bytes](/api-docs/clay-native/haxe/io/Bytes/) |

## Instance Members

<div class="signature field-var no-description" id="length"><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="get"><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the byte at index `pos`.

| Name | Type |
|------|------|
| `pos` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="set"><code><span class="field-name">set</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#set"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Stores the given byte `v` at the given position `pos`.

| Name | Type |
|------|------|
| `pos` | [Int](/api-docs/clay-native/Int/) |
| `v` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="blit"><code><span class="field-name">blit</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">src</span><span class="operator">:</span> <a href="#" class="type-link">Bytes</a><span class="operator">,</span> <span class="arg-name">srcpos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">len</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#blit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Copies `len` bytes from `src` into this instance.

| Name | Type | Description |
|------|------|-------------|
| `pos` | [Int](/api-docs/clay-native/Int/) | Zero-based location in `this` instance at which to start writing bytes. |
| `src` | [Bytes](/api-docs/clay-native/haxe/io/Bytes/) | Source `Bytes` instance from which to copy bytes. |
| `srcpos` | [Int](/api-docs/clay-native/Int/) | Zero-based location at `src` from which bytes will be copied. |
| `len` | [Int](/api-docs/clay-native/Int/) | Number of bytes to be copied. |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fill"><code><span class="field-name">fill</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">len</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#fill"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `len` consecutive bytes starting from index `pos` of `this` instance
to `value`.

| Name | Type |
|------|------|
| `pos` | [Int](/api-docs/clay-native/Int/) |
| `len` | [Int](/api-docs/clay-native/Int/) |
| `value` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="sub"><code><span class="field-name">sub</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">len</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Bytes</a></code><a class="header-anchor" href="#sub"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a new `Bytes` instance that contains a copy of `len` bytes of
`this` instance, starting at index `pos`.

| Name | Type |
|------|------|
| `pos` | [Int](/api-docs/clay-native/Int/) |
| `len` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Bytes](/api-docs/clay-native/haxe/io/Bytes/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="compare"><code><span class="field-name">compare</span><span class="parenthesis">(</span><span class="arg-name">other</span><span class="operator">:</span> <a href="#" class="type-link">Bytes</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#compare"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `0` if the bytes of `this` instance and the bytes of `other` are
identical.

Returns a negative value if the `length` of `this` instance is less than
the `length` of `other`, or a positive value if the `length` of `this`
instance is greater than the `length` of `other`.

In case of equal `length`s, returns a negative value if the first different
value in `other` is greater than the corresponding value in `this`
instance; otherwise returns a positive value.

| Name | Type |
|------|------|
| `other` | [Bytes](/api-docs/clay-native/haxe/io/Bytes/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getUInt16"><code><span class="field-name">getUInt16</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getUInt16"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the 16-bit unsigned integer at the given position `pos` (in
little-endian encoding).

| Name | Type |
|------|------|
| `pos` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setUInt16"><code><span class="field-name">setUInt16</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setUInt16"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Stores the given 16-bit unsigned integer `v` at the given position `pos`
(in little-endian encoding).

| Name | Type |
|------|------|
| `pos` | [Int](/api-docs/clay-native/Int/) |
| `v` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getInt32"><code><span class="field-name">getInt32</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getInt32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the 32-bit integer at the given position `pos` (in little-endian
encoding).

| Name | Type |
|------|------|
| `pos` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setInt32"><code><span class="field-name">setInt32</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setInt32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Stores the given 32-bit integer `v` at the given position `pos` (in
little-endian encoding).

| Name | Type |
|------|------|
| `pos` | [Int](/api-docs/clay-native/Int/) |
| `v` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getString"><code><span class="field-name">getString</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">len</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">encoding</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#getString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the `len`-bytes long string stored at the given position `pos`,
interpreted with the given `encoding` (UTF-8 by default).

| Name | Type | Default |
|------|------|---------|
| `pos` | [Int](/api-docs/clay-native/Int/) | |
| `len` | [Int](/api-docs/clay-native/Int/) | |
| `encoding` | Anonymous | *(optional)* |

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `String` representation of the bytes interpreted as UTF-8.
| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getData"><code><span class="field-name">getData</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/BytesData/" class="type-link">BytesData</a></code><a class="header-anchor" href="#getData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the bytes of `this` instance as `BytesData`.
| Returns |
|---------|
| [BytesData](/api-docs/clay-native/haxe/io/BytesData/) |

## Private Members

<div class="signature field-var no-description" id="b"><code><span class="field-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/BytesData/" class="type-link">BytesData</a></code><a class="header-anchor" href="#b"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/BytesData/" class="type-link">BytesData</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `length` | [Int](/api-docs/clay-native/Int/) |
| `b` | [BytesData](/api-docs/clay-native/haxe/io/BytesData/) |

