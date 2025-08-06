---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: TimelineTrack
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/TimelineTrack/
---

# TimelineTrack

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/TimelineTrack.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">Entity</a> → <strong>ceramic.TimelineTrack</strong> (Class) → <a href="/api-docs/clay-web/ceramic/TimelineBoolTrack/">TimelineBoolTrack</a>, <a href="/api-docs/clay-web/ceramic/TimelineColorTrack/">TimelineColorTrack</a>, <a href="/api-docs/clay-web/ceramic/TimelineDegreesTrack/">TimelineDegreesTrack</a>, <a href="/api-docs/clay-web/ceramic/TimelineFloatArrayTrack/">TimelineFloatArrayTrack</a>, <a href="/api-docs/clay-web/ceramic/TimelineFloatTrack/">TimelineFloatTrack</a></div>

Base class for animation tracks in a timeline system.

A TimelineTrack manages a sequence of keyframes that define how a value
changes over time. The track handles:
- Keyframe storage and ordering
- Position tracking and seeking
- Interpolation between keyframes
- Automatic size adjustment

This is an abstract base class. Concrete implementations include:
- TimelineFloatTrack: Animates numeric values
- TimelineColorTrack: Animates color values
- TimelineBoolTrack: Animates boolean values
- TimelineFloatArrayTrack: Animates arrays of numbers

Tracks are typically added to a Timeline which coordinates their playback.

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/ceramic/Timeline/">Timeline</a>, <a href="/api-docs/clay-web/ceramic/TimelineKeyframe/">TimelineKeyframe</a></div>


## Instance Members

<div class="signature field-var has-description" id="size"><code><span class="field-name">size</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#size"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The total length of this track in frames.

