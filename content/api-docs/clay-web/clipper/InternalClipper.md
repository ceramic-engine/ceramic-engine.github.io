---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clipper
title: InternalClipper
target: Clay (Web)
permalink: api-docs/clay-web/clipper/InternalClipper/
---

# InternalClipper

<div class="type-hierarchy"><strong>clipper.InternalClipper</strong> (Class)</div>

Internal utility functions for Clipper operations.

## Static Members

<div class="signature field-var no-description" id="maxInt64"><code><span class="field-name">maxInt64</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/ClipperInt64/" class="type-link">ClipperInt64</a></code><a class="header-anchor" href="#maxInt64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="minInt64"><code><span class="field-name">minInt64</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/ClipperInt64/" class="type-link">ClipperInt64</a></code><a class="header-anchor" href="#minInt64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="maxCoord"><code><span class="field-name">maxCoord</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/ClipperInt64/" class="type-link">ClipperInt64</a></code><a class="header-anchor" href="#maxCoord"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="invalid64"><code><span class="field-name">invalid64</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/ClipperInt64/" class="type-link">ClipperInt64</a></code><a class="header-anchor" href="#invalid64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="maxCoordFloat"><code><span class="field-name">maxCoordFloat</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#maxCoordFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="minCoordFloat"><code><span class="field-name">minCoordFloat</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#minCoordFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="floatingPointTolerance"><code><span class="field-name">floatingPointTolerance</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#floatingPointTolerance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="defaultMinimumEdgeLength"><code><span class="field-name">defaultMinimumEdgeLength</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#defaultMinimumEdgeLength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="toFloat"><code><span class="field-name">toFloat</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/ClipperInt64/" class="type-link">ClipperInt64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#toFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `v` | [ClipperInt64](/api-docs/clay-web/clipper/ClipperInt64/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="abs64"><code><span class="field-name">abs64</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/ClipperInt64/" class="type-link">ClipperInt64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/ClipperInt64/" class="type-link">ClipperInt64</a></code><a class="header-anchor" href="#abs64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `v` | [ClipperInt64](/api-docs/clay-web/clipper/ClipperInt64/) |

