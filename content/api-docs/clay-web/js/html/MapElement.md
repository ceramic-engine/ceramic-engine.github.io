---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: MapElement
target: Clay (Web)
permalink: api-docs/clay-web/js/html/MapElement/
---

# MapElement

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <a href="/api-docs/clay-web/js/html/Node/">Node</a> → <a href="/api-docs/clay-web/js/html/DOMElement/">DOMElement</a> → <a href="/api-docs/clay-web/js/html/Element/">Element</a> → <strong>js.html.MapElement</strong> (extern class)</div>

The `HTMLMapElement` interface provides special properties and methods (beyond those of the regular object `HTMLElement` interface it also has available to it by inheritance) for manipulating the layout and presentation of map elements.

Documentation [HTMLMapElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMapElement) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMapElement$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/HTMLMapElement></div>


## Instance Members

<div class="signature field-var has-description" id="name"><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` representing the `map` element for referencing it other context. If the `id` attribute is set, this must have the same value; and it cannot be `null` or empty.

<hr class="field-separator" />

<div class="signature field-var has-description" id="areas"><code><span class="field-name">areas</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HTMLCollection/" class="type-link">HTMLCollection</a></code><a class="header-anchor" href="#areas"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a live `HTMLCollection` representing the `area` elements associated to this `map`.

