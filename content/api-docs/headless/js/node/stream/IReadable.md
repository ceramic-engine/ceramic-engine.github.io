---
layout: api-docs
category: api-docs
subCategory: doc
menu: Hxnodejs
title: IReadable
target: Headless
permalink: api-docs/headless/js/node/stream/IReadable/
---

# IReadable

<div class="view-source"><a href="https://github.com/ceramic-engine/hxnodejs/blob/master/src/js/node/stream/Readable.hx">View source</a></div>

<div class="type-hierarchy"><strong>js.node.stream.IReadable</strong> (extern interface)</div>

`IReadable` interface is used as "any Readable".

See `Readable` for actual class documentation.

## Instance Members

<div class="signature field-var no-description" id="destroyed"><code><span class="field-name">destroyed</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#destroyed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="readable"><code><span class="field-name">readable</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#readable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="readableEncoding"><code><span class="field-name">readableEncoding</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#readableEncoding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="readableEnded"><code><span class="field-name">readableEnded</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#readableEnded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="readableHighWaterMark"><code><span class="field-name">readableHighWaterMark</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#readableHighWaterMark"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="readableLength"><code><span class="field-name">readableLength</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#readableLength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="readableObjectMode"><code><span class="field-name">readableObjectMode</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#readableObjectMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">error</span><span class="operator">:</span> <a href="/api-docs/headless/js/lib/Error/" class="type-link">js.lib.Error</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">IReadable</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `error` | [js.lib.Error](/api-docs/headless/js/lib/Error/) | *(optional)* |

| Returns |
|---------|
| [IReadable](/api-docs/headless/js/node/stream/IReadable/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isPaused"><code><span class="field-name">isPaused</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isPaused"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pause"><code><span class="field-name">pause</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">IReadable</a></code><a class="header-anchor" href="#pause"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [IReadable](/api-docs/headless/js/node/stream/IReadable/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pipe"><code><span class="field-name">pipe</span><span class="parenthesis">(</span><span class="arg-name">destination</span><span class="operator">:</span> <span class="type-name">pipe.T</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <span class="type-name">AnonStruct</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">pipe.T</span></code><a class="header-anchor" href="#pipe"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `destination` | pipe.T | |
| `options` | AnonStruct | *(optional)* |

| Returns |
|---------|
| pipe.T |

<hr class="field-separator" />

<div class="signature field-method no-description" id="read"><code><span class="field-name">read</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#read"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `size` | [Int](/api-docs/headless/Int/) | *(optional)* |

| Returns |
|---------|
| [Null](/api-docs/headless/Null/)<[Dynamic](/api-docs/headless/Dynamic/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="resume"><code><span class="field-name">resume</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">IReadable</a></code><a class="header-anchor" href="#resume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [IReadable](/api-docs/headless/js/node/stream/IReadable/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setEncoding"><code><span class="field-name">setEncoding</span><span class="parenthesis">(</span><span class="arg-name">encoding</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">IReadable</a></code><a class="header-anchor" href="#setEncoding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `encoding` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [IReadable](/api-docs/headless/js/node/stream/IReadable/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="unpipe"><code><span class="field-name">unpipe</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">destination</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/stream/IWritable/" class="type-link">IWritable</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">IReadable</a></code><a class="header-anchor" href="#unpipe"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `destination` | [IWritable](/api-docs/headless/js/node/stream/IWritable/) | *(optional)* |

| Returns |
|---------|
| [IReadable](/api-docs/headless/js/node/stream/IReadable/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="unshift"><code><span class="field-name">unshift</span><span class="parenthesis">(</span><span class="arg-name">chunk</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">encoding</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unshift"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `chunk` | [Null](/api-docs/headless/Null/)<[Dynamic](/api-docs/headless/Dynamic/)> | |
| `encoding` | [String](/api-docs/headless/String/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method no-description" id="wrap"><code><span class="field-name">wrap</span><span class="parenthesis">(</span><span class="arg-name">stream</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">IReadable</a></code><a class="header-anchor" href="#wrap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `stream` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [IReadable](/api-docs/headless/js/node/stream/IReadable/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:remove` | - |

