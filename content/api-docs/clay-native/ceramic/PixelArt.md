---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: PixelArt
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/PixelArt/
---

# PixelArt

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/PixelArt.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-native/ceramic/Visual/">Visual</a> → <a href="/api-docs/clay-native/ceramic/Quad/">Quad</a> → <a href="/api-docs/clay-native/ceramic/Layer/">Layer</a> → <a href="/api-docs/clay-native/ceramic/Filter/">Filter</a> → <strong>ceramic.PixelArt</strong> (Class)</div>

A filter configured to display pixel art content with high-quality upscaling.

PixelArt scales pixel art without blurriness or artifacts, providing better results
than standard NEAREST or LINEAR filtering. It preserves the crisp edges of pixels
while keeping sub-pixel motion smooth.

It has two modes (see `mode`):
- `SHARP` (default): the original PixelArt shader, with sharp scaling, optional grid,
sine scanlines, vertical mask, glow and chromatic aberration.
- `CRT`: a CRT and LCD display simulation (Gaussian beam, phosphor masks, halo,
curvature, vignette, gamma and color matrix), driven by presets.

```haxe
// Basic pixel art scaling
var pixelArt = new PixelArt();
pixelArt.size(320, 240); // Original pixel art size
pixelArt.content.add(myPixelSprite);
pixelArt.scale(3); // Scale up 3x with clean pixels
screen.add(pixelArt);

// A consumer television
pixelArt.applyPreset(PixelArtPreset.crtTv());

// A Game Boy Advance screen
pixelArt.applyPreset(PixelArtPreset.gba());

// Your own settings
pixelArt.applyPreset({
    mode: CRT,
    beamAmount: 1,
    scanlineStrength: 0.8,
    maskType: APERTURE
});
```

Sharp mode based on techniques from: https://colececil.io/blog/2017/scaling-pixel-art-without-destroying-it/
CRT mode sources are listed in `shaders.PixelArtCrt`.

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/Filter/">Filter</a>, <a href="/api-docs/clay-native/ceramic/PixelArtPreset/">PixelArtPreset</a></div>


## Instance Members

<div class="signature field-var has-description" id="mode"><code><span class="field-name">mode</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/PixelArtMode/" class="type-link">PixelArtMode</a></code><a class="header-anchor" href="#mode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Which shader upscales the content. Switching mode loads the corresponding
shader if needed and pushes the settings of that mode to it.

<hr class="field-separator" />

<div class="signature field-var has-description" id="sharpness"><code><span class="field-name">sharpness</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#sharpness"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sharpness of the pixels (`SHARP` mode).
- 1.0 = Soft/blurry edges
- 8.0 = Sharp pixels (default)
- Higher values = Even sharper transitions

Adjust based on your art style and scaling factor.
In `CRT` mode, see `sharpBand` instead.

<hr class="field-separator" />

<div class="signature field-var has-description" id="chromaticAberration"><code><span class="field-name">chromaticAberration</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#chromaticAberration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Chromatic aberration: max offset for red/blue channel split (`SHARP` mode).
Creates color fringing effects like old CRT monitors or lenses.

- 0.0 = No effect (default)
- 0.5 = Subtle color separation
- 1.0 = Strong RGB channel split

Range: 0.0 to 1.0. Ignored in `CRT` mode.

<hr class="field-separator" />

<div class="signature field-var has-description" id="gridThickness"><code><span class="field-name">gridThickness</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#gridThickness"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Thickness of the pixel grid lines (`SHARP` mode).
Set above 0.0 to display a grid overlay.

Perfect for simulating:
- Game Boy LCD screens
- Old monitor pixel grids
- Tile-based displays

Typical values: 0.05 - 0.2. In `CRT` mode, see the `LCD` mask instead.

<hr class="field-separator" />

<div class="signature field-var has-description" id="gridColor"><code><span class="field-name">gridColor</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#gridColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When using a grid, this is the color of the grid (`SHARP` mode)

<hr class="field-separator" />

<div class="signature field-var has-description" id="gridAlpha"><code><span class="field-name">gridAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#gridAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When using a grid, this is the alpha of the grid (`SHARP` mode)

<hr class="field-separator" />

<div class="signature field-var has-description" id="scanlineCount"><code><span class="field-name">scanlineCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scanlineCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Number of horizontal scanlines (`SHARP` mode).
Set to your display's vertical resolution for authentic CRT effect.

