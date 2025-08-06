---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Database
target: Clay (Web)
permalink: api-docs/clay-web/js/html/idb/Database/
---

# Database

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">js.html.EventTarget</a> → <strong>js.html.idb.Database</strong> (extern class)</div>

The `IDBDatabase` interface of the IndexedDB API provides a connection to a database; you can use an `IDBDatabase` object to open a transaction on your database then create, manipulate, and delete objects (data) in that database. The interface provides the only way to get and manage versions of the database.

Documentation [IDBDatabase](https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase></div>


## Instance Members

<div class="signature field-var has-description" id="name"><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMString` that contains the name of the connected database.

<hr class="field-separator" />

<div class="signature field-var has-description" id="version"><code><span class="field-name">version</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#version"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A 64-bit integer that contains the version of the connected database. When a database is first created, this attribute is an empty string.

<hr class="field-separator" />

<div class="signature field-var has-description" id="objectStoreNames"><code><span class="field-name">objectStoreNames</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMStringList/" class="type-link">js.html.DOMStringList</a></code><a class="header-anchor" href="#objectStoreNames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMStringList` that contains a list of the names of the object stores currently in the connected database.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onabort"><code><span class="field-name">onabort</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onabort"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fires when access of the database is aborted.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onclose"><code><span class="field-name">onclose</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onclose"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fires when the `close` event occurs; this happens when the database is unexpectedly closed, such as during application shutdown.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onerror"><code><span class="field-name">onerror</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onerror"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fires when access to the database fails.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onversionchange"><code><span class="field-name">onversionchange</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onversionchange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fires when a database structure change (`IDBOpenDBRequest.onupgradeneeded` event or` ``IDBFactory.deleteDatabase()` was requested elsewhere (most probably in another window/tab on the same computer). This is different from the version change transaction (see `IDBVersionChangeEvent`), but it is related.

<hr class="field-separator" />

<div class="signature field-method has-description" id="createObjectStore"><code><span class="field-name">createObjectStore</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">optionalParameters</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/idb/ObjectStoreParameters/" class="type-link">ObjectStoreParameters</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/idb/ObjectStore/" class="type-link">ObjectStore</a></code><a class="header-anchor" href="#createObjectStore"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates and returns a new object store or index.

| Name | Type | Default |
|------|------|---------|
| `name` | [String](/api-docs/clay-web/String/) | |
| `optionalParameters` | [Null](/api-docs/clay-web/Null/)<[ObjectStoreParameters](/api-docs/clay-web/js/html/idb/ObjectStoreParameters/)> | *(optional)* |

| Returns |
|---------|
| [ObjectStore](/api-docs/clay-web/js/html/idb/ObjectStore/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deleteObjectStore"><code><span class="field-name">deleteObjectStore</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#deleteObjectStore"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Destroys the object store with the given name in the connected database, along with any indexes that reference it.

| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="transaction"><code><span class="field-name">transaction</span><span class="parenthesis">(</span><span class="arg-name">storeNames</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">mode</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/idb/TransactionMode/" class="type-link">TransactionMode</a> <span class="operator">=</span> <span class="default-value">READONLY</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/idb/Transaction/" class="type-link">Transaction</a></code><a class="header-anchor" href="#transaction"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Immediately returns a transaction object (`IDBTransaction`) containing the `IDBTransaction.objectStore` method, which you can use to access your object store. Runs in a separate thread.

| Name | Type | Default |
|------|------|---------|
| `storeNames` | [String](/api-docs/clay-web/String/) | |
| `mode` | [TransactionMode](/api-docs/clay-web/js/html/idb/TransactionMode/) | `READONLY` |

| Returns |
|---------|
| [Transaction](/api-docs/clay-web/js/html/idb/Transaction/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="close"><code><span class="field-name">close</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#close"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns immediately and closes the connection to a database in a separate thread.

<hr class="field-separator" />

<div class="signature field-method has-description" id="createMutableFile"><code><span class="field-name">createMutableFile</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/idb/Request/" class="type-link">Request</a></code><a class="header-anchor" href="#createMutableFile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [String](/api-docs/clay-web/String/) | |
| `type` | [String](/api-docs/clay-web/String/) | *(optional)* |

| Returns |
|---------|
| [Request](/api-docs/clay-web/js/html/idb/Request/) |

