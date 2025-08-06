---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Cache
target: Clay (Web)
permalink: api-docs/clay-web/js/html/Cache/
---

# Cache

<div class="type-hierarchy"><strong>js.html.Cache</strong> (extern class)</div>

The `Cache` interface provides a storage mechanism for `Request` / `Response` object pairs that are cached, for example as part of the `ServiceWorker` life cycle. Note that the `Cache` interface is exposed to windowed scopes as well as workers. You don't have to use it in conjunction with service workers, even though it is defined in the service worker spec.

Documentation [Cache](https://developer.mozilla.org/en-US/docs/Web/API/Cache) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/Cache$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/Cache></div>


## Instance Members

<div class="signature field-method no-description" id="match"><code><span class="field-name">match</span><span class="parenthesis">(</span><span class="arg-name">request</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Request/" class="type-link">Request</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/CacheQueryOptions/" class="type-link">CacheQueryOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/Response/" class="type-link">Response</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#match"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `request` | [Request](/api-docs/clay-web/js/html/Request/) | |
| `options` | [Null](/api-docs/clay-web/Null/)<[CacheQueryOptions](/api-docs/clay-web/js/html/CacheQueryOptions/)> | *(optional)* |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Response](/api-docs/clay-web/js/html/Response/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="matchAll"><code><span class="field-name">matchAll</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">request</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Request/" class="type-link">Request</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/CacheQueryOptions/" class="type-link">CacheQueryOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/Response/" class="type-link">Response</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#matchAll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `request` | [Request](/api-docs/clay-web/js/html/Request/) | *(optional)* |
| `options` | [Null](/api-docs/clay-web/Null/)<[CacheQueryOptions](/api-docs/clay-web/js/html/CacheQueryOptions/)> | *(optional)* |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Array](/api-docs/clay-web/Array/)<[Response](/api-docs/clay-web/js/html/Response/)>> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="add"><code><span class="field-name">add</span><span class="parenthesis">(</span><span class="arg-name">request</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Request/" class="type-link">Request</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Void/" class="type-link">Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#add"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `request` | [Request](/api-docs/clay-web/js/html/Request/) |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Void](/api-docs/clay-web/Void/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addAll"><code><span class="field-name">addAll</span><span class="parenthesis">(</span><span class="arg-name">requests</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/Request/" class="type-link">Request</a><span class="operator">,</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Void/" class="type-link">Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#addAll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `requests` | [Array](/api-docs/clay-web/Array/)<[haxe.extern.EitherType](/api-docs/clay-web/haxe/extern/EitherType/)<[Request](/api-docs/clay-web/js/html/Request/), [String](/api-docs/clay-web/String/)>> |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Void](/api-docs/clay-web/Void/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="put"><code><span class="field-name">put</span><span class="parenthesis">(</span><span class="arg-name">request</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Request/" class="type-link">Request</a><span class="operator">,</span> <span class="arg-name">response</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Response/" class="type-link">Response</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Void/" class="type-link">Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#put"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `request` | [Request](/api-docs/clay-web/js/html/Request/) |
| `response` | [Response](/api-docs/clay-web/js/html/Response/) |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Void](/api-docs/clay-web/Void/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="delete"><code><span class="field-name">delete</span><span class="parenthesis">(</span><span class="arg-name">request</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Request/" class="type-link">Request</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/CacheQueryOptions/" class="type-link">CacheQueryOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#delete"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `request` | [Request](/api-docs/clay-web/js/html/Request/) | |
| `options` | [Null](/api-docs/clay-web/Null/)<[CacheQueryOptions](/api-docs/clay-web/js/html/CacheQueryOptions/)> | *(optional)* |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Bool](/api-docs/clay-web/Bool/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="keys"><code><span class="field-name">keys</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">request</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Request/" class="type-link">Request</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/CacheQueryOptions/" class="type-link">CacheQueryOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/Request/" class="type-link">Request</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#keys"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `request` | [Request](/api-docs/clay-web/js/html/Request/) | *(optional)* |
| `options` | [Null](/api-docs/clay-web/Null/)<[CacheQueryOptions](/api-docs/clay-web/js/html/CacheQueryOptions/)> | *(optional)* |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Array](/api-docs/clay-web/Array/)<[Request](/api-docs/clay-web/js/html/Request/)>> |

