---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Fragment
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/Fragment/
---

# Fragment

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Fragment.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-web/ceramic/Visual/">Visual</a> → <a href="/api-docs/clay-web/ceramic/Quad/">Quad</a> → <a href="/api-docs/clay-web/ceramic/Layer/">Layer</a> → <strong>ceramic.Fragment</strong> (Class)</div>

A fragment is a powerful container that manages groups of entities and visuals
loaded from fragment data files (.fragment).

Fragments provide:
- Dynamic entity instantiation from data definitions
- Timeline-based animation support with tracks and keyframes
- Component system integration
- Hierarchical entity management
- Asset loading and dependency management

Fragments are commonly used for:
- UI layouts and screens
- Reusable game objects and prefabs
- Animated sequences and cutscenes
- Data-driven content that needs to be loaded/unloaded dynamically

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/ceramic/FragmentData/">FragmentData</a>, <a href="/api-docs/clay-web/ceramic/FragmentItem/">FragmentItem</a>, <a href="/api-docs/clay-web/ceramic/Timeline/">Timeline</a></div>


## Static Members

<div class="signature field-method has-description" id="cacheData"><code><span class="field-name">cacheData</span><span class="parenthesis">(</span><span class="arg-name">fragmentData</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/FragmentData/" class="type-link">FragmentData</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#cacheData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cache fragment data for later retrieval by ID.
This allows fragments to reference other fragments efficiently.



| Name | Type | Description |
|------|------|-------------|
| `fragmentData` | [FragmentData](/api-docs/clay-web/ceramic/FragmentData/) | The fragment data to cache |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getData"><code><span class="field-name">getData</span><span class="parenthesis">(</span><span class="arg-name">fragmentId</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/FragmentData/" class="type-link">FragmentData</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Retrieve cached fragment data by ID.
The data must have been previously cached with `cacheData()`.



| Name | Type | Description |
|------|------|-------------|
| `fragmentId` | [String](/api-docs/clay-web/String/) | The ID of the fragment data to retrieve  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/clay-web/Null/)<[FragmentData](/api-docs/clay-web/ceramic/FragmentData/)> | The cached fragment data, or null if not found |

## Instance Members

<div class="signature field-var has-description" id="assets"><code><span class="field-name">assets</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Assets/" class="type-link">Assets</a></code><a class="header-anchor" href="#assets"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The asset manager used to load resources referenced by this fragment.
If not provided, the fragment will use the default app assets.

<hr class="field-separator" />

<div class="signature field-var has-description" id="entities"><code><span class="field-name">entities</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/Entity/" class="type-link">Entity</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#entities"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of all entity instances created from fragment items.
This includes all types of entities: visuals, components, and other objects.

<hr class="field-separator" />

<div class="signature field-var has-description" id="items"><code><span class="field-name">items</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/FragmentItem/" class="type-link">FragmentItem</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#items"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of fragment item definitions loaded from fragment data.
Each item describes an entity to be instantiated with its properties.

<hr class="field-separator" />

<div class="signature field-var has-description" id="tracks"><code><span class="field-name">tracks</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/TimelineTrackData/" class="type-link">TimelineTrackData</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#tracks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of timeline track data for animating entity properties.
Each track defines keyframe animations for a specific entity field.

<hr class="field-separator" />

<div class="signature field-var has-description" id="fps"><code><span class="field-name">fps</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#fps"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Frames per second for timeline animations.
Affects the playback speed of all timeline tracks in this fragment.
Default is 30 FPS.

<hr class="field-separator" />

<div class="signature field-var has-description" id="fragmentData"><code><span class="field-name">fragmentData</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/FragmentData/" class="type-link">FragmentData</a></code><a class="header-anchor" href="#fragmentData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The fragment data that defines this fragment's content.
Setting this property will instantiate/update all entities and animations.

<hr class="field-separator" />

