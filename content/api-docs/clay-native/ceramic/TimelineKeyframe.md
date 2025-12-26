---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: TimelineKeyframe
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/TimelineKeyframe/
---

# TimelineKeyframe

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/TimelineKeyframe.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.TimelineKeyframe</strong> (Class) → <a href="/api-docs/clay-native/ceramic/TimelineBoolKeyframe/">TimelineBoolKeyframe</a>, <a href="/api-docs/clay-native/ceramic/TimelineColorKeyframe/">TimelineColorKeyframe</a>, <a href="/api-docs/clay-native/ceramic/TimelineFloatArrayKeyframe/">TimelineFloatArrayKeyframe</a>, <a href="/api-docs/clay-native/ceramic/TimelineFloatKeyframe/">TimelineFloatKeyframe</a></div>

Represents a keyframe in a timeline animation.

TimelineKeyframe defines a specific point in time within an animation sequence,
including the frame index and the easing function to apply when interpolating
to the next keyframe.

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/Timeline/">Timeline</a>, <a href="/api-docs/clay-native/ceramic/Easing/">Easing</a></div>


## Instance Members

<div class="signature field-var no-description" id="index"><code><span class="field-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#index"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="easing"><code><span class="field-name">easing</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#easing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">easing</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `index` | [Int](/api-docs/clay-native/Int/) |
| `easing` | Anonymous |

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |

