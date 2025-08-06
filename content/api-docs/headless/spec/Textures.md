---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spec
title: Textures
target: Headless
permalink: api-docs/headless/spec/Textures/
---

# Textures

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/spec/Textures.hx">View source</a></div>

<div class="type-hierarchy"><strong>spec.Textures</strong> (Interface) → <a href="/api-docs/headless/backend/Textures/">backend.Textures</a></div>

Backend interface for texture (image) management and GPU operations.

This interface handles loading images, creating textures, managing GPU texture
memory, and configuring texture properties. Textures are the primary way to
display images and render targets in Ceramic.

Textures can be created from:
- Image files (PNG, JPEG, etc.)
- Raw pixel data
- Render targets for off-screen rendering

The interface supports various texture operations including filtering modes,
wrapping modes, pixel access, and PNG export.

## Instance Members

<div class="signature field-method has-description" id="load"><code><span class="field-name">load</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/backend/LoadTextureOptions/" class="type-link">backend.LoadTextureOptions</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#load"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Loads a texture from an image file.

Supported formats depend on the backend but typically include PNG, JPEG,
and sometimes GIF or WebP. The image is uploaded to GPU memory as a texture.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `path` | [String](/api-docs/headless/String/) | | The path to the image file (relative to assets)  |
| `options` | [Null](/api-docs/headless/Null/)<[backend.LoadTextureOptions](/api-docs/headless/backend/LoadTextureOptions/)> | *(optional)* | Optional loading configuration (filtering, density, etc.)  |
| `done` | Function | | Callback invoked with the loaded texture or null on failure |

<hr class="field-separator" />

<div class="signature field-method has-description" id="loadFromBytes"><code><span class="field-name">loadFromBytes</span><span class="parenthesis">(</span><span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a><span class="operator">,</span> <span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/ImageType/" class="type-link">ceramic.ImageType</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/backend/LoadTextureOptions/" class="type-link">backend.LoadTextureOptions</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#loadFromBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a texture from image data in memory.

This allows creating textures from downloaded or generated image data
without writing to disk first.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `bytes` | [haxe.io.Bytes](/api-docs/headless/haxe/io/Bytes/) | | The raw image file data  |
| `type` | [ceramic.ImageType](/api-docs/headless/ceramic/ImageType/) | | The image format (PNG, JPEG, etc.)  |
| `options` | [Null](/api-docs/headless/Null/)<[backend.LoadTextureOptions](/api-docs/headless/backend/LoadTextureOptions/)> | *(optional)* | Optional loading configuration  |
| `done` | Function | | Callback invoked with the created texture or null on failure |

<hr class="field-separator" />

<div class="signature field-method has-description" id="supportsHotReloadPath"><code><span class="field-name">supportsHotReloadPath</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#supportsHotReloadPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if the backend supports hot-reloading of texture files.

When true, textures can include a `?hot=timestamp` query parameter to
bypass caching and force reloading when the image changes during development.


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if hot-reload paths are supported, false otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createTexture"><code><span class="field-name">createTexture</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pixels</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/UInt8Array/" class="type-link">ceramic.UInt8Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Texture/" class="type-link">backend.Texture</a></code><a class="header-anchor" href="#createTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a texture from raw pixel data.

Pixels should be provided as RGBA bytes (4 bytes per pixel) in row-major order.
The texture is immediately uploaded to GPU memory.



| Name | Type | Description |
|------|------|-------------|
| `width` | [Int](/api-docs/headless/Int/) | The texture width in pixels  |
| `height` | [Int](/api-docs/headless/Int/) | The texture height in pixels  |
| `pixels` | [ceramic.UInt8Array](/api-docs/headless/ceramic/UInt8Array/) | The raw RGBA pixel data (width * height * 4 bytes)  |

| Returns | Description |
|---------|-------------|
| [backend.Texture](/api-docs/headless/backend/Texture/) | The created texture |

<hr class="field-separator" />

<div class="signature field-method has-description" id="destroyTexture"><code><span class="field-name">destroyTexture</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Texture/" class="type-link">backend.Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroyTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Destroys a texture and frees its GPU memory.

After calling this, the texture should not be used for rendering.
This is automatically called when a Texture object is destroyed.



| Name | Type | Description |
|------|------|-------------|
| `texture` | [backend.Texture](/api-docs/headless/backend/Texture/) | The texture to destroy |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getTextureId"><code><span class="field-name">getTextureId</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Texture/" class="type-link">backend.Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/backend/TextureId/" class="type-link">backend.TextureId</a></code><a class="header-anchor" href="#getTextureId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the unique identifier for a texture.

This ID is used internally for texture state tracking and batching.



| Name | Type | Description |
|------|------|-------------|
| `texture` | [backend.Texture](/api-docs/headless/backend/Texture/) | The texture to query  |

| Returns | Description |
|---------|-------------|
| [backend.TextureId](/api-docs/headless/backend/TextureId/) | The texture's unique identifier |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getTextureWidth"><code><span class="field-name">getTextureWidth</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Texture/" class="type-link">backend.Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getTextureWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the logical width of a texture.

This is the usable width, which may be smaller than the actual GPU texture
if the backend uses power-of-two padding.



| Name | Type | Description |
|------|------|-------------|
| `texture` | [backend.Texture](/api-docs/headless/backend/Texture/) | The texture to query  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/headless/Int/) | The logical width in pixels |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getTextureHeight"><code><span class="field-name">getTextureHeight</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Texture/" class="type-link">backend.Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getTextureHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the logical height of a texture.

