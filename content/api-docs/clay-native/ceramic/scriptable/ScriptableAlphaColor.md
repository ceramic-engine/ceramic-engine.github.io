---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: ScriptableAlphaColor
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/scriptable/ScriptableAlphaColor/
---

# ScriptableAlphaColor

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/scriptable/ScriptableAlphaColor.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.scriptable.ScriptableAlphaColor</strong> (Class)</div>

Scriptable wrapper for AlphaColor to expose RGBA color functionality to scripts.

This class serves as a placeholder that gets mapped to the actual AlphaColor
implementation when used in scripts. It represents RGBA colors stored as a
single integer value, where the alpha channel is combined with RGB values.

In scripts, this type is exposed as `AlphaColor` (without the Scriptable prefix)
and provides the same functionality as ceramic.AlphaColor, including:
- Creating colors from RGB values and alpha
- Extracting RGB and alpha components
- Color manipulation and conversion

## Usage in Scripts

```haxe
// Create an opaque red color
var red = AlphaColor.fromColor(Color.RED);

// Create a semi-transparent blue
var transBlue = AlphaColor.fromColorAndAlpha(Color.BLUE, 0.5);

// Extract components
var rgb = transBlue.color;     // Get RGB as Color
var alpha = transBlue.alpha;   // Get alpha value
```

<div class="see"><strong>See:</strong> ceramic.AlphaColor The actual implementation, ceramic.scriptable.ScriptableColor For RGB colors without alpha</div>


