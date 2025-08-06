---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: IkConstraintTimeline
target: Headless
permalink: api-docs/headless/spine/IkConstraintTimeline/
---

# IkConstraintTimeline

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/Animation.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/spine/Timeline/">Timeline</a> → <a href="/api-docs/headless/spine/CurveTimeline/">CurveTimeline</a> → <strong>spine.IkConstraintTimeline</strong> (Class)</div>

Changes an IK constraint's {@link IkConstraint#getMix()}, {@link IkConstraint#getSoftness()},
{@link IkConstraint#getBendDirection()}, {@link IkConstraint#getStretch()}, and {@link IkConstraint#getCompress()}.

## Static Members

<div class="signature field-var no-description has-plugin" id="ENTRIES"><div class="plugin-name">spine</div><code><span class="field-name">ENTRIES</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ENTRIES"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="LINEAR"><div class="plugin-name">spine</div><code><span class="field-name">LINEAR</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#LINEAR"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="STEPPED"><div class="plugin-name">spine</div><code><span class="field-name">STEPPED</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#STEPPED"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="BEZIER"><div class="plugin-name">spine</div><code><span class="field-name">BEZIER</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BEZIER"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="BEZIER_SIZE"><div class="plugin-name">spine</div><code><span class="field-name">BEZIER_SIZE</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BEZIER_SIZE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Instance Members

<div class="signature field-var no-description has-plugin" id="ikConstraintIndex"><div class="plugin-name">spine</div><code><span class="field-name">ikConstraintIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ikConstraintIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getFrameEntries"><div class="plugin-name">spine</div><code><span class="field-name">getFrameEntries</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getFrameEntries"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getIkConstraintIndex"><div class="plugin-name">spine</div><code><span class="field-name">getIkConstraintIndex</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getIkConstraintIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The index of the IK constraint slot in {@link Skeleton#getIkConstraints()} that will be changed when this timeline is
applied.
| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setFrame"><div class="plugin-name">spine</div><code><span class="field-name">setFrame</span><span class="parenthesis">(</span><span class="arg-name">frame</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">mix</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">softness</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">bendDirection</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">compress</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">stretch</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the time, mix, softness, bend direction, compress, and stretch for the specified frame.


| Name | Type | Description |
|------|------|-------------|
| `frame` | [Int](/api-docs/headless/Int/) | Between 0 and <code>frameCount</code>, inclusive.  |
| `time` | [Float](/api-docs/headless/Float/) | The frame time in seconds.  |
| `mix` | [Float](/api-docs/headless/Float/) |  |
| `softness` | [Float](/api-docs/headless/Float/) |  |
| `bendDirection` | [Int](/api-docs/headless/Int/) | 1 or -1. |
| `compress` | [Bool](/api-docs/headless/Bool/) |  |
| `stretch` | [Bool](/api-docs/headless/Bool/) |  |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="apply"><div class="plugin-name">spine</div><code><span class="field-name">apply</span><span class="parenthesis">(</span><span class="arg-name">skeleton</span><span class="operator">:</span> <a href="/api-docs/headless/spine/Skeleton/" class="type-link">Skeleton</a><span class="operator">,</span> <span class="arg-name">lastTime</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">events</span><span class="operator">:</span> <a href="/api-docs/headless/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/spine/Event/" class="type-link">Event</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">alpha</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">blend</span><span class="operator">:</span> <a href="/api-docs/headless/spine/MixBlend/" class="type-link">MixBlend</a><span class="operator">,</span> <span class="arg-name">direction</span><span class="operator">:</span> <a href="/api-docs/headless/spine/MixDirection/" class="type-link">MixDirection</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#apply"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `skeleton` | [Skeleton](/api-docs/headless/spine/Skeleton/) |
| `lastTime` | [Float](/api-docs/headless/Float/) |
| `time` | [Float](/api-docs/headless/Float/) |
| `events` | [spine.support.utils.Array](/api-docs/headless/spine/support/utils/Array/)<[Event](/api-docs/headless/spine/Event/)> |
| `alpha` | [Float](/api-docs/headless/Float/) |
| `blend` | [MixBlend](/api-docs/headless/spine/MixBlend/) |
| `direction` | [MixDirection](/api-docs/headless/spine/MixDirection/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">frameCount</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">bezierCount</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">ikConstraintIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `frameCount` | [Int](/api-docs/headless/Int/) |
| `bezierCount` | [Int](/api-docs/headless/Int/) |
| `ikConstraintIndex` | [Int](/api-docs/headless/Int/) |

## Private Members

<div class="signature field-var no-description has-plugin" id="MIX"><div class="plugin-name">spine</div><code><span class="field-name">MIX</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MIX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="SOFTNESS"><div class="plugin-name">spine</div><code><span class="field-name">SOFTNESS</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SOFTNESS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="BEND_DIRECTION"><div class="plugin-name">spine</div><code><span class="field-name">BEND_DIRECTION</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BEND_DIRECTION"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="COMPRESS"><div class="plugin-name">spine</div><code><span class="field-name">COMPRESS</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#COMPRESS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="STRETCH"><div class="plugin-name">spine</div><code><span class="field-name">STRETCH</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#STRETCH"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