- Default is 0 (track won't animate)
- When autoFitSize is true (default), automatically adjusts to the last keyframe's index
- Set to -1 for an infinite track that never finishes

The actual duration = size / timeline.fps

<hr class="field-separator" />

<div class="signature field-var has-description" id="autoFitSize"><code><span class="field-name">autoFitSize</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#autoFitSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the track should automatically adjust its size to match the last keyframe.
When true (default), you don't need to manually set the track size.

<hr class="field-separator" />

<div class="signature field-var has-description" id="loop"><code><span class="field-name">loop</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#loop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this track should loop back to the beginning when it reaches the end.
Ignored if size is -1 (infinite track).
Default is false (tracks don't loop independently, controlled by timeline).

<hr class="field-separator" />

<div class="signature field-var has-description" id="locked"><code><span class="field-name">locked</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#locked"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this track is locked from timeline updates.
When true, the track won't be updated when its timeline advances.
Useful for temporarily disabling specific animations.

<hr class="field-separator" />

<div class="signature field-var has-description" id="timeline"><code><span class="field-name">timeline</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Timeline/" class="type-link">Timeline</a></code><a class="header-anchor" href="#timeline"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The timeline that owns this track.
Set automatically when the track is added to a timeline.
Null if the track is not attached to any timeline.

<hr class="field-separator" />

<div class="signature field-var has-description" id="position"><code><span class="field-name">position</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#position"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current playback position in frames.

- Can be fractional for smooth interpolation
- Wraps back to 0 when looping is enabled and size is reached
- Updated automatically by the timeline or manually with seek()

<hr class="field-separator" />

<div class="signature field-var has-description" id="keyframes"><code><span class="field-name">keyframes</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><span class="type-name">ceramic.TimelineTrack.K</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#keyframes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of keyframes defining the animation.
Keyframes are automatically kept sorted by their index (time position).
Use add() and remove() to modify the keyframe list.

<hr class="field-separator" />

<div class="signature field-var has-description" id="before"><code><span class="field-name">before</span><span class="operator">:</span> <span class="type-name">ceramic.TimelineTrack.K</span></code><a class="header-anchor" href="#before"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The keyframe at or immediately before the current position.
Used as the start point for interpolation.
Null if position is before the first keyframe.

<hr class="field-separator" />

<div class="signature field-var has-description" id="after"><code><span class="field-name">after</span><span class="operator">:</span> <span class="type-name">ceramic.TimelineTrack.K</span></code><a class="header-anchor" href="#after"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The keyframe immediately after the current position.
Used as the end point for interpolation.
Null if position is after the last keyframe.

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="seek"><code><span class="field-name">seek</span><span class="parenthesis">(</span><span class="arg-name">targetPosition</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#seek"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Jump to a specific position in the track.
Handles looping and clamping based on track settings.
Updates the before/after keyframes and applies the change.



| Name | Type | Description |
|------|------|-------------|
| `targetPosition` | [Float](/api-docs/clay-web/Float/) | The frame index to seek to |

<hr class="field-separator" />

<div class="signature field-method has-description" id="add"><code><span class="field-name">add</span><span class="parenthesis">(</span><span class="arg-name">keyframe</span><span class="operator">:</span> <span class="type-name">ceramic.TimelineTrack.K</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#add"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Add a keyframe to this track.

- Keyframes are automatically sorted by index
- If a keyframe already exists at the same index, it's replaced
- Updates track size if autoFitSize is true
- Immediately applies the change



| Name | Type | Description |
|------|------|-------------|
| `keyframe` | ceramic.TimelineTrack.K | The keyframe to add |

<hr class="field-separator" />

<div class="signature field-method has-description" id="remove"><code><span class="field-name">remove</span><span class="parenthesis">(</span><span class="arg-name">keyframe</span><span class="operator">:</span> <span class="type-name">ceramic.TimelineTrack.K</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#remove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Remove a keyframe from this track.

- Updates track size if autoFitSize is true
- Immediately applies the change



| Name | Type | Description |
|------|------|-------------|
| `keyframe` | ceramic.TimelineTrack.K | The keyframe to remove |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fitSize"><code><span class="field-name">fitSize</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#fitSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adjust the track size to match the last keyframe's index.
Called automatically when autoFitSize is true and keyframes are added/removed.

<hr class="field-separator" />

<div class="signature field-method has-description" id="apply"><code><span class="field-name">apply</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">forceChange</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#apply"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Apply the current animation state to the target property.
This method should be overridden in subclasses to implement
the actual property updates and interpolation.

Called automatically when the track position changes.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `forceChange` | [Bool](/api-docs/clay-web/Bool/) | `false` | If true, forces the update even if the value hasn't changed |

<hr class="field-separator" />

<div class="signature field-method has-description" id="findKeyframeAtIndex"><code><span class="field-name">findKeyframeAtIndex</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">ceramic.TimelineTrack.K</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#findKeyframeAtIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Find a keyframe at exactly the specified index.



| Name | Type | Description |
|------|------|-------------|
| `index` | [Int](/api-docs/clay-web/Int/) | The frame index to search for  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/clay-web/Null/)<ceramic.TimelineTrack.K> | The keyframe at that index, or null if none exists |

<hr class="field-separator" />

<div class="signature field-method has-description" id="findKeyframeBefore"><code><span class="field-name">findKeyframeBefore</span><span class="parenthesis">(</span><span class="arg-name">position</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">ceramic.TimelineTrack.K</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#findKeyframeBefore"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Find the keyframe at or before a given position.
Used to determine the start point for interpolation.



| Name | Type | Description |
|------|------|-------------|
| `position` | [Float](/api-docs/clay-web/Float/) | The position to search from  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/clay-web/Null/)<ceramic.TimelineTrack.K> | The keyframe at or before the position, or null if none exists |

<hr class="field-separator" />

<div class="signature field-method has-description" id="findKeyframeAfter"><code><span class="field-name">findKeyframeAfter</span><span class="parenthesis">(</span><span class="arg-name">position</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">ceramic.TimelineTrack.K</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#findKeyframeAfter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Find the first keyframe after a given position.
Used to determine the end point for interpolation.



| Name | Type | Description |
|------|------|-------------|
| `position` | [Float](/api-docs/clay-web/Float/) | The position to search from  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/clay-web/Null/)<ceramic.TimelineTrack.K> | The keyframe after the position, or null if none exists |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new timeline track.
The track starts empty with no keyframes.

## Private Members

<div class="signature field-var has-description" id="keyframeBeforeIndex"><code><span class="field-name">keyframeBeforeIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#keyframeBeforeIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The index of the last resolved `key index before`. Used internally.

<hr class="field-separator" />

<div class="signature field-var has-description" id="keyframeAfterIndex"><code><span class="field-name">keyframeAfterIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#keyframeAfterIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The index of the last resolved `key index after`. Used internally.

<hr class="field-separator" />

<div class="signature field-method no-description" id="inlineSeek"><code><span class="field-name">inlineSeek</span><span class="parenthesis">(</span><span class="arg-name">targetPosition</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">forceSeek</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">forceChange</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#inlineSeek"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `targetPosition` | [Float](/api-docs/clay-web/Float/) | |
| `forceSeek` | [Bool](/api-docs/clay-web/Bool/) | `false` |
| `forceChange` | [Bool](/api-docs/clay-web/Bool/) | `false` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="computeKeyframeBefore"><code><span class="field-name">computeKeyframeBefore</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeKeyframeBefore"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal. Compute `before` keyframe, if any matching.

<hr class="field-separator" />

<div class="signature field-method has-description" id="computeKeyframeAfter"><code><span class="field-name">computeKeyframeAfter</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeKeyframeAfter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal. Compute `after` keyframe, if any matching.

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

