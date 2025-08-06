---
layout: api-docs
category: api-docs
subCategory: doc
menu: Hxnodejs
title: URLSearchParams
target: Headless
permalink: api-docs/headless/js/node/url/URLSearchParams/
---

# URLSearchParams

<div class="view-source"><a href="https://github.com/ceramic-engine/hxnodejs/blob/master/src/js/node/url/URLSearchParams.hx">View source</a></div>

<div class="type-hierarchy"><strong>js.node.url.URLSearchParams</strong> (extern class)</div>

The `URLSearchParams` API provides read and write access to the query of a `URL`.
The `URLSearchParams` class can also be used standalone with one of the four following constructors.
The `URLSearchParams` class is also available on the global object.

The WHATWG `URLSearchParams` interface and the `querystring` module have similar purpose,
but the purpose of the querystring module is more general, as it allows the customization of delimiter characters (`&` and` `=`). On the other hand, this API is designed purely for URL query strings.

## Instance Members

<div class="signature field-method has-description" id="append"><code><span class="field-name">append</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#append"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Append a new name-value pair to the query string.

| Name | Type |
|------|------|
| `name` | [String](/api-docs/headless/String/) |
| `value` | [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="delete"><code><span class="field-name">delete</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#delete"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Remove all name-value pairs whose name is `name`.

| Name | Type |
|------|------|
| `name` | [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="entries"><code><span class="field-name">entries</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/Iterator/" class="type-link">js.node.Iterator</a></code><a class="header-anchor" href="#entries"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an ES6 `Iterator` over each of the name-value pairs in the query.
Each item of the iterator is a JavaScript `Array`.
The first item of the `Array` is the `name`, the second item of the `Array` is the `value`.
| Returns |
|---------|
| [js.node.Iterator](/api-docs/headless/js/node/Iterator/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="forEach"><code><span class="field-name">forEach</span><span class="parenthesis">(</span><span class="arg-name">fn</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">thisArg</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#forEach"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Iterates over each name-value pair in the query and invokes the given function.

| Name | Type | Default |
|------|------|---------|
| `fn` | Function | |
| `thisArg` | [Dynamic](/api-docs/headless/Dynamic/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="get"><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the value of the first name-value pair whose name is `name`.
If there are no such pairs, `null` is returned.

| Name | Type |
|------|------|
| `name` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getAll"><code><span class="field-name">getAll</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getAll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the values of all name-value pairs whose name is `name`.
If there are no such pairs, an empty array is returned.

| Name | Type |
|------|------|
| `name` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [Array](/api-docs/headless/Array/)<[String](/api-docs/headless/String/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="has"><code><span class="field-name">has</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#has"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `true` if there is at least one name-value pair whose name is `name`.

| Name | Type |
|------|------|
| `name` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="keys"><code><span class="field-name">keys</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/Iterator/" class="type-link">js.node.Iterator</a></code><a class="header-anchor" href="#keys"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an ES6 `Iterator` over the names of each name-value pair.
| Returns |
|---------|
| [js.node.Iterator](/api-docs/headless/js/node/Iterator/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="set"><code><span class="field-name">set</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#set"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the value in the `URLSearchParams` object associated with `name` to `value`.
If there are any pre-existing name-value pairs whose names are `name`, set the first such pair's value to `value` and remove all others.
If not, append the name-value pair to the query string.

| Name | Type |
|------|------|
| `name` | [String](/api-docs/headless/String/) |
| `value` | [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="sort"><code><span class="field-name">sort</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#sort"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sort all existing name-value pairs in-place by their names. Sorting is done with a [stable sorting algorithm](https://en.wikipedia.org/wiki/Sorting_algorithm#Stability),
so relative order between name-value pairs with the same name is preserved.

This method can be used, in particular, to increase cache hits.

<hr class="field-separator" />

<div class="signature field-method has-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the search parameters serialized as a string, with characters percent-encoded where necessary.
| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="values"><code><span class="field-name">values</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/Iterator/" class="type-link">js.node.Iterator</a></code><a class="header-anchor" href="#values"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an ES6 `Iterator` over the values of each name-value pair.
| Returns |
|---------|
| [js.node.Iterator](/api-docs/headless/js/node/Iterator/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:jsRequire` | "url", "URLSearchParams" |

