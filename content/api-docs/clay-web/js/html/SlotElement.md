---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: SlotElement
target: Clay (Web)
permalink: api-docs/clay-web/js/html/SlotElement/
---

# SlotElement

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <a href="/api-docs/clay-web/js/html/Node/">Node</a> → <a href="/api-docs/clay-web/js/html/DOMElement/">DOMElement</a> → <a href="/api-docs/clay-web/js/html/Element/">Element</a> → <strong>js.html.SlotElement</strong> (extern class)</div>

The `HTMLSlotElement` interface of the Shadow DOM API enables access to the name and assigned nodes of an HTML `slot` element.

Documentation [HTMLSlotElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement></div>


## Instance Members

<div class="signature field-var has-description" id="name"><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

`DOMString`: Can be used to get and set the slot's name.

<hr class="field-separator" />

<div class="signature field-method has-description" id="assignedNodes"><code><span class="field-name">assignedNodes</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/AssignedNodesOptions/" class="type-link">AssignedNodesOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#assignedNodes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the sequence of elements assigned to this slot, or alternatively the slot's fallback content.

| Name | Type | Default |
|------|------|---------|
| `options` | [Null](/api-docs/clay-web/Null/)<[AssignedNodesOptions](/api-docs/clay-web/js/html/AssignedNodesOptions/)> | *(optional)* |

| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[Node](/api-docs/clay-web/js/html/Node/)> |

