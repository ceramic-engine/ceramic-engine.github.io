---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: InputMapRebinder
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/InputMapRebinder/
---

# InputMapRebinder

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/InputMapRebinder.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">Entity</a> → <strong>ceramic.InputMapRebinder</strong> (Class)</div>

A utility class for rebinding input mappings at runtime.

InputMapRebinder provides a user-friendly way to change input bindings
by listening for input and automatically binding it to the specified action.
This is commonly used in game settings menus to let players customize controls.

Features:
- Listen for any input type (keyboard, gamepad button, gamepad axis)
- Support for cancellation (ESC key or SELECT button by default)
- Configurable conditions for filtering valid inputs
- Events for tracking rebind operations
- Option to preserve or replace existing bindings

Example usage:
```haxe
var rebinder = new InputMapRebinder<Action>();

// Rebind jump action - will listen for next input
rebinder.rebind(inputMap, Action.JUMP);

// Listen for rebind completion
rebinder.onAfterRebindAny(this, (map, action) -> {
    trace('Rebound action: ' + action);
});

// Add conditions to filter inputs
rebinder.keyCondition = (action, key) -> {
    // Don't allow binding F1-F12 keys
    return key.keyCode < KeyCode.F1 || key.keyCode > KeyCode.F12;
};
```

## Instance Members

<div class="signature field-var has-description" id="axisToButtonDeadZone"><code><span class="field-name">axisToButtonDeadZone</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#axisToButtonDeadZone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The dead zone threshold for converting analog axis movement to button presses.
When binding an axis as a button, the axis must exceed this value to register.
Default: 0.25 (25% of axis range)

<hr class="field-separator" />

<div class="signature field-var has-description" id="cancelButton"><code><span class="field-name">cancelButton</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/GamepadButton/" class="type-link">GamepadButton</a></code><a class="header-anchor" href="#cancelButton"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The gamepad button that cancels the rebind operation.
Default: GamepadButton.SELECT

<hr class="field-separator" />

<div class="signature field-var has-description" id="cancelKeyCode"><code><span class="field-name">cancelKeyCode</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/KeyCode/" class="type-link">KeyCode</a></code><a class="header-anchor" href="#cancelKeyCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The keyboard key that cancels the rebind operation.
Default: KeyCode.ESCAPE

<hr class="field-separator" />

