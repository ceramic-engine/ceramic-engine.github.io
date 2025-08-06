---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: GLGraphics
target: Clay (Native)
permalink: api-docs/clay-native/clay/opengl/GLGraphics/
---

# GLGraphics

<div class="view-source"><a href="https://github.com/ceramic-engine/clay/blob/master/src/clay/opengl/GLGraphics.hx">View source</a></div>

<div class="type-hierarchy"><strong>clay.opengl.GLGraphics</strong> (Class)</div>

A set of helpers to interact with GL stuff.
Public API is trying to be a bit agnostic so that other
non-GL implementations could be replaced fairly easily.

## Static Members

<div class="signature field-var no-description" id="NO_TEXTURE"><code><span class="field-name">NO_TEXTURE</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/TextureId/" class="type-link">clay.TextureId</a></code><a class="header-anchor" href="#NO_TEXTURE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="NO_FRAMEBUFFER"><code><span class="field-name">NO_FRAMEBUFFER</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/opengl/GLFramebuffer/" class="type-link">GLFramebuffer</a></code><a class="header-anchor" href="#NO_FRAMEBUFFER"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="NO_RENDERBUFFER"><code><span class="field-name">NO_RENDERBUFFER</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/opengl/GLRenderbuffer/" class="type-link">GLRenderbuffer</a></code><a class="header-anchor" href="#NO_RENDERBUFFER"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="NO_SHADER"><code><span class="field-name">NO_SHADER</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/opengl/GLShader/" class="type-link">GLShader</a></code><a class="header-anchor" href="#NO_SHADER"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="NO_PROGRAM"><code><span class="field-name">NO_PROGRAM</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/opengl/GLProgram/" class="type-link">GLProgram</a></code><a class="header-anchor" href="#NO_PROGRAM"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="NO_LOCATION"><code><span class="field-name">NO_LOCATION</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/opengl/GLUniformLocation/" class="type-link">GLUniformLocation</a></code><a class="header-anchor" href="#NO_LOCATION"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="NO_BUFFER"><code><span class="field-name">NO_BUFFER</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/opengl/GLBuffer/" class="type-link">GLBuffer</a></code><a class="header-anchor" href="#NO_BUFFER"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="clear"><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="arg-name">r</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">g</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">clearDepth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clear the current render buffer


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `r` | [Float](/api-docs/clay-native/Float/) | | red value (between 0 and 1)  |
| `g` | [Float](/api-docs/clay-native/Float/) | | green value (between 0 and 1)  |
| `b` | [Float](/api-docs/clay-native/Float/) | | blue value (between 0 and 1)  |
| `a` | [Float](/api-docs/clay-native/Float/) | | alpha value (between 0 and 1)  |
| `clearDepth` | [Bool](/api-docs/clay-native/Bool/) | `true` | set to `true` (default) to also clear depth buffer, if applicable |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createTextureId"><code><span class="field-name">createTextureId</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/TextureId/" class="type-link">clay.TextureId</a></code><a class="header-anchor" href="#createTextureId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new texture and return its identifier

| Returns | Description |
|---------|-------------|
| [clay.TextureId](/api-docs/clay-native/clay/TextureId/) | TextureId |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setActiveTexture"><code><span class="field-name">setActiveTexture</span><span class="parenthesis">(</span><span class="arg-name">slot</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setActiveTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set active texture slot


| Name | Type | Description |
|------|------|-------------|
| `slot` | [Int](/api-docs/clay-native/Int/) | a slot number. Assigned expression will be `GL.TEXTURE0 + slot` on GL |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deleteTexture"><code><span class="field-name">deleteTexture</span><span class="parenthesis">(</span><span class="arg-name">textureId</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/TextureId/" class="type-link">clay.TextureId</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#deleteTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Delete the texture identified with `textureId` from the GPU