Examples:
- 240 for retro consoles
- 480 for SD CRT TVs
- 0 to disable scanlines (default)

In `CRT` mode, scanlines follow the source rows: see `scanlineStrength` and `hardScan`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scanlineOffset"><code><span class="field-name">scanlineOffset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scanlineOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Scanline vertical offset in pixels (`SHARP` mode).
Useful when scanline count doesn't match pixel rows exactly.
Helps align scanlines with your pixel art.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scanlineIntensity"><code><span class="field-name">scanlineIntensity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scanlineIntensity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Darkness between scanlines (`SHARP` mode).
Controls how visible the horizontal lines are.

- 0.0 = No darkening (invisible scanlines)
- 0.25 = Subtle effect (default)
- 0.5 = Medium darkness
- 1.0 = Black lines between scanlines

Range: 0.0 to 1.0

<hr class="field-separator" />

<div class="signature field-var has-description" id="scanlineShape"><code><span class="field-name">scanlineShape</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scanlineShape"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Controls scanline sharpness/thickness (`SHARP` mode).

- 0.25 = Very wide/soft scanlines
- 1.0 = Normal sharpness (default)
- 4.0 = Very thin/sharp scanlines

Common values: 0.25, 0.5, 1.0, 2.0, 4.0

<hr class="field-separator" />

<div class="signature field-var has-description" id="verticalMaskCount"><code><span class="field-name">verticalMaskCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#verticalMaskCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Number of vertical RGB phosphor mask lines (`SHARP` mode).
Simulates the RGB subpixel structure of CRT monitors.

Set to your horizontal resolution divided by 3 for
authentic RGB triads, or 0 to disable (default).
In `CRT` mode, see `maskType`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="verticalMaskOffset"><code><span class="field-name">verticalMaskOffset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#verticalMaskOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Vertical mask horizontal offset in pixels (`SHARP` mode).
Useful when mask count doesn't match pixel columns exactly.
Helps align the RGB mask with your pixel grid.

<hr class="field-separator" />

<div class="signature field-var has-description" id="verticalMaskIntensity"><code><span class="field-name">verticalMaskIntensity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#verticalMaskIntensity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Darkness of vertical RGB mask lines (`SHARP` mode).
Controls the visibility of the phosphor mask effect.

- 0.0 = No mask visible (default)
- 0.1 = Subtle RGB stripes
- 0.3 = Visible phosphor structure
- 1.0 = Strong RGB separation

Range: 0.0 to 1.0

<hr class="field-separator" />

<div class="signature field-var has-description" id="glowStrength"><code><span class="field-name">glowStrength</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#glowStrength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Amount of glow/bloom effect on bright pixels (`SHARP` mode).
Simulates phosphor glow on CRT displays.

- 0.0 = No glow (default)
- 0.2 = Subtle bloom
- 0.5 = Medium glow
- 1.0 = Strong bloom effect

Range: 0.0 to 1.0. In `CRT` mode, see `bloomAmount`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="glowThresholdMin"><code><span class="field-name">glowThresholdMin</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#glowThresholdMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Minimum brightness threshold for glow effect (`SHARP` mode).
Pixels darker than this won't glow.

- 0.0 = All pixels glow
- 0.6 = Only bright pixels glow (default)
- 1.0 = No pixels glow

Range: 0.0 to 1.0

<hr class="field-separator" />

<div class="signature field-var has-description" id="glowThresholdMax"><code><span class="field-name">glowThresholdMax</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#glowThresholdMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Brightness level for maximum glow intensity (`SHARP` mode).
Pixels at or above this brightness glow at full strength.

- Should be higher than glowThresholdMin
- 0.85 = Very bright pixels glow fully (default)
- 1.0 = Only pure white glows fully

Range: 0.0 to 1.0

<hr class="field-separator" />

<div class="signature field-var has-description" id="outputScale"><code><span class="field-name">outputScale</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#outputScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Screen pixels per source pixel (`CRT` mode), used to size the sharp sampling band
and the LCD grid. The default `-1` computes it every frame from the filter's
transform and the screen density, which covers scaling and zooming. Set it
explicitly when the filter is rendered somewhere this does not apply.

<hr class="field-separator" />

<div class="signature field-var has-description" id="beamAmount"><code><span class="field-name">beamAmount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#beamAmount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

