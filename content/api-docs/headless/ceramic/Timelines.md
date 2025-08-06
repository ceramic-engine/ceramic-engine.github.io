---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Timelines
target: Headless
permalink: api-docs/headless/ceramic/Timelines/
---

# Timelines

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Timelines.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/ceramic/Entity/">Entity</a> → <strong>ceramic.Timelines</strong> (Class)</div>

Central system for creating and binding timeline tracks and keyframes.

The Timelines class serves as a factory and binding system for the timeline
animation framework. It handles:
- Creating appropriate track types based on field types
- Creating keyframes with proper typing
- Binding tracks to entity properties for automatic updates
- Extensibility through events for custom track/keyframe types

This system is primarily used by the Fragment system when loading
timeline data from .fragment files, but can also be extended to support
custom animation types.

Built-in support includes:
- Float tracks (numeric properties)
- Color tracks (Color properties)
- Boolean tracks (Bool properties)
- Float array tracks (Array<Float> properties)
- Degrees tracks (rotation with shortest-path interpolation)

To add custom track types:
1. Listen to the `createTrack` event
2. Check the type parameter
3. Create and assign your custom track to result.value

Example extension:
```haxe
app.timelines.onCreateTrack(this, (type, options, result) -> {
    if (type == "MyCustomType") {
        result.value = new MyCustomTrack();
    }
});
```

<div class="see"><strong>See:</strong> <a href="/api-docs/headless/ceramic/Timeline/">Timeline</a>, <a href="/api-docs/headless/ceramic/TimelineTrack/">TimelineTrack</a>, <a href="/api-docs/headless/ceramic/Fragment/">Fragment</a></div>


## Instance Members

<div class="signature field-method has-description" id="emitCreateTrack"><code><span class="field-name">emitCreateTrack</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">result</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Value/" class="type-link">Value</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/TimelineTrack/" class="type-link">TimelineTrack</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/TimelineKeyframe/" class="type-link">TimelineKeyframe</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitCreateTrack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event for creating timeline tracks from field type information.

Listen to this event to add support for custom track types.
The system will check all listeners until one sets result.value.



| Name | Type | Description |
|------|------|-------------|
| `type` | [String](/api-docs/headless/String/) | The field type as a string (e.g., "Float", "Bool", "MyCustomType")  |
| `options` | [Dynamic](/api-docs/headless/Dynamic/) | Optional configuration from track data (e.g., {degrees: true})  |
| `result` | [Value](/api-docs/headless/ceramic/Value/)<[TimelineTrack](/api-docs/headless/ceramic/TimelineTrack/)<[TimelineKeyframe](/api-docs/headless/ceramic/TimelineKeyframe/)>> | Assign the created track to result.value |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitBindTrack"><code><span class="field-name">emitBindTrack</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">track</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/TimelineTrack/" class="type-link">TimelineTrack</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/TimelineKeyframe/" class="type-link">TimelineKeyframe</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">entity</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Entity/" class="type-link">Entity</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitBindTrack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event for binding timeline tracks to entity properties.

Listen to this event to customize how track values are applied
to entity properties. Default implementation uses reflection
via entity.setProperty().



| Name | Type | Description |
|------|------|-------------|
| `type` | [String](/api-docs/headless/String/) | The field type as a string  |
| `options` | [Dynamic](/api-docs/headless/Dynamic/) | Optional configuration (e.g., {copyArray: true})  |
| `track` | [TimelineTrack](/api-docs/headless/ceramic/TimelineTrack/)<[TimelineKeyframe](/api-docs/headless/ceramic/TimelineKeyframe/)> | The track to bind  |
| `entity` | [Entity](/api-docs/headless/ceramic/Entity/) | The entity whose property will be animated  |
| `field` | [String](/api-docs/headless/String/) | The property name to animate |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitCreateKeyframe"><code><span class="field-name">emitCreateKeyframe</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">easing</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">existing</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/TimelineKeyframe/" class="type-link">TimelineKeyframe</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">result</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Value/" class="type-link">Value</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/TimelineKeyframe/" class="type-link">TimelineKeyframe</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitCreateKeyframe"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event for creating timeline keyframes from data.

Listen to this event to add support for custom keyframe types.
The system will check all listeners until one sets result.value.

Tip: Reuse the `existing` keyframe when possible to reduce allocations.



| Name | Type | Description |
|------|------|-------------|
| `type` | [String](/api-docs/headless/String/) | The field type as a string  |
| `options` | [Dynamic](/api-docs/headless/Dynamic/) | Optional configuration  |
| `value` | [Dynamic](/api-docs/headless/Dynamic/) | The keyframe value (type depends on field type)  |
| `index` | [Int](/api-docs/headless/Int/) | The frame index (time position)  |
| `easing` | Anonymous | The easing function for interpolation  |
| `existing` | [Null](/api-docs/headless/Null/)<[TimelineKeyframe](/api-docs/headless/ceramic/TimelineKeyframe/)> | Existing keyframe at this index (can be reused)  |
| `result` | [Value](/api-docs/headless/ceramic/Value/)<[TimelineKeyframe](/api-docs/headless/ceramic/TimelineKeyframe/)> | Assign the created/updated keyframe to result.value |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new Timelines system instance.
Automatically registers default handlers for built-in track types.

## Private Members

<div class="signature field-method no-description" id="handleCreateTrack"><code><span class="field-name">handleCreateTrack</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">result</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Value/" class="type-link">Value</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/TimelineTrack/" class="type-link">TimelineTrack</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/TimelineKeyframe/" class="type-link">TimelineKeyframe</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleCreateTrack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `type` | [String](/api-docs/headless/String/) |
| `options` | [Dynamic](/api-docs/headless/Dynamic/) |
| `result` | [Value](/api-docs/headless/ceramic/Value/)<[TimelineTrack](/api-docs/headless/ceramic/TimelineTrack/)<[TimelineKeyframe](/api-docs/headless/ceramic/TimelineKeyframe/)>> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleBindTrack"><code><span class="field-name">handleBindTrack</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">track</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/TimelineTrack/" class="type-link">TimelineTrack</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/TimelineKeyframe/" class="type-link">TimelineKeyframe</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">entity</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Entity/" class="type-link">Entity</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleBindTrack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `type` | [String](/api-docs/headless/String/) |
| `options` | [Dynamic](/api-docs/headless/Dynamic/) |
| `track` | [TimelineTrack](/api-docs/headless/ceramic/TimelineTrack/)<[TimelineKeyframe](/api-docs/headless/ceramic/TimelineKeyframe/)> |
| `entity` | [Entity](/api-docs/headless/ceramic/Entity/) |
| `field` | [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleCreateKeyframe"><code><span class="field-name">handleCreateKeyframe</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">easing</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">existing</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/TimelineKeyframe/" class="type-link">TimelineKeyframe</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">result</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Value/" class="type-link">Value</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/TimelineKeyframe/" class="type-link">TimelineKeyframe</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleCreateKeyframe"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `type` | [String](/api-docs/headless/String/) |
| `options` | [Dynamic](/api-docs/headless/Dynamic/) |
| `value` | [Dynamic](/api-docs/headless/Dynamic/) |
| `index` | [Int](/api-docs/headless/Int/) |
| `easing` | Anonymous |
| `existing` | [Null](/api-docs/headless/Null/)<[TimelineKeyframe](/api-docs/headless/ceramic/TimelineKeyframe/)> |
| `result` | [Value](/api-docs/headless/ceramic/Value/)<[TimelineKeyframe](/api-docs/headless/ceramic/TimelineKeyframe/)> |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

