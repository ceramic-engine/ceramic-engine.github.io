---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: TimelineColorKeyframe
target: Unity
permalink: api-docs/unity/ceramic/TimelineColorKeyframe/
---

# TimelineColorKeyframe

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/TimelineColorKeyframe.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/TimelineKeyframe/">TimelineKeyframe</a> → <strong>ceramic.TimelineColorKeyframe</strong> (Class)</div>

A keyframe that stores a color value for timeline animations.

Used by TimelineColorTrack to animate color properties over time.
Colors are interpolated between keyframes based on the easing function,
creating smooth color transitions.

The color interpolation is performed in RGB color space, with each
channel (red, green, blue) interpolated independently.

Example usage in a timeline:
```haxe
var track = new TimelineColorTrack();
track.add(new TimelineColorKeyframe(Color.RED, 0, LINEAR));
track.add(new TimelineColorKeyframe(Color.YELLOW, 30, EASE_IN_OUT));
track.add(new TimelineColorKeyframe(Color.BLUE, 60, BOUNCE_EASE_OUT));
```

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/ceramic/TimelineColorTrack/">TimelineColorTrack</a>, <a href="/api-docs/unity/ceramic/TimelineKeyframe/">TimelineKeyframe</a>, <a href="/api-docs/unity/ceramic/Timeline/">Timeline</a>, <a href="/api-docs/unity/ceramic/Color/">Color</a></div>


## Instance Members

<div class="signature field-var has-description" id="value"><code><span class="field-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#value"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The color value stored in this keyframe.
This color is used as a target for interpolation when animating.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a><span class="operator">,</span> <span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">easing</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new color keyframe.



| Name | Type | Description |
|------|------|-------------|
| `value` | [Color](/api-docs/unity/ceramic/Color/) | The color value for this keyframe  |
| `index` | [Int](/api-docs/unity/Int/) | The frame index (time position) for this keyframe  |
| `easing` | Anonymous | The easing function for interpolation to the next keyframe |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:structInit` | - |