How much of the crt-lottes Gaussian beam goes into each pixel (`CRT` mode):
`0.0` (default) keeps crisp pixels (see `sharpBand`), `1.0` is the full beam
(see `hardPix` and `hardScan`), values in between blend the two.

<hr class="field-separator" />

<div class="signature field-var has-description" id="hardPix"><code><span class="field-name">hardPix</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#hardPix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Horizontal spread of the beam (`CRT` mode, with `beamAmount`), a negative Gaussian
scale as in crt-lottes: `-3.0` soft (default), `-2.0` softer, `-4.0` sharper.

<hr class="field-separator" />

<div class="signature field-var has-description" id="sharpBand"><code><span class="field-name">sharpBand</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#sharpBand"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Width, in screen pixels, of the band around texel edges where the crisp sampling
interpolates (`CRT` mode). `1.0` (default) keeps sub-pixel scrolling smooth
without visible blur; smaller values are sharper but shimmer when scrolling,
larger ones soften the pixel edges.

<hr class="field-separator" />

<div class="signature field-var has-description" id="hardScan"><code><span class="field-name">hardScan</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#hardScan"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Vertical spread of the beam, which shapes the scanlines (`CRT` mode), a negative
Gaussian scale as in crt-lottes: `-8.0` (default), `-16.0` thinner lines, `-4.0` wider.

<hr class="field-separator" />

<div class="signature field-var has-description" id="beamMin"><code><span class="field-name">beamMin</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#beamMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Beam width factor for black rows (`CRT` mode). With `beamMax`, makes bright rows
draw a wider beam than dark ones, as on a real tube. `1.0` by default.

<hr class="field-separator" />

<div class="signature field-var has-description" id="beamMax"><code><span class="field-name">beamMax</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#beamMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Beam width factor for white rows (`CRT` mode). `1.0` by default (same as `beamMin`:
constant width); `1.4` gives bright rows a visibly thicker beam.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scanlineStrength"><code><span class="field-name">scanlineStrength</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scanlineStrength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Visibility of the scanlines (`CRT` mode), from `0.0` (none, default) to `1.0`
(the raw crt-lottes profile). Scanlines follow the source rows, one per pixel row.

<hr class="field-separator" />

<div class="signature field-var has-description" id="maskType"><code><span class="field-name">maskType</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/PixelArtMask/" class="type-link">PixelArtMask</a></code><a class="header-anchor" href="#maskType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Phosphor or LCD mask (`CRT` mode). Phosphor masks are fixed on the screen pixels,
the `LCD` mask follows the source pixels. Default: `NONE`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="maskDark"><code><span class="field-name">maskDark</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#maskDark"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Brightness of the mask cells that do not match a channel (`CRT` mode, phosphor masks).
`0.5` by default, as in crt-lottes.

<hr class="field-separator" />

<div class="signature field-var has-description" id="maskLight"><code><span class="field-name">maskLight</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#maskLight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Brightness of the mask cells that match a channel (`CRT` mode, phosphor masks).
`1.5` by default, as in crt-lottes: above 1 to compensate for the dark cells.

<hr class="field-separator" />

<div class="signature field-var has-description" id="maskScale"><code><span class="field-name">maskScale</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#maskScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Size of a mask cell in screen pixels (`CRT` mode, phosphor masks). `1.0` by default;
use `2.0` on high density screens so the triads stay visible.

<hr class="field-separator" />

<div class="signature field-var has-description" id="lcdGridStrength"><code><span class="field-name">lcdGridStrength</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lcdGridStrength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Darkness of the grid between pixels of the `LCD` mask (`CRT` mode), `0.0` (none,
default) to `1.0` (black).

<hr class="field-separator" />

<div class="signature field-var has-description" id="lcdSubpixelLow"><code><span class="field-name">lcdSubpixelLow</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lcdSubpixelLow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Brightness of a channel outside its own subpixel in the `LCD` mask (`CRT` mode):
`1.0` hides the subpixels, `0.0` shows pure RGB stripes. `0.65` by default.

<hr class="field-separator" />

<div class="signature field-var has-description" id="bloomAmount"><code><span class="field-name">bloomAmount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#bloomAmount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Amount of halo added around bright pixels (`CRT` mode), `0.0` (none, default) to
`1.0`. The halo is a blur of the source at its own resolution (radius `bloomSize`),
so it stays cheap. Bright areas are already bright: the halo shows on their edges
and in the dark areas next to them.

<hr class="field-separator" />

<div class="signature field-var has-description" id="bloomSize"><code><span class="field-name">bloomSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#bloomSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Radius of the halo blur in source pixels (`CRT` mode). `4.0` by default.
Only visible while `bloomAmount` is above zero.

<hr class="field-separator" />

<div class="signature field-var has-description" id="warpX"><code><span class="field-name">warpX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#warpX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Horizontal curvature of the screen (`CRT` mode), as in crt-lottes: `0.0` flat
(default), `1/32` a typical television.

<hr class="field-separator" />

<div class="signature field-var has-description" id="warpY"><code><span class="field-name">warpY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#warpY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Vertical curvature of the screen (`CRT` mode), as in crt-lottes: `0.0` flat
(default), `1/24` a typical television.

<hr class="field-separator" />

<div class="signature field-var has-description" id="cornerRadius"><code><span class="field-name">cornerRadius</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#cornerRadius"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Radius of the rounded corners of the screen, in source pixels (`CRT` mode). `0.0` by default.

<hr class="field-separator" />

<div class="signature field-var has-description" id="cornerSmooth"><code><span class="field-name">cornerSmooth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#cornerSmooth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Softness of the screen edge, in source pixels (`CRT` mode). `0.0` by default (hard edge).

<hr class="field-separator" />

<div class="signature field-var has-description" id="vignetteStrength"><code><span class="field-name">vignetteStrength</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#vignetteStrength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Darkening of the edges of the screen (`CRT` mode), `0.0` (none, default) to `1.0`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="gamma"><code><span class="field-name">gamma</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#gamma"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Display gamma (`CRT` mode). When above `0.0`, the beam, halo and mask are composed
in linear light (`2.2` is the usual value); `0.0` (default) skips the conversion,
which is cheaper and keeps colors untouched.

<hr class="field-separator" />

<div class="signature field-var has-description" id="brightness"><code><span class="field-name">brightness</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#brightness"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Brightness multiplier applied after the mask (`CRT` mode), to compensate for the
light lost in scanlines and mask cells. `1.0` by default.

<hr class="field-separator" />

<div class="signature field-var has-description" id="colorMatrix"><code><span class="field-name">colorMatrix</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#colorMatrix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

3 x 3 color matrix (`CRT` mode), row by row: the first three values give the output
red from the input red, green and blue, and so on. Identity by default; see
`PixelArtPreset.gba()` for the gba-color values.

<hr class="field-separator" />

<div class="signature field-var has-description" id="luminance"><code><span class="field-name">luminance</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#luminance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Luminance multiplier applied before the color matrix (`CRT` mode). `1.0` by default,
`0.94` in gba-color.

<hr class="field-separator" />

<div class="signature field-var has-description" id="noiseStrength"><code><span class="field-name">noiseStrength</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#noiseStrength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Amplitude of the animated grain (`CRT` mode), `0.0` (none, default) to `1.0`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="flickerStrength"><code><span class="field-name">flickerStrength</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#flickerStrength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Amplitude of the brightness flicker (`CRT` mode), `0.0` (none, default) to `1.0`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="quality"><code><span class="field-name">quality</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/PixelArtQuality/" class="type-link">PixelArtQuality</a></code><a class="header-anchor" href="#quality"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cost of the `BEAM` reconstruction (`CRT` mode). `NORMAL` by default.

<hr class="field-separator" />

<div class="signature field-method has-description" id="applyPreset"><code><span class="field-name">applyPreset</span><span class="parenthesis">(</span><span class="arg-name">preset</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/PixelArtPreset/" class="type-link">PixelArtPreset</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#applyPreset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Apply every setting of the given preset, mode included

| Name | Type |
|------|------|
| `preset` | [PixelArtPreset](/api-docs/clay-native/ceramic/PixelArtPreset/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toPreset"><code><span class="field-name">toPreset</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/PixelArtPreset/" class="type-link">PixelArtPreset</a></code><a class="header-anchor" href="#toPreset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The current settings as a preset (see `PixelArtPreset.toHaxe()` to paste them in code)
| Returns |
|---------|
| [PixelArtPreset](/api-docs/clay-native/ceramic/PixelArtPreset/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var has-description" id="shaderAutorun"><code><span class="field-name">shaderAutorun</span><span class="operator">:</span> <a href="/api-docs/clay-native/tracker/Autorun/" class="type-link">tracker.Autorun</a></code><a class="header-anchor" href="#shaderAutorun"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Re-binds the shader when its asset is reloaded (shade hot reload)

<hr class="field-separator" />

<div class="signature field-var has-description" id="bloomQuad"><code><span class="field-name">bloomQuad</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Quad/" class="type-link">Quad</a></code><a class="header-anchor" href="#bloomQuad"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Draws the source into `bloomRenderTexture` through the blur shader (`CRT` mode, halo)

<hr class="field-separator" />

<div class="signature field-var no-description" id="bloomRenderTexture"><code><span class="field-name">bloomRenderTexture</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/RenderTexture/" class="type-link">RenderTexture</a></code><a class="header-anchor" href="#bloomRenderTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="bloomShader"><code><span class="field-name">bloomShader</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Shader/" class="type-link">Shader</a></code><a class="header-anchor" href="#bloomShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="bloomShaderAutorun"><code><span class="field-name">bloomShaderAutorun</span><span class="operator">:</span> <a href="/api-docs/clay-native/tracker/Autorun/" class="type-link">tracker.Autorun</a></code><a class="header-anchor" href="#bloomShaderAutorun"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="bloomTextureAutorun"><code><span class="field-name">bloomTextureAutorun</span><span class="operator">:</span> <a href="/api-docs/clay-native/tracker/Autorun/" class="type-link">tracker.Autorun</a></code><a class="header-anchor" href="#bloomTextureAutorun"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="currentOutputScale"><code><span class="field-name">currentOutputScale</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#currentOutputScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Value last pushed as `outputScale` uniform

<hr class="field-separator" />

<div class="signature field-var has-description" id="currentScreenRectX"><code><span class="field-name">currentScreenRectX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#currentScreenRectX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Values last pushed as `screenRect` uniform (the filter on screen, in screen pixels)

<hr class="field-separator" />

<div class="signature field-var no-description" id="currentScreenRectY"><code><span class="field-name">currentScreenRectY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#currentScreenRectY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="currentScreenRectWidth"><code><span class="field-name">currentScreenRectWidth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#currentScreenRectWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="currentScreenRectHeight"><code><span class="field-name">currentScreenRectHeight</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#currentScreenRectHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="time"><code><span class="field-name">time</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#time"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="wrapOffset"><code><span class="field-name">wrapOffset</span><span class="parenthesis">(</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#wrapOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The scanline and vertical mask patterns repeat every 2 pixels of offset: the shader
gets the offset reduced to `[0, 2)`, so that a large offset (a far scroll of a big
world) does not lose precision in its `sin()`, which would shift a line here and there.

| Name | Type |
|------|------|
| `offset` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="bindShader"><code><span class="field-name">bindShader</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Load (if needed) and bind the shader of the current mode. The shader asset is
observed so that a shade hot reload re-binds a fresh clone.

<hr class="field-separator" />

<div class="signature field-method has-description" id="pushUniforms"><code><span class="field-name">pushUniforms</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pushUniforms"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Push every setting of the current mode to the shader

<hr class="field-separator" />

<div class="signature field-method no-description" id="pushColorMatrix"><code><span class="field-name">pushColorMatrix</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pushColorMatrix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleResize"><code><span class="field-name">handleResize</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleResize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `width` | [Float](/api-docs/clay-native/Float/) |
| `height` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="updateResolution"><code><span class="field-name">updateResolution</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateResolution"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="updateOutputScale"><code><span class="field-name">updateOutputScale</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateOutputScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Push `outputScale` (when computed automatically) and `screenRect`, both derived from
where the filter is on screen. Rotation is not taken into account.

<hr class="field-separator" />

<div class="signature field-method no-description" id="handlePostUpdate"><code><span class="field-name">handlePostUpdate</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handlePostUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `delta` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="updateBloom"><code><span class="field-name">updateBloom</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateBloom"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create or destroy the halo pass depending on the mode and `bloomAmount`

<hr class="field-separator" />

<div class="signature field-method no-description" id="updateBloomTexture"><code><span class="field-name">updateBloomTexture</span><span class="parenthesis">(</span><span class="arg-name">source</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/RenderTexture/" class="type-link">RenderTexture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateBloomTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `source` | [RenderTexture](/api-docs/clay-native/ceramic/RenderTexture/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pushBloomUniforms"><code><span class="field-name">pushBloomUniforms</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pushBloomUniforms"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroyBloom"><code><span class="field-name">destroyBloom</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroyBloom"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |

