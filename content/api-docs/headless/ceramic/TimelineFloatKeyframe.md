---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: TimelineFloatKeyframe
target: Headless
permalink: api-docs/headless/ceramic/TimelineFloatKeyframe/
---

# TimelineFloatKeyframe

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/TimelineFloatKeyframe.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/ceramic/TimelineKeyframe/">TimelineKeyframe</a> → <strong>ceramic.TimelineFloatKeyframe</strong> (Class)</div>

A keyframe that stores a floating-point value for timeline animations.

Used by TimelineFloatTrack to animate numeric properties over time.
Float values are interpolated between keyframes using the specified
easing function, creating smooth transitions.

This is one of the most commonly used keyframe types, suitable for
animating properties like position, scale, rotation, alpha, and more.

Example usage in a timeline:
```haxe
var track = new TimelineFloatTrack();
track.add(new TimelineFloatKeyframe(0.0, 0, LINEAR));
track.add(new TimelineFloatKeyframe(100.0, 30, EASE_IN_OUT));
track.add(new TimelineFloatKeyframe(50.0, 60, ELASTIC_EASE_OUT));
```

<div class="see"><strong>See:</strong> <a href="/api-docs/headless/ceramic/TimelineFloatTrack/">TimelineFloatTrack</a>, <a href="/api-docs/headless/ceramic/TimelineKeyframe/">TimelineKeyframe</a>, <a href="/api-docs/headless/ceramic/Timeline/">Timeline</a>, <a href="/api-docs/headless/ceramic/Easing/">Easing</a></div>


## Instance Members

<div class="signature field-var has-description" id="value"><code><span class="field-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#value"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The floating-point value stored in this keyframe.
This value is used as a target for interpolation when animating.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">easing</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new float keyframe.



| Name | Type | Description |
|------|------|-------------|
| `value` | [Float](/api-docs/headless/Float/) | The numeric value for this keyframe  |
| `index` | [Int](/api-docs/headless/Int/) | The frame index (time position) for this keyframe  |
| `easing` | Anonymous | The easing function for interpolation to the next keyframe |

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |

