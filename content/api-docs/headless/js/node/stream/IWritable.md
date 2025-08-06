---
layout: api-docs
category: api-docs
subCategory: doc
menu: Hxnodejs
title: IWritable
target: Headless
permalink: api-docs/headless/js/node/stream/IWritable/
---

# IWritable

<div class="view-source"><a href="https://github.com/ceramic-engine/hxnodejs/blob/master/src/js/node/stream/Writable.hx">View source</a></div>

<div class="type-hierarchy"><strong>js.node.stream.IWritable</strong> (extern interface)</div>

Writable interface used for type parameter constraints.
See `Writable` for actual class documentation.

## Instance Members

<div class="signature field-var no-description" id="destroyed"><code><span class="field-name">destroyed</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#destroyed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="writable"><code><span class="field-name">writable</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#writable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="writableEnded"><code><span class="field-name">writableEnded</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#writableEnded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="writableFinished"><code><span class="field-name">writableFinished</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#writableFinished"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="writablehighWaterMark"><code><span class="field-name">writablehighWaterMark</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#writablehighWaterMark"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="writableLength"><code><span class="field-name">writableLength</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#writableLength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="writableObjectMode"><code><span class="field-name">writableObjectMode</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#writableObjectMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="isTTY"><code><span class="field-name">isTTY</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isTTY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="cork"><code><span class="field-name">cork</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#cork"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">error</span><span class="operator">:</span> <a href="/api-docs/headless/js/lib/Error/" class="type-link">js.lib.Error</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">IWritable</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `error` | [js.lib.Error](/api-docs/headless/js/lib/Error/) | *(optional)* |

| Returns |
|---------|
| [IWritable](/api-docs/headless/js/node/stream/IWritable/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="end"><code><span class="field-name">end</span><span class="parenthesis">(</span><span class="arg-name">chunk</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">encoding</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">callback</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><span class="type-name">Function</span><span class="operator">,</span> <span class="type-name">Function</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#end"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `chunk` | [Dynamic](/api-docs/headless/Dynamic/) | |
| `encoding` | [String](/api-docs/headless/String/) | *(optional)* |
| `callback` | [haxe.extern.EitherType](/api-docs/headless/haxe/extern/EitherType/)<Function, Function> | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setDefaultEncoding"><code><span class="field-name">setDefaultEncoding</span><span class="parenthesis">(</span><span class="arg-name">encoding</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">IWritable</a></code><a class="header-anchor" href="#setDefaultEncoding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `encoding` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [IWritable](/api-docs/headless/js/node/stream/IWritable/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="uncork"><code><span class="field-name">uncork</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#uncork"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="write"><code><span class="field-name">write</span><span class="parenthesis">(</span><span class="arg-name">chunk</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">encoding</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">callback</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><span class="type-name">Function</span><span class="operator">,</span> <span class="type-name">Function</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#write"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `chunk` | [Dynamic](/api-docs/headless/Dynamic/) | |
| `encoding` | [String](/api-docs/headless/String/) | *(optional)* |
| `callback` | [haxe.extern.EitherType](/api-docs/headless/haxe/extern/EitherType/)<Function, Function> | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:remove` | - |

