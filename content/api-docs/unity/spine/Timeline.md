---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: Timeline
target: Unity
permalink: api-docs/unity/spine/Timeline/
---

# Timeline

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/Animation.hx">View source</a></div>

<div class="type-hierarchy"><strong>spine.Timeline</strong> (Class) → <a href="/api-docs/unity/spine/AttachmentTimeline/">AttachmentTimeline</a>, <a href="/api-docs/unity/spine/CurveTimeline/">CurveTimeline</a>, <a href="/api-docs/unity/spine/DrawOrderTimeline/">DrawOrderTimeline</a>, <a href="/api-docs/unity/spine/EventTimeline/">EventTimeline</a></div>

The base class for all timelines.

## Static Members

<div class="signature field-method has-description has-plugin" id="search"><div class="plugin-name">spine</div><code><span class="field-name">search</span><span class="parenthesis">(</span><span class="arg-name">frames</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a><span class="operator">,</span> <span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#search"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Linear search using a stride of 1.


| Name | Type | Description |
|------|------|-------------|
| `frames` | [spine.support.utils.FloatArray](/api-docs/unity/spine/support/utils/FloatArray/) |  |
| `time` | [Float](/api-docs/unity/Float/) | Must be >= the first value in <code>frames</code>.  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/unity/Int/) | The index of the first value <= <code>time</code>. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="searchWithStep"><div class="plugin-name">spine</div><code><span class="field-name">searchWithStep</span><span class="parenthesis">(</span><span class="arg-name">frames</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a><span class="operator">,</span> <span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">step</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#searchWithStep"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Linear search using the specified stride.


| Name | Type | Description |
|------|------|-------------|
| `frames` | [spine.support.utils.FloatArray](/api-docs/unity/spine/support/utils/FloatArray/) |  |
| `time` | [Float](/api-docs/unity/Float/) | Must be >= the first value in <code>frames</code>.  |
| `step` | [Int](/api-docs/unity/Int/) |  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/unity/Int/) | The index of the first value <= <code>time</code>. |

## Instance Members

<div class="signature field-var no-description has-plugin" id="frames"><div class="plugin-name">spine</div><code><span class="field-name">frames</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a></code><a class="header-anchor" href="#frames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getPropertyIds"><div class="plugin-name">spine</div><code><span class="field-name">getPropertyIds</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/StringArray/" class="type-link">spine.support.utils.StringArray</a></code><a class="header-anchor" href="#getPropertyIds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Uniquely encodes both the type of this timeline and the skeleton properties that it affects.
| Returns |
|---------|
| [spine.support.utils.StringArray](/api-docs/unity/spine/support/utils/StringArray/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getFrames"><div class="plugin-name">spine</div><code><span class="field-name">getFrames</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a></code><a class="header-anchor" href="#getFrames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The time in seconds and any other values for each frame.
| Returns |
|---------|
| [spine.support.utils.FloatArray](/api-docs/unity/spine/support/utils/FloatArray/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getFrameEntries"><div class="plugin-name">spine</div><code><span class="field-name">getFrameEntries</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getFrameEntries"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The number of entries stored per frame.
| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getFrameCount"><div class="plugin-name">spine</div><code><span class="field-name">getFrameCount</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getFrameCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The number of frames for this timeline.
| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getDuration"><div class="plugin-name">spine</div><code><span class="field-name">getDuration</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getDuration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="apply"><div class="plugin-name">spine</div><code><span class="field-name">apply</span><span class="parenthesis">(</span><span class="arg-name">skeleton</span><span class="operator">:</span> <a href="/api-docs/unity/spine/Skeleton/" class="type-link">Skeleton</a><span class="operator">,</span> <span class="arg-name">lastTime</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">events</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/spine/Event/" class="type-link">Event</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">alpha</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">blend</span><span class="operator">:</span> <a href="/api-docs/unity/spine/MixBlend/" class="type-link">MixBlend</a><span class="operator">,</span> <span class="arg-name">direction</span><span class="operator">:</span> <a href="/api-docs/unity/spine/MixDirection/" class="type-link">MixDirection</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#apply"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Applies this timeline to the skeleton.
@link DrawOrderTimeline} or {@link AttachmentTimeline}, and others such as {@link ScaleTimeline}.

| Name | Type | Description |
|------|------|-------------|
| `skeleton` | [Skeleton](/api-docs/unity/spine/Skeleton/) | The skeleton to which the timeline is being applied. This provides access to the bones, slots, and other skeleton components that the timeline may change.  |
| `lastTime` | [Float](/api-docs/unity/Float/) | The last time in seconds this timeline was applied. Timelines such as { |
| `time` | [Float](/api-docs/unity/Float/) | The time in seconds that the skeleton is being posed for. Most timelines find the frame before and the frame after this time and interpolate between the frame values. If beyond the last frame, the last frame will be applied.  |
| `events` | [spine.support.utils.Array](/api-docs/unity/spine/support/utils/Array/)<[Event](/api-docs/unity/spine/Event/)> | If any events are fired, they are added to this list. Can be null to ignore fired events or if the timeline does not fire events.  |
| `alpha` | [Float](/api-docs/unity/Float/) | 0 applies the current or setup value (depending on <code>blend</code>). 1 applies the timeline value. Between 0 and 1 applies a value between the current or setup value and the timeline value. By adjusting <code>alpha</code> over time, an animation can be mixed in or out. <code>alpha</code> can also be useful to apply animations on top of each other (layering).  |
| `blend` | [MixBlend](/api-docs/unity/spine/MixBlend/) | Controls how mixing is applied when <code>alpha</code> < 1.  |
| `direction` | [MixDirection](/api-docs/unity/spine/MixDirection/) | Indicates whether the timeline is mixing in or out. Used by timelines which perform instant transitions, such as { |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">frameCount</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">propertyIds</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/StringArray/" class="type-link">spine.support.utils.StringArray</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Description |
|------|------|-------------|
| `frameCount` | [Int](/api-docs/unity/Int/) |  |
| `propertyIds` | [spine.support.utils.StringArray](/api-docs/unity/spine/support/utils/StringArray/) | Unique identifiers for the properties the timeline modifies. |

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

