---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: InputMap
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/InputMap/
---

# InputMap

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/InputMap.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-web/ceramic/InputMapBase/">InputMapBase</a> → <a href="/api-docs/clay-web/ceramic/InputMapImpl/">InputMapImpl</a> → <strong>ceramic.InputMap</strong> (Class)</div>

A flexible input mapping system that allows binding physical inputs to logical actions.

InputMap provides a unified interface for mapping various input types (keyboard keys,
gamepad buttons, mouse buttons, and analog axes) to game-specific actions defined
by the type parameter T (typically an enum).

Features:
- Bind multiple physical inputs to a single action
- Support for keyboard (key codes and scan codes), mouse, and gamepad inputs
- Convert digital inputs to analog axis values
- Convert analog inputs to digital button presses
- Track input states: pressed, just pressed, just released
- Handle analog axis values for smooth input

Example usage:
```haxe
enum Action {
    JUMP;
    MOVE_LEFT;
    MOVE_RIGHT;
    SHOOT;
    MOVE_X; // For analog movement
}

var inputMap = new InputMap<Action>();

// Bind keyboard keys
inputMap.bindKeyCode(JUMP, KeyCode.SPACE);
inputMap.bindKeyCode(MOVE_LEFT, KeyCode.A);
inputMap.bindKeyCode(MOVE_RIGHT, KeyCode.D);

// Bind gamepad
inputMap.bindGamepadButton(JUMP, GamepadButton.A);
inputMap.bindGamepadAxis(MOVE_X, GamepadAxis.LEFT_X);

// Convert digital to analog
inputMap.bindKeyCodeToAxis(MOVE_X, KeyCode.A, -1.0);
inputMap.bindKeyCodeToAxis(MOVE_X, KeyCode.D, 1.0);

// In update loop
if (inputMap.justPressed(JUMP)) {
    player.jump();
}
var moveX = inputMap.axisValue(MOVE_X);
player.velocity.x = moveX * speed;
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/ceramic/InputMapImpl/">InputMapImpl</a></div>


## Instance Members

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

