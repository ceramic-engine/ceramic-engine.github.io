---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Storage
target: Clay (Web)
permalink: api-docs/clay-web/js/html/Storage/
---

# Storage

<div class="type-hierarchy"><strong>js.html.Storage</strong> (extern class)</div>

The `Storage` interface of the Web Storage API provides access to a particular domain's session or local storage. It allows, for example, the addition, modification, or deletion of stored data items.

Documentation [Storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/Storage$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/Storage></div>


## Instance Members

<div class="signature field-var has-description" id="length"><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an integer representing the number of data items stored in the `Storage` object.

<hr class="field-separator" />

<div class="signature field-method has-description" id="key"><code><span class="field-name">key</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#key"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When passed a number n, this method will return the name of the nth key in the storage.

| Name | Type |
|------|------|
| `index` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getItem"><code><span class="field-name">getItem</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#getItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When passed a key name, will return that key's value.

| Name | Type |
|------|------|
| `key` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setItem"><code><span class="field-name">setItem</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When passed a key name and value, will add that key to the storage, or update that key's value if it already exists.

| Name | Type |
|------|------|
| `key` | [String](/api-docs/clay-web/String/) |
| `value` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="removeItem"><code><span class="field-name">removeItem</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When passed a key name, will remove that key from the storage.

| Name | Type |
|------|------|
| `key` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clear"><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When invoked, will empty all keys out of the storage.

