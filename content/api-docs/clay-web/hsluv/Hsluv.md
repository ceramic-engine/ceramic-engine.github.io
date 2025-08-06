---
layout: api-docs
category: api-docs
subCategory: doc
menu: Hsluv
title: Hsluv
target: Clay (Web)
permalink: api-docs/clay-web/hsluv/Hsluv/
---

# Hsluv

<div class="view-source"><a href="https://github.com/ceramic-engine/hsluv/blob/master/haxe/src/hsluv/Hsluv.hx">View source</a></div>

<div class="type-hierarchy"><strong>hsluv.Hsluv</strong> (Class)</div>

Human-friendly HSL conversion utility class.

The math for most of this module was taken from:

http://www.easyrgb.com
http://www.brucelindbloom.com
Wikipedia

All numbers below taken from math/bounds.wxm wxMaxima file. We use 17
digits of decimal precision to export the numbers, effectively exporting
them as double precision IEEE 754 floats.

"If an IEEE 754 double precision is converted to a decimal string with at
least 17 significant digits and then converted back to double, then the
final number must match the original"

Source: https://en.wikipedia.org/wiki/Double-precision_floating-point_format
=======

## Static Members

<div class="signature field-method has-description" id="getBounds"><code><span class="field-name">getBounds</span><span class="parenthesis">(</span><span class="arg-name">L</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/hsluv/Line/" class="type-link">Line</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getBounds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

For a given lightness, return a list of 6 lines in slope-intercept
form that represent the bounds in CIELUV, stepping over which will
push a value out of the RGB gamut

| Name | Type |
|------|------|
| `L` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[Line](/api-docs/clay-web/hsluv/Line/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="maxSafeChromaForL"><code><span class="field-name">maxSafeChromaForL</span><span class="parenthesis">(</span><span class="arg-name">L</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#maxSafeChromaForL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

For given lightness, returns the maximum chroma. Keeping the chroma value
below this number will ensure that for any hue, the color is within the RGB
gamut.

| Name | Type |
|------|------|
| `L` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="maxChromaForLH"><code><span class="field-name">maxChromaForLH</span><span class="parenthesis">(</span><span class="arg-name">L</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">H</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#maxChromaForLH"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `L` | [Float](/api-docs/clay-web/Float/) |
| `H` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="xyzToRgb"><code><span class="field-name">xyzToRgb</span><span class="parenthesis">(</span><span class="arg-name">tuple</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">result</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#xyzToRgb"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

XYZ coordinates are ranging in [0;1] and RGB coordinates in [0;1] range.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `tuple` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | | An array containing the color's X,Y and Z values.  |
| `result` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* | A pre-allocated array to store the result into.  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | An array containing the resulting color's red, green and blue. |

<hr class="field-separator" />

<div class="signature field-method has-description" id="rgbToXyz"><code><span class="field-name">rgbToXyz</span><span class="parenthesis">(</span><span class="arg-name">tuple</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">result</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#rgbToXyz"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

RGB coordinates are ranging in [0;1] and XYZ coordinates in [0;1].


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `tuple` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | | An array containing the color's R,G,B values.  |
| `result` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* | A pre-allocated array to store the result into.  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | An array containing the resulting color's XYZ coordinates. |

<hr class="field-separator" />

<div class="signature field-method no-description" id="yToL"><code><span class="field-name">yToL</span><span class="parenthesis">(</span><span class="arg-name">Y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#yToL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `Y` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="lToY"><code><span class="field-name">lToY</span><span class="parenthesis">(</span><span class="arg-name">L</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lToY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `L` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="xyzToLuv"><code><span class="field-name">xyzToLuv</span><span class="parenthesis">(</span><span class="arg-name">tuple</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">result</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#xyzToLuv"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

XYZ coordinates are ranging in [0;1].


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `tuple` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | | An array containing the color's X,Y,Z values.  |
| `result` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* | A pre-allocated array to store the result into.  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | An array containing the resulting color's LUV coordinates. |

<hr class="field-separator" />

<div class="signature field-method has-description" id="luvToXyz"><code><span class="field-name">luvToXyz</span><span class="parenthesis">(</span><span class="arg-name">tuple</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">result</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#luvToXyz"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

XYZ coordinates are ranging in [0;1].


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `tuple` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | | An array containing the color's L,U,V values.  |
| `result` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* | A pre-allocated array to store the result into.  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | An array containing the resulting color's XYZ coordinates. |

<hr class="field-separator" />

<div class="signature field-method has-description" id="luvToLch"><code><span class="field-name">luvToLch</span><span class="parenthesis">(</span><span class="arg-name">tuple</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">result</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#luvToLch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `tuple` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | | An array containing the color's L,U,V values.  |
| `result` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* | A pre-allocated array to store the result into.  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | An array containing the resulting color's LCH coordinates. |

<hr class="field-separator" />

<div class="signature field-method has-description" id="lchToLuv"><code><span class="field-name">lchToLuv</span><span class="parenthesis">(</span><span class="arg-name">tuple</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">result</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#lchToLuv"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `tuple` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | | An array containing the color's L,C,H values.  |
| `result` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* | A pre-allocated array to store the result into.  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | An array containing the resulting color's LUV coordinates. |

<hr class="field-separator" />

<div class="signature field-method has-description" id="hsluvToLch"><code><span class="field-name">hsluvToLch</span><span class="parenthesis">(</span><span class="arg-name">tuple</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">result</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#hsluvToLch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

HSLuv values are ranging in [0;360], [0;100] and [0;100].


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `tuple` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | | An array containing the color's H,S,L values in HSLuv color space.  |
| `result` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* | A pre-allocated array to store the result into.  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | An array containing the resulting color's LCH coordinates. |

<hr class="field-separator" />

<div class="signature field-method has-description" id="lchToHsluv"><code><span class="field-name">lchToHsluv</span><span class="parenthesis">(</span><span class="arg-name">tuple</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">result</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#lchToHsluv"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

HSLuv values are ranging in [0;360], [0;100] and [0;100].


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `tuple` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | | An array containing the color's LCH values.  |
| `result` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* | A pre-allocated array to store the result into.  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | An array containing the resulting color's HSL coordinates in HSLuv color space. |

<hr class="field-separator" />

<div class="signature field-method has-description" id="hpluvToLch"><code><span class="field-name">hpluvToLch</span><span class="parenthesis">(</span><span class="arg-name">tuple</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#hpluvToLch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

HSLuv values are in [0;360], [0;100] and [0;100].


| Name | Type | Description |
|------|------|-------------|
| `tuple` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | An array containing the color's H,S,L values in HPLuv (pastel variant) color space.  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | An array containing the resulting color's LCH coordinates. |

<hr class="field-separator" />

<div class="signature field-method has-description" id="lchToHpluv"><code><span class="field-name">lchToHpluv</span><span class="parenthesis">(</span><span class="arg-name">tuple</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#lchToHpluv"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

HSLuv values are ranging in [0;360], [0;100] and [0;100].


| Name | Type | Description |
|------|------|-------------|
| `tuple` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | An array containing the color's LCH values.  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | An array containing the resulting color's HSL coordinates in HPLuv (pastel variant) color space. |

<hr class="field-separator" />

<div class="signature field-method has-description" id="rgbToHex"><code><span class="field-name">rgbToHex</span><span class="parenthesis">(</span><span class="arg-name">tuple</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#rgbToHex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

RGB values are ranging in [0;1].


| Name | Type | Description |
|------|------|-------------|
| `tuple` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | An array containing the color's RGB values.  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-web/String/) | A string containing a `#RRGGBB` representation of given color. |

<hr class="field-separator" />

<div class="signature field-method has-description" id="hexToRgb"><code><span class="field-name">hexToRgb</span><span class="parenthesis">(</span><span class="arg-name">hex</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#hexToRgb"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

RGB values are ranging in [0;1].


| Name | Type | Description |
|------|------|-------------|
| `hex` | [String](/api-docs/clay-web/String/) | A `#RRGGBB` representation of a color.  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | An array containing the color's RGB values. |

<hr class="field-separator" />

<div class="signature field-method has-description" id="lchToRgb"><code><span class="field-name">lchToRgb</span><span class="parenthesis">(</span><span class="arg-name">tuple</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">result</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#lchToRgb"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

RGB values are ranging in [0;1].


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `tuple` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | | An array containing the color's LCH values.  |
| `result` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* | A pre-allocated array to store the result into.  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | An array containing the resulting color's RGB coordinates. |

<hr class="field-separator" />

<div class="signature field-method has-description" id="rgbToLch"><code><span class="field-name">rgbToLch</span><span class="parenthesis">(</span><span class="arg-name">tuple</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">result</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#rgbToLch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

RGB values are ranging in [0;1].


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `tuple` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | | An array containing the color's RGB values.  |
| `result` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* | A pre-allocated array to store the result into.  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | An array containing the resulting color's LCH coordinates. |

<hr class="field-separator" />

<div class="signature field-method has-description" id="hsluvToRgb"><code><span class="field-name">hsluvToRgb</span><span class="parenthesis">(</span><span class="arg-name">tuple</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">result</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#hsluvToRgb"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

HSLuv values are ranging in [0;360], [0;100] and [0;100] and RGB in [0;1].


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `tuple` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | | An array containing the color's HSL values in HSLuv color space.  |
| `result` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* | A pre-allocated array to store the result into.  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | An array containing the resulting color's RGB coordinates. |

<hr class="field-separator" />

<div class="signature field-method has-description" id="rgbToHsluv"><code><span class="field-name">rgbToHsluv</span><span class="parenthesis">(</span><span class="arg-name">tuple</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">result</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#rgbToHsluv"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

HSLuv values are ranging in [0;360], [0;100] and [0;100] and RGB in [0;1].


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `tuple` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | | An array containing the color's RGB coordinates.  |
| `result` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* | A pre-allocated array to store the result into.  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | An array containing the resulting color's HSL coordinates in HSLuv color space. |

<hr class="field-separator" />

<div class="signature field-method has-description" id="hpluvToRgb"><code><span class="field-name">hpluvToRgb</span><span class="parenthesis">(</span><span class="arg-name">tuple</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#hpluvToRgb"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

HSLuv values are ranging in [0;360], [0;100] and [0;100] and RGB in [0;1].


| Name | Type | Description |
|------|------|-------------|
| `tuple` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | An array containing the color's HSL values in HPLuv (pastel variant) color space.  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | An array containing the resulting color's RGB coordinates. |

<hr class="field-separator" />

<div class="signature field-method has-description" id="rgbToHpluv"><code><span class="field-name">rgbToHpluv</span><span class="parenthesis">(</span><span class="arg-name">tuple</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#rgbToHpluv"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

HSLuv values are ranging in [0;360], [0;100] and [0;100] and RGB in [0;1].


| Name | Type | Description |
|------|------|-------------|
| `tuple` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | An array containing the color's RGB coordinates.  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | An array containing the resulting color's HSL coordinates in HPLuv (pastel variant) color space. |

<hr class="field-separator" />

<div class="signature field-method has-description" id="hsluvToHex"><code><span class="field-name">hsluvToHex</span><span class="parenthesis">(</span><span class="arg-name">tuple</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#hsluvToHex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

HSLuv values are ranging in [0;360], [0;100] and [0;100] and RGB in [0;1].


| Name | Type | Description |
|------|------|-------------|
| `tuple` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | An array containing the color's HSL values in HSLuv color space.  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-web/String/) | A string containing a `#RRGGBB` representation of given color. |

<hr class="field-separator" />

<div class="signature field-method no-description" id="hpluvToHex"><code><span class="field-name">hpluvToHex</span><span class="parenthesis">(</span><span class="arg-name">tuple</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#hpluvToHex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `tuple` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="hexToHsluv"><code><span class="field-name">hexToHsluv</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#hexToHsluv"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

HSLuv values are ranging in [0;360], [0;100] and [0;100] and RGB in [0;1].


| Name | Type |
|------|------|
| `s` | [String](/api-docs/clay-web/String/) |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | An array containing the color's HSL values in HSLuv color space. |

<hr class="field-separator" />

<div class="signature field-method has-description" id="hexToHpluv"><code><span class="field-name">hexToHpluv</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#hexToHpluv"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

HSLuv values are ranging in [0;360], [0;100] and [0;100] and RGB in [0;1].


| Name | Type |
|------|------|
| `s` | [String](/api-docs/clay-web/String/) |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | An array containing the color's HSL values in HPLuv (pastel variant) color space. |

## Private Members

<div class="signature field-var no-description" id="m"><code><span class="field-name">m</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#m"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="minv"><code><span class="field-name">minv</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#minv"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="refY"><code><span class="field-name">refY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#refY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="refU"><code><span class="field-name">refU</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#refU"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="refV"><code><span class="field-name">refV</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#refV"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="kappa"><code><span class="field-name">kappa</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#kappa"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="epsilon"><code><span class="field-name">epsilon</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#epsilon"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="hexChars"><code><span class="field-name">hexChars</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#hexChars"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="dotProduct"><code><span class="field-name">dotProduct</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#dotProduct"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> |
| `b` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="fromLinear"><code><span class="field-name">fromLinear</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#fromLinear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `c` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="toLinear"><code><span class="field-name">toLinear</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#toLinear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `c` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

