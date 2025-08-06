---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Scene
target: Unity
permalink: api-docs/unity/ceramic/Scene/
---

# Scene

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Scene.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">Entity</a> → <a href="/api-docs/unity/ceramic/Visual/">Visual</a> → <a href="/api-docs/unity/ceramic/Quad/">Quad</a> → <a href="/api-docs/unity/ceramic/Layer/">Layer</a> → <strong>ceramic.Scene</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/ceramic/Preloadable/">Preloadable</a>, <a href="/api-docs/unity/tracker/Observable/">tracker.Observable</a></div>

Base class for creating scenes in Ceramic.

Scenes are self-contained units of gameplay or application screens that manage
their own assets, lifecycle, and update loop. They provide a structured way to
organize different parts of your application (menus, levels, settings, etc.).

Key features:
- Automatic asset loading and management
- Lifecycle management (boot, preload, create, update, destroy)
- Scene transition support
- Pause/resume functionality
- Observable status for tracking scene state

Typical scene lifecycle:
1. `new()` - Constructor
2. `preload()` - Load assets (optional)
3. `create()` - Initialize scene content
4. `update()` - Called every frame while active
5. `destroy()` - Cleanup

Example usage:
```haxe
class GameScene extends Scene {
    override function preload() {
        assets.add(Images.PLAYER);
        assets.add(Sounds.MUSIC);
    }
    override function create() {
        // Initialize game objects
    }
    override function update(delta:Float) {
        // Update game logic
    }
}
```

## Instance Members

<div class="signature field-var has-description" id="observedDirty"><code><span class="field-name">observedDirty</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#observedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default is `false`, automatically set to `true` when any of this instance's observable variables has changed.

<hr class="field-separator" />

<div class="signature field-var has-description" id="assets"><code><span class="field-name">assets</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Assets/" class="type-link">Assets</a></code><a class="header-anchor" href="#assets"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Asset manager for this scene.
Automatically created when accessed for the first time.
Use this to load images, sounds, fonts, etc. during the preload phase.

<hr class="field-separator" />

<div class="signature field-var has-description" id="isRootScene"><code><span class="field-name">isRootScene</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isRootScene"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this scene is a root scene.
Root scenes are managed by the SceneSystem and receive automatic updates.

<hr class="field-separator" />

<div class="signature field-var has-description" id="autoUpdate"><code><span class="field-name">autoUpdate</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#autoUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set to `false` if you want to disable auto update on this scene object.
If auto update is disabled, you become responsible to explicitly call
`update(delta)` at every frame yourself. Use this if you want to have control over
when the animation update is actually happening. Don't use it to pause animation.
(animation can be paused with `paused` property instead)

<hr class="field-separator" />

<div class="signature field-var has-description" id="autoUpdateWhenInactive"><code><span class="field-name">autoUpdateWhenInactive</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#autoUpdateWhenInactive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If `autoUpdate` is enabled, setting `autoUpdateWhenInactive` to `true`
will keep updating the scene even when inactive.

<hr class="field-separator" />

<div class="signature field-var has-description" id="paused"><code><span class="field-name">paused</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#paused"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this scene is paused.
When paused, the update() method will not be called.

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidateStatus"><code><span class="field-name">invalidateStatus</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateStatus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="ready"><code><span class="field-name">ready</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ready"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when the scene's status becomes `READY`

<hr class="field-separator" />

<div class="signature field-method has-description" id="update"><code><span class="field-name">update</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#update"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called at every frame, but only after create() has been called and when the scene is not paused

| Name | Type |
|------|------|
| `delta` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="resize"><code><span class="field-name">resize</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called if the scene size has been changed during this frame.


| Name | Type | Description |
|------|------|-------------|
| `width` | [Float](/api-docs/unity/Float/) | new width  |
| `height` | [Float](/api-docs/unity/Float/) | new height |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fadeIn"><code><span class="field-name">fadeIn</span><span class="parenthesis">(</span><span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#fadeIn"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Play **fade-in** transition of this scene. This is automatically called right after
the scene is ready to use, meaning after `create()` has been called.
Default implementation does nothing and calls `done()` right away.
Override in subclasses to perform custom transitions.


