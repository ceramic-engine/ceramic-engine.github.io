---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: ObjectStore
target: Clay (Web)
permalink: api-docs/clay-web/js/html/idb/ObjectStore/
---

# ObjectStore

<div class="type-hierarchy"><strong>js.html.idb.ObjectStore</strong> (extern class)</div>

This example shows a variety of different uses of object stores, from updating the data structure with `IDBObjectStore.createIndex` inside an `onupgradeneeded` function, to adding a new item to our object store with `IDBObjectStore.add`. For a full working example, see our To-do Notifications app (view example live.)

Documentation [IDBObjectStore](https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore></div>


## Instance Members

<div class="signature field-var has-description" id="name"><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The name of this object store.

<hr class="field-separator" />

<div class="signature field-var has-description" id="keyPath"><code><span class="field-name">keyPath</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#keyPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The key path of this object store. If this attribute is `null`, the application must provide a key for each modification operation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="indexNames"><code><span class="field-name">indexNames</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMStringList/" class="type-link">js.html.DOMStringList</a></code><a class="header-anchor" href="#indexNames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A list of the names of indexes on objects in this object store.

<hr class="field-separator" />

<div class="signature field-var has-description" id="transaction"><code><span class="field-name">transaction</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/idb/Transaction/" class="type-link">Transaction</a></code><a class="header-anchor" href="#transaction"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `IDBTransaction` object to which this object store belongs.

<hr class="field-separator" />

<div class="signature field-var has-description" id="autoIncrement"><code><span class="field-name">autoIncrement</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#autoIncrement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The value of the auto increment flag for this object store.

<hr class="field-separator" />

<div class="signature field-method has-description" id="put"><code><span class="field-name">put</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/idb/Request/" class="type-link">Request</a></code><a class="header-anchor" href="#put"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `IDBRequest` object, and, in a separate thread, creates a structured clone of the `value`, and stores the cloned value in the object store. This is for updating existing records in an object store when the transaction's mode is `readwrite`.

| Name | Type | Default |
|------|------|---------|
| `value` | [Dynamic](/api-docs/clay-web/Dynamic/) | |
| `key` | [Dynamic](/api-docs/clay-web/Dynamic/) | *(optional)* |

| Returns |
|---------|
| [Request](/api-docs/clay-web/js/html/idb/Request/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="add"><code><span class="field-name">add</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/idb/Request/" class="type-link">Request</a></code><a class="header-anchor" href="#add"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `IDBRequest` object, and, in a separate thread, creates a structured clone of the `value`, and stores the cloned value in the object store. This is for adding new records to an object store.

| Name | Type | Default |
|------|------|---------|
| `value` | [Dynamic](/api-docs/clay-web/Dynamic/) | |
| `key` | [Dynamic](/api-docs/clay-web/Dynamic/) | *(optional)* |

| Returns |
|---------|
| [Request](/api-docs/clay-web/js/html/idb/Request/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="delete"><code><span class="field-name">delete</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/idb/Request/" class="type-link">Request</a></code><a class="header-anchor" href="#delete"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

returns an `IDBRequest` object, and, in a separate thread, deletes the store object selected by the specified key. This is for deleting individual records out of an object store.

| Name | Type |
|------|------|
| `key` | [Dynamic](/api-docs/clay-web/Dynamic/) |

| Returns |
|---------|
| [Request](/api-docs/clay-web/js/html/idb/Request/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="get"><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/idb/Request/" class="type-link">Request</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `IDBRequest` object, and, in a separate thread, returns the store object store selected by the specified key. This is for retrieving specific records from an object store.

| Name | Type |
|------|------|
| `key` | [Dynamic](/api-docs/clay-web/Dynamic/) |

| Returns |
|---------|
| [Request](/api-docs/clay-web/js/html/idb/Request/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getKey"><code><span class="field-name">getKey</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/idb/Request/" class="type-link">Request</a></code><a class="header-anchor" href="#getKey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `IDBRequest` object, and, in a separate thread retrieves and returns the record key for the object in the object stored matching the specified parameter.

| Name | Type |
|------|------|
| `key` | [Dynamic](/api-docs/clay-web/Dynamic/) |

| Returns |
|---------|
| [Request](/api-docs/clay-web/js/html/idb/Request/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clear"><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/idb/Request/" class="type-link">Request</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates and immediately returns an `IDBRequest` object, and clears this object store in a separate thread. This is for deleting all current records out of an object store.
| Returns |
|---------|
| [Request](/api-docs/clay-web/js/html/idb/Request/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="openCursor"><code><span class="field-name">openCursor</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">range</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">direction</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/idb/CursorDirection/" class="type-link">CursorDirection</a> <span class="operator">=</span> <span class="default-value">NEXT</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/idb/Request/" class="type-link">Request</a></code><a class="header-anchor" href="#openCursor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `IDBRequest` object, and, in a separate thread, returns a new `IDBCursorWithValue` object. Used for iterating through an object store by primary key with a cursor.

| Name | Type | Default |
|------|------|---------|
| `range` | [Dynamic](/api-docs/clay-web/Dynamic/) | *(optional)* |
| `direction` | [CursorDirection](/api-docs/clay-web/js/html/idb/CursorDirection/) | `NEXT` |

| Returns |
|---------|
| [Request](/api-docs/clay-web/js/html/idb/Request/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createIndex"><code><span class="field-name">createIndex</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">keyPath</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">optionalParameters</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/idb/IndexParameters/" class="type-link">IndexParameters</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/idb/Index/" class="type-link">Index</a></code><a class="header-anchor" href="#createIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new index during a version upgrade, returning a new `IDBIndex` object in the connected database.

| Name | Type | Default |
|------|------|---------|
| `name` | [String](/api-docs/clay-web/String/) | |
| `keyPath` | [String](/api-docs/clay-web/String/) | |
| `optionalParameters` | [Null](/api-docs/clay-web/Null/)<[IndexParameters](/api-docs/clay-web/js/html/idb/IndexParameters/)> | *(optional)* |

| Returns |
|---------|
| [Index](/api-docs/clay-web/js/html/idb/Index/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="index"><code><span class="field-name">index</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/idb/Index/" class="type-link">Index</a></code><a class="header-anchor" href="#index"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Opens an index from this object store after which it can, for example, be used to return a sequence of records sorted by that index using a cursor.

| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Index](/api-docs/clay-web/js/html/idb/Index/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deleteIndex"><code><span class="field-name">deleteIndex</span><span class="parenthesis">(</span><span class="arg-name">indexName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#deleteIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Destroys the specified index in the connected database, used during a version upgrade.

| Name | Type |
|------|------|
| `indexName` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="count"><code><span class="field-name">count</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/idb/Request/" class="type-link">Request</a></code><a class="header-anchor" href="#count"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `IDBRequest` object, and, in a separate thread, returns the total number of records that match the provided key or `IDBKeyRange`. If no arguments are provided, it returns the total number of records in the store.

| Name | Type | Default |
|------|------|---------|
| `key` | [Dynamic](/api-docs/clay-web/Dynamic/) | *(optional)* |

| Returns |
|---------|
| [Request](/api-docs/clay-web/js/html/idb/Request/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getAll"><code><span class="field-name">getAll</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">limit</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/idb/Request/" class="type-link">Request</a></code><a class="header-anchor" href="#getAll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `IDBRequest` object retrieves all objects in the object store matching the specified parameter or all objects in the store if no parameters are given.

| Name | Type | Default |
|------|------|---------|
| `key` | [Dynamic](/api-docs/clay-web/Dynamic/) | *(optional)* |
| `limit` | [Int](/api-docs/clay-web/Int/) | *(optional)* |

| Returns |
|---------|
| [Request](/api-docs/clay-web/js/html/idb/Request/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getAllKeys"><code><span class="field-name">getAllKeys</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">limit</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/idb/Request/" class="type-link">Request</a></code><a class="header-anchor" href="#getAllKeys"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `IDBRequest` object retrieves record keys for all objects in the object store matching the specified parameter or all objects in the store if no parameters are given.

| Name | Type | Default |
|------|------|---------|
| `key` | [Dynamic](/api-docs/clay-web/Dynamic/) | *(optional)* |
| `limit` | [Int](/api-docs/clay-web/Int/) | *(optional)* |

| Returns |
|---------|
| [Request](/api-docs/clay-web/js/html/idb/Request/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="openKeyCursor"><code><span class="field-name">openKeyCursor</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">range</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">direction</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/idb/CursorDirection/" class="type-link">CursorDirection</a> <span class="operator">=</span> <span class="default-value">NEXT</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/idb/Request/" class="type-link">Request</a></code><a class="header-anchor" href="#openKeyCursor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `IDBRequest` object, and, in a separate thread, returns a new `IDBCursor`. Used for iterating through an object store with a key.

| Name | Type | Default |
|------|------|---------|
| `range` | [Dynamic](/api-docs/clay-web/Dynamic/) | *(optional)* |
| `direction` | [CursorDirection](/api-docs/clay-web/js/html/idb/CursorDirection/) | `NEXT` |

| Returns |
|---------|
| [Request](/api-docs/clay-web/js/html/idb/Request/) |

