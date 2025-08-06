---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: State
target: Unity
permalink: api-docs/unity/ceramic/State/
---

# State

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/State.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">Entity</a> → <strong>ceramic.State</strong> (Class)</div>

Base class for states in a state machine.

State represents a single state within a StateMachine. Each state has
lifecycle methods that are called when entering, updating, and exiting
the state. States can access their parent state machine to trigger
transitions or access shared data.

To create a state:
1. Extend this class
2. Override enter(), update(), and/or exit() methods
3. Add the state to a StateMachine

Example usage:
```haxe
class IdleState extends State {
    override function enter() {
        trace("Entering idle state");
    }
    override function update(delta:Float) {
        if (playerInput.isMoving) {
            machine.state = "walking";
        }
    }
}
```

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/ceramic/StateMachine/">StateMachine</a>, <a href="/api-docs/unity/ceramic/StateMachineBase/">StateMachineBase</a></div>


## Instance Members

<div class="signature field-var has-description" id="machine"><code><span class="field-name">machine</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/StateMachine/" class="type-link">StateMachine</a><span class="operator">&lt;</span><a href="/api-docs/unity/Any/" class="type-link">Any</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#machine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The state machine that owns this state.
Set automatically when the state is added to a machine.

<hr class="field-separator" />

<div class="signature field-method has-description" id="enter"><code><span class="field-name">enter</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#enter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when entering this state.
Override this method to perform initialization when the state becomes active.

<hr class="field-separator" />

<div class="signature field-method has-description" id="update"><code><span class="field-name">update</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#update"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called every frame while this state is active.
Override this method to implement state behavior and transitions.


| Name | Type | Description |
|------|------|-------------|
| `delta` | [Float](/api-docs/unity/Float/) | Time elapsed since last update in seconds |

<hr class="field-separator" />

<div class="signature field-method has-description" id="exit"><code><span class="field-name">exit</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#exit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when exiting this state.
Override this method to perform cleanup when transitioning to another state.

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:allow` | ceramic.StateMachineImpl |

