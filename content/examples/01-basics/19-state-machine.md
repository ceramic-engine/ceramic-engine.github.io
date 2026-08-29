---
layout: examples
category: examples
menu: Basics
title: State Machine
permalink: examples/state-machine/
sample: state-machine
description: "A little critter driven by Ceramic's StateMachine: PATROL, CHASE and FLEE states with automatic enter/update/exit callbacks."
---

A little critter with a mind of its own, driven by Ceramic's `StateMachine`: it patrols, chases your pointer, and flees when you click near it.

Attach a state machine as a component, and methods named `{STATE}_enter()`, `{STATE}_update(delta)` and `{STATE}_exit()` are automatically wired to each state of the enum:

```haxe
enum abstract CritterState(Int) {
    var PATROL;
    var CHASE;
    var FLEE;
}

class Critter extends Quad {

    @component var machine = new StateMachine<CritterState>();

    public function new() {
        super();
        machine.state = PATROL;
    }

    function PATROL_update(delta:Float) {
        // Called every frame while in PATROL state
        if (pointerIsClose()) {
            machine.state = CHASE; // Triggers CHASE_enter()
        }
    }

    function CHASE_enter() {
        color = Color.ORANGE;
    }

}
```
