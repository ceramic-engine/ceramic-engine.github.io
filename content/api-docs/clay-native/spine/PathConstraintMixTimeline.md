---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: PathConstraintMixTimeline
target: Clay (Native)
permalink: api-docs/clay-native/spine/PathConstraintMixTimeline/
---

# PathConstraintMixTimeline

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/Animation.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/spine/Timeline/">Timeline</a> → <a href="/api-docs/clay-native/spine/CurveTimeline/">CurveTimeline</a> → <strong>spine.PathConstraintMixTimeline</strong> (Class)</div>

Changes a transform constraint's {@link PathConstraint#getMixRotate()}, {@link PathConstraint#getMixX()}, and
{@link PathConstraint#getMixY()}.

## Static Members

<div class="signature field-var no-description has-plugin" id="ENTRIES"><div class="plugin-name">spine</div><code><span class="field-name">ENTRIES</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ENTRIES"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="LINEAR"><div class="plugin-name">spine</div><code><span class="field-name">LINEAR</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#LINEAR"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="STEPPED"><div class="plugin-name">spine</div><code><span class="field-name">STEPPED</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#STEPPED"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="BEZIER"><div class="plugin-name">spine</div><code><span class="field-name">BEZIER</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BEZIER"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="BEZIER_SIZE"><div class="plugin-name">spine</div><code><span class="field-name">BEZIER_SIZE</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BEZIER_SIZE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Instance Members

<div class="signature field-var no-description has-plugin" id="pathConstraintIndex"><div class="plugin-name">spine</div><code><span class="field-name">pathConstraintIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#pathConstraintIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getFrameEntries"><div class="plugin-name">spine</div><code><span class="field-name">getFrameEntries</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getFrameEntries"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getPathConstraintIndex"><div class="plugin-name">spine</div><code><span class="field-name">getPathConstraintIndex</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getPathConstraintIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The index of the path constraint slot in {@link Skeleton#getPathConstraints()} that will be changed when this timeline
is applied.
| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setFrame"><div class="plugin-name">spine</div><code><span class="field-name">setFrame</span><span class="parenthesis">(</span><span class="arg-name">frame</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">mixRotate</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">mixX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">mixY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the time and color for the specified frame.


| Name | Type | Description |
|------|------|-------------|
| `frame` | [Int](/api-docs/clay-native/Int/) | Between 0 and <code>frameCount</code>, inclusive.  |
| `time` | [Float](/api-docs/clay-native/Float/) | The frame time in seconds. |
| `mixRotate` | [Float](/api-docs/clay-native/Float/) |  |
| `mixX` | [Float](/api-docs/clay-native/Float/) |  |
| `mixY` | [Float](/api-docs/clay-native/Float/) |  |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="apply"><div class="plugin-name">spine</div><code><span class="field-name">apply</span><span class="parenthesis">(</span><span class="arg-name">skeleton</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/Skeleton/" class="type-link">Skeleton</a><span class="operator">,</span> <span class="arg-name">lastTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">events</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/spine/Event/" class="type-link">Event</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">alpha</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">blend</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/MixBlend/" class="type-link">MixBlend</a><span class="operator">,</span> <span class="arg-name">direction</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/MixDirection/" class="type-link">MixDirection</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#apply"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `skeleton` | [Skeleton](/api-docs/clay-native/spine/Skeleton/) |
| `lastTime` | [Float](/api-docs/clay-native/Float/) |
| `time` | [Float](/api-docs/clay-native/Float/) |
| `events` | [spine.support.utils.Array](/api-docs/clay-native/spine/support/utils/Array/)<[Event](/api-docs/clay-native/spine/Event/)> |
| `alpha` | [Float](/api-docs/clay-native/Float/) |
| `blend` | [MixBlend](/api-docs/clay-native/spine/MixBlend/) |
| `direction` | [MixDirection](/api-docs/clay-native/spine/MixDirection/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">frameCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">bezierCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pathConstraintIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `frameCount` | [Int](/api-docs/clay-native/Int/) |
| `bezierCount` | [Int](/api-docs/clay-native/Int/) |
| `pathConstraintIndex` | [Int](/api-docs/clay-native/Int/) |

## Private Members

<div class="signature field-var no-description has-plugin" id="ROTATE"><div class="plugin-name">spine</div><code><span class="field-name">ROTATE</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ROTATE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="X"><div class="plugin-name">spine</div><code><span class="field-name">X</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#X"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="Y"><div class="plugin-name">spine</div><code><span class="field-name">Y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

