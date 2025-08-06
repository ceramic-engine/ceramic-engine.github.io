---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: OListElement
target: Clay (Web)
permalink: api-docs/clay-web/js/html/OListElement/
---

# OListElement

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <a href="/api-docs/clay-web/js/html/Node/">Node</a> → <a href="/api-docs/clay-web/js/html/DOMElement/">DOMElement</a> → <a href="/api-docs/clay-web/js/html/Element/">Element</a> → <strong>js.html.OListElement</strong> (extern class)</div>

The `HTMLOListElement` interface provides special properties (beyond those defined on the regular `HTMLElement` interface it also has available to it by inheritance) for manipulating ordered list elements.

Documentation [HTMLOListElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOListElement) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOListElement$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/HTMLOListElement></div>


## Instance Members

<div class="signature field-var has-description" id="reversed"><code><span class="field-name">reversed</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#reversed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `Boolean` value reflecting the `reversed` and defining if the numbering is descending, that is its value is `true`, or ascending (`false`).

<hr class="field-separator" />

<div class="signature field-var has-description" id="start"><code><span class="field-name">start</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#start"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `long` value reflecting the `start` and defining the value of the first number of the first element of the list.

<hr class="field-separator" />

<div class="signature field-var has-description" id="type"><code><span class="field-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` value reflecting the `type` and defining the kind of marker to be used to display. It can have the following values:

`'1'` meaning that decimal numbers are used: `1`, `2`, `3`, `4`, `5`, …
`'a'` meaning that the lowercase latin alphabet is used:  `a`, `b`, `c`, `d`, `e`, …
`'A'` meaning that the uppercase latin alphabet is used: `A`, `B`, `C`, `D`, `E`, …
`'i'` meaning that the lowercase latin numerals are used: `i`, `ii`, `iii`, `iv`, `v`, …
`'I'` meaning that the uppercase latin numerals are used: `I`, `II`, `III`, `IV`, `V`, …

<hr class="field-separator" />

<div class="signature field-var has-description" id="compact"><code><span class="field-name">compact</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#compact"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `Boolean` indicating that spacing between list items should be reduced. This property reflects the `compact` attribute only, it doesn't consider the `line-height` CSS property used for that behavior in modern pages.

