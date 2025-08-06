---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: ParamElement
target: Clay (Web)
permalink: api-docs/clay-web/js/html/ParamElement/
---

# ParamElement

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <a href="/api-docs/clay-web/js/html/Node/">Node</a> → <a href="/api-docs/clay-web/js/html/DOMElement/">DOMElement</a> → <a href="/api-docs/clay-web/js/html/Element/">Element</a> → <strong>js.html.ParamElement</strong> (extern class)</div>

The `HTMLParamElement` interface provides special properties (beyond those of the regular `HTMLElement` object interface it inherits) for manipulating `param` elements, representing a pair of a key and a value that acts as a parameter for an `object` element.

Documentation [HTMLParamElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLParamElement) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/HTMLParamElement$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/HTMLParamElement></div>


## Instance Members

<div class="signature field-var has-description" id="name"><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` representing the name of the parameter. It reflects the `name` attribute.

<hr class="field-separator" />

<div class="signature field-var has-description" id="value"><code><span class="field-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#value"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` representing the value associated to the parameter. It reflects the `value` attribute.

<hr class="field-separator" />

<div class="signature field-var has-description" id="type"><code><span class="field-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` containing the type of the parameter when `valueType` has the `"ref"` value. It reflects the `type` attribute.

<hr class="field-separator" />

<div class="signature field-var has-description" id="valueType"><code><span class="field-name">valueType</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#valueType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` containing the type of the `value`. It reflects the ``valuetype`` attribute and has one of the values: `"data"`, `"ref"`, or `"object"`.

