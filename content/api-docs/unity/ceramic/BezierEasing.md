---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: BezierEasing
target: Unity
permalink: api-docs/unity/ceramic/BezierEasing/
---

# BezierEasing

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/BezierEasing.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.BezierEasing</strong> (Class)</div>

High-performance Bezier curve easing for smooth animations.

This class implements cubic and quadratic Bezier easing functions with optimized
performance through pre-computed sample tables and intelligent caching. Based on
the implementation from https://github.com/gre/bezier-easing, extended to support
both cubic and quadratic curves.

## Features

- **Cubic Bezier**: Standard CSS-style cubic-bezier(x1, y1, x2, y2)
- **Quadratic Bezier**: Simplified two-point control
- **Performance Optimized**: Pre-computed samples and Newton-Raphson iteration
- **Instance Caching**: Automatic reuse of common easing functions
- **Linear Detection**: Automatically optimizes linear easings

## Usage Examples

```haxe
// Create cubic bezier (CSS-style)
var easeInOut = new BezierEasing(0.42, 0, 0.58, 1);
var progress = easeInOut.ease(0.5); // Returns ~0.5

// Create quadratic bezier (single control point)
var easeQuad = new BezierEasing(0.5, 0.8);

// Use cached instances for better performance
var cached = BezierEasing.get(0.25, 0.1, 0.25, 1); // ease-out

// Common easing curves
var easeIn = BezierEasing.get(0.42, 0, 1, 1);
var easeOut = BezierEasing.get(0, 0, 0.58, 1);
var easeInOut = BezierEasing.get(0.42, 0, 0.58, 1);
```

## Performance Notes

- First call pre-computes 11 sample points
- Subsequent calls use Newton-Raphson method (4 iterations max)
- Linear easings bypass all calculations
- Cache stores up to 10,000 instances

<div class="see"><strong>See:</strong> ceramic.Easing For pre-defined easing functions, ceramic.Tween For animation implementation</div>


## Static Members

<div class="signature field-method has-description" id="clearCache"><code><span class="field-name">clearCache</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearCache"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clears all cached BezierEasing instances.

Call this if you need to free memory or have created
many temporary easing functions.

<hr class="field-separator" />

<div class="signature field-method has-description" id="get"><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">x1</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y1</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">x2</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">y2</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">BezierEasing</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get or create a `BezierEasing` instance with the given parameters.
Created instances are cached and reused.

| Name | Type | Default |
|------|------|---------|
| `x1` | [Float](/api-docs/unity/Float/) | |
| `y1` | [Float](/api-docs/unity/Float/) | |
| `x2` | [Float](/api-docs/unity/Float/) | *(optional)* |
| `y2` | [Float](/api-docs/unity/Float/) | *(optional)* |

| Returns |
|---------|
| [BezierEasing](/api-docs/unity/ceramic/BezierEasing/) |

## Instance Members

