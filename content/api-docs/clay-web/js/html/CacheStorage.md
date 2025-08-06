---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: CacheStorage
target: Clay (Web)
permalink: api-docs/clay-web/js/html/CacheStorage/
---

# CacheStorage

<div class="type-hierarchy"><strong>js.html.CacheStorage</strong> (extern class)</div>

The `CacheStorage` interface represents the storage for `Cache` objects.

Documentation [CacheStorage](https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage></div>


## Instance Members

<div class="signature field-method has-description" id="match"><code><span class="field-name">match</span><span class="parenthesis">(</span><span class="arg-name">request</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Request/" class="type-link">Request</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/CacheQueryOptions/" class="type-link">CacheQueryOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/Response/" class="type-link">Response</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#match"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if a given `Request` is a key in any of the `Cache` objects that the `CacheStorage` object tracks, and returns a `Promise` that resolves to that match.

| Name | Type | Default |
|------|------|---------|
| `request` | [Request](/api-docs/clay-web/js/html/Request/) | |
| `options` | [Null](/api-docs/clay-web/Null/)<[CacheQueryOptions](/api-docs/clay-web/js/html/CacheQueryOptions/)> | *(optional)* |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Response](/api-docs/clay-web/js/html/Response/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="has"><code><span class="field-name">has</span><span class="parenthesis">(</span><span class="arg-name">cacheName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#has"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Promise` that resolves to `true` if a `Cache` object matching the `cacheName` exists.

| Name | Type |
|------|------|
| `cacheName` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Bool](/api-docs/clay-web/Bool/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="open"><code><span class="field-name">open</span><span class="parenthesis">(</span><span class="arg-name">cacheName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/Cache/" class="type-link">Cache</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#open"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Promise` that resolves to the `Cache` object matching the `cacheName` (a new cache is created if it doesn't already exist.)

| Name | Type |
|------|------|
| `cacheName` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Cache](/api-docs/clay-web/js/html/Cache/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="delete"><code><span class="field-name">delete</span><span class="parenthesis">(</span><span class="arg-name">cacheName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#delete"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds the `Cache` object matching the `cacheName`, and if found, deletes the `Cache` object and returns a `Promise` that resolves to `true`. If no `Cache` object is found, it returns `false`.

| Name | Type |
|------|------|
| `cacheName` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Bool](/api-docs/clay-web/Bool/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="keys"><code><span class="field-name">keys</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#keys"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Promise` that will resolve with an array containing strings corresponding to all of the named `Cache` objects tracked by the `CacheStorage`. Use this method to iterate over a list of all the `Cache` objects.
| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Array](/api-docs/clay-web/Array/)<[String](/api-docs/clay-web/String/)>> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">namespace</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/CacheStorageNamespace/" class="type-link">CacheStorageNamespace</a><span class="operator">,</span> <span class="arg-name">principal</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `namespace` | [CacheStorageNamespace](/api-docs/clay-web/js/html/CacheStorageNamespace/) |
| `principal` | [Dynamic](/api-docs/clay-web/Dynamic/) |

