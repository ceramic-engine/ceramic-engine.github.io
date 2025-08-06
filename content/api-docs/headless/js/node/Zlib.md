---
layout: api-docs
category: api-docs
subCategory: doc
menu: Hxnodejs
title: Zlib
target: Headless
permalink: api-docs/headless/js/node/Zlib/
---

# Zlib

<div class="view-source"><a href="https://github.com/ceramic-engine/hxnodejs/blob/master/src/js/node/Zlib.hx">View source</a></div>

<div class="type-hierarchy"><strong>js.node.Zlib</strong> (extern class)</div>

This provides bindings to Gzip/Gunzip, Deflate/Inflate, and DeflateRaw/InflateRaw classes.
Each class takes the same options, and is a readable/writable Stream.

## Static Members

<div class="signature field-var has-description" id="Z_NO_FLUSH"><code><span class="field-name">Z_NO_FLUSH</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Z_NO_FLUSH"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Allowed `flush` values.

<hr class="field-separator" />

<div class="signature field-var no-description" id="Z_PARTIAL_FLUSH"><code><span class="field-name">Z_PARTIAL_FLUSH</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Z_PARTIAL_FLUSH"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Z_SYNC_FLUSH"><code><span class="field-name">Z_SYNC_FLUSH</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Z_SYNC_FLUSH"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Z_FULL_FLUSH"><code><span class="field-name">Z_FULL_FLUSH</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Z_FULL_FLUSH"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Z_FINISH"><code><span class="field-name">Z_FINISH</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Z_FINISH"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Z_BLOCK"><code><span class="field-name">Z_BLOCK</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Z_BLOCK"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Z_TREES"><code><span class="field-name">Z_TREES</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Z_TREES"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="Z_OK"><code><span class="field-name">Z_OK</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Z_OK"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Return codes for the compression/decompression functions.
Negative values are errors, positive values are used for special but normal events.

<hr class="field-separator" />

<div class="signature field-var no-description" id="Z_STREAM_END"><code><span class="field-name">Z_STREAM_END</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Z_STREAM_END"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Z_NEED_DICT"><code><span class="field-name">Z_NEED_DICT</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Z_NEED_DICT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Z_ERRNO"><code><span class="field-name">Z_ERRNO</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Z_ERRNO"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Z_STREAM_ERROR"><code><span class="field-name">Z_STREAM_ERROR</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Z_STREAM_ERROR"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Z_DATA_ERROR"><code><span class="field-name">Z_DATA_ERROR</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Z_DATA_ERROR"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Z_MEM_ERROR"><code><span class="field-name">Z_MEM_ERROR</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Z_MEM_ERROR"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Z_BUF_ERROR"><code><span class="field-name">Z_BUF_ERROR</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Z_BUF_ERROR"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Z_VERSION_ERROR"><code><span class="field-name">Z_VERSION_ERROR</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Z_VERSION_ERROR"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="Z_NO_COMPRESSION"><code><span class="field-name">Z_NO_COMPRESSION</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Z_NO_COMPRESSION"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compression levels.

<hr class="field-separator" />

<div class="signature field-var no-description" id="Z_BEST_SPEED"><code><span class="field-name">Z_BEST_SPEED</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Z_BEST_SPEED"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Z_BEST_COMPRESSION"><code><span class="field-name">Z_BEST_COMPRESSION</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Z_BEST_COMPRESSION"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Z_DEFAULT_COMPRESSION"><code><span class="field-name">Z_DEFAULT_COMPRESSION</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Z_DEFAULT_COMPRESSION"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="Z_FILTERED"><code><span class="field-name">Z_FILTERED</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Z_FILTERED"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compression strategy.

<hr class="field-separator" />

