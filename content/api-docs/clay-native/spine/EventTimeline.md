---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: EventTimeline
target: Clay (Native)
permalink: api-docs/clay-native/spine/EventTimeline/
---

# EventTimeline

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/Animation.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/spine/Timeline/">Timeline</a> → <strong>spine.EventTimeline</strong> (Class)</div>

Fires an {@link Event} when specific animation times are reached.

## Instance Members

<div class="signature field-method no-description has-plugin" id="getFrameCount"><div class="plugin-name">spine</div><code><span class="field-name">getFrameCount</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getFrameCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getEvents"><div class="plugin-name">spine</div><code><span class="field-name">getEvents</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/spine/Event/" class="type-link">Event</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getEvents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The event for each frame.
| Returns |
|---------|
| [spine.support.utils.Array](/api-docs/clay-native/spine/support/utils/Array/)<[Event](/api-docs/clay-native/spine/Event/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setFrame"><div class="plugin-name">spine</div><code><span class="field-name">setFrame</span><span class="parenthesis">(</span><span class="arg-name">frame</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">event</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/Event/" class="type-link">Event</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the time and event for the specified frame.


| Name | Type | Description |
|------|------|-------------|
| `frame` | [Int](/api-docs/clay-native/Int/) | Between 0 and <code>frameCount</code>, inclusive. |
| `event` | [Event](/api-docs/clay-native/spine/Event/) |  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="apply"><div class="plugin-name">spine</div><code><span class="field-name">apply</span><span class="parenthesis">(</span><span class="arg-name">skeleton</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/Skeleton/" class="type-link">Skeleton</a><span class="operator">,</span> <span class="arg-name">lastTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">firedEvents</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/spine/Event/" class="type-link">Event</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">alpha</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">blend</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/MixBlend/" class="type-link">MixBlend</a><span class="operator">,</span> <span class="arg-name">direction</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/MixDirection/" class="type-link">MixDirection</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#apply"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fires events for frames > <code>lastTime</code> and <= <code>time</code>.

| Name | Type |
|------|------|
| `skeleton` | [Skeleton](/api-docs/clay-native/spine/Skeleton/) |
| `lastTime` | [Float](/api-docs/clay-native/Float/) |
| `time` | [Float](/api-docs/clay-native/Float/) |
| `firedEvents` | [spine.support.utils.Array](/api-docs/clay-native/spine/support/utils/Array/)<[Event](/api-docs/clay-native/spine/Event/)> |
| `alpha` | [Float](/api-docs/clay-native/Float/) |
| `blend` | [MixBlend](/api-docs/clay-native/spine/MixBlend/) |
| `direction` | [MixDirection](/api-docs/clay-native/spine/MixDirection/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">frameCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `frameCount` | [Int](/api-docs/clay-native/Int/) |

## Private Members

<div class="signature field-var no-description has-plugin" id="propertyIds"><div class="plugin-name">spine</div><code><span class="field-name">propertyIds</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/StringArray/" class="type-link">spine.support.utils.StringArray</a></code><a class="header-anchor" href="#propertyIds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="events"><div class="plugin-name">spine</div><code><span class="field-name">events</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/spine/Event/" class="type-link">Event</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#events"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

