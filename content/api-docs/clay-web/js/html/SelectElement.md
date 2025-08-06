---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: SelectElement
target: Clay (Web)
permalink: api-docs/clay-web/js/html/SelectElement/
---

# SelectElement

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <a href="/api-docs/clay-web/js/html/Node/">Node</a> → <a href="/api-docs/clay-web/js/html/DOMElement/">DOMElement</a> → <a href="/api-docs/clay-web/js/html/Element/">Element</a> → <strong>js.html.SelectElement</strong> (extern class)</div>

The `HTMLSelectElement` interface represents a `select` HTML Element. These elements also share all of the properties and methods of other HTML elements via the `HTMLElement` interface.

Documentation [HTMLSelectElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement></div>


## Instance Members

<div class="signature field-var has-description" id="autofocus"><code><span class="field-name">autofocus</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#autofocus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `Boolean` reflecting the `autofocus` HTML attribute, which indicates whether the control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form-associated element in a document can have this attribute specified. `2.0`

<hr class="field-separator" />

<div class="signature field-var no-description" id="autocomplete"><code><span class="field-name">autocomplete</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#autocomplete"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="disabled"><code><span class="field-name">disabled</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#disabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `Boolean` reflecting the `disabled` HTML attribute, which indicates whether the control is disabled. If it is disabled, it does not accept clicks.

<hr class="field-separator" />

<div class="signature field-var has-description" id="form"><code><span class="field-name">form</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/FormElement/" class="type-link">FormElement</a></code><a class="header-anchor" href="#form"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An `HTMLFormElement` referencing the form that this element is associated with. If the element is not associated with of a `form` element, then it returns `null`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="multiple"><code><span class="field-name">multiple</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#multiple"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `Boolean` reflecting the `multiple` HTML attribute, which indicates whether multiple items can be selected.

<hr class="field-separator" />

<div class="signature field-var has-description" id="name"><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMString` reflecting the `name` HTML attribute, containing the name of this control used by servers and DOM search functions.

<hr class="field-separator" />

<div class="signature field-var has-description" id="required"><code><span class="field-name">required</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#required"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `Boolean` reflecting the `required` HTML attribute, which indicates whether the user is required to select a value before submitting the form. `2.0`

<hr class="field-separator" />

<div class="signature field-var has-description" id="size"><code><span class="field-name">size</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#size"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `long` reflecting the `size` HTML attribute, which contains the number of visible items in the control. The default is 1, unless `multiple` is true, in which case it is 4.

<hr class="field-separator" />

<div class="signature field-var has-description" id="type"><code><span class="field-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMString` represeting the form control's type. When `multiple` is `true`, it returns `"select-multiple"`; otherwise, it returns `"select-one"`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="options"><code><span class="field-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HTMLOptionsCollection/" class="type-link">HTMLOptionsCollection</a></code><a class="header-anchor" href="#options"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An `HTMLOptionsCollection` representing the set of `option` elements contained by this element.

<hr class="field-separator" />

<div class="signature field-var has-description" id="length"><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An `unsigned long `The number of `option` elements in this `select` element.

<hr class="field-separator" />

<div class="signature field-var has-description" id="selectedOptions"><code><span class="field-name">selectedOptions</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HTMLCollection/" class="type-link">HTMLCollection</a></code><a class="header-anchor" href="#selectedOptions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An `HTMLCollection` representing the set of `option` elements that are selected.

<hr class="field-separator" />

<div class="signature field-var has-description" id="selectedIndex"><code><span class="field-name">selectedIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#selectedIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `long` reflecting the index of the first selected `option` element. The value `-1` indicates no element is selected.

<hr class="field-separator" />

<div class="signature field-var has-description" id="value"><code><span class="field-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#value"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMString` reflecting the value of the form control (the first selected option). Returns the value attribute of the option element or if it is missing, the text attribute.

<hr class="field-separator" />

<div class="signature field-var has-description" id="willValidate"><code><span class="field-name">willValidate</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#willValidate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `Boolean` that indicates whether the button is a candidate for constraint validation. It is false if any conditions bar it from constraint validation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="validity"><code><span class="field-name">validity</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/ValidityState/" class="type-link">ValidityState</a></code><a class="header-anchor" href="#validity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `ValidityState` reflecting the validity state that this control is in.

<hr class="field-separator" />

<div class="signature field-var has-description" id="validationMessage"><code><span class="field-name">validationMessage</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#validationMessage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMString` representing a localized message that describes the validation constraints that the control does not satisfy (if any). This attribute is the empty string if the control is not a candidate for constraint validation (`willValidate` is false), or it satisfies its constraints.

<hr class="field-separator" />

<div class="signature field-var has-description" id="labels"><code><span class="field-name">labels</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/NodeList/" class="type-link">NodeList</a></code><a class="header-anchor" href="#labels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `NodeList` of `label` elements associated with the element.

<hr class="field-separator" />

<div class="signature field-method has-description" id="item"><code><span class="field-name">item</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#item"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets an item from the options collection for this `select` element. You can also access an item by specifying the index in array-style brackets or parentheses, without calling this method explicitly.

| Name | Type |
|------|------|
| `index` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Element](/api-docs/clay-web/js/html/Element/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="namedItem"><code><span class="field-name">namedItem</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/OptionElement/" class="type-link">OptionElement</a></code><a class="header-anchor" href="#namedItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the item in the options collection with the specified name. The name string can match either the `id` or the `name` attribute of an option node. You can also access an item by specifying the name in array-style brackets or parentheses, without calling this method explicitly.

| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [OptionElement](/api-docs/clay-web/js/html/OptionElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="add"><code><span class="field-name">add</span><span class="parenthesis">(</span><span class="arg-name">element</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/OptionElement/" class="type-link">OptionElement</a><span class="operator">,</span> <a href="/api-docs/clay-web/js/html/OptGroupElement/" class="type-link">OptGroupElement</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">before</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a><span class="operator">,</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#add"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds an element to the collection of `option` elements for this `select` element.

| Name | Type | Default |
|------|------|---------|
| `element` | [haxe.extern.EitherType](/api-docs/clay-web/haxe/extern/EitherType/)<[OptionElement](/api-docs/clay-web/js/html/OptionElement/), [OptGroupElement](/api-docs/clay-web/js/html/OptGroupElement/)> | |
| `before` | [haxe.extern.EitherType](/api-docs/clay-web/haxe/extern/EitherType/)<[Element](/api-docs/clay-web/js/html/Element/), [Int](/api-docs/clay-web/Int/)> | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="remove"><code><span class="field-name">remove</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#remove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes the element at the specified index from the options collection for this select element.

<hr class="field-separator" />

<div class="signature field-method has-description" id="checkValidity"><code><span class="field-name">checkValidity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#checkValidity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks whether the element has any constraints and whether it satisfies them. If the element fails its constraints, the browser fires a cancelable `invalid` event at the element (and returns `false`).
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

Sets the custom validity message for the selection element to the specified message. Use the empty string to indicate that the element does not have a custom validity error.

| Name | Type |
|------|------|
| `error` | [String](/api-docs/clay-web/String/) |

