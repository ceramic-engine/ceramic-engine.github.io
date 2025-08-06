---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: TimelineDegreesTrack
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/TimelineDegreesTrack/
---

# TimelineDegreesTrack

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/TimelineDegreesTrack.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-web/ceramic/TimelineTrack/">TimelineTrack</a> → <strong>ceramic.TimelineDegreesTrack</strong> (Class)</div>

A specialized timeline track for animating rotation values in degrees.

TimelineDegreesTrack handles the complexities of angular interpolation,
automatically choosing the shortest path between angles. For example,
animating from 350° to 10° will rotate 20° clockwise, not 340°
counter-clockwise.

Key features:
- Automatic angle normalization (0-360 range)
- Shortest path interpolation (never more than 180°)
- Smooth transitions across the 0°/360° boundary
- Support for all standard easing functions

Common uses:
- Object rotation animations
- Compass/direction indicators
- Circular UI elements
- Any property representing angular values

Example usage:
```haxe
var track = new TimelineDegreesTrack();

// Rotate from 0° to 270° (will go clockwise)
track.add(new TimelineFloatKeyframe(0, 0, LINEAR));
track.add(new TimelineFloatKeyframe(270, 30, EASE_IN_OUT));

// Then to 45° (will take shortest path: 270° -> 360° -> 45°)
track.add(new TimelineFloatKeyframe(45, 60, EASE_OUT));

track.onChange(this, t -> {
    myObject.rotation = t.value;
});

timeline.add(track);
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/ceramic/TimelineFloatKeyframe/">TimelineFloatKeyframe</a>, <a href="/api-docs/clay-web/ceramic/TimelineTrack/">TimelineTrack</a>, <a href="/api-docs/clay-web/ceramic/Timeline/">Timeline</a>, <a href="/api-docs/clay-web/ceramic/GeometryUtils/">GeometryUtils</a></div>


## Instance Members

<div class="signature field-var has-description" id="value"><code><span class="field-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#value"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The current interpolated angle in degrees.
Always normalized to the 0-360 range.
Updated automatically as the timeline plays.
Default is 0.0.

<hr class="field-separator" />

<div class="signature field-method has-description" id="apply"><code><span class="field-name">apply</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">forceChange</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#apply"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Apply the current timeline position to update the angle value.

Performs smart angular interpolation:
- Normalizes all angles to 0-360 range
- Chooses the shortest rotation path (max 180°)
- Handles wrapping across the 0°/360° boundary
- Applies easing to the interpolated value

For example:
- 350° to 10° animates as 350° -> 360° -> 10° (20° total)
- 10° to 350° animates as 10° -> 0° -> 350° (-20° total)



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `forceChange` | [Bool](/api-docs/clay-web/Bool/) | `false` | If true, triggers the change event even if value hasn't changed |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-method has-description" id="emitChange"><code><span class="field-name">emitChange</span><span class="parenthesis">(</span><span class="arg-name">track</span><span class="operator">:</span> <a href="#" class="type-link">TimelineDegreesTrack</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event triggered when the degree value changes.
Fired whenever the interpolated angle is different from the previous frame.



| Name | Type | Description |
|------|------|-------------|
| `track` | [TimelineDegreesTrack](/api-docs/clay-web/ceramic/TimelineDegreesTrack/) | This track instance (for convenience in handlers) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |

