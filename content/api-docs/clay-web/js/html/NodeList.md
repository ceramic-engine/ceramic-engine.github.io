---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: NodeList
target: Clay (Web)
permalink: api-docs/clay-web/js/html/NodeList/
---

# NodeList

<div class="type-hierarchy"><strong>js.html.NodeList</strong> (extern class) → <a href="/api-docs/clay-web/js/html/PropertyNodeList/">PropertyNodeList</a></div>

`NodeList` objects are collections of nodes such as those returned by properties such as `Node.childNodes` and the `document.querySelectorAll()` method.

Documentation [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/NodeList$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/NodeList></div>


## Instance Members

<div class="signature field-var has-description" id="length"><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The number of nodes in the `NodeList`.

<hr class="field-separator" />

<div class="signature field-method has-description" id="item"><code><span class="field-name">item</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a></code><a class="header-anchor" href="#item"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an item in the list by its index, or `null` if the index is out-of-bounds; can be used as an alternative to simply accessing `nodeList[idx]` (which instead returns  `undefined` when `idx` is out-of-bounds).

| Name | Type |
|------|------|
| `index` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Node](/api-docs/clay-web/js/html/Node/) |

