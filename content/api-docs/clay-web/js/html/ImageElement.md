---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: ImageElement
target: Clay (Web)
permalink: api-docs/clay-web/js/html/ImageElement/
---

# ImageElement

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <a href="/api-docs/clay-web/js/html/Node/">Node</a> → <a href="/api-docs/clay-web/js/html/DOMElement/">DOMElement</a> → <a href="/api-docs/clay-web/js/html/Element/">Element</a> → <strong>js.html.ImageElement</strong> (extern class) → <a href="/api-docs/clay-web/js/html/Image/">Image</a></div>

The `HTMLImageElement` interface provides special properties and methods  for manipulating the layout and presentation of `img` elements.

Documentation [HTMLImageElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement></div>


## Instance Members

<div class="signature field-var has-description" id="alt"><code><span class="field-name">alt</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#alt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that reflects the `alt` HTML attribute,  thus indicating fallback context for the image.

<hr class="field-separator" />

<div class="signature field-var has-description" id="src"><code><span class="field-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#src"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that reflects the `src` HTML attribute, containing the full URL of the image including base URI.

<hr class="field-separator" />

<div class="signature field-var has-description" id="srcset"><code><span class="field-name">srcset</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#srcset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` reflecting the `srcset` HTML attribute, containing a list of candidate images, separated by a comma (`',', U+002C COMMA`). A candidate image is a URL followed by a `'w'` with the width of the images, or an `'x'` followed by the pixel density.

<hr class="field-separator" />

<div class="signature field-var has-description" id="crossOrigin"><code><span class="field-name">crossOrigin</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#crossOrigin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` representing the CORS setting for this image element. See CORS settings attributes for further details.

<hr class="field-separator" />

<div class="signature field-var has-description" id="useMap"><code><span class="field-name">useMap</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#useMap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that reflects the `usemap` HTML attribute, containing a partial URL of a map element.

<hr class="field-separator" />

<div class="signature field-var has-description" id="referrerPolicy"><code><span class="field-name">referrerPolicy</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#referrerPolicy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that reflects the `referrerpolicy` HTML attribute indicating which referrer to use in order to fetch the image.

<hr class="field-separator" />

<div class="signature field-var has-description" id="isMap"><code><span class="field-name">isMap</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isMap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `Boolean` that reflects the `ismap` HTML attribute, indicating that the image is part of a server-side image map.

<hr class="field-separator" />

<div class="signature field-var has-description" id="width"><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `unsigned long` that reflects the `width` HTML attribute, indicating the rendered width of the image in CSS pixels.

<hr class="field-separator" />

<div class="signature field-var has-description" id="height"><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `unsigned long` that reflects the `height` HTML attribute, indicating the rendered height of the image in CSS pixels.

<hr class="field-separator" />

<div class="signature field-var has-description" id="decoding"><code><span class="field-name">decoding</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#decoding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `DOMString` representing a hint given to the browser on how it should decode the image.

<hr class="field-separator" />

<div class="signature field-var has-description" id="naturalWidth"><code><span class="field-name">naturalWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#naturalWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `unsigned long` representing the intrinsic width of the image in CSS pixels, if it is available; otherwise, it will show `0`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="naturalHeight"><code><span class="field-name">naturalHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#naturalHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `unsigned long` representing the intrinsic height of the image in CSS pixels, if it is available; else, it shows `0`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="complete"><code><span class="field-name">complete</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#complete"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Boolean` that is `true` if the browser has finished fetching the image, whether successful or not. It also shows true, if the image has no `HTMLImageElement.src` value.

<hr class="field-separator" />

<div class="signature field-var has-description" id="name"><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` representing the name of the element.

<hr class="field-separator" />

<div class="signature field-var has-description" id="align"><code><span class="field-name">align</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#align"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` indicating the alignment of the image with respect to the surrounding context. The possible values are `"left"`, `"right"`, `"justify"`, and `"center"`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="hspace"><code><span class="field-name">hspace</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#hspace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `long` representing the space on either side of the image.

<hr class="field-separator" />

<div class="signature field-var has-description" id="vspace"><code><span class="field-name">vspace</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#vspace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `long` representing the space above and below the image.

<hr class="field-separator" />

<div class="signature field-var has-description" id="longDesc"><code><span class="field-name">longDesc</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#longDesc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` representing the URI of a long description of the image.

<hr class="field-separator" />

<div class="signature field-var has-description" id="border"><code><span class="field-name">border</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#border"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that is responsible for the width of the border surrounding the image. This is now deprecated and the CSS `border` property should be used instead.

<hr class="field-separator" />

<div class="signature field-var has-description" id="sizes"><code><span class="field-name">sizes</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#sizes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` reflecting the `sizes` HTML attribute.

<hr class="field-separator" />

<div class="signature field-var has-description" id="currentSrc"><code><span class="field-name">currentSrc</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#currentSrc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `DOMString` representing the URL to the currently displayed image (which may change, for example in response to media queries).

<hr class="field-separator" />

<div class="signature field-var has-description" id="lowsrc"><code><span class="field-name">lowsrc</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#lowsrc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that refers to a low-quality (but faster to load) copy of the image.

<hr class="field-separator" />

<div class="signature field-var has-description" id="x"><code><span class="field-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#x"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `long` representing the horizontal offset from the nearest layer. This property mimics an old Netscape 4 behavior.

<hr class="field-separator" />

<div class="signature field-var has-description" id="y"><code><span class="field-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `long` representing the vertical offset from the nearest layer. This property is also similar to behavior of an old Netscape 4.

