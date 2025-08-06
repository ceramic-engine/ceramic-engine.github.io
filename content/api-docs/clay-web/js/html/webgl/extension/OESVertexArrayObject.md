---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: OESVertexArrayObject
target: Clay (Web)
permalink: api-docs/clay-web/js/html/webgl/extension/OESVertexArrayObject/
---

# OESVertexArrayObject

<div class="type-hierarchy"><strong>js.html.webgl.extension.OESVertexArrayObject</strong> (extern class)</div>

The OES_vertex_array_object extension is part of the WebGL API and provides vertex array objects (VAOs) which encapsulate vertex array states. These objects keep pointers to vertex data and provide names for different sets of vertex data.

Documentation [OES_vertex_array_object](https://developer.mozilla.org/en-US/docs/Web/API/OES_vertex_array_object) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/OES_vertex_array_object$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/OES_vertex_array_object></div>


## Static Members

<div class="signature field-var has-description" id="VERTEX_ARRAY_BINDING_OES"><code><span class="field-name">VERTEX_ARRAY_BINDING_OES</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#VERTEX_ARRAY_BINDING_OES"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `WebGLVertexArrayObject` object when used in the `WebGLRenderingContext.getParameter()` method as the `pname` parameter.

## Instance Members

<div class="signature field-method has-description" id="createVertexArrayOES"><code><span class="field-name">createVertexArrayOES</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/VertexArrayObject/" class="type-link">js.html.webgl.VertexArrayObject</a></code><a class="header-anchor" href="#createVertexArrayOES"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new `WebGLVertexArrayObject`.
| Returns |
|---------|
| [js.html.webgl.VertexArrayObject](/api-docs/clay-web/js/html/webgl/VertexArrayObject/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deleteVertexArrayOES"><code><span class="field-name">deleteVertexArrayOES</span><span class="parenthesis">(</span><span class="arg-name">arrayObject</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/VertexArrayObject/" class="type-link">js.html.webgl.VertexArrayObject</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#deleteVertexArrayOES"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Deletes a given `WebGLVertexArrayObject`.

| Name | Type |
|------|------|
| `arrayObject` | [js.html.webgl.VertexArrayObject](/api-docs/clay-web/js/html/webgl/VertexArrayObject/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isVertexArrayOES"><code><span class="field-name">isVertexArrayOES</span><span class="parenthesis">(</span><span class="arg-name">arrayObject</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/VertexArrayObject/" class="type-link">js.html.webgl.VertexArrayObject</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isVertexArrayOES"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `true` if a given object is a `WebGLVertexArrayObject`.

| Name | Type |
|------|------|
| `arrayObject` | [js.html.webgl.VertexArrayObject](/api-docs/clay-web/js/html/webgl/VertexArrayObject/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="bindVertexArrayOES"><code><span class="field-name">bindVertexArrayOES</span><span class="parenthesis">(</span><span class="arg-name">arrayObject</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/VertexArrayObject/" class="type-link">js.html.webgl.VertexArrayObject</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindVertexArrayOES"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Binds a given `WebGLVertexArrayObject` to the buffer.

| Name | Type |
|------|------|
| `arrayObject` | [js.html.webgl.VertexArrayObject](/api-docs/clay-web/js/html/webgl/VertexArrayObject/) |

