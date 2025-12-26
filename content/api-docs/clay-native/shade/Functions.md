---
layout: api-docs
category: api-docs
subCategory: doc
menu: Shade
title: Functions
target: Clay (Native)
permalink: api-docs/clay-native/shade/Functions/
---

# Functions

<div class="type-hierarchy"><strong>shade.Functions</strong> (extern class)</div>

## Static Members

<div class="signature field-method has-description" id="texture"><code><span class="field-name">texture</span><span class="parenthesis">(</span><span class="arg-name">sampler</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Sampler2D/" class="type-link">Sampler2D</a><span class="operator">,</span> <span class="arg-name">coord</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec2/" class="type-link">Vec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec4/" class="type-link">Vec4</a></code><a class="header-anchor" href="#texture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Samples a texture at the given coordinate.


| Name | Type | Description |
|------|------|-------------|
| `sampler` | [Sampler2D](/api-docs/clay-native/shade/Sampler2D/) | The texture sampler to read from  |
| `coord` | [Vec2](/api-docs/clay-native/shade/Vec2/) | The texture coordinates (0.0 to 1.0 range typically)  |

| Returns | Description |
|---------|-------------|
| [Vec4](/api-docs/clay-native/shade/Vec4/) | The color value at the sampled location as a Vec4 (RGBA) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="dFdx"><code><span class="field-name">dFdx</span><span class="parenthesis">(</span><span class="arg-name">p</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#dFdx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the partial derivative of p with respect to the window x coordinate.
Only available in fragment shaders. Useful for computing rates of change for anti-aliasing.

| Name | Type |
|------|------|
| `p` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="dFdy"><code><span class="field-name">dFdy</span><span class="parenthesis">(</span><span class="arg-name">p</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#dFdy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the partial derivative of p with respect to the window y coordinate.
Only available in fragment shaders. Useful for computing rates of change for anti-aliasing.

| Name | Type |
|------|------|
| `p` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fwidth"><code><span class="field-name">fwidth</span><span class="parenthesis">(</span><span class="arg-name">p</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#fwidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the sum of the absolute values of derivatives in x and y.
Equivalent to abs(dFdx(p)) + abs(dFdy(p)).
Useful for determining how fast a value is changing for anti-aliasing purposes.

| Name | Type |
|------|------|
| `p` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="discard"><code><span class="field-name">discard</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#discard"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Discards the current fragment. The fragment will not be written to the framebuffer.
Only available in fragment shaders. Cannot be called conditionally in all implementations.

<hr class="field-separator" />

<div class="signature field-method has-description" id="float"><code><span class="field-name">float</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#float"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get a float value from an int.

| Name | Type |
|------|------|
| `x` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="vec2"><code><span class="field-name">vec2</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec2/" class="type-link">Vec2</a></code><a class="header-anchor" href="#vec2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Constructs a 2-component vector from individual x and y values.

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-native/Float/) |
| `y` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Vec2](/api-docs/clay-native/shade/Vec2/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="vec3"><code><span class="field-name">vec3</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec3/" class="type-link">Vec3</a></code><a class="header-anchor" href="#vec3"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Constructs a 3-component vector from individual x, y, and z values.

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-native/Float/) |
| `y` | [Float](/api-docs/clay-native/Float/) |
| `z` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Vec3](/api-docs/clay-native/shade/Vec3/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="vec4"><code><span class="field-name">vec4</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">w</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec4/" class="type-link">Vec4</a></code><a class="header-anchor" href="#vec4"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Constructs a 4-component vector from individual x, y, z, and w values.

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-native/Float/) |
| `y` | [Float](/api-docs/clay-native/Float/) |
| `z` | [Float](/api-docs/clay-native/Float/) |
| `w` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Vec4](/api-docs/clay-native/shade/Vec4/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="mat2"><code><span class="field-name">mat2</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Mat2/" class="type-link">Mat2</a></code><a class="header-anchor" href="#mat2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Constructs a 2x2 diagonal matrix with the specified value on the diagonal.

| Name | Type |
|------|------|
| `v` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Mat2](/api-docs/clay-native/shade/Mat2/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="mat3"><code><span class="field-name">mat3</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Mat3/" class="type-link">Mat3</a></code><a class="header-anchor" href="#mat3"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Constructs a 3x3 diagonal matrix with the specified value on the diagonal.

| Name | Type |
|------|------|
| `v` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Mat3](/api-docs/clay-native/shade/Mat3/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="mat4"><code><span class="field-name">mat4</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Mat4/" class="type-link">Mat4</a></code><a class="header-anchor" href="#mat4"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Constructs a 4x4 diagonal matrix with the specified value on the diagonal.

| Name | Type |
|------|------|
| `v` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Mat4](/api-docs/clay-native/shade/Mat4/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="radians"><code><span class="field-name">radians</span><span class="parenthesis">(</span><span class="arg-name">degrees</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#radians"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts degrees to radians. Returns (π/180) * degrees.

| Name | Type |
|------|------|
| `degrees` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="degrees"><code><span class="field-name">degrees</span><span class="parenthesis">(</span><span class="arg-name">radians</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#degrees"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts radians to degrees. Returns (180/π) * radians.

| Name | Type |
|------|------|
| `radians` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="sin"><code><span class="field-name">sin</span><span class="parenthesis">(</span><span class="arg-name">angle</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#sin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the sine of the angle (in radians).

| Name | Type |
|------|------|
| `angle` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="cos"><code><span class="field-name">cos</span><span class="parenthesis">(</span><span class="arg-name">angle</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#cos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the cosine of the angle (in radians).

| Name | Type |
|------|------|
| `angle` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="tan"><code><span class="field-name">tan</span><span class="parenthesis">(</span><span class="arg-name">angle</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#tan"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the tangent of the angle (in radians).

| Name | Type |
|------|------|
| `angle` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="asin"><code><span class="field-name">asin</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#asin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the arc sine (inverse sine) of x. The result is in radians, in the range [-π/2, π/2].

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="acos"><code><span class="field-name">acos</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#acos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the arc cosine (inverse cosine) of x. The result is in radians, in the range [0, π].

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="atan"><code><span class="field-name">atan</span><span class="parenthesis">(</span><span class="arg-name">yOverX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#atan"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the arc tangent of y/x. The result is in radians, in the range [-π/2, π/2].

| Name | Type |
|------|------|
| `yOverX` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="pow"><code><span class="field-name">pow</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns x raised to the power y (x^y).

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-native/Float/) |
| `y` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="exp"><code><span class="field-name">exp</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#exp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the natural exponentiation of x (e^x).

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="log"><code><span class="field-name">log</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#log"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the natural logarithm of x (ln(x)). Results are undefined if x <= 0.

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="exp2"><code><span class="field-name">exp2</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#exp2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns 2 raised to the power x (2^x).

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="log2"><code><span class="field-name">log2</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#log2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the base-2 logarithm of x (log₂(x)). Results are undefined if x <= 0.

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="sqrt"><code><span class="field-name">sqrt</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#sqrt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the square root of x. Results are undefined if x < 0.

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="inversesqrt"><code><span class="field-name">inversesqrt</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#inversesqrt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the inverse square root of x (1/√x). Results are undefined if x <= 0.

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="abs"><code><span class="field-name">abs</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#abs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the absolute value of x.

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="sign"><code><span class="field-name">sign</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#sign"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns -1.0, 0.0, or 1.0 depending on the sign of x. Returns -1.0 if x < 0, 0.0 if x == 0, and 1.0 if x > 0.

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="floor"><code><span class="field-name">floor</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#floor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the largest integer value less than or equal to x.

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="ceil"><code><span class="field-name">ceil</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#ceil"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the smallest integer value greater than or equal to x.

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fract"><code><span class="field-name">fract</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#fract"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the fractional part of x: x - floor(x).

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="mod"><code><span class="field-name">mod</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#mod"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the modulus of x and y: x - y * floor(x/y).

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-native/Float/) |
| `y` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="min"><code><span class="field-name">min</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#min"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the smaller of x and y.

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-native/Float/) |
| `y` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="max"><code><span class="field-name">max</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#max"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the larger of x and y.

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-native/Float/) |
| `y` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clamp"><code><span class="field-name">clamp</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">minVal</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">maxVal</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#clamp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Constrains x to the range [minVal, maxVal]. Returns min(max(x, minVal), maxVal).

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-native/Float/) |
| `minVal` | [Float](/api-docs/clay-native/Float/) |
| `maxVal` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="mix"><code><span class="field-name">mix</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#mix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Performs linear interpolation between x and y using a. Returns x*(1-a) + y*a.

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-native/Float/) |
| `y` | [Float](/api-docs/clay-native/Float/) |
| `a` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="step"><code><span class="field-name">step</span><span class="parenthesis">(</span><span class="arg-name">edge</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#step"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns 0.0 if x < edge, otherwise returns 1.0.

| Name | Type |
|------|------|
| `edge` | [Float](/api-docs/clay-native/Float/) |
| `x` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="smoothstep"><code><span class="field-name">smoothstep</span><span class="parenthesis">(</span><span class="arg-name">edge0</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">edge1</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#smoothstep"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Performs smooth Hermite interpolation between 0 and 1 when edge0 < x < edge1. Returns 0 if x <= edge0, 1 if x >= edge1. Uses formula: t*t*(3-2*t) where t = clamp((x-edge0)/(edge1-edge0), 0, 1).

| Name | Type |
|------|------|
| `edge0` | [Float](/api-docs/clay-native/Float/) |
| `edge1` | [Float](/api-docs/clay-native/Float/) |
| `x` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="length"><code><span class="field-name">length</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the length (magnitude) of a scalar value (its absolute value).

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="distance"><code><span class="field-name">distance</span><span class="parenthesis">(</span><span class="arg-name">p0</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">p1</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#distance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the distance between two scalar values.

| Name | Type |
|------|------|
| `p0` | [Float](/api-docs/clay-native/Float/) |
| `p1` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="dot"><code><span class="field-name">dot</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#dot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the dot product of two scalar values.

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-native/Float/) |
| `y` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="cross"><code><span class="field-name">cross</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec3/" class="type-link">Vec3</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec3/" class="type-link">Vec3</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec3/" class="type-link">Vec3</a></code><a class="header-anchor" href="#cross"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the cross product of two 3-component vectors. The result is perpendicular to both input vectors.

| Name | Type |
|------|------|
| `x` | [Vec3](/api-docs/clay-native/shade/Vec3/) |
| `y` | [Vec3](/api-docs/clay-native/shade/Vec3/) |

| Returns |
|---------|
| [Vec3](/api-docs/clay-native/shade/Vec3/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="normalize"><code><span class="field-name">normalize</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#normalize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a normalized scalar (1.0 if x >= 0, -1.0 otherwise).

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="faceforward"><code><span class="field-name">faceforward</span><span class="parenthesis">(</span><span class="arg-name">N</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">I</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">Nref</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#faceforward"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns N if dot(Nref, I) < 0, otherwise returns -N. Used to orient a normal to face the viewer.

| Name | Type |
|------|------|
| `N` | [Float](/api-docs/clay-native/Float/) |
| `I` | [Float](/api-docs/clay-native/Float/) |
| `Nref` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="reflect"><code><span class="field-name">reflect</span><span class="parenthesis">(</span><span class="arg-name">I</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">N</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#reflect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the reflection direction for an incident vector I and surface normal N. Computed as I - 2*dot(N,I)*N. N should be normalized.

| Name | Type |
|------|------|
| `I` | [Float](/api-docs/clay-native/Float/) |
| `N` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="refract"><code><span class="field-name">refract</span><span class="parenthesis">(</span><span class="arg-name">I</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec2/" class="type-link">Vec2</a><span class="operator">,</span> <span class="arg-name">N</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec2/" class="type-link">Vec2</a><span class="operator">,</span> <span class="arg-name">eta</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Vec2/" class="type-link">Vec2</a></code><a class="header-anchor" href="#refract"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the refraction direction for an incident vector I, surface normal N, and ratio of indices of refraction eta. I and N should be normalized. Returns zero vector if total internal reflection occurs.

| Name | Type |
|------|------|
| `I` | [Vec2](/api-docs/clay-native/shade/Vec2/) |
| `N` | [Vec2](/api-docs/clay-native/shade/Vec2/) |
| `eta` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Vec2](/api-docs/clay-native/shade/Vec2/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="matrixCompMult"><code><span class="field-name">matrixCompMult</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Mat2/" class="type-link">Mat2</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Mat2/" class="type-link">Mat2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Mat2/" class="type-link">Mat2</a></code><a class="header-anchor" href="#matrixCompMult"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Performs component-wise multiplication of two matrices. This is NOT standard matrix multiplication - use the * operator for that.

| Name | Type |
|------|------|
| `x` | [Mat2](/api-docs/clay-native/shade/Mat2/) |
| `y` | [Mat2](/api-docs/clay-native/shade/Mat2/) |

| Returns |
|---------|
| [Mat2](/api-docs/clay-native/shade/Mat2/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="transpose"><code><span class="field-name">transpose</span><span class="parenthesis">(</span><span class="arg-name">m</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Mat2/" class="type-link">Mat2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Mat2/" class="type-link">Mat2</a></code><a class="header-anchor" href="#transpose"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the transpose of the matrix (rows become columns, columns become rows).

| Name | Type |
|------|------|
| `m` | [Mat2](/api-docs/clay-native/shade/Mat2/) |

| Returns |
|---------|
| [Mat2](/api-docs/clay-native/shade/Mat2/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="determinant"><code><span class="field-name">determinant</span><span class="parenthesis">(</span><span class="arg-name">m</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Mat2/" class="type-link">Mat2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#determinant"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the determinant of the matrix.

| Name | Type |
|------|------|
| `m` | [Mat2](/api-docs/clay-native/shade/Mat2/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="inverse"><code><span class="field-name">inverse</span><span class="parenthesis">(</span><span class="arg-name">m</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Mat2/" class="type-link">Mat2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/shade/Mat2/" class="type-link">Mat2</a></code><a class="header-anchor" href="#inverse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the inverse of the matrix. Results are undefined if the matrix is singular (determinant is zero).

| Name | Type |
|------|------|
| `m` | [Mat2](/api-docs/clay-native/shade/Mat2/) |

| Returns |
|---------|
| [Mat2](/api-docs/clay-native/shade/Mat2/) |

