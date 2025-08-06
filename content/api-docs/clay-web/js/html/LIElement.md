---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: LIElement
target: Clay (Web)
permalink: api-docs/clay-web/js/html/LIElement/
---

# LIElement

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <a href="/api-docs/clay-web/js/html/Node/">Node</a> → <a href="/api-docs/clay-web/js/html/DOMElement/">DOMElement</a> → <a href="/api-docs/clay-web/js/html/Element/">Element</a> → <strong>js.html.LIElement</strong> (extern class)</div>

The `HTMLLIElement` interface exposes specific properties and methods (beyond those defined by regular `HTMLElement` interface it also has available to it by inheritance) for manipulating list elements.

Documentation [HTMLLIElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLIElement) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLIElement$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/HTMLLIElement></div>


## Instance Members

<div class="signature field-var has-description" id="value"><code><span class="field-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#value"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `long` indicating the ordinal position of the list element inside a given `ol`. It reflects the `value` attribute of the HTML `li` element, and can be smaller than `0`. If the `li` element is not a child of an `ol` element, the property has no meaning.

<hr class="field-separator" />

<div class="signature field-var has-description" id="type"><code><span class="field-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` representing the type of the bullets, `"disc"`, `"square"` or `"circle"`. As the standard way of defining the list type is via the CSS `list-style-type` property, use the CSSOM methods to set it via a script.

