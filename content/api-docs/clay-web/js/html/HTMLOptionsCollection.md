---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: HTMLOptionsCollection
target: Clay (Web)
permalink: api-docs/clay-web/js/html/HTMLOptionsCollection/
---

# HTMLOptionsCollection

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/HTMLCollection/">HTMLCollection</a> → <strong>js.html.HTMLOptionsCollection</strong> (extern class)</div>

`HTMLOptionsCollection` is an interface representing a collection of HTML option elements (in document order) and offers methods and properties for traversing the list as well as optionally altering its items. This type is returned solely by the "options" property of select.

Documentation [HTMLOptionsCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptionsCollection) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptionsCollection$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptionsCollection></div>


## Instance Members

<div class="signature field-var no-description" id="selectedIndex"><code><span class="field-name">selectedIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#selectedIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="add"><code><span class="field-name">add</span><span class="parenthesis">(</span><span class="arg-name">element</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/OptionElement/" class="type-link">OptionElement</a><span class="operator">,</span> <a href="/api-docs/clay-web/js/html/OptGroupElement/" class="type-link">OptGroupElement</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">before</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a><span class="operator">,</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#add"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `element` | [haxe.extern.EitherType](/api-docs/clay-web/haxe/extern/EitherType/)<[OptionElement](/api-docs/clay-web/js/html/OptionElement/), [OptGroupElement](/api-docs/clay-web/js/html/OptGroupElement/)> | |
| `before` | [haxe.extern.EitherType](/api-docs/clay-web/haxe/extern/EitherType/)<[Element](/api-docs/clay-web/js/html/Element/), [Int](/api-docs/clay-web/Int/)> | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="remove"><code><span class="field-name">remove</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#remove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `index` | [Int](/api-docs/clay-web/Int/) |

