---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Transaction
target: Clay (Web)
permalink: api-docs/clay-web/js/html/idb/Transaction/
---

# Transaction

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">js.html.EventTarget</a> → <strong>js.html.idb.Transaction</strong> (extern class)</div>

Note that as of Firefox 40, IndexedDB transactions have relaxed durability guarantees to increase performance (see bug 1112702.) Previously in a `readwrite` transaction `IDBTransaction.oncomplete` was fired only when all data was guaranteed to have been flushed to disk. In Firefox 40+ the `complete` event is fired after the OS has been told to write the data but potentially before that data has actually been flushed to disk. The `complete` event may thus be delivered quicker than before, however, there exists a small chance that the entire transaction will be lost if the OS crashes or there is a loss of system power before the data is flushed to disk. Since such catastrophic events are rare most consumers should not need to concern themselves further.

Documentation [IDBTransaction](https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction></div>


## Instance Members

<div class="signature field-var has-description" id="mode"><code><span class="field-name">mode</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/idb/TransactionMode/" class="type-link">TransactionMode</a></code><a class="header-anchor" href="#mode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The mode for isolating access to data in the object stores that are in the scope of the transaction. For possible values, see the Constants section below. The default value is `readonly`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="db"><code><span class="field-name">db</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/idb/Database/" class="type-link">Database</a></code><a class="header-anchor" href="#db"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The database connection with which this transaction is associated.

<hr class="field-separator" />

<div class="signature field-var has-description" id="error"><code><span class="field-name">error</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMException/" class="type-link">js.html.DOMException</a></code><a class="header-anchor" href="#error"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `DOMException` indicating the type of error that occured when there is an unsuccessful transaction. This property is `null` if the transaction is not finished, is finished and successfully committed, or was aborted with `IDBTransaction.abort` function.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onabort"><code><span class="field-name">onabort</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onabort"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The event handler for the `abort` event, fired when the transaction is aborted. This can happen due to:

bad requests, e.g. trying to add() the same key twice, or put() with the same index key with a uniqueness constraint and there is no error handler on the request to call preventDefault() on the event,
an explicit abort() call from script
uncaught exception in request's success/error handler,
an I/O error (actual failure to write to disk, e.g. disk detached, or other OS/hardware failure), or
quota exceeded.

<hr class="field-separator" />

<div class="signature field-var has-description" id="oncomplete"><code><span class="field-name">oncomplete</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#oncomplete"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The event handler for the `complete` event, thrown when the transaction completes successfully.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onerror"><code><span class="field-name">onerror</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onerror"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The event handler for the `error` event, thrown when the transaction fails to complete.

<hr class="field-separator" />

<div class="signature field-var has-description" id="objectStoreNames"><code><span class="field-name">objectStoreNames</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMStringList/" class="type-link">js.html.DOMStringList</a></code><a class="header-anchor" href="#objectStoreNames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `DOMStringList` of the names of `IDBObjectStore` objects.

<hr class="field-separator" />

<div class="signature field-method has-description" id="objectStore"><code><span class="field-name">objectStore</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/idb/ObjectStore/" class="type-link">ObjectStore</a></code><a class="header-anchor" href="#objectStore"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [ObjectStore](/api-docs/clay-web/js/html/idb/ObjectStore/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="abort"><code><span class="field-name">abort</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#abort"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>



