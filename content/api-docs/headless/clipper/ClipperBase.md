---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clipper
title: ClipperBase
target: Headless
permalink: api-docs/headless/clipper/ClipperBase/
---

# ClipperBase

<div class="type-hierarchy"><strong>clipper.ClipperBase</strong> (Class) → <a href="/api-docs/headless/clipper/Clipper64/">Clipper64</a>, <a href="/api-docs/headless/clipper/ClipperD/">ClipperD</a></div>

## Instance Members

<div class="signature field-var no-description" id="preserveCollinear"><code><span class="field-name">preserveCollinear</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#preserveCollinear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="reverseSolution"><code><span class="field-name">reverseSolution</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#reverseSolution"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="clear"><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="addSubject"><code><span class="field-name">addSubject</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Path64/" class="type-link">Path64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addSubject"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [Path64](/api-docs/headless/clipper/Path64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addOpenSubject"><code><span class="field-name">addOpenSubject</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Path64/" class="type-link">Path64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addOpenSubject"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [Path64](/api-docs/headless/clipper/Path64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addClip"><code><span class="field-name">addClip</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Path64/" class="type-link">Path64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addClip"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [Path64](/api-docs/headless/clipper/Path64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getBounds"><code><span class="field-name">getBounds</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Rect64/" class="type-link">Rect64</a></code><a class="header-anchor" href="#getBounds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Rect64](/api-docs/headless/clipper/Rect64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-method no-description" id="isOdd"><code><span class="field-name">isOdd</span><span class="parenthesis">(</span><span class="arg-name">val</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isOdd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `val` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isHotEdge"><code><span class="field-name">isHotEdge</span><span class="parenthesis">(</span><span class="arg-name">ae</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isHotEdge"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ae` | [Active](/api-docs/headless/clipper/Active/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isOpen"><code><span class="field-name">isOpen</span><span class="parenthesis">(</span><span class="arg-name">ae</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isOpen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ae` | [Active](/api-docs/headless/clipper/Active/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isOpenEndVertex"><code><span class="field-name">isOpenEndVertex</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Vertex/" class="type-link">Vertex</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isOpenEndVertex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `v` | [Vertex](/api-docs/headless/clipper/Vertex/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isOpenEnd"><code><span class="field-name">isOpenEnd</span><span class="parenthesis">(</span><span class="arg-name">ae</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isOpenEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ae` | [Active](/api-docs/headless/clipper/Active/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getPrevHotEdge"><code><span class="field-name">getPrevHotEdge</span><span class="parenthesis">(</span><span class="arg-name">ae</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getPrevHotEdge"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ae` | [Active](/api-docs/headless/clipper/Active/) |