<div class="signature field-method has-description" id="keyCondition"><code><span class="field-name">keyCondition</span><span class="parenthesis">(</span><span class="arg-name">action</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">,</span> <span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Key/" class="type-link">Key</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#keyCondition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optional condition function to filter keyboard inputs during rebinding.
Return false to reject the input, true to accept it.
If null, all keyboard inputs are accepted (except cancel key).

| Name | Type |
|------|------|
| `action` | ceramic.InputMapRebinder.T |
| `key` | [Key](/api-docs/clay-native/ceramic/Key/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="gamepadButtonCondition"><code><span class="field-name">gamepadButtonCondition</span><span class="parenthesis">(</span><span class="arg-name">action</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">,</span> <span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">button</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/GamepadButton/" class="type-link">GamepadButton</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#gamepadButtonCondition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optional condition function to filter gamepad button inputs during rebinding.
Return false to reject the input, true to accept it.
If null, all gamepad buttons are accepted (except cancel button).

| Name | Type |
|------|------|
| `action` | ceramic.InputMapRebinder.T |
| `gamepadId` | [Int](/api-docs/clay-native/Int/) |
| `button` | [GamepadButton](/api-docs/clay-native/ceramic/GamepadButton/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="gamepadAxisCondition"><code><span class="field-name">gamepadAxisCondition</span><span class="parenthesis">(</span><span class="arg-name">action</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">,</span> <span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">axis</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/GamepadAxis/" class="type-link">GamepadAxis</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#gamepadAxisCondition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optional condition function to filter gamepad axis inputs during rebinding.
Return false to reject the input, true to accept it.
If null, all gamepad axes are accepted.

| Name | Type |
|------|------|
| `action` | ceramic.InputMapRebinder.T |
| `gamepadId` | [Int](/api-docs/clay-native/Int/) |
| `axis` | [GamepadAxis](/api-docs/clay-native/ceramic/GamepadAxis/) |
| `value` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="gamepadAxisToButtonCondition"><code><span class="field-name">gamepadAxisToButtonCondition</span><span class="parenthesis">(</span><span class="arg-name">action</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">,</span> <span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">axis</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/GamepadAxis/" class="type-link">GamepadAxis</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#gamepadAxisToButtonCondition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optional condition function to filter gamepad axis-to-button conversions during rebinding.
Return false to reject the input, true to accept it.
If null, all gamepad axis movements exceeding the dead zone are accepted.

| Name | Type |
|------|------|
| `action` | ceramic.InputMapRebinder.T |
| `gamepadId` | [Int](/api-docs/clay-native/Int/) |
| `axis` | [GamepadAxis](/api-docs/clay-native/ceramic/GamepadAxis/) |
| `value` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="rebind"><code><span class="field-name">rebind</span><span class="parenthesis">(</span><span class="arg-name">inputMap</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/InputMap/" class="type-link">InputMap</a><span class="operator">&lt;</span><span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">action</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">removeExisting</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#rebind"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Starts listening for input to rebind the specified action.
The rebinder will listen for keyboard, gamepad buttons, and gamepad axes
simultaneously and bind the first valid input received.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `inputMap` | [InputMap](/api-docs/clay-native/ceramic/InputMap/)<ceramic.InputMapRebinder.T> | | The input map to modify  |
| `action` | ceramic.InputMapRebinder.T | | The action to rebind  |
| `removeExisting` | [Bool](/api-docs/clay-native/Bool/) | `true` | If true, removes existing bindings before adding the new one |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-method no-description" id="keyDownListener"><code><span class="field-name">keyDownListener</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Key/" class="type-link">Key</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#keyDownListener"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [Key](/api-docs/clay-native/ceramic/Key/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="gamepadButtonListener"><code><span class="field-name">gamepadButtonListener</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">button</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/GamepadButton/" class="type-link">GamepadButton</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#gamepadButtonListener"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `gamepadId` | [Int](/api-docs/clay-native/Int/) |
| `button` | [GamepadButton](/api-docs/clay-native/ceramic/GamepadButton/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="gamepadAxisListener"><code><span class="field-name">gamepadAxisListener</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">axis</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/GamepadAxis/" class="type-link">GamepadAxis</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#gamepadAxisListener"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `gamepadId` | [Int](/api-docs/clay-native/Int/) |
| `axis` | [GamepadAxis](/api-docs/clay-native/ceramic/GamepadAxis/) |
| `value` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="gamepadAxisToButtonListener"><code><span class="field-name">gamepadAxisToButtonListener</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">axis</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/GamepadAxis/" class="type-link">GamepadAxis</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#gamepadAxisToButtonListener"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `gamepadId` | [Int](/api-docs/clay-native/Int/) |
| `axis` | [GamepadAxis](/api-docs/clay-native/ceramic/GamepadAxis/) |
| `value` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="cancel"><code><span class="field-name">cancel</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#cancel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitBeforeRebindAny"><code><span class="field-name">emitBeforeRebindAny</span><span class="parenthesis">(</span><span class="arg-name">inputMap</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/InputMap/" class="type-link">InputMap</a><span class="operator">&lt;</span><span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">action</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapRebinder.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitBeforeRebindAny"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Triggered before any input is rebound, regardless of input type.
@event beforeRebindAny

| Name | Type | Description |
|------|------|-------------|
| `inputMap` | [InputMap](/api-docs/clay-native/ceramic/InputMap/)<ceramic.InputMapRebinder.T> | The input map being modified  |
| `action` | ceramic.InputMapRebinder.T | The action being rebound  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitAfterRebindAny"><code><span class="field-name">emitAfterRebindAny</span><span class="parenthesis">(</span><span class="arg-name">inputMap</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/InputMap/" class="type-link">InputMap</a><span class="operator">&lt;</span><span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">action</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapRebinder.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitAfterRebindAny"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Triggered after any input is successfully rebound, regardless of input type.
@event afterRebindAny

| Name | Type | Description |
|------|------|-------------|
| `inputMap` | [InputMap](/api-docs/clay-native/ceramic/InputMap/)<ceramic.InputMapRebinder.T> | The input map that was modified  |
| `action` | ceramic.InputMapRebinder.T | The action that was rebound  |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isMatchingGamepad"><code><span class="field-name">isMatchingGamepad</span><span class="parenthesis">(</span><span class="arg-name">inputMap</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/InputMap/" class="type-link">InputMap</a><span class="operator">&lt;</span><span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isMatchingGamepad"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inputMap` | [InputMap](/api-docs/clay-native/ceramic/InputMap/)<ceramic.InputMapRebinder.T> |
| `gamepadId` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitBeforeRebindKey"><code><span class="field-name">emitBeforeRebindKey</span><span class="parenthesis">(</span><span class="arg-name">inputMap</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/InputMap/" class="type-link">InputMap</a><span class="operator">&lt;</span><span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">action</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">,</span> <span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Key/" class="type-link">Key</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitBeforeRebindKey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Triggered before a keyboard key is bound to an action.
@event beforeRebindKey

| Name | Type | Description |
|------|------|-------------|
| `inputMap` | [InputMap](/api-docs/clay-native/ceramic/InputMap/)<ceramic.InputMapRebinder.T> | The input map being modified  |
| `action` | ceramic.InputMapRebinder.T | The action being rebound  |
| `key` | [Key](/api-docs/clay-native/ceramic/Key/) | The keyboard key being bound  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitAfterRebindKey"><code><span class="field-name">emitAfterRebindKey</span><span class="parenthesis">(</span><span class="arg-name">inputMap</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/InputMap/" class="type-link">InputMap</a><span class="operator">&lt;</span><span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">action</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">,</span> <span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Key/" class="type-link">Key</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitAfterRebindKey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Triggered after a keyboard key is successfully bound to an action.
@event afterRebindKey

| Name | Type | Description |
|------|------|-------------|
| `inputMap` | [InputMap](/api-docs/clay-native/ceramic/InputMap/)<ceramic.InputMapRebinder.T> | The input map that was modified  |
| `action` | ceramic.InputMapRebinder.T | The action that was rebound  |
| `key` | [Key](/api-docs/clay-native/ceramic/Key/) | The keyboard key that was bound  |

<hr class="field-separator" />

<div class="signature field-method no-description" id="registerKeyListener"><code><span class="field-name">registerKeyListener</span><span class="parenthesis">(</span><span class="arg-name">inputMap</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/InputMap/" class="type-link">InputMap</a><span class="operator">&lt;</span><span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">action</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">removeExisting</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#registerKeyListener"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `inputMap` | [InputMap](/api-docs/clay-native/ceramic/InputMap/)<ceramic.InputMapRebinder.T> | |
| `action` | ceramic.InputMapRebinder.T | |
| `removeExisting` | [Bool](/api-docs/clay-native/Bool/) | `true` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="removeKey"><code><span class="field-name">removeKey</span><span class="parenthesis">(</span><span class="arg-name">inputMap</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/InputMap/" class="type-link">InputMap</a><span class="operator">&lt;</span><span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">action</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapRebinder.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeKey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inputMap` | [InputMap](/api-docs/clay-native/ceramic/InputMap/)<ceramic.InputMapRebinder.T> |
| `action` | ceramic.InputMapRebinder.T |

<hr class="field-separator" />

<div class="signature field-method no-description" id="rebindKey"><code><span class="field-name">rebindKey</span><span class="parenthesis">(</span><span class="arg-name">inputMap</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/InputMap/" class="type-link">InputMap</a><span class="operator">&lt;</span><span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">action</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">,</span> <span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Key/" class="type-link">Key</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">removeExisting</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#rebindKey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `inputMap` | [InputMap](/api-docs/clay-native/ceramic/InputMap/)<ceramic.InputMapRebinder.T> | |
| `action` | ceramic.InputMapRebinder.T | |
| `key` | [Key](/api-docs/clay-native/ceramic/Key/) | |
| `removeExisting` | [Bool](/api-docs/clay-native/Bool/) | `true` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitBeforeRebindGamepadButton"><code><span class="field-name">emitBeforeRebindGamepadButton</span><span class="parenthesis">(</span><span class="arg-name">inputMap</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/InputMap/" class="type-link">InputMap</a><span class="operator">&lt;</span><span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">action</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">,</span> <span class="arg-name">button</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/GamepadButton/" class="type-link">GamepadButton</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitBeforeRebindGamepadButton"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Triggered before a gamepad button is bound to an action.
@event beforeRebindGamepadButton

| Name | Type | Description |
|------|------|-------------|
| `inputMap` | [InputMap](/api-docs/clay-native/ceramic/InputMap/)<ceramic.InputMapRebinder.T> | The input map being modified  |
| `action` | ceramic.InputMapRebinder.T | The action being rebound  |
| `button` | [GamepadButton](/api-docs/clay-native/ceramic/GamepadButton/) | The gamepad button being bound  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitAfterRebindGamepadButton"><code><span class="field-name">emitAfterRebindGamepadButton</span><span class="parenthesis">(</span><span class="arg-name">inputMap</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/InputMap/" class="type-link">InputMap</a><span class="operator">&lt;</span><span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">action</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">,</span> <span class="arg-name">button</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/GamepadButton/" class="type-link">GamepadButton</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitAfterRebindGamepadButton"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Triggered after a gamepad button is successfully bound to an action.
@event afterRebindGamepadButton

| Name | Type | Description |
|------|------|-------------|
| `inputMap` | [InputMap](/api-docs/clay-native/ceramic/InputMap/)<ceramic.InputMapRebinder.T> | The input map that was modified  |
| `action` | ceramic.InputMapRebinder.T | The action that was rebound  |
| `button` | [GamepadButton](/api-docs/clay-native/ceramic/GamepadButton/) | The gamepad button that was bound  |

<hr class="field-separator" />

<div class="signature field-method no-description" id="registerGamepadButtonListener"><code><span class="field-name">registerGamepadButtonListener</span><span class="parenthesis">(</span><span class="arg-name">inputMap</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/InputMap/" class="type-link">InputMap</a><span class="operator">&lt;</span><span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">action</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">removeExisting</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#registerGamepadButtonListener"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `inputMap` | [InputMap](/api-docs/clay-native/ceramic/InputMap/)<ceramic.InputMapRebinder.T> | |
| `action` | ceramic.InputMapRebinder.T | |
| `removeExisting` | [Bool](/api-docs/clay-native/Bool/) | `true` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="removeGamepadButton"><code><span class="field-name">removeGamepadButton</span><span class="parenthesis">(</span><span class="arg-name">inputMap</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/InputMap/" class="type-link">InputMap</a><span class="operator">&lt;</span><span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">action</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapRebinder.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeGamepadButton"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inputMap` | [InputMap](/api-docs/clay-native/ceramic/InputMap/)<ceramic.InputMapRebinder.T> |
| `action` | ceramic.InputMapRebinder.T |

<hr class="field-separator" />

<div class="signature field-method no-description" id="rebindGamepadButton"><code><span class="field-name">rebindGamepadButton</span><span class="parenthesis">(</span><span class="arg-name">inputMap</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/InputMap/" class="type-link">InputMap</a><span class="operator">&lt;</span><span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">action</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">,</span> <span class="arg-name">button</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/GamepadButton/" class="type-link">GamepadButton</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">removeExisting</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#rebindGamepadButton"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `inputMap` | [InputMap](/api-docs/clay-native/ceramic/InputMap/)<ceramic.InputMapRebinder.T> | |
| `action` | ceramic.InputMapRebinder.T | |
| `button` | [GamepadButton](/api-docs/clay-native/ceramic/GamepadButton/) | |
| `removeExisting` | [Bool](/api-docs/clay-native/Bool/) | `true` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitBeforeRebindGamepadAxis"><code><span class="field-name">emitBeforeRebindGamepadAxis</span><span class="parenthesis">(</span><span class="arg-name">inputMap</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/InputMap/" class="type-link">InputMap</a><span class="operator">&lt;</span><span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">action</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">,</span> <span class="arg-name">axis</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/GamepadAxis/" class="type-link">GamepadAxis</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitBeforeRebindGamepadAxis"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Triggered before a gamepad axis is bound to an axis action.
@event beforeRebindGamepadAxis

| Name | Type | Description |
|------|------|-------------|
| `inputMap` | [InputMap](/api-docs/clay-native/ceramic/InputMap/)<ceramic.InputMapRebinder.T> | The input map being modified  |
| `action` | ceramic.InputMapRebinder.T | The axis action being rebound  |
| `axis` | [GamepadAxis](/api-docs/clay-native/ceramic/GamepadAxis/) | The gamepad axis being bound  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitAfterRebindGamepadAxis"><code><span class="field-name">emitAfterRebindGamepadAxis</span><span class="parenthesis">(</span><span class="arg-name">inputMap</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/InputMap/" class="type-link">InputMap</a><span class="operator">&lt;</span><span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">action</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">,</span> <span class="arg-name">axis</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/GamepadAxis/" class="type-link">GamepadAxis</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitAfterRebindGamepadAxis"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Triggered after a gamepad axis is successfully bound to an axis action.
@event afterRebindGamepadAxis

| Name | Type | Description |
|------|------|-------------|
| `inputMap` | [InputMap](/api-docs/clay-native/ceramic/InputMap/)<ceramic.InputMapRebinder.T> | The input map that was modified  |
| `action` | ceramic.InputMapRebinder.T | The axis action that was rebound  |
| `axis` | [GamepadAxis](/api-docs/clay-native/ceramic/GamepadAxis/) | The gamepad axis that was bound  |

<hr class="field-separator" />

<div class="signature field-method no-description" id="registerGamepadAxisListener"><code><span class="field-name">registerGamepadAxisListener</span><span class="parenthesis">(</span><span class="arg-name">inputMap</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/InputMap/" class="type-link">InputMap</a><span class="operator">&lt;</span><span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">action</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">removeExisting</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#registerGamepadAxisListener"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `inputMap` | [InputMap](/api-docs/clay-native/ceramic/InputMap/)<ceramic.InputMapRebinder.T> | |
| `action` | ceramic.InputMapRebinder.T | |
| `removeExisting` | [Bool](/api-docs/clay-native/Bool/) | `true` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="removeGamepadAxis"><code><span class="field-name">removeGamepadAxis</span><span class="parenthesis">(</span><span class="arg-name">inputMap</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/InputMap/" class="type-link">InputMap</a><span class="operator">&lt;</span><span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">action</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapRebinder.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeGamepadAxis"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inputMap` | [InputMap](/api-docs/clay-native/ceramic/InputMap/)<ceramic.InputMapRebinder.T> |
| `action` | ceramic.InputMapRebinder.T |

<hr class="field-separator" />

<div class="signature field-method no-description" id="rebindGamepadAxis"><code><span class="field-name">rebindGamepadAxis</span><span class="parenthesis">(</span><span class="arg-name">inputMap</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/InputMap/" class="type-link">InputMap</a><span class="operator">&lt;</span><span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">action</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">,</span> <span class="arg-name">axis</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/GamepadAxis/" class="type-link">GamepadAxis</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">removeExisting</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#rebindGamepadAxis"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inputMap` | [InputMap](/api-docs/clay-native/ceramic/InputMap/)<ceramic.InputMapRebinder.T> |
| `action` | ceramic.InputMapRebinder.T |
| `axis` | [GamepadAxis](/api-docs/clay-native/ceramic/GamepadAxis/) |
| `value` | [Float](/api-docs/clay-native/Float/) |
| `removeExisting` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitBeforeRebindGamepadAxisToButton"><code><span class="field-name">emitBeforeRebindGamepadAxisToButton</span><span class="parenthesis">(</span><span class="arg-name">InputMap</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/InputMap/" class="type-link">InputMap</a><span class="operator">&lt;</span><span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">action</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">,</span> <span class="arg-name">axis</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/GamepadAxis/" class="type-link">GamepadAxis</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitBeforeRebindGamepadAxisToButton"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Triggered before a gamepad axis is bound to a button action (axis-to-button conversion).
@event beforeRebindGamepadAxisToButton

| Name | Type | Description |
|------|------|-------------|
| `InputMap` | [InputMap](/api-docs/clay-native/ceramic/InputMap/)<ceramic.InputMapRebinder.T> | The input map being modified  |
| `action` | ceramic.InputMapRebinder.T | The button action being rebound  |
| `axis` | [GamepadAxis](/api-docs/clay-native/ceramic/GamepadAxis/) | The gamepad axis being bound as a button  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitAfterRebindGamepadAxisToButton"><code><span class="field-name">emitAfterRebindGamepadAxisToButton</span><span class="parenthesis">(</span><span class="arg-name">InputMap</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/InputMap/" class="type-link">InputMap</a><span class="operator">&lt;</span><span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">action</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">,</span> <span class="arg-name">axis</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/GamepadAxis/" class="type-link">GamepadAxis</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitAfterRebindGamepadAxisToButton"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Triggered after a gamepad axis is successfully bound to a button action.
@event afterRebindGamepadAxisToButton

| Name | Type | Description |
|------|------|-------------|
| `InputMap` | [InputMap](/api-docs/clay-native/ceramic/InputMap/)<ceramic.InputMapRebinder.T> | The input map that was modified  |
| `action` | ceramic.InputMapRebinder.T | The button action that was rebound  |
| `axis` | [GamepadAxis](/api-docs/clay-native/ceramic/GamepadAxis/) | The gamepad axis that was bound as a button  |

<hr class="field-separator" />

<div class="signature field-method no-description" id="registerGamepadAxisToButtonListener"><code><span class="field-name">registerGamepadAxisToButtonListener</span><span class="parenthesis">(</span><span class="arg-name">inputMap</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/InputMap/" class="type-link">InputMap</a><span class="operator">&lt;</span><span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">action</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">removeExisting</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#registerGamepadAxisToButtonListener"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `inputMap` | [InputMap](/api-docs/clay-native/ceramic/InputMap/)<ceramic.InputMapRebinder.T> | |
| `action` | ceramic.InputMapRebinder.T | |
| `removeExisting` | [Bool](/api-docs/clay-native/Bool/) | `true` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="removeGamepadAxisToButton"><code><span class="field-name">removeGamepadAxisToButton</span><span class="parenthesis">(</span><span class="arg-name">inputMap</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/InputMap/" class="type-link">InputMap</a><span class="operator">&lt;</span><span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">action</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapRebinder.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeGamepadAxisToButton"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inputMap` | [InputMap](/api-docs/clay-native/ceramic/InputMap/)<ceramic.InputMapRebinder.T> |
| `action` | ceramic.InputMapRebinder.T |

<hr class="field-separator" />

<div class="signature field-method no-description" id="rebindGamepadAxisToButton"><code><span class="field-name">rebindGamepadAxisToButton</span><span class="parenthesis">(</span><span class="arg-name">inputMap</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/InputMap/" class="type-link">InputMap</a><span class="operator">&lt;</span><span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">action</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapRebinder.T</span><span class="operator">,</span> <span class="arg-name">axis</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/GamepadAxis/" class="type-link">GamepadAxis</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">removeExisting</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#rebindGamepadAxisToButton"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inputMap` | [InputMap](/api-docs/clay-native/ceramic/InputMap/)<ceramic.InputMapRebinder.T> |
| `action` | ceramic.InputMapRebinder.T |
| `axis` | [GamepadAxis](/api-docs/clay-native/ceramic/GamepadAxis/) |
| `value` | [Float](/api-docs/clay-native/Float/) |
| `removeExisting` | [Bool](/api-docs/clay-native/Bool/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

