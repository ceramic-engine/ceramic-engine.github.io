---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Output
target: Clay (Native)
permalink: api-docs/clay-native/haxe/io/Output/
---

# Output

<div class="type-hierarchy"><strong>haxe.io.Output</strong> (Class) → <a href="/api-docs/clay-native/haxe/io/BytesOutput/">BytesOutput</a>, <a href="/api-docs/clay-native/sys/io/FileOutput/">sys.io.FileOutput</a>, <a href="/api-docs/clay-native/sys/io/_Process/Stdin/">sys.io._Process.Stdin</a>, <a href="/api-docs/clay-native/sys/net/_Socket/SocketOutput/">sys.net._Socket.SocketOutput</a>, <a href="/api-docs/clay-native/sys/ssl/_Socket/SocketOutput/">sys.ssl._Socket.SocketOutput</a></div>

An Output is an abstract write. A specific output implementation will only
have to override the `writeByte` and maybe the `write`, `flush` and `close`
methods. See `File.write` and `String.write` for two ways of creating an
Output.

## Instance Members

<div class="signature field-var has-description" id="bigEndian"><code><span class="field-name">bigEndian</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#bigEndian"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Endianness (word byte order) used when writing numbers.

If `true`, big-endian is used, otherwise `little-endian` is used.

<hr class="field-separator" />

<div class="signature field-method has-description" id="writeByte"><code><span class="field-name">writeByte</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#writeByte"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Write one byte.

| Name | Type |
|------|------|
| `c` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="writeBytes"><code><span class="field-name">writeBytes</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/Bytes/" class="type-link">Bytes</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">len</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#writeBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Write `len` bytes from `s` starting by position specified by `pos`.

Returns the actual length of written data that can differ from `len`.

See `writeFullBytes` that tries to write the exact amount of specified bytes.

| Name | Type |
|------|------|
| `s` | [Bytes](/api-docs/clay-native/haxe/io/Bytes/) |
| `pos` | [Int](/api-docs/clay-native/Int/) |
| `len` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="flush"><code><span class="field-name">flush</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#flush"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flush any buffered data.

<hr class="field-separator" />

<div class="signature field-method has-description" id="close"><code><span class="field-name">close</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#close"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Close the output.

Behaviour while writing after calling this method is unspecified.

<hr class="field-separator" />

<div class="signature field-method has-description" id="write"><code><span class="field-name">write</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/Bytes/" class="type-link">Bytes</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#write"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Write all bytes stored in `s`.

| Name | Type |
|------|------|
| `s` | [Bytes](/api-docs/clay-native/haxe/io/Bytes/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="writeFullBytes"><code><span class="field-name">writeFullBytes</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/Bytes/" class="type-link">Bytes</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">len</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#writeFullBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Write `len` bytes from `s` starting by position specified by `pos`.

Unlike `writeBytes`, this method tries to write the exact `len` amount of bytes.

| Name | Type |
|------|------|
| `s` | [Bytes](/api-docs/clay-native/haxe/io/Bytes/) |
| `pos` | [Int](/api-docs/clay-native/Int/) |
| `len` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="writeFloat"><code><span class="field-name">writeFloat</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#writeFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Write `x` as 32-bit floating point number.

Endianness is specified by the `bigEndian` property.

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="writeInt16"><code><span class="field-name">writeInt16</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#writeInt16"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Write `x` as 16-bit signed integer.

Endianness is specified by the `bigEndian` property.

| Name | Type |
|------|------|
| `x` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="writeUInt16"><code><span class="field-name">writeUInt16</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#writeUInt16"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Write `x` as 16-bit unsigned integer.

Endianness is specified by the `bigEndian` property.

| Name | Type |
|------|------|
| `x` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="writeInt24"><code><span class="field-name">writeInt24</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#writeInt24"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Write `x` as 24-bit signed integer.

Endianness is specified by the `bigEndian` property.

| Name | Type |
|------|------|
| `x` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="writeUInt24"><code><span class="field-name">writeUInt24</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#writeUInt24"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Write `x` as 24-bit unsigned integer.

Endianness is specified by the `bigEndian` property.

| Name | Type |
|------|------|
| `x` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="writeInt32"><code><span class="field-name">writeInt32</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#writeInt32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Write `x` as 32-bit signed integer.

Endianness is specified by the `bigEndian` property.

| Name | Type |
|------|------|
| `x` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="prepare"><code><span class="field-name">prepare</span><span class="parenthesis">(</span><span class="arg-name">nbytes</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#prepare"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Inform that we are about to write at least `nbytes` bytes.

The underlying implementation can allocate proper working space depending
on this information, or simply ignore it. This is not a mandatory call
but a tip and is only used in some specific cases.

| Name | Type |
|------|------|
| `nbytes` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="writeInput"><code><span class="field-name">writeInput</span><span class="parenthesis">(</span><span class="arg-name">i</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/Input/" class="type-link">Input</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">bufsize</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#writeInput"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Read all available data from `i` and write it.

The `bufsize` optional argument specifies the size of chunks by
which data is read and written. Its default value is 4096.

| Name | Type | Default |
|------|------|---------|
| `i` | [Input](/api-docs/clay-native/haxe/io/Input/) | |
| `bufsize` | [Int](/api-docs/clay-native/Int/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="writeString"><code><span class="field-name">writeString</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">encoding</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#writeString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Write `s` string.

| Name | Type | Default |
|------|------|---------|
| `s` | [String](/api-docs/clay-native/String/) | |
| `encoding` | Anonymous | *(optional)* |

