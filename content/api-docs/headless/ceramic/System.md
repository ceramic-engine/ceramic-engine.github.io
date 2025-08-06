---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: System
target: Headless
permalink: api-docs/headless/ceramic/System/
---

# System

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/System.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/ceramic/Entity/">Entity</a> → <strong>ceramic.System</strong> (Class) → <a href="/api-docs/headless/ceramic/ArcadeSystem/">ArcadeSystem</a>, <a href="/api-docs/headless/ceramic/NapeSystem/">NapeSystem</a>, <a href="/api-docs/headless/ceramic/SceneSystem/">SceneSystem</a>, <a href="/api-docs/headless/ceramic/SpineSystem/">SpineSystem</a>, <a href="/api-docs/headless/ceramic/SpriteSystem/">SpriteSystem</a>, <a href="/api-docs/headless/ceramic/StateMachineSystem/">StateMachineSystem</a>, <a href="/api-docs/headless/ceramic/ViewSystem/">ViewSystem</a>, <a href="/api-docs/headless/elements/FieldSystem/">elements.FieldSystem</a>, <a href="/api-docs/headless/elements/ImSystem/">elements.ImSystem</a></div>

A `System` is an object assigned to app lifecycle and used to
do some work such as dispatching events or manipulating entities.
Systems can be ordered with `order` properties

Systems are the backbone of Ceramic's architecture, providing a way to
organize game logic into modular, reusable components that integrate
with the application lifecycle.

Key features:
- Two-phase update cycle (earlyUpdate and lateUpdate)
- Automatic ordering via earlyUpdateOrder and lateUpdateOrder
- Named systems for easy retrieval
- Automatic registration with app.systems
- Events for update lifecycle hooks

To create a system:
1. Extend the System class
2. Override earlyUpdate() and/or lateUpdate() methods
3. Set appropriate update orders
4. The system auto-registers on creation

Example usage:
```haxe
class PhysicsSystem extends System {
    public function new() {
        super();
        name = "physics";
        earlyUpdateOrder = 100;
    }

    override function earlyUpdate(delta:Float) {
        // Update physics simulation
    }
}

// Create the system (auto-registers)
var physics = new PhysicsSystem();

// Later, retrieve it by name
var physics = app.systems.get("physics");
```

<div class="see"><strong>See:</strong> <a href="/api-docs/headless/ceramic/Systems/">Systems</a>, <a href="/api-docs/headless/ceramic/App/">App</a></div>


## Instance Members

<div class="signature field-var has-description" id="name"><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

System name.
Useful to retrieve a system afterwards

<hr class="field-separator" />

<div class="signature field-var has-description" id="autoUpdate"><code><span class="field-name">autoUpdate</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#autoUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When set to `true` (default). This system will be updated automatically.
If `false`, you'll need to call `earlyUpdate()` and `lateUpdate()` manually.

<hr class="field-separator" />

<div class="signature field-var has-description" id="earlyUpdateOrder"><code><span class="field-name">earlyUpdateOrder</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#earlyUpdateOrder"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Order of earlyUpdate execution.
Given two systems, a system with a lower `earlyUpdateOrder` value will have
it's `earlyUpdate()` method called before another system's `earlyUpdate()`
method with a higher `order` value.

<hr class="field-separator" />

<div class="signature field-var has-description" id="lateUpdateOrder"><code><span class="field-name">lateUpdateOrder</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lateUpdateOrder"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Order of lateUpdate execution.
Given two systems, a system with a lower `lateUpdateOrder` value will have
it's `lateUpdate()` method called before another system's `lateUpdate()`
method with a higher `order` value.

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-method has-description" id="emitBeginEarlyUpdate"><code><span class="field-name">emitBeginEarlyUpdate</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitBeginEarlyUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

beginEarlyUpdate event

| Name | Type |
|------|------|
| `delta` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitEndEarlyUpdate"><code><span class="field-name">emitEndEarlyUpdate</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitEndEarlyUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

endEarlyUpdate event

| Name | Type |
|------|------|
| `delta` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitBeginLateUpdate"><code><span class="field-name">emitBeginLateUpdate</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitBeginLateUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

beginLateUpdate event

| Name | Type |
|------|------|
| `delta` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitEndLateUpdate"><code><span class="field-name">emitEndLateUpdate</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitEndLateUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

endLateUpdate event

| Name | Type |
|------|------|
| `delta` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="earlyUpdate"><code><span class="field-name">earlyUpdate</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#earlyUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Method automatically called right before app's `update` event.
Override this method to implement system logic that needs to run
before regular entity updates.


| Name | Type | Description |
|------|------|-------------|
| `delta` | [Float](/api-docs/headless/Float/) | Time elapsed since last frame in seconds |

<hr class="field-separator" />

<div class="signature field-method has-description" id="lateUpdate"><code><span class="field-name">lateUpdate</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#lateUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Method automatically called right after app's `update` event.
Override this method to implement system logic that needs to run
after regular entity updates.


| Name | Type | Description |
|------|------|-------------|
| `delta` | [Float](/api-docs/headless/Float/) | Time elapsed since last frame in seconds |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:access` | ceramic.Systems |
| `:allow` | ceramic.Systems |

