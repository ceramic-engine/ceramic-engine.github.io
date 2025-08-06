---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Entity
target: Headless
permalink: api-docs/headless/ceramic/Entity/
---

# Entity

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Entity.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.Entity</strong> (Class) → <a href="/api-docs/headless/Project/">Project</a>, <a href="/api-docs/headless/ceramic/App/">App</a>, <a href="/api-docs/headless/ceramic/AsepriteData/">AsepriteData</a>, <a href="/api-docs/headless/ceramic/Asset/">Asset</a>, <a href="/api-docs/headless/ceramic/Assets/">Assets</a>, <a href="/api-docs/headless/ceramic/Audio/">Audio</a>, <a href="/api-docs/headless/ceramic/AudioFilter/">AudioFilter</a>, <a href="/api-docs/headless/ceramic/AudioMixer/">AudioMixer</a>, <a href="/api-docs/headless/ceramic/AutoTiler/">AutoTiler</a>, <a href="/api-docs/headless/ceramic/BackgroundQueue/">BackgroundQueue</a>, <a href="/api-docs/headless/ceramic/BitmapFont/">BitmapFont</a>, <a href="/api-docs/headless/ceramic/Camera/">Camera</a>, <a href="/api-docs/headless/ceramic/Click/">Click</a>, <a href="/api-docs/headless/ceramic/DoubleClick/">DoubleClick</a>, <a href="/api-docs/headless/ceramic/DynamicData/">DynamicData</a>, <a href="/api-docs/headless/ceramic/EditText/">EditText</a>, <a href="/api-docs/headless/ceramic/FileWatcher/">FileWatcher</a>, <a href="/api-docs/headless/ceramic/GifCapture/">GifCapture</a>, <a href="/api-docs/headless/ceramic/Group/">Group</a>, <a href="/api-docs/headless/ceramic/Input/">Input</a>, <a href="/api-docs/headless/ceramic/KeyBinding/">KeyBinding</a>, <a href="/api-docs/headless/ceramic/KeyBindings/">KeyBindings</a>, <a href="/api-docs/headless/ceramic/LdtkData/">LdtkData</a>, <a href="/api-docs/headless/ceramic/Logger/">Logger</a>, <a href="/api-docs/headless/ceramic/LongPress/">LongPress</a>, <a href="/api-docs/headless/ceramic/ParticleEmitter/">ParticleEmitter</a>, <a href="/api-docs/headless/ceramic/Renderer/">Renderer</a>, <a href="/api-docs/headless/ceramic/Screen/">Screen</a>, <a href="/api-docs/headless/ceramic/Script/">Script</a>, <a href="/api-docs/headless/ceramic/SelectText/">SelectText</a>, <a href="/api-docs/headless/ceramic/Shader/">Shader</a>, <a href="/api-docs/headless/ceramic/Sound/">Sound</a>, <a href="/api-docs/headless/ceramic/SpineData/">SpineData</a>, <a href="/api-docs/headless/ceramic/SpineMontage/">SpineMontage</a>, <a href="/api-docs/headless/ceramic/State/">State</a>, <a href="/api-docs/headless/ceramic/StateMachineBase/">StateMachineBase</a>, <a href="/api-docs/headless/ceramic/System/">System</a>, <a href="/api-docs/headless/ceramic/Systems/">Systems</a>, <a href="/api-docs/headless/ceramic/Task/">Task</a>, <a href="/api-docs/headless/ceramic/Texture/">Texture</a>, <a href="/api-docs/headless/ceramic/TextureAtlas/">TextureAtlas</a>, <a href="/api-docs/headless/ceramic/TextureAtlasPacker/">TextureAtlasPacker</a>, <a href="/api-docs/headless/ceramic/TextureTilePacker/">TextureTilePacker</a>, <a href="/api-docs/headless/ceramic/TilemapEditor/">TilemapEditor</a>, <a href="/api-docs/headless/ceramic/Timeline/">Timeline</a>, <a href="/api-docs/headless/ceramic/TimelineTrack/">TimelineTrack</a>, <a href="/api-docs/headless/ceramic/Timelines/">Timelines</a>, <a href="/api-docs/headless/ceramic/Tween/">Tween</a>, <a href="/api-docs/headless/ceramic/VisibleBounds/">VisibleBounds</a>, <a href="/api-docs/headless/ceramic/Visual/">Visual</a>, <a href="/api-docs/headless/ceramic/VisualArcadePhysics/">VisualArcadePhysics</a>, <a href="/api-docs/headless/ceramic/VisualNapePhysics/">VisualNapePhysics</a>, <a href="/api-docs/headless/ceramic/VisualTransition/">VisualTransition</a>, <a href="/api-docs/headless/ceramic/WatchDirectory/">WatchDirectory</a>, <a href="/api-docs/headless/ceramic/_Spine/DispatchSlotInfo/">ceramic._Spine.DispatchSlotInfo</a>, <a href="/api-docs/headless/elements/Context/">elements.Context</a>, <a href="/api-docs/headless/elements/DragDrop/">elements.DragDrop</a>, <a href="/api-docs/headless/elements/ItalicText/">elements.ItalicText</a>, <a href="/api-docs/headless/elements/TabFocus/">elements.TabFocus</a>, <a href="/api-docs/headless/tracker/Autorun/">tracker.Autorun</a>, <a href="/api-docs/headless/tracker/DynamicEvents/">tracker.DynamicEvents</a>, <a href="/api-docs/headless/tracker/History/">tracker.History</a>, <a href="/api-docs/headless/tracker/Model/">tracker.Model</a>, <a href="/api-docs/headless/tracker/SerializeModel/">tracker.SerializeModel</a>, <a href="/api-docs/headless/tracker/ShareModel/">tracker.ShareModel</a></div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/headless/ceramic/Lazy/">Lazy</a>, <a href="/api-docs/headless/tracker/Events/">tracker.Events</a></div>

