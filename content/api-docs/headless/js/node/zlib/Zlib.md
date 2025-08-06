---
layout: api-docs
category: api-docs
subCategory: doc
menu: Hxnodejs
title: Zlib
target: Headless
permalink: api-docs/headless/js/node/zlib/Zlib/
---

# Zlib

<div class="view-source"><a href="https://github.com/ceramic-engine/hxnodejs/blob/master/src/js/node/zlib/Zlib.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/js/node/events/EventEmitter/">js.node.events.EventEmitter</a> → <a href="/api-docs/headless/js/node/Stream/">js.node.Stream</a> → <a href="/api-docs/headless/js/node/stream/Readable/">js.node.stream.Readable</a> → <a href="/api-docs/headless/js/node/stream/Duplex/">js.node.stream.Duplex</a> → <a href="/api-docs/headless/js/node/stream/Transform/">js.node.stream.Transform</a> → <strong>js.node.zlib.Zlib</strong> (extern class) → <a href="/api-docs/headless/js/node/zlib/Deflate/">Deflate</a>, <a href="/api-docs/headless/js/node/zlib/DeflateRaw/">DeflateRaw</a>, <a href="/api-docs/headless/js/node/zlib/Gunzip/">Gunzip</a>, <a href="/api-docs/headless/js/node/zlib/Gzip/">Gzip</a>, <a href="/api-docs/headless/js/node/zlib/Inflate/">Inflate</a>, <a href="/api-docs/headless/js/node/zlib/InflateRaw/">InflateRaw</a>, <a href="/api-docs/headless/js/node/zlib/Unzip/">Unzip</a></div>

Not exported by the zlib module.
It is documented here because it is the base class of the compressor/decompressor classes.

## Instance Members

<div class="signature field-method has-description" id="flush"><code><span class="field-name">flush</span><span class="parenthesis">(</span><span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#flush"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flush pending data.

`kind` defaults to `Zlib.Z_FULL_FLUSH`.

Don't call this frivolously, premature flushes negatively impact the effectiveness of the compression algorithm.

| Name | Type |
|------|------|
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="params"><code><span class="field-name">params</span><span class="parenthesis">(</span><span class="arg-name">level</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">strategy</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#params"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Dynamically update the compression level and compression strategy.
Only applicable to deflate algorithm.

| Name | Type |
|------|------|
| `level` | [Int](/api-docs/headless/Int/) |
| `strategy` | [Int](/api-docs/headless/Int/) |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="reset"><code><span class="field-name">reset</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#reset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reset the compressor/decompressor to factory defaults.
Only applicable to the inflate and deflate algorithms.

