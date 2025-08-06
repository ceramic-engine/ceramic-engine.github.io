---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: AlphaColor
target: Unity
permalink: api-docs/unity/ceramic/AlphaColor/
---

# AlphaColor

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/AlphaColor.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.AlphaColor</strong> (Abstract)</div>

Color with alpha channel stored as a 32-bit integer.

AlphaColor represents a color with transparency in ARGB format (0xAARRGGBB).
It extends the functionality of Color by adding an alpha channel for opacity.

Key features:
- Full RGBA color support with alpha transparency
- Compatible with Color class (can convert to/from)
- Same color manipulation features as Color
- Predefined constants for common colors with full opacity
- String parsing and formatting
- HSB/HSL/CMYK color space conversions

The alpha channel controls transparency:
- 0x00 (0) = Fully transparent
- 0xFF (255) = Fully opaque
- Values in between create partial transparency

```haxe
// Create colors with alpha
var semiRed = AlphaColor.fromRGBA(255, 0, 0, 128); // 50% transparent red
var transparent = AlphaColor.TRANSPARENT;
var opaque = AlphaColor.WHITE;

// Convert between Color and AlphaColor
var color = Color.BLUE;
var alphaColor = color.toAlphaColor(); // Full opacity
var backToColor:Color = alphaColor; // Auto-conversion

// Manipulate alpha
var faded = alphaColor;
faded.alpha = 128; // 50% opacity
faded.alphaFloat = 0.25; // 25% opacity

// Parse from string
var parsed = AlphaColor.fromString("#80FF0000"); // Semi-transparent red
```

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/ceramic/Color/">Color</a></div>


## Type Conversions

**From:**
- `[Int](/api-docs/unity/Int/)`

**To:**
- `[Int](/api-docs/unity/Int/)`

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

