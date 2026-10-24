---
layout: api-docs
category: api-docs
subCategory: doc
menu: Shade
title: PixelArtCrt_Frag
target: Clay (Native)
permalink: api-docs/clay-native/shaders/PixelArtCrt_Frag/
---

# PixelArtCrt_Frag

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/shade/runtime/src/shaders/PixelArtCrt.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/shade/Shade/">shade.Shade</a> → <a href="/api-docs/clay-native/shade/Frag/">shade.Frag</a> → <strong>shaders.PixelArtCrt_Frag</strong> (Class)</div>

`precision: 'highp'`: screen positions reach the thousands, which a mediump float
(10 bit mantissa) cannot resolve to the pixel.

## Instance Members

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">shade</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var has-description has-plugin" id="FLICKER_RATE"><div class="plugin-name">shade</div><code><span class="field-name">FLICKER_RATE</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#FLICKER_RATE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flicker frequency, in radians per second

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="params"><div class="plugin-name">shade</div><code><span class="field-name">params</span><span class="operator">:</span> <a href="/api-docs/clay-native/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#params"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="mainTex"><div class="plugin-name">shade</div><code><span class="field-name">mainTex</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Sampler2D/" class="type-link">shade.Sampler2D</a></code><a class="header-anchor" href="#mainTex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="bloomTex"><div class="plugin-name">shade</div><code><span class="field-name">bloomTex</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Sampler2D/" class="type-link">shade.Sampler2D</a></code><a class="header-anchor" href="#bloomTex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="resolution"><div class="plugin-name">shade</div><code><span class="field-name">resolution</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec2/" class="type-link">shade.Vec2</a></code><a class="header-anchor" href="#resolution"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="outputScale"><div class="plugin-name">shade</div><code><span class="field-name">outputScale</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#outputScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="screenRect"><div class="plugin-name">shade</div><code><span class="field-name">screenRect</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec4/" class="type-link">shade.Vec4</a></code><a class="header-anchor" href="#screenRect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The filter on screen, in screen pixels: origin in `xy`, size in `zw`. Gives each
fragment its screen position, so that phosphor masks stay fixed on the screen like
the glass of a real tube, whatever the content does (`gl_FragCoord` is not available
on every target)

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="beamAmount"><div class="plugin-name">shade</div><code><span class="field-name">beamAmount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#beamAmount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="hardPix"><div class="plugin-name">shade</div><code><span class="field-name">hardPix</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#hardPix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="sharpBand"><div class="plugin-name">shade</div><code><span class="field-name">sharpBand</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#sharpBand"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="hardScan"><div class="plugin-name">shade</div><code><span class="field-name">hardScan</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#hardScan"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="beamMin"><div class="plugin-name">shade</div><code><span class="field-name">beamMin</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#beamMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="beamMax"><div class="plugin-name">shade</div><code><span class="field-name">beamMax</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#beamMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="scanlineStrength"><div class="plugin-name">shade</div><code><span class="field-name">scanlineStrength</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scanlineStrength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="maskType"><div class="plugin-name">shade</div><code><span class="field-name">maskType</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#maskType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="maskDark"><div class="plugin-name">shade</div><code><span class="field-name">maskDark</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#maskDark"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="maskLight"><div class="plugin-name">shade</div><code><span class="field-name">maskLight</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#maskLight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="maskScale"><div class="plugin-name">shade</div><code><span class="field-name">maskScale</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#maskScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="lcdGridStrength"><div class="plugin-name">shade</div><code><span class="field-name">lcdGridStrength</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lcdGridStrength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="lcdSubpixelLow"><div class="plugin-name">shade</div><code><span class="field-name">lcdSubpixelLow</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lcdSubpixelLow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="bloomAmount"><div class="plugin-name">shade</div><code><span class="field-name">bloomAmount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#bloomAmount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="warpX"><div class="plugin-name">shade</div><code><span class="field-name">warpX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#warpX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="warpY"><div class="plugin-name">shade</div><code><span class="field-name">warpY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#warpY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="cornerRadius"><div class="plugin-name">shade</div><code><span class="field-name">cornerRadius</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#cornerRadius"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="cornerSmooth"><div class="plugin-name">shade</div><code><span class="field-name">cornerSmooth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#cornerSmooth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="vignetteStrength"><div class="plugin-name">shade</div><code><span class="field-name">vignetteStrength</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#vignetteStrength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="gamma"><div class="plugin-name">shade</div><code><span class="field-name">gamma</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#gamma"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="brightness"><div class="plugin-name">shade</div><code><span class="field-name">brightness</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#brightness"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="colorMatrix"><div class="plugin-name">shade</div><code><span class="field-name">colorMatrix</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Mat3/" class="type-link">shade.Mat3</a></code><a class="header-anchor" href="#colorMatrix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="luminance"><div class="plugin-name">shade</div><code><span class="field-name">luminance</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#luminance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="time"><div class="plugin-name">shade</div><code><span class="field-name">time</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#time"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="noiseStrength"><div class="plugin-name">shade</div><code><span class="field-name">noiseStrength</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#noiseStrength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="flickerStrength"><div class="plugin-name">shade</div><code><span class="field-name">flickerStrength</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#flickerStrength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="quality"><div class="plugin-name">shade</div><code><span class="field-name">quality</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#quality"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="tcoord"><div class="plugin-name">shade</div><code><span class="field-name">tcoord</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec2/" class="type-link">shade.Vec2</a></code><a class="header-anchor" href="#tcoord"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="color"><div class="plugin-name">shade</div><code><span class="field-name">color</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec4/" class="type-link">shade.Vec4</a></code><a class="header-anchor" href="#color"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="luma"><div class="plugin-name">shade</div><code><span class="field-name">luma</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec3/" class="type-link">shade.Vec3</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#luma"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Rec. 709 luma weights

