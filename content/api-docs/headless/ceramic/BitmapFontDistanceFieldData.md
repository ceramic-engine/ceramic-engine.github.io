---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: BitmapFontDistanceFieldData
target: Headless
permalink: api-docs/headless/ceramic/BitmapFontDistanceFieldData/
---

# BitmapFontDistanceFieldData

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/BitmapFontDistanceFieldData.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.BitmapFontDistanceFieldData</strong> (Class)</div>

Configuration data for distance field fonts (SDF/MSDF).

Distance field fonts store distance-to-edge information instead of direct
pixel values, enabling high-quality scaling without the pixelation issues
of traditional bitmap fonts. This is especially useful for:
- UI text that needs to scale smoothly
- Text rendered at various sizes from a single texture
- Sharp text rendering at any resolution

MSDF (Multi-channel Signed Distance Field) fonts provide superior quality
compared to regular SDF by encoding distance information across RGB channels,
preserving sharp corners and fine details.

```haxe
// Check if font uses distance fields
if (font.fontData.distanceField != null) {
    var msdf = font.fontData.distanceField.fieldType == 'msdf';
    var range = font.fontData.distanceField.distanceRange;
    // Font can be scaled smoothly
}
```

<div class="see"><strong>See:</strong> BitmapFontData.distanceField Where this data is stored, BitmapFont.msdf Convenience property to check for MSDF fonts</div>


## Instance Members

<div class="signature field-var has-description" id="fieldType"><code><span class="field-name">fieldType</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#fieldType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The type of distance field encoding used in the font texture.

Supported values:
- `'msdf'`: Multi-channel Signed Distance Field (recommended)
Uses RGB channels to encode distance data, providing sharp corners
and excellent quality at all scales.

- `'sdf'`: Standard Signed Distance Field (not supported in Ceramic)
Uses a single channel for distance data. While simpler, it has
lower quality than MSDF. Use MSDF instead.

The field type determines which shader and rendering technique
will be used for the font.

<hr class="field-separator" />

<div class="signature field-var has-description" id="distanceRange"><code><span class="field-name">distanceRange</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#distanceRange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The distance range in pixels used during font generation.

This value represents the maximum distance (in texture pixels) that
was calculated from each glyph edge during distance field generation.
It directly affects rendering quality:

- Lower values (2-4): Sharper edges, may show artifacts at extreme scales
- Higher values (4-8): Smoother edges, better for large scale variations
- Typical value: 4 pixels

This value is passed to the MSDF shader to correctly interpret
the distance field data during rendering.

```haxe
// In shader setup
shader.setFloat('pxRange', fontData.distanceField.distanceRange);
```

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">fieldType</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">distanceRange</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Description |
|------|------|-------------|
| `fieldType` | [String](/api-docs/headless/String/) | * The type of distance field encoding used in the font texture. * Supported values: - `'msdf'`: Multi-channel Signed Distance Field (recommended) Uses RGB channels to encode distance data, providing sharp corners and excellent quality at all scales. * - `'sdf'`: Standard Signed Distance Field (not supported in Ceramic) Uses a single channel for distance data. While simpler, it has lower quality than MSDF. Use MSDF instead. * The field type determines which shader and rendering technique will be used for the font. |
| `distanceRange` | [Int](/api-docs/headless/Int/) | * The distance range in pixels used during font generation. * This value represents the maximum distance (in texture pixels) that was calculated from each glyph edge during distance field generation. It directly affects rendering quality: * - Lower values (2-4): Sharper edges, may show artifacts at extreme scales - Higher values (4-8): Smoother edges, better for large scale variations - Typical value: 4 pixels * This value is passed to the MSDF shader to correctly interpret the distance field data during rendering. * ```haxe // In shader setup shader.setFloat('pxRange', fontData.distanceField.distanceRange); ``` |

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |

