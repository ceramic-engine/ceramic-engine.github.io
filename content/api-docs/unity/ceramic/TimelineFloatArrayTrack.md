---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: TimelineFloatArrayTrack
target: Unity
permalink: api-docs/unity/ceramic/TimelineFloatArrayTrack/
---

# TimelineFloatArrayTrack

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/TimelineFloatArrayTrack.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">Entity</a> → <a href="/api-docs/unity/ceramic/TimelineTrack/">TimelineTrack</a> → <strong>ceramic.TimelineFloatArrayTrack</strong> (Class)</div>

A timeline track that animates arrays of floating-point values.

TimelineFloatArrayTrack enables simultaneous animation of multiple
numeric values, with each array element interpolated independently.
This is ideal for animating multi-dimensional data where all components
need to change together in a coordinated way.

Key features:
- Element-wise interpolation with easing
- Dynamic array length handling
- Efficient change detection
- Support for arrays of different lengths (uses minimum length)

Common uses:
- 2D/3D position animations ([x, y] or [x, y, z])
- Multi-channel color animations ([r, g, b, a])
- Vertex/shape morphing animations
- Complex parameter sets for effects
- Any synchronized multi-value animation

Example usage:
```haxe
var track = new TimelineFloatArrayTrack();

// Animate a 2D path
track.add(new TimelineFloatArrayKeyframe([0, 0], 0, LINEAR));
track.add(new TimelineFloatArrayKeyframe([100, 0], 15, EASE_IN));
track.add(new TimelineFloatArrayKeyframe([100, 100], 30, EASE_OUT));
track.add(new TimelineFloatArrayKeyframe([0, 100], 45, EASE_IN));
track.add(new TimelineFloatArrayKeyframe([0, 0], 60, EASE_OUT));

track.onChange(this, t -> {
    myObject.x = t.value[0];
    myObject.y = t.value[1];
});

timeline.add(track);
```

Note: For best results, all keyframes should have arrays of the same length.

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/ceramic/TimelineFloatArrayKeyframe/">TimelineFloatArrayKeyframe</a>, <a href="/api-docs/unity/ceramic/TimelineTrack/">TimelineTrack</a>, <a href="/api-docs/unity/ceramic/Timeline/">Timeline</a></div>


## Instance Members

<div class="signature field-var has-description" id="value"><code><span class="field-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#value"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The current interpolated array of float values.
Updated automatically as the timeline plays, with each element
smoothly transitioning based on keyframes and easing.
Default is an empty array.

<hr class="field-separator" />

<div class="signature field-method has-description" id="apply"><code><span class="field-name">apply</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">forceChange</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#apply"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Apply the current timeline position to update the float array.

Performs element-wise interpolation:
- Each array element is interpolated independently
- Handles arrays of different lengths (uses minimum length)
- Efficiently tracks changes to avoid unnecessary updates
- Applies easing to each element's interpolation



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `forceChange` | [Bool](/api-docs/unity/Bool/) | `false` | If true, triggers the change event even if no values changed |

## Private Members

<div class="signature field-method has-description" id="emitChange"><code><span class="field-name">emitChange</span><span class="parenthesis">(</span><span class="arg-name">track</span><span class="operator">:</span> <a href="#" class="type-link">TimelineFloatArrayTrack</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event triggered when any value in the array changes.
Fired whenever one or more elements are different from the previous frame.



| Name | Type | Description |
|------|------|-------------|
| `track` | [TimelineFloatArrayTrack](/api-docs/unity/ceramic/TimelineFloatArrayTrack/) | This track instance (for convenience in handlers) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |

