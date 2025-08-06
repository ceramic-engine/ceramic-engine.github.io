---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: TouchList
target: Clay (Web)
permalink: api-docs/clay-web/js/html/TouchList/
---

# TouchList

<div class="type-hierarchy"><strong>js.html.TouchList</strong> (extern class)</div>

The `TouchList` interface represents a list of contact points with a touch surface; for example, if the user has three fingers on the touch surface (such as a screen or trackpad), the corresponding `TouchList` object would have one `Touch` object for each finger, for a total of three entries.

Documentation [TouchList](https://developer.mozilla.org/en-US/docs/Web/API/TouchList) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/TouchList$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/TouchList></div>


## Instance Members

<div class="signature field-var has-description" id="length"><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The number of `Touch` objects in the `TouchList`.

<hr class="field-separator" />

<div class="signature field-method has-description" id="item"><code><span class="field-name">item</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Touch/" class="type-link">Touch</a></code><a class="header-anchor" href="#item"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the `Touch` object at the specified index in the list.

| Name | Type |
|------|------|
| `index` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Touch](/api-docs/clay-web/js/html/Touch/) |

