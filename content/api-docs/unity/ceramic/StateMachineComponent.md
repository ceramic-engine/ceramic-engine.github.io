---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: StateMachineComponent
target: Unity
permalink: api-docs/unity/ceramic/StateMachineComponent/
---

# StateMachineComponent

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/StateMachineComponent.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">Entity</a> → <a href="/api-docs/unity/ceramic/StateMachineBase/">StateMachineBase</a> → <a href="/api-docs/unity/ceramic/StateMachineImpl/">StateMachineImpl</a> → <strong>ceramic.StateMachineComponent</strong> (Class)</div>

A state machine that can be attached to entities as a component.

StateMachineComponent extends StateMachine with the ability to be attached
to entities as a component. It provides direct access to the parent entity
and automatically manages its lifecycle as part of the entity.

This is useful when you want to add state machine behavior to existing
entities without subclassing them.

Example usage:
```haxe
// Define states for a player entity
enum PlayerState {
    IDLE;
    RUNNING;
    JUMPING;
}

// Create a state machine component for the player
var playerStateMachine = new StateMachineComponent<PlayerState, Player>();
playerStateMachine.set(IDLE, new IdleState());
playerStateMachine.set(RUNNING, new RunningState());
playerStateMachine.set(JUMPING, new JumpingState());

// Attach to player entity
player.component(playerStateMachine);

// Alternatively, on entity fields marked as component, you can just write `StateMachine`
// as it will be automatically replaced by `StateMachineComponent` at compile time
@component public var machine:StateMachine<PlayerState, Player>;

// States can access the entity
class IdleState extends State {
    override function update(delta:Float) {
        var player = cast(machine, StateMachineComponent<PlayerState, Player>).entity;
        if (player.velocity.x != 0) {
            machine.state = RUNNING;
        }
    }
}
```

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/ceramic/StateMachine/">StateMachine</a>, <a href="/api-docs/unity/ceramic/Component/">Component</a>, <a href="/api-docs/unity/ceramic/Entity/">Entity</a></div>


## Instance Members

<div class="signature field-var has-description" id="entity"><code><span class="field-name">entity</span><span class="operator">:</span> <span class="type-name">ceramic.StateMachineComponent.E</span></code><a class="header-anchor" href="#entity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The entity this state machine is attached to.
Set automatically when added as a component.

## Private Members

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

