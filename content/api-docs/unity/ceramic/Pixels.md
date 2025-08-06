---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Pixels
target: Unity
permalink: api-docs/unity/ceramic/Pixels/
---

# Pixels

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Pixels.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.Pixels</strong> (Class)</div>

Utility class for manipulating raw RGBA pixel data.

Pixels provides low-level operations for working with pixel buffers in RGBA format.
Each pixel consists of 4 bytes: Red, Green, Blue, and Alpha channels (0-255 each).
This class is useful for:
- Image processing and filtering
- Procedural texture generation
- Pixel-perfect collision detection
- Screenshot capture and export
- Dynamic texture creation

Buffer format:
- Pixels are stored in row-major order (left to right, top to bottom)
- Each pixel uses 4 consecutive bytes: [R, G, B, A]
- Buffer index calculation: (y * width + x) * 4

```haxe
// Create a 100x100 red image
var pixels = Pixels.create(100, 100, AlphaColor.RED);

// Set a single pixel
Pixels.set(pixels, 100, 50, 50, AlphaColor.BLUE);

// Copy a region
Pixels.copy(srcPixels, srcWidth, dstPixels, dstWidth,
            0, 0, 50, 50,  // Source region
            25, 25);       // Destination position

// Export to PNG
Pixels.pixelsToPng(100, 100, pixels, "output.png", () -> {
    trace("PNG saved!");
});
```

<div class="see"><strong>See:</strong> UInt8Array The underlying buffer type, AlphaColor For pixel color representation</div>


## Static Members