<div class="signature field-method has-description" id="configure"><code><span class="field-name">configure</span><span class="parenthesis">(</span><span class="arg-name">x1</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y1</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">x2</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">y2</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#configure"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Configure the instance with the given arguments.
If only `x1` and `y1` are provided, the curve is treated as quadratic.
If all four values `x1`, `y1`, `x2`, `y2` are provided,
the curve is treated as cubic.

| Name | Type | Default |
|------|------|---------|
| `x1` | [Float](/api-docs/unity/Float/) | |
| `y1` | [Float](/api-docs/unity/Float/) | |
| `x2` | [Float](/api-docs/unity/Float/) | *(optional)* |
| `y2` | [Float](/api-docs/unity/Float/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="ease"><code><span class="field-name">ease</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#ease"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculates the eased value for the given progress.



| Name | Type | Description |
|------|------|-------------|
| `x` | [Float](/api-docs/unity/Float/) | Progress value from 0 to 1  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/unity/Float/) | Eased value (typically 0 to 1, but can overshoot) * ```haxe var easing = new BezierEasing(0.42, 0, 0.58, 1); tween.progress = easing.ease(elapsed / duration); ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">x1</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y1</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">x2</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">y2</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new instance with the given arguments.
If only `x1` and `y1` are provided, the curve is treated as quadratic.
If all four values `x1`, `y1`, `x2`, `y2` are provided,
the curve is treated as cubic.

| Name | Type | Default |
|------|------|---------|
| `x1` | [Float](/api-docs/unity/Float/) | |
| `y1` | [Float](/api-docs/unity/Float/) | |
| `x2` | [Float](/api-docs/unity/Float/) | *(optional)* |
| `y2` | [Float](/api-docs/unity/Float/) | *(optional)* |

## Private Members

<div class="signature field-var has-description" id="SPLINE_TABLE_SIZE"><code><span class="field-name">SPLINE_TABLE_SIZE</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SPLINE_TABLE_SIZE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Number of pre-computed samples for faster lookup

<hr class="field-separator" />

<div class="signature field-var has-description" id="SAMPLE_STEP_SIZE"><code><span class="field-name">SAMPLE_STEP_SIZE</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#SAMPLE_STEP_SIZE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Distance between each sample point

<hr class="field-separator" />

<div class="signature field-var has-description" id="NEWTON_ITERATIONS"><code><span class="field-name">NEWTON_ITERATIONS</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#NEWTON_ITERATIONS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Maximum iterations for Newton-Raphson method

<hr class="field-separator" />

<div class="signature field-var has-description" id="NEWTON_MIN_SLOPE"><code><span class="field-name">NEWTON_MIN_SLOPE</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#NEWTON_MIN_SLOPE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Minimum slope to use Newton-Raphson (below this, use subdivision)

<hr class="field-separator" />

<div class="signature field-var has-description" id="SUBDIVISION_PRECISION"><code><span class="field-name">SUBDIVISION_PRECISION</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#SUBDIVISION_PRECISION"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Precision threshold for binary subdivision

<hr class="field-separator" />

<div class="signature field-var has-description" id="SUBDIVISION_MAX_ITERATIONS"><code><span class="field-name">SUBDIVISION_MAX_ITERATIONS</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SUBDIVISION_MAX_ITERATIONS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Maximum iterations for binary subdivision

<hr class="field-separator" />

<div class="signature field-var has-description" id="TWO_THIRD"><code><span class="field-name">TWO_THIRD</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#TWO_THIRD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Constant for quadratic to cubic conversion

<hr class="field-separator" />

<div class="signature field-var has-description" id="CACHE_SIZE"><code><span class="field-name">CACHE_SIZE</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#CACHE_SIZE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Maximum number of cached instances before clearing cache

<hr class="field-separator" />

<div class="signature field-var has-description" id="cachedInstances"><code><span class="field-name">cachedInstances</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/IntMap/" class="type-link">IntMap</a><span class="operator">&lt;</span><a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="#" class="type-link">BezierEasing</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#cachedInstances"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Map of cached instances by parameter hash

<hr class="field-separator" />

<div class="signature field-var has-description" id="numCachedInstances"><code><span class="field-name">numCachedInstances</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#numCachedInstances"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current number of cached instances

<hr class="field-separator" />

<div class="signature field-var has-description" id="linearEasing"><code><span class="field-name">linearEasing</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#linearEasing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this easing is linear (optimization flag)

<hr class="field-separator" />

<div class="signature field-var has-description" id="sampleValues"><code><span class="field-name">sampleValues</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#sampleValues"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pre-computed sample values for performance

<hr class="field-separator" />

<div class="signature field-var has-description" id="cached"><code><span class="field-name">cached</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#cached"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this instance is stored in the cache

<hr class="field-separator" />

<div class="signature field-var has-description" id="quadratic"><code><span class="field-name">quadratic</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#quadratic"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this is a quadratic (vs cubic) curve

<hr class="field-separator" />

<div class="signature field-var has-description" id="mQuadraticX1"><code><span class="field-name">mQuadraticX1</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#mQuadraticX1"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Original quadratic X1 value (before conversion)

<hr class="field-separator" />

<div class="signature field-var has-description" id="mQuadraticX2"><code><span class="field-name">mQuadraticX2</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#mQuadraticX2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Original quadratic X2 value (before conversion)

<hr class="field-separator" />

<div class="signature field-var has-description" id="mX1"><code><span class="field-name">mX1</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#mX1"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

First control point X coordinate (0-1)

<hr class="field-separator" />

<div class="signature field-var has-description" id="mY1"><code><span class="field-name">mY1</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#mY1"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

First control point Y coordinate

<hr class="field-separator" />

<div class="signature field-var has-description" id="mX2"><code><span class="field-name">mX2</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#mX2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Second control point X coordinate (0-1)

<hr class="field-separator" />

<div class="signature field-var has-description" id="mY2"><code><span class="field-name">mY2</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#mY2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Second control point Y coordinate

<hr class="field-separator" />

<div class="signature field-method has-description" id="quadraticToCubicCP1"><code><span class="field-name">quadraticToCubicCP1</span><span class="parenthesis">(</span><span class="arg-name">p</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#quadraticToCubicCP1"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts a quadratic control point to the first cubic control point.

| Name | Type |
|------|------|
| `p` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="quadraticToCubicCP2"><code><span class="field-name">quadraticToCubicCP2</span><span class="parenthesis">(</span><span class="arg-name">p</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#quadraticToCubicCP2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts a quadratic control point to the second cubic control point.

| Name | Type |
|------|------|
| `p` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="cacheKey"><code><span class="field-name">cacheKey</span><span class="parenthesis">(</span><span class="arg-name">x1</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y1</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">x2</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y2</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#cacheKey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generates a hash key for caching based on control points.
Note: This is a simple hash that may have collisions.

| Name | Type |
|------|------|
| `x1` | [Float](/api-docs/unity/Float/) |
| `y1` | [Float](/api-docs/unity/Float/) |
| `x2` | [Float](/api-docs/unity/Float/) |
| `y2` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getTForX"><code><span class="field-name">getTForX</span><span class="parenthesis">(</span><span class="arg-name">aX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getTForX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds the t parameter for a given x value using the pre-computed samples.
Uses Newton-Raphson iteration when slope is sufficient, otherwise falls
back to binary subdivision.

| Name | Type |
|------|------|
| `aX` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="calcBezier"><code><span class="field-name">calcBezier</span><span class="parenthesis">(</span><span class="arg-name">aT</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">aA1</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">aA2</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#calcBezier"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculates the bezier curve value at parameter t.



| Name | Type | Description |
|------|------|-------------|
| `aT` | [Float](/api-docs/unity/Float/) | The t parameter (0-1)  |
| `aA1` | [Float](/api-docs/unity/Float/) | First control point coordinate  |
| `aA2` | [Float](/api-docs/unity/Float/) | Second control point coordinate  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/unity/Float/) | The curve value at t |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getSlope"><code><span class="field-name">getSlope</span><span class="parenthesis">(</span><span class="arg-name">aT</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">aA1</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">aA2</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getSlope"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculates the derivative (slope) of the bezier curve at parameter t.



| Name | Type | Description |
|------|------|-------------|
| `aT` | [Float](/api-docs/unity/Float/) | The t parameter (0-1)  |
| `aA1` | [Float](/api-docs/unity/Float/) | First control point coordinate  |
| `aA2` | [Float](/api-docs/unity/Float/) | Second control point coordinate  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/unity/Float/) | The slope at t |

<hr class="field-separator" />

<div class="signature field-method has-description" id="binarySubdivide"><code><span class="field-name">binarySubdivide</span><span class="parenthesis">(</span><span class="arg-name">aX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">aA</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">aB</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">mX1</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">mX2</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#binarySubdivide"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Uses binary subdivision to find t for a given x when Newton-Raphson
is not suitable (low slope).

| Name | Type |
|------|------|
| `aX` | [Float](/api-docs/unity/Float/) |
| `aA` | [Float](/api-docs/unity/Float/) |
| `aB` | [Float](/api-docs/unity/Float/) |
| `mX1` | [Float](/api-docs/unity/Float/) |
| `mX2` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="newtonRaphsonIterate"><code><span class="field-name">newtonRaphsonIterate</span><span class="parenthesis">(</span><span class="arg-name">aX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">aGuessT</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">mX1</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">mX2</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#newtonRaphsonIterate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Uses Newton-Raphson iteration to quickly converge on the t value
for a given x coordinate.

| Name | Type |
|------|------|
| `aX` | [Float](/api-docs/unity/Float/) |
| `aGuessT` | [Float](/api-docs/unity/Float/) |
| `mX1` | [Float](/api-docs/unity/Float/) |
| `mX2` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="A"><code><span class="field-name">A</span><span class="parenthesis">(</span><span class="arg-name">aA1</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">aA2</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#A"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Bezier coefficient A for cubic formula

| Name | Type |
|------|------|
| `aA1` | [Float](/api-docs/unity/Float/) |
| `aA2` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="B"><code><span class="field-name">B</span><span class="parenthesis">(</span><span class="arg-name">aA1</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">aA2</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#B"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Bezier coefficient B for cubic formula

| Name | Type |
|------|------|
| `aA1` | [Float](/api-docs/unity/Float/) |
| `aA2` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="C"><code><span class="field-name">C</span><span class="parenthesis">(</span><span class="arg-name">aA1</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#C"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Bezier coefficient C for cubic formula

| Name | Type |
|------|------|
| `aA1` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="removeFromCache"><code><span class="field-name">removeFromCache</span><span class="parenthesis">(</span><span class="arg-name">x1</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y1</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">x2</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y2</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeFromCache"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes this instance from the cache when its parameters change.

| Name | Type |
|------|------|
| `x1` | [Float](/api-docs/unity/Float/) |
| `y1` | [Float](/api-docs/unity/Float/) |
| `x2` | [Float](/api-docs/unity/Float/) |
| `y2` | [Float](/api-docs/unity/Float/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

