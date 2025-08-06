---
layout: api-docs
category: api-docs
subCategory: doc
menu: Hxnodejs
title: Buffer
target: Headless
permalink: api-docs/headless/js/node/buffer/Buffer/
---

# Buffer

<div class="view-source"><a href="https://github.com/ceramic-engine/hxnodejs/blob/master/src/js/node/buffer/Buffer.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/js/lib/Uint8Array/">js.lib.Uint8Array</a> → <strong>js.node.buffer.Buffer</strong> (extern class)</div>

The `Buffer` class is a global type for dealing with binary data directly. It can be constructed in a variety of ways.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_class_buffer</div>


## Static Members

<div class="signature field-var has-description" id="poolSize"><code><span class="field-name">poolSize</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#poolSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This is the size (in bytes) of pre-allocated internal `Buffer` instances used for pooling. This value may be modified.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_class_property_buffer_poolsize</div>


<hr class="field-separator" />

<div class="signature field-var has-description" id="byteOffset"><code><span class="field-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#byteOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When setting `byteOffset` in `Buffer.from(ArrayBuffer, byteOffset, length)`
or sometimes when allocating a buffer smaller than `Buffer.poolSize` the
buffer doesn't start from a zero offset on the underlying `ArrayBuffer`.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_byteoffset</div>


<hr class="field-separator" />

<div class="signature field-var has-description" id="INSPECT_MAX_BYTES"><code><span class="field-name">INSPECT_MAX_BYTES</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#INSPECT_MAX_BYTES"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default: `50`

Returns the maximum number of bytes that will be returned when `buf.inspect()` is called.
This can be overridden by user modules.
See `util.inspect()` for more details on `buf.inspect()` behavior.

This is a property on the `buffer` module returned by `require('buffer')`, not on the `Buffer` global or a `Buffer` instance.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buffer_inspect_max_bytes</div>


<hr class="field-separator" />

<div class="signature field-var has-description" id="kMaxLength"><code><span class="field-name">kMaxLength</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#kMaxLength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An alias for `buffer.constants.MAX_LENGTH`.

This is a property on the `buffer` module returned by `require('buffer')`, not on the `Buffer` global or a `Buffer` instance.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buffer_kmaxlength</div>


<hr class="field-separator" />

<div class="signature field-var has-description" id="constants"><code><span class="field-name">constants</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/buffer/BufferConstants/" class="type-link">BufferConstants</a></code><a class="header-anchor" href="#constants"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

`buffer.constants` is a property on the `buffer` module returned by `require('buffer')`,
not on the `Buffer` global or a `Buffer` instance.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buffer_constants</div>


<hr class="field-separator" />

