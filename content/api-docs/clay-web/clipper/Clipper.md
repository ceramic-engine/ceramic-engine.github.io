---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clipper
title: Clipper
target: Clay (Web)
permalink: api-docs/clay-web/clipper/Clipper/
---

# Clipper

<div class="type-hierarchy"><strong>clipper.Clipper</strong> (Class)</div>

High-level static API for common polygon clipping and offsetting operations.
This module provides simple functions that cover most polygon boolean and
offsetting needs while avoiding the inherent complexities of other modules.

## Static Members

<div class="signature field-method has-description" id="intersect"><code><span class="field-name">intersect</span><span class="parenthesis">(</span><span class="arg-name">subject</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a><span class="operator">,</span> <span class="arg-name">clip</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a><span class="operator">,</span> <span class="arg-name">fillRule</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/FillRule/" class="type-link">FillRule</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a></code><a class="header-anchor" href="#intersect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computes the intersection of subject and clip paths.

| Name | Type |
|------|------|
| `subject` | [Paths64](/api-docs/clay-web/clipper/Paths64/) |
| `clip` | [Paths64](/api-docs/clay-web/clipper/Paths64/) |
| `fillRule` | [FillRule](/api-docs/clay-web/clipper/FillRule/) |

| Returns |
|---------|
| [Paths64](/api-docs/clay-web/clipper/Paths64/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="intersectD"><code><span class="field-name">intersectD</span><span class="parenthesis">(</span><span class="arg-name">subject</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathsD/" class="type-link">PathsD</a><span class="operator">,</span> <span class="arg-name">clip</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathsD/" class="type-link">PathsD</a><span class="operator">,</span> <span class="arg-name">fillRule</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/FillRule/" class="type-link">FillRule</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">precision</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">2</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathsD/" class="type-link">PathsD</a></code><a class="header-anchor" href="#intersectD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computes the intersection of subject and clip paths (floating-point).

| Name | Type | Default |
|------|------|---------|
| `subject` | [PathsD](/api-docs/clay-web/clipper/PathsD/) | |
| `clip` | [PathsD](/api-docs/clay-web/clipper/PathsD/) | |
| `fillRule` | [FillRule](/api-docs/clay-web/clipper/FillRule/) | |
| `precision` | [Int](/api-docs/clay-web/Int/) | `2` |

| Returns |
|---------|
| [PathsD](/api-docs/clay-web/clipper/PathsD/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="union"><code><span class="field-name">union</span><span class="parenthesis">(</span><span class="arg-name">subject</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a><span class="operator">,</span> <span class="arg-name">fillRule</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/FillRule/" class="type-link">FillRule</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a></code><a class="header-anchor" href="#union"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computes the union of subject paths.

| Name | Type |
|------|------|
| `subject` | [Paths64](/api-docs/clay-web/clipper/Paths64/) |
| `fillRule` | [FillRule](/api-docs/clay-web/clipper/FillRule/) |

| Returns |
|---------|
| [Paths64](/api-docs/clay-web/clipper/Paths64/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="unionWithClip"><code><span class="field-name">unionWithClip</span><span class="parenthesis">(</span><span class="arg-name">subject</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a><span class="operator">,</span> <span class="arg-name">clip</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a><span class="operator">,</span> <span class="arg-name">fillRule</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/FillRule/" class="type-link">FillRule</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a></code><a class="header-anchor" href="#unionWithClip"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computes the union of subject and clip paths.

| Name | Type |
|------|------|
| `subject` | [Paths64](/api-docs/clay-web/clipper/Paths64/) |
| `clip` | [Paths64](/api-docs/clay-web/clipper/Paths64/) |
| `fillRule` | [FillRule](/api-docs/clay-web/clipper/FillRule/) |

| Returns |
|---------|
| [Paths64](/api-docs/clay-web/clipper/Paths64/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="unionD"><code><span class="field-name">unionD</span><span class="parenthesis">(</span><span class="arg-name">subject</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathsD/" class="type-link">PathsD</a><span class="operator">,</span> <span class="arg-name">fillRule</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/FillRule/" class="type-link">FillRule</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathsD/" class="type-link">PathsD</a></code><a class="header-anchor" href="#unionD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computes the union of subject paths (floating-point).

| Name | Type |
|------|------|
| `subject` | [PathsD](/api-docs/clay-web/clipper/PathsD/) |
| `fillRule` | [FillRule](/api-docs/clay-web/clipper/FillRule/) |

| Returns |
|---------|
| [PathsD](/api-docs/clay-web/clipper/PathsD/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="unionWithClipD"><code><span class="field-name">unionWithClipD</span><span class="parenthesis">(</span><span class="arg-name">subject</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathsD/" class="type-link">PathsD</a><span class="operator">,</span> <span class="arg-name">clip</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathsD/" class="type-link">PathsD</a><span class="operator">,</span> <span class="arg-name">fillRule</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/FillRule/" class="type-link">FillRule</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">precision</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">2</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathsD/" class="type-link">PathsD</a></code><a class="header-anchor" href="#unionWithClipD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computes the union of subject and clip paths (floating-point).

| Name | Type | Default |
|------|------|---------|
| `subject` | [PathsD](/api-docs/clay-web/clipper/PathsD/) | |
| `clip` | [PathsD](/api-docs/clay-web/clipper/PathsD/) | |
| `fillRule` | [FillRule](/api-docs/clay-web/clipper/FillRule/) | |
| `precision` | [Int](/api-docs/clay-web/Int/) | `2` |

| Returns |
|---------|
| [PathsD](/api-docs/clay-web/clipper/PathsD/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="difference"><code><span class="field-name">difference</span><span class="parenthesis">(</span><span class="arg-name">subject</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a><span class="operator">,</span> <span class="arg-name">clip</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a><span class="operator">,</span> <span class="arg-name">fillRule</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/FillRule/" class="type-link">FillRule</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a></code><a class="header-anchor" href="#difference"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computes the difference of subject and clip paths (subject - clip).

| Name | Type |
|------|------|
| `subject` | [Paths64](/api-docs/clay-web/clipper/Paths64/) |
| `clip` | [Paths64](/api-docs/clay-web/clipper/Paths64/) |
| `fillRule` | [FillRule](/api-docs/clay-web/clipper/FillRule/) |

| Returns |
|---------|
| [Paths64](/api-docs/clay-web/clipper/Paths64/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="differenceD"><code><span class="field-name">differenceD</span><span class="parenthesis">(</span><span class="arg-name">subject</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathsD/" class="type-link">PathsD</a><span class="operator">,</span> <span class="arg-name">clip</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathsD/" class="type-link">PathsD</a><span class="operator">,</span> <span class="arg-name">fillRule</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/FillRule/" class="type-link">FillRule</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">precision</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">2</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathsD/" class="type-link">PathsD</a></code><a class="header-anchor" href="#differenceD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computes the difference of subject and clip paths (floating-point).

| Name | Type | Default |
|------|------|---------|
| `subject` | [PathsD](/api-docs/clay-web/clipper/PathsD/) | |
| `clip` | [PathsD](/api-docs/clay-web/clipper/PathsD/) | |
| `fillRule` | [FillRule](/api-docs/clay-web/clipper/FillRule/) | |
| `precision` | [Int](/api-docs/clay-web/Int/) | `2` |

| Returns |
|---------|
| [PathsD](/api-docs/clay-web/clipper/PathsD/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="xor"><code><span class="field-name">xor</span><span class="parenthesis">(</span><span class="arg-name">subject</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a><span class="operator">,</span> <span class="arg-name">clip</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a><span class="operator">,</span> <span class="arg-name">fillRule</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/FillRule/" class="type-link">FillRule</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a></code><a class="header-anchor" href="#xor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computes the XOR (symmetric difference) of subject and clip paths.

| Name | Type |
|------|------|
| `subject` | [Paths64](/api-docs/clay-web/clipper/Paths64/) |
| `clip` | [Paths64](/api-docs/clay-web/clipper/Paths64/) |
| `fillRule` | [FillRule](/api-docs/clay-web/clipper/FillRule/) |

| Returns |
|---------|
| [Paths64](/api-docs/clay-web/clipper/Paths64/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="xorD"><code><span class="field-name">xorD</span><span class="parenthesis">(</span><span class="arg-name">subject</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathsD/" class="type-link">PathsD</a><span class="operator">,</span> <span class="arg-name">clip</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathsD/" class="type-link">PathsD</a><span class="operator">,</span> <span class="arg-name">fillRule</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/FillRule/" class="type-link">FillRule</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">precision</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">2</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathsD/" class="type-link">PathsD</a></code><a class="header-anchor" href="#xorD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computes the XOR of subject and clip paths (floating-point).

| Name | Type | Default |
|------|------|---------|
| `subject` | [PathsD](/api-docs/clay-web/clipper/PathsD/) | |
| `clip` | [PathsD](/api-docs/clay-web/clipper/PathsD/) | |
| `fillRule` | [FillRule](/api-docs/clay-web/clipper/FillRule/) | |
| `precision` | [Int](/api-docs/clay-web/Int/) | `2` |

| Returns |
|---------|
| [PathsD](/api-docs/clay-web/clipper/PathsD/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="booleanOp"><code><span class="field-name">booleanOp</span><span class="parenthesis">(</span><span class="arg-name">clipType</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/ClipType/" class="type-link">ClipType</a><span class="operator">,</span> <span class="arg-name">subject</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">clip</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">fillRule</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/FillRule/" class="type-link">FillRule</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a></code><a class="header-anchor" href="#booleanOp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Performs a boolean operation on subject and clip paths.

| Name | Type |
|------|------|
| `clipType` | [ClipType](/api-docs/clay-web/clipper/ClipType/) |
| `subject` | [Null](/api-docs/clay-web/Null/)<[Paths64](/api-docs/clay-web/clipper/Paths64/)> |
| `clip` | [Null](/api-docs/clay-web/Null/)<[Paths64](/api-docs/clay-web/clipper/Paths64/)> |
| `fillRule` | [FillRule](/api-docs/clay-web/clipper/FillRule/) |

| Returns |
|---------|
| [Paths64](/api-docs/clay-web/clipper/Paths64/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="booleanOpD"><code><span class="field-name">booleanOpD</span><span class="parenthesis">(</span><span class="arg-name">clipType</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/ClipType/" class="type-link">ClipType</a><span class="operator">,</span> <span class="arg-name">subject</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathsD/" class="type-link">PathsD</a><span class="operator">,</span> <span class="arg-name">clip</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/clipper/PathsD/" class="type-link">PathsD</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">fillRule</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/FillRule/" class="type-link">FillRule</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">precision</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">2</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathsD/" class="type-link">PathsD</a></code><a class="header-anchor" href="#booleanOpD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Performs a boolean operation on subject and clip paths (floating-point).

| Name | Type | Default |
|------|------|---------|
| `clipType` | [ClipType](/api-docs/clay-web/clipper/ClipType/) | |
| `subject` | [PathsD](/api-docs/clay-web/clipper/PathsD/) | |
| `clip` | [Null](/api-docs/clay-web/Null/)<[PathsD](/api-docs/clay-web/clipper/PathsD/)> | |
| `fillRule` | [FillRule](/api-docs/clay-web/clipper/FillRule/) | |
| `precision` | [Int](/api-docs/clay-web/Int/) | `2` |

| Returns |
|---------|
| [PathsD](/api-docs/clay-web/clipper/PathsD/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="inflatePaths"><code><span class="field-name">inflatePaths</span><span class="parenthesis">(</span><span class="arg-name">paths</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a><span class="operator">,</span> <span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">joinType</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/JoinType/" class="type-link">JoinType</a><span class="operator">,</span> <span class="arg-name">endType</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/EndType/" class="type-link">EndType</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">miterLimit</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">2.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">arcTolerance</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a></code><a class="header-anchor" href="#inflatePaths"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Inflates or deflates paths by the given delta.

| Name | Type | Default |
|------|------|---------|
| `paths` | [Paths64](/api-docs/clay-web/clipper/Paths64/) | |
| `delta` | [Float](/api-docs/clay-web/Float/) | |
| `joinType` | [JoinType](/api-docs/clay-web/clipper/JoinType/) | |
| `endType` | [EndType](/api-docs/clay-web/clipper/EndType/) | |
| `miterLimit` | [Float](/api-docs/clay-web/Float/) | `2.0` |
| `arcTolerance` | [Float](/api-docs/clay-web/Float/) | `0.0` |

| Returns |
|---------|
| [Paths64](/api-docs/clay-web/clipper/Paths64/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="inflatePathsD"><code><span class="field-name">inflatePathsD</span><span class="parenthesis">(</span><span class="arg-name">paths</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathsD/" class="type-link">PathsD</a><span class="operator">,</span> <span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">joinType</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/JoinType/" class="type-link">JoinType</a><span class="operator">,</span> <span class="arg-name">endType</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/EndType/" class="type-link">EndType</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">miterLimit</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">2.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">precision</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">2</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">arcTolerance</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathsD/" class="type-link">PathsD</a></code><a class="header-anchor" href="#inflatePathsD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Inflates or deflates paths by the given delta (floating-point).

| Name | Type | Default |
|------|------|---------|
| `paths` | [PathsD](/api-docs/clay-web/clipper/PathsD/) | |
| `delta` | [Float](/api-docs/clay-web/Float/) | |
| `joinType` | [JoinType](/api-docs/clay-web/clipper/JoinType/) | |
| `endType` | [EndType](/api-docs/clay-web/clipper/EndType/) | |
| `miterLimit` | [Float](/api-docs/clay-web/Float/) | `2.0` |
| `precision` | [Int](/api-docs/clay-web/Int/) | `2` |
| `arcTolerance` | [Float](/api-docs/clay-web/Float/) | `0.0` |

| Returns |
|---------|
| [PathsD](/api-docs/clay-web/clipper/PathsD/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="rectClip"><code><span class="field-name">rectClip</span><span class="parenthesis">(</span><span class="arg-name">rect</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Rect64/" class="type-link">Rect64</a><span class="operator">,</span> <span class="arg-name">paths</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a></code><a class="header-anchor" href="#rectClip"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clips paths to the given rectangle.

| Name | Type |
|------|------|
| `rect` | [Rect64](/api-docs/clay-web/clipper/Rect64/) |
| `paths` | [Paths64](/api-docs/clay-web/clipper/Paths64/) |

| Returns |
|---------|
| [Paths64](/api-docs/clay-web/clipper/Paths64/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="rectClipPath"><code><span class="field-name">rectClipPath</span><span class="parenthesis">(</span><span class="arg-name">rect</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Rect64/" class="type-link">Rect64</a><span class="operator">,</span> <span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a></code><a class="header-anchor" href="#rectClipPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clips a single path to the given rectangle.

| Name | Type |
|------|------|
| `rect` | [Rect64](/api-docs/clay-web/clipper/Rect64/) |
| `path` | [Path64](/api-docs/clay-web/clipper/Path64/) |

| Returns |
|---------|
| [Paths64](/api-docs/clay-web/clipper/Paths64/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="rectClipD"><code><span class="field-name">rectClipD</span><span class="parenthesis">(</span><span class="arg-name">rect</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/RectD/" class="type-link">RectD</a><span class="operator">,</span> <span class="arg-name">paths</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathsD/" class="type-link">PathsD</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">precision</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">2</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathsD/" class="type-link">PathsD</a></code><a class="header-anchor" href="#rectClipD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clips paths to the given rectangle (floating-point).

| Name | Type | Default |
|------|------|---------|
| `rect` | [RectD](/api-docs/clay-web/clipper/RectD/) | |
| `paths` | [PathsD](/api-docs/clay-web/clipper/PathsD/) | |
| `precision` | [Int](/api-docs/clay-web/Int/) | `2` |

| Returns |
|---------|
| [PathsD](/api-docs/clay-web/clipper/PathsD/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="rectClipLines"><code><span class="field-name">rectClipLines</span><span class="parenthesis">(</span><span class="arg-name">rect</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Rect64/" class="type-link">Rect64</a><span class="operator">,</span> <span class="arg-name">paths</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a></code><a class="header-anchor" href="#rectClipLines"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clips lines (open paths) to the given rectangle.

| Name | Type |
|------|------|
| `rect` | [Rect64](/api-docs/clay-web/clipper/Rect64/) |
| `paths` | [Paths64](/api-docs/clay-web/clipper/Paths64/) |

| Returns |
|---------|
| [Paths64](/api-docs/clay-web/clipper/Paths64/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="rectClipLinesD"><code><span class="field-name">rectClipLinesD</span><span class="parenthesis">(</span><span class="arg-name">rect</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/RectD/" class="type-link">RectD</a><span class="operator">,</span> <span class="arg-name">paths</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathsD/" class="type-link">PathsD</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">precision</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">2</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathsD/" class="type-link">PathsD</a></code><a class="header-anchor" href="#rectClipLinesD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clips lines to the given rectangle (floating-point).

| Name | Type | Default |
|------|------|---------|
| `rect` | [RectD](/api-docs/clay-web/clipper/RectD/) | |
| `paths` | [PathsD](/api-docs/clay-web/clipper/PathsD/) | |
| `precision` | [Int](/api-docs/clay-web/Int/) | `2` |

| Returns |
|---------|
| [PathsD](/api-docs/clay-web/clipper/PathsD/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="minkowskiSum"><code><span class="field-name">minkowskiSum</span><span class="parenthesis">(</span><span class="arg-name">pattern</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a><span class="operator">,</span> <span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a><span class="operator">,</span> <span class="arg-name">isClosed</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a></code><a class="header-anchor" href="#minkowskiSum"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computes the Minkowski sum of pattern and path.

| Name | Type |
|------|------|
| `pattern` | [Path64](/api-docs/clay-web/clipper/Path64/) |
| `path` | [Path64](/api-docs/clay-web/clipper/Path64/) |
| `isClosed` | [Bool](/api-docs/clay-web/Bool/) |

| Returns |
|---------|
| [Paths64](/api-docs/clay-web/clipper/Paths64/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="minkowskiSumD"><code><span class="field-name">minkowskiSumD</span><span class="parenthesis">(</span><span class="arg-name">pattern</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathD/" class="type-link">PathD</a><span class="operator">,</span> <span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathD/" class="type-link">PathD</a><span class="operator">,</span> <span class="arg-name">isClosed</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">decimalPlaces</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">2</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathsD/" class="type-link">PathsD</a></code><a class="header-anchor" href="#minkowskiSumD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computes the Minkowski sum (floating-point).

| Name | Type | Default |
|------|------|---------|
| `pattern` | [PathD](/api-docs/clay-web/clipper/PathD/) | |
| `path` | [PathD](/api-docs/clay-web/clipper/PathD/) | |
| `isClosed` | [Bool](/api-docs/clay-web/Bool/) | |
| `decimalPlaces` | [Int](/api-docs/clay-web/Int/) | `2` |

| Returns |
|---------|
| [PathsD](/api-docs/clay-web/clipper/PathsD/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="minkowskiDiff"><code><span class="field-name">minkowskiDiff</span><span class="parenthesis">(</span><span class="arg-name">pattern</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a><span class="operator">,</span> <span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a><span class="operator">,</span> <span class="arg-name">isClosed</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a></code><a class="header-anchor" href="#minkowskiDiff"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computes the Minkowski difference of pattern and path.

| Name | Type |
|------|------|
| `pattern` | [Path64](/api-docs/clay-web/clipper/Path64/) |
| `path` | [Path64](/api-docs/clay-web/clipper/Path64/) |
| `isClosed` | [Bool](/api-docs/clay-web/Bool/) |

| Returns |
|---------|
| [Paths64](/api-docs/clay-web/clipper/Paths64/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="minkowskiDiffD"><code><span class="field-name">minkowskiDiffD</span><span class="parenthesis">(</span><span class="arg-name">pattern</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathD/" class="type-link">PathD</a><span class="operator">,</span> <span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathD/" class="type-link">PathD</a><span class="operator">,</span> <span class="arg-name">isClosed</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">decimalPlaces</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">2</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathsD/" class="type-link">PathsD</a></code><a class="header-anchor" href="#minkowskiDiffD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computes the Minkowski difference (floating-point).

| Name | Type | Default |
|------|------|---------|
| `pattern` | [PathD](/api-docs/clay-web/clipper/PathD/) | |
| `path` | [PathD](/api-docs/clay-web/clipper/PathD/) | |
| `isClosed` | [Bool](/api-docs/clay-web/Bool/) | |
| `decimalPlaces` | [Int](/api-docs/clay-web/Int/) | `2` |

| Returns |
|---------|
| [PathsD](/api-docs/clay-web/clipper/PathsD/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="areaPath64"><code><span class="field-name">areaPath64</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#areaPath64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculates the signed area of a path using the Shoelace formula.

| Name | Type |
|------|------|
| `path` | [Path64](/api-docs/clay-web/clipper/Path64/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="areaPaths64"><code><span class="field-name">areaPaths64</span><span class="parenthesis">(</span><span class="arg-name">paths</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#areaPaths64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculates the signed area of multiple paths.

| Name | Type |
|------|------|
| `paths` | [Paths64](/api-docs/clay-web/clipper/Paths64/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="areaPathD"><code><span class="field-name">areaPathD</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathD/" class="type-link">PathD</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#areaPathD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculates the signed area of a path (floating-point).

| Name | Type |
|------|------|
| `path` | [PathD](/api-docs/clay-web/clipper/PathD/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="areaPathsD"><code><span class="field-name">areaPathsD</span><span class="parenthesis">(</span><span class="arg-name">paths</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathsD/" class="type-link">PathsD</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#areaPathsD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculates the signed area of multiple paths (floating-point).

| Name | Type |
|------|------|
| `paths` | [PathsD](/api-docs/clay-web/clipper/PathsD/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isPositive"><code><span class="field-name">isPositive</span><span class="parenthesis">(</span><span class="arg-name">poly</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isPositive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns true if the path has positive (counter-clockwise) area.

| Name | Type |
|------|------|
| `poly` | [Path64](/api-docs/clay-web/clipper/Path64/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isPositiveD"><code><span class="field-name">isPositiveD</span><span class="parenthesis">(</span><span class="arg-name">poly</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathD/" class="type-link">PathD</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isPositiveD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns true if the path has positive (counter-clockwise) area (floating-point).

| Name | Type |
|------|------|
| `poly` | [PathD](/api-docs/clay-web/clipper/PathD/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="translatePath"><code><span class="field-name">translatePath</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a><span class="operator">,</span> <span class="arg-name">dx</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/ClipperInt64/" class="type-link">ClipperInt64</a><span class="operator">,</span> <span class="arg-name">dy</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/ClipperInt64/" class="type-link">ClipperInt64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a></code><a class="header-anchor" href="#translatePath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Translates a path by dx, dy.

| Name | Type |
|------|------|
| `path` | [Path64](/api-docs/clay-web/clipper/Path64/) |
| `dx` | [ClipperInt64](/api-docs/clay-web/clipper/ClipperInt64/) |
| `dy` | [ClipperInt64](/api-docs/clay-web/clipper/ClipperInt64/) |

| Returns |
|---------|
| [Path64](/api-docs/clay-web/clipper/Path64/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="translatePaths"><code><span class="field-name">translatePaths</span><span class="parenthesis">(</span><span class="arg-name">paths</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a><span class="operator">,</span> <span class="arg-name">dx</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/ClipperInt64/" class="type-link">ClipperInt64</a><span class="operator">,</span> <span class="arg-name">dy</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/ClipperInt64/" class="type-link">ClipperInt64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a></code><a class="header-anchor" href="#translatePaths"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Translates multiple paths by dx, dy.

| Name | Type |
|------|------|
| `paths` | [Paths64](/api-docs/clay-web/clipper/Paths64/) |
| `dx` | [ClipperInt64](/api-docs/clay-web/clipper/ClipperInt64/) |
| `dy` | [ClipperInt64](/api-docs/clay-web/clipper/ClipperInt64/) |

| Returns |
|---------|
| [Paths64](/api-docs/clay-web/clipper/Paths64/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="translatePathD"><code><span class="field-name">translatePathD</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathD/" class="type-link">PathD</a><span class="operator">,</span> <span class="arg-name">dx</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">dy</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathD/" class="type-link">PathD</a></code><a class="header-anchor" href="#translatePathD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Translates a path by dx, dy (floating-point).

| Name | Type |
|------|------|
| `path` | [PathD](/api-docs/clay-web/clipper/PathD/) |
| `dx` | [Float](/api-docs/clay-web/Float/) |
| `dy` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [PathD](/api-docs/clay-web/clipper/PathD/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="translatePathsD"><code><span class="field-name">translatePathsD</span><span class="parenthesis">(</span><span class="arg-name">paths</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathsD/" class="type-link">PathsD</a><span class="operator">,</span> <span class="arg-name">dx</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">dy</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathsD/" class="type-link">PathsD</a></code><a class="header-anchor" href="#translatePathsD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Translates multiple paths by dx, dy (floating-point).

| Name | Type |
|------|------|
| `paths` | [PathsD](/api-docs/clay-web/clipper/PathsD/) |
| `dx` | [Float](/api-docs/clay-web/Float/) |
| `dy` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [PathsD](/api-docs/clay-web/clipper/PathsD/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="reversePath"><code><span class="field-name">reversePath</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a></code><a class="header-anchor" href="#reversePath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a reversed copy of the path.

| Name | Type |
|------|------|
| `path` | [Path64](/api-docs/clay-web/clipper/Path64/) |

| Returns |
|---------|
| [Path64](/api-docs/clay-web/clipper/Path64/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="reversePathD"><code><span class="field-name">reversePathD</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathD/" class="type-link">PathD</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathD/" class="type-link">PathD</a></code><a class="header-anchor" href="#reversePathD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a reversed copy of the path (floating-point).

| Name | Type |
|------|------|
| `path` | [PathD](/api-docs/clay-web/clipper/PathD/) |

| Returns |
|---------|
| [PathD](/api-docs/clay-web/clipper/PathD/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="reversePaths"><code><span class="field-name">reversePaths</span><span class="parenthesis">(</span><span class="arg-name">paths</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a></code><a class="header-anchor" href="#reversePaths"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns reversed copies of all paths.

| Name | Type |
|------|------|
| `paths` | [Paths64](/api-docs/clay-web/clipper/Paths64/) |

| Returns |
|---------|
| [Paths64](/api-docs/clay-web/clipper/Paths64/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="reversePathsD"><code><span class="field-name">reversePathsD</span><span class="parenthesis">(</span><span class="arg-name">paths</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathsD/" class="type-link">PathsD</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathsD/" class="type-link">PathsD</a></code><a class="header-anchor" href="#reversePathsD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns reversed copies of all paths (floating-point).

| Name | Type |
|------|------|
| `paths` | [PathsD](/api-docs/clay-web/clipper/PathsD/) |

| Returns |
|---------|
| [PathsD](/api-docs/clay-web/clipper/PathsD/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="scalePath"><code><span class="field-name">scalePath</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a><span class="operator">,</span> <span class="arg-name">scale</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a></code><a class="header-anchor" href="#scalePath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Scales a path by the given factor.

| Name | Type |
|------|------|
| `path` | [Path64](/api-docs/clay-web/clipper/Path64/) |
| `scale` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Path64](/api-docs/clay-web/clipper/Path64/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="scalePaths"><code><span class="field-name">scalePaths</span><span class="parenthesis">(</span><span class="arg-name">paths</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a><span class="operator">,</span> <span class="arg-name">scale</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a></code><a class="header-anchor" href="#scalePaths"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Scales multiple paths by the given factor.

| Name | Type |
|------|------|
| `paths` | [Paths64](/api-docs/clay-web/clipper/Paths64/) |
| `scale` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Paths64](/api-docs/clay-web/clipper/Paths64/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="scalePath64"><code><span class="field-name">scalePath64</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathD/" class="type-link">PathD</a><span class="operator">,</span> <span class="arg-name">scale</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a></code><a class="header-anchor" href="#scalePath64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Scales a PathD to Path64 with the given scale.

| Name | Type |
|------|------|
| `path` | [PathD](/api-docs/clay-web/clipper/PathD/) |
| `scale` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Path64](/api-docs/clay-web/clipper/Path64/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="scalePaths64"><code><span class="field-name">scalePaths64</span><span class="parenthesis">(</span><span class="arg-name">paths</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathsD/" class="type-link">PathsD</a><span class="operator">,</span> <span class="arg-name">scale</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a></code><a class="header-anchor" href="#scalePaths64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Scales PathsD to Paths64 with the given scale.

| Name | Type |
|------|------|
| `paths` | [PathsD](/api-docs/clay-web/clipper/PathsD/) |
| `scale` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Paths64](/api-docs/clay-web/clipper/Paths64/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="scalePathD"><code><span class="field-name">scalePathD</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a><span class="operator">,</span> <span class="arg-name">scale</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathD/" class="type-link">PathD</a></code><a class="header-anchor" href="#scalePathD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Scales a Path64 to PathD with the given scale.

| Name | Type |
|------|------|
| `path` | [Path64](/api-docs/clay-web/clipper/Path64/) |
| `scale` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [PathD](/api-docs/clay-web/clipper/PathD/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="scalePathsD"><code><span class="field-name">scalePathsD</span><span class="parenthesis">(</span><span class="arg-name">paths</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a><span class="operator">,</span> <span class="arg-name">scale</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathsD/" class="type-link">PathsD</a></code><a class="header-anchor" href="#scalePathsD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Scales Paths64 to PathsD with the given scale.

| Name | Type |
|------|------|
| `paths` | [Paths64](/api-docs/clay-web/clipper/Paths64/) |
| `scale` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [PathsD](/api-docs/clay-web/clipper/PathsD/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="scaleRect"><code><span class="field-name">scaleRect</span><span class="parenthesis">(</span><span class="arg-name">rect</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/RectD/" class="type-link">RectD</a><span class="operator">,</span> <span class="arg-name">scale</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Rect64/" class="type-link">Rect64</a></code><a class="header-anchor" href="#scaleRect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Scales a RectD to Rect64.

| Name | Type |
|------|------|
| `rect` | [RectD](/api-docs/clay-web/clipper/RectD/) |
| `scale` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Rect64](/api-docs/clay-web/clipper/Rect64/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="pathDToPath64"><code><span class="field-name">pathDToPath64</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathD/" class="type-link">PathD</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a></code><a class="header-anchor" href="#pathDToPath64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts PathD to Path64 without scaling.

| Name | Type |
|------|------|
| `path` | [PathD](/api-docs/clay-web/clipper/PathD/) |

| Returns |
|---------|
| [Path64](/api-docs/clay-web/clipper/Path64/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="pathsDToPaths64"><code><span class="field-name">pathsDToPaths64</span><span class="parenthesis">(</span><span class="arg-name">paths</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathsD/" class="type-link">PathsD</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a></code><a class="header-anchor" href="#pathsDToPaths64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts PathsD to Paths64 without scaling.

| Name | Type |
|------|------|
| `paths` | [PathsD](/api-docs/clay-web/clipper/PathsD/) |

| Returns |
|---------|
| [Paths64](/api-docs/clay-web/clipper/Paths64/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="path64ToPathD"><code><span class="field-name">path64ToPathD</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathD/" class="type-link">PathD</a></code><a class="header-anchor" href="#path64ToPathD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts Path64 to PathD without scaling.

| Name | Type |
|------|------|
| `path` | [Path64](/api-docs/clay-web/clipper/Path64/) |

| Returns |
|---------|
| [PathD](/api-docs/clay-web/clipper/PathD/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="paths64ToPathsD"><code><span class="field-name">paths64ToPathsD</span><span class="parenthesis">(</span><span class="arg-name">paths</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathsD/" class="type-link">PathsD</a></code><a class="header-anchor" href="#paths64ToPathsD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts Paths64 to PathsD without scaling.

| Name | Type |
|------|------|
| `paths` | [Paths64](/api-docs/clay-web/clipper/Paths64/) |

| Returns |
|---------|
| [PathsD](/api-docs/clay-web/clipper/PathsD/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getBoundsPath64"><code><span class="field-name">getBoundsPath64</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Rect64/" class="type-link">Rect64</a></code><a class="header-anchor" href="#getBoundsPath64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the bounding rectangle of a path.

| Name | Type |
|------|------|
| `path` | [Path64](/api-docs/clay-web/clipper/Path64/) |

| Returns |
|---------|
| [Rect64](/api-docs/clay-web/clipper/Rect64/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getBoundsPaths64"><code><span class="field-name">getBoundsPaths64</span><span class="parenthesis">(</span><span class="arg-name">paths</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Rect64/" class="type-link">Rect64</a></code><a class="header-anchor" href="#getBoundsPaths64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the bounding rectangle of multiple paths.

| Name | Type |
|------|------|
| `paths` | [Paths64](/api-docs/clay-web/clipper/Paths64/) |

| Returns |
|---------|
| [Rect64](/api-docs/clay-web/clipper/Rect64/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getBoundsPathD"><code><span class="field-name">getBoundsPathD</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathD/" class="type-link">PathD</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/RectD/" class="type-link">RectD</a></code><a class="header-anchor" href="#getBoundsPathD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the bounding rectangle of a path (floating-point).

| Name | Type |
|------|------|
| `path` | [PathD](/api-docs/clay-web/clipper/PathD/) |

| Returns |
|---------|
| [RectD](/api-docs/clay-web/clipper/RectD/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getBoundsPathsD"><code><span class="field-name">getBoundsPathsD</span><span class="parenthesis">(</span><span class="arg-name">paths</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathsD/" class="type-link">PathsD</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/RectD/" class="type-link">RectD</a></code><a class="header-anchor" href="#getBoundsPathsD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the bounding rectangle of multiple paths (floating-point).

| Name | Type |
|------|------|
| `paths` | [PathsD](/api-docs/clay-web/clipper/PathsD/) |

| Returns |
|---------|
| [RectD](/api-docs/clay-web/clipper/RectD/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="makePathInt"><code><span class="field-name">makePathInt</span><span class="parenthesis">(</span><span class="arg-name">arr</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a></code><a class="header-anchor" href="#makePathInt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a path from an array of integers [x1, y1, x2, y2, ...].

| Name | Type |
|------|------|
| `arr` | [Array](/api-docs/clay-web/Array/)<[Int](/api-docs/clay-web/Int/)> |

| Returns |
|---------|
| [Path64](/api-docs/clay-web/clipper/Path64/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="makePathFloat"><code><span class="field-name">makePathFloat</span><span class="parenthesis">(</span><span class="arg-name">arr</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathD/" class="type-link">PathD</a></code><a class="header-anchor" href="#makePathFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a path from an array of floats [x1, y1, x2, y2, ...].

| Name | Type |
|------|------|
| `arr` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> |

| Returns |
|---------|
| [PathD](/api-docs/clay-web/clipper/PathD/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="sqr"><code><span class="field-name">sqr</span><span class="parenthesis">(</span><span class="arg-name">val</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#sqr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculates the squared distance between two points.

| Name | Type |
|------|------|
| `val` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="distanceSqr"><code><span class="field-name">distanceSqr</span><span class="parenthesis">(</span><span class="arg-name">pt1</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">pt2</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#distanceSqr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculates the squared distance between two Point64 values.

| Name | Type |
|------|------|
| `pt1` | [Point64](/api-docs/clay-web/clipper/Point64/) |
| `pt2` | [Point64](/api-docs/clay-web/clipper/Point64/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="midPoint"><code><span class="field-name">midPoint</span><span class="parenthesis">(</span><span class="arg-name">pt1</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">pt2</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a></code><a class="header-anchor" href="#midPoint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculates the midpoint between two Point64 values.

| Name | Type |
|------|------|
| `pt1` | [Point64](/api-docs/clay-web/clipper/Point64/) |
| `pt2` | [Point64](/api-docs/clay-web/clipper/Point64/) |

| Returns |
|---------|
| [Point64](/api-docs/clay-web/clipper/Point64/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="midPointD"><code><span class="field-name">midPointD</span><span class="parenthesis">(</span><span class="arg-name">pt1</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PointD/" class="type-link">PointD</a><span class="operator">,</span> <span class="arg-name">pt2</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PointD/" class="type-link">PointD</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PointD/" class="type-link">PointD</a></code><a class="header-anchor" href="#midPointD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculates the midpoint between two PointD values.

| Name | Type |
|------|------|
| `pt1` | [PointD](/api-docs/clay-web/clipper/PointD/) |
| `pt2` | [PointD](/api-docs/clay-web/clipper/PointD/) |

| Returns |
|---------|
| [PointD](/api-docs/clay-web/clipper/PointD/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="pointsNearEqual"><code><span class="field-name">pointsNearEqual</span><span class="parenthesis">(</span><span class="arg-name">pt1</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PointD/" class="type-link">PointD</a><span class="operator">,</span> <span class="arg-name">pt2</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PointD/" class="type-link">PointD</a><span class="operator">,</span> <span class="arg-name">distanceSqrd</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#pointsNearEqual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tests if a point is near equal to another point within a squared distance tolerance.

| Name | Type |
|------|------|
| `pt1` | [PointD](/api-docs/clay-web/clipper/PointD/) |
| `pt2` | [PointD](/api-docs/clay-web/clipper/PointD/) |
| `distanceSqrd` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="stripNearDuplicates"><code><span class="field-name">stripNearDuplicates</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathD/" class="type-link">PathD</a><span class="operator">,</span> <span class="arg-name">minEdgeLenSqrd</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">isClosedPath</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathD/" class="type-link">PathD</a></code><a class="header-anchor" href="#stripNearDuplicates"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Strips near-duplicate points from a path.

| Name | Type |
|------|------|
| `path` | [PathD](/api-docs/clay-web/clipper/PathD/) |
| `minEdgeLenSqrd` | [Float](/api-docs/clay-web/Float/) |
| `isClosedPath` | [Bool](/api-docs/clay-web/Bool/) |

| Returns |
|---------|
| [PathD](/api-docs/clay-web/clipper/PathD/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="stripDuplicates"><code><span class="field-name">stripDuplicates</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a><span class="operator">,</span> <span class="arg-name">isClosedPath</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a></code><a class="header-anchor" href="#stripDuplicates"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Strips duplicate points from a path.

| Name | Type |
|------|------|
| `path` | [Path64](/api-docs/clay-web/clipper/Path64/) |
| `isClosedPath` | [Bool](/api-docs/clay-web/Bool/) |

| Returns |
|---------|
| [Path64](/api-docs/clay-web/clipper/Path64/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="perpendicDistFromLineSqrd"><code><span class="field-name">perpendicDistFromLineSqrd</span><span class="parenthesis">(</span><span class="arg-name">pt</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">line1</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">line2</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#perpendicDistFromLineSqrd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns perpendicular distance squared from a point to a line.

| Name | Type |
|------|------|
| `pt` | [Point64](/api-docs/clay-web/clipper/Point64/) |
| `line1` | [Point64](/api-docs/clay-web/clipper/Point64/) |
| `line2` | [Point64](/api-docs/clay-web/clipper/Point64/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="perpendicDistFromLineSqrdD"><code><span class="field-name">perpendicDistFromLineSqrdD</span><span class="parenthesis">(</span><span class="arg-name">pt</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PointD/" class="type-link">PointD</a><span class="operator">,</span> <span class="arg-name">line1</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PointD/" class="type-link">PointD</a><span class="operator">,</span> <span class="arg-name">line2</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PointD/" class="type-link">PointD</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#perpendicDistFromLineSqrdD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns perpendicular distance squared from a point to a line (floating-point).

| Name | Type |
|------|------|
| `pt` | [PointD](/api-docs/clay-web/clipper/PointD/) |
| `line1` | [PointD](/api-docs/clay-web/clipper/PointD/) |
| `line2` | [PointD](/api-docs/clay-web/clipper/PointD/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="pointInPolygon"><code><span class="field-name">pointInPolygon</span><span class="parenthesis">(</span><span class="arg-name">pt</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">polygon</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PointInPolygonResult/" class="type-link">PointInPolygonResult</a></code><a class="header-anchor" href="#pointInPolygon"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tests if a point is inside a polygon.

| Name | Type |
|------|------|
| `pt` | [Point64](/api-docs/clay-web/clipper/Point64/) |
| `polygon` | [Path64](/api-docs/clay-web/clipper/Path64/) |

| Returns |
|---------|
| [PointInPolygonResult](/api-docs/clay-web/clipper/PointInPolygonResult/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="ellipse"><code><span class="field-name">ellipse</span><span class="parenthesis">(</span><span class="arg-name">center</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">radiusX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">radiusY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">steps</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a></code><a class="header-anchor" href="#ellipse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generates an ellipse path.

| Name | Type | Default |
|------|------|---------|
| `center` | [Point64](/api-docs/clay-web/clipper/Point64/) | |
| `radiusX` | [Float](/api-docs/clay-web/Float/) | |
| `radiusY` | [Float](/api-docs/clay-web/Float/) | `0` |
| `steps` | [Int](/api-docs/clay-web/Int/) | `0` |

| Returns |
|---------|
| [Path64](/api-docs/clay-web/clipper/Path64/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="ellipseD"><code><span class="field-name">ellipseD</span><span class="parenthesis">(</span><span class="arg-name">center</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PointD/" class="type-link">PointD</a><span class="operator">,</span> <span class="arg-name">radiusX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">radiusY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">steps</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PathD/" class="type-link">PathD</a></code><a class="header-anchor" href="#ellipseD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generates an ellipse path (floating-point).

| Name | Type | Default |
|------|------|---------|
| `center` | [PointD](/api-docs/clay-web/clipper/PointD/) | |
| `radiusX` | [Float](/api-docs/clay-web/Float/) | |
| `radiusY` | [Float](/api-docs/clay-web/Float/) | `0` |
| `steps` | [Int](/api-docs/clay-web/Int/) | `0` |

| Returns |
|---------|
| [PathD](/api-docs/clay-web/clipper/PathD/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="trimCollinear"><code><span class="field-name">trimCollinear</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">isOpen</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a></code><a class="header-anchor" href="#trimCollinear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Trims collinear points from a path.

| Name | Type | Default |
|------|------|---------|
| `path` | [Path64](/api-docs/clay-web/clipper/Path64/) | |
| `isOpen` | [Bool](/api-docs/clay-web/Bool/) | `false` |

| Returns |
|---------|
| [Path64](/api-docs/clay-web/clipper/Path64/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="triangulate"><code><span class="field-name">triangulate</span><span class="parenthesis">(</span><span class="arg-name">paths</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">useDelaunay</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">AnonStruct</span></code><a class="header-anchor" href="#triangulate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Triangulates paths using Constrained Delaunay Triangulation.

| Name | Type | Default |
|------|------|---------|
| `paths` | [Paths64](/api-docs/clay-web/clipper/Paths64/) | |
| `useDelaunay` | [Bool](/api-docs/clay-web/Bool/) | `true` |

| Returns |
|---------|
| AnonStruct |

