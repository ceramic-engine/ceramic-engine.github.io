---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: RenderingContext
target: Clay (Web)
permalink: api-docs/clay-web/js/html/webgl/RenderingContext/
---

# RenderingContext

<div class="type-hierarchy"><strong>js.html.webgl.RenderingContext</strong> (extern class) → <a href="/api-docs/clay-web/js/html/webgl/WebGL2RenderingContext/">WebGL2RenderingContext</a></div>

The `WebGLRenderingContext` interface provides the OpenGL ES 2.0 rendering context for the drawing surface of an HTML `canvas` element.

Documentation [WebGLRenderingContext](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext></div>


## Static Members

<div class="signature field-var no-description" id="DEPTH_BUFFER_BIT"><code><span class="field-name">DEPTH_BUFFER_BIT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DEPTH_BUFFER_BIT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="STENCIL_BUFFER_BIT"><code><span class="field-name">STENCIL_BUFFER_BIT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#STENCIL_BUFFER_BIT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="COLOR_BUFFER_BIT"><code><span class="field-name">COLOR_BUFFER_BIT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#COLOR_BUFFER_BIT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="POINTS"><code><span class="field-name">POINTS</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#POINTS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="LINES"><code><span class="field-name">LINES</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#LINES"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="LINE_LOOP"><code><span class="field-name">LINE_LOOP</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#LINE_LOOP"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="LINE_STRIP"><code><span class="field-name">LINE_STRIP</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#LINE_STRIP"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TRIANGLES"><code><span class="field-name">TRIANGLES</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TRIANGLES"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TRIANGLE_STRIP"><code><span class="field-name">TRIANGLE_STRIP</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TRIANGLE_STRIP"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TRIANGLE_FAN"><code><span class="field-name">TRIANGLE_FAN</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TRIANGLE_FAN"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ZERO"><code><span class="field-name">ZERO</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ZERO"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ONE"><code><span class="field-name">ONE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ONE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SRC_COLOR"><code><span class="field-name">SRC_COLOR</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SRC_COLOR"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ONE_MINUS_SRC_COLOR"><code><span class="field-name">ONE_MINUS_SRC_COLOR</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ONE_MINUS_SRC_COLOR"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SRC_ALPHA"><code><span class="field-name">SRC_ALPHA</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SRC_ALPHA"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ONE_MINUS_SRC_ALPHA"><code><span class="field-name">ONE_MINUS_SRC_ALPHA</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ONE_MINUS_SRC_ALPHA"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DST_ALPHA"><code><span class="field-name">DST_ALPHA</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DST_ALPHA"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ONE_MINUS_DST_ALPHA"><code><span class="field-name">ONE_MINUS_DST_ALPHA</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ONE_MINUS_DST_ALPHA"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DST_COLOR"><code><span class="field-name">DST_COLOR</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DST_COLOR"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ONE_MINUS_DST_COLOR"><code><span class="field-name">ONE_MINUS_DST_COLOR</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ONE_MINUS_DST_COLOR"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SRC_ALPHA_SATURATE"><code><span class="field-name">SRC_ALPHA_SATURATE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SRC_ALPHA_SATURATE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FUNC_ADD"><code><span class="field-name">FUNC_ADD</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#FUNC_ADD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="BLEND_EQUATION"><code><span class="field-name">BLEND_EQUATION</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BLEND_EQUATION"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="BLEND_EQUATION_RGB"><code><span class="field-name">BLEND_EQUATION_RGB</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BLEND_EQUATION_RGB"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="BLEND_EQUATION_ALPHA"><code><span class="field-name">BLEND_EQUATION_ALPHA</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BLEND_EQUATION_ALPHA"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FUNC_SUBTRACT"><code><span class="field-name">FUNC_SUBTRACT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#FUNC_SUBTRACT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FUNC_REVERSE_SUBTRACT"><code><span class="field-name">FUNC_REVERSE_SUBTRACT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#FUNC_REVERSE_SUBTRACT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="BLEND_DST_RGB"><code><span class="field-name">BLEND_DST_RGB</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BLEND_DST_RGB"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="BLEND_SRC_RGB"><code><span class="field-name">BLEND_SRC_RGB</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BLEND_SRC_RGB"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="BLEND_DST_ALPHA"><code><span class="field-name">BLEND_DST_ALPHA</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BLEND_DST_ALPHA"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="BLEND_SRC_ALPHA"><code><span class="field-name">BLEND_SRC_ALPHA</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BLEND_SRC_ALPHA"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="CONSTANT_COLOR"><code><span class="field-name">CONSTANT_COLOR</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#CONSTANT_COLOR"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ONE_MINUS_CONSTANT_COLOR"><code><span class="field-name">ONE_MINUS_CONSTANT_COLOR</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ONE_MINUS_CONSTANT_COLOR"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="CONSTANT_ALPHA"><code><span class="field-name">CONSTANT_ALPHA</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#CONSTANT_ALPHA"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ONE_MINUS_CONSTANT_ALPHA"><code><span class="field-name">ONE_MINUS_CONSTANT_ALPHA</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ONE_MINUS_CONSTANT_ALPHA"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="BLEND_COLOR"><code><span class="field-name">BLEND_COLOR</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BLEND_COLOR"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ARRAY_BUFFER"><code><span class="field-name">ARRAY_BUFFER</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ARRAY_BUFFER"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ELEMENT_ARRAY_BUFFER"><code><span class="field-name">ELEMENT_ARRAY_BUFFER</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ELEMENT_ARRAY_BUFFER"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ARRAY_BUFFER_BINDING"><code><span class="field-name">ARRAY_BUFFER_BINDING</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ARRAY_BUFFER_BINDING"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ELEMENT_ARRAY_BUFFER_BINDING"><code><span class="field-name">ELEMENT_ARRAY_BUFFER_BINDING</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ELEMENT_ARRAY_BUFFER_BINDING"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="STREAM_DRAW"><code><span class="field-name">STREAM_DRAW</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#STREAM_DRAW"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="STATIC_DRAW"><code><span class="field-name">STATIC_DRAW</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#STATIC_DRAW"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DYNAMIC_DRAW"><code><span class="field-name">DYNAMIC_DRAW</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DYNAMIC_DRAW"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="BUFFER_SIZE"><code><span class="field-name">BUFFER_SIZE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BUFFER_SIZE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="BUFFER_USAGE"><code><span class="field-name">BUFFER_USAGE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BUFFER_USAGE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="CURRENT_VERTEX_ATTRIB"><code><span class="field-name">CURRENT_VERTEX_ATTRIB</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#CURRENT_VERTEX_ATTRIB"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FRONT"><code><span class="field-name">FRONT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#FRONT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="BACK"><code><span class="field-name">BACK</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BACK"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FRONT_AND_BACK"><code><span class="field-name">FRONT_AND_BACK</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#FRONT_AND_BACK"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="CULL_FACE"><code><span class="field-name">CULL_FACE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#CULL_FACE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="BLEND"><code><span class="field-name">BLEND</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BLEND"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DITHER"><code><span class="field-name">DITHER</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DITHER"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="STENCIL_TEST"><code><span class="field-name">STENCIL_TEST</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#STENCIL_TEST"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DEPTH_TEST"><code><span class="field-name">DEPTH_TEST</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DEPTH_TEST"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SCISSOR_TEST"><code><span class="field-name">SCISSOR_TEST</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SCISSOR_TEST"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="POLYGON_OFFSET_FILL"><code><span class="field-name">POLYGON_OFFSET_FILL</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#POLYGON_OFFSET_FILL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SAMPLE_ALPHA_TO_COVERAGE"><code><span class="field-name">SAMPLE_ALPHA_TO_COVERAGE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SAMPLE_ALPHA_TO_COVERAGE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SAMPLE_COVERAGE"><code><span class="field-name">SAMPLE_COVERAGE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SAMPLE_COVERAGE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="NO_ERROR"><code><span class="field-name">NO_ERROR</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#NO_ERROR"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="INVALID_ENUM"><code><span class="field-name">INVALID_ENUM</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#INVALID_ENUM"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="INVALID_VALUE"><code><span class="field-name">INVALID_VALUE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#INVALID_VALUE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="INVALID_OPERATION"><code><span class="field-name">INVALID_OPERATION</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#INVALID_OPERATION"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="OUT_OF_MEMORY"><code><span class="field-name">OUT_OF_MEMORY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#OUT_OF_MEMORY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="CW"><code><span class="field-name">CW</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#CW"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="CCW"><code><span class="field-name">CCW</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#CCW"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="LINE_WIDTH"><code><span class="field-name">LINE_WIDTH</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#LINE_WIDTH"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ALIASED_POINT_SIZE_RANGE"><code><span class="field-name">ALIASED_POINT_SIZE_RANGE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ALIASED_POINT_SIZE_RANGE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ALIASED_LINE_WIDTH_RANGE"><code><span class="field-name">ALIASED_LINE_WIDTH_RANGE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ALIASED_LINE_WIDTH_RANGE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="CULL_FACE_MODE"><code><span class="field-name">CULL_FACE_MODE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#CULL_FACE_MODE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FRONT_FACE"><code><span class="field-name">FRONT_FACE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#FRONT_FACE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DEPTH_RANGE"><code><span class="field-name">DEPTH_RANGE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DEPTH_RANGE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DEPTH_WRITEMASK"><code><span class="field-name">DEPTH_WRITEMASK</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DEPTH_WRITEMASK"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DEPTH_CLEAR_VALUE"><code><span class="field-name">DEPTH_CLEAR_VALUE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DEPTH_CLEAR_VALUE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DEPTH_FUNC"><code><span class="field-name">DEPTH_FUNC</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DEPTH_FUNC"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="STENCIL_CLEAR_VALUE"><code><span class="field-name">STENCIL_CLEAR_VALUE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#STENCIL_CLEAR_VALUE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="STENCIL_FUNC"><code><span class="field-name">STENCIL_FUNC</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#STENCIL_FUNC"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="STENCIL_FAIL"><code><span class="field-name">STENCIL_FAIL</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#STENCIL_FAIL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="STENCIL_PASS_DEPTH_FAIL"><code><span class="field-name">STENCIL_PASS_DEPTH_FAIL</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#STENCIL_PASS_DEPTH_FAIL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="STENCIL_PASS_DEPTH_PASS"><code><span class="field-name">STENCIL_PASS_DEPTH_PASS</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#STENCIL_PASS_DEPTH_PASS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="STENCIL_REF"><code><span class="field-name">STENCIL_REF</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#STENCIL_REF"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="STENCIL_VALUE_MASK"><code><span class="field-name">STENCIL_VALUE_MASK</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#STENCIL_VALUE_MASK"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="STENCIL_WRITEMASK"><code><span class="field-name">STENCIL_WRITEMASK</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#STENCIL_WRITEMASK"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="STENCIL_BACK_FUNC"><code><span class="field-name">STENCIL_BACK_FUNC</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#STENCIL_BACK_FUNC"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="STENCIL_BACK_FAIL"><code><span class="field-name">STENCIL_BACK_FAIL</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#STENCIL_BACK_FAIL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="STENCIL_BACK_PASS_DEPTH_FAIL"><code><span class="field-name">STENCIL_BACK_PASS_DEPTH_FAIL</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#STENCIL_BACK_PASS_DEPTH_FAIL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="STENCIL_BACK_PASS_DEPTH_PASS"><code><span class="field-name">STENCIL_BACK_PASS_DEPTH_PASS</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#STENCIL_BACK_PASS_DEPTH_PASS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="STENCIL_BACK_REF"><code><span class="field-name">STENCIL_BACK_REF</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#STENCIL_BACK_REF"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="STENCIL_BACK_VALUE_MASK"><code><span class="field-name">STENCIL_BACK_VALUE_MASK</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#STENCIL_BACK_VALUE_MASK"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="STENCIL_BACK_WRITEMASK"><code><span class="field-name">STENCIL_BACK_WRITEMASK</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#STENCIL_BACK_WRITEMASK"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="VIEWPORT"><code><span class="field-name">VIEWPORT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#VIEWPORT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SCISSOR_BOX"><code><span class="field-name">SCISSOR_BOX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SCISSOR_BOX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="COLOR_CLEAR_VALUE"><code><span class="field-name">COLOR_CLEAR_VALUE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#COLOR_CLEAR_VALUE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="COLOR_WRITEMASK"><code><span class="field-name">COLOR_WRITEMASK</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#COLOR_WRITEMASK"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="UNPACK_ALIGNMENT"><code><span class="field-name">UNPACK_ALIGNMENT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#UNPACK_ALIGNMENT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="PACK_ALIGNMENT"><code><span class="field-name">PACK_ALIGNMENT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#PACK_ALIGNMENT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MAX_TEXTURE_SIZE"><code><span class="field-name">MAX_TEXTURE_SIZE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MAX_TEXTURE_SIZE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MAX_VIEWPORT_DIMS"><code><span class="field-name">MAX_VIEWPORT_DIMS</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MAX_VIEWPORT_DIMS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SUBPIXEL_BITS"><code><span class="field-name">SUBPIXEL_BITS</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SUBPIXEL_BITS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="RED_BITS"><code><span class="field-name">RED_BITS</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#RED_BITS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="GREEN_BITS"><code><span class="field-name">GREEN_BITS</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#GREEN_BITS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="BLUE_BITS"><code><span class="field-name">BLUE_BITS</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BLUE_BITS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ALPHA_BITS"><code><span class="field-name">ALPHA_BITS</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ALPHA_BITS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DEPTH_BITS"><code><span class="field-name">DEPTH_BITS</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DEPTH_BITS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="STENCIL_BITS"><code><span class="field-name">STENCIL_BITS</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#STENCIL_BITS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="POLYGON_OFFSET_UNITS"><code><span class="field-name">POLYGON_OFFSET_UNITS</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#POLYGON_OFFSET_UNITS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="POLYGON_OFFSET_FACTOR"><code><span class="field-name">POLYGON_OFFSET_FACTOR</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#POLYGON_OFFSET_FACTOR"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE_BINDING_2D"><code><span class="field-name">TEXTURE_BINDING_2D</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE_BINDING_2D"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SAMPLE_BUFFERS"><code><span class="field-name">SAMPLE_BUFFERS</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SAMPLE_BUFFERS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SAMPLES"><code><span class="field-name">SAMPLES</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SAMPLES"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SAMPLE_COVERAGE_VALUE"><code><span class="field-name">SAMPLE_COVERAGE_VALUE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SAMPLE_COVERAGE_VALUE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SAMPLE_COVERAGE_INVERT"><code><span class="field-name">SAMPLE_COVERAGE_INVERT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SAMPLE_COVERAGE_INVERT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="COMPRESSED_TEXTURE_FORMATS"><code><span class="field-name">COMPRESSED_TEXTURE_FORMATS</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#COMPRESSED_TEXTURE_FORMATS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DONT_CARE"><code><span class="field-name">DONT_CARE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DONT_CARE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FASTEST"><code><span class="field-name">FASTEST</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#FASTEST"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="NICEST"><code><span class="field-name">NICEST</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#NICEST"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="GENERATE_MIPMAP_HINT"><code><span class="field-name">GENERATE_MIPMAP_HINT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#GENERATE_MIPMAP_HINT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="BYTE"><code><span class="field-name">BYTE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BYTE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="UNSIGNED_BYTE"><code><span class="field-name">UNSIGNED_BYTE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#UNSIGNED_BYTE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SHORT"><code><span class="field-name">SHORT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SHORT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="UNSIGNED_SHORT"><code><span class="field-name">UNSIGNED_SHORT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#UNSIGNED_SHORT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="INT"><code><span class="field-name">INT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#INT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="UNSIGNED_INT"><code><span class="field-name">UNSIGNED_INT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#UNSIGNED_INT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FLOAT"><code><span class="field-name">FLOAT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#FLOAT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DEPTH_COMPONENT"><code><span class="field-name">DEPTH_COMPONENT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DEPTH_COMPONENT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ALPHA"><code><span class="field-name">ALPHA</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ALPHA"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="RGB"><code><span class="field-name">RGB</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#RGB"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="RGBA"><code><span class="field-name">RGBA</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#RGBA"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="LUMINANCE"><code><span class="field-name">LUMINANCE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#LUMINANCE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="LUMINANCE_ALPHA"><code><span class="field-name">LUMINANCE_ALPHA</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#LUMINANCE_ALPHA"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="UNSIGNED_SHORT_4_4_4_4"><code><span class="field-name">UNSIGNED_SHORT_4_4_4_4</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#UNSIGNED_SHORT_4_4_4_4"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="UNSIGNED_SHORT_5_5_5_1"><code><span class="field-name">UNSIGNED_SHORT_5_5_5_1</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#UNSIGNED_SHORT_5_5_5_1"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="UNSIGNED_SHORT_5_6_5"><code><span class="field-name">UNSIGNED_SHORT_5_6_5</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#UNSIGNED_SHORT_5_6_5"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FRAGMENT_SHADER"><code><span class="field-name">FRAGMENT_SHADER</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#FRAGMENT_SHADER"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="VERTEX_SHADER"><code><span class="field-name">VERTEX_SHADER</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#VERTEX_SHADER"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MAX_VERTEX_ATTRIBS"><code><span class="field-name">MAX_VERTEX_ATTRIBS</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MAX_VERTEX_ATTRIBS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MAX_VERTEX_UNIFORM_VECTORS"><code><span class="field-name">MAX_VERTEX_UNIFORM_VECTORS</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MAX_VERTEX_UNIFORM_VECTORS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MAX_VARYING_VECTORS"><code><span class="field-name">MAX_VARYING_VECTORS</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MAX_VARYING_VECTORS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MAX_COMBINED_TEXTURE_IMAGE_UNITS"><code><span class="field-name">MAX_COMBINED_TEXTURE_IMAGE_UNITS</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MAX_COMBINED_TEXTURE_IMAGE_UNITS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MAX_VERTEX_TEXTURE_IMAGE_UNITS"><code><span class="field-name">MAX_VERTEX_TEXTURE_IMAGE_UNITS</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MAX_VERTEX_TEXTURE_IMAGE_UNITS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MAX_TEXTURE_IMAGE_UNITS"><code><span class="field-name">MAX_TEXTURE_IMAGE_UNITS</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MAX_TEXTURE_IMAGE_UNITS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MAX_FRAGMENT_UNIFORM_VECTORS"><code><span class="field-name">MAX_FRAGMENT_UNIFORM_VECTORS</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MAX_FRAGMENT_UNIFORM_VECTORS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SHADER_TYPE"><code><span class="field-name">SHADER_TYPE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SHADER_TYPE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DELETE_STATUS"><code><span class="field-name">DELETE_STATUS</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DELETE_STATUS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="LINK_STATUS"><code><span class="field-name">LINK_STATUS</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#LINK_STATUS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="VALIDATE_STATUS"><code><span class="field-name">VALIDATE_STATUS</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#VALIDATE_STATUS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ATTACHED_SHADERS"><code><span class="field-name">ATTACHED_SHADERS</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ATTACHED_SHADERS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ACTIVE_UNIFORMS"><code><span class="field-name">ACTIVE_UNIFORMS</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ACTIVE_UNIFORMS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ACTIVE_ATTRIBUTES"><code><span class="field-name">ACTIVE_ATTRIBUTES</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ACTIVE_ATTRIBUTES"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SHADING_LANGUAGE_VERSION"><code><span class="field-name">SHADING_LANGUAGE_VERSION</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SHADING_LANGUAGE_VERSION"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="CURRENT_PROGRAM"><code><span class="field-name">CURRENT_PROGRAM</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#CURRENT_PROGRAM"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="NEVER"><code><span class="field-name">NEVER</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#NEVER"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="LESS"><code><span class="field-name">LESS</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#LESS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="EQUAL"><code><span class="field-name">EQUAL</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#EQUAL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="LEQUAL"><code><span class="field-name">LEQUAL</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#LEQUAL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="GREATER"><code><span class="field-name">GREATER</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#GREATER"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="NOTEQUAL"><code><span class="field-name">NOTEQUAL</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#NOTEQUAL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="GEQUAL"><code><span class="field-name">GEQUAL</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#GEQUAL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ALWAYS"><code><span class="field-name">ALWAYS</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ALWAYS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="KEEP"><code><span class="field-name">KEEP</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#KEEP"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="REPLACE"><code><span class="field-name">REPLACE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#REPLACE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="INCR"><code><span class="field-name">INCR</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#INCR"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DECR"><code><span class="field-name">DECR</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DECR"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="INVERT"><code><span class="field-name">INVERT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#INVERT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="INCR_WRAP"><code><span class="field-name">INCR_WRAP</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#INCR_WRAP"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DECR_WRAP"><code><span class="field-name">DECR_WRAP</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DECR_WRAP"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="VENDOR"><code><span class="field-name">VENDOR</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#VENDOR"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="RENDERER"><code><span class="field-name">RENDERER</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#RENDERER"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="VERSION"><code><span class="field-name">VERSION</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#VERSION"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="NEAREST"><code><span class="field-name">NEAREST</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#NEAREST"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="LINEAR"><code><span class="field-name">LINEAR</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#LINEAR"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="NEAREST_MIPMAP_NEAREST"><code><span class="field-name">NEAREST_MIPMAP_NEAREST</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#NEAREST_MIPMAP_NEAREST"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="LINEAR_MIPMAP_NEAREST"><code><span class="field-name">LINEAR_MIPMAP_NEAREST</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#LINEAR_MIPMAP_NEAREST"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="NEAREST_MIPMAP_LINEAR"><code><span class="field-name">NEAREST_MIPMAP_LINEAR</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#NEAREST_MIPMAP_LINEAR"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="LINEAR_MIPMAP_LINEAR"><code><span class="field-name">LINEAR_MIPMAP_LINEAR</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#LINEAR_MIPMAP_LINEAR"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE_MAG_FILTER"><code><span class="field-name">TEXTURE_MAG_FILTER</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE_MAG_FILTER"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE_MIN_FILTER"><code><span class="field-name">TEXTURE_MIN_FILTER</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE_MIN_FILTER"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE_WRAP_S"><code><span class="field-name">TEXTURE_WRAP_S</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE_WRAP_S"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE_WRAP_T"><code><span class="field-name">TEXTURE_WRAP_T</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE_WRAP_T"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE_2D"><code><span class="field-name">TEXTURE_2D</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE_2D"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE"><code><span class="field-name">TEXTURE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE_CUBE_MAP"><code><span class="field-name">TEXTURE_CUBE_MAP</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE_CUBE_MAP"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE_BINDING_CUBE_MAP"><code><span class="field-name">TEXTURE_BINDING_CUBE_MAP</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE_BINDING_CUBE_MAP"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE_CUBE_MAP_POSITIVE_X"><code><span class="field-name">TEXTURE_CUBE_MAP_POSITIVE_X</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE_CUBE_MAP_POSITIVE_X"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE_CUBE_MAP_NEGATIVE_X"><code><span class="field-name">TEXTURE_CUBE_MAP_NEGATIVE_X</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE_CUBE_MAP_NEGATIVE_X"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE_CUBE_MAP_POSITIVE_Y"><code><span class="field-name">TEXTURE_CUBE_MAP_POSITIVE_Y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE_CUBE_MAP_POSITIVE_Y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE_CUBE_MAP_NEGATIVE_Y"><code><span class="field-name">TEXTURE_CUBE_MAP_NEGATIVE_Y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE_CUBE_MAP_NEGATIVE_Y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE_CUBE_MAP_POSITIVE_Z"><code><span class="field-name">TEXTURE_CUBE_MAP_POSITIVE_Z</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE_CUBE_MAP_POSITIVE_Z"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE_CUBE_MAP_NEGATIVE_Z"><code><span class="field-name">TEXTURE_CUBE_MAP_NEGATIVE_Z</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE_CUBE_MAP_NEGATIVE_Z"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MAX_CUBE_MAP_TEXTURE_SIZE"><code><span class="field-name">MAX_CUBE_MAP_TEXTURE_SIZE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MAX_CUBE_MAP_TEXTURE_SIZE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE0"><code><span class="field-name">TEXTURE0</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE0"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE1"><code><span class="field-name">TEXTURE1</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE1"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE2"><code><span class="field-name">TEXTURE2</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE3"><code><span class="field-name">TEXTURE3</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE3"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE4"><code><span class="field-name">TEXTURE4</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE4"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE5"><code><span class="field-name">TEXTURE5</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE5"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE6"><code><span class="field-name">TEXTURE6</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE6"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE7"><code><span class="field-name">TEXTURE7</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE7"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE8"><code><span class="field-name">TEXTURE8</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE8"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE9"><code><span class="field-name">TEXTURE9</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE9"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE10"><code><span class="field-name">TEXTURE10</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE10"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE11"><code><span class="field-name">TEXTURE11</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE11"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE12"><code><span class="field-name">TEXTURE12</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE12"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE13"><code><span class="field-name">TEXTURE13</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE13"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE14"><code><span class="field-name">TEXTURE14</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE14"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE15"><code><span class="field-name">TEXTURE15</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE15"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE16"><code><span class="field-name">TEXTURE16</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE16"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE17"><code><span class="field-name">TEXTURE17</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE17"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE18"><code><span class="field-name">TEXTURE18</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE18"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE19"><code><span class="field-name">TEXTURE19</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE19"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE20"><code><span class="field-name">TEXTURE20</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE20"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE21"><code><span class="field-name">TEXTURE21</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE21"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE22"><code><span class="field-name">TEXTURE22</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE22"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE23"><code><span class="field-name">TEXTURE23</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE23"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE24"><code><span class="field-name">TEXTURE24</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE24"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE25"><code><span class="field-name">TEXTURE25</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE25"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE26"><code><span class="field-name">TEXTURE26</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE26"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE27"><code><span class="field-name">TEXTURE27</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE27"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE28"><code><span class="field-name">TEXTURE28</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE28"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE29"><code><span class="field-name">TEXTURE29</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE29"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE30"><code><span class="field-name">TEXTURE30</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE30"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE31"><code><span class="field-name">TEXTURE31</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE31"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ACTIVE_TEXTURE"><code><span class="field-name">ACTIVE_TEXTURE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ACTIVE_TEXTURE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="REPEAT"><code><span class="field-name">REPEAT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#REPEAT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="CLAMP_TO_EDGE"><code><span class="field-name">CLAMP_TO_EDGE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#CLAMP_TO_EDGE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MIRRORED_REPEAT"><code><span class="field-name">MIRRORED_REPEAT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MIRRORED_REPEAT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FLOAT_VEC2"><code><span class="field-name">FLOAT_VEC2</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#FLOAT_VEC2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FLOAT_VEC3"><code><span class="field-name">FLOAT_VEC3</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#FLOAT_VEC3"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FLOAT_VEC4"><code><span class="field-name">FLOAT_VEC4</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#FLOAT_VEC4"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="INT_VEC2"><code><span class="field-name">INT_VEC2</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#INT_VEC2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="INT_VEC3"><code><span class="field-name">INT_VEC3</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#INT_VEC3"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="INT_VEC4"><code><span class="field-name">INT_VEC4</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#INT_VEC4"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="BOOL"><code><span class="field-name">BOOL</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BOOL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="BOOL_VEC2"><code><span class="field-name">BOOL_VEC2</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BOOL_VEC2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="BOOL_VEC3"><code><span class="field-name">BOOL_VEC3</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BOOL_VEC3"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="BOOL_VEC4"><code><span class="field-name">BOOL_VEC4</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BOOL_VEC4"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FLOAT_MAT2"><code><span class="field-name">FLOAT_MAT2</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#FLOAT_MAT2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FLOAT_MAT3"><code><span class="field-name">FLOAT_MAT3</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#FLOAT_MAT3"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FLOAT_MAT4"><code><span class="field-name">FLOAT_MAT4</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#FLOAT_MAT4"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SAMPLER_2D"><code><span class="field-name">SAMPLER_2D</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SAMPLER_2D"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SAMPLER_CUBE"><code><span class="field-name">SAMPLER_CUBE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SAMPLER_CUBE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="VERTEX_ATTRIB_ARRAY_ENABLED"><code><span class="field-name">VERTEX_ATTRIB_ARRAY_ENABLED</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#VERTEX_ATTRIB_ARRAY_ENABLED"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="VERTEX_ATTRIB_ARRAY_SIZE"><code><span class="field-name">VERTEX_ATTRIB_ARRAY_SIZE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#VERTEX_ATTRIB_ARRAY_SIZE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="VERTEX_ATTRIB_ARRAY_STRIDE"><code><span class="field-name">VERTEX_ATTRIB_ARRAY_STRIDE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#VERTEX_ATTRIB_ARRAY_STRIDE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="VERTEX_ATTRIB_ARRAY_TYPE"><code><span class="field-name">VERTEX_ATTRIB_ARRAY_TYPE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#VERTEX_ATTRIB_ARRAY_TYPE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="VERTEX_ATTRIB_ARRAY_NORMALIZED"><code><span class="field-name">VERTEX_ATTRIB_ARRAY_NORMALIZED</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#VERTEX_ATTRIB_ARRAY_NORMALIZED"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="VERTEX_ATTRIB_ARRAY_POINTER"><code><span class="field-name">VERTEX_ATTRIB_ARRAY_POINTER</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#VERTEX_ATTRIB_ARRAY_POINTER"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="VERTEX_ATTRIB_ARRAY_BUFFER_BINDING"><code><span class="field-name">VERTEX_ATTRIB_ARRAY_BUFFER_BINDING</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#VERTEX_ATTRIB_ARRAY_BUFFER_BINDING"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IMPLEMENTATION_COLOR_READ_TYPE"><code><span class="field-name">IMPLEMENTATION_COLOR_READ_TYPE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#IMPLEMENTATION_COLOR_READ_TYPE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IMPLEMENTATION_COLOR_READ_FORMAT"><code><span class="field-name">IMPLEMENTATION_COLOR_READ_FORMAT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#IMPLEMENTATION_COLOR_READ_FORMAT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="COMPILE_STATUS"><code><span class="field-name">COMPILE_STATUS</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#COMPILE_STATUS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="LOW_FLOAT"><code><span class="field-name">LOW_FLOAT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#LOW_FLOAT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MEDIUM_FLOAT"><code><span class="field-name">MEDIUM_FLOAT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MEDIUM_FLOAT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="HIGH_FLOAT"><code><span class="field-name">HIGH_FLOAT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#HIGH_FLOAT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="LOW_INT"><code><span class="field-name">LOW_INT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#LOW_INT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MEDIUM_INT"><code><span class="field-name">MEDIUM_INT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MEDIUM_INT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="HIGH_INT"><code><span class="field-name">HIGH_INT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#HIGH_INT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FRAMEBUFFER"><code><span class="field-name">FRAMEBUFFER</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#FRAMEBUFFER"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="RENDERBUFFER"><code><span class="field-name">RENDERBUFFER</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#RENDERBUFFER"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="RGBA4"><code><span class="field-name">RGBA4</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#RGBA4"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="RGB5_A1"><code><span class="field-name">RGB5_A1</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#RGB5_A1"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="RGB565"><code><span class="field-name">RGB565</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#RGB565"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DEPTH_COMPONENT16"><code><span class="field-name">DEPTH_COMPONENT16</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DEPTH_COMPONENT16"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="STENCIL_INDEX8"><code><span class="field-name">STENCIL_INDEX8</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#STENCIL_INDEX8"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DEPTH_STENCIL"><code><span class="field-name">DEPTH_STENCIL</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DEPTH_STENCIL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="RENDERBUFFER_WIDTH"><code><span class="field-name">RENDERBUFFER_WIDTH</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#RENDERBUFFER_WIDTH"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="RENDERBUFFER_HEIGHT"><code><span class="field-name">RENDERBUFFER_HEIGHT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#RENDERBUFFER_HEIGHT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="RENDERBUFFER_INTERNAL_FORMAT"><code><span class="field-name">RENDERBUFFER_INTERNAL_FORMAT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#RENDERBUFFER_INTERNAL_FORMAT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="RENDERBUFFER_RED_SIZE"><code><span class="field-name">RENDERBUFFER_RED_SIZE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#RENDERBUFFER_RED_SIZE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="RENDERBUFFER_GREEN_SIZE"><code><span class="field-name">RENDERBUFFER_GREEN_SIZE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#RENDERBUFFER_GREEN_SIZE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="RENDERBUFFER_BLUE_SIZE"><code><span class="field-name">RENDERBUFFER_BLUE_SIZE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#RENDERBUFFER_BLUE_SIZE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="RENDERBUFFER_ALPHA_SIZE"><code><span class="field-name">RENDERBUFFER_ALPHA_SIZE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#RENDERBUFFER_ALPHA_SIZE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="RENDERBUFFER_DEPTH_SIZE"><code><span class="field-name">RENDERBUFFER_DEPTH_SIZE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#RENDERBUFFER_DEPTH_SIZE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="RENDERBUFFER_STENCIL_SIZE"><code><span class="field-name">RENDERBUFFER_STENCIL_SIZE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#RENDERBUFFER_STENCIL_SIZE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE"><code><span class="field-name">FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FRAMEBUFFER_ATTACHMENT_OBJECT_NAME"><code><span class="field-name">FRAMEBUFFER_ATTACHMENT_OBJECT_NAME</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#FRAMEBUFFER_ATTACHMENT_OBJECT_NAME"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL"><code><span class="field-name">FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE"><code><span class="field-name">FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="COLOR_ATTACHMENT0"><code><span class="field-name">COLOR_ATTACHMENT0</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#COLOR_ATTACHMENT0"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DEPTH_ATTACHMENT"><code><span class="field-name">DEPTH_ATTACHMENT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DEPTH_ATTACHMENT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="STENCIL_ATTACHMENT"><code><span class="field-name">STENCIL_ATTACHMENT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#STENCIL_ATTACHMENT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DEPTH_STENCIL_ATTACHMENT"><code><span class="field-name">DEPTH_STENCIL_ATTACHMENT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DEPTH_STENCIL_ATTACHMENT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="NONE"><code><span class="field-name">NONE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#NONE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FRAMEBUFFER_COMPLETE"><code><span class="field-name">FRAMEBUFFER_COMPLETE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#FRAMEBUFFER_COMPLETE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FRAMEBUFFER_INCOMPLETE_ATTACHMENT"><code><span class="field-name">FRAMEBUFFER_INCOMPLETE_ATTACHMENT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#FRAMEBUFFER_INCOMPLETE_ATTACHMENT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT"><code><span class="field-name">FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FRAMEBUFFER_INCOMPLETE_DIMENSIONS"><code><span class="field-name">FRAMEBUFFER_INCOMPLETE_DIMENSIONS</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#FRAMEBUFFER_INCOMPLETE_DIMENSIONS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FRAMEBUFFER_UNSUPPORTED"><code><span class="field-name">FRAMEBUFFER_UNSUPPORTED</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#FRAMEBUFFER_UNSUPPORTED"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FRAMEBUFFER_BINDING"><code><span class="field-name">FRAMEBUFFER_BINDING</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#FRAMEBUFFER_BINDING"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="RENDERBUFFER_BINDING"><code><span class="field-name">RENDERBUFFER_BINDING</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#RENDERBUFFER_BINDING"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MAX_RENDERBUFFER_SIZE"><code><span class="field-name">MAX_RENDERBUFFER_SIZE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MAX_RENDERBUFFER_SIZE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="INVALID_FRAMEBUFFER_OPERATION"><code><span class="field-name">INVALID_FRAMEBUFFER_OPERATION</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#INVALID_FRAMEBUFFER_OPERATION"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="UNPACK_FLIP_Y_WEBGL"><code><span class="field-name">UNPACK_FLIP_Y_WEBGL</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#UNPACK_FLIP_Y_WEBGL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="UNPACK_PREMULTIPLY_ALPHA_WEBGL"><code><span class="field-name">UNPACK_PREMULTIPLY_ALPHA_WEBGL</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#UNPACK_PREMULTIPLY_ALPHA_WEBGL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="CONTEXT_LOST_WEBGL"><code><span class="field-name">CONTEXT_LOST_WEBGL</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#CONTEXT_LOST_WEBGL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="UNPACK_COLORSPACE_CONVERSION_WEBGL"><code><span class="field-name">UNPACK_COLORSPACE_CONVERSION_WEBGL</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#UNPACK_COLORSPACE_CONVERSION_WEBGL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="BROWSER_DEFAULT_WEBGL"><code><span class="field-name">BROWSER_DEFAULT_WEBGL</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BROWSER_DEFAULT_WEBGL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Instance Members

<div class="signature field-var has-description" id="canvas"><code><span class="field-name">canvas</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/CanvasElement/" class="type-link">js.html.CanvasElement</a></code><a class="header-anchor" href="#canvas"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A read-only back-reference to the `HTMLCanvasElement`. Might be `null` if it is not associated with a `canvas` element.

<hr class="field-separator" />

<div class="signature field-var has-description" id="drawingBufferWidth"><code><span class="field-name">drawingBufferWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#drawingBufferWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The read-only width of the current drawing buffer. Should match the width of the canvas element associated with this context.

<hr class="field-separator" />

<div class="signature field-var has-description" id="drawingBufferHeight"><code><span class="field-name">drawingBufferHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#drawingBufferHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The read-only height of the current drawing buffer. Should match the height of the canvas element associated with this context.

<hr class="field-separator" />

<div class="signature field-method has-description" id="bufferData"><code><span class="field-name">bufferData</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/ArrayBufferView/" class="type-link">js.lib.ArrayBufferView</a><span class="operator">,</span> <span class="arg-name">usage</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bufferData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates buffer data.

| Name | Type |
|------|------|
| `target` | [Int](/api-docs/clay-web/Int/) |
| `data` | [js.lib.ArrayBufferView](/api-docs/clay-web/js/lib/ArrayBufferView/) |
| `usage` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="bufferSubData"><code><span class="field-name">bufferSubData</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/ArrayBufferView/" class="type-link">js.lib.ArrayBufferView</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bufferSubData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates buffer data starting at a passed offset.

| Name | Type |
|------|------|
| `target` | [Int](/api-docs/clay-web/Int/) |
| `offset` | [Int](/api-docs/clay-web/Int/) |
| `data` | [js.lib.ArrayBufferView](/api-docs/clay-web/js/lib/ArrayBufferView/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="compressedTexImage2D"><code><span class="field-name">compressedTexImage2D</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">level</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">internalformat</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">border</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/ArrayBufferView/" class="type-link">js.lib.ArrayBufferView</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#compressedTexImage2D"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Specifies a 2D texture image in a compressed format.

| Name | Type |
|------|------|
| `target` | [Int](/api-docs/clay-web/Int/) |
| `level` | [Int](/api-docs/clay-web/Int/) |
| `internalformat` | [Int](/api-docs/clay-web/Int/) |
| `width` | [Int](/api-docs/clay-web/Int/) |
| `height` | [Int](/api-docs/clay-web/Int/) |
| `border` | [Int](/api-docs/clay-web/Int/) |
| `data` | [js.lib.ArrayBufferView](/api-docs/clay-web/js/lib/ArrayBufferView/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="compressedTexSubImage2D"><code><span class="field-name">compressedTexSubImage2D</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">level</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">xoffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">yoffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/ArrayBufferView/" class="type-link">js.lib.ArrayBufferView</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#compressedTexSubImage2D"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Specifies a 2D texture sub-image in a compressed format.

| Name | Type |
|------|------|
| `target` | [Int](/api-docs/clay-web/Int/) |
| `level` | [Int](/api-docs/clay-web/Int/) |
| `xoffset` | [Int](/api-docs/clay-web/Int/) |
| `yoffset` | [Int](/api-docs/clay-web/Int/) |
| `width` | [Int](/api-docs/clay-web/Int/) |
| `height` | [Int](/api-docs/clay-web/Int/) |
| `format` | [Int](/api-docs/clay-web/Int/) |
| `data` | [js.lib.ArrayBufferView](/api-docs/clay-web/js/lib/ArrayBufferView/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readPixels"><code><span class="field-name">readPixels</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pixels</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/ArrayBufferView/" class="type-link">js.lib.ArrayBufferView</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#readPixels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads a block of pixels from the `WebGLFrameBuffer`.

| Name | Type |
|------|------|
| `x` | [Int](/api-docs/clay-web/Int/) |
| `y` | [Int](/api-docs/clay-web/Int/) |
| `width` | [Int](/api-docs/clay-web/Int/) |
| `height` | [Int](/api-docs/clay-web/Int/) |
| `format` | [Int](/api-docs/clay-web/Int/) |
| `type` | [Int](/api-docs/clay-web/Int/) |
| `pixels` | [js.lib.ArrayBufferView](/api-docs/clay-web/js/lib/ArrayBufferView/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="texImage2D"><code><span class="field-name">texImage2D</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">level</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">internalformat</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">video</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/VideoElement/" class="type-link">js.html.VideoElement</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#texImage2D"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Specifies a 2D texture image.

| Name | Type |
|------|------|
| `target` | [Int](/api-docs/clay-web/Int/) |
| `level` | [Int](/api-docs/clay-web/Int/) |
| `internalformat` | [Int](/api-docs/clay-web/Int/) |
| `format` | [Int](/api-docs/clay-web/Int/) |
| `type` | [Int](/api-docs/clay-web/Int/) |
| `video` | [js.html.VideoElement](/api-docs/clay-web/js/html/VideoElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="texSubImage2D"><code><span class="field-name">texSubImage2D</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">level</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">xoffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">yoffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">video</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/VideoElement/" class="type-link">js.html.VideoElement</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#texSubImage2D"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates a sub-rectangle of the current `WebGLTexture`.

| Name | Type |
|------|------|
| `target` | [Int](/api-docs/clay-web/Int/) |
| `level` | [Int](/api-docs/clay-web/Int/) |
| `xoffset` | [Int](/api-docs/clay-web/Int/) |
| `yoffset` | [Int](/api-docs/clay-web/Int/) |
| `format` | [Int](/api-docs/clay-web/Int/) |
| `type` | [Int](/api-docs/clay-web/Int/) |
| `video` | [js.html.VideoElement](/api-docs/clay-web/js/html/VideoElement/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="uniform1fv"><code><span class="field-name">uniform1fv</span><span class="parenthesis">(</span><span class="arg-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/UniformLocation/" class="type-link">UniformLocation</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Float32Array/" class="type-link">js.lib.Float32Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#uniform1fv"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `location` | [UniformLocation](/api-docs/clay-web/js/html/webgl/UniformLocation/) |
| `data` | [js.lib.Float32Array](/api-docs/clay-web/js/lib/Float32Array/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="uniform2fv"><code><span class="field-name">uniform2fv</span><span class="parenthesis">(</span><span class="arg-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/UniformLocation/" class="type-link">UniformLocation</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Float32Array/" class="type-link">js.lib.Float32Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#uniform2fv"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `location` | [UniformLocation](/api-docs/clay-web/js/html/webgl/UniformLocation/) |
| `data` | [js.lib.Float32Array](/api-docs/clay-web/js/lib/Float32Array/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="uniform3fv"><code><span class="field-name">uniform3fv</span><span class="parenthesis">(</span><span class="arg-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/UniformLocation/" class="type-link">UniformLocation</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Float32Array/" class="type-link">js.lib.Float32Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#uniform3fv"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `location` | [UniformLocation](/api-docs/clay-web/js/html/webgl/UniformLocation/) |
| `data` | [js.lib.Float32Array](/api-docs/clay-web/js/lib/Float32Array/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="uniform4fv"><code><span class="field-name">uniform4fv</span><span class="parenthesis">(</span><span class="arg-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/UniformLocation/" class="type-link">UniformLocation</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Float32Array/" class="type-link">js.lib.Float32Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#uniform4fv"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `location` | [UniformLocation](/api-docs/clay-web/js/html/webgl/UniformLocation/) |
| `data` | [js.lib.Float32Array](/api-docs/clay-web/js/lib/Float32Array/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="uniform1iv"><code><span class="field-name">uniform1iv</span><span class="parenthesis">(</span><span class="arg-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/UniformLocation/" class="type-link">UniformLocation</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Int32Array/" class="type-link">js.lib.Int32Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#uniform1iv"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `location` | [UniformLocation](/api-docs/clay-web/js/html/webgl/UniformLocation/) |
| `data` | [js.lib.Int32Array](/api-docs/clay-web/js/lib/Int32Array/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="uniform2iv"><code><span class="field-name">uniform2iv</span><span class="parenthesis">(</span><span class="arg-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/UniformLocation/" class="type-link">UniformLocation</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Int32Array/" class="type-link">js.lib.Int32Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#uniform2iv"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `location` | [UniformLocation](/api-docs/clay-web/js/html/webgl/UniformLocation/) |
| `data` | [js.lib.Int32Array](/api-docs/clay-web/js/lib/Int32Array/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="uniform3iv"><code><span class="field-name">uniform3iv</span><span class="parenthesis">(</span><span class="arg-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/UniformLocation/" class="type-link">UniformLocation</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Int32Array/" class="type-link">js.lib.Int32Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#uniform3iv"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `location` | [UniformLocation](/api-docs/clay-web/js/html/webgl/UniformLocation/) |
| `data` | [js.lib.Int32Array](/api-docs/clay-web/js/lib/Int32Array/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="uniform4iv"><code><span class="field-name">uniform4iv</span><span class="parenthesis">(</span><span class="arg-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/UniformLocation/" class="type-link">UniformLocation</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Int32Array/" class="type-link">js.lib.Int32Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#uniform4iv"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `location` | [UniformLocation](/api-docs/clay-web/js/html/webgl/UniformLocation/) |
| `data` | [js.lib.Int32Array](/api-docs/clay-web/js/lib/Int32Array/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="uniformMatrix2fv"><code><span class="field-name">uniformMatrix2fv</span><span class="parenthesis">(</span><span class="arg-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/UniformLocation/" class="type-link">UniformLocation</a><span class="operator">,</span> <span class="arg-name">transpose</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Float32Array/" class="type-link">js.lib.Float32Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#uniformMatrix2fv"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `location` | [UniformLocation](/api-docs/clay-web/js/html/webgl/UniformLocation/) |
| `transpose` | [Bool](/api-docs/clay-web/Bool/) |
| `data` | [js.lib.Float32Array](/api-docs/clay-web/js/lib/Float32Array/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="uniformMatrix3fv"><code><span class="field-name">uniformMatrix3fv</span><span class="parenthesis">(</span><span class="arg-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/UniformLocation/" class="type-link">UniformLocation</a><span class="operator">,</span> <span class="arg-name">transpose</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Float32Array/" class="type-link">js.lib.Float32Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#uniformMatrix3fv"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `location` | [UniformLocation](/api-docs/clay-web/js/html/webgl/UniformLocation/) |
| `transpose` | [Bool](/api-docs/clay-web/Bool/) |
| `data` | [js.lib.Float32Array](/api-docs/clay-web/js/lib/Float32Array/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="uniformMatrix4fv"><code><span class="field-name">uniformMatrix4fv</span><span class="parenthesis">(</span><span class="arg-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/UniformLocation/" class="type-link">UniformLocation</a><span class="operator">,</span> <span class="arg-name">transpose</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Float32Array/" class="type-link">js.lib.Float32Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#uniformMatrix4fv"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `location` | [UniformLocation](/api-docs/clay-web/js/html/webgl/UniformLocation/) |
| `transpose` | [Bool](/api-docs/clay-web/Bool/) |
| `data` | [js.lib.Float32Array](/api-docs/clay-web/js/lib/Float32Array/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getContextAttributes"><code><span class="field-name">getContextAttributes</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/ContextAttributes/" class="type-link">ContextAttributes</a></code><a class="header-anchor" href="#getContextAttributes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `WebGLContextAttributes` object that contains the actual context parameters. Might return `null`, if the context is lost.
| Returns |
|---------|
| [ContextAttributes](/api-docs/clay-web/js/html/webgl/ContextAttributes/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isContextLost"><code><span class="field-name">isContextLost</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isContextLost"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `true` if the context is lost, otherwise returns `false`.
| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getSupportedExtensions"><code><span class="field-name">getSupportedExtensions</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getSupportedExtensions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `Array` of `DOMString` elements with all the supported WebGL extensions.
| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[String](/api-docs/clay-web/String/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getExtension"><code><span class="field-name">getExtension</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Extension/" class="type-link">Extension</a><span class="operator">&lt;</span><span class="type-name">getExtension.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">getExtension.T</span></code><a class="header-anchor" href="#getExtension"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an extension object.

| Name | Type |
|------|------|
| `name` | [Extension](/api-docs/clay-web/js/html/webgl/Extension/)<getExtension.T> |

| Returns |
|---------|
| getExtension.T |

<hr class="field-separator" />

<div class="signature field-method has-description" id="activeTexture"><code><span class="field-name">activeTexture</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#activeTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Selects the active texture unit.

| Name | Type |
|------|------|
| `texture` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="attachShader"><code><span class="field-name">attachShader</span><span class="parenthesis">(</span><span class="arg-name">program</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Program/" class="type-link">Program</a><span class="operator">,</span> <span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Shader/" class="type-link">Shader</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#attachShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Attaches a `WebGLShader` to a `WebGLProgram`.

| Name | Type |
|------|------|
| `program` | [Program](/api-docs/clay-web/js/html/webgl/Program/) |
| `shader` | [Shader](/api-docs/clay-web/js/html/webgl/Shader/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="bindAttribLocation"><code><span class="field-name">bindAttribLocation</span><span class="parenthesis">(</span><span class="arg-name">program</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Program/" class="type-link">Program</a><span class="operator">,</span> <span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindAttribLocation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Binds a generic vertex index to a named attribute variable.

| Name | Type |
|------|------|
| `program` | [Program](/api-docs/clay-web/js/html/webgl/Program/) |
| `index` | [Int](/api-docs/clay-web/Int/) |
| `name` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="bindBuffer"><code><span class="field-name">bindBuffer</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Buffer/" class="type-link">Buffer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindBuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Binds a `WebGLBuffer` object to a given target.

| Name | Type |
|------|------|
| `target` | [Int](/api-docs/clay-web/Int/) |
| `buffer` | [Buffer](/api-docs/clay-web/js/html/webgl/Buffer/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="bindFramebuffer"><code><span class="field-name">bindFramebuffer</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">framebuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Framebuffer/" class="type-link">Framebuffer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindFramebuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Binds a `WebGLFrameBuffer` object to a given target.

| Name | Type |
|------|------|
| `target` | [Int](/api-docs/clay-web/Int/) |
| `framebuffer` | [Framebuffer](/api-docs/clay-web/js/html/webgl/Framebuffer/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="bindRenderbuffer"><code><span class="field-name">bindRenderbuffer</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">renderbuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Renderbuffer/" class="type-link">Renderbuffer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindRenderbuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Binds a `WebGLRenderBuffer` object to a given target.

| Name | Type |
|------|------|
| `target` | [Int](/api-docs/clay-web/Int/) |
| `renderbuffer` | [Renderbuffer](/api-docs/clay-web/js/html/webgl/Renderbuffer/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="bindTexture"><code><span class="field-name">bindTexture</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Binds a `WebGLTexture` object to a given target.

| Name | Type |
|------|------|
| `target` | [Int](/api-docs/clay-web/Int/) |
| `texture` | [Texture](/api-docs/clay-web/js/html/webgl/Texture/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="blendColor"><code><span class="field-name">blendColor</span><span class="parenthesis">(</span><span class="arg-name">red</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">green</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">blue</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">alpha</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#blendColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the source and destination blending factors.

| Name | Type |
|------|------|
| `red` | [Float](/api-docs/clay-web/Float/) |
| `green` | [Float](/api-docs/clay-web/Float/) |
| `blue` | [Float](/api-docs/clay-web/Float/) |
| `alpha` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="blendEquation"><code><span class="field-name">blendEquation</span><span class="parenthesis">(</span><span class="arg-name">mode</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#blendEquation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets both the RGB blend equation and alpha blend equation to a single equation.

| Name | Type |
|------|------|
| `mode` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="blendEquationSeparate"><code><span class="field-name">blendEquationSeparate</span><span class="parenthesis">(</span><span class="arg-name">modeRGB</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">modeAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#blendEquationSeparate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the RGB blend equation and alpha blend equation separately.

| Name | Type |
|------|------|
| `modeRGB` | [Int](/api-docs/clay-web/Int/) |
| `modeAlpha` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="blendFunc"><code><span class="field-name">blendFunc</span><span class="parenthesis">(</span><span class="arg-name">sfactor</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dfactor</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#blendFunc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Defines which function is used for blending pixel arithmetic.

| Name | Type |
|------|------|
| `sfactor` | [Int](/api-docs/clay-web/Int/) |
| `dfactor` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="blendFuncSeparate"><code><span class="field-name">blendFuncSeparate</span><span class="parenthesis">(</span><span class="arg-name">srcRGB</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstRGB</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#blendFuncSeparate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Defines which function is used for blending pixel arithmetic for RGB and alpha components separately.

| Name | Type |
|------|------|
| `srcRGB` | [Int](/api-docs/clay-web/Int/) |
| `dstRGB` | [Int](/api-docs/clay-web/Int/) |
| `srcAlpha` | [Int](/api-docs/clay-web/Int/) |
| `dstAlpha` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="checkFramebufferStatus"><code><span class="field-name">checkFramebufferStatus</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#checkFramebufferStatus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the status of the framebuffer.

| Name | Type |
|------|------|
| `target` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clear"><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="arg-name">mask</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clears specified buffers to preset values.

| Name | Type |
|------|------|
| `mask` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clearColor"><code><span class="field-name">clearColor</span><span class="parenthesis">(</span><span class="arg-name">red</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">green</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">blue</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">alpha</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Specifies the color values used when clearing color buffers.

| Name | Type |
|------|------|
| `red` | [Float](/api-docs/clay-web/Float/) |
| `green` | [Float](/api-docs/clay-web/Float/) |
| `blue` | [Float](/api-docs/clay-web/Float/) |
| `alpha` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clearDepth"><code><span class="field-name">clearDepth</span><span class="parenthesis">(</span><span class="arg-name">depth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearDepth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Specifies the depth value used when clearing the depth buffer.

| Name | Type |
|------|------|
| `depth` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clearStencil"><code><span class="field-name">clearStencil</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearStencil"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Specifies the stencil value used when clearing the stencil buffer.

| Name | Type |
|------|------|
| `s` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="colorMask"><code><span class="field-name">colorMask</span><span class="parenthesis">(</span><span class="arg-name">red</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">green</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">blue</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">alpha</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#colorMask"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets which color components to enable or to disable when drawing or rendering to a `WebGLFramebuffer`.

| Name | Type |
|------|------|
| `red` | [Bool](/api-docs/clay-web/Bool/) |
| `green` | [Bool](/api-docs/clay-web/Bool/) |
| `blue` | [Bool](/api-docs/clay-web/Bool/) |
| `alpha` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="compileShader"><code><span class="field-name">compileShader</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Shader/" class="type-link">Shader</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#compileShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compiles a `WebGLShader`.

| Name | Type |
|------|------|
| `shader` | [Shader](/api-docs/clay-web/js/html/webgl/Shader/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="copyTexImage2D"><code><span class="field-name">copyTexImage2D</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">level</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">internalformat</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">border</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#copyTexImage2D"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Copies a 2D texture image.

| Name | Type |
|------|------|
| `target` | [Int](/api-docs/clay-web/Int/) |
| `level` | [Int](/api-docs/clay-web/Int/) |
| `internalformat` | [Int](/api-docs/clay-web/Int/) |
| `x` | [Int](/api-docs/clay-web/Int/) |
| `y` | [Int](/api-docs/clay-web/Int/) |
| `width` | [Int](/api-docs/clay-web/Int/) |
| `height` | [Int](/api-docs/clay-web/Int/) |
| `border` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="copyTexSubImage2D"><code><span class="field-name">copyTexSubImage2D</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">level</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">xoffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">yoffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#copyTexSubImage2D"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Copies a 2D texture sub-image.

| Name | Type |
|------|------|
| `target` | [Int](/api-docs/clay-web/Int/) |
| `level` | [Int](/api-docs/clay-web/Int/) |
| `xoffset` | [Int](/api-docs/clay-web/Int/) |
| `yoffset` | [Int](/api-docs/clay-web/Int/) |
| `x` | [Int](/api-docs/clay-web/Int/) |
| `y` | [Int](/api-docs/clay-web/Int/) |
| `width` | [Int](/api-docs/clay-web/Int/) |
| `height` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createBuffer"><code><span class="field-name">createBuffer</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Buffer/" class="type-link">Buffer</a></code><a class="header-anchor" href="#createBuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a `WebGLBuffer` object.
| Returns |
|---------|
| [Buffer](/api-docs/clay-web/js/html/webgl/Buffer/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createFramebuffer"><code><span class="field-name">createFramebuffer</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Framebuffer/" class="type-link">Framebuffer</a></code><a class="header-anchor" href="#createFramebuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a `WebGLFrameBuffer` object.
| Returns |
|---------|
| [Framebuffer](/api-docs/clay-web/js/html/webgl/Framebuffer/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createProgram"><code><span class="field-name">createProgram</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Program/" class="type-link">Program</a></code><a class="header-anchor" href="#createProgram"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a `WebGLProgram`.
| Returns |
|---------|
| [Program](/api-docs/clay-web/js/html/webgl/Program/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createRenderbuffer"><code><span class="field-name">createRenderbuffer</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Renderbuffer/" class="type-link">Renderbuffer</a></code><a class="header-anchor" href="#createRenderbuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a `WebGLRenderBuffer` object.
| Returns |
|---------|
| [Renderbuffer](/api-docs/clay-web/js/html/webgl/Renderbuffer/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createShader"><code><span class="field-name">createShader</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Shader/" class="type-link">Shader</a></code><a class="header-anchor" href="#createShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a `WebGLShader`.

| Name | Type |
|------|------|
| `type` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Shader](/api-docs/clay-web/js/html/webgl/Shader/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createTexture"><code><span class="field-name">createTexture</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Texture/" class="type-link">Texture</a></code><a class="header-anchor" href="#createTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a `WebGLTexture` object.
| Returns |
|---------|
| [Texture](/api-docs/clay-web/js/html/webgl/Texture/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="cullFace"><code><span class="field-name">cullFace</span><span class="parenthesis">(</span><span class="arg-name">mode</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#cullFace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Specifies whether or not front- and/or back-facing polygons can be culled.

| Name | Type |
|------|------|
| `mode` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deleteBuffer"><code><span class="field-name">deleteBuffer</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Buffer/" class="type-link">Buffer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#deleteBuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Deletes a `WebGLBuffer` object.

| Name | Type |
|------|------|
| `buffer` | [Buffer](/api-docs/clay-web/js/html/webgl/Buffer/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deleteFramebuffer"><code><span class="field-name">deleteFramebuffer</span><span class="parenthesis">(</span><span class="arg-name">framebuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Framebuffer/" class="type-link">Framebuffer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#deleteFramebuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Deletes a `WebGLFrameBuffer` object.

| Name | Type |
|------|------|
| `framebuffer` | [Framebuffer](/api-docs/clay-web/js/html/webgl/Framebuffer/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deleteProgram"><code><span class="field-name">deleteProgram</span><span class="parenthesis">(</span><span class="arg-name">program</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Program/" class="type-link">Program</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#deleteProgram"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Deletes a `WebGLProgram`.

| Name | Type |
|------|------|
| `program` | [Program](/api-docs/clay-web/js/html/webgl/Program/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deleteRenderbuffer"><code><span class="field-name">deleteRenderbuffer</span><span class="parenthesis">(</span><span class="arg-name">renderbuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Renderbuffer/" class="type-link">Renderbuffer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#deleteRenderbuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Deletes a `WebGLRenderBuffer` object.

| Name | Type |
|------|------|
| `renderbuffer` | [Renderbuffer](/api-docs/clay-web/js/html/webgl/Renderbuffer/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deleteShader"><code><span class="field-name">deleteShader</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Shader/" class="type-link">Shader</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#deleteShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Deletes a `WebGLShader`.

| Name | Type |
|------|------|
| `shader` | [Shader](/api-docs/clay-web/js/html/webgl/Shader/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deleteTexture"><code><span class="field-name">deleteTexture</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#deleteTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Deletes a `WebGLTexture` object.

| Name | Type |
|------|------|
| `texture` | [Texture](/api-docs/clay-web/js/html/webgl/Texture/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="depthFunc"><code><span class="field-name">depthFunc</span><span class="parenthesis">(</span><span class="arg-name">func</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#depthFunc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Specifies a function that compares incoming pixel depth to the current depth buffer value.

| Name | Type |
|------|------|
| `func` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="depthMask"><code><span class="field-name">depthMask</span><span class="parenthesis">(</span><span class="arg-name">flag</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#depthMask"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets whether writing into the depth buffer is enabled or disabled.

| Name | Type |
|------|------|
| `flag` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="depthRange"><code><span class="field-name">depthRange</span><span class="parenthesis">(</span><span class="arg-name">zNear</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">zFar</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#depthRange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Specifies the depth range mapping from normalized device coordinates to window or viewport coordinates.

| Name | Type |
|------|------|
| `zNear` | [Float](/api-docs/clay-web/Float/) |
| `zFar` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="detachShader"><code><span class="field-name">detachShader</span><span class="parenthesis">(</span><span class="arg-name">program</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Program/" class="type-link">Program</a><span class="operator">,</span> <span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Shader/" class="type-link">Shader</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#detachShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Detaches a `WebGLShader`.

| Name | Type |
|------|------|
| `program` | [Program](/api-docs/clay-web/js/html/webgl/Program/) |
| `shader` | [Shader](/api-docs/clay-web/js/html/webgl/Shader/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="disable"><code><span class="field-name">disable</span><span class="parenthesis">(</span><span class="arg-name">cap</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#disable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Disables specific WebGL capabilities for this context.

| Name | Type |
|------|------|
| `cap` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="disableVertexAttribArray"><code><span class="field-name">disableVertexAttribArray</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#disableVertexAttribArray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Disables a vertex attribute array at a given position.

| Name | Type |
|------|------|
| `index` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="drawArrays"><code><span class="field-name">drawArrays</span><span class="parenthesis">(</span><span class="arg-name">mode</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">first</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">count</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#drawArrays"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Renders primitives from array data.

| Name | Type |
|------|------|
| `mode` | [Int](/api-docs/clay-web/Int/) |
| `first` | [Int](/api-docs/clay-web/Int/) |
| `count` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="drawElements"><code><span class="field-name">drawElements</span><span class="parenthesis">(</span><span class="arg-name">mode</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">count</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#drawElements"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Renders primitives from element array data.

| Name | Type |
|------|------|
| `mode` | [Int](/api-docs/clay-web/Int/) |
| `count` | [Int](/api-docs/clay-web/Int/) |
| `type` | [Int](/api-docs/clay-web/Int/) |
| `offset` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="enable"><code><span class="field-name">enable</span><span class="parenthesis">(</span><span class="arg-name">cap</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#enable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enables specific WebGL capabilities for this context.

| Name | Type |
|------|------|
| `cap` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="enableVertexAttribArray"><code><span class="field-name">enableVertexAttribArray</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#enableVertexAttribArray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enables a vertex attribute array at a given position.

| Name | Type |
|------|------|
| `index` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="finish"><code><span class="field-name">finish</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#finish"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Blocks execution until all previously called commands are finished.

<hr class="field-separator" />

<div class="signature field-method has-description" id="flush"><code><span class="field-name">flush</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#flush"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Empties different buffer commands, causing all commands to be executed as quickly as possible.

<hr class="field-separator" />

<div class="signature field-method has-description" id="framebufferRenderbuffer"><code><span class="field-name">framebufferRenderbuffer</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">attachment</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">renderbuffertarget</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">renderbuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Renderbuffer/" class="type-link">Renderbuffer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#framebufferRenderbuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Attaches a `WebGLRenderingBuffer` object to a `WebGLFrameBuffer` object.

| Name | Type |
|------|------|
| `target` | [Int](/api-docs/clay-web/Int/) |
| `attachment` | [Int](/api-docs/clay-web/Int/) |
| `renderbuffertarget` | [Int](/api-docs/clay-web/Int/) |
| `renderbuffer` | [Renderbuffer](/api-docs/clay-web/js/html/webgl/Renderbuffer/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="framebufferTexture2D"><code><span class="field-name">framebufferTexture2D</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">attachment</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">textarget</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Texture/" class="type-link">Texture</a><span class="operator">,</span> <span class="arg-name">level</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#framebufferTexture2D"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Attaches a textures image to a `WebGLFrameBuffer` object.

| Name | Type |
|------|------|
| `target` | [Int](/api-docs/clay-web/Int/) |
| `attachment` | [Int](/api-docs/clay-web/Int/) |
| `textarget` | [Int](/api-docs/clay-web/Int/) |
| `texture` | [Texture](/api-docs/clay-web/js/html/webgl/Texture/) |
| `level` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="frontFace"><code><span class="field-name">frontFace</span><span class="parenthesis">(</span><span class="arg-name">mode</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#frontFace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Specifies whether polygons are front- or back-facing by setting a winding orientation.

| Name | Type |
|------|------|
| `mode` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="generateMipmap"><code><span class="field-name">generateMipmap</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#generateMipmap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generates a set of mipmaps for a `WebGLTexture` object.

| Name | Type |
|------|------|
| `target` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getActiveAttrib"><code><span class="field-name">getActiveAttrib</span><span class="parenthesis">(</span><span class="arg-name">program</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Program/" class="type-link">Program</a><span class="operator">,</span> <span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/ActiveInfo/" class="type-link">ActiveInfo</a></code><a class="header-anchor" href="#getActiveAttrib"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns information about an active attribute variable.

| Name | Type |
|------|------|
| `program` | [Program](/api-docs/clay-web/js/html/webgl/Program/) |
| `index` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [ActiveInfo](/api-docs/clay-web/js/html/webgl/ActiveInfo/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getActiveUniform"><code><span class="field-name">getActiveUniform</span><span class="parenthesis">(</span><span class="arg-name">program</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Program/" class="type-link">Program</a><span class="operator">,</span> <span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/ActiveInfo/" class="type-link">ActiveInfo</a></code><a class="header-anchor" href="#getActiveUniform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns information about an active uniform variable.

| Name | Type |
|------|------|
| `program` | [Program](/api-docs/clay-web/js/html/webgl/Program/) |
| `index` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [ActiveInfo](/api-docs/clay-web/js/html/webgl/ActiveInfo/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getAttachedShaders"><code><span class="field-name">getAttachedShaders</span><span class="parenthesis">(</span><span class="arg-name">program</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Program/" class="type-link">Program</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/webgl/Shader/" class="type-link">Shader</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getAttachedShaders"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a list of `WebGLShader` objects attached to a `WebGLProgram`.

| Name | Type |
|------|------|
| `program` | [Program](/api-docs/clay-web/js/html/webgl/Program/) |

| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[Shader](/api-docs/clay-web/js/html/webgl/Shader/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getAttribLocation"><code><span class="field-name">getAttribLocation</span><span class="parenthesis">(</span><span class="arg-name">program</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Program/" class="type-link">Program</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getAttribLocation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the location of an attribute variable.

| Name | Type |
|------|------|
| `program` | [Program](/api-docs/clay-web/js/html/webgl/Program/) |
| `name` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getBufferParameter"><code><span class="field-name">getBufferParameter</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pname</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#getBufferParameter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns information about the buffer.

| Name | Type |
|------|------|
| `target` | [Int](/api-docs/clay-web/Int/) |
| `pname` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getParameter"><code><span class="field-name">getParameter</span><span class="parenthesis">(</span><span class="arg-name">pname</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#getParameter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a value for the passed parameter name.

| Name | Type |
|------|------|
| `pname` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getError"><code><span class="field-name">getError</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getError"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns error information.
| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getFramebufferAttachmentParameter"><code><span class="field-name">getFramebufferAttachmentParameter</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">attachment</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pname</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#getFramebufferAttachmentParameter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns information about the framebuffer.

| Name | Type |
|------|------|
| `target` | [Int](/api-docs/clay-web/Int/) |
| `attachment` | [Int](/api-docs/clay-web/Int/) |
| `pname` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getProgramParameter"><code><span class="field-name">getProgramParameter</span><span class="parenthesis">(</span><span class="arg-name">program</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Program/" class="type-link">Program</a><span class="operator">,</span> <span class="arg-name">pname</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#getProgramParameter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns information about the program.

| Name | Type |
|------|------|
| `program` | [Program](/api-docs/clay-web/js/html/webgl/Program/) |
| `pname` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getProgramInfoLog"><code><span class="field-name">getProgramInfoLog</span><span class="parenthesis">(</span><span class="arg-name">program</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Program/" class="type-link">Program</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#getProgramInfoLog"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the information log for a `WebGLProgram` object.

| Name | Type |
|------|------|
| `program` | [Program](/api-docs/clay-web/js/html/webgl/Program/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getRenderbufferParameter"><code><span class="field-name">getRenderbufferParameter</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pname</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#getRenderbufferParameter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns information about the renderbuffer.

| Name | Type |
|------|------|
| `target` | [Int](/api-docs/clay-web/Int/) |
| `pname` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getShaderParameter"><code><span class="field-name">getShaderParameter</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Shader/" class="type-link">Shader</a><span class="operator">,</span> <span class="arg-name">pname</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#getShaderParameter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns information about the shader.

| Name | Type |
|------|------|
| `shader` | [Shader](/api-docs/clay-web/js/html/webgl/Shader/) |
| `pname` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getShaderPrecisionFormat"><code><span class="field-name">getShaderPrecisionFormat</span><span class="parenthesis">(</span><span class="arg-name">shadertype</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">precisiontype</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/ShaderPrecisionFormat/" class="type-link">ShaderPrecisionFormat</a></code><a class="header-anchor" href="#getShaderPrecisionFormat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `WebGLShaderPrecisionFormat` object describing the precision for the numeric format of the shader.

| Name | Type |
|------|------|
| `shadertype` | [Int](/api-docs/clay-web/Int/) |
| `precisiontype` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [ShaderPrecisionFormat](/api-docs/clay-web/js/html/webgl/ShaderPrecisionFormat/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getShaderInfoLog"><code><span class="field-name">getShaderInfoLog</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Shader/" class="type-link">Shader</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#getShaderInfoLog"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the information log for a `WebGLShader` object.

| Name | Type |
|------|------|
| `shader` | [Shader](/api-docs/clay-web/js/html/webgl/Shader/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getShaderSource"><code><span class="field-name">getShaderSource</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Shader/" class="type-link">Shader</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#getShaderSource"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the source code of a `WebGLShader` as a string.

| Name | Type |
|------|------|
| `shader` | [Shader](/api-docs/clay-web/js/html/webgl/Shader/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getTexParameter"><code><span class="field-name">getTexParameter</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pname</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#getTexParameter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns information about the texture.

| Name | Type |
|------|------|
| `target` | [Int](/api-docs/clay-web/Int/) |
| `pname` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getUniform"><code><span class="field-name">getUniform</span><span class="parenthesis">(</span><span class="arg-name">program</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Program/" class="type-link">Program</a><span class="operator">,</span> <span class="arg-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/UniformLocation/" class="type-link">UniformLocation</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#getUniform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the value of a uniform variable at a given location.

| Name | Type |
|------|------|
| `program` | [Program](/api-docs/clay-web/js/html/webgl/Program/) |
| `location` | [UniformLocation](/api-docs/clay-web/js/html/webgl/UniformLocation/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getUniformLocation"><code><span class="field-name">getUniformLocation</span><span class="parenthesis">(</span><span class="arg-name">program</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Program/" class="type-link">Program</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/UniformLocation/" class="type-link">UniformLocation</a></code><a class="header-anchor" href="#getUniformLocation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the location of a uniform variable.

| Name | Type |
|------|------|
| `program` | [Program](/api-docs/clay-web/js/html/webgl/Program/) |
| `name` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [UniformLocation](/api-docs/clay-web/js/html/webgl/UniformLocation/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getVertexAttrib"><code><span class="field-name">getVertexAttrib</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pname</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#getVertexAttrib"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns information about a vertex attribute at a given position.

| Name | Type |
|------|------|
| `index` | [Int](/api-docs/clay-web/Int/) |
| `pname` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getVertexAttribOffset"><code><span class="field-name">getVertexAttribOffset</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pname</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getVertexAttribOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the address of a given vertex attribute.

| Name | Type |
|------|------|
| `index` | [Int](/api-docs/clay-web/Int/) |
| `pname` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="hint"><code><span class="field-name">hint</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">mode</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#hint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Specifies hints for certain behaviors. The interpretation of these hints depend on the implementation.

| Name | Type |
|------|------|
| `target` | [Int](/api-docs/clay-web/Int/) |
| `mode` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isBuffer"><code><span class="field-name">isBuffer</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Buffer/" class="type-link">Buffer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isBuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a Boolean indicating if the passed buffer is valid.

| Name | Type |
|------|------|
| `buffer` | [Buffer](/api-docs/clay-web/js/html/webgl/Buffer/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isEnabled"><code><span class="field-name">isEnabled</span><span class="parenthesis">(</span><span class="arg-name">cap</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isEnabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tests whether a specific WebGL capability is enabled or not for this context.

| Name | Type |
|------|------|
| `cap` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isFramebuffer"><code><span class="field-name">isFramebuffer</span><span class="parenthesis">(</span><span class="arg-name">framebuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Framebuffer/" class="type-link">Framebuffer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isFramebuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a Boolean indicating if the passed `WebGLFrameBuffer` object is valid.

| Name | Type |
|------|------|
| `framebuffer` | [Framebuffer](/api-docs/clay-web/js/html/webgl/Framebuffer/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isProgram"><code><span class="field-name">isProgram</span><span class="parenthesis">(</span><span class="arg-name">program</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Program/" class="type-link">Program</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isProgram"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a Boolean indicating if the passed `WebGLProgram` is valid.

| Name | Type |
|------|------|
| `program` | [Program](/api-docs/clay-web/js/html/webgl/Program/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isRenderbuffer"><code><span class="field-name">isRenderbuffer</span><span class="parenthesis">(</span><span class="arg-name">renderbuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Renderbuffer/" class="type-link">Renderbuffer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isRenderbuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a Boolean indicating if the passed `WebGLRenderingBuffer` is valid.

| Name | Type |
|------|------|
| `renderbuffer` | [Renderbuffer](/api-docs/clay-web/js/html/webgl/Renderbuffer/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isShader"><code><span class="field-name">isShader</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Shader/" class="type-link">Shader</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a Boolean indicating if the passed `WebGLShader` is valid.

| Name | Type |
|------|------|
| `shader` | [Shader](/api-docs/clay-web/js/html/webgl/Shader/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isTexture"><code><span class="field-name">isTexture</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a Boolean indicating if the passed `WebGLTexture` is valid.

| Name | Type |
|------|------|
| `texture` | [Texture](/api-docs/clay-web/js/html/webgl/Texture/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="lineWidth"><code><span class="field-name">lineWidth</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#lineWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the line width of rasterized lines.

| Name | Type |
|------|------|
| `width` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="linkProgram"><code><span class="field-name">linkProgram</span><span class="parenthesis">(</span><span class="arg-name">program</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Program/" class="type-link">Program</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#linkProgram"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Links the passed `WebGLProgram` object.

| Name | Type |
|------|------|
| `program` | [Program](/api-docs/clay-web/js/html/webgl/Program/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="pixelStorei"><code><span class="field-name">pixelStorei</span><span class="parenthesis">(</span><span class="arg-name">pname</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">param</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pixelStorei"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Specifies the pixel storage modes

| Name | Type |
|------|------|
| `pname` | [Int](/api-docs/clay-web/Int/) |
| `param` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="polygonOffset"><code><span class="field-name">polygonOffset</span><span class="parenthesis">(</span><span class="arg-name">factor</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">units</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#polygonOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Specifies the scale factors and units to calculate depth values.

| Name | Type |
|------|------|
| `factor` | [Float](/api-docs/clay-web/Float/) |
| `units` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="renderbufferStorage"><code><span class="field-name">renderbufferStorage</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">internalformat</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#renderbufferStorage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a renderbuffer data store.

| Name | Type |
|------|------|
| `target` | [Int](/api-docs/clay-web/Int/) |
| `internalformat` | [Int](/api-docs/clay-web/Int/) |
| `width` | [Int](/api-docs/clay-web/Int/) |
| `height` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="sampleCoverage"><code><span class="field-name">sampleCoverage</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">invert</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#sampleCoverage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Specifies multi-sample coverage parameters for anti-aliasing effects.

| Name | Type |
|------|------|
| `value` | [Float](/api-docs/clay-web/Float/) |
| `invert` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="scissor"><code><span class="field-name">scissor</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#scissor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Defines the scissor box.

| Name | Type |
|------|------|
| `x` | [Int](/api-docs/clay-web/Int/) |
| `y` | [Int](/api-docs/clay-web/Int/) |
| `width` | [Int](/api-docs/clay-web/Int/) |
| `height` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="shaderSource"><code><span class="field-name">shaderSource</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Shader/" class="type-link">Shader</a><span class="operator">,</span> <span class="arg-name">source</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#shaderSource"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the source code in a `WebGLShader`.

| Name | Type |
|------|------|
| `shader` | [Shader](/api-docs/clay-web/js/html/webgl/Shader/) |
| `source` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="stencilFunc"><code><span class="field-name">stencilFunc</span><span class="parenthesis">(</span><span class="arg-name">func</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">ref</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">mask</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#stencilFunc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the both front and back function and reference value for stencil testing.

| Name | Type |
|------|------|
| `func` | [Int](/api-docs/clay-web/Int/) |
| `ref` | [Int](/api-docs/clay-web/Int/) |
| `mask` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="stencilFuncSeparate"><code><span class="field-name">stencilFuncSeparate</span><span class="parenthesis">(</span><span class="arg-name">face</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">func</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">ref</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">mask</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#stencilFuncSeparate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the front and/or back function and reference value for stencil testing.

| Name | Type |
|------|------|
| `face` | [Int](/api-docs/clay-web/Int/) |
| `func` | [Int](/api-docs/clay-web/Int/) |
| `ref` | [Int](/api-docs/clay-web/Int/) |
| `mask` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="stencilMask"><code><span class="field-name">stencilMask</span><span class="parenthesis">(</span><span class="arg-name">mask</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#stencilMask"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Controls enabling and disabling of both the front and back writing of individual bits in the stencil planes.

| Name | Type |
|------|------|
| `mask` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="stencilMaskSeparate"><code><span class="field-name">stencilMaskSeparate</span><span class="parenthesis">(</span><span class="arg-name">face</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">mask</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#stencilMaskSeparate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Controls enabling and disabling of front and/or back writing of individual bits in the stencil planes.

| Name | Type |
|------|------|
| `face` | [Int](/api-docs/clay-web/Int/) |
| `mask` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="stencilOp"><code><span class="field-name">stencilOp</span><span class="parenthesis">(</span><span class="arg-name">fail</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">zfail</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">zpass</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#stencilOp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets both the front and back-facing stencil test actions.

| Name | Type |
|------|------|
| `fail` | [Int](/api-docs/clay-web/Int/) |
| `zfail` | [Int](/api-docs/clay-web/Int/) |
| `zpass` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="stencilOpSeparate"><code><span class="field-name">stencilOpSeparate</span><span class="parenthesis">(</span><span class="arg-name">face</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">fail</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">zfail</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">zpass</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#stencilOpSeparate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the front and/or back-facing stencil test actions.

| Name | Type |
|------|------|
| `face` | [Int](/api-docs/clay-web/Int/) |
| `fail` | [Int](/api-docs/clay-web/Int/) |
| `zfail` | [Int](/api-docs/clay-web/Int/) |
| `zpass` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="texParameterf"><code><span class="field-name">texParameterf</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pname</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">param</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#texParameterf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `target` | [Int](/api-docs/clay-web/Int/) |
| `pname` | [Int](/api-docs/clay-web/Int/) |
| `param` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="texParameteri"><code><span class="field-name">texParameteri</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pname</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">param</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#texParameteri"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `target` | [Int](/api-docs/clay-web/Int/) |
| `pname` | [Int](/api-docs/clay-web/Int/) |
| `param` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="uniform1f"><code><span class="field-name">uniform1f</span><span class="parenthesis">(</span><span class="arg-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/UniformLocation/" class="type-link">UniformLocation</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#uniform1f"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `location` | [UniformLocation](/api-docs/clay-web/js/html/webgl/UniformLocation/) |
| `x` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="uniform2f"><code><span class="field-name">uniform2f</span><span class="parenthesis">(</span><span class="arg-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/UniformLocation/" class="type-link">UniformLocation</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#uniform2f"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `location` | [UniformLocation](/api-docs/clay-web/js/html/webgl/UniformLocation/) |
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="uniform3f"><code><span class="field-name">uniform3f</span><span class="parenthesis">(</span><span class="arg-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/UniformLocation/" class="type-link">UniformLocation</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#uniform3f"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `location` | [UniformLocation](/api-docs/clay-web/js/html/webgl/UniformLocation/) |
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |
| `z` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="uniform4f"><code><span class="field-name">uniform4f</span><span class="parenthesis">(</span><span class="arg-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/UniformLocation/" class="type-link">UniformLocation</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">w</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#uniform4f"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `location` | [UniformLocation](/api-docs/clay-web/js/html/webgl/UniformLocation/) |
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |
| `z` | [Float](/api-docs/clay-web/Float/) |
| `w` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="uniform1i"><code><span class="field-name">uniform1i</span><span class="parenthesis">(</span><span class="arg-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/UniformLocation/" class="type-link">UniformLocation</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#uniform1i"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `location` | [UniformLocation](/api-docs/clay-web/js/html/webgl/UniformLocation/) |
| `x` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="uniform2i"><code><span class="field-name">uniform2i</span><span class="parenthesis">(</span><span class="arg-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/UniformLocation/" class="type-link">UniformLocation</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#uniform2i"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `location` | [UniformLocation](/api-docs/clay-web/js/html/webgl/UniformLocation/) |
| `x` | [Int](/api-docs/clay-web/Int/) |
| `y` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="uniform3i"><code><span class="field-name">uniform3i</span><span class="parenthesis">(</span><span class="arg-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/UniformLocation/" class="type-link">UniformLocation</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#uniform3i"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `location` | [UniformLocation](/api-docs/clay-web/js/html/webgl/UniformLocation/) |
| `x` | [Int](/api-docs/clay-web/Int/) |
| `y` | [Int](/api-docs/clay-web/Int/) |
| `z` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="uniform4i"><code><span class="field-name">uniform4i</span><span class="parenthesis">(</span><span class="arg-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/UniformLocation/" class="type-link">UniformLocation</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">w</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#uniform4i"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `location` | [UniformLocation](/api-docs/clay-web/js/html/webgl/UniformLocation/) |
| `x` | [Int](/api-docs/clay-web/Int/) |
| `y` | [Int](/api-docs/clay-web/Int/) |
| `z` | [Int](/api-docs/clay-web/Int/) |
| `w` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="useProgram"><code><span class="field-name">useProgram</span><span class="parenthesis">(</span><span class="arg-name">program</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Program/" class="type-link">Program</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#useProgram"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Uses the specified `WebGLProgram` as part the current rendering state.

| Name | Type |
|------|------|
| `program` | [Program](/api-docs/clay-web/js/html/webgl/Program/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="validateProgram"><code><span class="field-name">validateProgram</span><span class="parenthesis">(</span><span class="arg-name">program</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Program/" class="type-link">Program</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#validateProgram"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Validates a `WebGLProgram`.

| Name | Type |
|------|------|
| `program` | [Program](/api-docs/clay-web/js/html/webgl/Program/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="vertexAttrib1f"><code><span class="field-name">vertexAttrib1f</span><span class="parenthesis">(</span><span class="arg-name">indx</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#vertexAttrib1f"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `indx` | [Int](/api-docs/clay-web/Int/) |
| `x` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="vertexAttrib1fv"><code><span class="field-name">vertexAttrib1fv</span><span class="parenthesis">(</span><span class="arg-name">indx</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">values</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Float32Array/" class="type-link">js.lib.Float32Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#vertexAttrib1fv"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `indx` | [Int](/api-docs/clay-web/Int/) |
| `values` | [js.lib.Float32Array](/api-docs/clay-web/js/lib/Float32Array/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="vertexAttrib2f"><code><span class="field-name">vertexAttrib2f</span><span class="parenthesis">(</span><span class="arg-name">indx</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#vertexAttrib2f"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `indx` | [Int](/api-docs/clay-web/Int/) |
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="vertexAttrib2fv"><code><span class="field-name">vertexAttrib2fv</span><span class="parenthesis">(</span><span class="arg-name">indx</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">values</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Float32Array/" class="type-link">js.lib.Float32Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#vertexAttrib2fv"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `indx` | [Int](/api-docs/clay-web/Int/) |
| `values` | [js.lib.Float32Array](/api-docs/clay-web/js/lib/Float32Array/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="vertexAttrib3f"><code><span class="field-name">vertexAttrib3f</span><span class="parenthesis">(</span><span class="arg-name">indx</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#vertexAttrib3f"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `indx` | [Int](/api-docs/clay-web/Int/) |
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |
| `z` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="vertexAttrib3fv"><code><span class="field-name">vertexAttrib3fv</span><span class="parenthesis">(</span><span class="arg-name">indx</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">values</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Float32Array/" class="type-link">js.lib.Float32Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#vertexAttrib3fv"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `indx` | [Int](/api-docs/clay-web/Int/) |
| `values` | [js.lib.Float32Array](/api-docs/clay-web/js/lib/Float32Array/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="vertexAttrib4f"><code><span class="field-name">vertexAttrib4f</span><span class="parenthesis">(</span><span class="arg-name">indx</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">w</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#vertexAttrib4f"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `indx` | [Int](/api-docs/clay-web/Int/) |
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |
| `z` | [Float](/api-docs/clay-web/Float/) |
| `w` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="vertexAttrib4fv"><code><span class="field-name">vertexAttrib4fv</span><span class="parenthesis">(</span><span class="arg-name">indx</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">values</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Float32Array/" class="type-link">js.lib.Float32Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#vertexAttrib4fv"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `indx` | [Int](/api-docs/clay-web/Int/) |
| `values` | [js.lib.Float32Array](/api-docs/clay-web/js/lib/Float32Array/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="vertexAttribPointer"><code><span class="field-name">vertexAttribPointer</span><span class="parenthesis">(</span><span class="arg-name">indx</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">normalized</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">stride</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#vertexAttribPointer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Specifies the data formats and locations of vertex attributes in a vertex attributes array.

| Name | Type |
|------|------|
| `indx` | [Int](/api-docs/clay-web/Int/) |
| `size` | [Int](/api-docs/clay-web/Int/) |
| `type` | [Int](/api-docs/clay-web/Int/) |
| `normalized` | [Bool](/api-docs/clay-web/Bool/) |
| `stride` | [Int](/api-docs/clay-web/Int/) |
| `offset` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="viewport"><code><span class="field-name">viewport</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#viewport"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the viewport.

| Name | Type |
|------|------|
| `x` | [Int](/api-docs/clay-web/Int/) |
| `y` | [Int](/api-docs/clay-web/Int/) |
| `width` | [Int](/api-docs/clay-web/Int/) |
| `height` | [Int](/api-docs/clay-web/Int/) |