<div class="signature field-var has-description" id="resizable"><code><span class="field-name">resizable</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#resizable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this fragment can be resized.
When true, the fragment dimensions can be changed after initialization.

<hr class="field-separator" />

<div class="signature field-var has-description" id="autoUpdateTimeline"><code><span class="field-name">autoUpdateTimeline</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#autoUpdateTimeline"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the timeline should automatically update each frame.
Set to false to manually control timeline playback.
Default is true.

<hr class="field-separator" />

<div class="signature field-var has-description" id="pendingLoads"><code><span class="field-name">pendingLoads</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#pendingLoads"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Number of pending asset loads.
When this reaches 0, the fragment becomes ready.

<hr class="field-separator" />

<div class="signature field-var has-description" id="timeline"><code><span class="field-name">timeline</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Timeline/" class="type-link">Timeline</a></code><a class="header-anchor" href="#timeline"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The timeline instance managing animations for this fragment.
Created automatically when tracks are added.

<hr class="field-separator" />

<div class="signature field-var has-description" id="ready"><code><span class="field-name">ready</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#ready"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the fragment has finished loading all assets and is ready to use.
Becomes true when all pending loads complete.

<hr class="field-separator" />

<div class="signature field-var has-description" id="fragmentComponents"><code><span class="field-name">fragmentComponents</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ReadOnlyMap/" class="type-link">ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-web/ceramic/Component/" class="type-link">Component</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#fragmentComponents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Components defined at the fragment level (not on individual entities).
These are separate from components added via `component()` or the components property.
Setting this property will add/remove/update components as needed.

<hr class="field-separator" />

<div class="signature field-var has-description" id="paused"><code><span class="field-name">paused</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#paused"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the timeline playback is paused.
Setting this to true stops all animations in the fragment.

<hr class="field-separator" />

