---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: LabelElement
target: Clay (Web)
permalink: api-docs/clay-web/js/html/LabelElement/
---

# LabelElement

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <a href="/api-docs/clay-web/js/html/Node/">Node</a> → <a href="/api-docs/clay-web/js/html/DOMElement/">DOMElement</a> → <a href="/api-docs/clay-web/js/html/Element/">Element</a> → <strong>js.html.LabelElement</strong> (extern class)</div>

The `HTMLLabelElement` interface gives access to properties specific to `label` elements. It inherits methods and properties from the base `HTMLElement` interface.

Documentation [HTMLLabelElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement></div>


## Instance Members

<div class="signature field-var has-description" id="form"><code><span class="field-name">form</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/FormElement/" class="type-link">FormElement</a></code><a class="header-anchor" href="#form"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `HTMLFormElement` object representing the form with which the labeled control is associated, or `null` if there is no associated control, or if that control isn't associated with a form. In other words, this is just a shortcut for `HTMLLabelElement.control.form`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="htmlFor"><code><span class="field-name">htmlFor</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#htmlFor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a string containing the ID of the labeled control. This reflects the `for` attribute.

<hr class="field-separator" />

<div class="signature field-var has-description" id="control"><code><span class="field-name">control</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#control"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `HTMLElement` representing the control with which the label is associated.

