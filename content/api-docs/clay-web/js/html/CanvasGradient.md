---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: CanvasGradient
target: Clay (Web)
permalink: api-docs/clay-web/js/html/CanvasGradient/
---

# CanvasGradient

<div class="type-hierarchy"><strong>js.html.CanvasGradient</strong> (extern class)</div>

The `CanvasGradient` interface represents an opaque object describing a gradient. It is returned by the methods `CanvasRenderingContext2D.createLinearGradient()` or `CanvasRenderingContext2D.createRadialGradient()`.

Documentation [CanvasGradient](https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient></div>


## Instance Members

<div class="signature field-method has-description" id="addColorStop"><code><span class="field-name">addColorStop</span><span class="parenthesis">(</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">color</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addColorStop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds a new stop, defined by an `offset` and a `color`, to the gradient. If the offset is not between `0` and `1` an `INDEX_SIZE_ERR` is raised, if the color can't be parsed as a CSS `color`, a `SYNTAX_ERR` is raised.

| Name | Type |
|------|------|
| `offset` | [Float](/api-docs/clay-web/Float/) |
| `color` | [String](/api-docs/clay-web/String/) |