| Name | Type |
|------|------|
| `c` | [shade.Vec3](/api-docs/clay-native/shade/Vec3/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="toLinear"><div class="plugin-name">shade</div><code><span class="field-name">toLinear</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec3/" class="type-link">shade.Vec3</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec3/" class="type-link">shade.Vec3</a></code><a class="header-anchor" href="#toLinear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Display to linear light (no-op when `gamma` is 0)

| Name | Type |
|------|------|
| `c` | [shade.Vec3](/api-docs/clay-native/shade/Vec3/) |

| Returns |
|---------|
| [shade.Vec3](/api-docs/clay-native/shade/Vec3/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="toDisplay"><div class="plugin-name">shade</div><code><span class="field-name">toDisplay</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec3/" class="type-link">shade.Vec3</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec3/" class="type-link">shade.Vec3</a></code><a class="header-anchor" href="#toDisplay"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Linear light back to display (no-op when `gamma` is 0)

| Name | Type |
|------|------|
| `c` | [shade.Vec3](/api-docs/clay-native/shade/Vec3/) |

| Returns |
|---------|
| [shade.Vec3](/api-docs/clay-native/shade/Vec3/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="fetch"><div class="plugin-name">shade</div><code><span class="field-name">fetch</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec2/" class="type-link">shade.Vec2</a><span class="operator">,</span> <span class="arg-name">off</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec2/" class="type-link">shade.Vec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec3/" class="type-link">shade.Vec3</a></code><a class="header-anchor" href="#fetch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Lottes `Fetch`: the texel `off` texels away from the one under `pos`, in linear light

| Name | Type |
|------|------|
| `pos` | [shade.Vec2](/api-docs/clay-native/shade/Vec2/) |
| `off` | [shade.Vec2](/api-docs/clay-native/shade/Vec2/) |

| Returns |
|---------|
| [shade.Vec3](/api-docs/clay-native/shade/Vec3/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="dist"><div class="plugin-name">shade</div><code><span class="field-name">dist</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec2/" class="type-link">shade.Vec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec2/" class="type-link">shade.Vec2</a></code><a class="header-anchor" href="#dist"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Lottes `Dist`: distance from the center of the texel under `pos`, in texels (-0.5 to 0.5)

| Name | Type |
|------|------|
| `pos` | [shade.Vec2](/api-docs/clay-native/shade/Vec2/) |

| Returns |
|---------|
| [shade.Vec2](/api-docs/clay-native/shade/Vec2/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="gaus"><div class="plugin-name">shade</div><code><span class="field-name">gaus</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">scale</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#gaus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Lottes `Gaus`: 1D Gaussian, `scale` is negative (`hardPix`, `hardScan`)

| Name | Type |
|------|------|
| `pos` | [Float](/api-docs/clay-native/Float/) |
| `scale` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="horz3"><div class="plugin-name">shade</div><code><span class="field-name">horz3</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec2/" class="type-link">shade.Vec2</a><span class="operator">,</span> <span class="arg-name">off</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec3/" class="type-link">shade.Vec3</a></code><a class="header-anchor" href="#horz3"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Lottes `Horz3`: 3-tap Gaussian reconstruction along x of the source row `off`

| Name | Type |
|------|------|
| `pos` | [shade.Vec2](/api-docs/clay-native/shade/Vec2/) |
| `off` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [shade.Vec3](/api-docs/clay-native/shade/Vec3/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="horz5"><div class="plugin-name">shade</div><code><span class="field-name">horz5</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec2/" class="type-link">shade.Vec2</a><span class="operator">,</span> <span class="arg-name">off</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec3/" class="type-link">shade.Vec3</a></code><a class="header-anchor" href="#horz5"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Lottes `Horz5`: 5-tap Gaussian reconstruction along x of the source row `off`

| Name | Type |
|------|------|
| `pos` | [shade.Vec2](/api-docs/clay-native/shade/Vec2/) |
| `off` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [shade.Vec3](/api-docs/clay-native/shade/Vec3/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="beamScale"><div class="plugin-name">shade</div><code><span class="field-name">beamScale</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec3/" class="type-link">shade.Vec3</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#beamScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Width of the beam drawing a row of the given color: the crt-geom idea
(brighter rows draw a wider beam), applied to the Lottes scanline Gaussian

| Name | Type |
|------|------|
| `c` | [shade.Vec3](/api-docs/clay-native/shade/Vec3/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="scan"><div class="plugin-name">shade</div><code><span class="field-name">scan</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec2/" class="type-link">shade.Vec2</a><span class="operator">,</span> <span class="arg-name">off</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">scale</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scan"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Lottes `Scan`: weight of the source row `off` at this position, for a beam of width `scale`

| Name | Type |
|------|------|
| `pos` | [shade.Vec2](/api-docs/clay-native/shade/Vec2/) |
| `off` | [Float](/api-docs/clay-native/Float/) |
| `scale` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="sharpTexel"><div class="plugin-name">shade</div><code><span class="field-name">sharpTexel</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec2/" class="type-link">shade.Vec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec3/" class="type-link">shade.Vec3</a></code><a class="header-anchor" href="#sharpTexel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pixel art antialiasing (Quilez, Themaister, Fernandes, Golus): nearest texel, with
bilinear interpolation only within a band of `sharpBand` output pixels around texel
edges, so that sub-pixel scrolling stays smooth without blurring the pixels

| Name | Type |
|------|------|
| `pos` | [shade.Vec2](/api-docs/clay-native/shade/Vec2/) |

| Returns |
|---------|
| [shade.Vec3](/api-docs/clay-native/shade/Vec3/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="maskTriad"><div class="plugin-name">shade</div><code><span class="field-name">maskTriad</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec3/" class="type-link">shade.Vec3</a></code><a class="header-anchor" href="#maskTriad"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Lottes: one RGB triad per three cells along `x` (in cells)

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [shade.Vec3](/api-docs/clay-native/shade/Vec3/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="maskTv"><div class="plugin-name">shade</div><code><span class="field-name">maskTv</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec2/" class="type-link">shade.Vec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec3/" class="type-link">shade.Vec3</a></code><a class="header-anchor" href="#maskTv"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Lottes mask 1: compressed TV style shadow mask, triads offset every other line

| Name | Type |
|------|------|
| `pos` | [shade.Vec2](/api-docs/clay-native/shade/Vec2/) |

| Returns |
|---------|
| [shade.Vec3](/api-docs/clay-native/shade/Vec3/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="maskAperture"><div class="plugin-name">shade</div><code><span class="field-name">maskAperture</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec2/" class="type-link">shade.Vec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec3/" class="type-link">shade.Vec3</a></code><a class="header-anchor" href="#maskAperture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Lottes mask 2: aperture grille

| Name | Type |
|------|------|
| `pos` | [shade.Vec2](/api-docs/clay-native/shade/Vec2/) |

| Returns |
|---------|
| [shade.Vec3](/api-docs/clay-native/shade/Vec3/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="maskVgaStretched"><div class="plugin-name">shade</div><code><span class="field-name">maskVgaStretched</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec2/" class="type-link">shade.Vec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec3/" class="type-link">shade.Vec3</a></code><a class="header-anchor" href="#maskVgaStretched"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Lottes mask 3: stretched VGA style shadow mask

| Name | Type |
|------|------|
| `pos` | [shade.Vec2](/api-docs/clay-native/shade/Vec2/) |

| Returns |
|---------|
| [shade.Vec3](/api-docs/clay-native/shade/Vec3/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="maskVga"><div class="plugin-name">shade</div><code><span class="field-name">maskVga</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec2/" class="type-link">shade.Vec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec3/" class="type-link">shade.Vec3</a></code><a class="header-anchor" href="#maskVga"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Lottes mask 4: VGA style shadow mask

| Name | Type |
|------|------|
| `pos` | [shade.Vec2](/api-docs/clay-native/shade/Vec2/) |

| Returns |
|---------|
| [shade.Vec3](/api-docs/clay-native/shade/Vec3/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="maskLcd"><div class="plugin-name">shade</div><code><span class="field-name">maskLcd</span><span class="parenthesis">(</span><span class="arg-name">uv</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec2/" class="type-link">shade.Vec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec3/" class="type-link">shade.Vec3</a></code><a class="header-anchor" href="#maskLcd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

LCD (after SameBoy): each source pixel split in three RGB subpixels, with a dark grid
between pixels. Tied to source pixels, not screen pixels: one game pixel is one LCD pixel

| Name | Type |
|------|------|
| `uv` | [shade.Vec2](/api-docs/clay-native/shade/Vec2/) |

| Returns |
|---------|
| [shade.Vec3](/api-docs/clay-native/shade/Vec3/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="mask"><div class="plugin-name">shade</div><code><span class="field-name">mask</span><span class="parenthesis">(</span><span class="arg-name">uv</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec2/" class="type-link">shade.Vec2</a><span class="operator">,</span> <span class="arg-name">screenPos</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec2/" class="type-link">shade.Vec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec3/" class="type-link">shade.Vec3</a></code><a class="header-anchor" href="#mask"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

`uv`: image coordinates (after curvature), for the LCD mask tied to source pixels.
`screenPos`: fragment position in screen pixels, for the phosphor masks

| Name | Type |
|------|------|
| `uv` | [shade.Vec2](/api-docs/clay-native/shade/Vec2/) |
| `screenPos` | [shade.Vec2](/api-docs/clay-native/shade/Vec2/) |

| Returns |
|---------|
| [shade.Vec3](/api-docs/clay-native/shade/Vec3/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="warp"><div class="plugin-name">shade</div><code><span class="field-name">warp</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec2/" class="type-link">shade.Vec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec2/" class="type-link">shade.Vec2</a></code><a class="header-anchor" href="#warp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Lottes `Warp`: barrel distortion of the image coordinates

| Name | Type |
|------|------|
| `pos` | [shade.Vec2](/api-docs/clay-native/shade/Vec2/) |

| Returns |
|---------|
| [shade.Vec2](/api-docs/clay-native/shade/Vec2/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="cornerMask"><div class="plugin-name">shade</div><code><span class="field-name">cornerMask</span><span class="parenthesis">(</span><span class="arg-name">uv</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec2/" class="type-link">shade.Vec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#cornerMask"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Rounded rectangle in source pixels: 1 inside, 0 outside. Also hides what the
curvature pushed outside the image

| Name | Type |
|------|------|
| `uv` | [shade.Vec2](/api-docs/clay-native/shade/Vec2/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="vignette"><div class="plugin-name">shade</div><code><span class="field-name">vignette</span><span class="parenthesis">(</span><span class="arg-name">uv</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec2/" class="type-link">shade.Vec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#vignette"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

crtemu vignette: 1 at the center, darker towards the edges

| Name | Type |
|------|------|
| `uv` | [shade.Vec2](/api-docs/clay-native/shade/Vec2/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="hash"><div class="plugin-name">shade</div><code><span class="field-name">hash</span><span class="parenthesis">(</span><span class="arg-name">p</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec2/" class="type-link">shade.Vec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#hash"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The usual one-line GLSL hash

| Name | Type |
|------|------|
| `p` | [shade.Vec2](/api-docs/clay-native/shade/Vec2/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="main"><div class="plugin-name">shade</div><code><span class="field-name">main</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec4/" class="type-link">shade.Vec4</a></code><a class="header-anchor" href="#main"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [shade.Vec4](/api-docs/clay-native/shade/Vec4/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | shade.macros.ShadeMacro.buildFragVertForHaxe() |
| `:autoBuild` | shade.macros.ShadeMacro.buildFragVertForHaxe() |
| `shade` | { precision : "highp" } |

