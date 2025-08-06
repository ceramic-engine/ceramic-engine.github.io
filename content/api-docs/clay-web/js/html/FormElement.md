---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: FormElement
target: Clay (Web)
permalink: api-docs/clay-web/js/html/FormElement/
---

# FormElement

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <a href="/api-docs/clay-web/js/html/Node/">Node</a> → <a href="/api-docs/clay-web/js/html/DOMElement/">DOMElement</a> → <a href="/api-docs/clay-web/js/html/Element/">Element</a> → <strong>js.html.FormElement</strong> (extern class)</div>

The `HTMLFormElement` interface represents a `form` element in the DOM; it allows access to and in some cases modification of aspects of the form, as well as access to its component elements.

Documentation [HTMLFormElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement></div>


## Instance Members

<div class="signature field-var has-description" id="acceptCharset"><code><span class="field-name">acceptCharset</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#acceptCharset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMString` reflecting the value of the form's `accept-charset` HTML attribute, representing the character encoding that the server accepts.

<hr class="field-separator" />

<div class="signature field-var has-description" id="action"><code><span class="field-name">action</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#action"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMString` reflecting the value of the form's `action` HTML attribute, containing the URI of a program that processes the information submitted by the form.

<hr class="field-separator" />

<div class="signature field-var has-description" id="autocomplete"><code><span class="field-name">autocomplete</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#autocomplete"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMString` reflecting the value of the form's `autocomplete` HTML attribute, indicating whether the controls in this form can have their values automatically populated by the browser.

<hr class="field-separator" />

<div class="signature field-var has-description" id="enctype"><code><span class="field-name">enctype</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#enctype"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMString` reflecting the value of the form's `enctype` HTML attribute, indicating the type of content that is used to transmit the form to the server. Only specified values can be set. The two properties are synonyms.

<hr class="field-separator" />

<div class="signature field-var has-description" id="encoding"><code><span class="field-name">encoding</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#encoding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMString` reflecting the value of the form's `enctype` HTML attribute, indicating the type of content that is used to transmit the form to the server. Only specified values can be set. The two properties are synonyms.

<hr class="field-separator" />

<div class="signature field-var has-description" id="method"><code><span class="field-name">method</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#method"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMString` reflecting the value of the form's `method` HTML attribute, indicating the HTTP method used to submit the form. Only specified values can be set.

<hr class="field-separator" />

<div class="signature field-var has-description" id="name"><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMString` reflecting the value of the form's `name` HTML attribute, containing the name of the form.

<hr class="field-separator" />

<div class="signature field-var has-description" id="noValidate"><code><span class="field-name">noValidate</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#noValidate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `Boolean` reflecting the value of the form's  `novalidate` HTML attribute, indicating whether the form should not be validated.

<hr class="field-separator" />

<div class="signature field-var has-description" id="target"><code><span class="field-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#target"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMString` reflecting the value of the form's `target` HTML attribute, indicating where to display the results received from submitting the form.

<hr class="field-separator" />

<div class="signature field-var has-description" id="elements"><code><span class="field-name">elements</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HTMLCollection/" class="type-link">HTMLCollection</a></code><a class="header-anchor" href="#elements"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `HTMLFormControlsCollection` holding all form controls belonging to this form element.

<hr class="field-separator" />

<div class="signature field-var has-description" id="length"><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `long` reflecting  the number of controls in the form.

<hr class="field-separator" />

<div class="signature field-method has-description" id="submit"><code><span class="field-name">submit</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#submit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Submits the form to the server.

<hr class="field-separator" />

<div class="signature field-method has-description" id="reset"><code><span class="field-name">reset</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#reset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resets the form to its initial state.

<hr class="field-separator" />

<div class="signature field-method has-description" id="checkValidity"><code><span class="field-name">checkValidity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#checkValidity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `true` if the element's child controls are subject to constraint validation and satisfy those contraints; returns `false` if some controls do not satisfy their constraints. Fires an event named `invalid` at any control that does not satisfy its constraints; such controls are considered invalid if the event is not canceled. It is up to the programmer to decide how to respond to `false`.
| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="reportValidity"><code><span class="field-name">reportValidity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#reportValidity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `true` if the element's child controls satisfy their validation constraints. When `false` is returned, cancelable `invalid` events are fired for each invalid child and validation problems are reported to the user.
| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