<div class="signature field-method has-description" id="scheduleWhenReady"><code><span class="field-name">scheduleWhenReady</span><span class="parenthesis">(</span><span class="arg-name">owner</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Entity/" class="type-link">Entity</a><span class="operator">,</span> <span class="arg-name">cb</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#scheduleWhenReady"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Schedule a callback to be executed when the fragment is ready.
If already ready, the callback is executed immediately.



| Name | Type | Description |
|------|------|-------------|
| `owner` | [Entity](/api-docs/clay-web/ceramic/Entity/) | The entity that owns this callback (for cleanup)  |
| `cb` | Function | The callback to execute when ready |

<hr class="field-separator" />

<div class="signature field-method has-description" id="putItem"><code><span class="field-name">putItem</span><span class="parenthesis">(</span><span class="arg-name">item</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/FragmentItem/" class="type-link">FragmentItem</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Entity/" class="type-link">Entity</a></code><a class="header-anchor" href="#putItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create or update an entity from a fragment item definition.
If an entity with the same ID already exists, it will be updated.
Otherwise, a new entity is created and added to the fragment.



| Name | Type | Description |
|------|------|-------------|
| `item` | [FragmentItem](/api-docs/clay-web/ceramic/FragmentItem/) | The fragment item definition  |

| Returns | Description |
|---------|-------------|
| [Entity](/api-docs/clay-web/ceramic/Entity/) | The created or updated entity instance |

<hr class="field-separator" />

<div class="signature field-method has-description" id="get"><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">itemId</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Entity/" class="type-link">Entity</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get an entity by its ID.



| Name | Type | Description |
|------|------|-------------|
| `itemId` | [String](/api-docs/clay-web/String/) | The ID of the entity to retrieve  |

| Returns | Description |
|---------|-------------|
| [Entity](/api-docs/clay-web/ceramic/Entity/) | The entity instance, or null if not found |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getItem"><code><span class="field-name">getItem</span><span class="parenthesis">(</span><span class="arg-name">itemId</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/FragmentItem/" class="type-link">FragmentItem</a></code><a class="header-anchor" href="#getItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get a fragment item definition by ID.



| Name | Type | Description |
|------|------|-------------|
| `itemId` | [String](/api-docs/clay-web/String/) | The ID of the item to retrieve  |

| Returns | Description |
|---------|-------------|
| [FragmentItem](/api-docs/clay-web/ceramic/FragmentItem/) | The fragment item definition, or null if not found |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getItemByName"><code><span class="field-name">getItemByName</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/FragmentItem/" class="type-link">FragmentItem</a></code><a class="header-anchor" href="#getItemByName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get a fragment item definition by name.



| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/clay-web/String/) | The name of the item to retrieve  |

| Returns | Description |
|---------|-------------|
| [FragmentItem](/api-docs/clay-web/ceramic/FragmentItem/) | The fragment item definition, or null if not found |

<hr class="field-separator" />

<div class="signature field-method has-description" id="typeOfItem"><code><span class="field-name">typeOfItem</span><span class="parenthesis">(</span><span class="arg-name">itemId</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#typeOfItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get the entity class name for a fragment item.



| Name | Type | Description |
|------|------|-------------|
| `itemId` | [String](/api-docs/clay-web/String/) | The ID of the item  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-web/String/) | The fully qualified class name of the entity type |

<hr class="field-separator" />

<div class="signature field-method has-description" id="removeItem"><code><span class="field-name">removeItem</span><span class="parenthesis">(</span><span class="arg-name">itemId</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Remove an entity and its item definition from the fragment.
The entity will be destroyed.



| Name | Type | Description |
|------|------|-------------|
| `itemId` | [String](/api-docs/clay-web/String/) | The ID of the item to remove |

<hr class="field-separator" />

<div class="signature field-method has-description" id="removeAllItems"><code><span class="field-name">removeAllItems</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeAllItems"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Remove all entities and item definitions from the fragment.
All entities will be destroyed.

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="putTrack"><code><span class="field-name">putTrack</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">entityType</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">track</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TimelineTrackData/" class="type-link">TimelineTrackData</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#putTrack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create or update a timeline track for animating entity properties.
The track will be added to the fragment's timeline, creating it if needed.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `entityType` | [String](/api-docs/clay-web/String/) | *(optional)* | Optional entity type. If not provided, will be resolved from the entity ID.  |
| `track` | [TimelineTrackData](/api-docs/clay-web/ceramic/TimelineTrackData/) | | The track data containing entity ID, field name, and keyframes |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getTrack"><code><span class="field-name">getTrack</span><span class="parenthesis">(</span><span class="arg-name">entity</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TimelineTrackData/" class="type-link">TimelineTrackData</a></code><a class="header-anchor" href="#getTrack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get timeline track data for a specific entity field.



| Name | Type | Description |
|------|------|-------------|
| `entity` | [String](/api-docs/clay-web/String/) | The entity ID  |
| `field` | [String](/api-docs/clay-web/String/) | The field name being animated  |

| Returns | Description |
|---------|-------------|
| [TimelineTrackData](/api-docs/clay-web/ceramic/TimelineTrackData/) | The track data, or null if not found |

<hr class="field-separator" />

<div class="signature field-method has-description" id="removeTrack"><code><span class="field-name">removeTrack</span><span class="parenthesis">(</span><span class="arg-name">entity</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeTrack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Remove a timeline track for a specific entity field.



| Name | Type | Description |
|------|------|-------------|
| `entity` | [String](/api-docs/clay-web/String/) | The entity ID  |
| `field` | [String](/api-docs/clay-web/String/) | The field name being animated |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createTimelineIfNeeded"><code><span class="field-name">createTimelineIfNeeded</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#createTimelineIfNeeded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create the timeline instance if it doesn't exist yet.
Called automatically when tracks or labels are added.

<hr class="field-separator" />

<div class="signature field-method has-description" id="putLabel"><code><span class="field-name">putLabel</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#putLabel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create or update a timeline label at a specific position.
Labels can be used to mark important points in the animation.



| Name | Type | Description |
|------|------|-------------|
| `index` | [Int](/api-docs/clay-web/Int/) | The timeline position (frame index)  |
| `name` | [String](/api-docs/clay-web/String/) | The label name |

<hr class="field-separator" />

<div class="signature field-method has-description" id="indexOfLabel"><code><span class="field-name">indexOfLabel</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#indexOfLabel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get the timeline position of a label by name.



| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/clay-web/String/) | The label name  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-web/Int/) | The frame index, or -1 if the label doesn't exist |

<hr class="field-separator" />

<div class="signature field-method has-description" id="labelAtIndex"><code><span class="field-name">labelAtIndex</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#labelAtIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get the label name at a specific timeline position.



| Name | Type | Description |
|------|------|-------------|
| `index` | [Int](/api-docs/clay-web/Int/) | The frame index  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-web/String/) | The label name, or null if no label exists at that position |

<hr class="field-separator" />

<div class="signature field-method has-description" id="removeLabel"><code><span class="field-name">removeLabel</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeLabel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Remove a timeline label by name.



| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/clay-web/String/) | The label name to remove |

<hr class="field-separator" />

<div class="signature field-method has-description" id="removeLabelAtIndex"><code><span class="field-name">removeLabelAtIndex</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeLabelAtIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Remove a timeline label at a specific position.



| Name | Type | Description |
|------|------|-------------|
| `index` | [Int](/api-docs/clay-web/Int/) | The frame index where the label should be removed |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">assets</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Assets/" class="type-link">Assets</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new fragment instance.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `assets` | [Assets](/api-docs/clay-web/ceramic/Assets/) | *(optional)* | Optional asset manager for loading resources. If not provided, uses the default app assets. |

## Private Members

<div class="signature field-var no-description" id="basicTypes"><code><span class="field-name">basicTypes</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#basicTypes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="cachedFragmentData"><code><span class="field-name">cachedFragmentData</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#cachedFragmentData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitReady"><code><span class="field-name">emitReady</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitReady"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event emitted when the fragment becomes ready.
All assets are loaded and entities are instantiated.

<hr class="field-separator" />

<div class="signature field-method no-description" id="willEmitReady"><code><span class="field-name">willEmitReady</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#willEmitReady"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="typeOfItemField"><code><span class="field-name">typeOfItemField</span><span class="parenthesis">(</span><span class="arg-name">item</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/FragmentItem/" class="type-link">FragmentItem</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#typeOfItemField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `item` | [FragmentItem](/api-docs/clay-web/ceramic/FragmentItem/) |
| `field` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="putItemField"><code><span class="field-name">putItemField</span><span class="parenthesis">(</span><span class="arg-name">isFragment</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">item</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/FragmentItem/" class="type-link">FragmentItem</a><span class="operator">,</span> <span class="arg-name">instance</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Entity/" class="type-link">Entity</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">converter</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ConvertField/" class="type-link">ConvertField</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#putItemField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `isFragment` | [Bool](/api-docs/clay-web/Bool/) |
| `item` | [FragmentItem](/api-docs/clay-web/ceramic/FragmentItem/) |
| `instance` | [Entity](/api-docs/clay-web/ceramic/Entity/) |
| `field` | [String](/api-docs/clay-web/String/) |
| `value` | [Dynamic](/api-docs/clay-web/Dynamic/) |
| `converter` | [ConvertField](/api-docs/clay-web/ceramic/ConvertField/)<[Dynamic](/api-docs/clay-web/Dynamic/), [Dynamic](/api-docs/clay-web/Dynamic/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isManagedComponent"><code><span class="field-name">isManagedComponent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#isManagedComponent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="putTracksForItem"><code><span class="field-name">putTracksForItem</span><span class="parenthesis">(</span><span class="arg-name">itemId</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#putTracksForItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `itemId` | [String](/api-docs/clay-web/String/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |

