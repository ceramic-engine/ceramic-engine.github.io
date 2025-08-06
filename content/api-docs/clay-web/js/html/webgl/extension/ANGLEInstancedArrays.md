---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: ANGLEInstancedArrays
target: Clay (Web)
permalink: api-docs/clay-web/js/html/webgl/extension/ANGLEInstancedArrays/
---

# ANGLEInstancedArrays

<div class="type-hierarchy"><strong>js.html.webgl.extension.ANGLEInstancedArrays</strong> (extern class)</div>

The `ANGLE_instanced_arrays` extension is part of the WebGL API and allows to draw the same object, or groups of similar objects multiple times, if they share the same vertex data, primitive count and type.

Documentation [ANGLE_instanced_arrays](https://developer.mozilla.org/en-US/docs/Web/API/ANGLE_instanced_arrays) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/ANGLE_instanced_arrays$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/ANGLE_instanced_arrays></div>


## Static Members

<div class="signature field-var has-description" id="VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE"><code><span class="field-name">VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `GLint` describing the frequency divisor used for instanced rendering when used in the `WebGLRenderingContext.getVertexAttrib()` as the `pname` parameter.

## Instance Members

<div class="signature field-method has-description" id="drawArraysInstancedANGLE"><code><span class="field-name">drawArraysInstancedANGLE</span><span class="parenthesis">(</span><span class="arg-name">mode</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">first</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">count</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">primcount</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#drawArraysInstancedANGLE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Behaves identically to `WebGLRenderingContext.drawArrays()` except that multiple instances of the range of elements are executed, and the instance advances for each iteration.

| Name | Type |
|------|------|
| `mode` | [Int](/api-docs/clay-web/Int/) |
| `first` | [Int](/api-docs/clay-web/Int/) |
| `count` | [Int](/api-docs/clay-web/Int/) |
| `primcount` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="drawElementsInstancedANGLE"><code><span class="field-name">drawElementsInstancedANGLE</span><span class="parenthesis">(</span><span class="arg-name">mode</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">count</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">primcount</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#drawElementsInstancedANGLE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Behaves identically to `WebGLRenderingContext.drawElements()` except that multiple instances of the set of elements are executed and the instance advances between each set.

| Name | Type |
|------|------|
| `mode` | [Int](/api-docs/clay-web/Int/) |
| `count` | [Int](/api-docs/clay-web/Int/) |
| `type` | [Int](/api-docs/clay-web/Int/) |
| `offset` | [Int](/api-docs/clay-web/Int/) |
| `primcount` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="vertexAttribDivisorANGLE"><code><span class="field-name">vertexAttribDivisorANGLE</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">divisor</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#vertexAttribDivisorANGLE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Modifies the rate at which generic vertex attributes advance when rendering multiple instances of primitives with `ANGLE_instanced_arrays.drawArraysInstancedANGLE()` and `ANGLE_instanced_arrays.drawElementsInstancedANGLE()`.

| Name | Type |
|------|------|
| `index` | [Int](/api-docs/clay-web/Int/) |
| `divisor` | [Int](/api-docs/clay-web/Int/) |

