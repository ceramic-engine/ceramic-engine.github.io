---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: FontElement
target: Clay (Web)
permalink: api-docs/clay-web/js/html/FontElement/
---

# FontElement

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <a href="/api-docs/clay-web/js/html/Node/">Node</a> → <a href="/api-docs/clay-web/js/html/DOMElement/">DOMElement</a> → <a href="/api-docs/clay-web/js/html/Element/">Element</a> → <strong>js.html.FontElement</strong> (extern class)</div>

Implements the document object model (DOM) representation of the font element. The HTML Font Element `font` defines the font size, font face and color of text.

Documentation [HTMLFontElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFontElement) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFontElement$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/HTMLFontElement></div>


## Instance Members

<div class="signature field-var has-description" id="color"><code><span class="field-name">color</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#color"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that reflects the `color` HTML attribute, containing either a named color or a color specified in the hexadecimal #RRGGBB format.

<hr class="field-separator" />

<div class="signature field-var has-description" id="face"><code><span class="field-name">face</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#face"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that reflects the `face` HTML attribute, containing a comma-separated list of one or more font names.

<hr class="field-separator" />

<div class="signature field-var has-description" id="size"><code><span class="field-name">size</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#size"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that reflects the `size` HTML attribute, containing either a font size number ranging from 1 to 7 or a relative size to the `size` attribute of the `basefont` element, for example -2 or +1.

