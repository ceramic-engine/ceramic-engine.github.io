---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clipper
title: RectClip64
target: Clay (Web)
permalink: api-docs/clay-web/clipper/RectClip64/
---

# RectClip64

<div class="type-hierarchy"><strong>clipper.RectClip64</strong> (Class) → <a href="/api-docs/clay-web/clipper/RectClipLines64/">RectClipLines64</a></div>

## Instance Members

<div class="signature field-method no-description" id="execute"><code><span class="field-name">execute</span><span class="parenthesis">(</span><span class="arg-name">paths</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Paths64/" class="type-link">Paths64</a></code><a class="header-anchor" href="#execute"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `paths` | [Paths64](/api-docs/clay-web/clipper/Paths64/) |

| Returns |
|---------|
| [Paths64](/api-docs/clay-web/clipper/Paths64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">rect</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Rect64/" class="type-link">Rect64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `rect` | [Rect64](/api-docs/clay-web/clipper/Rect64/) |

## Private Members

<div class="signature field-var no-description" id="rect_"><code><span class="field-name">rect_</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Rect64/" class="type-link">Rect64</a></code><a class="header-anchor" href="#rect_"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="mp_"><code><span class="field-name">mp_</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a></code><a class="header-anchor" href="#mp_"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="rectPath_"><code><span class="field-name">rectPath_</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a></code><a class="header-anchor" href="#rectPath_"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="pathBounds_"><code><span class="field-name">pathBounds_</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Rect64/" class="type-link">Rect64</a></code><a class="header-anchor" href="#pathBounds_"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="results_"><code><span class="field-name">results_</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/clipper/OutPt2/" class="type-link">OutPt2</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#results_"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="edges_"><code><span class="field-name">edges_</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/clipper/OutPt2/" class="type-link">OutPt2</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#edges_"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="currIdx_"><code><span class="field-name">currIdx_</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#currIdx_"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="path1ContainsPath2"><code><span class="field-name">path1ContainsPath2</span><span class="parenthesis">(</span><span class="arg-name">path1</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a><span class="operator">,</span> <span class="arg-name">path2</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#path1ContainsPath2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path1` | [Path64](/api-docs/clay-web/clipper/Path64/) |
| `path2` | [Path64](/api-docs/clay-web/clipper/Path64/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isClockwise"><code><span class="field-name">isClockwise</span><span class="parenthesis">(</span><span class="arg-name">prev</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/_ClipperRectClip/Location/" class="type-link">clipper._ClipperRectClip.Location</a><span class="operator">,</span> <span class="arg-name">curr</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/_ClipperRectClip/Location/" class="type-link">clipper._ClipperRectClip.Location</a><span class="operator">,</span> <span class="arg-name">prevPt</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">currPt</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">rectMidPoint</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isClockwise"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `prev` | [clipper._ClipperRectClip.Location](/api-docs/clay-web/clipper/_ClipperRectClip/Location/) |
| `curr` | [clipper._ClipperRectClip.Location](/api-docs/clay-web/clipper/_ClipperRectClip/Location/) |
| `prevPt` | [Point64](/api-docs/clay-web/clipper/Point64/) |
| `currPt` | [Point64](/api-docs/clay-web/clipper/Point64/) |
| `rectMidPoint` | [Point64](/api-docs/clay-web/clipper/Point64/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="areOpposites"><code><span class="field-name">areOpposites</span><span class="parenthesis">(</span><span class="arg-name">prev</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/_ClipperRectClip/Location/" class="type-link">clipper._ClipperRectClip.Location</a><span class="operator">,</span> <span class="arg-name">curr</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/_ClipperRectClip/Location/" class="type-link">clipper._ClipperRectClip.Location</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#areOpposites"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `prev` | [clipper._ClipperRectClip.Location](/api-docs/clay-web/clipper/_ClipperRectClip/Location/) |
| `curr` | [clipper._ClipperRectClip.Location](/api-docs/clay-web/clipper/_ClipperRectClip/Location/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="headingClockwise"><code><span class="field-name">headingClockwise</span><span class="parenthesis">(</span><span class="arg-name">prev</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/_ClipperRectClip/Location/" class="type-link">clipper._ClipperRectClip.Location</a><span class="operator">,</span> <span class="arg-name">curr</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/_ClipperRectClip/Location/" class="type-link">clipper._ClipperRectClip.Location</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#headingClockwise"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `prev` | [clipper._ClipperRectClip.Location](/api-docs/clay-web/clipper/_ClipperRectClip/Location/) |
| `curr` | [clipper._ClipperRectClip.Location](/api-docs/clay-web/clipper/_ClipperRectClip/Location/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getAdjacentLocation"><code><span class="field-name">getAdjacentLocation</span><span class="parenthesis">(</span><span class="arg-name">loc</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/_ClipperRectClip/Location/" class="type-link">clipper._ClipperRectClip.Location</a><span class="operator">,</span> <span class="arg-name">isClockwiseDir</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/_ClipperRectClip/Location/" class="type-link">clipper._ClipperRectClip.Location</a></code><a class="header-anchor" href="#getAdjacentLocation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `loc` | [clipper._ClipperRectClip.Location](/api-docs/clay-web/clipper/_ClipperRectClip/Location/) |
| `isClockwiseDir` | [Bool](/api-docs/clay-web/Bool/) |

| Returns |
|---------|
| [clipper._ClipperRectClip.Location](/api-docs/clay-web/clipper/_ClipperRectClip/Location/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="unlinkOp"><code><span class="field-name">unlinkOp</span><span class="parenthesis">(</span><span class="arg-name">op</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/OutPt2/" class="type-link">OutPt2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/clipper/OutPt2/" class="type-link">OutPt2</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#unlinkOp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `op` | [OutPt2](/api-docs/clay-web/clipper/OutPt2/) |

| Returns |
|---------|
| [Null](/api-docs/clay-web/Null/)<[OutPt2](/api-docs/clay-web/clipper/OutPt2/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="unlinkOpBack"><code><span class="field-name">unlinkOpBack</span><span class="parenthesis">(</span><span class="arg-name">op</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/OutPt2/" class="type-link">OutPt2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/clipper/OutPt2/" class="type-link">OutPt2</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#unlinkOpBack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `op` | [OutPt2](/api-docs/clay-web/clipper/OutPt2/) |

| Returns |
|---------|
| [Null](/api-docs/clay-web/Null/)<[OutPt2](/api-docs/clay-web/clipper/OutPt2/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getEdgesForPt"><code><span class="field-name">getEdgesForPt</span><span class="parenthesis">(</span><span class="arg-name">pt</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">rec</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Rect64/" class="type-link">Rect64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getEdgesForPt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `pt` | [Point64](/api-docs/clay-web/clipper/Point64/) |
| `rec` | [Rect64](/api-docs/clay-web/clipper/Rect64/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isHeadingClockwise"><code><span class="field-name">isHeadingClockwise</span><span class="parenthesis">(</span><span class="arg-name">pt1</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">pt2</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">edgeIdx</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isHeadingClockwise"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `pt1` | [Point64](/api-docs/clay-web/clipper/Point64/) |
| `pt2` | [Point64](/api-docs/clay-web/clipper/Point64/) |
| `edgeIdx` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="hasHorzOverlap"><code><span class="field-name">hasHorzOverlap</span><span class="parenthesis">(</span><span class="arg-name">left1</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">right1</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">left2</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">right2</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasHorzOverlap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `left1` | [Point64](/api-docs/clay-web/clipper/Point64/) |
| `right1` | [Point64](/api-docs/clay-web/clipper/Point64/) |
| `left2` | [Point64](/api-docs/clay-web/clipper/Point64/) |
| `right2` | [Point64](/api-docs/clay-web/clipper/Point64/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="hasVertOverlap"><code><span class="field-name">hasVertOverlap</span><span class="parenthesis">(</span><span class="arg-name">top1</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">bottom1</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">top2</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">bottom2</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasVertOverlap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `top1` | [Point64](/api-docs/clay-web/clipper/Point64/) |
| `bottom1` | [Point64](/api-docs/clay-web/clipper/Point64/) |
| `top2` | [Point64](/api-docs/clay-web/clipper/Point64/) |
| `bottom2` | [Point64](/api-docs/clay-web/clipper/Point64/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addToEdge"><code><span class="field-name">addToEdge</span><span class="parenthesis">(</span><span class="arg-name">edge</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/clipper/OutPt2/" class="type-link">OutPt2</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">op</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/OutPt2/" class="type-link">OutPt2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addToEdge"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `edge` | [Array](/api-docs/clay-web/Array/)<[Null](/api-docs/clay-web/Null/)<[OutPt2](/api-docs/clay-web/clipper/OutPt2/)>> |
| `op` | [OutPt2](/api-docs/clay-web/clipper/OutPt2/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="uncoupleEdge"><code><span class="field-name">uncoupleEdge</span><span class="parenthesis">(</span><span class="arg-name">op</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/OutPt2/" class="type-link">OutPt2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#uncoupleEdge"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `op` | [OutPt2](/api-docs/clay-web/clipper/OutPt2/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setNewOwner"><code><span class="field-name">setNewOwner</span><span class="parenthesis">(</span><span class="arg-name">op</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/OutPt2/" class="type-link">OutPt2</a><span class="operator">,</span> <span class="arg-name">newIdx</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setNewOwner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `op` | [OutPt2](/api-docs/clay-web/clipper/OutPt2/) |
| `newIdx` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getLocation"><code><span class="field-name">getLocation</span><span class="parenthesis">(</span><span class="arg-name">rec</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Rect64/" class="type-link">Rect64</a><span class="operator">,</span> <span class="arg-name">pt</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">AnonStruct</span></code><a class="header-anchor" href="#getLocation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `rec` | [Rect64](/api-docs/clay-web/clipper/Rect64/) |
| `pt` | [Point64](/api-docs/clay-web/clipper/Point64/) |

| Returns |
|---------|
| AnonStruct |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isHorizontal"><code><span class="field-name">isHorizontal</span><span class="parenthesis">(</span><span class="arg-name">pt1</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">pt2</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isHorizontal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `pt1` | [Point64](/api-docs/clay-web/clipper/Point64/) |
| `pt2` | [Point64](/api-docs/clay-web/clipper/Point64/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getSegmentIntersection"><code><span class="field-name">getSegmentIntersection</span><span class="parenthesis">(</span><span class="arg-name">p1</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">p2</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">p3</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">p4</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">AnonStruct</span></code><a class="header-anchor" href="#getSegmentIntersection"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `p1` | [Point64](/api-docs/clay-web/clipper/Point64/) |
| `p2` | [Point64](/api-docs/clay-web/clipper/Point64/) |
| `p3` | [Point64](/api-docs/clay-web/clipper/Point64/) |
| `p4` | [Point64](/api-docs/clay-web/clipper/Point64/) |

| Returns |
|---------|
| AnonStruct |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getIntersection"><code><span class="field-name">getIntersection</span><span class="parenthesis">(</span><span class="arg-name">rectPath</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a><span class="operator">,</span> <span class="arg-name">p</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">p2</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="arg-name">loc</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/_ClipperRectClip/Location/" class="type-link">clipper._ClipperRectClip.Location</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">AnonStruct</span></code><a class="header-anchor" href="#getIntersection"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `rectPath` | [Path64](/api-docs/clay-web/clipper/Path64/) |
| `p` | [Point64](/api-docs/clay-web/clipper/Point64/) |
| `p2` | [Point64](/api-docs/clay-web/clipper/Point64/) |
| `loc` | [clipper._ClipperRectClip.Location](/api-docs/clay-web/clipper/_ClipperRectClip/Location/) |

| Returns |
|---------|
| AnonStruct |

<hr class="field-separator" />

<div class="signature field-method no-description" id="startLocsAreClockwise"><code><span class="field-name">startLocsAreClockwise</span><span class="parenthesis">(</span><span class="arg-name">startLocs</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/clipper/_ClipperRectClip/Location/" class="type-link">clipper._ClipperRectClip.Location</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#startLocsAreClockwise"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `startLocs` | [Array](/api-docs/clay-web/Array/)<[clipper._ClipperRectClip.Location](/api-docs/clay-web/clipper/_ClipperRectClip/Location/)> |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getBounds"><code><span class="field-name">getBounds</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Rect64/" class="type-link">Rect64</a></code><a class="header-anchor" href="#getBounds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [Path64](/api-docs/clay-web/clipper/Path64/) |

| Returns |
|---------|
| [Rect64](/api-docs/clay-web/clipper/Rect64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getPath"><code><span class="field-name">getPath</span><span class="parenthesis">(</span><span class="arg-name">op</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/clipper/OutPt2/" class="type-link">OutPt2</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a></code><a class="header-anchor" href="#getPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `op` | [Null](/api-docs/clay-web/Null/)<[OutPt2](/api-docs/clay-web/clipper/OutPt2/)> |

| Returns |
|---------|
| [Path64](/api-docs/clay-web/clipper/Path64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="add"><code><span class="field-name">add</span><span class="parenthesis">(</span><span class="arg-name">pt</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Point64/" class="type-link">Point64</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">startingNewPath</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/OutPt2/" class="type-link">OutPt2</a></code><a class="header-anchor" href="#add"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `pt` | [Point64](/api-docs/clay-web/clipper/Point64/) | |
| `startingNewPath` | [Bool](/api-docs/clay-web/Bool/) | `false` |

| Returns |
|---------|
| [OutPt2](/api-docs/clay-web/clipper/OutPt2/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addCornerByLocs"><code><span class="field-name">addCornerByLocs</span><span class="parenthesis">(</span><span class="arg-name">prev</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/_ClipperRectClip/Location/" class="type-link">clipper._ClipperRectClip.Location</a><span class="operator">,</span> <span class="arg-name">curr</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/_ClipperRectClip/Location/" class="type-link">clipper._ClipperRectClip.Location</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addCornerByLocs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `prev` | [clipper._ClipperRectClip.Location](/api-docs/clay-web/clipper/_ClipperRectClip/Location/) |
| `curr` | [clipper._ClipperRectClip.Location](/api-docs/clay-web/clipper/_ClipperRectClip/Location/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addCorner"><code><span class="field-name">addCorner</span><span class="parenthesis">(</span><span class="arg-name">loc</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/_ClipperRectClip/Location/" class="type-link">clipper._ClipperRectClip.Location</a><span class="operator">,</span> <span class="arg-name">isClockwiseDir</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/_ClipperRectClip/Location/" class="type-link">clipper._ClipperRectClip.Location</a></code><a class="header-anchor" href="#addCorner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `loc` | [clipper._ClipperRectClip.Location](/api-docs/clay-web/clipper/_ClipperRectClip/Location/) |
| `isClockwiseDir` | [Bool](/api-docs/clay-web/Bool/) |

| Returns |
|---------|
| [clipper._ClipperRectClip.Location](/api-docs/clay-web/clipper/_ClipperRectClip/Location/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getNextLocation"><code><span class="field-name">getNextLocation</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a><span class="operator">,</span> <span class="arg-name">loc</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/_ClipperRectClip/Location/" class="type-link">clipper._ClipperRectClip.Location</a><span class="operator">,</span> <span class="arg-name">i</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">highI</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">AnonStruct</span></code><a class="header-anchor" href="#getNextLocation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [Path64](/api-docs/clay-web/clipper/Path64/) |
| `loc` | [clipper._ClipperRectClip.Location](/api-docs/clay-web/clipper/_ClipperRectClip/Location/) |
| `i` | [Int](/api-docs/clay-web/Int/) |
| `highI` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| AnonStruct |

<hr class="field-separator" />

<div class="signature field-method no-description" id="executeInternal"><code><span class="field-name">executeInternal</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/clipper/Path64/" class="type-link">Path64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#executeInternal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [Path64](/api-docs/clay-web/clipper/Path64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="checkEdges"><code><span class="field-name">checkEdges</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#checkEdges"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="tidyEdgePair"><code><span class="field-name">tidyEdgePair</span><span class="parenthesis">(</span><span class="arg-name">idx</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">cw</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/clipper/OutPt2/" class="type-link">OutPt2</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">ccw</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/clipper/OutPt2/" class="type-link">OutPt2</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#tidyEdgePair"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `idx` | [Int](/api-docs/clay-web/Int/) |
| `cw` | [Array](/api-docs/clay-web/Array/)<[Null](/api-docs/clay-web/Null/)<[OutPt2](/api-docs/clay-web/clipper/OutPt2/)>> |
| `ccw` | [Array](/api-docs/clay-web/Array/)<[Null](/api-docs/clay-web/Null/)<[OutPt2](/api-docs/clay-web/clipper/OutPt2/)>> |

