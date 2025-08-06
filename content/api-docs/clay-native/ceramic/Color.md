---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Color
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/Color/
---

# Color

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Color.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.Color</strong> (Abstract)</div>

Class representing a color, based on Int. Provides a variety of methods for creating and converting colors.

Colors can be written as Ints. This means you can pass a hex value such as
0x123456 to a function expecting a Color, and it will automatically become a Color "object".
Similarly, Colors may be treated as Ints.

Key features:
- Multiple color space support (RGB, HSB/HSV, HSL, CMYK)
- HSLuv support for perceptually uniform colors (if enabled)
- Extensive predefined color constants
- Color interpolation and gradients
- String parsing and formatting
- Arithmetic operations (add, subtract, multiply)
- Color manipulation (darken, lighten, invert)

Color values are stored internally as RGB (0xRRGGBB format without alpha).
When using HSB/HSL/CMYK properties, values are converted to/from RGB,
which may result in gradual precision loss with repeated conversions.

```haxe
// Create colors in various ways
var red = Color.RED;
var blue = 0x0000FF;
var green = Color.fromRGB(0, 255, 0);
var yellow = Color.fromHSB(60, 1, 1);
var parsed = Color.fromString("#FF00FF");

// Manipulate colors
var darker = red.getDarkened(0.3);
var lighter = blue.getLightened(0.5);
var inverted = green.getInverted();

// Interpolate between colors
var purple = Color.interpolate(red, blue, 0.5);
var gradient = Color.gradient(red, blue, 10);

// Access color components
trace(red.red);        // 255
trace(red.redFloat);   // 1.0
trace(red.hue);        // 0
trace(red.saturation); // 1.0
```

@author Joe Williamson (JoeCreates)
@author Edited by Jeremy Faivre for Ceramic engine (jeremyfa)

## Type Conversions

**From:**
- `[Int](/api-docs/clay-native/Int/)`

**To:**
- `[Int](/api-docs/clay-native/Int/)`

