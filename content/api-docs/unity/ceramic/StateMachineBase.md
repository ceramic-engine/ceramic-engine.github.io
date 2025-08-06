---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: StateMachineBase
target: Unity
permalink: api-docs/unity/ceramic/StateMachineBase/
---

# StateMachineBase

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/StateMachineBase.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">Entity</a> → <strong>ceramic.StateMachineBase</strong> (Class) → <a href="/api-docs/unity/ceramic/StateMachineImpl/">StateMachineImpl</a></div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/ceramic/Component/">Component</a>, <a href="/api-docs/unity/tracker/Observable/">tracker.Observable</a></div>

Base class for state machine implementations.

StateMachineBase provides the core functionality for state machines in Ceramic.
It manages state lifecycle, transitions, and integration with the entity system.
This class is typically not used directly - use StateMachine<T> instead.

Features:
- Automatic state updates via StateMachineSystem
- Pausable state execution
- State locking to prevent transitions
- Component interface for entity attachment
- Observable pattern for state change events

The state machine automatically calls:
- exit() on the previous state
- enter() on the new state
- update(delta) on the active state each frame

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/ceramic/StateMachine/">StateMachine</a>, <a href="/api-docs/unity/ceramic/State/">State</a>, <a href="/api-docs/unity/ceramic/StateMachineSystem/">StateMachineSystem</a></div>


## Instance Members

<div class="signature field-var has-description" id="observedDirty"><code><span class="field-name">observedDirty</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#observedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default is `false`, automatically set to `true` when any of this instance's observable variables has changed.

<hr class="field-separator" />

<div class="signature field-var has-description" id="paused"><code><span class="field-name">paused</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#paused"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When set to `true`, the state machine will stop calling `update()` on current state and related.

<hr class="field-separator" />

<div class="signature field-var has-description" id="autoUpdate"><code><span class="field-name">autoUpdate</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#autoUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When set to `true` (default). This state machine will be updated automatically.
If `false`, you'll need to call `update()` manually.

<hr class="field-separator" />

<div class="signature field-var has-description" id="stateDefined"><code><span class="field-name">stateDefined</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#stateDefined"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is `true` if a state has been assigned, `false` otherwise.

<hr class="field-separator" />

<div class="signature field-var has-description" id="nextStateDefined"><code><span class="field-name">nextStateDefined</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#nextStateDefined"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is `true` if a nextState has been assigned, `false` otherwise.

<hr class="field-separator" />

<div class="signature field-var has-description" id="locked"><code><span class="field-name">locked</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#locked"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If set to `true`, changing state will be forbidden and trigger an error.

<hr class="field-separator" />

<div class="signature field-var no-description" id="initializerName"><code><span class="field-name">initializerName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#initializerName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="update"><code><span class="field-name">update</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#update"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the current state.
Called automatically each frame if autoUpdate is true and not paused.


| Name | Type | Description |
|------|------|-------------|
| `delta` | [Float](/api-docs/unity/Float/) | Time elapsed since last update in seconds |

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var has-description" id="NO_STATE"><code><span class="field-name">NO_STATE</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#NO_STATE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A way to assign null state to generic classes and let final target do what is best as a cast

<hr class="field-separator" />

<div class="signature field-var no-description" id="stateInstances"><code><span class="field-name">stateInstances</span><span class="operator">:</span> <a href="/api-docs/unity/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#stateInstances"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="currentStateInstance"><code><span class="field-name">currentStateInstance</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/State/" class="type-link">State</a></code><a class="header-anchor" href="#currentStateInstance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitObservedDirty"><code><span class="field-name">emitObservedDirty</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="#" class="type-link">StateMachineBase</a><span class="operator">,</span> <span class="arg-name">fromSerializedField</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitObservedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when any observable value as changed on this instance.

| Name | Type |
|------|------|
| `instance` | [StateMachineBase](/api-docs/unity/ceramic/StateMachineBase/) |
| `fromSerializedField` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="bindAsComponent"><code><span class="field-name">bindAsComponent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindAsComponent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="setEntity"><code><span class="field-name">setEntity</span><span class="parenthesis">(</span><span class="arg-name">entity</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Entity/" class="type-link">Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setEntity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `entity` | [Entity](/api-docs/unity/ceramic/Entity/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getEntity"><code><span class="field-name">getEntity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Entity/" class="type-link">Entity</a></code><a class="header-anchor" href="#getEntity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Entity](/api-docs/unity/ceramic/Entity/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | ceramic.macros.ComponentMacro.build() |
| `:autoBuild` | ceramic.macros.ComponentMacro.build() |
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

