---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: Triangulator
target: Unity
permalink: api-docs/unity/spine/utils/Triangulator/
---

# Triangulator

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/utils/Triangulator.hx">View source</a></div>

<div class="type-hierarchy"><strong>spine.utils.Triangulator</strong> (Class)</div>

Spine Runtimes License Agreement
Last updated January 1, 2020. Replaces all prior versions.

Copyright (c) 2013-2020, Esoteric Software LLC

Integration of the Spine Runtimes into software or otherwise creating
derivative works of the Spine Runtimes is permitted under the terms and
conditions of Section 2 of the Spine Editor License Agreement:
http://esotericsoftware.com/spine-editor-license

Otherwise, it is permitted to integrate the Spine Runtimes into software
or otherwise create derivative works of the Spine Runtimes (collectively,
"Products"), provided that each user of the Products must obtain their own
Spine Editor license and redistribution of the Products in any form must
include this license and copyright notice.

THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
THE SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

## Instance Members

<div class="signature field-method no-description has-plugin" id="triangulate"><div class="plugin-name">spine</div><code><span class="field-name">triangulate</span><span class="parenthesis">(</span><span class="arg-name">verticesArray</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/ShortArray/" class="type-link">spine.support.utils.ShortArray</a></code><a class="header-anchor" href="#triangulate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `verticesArray` | [spine.support.utils.FloatArray](/api-docs/unity/spine/support/utils/FloatArray/) |

| Returns |
|---------|
| [spine.support.utils.ShortArray](/api-docs/unity/spine/support/utils/ShortArray/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="decompose"><div class="plugin-name">spine</div><code><span class="field-name">decompose</span><span class="parenthesis">(</span><span class="arg-name">verticesArray</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a><span class="operator">,</span> <span class="arg-name">triangles</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/ShortArray/" class="type-link">spine.support.utils.ShortArray</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/FloatArray2D/" class="type-link">spine.support.utils.FloatArray2D</a></code><a class="header-anchor" href="#decompose"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `verticesArray` | [spine.support.utils.FloatArray](/api-docs/unity/spine/support/utils/FloatArray/) |
| `triangles` | [spine.support.utils.ShortArray](/api-docs/unity/spine/support/utils/ShortArray/) |

| Returns |
|---------|
| [spine.support.utils.FloatArray2D](/api-docs/unity/spine/support/utils/FloatArray2D/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description has-plugin" id="convexPolygons"><div class="plugin-name">spine</div><code><span class="field-name">convexPolygons</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/FloatArray2D/" class="type-link">spine.support.utils.FloatArray2D</a></code><a class="header-anchor" href="#convexPolygons"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="convexPolygonsIndices"><div class="plugin-name">spine</div><code><span class="field-name">convexPolygonsIndices</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/ShortArray2D/" class="type-link">spine.support.utils.ShortArray2D</a></code><a class="header-anchor" href="#convexPolygonsIndices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="indicesArray"><div class="plugin-name">spine</div><code><span class="field-name">indicesArray</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/ShortArray/" class="type-link">spine.support.utils.ShortArray</a></code><a class="header-anchor" href="#indicesArray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="isConcaveArray"><div class="plugin-name">spine</div><code><span class="field-name">isConcaveArray</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/BooleanArray/" class="type-link">spine.support.utils.BooleanArray</a></code><a class="header-anchor" href="#isConcaveArray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="triangles"><div class="plugin-name">spine</div><code><span class="field-name">triangles</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/ShortArray/" class="type-link">spine.support.utils.ShortArray</a></code><a class="header-anchor" href="#triangles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="polygonPool"><div class="plugin-name">spine</div><code><span class="field-name">polygonPool</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/Pool/" class="type-link">spine.support.utils.Pool</a><span class="operator">&lt;</span><a href="/api-docs/unity/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#polygonPool"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="polygonIndicesPool"><div class="plugin-name">spine</div><code><span class="field-name">polygonIndicesPool</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/Pool/" class="type-link">spine.support.utils.Pool</a><span class="operator">&lt;</span><a href="/api-docs/unity/spine/support/utils/ShortArray/" class="type-link">spine.support.utils.ShortArray</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#polygonIndicesPool"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="isGeometryConcave"><div class="plugin-name">spine</div><code><span class="field-name">isGeometryConcave</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vertexCount</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vertices</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a><span class="operator">,</span> <span class="arg-name">indices</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/ShortArray/" class="type-link">spine.support.utils.ShortArray</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isGeometryConcave"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `index` | [Int](/api-docs/unity/Int/) |
| `vertexCount` | [Int](/api-docs/unity/Int/) |
| `vertices` | [spine.support.utils.FloatArray](/api-docs/unity/spine/support/utils/FloatArray/) |
| `indices` | [spine.support.utils.ShortArray](/api-docs/unity/spine/support/utils/ShortArray/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="positiveArea"><div class="plugin-name">spine</div><code><span class="field-name">positiveArea</span><span class="parenthesis">(</span><span class="arg-name">p1x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">p1y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">p2x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">p2y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">p3x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">p3y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#positiveArea"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `p1x` | [Float](/api-docs/unity/Float/) |
| `p1y` | [Float](/api-docs/unity/Float/) |
| `p2x` | [Float](/api-docs/unity/Float/) |
| `p2y` | [Float](/api-docs/unity/Float/) |
| `p3x` | [Float](/api-docs/unity/Float/) |
| `p3y` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="computeWinding"><div class="plugin-name">spine</div><code><span class="field-name">computeWinding</span><span class="parenthesis">(</span><span class="arg-name">p1x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">p1y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">p2x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">p2y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">p3x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">p3y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#computeWinding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `p1x` | [Float](/api-docs/unity/Float/) |
| `p1y` | [Float](/api-docs/unity/Float/) |
| `p2x` | [Float](/api-docs/unity/Float/) |
| `p2y` | [Float](/api-docs/unity/Float/) |
| `p3x` | [Float](/api-docs/unity/Float/) |
| `p3y` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

