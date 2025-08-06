---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: StateMachineImpl
target: Unity
permalink: api-docs/unity/ceramic/StateMachineImpl/
---

# StateMachineImpl

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/StateMachineImpl.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">Entity</a> → <a href="/api-docs/unity/ceramic/StateMachineBase/">StateMachineBase</a> → <strong>ceramic.StateMachineImpl</strong> (Class) → <a href="/api-docs/unity/ceramic/StateMachine/">StateMachine</a>, <a href="/api-docs/unity/ceramic/StateMachineComponent/">StateMachineComponent</a></div>

Implementation class for StateMachine functionality.

StateMachineImpl provides the core implementation for type-safe state machines.
It handles state transitions, lifecycle management, and state instance mapping.
This class is typically not used directly - use StateMachine<T> instead.

Features:
- Type-safe state management with generic type T
- Automatic enter/exit/update lifecycle calls
- State instance mapping and lifecycle management
- Observable state changes
- Support for scheduling callbacks on state transitions

The generic parameter T can be:
- String for string-based states
- Enum for type-safe enum states
- Any other type with proper toString() implementation

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/ceramic/StateMachine/">StateMachine</a>, <a href="/api-docs/unity/ceramic/StateMachineBase/">StateMachineBase</a>, <a href="/api-docs/unity/ceramic/State/">State</a></div>


## Instance Members

<div class="signature field-var has-description" id="state"><code><span class="field-name">state</span><span class="operator">:</span> <span class="type-name">ceramic.StateMachineImpl.T</span></code><a class="header-anchor" href="#state"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The current state

<hr class="field-separator" />

<div class="signature field-var has-description" id="nextState"><code><span class="field-name">nextState</span><span class="operator">:</span> <span class="type-name">ceramic.StateMachineImpl.T</span></code><a class="header-anchor" href="#nextState"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When transitioning from one state to another,
this will be set to the next incoming state

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidateState"><code><span class="field-name">invalidateState</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateState"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="set"><code><span class="field-name">set</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.StateMachineImpl.T</span><span class="operator">,</span> <span class="arg-name">stateInstance</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/State/" class="type-link">State</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#set"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Associates a state instance with a state key.


| Name | Type | Description |
|------|------|-------------|
| `key` | ceramic.StateMachineImpl.T | The state identifier (string, enum value, etc.)  |
| `stateInstance` | [State](/api-docs/unity/ceramic/State/) | The State instance to use for this state |

<hr class="field-separator" />

<div class="signature field-method has-description" id="get"><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.StateMachineImpl.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/State/" class="type-link">State</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the state instance associated with a state key.


| Name | Type | Description |
|------|------|-------------|
| `key` | ceramic.StateMachineImpl.T | The state identifier  |

| Returns | Description |
|---------|-------------|
| [State](/api-docs/unity/ceramic/State/) | The State instance, or null if not found |

<hr class="field-separator" />

<div class="signature field-method no-description" id="update"><code><span class="field-name">update</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#update"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `delta` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="scheduleOnceEnterState"><code><span class="field-name">scheduleOnceEnterState</span><span class="parenthesis">(</span><span class="arg-name">owner</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Entity/" class="type-link">Entity</a><span class="operator">,</span> <span class="arg-name">state</span><span class="operator">:</span> <span class="type-name">ceramic.StateMachineImpl.T</span><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#scheduleOnceEnterState"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Schedules a callback to be called once when entering a specific state.


| Name | Type | Description |
|------|------|-------------|
| `owner` | [Entity](/api-docs/unity/ceramic/Entity/) | The entity that owns this callback (for cleanup)  |
| `state` | ceramic.StateMachineImpl.T | The state to watch for  |
| `callback` | Function | The function to call when entering the state |

<hr class="field-separator" />

<div class="signature field-method has-description" id="scheduleOnceExitState"><code><span class="field-name">scheduleOnceExitState</span><span class="parenthesis">(</span><span class="arg-name">owner</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Entity/" class="type-link">Entity</a><span class="operator">,</span> <span class="arg-name">state</span><span class="operator">:</span> <span class="type-name">ceramic.StateMachineImpl.T</span><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#scheduleOnceExitState"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Schedules a callback to be called once when exiting a specific state.


| Name | Type | Description |
|------|------|-------------|
| `owner` | [Entity](/api-docs/unity/ceramic/Entity/) | The entity that owns this callback (for cleanup)  |
| `state` | ceramic.StateMachineImpl.T | The state to watch for  |
| `callback` | Function | The function to call when exiting the state |

## Private Members

<div class="signature field-var no-description" id="unobservedState"><code><span class="field-name">unobservedState</span><span class="operator">:</span> <span class="type-name">ceramic.StateMachineImpl.T</span></code><a class="header-anchor" href="#unobservedState"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitStateChange"><code><span class="field-name">emitStateChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <span class="type-name">ceramic.StateMachineImpl.T</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <span class="type-name">ceramic.StateMachineImpl.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitStateChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when state field changes.

| Name | Type |
|------|------|
| `current` | ceramic.StateMachineImpl.T |
| `previous` | ceramic.StateMachineImpl.T |

<hr class="field-separator" />

<div class="signature field-method no-description" id="computeStateDefined"><code><span class="field-name">computeStateDefined</span><span class="parenthesis">(</span><span class="arg-name">state</span><span class="operator">:</span> <span class="type-name">ceramic.StateMachineImpl.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#computeStateDefined"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `state` | ceramic.StateMachineImpl.T |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="keyToString"><code><span class="field-name">keyToString</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.StateMachineImpl.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#keyToString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | ceramic.StateMachineImpl.T |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |
| `:build` | ceramic.macros.ComponentMacro.build() |
| `:autoBuild` | ceramic.macros.ComponentMacro.build() |