Base class for all entities in the Ceramic framework.

An Entity is the fundamental building block of Ceramic, providing lifecycle management,
event handling, component system support, and automatic memory management.
All game objects, visuals, and systems extend from this class.

Key features:
- Automatic lifecycle management with destroy() and dispose()
- Component-based architecture support
- Event system integration
- Autorun support for reactive programming
- Tween integration for animations
- Memory leak protection with proper cleanup

## Instance Members

<div class="signature field-var has-description" id="id"><code><span class="field-name">id</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#id"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optional identifier for this entity.
Can be used to retrieve specific entities by their ID.

<hr class="field-separator" />

<div class="signature field-var has-description" id="destroyed"><code><span class="field-name">destroyed</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#destroyed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this entity has been destroyed.
Once destroyed, an entity should not be used anymore.

<hr class="field-separator" />

<div class="signature field-var has-description" id="disposed"><code><span class="field-name">disposed</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#disposed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this entity has been marked for disposal.
Disposed entities will be destroyed at the end of the current frame.

<hr class="field-separator" />

<div class="signature field-var has-description" id="autoruns"><code><span class="field-name">autoruns</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/tracker/Autorun/" class="type-link">tracker.Autorun</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#autoruns"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of Autorun instances associated with this entity.
Autoruns are automatically destroyed when the entity is destroyed.

<hr class="field-separator" />

<div class="signature field-var has-description" id="components"><code><span class="field-name">components</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/ReadOnlyMap/" class="type-link">ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/headless/ceramic/Component/" class="type-link">Component</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#components"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Public components mapping containing all components attached to this entity.
Components can be created using the component() method or via macro-based component fields.
Setting this property will replace all existing components.

<hr class="field-separator" />

