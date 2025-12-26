---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: GLGraphicsDriver
target: Clay (Web)
permalink: api-docs/clay-web/clay/opengl/GLGraphicsDriver/
---

# GLGraphicsDriver

<div class="view-source"><a href="https://github.com/ceramic-engine/clay/blob/master/src-opengl/clay/opengl/GLGraphicsDriver.hx">View source</a></div>

<div class="type-hierarchy"><strong>clay.opengl.GLGraphicsDriver</strong> (Class)</div>

OpenGL implementation of the cross-platform graphics driver interface.

This class provides instance methods for GPU resource management including
textures, shaders, render targets, and framebuffer operations. It serves
as the OpenGL backend for Clay's graphics abstraction layer.

The API is designed to be cross-platform, allowing other graphics backends
(D3D12, Metal, Vulkan) to implement equivalent functionality via spec.GraphicsDriver.

Key features:
- Texture creation, binding, and management
- Shader compilation and uniform management
- Render target creation for off-screen rendering
- Framebuffer and renderbuffer management
- Blending and viewport configuration

Access via Clay.app.graphics.

## Instance Members

<div class="signature field-var has-description" id="noTexture"><code><span class="field-name">noTexture</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/TextureId/" class="type-link">clay.TextureId</a></code><a class="header-anchor" href="#noTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sentinel value representing no texture bound.

<hr class="field-separator" />

<div class="signature field-var has-description" id="noFramebuffer"><code><span class="field-name">noFramebuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/Framebuffer/" class="type-link">clay.Framebuffer</a></code><a class="header-anchor" href="#noFramebuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sentinel value representing the default framebuffer.

<hr class="field-separator" />

<div class="signature field-var has-description" id="noRenderbuffer"><code><span class="field-name">noRenderbuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/Renderbuffer/" class="type-link">clay.Renderbuffer</a></code><a class="header-anchor" href="#noRenderbuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sentinel value representing the default renderbuffer.

<hr class="field-separator" />

<div class="signature field-var has-description" id="noShader"><code><span class="field-name">noShader</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/ShaderHandle/" class="type-link">clay.ShaderHandle</a></code><a class="header-anchor" href="#noShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sentinel value representing no shader handle.

<hr class="field-separator" />

<div class="signature field-var has-description" id="noProgram"><code><span class="field-name">noProgram</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/ProgramHandle/" class="type-link">clay.ProgramHandle</a></code><a class="header-anchor" href="#noProgram"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sentinel value representing no program handle.

<hr class="field-separator" />

<div class="signature field-var has-description" id="noLocation"><code><span class="field-name">noLocation</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/UniformLocation/" class="type-link">clay.UniformLocation</a></code><a class="header-anchor" href="#noLocation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sentinel value representing an invalid uniform location.

<hr class="field-separator" />

<div class="signature field-var has-description" id="noBuffer"><code><span class="field-name">noBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/BufferHandle/" class="type-link">clay.BufferHandle</a></code><a class="header-anchor" href="#noBuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sentinel value representing no buffer bound.

<hr class="field-separator" />

<div class="signature field-method has-description" id="setup"><code><span class="field-name">setup</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initializes the graphics driver after the graphics context is ready.

This must be called once after the window and graphics context are created.
Fetches default framebuffer and renderbuffer bindings from the platform.

<hr class="field-separator" />

<div class="signature field-method has-description" id="getMaxTextureSize"><code><span class="field-name">getMaxTextureSize</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getMaxTextureSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the maximum texture size supported by the GPU.


| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-web/Int/) | Maximum texture dimension in pixels |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getMaxTextureUnits"><code><span class="field-name">getMaxTextureUnits</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getMaxTextureUnits"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the maximum number of texture units available.


| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-web/Int/) | Maximum number of texture units (capped at 32) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="testShaderCompilationLimit"><code><span class="field-name">testShaderCompilationLimit</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">maxIfs</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">32</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#testShaderCompilationLimit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tests the maximum number of if-statements supported in fragment shaders.

This is used for multi-texture batching optimization, which requires
conditional texture sampling based on texture ID per vertex.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `maxIfs` | [Int](/api-docs/clay-web/Int/) | `32` | Starting maximum to test (halves on failure until working)  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-web/Int/) | Maximum number of if-statements supported |

<hr class="field-separator" />

<div class="signature field-method has-description" id="loadExtensions"><code><span class="field-name">loadExtensions</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#loadExtensions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Loads platform-specific graphics extensions.

On WebGL, this loads extensions like OES_standard_derivatives
that provide additional shader functionality.

<hr class="field-separator" />

<div class="signature field-method has-description" id="readPixels"><code><span class="field-name">readPixels</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pixels</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/buffers/Uint8Array/" class="type-link">clay.buffers.Uint8Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#readPixels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads pixels from the current framebuffer.

The pixels are read in RGBA format with unsigned bytes (0-255).
The buffer must be large enough to hold width * height * 4 bytes.



| Name | Type | Description |
|------|------|-------------|
| `x` | [Int](/api-docs/clay-web/Int/) | X position to start reading  |
| `y` | [Int](/api-docs/clay-web/Int/) | Y position to start reading  |
| `width` | [Int](/api-docs/clay-web/Int/) | Width of the rectangle to read  |
| `height` | [Int](/api-docs/clay-web/Int/) | Height of the rectangle to read  |
| `pixels` | [clay.buffers.Uint8Array](/api-docs/clay-web/clay/buffers/Uint8Array/) | Buffer to store RGBA pixel data |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clear"><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="arg-name">r</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">g</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">clearDepth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clears the current render buffer.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `r` | [Float](/api-docs/clay-web/Float/) | | Red component of clear color (0.0 to 1.0)  |
| `g` | [Float](/api-docs/clay-web/Float/) | | Green component of clear color (0.0 to 1.0)  |
| `b` | [Float](/api-docs/clay-web/Float/) | | Blue component of clear color (0.0 to 1.0)  |
| `a` | [Float](/api-docs/clay-web/Float/) | | Alpha component of clear color (0.0 to 1.0)  |
| `clearDepth` | [Bool](/api-docs/clay-web/Bool/) | `true` | Whether to also clear the depth buffer (default: true) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setViewport"><code><span class="field-name">setViewport</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setViewport"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the viewport dimensions.



| Name | Type | Description |
|------|------|-------------|
| `x` | [Int](/api-docs/clay-web/Int/) | Left edge of viewport  |
| `y` | [Int](/api-docs/clay-web/Int/) | Bottom edge of viewport  |
| `width` | [Int](/api-docs/clay-web/Int/) | Viewport width in pixels  |
| `height` | [Int](/api-docs/clay-web/Int/) | Viewport height in pixels |

<hr class="field-separator" />

<div class="signature field-method has-description" id="enableBlending"><code><span class="field-name">enableBlending</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#enableBlending"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enables alpha blending for subsequent draw operations.

<hr class="field-separator" />

<div class="signature field-method has-description" id="disableBlending"><code><span class="field-name">disableBlending</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#disableBlending"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Disables alpha blending for subsequent draw operations.

<hr class="field-separator" />

