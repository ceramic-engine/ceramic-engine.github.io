---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: Textures
target: Clay (Native)
permalink: api-docs/clay-native/backend/Textures/
---

# Textures

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/clay/runtime/src/backend/Textures.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.Textures</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-native/spec/Textures/">spec.Textures</a></div>

Clay backend implementation of texture management.
Handles loading, creating, and managing GPU textures with reference counting.

Features:
- Automatic texture caching and reference counting
- Support for loading from files, URLs, or raw bytes
- Render texture creation for off-screen rendering
- Texture filtering and wrapping configuration
- PNG export functionality
- Multi-texture batching support

The class maintains a cache of loaded textures to avoid duplicate loads
and uses reference counting to manage texture lifetime.

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/Texture/">ceramic.Texture</a>, <a href="/api-docs/clay-native/clay/graphics/Texture/">clay.graphics.Texture</a></div>


## Instance Members

<div class="signature field-method has-description has-plugin" id="load"><div class="plugin-name">clay</div><code><span class="field-name">load</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/backend/LoadTextureOptions/" class="type-link">LoadTextureOptions</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">_done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#load"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Loads a texture from a file path or URL.
Implements automatic caching and reference counting to avoid duplicate loads.

Features:
- Supports both local files and HTTP(S) URLs
- Automatic texture caching with reference counting
- Synchronous or asynchronous loading
- Optional alpha premultiplication
- Queues callbacks if texture is already loading



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `path` | [String](/api-docs/clay-native/String/) | | File path (relative to assets) or URL to load  |
| `options` | [Null](/api-docs/clay-native/Null/)<[LoadTextureOptions](/api-docs/clay-native/backend/LoadTextureOptions/)> | *(optional)* | Loading options (sync/async, premultiply alpha, etc.)  |
| `_done` | Function | | Callback when texture is loaded or failed (null on failure) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="loadFromBytes"><div class="plugin-name">clay</div><code><span class="field-name">loadFromBytes</span><span class="parenthesis">(</span><span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a><span class="operator">,</span> <span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ImageType/" class="type-link">ceramic.ImageType</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/backend/LoadTextureOptions/" class="type-link">LoadTextureOptions</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">_done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#loadFromBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a texture from raw image bytes.
Useful for dynamically generated images or data loaded from custom sources.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `bytes` | [haxe.io.Bytes](/api-docs/clay-native/haxe/io/Bytes/) | | Raw image data  |
| `type` | [ceramic.ImageType](/api-docs/clay-native/ceramic/ImageType/) | | Image format (PNG, JPEG, GIF)  |
| `options` | [Null](/api-docs/clay-native/Null/)<[LoadTextureOptions](/api-docs/clay-native/backend/LoadTextureOptions/)> | *(optional)* | Loading options (sync/async, premultiply alpha)  |
| `_done` | Function | | Callback when texture is created or failed (null on failure) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="supportsHotReloadPath"><div class="plugin-name">clay</div><code><span class="field-name">supportsHotReloadPath</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#supportsHotReloadPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Indicates whether hot-reloading of texture files is supported.
Clay backend supports watching texture files for changes.


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | Always returns true for Clay backend |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="createTexture"><div class="plugin-name">clay</div><code><span class="field-name">createTexture</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pixels</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/UInt8Array/" class="type-link">ceramic.UInt8Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Texture/" class="type-link">Texture</a></code><a class="header-anchor" href="#createTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a texture from raw pixel data.
The pixels should be in RGBA format with 8 bits per channel.



| Name | Type | Description |
|------|------|-------------|
| `width` | [Int](/api-docs/clay-native/Int/) | Texture width in pixels  |
| `height` | [Int](/api-docs/clay-native/Int/) | Texture height in pixels  |
| `pixels` | [ceramic.UInt8Array](/api-docs/clay-native/ceramic/UInt8Array/) | Raw RGBA pixel data (width * height * 4 bytes)  |

| Returns | Description |
|---------|-------------|
| [Texture](/api-docs/clay-native/backend/Texture/) | Created texture with reference count of 1 |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="createRenderTarget"><div class="plugin-name">clay</div><code><span class="field-name">createRenderTarget</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">depth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">stencil</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">antialiasing</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Texture/" class="type-link">Texture</a></code><a class="header-anchor" href="#createRenderTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a render texture for off-screen rendering.
Render textures can be used as drawing targets for post-processing effects.



| Name | Type | Description |
|------|------|-------------|
| `width` | [Int](/api-docs/clay-native/Int/) | Texture width in pixels  |
| `height` | [Int](/api-docs/clay-native/Int/) | Texture height in pixels  |
| `depth` | [Bool](/api-docs/clay-native/Bool/) | Whether to create a depth buffer  |
| `stencil` | [Bool](/api-docs/clay-native/Bool/) | Whether to create a stencil buffer  |
| `antialiasing` | [Int](/api-docs/clay-native/Int/) | Antialiasing samples (0 = disabled, WebGL2+ required on web)  |

| Returns | Description |
|---------|-------------|
| [Texture](/api-docs/clay-native/backend/Texture/) | Created render texture with reference count of 1 |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="fetchTexturePixels"><div class="plugin-name">clay</div><code><span class="field-name">fetchTexturePixels</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Texture/" class="type-link">Texture</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">result</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/UInt8Array/" class="type-link">ceramic.UInt8Array</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/UInt8Array/" class="type-link">ceramic.UInt8Array</a></code><a class="header-anchor" href="#fetchTexturePixels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads pixel data from a texture.
Retrieves the current pixel contents from GPU memory.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `texture` | [Texture](/api-docs/clay-native/backend/Texture/) | | The texture to read from  |
| `result` | [Null](/api-docs/clay-native/Null/)<[ceramic.UInt8Array](/api-docs/clay-native/ceramic/UInt8Array/)> | *(optional)* | Optional array to store results (created if null)  |

| Returns | Description |
|---------|-------------|
| [ceramic.UInt8Array](/api-docs/clay-native/ceramic/UInt8Array/) | Array containing RGBA pixel data |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="submitTexturePixels"><div class="plugin-name">clay</div><code><span class="field-name">submitTexturePixels</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Texture/" class="type-link">Texture</a><span class="operator">,</span> <span class="arg-name">pixels</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/UInt8Array/" class="type-link">ceramic.UInt8Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#submitTexturePixels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates texture pixels on the GPU.
Uploads new pixel data to an existing texture.



| Name | Type | Description |
|------|------|-------------|
| `texture` | [Texture](/api-docs/clay-native/backend/Texture/) | The texture to update  |
| `pixels` | [ceramic.UInt8Array](/api-docs/clay-native/ceramic/UInt8Array/) | New RGBA pixel data (must match texture dimensions) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="destroyTexture"><div class="plugin-name">clay</div><code><span class="field-name">destroyTexture</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroyTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Destroys a texture and releases GPU resources.
Decrements reference count and only destroys when count reaches zero.



| Name | Type | Description |
|------|------|-------------|
| `texture` | [Texture](/api-docs/clay-native/backend/Texture/) | The texture to destroy |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getTextureId"><div class="plugin-name">clay</div><code><span class="field-name">getTextureId</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/TextureId/" class="type-link">TextureId</a></code><a class="header-anchor" href="#getTextureId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the GPU texture ID.


| Name | Type | Description |
|------|------|-------------|
| `texture` | [Texture](/api-docs/clay-native/backend/Texture/) | The texture  |

| Returns | Description |
|---------|-------------|
| [TextureId](/api-docs/clay-native/backend/TextureId/) | OpenGL texture ID |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getTextureWidth"><div class="plugin-name">clay</div><code><span class="field-name">getTextureWidth</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getTextureWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the texture width in pixels.


| Name | Type | Description |
|------|------|-------------|
| `texture` | [Texture](/api-docs/clay-native/backend/Texture/) | The texture  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-native/Int/) | Width in pixels |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getTextureHeight"><div class="plugin-name">clay</div><code><span class="field-name">getTextureHeight</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getTextureHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the texture height in pixels.


