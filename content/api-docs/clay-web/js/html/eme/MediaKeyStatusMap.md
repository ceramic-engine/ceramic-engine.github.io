---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: MediaKeyStatusMap
target: Clay (Web)
permalink: api-docs/clay-web/js/html/eme/MediaKeyStatusMap/
---

# MediaKeyStatusMap

<div class="type-hierarchy"><strong>js.html.eme.MediaKeyStatusMap</strong> (extern class)</div>

The `MediaKeyStatusMap` interface of the EncryptedMediaExtensions API is a read-only map of media key statuses by key IDs.

Documentation [MediaKeyStatusMap](https://developer.mozilla.org/en-US/docs/Web/API/MediaKeyStatusMap) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/MediaKeyStatusMap$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/MediaKeyStatusMap></div>


## Instance Members

<div class="signature field-var has-description" id="size"><code><span class="field-name">size</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#size"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the number of key/value pars in the status map.

<hr class="field-separator" />

<div class="signature field-method has-description" id="has"><code><span class="field-name">has</span><span class="parenthesis">(</span><span class="arg-name">keyId</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/ArrayBufferView/" class="type-link">js.lib.ArrayBufferView</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#has"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a boolean asserting whether a value has been associated with the given key.

| Name | Type |
|------|------|
| `keyId` | [js.lib.ArrayBufferView](/api-docs/clay-web/js/lib/ArrayBufferView/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="get"><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">keyId</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/ArrayBufferView/" class="type-link">js.lib.ArrayBufferView</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the value associated with the given key, or `undefined` if there is none.

| Name | Type |
|------|------|
| `keyId` | [js.lib.ArrayBufferView](/api-docs/clay-web/js/lib/ArrayBufferView/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="entries"><code><span class="field-name">entries</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/MediaKeyStatusMapIterator/" class="type-link">js.html.MediaKeyStatusMapIterator</a></code><a class="header-anchor" href="#entries"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a new `Iterator` object containing an array of `[key, value]` for each element in the status map, in insertion order.
| Returns |
|---------|
| [js.html.MediaKeyStatusMapIterator](/api-docs/clay-web/js/html/MediaKeyStatusMapIterator/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="keys"><code><span class="field-name">keys</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/MediaKeyStatusMapIterator/" class="type-link">js.html.MediaKeyStatusMapIterator</a></code><a class="header-anchor" href="#keys"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a new `Iterator` object containing keys for each element in the status map, in insertion order.
| Returns |
|---------|
| [js.html.MediaKeyStatusMapIterator](/api-docs/clay-web/js/html/MediaKeyStatusMapIterator/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="values"><code><span class="field-name">values</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/MediaKeyStatusMapIterator/" class="type-link">js.html.MediaKeyStatusMapIterator</a></code><a class="header-anchor" href="#values"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a new `Iterator` object containing values for each element in the status map, in insertion order.
| Returns |
|---------|
| [js.html.MediaKeyStatusMapIterator](/api-docs/clay-web/js/html/MediaKeyStatusMapIterator/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="forEach"><code><span class="field-name">forEach</span><span class="parenthesis">(</span><span class="arg-name">callback</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">thisArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#forEach"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calls `callback` once for each key-value pair in the status map, in insertion order. If `argument` is present it will be passed to the callback.

| Name | Type | Default |
|------|------|---------|
| `callback` | [Dynamic](/api-docs/clay-web/Dynamic/) | |
| `thisArg` | [Dynamic](/api-docs/clay-web/Dynamic/) | *(optional)* |

