---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: ShaderPrecisionFormat
target: Clay (Web)
permalink: api-docs/clay-web/js/html/webgl/ShaderPrecisionFormat/
---

# ShaderPrecisionFormat

<div class="type-hierarchy"><strong>js.html.webgl.ShaderPrecisionFormat</strong> (extern class)</div>

The WebGLShaderPrecisionFormat interface is part of the WebGL API and represents the information returned by calling the `WebGLRenderingContext.getShaderPrecisionFormat()` method.

Documentation [WebGLShaderPrecisionFormat](https://developer.mozilla.org/en-US/docs/Web/API/WebGLShaderPrecisionFormat) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/WebGLShaderPrecisionFormat$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/WebGLShaderPrecisionFormat></div>


## Instance Members

<div class="signature field-var has-description" id="rangeMin"><code><span class="field-name">rangeMin</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#rangeMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The base 2 log of the absolute value of the minimum value that can be represented.

<hr class="field-separator" />

<div class="signature field-var has-description" id="rangeMax"><code><span class="field-name">rangeMax</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#rangeMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The base 2 log of the absolute value of the maximum value that can be represented.

<hr class="field-separator" />

<div class="signature field-var has-description" id="precision"><code><span class="field-name">precision</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#precision"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The number of bits of precision that can be represented. For integer formats this value is always 0.

