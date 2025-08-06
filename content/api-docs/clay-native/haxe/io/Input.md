---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Input
target: Clay (Native)
permalink: api-docs/clay-native/haxe/io/Input/
---

# Input

<div class="type-hierarchy"><strong>haxe.io.Input</strong> (Class) → <a href="/api-docs/clay-native/haxe/io/BytesInput/">BytesInput</a>, <a href="/api-docs/clay-native/sys/io/FileInput/">sys.io.FileInput</a>, <a href="/api-docs/clay-native/sys/io/_Process/Stdout/">sys.io._Process.Stdout</a></div>

An Input is an abstract reader. See other classes in the `haxe.io` package
for several possible implementations.

All functions which read data throw `Eof` when the end of the stream
is reached.

## Instance Members

<div class="signature field-var has-description" id="bigEndian"><code><span class="field-name">bigEndian</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#bigEndian"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Endianness (word byte order) used when reading numbers.

If `true`, big-endian is used, otherwise `little-endian` is used.

<hr class="field-separator" />

<div class="signature field-method has-description" id="readByte"><code><span class="field-name">readByte</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#readByte"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Read and return one byte.
| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readBytes"><code><span class="field-name">readBytes</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/Bytes/" class="type-link">Bytes</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">len</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#readBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Read `len` bytes and write them into `s` to the position specified by `pos`.

Returns the actual length of read data that can be smaller than `len`.

See `readFullBytes` that tries to read the exact amount of specified bytes.

| Name | Type |
|------|------|
| `s` | [Bytes](/api-docs/clay-native/haxe/io/Bytes/) |
| `pos` | [Int](/api-docs/clay-native/Int/) |
| `len` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="close"><code><span class="field-name">close</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#close"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Close the input source.

Behaviour while reading after calling this method is unspecified.

<hr class="field-separator" />

<div class="signature field-method has-description" id="readAll"><code><span class="field-name">readAll</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">bufsize</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/Bytes/" class="type-link">Bytes</a></code><a class="header-anchor" href="#readAll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Read and return all available data.

The `bufsize` optional argument specifies the size of chunks by
which data is read. Its default value is target-specific.

| Name | Type | Default |
|------|------|---------|
| `bufsize` | [Int](/api-docs/clay-native/Int/) | *(optional)* |

| Returns |
|---------|
| [Bytes](/api-docs/clay-native/haxe/io/Bytes/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readFullBytes"><code><span class="field-name">readFullBytes</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/Bytes/" class="type-link">Bytes</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">len</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#readFullBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Read `len` bytes and write them into `s` to the position specified by `pos`.

Unlike `readBytes`, this method tries to read the exact `len` amount of bytes.

| Name | Type |
|------|------|
| `s` | [Bytes](/api-docs/clay-native/haxe/io/Bytes/) |
| `pos` | [Int](/api-docs/clay-native/Int/) |
| `len` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="read"><code><span class="field-name">read</span><span class="parenthesis">(</span><span class="arg-name">nbytes</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/Bytes/" class="type-link">Bytes</a></code><a class="header-anchor" href="#read"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Read and return `nbytes` bytes.

| Name | Type |
|------|------|
| `nbytes` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Bytes](/api-docs/clay-native/haxe/io/Bytes/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readUntil"><code><span class="field-name">readUntil</span><span class="parenthesis">(</span><span class="arg-name">end</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#readUntil"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Read a string until a character code specified by `end` is occurred.

The final character is not included in the resulting string.

| Name | Type |
|------|------|
| `end` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readFloat"><code><span class="field-name">readFloat</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#readFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Read a 32-bit floating point number.

Endianness is specified by the `bigEndian` property.
| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readInt16"><code><span class="field-name">readInt16</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#readInt16"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Read a 16-bit signed integer.

Endianness is specified by the `bigEndian` property.
| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readUInt16"><code><span class="field-name">readUInt16</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#readUInt16"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Read a 16-bit unsigned integer.

Endianness is specified by the `bigEndian` property.
| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readInt24"><code><span class="field-name">readInt24</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#readInt24"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Read a 24-bit signed integer.

Endianness is specified by the `bigEndian` property.
| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readInt32"><code><span class="field-name">readInt32</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#readInt32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Read a 32-bit signed integer.

Endianness is specified by the `bigEndian` property.
| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readString"><code><span class="field-name">readString</span><span class="parenthesis">(</span><span class="arg-name">len</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">encoding</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#readString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Read and `len` bytes as a string.

| Name | Type | Default |
|------|------|---------|
| `len` | [Int](/api-docs/clay-native/Int/) | |
| `encoding` | Anonymous | *(optional)* |

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

## Private Members