<div class="signature field-method has-description" id="alloc"><code><span class="field-name">alloc</span><span class="parenthesis">(</span><span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Buffer</a></code><a class="header-anchor" href="#alloc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Allocates a new `Buffer` of `size` bytes. If `fill` is `undefined`, the `Buffer` will be zero-filled.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_class_method_buffer_alloc_size_fill_encoding</div>


| Name | Type |
|------|------|
| `size` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Buffer](/api-docs/headless/js/node/buffer/Buffer/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="allocUnsafe"><code><span class="field-name">allocUnsafe</span><span class="parenthesis">(</span><span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Buffer</a></code><a class="header-anchor" href="#allocUnsafe"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Allocates a new `Buffer` of `size` bytes. If `size` is larger than
`buffer.constants.MAX_LENGTH` or smaller than 0, `ERR_INVALID_OPT_VALUE`
is thrown. A zero-length `Buffer` is created if `size` is 0.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_class_method_buffer_allocunsafe_size</div>


| Name | Type |
|------|------|
| `size` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Buffer](/api-docs/headless/js/node/buffer/Buffer/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="allocUnsafeSlow"><code><span class="field-name">allocUnsafeSlow</span><span class="parenthesis">(</span><span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Buffer</a></code><a class="header-anchor" href="#allocUnsafeSlow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Allocates a new `Buffer` of `size` bytes. If `size` is larger than
`buffer.constants.MAX_LENGTH` or smaller than 0, `ERR_INVALID_OPT_VALUE`
is thrown. A zero-length `Buffer` is created if `size` is 0.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_class_method_buffer_allocunsafeslow_size</div>


| Name | Type |
|------|------|
| `size` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Buffer](/api-docs/headless/js/node/buffer/Buffer/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="byteLength"><code><span class="field-name">byteLength</span><span class="parenthesis">(</span><span class="arg-name">string</span><span class="operator">:</span> <a href="#" class="type-link">Buffer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#byteLength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the actual byte length of a string. This is not the same as
`String.prototype.length` since that returns the number of characters in
a string.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_class_method_buffer_bytelength_string_encoding</div>


| Name | Type |
|------|------|
| `string` | [Buffer](/api-docs/headless/js/node/buffer/Buffer/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="compareBuffers"><code><span class="field-name">compareBuffers</span><span class="parenthesis">(</span><span class="arg-name">buf1</span><span class="operator">:</span> <a href="/api-docs/headless/js/lib/Uint8Array/" class="type-link">js.lib.Uint8Array</a><span class="operator">,</span> <span class="arg-name">buf2</span><span class="operator">:</span> <a href="/api-docs/headless/js/lib/Uint8Array/" class="type-link">js.lib.Uint8Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#compareBuffers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compares `buf1` to `buf2` typically for the purpose of sorting arrays of
`Buffer` instances. This is equivalent to calling `buf1.compare(buf2)`.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_class_method_buffer_compare_buf1_buf2</div>


| Name | Type |
|------|------|
| `buf1` | [js.lib.Uint8Array](/api-docs/headless/js/lib/Uint8Array/) |
| `buf2` | [js.lib.Uint8Array](/api-docs/headless/js/lib/Uint8Array/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="concat"><code><span class="field-name">concat</span><span class="parenthesis">(</span><span class="arg-name">list</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">concat.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">totalLength</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Buffer</a></code><a class="header-anchor" href="#concat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a new `Buffer` which is the result of concatenating all the `Buffer` instances in the `list` together.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_class_method_buffer_concat_list_totallength</div>


| Name | Type | Default |
|------|------|---------|
| `list` | [Array](/api-docs/headless/Array/)<concat.T> | |
| `totalLength` | [Int](/api-docs/headless/Int/) | *(optional)* |

| Returns |
|---------|
| [Buffer](/api-docs/headless/js/node/buffer/Buffer/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isBuffer"><code><span class="field-name">isBuffer</span><span class="parenthesis">(</span><span class="arg-name">obj</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isBuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `true` if `obj` is a `Buffer`, `false` otherwise.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_class_method_buffer_isbuffer_obj</div>


| Name | Type |
|------|------|
| `obj` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isEncoding"><code><span class="field-name">isEncoding</span><span class="parenthesis">(</span><span class="arg-name">encoding</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isEncoding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `true` if `encoding` contains a supported character encoding, or `false` otherwise.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_class_method_buffer_isencoding_encoding</div>


| Name | Type |
|------|------|
| `encoding` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="transcode"><code><span class="field-name">transcode</span><span class="parenthesis">(</span><span class="arg-name">source</span><span class="operator">:</span> <a href="/api-docs/headless/js/lib/Uint8Array/" class="type-link">js.lib.Uint8Array</a><span class="operator">,</span> <span class="arg-name">fromEnc</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">toEnc</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Buffer</a></code><a class="header-anchor" href="#transcode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Re-encodes the given `Buffer` or `Uint8Array` instance from one character encoding to another.
Returns a new `Buffer` instance.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buffer_transcode_source_fromenc_toenc</div>


| Name | Type |
|------|------|
| `source` | [js.lib.Uint8Array](/api-docs/headless/js/lib/Uint8Array/) |
| `fromEnc` | [String](/api-docs/headless/String/) |
| `toEnc` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [Buffer](/api-docs/headless/js/node/buffer/Buffer/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="hxFromBytes"><code><span class="field-name">hxFromBytes</span><span class="parenthesis">(</span><span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Buffer</a></code><a class="header-anchor" href="#hxFromBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create `Buffer` object from `haxe.io.Bytes` using the same underlying data storage.
Any modifications done using the returned object will be reflected in given `haxe.io.Bytes` object.

| Name | Type |
|------|------|
| `b` | [haxe.io.Bytes](/api-docs/headless/haxe/io/Bytes/) |

| Returns |
|---------|
| [Buffer](/api-docs/headless/js/node/buffer/Buffer/) |

## Instance Members

<div class="signature field-method has-description" id="compare"><code><span class="field-name">compare</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/headless/js/lib/Uint8Array/" class="type-link">js.lib.Uint8Array</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">targetStart</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">targetEnd</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">sourceStart</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">sourceEnd</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#compare"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compares `buf` with `target` and returns a number indicating whether `buf` comes before, after,
or is the same as `target` in sort order. Comparison is based on the actual sequence of bytes in each `Buffer`.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_compare_target_targetstart_targetend_sourcestart_sourceend</div>


| Name | Type | Default |
|------|------|---------|
| `target` | [js.lib.Uint8Array](/api-docs/headless/js/lib/Uint8Array/) | |
| `targetStart` | [Int](/api-docs/headless/Int/) | *(optional)* |
| `targetEnd` | [Int](/api-docs/headless/Int/) | *(optional)* |
| `sourceStart` | [Int](/api-docs/headless/Int/) | *(optional)* |
| `sourceEnd` | [Int](/api-docs/headless/Int/) | *(optional)* |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="copy"><code><span class="field-name">copy</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/headless/js/lib/Uint8Array/" class="type-link">js.lib.Uint8Array</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">targetStart</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">sourceStart</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">sourceEnd</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#copy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Copies data from a region of `buf` to a region in `target` even if the `target` memory region overlaps with `buf`.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_copy_target_targetstart_sourcestart_sourceend</div>


| Name | Type | Default |
|------|------|---------|
| `target` | [js.lib.Uint8Array](/api-docs/headless/js/lib/Uint8Array/) | |
| `targetStart` | [Int](/api-docs/headless/Int/) | *(optional)* |
| `sourceStart` | [Int](/api-docs/headless/Int/) | *(optional)* |
| `sourceEnd` | [Int](/api-docs/headless/Int/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="entries"><code><span class="field-name">entries</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/Iterator/" class="type-link">js.node.Iterator</a></code><a class="header-anchor" href="#entries"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates and returns an iterator of `[index, byte]` pairs from the contents of `buf`.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_entries</div>

| Returns |
|---------|
| [js.node.Iterator](/api-docs/headless/js/node/Iterator/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="equals"><code><span class="field-name">equals</span><span class="parenthesis">(</span><span class="arg-name">otherBuffer</span><span class="operator">:</span> <a href="/api-docs/headless/js/lib/Uint8Array/" class="type-link">js.lib.Uint8Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#equals"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `true` if both `buf` and `otherBuffer` have exactly the same bytes, `false` otherwise.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_equals_otherbuffer</div>


| Name | Type |
|------|------|
| `otherBuffer` | [js.lib.Uint8Array](/api-docs/headless/js/lib/Uint8Array/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fill"><code><span class="field-name">fill</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">end</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">encoding</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Buffer</a></code><a class="header-anchor" href="#fill"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fills `buf` with the specified `value`. If the `offset` and `end` are not given, the entire `buf` will be filled:

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_fill_value_offset_end_encoding</div>


| Name | Type | Default |
|------|------|---------|
| `value` | [String](/api-docs/headless/String/) | |
| `offset` | [Int](/api-docs/headless/Int/) | *(optional)* |
| `end` | [Int](/api-docs/headless/Int/) | *(optional)* |
| `encoding` | [String](/api-docs/headless/String/) | *(optional)* |

| Returns |
|---------|
| [Buffer](/api-docs/headless/js/node/buffer/Buffer/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="includes"><code><span class="field-name">includes</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">encoding</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#includes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Equivalent to `buf.indexOf() !== -1`.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_includes_value_byteoffset_encoding</div>


| Name | Type | Default |
|------|------|---------|
| `value` | [String](/api-docs/headless/String/) | |
| `byteOffset` | [Int](/api-docs/headless/Int/) | *(optional)* |
| `encoding` | [String](/api-docs/headless/String/) | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="indexOf"><code><span class="field-name">indexOf</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">encoding</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#indexOf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If `value` is:

- a string, `value` is interpreted according to the character encoding in `encoding`.
- a `Buffer` or Uint8Array, `value` will be used in its entirety. To compare a partial `Buffer`, use buf.slice().
- a number, `value` will be interpreted as an unsigned 8-bit integer value between `0` and `255`.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_indexof_value_byteoffset_encoding</div>


| Name | Type | Default |
|------|------|---------|
| `value` | [String](/api-docs/headless/String/) | |
| `byteOffset` | [Int](/api-docs/headless/Int/) | *(optional)* |
| `encoding` | [String](/api-docs/headless/String/) | *(optional)* |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="keys"><code><span class="field-name">keys</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/Iterator/" class="type-link">js.node.Iterator</a></code><a class="header-anchor" href="#keys"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates and returns an iterator of `buf` keys (indices).

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_keys</div>

| Returns |
|---------|
| [js.node.Iterator](/api-docs/headless/js/node/Iterator/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="lastIndexOf"><code><span class="field-name">lastIndexOf</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">encoding</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#lastIndexOf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Identical to `buf.indexOf()`, except the last occurrence of `value` is found
rather than the first occurrence.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_lastindexof_value_byteoffset_encoding</div>


| Name | Type | Default |
|------|------|---------|
| `value` | [String](/api-docs/headless/String/) | |
| `byteOffset` | [Int](/api-docs/headless/Int/) | *(optional)* |
| `encoding` | [String](/api-docs/headless/String/) | *(optional)* |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readDoubleBE"><code><span class="field-name">readDoubleBE</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#readDoubleBE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads a 64-bit double from `buf` at the specified `offset` with specified endian format
(`readDoubleBE()` returns big endian, `readDoubleLE()` returns little endian).

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_readdoublebe_offset</div>


| Name | Type | Default |
|------|------|---------|
| `offset` | [Int](/api-docs/headless/Int/) | *(optional)* |

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readDoubleLE"><code><span class="field-name">readDoubleLE</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#readDoubleLE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads a 64-bit double from `buf` at the specified `offset` with specified endian format
(`readDoubleBE()` returns big endian, `readDoubleLE()` returns little endian).

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_readdoublele_offset</div>


| Name | Type | Default |
|------|------|---------|
| `offset` | [Int](/api-docs/headless/Int/) | *(optional)* |

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readFloatBE"><code><span class="field-name">readFloatBE</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#readFloatBE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads a 32-bit float from `buf` at the specified `offset` with specified endian format
(`readFloatBE()` returns big endian, `readFloatLE()` returns little endian).

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_readfloatbe_offset</div>


| Name | Type | Default |
|------|------|---------|
| `offset` | [Int](/api-docs/headless/Int/) | *(optional)* |

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readFloatLE"><code><span class="field-name">readFloatLE</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#readFloatLE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads a 32-bit float from `buf` at the specified `offset` with specified endian format
(`readFloatBE()` returns big endian, `readFloatLE()` returns little endian).

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_readfloatle_offset</div>


| Name | Type | Default |
|------|------|---------|
| `offset` | [Int](/api-docs/headless/Int/) | *(optional)* |

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readInt8"><code><span class="field-name">readInt8</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#readInt8"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads a signed 8-bit integer from `buf` at the specified `offset`.

https://nodejs.org/api/buffer.html#buffer_buf_readint8_offset

| Name | Type | Default |
|------|------|---------|
| `offset` | [Int](/api-docs/headless/Int/) | *(optional)* |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readInt16BE"><code><span class="field-name">readInt16BE</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#readInt16BE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads a signed 16-bit integer from `buf` at the specified `offset` with the specified endian format
(`readInt16BE()` returns big endian, `readInt16LE()` returns little endian).

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_readint16be_offset</div>


| Name | Type | Default |
|------|------|---------|
| `offset` | [Int](/api-docs/headless/Int/) | *(optional)* |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readInt16LE"><code><span class="field-name">readInt16LE</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#readInt16LE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads a signed 16-bit integer from `buf` at the specified `offset` with the specified endian format
(`readInt16BE()` returns big endian, `readInt16LE()` returns little endian).

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_readint16le_offset</div>


| Name | Type | Default |
|------|------|---------|
| `offset` | [Int](/api-docs/headless/Int/) | *(optional)* |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readInt32BE"><code><span class="field-name">readInt32BE</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#readInt32BE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads a signed 32-bit integer from buf at the specified offset with the specified endian format
(`readInt32BE()` returns big endian, `readInt32LE()` returns little endian).

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_readint32be_offset</div>


| Name | Type | Default |
|------|------|---------|
| `offset` | [Int](/api-docs/headless/Int/) | *(optional)* |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readInt32LE"><code><span class="field-name">readInt32LE</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#readInt32LE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads a signed 32-bit integer from buf at the specified offset with the specified endian format
(`readInt32BE()` returns big endian, `readInt32LE()` returns little endian).

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_readint32be_offset</div>


| Name | Type | Default |
|------|------|---------|
| `offset` | [Int](/api-docs/headless/Int/) | *(optional)* |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readIntBE"><code><span class="field-name">readIntBE</span><span class="parenthesis">(</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">byteLength</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#readIntBE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads `byteLength` number of bytes from `buf` at the specified `offset` and interprets the result
as a two's complement signed value. Supports up to 48 bits of accuracy.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_readintbe_offset_bytelength</div>


| Name | Type |
|------|------|
| `offset` | [Int](/api-docs/headless/Int/) |
| `byteLength` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readIntLE"><code><span class="field-name">readIntLE</span><span class="parenthesis">(</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">byteLength</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#readIntLE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads `byteLength` number of bytes from `buf` at the specified `offset` and interprets the result
as a two's complement signed value. Supports up to 48 bits of accuracy.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_readintle_offset_bytelength</div>


| Name | Type |
|------|------|
| `offset` | [Int](/api-docs/headless/Int/) |
| `byteLength` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readUInt8"><code><span class="field-name">readUInt8</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#readUInt8"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads an unsigned 8-bit integer from `buf` at the specified `offset`.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_readuint8_offset</div>


| Name | Type | Default |
|------|------|---------|
| `offset` | [Int](/api-docs/headless/Int/) | *(optional)* |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readUInt16BE"><code><span class="field-name">readUInt16BE</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#readUInt16BE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads an unsigned 16-bit integer from `buf` at the specified `offset` with specified endian format
`readUInt16BE()` returns big endian, `readUInt16LE()` returns little endian).

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_readuint16be_offset</div>


| Name | Type | Default |
|------|------|---------|
| `offset` | [Int](/api-docs/headless/Int/) | *(optional)* |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readUInt16LE"><code><span class="field-name">readUInt16LE</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#readUInt16LE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads an unsigned 16-bit integer from `buf` at the specified `offset` with specified endian format
(`readUInt16BE()` returns big endian, `readUInt16LE()` returns little endian).

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_readuint16le_offset</div>


| Name | Type | Default |
|------|------|---------|
| `offset` | [Int](/api-docs/headless/Int/) | *(optional)* |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readUInt32BE"><code><span class="field-name">readUInt32BE</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#readUInt32BE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads an unsigned 32-bit integer from `buf` at the specified `offset` with specified endian format
(`readUInt32BE()` returns big endian, `readUInt32LE()` returns little endian).

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_readuint32be_offset</div>


| Name | Type | Default |
|------|------|---------|
| `offset` | [Int](/api-docs/headless/Int/) | *(optional)* |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readUInt32LE"><code><span class="field-name">readUInt32LE</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#readUInt32LE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads an unsigned 32-bit integer from `buf` at the specified `offset` with specified endian format
(`readUInt32BE()` returns big endian, `readUInt32LE()` returns little endian).

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_readuint32be_offset</div>


| Name | Type | Default |
|------|------|---------|
| `offset` | [Int](/api-docs/headless/Int/) | *(optional)* |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="subarray"><code><span class="field-name">subarray</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">start</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">end</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Buffer</a></code><a class="header-anchor" href="#subarray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a new `Buffer` that references the same memory as the original,
but offset and cropped by the `start` and `end` indices.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_subarray_start_end</div>


| Name | Type | Default |
|------|------|---------|
| `start` | [Int](/api-docs/headless/Int/) | *(optional)* |
| `end` | [Int](/api-docs/headless/Int/) | *(optional)* |

| Returns |
|---------|
| [Buffer](/api-docs/headless/js/node/buffer/Buffer/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="slice"><code><span class="field-name">slice</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">start</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">end</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Buffer</a></code><a class="header-anchor" href="#slice"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a new `Buffer` that references the same memory as the original,
but offset and cropped by the `start` and `end` indices.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_slice_start_end</div>


| Name | Type | Default |
|------|------|---------|
| `start` | [Int](/api-docs/headless/Int/) | *(optional)* |
| `end` | [Int](/api-docs/headless/Int/) | *(optional)* |

| Returns |
|---------|
| [Buffer](/api-docs/headless/js/node/buffer/Buffer/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="swap16"><code><span class="field-name">swap16</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Buffer</a></code><a class="header-anchor" href="#swap16"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Interprets `buf` as an array of unsigned 16-bit integers and swaps the
byte order in-place. Throws `ERR_INVALID_BUFFER_SIZE` if `buf.length`
is not a multiple of 2.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_swap16</div>

| Returns |
|---------|
| [Buffer](/api-docs/headless/js/node/buffer/Buffer/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="swap32"><code><span class="field-name">swap32</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Buffer</a></code><a class="header-anchor" href="#swap32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Interprets `buf` as an array of unsigned 32-bit integers and swaps the
byte order in-place. Throws `ERR_INVALID_BUFFER_SIZE` if `buf.length`
is not a multiple of 4.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_swap32</div>

| Returns |
|---------|
| [Buffer](/api-docs/headless/js/node/buffer/Buffer/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="swap64"><code><span class="field-name">swap64</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Buffer</a></code><a class="header-anchor" href="#swap64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Interprets `buf` as an array of 64-bit numbers and swaps byte order in-place.
Throws `ERR_INVALID_BUFFER_SIZE` if `buf.length` is not a multiple of 8.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_swap64</div>

| Returns |
|---------|
| [Buffer](/api-docs/headless/js/node/buffer/Buffer/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toJSON"><code><span class="field-name">toJSON</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#toJSON"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a JSON representation of `buf`. `JSON.stringify()` implicitly calls
this function when stringifying a `Buffer` instance.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_tojson</div>

| Returns |
|---------|
| [Dynamic](/api-docs/headless/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Decodes `buf` to a string according to the specified character encoding in `encoding`.
`start` and `end` may be passed to decode only a subset of `buf`.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_tostring_encoding_start_end</div>

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="values"><code><span class="field-name">values</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/Iterator/" class="type-link">js.node.Iterator</a></code><a class="header-anchor" href="#values"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates and returns an iterator for `buf` values (bytes). This function is called automatically
when a `Buffer` is used in a `for..of` statement.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_values</div>

| Returns |
|---------|
| [js.node.Iterator](/api-docs/headless/js/node/Iterator/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="write"><code><span class="field-name">write</span><span class="parenthesis">(</span><span class="arg-name">string</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">encoding</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#write"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Writes `string` to `buf` at `offset` according to the character encoding in `encoding`.
The `length` parameter is the number of bytes to write.
If `buf` did not contain enough space to fit the entire `string`, only part of string will be written.
However, partially encoded characters will not be written.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_write_string_offset_length_encoding</div>


| Name | Type | Default |
|------|------|---------|
| `string` | [String](/api-docs/headless/String/) | |
| `offset` | [Int](/api-docs/headless/Int/) | *(optional)* |
| `length` | [Int](/api-docs/headless/Int/) | *(optional)* |
| `encoding` | [String](/api-docs/headless/String/) | *(optional)* |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="writeDoubleBE"><code><span class="field-name">writeDoubleBE</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#writeDoubleBE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Writes `value` to `buf` at the specified `offset` with specified endian format
(`writeDoubleBE()` writes big endian, `writeDoubleLE()` writes little endian).
`value` should be a valid 64-bit double. Behavior is undefined when `value` is anything other than a 64-bit double.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_writedoublebe_value_offset</div>


| Name | Type | Default |
|------|------|---------|
| `value` | [Float](/api-docs/headless/Float/) | |
| `offset` | [Int](/api-docs/headless/Int/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="writeDoubleLE"><code><span class="field-name">writeDoubleLE</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#writeDoubleLE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Writes `value` to `buf` at the specified `offset` with specified endian format
(`writeDoubleBE()` writes big endian, `writeDoubleLE()` writes little endian).
`value` should be a valid 64-bit double. Behavior is undefined when `value` is anything other than a 64-bit double.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_writedoublele_value_offset</div>


| Name | Type | Default |
|------|------|---------|
| `value` | [Float](/api-docs/headless/Float/) | |
| `offset` | [Int](/api-docs/headless/Int/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="writeFloatBE"><code><span class="field-name">writeFloatBE</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#writeFloatBE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Writes `value` to `buf` at the specified `offset` with specified endian format
(`writeFloatBE()` writes big endian, `writeFloatLE()` writes little endian).
`value` should be a valid 32-bit float. Behavior is undefined when `value` is anything other than a 32-bit float.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_writefloatbe_value_offset</div>


| Name | Type | Default |
|------|------|---------|
| `value` | [Float](/api-docs/headless/Float/) | |
| `offset` | [Int](/api-docs/headless/Int/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="writeFloatLE"><code><span class="field-name">writeFloatLE</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#writeFloatLE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Writes `value` to `buf` at the specified `offset` with specified endian format
(`writeFloatBE()` writes big endian, `writeFloatLE()` writes little endian).
`value` should be a valid 32-bit float. Behavior is undefined when `value` is anything other than a 32-bit float.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_writefloatle_value_offset</div>


| Name | Type | Default |
|------|------|---------|
| `value` | [Float](/api-docs/headless/Float/) | |
| `offset` | [Int](/api-docs/headless/Int/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="writeInt8"><code><span class="field-name">writeInt8</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#writeInt8"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Writes `value` to `buf` at the specified `offset`. `value` should be a valid signed 8-bit integer.
Behavior is undefined when `value` is anything other than a signed 8-bit integer.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_writeint8_value_offset</div>


| Name | Type | Default |
|------|------|---------|
| `value` | [Int](/api-docs/headless/Int/) | |
| `offset` | [Int](/api-docs/headless/Int/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="writeInt16BE"><code><span class="field-name">writeInt16BE</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#writeInt16BE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Writes `value` to `buf` at the specified `offset` with specified endian format
(`writeInt16BE()` writes big endian, `writeInt16LE()` writes little endian).
`value` should be a valid signed 16-bit integer.
Behavior is undefined when value is anything other than a signed 16-bit integer.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_writeint16be_value_offset</div>


| Name | Type | Default |
|------|------|---------|
| `value` | [Int](/api-docs/headless/Int/) | |
| `offset` | [Int](/api-docs/headless/Int/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="writeInt16LE"><code><span class="field-name">writeInt16LE</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#writeInt16LE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Writes `value` to `buf` at the specified `offset` with specified endian format
(`writeInt16BE()` writes big endian, `writeInt16LE()` writes little endian).
`value` should be a valid signed 16-bit integer.
Behavior is undefined when value is anything other than a signed 16-bit integer.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_writeint16le_value_offset</div>


| Name | Type | Default |
|------|------|---------|
| `value` | [Int](/api-docs/headless/Int/) | |
| `offset` | [Int](/api-docs/headless/Int/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="writeInt32BE"><code><span class="field-name">writeInt32BE</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#writeInt32BE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Writes `value` to `buf` at the specified `offset` with specified endian format
(`writeInt32BE()` writes big endian, `writeInt32LE()` writes little endian).
`value` should be a valid signed 32-bit integer.
Behavior is undefined when `value` is anything other than a signed 32-bit integer.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_writeint32be_value_offset</div>


| Name | Type | Default |
|------|------|---------|
| `value` | [Int](/api-docs/headless/Int/) | |
| `offset` | [Int](/api-docs/headless/Int/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="writeInt32LE"><code><span class="field-name">writeInt32LE</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#writeInt32LE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Writes `value` to `buf` at the specified `offset` with specified endian format
(`writeInt32BE()` writes big endian, `writeInt32LE()` writes little endian).
`value` should be a valid signed 32-bit integer.
Behavior is undefined when `value` is anything other than a signed 32-bit integer.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_writeint32le_value_offset</div>


| Name | Type | Default |
|------|------|---------|
| `value` | [Int](/api-docs/headless/Int/) | |
| `offset` | [Int](/api-docs/headless/Int/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="writeIntBE"><code><span class="field-name">writeIntBE</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">byteLength</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#writeIntBE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Writes `byteLength` bytes of `value` to `buf` at the specified `offset`.
Supports up to 48 bits of accuracy. Behavior is undefined when `value` is anything other than a signed integer.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_writeintbe_value_offset_bytelength</div>


| Name | Type |
|------|------|
| `value` | [Int](/api-docs/headless/Int/) |
| `offset` | [Int](/api-docs/headless/Int/) |
| `byteLength` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="writeIntLE"><code><span class="field-name">writeIntLE</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">byteLength</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#writeIntLE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Writes `byteLength` bytes of `value` to `buf` at the specified `offset`.
Supports up to 48 bits of accuracy. Behavior is undefined when `value` is anything other than a signed integer.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_writeintle_value_offset_bytelength</div>


| Name | Type |
|------|------|
| `value` | [Int](/api-docs/headless/Int/) |
| `offset` | [Int](/api-docs/headless/Int/) |
| `byteLength` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="writeUInt8"><code><span class="field-name">writeUInt8</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#writeUInt8"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Writes `value` to `buf` at the specified `offset`. `value` should be a valid unsigned 8-bit integer.
Behavior is undefined when `value` is anything other than an unsigned 8-bit integer.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_writeuint8_value_offset</div>


| Name | Type | Default |
|------|------|---------|
| `value` | [Int](/api-docs/headless/Int/) | |
| `offset` | [Int](/api-docs/headless/Int/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="writeUInt16BE"><code><span class="field-name">writeUInt16BE</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#writeUInt16BE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Writes `value` to `buf` at the specified `offset` with specified endian format
(`writeUInt16BE()` writes big endian, `writeUInt16LE()` writes little endian).
`value` should be a valid unsigned 16-bit integer.
Behavior is undefined when `value` is anything other than an unsigned 16-bit integer.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_writeuint16be_value_offset</div>


| Name | Type | Default |
|------|------|---------|
| `value` | [Int](/api-docs/headless/Int/) | |
| `offset` | [Int](/api-docs/headless/Int/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="writeUInt16LE"><code><span class="field-name">writeUInt16LE</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#writeUInt16LE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Writes `value` to `buf` at the specified `offset` with specified endian format
(`writeUInt16BE()` writes big endian, `writeUInt16LE()` writes little endian).
`value` should be a valid unsigned 16-bit integer.
Behavior is undefined when `value` is anything other than an unsigned 16-bit integer.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_writeuint16le_value_offset</div>


| Name | Type | Default |
|------|------|---------|
| `value` | [Int](/api-docs/headless/Int/) | |
| `offset` | [Int](/api-docs/headless/Int/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="writeUInt32BE"><code><span class="field-name">writeUInt32BE</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#writeUInt32BE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Writes `value` to `buf` at the specified `offset` with specified endian format
(`writeUInt32BE()` writes big endian, `writeUInt32LE()` writes little endian).
`value` should be a valid unsigned 32-bit integer.
Behavior is undefined when `value` is anything other than an unsigned 32-bit integer.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_writeuint32be_value_offset</div>


| Name | Type | Default |
|------|------|---------|
| `value` | [Int](/api-docs/headless/Int/) | |
| `offset` | [Int](/api-docs/headless/Int/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="writeUInt32LE"><code><span class="field-name">writeUInt32LE</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#writeUInt32LE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Writes `value` to `buf` at the specified `offset` with specified endian format
(`writeUInt32BE()` writes big endian, `writeUInt32LE()` writes little endian).
`value` should be a valid unsigned 32-bit integer.
Behavior is undefined when `value` is anything other than an unsigned 32-bit integer.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_buf_writeuint32le_value_offset</div>


| Name | Type | Default |
|------|------|---------|
| `value` | [Int](/api-docs/headless/Int/) | |
| `offset` | [Int](/api-docs/headless/Int/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="hxToBytes"><code><span class="field-name">hxToBytes</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a></code><a class="header-anchor" href="#hxToBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create `haxe.io.Bytes` object that uses the same underlying data storage as `this` buffer.
Any modifications done using the returned object will be reflected in the `this` buffer.
| Returns |
|---------|
| [haxe.io.Bytes](/api-docs/headless/haxe/io/Bytes/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">string</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">encoding</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Allocates a new buffer.

<div class="see"><strong>See:</strong> https://nodejs.org/api/buffer.html#buffer_new_buffer_array, https://nodejs.org/api/buffer.html#buffer_new_buffer_arraybuffer_byteoffset_length, https://nodejs.org/api/buffer.html#buffer_new_buffer_buffer, https://nodejs.org/api/buffer.html#buffer_new_buffer_size, https://nodejs.org/api/buffer.html#buffer_new_buffer_string_encoding</div>


| Name | Type | Default |
|------|------|---------|
| `string` | [String](/api-docs/headless/String/) | |
| `encoding` | [String](/api-docs/headless/String/) | *(optional)* |

## Metadata

| Name | Parameters |
|------|------------|
| `:jsRequire` | "buffer", "Buffer" |