| Name | Type | Description |
|------|------|-------------|
| `done` | Function | Called when the fade-in transition has finished. |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fadeOut"><code><span class="field-name">fadeOut</span><span class="parenthesis">(</span><span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#fadeOut"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Play **fade-out** transition of this scene. This is called manually on secondary scene
but will be called automatically if the scene is the **main scene** and is replaced
by a new scene or simply removed.


| Name | Type | Description |
|------|------|-------------|
| `done` | Function | Called when the fade-out transition has finished. |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isReady"><code><span class="field-name">isReady</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isReady"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Check if the scene is ready (has completed initialization).

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | True if the scene status is READY, false otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="scheduleOnceReady"><code><span class="field-name">scheduleOnceReady</span><span class="parenthesis">(</span><span class="arg-name">owner</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Entity/" class="type-link">Entity</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#scheduleOnceReady"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Schedule a callback to be executed once the scene is ready.
If the scene is already ready, the callback is executed immediately.


| Name | Type | Description |
|------|------|-------------|
| `owner` | [Entity](/api-docs/unity/ceramic/Entity/) | The entity that owns the callback (for proper cleanup)  |
| `callback` | Function | The function to call when the scene is ready  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | True if the callback was scheduled/executed, false if scene is destroyed or in invalid state |

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new scene instance.

## Private Members

<div class="signature field-var has-description" id="status"><code><span class="field-name">status</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/SceneStatus/" class="type-link">SceneStatus</a></code><a class="header-anchor" href="#status"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Observable status of this scene.
Possible values: NONE, PRELOAD, PRELOAD_COMPLETE, CREATE, READY

<hr class="field-separator" />

<div class="signature field-var no-description" id="unobservedStatus"><code><span class="field-name">unobservedStatus</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/SceneStatus/" class="type-link">SceneStatus</a></code><a class="header-anchor" href="#unobservedStatus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitObservedDirty"><code><span class="field-name">emitObservedDirty</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="#" class="type-link">Scene</a><span class="operator">,</span> <span class="arg-name">fromSerializedField</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitObservedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when any observable value as changed on this instance.

| Name | Type |
|------|------|
| `instance` | [Scene](/api-docs/unity/ceramic/Scene/) |
| `fromSerializedField` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitReplace"><code><span class="field-name">emitReplace</span><span class="parenthesis">(</span><span class="arg-name">newScene</span><span class="operator">:</span> <a href="#" class="type-link">Scene</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitReplace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An event to replace this scene with a new one.
By default, this has effect only if our current scene instance was initially assigned
to the scene system, like when using `app.scenes.main = MyScene();`, but you
could implement your own logic by listening to that event in other situations too.

| Name | Type |
|------|------|
| `newScene` | [Scene](/api-docs/unity/ceramic/Scene/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitStatusChange"><code><span class="field-name">emitStatusChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/SceneStatus/" class="type-link">SceneStatus</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/SceneStatus/" class="type-link">SceneStatus</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitStatusChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when status field changes.

| Name | Type |
|------|------|
| `current` | [SceneStatus](/api-docs/unity/ceramic/SceneStatus/) |
| `previous` | [SceneStatus](/api-docs/unity/ceramic/SceneStatus/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="internalCreate"><code><span class="field-name">internalCreate</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#internalCreate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="internalLoad"><code><span class="field-name">internalLoad</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#internalLoad"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="willEmitResize"><code><span class="field-name">willEmitResize</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#willEmitResize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `width` | [Float](/api-docs/unity/Float/) |
| `height` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="preload"><code><span class="field-name">preload</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#preload"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Override this method to configure the scene, add assets to it...
example: `assets.add(Images.SOME_IMAGE);`
Added assets will be loaded automatically

<hr class="field-separator" />

<div class="signature field-method has-description" id="load"><code><span class="field-name">load</span><span class="parenthesis">(</span><span class="arg-name">next</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#load"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Override this method to perform any additional asynchronous loading.
`next()` must be called once the loading has finished so that the scene
can continue its createialization process.


| Name | Type | Description |
|------|------|-------------|
| `next` | Function | The callback to call once asynchronous loading is done |

<hr class="field-separator" />

<div class="signature field-method has-description" id="create"><code><span class="field-name">create</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#create"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called once the scene has finished its loading.
At this point, and after `create()`, `update(delta)` will be called at every frame until the scene gets destroyed

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:allow` | ceramic.SceneSystem |

