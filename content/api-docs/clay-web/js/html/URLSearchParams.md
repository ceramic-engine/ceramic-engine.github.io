---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: URLSearchParams
target: Clay (Web)
permalink: api-docs/clay-web/js/html/URLSearchParams/
---

# URLSearchParams

<div class="type-hierarchy"><strong>js.html.URLSearchParams</strong> (extern class)</div>

The `URLSearchParams` interface defines utility methods to work with the query string of a URL.

Documentation [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams></div>


## Instance Members

<div class="signature field-method has-description" id="append"><code><span class="field-name">append</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#append"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Appends a specified key/value pair as a new search parameter.

| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |
| `value` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="delete"><code><span class="field-name">delete</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#delete"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Deletes the given search parameter, and its associated value, from the list of all search parameters.

| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="get"><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the first value associated to the given search parameter.

| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getAll"><code><span class="field-name">getAll</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getAll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns all the values associated with a given search parameter.

| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[String](/api-docs/clay-web/String/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="has"><code><span class="field-name">has</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#has"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Boolean` indicating if such a search parameter exists.

| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="set"><code><span class="field-name">set</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#set"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the value associated to a given search parameter to the given value. If there were several values, delete the others.

| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |
| `value` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="sort"><code><span class="field-name">sort</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#sort"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sorts all key/value pairs, if any, by their keys.

<hr class="field-separator" />

<div class="signature field-method has-description" id="entries"><code><span class="field-name">entries</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/URLSearchParamsIterator/" class="type-link">URLSearchParamsIterator</a></code><a class="header-anchor" href="#entries"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `Iteration_protocols` allowing to go through all key/value pairs contained in this object.
| Returns |
|---------|
| [URLSearchParamsIterator](/api-docs/clay-web/js/html/URLSearchParamsIterator/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="keys"><code><span class="field-name">keys</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/URLSearchParamsIterator/" class="type-link">URLSearchParamsIterator</a></code><a class="header-anchor" href="#keys"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `Iteration_protocols` allowing to go through all keys of the key/value pairs contained in this object.
| Returns |
|---------|
| [URLSearchParamsIterator](/api-docs/clay-web/js/html/URLSearchParamsIterator/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="values"><code><span class="field-name">values</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/URLSearchParamsIterator/" class="type-link">URLSearchParamsIterator</a></code><a class="header-anchor" href="#values"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `Iteration_protocols` allowing to go through all values of the key/value pairs contained in this object.
| Returns |
|---------|
| [URLSearchParamsIterator](/api-docs/clay-web/js/html/URLSearchParamsIterator/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="forEach"><code><span class="field-name">forEach</span><span class="parenthesis">(</span><span class="arg-name">callback</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">thisArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#forEach"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `callback` | [Dynamic](/api-docs/clay-web/Dynamic/) | |
| `thisArg` | [Dynamic](/api-docs/clay-web/Dynamic/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">init</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `init` | [Array](/api-docs/clay-web/Array/)<[Array](/api-docs/clay-web/Array/)<[String](/api-docs/clay-web/String/)>> | *(optional)* |

