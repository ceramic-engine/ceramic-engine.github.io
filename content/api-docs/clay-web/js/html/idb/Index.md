---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Index
target: Clay (Web)
permalink: api-docs/clay-web/js/html/idb/Index/
---

# Index

<div class="type-hierarchy"><strong>js.html.idb.Index</strong> (extern class)</div>

`IDBIndex` interface of the IndexedDB API provides asynchronous access to an index in a database. An index is a kind of object store for looking up records in another object store, called the referenced object store. You use this interface to retrieve data.

Documentation [IDBIndex](https://developer.mozilla.org/en-US/docs/Web/API/IDBIndex) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/IDBIndex$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/IDBIndex></div>


## Instance Members

<div class="signature field-var has-description" id="name"><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The name of this index.

<hr class="field-separator" />

<div class="signature field-var has-description" id="objectStore"><code><span class="field-name">objectStore</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/idb/ObjectStore/" class="type-link">ObjectStore</a></code><a class="header-anchor" href="#objectStore"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The name of the object store referenced by this index.

<hr class="field-separator" />

<div class="signature field-var has-description" id="keyPath"><code><span class="field-name">keyPath</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#keyPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The key path of this index. If null, this index is not auto-populated.

<hr class="field-separator" />

<div class="signature field-var has-description" id="multiEntry"><code><span class="field-name">multiEntry</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#multiEntry"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Affects how the index behaves when the result of evaluating the index's key path yields an array. If `true`, there is one record in the index for each item in an array of keys. If `false`, then there is one record for each key that is an array.

<hr class="field-separator" />

<div class="signature field-var has-description" id="unique"><code><span class="field-name">unique</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unique"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If `true`, this index does not allow duplicate values for a key.

<hr class="field-separator" />

<div class="signature field-method has-description" id="openCursor"><code><span class="field-name">openCursor</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">range</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">direction</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/idb/CursorDirection/" class="type-link">CursorDirection</a> <span class="operator">=</span> <span class="default-value">NEXT</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/idb/Request/" class="type-link">Request</a></code><a class="header-anchor" href="#openCursor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `IDBRequest` object, and, in a separate thread, creates a cursor over the specified key range.

| Name | Type | Default |
|------|------|---------|
| `range` | [Dynamic](/api-docs/clay-web/Dynamic/) | *(optional)* |
| `direction` | [CursorDirection](/api-docs/clay-web/js/html/idb/CursorDirection/) | `NEXT` |

| Returns |
|---------|
| [Request](/api-docs/clay-web/js/html/idb/Request/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="openKeyCursor"><code><span class="field-name">openKeyCursor</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">range</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">direction</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/idb/CursorDirection/" class="type-link">CursorDirection</a> <span class="operator">=</span> <span class="default-value">NEXT</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/idb/Request/" class="type-link">Request</a></code><a class="header-anchor" href="#openKeyCursor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `IDBRequest` object, and, in a separate thread, creates a cursor over the specified key range, as arranged by this index.

| Name | Type | Default |
|------|------|---------|
| `range` | [Dynamic](/api-docs/clay-web/Dynamic/) | *(optional)* |
| `direction` | [CursorDirection](/api-docs/clay-web/js/html/idb/CursorDirection/) | `NEXT` |

| Returns |
|---------|
| [Request](/api-docs/clay-web/js/html/idb/Request/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="get"><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/idb/Request/" class="type-link">Request</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `IDBRequest` object, and, in a separate thread, finds either the value in the referenced object store that corresponds to the given key or the first corresponding value, if `key` is an `IDBKeyRange`.

| Name | Type |
|------|------|
| `key` | [Dynamic](/api-docs/clay-web/Dynamic/) |

| Returns |
|---------|
| [Request](/api-docs/clay-web/js/html/idb/Request/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getKey"><code><span class="field-name">getKey</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/idb/Request/" class="type-link">Request</a></code><a class="header-anchor" href="#getKey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `IDBRequest` object, and, in a separate thread, finds either the given key or the primary key, if `key` is an `IDBKeyRange`.

| Name | Type |
|------|------|
| `key` | [Dynamic](/api-docs/clay-web/Dynamic/) |

| Returns |
|---------|
| [Request](/api-docs/clay-web/js/html/idb/Request/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="count"><code><span class="field-name">count</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/idb/Request/" class="type-link">Request</a></code><a class="header-anchor" href="#count"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `IDBRequest` object, and in a separate thread, returns the number of records within a key range.

| Name | Type | Default |
|------|------|---------|
| `key` | [Dynamic](/api-docs/clay-web/Dynamic/) | *(optional)* |

| Returns |
|---------|
| [Request](/api-docs/clay-web/js/html/idb/Request/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getAll"><code><span class="field-name">getAll</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">limit</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/idb/Request/" class="type-link">Request</a></code><a class="header-anchor" href="#getAll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `IDBRequest` object, in a separate thread, finds all matching values in the referenced object store that correspond to the given key or are in range, if `key` is an `IDBKeyRange`.

| Name | Type | Default |
|------|------|---------|
| `key` | [Dynamic](/api-docs/clay-web/Dynamic/) | *(optional)* |
| `limit` | [Int](/api-docs/clay-web/Int/) | *(optional)* |

| Returns |
|---------|
| [Request](/api-docs/clay-web/js/html/idb/Request/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getAllKeys"><code><span class="field-name">getAllKeys</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">limit</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/idb/Request/" class="type-link">Request</a></code><a class="header-anchor" href="#getAllKeys"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `IDBRequest` object, in a separate thread, finds all matching keys in the referenced object store that correspond to the given key or are in range, if `key` is an `IDBKeyRange`.

| Name | Type | Default |
|------|------|---------|
| `key` | [Dynamic](/api-docs/clay-web/Dynamic/) | *(optional)* |
| `limit` | [Int](/api-docs/clay-web/Int/) | *(optional)* |

| Returns |
|---------|
| [Request](/api-docs/clay-web/js/html/idb/Request/) |

