---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: CardinalSpline
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/CardinalSpline/
---

# CardinalSpline

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/CardinalSpline.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.CardinalSpline</strong> (Class)</div>

Cardinal spline interpolation for smooth curves through control points.

This class provides utilities for creating smooth curves that pass through
a series of control points using Cardinal spline interpolation. Cardinal
splines are a type of cubic Hermite spline where tangents are calculated
automatically from neighboring points.

## Features

- **Smooth Interpolation**: Creates C1 continuous curves through all points
- **Adjustable Tension**: Control curve tightness (0 = sharp, 1 = loose)
- **Variable Resolution**: Specify segments between points for quality
- **Closed Curves**: Option to create continuous loops
- **Performance Optimized**: Pre-cached calculations for efficiency

## Usage Example

```haxe
// Define control points [x1,y1, x2,y2, ...]
var points = [100,100, 200,150, 300,100, 400,200];

// Generate smooth curve points
var smooth = CardinalSpline.getCurvePoints(
    points,
    0.5,    // tension
    20,     // segments per curve
    false   // not closed
);

// Draw the smooth curve
var line = new Line();
line.points = smooth;
```

## Algorithm

Cardinal splines use the positions of four consecutive points (P0, P1, P2, P3)
to calculate the curve between P1 and P2. The tangent at each point is
determined by the vector between its neighbors, scaled by the tension parameter.

<div class="see"><strong>See:</strong> ceramic.Line For rendering spline curves, ceramic.Shape For filled shapes with spline boundaries</div>


## Static Members

<div class="signature field-method has-description" id="getCurvePoints"><code><span class="field-name">getCurvePoints</span><span class="parenthesis">(</span><span class="arg-name">points</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">tension</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.5</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">numSegments</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">25</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">close</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">result</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#getCurvePoints"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculates an array containing points representing a cardinal spline through given point array.
Points must be arranged as: [x1, y1, x2, y2, ..., xn, yn].

The points for the cardinal spline are returned as a new array.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `points` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | | Point array containing at least 2 points (4 values). Format: [x1, y1, x2, y2, ..., xn, yn]  |
| `tension` | [Float](/api-docs/clay-web/Float/) | `0.5` | Curve tension parameter. Default: 0.5 - 0.0 = sharp corners (Catmull-Rom spline) - 0.5 = balanced curve - 1.0 = loose curve - Can exceed [0,1] for special effects  |
| `numSegments` | [Int](/api-docs/clay-web/Int/) | `25` | Number of interpolated points between each pair of control points. Higher values create smoother curves. Default: 25  |
| `close` | [Bool](/api-docs/clay-web/Bool/) | `false` | Whether to connect the last point back to the first, creating a closed loop. Default: false  |
| `result` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* | Optional array to store results in (avoids allocation). Will be resized as needed.  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/clay-web/Null/)<[Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)>> | Array containing interpolated points [x1,y1, x2,y2, ...] Length = (numPoints-1) * numSegments * 2 + 2 (+ extra for closed) * ```haxe // Create a smooth curve through 4 points var controlPoints = [ 100, 100, // Point 1 200, 50, // Point 2 300, 150, // Point 3 400, 100 // Point 4 ]; * var smoothCurve = CardinalSpline.getCurvePoints( controlPoints, 0.5, // Medium tension 30 // 30 segments between points ); ``` |

## Private Members

<div class="signature field-var has-description" id="cache"><code><span class="field-name">cache</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#cache"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cached hermite basis function values for performance.
Reused across multiple spline calculations.

<hr class="field-separator" />

<div class="signature field-method has-description" id="parse"><code><span class="field-name">parse</span><span class="parenthesis">(</span><span class="arg-name">pts</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">cache</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">l</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">tension</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">numSegments</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">result</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">rPos</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#parse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal function that performs the actual spline interpolation.
Uses cached hermite basis functions for performance.



| Name | Type | Description |
|------|------|-------------|
| `pts` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | Extended point array with duplicated endpoints  |
| `cache` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | Pre-calculated hermite basis function values  |
| `l` | [Int](/api-docs/clay-web/Int/) | Original point array length  |
| `tension` | [Float](/api-docs/clay-web/Float/) | Spline tension parameter  |
| `numSegments` | [Int](/api-docs/clay-web/Int/) | Segments between control points  |
| `result` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> | Output array for interpolated points  |
| `rPos` | [Int](/api-docs/clay-web/Int/) | Current position in result array  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-web/Int/) | Updated position in result array |

