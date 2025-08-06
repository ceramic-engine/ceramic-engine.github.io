---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: PremultiplyAlpha
target: Unity
permalink: api-docs/unity/ceramic/PremultiplyAlpha/
---

# PremultiplyAlpha

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/PremultiplyAlpha.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.PremultiplyAlpha</strong> (Class)</div>

Utilities for converting between straight and premultiplied alpha in image data.

Premultiplied alpha is a technique where RGB color values are multiplied by their
alpha channel value before storage or rendering. This is crucial for correct
alpha blending in GPU rendering pipelines.

In premultiplied alpha:
- RGB values are scaled by alpha: (R*A, G*A, B*A, A)
- Fully transparent pixels have RGB values of (0, 0, 0, 0)
- Prevents color bleeding artifacts during filtering
- Required by many GPU blend modes for correct results

In straight (non-premultiplied) alpha:
- RGB values are stored independently of alpha: (R, G, B, A)
- Transparent pixels can have any RGB values
- More intuitive for image editing
- Used by most image file formats

```haxe
// Load image pixels
var pixels = texture.fetchPixels();

// Convert to premultiplied for GPU rendering
PremultiplyAlpha.premultiplyAlpha(pixels);

// Convert back to straight alpha for saving
PremultiplyAlpha.reversePremultiplyAlpha(pixels);
texture.saveToFile("output.png");
```

<div class="see"><strong>See:</strong> Texture.fetchPixels For accessing pixel data, Blending For alpha blending modes</div>


## Static Members

<div class="signature field-method has-description" id="premultiplyAlpha"><code><span class="field-name">premultiplyAlpha</span><span class="parenthesis">(</span><span class="arg-name">pixels</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#premultiplyAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts pixel data from straight alpha to premultiplied alpha format.

Multiplies each RGB component by its corresponding alpha value.
This operation modifies the pixel data in-place for efficiency.

The conversion formula for each pixel:
- R' = R * (A / 255)
- G' = G * (A / 255)
- B' = B * (A / 255)
- A' = A (unchanged)



| Name | Type | Description |
|------|------|-------------|
| `pixels` | [UInt8Array](/api-docs/unity/ceramic/UInt8Array/) | The pixel data array in RGBA format (4 bytes per pixel). Must have length divisible by 4. Modified in-place. * ```haxe // Prepare pixels for GPU rendering var pixels = loadImagePixels("sprite.png"); PremultiplyAlpha.premultiplyAlpha(pixels); var texture = Texture.fromPixels(width, height, pixels); ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="reversePremultiplyAlpha"><code><span class="field-name">reversePremultiplyAlpha</span><span class="parenthesis">(</span><span class="arg-name">pixels</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#reversePremultiplyAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts pixel data from premultiplied alpha back to straight alpha format.

Divides each RGB component by its alpha value to restore original colors.
This operation modifies the pixel data in-place for efficiency.
Pixels with zero alpha are left unchanged to avoid division by zero.

The conversion formula for each pixel (when A > 0):
- R' = R / (A / 255)
- G' = G / (A / 255)
- B' = B / (A / 255)
- A' = A (unchanged)



| Name | Type | Description |
|------|------|-------------|
| `pixels` | [UInt8Array](/api-docs/unity/ceramic/UInt8Array/) | The pixel data array in premultiplied RGBA format. Must have length divisible by 4. Modified in-place. * ```haxe // Convert back for image editing or saving var pixels = texture.fetchPixels(); PremultiplyAlpha.reversePremultiplyAlpha(pixels); savePixelsAsPNG(pixels, "output.png"); ``` * Note: Due to rounding during premultiplication, this operation may not perfectly restore original values, especially for low alpha values. |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

