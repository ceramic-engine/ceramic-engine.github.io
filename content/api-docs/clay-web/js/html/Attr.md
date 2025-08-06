---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Attr
target: Clay (Web)
permalink: api-docs/clay-web/js/html/Attr/
---

# Attr

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <a href="/api-docs/clay-web/js/html/Node/">Node</a> → <strong>js.html.Attr</strong> (extern class)</div>

This type represents a DOM element's attribute as an object. In most DOM methods, you will probably directly retrieve the attribute as a string (e.g., `Element.getAttribute()`, but certain functions (e.g., `Element.getAttributeNode()`) or means of iterating give `Attr` types.

Documentation [Attr](https://developer.mozilla.org/en-US/docs/Web/API/Attr) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/Attr$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/Attr></div>


## Instance Members

<div class="signature field-var has-description" id="localName"><code><span class="field-name">localName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#localName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMString` representing the local part of the qualified name of the attribute.

<hr class="field-separator" />

<div class="signature field-var has-description" id="value"><code><span class="field-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#value"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The attribute's value.

<hr class="field-separator" />

<div class="signature field-var has-description" id="name"><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The attribute's name.

<hr class="field-separator" />

<div class="signature field-var has-description" id="namespaceURI"><code><span class="field-name">namespaceURI</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#namespaceURI"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMString` representing the namespace URI of the attribute, or `null` if there is no namespace.

<hr class="field-separator" />

<div class="signature field-var has-description" id="prefix"><code><span class="field-name">prefix</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#prefix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMString` representing the namespace prefix of the attribute, or `null` if no prefix is specified.

<hr class="field-separator" />

<div class="signature field-var has-description" id="specified"><code><span class="field-name">specified</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#specified"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This property always returns `true`. Originally, it returned `true `if the attribute was explicitly specified in the source code or by a script, and `false` if its value came from the default one defined in the document's DTD.

<hr class="field-separator" />

<div class="signature field-var has-description" id="ownerElement"><code><span class="field-name">ownerElement</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#ownerElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The element holding the attribute.

Note: DOM Level 4 removed this property. The assumption was that since you get an `Attr` object from an `Element`, you should already know the associated element.

As that doesn't hold true in cases like `Attr` objects being returned by `Document.evaluate`, the DOM Living Standard reintroduced the property.

Gecko outputs a deprecation note starting from Gecko 7.0 `7.0`. This note was removed again in Gecko 49.0 `49.0`.