This is the usable height, which may be smaller than the actual GPU texture
if the backend uses power-of-two padding.



| Name | Type | Description |
|------|------|-------------|
| `texture` | [backend.Texture](/api-docs/headless/backend/Texture/) | The texture to query  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/headless/Int/) | The logical height in pixels |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getTextureWidthActual"><code><span class="field-name">getTextureWidthActual</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Texture/" class="type-link">backend.Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getTextureWidthActual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the actual GPU texture width.

This may be larger than the logical width if the backend pads textures
to power-of-two dimensions for older GPU compatibility.



| Name | Type | Description |
|------|------|-------------|
| `texture` | [backend.Texture](/api-docs/headless/backend/Texture/) | The texture to query  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/headless/Int/) | The actual GPU texture width in pixels |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getTextureHeightActual"><code><span class="field-name">getTextureHeightActual</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Texture/" class="type-link">backend.Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getTextureHeightActual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the actual GPU texture height.

This may be larger than the logical height if the backend pads textures
to power-of-two dimensions for older GPU compatibility.



| Name | Type | Description |
|------|------|-------------|
| `texture` | [backend.Texture](/api-docs/headless/backend/Texture/) | The texture to query  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/headless/Int/) | The actual GPU texture height in pixels |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fetchTexturePixels"><code><span class="field-name">fetchTexturePixels</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Texture/" class="type-link">backend.Texture</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">result</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/UInt8Array/" class="type-link">ceramic.UInt8Array</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/UInt8Array/" class="type-link">ceramic.UInt8Array</a></code><a class="header-anchor" href="#fetchTexturePixels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fetches pixel data from a texture.

This downloads the texture from GPU memory to CPU memory. The operation
may be slow and should be used sparingly. Pixels are returned as RGBA bytes.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `texture` | [backend.Texture](/api-docs/headless/backend/Texture/) | | The texture to read from  |
| `result` | [Null](/api-docs/headless/Null/)<[ceramic.UInt8Array](/api-docs/headless/ceramic/UInt8Array/)> | *(optional)* | Optional array to store results (must be width*height*4 bytes)  |

| Returns | Description |
|---------|-------------|
| [ceramic.UInt8Array](/api-docs/headless/ceramic/UInt8Array/) | Array containing RGBA pixel data |

<hr class="field-separator" />

<div class="signature field-method has-description" id="submitTexturePixels"><code><span class="field-name">submitTexturePixels</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Texture/" class="type-link">backend.Texture</a><span class="operator">,</span> <span class="arg-name">pixels</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/UInt8Array/" class="type-link">ceramic.UInt8Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#submitTexturePixels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates a texture with new pixel data.

This uploads new pixel data to an existing texture on the GPU.
The pixel array must match the texture's dimensions (width*height*4 bytes).



| Name | Type | Description |
|------|------|-------------|
| `texture` | [backend.Texture](/api-docs/headless/backend/Texture/) | The texture to update  |
| `pixels` | [ceramic.UInt8Array](/api-docs/headless/ceramic/UInt8Array/) | The new RGBA pixel data |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setTextureFilter"><code><span class="field-name">setTextureFilter</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Texture/" class="type-link">backend.Texture</a><span class="operator">,</span> <span class="arg-name">filter</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTextureFilter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the filtering mode for a texture.

Filtering determines how pixels are sampled when the texture is scaled:
- LINEAR: Smooth interpolation (good for photos)
- NEAREST: No interpolation (good for pixel art)



| Name | Type | Description |
|------|------|-------------|
| `texture` | [backend.Texture](/api-docs/headless/backend/Texture/) | The texture to configure  |
| `filter` | Anonymous | The filtering mode to apply |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setTextureWrapS"><code><span class="field-name">setTextureWrapS</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Texture/" class="type-link">backend.Texture</a><span class="operator">,</span> <span class="arg-name">wrap</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/TextureWrap/" class="type-link">ceramic.TextureWrap</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTextureWrapS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the horizontal (S/U axis) wrapping mode for a texture.

