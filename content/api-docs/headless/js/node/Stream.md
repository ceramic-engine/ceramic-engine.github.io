---
layout: api-docs
category: api-docs
subCategory: doc
menu: Hxnodejs
title: Stream
target: Headless
permalink: api-docs/headless/js/node/Stream/
---

# Stream

<div class="view-source"><a href="https://github.com/ceramic-engine/hxnodejs/blob/master/src/js/node/Stream.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/js/node/events/EventEmitter/">js.node.events.EventEmitter</a> → <strong>js.node.Stream</strong> (extern class) → <a href="/api-docs/headless/js/node/stream/Readable/">js.node.stream.Readable</a>, <a href="/api-docs/headless/js/node/stream/Writable/">js.node.stream.Writable</a></div>

Base class for all streams.

## Static Members

<div class="signature field-method has-description" id="pipeline"><code><span class="field-name">pipeline</span><span class="parenthesis">(</span><span class="arg-name">readable</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/stream/IReadable/" class="type-link">js.node.stream.IReadable</a><span class="operator">,</span> <span class="arg-name">streams</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/headless/Void/" class="type-link">Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#pipeline"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A module method to pipe between streams forwarding errors and properly cleaning up
and provide a callback when the pipeline is complete.

<div class="see"><strong>See:</strong> https://nodejs.org/api/stream.html#stream_stream_pipeline_streams_callback</div>


| Name | Type |
|------|------|
| `readable` | [js.node.stream.IReadable](/api-docs/headless/js/node/stream/IReadable/) |
| `streams` | [haxe.extern.Rest](/api-docs/headless/haxe/extern/Rest/) |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/headless/js/lib/Promise/)<[Void](/api-docs/headless/Void/)> |

## Instance Members

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:jsRequire` | "stream" |

