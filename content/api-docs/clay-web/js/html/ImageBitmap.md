---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: ImageBitmap
target: Clay (Web)
permalink: api-docs/clay-web/js/html/ImageBitmap/
---

# ImageBitmap

<div class="type-hierarchy"><strong>js.html.ImageBitmap</strong> (extern class)</div>

The `ImageBitmap` interface represents a bitmap image which can be drawn to a `canvas` without undue latency. It can be created from a variety of source objects using the `createImageBitmap()` factory method. `ImageBitmap` provides an asynchronous and resource efficient pathway to prepare textures for rendering in WebGL.

Documentation [ImageBitmap](https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmap) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmap$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmap></div>


## Instance Members

<div class="signature field-var has-description" id="width"><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is an `unsigned` `long` representing the width, in CSS pixels, of the `ImageData`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="height"><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is an `unsigned` `long` representing the height, in CSS pixels, of the `ImageData`.

<hr class="field-separator" />

<div class="signature field-method has-description" id="close"><code><span class="field-name">close</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#close"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Disposes of all graphical resources associated with an `ImageBitmap`.

