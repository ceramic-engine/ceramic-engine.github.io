---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: StateMachine
target: Headless
permalink: api-docs/headless/ceramic/StateMachine/
---

# StateMachine

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/StateMachine.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/ceramic/Entity/">Entity</a> → <a href="/api-docs/headless/ceramic/StateMachineBase/">StateMachineBase</a> → <a href="/api-docs/headless/ceramic/StateMachineImpl/">StateMachineImpl</a> → <strong>ceramic.StateMachine</strong> (Class)</div>

A flexible state machine implementation for managing state transitions.

StateMachine provides a powerful way to manage complex state logic in your
application. It supports string-based or enum-based state identification,
automatic state lifecycle management, and type-safe state access.

Features:
- Type-safe state management using enums or strings
- Automatic enter/exit/update lifecycle calls
- State transition events
- Integration with Ceramic's entity system
- Support for pausing/resuming state updates

Example with enum states:
```haxe
enum PlayerState {
    IDLE;
    WALKING;
    JUMPING;
}

var machine = new StateMachine<PlayerState>();
machine.set(IDLE, new IdleState());
machine.set(WALKING, new WalkingState());
machine.set(JUMPING, new JumpingState());

machine.state = IDLE; // Start in idle state
```

Example with string states:
```haxe
var machine = new StateMachine<String>();
machine.set("menu", new MenuState());
machine.set("game", new GameState());
machine.set("pause", new PauseState());

machine.state = "menu";
```

<div class="see"><strong>See:</strong> <a href="/api-docs/headless/ceramic/State/">State</a>, <a href="/api-docs/headless/ceramic/StateMachineBase/">StateMachineBase</a></div>


## Instance Members

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.ComponentMacro.build() |
| `:autoBuild` | ceramic.macros.ComponentMacro.build() |
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

