---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: ProgressElement
target: Clay (Web)
permalink: api-docs/clay-web/js/html/ProgressElement/
---

# ProgressElement

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <a href="/api-docs/clay-web/js/html/Node/">Node</a> → <a href="/api-docs/clay-web/js/html/DOMElement/">DOMElement</a> → <a href="/api-docs/clay-web/js/html/Element/">Element</a> → <strong>js.html.ProgressElement</strong> (extern class)</div>

The `HTMLProgressElement` interface provides special properties and methods (beyond the regular `HTMLElement` interface it also has available to it by inheritance) for manipulating the layout and presentation of `progress` elements.

Documentation [HTMLProgressElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLProgressElement) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/HTMLProgressElement$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/HTMLProgressElement></div>


## Instance Members

<div class="signature field-var has-description" id="value"><code><span class="field-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#value"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `double` value that reflects the current value; if the progress bar is an indeterminate progress bar, it returns `0`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="max"><code><span class="field-name">max</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#max"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `double` value reflecting the content attribute of the same name, limited to numbers greater than zero. Its default value is `1.0`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="position"><code><span class="field-name">position</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#position"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `double` value returning the result of dividing the current value (`value`) by the maximum value (`max`); if the progress bar is an indeterminate progress bar, it returns `-1`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="labels"><code><span class="field-name">labels</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/NodeList/" class="type-link">NodeList</a></code><a class="header-anchor" href="#labels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `NodeList` containing the list of `label` elements that are labels for this element.

