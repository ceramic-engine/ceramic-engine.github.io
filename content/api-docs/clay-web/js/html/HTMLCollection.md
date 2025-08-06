---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: HTMLCollection
target: Clay (Web)
permalink: api-docs/clay-web/js/html/HTMLCollection/
---

# HTMLCollection

<div class="type-hierarchy"><strong>js.html.HTMLCollection</strong> (extern class) → <a href="/api-docs/clay-web/js/html/HTMLOptionsCollection/">HTMLOptionsCollection</a>, <a href="/api-docs/clay-web/js/html/HTMLPropertiesCollection/">HTMLPropertiesCollection</a></div>

The `HTMLCollection` interface represents a generic collection (array-like object similar to arguments) of elements (in document order) and offers methods and properties for selecting from the list.

Documentation [HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection></div>


## Instance Members

<div class="signature field-var has-description" id="length"><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the number of items in the collection.

<hr class="field-separator" />

<div class="signature field-method has-description" id="item"><code><span class="field-name">item</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#item"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the specific node at the given zero-based `index` into the list. Returns `null` if the `index` is out of range.

| Name | Type |
|------|------|
| `index` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Element](/api-docs/clay-web/js/html/Element/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="namedItem"><code><span class="field-name">namedItem</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#namedItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the specific node whose ID or, as a fallback, name matches the string specified by `name`. Matching by name is only done as a last resort, only in HTML, and only if the referenced element supports the `name` attribute. Returns `null` if no node exists by the given name.

| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Element](/api-docs/clay-web/js/html/Element/) |

