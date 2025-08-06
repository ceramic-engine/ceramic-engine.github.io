---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Request
target: Clay (Web)
permalink: api-docs/clay-web/js/html/idb/Request/
---

# Request

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">js.html.EventTarget</a> → <strong>js.html.idb.Request</strong> (extern class) → <a href="/api-docs/clay-web/js/html/idb/OpenDBRequest/">OpenDBRequest</a></div>

The request object does not initially contain any information about the result of the operation, but once information becomes available, an event is fired on the request, and the information becomes available through the properties of the `IDBRequest` instance.

Documentation [IDBRequest](https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest></div>


## Instance Members

<div class="signature field-var has-description" id="result"><code><span class="field-name">result</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#result"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the result of the request. If the the request failed and the result is not available, an InvalidStateError exception is thrown.

<hr class="field-separator" />

<div class="signature field-var has-description" id="error"><code><span class="field-name">error</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMException/" class="type-link">js.html.DOMException</a></code><a class="header-anchor" href="#error"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `DOMException` in the event of an unsuccessful request, indicating what went wrong.

<hr class="field-separator" />

<div class="signature field-var has-description" id="source"><code><span class="field-name">source</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/idb/ObjectStore/" class="type-link">ObjectStore</a><span class="operator">,</span> <a href="/api-docs/clay-web/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/idb/Index/" class="type-link">Index</a><span class="operator">,</span> <a href="/api-docs/clay-web/js/html/idb/Cursor/" class="type-link">Cursor</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#source"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The source of the request, such as an `IDBIndex` or an `IDBObjectStore`. If no source exists (such as when calling `IDBFactory.open`), it returns null.

<hr class="field-separator" />

<div class="signature field-var has-description" id="transaction"><code><span class="field-name">transaction</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/idb/Transaction/" class="type-link">Transaction</a></code><a class="header-anchor" href="#transaction"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The transaction for the request. This property can be null for certain requests, for example those returned from `IDBFactory.open` unless an upgrade is needed. (You're just connecting to a database, so there is no transaction to return).

<hr class="field-separator" />

<div class="signature field-var has-description" id="readyState"><code><span class="field-name">readyState</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/idb/RequestReadyState/" class="type-link">RequestReadyState</a></code><a class="header-anchor" href="#readyState"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The state of the request. Every request starts in the `pending` state. The state changes to `done` when the request completes successfully or when an error occurs.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onsuccess"><code><span class="field-name">onsuccess</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onsuccess"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The event handler for the success event.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onerror"><code><span class="field-name">onerror</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onerror"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The event handler for the error event.

