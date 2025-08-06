---
layout: api-docs
category: api-docs
subCategory: doc
menu: Unity
title: ImageConversion
target: Unity
permalink: api-docs/unity/unityengine/ImageConversion/
---

# ImageConversion

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/unity/runtime/src/unityengine/ImageConversion.hx">View source</a></div>

<div class="type-hierarchy"><strong>unityengine.ImageConversion</strong> (extern class)</div>

Utility class for converting between Texture2D and image file formats.
Enables loading images from bytes and saving textures to common formats.

In Ceramic's Unity backend, this is used for:
- Dynamic texture loading from downloaded data
- Screenshot/capture functionality
- Runtime texture import/export
- Converting between formats

Supported formats:
- PNG: Lossless, supports transparency
- JPG: Lossy compression, no transparency
- EXR: High dynamic range (32-bit float)
- TGA: Uncompressed with alpha

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/unityengine/Texture2D/">Texture2D</a></div>


## Static Members

<div class="signature field-method has-description has-plugin" id="EncodeToPNG"><div class="plugin-name">unity</div><code><span class="field-name">EncodeToPNG</span><span class="parenthesis">(</span><span class="arg-name">tex</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/Texture2D/" class="type-link">Texture2D</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/io/BytesData/" class="type-link">haxe.io.BytesData</a></code><a class="header-anchor" href="#EncodeToPNG"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Encodes a Texture2D to PNG format bytes.



| Name | Type | Description |
|------|------|-------------|
| `tex` | [Texture2D](/api-docs/unity/unityengine/Texture2D/) | Source texture (must be readable)  |

| Returns | Description |
|---------|-------------|
| [haxe.io.BytesData](/api-docs/unity/haxe/io/BytesData/) | PNG file data as bytes, or null if encoding fails * Features: - Lossless compression - Preserves alpha channel - Smaller file size than TGA - Wide compatibility * Saving a texture: ```haxe var pngData = ImageConversion.EncodeToPNG(myTexture); File.saveBytes("screenshot.png", Bytes.ofData(pngData)); ``` * Note: Texture must have Read/Write enabled in import settings. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="EncodeToJPG"><div class="plugin-name">unity</div><code><span class="field-name">EncodeToJPG</span><span class="parenthesis">(</span><span class="arg-name">tex</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/Texture2D/" class="type-link">Texture2D</a><span class="operator">,</span> <span class="arg-name">quality</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/io/BytesData/" class="type-link">haxe.io.BytesData</a></code><a class="header-anchor" href="#EncodeToJPG"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Encodes a Texture2D to JPEG format with specified quality.



| Name | Type | Description |
|------|------|-------------|
| `tex` | [Texture2D](/api-docs/unity/unityengine/Texture2D/) | Source texture (must be readable)  |
| `quality` | [Int](/api-docs/unity/Int/) | JPEG compression quality (1-100): 1 = Lowest quality, smallest file 75 = Good balance (recommended) 100 = Highest quality, largest file  |

| Returns | Description |
|---------|-------------|
| [haxe.io.BytesData](/api-docs/unity/haxe/io/BytesData/) | JPEG file data as bytes, or null if encoding fails * Features: - Lossy compression (smaller files) - No alpha channel support - Good for photos/complex images * Note: Alpha channel is converted to black. Use PNG for images requiring transparency. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="LoadImage"><div class="plugin-name">unity</div><code><span class="field-name">LoadImage</span><span class="parenthesis">(</span><span class="arg-name">tex</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/Texture2D/" class="type-link">Texture2D</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/io/BytesData/" class="type-link">haxe.io.BytesData</a><span class="operator">,</span> <span class="arg-name">markNonReadable</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#LoadImage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Loads image data into an existing Texture2D.
Automatically detects format (PNG, JPG, etc.).



| Name | Type | Description |
|------|------|-------------|
| `tex` | [Texture2D](/api-docs/unity/unityengine/Texture2D/) | Target texture (will be resized to match image)  |
| `data` | [haxe.io.BytesData](/api-docs/unity/haxe/io/BytesData/) | Image file bytes (PNG, JPG, etc.)  |
| `markNonReadable` | [Bool](/api-docs/unity/Bool/) | If true, marks texture as non-readable after loading (saves memory)  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | True if loading succeeded, false otherwise * Loading downloaded image: ```haxe var texture = new Texture2D(2, 2); // Size will be replaced if (ImageConversion.LoadImage(texture, imageBytes, false)) { // Texture now contains the image } ``` * Supported formats: PNG, JPG, TGA, BMP, GIF, and more. Format detected automatically from file data. |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |

