---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: TimelineColorTrack
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/TimelineColorTrack/
---

# TimelineColorTrack

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/TimelineColorTrack.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-native/ceramic/TimelineTrack/">TimelineTrack</a> → <strong>ceramic.TimelineColorTrack</strong> (Class)</div>

A timeline track that animates color values with smooth interpolation.

TimelineColorTrack manages a sequence of color keyframes to create
smooth color transitions over time. Colors are interpolated in RGB
space, with support for all standard easing functions.

Common uses:
- Animating object colors (tint, background, text)
- Creating color fade effects
- Mood transitions in scenes
- UI state color changes
- Particle color animations

Example usage:
```haxe
var track = new TimelineColorTrack();

// Create a rainbow animation
track.add(new TimelineColorKeyframe(Color.RED, 0, LINEAR));
track.add(new TimelineColorKeyframe(Color.ORANGE, 10, LINEAR));
track.add(new TimelineColorKeyframe(Color.YELLOW, 20, LINEAR));
track.add(new TimelineColorKeyframe(Color.GREEN, 30, LINEAR));
track.add(new TimelineColorKeyframe(Color.BLUE, 40, LINEAR));
track.add(new TimelineColorKeyframe(Color.PURPLE, 50, EASE_IN_OUT));

// Apply color changes to a visual
track.onChange(this, t -> {
    myVisual.color = t.value;
});

timeline.add(track);
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/TimelineColorKeyframe/">TimelineColorKeyframe</a>, <a href="/api-docs/clay-native/ceramic/TimelineTrack/">TimelineTrack</a>, <a href="/api-docs/clay-native/ceramic/Timeline/">Timeline</a>, <a href="/api-docs/clay-native/ceramic/Color/">Color</a></div>


## Instance Members

<div class="signature field-var has-description" id="value"><code><span class="field-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#value"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The current interpolated color value.
Updated automatically as the timeline plays, smoothly transitioning
between keyframe colors based on position and easing.
Default is WHITE.

<hr class="field-separator" />

<div class="signature field-method has-description" id="apply"><code><span class="field-name">apply</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">forceChange</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#apply"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Apply the current timeline position to update the color value.

Performs smooth color interpolation between keyframes:
- Between keyframes: Interpolates RGB values using the easing function
- Before first keyframe: Uses the first keyframe's color
- After last keyframe: Uses the last keyframe's color

The interpolation uses the "after" keyframe's easing function to
determine how the transition occurs.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `forceChange` | [Bool](/api-docs/clay-native/Bool/) | `false` | If true, triggers the change event even if color hasn't changed |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-method has-description" id="emitChange"><code><span class="field-name">emitChange</span><span class="parenthesis">(</span><span class="arg-name">track</span><span class="operator">:</span> <a href="#" class="type-link">TimelineColorTrack</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event triggered when the color value changes.
Fired whenever the interpolated color is different from the previous frame.



| Name | Type | Description |
|------|------|-------------|
| `track` | [TimelineColorTrack](/api-docs/clay-native/ceramic/TimelineColorTrack/) | This track instance (for convenience in handlers) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |

