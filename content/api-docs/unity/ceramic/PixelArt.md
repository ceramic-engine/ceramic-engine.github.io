---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: PixelArt
target: Unity
permalink: api-docs/unity/ceramic/PixelArt/
---

# PixelArt

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/PixelArt.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">Entity</a> → <a href="/api-docs/unity/ceramic/Visual/">Visual</a> → <a href="/api-docs/unity/ceramic/Quad/">Quad</a> → <a href="/api-docs/unity/ceramic/Layer/">Layer</a> → <a href="/api-docs/unity/ceramic/Filter/">Filter</a> → <strong>ceramic.PixelArt</strong> (Class)</div>

A filter configured to display pixel art content with high-quality upscaling.

PixelArt uses advanced shader techniques to scale pixel art without blurriness
or artifacts, providing better results than standard NEAREST or LINEAR filtering.
It preserves the crisp edges of pixels while smoothing the overall appearance.

Features:
- Sharp pixel scaling with configurable sharpness
- CRT/retro display effects (scanlines, RGB mask, grid)
- Chromatic aberration for color fringing
- Glow effects for bright pixels
- LCD grid simulation

This is ideal for:
- Retro-style games that need clean scaling
- Pixel art that needs to scale to different resolutions
- Creating authentic CRT/LCD display effects
- Adding subtle visual enhancements to pixel graphics

```haxe
// Basic pixel art scaling
var pixelArt = new PixelArt();
pixelArt.size(320, 240); // Original pixel art size
pixelArt.content.add(myPixelSprite);
pixelArt.scale(3); // Scale up 3x with clean pixels

// CRT monitor effect
var crt = new PixelArt();
crt.scanlineCount = 240; // Number of visible scanlines
crt.scanlineIntensity = 0.3; // Darkness between lines
crt.verticalMaskCount = 320; // RGB phosphor mask
crt.verticalMaskIntensity = 0.1;
crt.glowStrength = 0.2; // Slight glow on bright pixels

// Game Boy style LCD grid
var lcd = new PixelArt();
lcd.gridThickness = 0.1;
lcd.gridColor = Color.fromRgb(0x9BBC0F); // GB green
lcd.gridAlpha = 0.15;
```

Based on techniques from: https://colececil.io/blog/2017/scaling-pixel-art-without-destroying-it/

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/ceramic/Filter/">Filter</a></div>


## Instance Members

<div class="signature field-var has-description" id="sharpness"><code><span class="field-name">sharpness</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#sharpness"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sharpness of the pixels.
- 1.0 = Soft/blurry edges
- 8.0 = Sharp pixels (default)
- Higher values = Even sharper transitions

Adjust based on your art style and scaling factor.

<hr class="field-separator" />

<div class="signature field-var has-description" id="chromaticAberration"><code><span class="field-name">chromaticAberration</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#chromaticAberration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Chromatic aberration: max offset for red/blue channel split.
Creates color fringing effects like old CRT monitors or lenses.

- 0.0 = No effect (default)
- 0.5 = Subtle color separation
- 1.0 = Strong RGB channel split

Range: 0.0 – 1.0

<hr class="field-separator" />

<div class="signature field-var has-description" id="gridThickness"><code><span class="field-name">gridThickness</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#gridThickness"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Thickness of the pixel grid lines.
Set above 0.0 to display a grid overlay.

Perfect for simulating:
- Game Boy LCD screens
- Old monitor pixel grids
- Tile-based displays

Typical values: 0.05 - 0.2

<hr class="field-separator" />

<div class="signature field-var has-description" id="gridColor"><code><span class="field-name">gridColor</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#gridColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When using a grid, this is the color of the grid

<hr class="field-separator" />

<div class="signature field-var has-description" id="gridAlpha"><code><span class="field-name">gridAlpha</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#gridAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When using a grid, this is the alpha of the grid

<hr class="field-separator" />

<div class="signature field-var has-description" id="scanlineCount"><code><span class="field-name">scanlineCount</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scanlineCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Number of horizontal scanlines.
Set to your display's vertical resolution for authentic CRT effect.

Examples:
- 240 for retro consoles
- 480 for SD CRT TVs
- 0 to disable scanlines (default)

<hr class="field-separator" />

<div class="signature field-var has-description" id="scanlineOffset"><code><span class="field-name">scanlineOffset</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scanlineOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Scanline vertical offset in pixels.
Useful when scanline count doesn't match pixel rows exactly.
Helps align scanlines with your pixel art.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scanlineIntensity"><code><span class="field-name">scanlineIntensity</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scanlineIntensity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Darkness between scanlines.
Controls how visible the horizontal lines are.

- 0.0 = No darkening (invisible scanlines)
- 0.25 = Subtle effect (default)
- 0.5 = Medium darkness
- 1.0 = Black lines between scanlines

Range: 0.0 – 1.0

<hr class="field-separator" />

<div class="signature field-var has-description" id="scanlineShape"><code><span class="field-name">scanlineShape</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scanlineShape"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Controls scanline sharpness/thickness.

- 0.25 = Very wide/soft scanlines
- 1.0 = Normal sharpness (default)
- 4.0 = Very thin/sharp scanlines

Common values: 0.25, 0.5, 1.0, 2.0, 4.0

<hr class="field-separator" />

<div class="signature field-var has-description" id="verticalMaskCount"><code><span class="field-name">verticalMaskCount</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#verticalMaskCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Number of vertical RGB phosphor mask lines.
Simulates the RGB subpixel structure of CRT monitors.

Set to your horizontal resolution divided by 3 for
authentic RGB triads, or 0 to disable (default).

<hr class="field-separator" />

<div class="signature field-var has-description" id="verticalMaskOffset"><code><span class="field-name">verticalMaskOffset</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#verticalMaskOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Vertical mask horizontal offset in pixels.
Useful when mask count doesn't match pixel columns exactly.
Helps align the RGB mask with your pixel grid.

<hr class="field-separator" />

<div class="signature field-var has-description" id="verticalMaskIntensity"><code><span class="field-name">verticalMaskIntensity</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#verticalMaskIntensity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Darkness of vertical RGB mask lines.
Controls the visibility of the phosphor mask effect.

- 0.0 = No mask visible (default)
- 0.1 = Subtle RGB stripes
- 0.3 = Visible phosphor structure
- 1.0 = Strong RGB separation

Range: 0.0 – 1.0

<hr class="field-separator" />

<div class="signature field-var has-description" id="glowStrength"><code><span class="field-name">glowStrength</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#glowStrength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Amount of glow/bloom effect on bright pixels.
Simulates phosphor glow on CRT displays.

- 0.0 = No glow (default)
- 0.2 = Subtle bloom
- 0.5 = Medium glow
- 1.0 = Strong bloom effect

Range: 0.0 – 1.0

<hr class="field-separator" />

<div class="signature field-var has-description" id="glowThresholdMin"><code><span class="field-name">glowThresholdMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#glowThresholdMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Minimum brightness threshold for glow effect.
Pixels darker than this won't glow.

- 0.0 = All pixels glow
- 0.6 = Only bright pixels glow (default)
- 1.0 = No pixels glow

Range: 0.0 – 1.0

<hr class="field-separator" />

<div class="signature field-var has-description" id="glowThresholdMax"><code><span class="field-name">glowThresholdMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#glowThresholdMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Brightness level for maximum glow intensity.
Pixels at or above this brightness glow at full strength.

- Should be higher than glowThresholdMin
- 0.85 = Very bright pixels glow fully (default)
- 1.0 = Only pure white glows fully

Range: 0.0 – 1.0

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-method no-description" id="handleResize"><code><span class="field-name">handleResize</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleResize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `width` | [Float](/api-docs/unity/Float/) |
| `height` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="updateResolution"><code><span class="field-name">updateResolution</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateResolution"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |

