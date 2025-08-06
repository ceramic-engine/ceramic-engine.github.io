---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: TextMetrics
target: Clay (Web)
permalink: api-docs/clay-web/js/html/TextMetrics/
---

# TextMetrics

<div class="type-hierarchy"><strong>js.html.TextMetrics</strong> (extern class)</div>

The `TextMetrics` interface represents the dimension of a text in the canvas, as created by the `CanvasRenderingContext2D.measureText()` method.

Documentation [TextMetrics](https://developer.mozilla.org/en-US/docs/Web/API/TextMetrics) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/TextMetrics$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/TextMetrics></div>


## Instance Members

<div class="signature field-var has-description" id="width"><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `double` giving the calculated width of a segment of inline text in CSS pixels. It takes into account the current font of the context.

