---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: EmbedElement
target: Clay (Web)
permalink: api-docs/clay-web/js/html/EmbedElement/
---

# EmbedElement

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <a href="/api-docs/clay-web/js/html/Node/">Node</a> → <a href="/api-docs/clay-web/js/html/DOMElement/">DOMElement</a> → <a href="/api-docs/clay-web/js/html/Element/">Element</a> → <strong>js.html.EmbedElement</strong> (extern class)</div>

The `HTMLEmbedElement` interface, which provides special properties (beyond the regular `HTMLElement` interface it also has available to it by inheritance) for manipulating `embed` elements.

Documentation [HTMLEmbedElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLEmbedElement) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/HTMLEmbedElement$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/HTMLEmbedElement></div>


## Instance Members

<div class="signature field-var has-description" id="src"><code><span class="field-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#src"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that reflects the `src` HTML attribute, containing the address of the resource.

<hr class="field-separator" />

<div class="signature field-var has-description" id="type"><code><span class="field-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that reflects the `type` HTML attribute, containing the type of the resource.

<hr class="field-separator" />

<div class="signature field-var has-description" id="width"><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that reflects the `width` HTML attribute, containing the displayed width of the resource.

<hr class="field-separator" />

<div class="signature field-var has-description" id="height"><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` reflecting the `height` HTML attribute, containing the displayed height of the resource.

<hr class="field-separator" />

<div class="signature field-var has-description" id="align"><code><span class="field-name">align</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#align"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` representing an enumerated property indicating alignment of the element's contents with respect to the surrounding context. The possible values are `"left"`, `"right"`, `"center"`, and `"justify"`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="name"><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` representing the name of the embedded object.

<hr class="field-separator" />

<div class="signature field-method no-description" id="getSVGDocument"><code><span class="field-name">getSVGDocument</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HTMLDocument/" class="type-link">HTMLDocument</a></code><a class="header-anchor" href="#getSVGDocument"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [HTMLDocument](/api-docs/clay-web/js/html/HTMLDocument/) |