<div class="signature field-method has-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Destroy this entity. This method is automatically protected from duplicate calls. That means
calling multiple times an entity's `destroy()` method will run the destroy code only one time.
As soon as `destroy()` is called, the entity is marked `destroyed=true`, even when calling `destroy()`
method on a subclass (a macro is inserting a code to mark the object
as destroyed at the beginning of every `destroy()` override function.

<hr class="field-separator" />

<div class="signature field-method has-description" id="dispose"><code><span class="field-name">dispose</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#dispose"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Schedules destroy at the end of the current frame.
This is useful to avoid destroying entities during iteration or event handling.
The entity will be marked as disposed immediately but actual destruction happens later.

<hr class="field-separator" />

<div class="signature field-method has-description" id="unbindEvents"><code><span class="field-name">unbindEvents</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unbindEvents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Remove all event handlers from this entity.
This method is automatically called during destruction to prevent memory leaks.
Subclasses will have this method automatically filled by the Events macro.

<hr class="field-separator" />

<div class="signature field-method has-description" id="autorun"><code><span class="field-name">autorun</span><span class="parenthesis">(</span><span class="arg-name">run</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">afterRun</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/tracker/Autorun/" class="type-link">tracker.Autorun</a></code><a class="header-anchor" href="#autorun"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new `Autorun` instance with the given callback associated with the current entity.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `run` | Function | | The run callback  |
| `afterRun` | Function | *(optional)* |  |

| Returns | Description |
|---------|-------------|
| [tracker.Autorun](/api-docs/headless/tracker/Autorun/) | The autorun instance |

<hr class="field-separator" />

<div class="signature field-method has-description" id="tween"><code><span class="field-name">tween</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">easing</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">duration</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">fromValue</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">toValue</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">update</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#tween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Start a tween animation associated with this entity.
The tween will automatically be destroyed when this entity is destroyed.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `easing` | Anonymous | *(optional)* | The easing function to use for the animation  |
| `duration` | [Float](/api-docs/headless/Float/) | | The duration of the tween in seconds  |
| `fromValue` | [Float](/api-docs/headless/Float/) | | The starting value of the tween  |
| `toValue` | [Float](/api-docs/headless/Float/) | | The ending value of the tween  |
| `update` | Function | | Callback function called on each frame with current value and progress (0-1)  |

| Returns | Description |
|---------|-------------|
| [Tween](/api-docs/headless/ceramic/Tween/) | The created Tween instance for chaining or manual control |

<hr class="field-separator" />

<div class="signature field-method has-description" id="eagerTween"><code><span class="field-name">eagerTween</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">easing</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">duration</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">fromValue</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">toValue</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">update</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#eagerTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Start an eager **tween** associated with this entity. This is
the same as a regular tween, except that it will start updating
itself using current frame's delta time instead of next frame like in a regular tween.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `easing` | Anonymous | *(optional)* | The easing to use  |
| `duration` | [Float](/api-docs/headless/Float/) | | The duration of the tween  |
| `fromValue` | [Float](/api-docs/headless/Float/) | | The start value of the tween  |
| `toValue` | [Float](/api-docs/headless/Float/) | | The end value of the tween  |
| `update` | Function | | An update function called at each iteration of the tween  |

| Returns | Description |
|---------|-------------|
| [Tween](/api-docs/headless/ceramic/Tween/) | The instance of the created `Tween` object |

<hr class="field-separator" />

<div class="signature field-method has-description" id="className"><code><span class="field-name">className</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#className"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get the class name of this entity without the package path.

| Returns | Description |
|---------|-------------|
| [String](/api-docs/headless/String/) | The simple class name (e.g., "Entity" instead of "ceramic.Entity") |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clearComponents"><code><span class="field-name">clearComponents</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearComponents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Remove and destroy all components attached to this entity.
This is automatically called during entity destruction.

<hr class="field-separator" />

<div class="signature field-method has-description" id="component"><code><span class="field-name">component</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">component</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">component.C</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">hasField</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">component.C</span></code><a class="header-anchor" href="#component"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get or set a component on this entity.

When called with just a name, retrieves the component with that name.
When called with a component instance, attaches it to this entity.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `name` | [String](/api-docs/headless/String/) | *(optional)* | The name to identify the component. If null, uses the component's class name  |
| `component` | [Null](/api-docs/headless/Null/)<component.C> | *(optional)* | The component instance to attach. If null, retrieves existing component  |
| `hasField` | [Bool](/api-docs/headless/Bool/) | `false` | Internal flag indicating if this component has a corresponding field  |

| Returns | Description |
|---------|-------------|
| component.C | The component instance (either retrieved or newly attached) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="hasComponent"><code><span class="field-name">hasComponent</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasComponent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Check if this entity has a component with the given name.


| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/headless/String/) | The name of the component to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if the component exists, false otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="removeComponent"><code><span class="field-name">removeComponent</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeComponent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Remove and destroy a component from this entity.


| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/headless/String/) | The name of the component to remove |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new entity.

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="scriptContent"><div class="plugin-name">script</div><code><span class="field-name">scriptContent</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/ScriptContent/" class="type-link">ScriptContent</a></code><a class="header-anchor" href="#scriptContent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="script"><div class="plugin-name">script</div><code><span class="field-name">script</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Script/" class="type-link">Script</a></code><a class="header-anchor" href="#script"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-method has-description" id="emitDispose"><code><span class="field-name">emitDispose</span><span class="parenthesis">(</span><span class="arg-name">entity</span><span class="operator">:</span> <a href="#" class="type-link">Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitDispose"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

dispose event

| Name | Type |
|------|------|
| `entity` | [Entity](/api-docs/headless/ceramic/Entity/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitDestroy"><code><span class="field-name">emitDestroy</span><span class="parenthesis">(</span><span class="arg-name">entity</span><span class="operator">:</span> <a href="#" class="type-link">Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitDestroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

destroy event

| Name | Type |
|------|------|
| `entity` | [Entity](/api-docs/headless/ceramic/Entity/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="checkAutoruns"><code><span class="field-name">checkAutoruns</span><span class="parenthesis">(</span><span class="arg-name">_</span><span class="operator">:</span> <a href="#" class="type-link">Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#checkAutoruns"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `_` | [Entity](/api-docs/headless/ceramic/Entity/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

String representation of this entity.

| Returns | Description |
|---------|-------------|
| [String](/api-docs/headless/String/) | String in format "ClassName" or "ClassName(id)" if id is set |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |

