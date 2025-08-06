---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: ObjectElement
target: Clay (Web)
permalink: api-docs/clay-web/js/html/ObjectElement/
---

# ObjectElement

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <a href="/api-docs/clay-web/js/html/Node/">Node</a> → <a href="/api-docs/clay-web/js/html/DOMElement/">DOMElement</a> → <a href="/api-docs/clay-web/js/html/Element/">Element</a> → <strong>js.html.ObjectElement</strong> (extern class)</div>

The `HTMLObjectElement` interface provides special properties and methods (beyond those on the `HTMLElement` interface it also has available to it by inheritance) for manipulating the layout and presentation of `object` element, representing external resources.

Documentation [HTMLObjectElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement></div>


## Instance Members

<div class="signature field-var has-description" id="data"><code><span class="field-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#data"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that reflects the `data` HTML attribute, specifying the address of a resource's data.

<hr class="field-separator" />

<div class="signature field-var has-description" id="type"><code><span class="field-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that reflects the `type` HTML attribute, specifying the MIME type of the resource.

<hr class="field-separator" />

<div class="signature field-var has-description" id="typeMustMatch"><code><span class="field-name">typeMustMatch</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#typeMustMatch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `Boolean` that reflects the `typeMustMatch` HTML attribute, indicating if the resource specified by `data` must only be played if it matches the `type` attribute.

<hr class="field-separator" />

<div class="signature field-var has-description" id="name"><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that reflects the `name` HTML attribute, specifying the name of the browsing context.

<hr class="field-separator" />

<div class="signature field-var has-description" id="useMap"><code><span class="field-name">useMap</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#useMap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that reflects the `usemap` HTML attribute, specifying a `map` element to use.

<hr class="field-separator" />

<div class="signature field-var has-description" id="form"><code><span class="field-name">form</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/FormElement/" class="type-link">FormElement</a></code><a class="header-anchor" href="#form"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Retuns a `HTMLFormElement` representing the object element's form owner, or null if there isn't one.

<hr class="field-separator" />

<div class="signature field-var has-description" id="width"><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that reflects the `width` HTML attribute, specifying the displayed width of the resource in CSS pixels.

<hr class="field-separator" />

<div class="signature field-var has-description" id="height"><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that reflects the `height` HTML attribute, specifying the displayed height of the resource in CSS pixels.

<hr class="field-separator" />

<div class="signature field-var has-description" id="contentDocument"><code><span class="field-name">contentDocument</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HTMLDocument/" class="type-link">HTMLDocument</a></code><a class="header-anchor" href="#contentDocument"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Document` representing the active document of the object element's nested browsing context, if any; otherwise `null`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="contentWindow"><code><span class="field-name">contentWindow</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Window/" class="type-link">Window</a></code><a class="header-anchor" href="#contentWindow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `WindowProxy` representing the window proxy of the object element's nested browsing context, if any; otherwise `null`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="willValidate"><code><span class="field-name">willValidate</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#willValidate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Boolean` that indicates whether the element is a candidate for constraint validation. Always `false` for `HTMLObjectElement` objects.

<hr class="field-separator" />

<div class="signature field-var has-description" id="validity"><code><span class="field-name">validity</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/ValidityState/" class="type-link">ValidityState</a></code><a class="header-anchor" href="#validity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `ValidityState` with the validity states that this element is in.

<hr class="field-separator" />

<div class="signature field-var has-description" id="validationMessage"><code><span class="field-name">validationMessage</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#validationMessage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `DOMString` representing a localized message that describes the validation constraints that the control does not satisfy (if any). This is the empty string if the control is not a candidate for constraint validation (`willValidate` is `false`), or it satisfies its constraints.

<hr class="field-separator" />

<div class="signature field-var has-description" id="align"><code><span class="field-name">align</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#align"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` representing an enumerated property indicating alignment of the element's contents with respect to the surrounding context. The possible values are `"left"`, `"right"`, `"justify"`, and `"center"`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="archive"><code><span class="field-name">archive</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#archive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that reflects the `archive` HTML attribute, containing a list of archives for resources for this object.

<hr class="field-separator" />

<div class="signature field-var has-description" id="code"><code><span class="field-name">code</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#code"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` representing the name of an applet class file, containing either the applet's subclass, or the path to get to the class, including the class file itself.

<hr class="field-separator" />

<div class="signature field-var has-description" id="declare"><code><span class="field-name">declare</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#declare"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `Boolean` that reflects the `declare` HTML attribute, indicating that this is a declaration, not an instantiation, of the object.

<hr class="field-separator" />

<div class="signature field-var has-description" id="hspace"><code><span class="field-name">hspace</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#hspace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `long` representing the horizontal space in pixels around the control.

<hr class="field-separator" />

<div class="signature field-var has-description" id="standby"><code><span class="field-name">standby</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#standby"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that reflects the `standby` HTML attribute, specifying a message to display while the object loads.

<hr class="field-separator" />

<div class="signature field-var has-description" id="vspace"><code><span class="field-name">vspace</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#vspace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `long` representing the horizontal space in pixels around the control.

<hr class="field-separator" />

<div class="signature field-var has-description" id="codeBase"><code><span class="field-name">codeBase</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#codeBase"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that reflects the `codebase` HTML attribute, specifying the base path to use to resolve relative URIs.

<hr class="field-separator" />

<div class="signature field-var has-description" id="codeType"><code><span class="field-name">codeType</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#codeType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that reflects the `codetype` HTML attribute, specifying the content type of the data.

<hr class="field-separator" />

<div class="signature field-var has-description" id="border"><code><span class="field-name">border</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#border"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that reflects the `border` HTML attribute, specifying the width of a border around the object.

<hr class="field-separator" />

<div class="signature field-method has-description" id="checkValidity"><code><span class="field-name">checkValidity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#checkValidity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Retuns a `Boolean` that always is `true`, because `object` objects are never candidates for constraint validation.
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

Sets a custom validity message for the element. If this message is not the empty string, then the element is suffering from a custom validity error, and does not validate.

| Name | Type |
|------|------|
| `error` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getSVGDocument"><code><span class="field-name">getSVGDocument</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HTMLDocument/" class="type-link">HTMLDocument</a></code><a class="header-anchor" href="#getSVGDocument"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [HTMLDocument](/api-docs/clay-web/js/html/HTMLDocument/) |