| Name | Type | Description |
|------|------|-------------|
| `texture` | [Texture](/api-docs/clay-native/backend/Texture/) | The texture  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-native/Int/) | Height in pixels |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getTextureWidthActual"><div class="plugin-name">clay</div><code><span class="field-name">getTextureWidthActual</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getTextureWidthActual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the actual texture width on GPU (may be power of 2).


| Name | Type | Description |
|------|------|-------------|
| `texture` | [Texture](/api-docs/clay-native/backend/Texture/) | The texture  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-native/Int/) | Actual width in GPU memory |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getTextureHeightActual"><div class="plugin-name">clay</div><code><span class="field-name">getTextureHeightActual</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getTextureHeightActual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the actual texture height on GPU (may be power of 2).


| Name | Type | Description |
|------|------|-------------|
| `texture` | [Texture](/api-docs/clay-native/backend/Texture/) | The texture  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-native/Int/) | Actual height in GPU memory |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getTextureIndex"><div class="plugin-name">clay</div><code><span class="field-name">getTextureIndex</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getTextureIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the texture index for multi-texture batching.


| Name | Type | Description |
|------|------|-------------|
| `texture` | [Texture](/api-docs/clay-native/backend/Texture/) | The texture  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-native/Int/) | Texture slot index |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setTextureFilter"><div class="plugin-name">clay</div><code><span class="field-name">setTextureFilter</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Texture/" class="type-link">Texture</a><span class="operator">,</span> <span class="arg-name">filter</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTextureFilter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the texture filtering mode.
LINEAR provides smooth interpolation, NEAREST provides pixelated look.



