---
layout: api-docs
category: api-docs
subCategory: doc
menu: Polyline
title: Stroke
target: Clay (Native)
permalink: api-docs/clay-native/polyline/Stroke/
---

# Stroke

<div class="view-source"><a href="https://github.com/jeremyfa/polyline/blob/master/polyline/Stroke.hx">View source</a></div>

<div class="type-hierarchy"><strong>polyline.Stroke</strong> (Class)</div>

## Instance Members

<div class="signature field-var has-description" id="miterLimit"><code><span class="field-name">miterLimit</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#miterLimit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The limit before miters turn into bevels. Default 10

<hr class="field-separator" />

<div class="signature field-var has-description" id="thickness"><code><span class="field-name">thickness</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#thickness"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The line thickness

<hr class="field-separator" />

<div class="signature field-var has-description" id="join"><code><span class="field-name">join</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#join"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The join type, can be `MITER` or `BEVEL`. Default `MITER`

<hr class="field-separator" />

<div class="signature field-var has-description" id="cap"><code><span class="field-name">cap</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#cap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The cap type. Can be `BUTT` or `SQUARE`. Default `BUTT`

<hr class="field-separator" />

<div class="signature field-var has-description" id="canLoop"><code><span class="field-name">canLoop</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#canLoop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Will try to join the first and last points together if they are identical

<hr class="field-separator" />

<div class="signature field-method no-description" id="build"><code><span class="field-name">build</span><span class="parenthesis">(</span><span class="arg-name">points</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">vertices</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">indices</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#build"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `points` | [Array](/api-docs/clay-native/Array/)<[Float](/api-docs/clay-native/Float/)> |
| `vertices` | [Array](/api-docs/clay-native/Array/)<[Float](/api-docs/clay-native/Float/)> |
| `indices` | [Array](/api-docs/clay-native/Array/)<[Int](/api-docs/clay-native/Int/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description" id="NUMBER_NONE"><code><span class="field-name">NUMBER_NONE</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#NUMBER_NONE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MATH_TWO_PI"><code><span class="field-name">MATH_TWO_PI</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#MATH_TWO_PI"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MATH_HALF_PI"><code><span class="field-name">MATH_HALF_PI</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#MATH_HALF_PI"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MATH_PI_AND_HALF"><code><span class="field-name">MATH_PI_AND_HALF</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#MATH_PI_AND_HALF"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="miterUtils"><code><span class="field-name">miterUtils</span><span class="operator">:</span> <a href="/api-docs/clay-native/polyline/MiterUtils/" class="type-link">MiterUtils</a></code><a class="header-anchor" href="#miterUtils"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="tmpX"><code><span class="field-name">tmpX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#tmpX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="tmpY"><code><span class="field-name">tmpY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#tmpY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="lineAX"><code><span class="field-name">lineAX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lineAX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="lineAY"><code><span class="field-name">lineAY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lineAY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="lineBX"><code><span class="field-name">lineBX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lineBX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="lineBY"><code><span class="field-name">lineBY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lineBY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="tangentX"><code><span class="field-name">tangentX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#tangentX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="tangentY"><code><span class="field-name">tangentY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#tangentY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="miterX"><code><span class="field-name">miterX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#miterX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="miterY"><code><span class="field-name">miterY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#miterY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="capEndX"><code><span class="field-name">capEndX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#capEndX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="capEndY"><code><span class="field-name">capEndY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#capEndY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="mapThickness"><code><span class="field-name">mapThickness</span><span class="parenthesis">(</span><span class="arg-name">pointX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">pointY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">i</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">points</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#mapThickness"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `pointX` | [Float](/api-docs/clay-native/Float/) |
| `pointY` | [Float](/api-docs/clay-native/Float/) |
| `i` | [Int](/api-docs/clay-native/Int/) |
| `points` | [Array](/api-docs/clay-native/Array/)<[Float](/api-docs/clay-native/Float/)> |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="extrusions"><code><span class="field-name">extrusions</span><span class="parenthesis">(</span><span class="arg-name">vertices</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">pointX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">pointY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">normalX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">normalY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">scale</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#extrusions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `vertices` | [Array](/api-docs/clay-native/Array/)<[Float](/api-docs/clay-native/Float/)> |
| `pointX` | [Float](/api-docs/clay-native/Float/) |
| `pointY` | [Float](/api-docs/clay-native/Float/) |
| `normalX` | [Float](/api-docs/clay-native/Float/) |
| `normalY` | [Float](/api-docs/clay-native/Float/) |
| `scale` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pointsAngle"><code><span class="field-name">pointsAngle</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">x0</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y0</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">x1</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y1</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pointsAngle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-native/Float/) |
| `y` | [Float](/api-docs/clay-native/Float/) |
| `x0` | [Float](/api-docs/clay-native/Float/) |
| `y0` | [Float](/api-docs/clay-native/Float/) |
| `x1` | [Float](/api-docs/clay-native/Float/) |
| `y1` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="distanceToLine"><code><span class="field-name">distanceToLine</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">x0</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y0</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">x1</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y1</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#distanceToLine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-native/Float/) |
| `y` | [Float](/api-docs/clay-native/Float/) |
| `x0` | [Float](/api-docs/clay-native/Float/) |
| `y0` | [Float](/api-docs/clay-native/Float/) |
| `x1` | [Float](/api-docs/clay-native/Float/) |
| `y1` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

