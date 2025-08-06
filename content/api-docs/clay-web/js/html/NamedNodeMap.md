---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: NamedNodeMap
target: Clay (Web)
permalink: api-docs/clay-web/js/html/NamedNodeMap/
---

# NamedNodeMap

<div class="type-hierarchy"><strong>js.html.NamedNodeMap</strong> (extern class)</div>

The `NamedNodeMap` interface represents a collection of `Attr` objects. Objects inside a `NamedNodeMap` are not in any particular order, unlike `NodeList`, although they may be accessed by an index as in an array.

Documentation [NamedNodeMap](https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap></div>


## Instance Members

<div class="signature field-var has-description" id="length"><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the amount of objects in the map.

<hr class="field-separator" />

<div class="signature field-method has-description" id="getNamedItem"><code><span class="field-name">getNamedItem</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Attr/" class="type-link">Attr</a></code><a class="header-anchor" href="#getNamedItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Attr`, corresponding to the given name.

| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Attr](/api-docs/clay-web/js/html/Attr/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setNamedItem"><code><span class="field-name">setNamedItem</span><span class="parenthesis">(</span><span class="arg-name">arg</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Attr/" class="type-link">Attr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Attr/" class="type-link">Attr</a></code><a class="header-anchor" href="#setNamedItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Replaces, or adds, the `Attr` identified in the map by the given name.

| Name | Type |
|------|------|
| `arg` | [Attr](/api-docs/clay-web/js/html/Attr/) |

| Returns |
|---------|
| [Attr](/api-docs/clay-web/js/html/Attr/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="removeNamedItem"><code><span class="field-name">removeNamedItem</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Attr/" class="type-link">Attr</a></code><a class="header-anchor" href="#removeNamedItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes the `Attr` identified by the given map.

| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Attr](/api-docs/clay-web/js/html/Attr/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="item"><code><span class="field-name">item</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Attr/" class="type-link">Attr</a></code><a class="header-anchor" href="#item"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the `Attr` at the given index, or `null` if the index is higher or equal to the number of nodes.

| Name | Type |
|------|------|
| `index` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Attr](/api-docs/clay-web/js/html/Attr/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getNamedItemNS"><code><span class="field-name">getNamedItemNS</span><span class="parenthesis">(</span><span class="arg-name">namespaceURI</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">localName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Attr/" class="type-link">Attr</a></code><a class="header-anchor" href="#getNamedItemNS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Attr` identified by a namespace and related local name.

| Name | Type |
|------|------|
| `namespaceURI` | [String](/api-docs/clay-web/String/) |
| `localName` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Attr](/api-docs/clay-web/js/html/Attr/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setNamedItemNS"><code><span class="field-name">setNamedItemNS</span><span class="parenthesis">(</span><span class="arg-name">arg</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Attr/" class="type-link">Attr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Attr/" class="type-link">Attr</a></code><a class="header-anchor" href="#setNamedItemNS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Replaces, or adds, the `Attr` identified in the map by the given namespace and related local name.

| Name | Type |
|------|------|
| `arg` | [Attr](/api-docs/clay-web/js/html/Attr/) |

| Returns |
|---------|
| [Attr](/api-docs/clay-web/js/html/Attr/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="removeNamedItemNS"><code><span class="field-name">removeNamedItemNS</span><span class="parenthesis">(</span><span class="arg-name">namespaceURI</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">localName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Attr/" class="type-link">Attr</a></code><a class="header-anchor" href="#removeNamedItemNS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes the `Attr` identified by the given namespace and related local name.

| Name | Type |
|------|------|
| `namespaceURI` | [String](/api-docs/clay-web/String/) |
| `localName` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Attr](/api-docs/clay-web/js/html/Attr/) |

