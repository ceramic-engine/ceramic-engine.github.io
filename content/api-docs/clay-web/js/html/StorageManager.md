---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: StorageManager
target: Clay (Web)
permalink: api-docs/clay-web/js/html/StorageManager/
---

# StorageManager

<div class="type-hierarchy"><strong>js.html.StorageManager</strong> (extern class)</div>

The `StorageManager` interface of the the Storage API provides an interface for managing persistance permissions and estimating available storage. You can get a reference to this interface using either `navigator.storage` or `WorkerNavigator.storage`.

Documentation [StorageManager](https://developer.mozilla.org/en-US/docs/Web/API/StorageManager) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/StorageManager$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/StorageManager></div>


## Instance Members

<div class="signature field-method has-description" id="persisted"><code><span class="field-name">persisted</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#persisted"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Promise` that resolves to `true` if persistence has already been granted for your site's storage.
| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Bool](/api-docs/clay-web/Bool/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="persist"><code><span class="field-name">persist</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#persist"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Promise` that resolves to `true` if the user agent is able to persist your site's storage.
| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Bool](/api-docs/clay-web/Bool/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="estimate"><code><span class="field-name">estimate</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/StorageEstimate/" class="type-link">StorageEstimate</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#estimate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `StorageEstimate` object containing usage and quota numbers for your origin.
| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[StorageEstimate](/api-docs/clay-web/js/html/StorageEstimate/)> |