| Name | Type | Description |
|------|------|-------------|
| `texture` | [Texture](/api-docs/clay-native/backend/Texture/) | The texture to configure  |
| `filter` | Anonymous | Filter mode (LINEAR or NEAREST) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setTextureWrapS"><div class="plugin-name">clay</div><code><span class="field-name">setTextureWrapS</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Texture/" class="type-link">Texture</a><span class="operator">,</span> <span class="arg-name">wrap</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TextureWrap/" class="type-link">ceramic.TextureWrap</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTextureWrapS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the horizontal texture wrapping mode.
Controls how the texture repeats or clamps at U coordinates outside 0-1.



| Name | Type | Description |
|------|------|-------------|
| `texture` | [Texture](/api-docs/clay-native/backend/Texture/) | The texture to configure  |
| `wrap` | [ceramic.TextureWrap](/api-docs/clay-native/ceramic/TextureWrap/) | Wrap mode (CLAMP, REPEAT, or MIRROR) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setTextureWrapT"><div class="plugin-name">clay</div><code><span class="field-name">setTextureWrapT</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Texture/" class="type-link">Texture</a><span class="operator">,</span> <span class="arg-name">wrap</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TextureWrap/" class="type-link">ceramic.TextureWrap</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTextureWrapT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the vertical texture wrapping mode.
Controls how the texture repeats or clamps at V coordinates outside 0-1.



