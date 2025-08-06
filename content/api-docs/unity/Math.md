---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Math
target: Unity
permalink: api-docs/unity/Math/
---

# Math

<div class="type-hierarchy"><strong>Math</strong> (Class)</div>

This class defines mathematical functions and constants.

<div class="see"><strong>See:</strong> https://haxe.org/manual/std-math.html</div>


## Static Members

<div class="signature field-var has-description" id="PI"><code><span class="field-name">PI</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#PI"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Represents the ratio of the circumference of a circle to its diameter,
specified by the constant, π. `PI` is approximately `3.141592653589793`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="NaN"><code><span class="field-name">NaN</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#NaN"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A special `Float` constant which denotes an invalid number.

`NaN` stands for "Not a Number". It occurs when a mathematically incorrect
operation is executed, such as taking the square root of a negative
number: `Math.sqrt(-1)`.

All further operations with `NaN` as an operand will result in `NaN`.

If this constant is converted to an `Int`, e.g. through `Std.int()`, the
result is unspecified.

In order to test if a value is `NaN`, you should use `Math.isNaN()` function.

<hr class="field-separator" />

<div class="signature field-var has-description" id="NEGATIVE_INFINITY"><code><span class="field-name">NEGATIVE_INFINITY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#NEGATIVE_INFINITY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A special `Float` constant which denotes negative infinity.

For example, this is the result of `-1.0 / 0.0`.

Operations with `NEGATIVE_INFINITY` as an operand may result in
`NEGATIVE_INFINITY`, `POSITIVE_INFINITY` or `NaN`.

If this constant is converted to an `Int`, e.g. through `Std.int()`, the
result is unspecified.

<hr class="field-separator" />

<div class="signature field-var has-description" id="POSITIVE_INFINITY"><code><span class="field-name">POSITIVE_INFINITY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#POSITIVE_INFINITY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A special `Float` constant which denotes positive infinity.

For example, this is the result of `1.0 / 0.0`.

Operations with `POSITIVE_INFINITY` as an operand may result in
`NEGATIVE_INFINITY`, `POSITIVE_INFINITY` or `NaN`.

If this constant is converted to an `Int`, e.g. through `Std.int()`, the
result is unspecified.

<hr class="field-separator" />

<div class="signature field-method has-description" id="abs"><code><span class="field-name">abs</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#abs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the absolute value of `v`.

- If `v` is positive or `0`, the result is unchanged. Otherwise the result is `-v`.
- If `v` is `NEGATIVE_INFINITY` or `POSITIVE_INFINITY`, the result is `POSITIVE_INFINITY`.
- If `v` is `NaN`, the result is `NaN`.

| Name | Type |
|------|------|
| `v` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="min"><code><span class="field-name">min</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#min"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the smaller of values `a` and `b`.

- If `a` or `b` are `NaN`, the result is `NaN`.
- If `a` or `b` are `NEGATIVE_INFINITY`, the result is `NEGATIVE_INFINITY`.
- If `a` and `b` are `POSITIVE_INFINITY`, the result is `POSITIVE_INFINITY`.

| Name | Type |
|------|------|
| `a` | [Float](/api-docs/unity/Float/) |
| `b` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="max"><code><span class="field-name">max</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#max"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the greater of values `a` and `b`.

- If `a` or `b` are `NaN`, the result is `NaN`.
- If `a` or `b` are `POSITIVE_INFINITY`, the result is `POSITIVE_INFINITY`.
- If `a` and `b` are `NEGATIVE_INFINITY`, the result is `NEGATIVE_INFINITY`.

| Name | Type |
|------|------|
| `a` | [Float](/api-docs/unity/Float/) |
| `b` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="sin"><code><span class="field-name">sin</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#sin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the trigonometric sine of the specified angle `v`, in radians.

If `v` is `NaN` or infinite, the result is `NaN`.

| Name | Type |
|------|------|
| `v` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="cos"><code><span class="field-name">cos</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#cos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the trigonometric cosine of the specified angle `v`, in radians.

If `v` is `NaN` or infinite, the result is `NaN`.

