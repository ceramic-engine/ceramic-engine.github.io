---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: TimelineBoolKeyframe
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/TimelineBoolKeyframe/
---

# TimelineBoolKeyframe

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/TimelineBoolKeyframe.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/TimelineKeyframe/">TimelineKeyframe</a> → <strong>ceramic.TimelineBoolKeyframe</strong> (Class)</div>

A keyframe that stores a boolean value for timeline animations.

Used by TimelineBoolTrack to animate boolean properties that toggle
between true and false states at specific points in time.

Boolean keyframes don't interpolate between values - they instantly
switch to the keyframe's value when the timeline position reaches
or passes the keyframe's index.

Example usage in a timeline:
```haxe
var track = new TimelineBoolTrack();
track.add(new TimelineBoolKeyframe(false, 0, NONE));    // Start with false
track.add(new TimelineBoolKeyframe(true, 30, NONE));    // Switch to true at frame 30
track.add(new TimelineBoolKeyframe(false, 60, NONE));   // Back to false at frame 60
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/TimelineBoolTrack/">TimelineBoolTrack</a>, <a href="/api-docs/clay-native/ceramic/TimelineKeyframe/">TimelineKeyframe</a>, <a href="/api-docs/clay-native/ceramic/Timeline/">Timeline</a></div>


## Instance Members

<div class="signature field-var has-description" id="value"><code><span class="field-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#value"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The boolean value stored in this keyframe.
This value is applied when the timeline reaches this keyframe's position.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">easing</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new boolean keyframe.



| Name | Type | Description |
|------|------|-------------|
| `value` | [Bool](/api-docs/clay-native/Bool/) | The boolean value for this keyframe  |
| `index` | [Int](/api-docs/clay-native/Int/) | The frame index (time position) for this keyframe  |
| `easing` | Anonymous | The easing function (typically NONE for boolean values since they don't interpolate) |

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |

