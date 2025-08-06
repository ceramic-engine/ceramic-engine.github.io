---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: TransformConstraintTimeline
target: Unity
permalink: api-docs/unity/spine/TransformConstraintTimeline/
---

# TransformConstraintTimeline

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/Animation.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/spine/Timeline/">Timeline</a> → <a href="/api-docs/unity/spine/CurveTimeline/">CurveTimeline</a> → <strong>spine.TransformConstraintTimeline</strong> (Class)</div>

Changes a transform constraint's {@link TransformConstraint#getMixRotate()}, {@link TransformConstraint#getMixX()},
{@link TransformConstraint#getMixY()}, {@link TransformConstraint#getMixScaleX()},
{@link TransformConstraint#getMixScaleY()}, and {@link TransformConstraint#getMixShearY()}.

## Static Members

<div class="signature field-var no-description has-plugin" id="ENTRIES"><div class="plugin-name">spine</div><code><span class="field-name">ENTRIES</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ENTRIES"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="LINEAR"><div class="plugin-name">spine</div><code><span class="field-name">LINEAR</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#LINEAR"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="STEPPED"><div class="plugin-name">spine</div><code><span class="field-name">STEPPED</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#STEPPED"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="BEZIER"><div class="plugin-name">spine</div><code><span class="field-name">BEZIER</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BEZIER"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="BEZIER_SIZE"><div class="plugin-name">spine</div><code><span class="field-name">BEZIER_SIZE</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BEZIER_SIZE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Instance Members

<div class="signature field-var no-description has-plugin" id="transformConstraintIndex"><div class="plugin-name">spine</div><code><span class="field-name">transformConstraintIndex</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#transformConstraintIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getFrameEntries"><div class="plugin-name">spine</div><code><span class="field-name">getFrameEntries</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getFrameEntries"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getTransformConstraintIndex"><div class="plugin-name">spine</div><code><span class="field-name">getTransformConstraintIndex</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getTransformConstraintIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The index of the transform constraint slot in {@link Skeleton#getTransformConstraints()} that will be changed when this
timeline is applied.
| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setFrame"><div class="plugin-name">spine</div><code><span class="field-name">setFrame</span><span class="parenthesis">(</span><span class="arg-name">frame</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">mixRotate</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">mixX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">mixY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">mixScaleX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">mixScaleY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">mixShearY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the time, rotate mix, translate mix, scale mix, and shear mix for the specified frame.


| Name | Type | Description |
|------|------|-------------|
| `frame` | [Int](/api-docs/unity/Int/) | Between 0 and <code>frameCount</code>, inclusive.  |
| `time` | [Float](/api-docs/unity/Float/) | The frame time in seconds. |
| `mixRotate` | [Float](/api-docs/unity/Float/) |  |
| `mixX` | [Float](/api-docs/unity/Float/) |  |
| `mixY` | [Float](/api-docs/unity/Float/) |  |
| `mixScaleX` | [Float](/api-docs/unity/Float/) |  |
| `mixScaleY` | [Float](/api-docs/unity/Float/) |  |
| `mixShearY` | [Float](/api-docs/unity/Float/) |  |

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

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">frameCount</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">bezierCount</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">transformConstraintIndex</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `frameCount` | [Int](/api-docs/unity/Int/) |
| `bezierCount` | [Int](/api-docs/unity/Int/) |
| `transformConstraintIndex` | [Int](/api-docs/unity/Int/) |

## Private Members

<div class="signature field-var no-description has-plugin" id="ROTATE"><div class="plugin-name">spine</div><code><span class="field-name">ROTATE</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ROTATE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="X"><div class="plugin-name">spine</div><code><span class="field-name">X</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#X"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="Y"><div class="plugin-name">spine</div><code><span class="field-name">Y</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="SCALEX"><div class="plugin-name">spine</div><code><span class="field-name">SCALEX</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SCALEX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="SCALEY"><div class="plugin-name">spine</div><code><span class="field-name">SCALEY</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SCALEY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="SHEARY"><div class="plugin-name">spine</div><code><span class="field-name">SHEARY</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SHEARY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

