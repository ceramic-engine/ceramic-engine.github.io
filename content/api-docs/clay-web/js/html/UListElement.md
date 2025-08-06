---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: UListElement
target: Clay (Web)
permalink: api-docs/clay-web/js/html/UListElement/
---

# UListElement

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <a href="/api-docs/clay-web/js/html/Node/">Node</a> → <a href="/api-docs/clay-web/js/html/DOMElement/">DOMElement</a> → <a href="/api-docs/clay-web/js/html/Element/">Element</a> → <strong>js.html.UListElement</strong> (extern class)</div>

The `HTMLUListElement` interface provides special properties (beyond those defined on the regular `HTMLElement` interface it also has available to it by inheritance) for manipulating unordered list elements.

Documentation [HTMLUListElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLUListElement) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/HTMLUListElement$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/HTMLUListElement></div>


## Instance Members

<div class="signature field-var has-description" id="compact"><code><span class="field-name">compact</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#compact"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `Boolean` indicating that spacing between list items should be reduced. This property reflects the `compact` attribute only, it doesn't consider the `line-height` CSS property used for that behavior in modern pages.

<hr class="field-separator" />

<div class="signature field-var has-description" id="type"><code><span class="field-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` value reflecting the `type` and defining the kind of marker to be used to display. The values are browser dependent and have never been standardized.