<div class="signature field-var no-description" id="Z_HUFFMAN_ONLY"><code><span class="field-name">Z_HUFFMAN_ONLY</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Z_HUFFMAN_ONLY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Z_RLE"><code><span class="field-name">Z_RLE</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Z_RLE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Z_FIXED"><code><span class="field-name">Z_FIXED</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Z_FIXED"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Z_DEFAULT_STRATEGY"><code><span class="field-name">Z_DEFAULT_STRATEGY</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Z_DEFAULT_STRATEGY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="Z_BINARY"><code><span class="field-name">Z_BINARY</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Z_BINARY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Possible values of the data_type field.

<hr class="field-separator" />

<div class="signature field-var no-description" id="Z_TEXT"><code><span class="field-name">Z_TEXT</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Z_TEXT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Z_ASCII"><code><span class="field-name">Z_ASCII</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Z_ASCII"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Z_UNKNOWN"><code><span class="field-name">Z_UNKNOWN</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Z_UNKNOWN"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="Z_DEFLATED"><code><span class="field-name">Z_DEFLATED</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Z_DEFLATED"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The deflate compression method (the only one supported in this version).

<hr class="field-separator" />

<div class="signature field-var has-description" id="Z_NULL"><code><span class="field-name">Z_NULL</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Z_NULL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

For initializing zalloc, zfree, opaque.

<hr class="field-separator" />

<div class="signature field-method has-description" id="createGzip"><code><span class="field-name">createGzip</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/js/node/ZlibOptions/" class="type-link">ZlibOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/zlib/Gzip/" class="type-link">js.node.zlib.Gzip</a></code><a class="header-anchor" href="#createGzip"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a new `Gzip` object with an `options`.

| Name | Type | Default |
|------|------|---------|
| `options` | [Null](/api-docs/headless/Null/)<[ZlibOptions](/api-docs/headless/js/node/ZlibOptions/)> | *(optional)* |

