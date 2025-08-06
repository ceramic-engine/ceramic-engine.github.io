---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Cursor
target: Clay (Web)
permalink: api-docs/clay-web/js/html/idb/Cursor/
---

# Cursor

<div class="type-hierarchy"><strong>js.html.idb.Cursor</strong> (extern class)</div>

The `IDBCursor` interface of the IndexedDB API represents a cursor for traversing or iterating over multiple records in a database.

Documentation [IDBCursor](https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor></div>


## Instance Members

<div class="signature field-var has-description" id="source"><code><span class="field-name">source</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/idb/ObjectStore/" class="type-link">ObjectStore</a><span class="operator">,</span> <a href="/api-docs/clay-web/js/html/idb/Index/" class="type-link">Index</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#source"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the `IDBObjectStore` or `IDBIndex` that the cursor is iterating. This function never returns null or throws an exception, even if the cursor is currently being iterated, has iterated past its end, or its transaction is not active.

<hr class="field-separator" />

<div class="signature field-var has-description" id="direction"><code><span class="field-name">direction</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/idb/CursorDirection/" class="type-link">CursorDirection</a></code><a class="header-anchor" href="#direction"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the direction of traversal of the cursor. See Constants for possible values.

<hr class="field-separator" />

<div class="signature field-var has-description" id="key"><code><span class="field-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#key"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the key for the record at the cursor's position. If the cursor is outside its range, this is set to `undefined`. The cursor's key can be any data type.

<hr class="field-separator" />

<div class="signature field-var has-description" id="primaryKey"><code><span class="field-name">primaryKey</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#primaryKey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the cursor's current effective primary key. If the cursor is currently being iterated or has iterated outside its range, this is set to `undefined`. The cursor's primary key can be any data type.

<hr class="field-separator" />

<div class="signature field-method has-description" id="update"><code><span class="field-name">update</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/idb/Request/" class="type-link">Request</a></code><a class="header-anchor" href="#update"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `IDBRequest` object, and, in a separate thread, updates the value at the current position of the cursor in the object store. This can be used to update specific records.

| Name | Type |
|------|------|
| `value` | [Dynamic](/api-docs/clay-web/Dynamic/) |

| Returns |
|---------|
| [Request](/api-docs/clay-web/js/html/idb/Request/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="advance"><code><span class="field-name">advance</span><span class="parenthesis">(</span><span class="arg-name">count</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#advance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the number times a cursor should move its position forward.

| Name | Type |
|------|------|
| `count` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="continue_"><code><span class="field-name">continue_</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#continue_"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Advances the cursor to the next position along its direction, to the item whose key matches the optional `key` parameter.

| Name | Type | Default |
|------|------|---------|
| `key` | [Dynamic](/api-docs/clay-web/Dynamic/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="continuePrimaryKey"><code><span class="field-name">continuePrimaryKey</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">primaryKey</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#continuePrimaryKey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the cursor to the given index key and primary key given as arguments.

| Name | Type |
|------|------|
| `key` | [Dynamic](/api-docs/clay-web/Dynamic/) |
| `primaryKey` | [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="delete"><code><span class="field-name">delete</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/idb/Request/" class="type-link">Request</a></code><a class="header-anchor" href="#delete"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `IDBRequest` object, and, in a separate thread, deletes the record at the cursor's position, without changing the cursor's position. This can be used to delete specific records.
| Returns |
|---------|
| [Request](/api-docs/clay-web/js/html/idb/Request/) |

