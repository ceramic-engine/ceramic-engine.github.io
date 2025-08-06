---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: SkeletonClipping
target: Clay (Web)
permalink: api-docs/clay-web/spine/utils/SkeletonClipping/
---

# SkeletonClipping

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/utils/SkeletonClipping.hx">View source</a></div>

<div class="type-hierarchy"><strong>spine.utils.SkeletonClipping</strong> (Class)</div>

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

## Static Members

<div class="signature field-method no-description has-plugin" id="makeClockwise"><div class="plugin-name">spine</div><code><span class="field-name">makeClockwise</span><span class="parenthesis">(</span><span class="arg-name">polygon</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#makeClockwise"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `polygon` | [spine.support.utils.FloatArray](/api-docs/clay-web/spine/support/utils/FloatArray/) |

## Instance Members

<div class="signature field-method no-description has-plugin" id="clipStart"><div class="plugin-name">spine</div><code><span class="field-name">clipStart</span><span class="parenthesis">(</span><span class="arg-name">slot</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/Slot/" class="type-link">spine.Slot</a><span class="operator">,</span> <span class="arg-name">clip</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/attachments/ClippingAttachment/" class="type-link">spine.attachments.ClippingAttachment</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clipStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `slot` | [spine.Slot](/api-docs/clay-web/spine/Slot/) |
| `clip` | [spine.attachments.ClippingAttachment](/api-docs/clay-web/spine/attachments/ClippingAttachment/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="clipEndWithSlot"><div class="plugin-name">spine</div><code><span class="field-name">clipEndWithSlot</span><span class="parenthesis">(</span><span class="arg-name">slot</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/Slot/" class="type-link">spine.Slot</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clipEndWithSlot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `slot` | [spine.Slot](/api-docs/clay-web/spine/Slot/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="clipEnd"><div class="plugin-name">spine</div><code><span class="field-name">clipEnd</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clipEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="isClipping"><div class="plugin-name">spine</div><code><span class="field-name">isClipping</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isClipping"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="clipTriangles"><div class="plugin-name">spine</div><code><span class="field-name">clipTriangles</span><span class="parenthesis">(</span><span class="arg-name">vertices</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a><span class="operator">,</span> <span class="arg-name">verticesLength</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">triangles</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/ShortArray/" class="type-link">spine.support.utils.ShortArray</a><span class="operator">,</span> <span class="arg-name">trianglesLength</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">uvs</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a><span class="operator">,</span> <span class="arg-name">light</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">dark</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">twoColor</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clipTriangles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `vertices` | [spine.support.utils.FloatArray](/api-docs/clay-web/spine/support/utils/FloatArray/) |
| `verticesLength` | [Int](/api-docs/clay-web/Int/) |
| `triangles` | [spine.support.utils.ShortArray](/api-docs/clay-web/spine/support/utils/ShortArray/) |
| `trianglesLength` | [Int](/api-docs/clay-web/Int/) |
| `uvs` | [spine.support.utils.FloatArray](/api-docs/clay-web/spine/support/utils/FloatArray/) |
| `light` | [Float](/api-docs/clay-web/Float/) |
| `dark` | [Float](/api-docs/clay-web/Float/) |
| `twoColor` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="clip"><div class="plugin-name">spine</div><code><span class="field-name">clip</span><span class="parenthesis">(</span><span class="arg-name">x1</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y1</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">x2</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y2</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">x3</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y3</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">clippingArea</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a><span class="operator">,</span> <span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#clip"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clips the input triangle against the convex, clockwise clipping area. If the triangle lies entirely within the clipping
area, false is returned. The clipping area must duplicate the first vertex at the end of the vertices list.

| Name | Type |
|------|------|
| `x1` | [Float](/api-docs/clay-web/Float/) |
| `y1` | [Float](/api-docs/clay-web/Float/) |
| `x2` | [Float](/api-docs/clay-web/Float/) |
| `y2` | [Float](/api-docs/clay-web/Float/) |
| `x3` | [Float](/api-docs/clay-web/Float/) |
| `y3` | [Float](/api-docs/clay-web/Float/) |
| `clippingArea` | [spine.support.utils.FloatArray](/api-docs/clay-web/spine/support/utils/FloatArray/) |
| `output` | [spine.support.utils.FloatArray](/api-docs/clay-web/spine/support/utils/FloatArray/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getClippedVertices"><div class="plugin-name">spine</div><code><span class="field-name">getClippedVertices</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a></code><a class="header-anchor" href="#getClippedVertices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [spine.support.utils.FloatArray](/api-docs/clay-web/spine/support/utils/FloatArray/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getClippedTriangles"><div class="plugin-name">spine</div><code><span class="field-name">getClippedTriangles</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/ShortArray/" class="type-link">spine.support.utils.ShortArray</a></code><a class="header-anchor" href="#getClippedTriangles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [spine.support.utils.ShortArray](/api-docs/clay-web/spine/support/utils/ShortArray/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description has-plugin" id="triangulator"><div class="plugin-name">spine</div><code><span class="field-name">triangulator</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/utils/Triangulator/" class="type-link">Triangulator</a></code><a class="header-anchor" href="#triangulator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="clippingPolygon"><div class="plugin-name">spine</div><code><span class="field-name">clippingPolygon</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a></code><a class="header-anchor" href="#clippingPolygon"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="clipOutput"><div class="plugin-name">spine</div><code><span class="field-name">clipOutput</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a></code><a class="header-anchor" href="#clipOutput"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="clippedVertices"><div class="plugin-name">spine</div><code><span class="field-name">clippedVertices</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a></code><a class="header-anchor" href="#clippedVertices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="clippedTriangles"><div class="plugin-name">spine</div><code><span class="field-name">clippedTriangles</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/ShortArray/" class="type-link">spine.support.utils.ShortArray</a></code><a class="header-anchor" href="#clippedTriangles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="scratch"><div class="plugin-name">spine</div><code><span class="field-name">scratch</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a></code><a class="header-anchor" href="#scratch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="clipAttachment"><div class="plugin-name">spine</div><code><span class="field-name">clipAttachment</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/attachments/ClippingAttachment/" class="type-link">spine.attachments.ClippingAttachment</a></code><a class="header-anchor" href="#clipAttachment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="clippingPolygons"><div class="plugin-name">spine</div><code><span class="field-name">clippingPolygons</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/FloatArray2D/" class="type-link">spine.support.utils.FloatArray2D</a></code><a class="header-anchor" href="#clippingPolygons"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