| Returns |
|---------|
| [Null](/api-docs/headless/Null/)<[Active](/api-docs/headless/clipper/Active/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isFront"><code><span class="field-name">isFront</span><span class="parenthesis">(</span><span class="arg-name">ae</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isFront"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ae` | [Active](/api-docs/headless/clipper/Active/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getDx"><code><span class="field-name">getDx</span><span class="parenthesis">(</span><span class="arg-name">pt1</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">pt2</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Point64/" class="type-link">Point64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getDx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `pt1` | [Point64](/api-docs/headless/clipper/Point64/) |
| `pt2` | [Point64](/api-docs/headless/clipper/Point64/) |

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="topX"><code><span class="field-name">topX</span><span class="parenthesis">(</span><span class="arg-name">ae</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="operator">,</span> <span class="arg-name">currentY</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/ClipperInt64/" class="type-link">ClipperInt64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/ClipperInt64/" class="type-link">ClipperInt64</a></code><a class="header-anchor" href="#topX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ae` | [Active](/api-docs/headless/clipper/Active/) |
| `currentY` | [ClipperInt64](/api-docs/headless/clipper/ClipperInt64/) |

| Returns |
|---------|
| [ClipperInt64](/api-docs/headless/clipper/ClipperInt64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isHorizontal"><code><span class="field-name">isHorizontal</span><span class="parenthesis">(</span><span class="arg-name">ae</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isHorizontal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ae` | [Active](/api-docs/headless/clipper/Active/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isHeadingRightHorz"><code><span class="field-name">isHeadingRightHorz</span><span class="parenthesis">(</span><span class="arg-name">ae</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isHeadingRightHorz"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ae` | [Active](/api-docs/headless/clipper/Active/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isHeadingLeftHorz"><code><span class="field-name">isHeadingLeftHorz</span><span class="parenthesis">(</span><span class="arg-name">ae</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isHeadingLeftHorz"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ae` | [Active](/api-docs/headless/clipper/Active/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getPolyType"><code><span class="field-name">getPolyType</span><span class="parenthesis">(</span><span class="arg-name">ae</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/PathType/" class="type-link">PathType</a></code><a class="header-anchor" href="#getPolyType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ae` | [Active](/api-docs/headless/clipper/Active/) |

| Returns |
|---------|
| [PathType](/api-docs/headless/clipper/PathType/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isSamePolyType"><code><span class="field-name">isSamePolyType</span><span class="parenthesis">(</span><span class="arg-name">ae1</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="operator">,</span> <span class="arg-name">ae2</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isSamePolyType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ae1` | [Active](/api-docs/headless/clipper/Active/) |
| `ae2` | [Active](/api-docs/headless/clipper/Active/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setDx"><code><span class="field-name">setDx</span><span class="parenthesis">(</span><span class="arg-name">ae</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setDx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ae` | [Active](/api-docs/headless/clipper/Active/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="nextVertex"><code><span class="field-name">nextVertex</span><span class="parenthesis">(</span><span class="arg-name">ae</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Vertex/" class="type-link">Vertex</a></code><a class="header-anchor" href="#nextVertex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ae` | [Active](/api-docs/headless/clipper/Active/) |

| Returns |
|---------|
| [Vertex](/api-docs/headless/clipper/Vertex/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="prevPrevVertex"><code><span class="field-name">prevPrevVertex</span><span class="parenthesis">(</span><span class="arg-name">ae</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Vertex/" class="type-link">Vertex</a></code><a class="header-anchor" href="#prevPrevVertex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ae` | [Active](/api-docs/headless/clipper/Active/) |

| Returns |
|---------|
| [Vertex](/api-docs/headless/clipper/Vertex/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isMaximaVertex"><code><span class="field-name">isMaximaVertex</span><span class="parenthesis">(</span><span class="arg-name">vertex</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Vertex/" class="type-link">Vertex</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isMaximaVertex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `vertex` | [Vertex](/api-docs/headless/clipper/Vertex/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isMaxima"><code><span class="field-name">isMaxima</span><span class="parenthesis">(</span><span class="arg-name">ae</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isMaxima"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ae` | [Active](/api-docs/headless/clipper/Active/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getMaximaPair"><code><span class="field-name">getMaximaPair</span><span class="parenthesis">(</span><span class="arg-name">ae</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getMaximaPair"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ae` | [Active](/api-docs/headless/clipper/Active/) |

| Returns |
|---------|
| [Null](/api-docs/headless/Null/)<[Active](/api-docs/headless/clipper/Active/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getCurrYMaximaVertex_Open"><code><span class="field-name">getCurrYMaximaVertex_Open</span><span class="parenthesis">(</span><span class="arg-name">ae</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/clipper/Vertex/" class="type-link">Vertex</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getCurrYMaximaVertex_Open"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ae` | [Active](/api-docs/headless/clipper/Active/) |

| Returns |
|---------|
| [Null](/api-docs/headless/Null/)<[Vertex](/api-docs/headless/clipper/Vertex/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getCurrYMaximaVertex"><code><span class="field-name">getCurrYMaximaVertex</span><span class="parenthesis">(</span><span class="arg-name">ae</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/clipper/Vertex/" class="type-link">Vertex</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getCurrYMaximaVertex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ae` | [Active](/api-docs/headless/clipper/Active/) |

| Returns |
|---------|
| [Null](/api-docs/headless/Null/)<[Vertex](/api-docs/headless/clipper/Vertex/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setSides"><code><span class="field-name">setSides</span><span class="parenthesis">(</span><span class="arg-name">outrec</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/OutRec/" class="type-link">OutRec</a><span class="operator">,</span> <span class="arg-name">startEdge</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="operator">,</span> <span class="arg-name">endEdge</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setSides"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `outrec` | [OutRec](/api-docs/headless/clipper/OutRec/) |
| `startEdge` | [Active](/api-docs/headless/clipper/Active/) |
| `endEdge` | [Active](/api-docs/headless/clipper/Active/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="swapOutrecs"><code><span class="field-name">swapOutrecs</span><span class="parenthesis">(</span><span class="arg-name">ae1</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="operator">,</span> <span class="arg-name">ae2</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#swapOutrecs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ae1` | [Active](/api-docs/headless/clipper/Active/) |
| `ae2` | [Active](/api-docs/headless/clipper/Active/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setOwner"><code><span class="field-name">setOwner</span><span class="parenthesis">(</span><span class="arg-name">outrec</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/OutRec/" class="type-link">OutRec</a><span class="operator">,</span> <span class="arg-name">newOwner</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/OutRec/" class="type-link">OutRec</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setOwner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `outrec` | [OutRec](/api-docs/headless/clipper/OutRec/) |
| `newOwner` | [OutRec](/api-docs/headless/clipper/OutRec/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="areaOutPt"><code><span class="field-name">areaOutPt</span><span class="parenthesis">(</span><span class="arg-name">op</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/OutPt/" class="type-link">OutPt</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#areaOutPt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `op` | [OutPt](/api-docs/headless/clipper/OutPt/) |

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="areaTriangle"><code><span class="field-name">areaTriangle</span><span class="parenthesis">(</span><span class="arg-name">pt1</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">pt2</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">pt3</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Point64/" class="type-link">Point64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#areaTriangle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `pt1` | [Point64](/api-docs/headless/clipper/Point64/) |
| `pt2` | [Point64](/api-docs/headless/clipper/Point64/) |
| `pt3` | [Point64](/api-docs/headless/clipper/Point64/) |

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getRealOutRec"><code><span class="field-name">getRealOutRec</span><span class="parenthesis">(</span><span class="arg-name">outRec</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/clipper/OutRec/" class="type-link">OutRec</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/clipper/OutRec/" class="type-link">OutRec</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getRealOutRec"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `outRec` | [Null](/api-docs/headless/Null/)<[OutRec](/api-docs/headless/clipper/OutRec/)> |

| Returns |
|---------|
| [Null](/api-docs/headless/Null/)<[OutRec](/api-docs/headless/clipper/OutRec/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isValidOwner"><code><span class="field-name">isValidOwner</span><span class="parenthesis">(</span><span class="arg-name">outRec</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/clipper/OutRec/" class="type-link">OutRec</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">testOwner</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/clipper/OutRec/" class="type-link">OutRec</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isValidOwner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `outRec` | [Null](/api-docs/headless/Null/)<[OutRec](/api-docs/headless/clipper/OutRec/)> |
| `testOwner` | [Null](/api-docs/headless/Null/)<[OutRec](/api-docs/headless/clipper/OutRec/)> |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="uncoupleOutRec"><code><span class="field-name">uncoupleOutRec</span><span class="parenthesis">(</span><span class="arg-name">ae</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#uncoupleOutRec"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ae` | [Active](/api-docs/headless/clipper/Active/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="outrecIsAscending"><code><span class="field-name">outrecIsAscending</span><span class="parenthesis">(</span><span class="arg-name">hotEdge</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#outrecIsAscending"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `hotEdge` | [Active](/api-docs/headless/clipper/Active/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="swapFrontBackSides"><code><span class="field-name">swapFrontBackSides</span><span class="parenthesis">(</span><span class="arg-name">outrec</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/OutRec/" class="type-link">OutRec</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#swapFrontBackSides"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `outrec` | [OutRec](/api-docs/headless/clipper/OutRec/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="edgesAdjacentInAEL"><code><span class="field-name">edgesAdjacentInAEL</span><span class="parenthesis">(</span><span class="arg-name">inode</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/IntersectNode/" class="type-link">IntersectNode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#edgesAdjacentInAEL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inode` | [IntersectNode](/api-docs/headless/clipper/IntersectNode/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isJoined"><code><span class="field-name">isJoined</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isJoined"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `e` | [Active](/api-docs/headless/clipper/Active/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addLocMin"><code><span class="field-name">addLocMin</span><span class="parenthesis">(</span><span class="arg-name">vert</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Vertex/" class="type-link">Vertex</a><span class="operator">,</span> <span class="arg-name">polytype</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/PathType/" class="type-link">PathType</a><span class="operator">,</span> <span class="arg-name">isOpen</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">minimaList</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/clipper/LocalMinima/" class="type-link">LocalMinima</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addLocMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `vert` | [Vertex](/api-docs/headless/clipper/Vertex/) |
| `polytype` | [PathType](/api-docs/headless/clipper/PathType/) |
| `isOpen` | [Bool](/api-docs/headless/Bool/) |
| `minimaList` | [Array](/api-docs/headless/Array/)<[LocalMinima](/api-docs/headless/clipper/LocalMinima/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addPathsToVertexList"><code><span class="field-name">addPathsToVertexList</span><span class="parenthesis">(</span><span class="arg-name">paths</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Paths64/" class="type-link">Paths64</a><span class="operator">,</span> <span class="arg-name">polytype</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/PathType/" class="type-link">PathType</a><span class="operator">,</span> <span class="arg-name">isOpen</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">minimaList</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/clipper/LocalMinima/" class="type-link">LocalMinima</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">vertexList</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/clipper/Vertex/" class="type-link">Vertex</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addPathsToVertexList"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `paths` | [Paths64](/api-docs/headless/clipper/Paths64/) |
| `polytype` | [PathType](/api-docs/headless/clipper/PathType/) |
| `isOpen` | [Bool](/api-docs/headless/Bool/) |
| `minimaList` | [Array](/api-docs/headless/Array/)<[LocalMinima](/api-docs/headless/clipper/LocalMinima/)> |
| `vertexList` | [Array](/api-docs/headless/Array/)<[Vertex](/api-docs/headless/clipper/Vertex/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isValidAelOrder"><code><span class="field-name">isValidAelOrder</span><span class="parenthesis">(</span><span class="arg-name">resident</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="operator">,</span> <span class="arg-name">newcomer</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isValidAelOrder"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `resident` | [Active](/api-docs/headless/clipper/Active/) |
| `newcomer` | [Active](/api-docs/headless/clipper/Active/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="insertRightEdge"><code><span class="field-name">insertRightEdge</span><span class="parenthesis">(</span><span class="arg-name">ae</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="operator">,</span> <span class="arg-name">ae2</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#insertRightEdge"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ae` | [Active](/api-docs/headless/clipper/Active/) |
| `ae2` | [Active](/api-docs/headless/clipper/Active/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="joinOutrecPaths"><code><span class="field-name">joinOutrecPaths</span><span class="parenthesis">(</span><span class="arg-name">ae1</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="operator">,</span> <span class="arg-name">ae2</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#joinOutrecPaths"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ae1` | [Active](/api-docs/headless/clipper/Active/) |
| `ae2` | [Active](/api-docs/headless/clipper/Active/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="findEdgeWithMatchingLocMin"><code><span class="field-name">findEdgeWithMatchingLocMin</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#findEdgeWithMatchingLocMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `e` | [Active](/api-docs/headless/clipper/Active/) |

| Returns |
|---------|
| [Null](/api-docs/headless/Null/)<[Active](/api-docs/headless/clipper/Active/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="perpendicDistFromLineSqrd"><code><span class="field-name">perpendicDistFromLineSqrd</span><span class="parenthesis">(</span><span class="arg-name">pt</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">line1</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">line2</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Point64/" class="type-link">Point64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#perpendicDistFromLineSqrd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `pt` | [Point64](/api-docs/headless/clipper/Point64/) |
| `line1` | [Point64](/api-docs/headless/clipper/Point64/) |
| `line2` | [Point64](/api-docs/headless/clipper/Point64/) |

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="trimHorz"><code><span class="field-name">trimHorz</span><span class="parenthesis">(</span><span class="arg-name">horzEdge</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="operator">,</span> <span class="arg-name">preserveCollinear</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#trimHorz"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `horzEdge` | [Active](/api-docs/headless/clipper/Active/) |
| `preserveCollinear` | [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getLastOp"><code><span class="field-name">getLastOp</span><span class="parenthesis">(</span><span class="arg-name">hotEdge</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/OutPt/" class="type-link">OutPt</a></code><a class="header-anchor" href="#getLastOp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `hotEdge` | [Active](/api-docs/headless/clipper/Active/) |

| Returns |
|---------|
| [OutPt](/api-docs/headless/clipper/OutPt/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="resetHorzDirection"><code><span class="field-name">resetHorzDirection</span><span class="parenthesis">(</span><span class="arg-name">horz</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="operator">,</span> <span class="arg-name">vertexMax</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/clipper/Vertex/" class="type-link">Vertex</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">AnonStruct</span></code><a class="header-anchor" href="#resetHorzDirection"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `horz` | [Active](/api-docs/headless/clipper/Active/) |
| `vertexMax` | [Null](/api-docs/headless/Null/)<[Vertex](/api-docs/headless/clipper/Vertex/)> |

| Returns |
|---------|
| AnonStruct |

<hr class="field-separator" />

<div class="signature field-method no-description" id="extractFromSEL"><code><span class="field-name">extractFromSEL</span><span class="parenthesis">(</span><span class="arg-name">ae</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#extractFromSEL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ae` | [Active](/api-docs/headless/clipper/Active/) |

| Returns |
|---------|
| [Null](/api-docs/headless/Null/)<[Active](/api-docs/headless/clipper/Active/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="insert1Before2InSEL"><code><span class="field-name">insert1Before2InSEL</span><span class="parenthesis">(</span><span class="arg-name">ae1</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="operator">,</span> <span class="arg-name">ae2</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#insert1Before2InSEL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ae1` | [Active](/api-docs/headless/clipper/Active/) |
| `ae2` | [Active](/api-docs/headless/clipper/Active/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setHorzSegHeadingForward"><code><span class="field-name">setHorzSegHeadingForward</span><span class="parenthesis">(</span><span class="arg-name">hs</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/HorzSegment/" class="type-link">HorzSegment</a><span class="operator">,</span> <span class="arg-name">opP</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/OutPt/" class="type-link">OutPt</a><span class="operator">,</span> <span class="arg-name">opN</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/OutPt/" class="type-link">OutPt</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#setHorzSegHeadingForward"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `hs` | [HorzSegment](/api-docs/headless/clipper/HorzSegment/) |
| `opP` | [OutPt](/api-docs/headless/clipper/OutPt/) |
| `opN` | [OutPt](/api-docs/headless/clipper/OutPt/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="updateHorzSegment"><code><span class="field-name">updateHorzSegment</span><span class="parenthesis">(</span><span class="arg-name">hs</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/HorzSegment/" class="type-link">HorzSegment</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#updateHorzSegment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `hs` | [HorzSegment](/api-docs/headless/clipper/HorzSegment/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="horzSegSort"><code><span class="field-name">horzSegSort</span><span class="parenthesis">(</span><span class="arg-name">hs1</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/HorzSegment/" class="type-link">HorzSegment</a><span class="operator">,</span> <span class="arg-name">hs2</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/HorzSegment/" class="type-link">HorzSegment</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#horzSegSort"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `hs1` | [HorzSegment](/api-docs/headless/clipper/HorzSegment/) |
| `hs2` | [HorzSegment](/api-docs/headless/clipper/HorzSegment/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="fixOutRecPts"><code><span class="field-name">fixOutRecPts</span><span class="parenthesis">(</span><span class="arg-name">outrec</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/OutRec/" class="type-link">OutRec</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#fixOutRecPts"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `outrec` | [OutRec](/api-docs/headless/clipper/OutRec/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="moveSplits"><code><span class="field-name">moveSplits</span><span class="parenthesis">(</span><span class="arg-name">fromOr</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/OutRec/" class="type-link">OutRec</a><span class="operator">,</span> <span class="arg-name">toOr</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/OutRec/" class="type-link">OutRec</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#moveSplits"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `fromOr` | [OutRec](/api-docs/headless/clipper/OutRec/) |
| `toOr` | [OutRec](/api-docs/headless/clipper/OutRec/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ptsReallyClose"><code><span class="field-name">ptsReallyClose</span><span class="parenthesis">(</span><span class="arg-name">pt1</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">pt2</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Point64/" class="type-link">Point64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#ptsReallyClose"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `pt1` | [Point64](/api-docs/headless/clipper/Point64/) |
| `pt2` | [Point64](/api-docs/headless/clipper/Point64/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isVerySmallTriangle"><code><span class="field-name">isVerySmallTriangle</span><span class="parenthesis">(</span><span class="arg-name">op</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/OutPt/" class="type-link">OutPt</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isVerySmallTriangle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `op` | [OutPt](/api-docs/headless/clipper/OutPt/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isValidClosedPath"><code><span class="field-name">isValidClosedPath</span><span class="parenthesis">(</span><span class="arg-name">op</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/clipper/OutPt/" class="type-link">OutPt</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isValidClosedPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `op` | [Null](/api-docs/headless/Null/)<[OutPt](/api-docs/headless/clipper/OutPt/)> |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="disposeOutPt"><code><span class="field-name">disposeOutPt</span><span class="parenthesis">(</span><span class="arg-name">op</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/OutPt/" class="type-link">OutPt</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/clipper/OutPt/" class="type-link">OutPt</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#disposeOutPt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `op` | [OutPt](/api-docs/headless/clipper/OutPt/) |

| Returns |
|---------|
| [Null](/api-docs/headless/Null/)<[OutPt](/api-docs/headless/clipper/OutPt/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="path1InsidePath2"><code><span class="field-name">path1InsidePath2</span><span class="parenthesis">(</span><span class="arg-name">op1</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/OutPt/" class="type-link">OutPt</a><span class="operator">,</span> <span class="arg-name">op2</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/OutPt/" class="type-link">OutPt</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#path1InsidePath2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `op1` | [OutPt](/api-docs/headless/clipper/OutPt/) |
| `op2` | [OutPt](/api-docs/headless/clipper/OutPt/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pointInOpPolygon"><code><span class="field-name">pointInOpPolygon</span><span class="parenthesis">(</span><span class="arg-name">pt</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">op</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/OutPt/" class="type-link">OutPt</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/PointInPolygonResult/" class="type-link">PointInPolygonResult</a></code><a class="header-anchor" href="#pointInOpPolygon"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `pt` | [Point64](/api-docs/headless/clipper/Point64/) |
| `op` | [OutPt](/api-docs/headless/clipper/OutPt/) |

| Returns |
|---------|
| [PointInPolygonResult](/api-docs/headless/clipper/PointInPolygonResult/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getCleanPath"><code><span class="field-name">getCleanPath</span><span class="parenthesis">(</span><span class="arg-name">op</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/OutPt/" class="type-link">OutPt</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Path64/" class="type-link">Path64</a></code><a class="header-anchor" href="#getCleanPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `op` | [OutPt](/api-docs/headless/clipper/OutPt/) |

| Returns |
|---------|
| [Path64](/api-docs/headless/clipper/Path64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="clearSolutionOnly"><code><span class="field-name">clearSolutionOnly</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearSolutionOnly"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="reset"><code><span class="field-name">reset</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#reset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="insertScanline"><code><span class="field-name">insertScanline</span><span class="parenthesis">(</span><span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/ClipperInt64/" class="type-link">ClipperInt64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#insertScanline"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `y` | [ClipperInt64](/api-docs/headless/clipper/ClipperInt64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="popScanline"><code><span class="field-name">popScanline</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">AnonStruct</span></code><a class="header-anchor" href="#popScanline"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| AnonStruct |

<hr class="field-separator" />

<div class="signature field-method no-description" id="hasLocMinAtY"><code><span class="field-name">hasLocMinAtY</span><span class="parenthesis">(</span><span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/ClipperInt64/" class="type-link">ClipperInt64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasLocMinAtY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `y` | [ClipperInt64](/api-docs/headless/clipper/ClipperInt64/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="popLocalMinima"><code><span class="field-name">popLocalMinima</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/LocalMinima/" class="type-link">LocalMinima</a></code><a class="header-anchor" href="#popLocalMinima"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [LocalMinima](/api-docs/headless/clipper/LocalMinima/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addPath"><code><span class="field-name">addPath</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Path64/" class="type-link">Path64</a><span class="operator">,</span> <span class="arg-name">polytype</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/PathType/" class="type-link">PathType</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">isOpen</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `path` | [Path64](/api-docs/headless/clipper/Path64/) | |
| `polytype` | [PathType](/api-docs/headless/clipper/PathType/) | |
| `isOpen` | [Bool](/api-docs/headless/Bool/) | `false` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addPaths"><code><span class="field-name">addPaths</span><span class="parenthesis">(</span><span class="arg-name">paths</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Paths64/" class="type-link">Paths64</a><span class="operator">,</span> <span class="arg-name">polytype</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/PathType/" class="type-link">PathType</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">isOpen</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addPaths"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `paths` | [Paths64](/api-docs/headless/clipper/Paths64/) | |
| `polytype` | [PathType](/api-docs/headless/clipper/PathType/) | |
| `isOpen` | [Bool](/api-docs/headless/Bool/) | `false` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="deleteFromAEL"><code><span class="field-name">deleteFromAEL</span><span class="parenthesis">(</span><span class="arg-name">ae</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#deleteFromAEL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ae` | [Active](/api-docs/headless/clipper/Active/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="disposeIntersectNodes"><code><span class="field-name">disposeIntersectNodes</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#disposeIntersectNodes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="isContributingClosed"><code><span class="field-name">isContributingClosed</span><span class="parenthesis">(</span><span class="arg-name">ae</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isContributingClosed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ae` | [Active](/api-docs/headless/clipper/Active/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isContributingOpen"><code><span class="field-name">isContributingOpen</span><span class="parenthesis">(</span><span class="arg-name">ae</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isContributingOpen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ae` | [Active](/api-docs/headless/clipper/Active/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setWindCountForClosedPathEdge"><code><span class="field-name">setWindCountForClosedPathEdge</span><span class="parenthesis">(</span><span class="arg-name">ae</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setWindCountForClosedPathEdge"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ae` | [Active](/api-docs/headless/clipper/Active/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setWindCountForOpenPathEdge"><code><span class="field-name">setWindCountForOpenPathEdge</span><span class="parenthesis">(</span><span class="arg-name">ae</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setWindCountForOpenPathEdge"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ae` | [Active](/api-docs/headless/clipper/Active/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="insertLeftEdge"><code><span class="field-name">insertLeftEdge</span><span class="parenthesis">(</span><span class="arg-name">ae</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#insertLeftEdge"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ae` | [Active](/api-docs/headless/clipper/Active/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="insertLocalMinimaIntoAEL"><code><span class="field-name">insertLocalMinimaIntoAEL</span><span class="parenthesis">(</span><span class="arg-name">botY</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/ClipperInt64/" class="type-link">ClipperInt64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#insertLocalMinimaIntoAEL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `botY` | [ClipperInt64](/api-docs/headless/clipper/ClipperInt64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pushHorz"><code><span class="field-name">pushHorz</span><span class="parenthesis">(</span><span class="arg-name">ae</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pushHorz"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ae` | [Active](/api-docs/headless/clipper/Active/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="popHorz"><code><span class="field-name">popHorz</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">AnonStruct</span></code><a class="header-anchor" href="#popHorz"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| AnonStruct |

<hr class="field-separator" />

<div class="signature field-method no-description" id="newOutRec"><code><span class="field-name">newOutRec</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/OutRec/" class="type-link">OutRec</a></code><a class="header-anchor" href="#newOutRec"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [OutRec](/api-docs/headless/clipper/OutRec/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addLocalMinPoly"><code><span class="field-name">addLocalMinPoly</span><span class="parenthesis">(</span><span class="arg-name">ae1</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="operator">,</span> <span class="arg-name">ae2</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="operator">,</span> <span class="arg-name">pt</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">isNew</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/OutPt/" class="type-link">OutPt</a></code><a class="header-anchor" href="#addLocalMinPoly"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `ae1` | [Active](/api-docs/headless/clipper/Active/) | |
| `ae2` | [Active](/api-docs/headless/clipper/Active/) | |
| `pt` | [Point64](/api-docs/headless/clipper/Point64/) | |
| `isNew` | [Bool](/api-docs/headless/Bool/) | `false` |

| Returns |
|---------|
| [OutPt](/api-docs/headless/clipper/OutPt/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addLocalMaxPoly"><code><span class="field-name">addLocalMaxPoly</span><span class="parenthesis">(</span><span class="arg-name">ae1</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="operator">,</span> <span class="arg-name">ae2</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="operator">,</span> <span class="arg-name">pt</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Point64/" class="type-link">Point64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/clipper/OutPt/" class="type-link">OutPt</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#addLocalMaxPoly"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ae1` | [Active](/api-docs/headless/clipper/Active/) |
| `ae2` | [Active](/api-docs/headless/clipper/Active/) |
| `pt` | [Point64](/api-docs/headless/clipper/Point64/) |

| Returns |
|---------|
| [Null](/api-docs/headless/Null/)<[OutPt](/api-docs/headless/clipper/OutPt/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addOutPt"><code><span class="field-name">addOutPt</span><span class="parenthesis">(</span><span class="arg-name">ae</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="operator">,</span> <span class="arg-name">pt</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Point64/" class="type-link">Point64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/OutPt/" class="type-link">OutPt</a></code><a class="header-anchor" href="#addOutPt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ae` | [Active](/api-docs/headless/clipper/Active/) |
| `pt` | [Point64](/api-docs/headless/clipper/Point64/) |

| Returns |
|---------|
| [OutPt](/api-docs/headless/clipper/OutPt/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="startOpenPath"><code><span class="field-name">startOpenPath</span><span class="parenthesis">(</span><span class="arg-name">ae</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="operator">,</span> <span class="arg-name">pt</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Point64/" class="type-link">Point64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/OutPt/" class="type-link">OutPt</a></code><a class="header-anchor" href="#startOpenPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ae` | [Active](/api-docs/headless/clipper/Active/) |
| `pt` | [Point64](/api-docs/headless/clipper/Point64/) |

| Returns |
|---------|
| [OutPt](/api-docs/headless/clipper/OutPt/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="updateEdgeIntoAEL"><code><span class="field-name">updateEdgeIntoAEL</span><span class="parenthesis">(</span><span class="arg-name">ae</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateEdgeIntoAEL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ae` | [Active](/api-docs/headless/clipper/Active/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="intersectEdges"><code><span class="field-name">intersectEdges</span><span class="parenthesis">(</span><span class="arg-name">ae1</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="operator">,</span> <span class="arg-name">ae2</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="operator">,</span> <span class="arg-name">pt</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Point64/" class="type-link">Point64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#intersectEdges"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ae1` | [Active](/api-docs/headless/clipper/Active/) |
| `ae2` | [Active](/api-docs/headless/clipper/Active/) |
| `pt` | [Point64](/api-docs/headless/clipper/Point64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="swapPositionsInAEL"><code><span class="field-name">swapPositionsInAEL</span><span class="parenthesis">(</span><span class="arg-name">ae1</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="operator">,</span> <span class="arg-name">ae2</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#swapPositionsInAEL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ae1` | [Active](/api-docs/headless/clipper/Active/) |
| `ae2` | [Active](/api-docs/headless/clipper/Active/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="split"><code><span class="field-name">split</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="operator">,</span> <span class="arg-name">currPt</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Point64/" class="type-link">Point64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#split"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `e` | [Active](/api-docs/headless/clipper/Active/) |
| `currPt` | [Point64](/api-docs/headless/clipper/Point64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="checkJoinLeft"><code><span class="field-name">checkJoinLeft</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="operator">,</span> <span class="arg-name">pt</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">checkCurrX</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#checkJoinLeft"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `e` | [Active](/api-docs/headless/clipper/Active/) | |
| `pt` | [Point64](/api-docs/headless/clipper/Point64/) | |
| `checkCurrX` | [Bool](/api-docs/headless/Bool/) | `false` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="checkJoinRight"><code><span class="field-name">checkJoinRight</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="operator">,</span> <span class="arg-name">pt</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">checkCurrX</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#checkJoinRight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `e` | [Active](/api-docs/headless/clipper/Active/) | |
| `pt` | [Point64](/api-docs/headless/clipper/Point64/) | |
| `checkCurrX` | [Bool](/api-docs/headless/Bool/) | `false` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addToHorzSegList"><code><span class="field-name">addToHorzSegList</span><span class="parenthesis">(</span><span class="arg-name">op</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/OutPt/" class="type-link">OutPt</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addToHorzSegList"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `op` | [OutPt](/api-docs/headless/clipper/OutPt/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="doHorizontal"><code><span class="field-name">doHorizontal</span><span class="parenthesis">(</span><span class="arg-name">horz</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#doHorizontal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `horz` | [Active](/api-docs/headless/clipper/Active/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="doTopOfScanbeam"><code><span class="field-name">doTopOfScanbeam</span><span class="parenthesis">(</span><span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/ClipperInt64/" class="type-link">ClipperInt64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#doTopOfScanbeam"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `y` | [ClipperInt64](/api-docs/headless/clipper/ClipperInt64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="doMaxima"><code><span class="field-name">doMaxima</span><span class="parenthesis">(</span><span class="arg-name">ae</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#doMaxima"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ae` | [Active](/api-docs/headless/clipper/Active/) |

| Returns |
|---------|
| [Null](/api-docs/headless/Null/)<[Active](/api-docs/headless/clipper/Active/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="adjustCurrXAndCopyToSEL"><code><span class="field-name">adjustCurrXAndCopyToSEL</span><span class="parenthesis">(</span><span class="arg-name">topY</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/ClipperInt64/" class="type-link">ClipperInt64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#adjustCurrXAndCopyToSEL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `topY` | [ClipperInt64](/api-docs/headless/clipper/ClipperInt64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="doIntersections"><code><span class="field-name">doIntersections</span><span class="parenthesis">(</span><span class="arg-name">topY</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/ClipperInt64/" class="type-link">ClipperInt64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#doIntersections"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `topY` | [ClipperInt64](/api-docs/headless/clipper/ClipperInt64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addNewIntersectNode"><code><span class="field-name">addNewIntersectNode</span><span class="parenthesis">(</span><span class="arg-name">ae1</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="operator">,</span> <span class="arg-name">ae2</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Active/" class="type-link">Active</a><span class="operator">,</span> <span class="arg-name">topY</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/ClipperInt64/" class="type-link">ClipperInt64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addNewIntersectNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ae1` | [Active](/api-docs/headless/clipper/Active/) |
| `ae2` | [Active](/api-docs/headless/clipper/Active/) |
| `topY` | [ClipperInt64](/api-docs/headless/clipper/ClipperInt64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="buildIntersectList"><code><span class="field-name">buildIntersectList</span><span class="parenthesis">(</span><span class="arg-name">topY</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/ClipperInt64/" class="type-link">ClipperInt64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#buildIntersectList"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `topY` | [ClipperInt64](/api-docs/headless/clipper/ClipperInt64/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="processIntersectList"><code><span class="field-name">processIntersectList</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#processIntersectList"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="executeInternal"><code><span class="field-name">executeInternal</span><span class="parenthesis">(</span><span class="arg-name">clipType</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/ClipType/" class="type-link">ClipType</a><span class="operator">,</span> <span class="arg-name">fillRule</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/FillRule/" class="type-link">FillRule</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#executeInternal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `clipType` | [ClipType](/api-docs/headless/clipper/ClipType/) |
| `fillRule` | [FillRule](/api-docs/headless/clipper/FillRule/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="duplicateOp"><code><span class="field-name">duplicateOp</span><span class="parenthesis">(</span><span class="arg-name">op</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/OutPt/" class="type-link">OutPt</a><span class="operator">,</span> <span class="arg-name">insertAfter</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/OutPt/" class="type-link">OutPt</a></code><a class="header-anchor" href="#duplicateOp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `op` | [OutPt](/api-docs/headless/clipper/OutPt/) |
| `insertAfter` | [Bool](/api-docs/headless/Bool/) |

| Returns |
|---------|
| [OutPt](/api-docs/headless/clipper/OutPt/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="convertHorzSegsToJoins"><code><span class="field-name">convertHorzSegsToJoins</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#convertHorzSegsToJoins"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="processHorzJoins"><code><span class="field-name">processHorzJoins</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#processHorzJoins"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="cleanCollinear"><code><span class="field-name">cleanCollinear</span><span class="parenthesis">(</span><span class="arg-name">outrec</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/clipper/OutRec/" class="type-link">OutRec</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#cleanCollinear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `outrec` | [Null](/api-docs/headless/Null/)<[OutRec](/api-docs/headless/clipper/OutRec/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="doSplitOp"><code><span class="field-name">doSplitOp</span><span class="parenthesis">(</span><span class="arg-name">outrec</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/OutRec/" class="type-link">OutRec</a><span class="operator">,</span> <span class="arg-name">splitOp</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/OutPt/" class="type-link">OutPt</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#doSplitOp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `outrec` | [OutRec](/api-docs/headless/clipper/OutRec/) |
| `splitOp` | [OutPt](/api-docs/headless/clipper/OutPt/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="fixSelfIntersects"><code><span class="field-name">fixSelfIntersects</span><span class="parenthesis">(</span><span class="arg-name">outrec</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/OutRec/" class="type-link">OutRec</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#fixSelfIntersects"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `outrec` | [OutRec](/api-docs/headless/clipper/OutRec/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="buildPath"><code><span class="field-name">buildPath</span><span class="parenthesis">(</span><span class="arg-name">op</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/clipper/OutPt/" class="type-link">OutPt</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">reverse</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">isOpen</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Path64/" class="type-link">Path64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#buildPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `op` | [Null](/api-docs/headless/Null/)<[OutPt](/api-docs/headless/clipper/OutPt/)> |
| `reverse` | [Bool](/api-docs/headless/Bool/) |
| `isOpen` | [Bool](/api-docs/headless/Bool/) |
| `path` | [Path64](/api-docs/headless/clipper/Path64/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="buildPaths"><code><span class="field-name">buildPaths</span><span class="parenthesis">(</span><span class="arg-name">solutionClosed</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Paths64/" class="type-link">Paths64</a><span class="operator">,</span> <span class="arg-name">solutionOpen</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Paths64/" class="type-link">Paths64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#buildPaths"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `solutionClosed` | [Paths64](/api-docs/headless/clipper/Paths64/) |
| `solutionOpen` | [Paths64](/api-docs/headless/clipper/Paths64/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="checkBounds"><code><span class="field-name">checkBounds</span><span class="parenthesis">(</span><span class="arg-name">outrec</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/OutRec/" class="type-link">OutRec</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#checkBounds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `outrec` | [OutRec](/api-docs/headless/clipper/OutRec/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="checkSplitOwner"><code><span class="field-name">checkSplitOwner</span><span class="parenthesis">(</span><span class="arg-name">outrec</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/OutRec/" class="type-link">OutRec</a><span class="operator">,</span> <span class="arg-name">splits</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#checkSplitOwner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `outrec` | [OutRec](/api-docs/headless/clipper/OutRec/) |
| `splits` | [Array](/api-docs/headless/Array/)<[Int](/api-docs/headless/Int/)> |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="recursiveCheckOwners"><code><span class="field-name">recursiveCheckOwners</span><span class="parenthesis">(</span><span class="arg-name">outrec</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/OutRec/" class="type-link">OutRec</a><span class="operator">,</span> <span class="arg-name">polypath</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/PolyPathBase/" class="type-link">PolyPathBase</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#recursiveCheckOwners"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `outrec` | [OutRec](/api-docs/headless/clipper/OutRec/) |
| `polypath` | [PolyPathBase](/api-docs/headless/clipper/PolyPathBase/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="buildTree"><code><span class="field-name">buildTree</span><span class="parenthesis">(</span><span class="arg-name">polytree</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/PolyPathBase/" class="type-link">PolyPathBase</a><span class="operator">,</span> <span class="arg-name">openPaths</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Paths64/" class="type-link">Paths64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#buildTree"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `polytree` | [PolyPathBase](/api-docs/headless/clipper/PolyPathBase/) |
| `openPaths` | [Paths64](/api-docs/headless/clipper/Paths64/) |

