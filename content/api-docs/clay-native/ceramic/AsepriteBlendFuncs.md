---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ase
title: AsepriteBlendFuncs
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/AsepriteBlendFuncs/
---

# AsepriteBlendFuncs

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ase/runtime/src/ceramic/AsepriteBlendFuncs.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.AsepriteBlendFuncs</strong> (Class)</div>

Blending functions that operate at pixel/color level, ported from Aseprite source code.

This class provides a comprehensive set of blend modes compatible with Aseprite files,
implementing standard compositing operations like multiply, screen, overlay, and more
advanced modes like color dodge, soft light, and HSL-based blending.

All blending operations work with RGBA colors and support opacity/transparency.
The implementations are optimized for performance with inline functions and
platform-specific optimizations.

References:
- W3C Compositing and Blending Level 1: http://dev.w3.org/fxtf/compositing-1/
- Aseprite source: https://github.com/aseprite/aseprite

<div class="see"><strong>See:</strong> AsepriteData for usage in Aseprite file rendering</div>


## Static Members

<div class="signature field-method has-description has-plugin" id="min"><div class="plugin-name">ase</div><code><span class="field-name">min</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#min"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the minimum of two integers.


| Name | Type | Description |
|------|------|-------------|
| `a` | [Int](/api-docs/clay-native/Int/) | First value  |
| `b` | [Int](/api-docs/clay-native/Int/) | Second value  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-native/Int/) | The smaller value |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="max"><div class="plugin-name">ase</div><code><span class="field-name">max</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#max"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Int](/api-docs/clay-native/Int/) |
| `b` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="abs"><div class="plugin-name">ase</div><code><span class="field-name">abs</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#abs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `v` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="half"><div class="plugin-name">ase</div><code><span class="field-name">half</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#half"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `v` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="div"><div class="plugin-name">ase</div><code><span class="field-name">div</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#div"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Int](/api-docs/clay-native/Int/) |
| `b` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="blendMultiply"><div class="plugin-name">ase</div><code><span class="field-name">blendMultiply</span><span class="parenthesis">(</span><span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">t</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#blendMultiply"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Multiply blend mode: Darkens by multiplying colors.
Result = backdrop * source


| Name | Type | Description |
|------|------|-------------|
| `b` | [Int](/api-docs/clay-native/Int/) | Backdrop (base) color component (0-255)  |
| `s` | [Int](/api-docs/clay-native/Int/) | Source color component (0-255)  |
| `t` | [Int](/api-docs/clay-native/Int/) | Temporary variable for optimization  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-native/Int/) | Blended color component (0-255) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="blendScreen"><div class="plugin-name">ase</div><code><span class="field-name">blendScreen</span><span class="parenthesis">(</span><span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">t</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#blendScreen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Screen blend mode: Lightens by inverting, multiplying, and inverting again.
Result = 1 - (1-backdrop) * (1-source)


| Name | Type | Description |
|------|------|-------------|
| `b` | [Int](/api-docs/clay-native/Int/) | Backdrop color component (0-255)  |
| `s` | [Int](/api-docs/clay-native/Int/) | Source color component (0-255)  |
| `t` | [Int](/api-docs/clay-native/Int/) | Temporary variable for optimization  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-native/Int/) | Blended color component (0-255) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="blendOverlay"><div class="plugin-name">ase</div><code><span class="field-name">blendOverlay</span><span class="parenthesis">(</span><span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">t</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#blendOverlay"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `b` | [Int](/api-docs/clay-native/Int/) |
| `s` | [Int](/api-docs/clay-native/Int/) |
| `t` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="blendDarken"><div class="plugin-name">ase</div><code><span class="field-name">blendDarken</span><span class="parenthesis">(</span><span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#blendDarken"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `b` | [Int](/api-docs/clay-native/Int/) |
| `s` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="blendLighten"><div class="plugin-name">ase</div><code><span class="field-name">blendLighten</span><span class="parenthesis">(</span><span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#blendLighten"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `b` | [Int](/api-docs/clay-native/Int/) |
| `s` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="blendHardLight"><div class="plugin-name">ase</div><code><span class="field-name">blendHardLight</span><span class="parenthesis">(</span><span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">t</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#blendHardLight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `b` | [Int](/api-docs/clay-native/Int/) |
| `s` | [Int](/api-docs/clay-native/Int/) |
| `t` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="blendDifference"><div class="plugin-name">ase</div><code><span class="field-name">blendDifference</span><span class="parenthesis">(</span><span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#blendDifference"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `b` | [Int](/api-docs/clay-native/Int/) |
| `s` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="blendExclusion"><div class="plugin-name">ase</div><code><span class="field-name">blendExclusion</span><span class="parenthesis">(</span><span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">t</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#blendExclusion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `b` | [Int](/api-docs/clay-native/Int/) |
| `s` | [Int](/api-docs/clay-native/Int/) |
| `t` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="blendColorDodge"><div class="plugin-name">ase</div><code><span class="field-name">blendColorDodge</span><span class="parenthesis">(</span><span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#blendColorDodge"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Color dodge blend mode: Brightens the backdrop to reflect the source.
Result = backdrop / (1 - source)


| Name | Type | Description |
|------|------|-------------|
| `b` | [Int](/api-docs/clay-native/Int/) | Backdrop color component (0-255)  |
| `s` | [Int](/api-docs/clay-native/Int/) | Source color component (0-255)  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-native/Int/) | Blended color component (0-255) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="blendColorBurn"><div class="plugin-name">ase</div><code><span class="field-name">blendColorBurn</span><span class="parenthesis">(</span><span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#blendColorBurn"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `b` | [Int](/api-docs/clay-native/Int/) |
| `s` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="blendSoftLight"><div class="plugin-name">ase</div><code><span class="field-name">blendSoftLight</span><span class="parenthesis">(</span><span class="arg-name">_b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">_s</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#blendSoftLight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Soft light blend mode: Similar to overlay but softer.
Uses a complex formula that creates a subtle lighting effect.


| Name | Type | Description |
|------|------|-------------|
| `_b` | [Int](/api-docs/clay-native/Int/) | Backdrop color component (0-255)  |
| `_s` | [Int](/api-docs/clay-native/Int/) | Source color component (0-255)  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-native/Int/) | Blended color component (0-255) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="blendDivide"><div class="plugin-name">ase</div><code><span class="field-name">blendDivide</span><span class="parenthesis">(</span><span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#blendDivide"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `b` | [Int](/api-docs/clay-native/Int/) |
| `s` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="rgba"><div class="plugin-name">ase</div><code><span class="field-name">rgba</span><span class="parenthesis">(</span><span class="arg-name">r</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">g</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a></code><a class="header-anchor" href="#rgba"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates an AlphaColor from RGBA components.


| Name | Type | Description |
|------|------|-------------|
| `r` | [Int](/api-docs/clay-native/Int/) | Red component (0-255)  |
| `g` | [Int](/api-docs/clay-native/Int/) | Green component (0-255)  |
| `b` | [Int](/api-docs/clay-native/Int/) | Blue component (0-255)  |
| `a` | [Int](/api-docs/clay-native/Int/) | Alpha component (0-255)  |

| Returns | Description |
|---------|-------------|
| [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) | ARGB color value |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="rgbaLuma"><div class="plugin-name">ase</div><code><span class="field-name">rgbaLuma</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#rgbaLuma"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculates the luminance of an ARGB color.
Uses standard luminance weights for RGB components.


| Name | Type | Description |
|------|------|-------------|
| `c` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) | The color to analyze  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-native/Int/) | Luminance value (0-255) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="rgbLuma"><div class="plugin-name">ase</div><code><span class="field-name">rgbLuma</span><span class="parenthesis">(</span><span class="arg-name">r</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">g</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#rgbLuma"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculates luminance from RGB components.
Uses ITU-R BT.709 luma coefficients.


| Name | Type | Description |
|------|------|-------------|
| `r` | [Int](/api-docs/clay-native/Int/) | Red component (0-255)  |
| `g` | [Int](/api-docs/clay-native/Int/) | Green component (0-255)  |
| `b` | [Int](/api-docs/clay-native/Int/) | Blue component (0-255)  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-native/Int/) | Luminance value (0-255) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="rgbaBlenderSrc"><div class="plugin-name">ase</div><code><span class="field-name">rgbaBlenderSrc</span><span class="parenthesis">(</span><span class="arg-name">backdrop</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a></code><a class="header-anchor" href="#rgbaBlenderSrc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Source blend mode: Replaces backdrop with source.


| Name | Type | Description |
|------|------|-------------|
| `backdrop` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) | The base color  |
| `src` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) | The source color  |
| `opacity` | [Int](/api-docs/clay-native/Int/) | Blend opacity (0-255)  |

| Returns | Description |
|---------|-------------|
| [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) | The source color unchanged |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="rgbaBlenderMerge"><div class="plugin-name">ase</div><code><span class="field-name">rgbaBlenderMerge</span><span class="parenthesis">(</span><span class="arg-name">backdrop</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a></code><a class="header-anchor" href="#rgbaBlenderMerge"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Merge blend mode: Blends colors based on opacity.
Similar to normal blend but with different alpha handling.


| Name | Type | Description |
|------|------|-------------|
| `backdrop` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) | The base color  |
| `src` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) | The source color  |
| `opacity` | [Int](/api-docs/clay-native/Int/) | Blend opacity (0-255)  |

| Returns | Description |
|---------|-------------|
| [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) | The merged color |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="rgbaBlenderNegBw"><div class="plugin-name">ase</div><code><span class="field-name">rgbaBlenderNegBw</span><span class="parenthesis">(</span><span class="arg-name">backdrop</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a></code><a class="header-anchor" href="#rgbaBlenderNegBw"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `backdrop` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |
| `src` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |
| `opacity` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="rgbaBlenderRedTint"><div class="plugin-name">ase</div><code><span class="field-name">rgbaBlenderRedTint</span><span class="parenthesis">(</span><span class="arg-name">backdrop</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a></code><a class="header-anchor" href="#rgbaBlenderRedTint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `backdrop` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |
| `src` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |
| `opacity` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="rgbaBlenderBlueTint"><div class="plugin-name">ase</div><code><span class="field-name">rgbaBlenderBlueTint</span><span class="parenthesis">(</span><span class="arg-name">backdrop</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a></code><a class="header-anchor" href="#rgbaBlenderBlueTint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `backdrop` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |
| `src` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |
| `opacity` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="rgbaBlenderNormal"><div class="plugin-name">ase</div><code><span class="field-name">rgbaBlenderNormal</span><span class="parenthesis">(</span><span class="arg-name">backdrop</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a></code><a class="header-anchor" href="#rgbaBlenderNormal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Normal blend mode: Standard alpha compositing.
This is the most common blend mode, implementing Porter-Duff "over" operator.


| Name | Type | Description |
|------|------|-------------|
| `backdrop` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) | The base color  |
| `src` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) | The source color  |
| `opacity` | [Int](/api-docs/clay-native/Int/) | Blend opacity (0-255)  |

| Returns | Description |
|---------|-------------|
| [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) | The composited color |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="rgbaBlenderNormalDstOver"><div class="plugin-name">ase</div><code><span class="field-name">rgbaBlenderNormalDstOver</span><span class="parenthesis">(</span><span class="arg-name">backdrop</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a></code><a class="header-anchor" href="#rgbaBlenderNormalDstOver"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `backdrop` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |
| `src` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |
| `opacity` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="rgbaBlenderMultiply"><div class="plugin-name">ase</div><code><span class="field-name">rgbaBlenderMultiply</span><span class="parenthesis">(</span><span class="arg-name">backdrop</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a></code><a class="header-anchor" href="#rgbaBlenderMultiply"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Multiply blend mode for RGBA colors.
Darkens the image by multiplying color values.


| Name | Type | Description |
|------|------|-------------|
| `backdrop` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) | The base color  |
| `src` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) | The source color  |
| `opacity` | [Int](/api-docs/clay-native/Int/) | Blend opacity (0-255)  |

| Returns | Description |
|---------|-------------|
| [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) | The blended color |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="rgbaBlenderScreen"><div class="plugin-name">ase</div><code><span class="field-name">rgbaBlenderScreen</span><span class="parenthesis">(</span><span class="arg-name">backdrop</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a></code><a class="header-anchor" href="#rgbaBlenderScreen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `backdrop` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |
| `src` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |
| `opacity` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="rgbaBlenderOverlay"><div class="plugin-name">ase</div><code><span class="field-name">rgbaBlenderOverlay</span><span class="parenthesis">(</span><span class="arg-name">backdrop</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a></code><a class="header-anchor" href="#rgbaBlenderOverlay"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `backdrop` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |
| `src` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |
| `opacity` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="rgbaBlenderDarken"><div class="plugin-name">ase</div><code><span class="field-name">rgbaBlenderDarken</span><span class="parenthesis">(</span><span class="arg-name">backdrop</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a></code><a class="header-anchor" href="#rgbaBlenderDarken"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `backdrop` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |
| `src` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |
| `opacity` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="rgbaBlenderLighten"><div class="plugin-name">ase</div><code><span class="field-name">rgbaBlenderLighten</span><span class="parenthesis">(</span><span class="arg-name">backdrop</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a></code><a class="header-anchor" href="#rgbaBlenderLighten"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `backdrop` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |
| `src` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |
| `opacity` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="rgbaBlenderColorDodge"><div class="plugin-name">ase</div><code><span class="field-name">rgbaBlenderColorDodge</span><span class="parenthesis">(</span><span class="arg-name">backdrop</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a></code><a class="header-anchor" href="#rgbaBlenderColorDodge"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `backdrop` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |
| `src` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |
| `opacity` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="rgbaBlenderColorBurn"><div class="plugin-name">ase</div><code><span class="field-name">rgbaBlenderColorBurn</span><span class="parenthesis">(</span><span class="arg-name">backdrop</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a></code><a class="header-anchor" href="#rgbaBlenderColorBurn"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `backdrop` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |
| `src` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |
| `opacity` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="rgbaBlenderHardLight"><div class="plugin-name">ase</div><code><span class="field-name">rgbaBlenderHardLight</span><span class="parenthesis">(</span><span class="arg-name">backdrop</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a></code><a class="header-anchor" href="#rgbaBlenderHardLight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `backdrop` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |
| `src` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |
| `opacity` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="rgbaBlenderSoftLight"><div class="plugin-name">ase</div><code><span class="field-name">rgbaBlenderSoftLight</span><span class="parenthesis">(</span><span class="arg-name">backdrop</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a></code><a class="header-anchor" href="#rgbaBlenderSoftLight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `backdrop` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |
| `src` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |
| `opacity` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="rgbaBlenderDifference"><div class="plugin-name">ase</div><code><span class="field-name">rgbaBlenderDifference</span><span class="parenthesis">(</span><span class="arg-name">backdrop</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a></code><a class="header-anchor" href="#rgbaBlenderDifference"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `backdrop` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |
| `src` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |
| `opacity` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="rgbaBlenderExclusion"><div class="plugin-name">ase</div><code><span class="field-name">rgbaBlenderExclusion</span><span class="parenthesis">(</span><span class="arg-name">backdrop</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a></code><a class="header-anchor" href="#rgbaBlenderExclusion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `backdrop` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |
| `src` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |
| `opacity` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="lum"><div class="plugin-name">ase</div><code><span class="field-name">lum</span><span class="parenthesis">(</span><span class="arg-name">r</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">g</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lum"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculates luminance using different weights than rgbLuma.
Uses NTSC/PAL weights for backward compatibility.


| Name | Type | Description |
|------|------|-------------|
| `r` | [Float](/api-docs/clay-native/Float/) | Red component (0-1)  |
| `g` | [Float](/api-docs/clay-native/Float/) | Green component (0-1)  |
| `b` | [Float](/api-docs/clay-native/Float/) | Blue component (0-1)  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-native/Float/) | Luminance value (0-1) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="sat"><div class="plugin-name">ase</div><code><span class="field-name">sat</span><span class="parenthesis">(</span><span class="arg-name">r</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">g</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#sat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculates color saturation.


| Name | Type | Description |
|------|------|-------------|
| `r` | [Float](/api-docs/clay-native/Float/) | Red component (0-1)  |
| `g` | [Float](/api-docs/clay-native/Float/) | Green component (0-1)  |
| `b` | [Float](/api-docs/clay-native/Float/) | Blue component (0-1)  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-native/Float/) | Saturation value (0-1) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="clipColor"><div class="plugin-name">ase</div><code><span class="field-name">clipColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clipColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setLum"><div class="plugin-name">ase</div><code><span class="field-name">setLum</span><span class="parenthesis">(</span><span class="arg-name">l</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setLum"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `l` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="rgbaBlenderHslHue"><div class="plugin-name">ase</div><code><span class="field-name">rgbaBlenderHslHue</span><span class="parenthesis">(</span><span class="arg-name">backdrop</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a></code><a class="header-anchor" href="#rgbaBlenderHslHue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

HSL Hue blend mode: Uses hue from source, saturation and luminosity from backdrop.


| Name | Type | Description |
|------|------|-------------|
| `backdrop` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) | The base color  |
| `src` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) | The source color  |
| `opacity` | [Int](/api-docs/clay-native/Int/) | Blend opacity (0-255)  |

| Returns | Description |
|---------|-------------|
| [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) | The blended color |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="rgbaBlenderHslSaturation"><div class="plugin-name">ase</div><code><span class="field-name">rgbaBlenderHslSaturation</span><span class="parenthesis">(</span><span class="arg-name">backdrop</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a></code><a class="header-anchor" href="#rgbaBlenderHslSaturation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `backdrop` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |
| `src` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |
| `opacity` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="rgbaBlenderHslColor"><div class="plugin-name">ase</div><code><span class="field-name">rgbaBlenderHslColor</span><span class="parenthesis">(</span><span class="arg-name">backdrop</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a></code><a class="header-anchor" href="#rgbaBlenderHslColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `backdrop` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |
| `src` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |
| `opacity` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="rgbaBlenderHslLuminosity"><div class="plugin-name">ase</div><code><span class="field-name">rgbaBlenderHslLuminosity</span><span class="parenthesis">(</span><span class="arg-name">backdrop</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a></code><a class="header-anchor" href="#rgbaBlenderHslLuminosity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `backdrop` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |
| `src` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |
| `opacity` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="rgbaBlenderAddition"><div class="plugin-name">ase</div><code><span class="field-name">rgbaBlenderAddition</span><span class="parenthesis">(</span><span class="arg-name">backdrop</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a></code><a class="header-anchor" href="#rgbaBlenderAddition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Addition blend mode: Adds color values together.
Results are clamped to prevent overflow.


| Name | Type | Description |
|------|------|-------------|
| `backdrop` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) | The base color  |
| `src` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) | The source color  |
| `opacity` | [Int](/api-docs/clay-native/Int/) | Blend opacity (0-255)  |

| Returns | Description |
|---------|-------------|
| [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) | The blended color |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="rgbaBlenderSubtract"><div class="plugin-name">ase</div><code><span class="field-name">rgbaBlenderSubtract</span><span class="parenthesis">(</span><span class="arg-name">backdrop</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a></code><a class="header-anchor" href="#rgbaBlenderSubtract"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `backdrop` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |
| `src` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |
| `opacity` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="rgbaBlenderDivide"><div class="plugin-name">ase</div><code><span class="field-name">rgbaBlenderDivide</span><span class="parenthesis">(</span><span class="arg-name">backdrop</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">AlphaColor</a></code><a class="header-anchor" href="#rgbaBlenderDivide"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `backdrop` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |
| `src` | [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |
| `opacity` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) |

## Private Members

<div class="signature field-var has-description has-plugin" id="A_MASK"><div class="plugin-name">ase</div><code><span class="field-name">A_MASK</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#A_MASK"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Bit mask for extracting alpha channel from ARGB color.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="RGB_MASK"><div class="plugin-name">ase</div><code><span class="field-name">RGB_MASK</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#RGB_MASK"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Bit mask for extracting RGB channels from ARGB color.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="A_SHIFT"><div class="plugin-name">ase</div><code><span class="field-name">A_SHIFT</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#A_SHIFT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Bit shift amount for alpha channel in ARGB format.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="mul_un8_0"><div class="plugin-name">ase</div><code><span class="field-name">mul_un8_0</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">t</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#mul_un8_0"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optimized 8-bit multiplication (part 1).
Multiplies two 8-bit values with rounding.


| Name | Type | Description |
|------|------|-------------|
| `a` | [Int](/api-docs/clay-native/Int/) | First value (0-255)  |
| `b` | [Int](/api-docs/clay-native/Int/) | Second value (0-255)  |
| `t` | [Int](/api-docs/clay-native/Int/) | Temporary storage  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-native/Int/) | Intermediate result |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="mul_un8_1"><div class="plugin-name">ase</div><code><span class="field-name">mul_un8_1</span><span class="parenthesis">(</span><span class="arg-name">t</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#mul_un8_1"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optimized 8-bit multiplication (part 2).
Completes the multiplication with proper rounding.


| Name | Type | Description |
|------|------|-------------|
| `t` | [Int](/api-docs/clay-native/Int/) | Intermediate result from mul_un8_0  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-native/Int/) | Final multiplied value (0-255) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="div_un8"><div class="plugin-name">ase</div><code><span class="field-name">div_un8</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#div_un8"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Int](/api-docs/clay-native/Int/) |
| `b` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setSat"><div class="plugin-name">ase</div><code><span class="field-name">setSat</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setSat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `s` | [Float](/api-docs/clay-native/Float/) |

