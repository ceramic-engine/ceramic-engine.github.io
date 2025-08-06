---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: DeformTimeline
target: Unity
permalink: api-docs/unity/spine/DeformTimeline/
---

# DeformTimeline

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/Animation.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/spine/Timeline/">Timeline</a> → <a href="/api-docs/unity/spine/CurveTimeline/">CurveTimeline</a> → <strong>spine.DeformTimeline</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/spine/SlotTimeline/">SlotTimeline</a></div>

Changes a slot's {@link Slot#getDeform()} to deform a {@link VertexAttachment}.

## Static Members

<div class="signature field-var no-description has-plugin" id="LINEAR"><div class="plugin-name">spine</div><code><span class="field-name">LINEAR</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#LINEAR"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="STEPPED"><div class="plugin-name">spine</div><code><span class="field-name">STEPPED</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#STEPPED"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="BEZIER"><div class="plugin-name">spine</div><code><span class="field-name">BEZIER</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BEZIER"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="BEZIER_SIZE"><div class="plugin-name">spine</div><code><span class="field-name">BEZIER_SIZE</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BEZIER_SIZE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Instance Members

<div class="signature field-var no-description has-plugin" id="slotIndex"><div class="plugin-name">spine</div><code><span class="field-name">slotIndex</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#slotIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="attachment"><div class="plugin-name">spine</div><code><span class="field-name">attachment</span><span class="operator">:</span> <a href="/api-docs/unity/spine/attachments/VertexAttachment/" class="type-link">spine.attachments.VertexAttachment</a></code><a class="header-anchor" href="#attachment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getFrameCount"><div class="plugin-name">spine</div><code><span class="field-name">getFrameCount</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getFrameCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getSlotIndex"><div class="plugin-name">spine</div><code><span class="field-name">getSlotIndex</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getSlotIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getAttachment"><div class="plugin-name">spine</div><code><span class="field-name">getAttachment</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/spine/attachments/VertexAttachment/" class="type-link">spine.attachments.VertexAttachment</a></code><a class="header-anchor" href="#getAttachment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The attachment that will be deformed.
<p>
See {@link VertexAttachment#getDeformAttachment()}.
| Returns |
|---------|
| [spine.attachments.VertexAttachment](/api-docs/unity/spine/attachments/VertexAttachment/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getVertices"><div class="plugin-name">spine</div><code><span class="field-name">getVertices</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/FloatArray2D/" class="type-link">spine.support.utils.FloatArray2D</a></code><a class="header-anchor" href="#getVertices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The vertices for each frame.
| Returns |
|---------|
| [spine.support.utils.FloatArray2D](/api-docs/unity/spine/support/utils/FloatArray2D/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setFrame"><div class="plugin-name">spine</div><code><span class="field-name">setFrame</span><span class="parenthesis">(</span><span class="arg-name">frame</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">vertices</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the time and vertices for the specified frame.


| Name | Type | Description |
|------|------|-------------|
| `frame` | [Int](/api-docs/unity/Int/) | Between 0 and <code>frameCount</code>, inclusive.  |
| `time` | [Float](/api-docs/unity/Float/) | The frame time in seconds.  |
| `vertices` | [spine.support.utils.FloatArray](/api-docs/unity/spine/support/utils/FloatArray/) | Vertex positions for an unweighted VertexAttachment, or deform offsets if it has weights. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setBezier"><div class="plugin-name">spine</div><code><span class="field-name">setBezier</span><span class="parenthesis">(</span><span class="arg-name">bezier</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">frame</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">time1</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">value1</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">cx1</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">cy1</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">cx2</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">cy2</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">time2</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">value2</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setBezier"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Description |
|------|------|-------------|
| `bezier` | [Int](/api-docs/unity/Int/) |  |
| `frame` | [Int](/api-docs/unity/Int/) |  |
| `value` | [Int](/api-docs/unity/Int/) |  |
| `time1` | [Float](/api-docs/unity/Float/) |  |
| `value1` | [Float](/api-docs/unity/Float/) | Ignored (0 is used for a deform timeline).  |
| `cx1` | [Float](/api-docs/unity/Float/) |  |
| `cy1` | [Float](/api-docs/unity/Float/) |  |
| `cx2` | [Float](/api-docs/unity/Float/) |  |
| `cy2` | [Float](/api-docs/unity/Float/) |  |
| `time2` | [Float](/api-docs/unity/Float/) |  |
| `value2` | [Float](/api-docs/unity/Float/) | Ignored (1 is used for a deform timeline). |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="apply"><div class="plugin-name">spine</div><code><span class="field-name">apply</span><span class="parenthesis">(</span><span class="arg-name">skeleton</span><span class="operator">:</span> <a href="/api-docs/unity/spine/Skeleton/" class="type-link">Skeleton</a><span class="operator">,</span> <span class="arg-name">lastTime</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">events</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/spine/Event/" class="type-link">Event</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">alpha</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">blend</span><span class="operator">:</span> <a href="/api-docs/unity/spine/MixBlend/" class="type-link">MixBlend</a><span class="operator">,</span> <span class="arg-name">direction</span><span class="operator">:</span> <a href="/api-docs/unity/spine/MixDirection/" class="type-link">MixDirection</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#apply"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `skeleton` | [Skeleton](/api-docs/unity/spine/Skeleton/) |
| `lastTime` | [Float](/api-docs/unity/Float/) |
| `time` | [Float](/api-docs/unity/Float/) |
| `events` | [spine.support.utils.Array](/api-docs/unity/spine/support/utils/Array/)<[Event](/api-docs/unity/spine/Event/)> |
| `alpha` | [Float](/api-docs/unity/Float/) |
| `blend` | [MixBlend](/api-docs/unity/spine/MixBlend/) |
| `direction` | [MixDirection](/api-docs/unity/spine/MixDirection/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">frameCount</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">bezierCount</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">slotIndex</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">attachment</span><span class="operator">:</span> <a href="/api-docs/unity/spine/attachments/VertexAttachment/" class="type-link">spine.attachments.VertexAttachment</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `frameCount` | [Int](/api-docs/unity/Int/) |
| `bezierCount` | [Int](/api-docs/unity/Int/) |
| `slotIndex` | [Int](/api-docs/unity/Int/) |
| `attachment` | [spine.attachments.VertexAttachment](/api-docs/unity/spine/attachments/VertexAttachment/) |

## Private Members

<div class="signature field-var no-description has-plugin" id="vertices"><div class="plugin-name">spine</div><code><span class="field-name">vertices</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/FloatArray2D/" class="type-link">spine.support.utils.FloatArray2D</a></code><a class="header-anchor" href="#vertices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getCurvePercent"><div class="plugin-name">spine</div><code><span class="field-name">getCurvePercent</span><span class="parenthesis">(</span><span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">frame</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getCurvePercent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the interpolated percentage for the specified time.


| Name | Type | Description |
|------|------|-------------|
| `time` | [Float](/api-docs/unity/Float/) |  |
| `frame` | [Int](/api-docs/unity/Int/) | The frame before <code>time</code>. |

| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

