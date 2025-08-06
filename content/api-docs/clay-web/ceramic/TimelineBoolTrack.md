---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: TimelineBoolTrack
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/TimelineBoolTrack/
---

# TimelineBoolTrack

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/TimelineBoolTrack.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-web/ceramic/TimelineTrack/">TimelineTrack</a> → <strong>ceramic.TimelineBoolTrack</strong> (Class)</div>

A timeline track that animates boolean values.

TimelineBoolTrack manages a sequence of boolean keyframes to control
properties that can be either true or false. Unlike numeric tracks,
boolean tracks don't interpolate - they instantly switch values when
the timeline position reaches or passes a keyframe.

Common uses:
- Toggling visibility (visible property)
- Enabling/disabling features or behaviors
- Triggering state changes at specific times
- Creating on/off patterns for effects

Example usage:
```haxe
var track = new TimelineBoolTrack();
track.add(new TimelineBoolKeyframe(false, 0, NONE));
track.add(new TimelineBoolKeyframe(true, 30, NONE));
track.add(new TimelineBoolKeyframe(false, 45, NONE));

// Listen for value changes
track.onChange(this, t -> {
    myObject.visible = t.value;
});

// Add to timeline
timeline.add(track);
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/ceramic/TimelineBoolKeyframe/">TimelineBoolKeyframe</a>, <a href="/api-docs/clay-web/ceramic/TimelineTrack/">TimelineTrack</a>, <a href="/api-docs/clay-web/ceramic/Timeline/">Timeline</a></div>


## Instance Members

<div class="signature field-var has-description" id="value"><code><span class="field-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#value"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The current boolean value of this track.
Updated automatically as the timeline plays based on keyframe positions.
Default is false.

<hr class="field-separator" />

<div class="signature field-method has-description" id="apply"><code><span class="field-name">apply</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">forceChange</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#apply"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Apply the current timeline position to update the boolean value.

Boolean tracks use a simple rule:
- If between keyframes, use the value of the "before" keyframe
- If exactly at a keyframe, use that keyframe's value
- If before all keyframes, use the first keyframe's value
- If after all keyframes, use the last keyframe's value



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `forceChange` | [Bool](/api-docs/clay-web/Bool/) | `false` | If true, triggers the change event even if value hasn't changed |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-method has-description" id="emitChange"><code><span class="field-name">emitChange</span><span class="parenthesis">(</span><span class="arg-name">track</span><span class="operator">:</span> <a href="#" class="type-link">TimelineBoolTrack</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event triggered when the boolean value changes.
Fired when the track's value switches between true and false.



| Name | Type | Description |
|------|------|-------------|
| `track` | [TimelineBoolTrack](/api-docs/clay-web/ceramic/TimelineBoolTrack/) | This track instance (for convenience in handlers) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |

