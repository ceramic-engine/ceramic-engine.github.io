---
layout: api-docs
category: api-docs
subCategory: doc
menu: Unity
title: Texture2D
target: Unity
permalink: api-docs/unity/unityengine/Texture2D/
---

# Texture2D

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/unity/runtime/src/unityengine/Texture2D.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/unityengine/Object/">Object</a> → <a href="/api-docs/unity/unityengine/Texture/">Texture</a> → <strong>unityengine.Texture2D</strong> (extern class)</div>

Unity Texture2D class extern binding for Ceramic.
Represents a 2D texture asset that can be used for rendering.

This binding provides essential properties and methods for
texture manipulation, including pixel data access and
render-to-texture capabilities used by the Ceramic backend.

## Instance Members

<div class="signature field-var has-description has-plugin" id="width"><div class="plugin-name">unity</div><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Width of the texture in pixels.
Read-only property set when the texture is created.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="height"><div class="plugin-name">unity</div><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Height of the texture in pixels.
Read-only property set when the texture is created.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="filterMode"><div class="plugin-name">unity</div><code><span class="field-name">filterMode</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/FilterMode/" class="type-link">FilterMode</a></code><a class="header-anchor" href="#filterMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Filtering mode of the texture.
Controls how the texture is sampled when transformed.
Point = nearest neighbor (pixelated), Bilinear/Trilinear = smooth.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="SetPixelData"><div class="plugin-name">unity</div><code><span class="field-name">SetPixelData</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/UInt8/" class="type-link">cs.types.UInt8</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">mipLevel</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">sourceDataStartIndex</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetPixelData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets raw pixel data for the texture from a byte array.
The data must be in the correct format for the texture.



| Name | Type | Description |
|------|------|-------------|
| `data` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.UInt8](/api-docs/unity/cs/types/UInt8/)> | Raw pixel data as a native byte array  |
| `mipLevel` | [Int](/api-docs/unity/Int/) | Mipmap level to write to (0 = full resolution)  |
| `sourceDataStartIndex` | [Int](/api-docs/unity/Int/) | Starting index in the source data array |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="ReadPixels"><div class="plugin-name">unity</div><code><span class="field-name">ReadPixels</span><span class="parenthesis">(</span><span class="arg-name">source</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/Rect/" class="type-link">Rect</a><span class="operator">,</span> <span class="arg-name">destX</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">destY</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">recalculateMipMaps</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ReadPixels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads pixels from the current render target into this texture.
Commonly used to capture the screen or render texture contents.



| Name | Type | Description |
|------|------|-------------|
| `source` | [Rect](/api-docs/unity/unityengine/Rect/) | Rectangle in screen coordinates to read from  |
| `destX` | [Int](/api-docs/unity/Int/) | X coordinate in the texture to write to  |
| `destY` | [Int](/api-docs/unity/Int/) | Y coordinate in the texture to write to  |
| `recalculateMipMaps` | [Bool](/api-docs/unity/Bool/) | Whether to update mipmaps after reading |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="Apply"><div class="plugin-name">unity</div><code><span class="field-name">Apply</span><span class="parenthesis">(</span><span class="arg-name">updateMipmaps</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">makeNoLongerReadable</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Apply"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Applies all previous SetPixel and SetPixels changes.
Must be called to upload changed pixels to the GPU.



| Name | Type | Description |
|------|------|-------------|
| `updateMipmaps` | [Bool](/api-docs/unity/Bool/) | Whether to recalculate mipmaps  |
| `makeNoLongerReadable` | [Bool](/api-docs/unity/Bool/) | If true, frees CPU memory copy (saves memory but prevents further CPU access) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |

