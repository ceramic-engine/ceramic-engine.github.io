---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Factory
target: Clay (Web)
permalink: api-docs/clay-web/js/html/idb/Factory/
---

# Factory

<div class="type-hierarchy"><strong>js.html.idb.Factory</strong> (extern class)</div>

In the following code snippet, we make a request to open a database, and include handlers for the success and error cases. For a full working example, see our To-do Notifications app (view example live.)

Documentation [IDBFactory](https://developer.mozilla.org/en-US/docs/Web/API/IDBFactory) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/IDBFactory$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/IDBFactory></div>


## Instance Members

<div class="signature field-method has-description" id="open"><code><span class="field-name">open</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/idb/OpenDBOptions/" class="type-link">OpenDBOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/idb/OpenDBRequest/" class="type-link">OpenDBRequest</a></code><a class="header-anchor" href="#open"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [String](/api-docs/clay-web/String/) | |
| `options` | [Null](/api-docs/clay-web/Null/)<[OpenDBOptions](/api-docs/clay-web/js/html/idb/OpenDBOptions/)> | *(optional)* |

| Returns |
|---------|
| [OpenDBRequest](/api-docs/clay-web/js/html/idb/OpenDBRequest/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deleteDatabase"><code><span class="field-name">deleteDatabase</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/idb/OpenDBOptions/" class="type-link">OpenDBOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/idb/OpenDBRequest/" class="type-link">OpenDBRequest</a></code><a class="header-anchor" href="#deleteDatabase"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [String](/api-docs/clay-web/String/) | |
| `options` | [Null](/api-docs/clay-web/Null/)<[OpenDBOptions](/api-docs/clay-web/js/html/idb/OpenDBOptions/)> | *(optional)* |

| Returns |
|---------|
| [OpenDBRequest](/api-docs/clay-web/js/html/idb/OpenDBRequest/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="cmp"><code><span class="field-name">cmp</span><span class="parenthesis">(</span><span class="arg-name">first</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">second</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#cmp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `first` | [Dynamic](/api-docs/clay-web/Dynamic/) |
| `second` | [Dynamic](/api-docs/clay-web/Dynamic/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