<div class="signature field-method has-description" id="copy"><code><span class="field-name">copy</span><span class="parenthesis">(</span><span class="arg-name">srcBuffer</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">srcBufferWidth</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstBuffer</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">dstBufferWidth</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcX</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcY</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcWidth</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcHeight</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstX</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstY</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">copyRed</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">copyGreen</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">copyBlue</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">copyAlpha</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#copy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Copies a rectangular region of pixels from one buffer to another.

This method performs a pixel-by-pixel copy with optional channel filtering.
It's useful for:
- Compositing multiple images
- Creating texture atlases
- Implementing copy/paste functionality
- Selective channel manipulation

The copy operation respects buffer boundaries and will not read/write
outside the valid pixel ranges.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `srcBuffer` | [UInt8Array](/api-docs/unity/ceramic/UInt8Array/) | | Source pixel buffer in RGBA format  |
| `srcBufferWidth` | [Int](/api-docs/unity/Int/) | | Width of the source image in pixels  |
| `dstBuffer` | [UInt8Array](/api-docs/unity/ceramic/UInt8Array/) | | Destination pixel buffer in RGBA format  |
| `dstBufferWidth` | [Int](/api-docs/unity/Int/) | | Width of the destination image in pixels  |
| `srcX` | [Int](/api-docs/unity/Int/) | | Starting X coordinate in source buffer  |
| `srcY` | [Int](/api-docs/unity/Int/) | | Starting Y coordinate in source buffer  |
| `srcWidth` | [Int](/api-docs/unity/Int/) | | Width of the region to copy  |
| `srcHeight` | [Int](/api-docs/unity/Int/) | | Height of the region to copy  |
| `dstX` | [Int](/api-docs/unity/Int/) | | Target X coordinate in destination buffer  |
| `dstY` | [Int](/api-docs/unity/Int/) | | Target Y coordinate in destination buffer  |
| `copyRed` | [Bool](/api-docs/unity/Bool/) | `true` | Whether to copy the red channel (default: true)  |
| `copyGreen` | [Bool](/api-docs/unity/Bool/) | `true` | Whether to copy the green channel (default: true)  |
| `copyBlue` | [Bool](/api-docs/unity/Bool/) | `true` | Whether to copy the blue channel (default: true)  |
| `copyAlpha` | [Bool](/api-docs/unity/Bool/) | `true` | Whether to copy the alpha channel (default: true) * ```haxe // Copy entire image Pixels.copy(src, 100, dst, 200, 0, 0, 100, 100, 50, 50); * // Copy only RGB channels (preserve destination alpha) Pixels.copy(src, 100, dst, 200, 0, 0, 50, 50, 0, 0, true, true, true, false); ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="create"><code><span class="field-name">create</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">fillColor</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/UInt8Array/" class="type-link">UInt8Array</a></code><a class="header-anchor" href="#create"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new pixel buffer filled with the specified color.

Allocates a UInt8Array of size width × height × 4 bytes.
All pixels are initialized to the same color value.



| Name | Type | Description |
|------|------|-------------|
| `width` | [Int](/api-docs/unity/Int/) | Width of the image in pixels  |
| `height` | [Int](/api-docs/unity/Int/) | Height of the image in pixels  |
| `fillColor` | [AlphaColor](/api-docs/unity/ceramic/AlphaColor/) | Initial color for all pixels (including alpha)  |

| Returns | Description |
|---------|-------------|
| [UInt8Array](/api-docs/unity/ceramic/UInt8Array/) | New pixel buffer in RGBA format * ```haxe // Create transparent image var pixels = Pixels.create(256, 256, AlphaColor.TRANSPARENT); * // Create opaque white background var bg = Pixels.create(800, 600, AlphaColor.WHITE); ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fromBytes"><code><span class="field-name">fromBytes</span><span class="parenthesis">(</span><span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/UInt8Array/" class="type-link">UInt8Array</a></code><a class="header-anchor" href="#fromBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a pixel buffer from raw bytes in RGBA format.

Converts Haxe Bytes to a platform-specific UInt8Array.
The bytes must already be in RGBA format with 4 bytes per pixel.



| Name | Type | Description |
|------|------|-------------|
| `bytes` | [haxe.io.Bytes](/api-docs/unity/haxe/io/Bytes/) | Raw bytes containing RGBA pixel data  |

| Returns | Description |
|---------|-------------|
| [UInt8Array](/api-docs/unity/ceramic/UInt8Array/) | Pixel buffer suitable for use with other Pixels methods * ```haxe var bytes = File.getBytes("raw_image.data"); var pixels = Pixels.fromBytes(bytes); ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="get"><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">bufferWidth</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/AlphaColor/" class="type-link">AlphaColor</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets a single pixel color at the specified coordinates.

Reads 4 bytes from the buffer and returns them as an AlphaColor.
No bounds checking is performed for performance reasons.



| Name | Type | Description |
|------|------|-------------|
| `buffer` | [UInt8Array](/api-docs/unity/ceramic/UInt8Array/) | Pixel buffer to read from  |
| `bufferWidth` | [Int](/api-docs/unity/Int/) | Width of the image in pixels  |
| `x` | [Int](/api-docs/unity/Int/) | X coordinate (0 to width-1)  |
| `y` | [Int](/api-docs/unity/Int/) | Y coordinate (0 to height-1)  |

| Returns | Description |
|---------|-------------|
| [AlphaColor](/api-docs/unity/ceramic/AlphaColor/) | Color value at the specified position * ```haxe var color = Pixels.get(buffer, 100, 50, 25); trace('Pixel alpha: ' + color.alpha); ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="set"><code><span class="field-name">set</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">bufferWidth</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">color</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#set"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a single pixel color at the specified coordinates.

Writes 4 bytes to the buffer from the AlphaColor components.
No bounds checking is performed for performance reasons.



| Name | Type | Description |
|------|------|-------------|
| `buffer` | [UInt8Array](/api-docs/unity/ceramic/UInt8Array/) | Pixel buffer to write to  |
| `bufferWidth` | [Int](/api-docs/unity/Int/) | Width of the image in pixels  |
| `x` | [Int](/api-docs/unity/Int/) | X coordinate (0 to width-1)  |
| `y` | [Int](/api-docs/unity/Int/) | Y coordinate (0 to height-1)  |
| `color` | [AlphaColor](/api-docs/unity/ceramic/AlphaColor/) | Color value to set (including alpha) * ```haxe // Draw a red pixel Pixels.set(buffer, 100, 50, 25, AlphaColor.RED); * // Set semi-transparent green var color = AlphaColor.fromRGBA(0, 255, 0, 128); Pixels.set(buffer, 100, 10, 10, color); ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setRectangle"><code><span class="field-name">setRectangle</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">bufferWidth</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">color</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setRectangle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fills a rectangular area with a solid color.

Sets all pixels within the specified rectangle to the same color.
This is more efficient than setting pixels individually in a loop.
No bounds checking is performed.



| Name | Type | Description |
|------|------|-------------|
| `buffer` | [UInt8Array](/api-docs/unity/ceramic/UInt8Array/) | Pixel buffer to write to  |
| `bufferWidth` | [Int](/api-docs/unity/Int/) | Width of the image in pixels  |
| `x` | [Int](/api-docs/unity/Int/) | Left edge of rectangle (0 to width-1)  |
| `y` | [Int](/api-docs/unity/Int/) | Top edge of rectangle (0 to height-1)  |
| `width` | [Int](/api-docs/unity/Int/) | Width of rectangle in pixels  |
| `height` | [Int](/api-docs/unity/Int/) | Height of rectangle in pixels  |
| `color` | [AlphaColor](/api-docs/unity/ceramic/AlphaColor/) | Color to fill the rectangle with (including alpha) * ```haxe // Draw a blue square Pixels.setRectangle(buffer, 200, 50, 50, 100, 100, AlphaColor.BLUE); * // Clear a region to transparent Pixels.setRectangle(buffer, 200, 0, 0, 200, 50, AlphaColor.TRANSPARENT); ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="pixelsToPng"><code><span class="field-name">pixelsToPng</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pixels</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pixelsToPng"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Exports pixel data as a PNG file to the specified path.

Encodes the raw RGBA pixel buffer as PNG format and saves it to disk.
The operation is asynchronous and calls the callback when complete.



| Name | Type | Description |
|------|------|-------------|
| `width` | [Int](/api-docs/unity/Int/) | Width of the image in pixels  |
| `height` | [Int](/api-docs/unity/Int/) | Height of the image in pixels  |
| `pixels` | [UInt8Array](/api-docs/unity/ceramic/UInt8Array/) | RGBA pixel buffer to encode  |
| `path` | [String](/api-docs/unity/String/) | File path where to save the PNG (e.g., "/path/to/image.png")  |
| `done` | Function | Callback invoked when the export is complete * ```haxe var screenshot = Pixels.create(800, 600, AlphaColor.BLACK); // ... draw to screenshot ... Pixels.pixelsToPng(800, 600, screenshot, "screenshot.png", () -> { trace("Screenshot saved!"); }); ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="rgbaPixelsToRgbPixels"><code><span class="field-name">rgbaPixelsToRgbPixels</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">inPixels</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">outPixels</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/UInt8Array/" class="type-link">UInt8Array</a></code><a class="header-anchor" href="#rgbaPixelsToRgbPixels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts RGBA pixel data to RGB format by stripping alpha channel.

Creates a new buffer with 3 bytes per pixel instead of 4.
Useful for formats that don't support transparency or to reduce memory usage.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `width` | [Int](/api-docs/unity/Int/) | | Width of the image in pixels  |
| `height` | [Int](/api-docs/unity/Int/) | | Height of the image in pixels  |
| `inPixels` | [UInt8Array](/api-docs/unity/ceramic/UInt8Array/) | | Source RGBA pixel buffer (4 bytes per pixel)  |
| `outPixels` | [Null](/api-docs/unity/Null/)<[UInt8Array](/api-docs/unity/ceramic/UInt8Array/)> | *(optional)* | Optional destination buffer to reuse. Must be exactly width × height × 3 bytes. If null or wrong size, a new buffer is created.  |

| Returns | Description |
|---------|-------------|
| [UInt8Array](/api-docs/unity/ceramic/UInt8Array/) | RGB pixel buffer (3 bytes per pixel) * ```haxe // Convert for JPEG encoding (no alpha support) var rgbPixels = Pixels.rgbaPixelsToRgbPixels(100, 100, rgbaPixels); ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="rgbPixelsToRgbaPixels"><code><span class="field-name">rgbPixelsToRgbaPixels</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">alpha</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">255</span><span class="operator">,</span> <span class="arg-name">inPixels</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">outPixels</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/UInt8Array/" class="type-link">UInt8Array</a></code><a class="header-anchor" href="#rgbPixelsToRgbaPixels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts RGB pixel data to RGBA format by adding an alpha channel.

Expands the buffer from 3 bytes per pixel to 4 bytes per pixel.
All pixels receive the same alpha value.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `width` | [Int](/api-docs/unity/Int/) | | Width of the image in pixels  |
| `height` | [Int](/api-docs/unity/Int/) | | Height of the image in pixels  |
| `alpha` | [Int](/api-docs/unity/Int/) | `255` | Alpha value to add to all pixels (0-255, default: 255 for opaque)  |
| `inPixels` | [UInt8Array](/api-docs/unity/ceramic/UInt8Array/) | | Source RGB pixel buffer (3 bytes per pixel)  |
| `outPixels` | [Null](/api-docs/unity/Null/)<[UInt8Array](/api-docs/unity/ceramic/UInt8Array/)> | *(optional)* | Optional destination buffer to reuse. Must be exactly width × height × 4 bytes. If null or wrong size, a new buffer is created.  |

| Returns | Description |
|---------|-------------|
| [UInt8Array](/api-docs/unity/ceramic/UInt8Array/) | RGBA pixel buffer (4 bytes per pixel) * ```haxe // Convert RGB to opaque RGBA var rgbaPixels = Pixels.rgbPixelsToRgbaPixels(100, 100, 255, rgbPixels); * // Convert with 50% transparency var semiTransparent = Pixels.rgbPixelsToRgbaPixels(100, 100, 128, rgbPixels); ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="mixPixelsBuffers"><code><span class="field-name">mixPixelsBuffers</span><span class="parenthesis">(</span><span class="arg-name">inPixelsList</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">middleFactor</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">outPixels</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/UInt8Array/" class="type-link">UInt8Array</a></code><a class="header-anchor" href="#mixPixelsBuffers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Blends multiple pixel buffers into a single weighted average.

Combines multiple images using weighted averaging, with optional emphasis
on middle buffers. This is useful for:
- Creating smooth transitions between frames
- Temporal anti-aliasing
- Motion blur effects
- Image stacking for noise reduction

The weight distribution forms a pyramid shape when middleFactor > 1:
- First and last buffers have weight 1
- Middle buffers have weight multiplied by middleFactor



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `inPixelsList` | [Array](/api-docs/unity/Array/)<[UInt8Array](/api-docs/unity/ceramic/UInt8Array/)> | | Array of pixel buffers to mix. All must have same dimensions.  |
| `middleFactor` | [Float](/api-docs/unity/Float/) | `1` | Weight multiplier for middle buffers. - 1.0: Equal weighting for all buffers - >1.0: Emphasize middle buffers - <1.0: Emphasize edge buffers  |
| `outPixels` | [Null](/api-docs/unity/Null/)<[UInt8Array](/api-docs/unity/ceramic/UInt8Array/)> | *(optional)* | Optional destination buffer to reuse. Must match size of input buffers.  |

| Returns | Description |
|---------|-------------|
| [UInt8Array](/api-docs/unity/ceramic/UInt8Array/) | Mixed pixel buffer with weighted average of inputs * |

<hr class="field-separator" />

<div class="signature field-method has-description" id="flipY"><code><span class="field-name">flipY</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">bufferWidth</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#flipY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flips an image vertically (upside down) in-place.

Swaps pixel rows from top to bottom. The top row becomes the bottom row,
the second row becomes the second-to-last row, etc.

This operation modifies the buffer directly without allocating new memory.



| Name | Type | Description |
|------|------|-------------|
| `buffer` | [UInt8Array](/api-docs/unity/ceramic/UInt8Array/) | Pixel buffer to flip. Modified in-place.  |
| `bufferWidth` | [Int](/api-docs/unity/Int/) | Width of the image in pixels. Height is calculated from buffer.length / (width × 4). * ```haxe // Flip image loaded from file (often needed for OpenGL) var pixels = loadImagePixels("texture.png"); Pixels.flipY(pixels, 256); ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="flipX"><code><span class="field-name">flipX</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">bufferWidth</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#flipX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flips an image horizontally (mirror) in-place.

Swaps pixel columns from left to right. The leftmost column becomes
the rightmost column, etc.

This operation modifies the buffer directly without allocating new memory.



| Name | Type | Description |
|------|------|-------------|
| `buffer` | [UInt8Array](/api-docs/unity/ceramic/UInt8Array/) | Pixel buffer to flip. Modified in-place.  |
| `bufferWidth` | [Int](/api-docs/unity/Int/) | Width of the image in pixels. Height is calculated from buffer.length / (width × 4). * ```haxe // Create mirror image var pixels = loadImagePixels("character.png"); Pixels.flipX(pixels, 64); // Character now faces opposite direction ``` |

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