| Returns |
|---------|
| [js.node.zlib.Gzip](/api-docs/headless/js/node/zlib/Gzip/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createGunzip"><code><span class="field-name">createGunzip</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/js/node/ZlibOptions/" class="type-link">ZlibOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/zlib/Gunzip/" class="type-link">js.node.zlib.Gunzip</a></code><a class="header-anchor" href="#createGunzip"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a new `Gunzip` object with an `options`.

| Name | Type | Default |
|------|------|---------|
| `options` | [Null](/api-docs/headless/Null/)<[ZlibOptions](/api-docs/headless/js/node/ZlibOptions/)> | *(optional)* |

| Returns |
|---------|
| [js.node.zlib.Gunzip](/api-docs/headless/js/node/zlib/Gunzip/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createDeflate"><code><span class="field-name">createDeflate</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/js/node/ZlibOptions/" class="type-link">ZlibOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/zlib/Deflate/" class="type-link">js.node.zlib.Deflate</a></code><a class="header-anchor" href="#createDeflate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a new `Deflate` object with an `options`.

| Name | Type | Default |
|------|------|---------|
| `options` | [Null](/api-docs/headless/Null/)<[ZlibOptions](/api-docs/headless/js/node/ZlibOptions/)> | *(optional)* |

| Returns |
|---------|
| [js.node.zlib.Deflate](/api-docs/headless/js/node/zlib/Deflate/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createInflate"><code><span class="field-name">createInflate</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/js/node/ZlibOptions/" class="type-link">ZlibOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/zlib/Inflate/" class="type-link">js.node.zlib.Inflate</a></code><a class="header-anchor" href="#createInflate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a new `Inflate` object with an `options`.

| Name | Type | Default |
|------|------|---------|
| `options` | [Null](/api-docs/headless/Null/)<[ZlibOptions](/api-docs/headless/js/node/ZlibOptions/)> | *(optional)* |

| Returns |
|---------|
| [js.node.zlib.Inflate](/api-docs/headless/js/node/zlib/Inflate/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createDeflateRaw"><code><span class="field-name">createDeflateRaw</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/js/node/ZlibOptions/" class="type-link">ZlibOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/zlib/DeflateRaw/" class="type-link">js.node.zlib.DeflateRaw</a></code><a class="header-anchor" href="#createDeflateRaw"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a new `DeflateRaw` object with an `options`.

| Name | Type | Default |
|------|------|---------|
| `options` | [Null](/api-docs/headless/Null/)<[ZlibOptions](/api-docs/headless/js/node/ZlibOptions/)> | *(optional)* |

| Returns |
|---------|
| [js.node.zlib.DeflateRaw](/api-docs/headless/js/node/zlib/DeflateRaw/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createInflateRaw"><code><span class="field-name">createInflateRaw</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/js/node/ZlibOptions/" class="type-link">ZlibOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/zlib/InflateRaw/" class="type-link">js.node.zlib.InflateRaw</a></code><a class="header-anchor" href="#createInflateRaw"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a new `InflateRaw` object with an `options`.

| Name | Type | Default |
|------|------|---------|
| `options` | [Null](/api-docs/headless/Null/)<[ZlibOptions](/api-docs/headless/js/node/ZlibOptions/)> | *(optional)* |

| Returns |
|---------|
| [js.node.zlib.InflateRaw](/api-docs/headless/js/node/zlib/InflateRaw/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createUnzip"><code><span class="field-name">createUnzip</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/js/node/ZlibOptions/" class="type-link">ZlibOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/zlib/Unzip/" class="type-link">js.node.zlib.Unzip</a></code><a class="header-anchor" href="#createUnzip"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a new `Unzip` object with an `options`.

| Name | Type | Default |
|------|------|---------|
| `options` | [Null](/api-docs/headless/Null/)<[ZlibOptions](/api-docs/headless/js/node/ZlibOptions/)> | *(optional)* |

| Returns |
|---------|
| [js.node.zlib.Unzip](/api-docs/headless/js/node/zlib/Unzip/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deflate"><code><span class="field-name">deflate</span><span class="parenthesis">(</span><span class="arg-name">buf</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/headless/js/node/Buffer/" class="type-link">Buffer</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#deflate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compress a string with `Deflate`.

| Name | Type |
|------|------|
| `buf` | [haxe.extern.EitherType](/api-docs/headless/haxe/extern/EitherType/)<[String](/api-docs/headless/String/), [Buffer](/api-docs/headless/js/node/Buffer/)> |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deflateSync"><code><span class="field-name">deflateSync</span><span class="parenthesis">(</span><span class="arg-name">buf</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/headless/js/node/Buffer/" class="type-link">Buffer</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/js/node/ZlibOptions/" class="type-link">ZlibOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/Buffer/" class="type-link">Buffer</a></code><a class="header-anchor" href="#deflateSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compress a string with `Deflate` (synchronous version).

| Name | Type | Default |
|------|------|---------|
| `buf` | [haxe.extern.EitherType](/api-docs/headless/haxe/extern/EitherType/)<[String](/api-docs/headless/String/), [Buffer](/api-docs/headless/js/node/Buffer/)> | |
| `options` | [Null](/api-docs/headless/Null/)<[ZlibOptions](/api-docs/headless/js/node/ZlibOptions/)> | *(optional)* |

| Returns |
|---------|
| [Buffer](/api-docs/headless/js/node/Buffer/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deflateRaw"><code><span class="field-name">deflateRaw</span><span class="parenthesis">(</span><span class="arg-name">buf</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/headless/js/node/Buffer/" class="type-link">Buffer</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#deflateRaw"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compress a string with `DeflateRaw`.

| Name | Type |
|------|------|
| `buf` | [haxe.extern.EitherType](/api-docs/headless/haxe/extern/EitherType/)<[String](/api-docs/headless/String/), [Buffer](/api-docs/headless/js/node/Buffer/)> |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deflateRawSync"><code><span class="field-name">deflateRawSync</span><span class="parenthesis">(</span><span class="arg-name">buf</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/headless/js/node/Buffer/" class="type-link">Buffer</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/js/node/ZlibOptions/" class="type-link">ZlibOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/Buffer/" class="type-link">Buffer</a></code><a class="header-anchor" href="#deflateRawSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compress a string with `DeflateRaw` (synchronous version).

| Name | Type | Default |
|------|------|---------|
| `buf` | [haxe.extern.EitherType](/api-docs/headless/haxe/extern/EitherType/)<[String](/api-docs/headless/String/), [Buffer](/api-docs/headless/js/node/Buffer/)> | |
| `options` | [Null](/api-docs/headless/Null/)<[ZlibOptions](/api-docs/headless/js/node/ZlibOptions/)> | *(optional)* |

| Returns |
|---------|
| [Buffer](/api-docs/headless/js/node/Buffer/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="gzip"><code><span class="field-name">gzip</span><span class="parenthesis">(</span><span class="arg-name">buf</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/headless/js/node/Buffer/" class="type-link">Buffer</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#gzip"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compress a string with `Gzip`.

| Name | Type |
|------|------|
| `buf` | [haxe.extern.EitherType](/api-docs/headless/haxe/extern/EitherType/)<[String](/api-docs/headless/String/), [Buffer](/api-docs/headless/js/node/Buffer/)> |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="gzipSync"><code><span class="field-name">gzipSync</span><span class="parenthesis">(</span><span class="arg-name">buf</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/headless/js/node/Buffer/" class="type-link">Buffer</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/js/node/ZlibOptions/" class="type-link">ZlibOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/Buffer/" class="type-link">Buffer</a></code><a class="header-anchor" href="#gzipSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compress a string with `Gzip` (synchronous version).

| Name | Type | Default |
|------|------|---------|
| `buf` | [haxe.extern.EitherType](/api-docs/headless/haxe/extern/EitherType/)<[String](/api-docs/headless/String/), [Buffer](/api-docs/headless/js/node/Buffer/)> | |
| `options` | [Null](/api-docs/headless/Null/)<[ZlibOptions](/api-docs/headless/js/node/ZlibOptions/)> | *(optional)* |

| Returns |
|---------|
| [Buffer](/api-docs/headless/js/node/Buffer/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="gunzip"><code><span class="field-name">gunzip</span><span class="parenthesis">(</span><span class="arg-name">buf</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/headless/js/node/Buffer/" class="type-link">Buffer</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#gunzip"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Decompress a raw Buffer with `Gunzip`.

| Name | Type |
|------|------|
| `buf` | [haxe.extern.EitherType](/api-docs/headless/haxe/extern/EitherType/)<[String](/api-docs/headless/String/), [Buffer](/api-docs/headless/js/node/Buffer/)> |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="gunzipSync"><code><span class="field-name">gunzipSync</span><span class="parenthesis">(</span><span class="arg-name">buf</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/headless/js/node/Buffer/" class="type-link">Buffer</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/js/node/ZlibOptions/" class="type-link">ZlibOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/Buffer/" class="type-link">Buffer</a></code><a class="header-anchor" href="#gunzipSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Decompress a raw Buffer with `Gunzip` (synchronous version).

| Name | Type | Default |
|------|------|---------|
| `buf` | [haxe.extern.EitherType](/api-docs/headless/haxe/extern/EitherType/)<[String](/api-docs/headless/String/), [Buffer](/api-docs/headless/js/node/Buffer/)> | |
| `options` | [Null](/api-docs/headless/Null/)<[ZlibOptions](/api-docs/headless/js/node/ZlibOptions/)> | *(optional)* |

| Returns |
|---------|
| [Buffer](/api-docs/headless/js/node/Buffer/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="inflate"><code><span class="field-name">inflate</span><span class="parenthesis">(</span><span class="arg-name">buf</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/headless/js/node/Buffer/" class="type-link">Buffer</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#inflate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Decompress a raw Buffer with `Inflate`.

| Name | Type |
|------|------|
| `buf` | [haxe.extern.EitherType](/api-docs/headless/haxe/extern/EitherType/)<[String](/api-docs/headless/String/), [Buffer](/api-docs/headless/js/node/Buffer/)> |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="inflateSync"><code><span class="field-name">inflateSync</span><span class="parenthesis">(</span><span class="arg-name">buf</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/headless/js/node/Buffer/" class="type-link">Buffer</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/js/node/ZlibOptions/" class="type-link">ZlibOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/Buffer/" class="type-link">Buffer</a></code><a class="header-anchor" href="#inflateSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Decompress a raw Buffer with `Inflate` (synchronous version).

| Name | Type | Default |
|------|------|---------|
| `buf` | [haxe.extern.EitherType](/api-docs/headless/haxe/extern/EitherType/)<[String](/api-docs/headless/String/), [Buffer](/api-docs/headless/js/node/Buffer/)> | |
| `options` | [Null](/api-docs/headless/Null/)<[ZlibOptions](/api-docs/headless/js/node/ZlibOptions/)> | *(optional)* |

| Returns |
|---------|
| [Buffer](/api-docs/headless/js/node/Buffer/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="inflateRaw"><code><span class="field-name">inflateRaw</span><span class="parenthesis">(</span><span class="arg-name">buf</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/headless/js/node/Buffer/" class="type-link">Buffer</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#inflateRaw"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Decompress a raw Buffer with `InflateRaw`.

| Name | Type |
|------|------|
| `buf` | [haxe.extern.EitherType](/api-docs/headless/haxe/extern/EitherType/)<[String](/api-docs/headless/String/), [Buffer](/api-docs/headless/js/node/Buffer/)> |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="inflateRawSync"><code><span class="field-name">inflateRawSync</span><span class="parenthesis">(</span><span class="arg-name">buf</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/headless/js/node/Buffer/" class="type-link">Buffer</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/js/node/ZlibOptions/" class="type-link">ZlibOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/Buffer/" class="type-link">Buffer</a></code><a class="header-anchor" href="#inflateRawSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Decompress a raw Buffer with `InflateRaw` (synchronous version).

| Name | Type | Default |
|------|------|---------|
| `buf` | [haxe.extern.EitherType](/api-docs/headless/haxe/extern/EitherType/)<[String](/api-docs/headless/String/), [Buffer](/api-docs/headless/js/node/Buffer/)> | |
| `options` | [Null](/api-docs/headless/Null/)<[ZlibOptions](/api-docs/headless/js/node/ZlibOptions/)> | *(optional)* |

| Returns |
|---------|
| [Buffer](/api-docs/headless/js/node/Buffer/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="unzip"><code><span class="field-name">unzip</span><span class="parenthesis">(</span><span class="arg-name">buf</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/headless/js/node/Buffer/" class="type-link">Buffer</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unzip"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Decompress a raw Buffer with `Unzip`.

| Name | Type |
|------|------|
| `buf` | [haxe.extern.EitherType](/api-docs/headless/haxe/extern/EitherType/)<[String](/api-docs/headless/String/), [Buffer](/api-docs/headless/js/node/Buffer/)> |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="unzipSync"><code><span class="field-name">unzipSync</span><span class="parenthesis">(</span><span class="arg-name">buf</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/headless/js/node/Buffer/" class="type-link">Buffer</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/js/node/ZlibOptions/" class="type-link">ZlibOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/Buffer/" class="type-link">Buffer</a></code><a class="header-anchor" href="#unzipSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Decompress a raw Buffer with `Unzip` (synchronous version).

| Name | Type | Default |
|------|------|---------|
| `buf` | [haxe.extern.EitherType](/api-docs/headless/haxe/extern/EitherType/)<[String](/api-docs/headless/String/), [Buffer](/api-docs/headless/js/node/Buffer/)> | |
| `options` | [Null](/api-docs/headless/Null/)<[ZlibOptions](/api-docs/headless/js/node/ZlibOptions/)> | *(optional)* |

| Returns |
|---------|
| [Buffer](/api-docs/headless/js/node/Buffer/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:jsRequire` | "zlib" |

