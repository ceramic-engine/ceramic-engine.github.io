---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: OutputElement
target: Clay (Web)
permalink: api-docs/clay-web/js/html/OutputElement/
---

# OutputElement

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <a href="/api-docs/clay-web/js/html/Node/">Node</a> → <a href="/api-docs/clay-web/js/html/DOMElement/">DOMElement</a> → <a href="/api-docs/clay-web/js/html/Element/">Element</a> → <strong>js.html.OutputElement</strong> (extern class)</div>

The `HTMLOutputElement` interface provides properties and methods (beyond those inherited from `HTMLElement`) for manipulating the layout and presentation of `output` elements.

Documentation [HTMLOutputElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOutputElement) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOutputElement$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/HTMLOutputElement></div>


## Instance Members

<div class="signature field-var has-description" id="htmlFor"><code><span class="field-name">htmlFor</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMTokenList/" class="type-link">DOMTokenList</a></code><a class="header-anchor" href="#htmlFor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMTokenList` reflecting the `for` HTML attribute, containing a list of IDs of other elements in the same document that contribute to (or otherwise affect) the calculated `value`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="form"><code><span class="field-name">form</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/FormElement/" class="type-link">FormElement</a></code><a class="header-anchor" href="#form"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An `HTMLFormElement` indicating the form associated with the control, reflecting the `form` HTML attribute if it is defined.

<hr class="field-separator" />

<div class="signature field-var has-description" id="name"><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMString` reflecting the `name` HTML attribute, containing the name for the control that is submitted with form data.

<hr class="field-separator" />

<div class="signature field-var has-description" id="type"><code><span class="field-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `DOMString` `"output"`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="defaultValue"><code><span class="field-name">defaultValue</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#defaultValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMString` representing the default value of the element, initially the empty string.

<hr class="field-separator" />

<div class="signature field-var has-description" id="value"><code><span class="field-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#value"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMString` representing the value of the contents of the elements. Behaves like the `Node.textContent` property.

<hr class="field-separator" />

<div class="signature field-var has-description" id="willValidate"><code><span class="field-name">willValidate</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#willValidate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `Boolean` indicating whether the element is a candidate for constraint validation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="validity"><code><span class="field-name">validity</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/ValidityState/" class="type-link">ValidityState</a></code><a class="header-anchor" href="#validity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `ValidityState` representing the validity states that this element is in.

<hr class="field-separator" />

<div class="signature field-var has-description" id="validationMessage"><code><span class="field-name">validationMessage</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#validationMessage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMString` representing a localized message that describes the validation constraints that the control does not satisfy (if any). This is the empty string if the control is not a candidate for constraint validation (`willValidate` is `false`), or it satisfies its constraints.

<hr class="field-separator" />

<div class="signature field-var has-description" id="labels"><code><span class="field-name">labels</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/NodeList/" class="type-link">NodeList</a></code><a class="header-anchor" href="#labels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `NodeList` of `label` elements associated with the element.

<hr class="field-separator" />

<div class="signature field-method has-description" id="checkValidity"><code><span class="field-name">checkValidity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#checkValidity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks the validity of the element and returns a `Boolean` holding the check result.
| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="reportValidity"><code><span class="field-name">reportValidity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#reportValidity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Triggers an `invalid` event and evaluates its result. if the result is `true`, then the problems with the constraints of this element are reported to the user. When the problem is reported, the user agent may focus the element and change the scrolling position of the document or perform some other action that brings the element to the user's attention. User agents may report more than one constraint violation if this element suffers from multiple problems at once. If the element is not rendered, then the user agent may report the error for the running script instead of notifying the user.
| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setCustomValidity"><code><span class="field-name">setCustomValidity</span><span class="parenthesis">(</span><span class="arg-name">error</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setCustomValidity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a custom validity message for the element. If this message is not the empty string, then the element is suffering from a custom validity error, and does not validate.

| Name | Type |
|------|------|
| `error` | [String](/api-docs/clay-web/String/) |

