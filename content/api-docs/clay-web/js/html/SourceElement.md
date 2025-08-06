---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: SourceElement
target: Clay (Web)
permalink: api-docs/clay-web/js/html/SourceElement/
---

# SourceElement

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <a href="/api-docs/clay-web/js/html/Node/">Node</a> → <a href="/api-docs/clay-web/js/html/DOMElement/">DOMElement</a> → <a href="/api-docs/clay-web/js/html/Element/">Element</a> → <strong>js.html.SourceElement</strong> (extern class)</div>

The `HTMLSourceElement` interface provides special properties (beyond the regular `HTMLElement` object interface it also has available to it by inheritance) for manipulating `source` elements.

Documentation [HTMLSourceElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSourceElement) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSourceElement$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/HTMLSourceElement></div>


## Instance Members

<div class="signature field-var has-description" id="src"><code><span class="field-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#src"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` reflecting the `src` HTML attribute, containing the URL for the media resource. The `HTMLSourceElement.src` property has a meaning only when the associated `source` element is nested in a media element that is a `video` or an `audio` element. It has no meaning and is ignored when it is nested in a `picture` element. 
Note: If the `src` property is updated (along with any siblings), the parent `HTMLMediaElement`'s `load` method should be called when done, since `source` elements are not re-scanned automatically.

<hr class="field-separator" />

<div class="signature field-var has-description" id="type"><code><span class="field-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` reflecting the `type` HTML attribute, containing the type of the media resource.

<hr class="field-separator" />

<div class="signature field-var has-description" id="srcset"><code><span class="field-name">srcset</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#srcset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` reflecting the `srcset` HTML attribute, containing a list of candidate images, separated by a comma (`',', U+002C COMMA`). A candidate image is a URL followed by a `'w'` with the width of the images, or an `'x'` followed by the pixel density.

<hr class="field-separator" />

<div class="signature field-var has-description" id="sizes"><code><span class="field-name">sizes</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#sizes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` representing image sizes between breakpoints

<hr class="field-separator" />

<div class="signature field-var has-description" id="media"><code><span class="field-name">media</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#media"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` reflecting the `media` HTML attribute, containing the intended type of the media resource.

