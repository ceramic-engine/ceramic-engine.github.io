---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: RenderConfigWebGL
target: Clay (Web)
permalink: api-docs/clay-web/clay/RenderConfigWebGL/
---

# RenderConfigWebGL

<div class="view-source"><a href="https://github.com/ceramic-engine/clay/blob/master/src/clay/Config.hx">View source</a></div>

<div class="type-hierarchy"><strong>clay.RenderConfigWebGL</strong> (Class)</div>

Config specific to a WebGL rendering context.
See: https://www.khronos.org/registry/webgl/specs/latest/1.0/#WEBGLCONTEXTATTRIBUTES

## Instance Members

<div class="signature field-var has-description" id="version"><code><span class="field-name">version</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#version"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The WebGL version to request. default: 1

<hr class="field-separator" />

<div class="signature field-var has-description" id="alpha"><code><span class="field-name">alpha</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#alpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If the value is true, the drawing buffer has an alpha channel for the
purposes of performing OpenGL destination alpha operations and
compositing with the page. If the value is false, no alpha buffer is available.
clay default: false
webgl default: true

<hr class="field-separator" />

<div class="signature field-var has-description" id="depth"><code><span class="field-name">depth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#depth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If the value is true, the drawing buffer has a depth buffer of at least 16 bits.
If the value is false, no depth buffer is available.
clay default: uses render config depth flag
webgl default: true

<hr class="field-separator" />

<div class="signature field-var has-description" id="stencil"><code><span class="field-name">stencil</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#stencil"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If the value is true, the drawing buffer has a stencil buffer of at least 8 bits.
If the value is false, no stencil buffer is available.
clay default: uses render config stencil flag
webgl default: false

<hr class="field-separator" />

<div class="signature field-var has-description" id="antialias"><code><span class="field-name">antialias</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#antialias"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If the value is true and the implementation supports antialiasing the drawing buffer
will perform antialiasing using its choice of technique (multisample/supersample) and quality.
If the value is false or the implementation does not support
antialiasing, no antialiasing is performed
clay default: uses render config antialias flag
webgl default: true

<hr class="field-separator" />

<div class="signature field-var has-description" id="premultipliedAlpha"><code><span class="field-name">premultipliedAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#premultipliedAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If the value is true the page compositor will assume the drawing buffer contains colors with premultiplied alpha.
If the value is false the page compositor will assume that colors in the drawing buffer are not premultiplied.
This flag is ignored if the alpha flag is false.
clay default: false
webgl default: true

<hr class="field-separator" />

<div class="signature field-var has-description" id="preserveDrawingBuffer"><code><span class="field-name">preserveDrawingBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#preserveDrawingBuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If false, once the drawing buffer is presented as described in theDrawing Buffer section,
the contents of the drawing buffer are cleared to their default values. All elements of the
drawing buffer (color, depth and stencil) are cleared. If the value is true the buffers will
not be cleared and will preserve their values until cleared or overwritten by the author.
On some hardware setting the preserveDrawingBuffer flag to true can have significant performance implications.
clay default: uses webgl default
webgl default: false

<hr class="field-separator" />

<div class="signature field-var has-description" id="preferLowPowerToHighPerformance"><code><span class="field-name">preferLowPowerToHighPerformance</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#preferLowPowerToHighPerformance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Provides a hint to the implementation suggesting that, if possible, it creates a context
that optimizes for power consumption over performance. For example, on hardware that has more
than one GPU, it may be the case that one of them is less powerful but also uses less power.
An implementation may choose to, and may have to, ignore this hint.
clay default: uses webgl default
webgl default: false

<hr class="field-separator" />

<div class="signature field-var has-description" id="failIfMajorPerformanceCaveat"><code><span class="field-name">failIfMajorPerformanceCaveat</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#failIfMajorPerformanceCaveat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If the value is true, context creation will fail if the implementation determines that the
performance of the created WebGL context would be dramatically lower than that of a native
application making equivalent OpenGL calls.
clay default: uses webgl default
webgl default: false

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">version</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">alpha</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">depth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">stencil</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">antialias</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">premultipliedAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">preserveDrawingBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">preferLowPowerToHighPerformance</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">failIfMajorPerformanceCaveat</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `version` | [Null](/api-docs/clay-web/Null/)<[Int](/api-docs/clay-web/Int/)> | *(optional)* | The WebGL version to request. default: 1 |
| `alpha` | [Null](/api-docs/clay-web/Null/)<[Bool](/api-docs/clay-web/Bool/)> | *(optional)* | If the value is true, the drawing buffer has an alpha channel for the purposes of performing OpenGL destination alpha operations and compositing with the page. If the value is false, no alpha buffer is available. clay default: false webgl default: true |
| `depth` | [Null](/api-docs/clay-web/Null/)<[Bool](/api-docs/clay-web/Bool/)> | *(optional)* | If the value is true, the drawing buffer has a depth buffer of at least 16 bits. If the value is false, no depth buffer is available. clay default: uses render config depth flag webgl default: true |
| `stencil` | [Null](/api-docs/clay-web/Null/)<[Bool](/api-docs/clay-web/Bool/)> | *(optional)* | If the value is true, the drawing buffer has a stencil buffer of at least 8 bits. If the value is false, no stencil buffer is available. clay default: uses render config stencil flag webgl default: false |
| `antialias` | [Null](/api-docs/clay-web/Null/)<[Bool](/api-docs/clay-web/Bool/)> | *(optional)* | If the value is true and the implementation supports antialiasing the drawing buffer will perform antialiasing using its choice of technique (multisample/supersample) and quality. If the value is false or the implementation does not support antialiasing, no antialiasing is performed clay default: uses render config antialias flag webgl default: true |
| `premultipliedAlpha` | [Null](/api-docs/clay-web/Null/)<[Bool](/api-docs/clay-web/Bool/)> | *(optional)* | If the value is true the page compositor will assume the drawing buffer contains colors with premultiplied alpha. If the value is false the page compositor will assume that colors in the drawing buffer are not premultiplied. This flag is ignored if the alpha flag is false. clay default: false webgl default: true |
| `preserveDrawingBuffer` | [Null](/api-docs/clay-web/Null/)<[Bool](/api-docs/clay-web/Bool/)> | *(optional)* | If false, once the drawing buffer is presented as described in theDrawing Buffer section, the contents of the drawing buffer are cleared to their default values. All elements of the drawing buffer (color, depth and stencil) are cleared. If the value is true the buffers will not be cleared and will preserve their values until cleared or overwritten by the author. On some hardware setting the preserveDrawingBuffer flag to true can have significant performance implications. clay default: uses webgl default webgl default: false |
| `preferLowPowerToHighPerformance` | [Null](/api-docs/clay-web/Null/)<[Bool](/api-docs/clay-web/Bool/)> | *(optional)* | Provides a hint to the implementation suggesting that, if possible, it creates a context that optimizes for power consumption over performance. For example, on hardware that has more than one GPU, it may be the case that one of them is less powerful but also uses less power. An implementation may choose to, and may have to, ignore this hint. clay default: uses webgl default webgl default: false |
| `failIfMajorPerformanceCaveat` | [Null](/api-docs/clay-web/Null/)<[Bool](/api-docs/clay-web/Bool/)> | *(optional)* | If the value is true, context creation will fail if the implementation determines that the performance of the created WebGL context would be dramatically lower than that of a native application making equivalent OpenGL calls. clay default: uses webgl default webgl default: false |

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |
| `:publicFields` | - |

