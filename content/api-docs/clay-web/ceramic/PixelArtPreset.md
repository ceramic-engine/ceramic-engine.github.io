---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: PixelArtPreset
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/PixelArtPreset/
---

# PixelArtPreset

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/PixelArtPreset.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.PixelArtPreset</strong> (Class)</div>

A complete set of `PixelArt` settings, as data: every property of the filter, with the
defaults of the filter itself. Apply one with `PixelArt.applyPreset()`, read the current
settings back with `PixelArt.toPreset()`, and paste the result of `toHaxe()` in code to
keep a look that was tuned at runtime.

Built-in presets: `sharp`, `clean`, `crtTv`, `crtMonitor`, `gba`, `lite` (see `byName()`).

## Static Members

<div class="signature field-var has-description" id="NAMES"><code><span class="field-name">NAMES</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#NAMES"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Names of the built-in presets accepted by `byName()`

<hr class="field-separator" />

<div class="signature field-method has-description" id="sharp"><code><span class="field-name">sharp</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">PixelArtPreset</a></code><a class="header-anchor" href="#sharp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The original `PixelArt` look: `SHARP` mode with its defaults
| Returns |
|---------|
| [PixelArtPreset](/api-docs/clay-web/ceramic/PixelArtPreset/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clean"><code><span class="field-name">clean</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">PixelArtPreset</a></code><a class="header-anchor" href="#clean"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

`CRT` mode with no effect at all: the reference to compare the CRT shader against `sharp`
| Returns |
|---------|
| [PixelArtPreset](/api-docs/clay-web/ceramic/PixelArtPreset/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="crtTv"><code><span class="field-name">crtTv</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">PixelArtPreset</a></code><a class="header-anchor" href="#crtTv"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A consumer television: soft beam, marked scanlines, TV shadow mask, halo,
slight curvature, rounded corners, vignette and a little grain
| Returns |
|---------|
| [PixelArtPreset](/api-docs/clay-web/ceramic/PixelArtPreset/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="crtMonitor"><code><span class="field-name">crtMonitor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">PixelArtPreset</a></code><a class="header-anchor" href="#crtMonitor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A computer monitor: sharper beam, thin scanlines, aperture grille, faint halo, flat screen
| Returns |
|---------|
| [PixelArtPreset](/api-docs/clay-web/ceramic/PixelArtPreset/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="gba"><code><span class="field-name">gba</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">PixelArtPreset</a></code><a class="header-anchor" href="#gba"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Game Boy Advance LCD: sharp pixels, RGB subpixels and grid, and the gba-color
(Pokefan531, hunterk) gamma, luminance and color matrix
| Returns |
|---------|
| [PixelArtPreset](/api-docs/clay-web/ceramic/PixelArtPreset/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="lite"><code><span class="field-name">lite</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">PixelArtPreset</a></code><a class="header-anchor" href="#lite"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

`crtTv` for weak GPUs: lite quality, no halo, no grain
| Returns |
|---------|
| [PixelArtPreset](/api-docs/clay-web/ceramic/PixelArtPreset/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="byName"><code><span class="field-name">byName</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">PixelArtPreset</a></code><a class="header-anchor" href="#byName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A built-in preset by name (see `NAMES`), or `null`

| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [PixelArtPreset](/api-docs/clay-web/ceramic/PixelArtPreset/) |

## Instance Members

<div class="signature field-var no-description" id="mode"><code><span class="field-name">mode</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/PixelArtMode/" class="type-link">PixelArtMode</a></code><a class="header-anchor" href="#mode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="sharpness"><code><span class="field-name">sharpness</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#sharpness"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="chromaticAberration"><code><span class="field-name">chromaticAberration</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#chromaticAberration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="gridThickness"><code><span class="field-name">gridThickness</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#gridThickness"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="gridColor"><code><span class="field-name">gridColor</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#gridColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="gridAlpha"><code><span class="field-name">gridAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#gridAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="scanlineCount"><code><span class="field-name">scanlineCount</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scanlineCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="scanlineIntensity"><code><span class="field-name">scanlineIntensity</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scanlineIntensity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="scanlineShape"><code><span class="field-name">scanlineShape</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scanlineShape"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="verticalMaskCount"><code><span class="field-name">verticalMaskCount</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#verticalMaskCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="verticalMaskIntensity"><code><span class="field-name">verticalMaskIntensity</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#verticalMaskIntensity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="glowStrength"><code><span class="field-name">glowStrength</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#glowStrength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="glowThresholdMin"><code><span class="field-name">glowThresholdMin</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#glowThresholdMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="glowThresholdMax"><code><span class="field-name">glowThresholdMax</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#glowThresholdMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="beamAmount"><code><span class="field-name">beamAmount</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#beamAmount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="hardPix"><code><span class="field-name">hardPix</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#hardPix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="sharpBand"><code><span class="field-name">sharpBand</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#sharpBand"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="hardScan"><code><span class="field-name">hardScan</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#hardScan"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="beamMin"><code><span class="field-name">beamMin</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#beamMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="beamMax"><code><span class="field-name">beamMax</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#beamMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="scanlineStrength"><code><span class="field-name">scanlineStrength</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scanlineStrength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="maskType"><code><span class="field-name">maskType</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/PixelArtMask/" class="type-link">PixelArtMask</a></code><a class="header-anchor" href="#maskType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="maskDark"><code><span class="field-name">maskDark</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#maskDark"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="maskLight"><code><span class="field-name">maskLight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#maskLight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="maskScale"><code><span class="field-name">maskScale</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#maskScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="lcdGridStrength"><code><span class="field-name">lcdGridStrength</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lcdGridStrength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="lcdSubpixelLow"><code><span class="field-name">lcdSubpixelLow</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lcdSubpixelLow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="bloomAmount"><code><span class="field-name">bloomAmount</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#bloomAmount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="bloomSize"><code><span class="field-name">bloomSize</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#bloomSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="warpX"><code><span class="field-name">warpX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#warpX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="warpY"><code><span class="field-name">warpY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#warpY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="cornerRadius"><code><span class="field-name">cornerRadius</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#cornerRadius"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="cornerSmooth"><code><span class="field-name">cornerSmooth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#cornerSmooth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="vignetteStrength"><code><span class="field-name">vignetteStrength</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#vignetteStrength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="gamma"><code><span class="field-name">gamma</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#gamma"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="brightness"><code><span class="field-name">brightness</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#brightness"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="colorMatrix"><code><span class="field-name">colorMatrix</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#colorMatrix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

3 x 3 color matrix, row by row: the first three values give the output red from the
input red, green and blue, and so on.

<hr class="field-separator" />

<div class="signature field-var no-description" id="luminance"><code><span class="field-name">luminance</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#luminance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="noiseStrength"><code><span class="field-name">noiseStrength</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#noiseStrength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="flickerStrength"><code><span class="field-name">flickerStrength</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#flickerStrength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="quality"><code><span class="field-name">quality</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/PixelArtQuality/" class="type-link">PixelArtQuality</a></code><a class="header-anchor" href="#quality"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="toHaxe"><code><span class="field-name">toHaxe</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#toHaxe"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This preset as a Haxe struct literal, ready to paste in code
| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">mode</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/PixelArtMode/" class="type-link">PixelArtMode</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">sharpness</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">chromaticAberration</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">gridThickness</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">gridColor</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/Color/" class="type-link">Color</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">gridAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">scanlineCount</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">scanlineIntensity</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">scanlineShape</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">verticalMaskCount</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">verticalMaskIntensity</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">glowStrength</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">glowThresholdMin</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">glowThresholdMax</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">beamAmount</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">hardPix</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">sharpBand</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">hardScan</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">beamMin</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">beamMax</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">scanlineStrength</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">maskType</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/PixelArtMask/" class="type-link">PixelArtMask</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">maskDark</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">maskLight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">maskScale</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">lcdGridStrength</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">lcdSubpixelLow</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">bloomAmount</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">bloomSize</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">warpX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">warpY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">cornerRadius</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">cornerSmooth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">vignetteStrength</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">gamma</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">brightness</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">colorMatrix</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">luminance</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">noiseStrength</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flickerStrength</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">quality</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/PixelArtQuality/" class="type-link">PixelArtQuality</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `mode` | [Null](/api-docs/clay-web/Null/)<[PixelArtMode](/api-docs/clay-web/ceramic/PixelArtMode/)> | *(optional)* |  |
| `sharpness` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* |  |
| `chromaticAberration` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* |  |
| `gridThickness` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* |  |
| `gridColor` | [Null](/api-docs/clay-web/Null/)<[Color](/api-docs/clay-web/ceramic/Color/)> | *(optional)* |  |
| `gridAlpha` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* |  |
| `scanlineCount` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* |  |
| `scanlineIntensity` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* |  |
| `scanlineShape` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* |  |
| `verticalMaskCount` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* |  |
| `verticalMaskIntensity` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* |  |
| `glowStrength` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* |  |
| `glowThresholdMin` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* |  |
| `glowThresholdMax` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* |  |
| `beamAmount` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* |  |
| `hardPix` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* |  |
| `sharpBand` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* |  |
| `hardScan` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* |  |
| `beamMin` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* |  |
| `beamMax` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* |  |
| `scanlineStrength` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* |  |
| `maskType` | [Null](/api-docs/clay-web/Null/)<[PixelArtMask](/api-docs/clay-web/ceramic/PixelArtMask/)> | *(optional)* |  |
| `maskDark` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* |  |
| `maskLight` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* |  |
| `maskScale` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* |  |
| `lcdGridStrength` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* |  |
| `lcdSubpixelLow` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* |  |
| `bloomAmount` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* |  |
| `bloomSize` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* |  |
| `warpX` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* |  |
| `warpY` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* |  |
| `cornerRadius` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* |  |
| `cornerSmooth` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* |  |
| `vignetteStrength` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* |  |
| `gamma` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* |  |
| `brightness` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* |  |
| `colorMatrix` | [Null](/api-docs/clay-web/Null/)<[Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)>> | *(optional)* | * 3 x 3 color matrix, row by row: the first three values give the output red from the input red, green and blue, and so on. |
| `luminance` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* |  |
| `noiseStrength` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* |  |
| `flickerStrength` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* |  |
| `quality` | [Null](/api-docs/clay-web/Null/)<[PixelArtQuality](/api-docs/clay-web/ceramic/PixelArtQuality/)> | *(optional)* |  |

## Private Members

<div class="signature field-method no-description" id="sameMatrix"><code><span class="field-name">sameMatrix</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#sameMatrix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> |
| `b` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |

