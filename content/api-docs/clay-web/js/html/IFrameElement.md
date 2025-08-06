---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: IFrameElement
target: Clay (Web)
permalink: api-docs/clay-web/js/html/IFrameElement/
---

# IFrameElement

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <a href="/api-docs/clay-web/js/html/Node/">Node</a> → <a href="/api-docs/clay-web/js/html/DOMElement/">DOMElement</a> → <a href="/api-docs/clay-web/js/html/Element/">Element</a> → <strong>js.html.IFrameElement</strong> (extern class)</div>

The `HTMLIFrameElement` interface provides special properties and methods (beyond those of the `HTMLElement` interface it also has available to it by inheritance) for manipulating the layout and presentation of inline frame elements.

Documentation [HTMLIFrameElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement></div>


## Instance Members

<div class="signature field-var has-description" id="src"><code><span class="field-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#src"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that reflects the `src` HTML attribute, containing the address of the content to be embedded.

<hr class="field-separator" />

<div class="signature field-var has-description" id="srcdoc"><code><span class="field-name">srcdoc</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#srcdoc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that represents the content to display in the frame.

<hr class="field-separator" />

<div class="signature field-var has-description" id="name"><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that reflects the `name` HTML attribute, containing a name by which to refer to the frame.

<hr class="field-separator" />

<div class="signature field-var has-description" id="sandbox"><code><span class="field-name">sandbox</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMTokenList/" class="type-link">DOMTokenList</a></code><a class="header-anchor" href="#sandbox"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMSettableTokenList` that reflects the `sandbox` HTML attribute, indicating extra restrictions on the behavior of the nested content.

<hr class="field-separator" />

<div class="signature field-var has-description" id="allowFullscreen"><code><span class="field-name">allowFullscreen</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#allowFullscreen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `Boolean` indicating whether the inline frame is willing to be placed into full screen mode. See Using full-screen mode for details.

<hr class="field-separator" />

<div class="signature field-var has-description" id="allowPaymentRequest"><code><span class="field-name">allowPaymentRequest</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#allowPaymentRequest"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `Boolean` indicating whether the Payment Request API may be invoked inside a cross-origin iframe.

<hr class="field-separator" />

<div class="signature field-var has-description" id="width"><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that reflects the `width` HTML attribute, indicating the width of the frame.

<hr class="field-separator" />

<div class="signature field-var has-description" id="height"><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that reflects the `height` HTML attribute, indicating the height of the frame.

<hr class="field-separator" />

<div class="signature field-var has-description" id="referrerPolicy"><code><span class="field-name">referrerPolicy</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#referrerPolicy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that reflects the `referrerPolicy` HTML attribute indicating which referrer to use when fetching the linked resource.

<hr class="field-separator" />

<div class="signature field-var has-description" id="contentDocument"><code><span class="field-name">contentDocument</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HTMLDocument/" class="type-link">HTMLDocument</a></code><a class="header-anchor" href="#contentDocument"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Document`, the active document in the inline frame's nested browsing context.

<hr class="field-separator" />

<div class="signature field-var has-description" id="contentWindow"><code><span class="field-name">contentWindow</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Window/" class="type-link">Window</a></code><a class="header-anchor" href="#contentWindow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `WindowProxy`, the window proxy for the nested browsing context.

<hr class="field-separator" />

<div class="signature field-var has-description" id="align"><code><span class="field-name">align</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#align"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that specifies the alignment of the frame with respect to the surrounding context.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scrolling"><code><span class="field-name">scrolling</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#scrolling"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that indicates whether the browser should provide scrollbars for the frame.

<hr class="field-separator" />

<div class="signature field-var has-description" id="frameBorder"><code><span class="field-name">frameBorder</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#frameBorder"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that indicates whether to create borders between frames.

<hr class="field-separator" />

<div class="signature field-var has-description" id="longDesc"><code><span class="field-name">longDesc</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#longDesc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that contains the URI of a long description of the frame.

<hr class="field-separator" />

<div class="signature field-var has-description" id="marginHeight"><code><span class="field-name">marginHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#marginHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` being the height of the frame margin.

<hr class="field-separator" />

<div class="signature field-var has-description" id="marginWidth"><code><span class="field-name">marginWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#marginWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` being the width of the frame margin.

<hr class="field-separator" />

<div class="signature field-method no-description" id="getSVGDocument"><code><span class="field-name">getSVGDocument</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HTMLDocument/" class="type-link">HTMLDocument</a></code><a class="header-anchor" href="#getSVGDocument"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [HTMLDocument](/api-docs/clay-web/js/html/HTMLDocument/) |

