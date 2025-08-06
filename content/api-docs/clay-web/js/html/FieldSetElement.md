---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: FieldSetElement
target: Clay (Web)
permalink: api-docs/clay-web/js/html/FieldSetElement/
---

# FieldSetElement

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <a href="/api-docs/clay-web/js/html/Node/">Node</a> → <a href="/api-docs/clay-web/js/html/DOMElement/">DOMElement</a> → <a href="/api-docs/clay-web/js/html/Element/">Element</a> → <strong>js.html.FieldSetElement</strong> (extern class)</div>

The `HTMLFieldSetElement` interface has special properties and methods (beyond the regular `HTMLElement` interface it also has available to it by inheritance) for manipulating the layout and presentation of field-set elements.

Documentation [HTMLFieldSetElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFieldSetElement) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFieldSetElement$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/HTMLFieldSetElement></div>


## Instance Members

<div class="signature field-var has-description" id="disabled"><code><span class="field-name">disabled</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#disabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `Boolean` reflecting the `disabled` HTML attribute, indicating whether the user can interact with the control.

<hr class="field-separator" />

<div class="signature field-var has-description" id="form"><code><span class="field-name">form</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/FormElement/" class="type-link">FormElement</a></code><a class="header-anchor" href="#form"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An `HTMLFormControlsCollection` or `HTMLCollection` referencing the containing form element, if this element is in a form.

If the field set is not a descendant of a form element, then the attribute can be the ID of any form element in the same document it is related to, or the `null` value if none matches.

<hr class="field-separator" />

<div class="signature field-var has-description" id="name"><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMString` reflecting the `name` HTML attribute, containing the name of the field set, used for submitting the form.

<hr class="field-separator" />

<div class="signature field-var has-description" id="type"><code><span class="field-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `DOMString` `"fieldset"`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="elements"><code><span class="field-name">elements</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HTMLCollection/" class="type-link">HTMLCollection</a></code><a class="header-anchor" href="#elements"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The elements belonging to this field set. The type of this property depends on the version of the spec that is implemented by the browser.

<hr class="field-separator" />

<div class="signature field-var has-description" id="willValidate"><code><span class="field-name">willValidate</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#willValidate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `Boolean` `false`, because `fieldset` objects are never candidates for constraint validation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="validity"><code><span class="field-name">validity</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/ValidityState/" class="type-link">ValidityState</a></code><a class="header-anchor" href="#validity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `ValidityState` representing the validity states that this element is in.

<hr class="field-separator" />

<div class="signature field-var has-description" id="validationMessage"><code><span class="field-name">validationMessage</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#validationMessage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMString` representing a localized message that describes the validation constraints that the element does not satisfy (if any). This is the empty string if the element is not a candidate for constraint validation (`willValidate` is `false`), or it satisfies its constraints.

<hr class="field-separator" />

<div class="signature field-method has-description" id="checkValidity"><code><span class="field-name">checkValidity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#checkValidity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Always returns `true` because `fieldset` objects are never candidates for constraint validation.
| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="reportValidity"><code><span class="field-name">reportValidity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#reportValidity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setCustomValidity"><code><span class="field-name">setCustomValidity</span><span class="parenthesis">(</span><span class="arg-name">error</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setCustomValidity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a custom validity message for the field set. If this message is not the empty string, then the field set is suffering from a custom validity error, and does not validate.

| Name | Type |
|------|------|
| `error` | [String](/api-docs/clay-web/String/) |

