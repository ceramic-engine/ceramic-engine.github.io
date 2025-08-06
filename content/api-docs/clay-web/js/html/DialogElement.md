---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: DialogElement
target: Clay (Web)
permalink: api-docs/clay-web/js/html/DialogElement/
---

# DialogElement

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <a href="/api-docs/clay-web/js/html/Node/">Node</a> → <a href="/api-docs/clay-web/js/html/DOMElement/">DOMElement</a> → <a href="/api-docs/clay-web/js/html/Element/">Element</a> → <strong>js.html.DialogElement</strong> (extern class)</div>

The `HTMLDialogElement` interface provides methods to manipulate `<dialog>` elements.
It inherits properties and methods from the `HTMLElement` interface.

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement></div>


## Instance Members

<div class="signature field-var has-description" id="open"><code><span class="field-name">open</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#open"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `Boolean` reflecting the open HTML attribute, indicating whether the dialog is available for interaction.

<hr class="field-separator" />

<div class="signature field-var has-description" id="returnValue"><code><span class="field-name">returnValue</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#returnValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMString` that sets or returns the return value for the dialog.

<hr class="field-separator" />

<div class="signature field-method has-description" id="close"><code><span class="field-name">close</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">returnValue</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#close"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Closes the dialog.
An optional `DOMString` may be passed as an argument, updating the `returnValue` of the the dialog.

| Name | Type | Default |
|------|------|---------|
| `returnValue` | [String](/api-docs/clay-web/String/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="show"><code><span class="field-name">show</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#show"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Displays the dialog modelessly, i.e. still allowing interaction with content outside of the dialog.

<hr class="field-separator" />

<div class="signature field-method has-description" id="showModal"><code><span class="field-name">showModal</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#showModal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Displays the dialog as a modal, over the top of any other dialogs that might be present.
Interaction outside the dialog is blocked.