<div class="signature field-method has-description" id="setBlendFuncSeparate"><code><span class="field-name">setBlendFuncSeparate</span><span class="parenthesis">(</span><span class="arg-name">srcRgb</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/BlendMode/" class="type-link">clay.BlendMode</a><span class="operator">,</span> <span class="arg-name">dstRgb</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/BlendMode/" class="type-link">clay.BlendMode</a><span class="operator">,</span> <span class="arg-name">srcAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/BlendMode/" class="type-link">clay.BlendMode</a><span class="operator">,</span> <span class="arg-name">dstAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/BlendMode/" class="type-link">clay.BlendMode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setBlendFuncSeparate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets separate blend functions for RGB and alpha channels.



| Name | Type | Description |
|------|------|-------------|
| `srcRgb` | [clay.BlendMode](/api-docs/clay-web/clay/BlendMode/) | Source blend factor for RGB channels  |
| `dstRgb` | [clay.BlendMode](/api-docs/clay-web/clay/BlendMode/) | Destination blend factor for RGB channels  |
| `srcAlpha` | [clay.BlendMode](/api-docs/clay-web/clay/BlendMode/) | Source blend factor for alpha channel  |
| `dstAlpha` | [clay.BlendMode](/api-docs/clay-web/clay/BlendMode/) | Destination blend factor for alpha channel |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createTextureId"><code><span class="field-name">createTextureId</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/TextureId/" class="type-link">clay.TextureId</a></code><a class="header-anchor" href="#createTextureId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new texture and returns its identifier.


| Returns | Description |
|---------|-------------|
| [clay.TextureId](/api-docs/clay-web/clay/TextureId/) | New texture identifier |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deleteTexture"><code><span class="field-name">deleteTexture</span><span class="parenthesis">(</span><span class="arg-name">textureId</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/TextureId/" class="type-link">clay.TextureId</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#deleteTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Deletes a texture from the GPU.



| Name | Type | Description |
|------|------|-------------|
| `textureId` | [clay.TextureId](/api-docs/clay-web/clay/TextureId/) | Texture identifier to delete |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setActiveTexture"><code><span class="field-name">setActiveTexture</span><span class="parenthesis">(</span><span class="arg-name">slot</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setActiveTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the active texture slot for subsequent texture operations.



| Name | Type | Description |
|------|------|-------------|
| `slot` | [Int](/api-docs/clay-web/Int/) | Texture slot index (0-based) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="bindTexture2d"><code><span class="field-name">bindTexture2d</span><span class="parenthesis">(</span><span class="arg-name">textureId</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/TextureId/" class="type-link">clay.TextureId</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindTexture2d"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Binds a 2D texture to the current texture slot.



| Name | Type | Description |
|------|------|-------------|
| `textureId` | [clay.TextureId](/api-docs/clay-web/clay/TextureId/) | Texture identifier to bind, or noTexture to unbind |

<hr class="field-separator" />

<div class="signature field-method has-description" id="maxTextureSize"><code><span class="field-name">maxTextureSize</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#maxTextureSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the maximum texture size supported by the GPU.


| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-web/Int/) | Maximum texture dimension in pixels |

<hr class="field-separator" />

<div class="signature field-method has-description" id="needsPreprocessedPremultipliedAlpha"><code><span class="field-name">needsPreprocessedPremultipliedAlpha</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#needsPreprocessedPremultipliedAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if premultiplied textures require pixel preprocessing.


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | True if preprocessing is needed, false if handled by GL |

<hr class="field-separator" />

<div class="signature field-method has-description" id="submitTexture2dPixels"><code><span class="field-name">submitTexture2dPixels</span><span class="parenthesis">(</span><span class="arg-name">level</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/TextureFormat/" class="type-link">clay.TextureFormat</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dataType</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/TextureDataType/" class="type-link">clay.TextureDataType</a><span class="operator">,</span> <span class="arg-name">pixels</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/buffers/Uint8Array/" class="type-link">clay.buffers.Uint8Array</a><span class="operator">,</span> <span class="arg-name">premultipliedAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#submitTexture2dPixels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Submits 2D texture pixels to the GPU.



| Name | Type | Description |
|------|------|-------------|
| `level` | [Int](/api-docs/clay-web/Int/) | Mipmap level (0 = base image)  |
| `format` | [clay.TextureFormat](/api-docs/clay-web/clay/TextureFormat/) | Texture format (RGB or RGBA)  |
| `width` | [Int](/api-docs/clay-web/Int/) | Texture width in pixels  |
| `height` | [Int](/api-docs/clay-web/Int/) | Texture height in pixels  |
| `dataType` | [clay.TextureDataType](/api-docs/clay-web/clay/TextureDataType/) | Data type of pixel data (UNSIGNED_BYTE)  |
| `pixels` | [clay.buffers.Uint8Array](/api-docs/clay-web/clay/buffers/Uint8Array/) | Pixel data buffer  |
| `premultipliedAlpha` | [Bool](/api-docs/clay-web/Bool/) | Whether pixels use premultiplied alpha |

<hr class="field-separator" />

<div class="signature field-method has-description" id="submitCompressedTexture2dPixels"><code><span class="field-name">submitCompressedTexture2dPixels</span><span class="parenthesis">(</span><span class="arg-name">level</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/TextureFormat/" class="type-link">clay.TextureFormat</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pixels</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/buffers/Uint8Array/" class="type-link">clay.buffers.Uint8Array</a><span class="operator">,</span> <span class="arg-name">premultipliedAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#submitCompressedTexture2dPixels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Submits compressed 2D texture pixels to the GPU.



| Name | Type | Description |
|------|------|-------------|
| `level` | [Int](/api-docs/clay-web/Int/) | Mipmap level (0 = base image)  |
| `format` | [clay.TextureFormat](/api-docs/clay-web/clay/TextureFormat/) | Compressed texture format  |
| `width` | [Int](/api-docs/clay-web/Int/) | Texture width in pixels  |
| `height` | [Int](/api-docs/clay-web/Int/) | Texture height in pixels  |
| `pixels` | [clay.buffers.Uint8Array](/api-docs/clay-web/clay/buffers/Uint8Array/) | Compressed pixel data buffer  |
| `premultipliedAlpha` | [Bool](/api-docs/clay-web/Bool/) | Whether pixels use premultiplied alpha |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fetchTexture2dPixels"><code><span class="field-name">fetchTexture2dPixels</span><span class="parenthesis">(</span><span class="arg-name">into</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/buffers/Uint8Array/" class="type-link">clay.buffers.Uint8Array</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">w</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">h</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#fetchTexture2dPixels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fetches 2D texture pixels from the GPU.



| Name | Type | Description |
|------|------|-------------|
| `into` | [clay.buffers.Uint8Array](/api-docs/clay-web/clay/buffers/Uint8Array/) | Buffer to store pixel data (must be at least w * h * 4 bytes)  |
| `x` | [Int](/api-docs/clay-web/Int/) | X position of texture rectangle to fetch  |
| `y` | [Int](/api-docs/clay-web/Int/) | Y position of texture rectangle to fetch  |
| `w` | [Int](/api-docs/clay-web/Int/) | Width of texture rectangle to fetch  |
| `h` | [Int](/api-docs/clay-web/Int/) | Height of texture rectangle to fetch |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setTexture2dMinFilter"><code><span class="field-name">setTexture2dMinFilter</span><span class="parenthesis">(</span><span class="arg-name">minFilter</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/TextureFilter/" class="type-link">clay.TextureFilter</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTexture2dMinFilter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the minification filter for 2D textures.



| Name | Type | Description |
|------|------|-------------|
| `minFilter` | [clay.TextureFilter](/api-docs/clay-web/clay/TextureFilter/) | Filter mode (NEAREST, LINEAR, or mipmap variants) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setTexture2dMagFilter"><code><span class="field-name">setTexture2dMagFilter</span><span class="parenthesis">(</span><span class="arg-name">magFilter</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/TextureFilter/" class="type-link">clay.TextureFilter</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTexture2dMagFilter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the magnification filter for 2D textures.



| Name | Type | Description |
|------|------|-------------|
| `magFilter` | [clay.TextureFilter](/api-docs/clay-web/clay/TextureFilter/) | Filter mode (NEAREST or LINEAR) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setTexture2dWrapS"><code><span class="field-name">setTexture2dWrapS</span><span class="parenthesis">(</span><span class="arg-name">wrapS</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/TextureWrap/" class="type-link">clay.TextureWrap</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTexture2dWrapS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the horizontal (S) texture wrap mode.



| Name | Type | Description |
|------|------|-------------|
| `wrapS` | [clay.TextureWrap](/api-docs/clay-web/clay/TextureWrap/) | Wrap mode (CLAMP_TO_EDGE, REPEAT, or MIRRORED_REPEAT) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setTexture2dWrapT"><code><span class="field-name">setTexture2dWrapT</span><span class="parenthesis">(</span><span class="arg-name">wrapT</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/TextureWrap/" class="type-link">clay.TextureWrap</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTexture2dWrapT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the vertical (T) texture wrap mode.



| Name | Type | Description |
|------|------|-------------|
| `wrapT` | [clay.TextureWrap](/api-docs/clay-web/clay/TextureWrap/) | Wrap mode (CLAMP_TO_EDGE, REPEAT, or MIRRORED_REPEAT) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createFramebuffer"><code><span class="field-name">createFramebuffer</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/Framebuffer/" class="type-link">clay.Framebuffer</a></code><a class="header-anchor" href="#createFramebuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new framebuffer object.


| Returns | Description |
|---------|-------------|
| [clay.Framebuffer](/api-docs/clay-web/clay/Framebuffer/) | Created framebuffer |

<hr class="field-separator" />

<div class="signature field-method has-description" id="bindFramebuffer"><code><span class="field-name">bindFramebuffer</span><span class="parenthesis">(</span><span class="arg-name">framebuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/Framebuffer/" class="type-link">clay.Framebuffer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindFramebuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Binds a framebuffer for rendering.



| Name | Type | Description |
|------|------|-------------|
| `framebuffer` | [clay.Framebuffer](/api-docs/clay-web/clay/Framebuffer/) | Framebuffer to bind, or noFramebuffer for default |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createRenderbuffer"><code><span class="field-name">createRenderbuffer</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/Renderbuffer/" class="type-link">clay.Renderbuffer</a></code><a class="header-anchor" href="#createRenderbuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new renderbuffer object.


| Returns | Description |
|---------|-------------|
| [clay.Renderbuffer](/api-docs/clay-web/clay/Renderbuffer/) | Created renderbuffer |

<hr class="field-separator" />

<div class="signature field-method has-description" id="bindRenderbuffer"><code><span class="field-name">bindRenderbuffer</span><span class="parenthesis">(</span><span class="arg-name">renderbuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/Renderbuffer/" class="type-link">clay.Renderbuffer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindRenderbuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Binds a renderbuffer.



| Name | Type | Description |
|------|------|-------------|
| `renderbuffer` | [clay.Renderbuffer](/api-docs/clay-web/clay/Renderbuffer/) | Renderbuffer to bind, or noRenderbuffer for default |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createRenderTarget"><code><span class="field-name">createRenderTarget</span><span class="parenthesis">(</span><span class="arg-name">textureId</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/TextureId/" class="type-link">clay.TextureId</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">depth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">stencil</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">antialiasing</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">level</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/TextureFormat/" class="type-link">clay.TextureFormat</a><span class="operator">,</span> <span class="arg-name">dataType</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/TextureDataType/" class="type-link">clay.TextureDataType</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/RenderTarget/" class="type-link">clay.RenderTarget</a></code><a class="header-anchor" href="#createRenderTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a render target for off-screen rendering.



| Name | Type | Description |
|------|------|-------------|
| `textureId` | [clay.TextureId](/api-docs/clay-web/clay/TextureId/) | Texture to render into  |
| `width` | [Int](/api-docs/clay-web/Int/) | Render target width in pixels  |
| `height` | [Int](/api-docs/clay-web/Int/) | Render target height in pixels  |
| `depth` | [Bool](/api-docs/clay-web/Bool/) | Whether to include a depth buffer  |
| `stencil` | [Bool](/api-docs/clay-web/Bool/) | Whether to include a stencil buffer  |
| `antialiasing` | [Int](/api-docs/clay-web/Int/) | MSAA sample count (0 or 1 for none)  |
| `level` | [Int](/api-docs/clay-web/Int/) | Mipmap level (0 = base)  |
| `format` | [clay.TextureFormat](/api-docs/clay-web/clay/TextureFormat/) | Texture format  |
| `dataType` | [clay.TextureDataType](/api-docs/clay-web/clay/TextureDataType/) | Data type of texture  |

| Returns | Description |
|---------|-------------|
| [clay.RenderTarget](/api-docs/clay-web/clay/RenderTarget/) | Created render target |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deleteRenderTarget"><code><span class="field-name">deleteRenderTarget</span><span class="parenthesis">(</span><span class="arg-name">renderTarget</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/RenderTarget/" class="type-link">clay.RenderTarget</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#deleteRenderTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Deletes a render target from the GPU.



| Name | Type | Description |
|------|------|-------------|
| `renderTarget` | [clay.RenderTarget](/api-docs/clay-web/clay/RenderTarget/) | Render target to delete |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setRenderTarget"><code><span class="field-name">setRenderTarget</span><span class="parenthesis">(</span><span class="arg-name">renderTarget</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/RenderTarget/" class="type-link">clay.RenderTarget</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setRenderTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the render target for subsequent draw operations.



| Name | Type | Description |
|------|------|-------------|
| `renderTarget` | [clay.RenderTarget](/api-docs/clay-web/clay/RenderTarget/) | Render target to draw into, or null for main framebuffer |

<hr class="field-separator" />

<div class="signature field-method has-description" id="configureRenderTargetBuffersStorage"><code><span class="field-name">configureRenderTargetBuffersStorage</span><span class="parenthesis">(</span><span class="arg-name">renderTarget</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/RenderTarget/" class="type-link">clay.RenderTarget</a><span class="operator">,</span> <span class="arg-name">textureId</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/TextureId/" class="type-link">clay.TextureId</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">depth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">stencil</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">antialiasing</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#configureRenderTargetBuffersStorage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Configures storage for render target buffers.

Used when resizing a render target's underlying buffers.



| Name | Type | Description |
|------|------|-------------|
| `renderTarget` | [clay.RenderTarget](/api-docs/clay-web/clay/RenderTarget/) | Render target to configure  |
| `textureId` | [clay.TextureId](/api-docs/clay-web/clay/TextureId/) | Texture associated with the render target  |
| `width` | [Int](/api-docs/clay-web/Int/) | New width in pixels  |
| `height` | [Int](/api-docs/clay-web/Int/) | New height in pixels  |
| `depth` | [Bool](/api-docs/clay-web/Bool/) | Whether to include depth buffer  |
| `stencil` | [Bool](/api-docs/clay-web/Bool/) | Whether to include stencil buffer  |
| `antialiasing` | [Int](/api-docs/clay-web/Int/) | MSAA sample count |

<hr class="field-separator" />

<div class="signature field-method has-description" id="blitRenderTargetBuffers"><code><span class="field-name">blitRenderTargetBuffers</span><span class="parenthesis">(</span><span class="arg-name">renderTarget</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/RenderTarget/" class="type-link">clay.RenderTarget</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#blitRenderTargetBuffers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resolves MSAA render target buffers to the texture.

Called when switching away from an antialiased render target
to blit the multisampled content to the texture.



| Name | Type | Description |
|------|------|-------------|
| `renderTarget` | [clay.RenderTarget](/api-docs/clay-web/clay/RenderTarget/) | Render target to resolve  |
| `width` | [Int](/api-docs/clay-web/Int/) | Width of the render target  |
| `height` | [Int](/api-docs/clay-web/Int/) | Height of the render target |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createShader"><code><span class="field-name">createShader</span><span class="parenthesis">(</span><span class="arg-name">vertSource</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">fragSource</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">attributes</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">textures</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/GpuShader/" class="type-link">clay.GpuShader</a></code><a class="header-anchor" href="#createShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates and compiles a shader program.

Automatically patches GLSL version for platform compatibility:
- Desktop GL (non-ANGLE): converts `#version 300 es` to `#version 330`
- Mobile/WebGL (GLES/ANGLE): keeps `#version 300 es`



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `vertSource` | [String](/api-docs/clay-web/String/) | | Vertex shader source code  |
| `fragSource` | [String](/api-docs/clay-web/String/) | | Fragment shader source code  |
| `attributes` | [Array](/api-docs/clay-web/Array/)<[String](/api-docs/clay-web/String/)> | *(optional)* | Optional array of attribute names in binding order  |
| `textures` | [Array](/api-docs/clay-web/Array/)<[String](/api-docs/clay-web/String/)> | *(optional)* | Optional array of texture uniform names in slot order  |

| Returns | Description |
|---------|-------------|
| [clay.GpuShader](/api-docs/clay-web/clay/GpuShader/) | Compiled shader, or null on failure |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deleteShader"><code><span class="field-name">deleteShader</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/GpuShader/" class="type-link">clay.GpuShader</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#deleteShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Deletes a shader program from the GPU.



| Name | Type | Description |
|------|------|-------------|
| `shader` | [clay.GpuShader](/api-docs/clay-web/clay/GpuShader/) | Shader program to delete |

<hr class="field-separator" />

<div class="signature field-method has-description" id="useShader"><code><span class="field-name">useShader</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/GpuShader/" class="type-link">clay.GpuShader</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#useShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Activates a shader program for subsequent draw operations.



| Name | Type | Description |
|------|------|-------------|
| `shader` | [clay.GpuShader](/api-docs/clay-web/clay/GpuShader/) | Shader program to use |

<hr class="field-separator" />

<div class="signature field-method has-description" id="synchronizeShaderMatrices"><code><span class="field-name">synchronizeShaderMatrices</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/GpuShader/" class="type-link">clay.GpuShader</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#synchronizeShaderMatrices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Synchronizes projectionMatrix and modelViewMatrix
with the given shader, as this is needed on some graphics backend.


| Name | Type | Description |
|------|------|-------------|
| `shader` | [clay.GpuShader](/api-docs/clay-web/clay/GpuShader/) | Shader program to synchronize |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getUniformLocation"><code><span class="field-name">getUniformLocation</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/GpuShader/" class="type-link">clay.GpuShader</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/UniformLocation/" class="type-link">clay.UniformLocation</a></code><a class="header-anchor" href="#getUniformLocation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the location of a uniform variable in a shader.



| Name | Type | Description |
|------|------|-------------|
| `shader` | [clay.GpuShader](/api-docs/clay-web/clay/GpuShader/) | Shader program  |
| `name` | [String](/api-docs/clay-web/String/) | Uniform variable name  |

| Returns | Description |
|---------|-------------|
| [clay.UniformLocation](/api-docs/clay-web/clay/UniformLocation/) | Uniform location, or noLocation if not found |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setIntUniform"><code><span class="field-name">setIntUniform</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/GpuShader/" class="type-link">clay.GpuShader</a><span class="operator">,</span> <span class="arg-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/UniformLocation/" class="type-link">clay.UniformLocation</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setIntUniform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets an integer uniform value.



| Name | Type | Description |
|------|------|-------------|
| `shader` | [clay.GpuShader](/api-docs/clay-web/clay/GpuShader/) | Shader program  |
| `location` | [clay.UniformLocation](/api-docs/clay-web/clay/UniformLocation/) | Uniform location  |
| `value` | [Int](/api-docs/clay-web/Int/) | Integer value |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setIntArrayUniform"><code><span class="field-name">setIntArrayUniform</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/GpuShader/" class="type-link">clay.GpuShader</a><span class="operator">,</span> <span class="arg-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/UniformLocation/" class="type-link">clay.UniformLocation</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/buffers/Int32Array/" class="type-link">clay.buffers.Int32Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setIntArrayUniform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets an integer array uniform value.



| Name | Type | Description |
|------|------|-------------|
| `shader` | [clay.GpuShader](/api-docs/clay-web/clay/GpuShader/) | Shader program  |
| `location` | [clay.UniformLocation](/api-docs/clay-web/clay/UniformLocation/) | Uniform location  |
| `value` | [clay.buffers.Int32Array](/api-docs/clay-web/clay/buffers/Int32Array/) | Integer array |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setFloatUniform"><code><span class="field-name">setFloatUniform</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/GpuShader/" class="type-link">clay.GpuShader</a><span class="operator">,</span> <span class="arg-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/UniformLocation/" class="type-link">clay.UniformLocation</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFloatUniform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a float uniform value.



| Name | Type | Description |
|------|------|-------------|
| `shader` | [clay.GpuShader](/api-docs/clay-web/clay/GpuShader/) | Shader program  |
| `location` | [clay.UniformLocation](/api-docs/clay-web/clay/UniformLocation/) | Uniform location  |
| `value` | [Float](/api-docs/clay-web/Float/) | Float value |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setFloatArrayUniform"><code><span class="field-name">setFloatArrayUniform</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/GpuShader/" class="type-link">clay.GpuShader</a><span class="operator">,</span> <span class="arg-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/UniformLocation/" class="type-link">clay.UniformLocation</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/buffers/Float32Array/" class="type-link">clay.buffers.Float32Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFloatArrayUniform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a float array uniform value.



| Name | Type | Description |
|------|------|-------------|
| `shader` | [clay.GpuShader](/api-docs/clay-web/clay/GpuShader/) | Shader program  |
| `location` | [clay.UniformLocation](/api-docs/clay-web/clay/UniformLocation/) | Uniform location  |
| `value` | [clay.buffers.Float32Array](/api-docs/clay-web/clay/buffers/Float32Array/) | Float array |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setVector2Uniform"><code><span class="field-name">setVector2Uniform</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/GpuShader/" class="type-link">clay.GpuShader</a><span class="operator">,</span> <span class="arg-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/UniformLocation/" class="type-link">clay.UniformLocation</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setVector2Uniform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a 2D vector uniform value.



| Name | Type | Description |
|------|------|-------------|
| `shader` | [clay.GpuShader](/api-docs/clay-web/clay/GpuShader/) | Shader program  |
| `location` | [clay.UniformLocation](/api-docs/clay-web/clay/UniformLocation/) | Uniform location  |
| `x` | [Float](/api-docs/clay-web/Float/) | X component  |
| `y` | [Float](/api-docs/clay-web/Float/) | Y component |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setVector3Uniform"><code><span class="field-name">setVector3Uniform</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/GpuShader/" class="type-link">clay.GpuShader</a><span class="operator">,</span> <span class="arg-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/UniformLocation/" class="type-link">clay.UniformLocation</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setVector3Uniform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a 3D vector uniform value.



| Name | Type | Description |
|------|------|-------------|
| `shader` | [clay.GpuShader](/api-docs/clay-web/clay/GpuShader/) | Shader program  |
| `location` | [clay.UniformLocation](/api-docs/clay-web/clay/UniformLocation/) | Uniform location  |
| `x` | [Float](/api-docs/clay-web/Float/) | X component  |
| `y` | [Float](/api-docs/clay-web/Float/) | Y component  |
| `z` | [Float](/api-docs/clay-web/Float/) | Z component |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setVector4Uniform"><code><span class="field-name">setVector4Uniform</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/GpuShader/" class="type-link">clay.GpuShader</a><span class="operator">,</span> <span class="arg-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/UniformLocation/" class="type-link">clay.UniformLocation</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">w</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setVector4Uniform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a 4D vector uniform value.



| Name | Type | Description |
|------|------|-------------|
| `shader` | [clay.GpuShader](/api-docs/clay-web/clay/GpuShader/) | Shader program  |
| `location` | [clay.UniformLocation](/api-docs/clay-web/clay/UniformLocation/) | Uniform location  |
| `x` | [Float](/api-docs/clay-web/Float/) | X component  |
| `y` | [Float](/api-docs/clay-web/Float/) | Y component  |
| `z` | [Float](/api-docs/clay-web/Float/) | Z component  |
| `w` | [Float](/api-docs/clay-web/Float/) | W component |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setMatrix2Uniform"><code><span class="field-name">setMatrix2Uniform</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/GpuShader/" class="type-link">clay.GpuShader</a><span class="operator">,</span> <span class="arg-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/UniformLocation/" class="type-link">clay.UniformLocation</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/buffers/Float32Array/" class="type-link">clay.buffers.Float32Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setMatrix2Uniform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a 2x2 matrix uniform value.



| Name | Type | Description |
|------|------|-------------|
| `shader` | [clay.GpuShader](/api-docs/clay-web/clay/GpuShader/) | Shader program  |
| `location` | [clay.UniformLocation](/api-docs/clay-web/clay/UniformLocation/) | Uniform location  |
| `value` | [clay.buffers.Float32Array](/api-docs/clay-web/clay/buffers/Float32Array/) | Matrix as Float32Array (4 elements, column-major) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setMatrix3Uniform"><code><span class="field-name">setMatrix3Uniform</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/GpuShader/" class="type-link">clay.GpuShader</a><span class="operator">,</span> <span class="arg-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/UniformLocation/" class="type-link">clay.UniformLocation</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/buffers/Float32Array/" class="type-link">clay.buffers.Float32Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setMatrix3Uniform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a 3x3 matrix uniform value.



| Name | Type | Description |
|------|------|-------------|
| `shader` | [clay.GpuShader](/api-docs/clay-web/clay/GpuShader/) | Shader program  |
| `location` | [clay.UniformLocation](/api-docs/clay-web/clay/UniformLocation/) | Uniform location  |
| `value` | [clay.buffers.Float32Array](/api-docs/clay-web/clay/buffers/Float32Array/) | Matrix as Float32Array (9 elements, column-major) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setMatrix4Uniform"><code><span class="field-name">setMatrix4Uniform</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/GpuShader/" class="type-link">clay.GpuShader</a><span class="operator">,</span> <span class="arg-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/UniformLocation/" class="type-link">clay.UniformLocation</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/buffers/Float32Array/" class="type-link">clay.buffers.Float32Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setMatrix4Uniform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a 4x4 matrix uniform value.



| Name | Type | Description |
|------|------|-------------|
| `shader` | [clay.GpuShader](/api-docs/clay-web/clay/GpuShader/) | Shader program  |
| `location` | [clay.UniformLocation](/api-docs/clay-web/clay/UniformLocation/) | Uniform location  |
| `value` | [clay.buffers.Float32Array](/api-docs/clay-web/clay/buffers/Float32Array/) | Matrix as Float32Array (16 elements, column-major) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setTexture2dUniform"><code><span class="field-name">setTexture2dUniform</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/GpuShader/" class="type-link">clay.GpuShader</a><span class="operator">,</span> <span class="arg-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/UniformLocation/" class="type-link">clay.UniformLocation</a><span class="operator">,</span> <span class="arg-name">slot</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/TextureId/" class="type-link">clay.TextureId</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTexture2dUniform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a texture sampler uniform value.



| Name | Type | Description |
|------|------|-------------|
| `shader` | [clay.GpuShader](/api-docs/clay-web/clay/GpuShader/) | Shader program  |
| `location` | [clay.UniformLocation](/api-docs/clay-web/clay/UniformLocation/) | Uniform location  |
| `slot` | [Int](/api-docs/clay-web/Int/) | Texture slot index  |
| `texture` | [clay.TextureId](/api-docs/clay-web/clay/TextureId/) | Texture identifier to bind |

<hr class="field-separator" />

<div class="signature field-method has-description" id="ensureNoError"><code><span class="field-name">ensureNoError</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ensureNoError"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks for and throws on any pending graphics errors.

Useful for debugging graphics operations.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new OpenGL graphics driver instance.

## Private Members

<div class="signature field-var no-description" id="DEPTH24_STENCIL8"><code><span class="field-name">DEPTH24_STENCIL8</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DEPTH24_STENCIL8"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DEPTH_COMPONENT24"><code><span class="field-name">DEPTH_COMPONENT24</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DEPTH_COMPONENT24"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TEXTURE_2D_MULTISAMPLE"><code><span class="field-name">TEXTURE_2D_MULTISAMPLE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE_2D_MULTISAMPLE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="READ_FRAMEBUFFER"><code><span class="field-name">READ_FRAMEBUFFER</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#READ_FRAMEBUFFER"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DRAW_FRAMEBUFFER"><code><span class="field-name">DRAW_FRAMEBUFFER</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DRAW_FRAMEBUFFER"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="RGBA8"><code><span class="field-name">RGBA8</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#RGBA8"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="COLOR"><code><span class="field-name">COLOR</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#COLOR"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="projectionMatrix"><code><span class="field-name">projectionMatrix</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/buffers/Float32Array/" class="type-link">clay.buffers.Float32Array</a></code><a class="header-anchor" href="#projectionMatrix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="modelViewMatrix"><code><span class="field-name">modelViewMatrix</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/buffers/Float32Array/" class="type-link">clay.buffers.Float32Array</a></code><a class="header-anchor" href="#modelViewMatrix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="patchGlslVersion"><code><span class="field-name">patchGlslVersion</span><span class="parenthesis">(</span><span class="arg-name">source</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#patchGlslVersion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Patches GLSL version directive for platform compatibility.

Shade compiler outputs GLES 3.0 syntax (`#version 300 es`).
Desktop GL (non-ANGLE) requires `#version 330` instead.



| Name | Type | Description |
|------|------|-------------|
| `source` | [String](/api-docs/clay-web/String/) | Shader source code  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-web/String/) | Patched source code |

<hr class="field-separator" />

<div class="signature field-method has-description" id="linkShader"><code><span class="field-name">linkShader</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/opengl/GLGraphicsDriver_GpuShader/" class="type-link">GLGraphicsDriver_GpuShader</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">attributes</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#linkShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Links vertex and fragment shaders into a program.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `shader` | [GLGraphicsDriver_GpuShader](/api-docs/clay-web/clay/opengl/GLGraphicsDriver_GpuShader/) | | Shader object with compiled vert/frag shaders  |
| `attributes` | [Array](/api-docs/clay-web/Array/)<[String](/api-docs/clay-web/String/)> | *(optional)* | Optional array of attribute names in binding order  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | True if linking succeeded, false otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="configureShaderTextureSlots"><code><span class="field-name">configureShaderTextureSlots</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/opengl/GLGraphicsDriver_GpuShader/" class="type-link">GLGraphicsDriver_GpuShader</a><span class="operator">,</span> <span class="arg-name">textures</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#configureShaderTextureSlots"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Configures texture slot uniform bindings for a shader.



| Name | Type | Description |
|------|------|-------------|
| `shader` | [GLGraphicsDriver_GpuShader](/api-docs/clay-web/clay/opengl/GLGraphicsDriver_GpuShader/) | Shader to configure  |
| `textures` | [Array](/api-docs/clay-web/Array/)<[String](/api-docs/clay-web/String/)> | Array of texture uniform names in slot order |

<hr class="field-separator" />

<div class="signature field-method has-description" id="compileGLShader"><code><span class="field-name">compileGLShader</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">source</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/opengl/GLShader/" class="type-link">GLShader</a></code><a class="header-anchor" href="#compileGLShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compiles a single GL shader (vertex or fragment).



| Name | Type | Description |
|------|------|-------------|
| `type` | [Int](/api-docs/clay-web/Int/) | GL.VERTEX_SHADER or GL.FRAGMENT_SHADER  |
| `source` | [String](/api-docs/clay-web/String/) | GLSL source code  |

| Returns | Description |
|---------|-------------|
| [GLShader](/api-docs/clay-web/clay/opengl/GLShader/) | Compiled shader, or noShader on failure |

