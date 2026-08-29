---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clipper
title: Delaunay
target: Clay (Native)
permalink: api-docs/clay-native/clipper/Delaunay/
---

# Delaunay

<div class="type-hierarchy"><strong>clipper.Delaunay</strong> (Class)</div>

Constrained Delaunay Triangulation engine.

## Instance Members

<div class="signature field-method has-description" id="execute"><code><span class="field-name">execute</span><span class="parenthesis">(</span><span class="arg-name">paths</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/Paths64/" class="type-link">Paths64</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">AnonStruct</span></code><a class="header-anchor" href="#execute"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Execute triangulation on the given paths.


| Name | Type | Description |
|------|------|-------------|
| `paths` | [Paths64](/api-docs/clay-native/clipper/Paths64/) | Input paths to triangulate  |

| Returns | Description |
|---------|-------------|
| AnonStruct | Object containing result status and solution paths |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">delaunay</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `delaunay` | [Bool](/api-docs/clay-native/Bool/) | `true` |

## Private Members

<div class="signature field-var no-description" id="allVertices"><code><span class="field-name">allVertices</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Vertex2/" class="type-link">clipper._ClipperTriangulation.Vertex2</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#allVertices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="allEdges"><code><span class="field-name">allEdges</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/" class="type-link">clipper._ClipperTriangulation.Edge</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#allEdges"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="allTriangles"><code><span class="field-name">allTriangles</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Triangle/" class="type-link">clipper._ClipperTriangulation.Triangle</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#allTriangles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="pendingDelaunayStack"><code><span class="field-name">pendingDelaunayStack</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/" class="type-link">clipper._ClipperTriangulation.Edge</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#pendingDelaunayStack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="horzEdgeStack"><code><span class="field-name">horzEdgeStack</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/" class="type-link">clipper._ClipperTriangulation.Edge</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#horzEdgeStack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="locMinStack"><code><span class="field-name">locMinStack</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Vertex2/" class="type-link">clipper._ClipperTriangulation.Vertex2</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#locMinStack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="useDelaunay"><code><span class="field-name">useDelaunay</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#useDelaunay"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="firstActive"><code><span class="field-name">firstActive</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/" class="type-link">clipper._ClipperTriangulation.Edge</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#firstActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="lowermostVertex"><code><span class="field-name">lowermostVertex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Vertex2/" class="type-link">clipper._ClipperTriangulation.Vertex2</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#lowermostVertex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="isLooseEdge"><code><span class="field-name">isLooseEdge</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/" class="type-link">clipper._ClipperTriangulation.Edge</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isLooseEdge"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `e` | [clipper._ClipperTriangulation.Edge](/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isLeftEdge"><code><span class="field-name">isLeftEdge</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/" class="type-link">clipper._ClipperTriangulation.Edge</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isLeftEdge"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `e` | [clipper._ClipperTriangulation.Edge](/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isRightEdge"><code><span class="field-name">isRightEdge</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/" class="type-link">clipper._ClipperTriangulation.Edge</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isRightEdge"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `e` | [clipper._ClipperTriangulation.Edge](/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isHorizontal"><code><span class="field-name">isHorizontal</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/" class="type-link">clipper._ClipperTriangulation.Edge</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isHorizontal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `e` | [clipper._ClipperTriangulation.Edge](/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="leftTurning"><code><span class="field-name">leftTurning</span><span class="parenthesis">(</span><span class="arg-name">p1</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">p2</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">p3</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/Point64/" class="type-link">Point64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#leftTurning"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `p1` | [Point64](/api-docs/clay-native/clipper/Point64/) |
| `p2` | [Point64](/api-docs/clay-native/clipper/Point64/) |
| `p3` | [Point64](/api-docs/clay-native/clipper/Point64/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="rightTurning"><code><span class="field-name">rightTurning</span><span class="parenthesis">(</span><span class="arg-name">p1</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">p2</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">p3</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/Point64/" class="type-link">Point64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#rightTurning"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `p1` | [Point64](/api-docs/clay-native/clipper/Point64/) |
| `p2` | [Point64](/api-docs/clay-native/clipper/Point64/) |
| `p3` | [Point64](/api-docs/clay-native/clipper/Point64/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="edgeCompleted"><code><span class="field-name">edgeCompleted</span><span class="parenthesis">(</span><span class="arg-name">edge</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/" class="type-link">clipper._ClipperTriangulation.Edge</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#edgeCompleted"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `edge` | [clipper._ClipperTriangulation.Edge](/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="edgeContains"><code><span class="field-name">edgeContains</span><span class="parenthesis">(</span><span class="arg-name">edge</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/" class="type-link">clipper._ClipperTriangulation.Edge</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Vertex2/" class="type-link">clipper._ClipperTriangulation.Vertex2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/_ClipperTriangulation/EdgeContainsResult/" class="type-link">clipper._ClipperTriangulation.EdgeContainsResult</a></code><a class="header-anchor" href="#edgeContains"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `edge` | [clipper._ClipperTriangulation.Edge](/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/) |
| `v` | [clipper._ClipperTriangulation.Vertex2](/api-docs/clay-native/clipper/_ClipperTriangulation/Vertex2/) |

| Returns |
|---------|
| [clipper._ClipperTriangulation.EdgeContainsResult](/api-docs/clay-native/clipper/_ClipperTriangulation/EdgeContainsResult/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getAngle"><code><span class="field-name">getAngle</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/Point64/" class="type-link">Point64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getAngle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Point64](/api-docs/clay-native/clipper/Point64/) |
| `b` | [Point64](/api-docs/clay-native/clipper/Point64/) |
| `c` | [Point64](/api-docs/clay-native/clipper/Point64/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getLocMinAngle"><code><span class="field-name">getLocMinAngle</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Vertex2/" class="type-link">clipper._ClipperTriangulation.Vertex2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getLocMinAngle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `v` | [clipper._ClipperTriangulation.Vertex2](/api-docs/clay-native/clipper/_ClipperTriangulation/Vertex2/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="removeEdgeFromVertex"><code><span class="field-name">removeEdgeFromVertex</span><span class="parenthesis">(</span><span class="arg-name">vert</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Vertex2/" class="type-link">clipper._ClipperTriangulation.Vertex2</a><span class="operator">,</span> <span class="arg-name">edge</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/" class="type-link">clipper._ClipperTriangulation.Edge</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeEdgeFromVertex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `vert` | [clipper._ClipperTriangulation.Vertex2](/api-docs/clay-native/clipper/_ClipperTriangulation/Vertex2/) |
| `edge` | [clipper._ClipperTriangulation.Edge](/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="findLocMinIdx"><code><span class="field-name">findLocMinIdx</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/Path64/" class="type-link">Path64</a><span class="operator">,</span> <span class="arg-name">len</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">idx</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">AnonStruct</span></code><a class="header-anchor" href="#findLocMinIdx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [Path64](/api-docs/clay-native/clipper/Path64/) |
| `len` | [Int](/api-docs/clay-native/Int/) |
| `idx` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| AnonStruct |

<hr class="field-separator" />

<div class="signature field-method no-description" id="prev"><code><span class="field-name">prev</span><span class="parenthesis">(</span><span class="arg-name">idx</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">len</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#prev"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `idx` | [Int](/api-docs/clay-native/Int/) |
| `len` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="next"><code><span class="field-name">next</span><span class="parenthesis">(</span><span class="arg-name">idx</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">len</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#next"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `idx` | [Int](/api-docs/clay-native/Int/) |
| `len` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="findLinkingEdge"><code><span class="field-name">findLinkingEdge</span><span class="parenthesis">(</span><span class="arg-name">vert1</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Vertex2/" class="type-link">clipper._ClipperTriangulation.Vertex2</a><span class="operator">,</span> <span class="arg-name">vert2</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Vertex2/" class="type-link">clipper._ClipperTriangulation.Vertex2</a><span class="operator">,</span> <span class="arg-name">preferAscending</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/" class="type-link">clipper._ClipperTriangulation.Edge</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#findLinkingEdge"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `vert1` | [clipper._ClipperTriangulation.Vertex2](/api-docs/clay-native/clipper/_ClipperTriangulation/Vertex2/) |
| `vert2` | [clipper._ClipperTriangulation.Vertex2](/api-docs/clay-native/clipper/_ClipperTriangulation/Vertex2/) |
| `preferAscending` | [Bool](/api-docs/clay-native/Bool/) |

| Returns |
|---------|
| [Null](/api-docs/clay-native/Null/)<[clipper._ClipperTriangulation.Edge](/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pathFromTriangle"><code><span class="field-name">pathFromTriangle</span><span class="parenthesis">(</span><span class="arg-name">tri</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Triangle/" class="type-link">clipper._ClipperTriangulation.Triangle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/Path64/" class="type-link">Path64</a></code><a class="header-anchor" href="#pathFromTriangle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `tri` | [clipper._ClipperTriangulation.Triangle](/api-docs/clay-native/clipper/_ClipperTriangulation/Triangle/) |

| Returns |
|---------|
| [Path64](/api-docs/clay-native/clipper/Path64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="inCircleTest"><code><span class="field-name">inCircleTest</span><span class="parenthesis">(</span><span class="arg-name">ptA</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">ptB</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">ptC</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">ptD</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/Point64/" class="type-link">Point64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#inCircleTest"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ptA` | [Point64](/api-docs/clay-native/clipper/Point64/) |
| `ptB` | [Point64](/api-docs/clay-native/clipper/Point64/) |
| `ptC` | [Point64](/api-docs/clay-native/clipper/Point64/) |
| `ptD` | [Point64](/api-docs/clay-native/clipper/Point64/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="shortestDistFromSegment"><code><span class="field-name">shortestDistFromSegment</span><span class="parenthesis">(</span><span class="arg-name">pt</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">segPt1</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">segPt2</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/Point64/" class="type-link">Point64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#shortestDistFromSegment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `pt` | [Point64](/api-docs/clay-native/clipper/Point64/) |
| `segPt1` | [Point64](/api-docs/clay-native/clipper/Point64/) |
| `segPt2` | [Point64](/api-docs/clay-native/clipper/Point64/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="segsIntersect"><code><span class="field-name">segsIntersect</span><span class="parenthesis">(</span><span class="arg-name">s1a</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">s1b</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">s2a</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">s2b</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/Point64/" class="type-link">Point64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/_ClipperTriangulation/IntersectKind/" class="type-link">clipper._ClipperTriangulation.IntersectKind</a></code><a class="header-anchor" href="#segsIntersect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `s1a` | [Point64](/api-docs/clay-native/clipper/Point64/) |
| `s1b` | [Point64](/api-docs/clay-native/clipper/Point64/) |
| `s2a` | [Point64](/api-docs/clay-native/clipper/Point64/) |
| `s2b` | [Point64](/api-docs/clay-native/clipper/Point64/) |

| Returns |
|---------|
| [clipper._ClipperTriangulation.IntersectKind](/api-docs/clay-native/clipper/_ClipperTriangulation/IntersectKind/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="distSqr"><code><span class="field-name">distSqr</span><span class="parenthesis">(</span><span class="arg-name">pt1</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">pt2</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/Point64/" class="type-link">Point64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#distSqr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `pt1` | [Point64](/api-docs/clay-native/clipper/Point64/) |
| `pt2` | [Point64](/api-docs/clay-native/clipper/Point64/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="sqr"><code><span class="field-name">sqr</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#sqr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `v` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="distanceSqr"><code><span class="field-name">distanceSqr</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/Point64/" class="type-link">Point64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#distanceSqr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Point64](/api-docs/clay-native/clipper/Point64/) |
| `b` | [Point64](/api-docs/clay-native/clipper/Point64/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addPath"><code><span class="field-name">addPath</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/Path64/" class="type-link">Path64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [Path64](/api-docs/clay-native/clipper/Path64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addPaths"><code><span class="field-name">addPaths</span><span class="parenthesis">(</span><span class="arg-name">paths</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/Paths64/" class="type-link">Paths64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#addPaths"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `paths` | [Paths64](/api-docs/clay-native/clipper/Paths64/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="cleanUp"><code><span class="field-name">cleanUp</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#cleanUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="fixupEdgeIntersects"><code><span class="field-name">fixupEdgeIntersects</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#fixupEdgeIntersects"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="mergeDupOrCollinearVertices"><code><span class="field-name">mergeDupOrCollinearVertices</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#mergeDupOrCollinearVertices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="splitEdge"><code><span class="field-name">splitEdge</span><span class="parenthesis">(</span><span class="arg-name">longE</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/" class="type-link">clipper._ClipperTriangulation.Edge</a><span class="operator">,</span> <span class="arg-name">shortE</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/" class="type-link">clipper._ClipperTriangulation.Edge</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#splitEdge"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `longE` | [clipper._ClipperTriangulation.Edge](/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/) |
| `shortE` | [clipper._ClipperTriangulation.Edge](/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="removeIntersection"><code><span class="field-name">removeIntersection</span><span class="parenthesis">(</span><span class="arg-name">e1</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/" class="type-link">clipper._ClipperTriangulation.Edge</a><span class="operator">,</span> <span class="arg-name">e2</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/" class="type-link">clipper._ClipperTriangulation.Edge</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#removeIntersection"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `e1` | [clipper._ClipperTriangulation.Edge](/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/) |
| `e2` | [clipper._ClipperTriangulation.Edge](/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="createEdge"><code><span class="field-name">createEdge</span><span class="parenthesis">(</span><span class="arg-name">v1</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Vertex2/" class="type-link">clipper._ClipperTriangulation.Vertex2</a><span class="operator">,</span> <span class="arg-name">v2</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Vertex2/" class="type-link">clipper._ClipperTriangulation.Vertex2</a><span class="operator">,</span> <span class="arg-name">k</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/_ClipperTriangulation/EdgeKind/" class="type-link">clipper._ClipperTriangulation.EdgeKind</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/" class="type-link">clipper._ClipperTriangulation.Edge</a></code><a class="header-anchor" href="#createEdge"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `v1` | [clipper._ClipperTriangulation.Vertex2](/api-docs/clay-native/clipper/_ClipperTriangulation/Vertex2/) |
| `v2` | [clipper._ClipperTriangulation.Vertex2](/api-docs/clay-native/clipper/_ClipperTriangulation/Vertex2/) |
| `k` | [clipper._ClipperTriangulation.EdgeKind](/api-docs/clay-native/clipper/_ClipperTriangulation/EdgeKind/) |

| Returns |
|---------|
| [clipper._ClipperTriangulation.Edge](/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="createTriangle"><code><span class="field-name">createTriangle</span><span class="parenthesis">(</span><span class="arg-name">e1</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/" class="type-link">clipper._ClipperTriangulation.Edge</a><span class="operator">,</span> <span class="arg-name">e2</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/" class="type-link">clipper._ClipperTriangulation.Edge</a><span class="operator">,</span> <span class="arg-name">e3</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/" class="type-link">clipper._ClipperTriangulation.Edge</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Triangle/" class="type-link">clipper._ClipperTriangulation.Triangle</a></code><a class="header-anchor" href="#createTriangle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `e1` | [clipper._ClipperTriangulation.Edge](/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/) |
| `e2` | [clipper._ClipperTriangulation.Edge](/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/) |
| `e3` | [clipper._ClipperTriangulation.Edge](/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/) |

| Returns |
|---------|
| [clipper._ClipperTriangulation.Triangle](/api-docs/clay-native/clipper/_ClipperTriangulation/Triangle/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="forceLegal"><code><span class="field-name">forceLegal</span><span class="parenthesis">(</span><span class="arg-name">edge</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/" class="type-link">clipper._ClipperTriangulation.Edge</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#forceLegal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `edge` | [clipper._ClipperTriangulation.Edge](/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="createInnerLocMinLooseEdge"><code><span class="field-name">createInnerLocMinLooseEdge</span><span class="parenthesis">(</span><span class="arg-name">vAbove</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Vertex2/" class="type-link">clipper._ClipperTriangulation.Vertex2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/" class="type-link">clipper._ClipperTriangulation.Edge</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#createInnerLocMinLooseEdge"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `vAbove` | [clipper._ClipperTriangulation.Vertex2](/api-docs/clay-native/clipper/_ClipperTriangulation/Vertex2/) |

| Returns |
|---------|
| [Null](/api-docs/clay-native/Null/)<[clipper._ClipperTriangulation.Edge](/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="horizontalBetween"><code><span class="field-name">horizontalBetween</span><span class="parenthesis">(</span><span class="arg-name">v1</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Vertex2/" class="type-link">clipper._ClipperTriangulation.Vertex2</a><span class="operator">,</span> <span class="arg-name">v2</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Vertex2/" class="type-link">clipper._ClipperTriangulation.Vertex2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/" class="type-link">clipper._ClipperTriangulation.Edge</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#horizontalBetween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `v1` | [clipper._ClipperTriangulation.Vertex2](/api-docs/clay-native/clipper/_ClipperTriangulation/Vertex2/) |
| `v2` | [clipper._ClipperTriangulation.Vertex2](/api-docs/clay-native/clipper/_ClipperTriangulation/Vertex2/) |

| Returns |
|---------|
| [Null](/api-docs/clay-native/Null/)<[clipper._ClipperTriangulation.Edge](/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="doTriangulateLeft"><code><span class="field-name">doTriangulateLeft</span><span class="parenthesis">(</span><span class="arg-name">edge</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/" class="type-link">clipper._ClipperTriangulation.Edge</a><span class="operator">,</span> <span class="arg-name">pivot</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Vertex2/" class="type-link">clipper._ClipperTriangulation.Vertex2</a><span class="operator">,</span> <span class="arg-name">minY</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/ClipperInt64/" class="type-link">ClipperInt64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#doTriangulateLeft"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `edge` | [clipper._ClipperTriangulation.Edge](/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/) |
| `pivot` | [clipper._ClipperTriangulation.Vertex2](/api-docs/clay-native/clipper/_ClipperTriangulation/Vertex2/) |
| `minY` | [ClipperInt64](/api-docs/clay-native/clipper/ClipperInt64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="doTriangulateRight"><code><span class="field-name">doTriangulateRight</span><span class="parenthesis">(</span><span class="arg-name">edge</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/" class="type-link">clipper._ClipperTriangulation.Edge</a><span class="operator">,</span> <span class="arg-name">pivot</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Vertex2/" class="type-link">clipper._ClipperTriangulation.Vertex2</a><span class="operator">,</span> <span class="arg-name">minY</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/ClipperInt64/" class="type-link">ClipperInt64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#doTriangulateRight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `edge` | [clipper._ClipperTriangulation.Edge](/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/) |
| `pivot` | [clipper._ClipperTriangulation.Vertex2](/api-docs/clay-native/clipper/_ClipperTriangulation/Vertex2/) |
| `minY` | [ClipperInt64](/api-docs/clay-native/clipper/ClipperInt64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addEdgeToActives"><code><span class="field-name">addEdgeToActives</span><span class="parenthesis">(</span><span class="arg-name">edge</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/" class="type-link">clipper._ClipperTriangulation.Edge</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addEdgeToActives"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `edge` | [clipper._ClipperTriangulation.Edge](/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="removeEdgeFromActives"><code><span class="field-name">removeEdgeFromActives</span><span class="parenthesis">(</span><span class="arg-name">edge</span><span class="operator">:</span> <a href="/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/" class="type-link">clipper._ClipperTriangulation.Edge</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeEdgeFromActives"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `edge` | [clipper._ClipperTriangulation.Edge](/api-docs/clay-native/clipper/_ClipperTriangulation/Edge/) |