| Name | Type | Description |
|------|------|-------------|
| `texture` | [Texture](/api-docs/clay-native/backend/Texture/) | The texture to configure  |
| `wrap` | [ceramic.TextureWrap](/api-docs/clay-native/ceramic/TextureWrap/) | Wrap mode (CLAMP, REPEAT, or MIRROR) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="maxTextureWidth"><div class="plugin-name">clay</div><code><span class="field-name">maxTextureWidth</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#maxTextureWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the maximum texture width supported by the GPU.

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-native/Int/) | Maximum width in pixels (2048 on web, GPU-specific on native) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="maxTextureHeight"><div class="plugin-name">clay</div><code><span class="field-name">maxTextureHeight</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#maxTextureHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the maximum texture height supported by the GPU.

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-native/Int/) | Maximum height in pixels (2048 on web, GPU-specific on native) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="maxTexturesByBatch"><div class="plugin-name">clay</div><code><span class="field-name">maxTexturesByBatch</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#maxTexturesByBatch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the maximum number of textures that can be used in a single batch.
Values above 1 indicate multi-texture batching support for improved performance.


| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-native/Int/) | Maximum texture units (capped at 32) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="textureToPng"><div class="plugin-name">clay</div><code><span class="field-name">textureToPng</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Texture/" class="type-link">Texture</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">reversePremultiplyAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#textureToPng"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Exports a texture to PNG format.
Native implementation using STB image write.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `texture` | [Texture](/api-docs/clay-native/backend/Texture/) | | The texture to export  |
| `reversePremultiplyAlpha` | [Bool](/api-docs/clay-native/Bool/) | `true` | Whether to reverse premultiplied alpha  |
| `path` | [String](/api-docs/clay-native/String/) | *(optional)* | Optional file path to save to (returns bytes if null)  |
| `done` | Function | | Callback with PNG data bytes (null if path provided) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="pixelsToPng"><div class="plugin-name">clay</div><code><span class="field-name">pixelsToPng</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pixels</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/UInt8Array/" class="type-link">ceramic.UInt8Array</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pixelsToPng"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Exports raw pixel data to PNG format.
Native implementation using STB image write.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `width` | [Int](/api-docs/clay-native/Int/) | | Image width in pixels  |
| `height` | [Int](/api-docs/clay-native/Int/) | | Image height in pixels  |
| `pixels` | [ceramic.UInt8Array](/api-docs/clay-native/ceramic/UInt8Array/) | | Raw RGBA pixel data  |
| `path` | [String](/api-docs/clay-native/String/) | *(optional)* | Optional file path to save to (returns bytes if null)  |
| `done` | Function | | Callback with PNG data bytes (null if path provided) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">clay</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var has-description has-plugin" id="nextRenderIndex"><div class="plugin-name">clay</div><code><span class="field-name">nextRenderIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#nextRenderIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Counter for unique render texture IDs

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="nextPixelsIndex"><div class="plugin-name">clay</div><code><span class="field-name">nextPixelsIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#nextPixelsIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Counter for unique pixel texture IDs

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="nextBytesIndex"><div class="plugin-name">clay</div><code><span class="field-name">nextBytesIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#nextBytesIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Counter for unique byte-loaded texture IDs

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="loadingTextureCallbacks"><div class="plugin-name">clay</div><code><span class="field-name">loadingTextureCallbacks</span><span class="operator">:</span> <a href="/api-docs/clay-native/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#loadingTextureCallbacks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Map of loading textures to their callbacks

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="loadedTextures"><div class="plugin-name">clay</div><code><span class="field-name">loadedTextures</span><span class="operator">:</span> <a href="/api-docs/clay-native/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#loadedTextures"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cache of loaded textures by path/ID

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="loadedTexturesRetainCount"><div class="plugin-name">clay</div><code><span class="field-name">loadedTexturesRetainCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#loadedTexturesRetainCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reference count for each loaded texture

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="computeMaxTextureSizeIfNeeded"><div class="plugin-name">clay</div><code><span class="field-name">computeMaxTextureSizeIfNeeded</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeMaxTextureSizeIfNeeded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Queries GPU for maximum texture size if not already cached.
@private

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="computeMaxTexturesByBatchIfNeeded"><div class="plugin-name">clay</div><code><span class="field-name">computeMaxTexturesByBatchIfNeeded</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeMaxTexturesByBatchIfNeeded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Queries GPU for maximum texture units if not already cached.
@private

