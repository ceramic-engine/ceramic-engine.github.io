---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: ButtonElement
target: Clay (Web)
permalink: api-docs/clay-web/js/html/ButtonElement/
---

# ButtonElement

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <a href="/api-docs/clay-web/js/html/Node/">Node</a> → <a href="/api-docs/clay-web/js/html/DOMElement/">DOMElement</a> → <a href="/api-docs/clay-web/js/html/Element/">Element</a> → <strong>js.html.ButtonElement</strong> (extern class)</div>

The `HTMLButtonElement` interface provides properties and methods (beyond the `button` object interface it also has available to them by inheritance) for manipulating the layout and presentation of button elements.

Documentation [HTMLButtonElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement></div>


## Instance Members

<div class="signature field-var has-description" id="autofocus"><code><span class="field-name">autofocus</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#autofocus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `Boolean` indicating whether or not the control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form-associated element in a document can have this attribute specified.

<hr class="field-separator" />

<div class="signature field-var has-description" id="disabled"><code><span class="field-name">disabled</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#disabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `Boolean` indicating whether or not the control is disabled, meaning that it does not accept any clicks.

<hr class="field-separator" />

<div class="signature field-var has-description" id="form"><code><span class="field-name">form</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/FormElement/" class="type-link">FormElement</a></code><a class="header-anchor" href="#form"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `HTMLFormElement` reflecting the form that this button is associated with. If the button is a descendant of a form element, then this attribute is the ID of that form element.

If the button is not a descendant of a form element, then the attribute can be the ID of any form element in the same document it is related to, or the `null` value if none matches.

<hr class="field-separator" />

<div class="signature field-var has-description" id="formAction"><code><span class="field-name">formAction</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#formAction"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` reflecting the URI of a resource that processes information submitted by the button. If specified, this attribute overrides the `action` attribute of the `form` element that owns this element.

<hr class="field-separator" />

<div class="signature field-var has-description" id="formEnctype"><code><span class="field-name">formEnctype</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#formEnctype"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` reflecting the type of content that is used to submit the form to the server. If specified, this attribute overrides the `enctype` attribute of the `form` element that owns this element.

<hr class="field-separator" />

<div class="signature field-var has-description" id="formMethod"><code><span class="field-name">formMethod</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#formMethod"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` reflecting the HTTP method that the browser uses to submit the form. If specified, this attribute overrides the `method` attribute of the `form` element that owns this element.

<hr class="field-separator" />

<div class="signature field-var has-description" id="formNoValidate"><code><span class="field-name">formNoValidate</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#formNoValidate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `Boolean` indicating that the form is not to be validated when it is submitted. If specified, this attribute overrides the `novalidate` attribute of the `form` element that owns this element.

<hr class="field-separator" />

<div class="signature field-var has-description" id="formTarget"><code><span class="field-name">formTarget</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#formTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` reflecting a name or keyword indicating where to display the response that is received after submitting the form. If specified, this attribute overrides the `target` attribute of the `form` element that owns this element.

<hr class="field-separator" />

<div class="signature field-var has-description" id="name"><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` representing the name of the object when submitted with a form. {{HTMLVersionInline(5)}} If specified, it must not be the empty string.

<hr class="field-separator" />

<div class="signature field-var has-description" id="type"><code><span class="field-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` indicating the behavior of the button. This is an enumerated attribute with the following possible values:

`"submit"`: The button submits the form. This is the default value if the attribute is not specified, {{HTMLVersionInline(5)}} or if it is dynamically changed to an empty or invalid value.
`"reset"`: The button resets the form.
`"button"`: The button does nothing.
`"menu"`: The button displays a menu. <em>(experimental)</em>

<hr class="field-separator" />

<div class="signature field-var has-description" id="value"><code><span class="field-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#value"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` representing the current form control value of the button.

<hr class="field-separator" />

<div class="signature field-var has-description" id="willValidate"><code><span class="field-name">willValidate</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#willValidate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `Boolean` indicating whether the button is a candidate for constraint validation. It is `false` if any conditions bar it from constraint validation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="validity"><code><span class="field-name">validity</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/ValidityState/" class="type-link">ValidityState</a></code><a class="header-anchor" href="#validity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `ValidityState` representing the validity states that this button is in.

<hr class="field-separator" />

<div class="signature field-var has-description" id="validationMessage"><code><span class="field-name">validationMessage</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#validationMessage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` representing the localized message that describes the validation constraints that the control does not satisfy (if any). This attribute is the empty string if the control is not a candidate for constraint validation (`willValidate` is `false`), or it satisfies its constraints.

<hr class="field-separator" />

<div class="signature field-var has-description" id="labels"><code><span class="field-name">labels</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/NodeList/" class="type-link">NodeList</a></code><a class="header-anchor" href="#labels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `NodeList` that represents a list of `label` elements that are labels for this button.

<hr class="field-separator" />

<div class="signature field-method no-description" id="checkValidity"><code><span class="field-name">checkValidity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#checkValidity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="reportValidity"><code><span class="field-name">reportValidity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#reportValidity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setCustomValidity"><code><span class="field-name">setCustomValidity</span><span class="parenthesis">(</span><span class="arg-name">error</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setCustomValidity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `error` | [String](/api-docs/clay-web/String/) |

