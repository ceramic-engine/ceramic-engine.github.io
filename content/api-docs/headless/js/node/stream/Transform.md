---
layout: api-docs
category: api-docs
subCategory: doc
menu: Hxnodejs
title: Transform
target: Headless
permalink: api-docs/headless/js/node/stream/Transform/
---

# Transform

<div class="view-source"><a href="https://github.com/ceramic-engine/hxnodejs/blob/master/src/js/node/stream/Transform.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/js/node/events/EventEmitter/">js.node.events.EventEmitter</a> → <a href="/api-docs/headless/js/node/Stream/">js.node.Stream</a> → <a href="/api-docs/headless/js/node/stream/Readable/">Readable</a> → <a href="/api-docs/headless/js/node/stream/Duplex/">Duplex</a> → <strong>js.node.stream.Transform</strong> (extern class) → <a href="/api-docs/headless/js/node/zlib/Zlib/">js.node.zlib.Zlib</a></div>

A `Transform` stream is a `Duplex` stream where the output is computed in some way from the input.
Examples include `zlib` streams or `crypto` streams that compress, encrypt, or decrypt data.

<div class="see"><strong>See:</strong> https://nodejs.org/api/stream.html#stream_implementing_a_transform_stream</div>


## Instance Members

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/js/node/stream/TransformNewOptions/" class="type-link">TransformNewOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `options` | [Null](/api-docs/headless/Null/)<[TransformNewOptions](/api-docs/headless/js/node/stream/TransformNewOptions/)> | *(optional)* |

## Metadata

| Name | Parameters |
|------|------------|
| `:jsRequire` | "stream", "Transform" |