Wrapping determines what happens when texture coordinates exceed 0-1:
- CLAMP: Clamps to edge pixels
- REPEAT: Tiles the texture
- MIRROR: Tiles with alternating mirrored copies



| Name | Type | Description |
|------|------|-------------|
| `texture` | [backend.Texture](/api-docs/headless/backend/Texture/) | The texture to configure  |
| `wrap` | [ceramic.TextureWrap](/api-docs/headless/ceramic/TextureWrap/) | The wrapping mode for the S (horizontal) axis |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setTextureWrapT"><code><span class="field-name">setTextureWrapT</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Texture/" class="type-link">backend.Texture</a><span class="operator">,</span> <span class="arg-name">wrap</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/TextureWrap/" class="type-link">ceramic.TextureWrap</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTextureWrapT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the vertical (T/V axis) wrapping mode for a texture.

Wrapping determines what happens when texture coordinates exceed 0-1:
- CLAMP: Clamps to edge pixels
- REPEAT: Tiles the texture
- MIRROR: Tiles with alternating mirrored copies



| Name | Type | Description |
|------|------|-------------|
| `texture` | [backend.Texture](/api-docs/headless/backend/Texture/) | The texture to configure  |
| `wrap` | [ceramic.TextureWrap](/api-docs/headless/ceramic/TextureWrap/) | The wrapping mode for the T (vertical) axis |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createRenderTarget"><code><span class="field-name">createRenderTarget</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">depth</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">stencil</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">antialiasing</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Texture/" class="type-link">backend.Texture</a></code><a class="header-anchor" href="#createRenderTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a render target texture for off-screen rendering.

Render targets allow rendering to a texture instead of the screen.
This is used for post-processing effects, render-to-texture, and more.



| Name | Type | Description |
|------|------|-------------|
| `width` | [Int](/api-docs/headless/Int/) | The render target width in pixels  |
| `height` | [Int](/api-docs/headless/Int/) | The render target height in pixels  |
| `depth` | [Bool](/api-docs/headless/Bool/) | Whether to include a depth buffer  |
| `stencil` | [Bool](/api-docs/headless/Bool/) | Whether to include a stencil buffer  |
| `antialiasing` | [Int](/api-docs/headless/Int/) | MSAA sample count (0 or 1 for no antialiasing)  |

| Returns | Description |
|---------|-------------|
| [backend.Texture](/api-docs/headless/backend/Texture/) | The created render target texture |

<hr class="field-separator" />

<div class="signature field-method has-description" id="maxTexturesByBatch"><code><span class="field-name">maxTexturesByBatch</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#maxTexturesByBatch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the maximum number of textures that can be used in a single draw call.

If this returns a value above 1, the backend supports multi-texture batching,
which can significantly improve performance by reducing draw calls.


| Returns | Description |
|---------|-------------|
| [Int](/api-docs/headless/Int/) | Maximum textures per batch (1 if multi-texturing is not supported) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getTextureIndex"><code><span class="field-name">getTextureIndex</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Texture/" class="type-link">backend.Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getTextureIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the texture slot index for multi-texture batching.

When using multi-texture batching, each texture is assigned to a slot
(0 to maxTexturesByBatch-1). This index is used in shader texture arrays.



| Name | Type | Description |
|------|------|-------------|
| `texture` | [backend.Texture](/api-docs/headless/backend/Texture/) | The texture to query  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/headless/Int/) | The texture's slot index for the current batch |

<hr class="field-separator" />

<div class="signature field-method has-description" id="textureToPng"><code><span class="field-name">textureToPng</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Texture/" class="type-link">backend.Texture</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">reversePremultiplyAlpha</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#textureToPng"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Exports a texture to PNG format.

This is useful for debugging, screenshots, or saving generated textures.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `texture` | [backend.Texture](/api-docs/headless/backend/Texture/) | | The texture to export  |
| `reversePremultiplyAlpha` | [Bool](/api-docs/headless/Bool/) | `true` | Whether to reverse premultiplied alpha (usually true)  |
| `path` | [String](/api-docs/headless/String/) | *(optional)* | Optional file path to save the PNG  |
| `done` | Function | | Callback with PNG data bytes (null on error) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="pixelsToPng"><code><span class="field-name">pixelsToPng</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pixels</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/UInt8Array/" class="type-link">ceramic.UInt8Array</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pixelsToPng"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts raw pixel data to PNG format.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `width` | [Int](/api-docs/headless/Int/) | | Image width in pixels  |
| `height` | [Int](/api-docs/headless/Int/) | | Image height in pixels  |
| `pixels` | [ceramic.UInt8Array](/api-docs/headless/ceramic/UInt8Array/) | | RGBA pixel data (width * height * 4 bytes)  |
| `path` | [String](/api-docs/headless/String/) | *(optional)* | Optional file path to save the PNG  |
| `done` | Function | | Callback with PNG data bytes (null on error) |

