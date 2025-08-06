---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Element
target: Clay (Web)
permalink: api-docs/clay-web/js/html/svg/Element/
---

# Element

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">js.html.EventTarget</a> → <a href="/api-docs/clay-web/js/html/Node/">js.html.Node</a> → <a href="/api-docs/clay-web/js/html/DOMElement/">js.html.DOMElement</a> → <strong>js.html.svg.Element</strong> (extern class) → <a href="/api-docs/clay-web/js/html/svg/GraphicsElement/">GraphicsElement</a></div>

All of the SVG DOM interfaces that correspond directly to elements in the SVG language derive from the `SVGElement` interface.

Documentation [SVGElement](https://developer.mozilla.org/en-US/docs/Web/API/SVGElement) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/SVGElement$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/SVGElement></div>


## Instance Members

<div class="signature field-var has-description" id="ownerSVGElement"><code><span class="field-name">ownerSVGElement</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/svg/SVGElement/" class="type-link">SVGElement</a></code><a class="header-anchor" href="#ownerSVGElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An `SVGSVGElement` referring to the nearest ancestor `svg` element. `null` if the given element is the outermost `svg` element.

<hr class="field-separator" />

<div class="signature field-var has-description" id="viewportElement"><code><span class="field-name">viewportElement</span><span class="operator">:</span> <a href="#" class="type-link">Element</a></code><a class="header-anchor" href="#viewportElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `SVGElement`, which established the current viewport. Often, the nearest ancestor `svg` element. `null` if the given element is the outermost `svg` element.

<hr class="field-separator" />

<div class="signature field-method has-description" id="focus"><code><span class="field-name">focus</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#focus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>



<hr class="field-separator" />

<div class="signature field-method has-description" id="blur"><code><span class="field-name">blur</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#blur"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>