| Returns |
|---------|
| [ClipperInt64](/api-docs/clay-web/clipper/ClipperInt64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="roundToInt64"><code><span class="field-name">roundToInt64</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/ClipperInt64/" class="type-link">ClipperInt64</a></code><a class="header-anchor" href="#roundToInt64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [ClipperInt64](/api-docs/clay-web/clipper/ClipperInt64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="roundToEvenInt64"><code><span class="field-name">roundToEvenInt64</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/ClipperInt64/" class="type-link">ClipperInt64</a></code><a class="header-anchor" href="#roundToEvenInt64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [ClipperInt64](/api-docs/clay-web/clipper/ClipperInt64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="triSign"><code><span class="field-name">triSign</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/ClipperInt64/" class="type-link">ClipperInt64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#triSign"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [ClipperInt64](/api-docs/clay-web/clipper/ClipperInt64/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="min64"><code><span class="field-name">min64</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/ClipperInt64/" class="type-link">ClipperInt64</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/ClipperInt64/" class="type-link">ClipperInt64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/ClipperInt64/" class="type-link">ClipperInt64</a></code><a class="header-anchor" href="#min64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [ClipperInt64](/api-docs/clay-web/clipper/ClipperInt64/) |
| `b` | [ClipperInt64](/api-docs/clay-web/clipper/ClipperInt64/) |

| Returns |
|---------|
| [ClipperInt64](/api-docs/clay-web/clipper/ClipperInt64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="max64"><code><span class="field-name">max64</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/ClipperInt64/" class="type-link">ClipperInt64</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/ClipperInt64/" class="type-link">ClipperInt64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/ClipperInt64/" class="type-link">ClipperInt64</a></code><a class="header-anchor" href="#max64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [ClipperInt64](/api-docs/clay-web/clipper/ClipperInt64/) |
| `b` | [ClipperInt64](/api-docs/clay-web/clipper/ClipperInt64/) |

| Returns |
|---------|
| [ClipperInt64](/api-docs/clay-web/clipper/ClipperInt64/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="checkPrecision"><code><span class="field-name">checkPrecision</span><span class="parenthesis">(</span><span class="arg-name">precision</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#checkPrecision"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Check precision is within valid range.

| Name | Type |
|------|------|
| `precision` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isAlmostZero"><code><span class="field-name">isAlmostZero</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isAlmostZero"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Check if a floating point value is approximately zero.

| Name | Type |
|------|------|
| `value` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="crossProduct"><code><span class="field-name">crossProduct</span><span class="parenthesis">(</span><span class="arg-name">pt1</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">pt2</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">pt3</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#crossProduct"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cross product of three points (returns double to avoid overflow).

| Name | Type |
|------|------|
| `pt1` | [Point64](/api-docs/clay-web/clipper/Point64/) |
| `pt2` | [Point64](/api-docs/clay-web/clipper/Point64/) |
| `pt3` | [Point64](/api-docs/clay-web/clipper/Point64/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="crossProductSign"><code><span class="field-name">crossProductSign</span><span class="parenthesis">(</span><span class="arg-name">pt1</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">pt2</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">pt3</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#crossProductSign"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cross product sign with high precision (using 128-bit multiplication).

| Name | Type |
|------|------|
| `pt1` | [Point64](/api-docs/clay-web/clipper/Point64/) |
| `pt2` | [Point64](/api-docs/clay-web/clipper/Point64/) |
| `pt3` | [Point64](/api-docs/clay-web/clipper/Point64/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="multiplyUInt64"><code><span class="field-name">multiplyUInt64</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/ClipperInt64/" class="type-link">ClipperInt64</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/ClipperInt64/" class="type-link">ClipperInt64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/UInt128/" class="type-link">UInt128</a></code><a class="header-anchor" href="#multiplyUInt64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Multiply two 64-bit unsigned integers to get 128-bit result.

| Name | Type |
|------|------|
| `a` | [ClipperInt64](/api-docs/clay-web/clipper/ClipperInt64/) |
| `b` | [ClipperInt64](/api-docs/clay-web/clipper/ClipperInt64/) |

| Returns |
|---------|
| [UInt128](/api-docs/clay-web/clipper/UInt128/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="productsAreEqual"><code><span class="field-name">productsAreEqual</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/ClipperInt64/" class="type-link">ClipperInt64</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/ClipperInt64/" class="type-link">ClipperInt64</a><span class="operator">,</span> <span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/ClipperInt64/" class="type-link">ClipperInt64</a><span class="operator">,</span> <span class="arg-name">d</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/ClipperInt64/" class="type-link">ClipperInt64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#productsAreEqual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Check if products a*b and c*d are equal (using 128-bit precision).

| Name | Type |
|------|------|
| `a` | [ClipperInt64](/api-docs/clay-web/clipper/ClipperInt64/) |
| `b` | [ClipperInt64](/api-docs/clay-web/clipper/ClipperInt64/) |
| `c` | [ClipperInt64](/api-docs/clay-web/clipper/ClipperInt64/) |
| `d` | [ClipperInt64](/api-docs/clay-web/clipper/ClipperInt64/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isCollinear"><code><span class="field-name">isCollinear</span><span class="parenthesis">(</span><span class="arg-name">pt1</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">sharedPt</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">pt2</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isCollinear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Check if three points are collinear.

| Name | Type |
|------|------|
| `pt1` | [Point64](/api-docs/clay-web/clipper/Point64/) |
| `sharedPt` | [Point64](/api-docs/clay-web/clipper/Point64/) |
| `pt2` | [Point64](/api-docs/clay-web/clipper/Point64/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="dotProduct"><code><span class="field-name">dotProduct</span><span class="parenthesis">(</span><span class="arg-name">pt1</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">pt2</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">pt3</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#dotProduct"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Dot product of three points.

| Name | Type |
|------|------|
| `pt1` | [Point64](/api-docs/clay-web/clipper/Point64/) |
| `pt2` | [Point64](/api-docs/clay-web/clipper/Point64/) |
| `pt3` | [Point64](/api-docs/clay-web/clipper/Point64/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="crossProductD"><code><span class="field-name">crossProductD</span><span class="parenthesis">(</span><span class="arg-name">vec1</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PointD/" class="type-link">PointD</a><span class="operator">,</span> <span class="arg-name">vec2</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PointD/" class="type-link">PointD</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#crossProductD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cross product of two PointD vectors.

| Name | Type |
|------|------|
| `vec1` | [PointD](/api-docs/clay-web/clipper/PointD/) |
| `vec2` | [PointD](/api-docs/clay-web/clipper/PointD/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="dotProductD"><code><span class="field-name">dotProductD</span><span class="parenthesis">(</span><span class="arg-name">vec1</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PointD/" class="type-link">PointD</a><span class="operator">,</span> <span class="arg-name">vec2</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PointD/" class="type-link">PointD</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#dotProductD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Dot product of two PointD vectors.

| Name | Type |
|------|------|
| `vec1` | [PointD](/api-docs/clay-web/clipper/PointD/) |
| `vec2` | [PointD](/api-docs/clay-web/clipper/PointD/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="checkCastInt64"><code><span class="field-name">checkCastInt64</span><span class="parenthesis">(</span><span class="arg-name">val</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/ClipperInt64/" class="type-link">ClipperInt64</a></code><a class="header-anchor" href="#checkCastInt64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Check cast to ClipperInt64, returns Invalid64 if out of range.

| Name | Type |
|------|------|
| `val` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [ClipperInt64](/api-docs/clay-web/clipper/ClipperInt64/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getLineIntersectPt64"><code><span class="field-name">getLineIntersectPt64</span><span class="parenthesis">(</span><span class="arg-name">ln1a</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">ln1b</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">ln2a</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">ln2b</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">AnonStruct</span></code><a class="header-anchor" href="#getLineIntersectPt64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get line intersection point (Point64 version).
Returns true if lines are non-parallel. ip is constrained to seg1.

| Name | Type |
|------|------|
| `ln1a` | [Point64](/api-docs/clay-web/clipper/Point64/) |
| `ln1b` | [Point64](/api-docs/clay-web/clipper/Point64/) |
| `ln2a` | [Point64](/api-docs/clay-web/clipper/Point64/) |
| `ln2b` | [Point64](/api-docs/clay-web/clipper/Point64/) |

| Returns |
|---------|
| AnonStruct |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getLineIntersectPtD"><code><span class="field-name">getLineIntersectPtD</span><span class="parenthesis">(</span><span class="arg-name">ln1a</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PointD/" class="type-link">PointD</a><span class="operator">,</span> <span class="arg-name">ln1b</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PointD/" class="type-link">PointD</a><span class="operator">,</span> <span class="arg-name">ln2a</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PointD/" class="type-link">PointD</a><span class="operator">,</span> <span class="arg-name">ln2b</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PointD/" class="type-link">PointD</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">AnonStruct</span></code><a class="header-anchor" href="#getLineIntersectPtD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get line intersection point (PointD version).

| Name | Type |
|------|------|
| `ln1a` | [PointD](/api-docs/clay-web/clipper/PointD/) |
| `ln1b` | [PointD](/api-docs/clay-web/clipper/PointD/) |
| `ln2a` | [PointD](/api-docs/clay-web/clipper/PointD/) |
| `ln2b` | [PointD](/api-docs/clay-web/clipper/PointD/) |

| Returns |
|---------|
| AnonStruct |

<hr class="field-separator" />

<div class="signature field-method has-description" id="segsIntersect"><code><span class="field-name">segsIntersect</span><span class="parenthesis">(</span><span class="arg-name">seg1a</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">seg1b</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">seg2a</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">seg2b</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">inclusive</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#segsIntersect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Check if two segments intersect.

| Name | Type | Default |
|------|------|---------|
| `seg1a` | [Point64](/api-docs/clay-web/clipper/Point64/) | |
| `seg1b` | [Point64](/api-docs/clay-web/clipper/Point64/) | |
| `seg2a` | [Point64](/api-docs/clay-web/clipper/Point64/) | |
| `seg2b` | [Point64](/api-docs/clay-web/clipper/Point64/) | |
| `inclusive` | [Bool](/api-docs/clay-web/Bool/) | `false` |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getBounds"><code><span class="field-name">getBounds</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Rect64/" class="type-link">Rect64</a></code><a class="header-anchor" href="#getBounds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get bounding rectangle of a path.

| Name | Type |
|------|------|
| `path` | [Path64](/api-docs/clay-web/clipper/Path64/) |

| Returns |
|---------|
| [Rect64](/api-docs/clay-web/clipper/Rect64/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getClosestPtOnSegment"><code><span class="field-name">getClosestPtOnSegment</span><span class="parenthesis">(</span><span class="arg-name">offPt</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">seg1</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">seg2</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a></code><a class="header-anchor" href="#getClosestPtOnSegment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get closest point on segment to off point.

| Name | Type |
|------|------|
| `offPt` | [Point64](/api-docs/clay-web/clipper/Point64/) |
| `seg1` | [Point64](/api-docs/clay-web/clipper/Point64/) |
| `seg2` | [Point64](/api-docs/clay-web/clipper/Point64/) |

| Returns |
|---------|
| [Point64](/api-docs/clay-web/clipper/Point64/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="pointInPolygon"><code><span class="field-name">pointInPolygon</span><span class="parenthesis">(</span><span class="arg-name">pt</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">polygon</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PointInPolygonResult/" class="type-link">PointInPolygonResult</a></code><a class="header-anchor" href="#pointInPolygon"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Point in polygon test.

| Name | Type |
|------|------|
| `pt` | [Point64](/api-docs/clay-web/clipper/Point64/) |
| `polygon` | [Path64](/api-docs/clay-web/clipper/Path64/) |

| Returns |
|---------|
| [PointInPolygonResult](/api-docs/clay-web/clipper/PointInPolygonResult/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="path2ContainsPath1"><code><span class="field-name">path2ContainsPath1</span><span class="parenthesis">(</span><span class="arg-name">path1</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a><span class="operator">,</span> <span class="arg-name">path2</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#path2ContainsPath1"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Check if path2 contains path1.

| Name | Type |
|------|------|
| `path1` | [Path64](/api-docs/clay-web/clipper/Path64/) |
| `path2` | [Path64](/api-docs/clay-web/clipper/Path64/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="area"><code><span class="field-name">area</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#area"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculate the signed area of a polygon path.
Returns positive for counter-clockwise paths, negative for clockwise.

| Name | Type |
|------|------|
| `path` | [Path64](/api-docs/clay-web/clipper/Path64/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="areaPaths"><code><span class="field-name">areaPaths</span><span class="parenthesis">(</span><span class="arg-name">paths</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#areaPaths"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculate the signed area of multiple paths.

| Name | Type |
|------|------|
| `paths` | [Paths64](/api-docs/clay-web/clipper/Paths64/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

## Private Members

<div class="signature field-var no-description" id="precisionRangeError"><code><span class="field-name">precisionRangeError</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#precisionRangeError"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

