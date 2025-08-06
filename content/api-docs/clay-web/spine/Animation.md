---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: Animation
target: Clay (Web)
permalink: api-docs/clay-web/spine/Animation/
---

# Animation

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/Animation.hx">View source</a></div>

<div class="type-hierarchy"><strong>spine.Animation</strong> (Class)</div>

Stores a list of timelines to animate a skeleton's pose over time.

## Instance Members

<div class="signature field-var no-description has-plugin" id="name"><div class="plugin-name">spine</div><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="timelines"><div class="plugin-name">spine</div><code><span class="field-name">timelines</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/spine/Timeline/" class="type-link">Timeline</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#timelines"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="timelineIds"><div class="plugin-name">spine</div><code><span class="field-name">timelineIds</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/ObjectSet/" class="type-link">spine.support.utils.ObjectSet</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#timelineIds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="duration"><div class="plugin-name">spine</div><code><span class="field-name">duration</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#duration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getTimelines"><div class="plugin-name">spine</div><code><span class="field-name">getTimelines</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/spine/Timeline/" class="type-link">Timeline</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getTimelines"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If the returned array or the timelines it contains are modified, {@link #setTimelines(Array)} must be called.
| Returns |
|---------|
| [spine.support.utils.Array](/api-docs/clay-web/spine/support/utils/Array/)<[Timeline](/api-docs/clay-web/spine/Timeline/)> |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setTimelines"><div class="plugin-name">spine</div><code><span class="field-name">setTimelines</span><span class="parenthesis">(</span><span class="arg-name">timelines</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/spine/Timeline/" class="type-link">Timeline</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTimelines"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `timelines` | [spine.support.utils.Array](/api-docs/clay-web/spine/support/utils/Array/)<[Timeline](/api-docs/clay-web/spine/Timeline/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="hasTimeline"><div class="plugin-name">spine</div><code><span class="field-name">hasTimeline</span><span class="parenthesis">(</span><span class="arg-name">propertyIds</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/StringArray/" class="type-link">spine.support.utils.StringArray</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasTimeline"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns true if this animation contains a timeline with any of the specified property IDs.

| Name | Type |
|------|------|
| `propertyIds` | [spine.support.utils.StringArray](/api-docs/clay-web/spine/support/utils/StringArray/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getDuration"><div class="plugin-name">spine</div><code><span class="field-name">getDuration</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getDuration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The duration of the animation in seconds, which is usually the highest time of all frames in the timeline. The duration is
used to know when it has completed and when it should loop back to the start.
| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setDuration"><div class="plugin-name">spine</div><code><span class="field-name">setDuration</span><span class="parenthesis">(</span><span class="arg-name">duration</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setDuration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `duration` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="apply"><div class="plugin-name">spine</div><code><span class="field-name">apply</span><span class="parenthesis">(</span><span class="arg-name">skeleton</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/Skeleton/" class="type-link">Skeleton</a><span class="operator">,</span> <span class="arg-name">lastTime</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">loop</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">events</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/spine/Event/" class="type-link">Event</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">alpha</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">blend</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/MixBlend/" class="type-link">MixBlend</a><span class="operator">,</span> <span class="arg-name">direction</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/MixDirection/" class="type-link">MixDirection</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#apply"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Applies the animation's timelines to the specified skeleton.
<p>
See Timeline {@link Timeline#apply(Skeleton, float, float, Array, float, MixBlend, MixDirection)}.
@link #getDuration()} and <code>loop</code> is
true then the animation will repeat, else the last frame will be applied.
@link DrawOrderTimeline} or {@link AttachmentTimeline}.

| Name | Type | Description |
|------|------|-------------|
| `skeleton` | [Skeleton](/api-docs/clay-web/spine/Skeleton/) | The skeleton the animation is being applied to. This provides access to the bones, slots, and other skeleton components the timelines may change.  |
| `lastTime` | [Float](/api-docs/clay-web/Float/) | The last time in seconds this animation was applied. Some timelines trigger only at specific times rather than every frame. Pass -1 the first time an animation is applied to ensure frame 0 is triggered.  |
| `time` | [Float](/api-docs/clay-web/Float/) | The time in seconds the skeleton is being posed for. Most timelines find the frame before and the frame after this time and interpolate between the frame values. If beyond the { |
| `loop` | [Bool](/api-docs/clay-web/Bool/) | If true, the animation repeats after the { |
| `events` | [spine.support.utils.Array](/api-docs/clay-web/spine/support/utils/Array/)<[Event](/api-docs/clay-web/spine/Event/)> | If any events are fired, they are added to this list. Can be null to ignore fired events or if no timelines fire events.  |
| `alpha` | [Float](/api-docs/clay-web/Float/) | 0 applies the current or setup values (depending on <code>blend</code>). 1 applies the timeline values. Between 0 and 1 applies values between the current or setup values and the timeline values. By adjusting <code>alpha</code> over time, an animation can be mixed in or out. <code>alpha</code> can also be useful to apply animations on top of each other (layering).  |
| `blend` | [MixBlend](/api-docs/clay-web/spine/MixBlend/) | Controls how mixing is applied when <code>alpha</code> < 1.  |
| `direction` | [MixDirection](/api-docs/clay-web/spine/MixDirection/) | Indicates whether the timelines are mixing in or out. Used by timelines which perform instant transitions, such as { |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getName"><div class="plugin-name">spine</div><code><span class="field-name">getName</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#getName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The animation's name, which is unique across all animations in the skeleton.
| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="toString"><div class="plugin-name">spine</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">timelines</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/spine/Timeline/" class="type-link">Timeline</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">duration</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |
| `timelines` | [spine.support.utils.Array](/api-docs/clay-web/spine/support/utils/Array/)<[Timeline](/api-docs/clay-web/spine/Timeline/)> |
| `duration` | [Float](/api-docs/clay-web/Float/) |

## Private Members

<div class="signature field-var no-description has-plugin" id="hashCode"><div class="plugin-name">spine</div><code><span class="field-name">hashCode</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#hashCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