| Name | Type |
|------|------|
| `textureId` | [clay.TextureId](/api-docs/clay-native/clay/TextureId/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setViewport"><code><span class="field-name">setViewport</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setViewport"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set current viewport delimited with x, y, width and height


| Name | Type | Description |
|------|------|-------------|
| `x` | [Int](/api-docs/clay-native/Int/) | The x value to specify lower left corner of viewport  |
| `y` | [Int](/api-docs/clay-native/Int/) | The y value to specify lower left corner of viewport  |
| `width` | [Int](/api-docs/clay-native/Int/) | The width of the viewport  |
| `height` | [Int](/api-docs/clay-native/Int/) | The height of the viewport |

<hr class="field-separator" />

<div class="signature field-method has-description" id="bindTexture2d"><code><span class="field-name">bindTexture2d</span><span class="parenthesis">(</span><span class="arg-name">textureId</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/TextureId/" class="type-link">clay.TextureId</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindTexture2d"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Bind the texture identified by `textureId` to do some work with it


| Name | Type | Description |
|------|------|-------------|
| `textureId` | [clay.TextureId](/api-docs/clay-native/clay/TextureId/) | a valid texture identifier returned by `createTextureId()` or `NO_TEXTURE` to unbind texture |

<hr class="field-separator" />

<div class="signature field-method has-description" id="maxTextureSize"><code><span class="field-name">maxTextureSize</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#maxTextureSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Return the maximum size of a texture from the hardware

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-native/Int/) | Int |

<hr class="field-separator" />

<div class="signature field-method has-description" id="needsPreprocessedPremultipliedAlpha"><code><span class="field-name">needsPreprocessedPremultipliedAlpha</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#needsPreprocessedPremultipliedAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `true` if premultiplied textures should have their pixels buffer preprocessed before submit

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | Bool |

<hr class="field-separator" />

<div class="signature field-method has-description" id="submitCompressedTexture2dPixels"><code><span class="field-name">submitCompressedTexture2dPixels</span><span class="parenthesis">(</span><span class="arg-name">level</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/TextureFormat/" class="type-link">clay.TextureFormat</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pixels</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/Uint8Array/" class="type-link">clay.buffers.Uint8Array</a><span class="operator">,</span> <span class="arg-name">premultipliedAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#submitCompressedTexture2dPixels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Submit compressed texture 2D pixels


| Name | Type | Description |
|------|------|-------------|
| `level` | [Int](/api-docs/clay-native/Int/) | The level of detail. Level 0 is the base image level. Level n is the nth mipmap reduction image.  |
| `format` | [clay.TextureFormat](/api-docs/clay-native/clay/TextureFormat/) | The texture format (RGBA)  |
| `width` | [Int](/api-docs/clay-native/Int/) | The width of the texture to submit  |
| `height` | [Int](/api-docs/clay-native/Int/) | The height of the texture to submit  |
| `pixels` | [clay.buffers.Uint8Array](/api-docs/clay-native/clay/buffers/Uint8Array/) | The pixels buffer when the data will be written to  |
| `premultipliedAlpha` | [Bool](/api-docs/clay-native/Bool/) | The pixels buffer should be stored as premultiplied alpha |

<hr class="field-separator" />

<div class="signature field-method has-description" id="submitTexture2dPixels"><code><span class="field-name">submitTexture2dPixels</span><span class="parenthesis">(</span><span class="arg-name">level</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/TextureFormat/" class="type-link">clay.TextureFormat</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dataType</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/TextureDataType/" class="type-link">clay.TextureDataType</a><span class="operator">,</span> <span class="arg-name">pixels</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/Uint8Array/" class="type-link">clay.buffers.Uint8Array</a><span class="operator">,</span> <span class="arg-name">premultipliedAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#submitTexture2dPixels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fetch 2d texture pixels


| Name | Type | Description |
|------|------|-------------|
| `level` | [Int](/api-docs/clay-native/Int/) | The level of detail. Level 0 is the base image level. Level n is the nth mipmap reduction image.  |
| `format` | [clay.TextureFormat](/api-docs/clay-native/clay/TextureFormat/) | The texture format (RGBA)  |
| `width` | [Int](/api-docs/clay-native/Int/) | The width of the texture to submit  |
| `height` | [Int](/api-docs/clay-native/Int/) | The height of the texture to submit  |
| `dataType` | [clay.TextureDataType](/api-docs/clay-native/clay/TextureDataType/) | The data type of the pixel data (UNSIGNED_BYTE)  |
| `pixels` | [clay.buffers.Uint8Array](/api-docs/clay-native/clay/buffers/Uint8Array/) | The pixels buffer containing data to submit  |
| `premultipliedAlpha` | [Bool](/api-docs/clay-native/Bool/) | The pixels buffer should be stored as premultiplied alpha |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fetchTexture2dPixels"><code><span class="field-name">fetchTexture2dPixels</span><span class="parenthesis">(</span><span class="arg-name">into</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/Uint8Array/" class="type-link">clay.buffers.Uint8Array</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">w</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">h</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#fetchTexture2dPixels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fetch texture 2d pixels


| Name | Type | Description |
|------|------|-------------|
| `into` | [clay.buffers.Uint8Array](/api-docs/clay-native/clay/buffers/Uint8Array/) | The pixels buffer when the data will be written to  |
| `x` | [Int](/api-docs/clay-native/Int/) | The x position of the texture rect to fetch  |
| `y` | [Int](/api-docs/clay-native/Int/) | The y position of the texture rect to fetch  |
| `w` | [Int](/api-docs/clay-native/Int/) | The width of the texture rect to fetch  |
| `h` | [Int](/api-docs/clay-native/Int/) | The height of the texture rect to fetch |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createFramebuffer"><code><span class="field-name">createFramebuffer</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/opengl/GLFramebuffer/" class="type-link">GLFramebuffer</a></code><a class="header-anchor" href="#createFramebuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new framebuffer

| Returns | Description |
|---------|-------------|
| [GLFramebuffer](/api-docs/clay-native/clay/opengl/GLFramebuffer/) | Framebuffer |

<hr class="field-separator" />

<div class="signature field-method has-description" id="bindFramebuffer"><code><span class="field-name">bindFramebuffer</span><span class="parenthesis">(</span><span class="arg-name">framebuffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/opengl/GLFramebuffer/" class="type-link">GLFramebuffer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindFramebuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Bind a framebuffer to work with it


| Name | Type | Description |
|------|------|-------------|
| `framebuffer` | [GLFramebuffer](/api-docs/clay-native/clay/opengl/GLFramebuffer/) | The framebuffer to bind |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createRenderbuffer"><code><span class="field-name">createRenderbuffer</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/opengl/GLRenderbuffer/" class="type-link">GLRenderbuffer</a></code><a class="header-anchor" href="#createRenderbuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new renderbuffer

| Returns | Description |
|---------|-------------|
| [GLRenderbuffer](/api-docs/clay-native/clay/opengl/GLRenderbuffer/) | Renderbuffer |

<hr class="field-separator" />

<div class="signature field-method has-description" id="bindRenderbuffer"><code><span class="field-name">bindRenderbuffer</span><span class="parenthesis">(</span><span class="arg-name">renderbuffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/opengl/GLRenderbuffer/" class="type-link">GLRenderbuffer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindRenderbuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Bind a renderbuffer to work with it


| Name | Type | Description |
|------|------|-------------|
| `renderbuffer` | [GLRenderbuffer](/api-docs/clay-native/clay/opengl/GLRenderbuffer/) | The renderbuffer to bind |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setTexture2dMinFilter"><code><span class="field-name">setTexture2dMinFilter</span><span class="parenthesis">(</span><span class="arg-name">minFilter</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/TextureFilter/" class="type-link">clay.TextureFilter</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTexture2dMinFilter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set 2d texture minification filter

| Name | Type |
|------|------|
| `minFilter` | [clay.TextureFilter](/api-docs/clay-native/clay/TextureFilter/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setTexture2dMagFilter"><code><span class="field-name">setTexture2dMagFilter</span><span class="parenthesis">(</span><span class="arg-name">magFilter</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/TextureFilter/" class="type-link">clay.TextureFilter</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTexture2dMagFilter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set 2d texture magnification filter

| Name | Type |
|------|------|
| `magFilter` | [clay.TextureFilter](/api-docs/clay-native/clay/TextureFilter/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setTexture2dWrapS"><code><span class="field-name">setTexture2dWrapS</span><span class="parenthesis">(</span><span class="arg-name">wrapS</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/TextureWrap/" class="type-link">clay.TextureWrap</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTexture2dWrapS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set 2d texture s (horizontal) clamp type

| Name | Type |
|------|------|
| `wrapS` | [clay.TextureWrap](/api-docs/clay-native/clay/TextureWrap/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setTexture2dWrapT"><code><span class="field-name">setTexture2dWrapT</span><span class="parenthesis">(</span><span class="arg-name">wrapT</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/TextureWrap/" class="type-link">clay.TextureWrap</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTexture2dWrapT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set 2d texture t (vertical) clamp type

| Name | Type |
|------|------|
| `wrapT` | [clay.TextureWrap](/api-docs/clay-native/clay/TextureWrap/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="configureRenderTargetBuffersStorage"><code><span class="field-name">configureRenderTargetBuffersStorage</span><span class="parenthesis">(</span><span class="arg-name">renderTarget</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/opengl/GLGraphics_RenderTarget/" class="type-link">GLGraphics_RenderTarget</a><span class="operator">,</span> <span class="arg-name">textureId</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/TextureId/" class="type-link">clay.TextureId</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">depth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">stencil</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">antialiasing</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#configureRenderTargetBuffersStorage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Configure storage for the given framebuffer and renderbuffer with the given settings.
This helper is a bit higher level to make it easier to configure buffers depending on the platform.

| Name | Type | Description |
|------|------|-------------|
| `renderTarget` | [GLGraphics_RenderTarget](/api-docs/clay-native/clay/opengl/GLGraphics_RenderTarget/) |  |
| `textureId` | [clay.TextureId](/api-docs/clay-native/clay/TextureId/) | * |
| `width` | [Int](/api-docs/clay-native/Int/) | * |
| `height` | [Int](/api-docs/clay-native/Int/) | * |
| `depth` | [Bool](/api-docs/clay-native/Bool/) |  |
| `stencil` | [Bool](/api-docs/clay-native/Bool/) | * |
| `antialiasing` | [Int](/api-docs/clay-native/Int/) |  |

<hr class="field-separator" />

<div class="signature field-method no-description" id="blitRenderTargetBuffers"><code><span class="field-name">blitRenderTargetBuffers</span><span class="parenthesis">(</span><span class="arg-name">renderTarget</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/opengl/GLGraphics_RenderTarget/" class="type-link">GLGraphics_RenderTarget</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#blitRenderTargetBuffers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `renderTarget` | [GLGraphics_RenderTarget](/api-docs/clay-native/clay/opengl/GLGraphics_RenderTarget/) |
| `width` | [Int](/api-docs/clay-native/Int/) |
| `height` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createRenderTarget"><code><span class="field-name">createRenderTarget</span><span class="parenthesis">(</span><span class="arg-name">textureId</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/TextureId/" class="type-link">clay.TextureId</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">depth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">stencil</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">antialiasing</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">level</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/TextureFormat/" class="type-link">clay.TextureFormat</a><span class="operator">,</span> <span class="arg-name">dataType</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/TextureDataType/" class="type-link">clay.TextureDataType</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/RenderTarget/" class="type-link">clay.RenderTarget</a></code><a class="header-anchor" href="#createRenderTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a render target from the given settings


| Name | Type | Description |
|------|------|-------------|
| `textureId` | [clay.TextureId](/api-docs/clay-native/clay/TextureId/) | * |
| `width` | [Int](/api-docs/clay-native/Int/) | * |
| `height` | [Int](/api-docs/clay-native/Int/) | * |
| `depth` | [Bool](/api-docs/clay-native/Bool/) | * |
| `stencil` | [Bool](/api-docs/clay-native/Bool/) | * |
| `antialiasing` | [Int](/api-docs/clay-native/Int/) | * |
| `level` | [Int](/api-docs/clay-native/Int/) | The level of detail. Level 0 is the base image level. Level n is the nth mipmap reduction image.  |
| `format` | [clay.TextureFormat](/api-docs/clay-native/clay/TextureFormat/) | The texture format (RGBA)  |
| `dataType` | [clay.TextureDataType](/api-docs/clay-native/clay/TextureDataType/) | The data type of the pixel data (UNSIGNED_BYTE) |

| Returns |
|---------|
| [clay.RenderTarget](/api-docs/clay-native/clay/RenderTarget/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="deleteRenderTarget"><code><span class="field-name">deleteRenderTarget</span><span class="parenthesis">(</span><span class="arg-name">renderTarget</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/opengl/GLGraphics_RenderTarget/" class="type-link">GLGraphics_RenderTarget</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#deleteRenderTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `renderTarget` | [GLGraphics_RenderTarget](/api-docs/clay-native/clay/opengl/GLGraphics_RenderTarget/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setRenderTarget"><code><span class="field-name">setRenderTarget</span><span class="parenthesis">(</span><span class="arg-name">renderTarget</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/opengl/GLGraphics_RenderTarget/" class="type-link">GLGraphics_RenderTarget</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setRenderTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `renderTarget` | [GLGraphics_RenderTarget](/api-docs/clay-native/clay/opengl/GLGraphics_RenderTarget/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="enableBlending"><code><span class="field-name">enableBlending</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#enableBlending"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="disableBlending"><code><span class="field-name">disableBlending</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#disableBlending"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="createShader"><code><span class="field-name">createShader</span><span class="parenthesis">(</span><span class="arg-name">vertSource</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">fragSource</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">attributes</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">textures</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/GpuShader/" class="type-link">clay.GpuShader</a></code><a class="header-anchor" href="#createShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `vertSource` | [String](/api-docs/clay-native/String/) | |
| `fragSource` | [String](/api-docs/clay-native/String/) | |
| `attributes` | [Array](/api-docs/clay-native/Array/)<[String](/api-docs/clay-native/String/)> | *(optional)* |
| `textures` | [Array](/api-docs/clay-native/Array/)<[String](/api-docs/clay-native/String/)> | *(optional)* |

| Returns |
|---------|
| [clay.GpuShader](/api-docs/clay-native/clay/GpuShader/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="linkShader"><code><span class="field-name">linkShader</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/opengl/GLGraphics_GpuShader/" class="type-link">GLGraphics_GpuShader</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">attributes</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#linkShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `shader` | [GLGraphics_GpuShader](/api-docs/clay-native/clay/opengl/GLGraphics_GpuShader/) | |
| `attributes` | [Array](/api-docs/clay-native/Array/)<[String](/api-docs/clay-native/String/)> | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="configureShaderTextureSlots"><code><span class="field-name">configureShaderTextureSlots</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/opengl/GLGraphics_GpuShader/" class="type-link">GLGraphics_GpuShader</a><span class="operator">,</span> <span class="arg-name">textures</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#configureShaderTextureSlots"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shader` | [GLGraphics_GpuShader](/api-docs/clay-native/clay/opengl/GLGraphics_GpuShader/) |
| `textures` | [Array](/api-docs/clay-native/Array/)<[String](/api-docs/clay-native/String/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="useShader"><code><span class="field-name">useShader</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/opengl/GLGraphics_GpuShader/" class="type-link">GLGraphics_GpuShader</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#useShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shader` | [GLGraphics_GpuShader](/api-docs/clay-native/clay/opengl/GLGraphics_GpuShader/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="deleteShader"><code><span class="field-name">deleteShader</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/opengl/GLGraphics_GpuShader/" class="type-link">GLGraphics_GpuShader</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#deleteShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shader` | [GLGraphics_GpuShader](/api-docs/clay-native/clay/opengl/GLGraphics_GpuShader/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="compileGLShader"><code><span class="field-name">compileGLShader</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">source</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/opengl/GLShader/" class="type-link">GLShader</a></code><a class="header-anchor" href="#compileGLShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `type` | [Int](/api-docs/clay-native/Int/) |
| `source` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [GLShader](/api-docs/clay-native/clay/opengl/GLShader/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getUniformLocation"><code><span class="field-name">getUniformLocation</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/GpuShader/" class="type-link">clay.GpuShader</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/opengl/GLUniformLocation/" class="type-link">GLUniformLocation</a></code><a class="header-anchor" href="#getUniformLocation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shader` | [clay.GpuShader](/api-docs/clay-native/clay/GpuShader/) |
| `name` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [GLUniformLocation](/api-docs/clay-native/clay/opengl/GLUniformLocation/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setIntUniform"><code><span class="field-name">setIntUniform</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/GpuShader/" class="type-link">clay.GpuShader</a><span class="operator">,</span> <span class="arg-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/opengl/GLUniformLocation/" class="type-link">GLUniformLocation</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setIntUniform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shader` | [clay.GpuShader](/api-docs/clay-native/clay/GpuShader/) |
| `location` | [GLUniformLocation](/api-docs/clay-native/clay/opengl/GLUniformLocation/) |
| `value` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setIntArrayUniform"><code><span class="field-name">setIntArrayUniform</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/GpuShader/" class="type-link">clay.GpuShader</a><span class="operator">,</span> <span class="arg-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/opengl/GLUniformLocation/" class="type-link">GLUniformLocation</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/Int32Array/" class="type-link">clay.buffers.Int32Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setIntArrayUniform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shader` | [clay.GpuShader](/api-docs/clay-native/clay/GpuShader/) |
| `location` | [GLUniformLocation](/api-docs/clay-native/clay/opengl/GLUniformLocation/) |
| `value` | [clay.buffers.Int32Array](/api-docs/clay-native/clay/buffers/Int32Array/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setFloatUniform"><code><span class="field-name">setFloatUniform</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/GpuShader/" class="type-link">clay.GpuShader</a><span class="operator">,</span> <span class="arg-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/opengl/GLUniformLocation/" class="type-link">GLUniformLocation</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFloatUniform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shader` | [clay.GpuShader](/api-docs/clay-native/clay/GpuShader/) |
| `location` | [GLUniformLocation](/api-docs/clay-native/clay/opengl/GLUniformLocation/) |
| `value` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setFloatArrayUniform"><code><span class="field-name">setFloatArrayUniform</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/GpuShader/" class="type-link">clay.GpuShader</a><span class="operator">,</span> <span class="arg-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/opengl/GLUniformLocation/" class="type-link">GLUniformLocation</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/Float32Array/" class="type-link">clay.buffers.Float32Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFloatArrayUniform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shader` | [clay.GpuShader](/api-docs/clay-native/clay/GpuShader/) |
| `location` | [GLUniformLocation](/api-docs/clay-native/clay/opengl/GLUniformLocation/) |
| `value` | [clay.buffers.Float32Array](/api-docs/clay-native/clay/buffers/Float32Array/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setVector2Uniform"><code><span class="field-name">setVector2Uniform</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/GpuShader/" class="type-link">clay.GpuShader</a><span class="operator">,</span> <span class="arg-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/opengl/GLUniformLocation/" class="type-link">GLUniformLocation</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setVector2Uniform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shader` | [clay.GpuShader](/api-docs/clay-native/clay/GpuShader/) |
| `location` | [GLUniformLocation](/api-docs/clay-native/clay/opengl/GLUniformLocation/) |
| `x` | [Float](/api-docs/clay-native/Float/) |
| `y` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setVector3Uniform"><code><span class="field-name">setVector3Uniform</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/GpuShader/" class="type-link">clay.GpuShader</a><span class="operator">,</span> <span class="arg-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/opengl/GLUniformLocation/" class="type-link">GLUniformLocation</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setVector3Uniform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shader` | [clay.GpuShader](/api-docs/clay-native/clay/GpuShader/) |
| `location` | [GLUniformLocation](/api-docs/clay-native/clay/opengl/GLUniformLocation/) |
| `x` | [Float](/api-docs/clay-native/Float/) |
| `y` | [Float](/api-docs/clay-native/Float/) |
| `z` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setVector4Uniform"><code><span class="field-name">setVector4Uniform</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/GpuShader/" class="type-link">clay.GpuShader</a><span class="operator">,</span> <span class="arg-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/opengl/GLUniformLocation/" class="type-link">GLUniformLocation</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">w</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setVector4Uniform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shader` | [clay.GpuShader](/api-docs/clay-native/clay/GpuShader/) |
| `location` | [GLUniformLocation](/api-docs/clay-native/clay/opengl/GLUniformLocation/) |
| `x` | [Float](/api-docs/clay-native/Float/) |
| `y` | [Float](/api-docs/clay-native/Float/) |
| `z` | [Float](/api-docs/clay-native/Float/) |
| `w` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setColorUniform"><code><span class="field-name">setColorUniform</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/GpuShader/" class="type-link">clay.GpuShader</a><span class="operator">,</span> <span class="arg-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/opengl/GLUniformLocation/" class="type-link">GLUniformLocation</a><span class="operator">,</span> <span class="arg-name">r</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">g</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setColorUniform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shader` | [clay.GpuShader](/api-docs/clay-native/clay/GpuShader/) |
| `location` | [GLUniformLocation](/api-docs/clay-native/clay/opengl/GLUniformLocation/) |
| `r` | [Float](/api-docs/clay-native/Float/) |
| `g` | [Float](/api-docs/clay-native/Float/) |
| `b` | [Float](/api-docs/clay-native/Float/) |
| `a` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setMatrix4Uniform"><code><span class="field-name">setMatrix4Uniform</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/GpuShader/" class="type-link">clay.GpuShader</a><span class="operator">,</span> <span class="arg-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/opengl/GLUniformLocation/" class="type-link">GLUniformLocation</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/Float32Array/" class="type-link">clay.buffers.Float32Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setMatrix4Uniform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shader` | [clay.GpuShader](/api-docs/clay-native/clay/GpuShader/) |
| `location` | [GLUniformLocation](/api-docs/clay-native/clay/opengl/GLUniformLocation/) |
| `value` | [clay.buffers.Float32Array](/api-docs/clay-native/clay/buffers/Float32Array/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setTexture2dUniform"><code><span class="field-name">setTexture2dUniform</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/GpuShader/" class="type-link">clay.GpuShader</a><span class="operator">,</span> <span class="arg-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/opengl/GLUniformLocation/" class="type-link">GLUniformLocation</a><span class="operator">,</span> <span class="arg-name">slot</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/TextureId/" class="type-link">clay.TextureId</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTexture2dUniform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shader` | [clay.GpuShader](/api-docs/clay-native/clay/GpuShader/) |
| `location` | [GLUniformLocation](/api-docs/clay-native/clay/opengl/GLUniformLocation/) |
| `slot` | [Int](/api-docs/clay-native/Int/) |
| `texture` | [clay.TextureId](/api-docs/clay-native/clay/TextureId/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setBlendFuncSeparate"><code><span class="field-name">setBlendFuncSeparate</span><span class="parenthesis">(</span><span class="arg-name">srcRgb</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/BlendMode/" class="type-link">clay.BlendMode</a><span class="operator">,</span> <span class="arg-name">dstRgb</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/BlendMode/" class="type-link">clay.BlendMode</a><span class="operator">,</span> <span class="arg-name">srcAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/BlendMode/" class="type-link">clay.BlendMode</a><span class="operator">,</span> <span class="arg-name">dstAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/BlendMode/" class="type-link">clay.BlendMode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setBlendFuncSeparate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `srcRgb` | [clay.BlendMode](/api-docs/clay-native/clay/BlendMode/) |
| `dstRgb` | [clay.BlendMode](/api-docs/clay-native/clay/BlendMode/) |
| `srcAlpha` | [clay.BlendMode](/api-docs/clay-native/clay/BlendMode/) |
| `dstAlpha` | [clay.BlendMode](/api-docs/clay-native/clay/BlendMode/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ensureNoError"><code><span class="field-name">ensureNoError</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ensureNoError"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description" id="DEPTH24_STENCIL8"><code><span class="field-name">DEPTH24_STENCIL8</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DEPTH24_STENCIL8"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DEPTH_COMPONENT24"><code><span class="field-name">DEPTH_COMPONENT24</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DEPTH_COMPONENT24"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE_2D_MULTISAMPLE"><code><span class="field-name">TEXTURE_2D_MULTISAMPLE</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE_2D_MULTISAMPLE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="READ_FRAMEBUFFER"><code><span class="field-name">READ_FRAMEBUFFER</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#READ_FRAMEBUFFER"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DRAW_FRAMEBUFFER"><code><span class="field-name">DRAW_FRAMEBUFFER</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DRAW_FRAMEBUFFER"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="RGBA8"><code><span class="field-name">RGBA8</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#RGBA8"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="COLOR"><code><span class="field-name">COLOR</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#COLOR"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="clearBufferForBlitValues"><code><span class="field-name">clearBufferForBlitValues</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/Float32Array/" class="type-link">clay.buffers.Float32Array</a></code><a class="header-anchor" href="#clearBufferForBlitValues"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="setup"><code><span class="field-name">setup</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

