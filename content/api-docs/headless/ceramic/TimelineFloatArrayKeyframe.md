---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: TimelineFloatArrayKeyframe
target: Headless
permalink: api-docs/headless/ceramic/TimelineFloatArrayKeyframe/
---

# TimelineFloatArrayKeyframe

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/TimelineFloatArrayKeyframe.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/ceramic/TimelineKeyframe/">TimelineKeyframe</a> → <strong>ceramic.TimelineFloatArrayKeyframe</strong> (Class)</div>

A keyframe that stores an array of floating-point values for timeline animations.

Used by TimelineFloatArrayTrack to animate multiple numeric values simultaneously.
Each element in the array is interpolated independently, allowing complex
multi-value animations with a single track.

Common uses:
- Animating multi-dimensional positions (2D/3D coordinates)
- Color components as separate values (R, G, B, A)
- Complex shape morphing (vertex positions)
- Particle system parameters
- Any property that requires multiple synchronized values

Example usage in a timeline:
```haxe
var track = new TimelineFloatArrayTrack();

// Animate a 2D position
track.add(new TimelineFloatArrayKeyframe([0, 0], 0, LINEAR));
track.add(new TimelineFloatArrayKeyframe([100, 50], 30, EASE_IN_OUT));
track.add(new TimelineFloatArrayKeyframe([200, 0], 60, BOUNCE_EASE_OUT));

// Or animate RGBA values
track.add(new TimelineFloatArrayKeyframe([1.0, 0.0, 0.0, 1.0], 0, LINEAR));
track.add(new TimelineFloatArrayKeyframe([0.0, 1.0, 0.0, 0.5], 30, EASE_OUT));
```

Note: All keyframes in a track should have arrays of the same length.

<div class="see"><strong>See:</strong> <a href="/api-docs/headless/ceramic/TimelineFloatArrayTrack/">TimelineFloatArrayTrack</a>, <a href="/api-docs/headless/ceramic/TimelineKeyframe/">TimelineKeyframe</a>, <a href="/api-docs/headless/ceramic/Timeline/">Timeline</a></div>


## Instance Members

<div class="signature field-var has-description" id="value"><code><span class="field-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#value"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The array of float values stored in this keyframe.
Each element is interpolated independently during animation.
All arrays in a track should have the same length.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">easing</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new float array keyframe.



| Name | Type | Description |
|------|------|-------------|
| `value` | [Array](/api-docs/headless/Array/)<[Float](/api-docs/headless/Float/)> | The array of numeric values for this keyframe  |
| `index` | [Int](/api-docs/headless/Int/) | The frame index (time position) for this keyframe  |
| `easing` | Anonymous | The easing function for interpolation to the next keyframe |

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |

