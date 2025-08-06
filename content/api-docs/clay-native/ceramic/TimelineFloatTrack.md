---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: TimelineFloatTrack
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/TimelineFloatTrack/
---

# TimelineFloatTrack

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/TimelineFloatTrack.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-native/ceramic/TimelineTrack/">TimelineTrack</a> → <strong>ceramic.TimelineFloatTrack</strong> (Class)</div>

A timeline track that animates floating-point values with smooth interpolation.

TimelineFloatTrack is one of the most versatile track types, capable of
animating any numeric property. It supports all easing functions for
creating natural, dynamic animations.

Common uses:
- Position animations (x, y coordinates)
- Scale transitions (scaleX, scaleY)
- Rotation animations (rotation in degrees)
- Alpha/opacity fades
- Size changes (width, height)
- Any custom numeric property

Example usage:
```haxe
var track = new TimelineFloatTrack();

// Animate position from 0 to 500 with easing
track.add(new TimelineFloatKeyframe(0, 0, LINEAR));
track.add(new TimelineFloatKeyframe(200, 30, EASE_IN));
track.add(new TimelineFloatKeyframe(500, 60, ELASTIC_EASE_OUT));

// Apply changes to an object property
track.onChange(this, t -> {
    myObject.x = t.value;
});

timeline.add(track);
```

The track smoothly interpolates between keyframe values based on:
- The timeline position
- The easing function of the "after" keyframe
- The distance between keyframes

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/TimelineFloatKeyframe/">TimelineFloatKeyframe</a>, <a href="/api-docs/clay-native/ceramic/TimelineTrack/">TimelineTrack</a>, <a href="/api-docs/clay-native/ceramic/Timeline/">Timeline</a>, <a href="/api-docs/clay-native/ceramic/Tween/">Tween</a></div>


## Instance Members

<div class="signature field-var has-description" id="value"><code><span class="field-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#value"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The current interpolated float value.
Updated automatically as the timeline plays, smoothly transitioning
between keyframe values based on position and easing.
Default is 0.0.

<hr class="field-separator" />

<div class="signature field-method has-description" id="apply"><code><span class="field-name">apply</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">forceChange</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#apply"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Apply the current timeline position to update the float value.

Performs smooth numeric interpolation between keyframes:
- Between keyframes: Interpolates using the "after" keyframe's easing function
- Before first keyframe: Uses the first keyframe's value
- After last keyframe: Uses the last keyframe's value

The interpolation formula is:
```
value = before.value + (after.value - before.value) * easedRatio
```



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `forceChange` | [Bool](/api-docs/clay-native/Bool/) | `false` | If true, triggers the change event even if value hasn't changed |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-method has-description" id="emitChange"><code><span class="field-name">emitChange</span><span class="parenthesis">(</span><span class="arg-name">track</span><span class="operator">:</span> <a href="#" class="type-link">TimelineFloatTrack</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event triggered when the float value changes.
Fired whenever the interpolated value is different from the previous frame.



| Name | Type | Description |
|------|------|-------------|
| `track` | [TimelineFloatTrack](/api-docs/clay-native/ceramic/TimelineFloatTrack/) | This track instance (for convenience in handlers) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |

