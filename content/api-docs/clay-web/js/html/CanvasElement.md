---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: CanvasElement
target: Clay (Web)
permalink: api-docs/clay-web/js/html/CanvasElement/
---

# CanvasElement

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <a href="/api-docs/clay-web/js/html/Node/">Node</a> → <a href="/api-docs/clay-web/js/html/DOMElement/">DOMElement</a> → <a href="/api-docs/clay-web/js/html/Element/">Element</a> → <strong>js.html.CanvasElement</strong> (extern class)</div>

The `HTMLCanvasElement` interface provides properties and methods for manipulating the layout and presentation of canvas elements. The `HTMLCanvasElement` interface also inherits the properties and methods of the `HTMLElement` interface.

Documentation [HTMLCanvasElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement></div>


## Instance Members

<div class="signature field-var has-description" id="width"><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a positive `integer` reflecting the `width` HTML attribute of the `canvas` element interpreted in CSS pixels. When the attribute is not specified, or if it is set to an invalid value, like a negative, the default value of `300` is used.

<hr class="field-separator" />

<div class="signature field-var has-description" id="height"><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a positive `integer` reflecting the `height` HTML attribute of the `canvas` element interpreted in CSS pixels. When the attribute is not specified, or if it is set to an invalid value, like a negative, the default value of `150` is used.

<hr class="field-separator" />

<div class="signature field-method has-description" id="getContext"><code><span class="field-name">getContext</span><span class="parenthesis">(</span><span class="arg-name">contextId</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">contextOptions</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#getContext"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a drawing context on the canvas, or null if the context ID is not supported. A drawing context lets you draw on the canvas. Calling getContext with `"2d"` returns a `CanvasRenderingContext2D` object, whereas calling it with `"webgl"` (or `"experimental-webgl"`) returns a `WebGLRenderingContext` object. This context is only available on browsers that implement WebGL.

| Name | Type | Default |
|------|------|---------|
| `contextId` | [String](/api-docs/clay-web/String/) | |
| `contextOptions` | [Dynamic](/api-docs/clay-web/Dynamic/) | *(optional)* |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toDataURL"><code><span class="field-name">toDataURL</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">""</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">encoderOptions</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#toDataURL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a data-URL containing a representation of the image in the format specified by the `type` parameter (defaults to `png`). The returned image is in a resolution of 96dpi.

| Name | Type | Default |
|------|------|---------|
| `type` | [String](/api-docs/clay-web/String/) | `""` |
| `encoderOptions` | [Dynamic](/api-docs/clay-web/Dynamic/) | *(optional)* |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toBlob"><code><span class="field-name">toBlob</span><span class="parenthesis">(</span><span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">""</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">encoderOptions</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#toBlob"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a `Blob` object representing the image contained in the canvas; this file may be cached on the disk or stored in memory at the discretion of the user agent.

| Name | Type | Default |
|------|------|---------|
| `callback` | Function | |
| `type` | [String](/api-docs/clay-web/String/) | `""` |
| `encoderOptions` | [Dynamic](/api-docs/clay-web/Dynamic/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="captureStream"><code><span class="field-name">captureStream</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">frameRate</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/CanvasCaptureMediaStream/" class="type-link">CanvasCaptureMediaStream</a></code><a class="header-anchor" href="#captureStream"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `CanvasCaptureMediaStream` that is a real-time video capture of the surface of the canvas.

| Name | Type | Default |
|------|------|---------|
| `frameRate` | [Float](/api-docs/clay-web/Float/) | *(optional)* |

| Returns |
|---------|
| [CanvasCaptureMediaStream](/api-docs/clay-web/js/html/CanvasCaptureMediaStream/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getContext2d"><code><span class="field-name">getContext2d</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">attribs</span><span class="operator">:</span> <span class="type-name">AnonStruct</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/CanvasRenderingContext2D/" class="type-link">CanvasRenderingContext2D</a></code><a class="header-anchor" href="#getContext2d"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for getting a CanvasRenderingContext2D.

| Name | Type | Default |
|------|------|---------|
| `attribs` | AnonStruct | *(optional)* |

| Returns |
|---------|
| [CanvasRenderingContext2D](/api-docs/clay-web/js/html/CanvasRenderingContext2D/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getContextWebGL"><code><span class="field-name">getContextWebGL</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">attribs</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/webgl/ContextAttributes/" class="type-link">js.html.webgl.ContextAttributes</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/RenderingContext/" class="type-link">js.html.webgl.RenderingContext</a></code><a class="header-anchor" href="#getContextWebGL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for getting a js.html.webgl.RenderingContext.

| Name | Type | Default |
|------|------|---------|
| `attribs` | [Null](/api-docs/clay-web/Null/)<[js.html.webgl.ContextAttributes](/api-docs/clay-web/js/html/webgl/ContextAttributes/)> | *(optional)* |

| Returns |
|---------|
| [js.html.webgl.RenderingContext](/api-docs/clay-web/js/html/webgl/RenderingContext/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getContextWebGL2"><code><span class="field-name">getContextWebGL2</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">attribs</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/webgl/ContextAttributes/" class="type-link">js.html.webgl.ContextAttributes</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/WebGL2RenderingContext/" class="type-link">js.html.webgl.WebGL2RenderingContext</a></code><a class="header-anchor" href="#getContextWebGL2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for getting a js.html.webgl.WebGL2RenderingContext.

| Name | Type | Default |
|------|------|---------|
| `attribs` | [Null](/api-docs/clay-web/Null/)<[js.html.webgl.ContextAttributes](/api-docs/clay-web/js/html/webgl/ContextAttributes/)> | *(optional)* |

| Returns |
|---------|
| [js.html.webgl.WebGL2RenderingContext](/api-docs/clay-web/js/html/webgl/WebGL2RenderingContext/) |