| Name | Type |
|------|------|
| `v` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="atan2"><code><span class="field-name">atan2</span><span class="parenthesis">(</span><span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#atan2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the trigonometric arc tangent whose tangent is the quotient of
two specified numbers, in radians.

If parameter `x` or `y`  is `NaN`, `NEGATIVE_INFINITY` or `POSITIVE_INFINITY`,
the result is `NaN`.

| Name | Type |
|------|------|
| `y` | [Float](/api-docs/unity/Float/) |
| `x` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="exp"><code><span class="field-name">exp</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#exp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns Euler's number, raised to the power of `v`.

`exp(1.0)` is approximately `2.718281828459`.

- If `v` is `POSITIVE_INFINITY`, the result is `POSITIVE_INFINITY`.
- If `v` is `NEGATIVE_INFINITY`, the result is `0.0`.
- If `v` is `NaN`, the result is `NaN`.

| Name | Type |
|------|------|
| `v` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="sqrt"><code><span class="field-name">sqrt</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#sqrt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the square root of `v`.

- If `v` is negative (including `NEGATIVE_INFINITY`) or `NaN`, the result is `NaN`.
- If `v` is `POSITIVE_INFINITY`, the result is `POSITIVE_INFINITY`.
- If `v` is `0.0`, the result is `0.0`.

| Name | Type |
|------|------|
| `v` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ffloor"><code><span class="field-name">ffloor</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#ffloor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `v` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="round"><code><span class="field-name">round</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#round"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Rounds `v` to the nearest integer value.

Ties are rounded up, so that `0.5` becomes `1` and `-0.5` becomes `0`.

If `v` is outside of the signed `Int32` range, or is `NaN`, `NEGATIVE_INFINITY`
or `POSITIVE_INFINITY`, the result is unspecified.

| Name | Type |
|------|------|
| `v` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="floor"><code><span class="field-name">floor</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#floor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the largest integer value that is not greater than `v`.

If `v` is outside of the signed `Int32` range, or is `NaN`, `NEGATIVE_INFINITY`
or `POSITIVE_INFINITY`, the result is unspecified.

| Name | Type |
|------|------|
| `v` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="ceil"><code><span class="field-name">ceil</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ceil"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the smallest integer value that is not less than `v`.

If `v` is outside of the signed `Int32` range, or is `NaN`, `NEGATIVE_INFINITY`
or `POSITIVE_INFINITY`, the result is unspecified.

| Name | Type |
|------|------|
| `v` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="asin"><code><span class="field-name">asin</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#asin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the trigonometric arc of the specified angle `v`, in radians.

If `v` is `NaN` or infinite, the result is `NaN`.

| Name | Type |
|------|------|
| `v` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="acos"><code><span class="field-name">acos</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#acos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the trigonometric arc cosine of the specified angle `v`,
in radians.

If `v` is `NaN` or infinite, the result is `NaN`.

| Name | Type |
|------|------|
| `v` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="pow"><code><span class="field-name">pow</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">exp</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a specified base `v` raised to the specified power `exp`.

| Name | Type |
|------|------|
| `v` | [Float](/api-docs/unity/Float/) |
| `exp` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="random"><code><span class="field-name">random</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#random"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a pseudo-random number which is greater than or equal to `0.0`,
and less than `1.0`.
| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isFinite"><code><span class="field-name">isFinite</span><span class="parenthesis">(</span><span class="arg-name">f</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isFinite"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tells if `f` is a finite number.

If `f` is `POSITIVE_INFINITY`, `NEGATIVE_INFINITY` or `NaN`, the result
is `false`, otherwise the result is `true`.

| Name | Type |
|------|------|
| `f` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isNaN"><code><span class="field-name">isNaN</span><span class="parenthesis">(</span><span class="arg-name">f</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isNaN"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tells if `f` is `Math.NaN`.

If `f` is `NaN`, the result is `true`, otherwise the result is `false`.
In particular, `null`, `POSITIVE_INFINITY` and `NEGATIVE_INFINITY` are
not considered `NaN`.

| Name | Type |
|------|------|
| `f` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

## Private Members

<div class="signature field-var no-description" id="rand"><code><span class="field-name">rand</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Random/" class="type-link">cs.system.Random</a></code><a class="header-anchor" href="#rand"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:nativeGen` | - |

