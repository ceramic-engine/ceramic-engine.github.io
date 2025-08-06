---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: FontFace
target: Clay (Web)
permalink: api-docs/clay-web/js/html/FontFace/
---

# FontFace

<div class="type-hierarchy"><strong>js.html.FontFace</strong> (extern class)</div>

The `FontFace` interface represents a single usable font face. It allows control of the source of the font face, being a URL to an external resource, or a buffer; it also allows control of when the font face is loaded and its current status.

Documentation [FontFace](https://developer.mozilla.org/en-US/docs/Web/API/FontFace) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/FontFace$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/FontFace></div>


## Instance Members

<div class="signature field-var has-description" id="family"><code><span class="field-name">family</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#family"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `CSSOMString` that contains the family of the font. It is equivalent to the `@font-face/font-family` descriptor.

<hr class="field-separator" />

<div class="signature field-var has-description" id="style"><code><span class="field-name">style</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#style"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `CSSOMString` that contains the style of the font. It is equivalent to the `@font-face/font-style` descriptor.

<hr class="field-separator" />

<div class="signature field-var has-description" id="weight"><code><span class="field-name">weight</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#weight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `CSSOMString` that contains the weight of the font. It is equivalent to the `@font-face/font-weight` descriptor.

<hr class="field-separator" />

<div class="signature field-var has-description" id="stretch"><code><span class="field-name">stretch</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#stretch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `CSSOMString` that contains how the font stretches. It is equivalent to the `@font-face/font-stretch` descriptor.

<hr class="field-separator" />

<div class="signature field-var has-description" id="unicodeRange"><code><span class="field-name">unicodeRange</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#unicodeRange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `CSSOMString` that contains the range of code encompassed the font. It is equivalent to the `@font-face/unicode-range` descriptor.

<hr class="field-separator" />

<div class="signature field-var has-description" id="variant"><code><span class="field-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#variant"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `CSSOMString` that contains the variant of the font. It is equivalent to the `@font-face/font-variant` descriptor.

<hr class="field-separator" />

<div class="signature field-var has-description" id="featureSettings"><code><span class="field-name">featureSettings</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#featureSettings"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `CSSOMString` that contains the features of the font. It is equivalent to the `@font-face/font-feature-settings`descriptor.

<hr class="field-separator" />

<div class="signature field-var has-description" id="status"><code><span class="field-name">status</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/FontFaceLoadStatus/" class="type-link">FontFaceLoadStatus</a></code><a class="header-anchor" href="#status"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an enumerated value indicating the status of the font. It can be one of the following: `"unloaded"`, `"loading"`, `"loaded"`, or `"error"`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="loaded"><code><span class="field-name">loaded</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="#" class="type-link">FontFace</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#loaded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Promise` to a `FontFace` that fulfills when the font is completely loaded and rejects when an error happens.

<hr class="field-separator" />

<div class="signature field-method has-description" id="load"><code><span class="field-name">load</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="#" class="type-link">FontFace</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#load"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Loads the font, returning a `Promise` to a `FontFace` that fulfills when the font is completely loaded and rejects when an error happens.
| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[FontFace](/api-docs/clay-web/js/html/FontFace/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">family</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">source</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">descriptors</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/FontFaceDescriptors/" class="type-link">FontFaceDescriptors</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `family` | [String](/api-docs/clay-web/String/) | |
| `source` | [String](/api-docs/clay-web/String/) | |
| `descriptors` | [Null](/api-docs/clay-web/Null/)<[FontFaceDescriptors](/api-docs/clay-web/js/html/FontFaceDescriptors/)> | *(optional)* |

