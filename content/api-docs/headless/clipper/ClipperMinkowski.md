---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clipper
title: ClipperMinkowski
target: Headless
permalink: api-docs/headless/clipper/ClipperMinkowski/
---

# ClipperMinkowski

<div class="type-hierarchy"><strong>clipper.ClipperMinkowski</strong> (Class)</div>

Minkowski Sum and Difference operations.

Minkowski Sum: For each point P in path, the pattern is translated by P.
The union of all these translated patterns forms the Minkowski sum.

Minkowski Difference: Similar to sum, but subtracts pattern points from path points.

## Static Members

<div class="signature field-method has-description" id="isPositive"><code><span class="field-name">isPositive</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Path64/" class="type-link">Path64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isPositive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns true if the polygon has a positive (counter-clockwise) winding.

| Name | Type |
|------|------|
| `path` | [Path64](/api-docs/headless/clipper/Path64/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="reversePath"><code><span class="field-name">reversePath</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Path64/" class="type-link">Path64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Path64/" class="type-link">Path64</a></code><a class="header-anchor" href="#reversePath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a reversed copy of the path.

| Name | Type |
|------|------|
| `path` | [Path64](/api-docs/headless/clipper/Path64/) |

| Returns |
|---------|
| [Path64](/api-docs/headless/clipper/Path64/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="sum"><code><span class="field-name">sum</span><span class="parenthesis">(</span><span class="arg-name">pattern</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Path64/" class="type-link">Path64</a><span class="operator">,</span> <span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Path64/" class="type-link">Path64</a><span class="operator">,</span> <span class="arg-name">isClosed</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Paths64/" class="type-link">Paths64</a></code><a class="header-anchor" href="#sum"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computes the Minkowski Sum of pattern and path.


| Name | Type | Description |
|------|------|-------------|
| `pattern` | [Path64](/api-docs/headless/clipper/Path64/) | The pattern polygon to add  |
| `path` | [Path64](/api-docs/headless/clipper/Path64/) | The path polygon  |
| `isClosed` | [Bool](/api-docs/headless/Bool/) | Whether the path is closed  |

| Returns | Description |
|---------|-------------|
| [Paths64](/api-docs/headless/clipper/Paths64/) | The union of all translated patterns |

<hr class="field-separator" />

<div class="signature field-method has-description" id="diff"><code><span class="field-name">diff</span><span class="parenthesis">(</span><span class="arg-name">pattern</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Path64/" class="type-link">Path64</a><span class="operator">,</span> <span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Path64/" class="type-link">Path64</a><span class="operator">,</span> <span class="arg-name">isClosed</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Paths64/" class="type-link">Paths64</a></code><a class="header-anchor" href="#diff"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computes the Minkowski Difference of pattern and path.


| Name | Type | Description |
|------|------|-------------|
| `pattern` | [Path64](/api-docs/headless/clipper/Path64/) | The pattern polygon to subtract  |
| `path` | [Path64](/api-docs/headless/clipper/Path64/) | The path polygon  |
| `isClosed` | [Bool](/api-docs/headless/Bool/) | Whether the path is closed  |

| Returns | Description |
|---------|-------------|
| [Paths64](/api-docs/headless/clipper/Paths64/) | The union of all translated patterns |

<hr class="field-separator" />

<div class="signature field-method has-description" id="sumD"><code><span class="field-name">sumD</span><span class="parenthesis">(</span><span class="arg-name">pattern</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/PathD/" class="type-link">PathD</a><span class="operator">,</span> <span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/PathD/" class="type-link">PathD</a><span class="operator">,</span> <span class="arg-name">isClosed</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">decimalPlaces</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">2</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/PathsD/" class="type-link">PathsD</a></code><a class="header-anchor" href="#sumD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computes the Minkowski Sum for floating-point paths.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `pattern` | [PathD](/api-docs/headless/clipper/PathD/) | | The pattern polygon to add  |
| `path` | [PathD](/api-docs/headless/clipper/PathD/) | | The path polygon  |
| `isClosed` | [Bool](/api-docs/headless/Bool/) | | Whether the path is closed  |
| `decimalPlaces` | [Int](/api-docs/headless/Int/) | `2` | Decimal precision for scaling (default 2)  |

| Returns | Description |
|---------|-------------|
| [PathsD](/api-docs/headless/clipper/PathsD/) | The union of all translated patterns |

<hr class="field-separator" />

<div class="signature field-method has-description" id="diffD"><code><span class="field-name">diffD</span><span class="parenthesis">(</span><span class="arg-name">pattern</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/PathD/" class="type-link">PathD</a><span class="operator">,</span> <span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/PathD/" class="type-link">PathD</a><span class="operator">,</span> <span class="arg-name">isClosed</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">decimalPlaces</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">2</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/PathsD/" class="type-link">PathsD</a></code><a class="header-anchor" href="#diffD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computes the Minkowski Difference for floating-point paths.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `pattern` | [PathD](/api-docs/headless/clipper/PathD/) | | The pattern polygon to subtract  |
| `path` | [PathD](/api-docs/headless/clipper/PathD/) | | The path polygon  |
| `isClosed` | [Bool](/api-docs/headless/Bool/) | | Whether the path is closed  |
| `decimalPlaces` | [Int](/api-docs/headless/Int/) | `2` | Decimal precision for scaling (default 2)  |

| Returns | Description |
|---------|-------------|
| [PathsD](/api-docs/headless/clipper/PathsD/) | The union of all translated patterns |

## Private Members

<div class="signature field-method has-description" id="minkowskiInternal"><code><span class="field-name">minkowskiInternal</span><span class="parenthesis">(</span><span class="arg-name">pattern</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Path64/" class="type-link">Path64</a><span class="operator">,</span> <span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Path64/" class="type-link">Path64</a><span class="operator">,</span> <span class="arg-name">isSum</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">isClosed</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Paths64/" class="type-link">Paths64</a></code><a class="header-anchor" href="#minkowskiInternal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal implementation of Minkowski operation.
Creates quads from adjacent pattern/path point pairs.

| Name | Type |
|------|------|
| `pattern` | [Path64](/api-docs/headless/clipper/Path64/) |
| `path` | [Path64](/api-docs/headless/clipper/Path64/) |
| `isSum` | [Bool](/api-docs/headless/Bool/) |
| `isClosed` | [Bool](/api-docs/headless/Bool/) |

| Returns |
|---------|
| [Paths64](/api-docs/headless/clipper/Paths64/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="scalePath64"><code><span class="field-name">scalePath64</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/PathD/" class="type-link">PathD</a><span class="operator">,</span> <span class="arg-name">scale</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Path64/" class="type-link">Path64</a></code><a class="header-anchor" href="#scalePath64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Scales a PathD to Path64 by multiplying coordinates by scale.

| Name | Type |
|------|------|
| `path` | [PathD](/api-docs/headless/clipper/PathD/) |
| `scale` | [Float](/api-docs/headless/Float/) |

| Returns |
|---------|
| [Path64](/api-docs/headless/clipper/Path64/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="scalePathsD"><code><span class="field-name">scalePathsD</span><span class="parenthesis">(</span><span class="arg-name">paths</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Paths64/" class="type-link">Paths64</a><span class="operator">,</span> <span class="arg-name">scale</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/PathsD/" class="type-link">PathsD</a></code><a class="header-anchor" href="#scalePathsD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Scales Paths64 to PathsD by multiplying coordinates by scale.

| Name | Type |
|------|------|
| `paths` | [Paths64](/api-docs/headless/clipper/Paths64/) |
| `scale` | [Float](/api-docs/headless/Float/) |

| Returns |
|---------|
| [PathsD](/api-docs/headless/clipper/PathsD/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="union"><code><span class="field-name">union</span><span class="parenthesis">(</span><span class="arg-name">paths</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Paths64/" class="type-link">Paths64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Paths64/" class="type-link">Paths64</a></code><a class="header-anchor" href="#union"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Performs a union operation on the given paths.

| Name | Type |
|------|------|
| `paths` | [Paths64](/api-docs/headless/clipper/Paths64/) |

| Returns |
|---------|
| [Paths64](/api-docs/headless/clipper/Paths64/) |

