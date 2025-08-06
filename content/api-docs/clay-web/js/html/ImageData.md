---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: ImageData
target: Clay (Web)
permalink: api-docs/clay-web/js/html/ImageData/
---

# ImageData

<div class="type-hierarchy"><strong>js.html.ImageData</strong> (extern class)</div>

The `ImageData` interface represents the underlying pixel data of an area of a `canvas` element. It is created using the `ImageData()` constructor or creator methods on the `CanvasRenderingContext2D` object associated with a canvas: `createImageData()` and `getImageData()`. It can also be used to set a part of the canvas by using `putImageData()`.

Documentation [ImageData](https://developer.mozilla.org/en-US/docs/Web/API/ImageData) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/ImageData$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/ImageData></div>


## Instance Members

<div class="signature field-var has-description" id="width"><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is an `unsigned` `long` representing the actual width, in pixels, of the `ImageData`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="height"><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is an `unsigned` `long` representing the actual height, in pixels, of the `ImageData`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="data"><code><span class="field-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Uint8ClampedArray/" class="type-link">js.lib.Uint8ClampedArray</a></code><a class="header-anchor" href="#data"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `Uint8ClampedArray` representing a one-dimensional array containing the data in the RGBA order, with integer values between `0` and `255` (included).

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Uint8ClampedArray/" class="type-link">js.lib.Uint8ClampedArray</a><span class="operator">,</span> <span class="arg-name">sw</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">sh</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `data` | [js.lib.Uint8ClampedArray](/api-docs/clay-web/js/lib/Uint8ClampedArray/) | |
| `sw` | [Int](/api-docs/clay-web/Int/) | |
| `sh` | [Int](/api-docs/clay-web/Int/) | *(optional)* |

