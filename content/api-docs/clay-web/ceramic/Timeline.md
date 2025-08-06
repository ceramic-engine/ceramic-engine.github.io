---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Timeline
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/Timeline/
---

# Timeline

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Timeline.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">Entity</a> → <strong>ceramic.Timeline</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-web/ceramic/Component/">Component</a></div>

An animation timeline system that manages keyframe-based animations.

Timeline provides:
- Frame-based positioning and playback
- Multiple animation tracks for different properties
- Label system for marking important positions
- Looping and one-shot playback modes
- Auto-update integration with the game loop
- Complete callbacks for animation sequences

Timelines are commonly used in:
- Fragment animations
- Complex UI transitions
- Cutscenes and scripted sequences
- Any multi-property animations that need synchronization

Example usage:
```haxe
var timeline = new Timeline();
timeline.fps = 30;
timeline.size = 120; // 4 seconds at 30 fps

// Add animation tracks
var track = new TimelineFloatTrack();
track.add(new TimelineFloatKeyframe(0, 100));
track.add(new TimelineFloatKeyframe(60, 200));
timeline.add(track);

// Add labels for important positions
timeline.setLabel(0, "start");
timeline.setLabel(60, "middle");
timeline.setLabel(120, "end");

// Play animation from a label
timeline.animate("start", () -> trace("Animation complete!"));
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/ceramic/TimelineTrack/">TimelineTrack</a>, <a href="/api-docs/clay-web/ceramic/TimelineKeyframe/">TimelineKeyframe</a>, <a href="/api-docs/clay-web/ceramic/Fragment/">Fragment</a></div>


## Instance Members

<div class="signature field-var has-description" id="size"><code><span class="field-name">size</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#size"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The total length of the timeline in frames.

- Default is 0 (timeline won't play)
- When `autoFitSize` is true (default), automatically adjusts to match the longest track
- Set to -1 for an infinite timeline that never finishes

The actual duration in seconds = size / fps

<hr class="field-separator" />

<div class="signature field-var has-description" id="autoFitSize"><code><span class="field-name">autoFitSize</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#autoFitSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the timeline should automatically adjust its size to match the longest track.
When true (default), you don't need to manually set the timeline size.

<hr class="field-separator" />

<div class="signature field-var has-description" id="loop"><code><span class="field-name">loop</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#loop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the timeline should loop back to the beginning when it reaches the end.
Ignored if size is -1 (infinite timeline).
Default is true.

<hr class="field-separator" />

<div class="signature field-var has-description" id="autoUpdate"><code><span class="field-name">autoUpdate</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#autoUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the timeline automatically updates each frame.
When true (default), the timeline advances based on frame delta time.
Set to false to manually control timeline playback with seek() or update().

<hr class="field-separator" />

<div class="signature field-var has-description" id="fps"><code><span class="field-name">fps</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#fps"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Timeline playback speed in frames per second.
This defines how many timeline frames pass per second of real time.

Note: Timeline values are interpolated between frames, so using 30 fps
still provides smooth animation even on 60+ fps displays.

Default is 30 fps.

<hr class="field-separator" />

<div class="signature field-var has-description" id="position"><code><span class="field-name">position</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#position"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current playback position in frames.

- Starts at 0
- Can be fractional for smooth interpolation between frames
- Wraps back to 0 when looping is enabled and size is reached
- Use seek() to jump to specific positions

<hr class="field-separator" />

<div class="signature field-var has-description" id="tracks"><code><span class="field-name">tracks</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/TimelineTrack/" class="type-link">TimelineTrack</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/TimelineKeyframe/" class="type-link">TimelineKeyframe</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#tracks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of animation tracks managed by this timeline.
Each track animates a specific property of an entity.
Tracks are updated automatically as the timeline plays.

<hr class="field-separator" />

<div class="signature field-var has-description" id="paused"><code><span class="field-name">paused</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#paused"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the timeline playback is paused.
Setting to true stops all animation while preserving the current position.

<hr class="field-separator" />

<div class="signature field-var has-description" id="labels"><code><span class="field-name">labels</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#labels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of label names in the timeline.
Labels mark important positions for seeking and animation control.
Sorted by position (frame index).

<hr class="field-separator" />

<div class="signature field-var has-description" id="startPosition"><code><span class="field-name">startPosition</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#startPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optional starting position for timeline playback.

- If >= 0, timeline starts from this frame index
- When looping, timeline resets to this position instead of 0
- Default is -1 (use position 0)

<hr class="field-separator" />

<div class="signature field-var has-description" id="endPosition"><code><span class="field-name">endPosition</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#endPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optional ending position for timeline playback.

- If >= 0, timeline stops at this frame index
- When looping, timeline resets to startPosition (or 0)
- Default is -1 (use timeline size)

<hr class="field-separator" />

<div class="signature field-var no-description" id="entity"><code><span class="field-name">entity</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Entity/" class="type-link">Entity</a></code><a class="header-anchor" href="#entity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="initializerName"><code><span class="field-name">initializerName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#initializerName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="update"><code><span class="field-name">update</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#update"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Update the timeline position based on elapsed time.
Called automatically each frame when autoUpdate is true.



| Name | Type | Description |
|------|------|-------------|
| `delta` | [Float](/api-docs/clay-web/Float/) | Time elapsed since last frame in seconds |

<hr class="field-separator" />

<div class="signature field-method has-description" id="seek"><code><span class="field-name">seek</span><span class="parenthesis">(</span><span class="arg-name">targetPosition</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#seek"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Jump to a specific position in the timeline.
Handles looping and clamping based on timeline settings.
Updates all tracks to reflect the new position.



| Name | Type | Description |
|------|------|-------------|
| `targetPosition` | [Float](/api-docs/clay-web/Float/) | The frame index to seek to |

<hr class="field-separator" />

<div class="signature field-method has-description" id="animate"><code><span class="field-name">animate</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">complete</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#animate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Play an animation sequence from a labeled position.
The animation plays until reaching the next label or timeline end.

If the animation is interrupted (by seeking or playing another animation),
the complete callback won't be called.



| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/clay-web/String/) | The label name to start from  |
| `complete` | Function | Callback fired when the animation completes |

<hr class="field-separator" />

<div class="signature field-method has-description" id="seekLabel"><code><span class="field-name">seekLabel</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#seekLabel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Jump to the position of a named label.



| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/clay-web/String/) | The label name to seek to  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-web/Int/) | The frame index of the label, or -1 if not found |

<hr class="field-separator" />

<div class="signature field-method has-description" id="resetStartAndEndPositions"><code><span class="field-name">resetStartAndEndPositions</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resetStartAndEndPositions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reset the timeline's start and end positions to their defaults.
After calling this, the timeline will play from 0 to its full size.

<hr class="field-separator" />

<div class="signature field-method has-description" id="loopLabel"><code><span class="field-name">loopLabel</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#loopLabel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set up the timeline to loop within a labeled section.

The timeline will:
- Jump to the label position
- Set startPosition to the label's frame
- Set endPosition to the next label (or timeline end)
- Loop within this range



| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/clay-web/String/) | The label name marking the start of the loop section  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-web/Int/) | The frame index of the label, or -1 if not found |

<hr class="field-separator" />

<div class="signature field-method has-description" id="apply"><code><span class="field-name">apply</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">forceChange</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#apply"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Apply all timeline tracks at the current position.
Useful for ensuring all animated properties are up to date.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `forceChange` | [Bool](/api-docs/clay-web/Bool/) | `false` | If true, forces track updates even if values haven't changed |

<hr class="field-separator" />

<div class="signature field-method has-description" id="add"><code><span class="field-name">add</span><span class="parenthesis">(</span><span class="arg-name">track</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TimelineTrack/" class="type-link">TimelineTrack</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/TimelineKeyframe/" class="type-link">TimelineKeyframe</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#add"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Add an animation track to this timeline.
If the track was previously added to another timeline, it's removed first.
If autoFitSize is true, the timeline size adjusts to accommodate the track.



| Name | Type | Description |
|------|------|-------------|
| `track` | [TimelineTrack](/api-docs/clay-web/ceramic/TimelineTrack/)<[TimelineKeyframe](/api-docs/clay-web/ceramic/TimelineKeyframe/)> | The animation track to add |

<hr class="field-separator" />

<div class="signature field-method has-description" id="get"><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">trackId</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TimelineTrack/" class="type-link">TimelineTrack</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/TimelineKeyframe/" class="type-link">TimelineKeyframe</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get a track by its ID.



| Name | Type | Description |
|------|------|-------------|
| `trackId` | [String](/api-docs/clay-web/String/) | The track identifier  |

| Returns | Description |
|---------|-------------|
| [TimelineTrack](/api-docs/clay-web/ceramic/TimelineTrack/)<[TimelineKeyframe](/api-docs/clay-web/ceramic/TimelineKeyframe/)> | The track with the given ID, or null if not found |

<hr class="field-separator" />

<div class="signature field-method has-description" id="remove"><code><span class="field-name">remove</span><span class="parenthesis">(</span><span class="arg-name">track</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TimelineTrack/" class="type-link">TimelineTrack</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/TimelineKeyframe/" class="type-link">TimelineKeyframe</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#remove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Remove an animation track from this timeline.
If autoFitSize is true, the timeline size adjusts after removal.



| Name | Type | Description |
|------|------|-------------|
| `track` | [TimelineTrack](/api-docs/clay-web/ceramic/TimelineTrack/)<[TimelineKeyframe](/api-docs/clay-web/ceramic/TimelineKeyframe/)> | The animation track to remove |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fitSize"><code><span class="field-name">fitSize</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#fitSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adjust the timeline size to match the longest track.
Called automatically when autoFitSize is true and tracks are added/removed.

<hr class="field-separator" />

<div class="signature field-method has-description" id="indexOfLabelBeforeIndex"><code><span class="field-name">indexOfLabelBeforeIndex</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#indexOfLabelBeforeIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Find the last label before a given position.



| Name | Type | Description |
|------|------|-------------|
| `index` | [Int](/api-docs/clay-web/Int/) | The frame index to search before  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-web/Int/) | The frame index of the previous label, or -1 if none exists |

<hr class="field-separator" />

<div class="signature field-method has-description" id="labelAtIndex"><code><span class="field-name">labelAtIndex</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#labelAtIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get the label name at a specific frame index.



| Name | Type | Description |
|------|------|-------------|
| `index` | [Int](/api-docs/clay-web/Int/) | The frame index to check  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-web/String/) | The label name at that position, or null if no label exists |

<hr class="field-separator" />

<div class="signature field-method has-description" id="indexOfLabel"><code><span class="field-name">indexOfLabel</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#indexOfLabel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get the frame index of a named label.



| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/clay-web/String/) | The label name to find  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-web/Int/) | The frame index of the label, or -1 if not found |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setLabel"><code><span class="field-name">setLabel</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setLabel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create or update a label at a specific position.
If a label with the same name exists, it's moved to the new position.
Labels are automatically sorted by position.



| Name | Type | Description |
|------|------|-------------|
| `index` | [Int](/api-docs/clay-web/Int/) | The frame index for the label  |
| `name` | [String](/api-docs/clay-web/String/) | The label name |

<hr class="field-separator" />

<div class="signature field-method has-description" id="removeLabelAtIndex"><code><span class="field-name">removeLabelAtIndex</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#removeLabelAtIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Remove any label at the specified frame index.



| Name | Type | Description |
|------|------|-------------|
| `index` | [Int](/api-docs/clay-web/Int/) | The frame index where the label should be removed  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | True if a label was removed, false if no label existed |

<hr class="field-separator" />

<div class="signature field-method has-description" id="removeLabel"><code><span class="field-name">removeLabel</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#removeLabel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Remove a label by name.



| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/clay-web/String/) | The label name to remove  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | True if the label was removed, false if it didn't exist |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new timeline instance.
The timeline starts paused at position 0 with no tracks.

## Private Members

<div class="signature field-var has-description" id="labelIndexes"><code><span class="field-name">labelIndexes</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#labelIndexes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Used in pair with `labels` to manage timeline labels

<hr class="field-separator" />

<div class="signature field-var has-description" id="completeHandlers"><code><span class="field-name">completeHandlers</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Function</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#completeHandlers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal array of complete handlers

<hr class="field-separator" />

<div class="signature field-var has-description" id="completeHandlerIndexes"><code><span class="field-name">completeHandlerIndexes</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#completeHandlerIndexes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal array of complete handler label indexes

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitStartLabel"><code><span class="field-name">emitStartLabel</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitStartLabel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event triggered when the timeline position reaches a label.
Useful for triggering actions at specific points in the animation.



| Name | Type | Description |
|------|------|-------------|
| `index` | [Int](/api-docs/clay-web/Int/) | The frame index (position) of the label  |
| `name` | [String](/api-docs/clay-web/String/) | The name of the label that was reached |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitEndLabel"><code><span class="field-name">emitEndLabel</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitEndLabel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event triggered when the timeline leaves a labeled section.
This happens when reaching the next label or the end of the timeline.
Useful for cleaning up effects or transitioning to new states.



| Name | Type | Description |
|------|------|-------------|
| `index` | [Int](/api-docs/clay-web/Int/) | The frame index (position) of the label being left  |
| `name` | [String](/api-docs/clay-web/String/) | The name of the label being left |

<hr class="field-separator" />

<div class="signature field-method no-description" id="bindAsComponent"><code><span class="field-name">bindAsComponent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindAsComponent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="bindOrUnbindUpdateIfNeeded"><code><span class="field-name">bindOrUnbindUpdateIfNeeded</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindOrUnbindUpdateIfNeeded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal function to bind or update to app
update event depending on current settings

<hr class="field-separator" />

<div class="signature field-method no-description" id="inlineSeek"><code><span class="field-name">inlineSeek</span><span class="parenthesis">(</span><span class="arg-name">targetPosition</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">forceSeek</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">forceChange</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#inlineSeek"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `targetPosition` | [Float](/api-docs/clay-web/Float/) | |
| `forceSeek` | [Bool](/api-docs/clay-web/Bool/) | `false` |
| `forceChange` | [Bool](/api-docs/clay-web/Bool/) | `false` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="clearCompleteHandlers"><code><span class="field-name">clearCompleteHandlers</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearCompleteHandlers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="didEmitEndLabel"><code><span class="field-name">didEmitEndLabel</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#didEmitEndLabel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `index` | [Int](/api-docs/clay-web/Int/) |
| `name` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="sortLabels"><code><span class="field-name">sortLabels</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#sortLabels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="compareLabelIndexes"><code><span class="field-name">compareLabelIndexes</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#compareLabelIndexes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Int](/api-docs/clay-web/Int/) |
| `b` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="compareLabelNames"><code><span class="field-name">compareLabelNames</span><span class="parenthesis">(</span><span class="arg-name">nameA</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">nameB</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#compareLabelNames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `nameA` | [String](/api-docs/clay-web/String/) |
| `nameB` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setEntity"><code><span class="field-name">setEntity</span><span class="parenthesis">(</span><span class="arg-name">entity</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Entity/" class="type-link">Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setEntity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `entity` | [Entity](/api-docs/clay-web/ceramic/Entity/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getEntity"><code><span class="field-name">getEntity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Entity/" class="type-link">Entity</a></code><a class="header-anchor" href="#getEntity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Entity](/api-docs/clay-web/ceramic/Entity/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.ComponentMacro.build() |
| `:autoBuild` | ceramic.macros.ComponentMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

