---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: DOMRectReadOnly
target: Clay (Web)
permalink: api-docs/clay-web/js/html/DOMRectReadOnly/
---

# DOMRectReadOnly

<div class="type-hierarchy"><strong>js.html.DOMRectReadOnly</strong> (extern class) → <a href="/api-docs/clay-web/js/html/DOMRect/">DOMRect</a></div>

The `DOMRectReadOnly` interface specifies the standard properties used by `DOMRect` to define a rectangle.

Documentation [DOMRectReadOnly](https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly></div>


## Instance Members

<div class="signature field-var has-description" id="x"><code><span class="field-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#x"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The x coordinate of the `DOMRect`'s origin.

<hr class="field-separator" />

<div class="signature field-var has-description" id="y"><code><span class="field-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The y coordinate of the `DOMRect`'s origin.

<hr class="field-separator" />

<div class="signature field-var has-description" id="width"><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The width of the `DOMRect`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="height"><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The height of the `DOMRect`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="top"><code><span class="field-name">top</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#top"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the top coordinate value of the `DOMRect` (usually the same as `y`.)

<hr class="field-separator" />

<div class="signature field-var has-description" id="right"><code><span class="field-name">right</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#right"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the right coordinate value of the `DOMRect` (usually the same as `x + width`).

<hr class="field-separator" />

<div class="signature field-var has-description" id="bottom"><code><span class="field-name">bottom</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#bottom"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the bottom coordinate value of the `DOMRect` (usually the same as y + height).

<hr class="field-separator" />

<div class="signature field-var has-description" id="left"><code><span class="field-name">left</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#left"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the left coordinate value of the `DOMRect` (usually the same as `x`).

<hr class="field-separator" />

<div class="signature field-method no-description" id="toJSON"><code><span class="field-name">toJSON</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#toJSON"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `x` | [Float](/api-docs/clay-web/Float/) | `0.0` |
| `y` | [Float](/api-docs/clay-web/Float/) | `0.0` |
| `width` | [Float](/api-docs/clay-web/Float/) | `0.0` |
| `height` | [Float](/api-docs/clay-web/Float/) | `0.0` |

