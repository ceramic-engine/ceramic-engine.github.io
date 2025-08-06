---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: Texture
target: Clay (Native)
permalink: api-docs/clay-native/clay/graphics/Texture/
---

# Texture

<div class="view-source"><a href="https://github.com/ceramic-engine/clay/blob/master/src/clay/graphics/Texture.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/clay/Resource/">clay.Resource</a> → <strong>clay.graphics.Texture</strong> (Class) → <a href="/api-docs/clay-native/clay/graphics/RenderTexture/">RenderTexture</a></div>

A high level texture object to make it easier to manage textures

## Static Members

<div class="signature field-method no-description" id="fromImage"><code><span class="field-name">fromImage</span><span class="parenthesis">(</span><span class="arg-name">image</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/Image/" class="type-link">clay.Image</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">premultiplyAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Texture</a></code><a class="header-anchor" href="#fromImage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `image` | [clay.Image](/api-docs/clay-native/clay/Image/) | |
| `premultiplyAlpha` | [Bool](/api-docs/clay-native/Bool/) | `false` |

| Returns |
|---------|
| [Texture](/api-docs/clay-native/clay/graphics/Texture/) |

## Instance Members

<div class="signature field-var no-description" id="index"><code><span class="field-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#index"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="textureId"><code><span class="field-name">textureId</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/TextureId/" class="type-link">clay.TextureId</a></code><a class="header-anchor" href="#textureId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="premultiplyAlpha"><code><span class="field-name">premultiplyAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#premultiplyAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is `true` if image has been processed to be stored as premultiplied alpha in GPU memory.

<hr class="field-separator" />

<div class="signature field-var has-description" id="compressed"><code><span class="field-name">compressed</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#compressed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If `true`, the pixels buffer should store compressed image data that the GPU understands

<hr class="field-separator" />

<div class="signature field-var has-description" id="format"><code><span class="field-name">format</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/TextureFormat/" class="type-link">clay.TextureFormat</a></code><a class="header-anchor" href="#format"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The GPU texture format (RGBA, RGB...)

<hr class="field-separator" />

<div class="signature field-var has-description" id="type"><code><span class="field-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/TextureType/" class="type-link">clay.TextureType</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The GPU texture type (TEXTURE_2D)

<hr class="field-separator" />

<div class="signature field-var has-description" id="dataType"><code><span class="field-name">dataType</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/TextureDataType/" class="type-link">clay.TextureDataType</a></code><a class="header-anchor" href="#dataType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The GPU data type (UNSIGNED_BYTE)

<hr class="field-separator" />

<div class="signature field-var has-description" id="width"><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When creating a texture manually, the width of this texture.

<hr class="field-separator" />

<div class="signature field-var has-description" id="height"><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When creating a texture manually, the height of this texture.

<hr class="field-separator" />

<div class="signature field-var has-description" id="widthActual"><code><span class="field-name">widthActual</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#widthActual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The width of the actual texture, needed when the texture may be padded to POT sizes

<hr class="field-separator" />

<div class="signature field-var has-description" id="heightActual"><code><span class="field-name">heightActual</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#heightActual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The height of the actual texture, needed when the texture may be padded to POT sizes

<hr class="field-separator" />

<div class="signature field-var has-description" id="pixels"><code><span class="field-name">pixels</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/clay/buffers/Uint8Array/" class="type-link">clay.buffers.Uint8Array</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#pixels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When creating a texture manually, the pixels for this texture.
Properties `width` and `height` must be defined when providing pixels.

<hr class="field-separator" />

<div class="signature field-var has-description" id="filterMin"><code><span class="field-name">filterMin</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/TextureFilter/" class="type-link">clay.TextureFilter</a></code><a class="header-anchor" href="#filterMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the minification filter type (default LINEAR)

<hr class="field-separator" />

<div class="signature field-var has-description" id="filterMag"><code><span class="field-name">filterMag</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/TextureFilter/" class="type-link">clay.TextureFilter</a></code><a class="header-anchor" href="#filterMag"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the magnification filter type (default LINEAR)

<hr class="field-separator" />

<div class="signature field-var has-description" id="wrapS"><code><span class="field-name">wrapS</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/TextureWrap/" class="type-link">clay.TextureWrap</a></code><a class="header-anchor" href="#wrapS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the s (horizontal) clamp type (default CLAMP_TO_EDGE)

<hr class="field-separator" />

<div class="signature field-var has-description" id="wrapT"><code><span class="field-name">wrapT</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/TextureWrap/" class="type-link">clay.TextureWrap</a></code><a class="header-anchor" href="#wrapT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the t (vertical) clamp type (default CLAMP_TO_EDGE)

<hr class="field-separator" />

<div class="signature field-method has-description" id="init"><code><span class="field-name">init</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#init"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initialize this texture. Must be called before using the actual texture.
When calling init(), properties should be defined accordingly.

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="bind"><code><span class="field-name">bind</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">slot</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bind"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Bind this texture to its active texture slot,
and it's texture id to the texture type. Calling this
repeatedly is fine, as the state is tracked by `Graphics`.

| Name | Type | Default |
|------|------|---------|
| `slot` | [Int](/api-docs/clay-native/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="submit"><code><span class="field-name">submit</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">pixels</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/clay/buffers/Uint8Array/" class="type-link">clay.buffers.Uint8Array</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#submit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Submit a pixels array to the texture id. Must match the type and format accordingly.

| Name | Type | Default |
|------|------|---------|
| `pixels` | [Null](/api-docs/clay-native/Null/)<[clay.buffers.Uint8Array](/api-docs/clay-native/clay/buffers/Uint8Array/)> | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fetch"><code><span class="field-name">fetch</span><span class="parenthesis">(</span><span class="arg-name">into</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/Uint8Array/" class="type-link">clay.buffers.Uint8Array</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">w</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">h</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/Uint8Array/" class="type-link">clay.buffers.Uint8Array</a></code><a class="header-anchor" href="#fetch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fetch the pixels from the texture id, storing them in the provided array buffer view.
Returns image pixels in RGBA format, as unsigned byte (0-255) values only.
This means that the view must be `w * h * 4` in length, minimum.
By default, x and y are 0, 0, and the texture `width` and `height`
are used (not widthActual / heightActual)

| Name | Type | Default |
|------|------|---------|
| `into` | [clay.buffers.Uint8Array](/api-docs/clay-native/clay/buffers/Uint8Array/) | |
| `x` | [Int](/api-docs/clay-native/Int/) | `0` |
| `y` | [Int](/api-docs/clay-native/Int/) | `0` |
| `w` | [Int](/api-docs/clay-native/Int/) | `-1` |
| `h` | [Int](/api-docs/clay-native/Int/) | `-1` |

| Returns |
|---------|
| [clay.buffers.Uint8Array](/api-docs/clay-native/clay/buffers/Uint8Array/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

