---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clipper
title: ClipperOffset
target: Clay (Web)
permalink: api-docs/clay-web/clipper/ClipperOffset/
---

# ClipperOffset

<div class="type-hierarchy"><strong>clipper.ClipperOffset</strong> (Class)</div>

Performs polygon offsetting (inflating/shrinking).

## Static Members

<div class="signature field-method no-description" id="getUnitNormal"><code><span class="field-name">getUnitNormal</span><span class="parenthesis">(</span><span class="arg-name">pt1</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">pt2</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PointD/" class="type-link">PointD</a></code><a class="header-anchor" href="#getUnitNormal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `pt1` | [Point64](/api-docs/clay-web/clipper/Point64/) |
| `pt2` | [Point64](/api-docs/clay-web/clipper/Point64/) |

| Returns |
|---------|
| [PointD](/api-docs/clay-web/clipper/PointD/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getLowestPathInfo"><code><span class="field-name">getLowestPathInfo</span><span class="parenthesis">(</span><span class="arg-name">paths</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">AnonStruct</span></code><a class="header-anchor" href="#getLowestPathInfo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `paths` | [Paths64](/api-docs/clay-web/clipper/Paths64/) |

| Returns |
|---------|
| AnonStruct |

<hr class="field-separator" />

<div class="signature field-method no-description" id="stripDuplicates"><code><span class="field-name">stripDuplicates</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a><span class="operator">,</span> <span class="arg-name">isClosedPath</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a></code><a class="header-anchor" href="#stripDuplicates"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [Path64](/api-docs/clay-web/clipper/Path64/) |
| `isClosedPath` | [Bool](/api-docs/clay-web/Bool/) |

| Returns |
|---------|
| [Path64](/api-docs/clay-web/clipper/Path64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="reversePath"><code><span class="field-name">reversePath</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a></code><a class="header-anchor" href="#reversePath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [Path64](/api-docs/clay-web/clipper/Path64/) |

| Returns |
|---------|
| [Path64](/api-docs/clay-web/clipper/Path64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="sqr"><code><span class="field-name">sqr</span><span class="parenthesis">(</span><span class="arg-name">val</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#sqr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `val` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ellipse"><code><span class="field-name">ellipse</span><span class="parenthesis">(</span><span class="arg-name">center</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">radiusX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">radiusY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">steps</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a></code><a class="header-anchor" href="#ellipse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `center` | [Point64](/api-docs/clay-web/clipper/Point64/) | |
| `radiusX` | [Float](/api-docs/clay-web/Float/) | |
| `radiusY` | [Float](/api-docs/clay-web/Float/) | |
| `steps` | [Int](/api-docs/clay-web/Int/) | `0` |

| Returns |
|---------|
| [Path64](/api-docs/clay-web/clipper/Path64/) |

## Instance Members

<div class="signature field-var no-description" id="arcTolerance"><code><span class="field-name">arcTolerance</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#arcTolerance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="mergeGroups"><code><span class="field-name">mergeGroups</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#mergeGroups"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="miterLimit"><code><span class="field-name">miterLimit</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#miterLimit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="preserveCollinear"><code><span class="field-name">preserveCollinear</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#preserveCollinear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="reverseSolution"><code><span class="field-name">reverseSolution</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#reverseSolution"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="deltaCallback"><code><span class="field-name">deltaCallback</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">Function</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#deltaCallback"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="clear"><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="addPath"><code><span class="field-name">addPath</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a><span class="operator">,</span> <span class="arg-name">joinType</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/JoinType/" class="type-link">JoinType</a><span class="operator">,</span> <span class="arg-name">endType</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/EndType/" class="type-link">EndType</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [Path64](/api-docs/clay-web/clipper/Path64/) |
| `joinType` | [JoinType](/api-docs/clay-web/clipper/JoinType/) |
| `endType` | [EndType](/api-docs/clay-web/clipper/EndType/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addPaths"><code><span class="field-name">addPaths</span><span class="parenthesis">(</span><span class="arg-name">paths</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a><span class="operator">,</span> <span class="arg-name">joinType</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/JoinType/" class="type-link">JoinType</a><span class="operator">,</span> <span class="arg-name">endType</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/EndType/" class="type-link">EndType</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addPaths"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `paths` | [Paths64](/api-docs/clay-web/clipper/Paths64/) |
| `joinType` | [JoinType](/api-docs/clay-web/clipper/JoinType/) |
| `endType` | [EndType](/api-docs/clay-web/clipper/EndType/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="execute"><code><span class="field-name">execute</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">solution</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#execute"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `delta` | [Float](/api-docs/clay-web/Float/) |
| `solution` | [Paths64](/api-docs/clay-web/clipper/Paths64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="executeTree"><code><span class="field-name">executeTree</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">solutionTree</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PolyTree64/" class="type-link">PolyTree64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#executeTree"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `delta` | [Float](/api-docs/clay-web/Float/) |
| `solutionTree` | [PolyTree64](/api-docs/clay-web/clipper/PolyTree64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="executeWithCallback"><code><span class="field-name">executeWithCallback</span><span class="parenthesis">(</span><span class="arg-name">deltaCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="arg-name">solution</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#executeWithCallback"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `deltaCallback` | Function |
| `solution` | [Paths64](/api-docs/clay-web/clipper/Paths64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">miterLimit</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">2.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">arcTolerance</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">preserveCollinear</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">reverseSolution</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `miterLimit` | [Float](/api-docs/clay-web/Float/) | `2.0` |
| `arcTolerance` | [Float](/api-docs/clay-web/Float/) | `0.0` |
| `preserveCollinear` | [Bool](/api-docs/clay-web/Bool/) | `false` |
| `reverseSolution` | [Bool](/api-docs/clay-web/Bool/) | `false` |

## Private Members

<div class="signature field-var no-description" id="Tolerance"><code><span class="field-name">Tolerance</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#Tolerance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="arc_const"><code><span class="field-name">arc_const</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#arc_const"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="pathOut"><code><span class="field-name">pathOut</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a></code><a class="header-anchor" href="#pathOut"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="translatePoint"><code><span class="field-name">translatePoint</span><span class="parenthesis">(</span><span class="arg-name">pt</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PointD/" class="type-link">PointD</a><span class="operator">,</span> <span class="arg-name">dx</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">dy</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PointD/" class="type-link">PointD</a></code><a class="header-anchor" href="#translatePoint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `pt` | [PointD](/api-docs/clay-web/clipper/PointD/) |
| `dx` | [Float](/api-docs/clay-web/Float/) |
| `dy` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [PointD](/api-docs/clay-web/clipper/PointD/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="reflectPoint"><code><span class="field-name">reflectPoint</span><span class="parenthesis">(</span><span class="arg-name">pt</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PointD/" class="type-link">PointD</a><span class="operator">,</span> <span class="arg-name">pivot</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PointD/" class="type-link">PointD</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PointD/" class="type-link">PointD</a></code><a class="header-anchor" href="#reflectPoint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `pt` | [PointD](/api-docs/clay-web/clipper/PointD/) |
| `pivot` | [PointD](/api-docs/clay-web/clipper/PointD/) |

| Returns |
|---------|
| [PointD](/api-docs/clay-web/clipper/PointD/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="almostZero"><code><span class="field-name">almostZero</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">epsilon</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.001</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#almostZero"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `value` | [Float](/api-docs/clay-web/Float/) | |
| `epsilon` | [Float](/api-docs/clay-web/Float/) | `0.001` |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="hypotenuse"><code><span class="field-name">hypotenuse</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#hypotenuse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="normalizeVector"><code><span class="field-name">normalizeVector</span><span class="parenthesis">(</span><span class="arg-name">vec</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PointD/" class="type-link">PointD</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PointD/" class="type-link">PointD</a></code><a class="header-anchor" href="#normalizeVector"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `vec` | [PointD](/api-docs/clay-web/clipper/PointD/) |

| Returns |
|---------|
| [PointD](/api-docs/clay-web/clipper/PointD/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getAvgUnitVector"><code><span class="field-name">getAvgUnitVector</span><span class="parenthesis">(</span><span class="arg-name">vec1</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PointD/" class="type-link">PointD</a><span class="operator">,</span> <span class="arg-name">vec2</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PointD/" class="type-link">PointD</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PointD/" class="type-link">PointD</a></code><a class="header-anchor" href="#getAvgUnitVector"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `vec1` | [PointD](/api-docs/clay-web/clipper/PointD/) |
| `vec2` | [PointD](/api-docs/clay-web/clipper/PointD/) |

| Returns |
|---------|
| [PointD](/api-docs/clay-web/clipper/PointD/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="calcSolutionCapacity"><code><span class="field-name">calcSolutionCapacity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#calcSolutionCapacity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="checkPathsReversed"><code><span class="field-name">checkPathsReversed</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#checkPathsReversed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="executeInternal"><code><span class="field-name">executeInternal</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#executeInternal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `delta` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getPerpendic"><code><span class="field-name">getPerpendic</span><span class="parenthesis">(</span><span class="arg-name">pt</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">norm</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PointD/" class="type-link">PointD</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a></code><a class="header-anchor" href="#getPerpendic"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `pt` | [Point64](/api-docs/clay-web/clipper/Point64/) |
| `norm` | [PointD](/api-docs/clay-web/clipper/PointD/) |

| Returns |
|---------|
| [Point64](/api-docs/clay-web/clipper/Point64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getPerpendicD"><code><span class="field-name">getPerpendicD</span><span class="parenthesis">(</span><span class="arg-name">pt</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">norm</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PointD/" class="type-link">PointD</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/PointD/" class="type-link">PointD</a></code><a class="header-anchor" href="#getPerpendicD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `pt` | [Point64](/api-docs/clay-web/clipper/Point64/) |
| `norm` | [PointD](/api-docs/clay-web/clipper/PointD/) |

| Returns |
|---------|
| [PointD](/api-docs/clay-web/clipper/PointD/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="doBevel"><code><span class="field-name">doBevel</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a><span class="operator">,</span> <span class="arg-name">j</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">k</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#doBevel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [Path64](/api-docs/clay-web/clipper/Path64/) |
| `j` | [Int](/api-docs/clay-web/Int/) |
| `k` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="doSquare"><code><span class="field-name">doSquare</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a><span class="operator">,</span> <span class="arg-name">j</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">k</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#doSquare"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [Path64](/api-docs/clay-web/clipper/Path64/) |
| `j` | [Int](/api-docs/clay-web/Int/) |
| `k` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="doMiter"><code><span class="field-name">doMiter</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a><span class="operator">,</span> <span class="arg-name">j</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">k</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">cosA</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#doMiter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [Path64](/api-docs/clay-web/clipper/Path64/) |
| `j` | [Int](/api-docs/clay-web/Int/) |
| `k` | [Int](/api-docs/clay-web/Int/) |
| `cosA` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="doRound"><code><span class="field-name">doRound</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a><span class="operator">,</span> <span class="arg-name">j</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">k</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">angle</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#doRound"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [Path64](/api-docs/clay-web/clipper/Path64/) |
| `j` | [Int](/api-docs/clay-web/Int/) |
| `k` | [Int](/api-docs/clay-web/Int/) |
| `angle` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="buildNormals"><code><span class="field-name">buildNormals</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#buildNormals"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [Path64](/api-docs/clay-web/clipper/Path64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="offsetPoint"><code><span class="field-name">offsetPoint</span><span class="parenthesis">(</span><span class="arg-name">group</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/_ClipperOffset/Group/" class="type-link">clipper._ClipperOffset.Group</a><span class="operator">,</span> <span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a><span class="operator">,</span> <span class="arg-name">j</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">k</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#offsetPoint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `group` | [clipper._ClipperOffset.Group](/api-docs/clay-web/clipper/_ClipperOffset/Group/) |
| `path` | [Path64](/api-docs/clay-web/clipper/Path64/) |
| `j` | [Int](/api-docs/clay-web/Int/) |
| `k` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="offsetPolygon"><code><span class="field-name">offsetPolygon</span><span class="parenthesis">(</span><span class="arg-name">group</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/_ClipperOffset/Group/" class="type-link">clipper._ClipperOffset.Group</a><span class="operator">,</span> <span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#offsetPolygon"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `group` | [clipper._ClipperOffset.Group](/api-docs/clay-web/clipper/_ClipperOffset/Group/) |
| `path` | [Path64](/api-docs/clay-web/clipper/Path64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="offsetOpenJoined"><code><span class="field-name">offsetOpenJoined</span><span class="parenthesis">(</span><span class="arg-name">group</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/_ClipperOffset/Group/" class="type-link">clipper._ClipperOffset.Group</a><span class="operator">,</span> <span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#offsetOpenJoined"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `group` | [clipper._ClipperOffset.Group](/api-docs/clay-web/clipper/_ClipperOffset/Group/) |
| `path` | [Path64](/api-docs/clay-web/clipper/Path64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="offsetOpenPath"><code><span class="field-name">offsetOpenPath</span><span class="parenthesis">(</span><span class="arg-name">group</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/_ClipperOffset/Group/" class="type-link">clipper._ClipperOffset.Group</a><span class="operator">,</span> <span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#offsetOpenPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `group` | [clipper._ClipperOffset.Group](/api-docs/clay-web/clipper/_ClipperOffset/Group/) |
| `path` | [Path64](/api-docs/clay-web/clipper/Path64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="doGroupOffset"><code><span class="field-name">doGroupOffset</span><span class="parenthesis">(</span><span class="arg-name">group</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/_ClipperOffset/Group/" class="type-link">clipper._ClipperOffset.Group</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#doGroupOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `group` | [clipper._ClipperOffset.Group](/api-docs/clay-web/clipper/_ClipperOffset/Group/) |

