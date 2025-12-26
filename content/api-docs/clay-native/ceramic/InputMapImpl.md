---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: InputMapImpl
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/InputMapImpl/
---

# InputMapImpl

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/InputMapImpl.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-native/ceramic/InputMapBase/">InputMapBase</a> → <strong>ceramic.InputMapImpl</strong> (Class) → <a href="/api-docs/clay-native/ceramic/InputMap/">InputMap</a></div>

Implementation class for the InputMap system.

This class provides the actual functionality for mapping physical inputs
(keyboard, mouse, gamepad) to logical game actions. It supports complex
input scenarios including:

- Multiple inputs bound to a single action
- Digital-to-analog conversion (e.g., WASD to movement axis)
- Analog-to-digital conversion (e.g., trigger press threshold)
- Input state tracking (pressed, just pressed, just released)
- Gamepad-specific targeting
- UI focus integration

The implementation uses an efficient index-based system to track bindings
and input states, minimizing overhead during runtime input processing.

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/InputMap/">InputMap</a></div>


## Instance Members

<div class="signature field-var has-description" id="gamepadId"><code><span class="field-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#gamepadId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Target events of a specific gamepad by setting its gamepad id.
If kept to default (`-1`), events from any gamepad will be handled.
Useful for multiplayer games where each player has their own controller.

<hr class="field-separator" />

<div class="signature field-var has-description" id="checkJustPressedAtBind"><code><span class="field-name">checkJustPressedAtBind</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#checkJustPressedAtBind"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If set to `true`, when binding a new input, the system will check if
the input was just pressed this frame and set the initial state accordingly.
This prevents immediate triggering of "just pressed" events when binding
an input that's already being held down.

<hr class="field-separator" />

<div class="signature field-var has-description" id="enabled"><code><span class="field-name">enabled</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#enabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set to `false` to disable this input map entirely.
When disabled, all input queries will return false/0.0 and no events will be triggered.
Useful for pausing input handling or switching between different input schemes.

<hr class="field-separator" />

<div class="signature field-method has-description" id="bindKeyCode"><code><span class="field-name">bindKeyCode</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapImpl.T</span><span class="operator">,</span> <span class="arg-name">keyCode</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/KeyCode/" class="type-link">KeyCode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindKeyCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Binds a keyboard key code to an action.
Multiple key codes can be bound to the same action.


| Name | Type | Description |
|------|------|-------------|
| `key` | ceramic.InputMapImpl.T | The action to bind to  |
| `keyCode` | [KeyCode](/api-docs/clay-native/ceramic/KeyCode/) | The keyboard key code to bind |

<hr class="field-separator" />

<div class="signature field-method has-description" id="boundKeyCodes"><code><span class="field-name">boundKeyCodes</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapImpl.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/KeyCode/" class="type-link">KeyCode</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#boundKeyCodes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets all key codes currently bound to an action.


| Name | Type | Description |
|------|------|-------------|
| `key` | ceramic.InputMapImpl.T | The action to query  |

| Returns | Description |
|---------|-------------|
| [ReadOnlyArray](/api-docs/clay-native/ceramic/ReadOnlyArray/)<[KeyCode](/api-docs/clay-native/ceramic/KeyCode/)> | Array of bound key codes (empty if none) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="unbindKeyCode"><code><span class="field-name">unbindKeyCode</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapImpl.T</span><span class="operator">,</span> <span class="arg-name">keyCode</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/KeyCode/" class="type-link">KeyCode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unbindKeyCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes a key code binding from an action.


| Name | Type | Description |
|------|------|-------------|
| `key` | ceramic.InputMapImpl.T | The action to unbind from  |
| `keyCode` | [KeyCode](/api-docs/clay-native/ceramic/KeyCode/) | The key code to unbind |

<hr class="field-separator" />

<div class="signature field-method has-description" id="bindKeyCodeToAxis"><code><span class="field-name">bindKeyCodeToAxis</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapImpl.T</span><span class="operator">,</span> <span class="arg-name">keyCode</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/KeyCode/" class="type-link">KeyCode</a><span class="operator">,</span> <span class="arg-name">axisValue</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindKeyCodeToAxis"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Binds a keyboard key to an analog axis action.
When the key is pressed, it will set the axis to the specified value.
Useful for digital-to-analog conversion (e.g., WASD to movement).


| Name | Type | Description |
|------|------|-------------|
| `key` | ceramic.InputMapImpl.T | The axis action to bind to  |
| `keyCode` | [KeyCode](/api-docs/clay-native/ceramic/KeyCode/) | The keyboard key code to bind  |
| `axisValue` | [Float](/api-docs/clay-native/Float/) | The axis value when pressed (typically -1.0 or 1.0) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="boundKeyCodesToAxis"><code><span class="field-name">boundKeyCodesToAxis</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapImpl.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/KeyCode/" class="type-link">KeyCode</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#boundKeyCodesToAxis"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets all key codes bound to an axis action.


| Name | Type | Description |
|------|------|-------------|
| `key` | ceramic.InputMapImpl.T | The axis action to query  |

| Returns | Description |
|---------|-------------|
| [ReadOnlyArray](/api-docs/clay-native/ceramic/ReadOnlyArray/)<[KeyCode](/api-docs/clay-native/ceramic/KeyCode/)> | Array of bound key codes (empty if none) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="boundKeyCodeToAxisValue"><code><span class="field-name">boundKeyCodeToAxisValue</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapImpl.T</span><span class="operator">,</span> <span class="arg-name">keyCode</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/KeyCode/" class="type-link">KeyCode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#boundKeyCodeToAxisValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the axis value associated with a key code binding.


| Name | Type | Description |
|------|------|-------------|
| `key` | ceramic.InputMapImpl.T | The axis action  |
| `keyCode` | [KeyCode](/api-docs/clay-native/ceramic/KeyCode/) | The key code to check  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-native/Float/) | The axis value for this binding, or 0 if not bound |

<hr class="field-separator" />

<div class="signature field-method has-description" id="unbindKeyCodeToAxis"><code><span class="field-name">unbindKeyCodeToAxis</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapImpl.T</span><span class="operator">,</span> <span class="arg-name">keyCode</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/KeyCode/" class="type-link">KeyCode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unbindKeyCodeToAxis"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes a key code to axis binding.


| Name | Type | Description |
|------|------|-------------|
| `key` | ceramic.InputMapImpl.T | The axis action to unbind from  |
| `keyCode` | [KeyCode](/api-docs/clay-native/ceramic/KeyCode/) | The key code to unbind |

<hr class="field-separator" />

<div class="signature field-method has-description" id="bindScanCode"><code><span class="field-name">bindScanCode</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapImpl.T</span><span class="operator">,</span> <span class="arg-name">scanCode</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ScanCode/" class="type-link">ScanCode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindScanCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Binds a keyboard scan code to an action.
Scan codes represent physical key positions and are layout-independent.


| Name | Type | Description |
|------|------|-------------|
| `key` | ceramic.InputMapImpl.T | The action to bind to  |
| `scanCode` | [ScanCode](/api-docs/clay-native/ceramic/ScanCode/) | The scan code to bind |

<hr class="field-separator" />

<div class="signature field-method has-description" id="boundScanCodes"><code><span class="field-name">boundScanCodes</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapImpl.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/ScanCode/" class="type-link">ScanCode</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#boundScanCodes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets all scan codes currently bound to an action.


| Name | Type | Description |
|------|------|-------------|
| `key` | ceramic.InputMapImpl.T | The action to query  |

| Returns | Description |
|---------|-------------|
| [ReadOnlyArray](/api-docs/clay-native/ceramic/ReadOnlyArray/)<[ScanCode](/api-docs/clay-native/ceramic/ScanCode/)> | Array of bound scan codes (empty if none) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="unbindScanCode"><code><span class="field-name">unbindScanCode</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapImpl.T</span><span class="operator">,</span> <span class="arg-name">scanCode</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ScanCode/" class="type-link">ScanCode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unbindScanCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes a scan code binding from an action.


| Name | Type | Description |
|------|------|-------------|
| `key` | ceramic.InputMapImpl.T | The action to unbind from  |
| `scanCode` | [ScanCode](/api-docs/clay-native/ceramic/ScanCode/) | The scan code to unbind |

<hr class="field-separator" />

<div class="signature field-method no-description" id="bindScanCodeToAxis"><code><span class="field-name">bindScanCodeToAxis</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapImpl.T</span><span class="operator">,</span> <span class="arg-name">scanCode</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ScanCode/" class="type-link">ScanCode</a><span class="operator">,</span> <span class="arg-name">axisValue</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindScanCodeToAxis"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | ceramic.InputMapImpl.T |
| `scanCode` | [ScanCode](/api-docs/clay-native/ceramic/ScanCode/) |
| `axisValue` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="boundScanCodesToAxis"><code><span class="field-name">boundScanCodesToAxis</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapImpl.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/ScanCode/" class="type-link">ScanCode</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#boundScanCodesToAxis"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | ceramic.InputMapImpl.T |

| Returns |
|---------|
| [ReadOnlyArray](/api-docs/clay-native/ceramic/ReadOnlyArray/)<[ScanCode](/api-docs/clay-native/ceramic/ScanCode/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="boundScanCodeToAxisValue"><code><span class="field-name">boundScanCodeToAxisValue</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapImpl.T</span><span class="operator">,</span> <span class="arg-name">scanCode</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ScanCode/" class="type-link">ScanCode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#boundScanCodeToAxisValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | ceramic.InputMapImpl.T |
| `scanCode` | [ScanCode](/api-docs/clay-native/ceramic/ScanCode/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="unbindScanCodeToAxis"><code><span class="field-name">unbindScanCodeToAxis</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapImpl.T</span><span class="operator">,</span> <span class="arg-name">scanCode</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ScanCode/" class="type-link">ScanCode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unbindScanCodeToAxis"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | ceramic.InputMapImpl.T |
| `scanCode` | [ScanCode](/api-docs/clay-native/ceramic/ScanCode/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="bindMouseButton"><code><span class="field-name">bindMouseButton</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapImpl.T</span><span class="operator">,</span> <span class="arg-name">buttonId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindMouseButton"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Binds a mouse button to an action.


| Name | Type | Description |
|------|------|-------------|
| `key` | ceramic.InputMapImpl.T | The action to bind to  |
| `buttonId` | [Int](/api-docs/clay-native/Int/) | The mouse button ID (0=left, 1=right, 2=middle) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="boundMouseButtons"><code><span class="field-name">boundMouseButtons</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapImpl.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#boundMouseButtons"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets all mouse buttons currently bound to an action.


| Name | Type | Description |
|------|------|-------------|
| `key` | ceramic.InputMapImpl.T | The action to query  |

| Returns | Description |
|---------|-------------|
| [ReadOnlyArray](/api-docs/clay-native/ceramic/ReadOnlyArray/)<[Int](/api-docs/clay-native/Int/)> | Array of bound mouse button IDs (empty if none) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="unbindMouseButton"><code><span class="field-name">unbindMouseButton</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapImpl.T</span><span class="operator">,</span> <span class="arg-name">buttonId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unbindMouseButton"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes a mouse button binding from an action.


| Name | Type | Description |
|------|------|-------------|
| `key` | ceramic.InputMapImpl.T | The action to unbind from  |
| `buttonId` | [Int](/api-docs/clay-native/Int/) | The mouse button ID to unbind |

<hr class="field-separator" />

<div class="signature field-method has-description" id="bindGamepadButton"><code><span class="field-name">bindGamepadButton</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapImpl.T</span><span class="operator">,</span> <span class="arg-name">button</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/GamepadButton/" class="type-link">GamepadButton</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindGamepadButton"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Binds a gamepad button to an action.


| Name | Type | Description |
|------|------|-------------|
| `key` | ceramic.InputMapImpl.T | The action to bind to  |
| `button` | [GamepadButton](/api-docs/clay-native/ceramic/GamepadButton/) | The gamepad button to bind |

<hr class="field-separator" />

<div class="signature field-method has-description" id="boundGamepadButtons"><code><span class="field-name">boundGamepadButtons</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapImpl.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/GamepadButton/" class="type-link">GamepadButton</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#boundGamepadButtons"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets all gamepad buttons currently bound to an action.


| Name | Type | Description |
|------|------|-------------|
| `key` | ceramic.InputMapImpl.T | The action to query  |

| Returns | Description |
|---------|-------------|
| [ReadOnlyArray](/api-docs/clay-native/ceramic/ReadOnlyArray/)<[GamepadButton](/api-docs/clay-native/ceramic/GamepadButton/)> | Array of bound gamepad buttons (empty if none) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="unbindGamepadButton"><code><span class="field-name">unbindGamepadButton</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapImpl.T</span><span class="operator">,</span> <span class="arg-name">button</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/GamepadButton/" class="type-link">GamepadButton</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unbindGamepadButton"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes a gamepad button binding from an action.


| Name | Type | Description |
|------|------|-------------|
| `key` | ceramic.InputMapImpl.T | The action to unbind from  |
| `button` | [GamepadButton](/api-docs/clay-native/ceramic/GamepadButton/) | The gamepad button to unbind |

<hr class="field-separator" />

<div class="signature field-method no-description" id="bindGamepadButtonToAxis"><code><span class="field-name">bindGamepadButtonToAxis</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapImpl.T</span><span class="operator">,</span> <span class="arg-name">button</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/GamepadButton/" class="type-link">GamepadButton</a><span class="operator">,</span> <span class="arg-name">axisValue</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindGamepadButtonToAxis"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | ceramic.InputMapImpl.T |
| `button` | [GamepadButton](/api-docs/clay-native/ceramic/GamepadButton/) |
| `axisValue` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="boundGamepadButtonsToAxis"><code><span class="field-name">boundGamepadButtonsToAxis</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapImpl.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/GamepadButton/" class="type-link">GamepadButton</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#boundGamepadButtonsToAxis"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | ceramic.InputMapImpl.T |

| Returns |
|---------|
| [ReadOnlyArray](/api-docs/clay-native/ceramic/ReadOnlyArray/)<[GamepadButton](/api-docs/clay-native/ceramic/GamepadButton/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="boundGamepadButtonToAxisValue"><code><span class="field-name">boundGamepadButtonToAxisValue</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapImpl.T</span><span class="operator">,</span> <span class="arg-name">button</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/GamepadButton/" class="type-link">GamepadButton</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#boundGamepadButtonToAxisValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | ceramic.InputMapImpl.T |
| `button` | [GamepadButton](/api-docs/clay-native/ceramic/GamepadButton/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="unbindGamepadButtonToAxis"><code><span class="field-name">unbindGamepadButtonToAxis</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapImpl.T</span><span class="operator">,</span> <span class="arg-name">button</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/GamepadButton/" class="type-link">GamepadButton</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unbindGamepadButtonToAxis"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | ceramic.InputMapImpl.T |
| `button` | [GamepadButton](/api-docs/clay-native/ceramic/GamepadButton/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="bindGamepadAxis"><code><span class="field-name">bindGamepadAxis</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapImpl.T</span><span class="operator">,</span> <span class="arg-name">axis</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/GamepadAxis/" class="type-link">GamepadAxis</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindGamepadAxis"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Binds a gamepad analog axis to an axis action.
The axis value will be passed through directly.


| Name | Type | Description |
|------|------|-------------|
| `key` | ceramic.InputMapImpl.T | The axis action to bind to  |
| `axis` | [GamepadAxis](/api-docs/clay-native/ceramic/GamepadAxis/) | The gamepad axis to bind |

<hr class="field-separator" />

<div class="signature field-method has-description" id="boundGamepadAxes"><code><span class="field-name">boundGamepadAxes</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapImpl.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/GamepadAxis/" class="type-link">GamepadAxis</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#boundGamepadAxes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets all gamepad axes currently bound to an axis action.


| Name | Type | Description |
|------|------|-------------|
| `key` | ceramic.InputMapImpl.T | The axis action to query  |

| Returns | Description |
|---------|-------------|
| [ReadOnlyArray](/api-docs/clay-native/ceramic/ReadOnlyArray/)<[GamepadAxis](/api-docs/clay-native/ceramic/GamepadAxis/)> | Array of bound gamepad axes (empty if none) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="unbindGamepadAxis"><code><span class="field-name">unbindGamepadAxis</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapImpl.T</span><span class="operator">,</span> <span class="arg-name">axis</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/GamepadAxis/" class="type-link">GamepadAxis</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unbindGamepadAxis"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes a gamepad axis binding from an axis action.


| Name | Type | Description |
|------|------|-------------|
| `key` | ceramic.InputMapImpl.T | The axis action to unbind from  |
| `axis` | [GamepadAxis](/api-docs/clay-native/ceramic/GamepadAxis/) | The gamepad axis to unbind |

<hr class="field-separator" />

<div class="signature field-method has-description" id="bindGamepadAxisToButton"><code><span class="field-name">bindGamepadAxisToButton</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapImpl.T</span><span class="operator">,</span> <span class="arg-name">axis</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/GamepadAxis/" class="type-link">GamepadAxis</a><span class="operator">,</span> <span class="arg-name">startValue</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindGamepadAxisToButton"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Binds a gamepad axis to a button action with a threshold.
The button will be "pressed" when the axis value crosses the threshold.


| Name | Type | Description |
|------|------|-------------|
| `key` | ceramic.InputMapImpl.T | The button action to bind to  |
| `axis` | [GamepadAxis](/api-docs/clay-native/ceramic/GamepadAxis/) | The gamepad axis to bind  |
| `startValue` | [Float](/api-docs/clay-native/Float/) | The threshold value (positive for > threshold, negative for < threshold) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="boundGamepadAxesToButton"><code><span class="field-name">boundGamepadAxesToButton</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapImpl.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/GamepadAxis/" class="type-link">GamepadAxis</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#boundGamepadAxesToButton"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | ceramic.InputMapImpl.T |

| Returns |
|---------|
| [ReadOnlyArray](/api-docs/clay-native/ceramic/ReadOnlyArray/)<[GamepadAxis](/api-docs/clay-native/ceramic/GamepadAxis/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="boundGamepadAxisToButtonStartValue"><code><span class="field-name">boundGamepadAxisToButtonStartValue</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapImpl.T</span><span class="operator">,</span> <span class="arg-name">axis</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/GamepadAxis/" class="type-link">GamepadAxis</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#boundGamepadAxisToButtonStartValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | ceramic.InputMapImpl.T |
| `axis` | [GamepadAxis](/api-docs/clay-native/ceramic/GamepadAxis/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="unbindGamepadAxisToButton"><code><span class="field-name">unbindGamepadAxisToButton</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapImpl.T</span><span class="operator">,</span> <span class="arg-name">axis</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/GamepadAxis/" class="type-link">GamepadAxis</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unbindGamepadAxisToButton"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | ceramic.InputMapImpl.T |
| `axis` | [GamepadAxis](/api-docs/clay-native/ceramic/GamepadAxis/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="bindConvertedToAxis"><code><span class="field-name">bindConvertedToAxis</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapImpl.T</span><span class="operator">,</span> <span class="arg-name">axisKey</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapImpl.T</span><span class="operator">,</span> <span class="arg-name">axisValue</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindConvertedToAxis"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Binds a button action to trigger an axis action when pressed.
This allows button presses to set axis values.


| Name | Type | Description |
|------|------|-------------|
| `key` | ceramic.InputMapImpl.T | The button action that triggers the axis  |
| `axisKey` | ceramic.InputMapImpl.T | The axis action to trigger  |
| `axisValue` | [Float](/api-docs/clay-native/Float/) | The axis value to set when button is pressed |

<hr class="field-separator" />

<div class="signature field-method has-description" id="pressed"><code><span class="field-name">pressed</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapImpl.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#pressed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if an action is currently pressed (held down).
Returns true for every frame while the input is held.


| Name | Type | Description |
|------|------|-------------|
| `key` | ceramic.InputMapImpl.T | The action to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if the action is currently pressed |

<hr class="field-separator" />

<div class="signature field-method has-description" id="justPressed"><code><span class="field-name">justPressed</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapImpl.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#justPressed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if an action was just pressed this frame.
Returns true only on the frame the input was initially pressed.


| Name | Type | Description |
|------|------|-------------|
| `key` | ceramic.InputMapImpl.T | The action to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if the action was just pressed this frame |

<hr class="field-separator" />

<div class="signature field-method has-description" id="justReleased"><code><span class="field-name">justReleased</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapImpl.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#justReleased"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if an action was just released this frame.
Returns true only on the frame the input was released.


| Name | Type | Description |
|------|------|-------------|
| `key` | ceramic.InputMapImpl.T | The action to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if the action was just released this frame |

<hr class="field-separator" />

<div class="signature field-method has-description" id="axisValue"><code><span class="field-name">axisValue</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapImpl.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#axisValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the current value of an axis action.
Returns 0.0 if the input map is disabled or no axis is active.


| Name | Type | Description |
|------|------|-------------|
| `key` | ceramic.InputMapImpl.T | The axis action to check  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-native/Float/) | The current axis value (typically -1.0 to 1.0) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description" id="EMPTY_ARRAY"><code><span class="field-name">EMPTY_ARRAY</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#EMPTY_ARRAY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="nextIndex"><code><span class="field-name">nextIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#nextIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="keyToIndex"><code><span class="field-name">keyToIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#keyToIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="indexToKey"><code><span class="field-name">indexToKey</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">ceramic.InputMapImpl.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#indexToKey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="pressedKeys"><code><span class="field-name">pressedKeys</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#pressedKeys"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="axisValues"><code><span class="field-name">axisValues</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#axisValues"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="pressedKeyKinds"><code><span class="field-name">pressedKeyKinds</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/InputMapKeyKind/" class="type-link">InputMapKeyKind</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#pressedKeyKinds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A way to know from which the pressed key comes from

<hr class="field-separator" />

<div class="signature field-var no-description" id="convertToAxis"><code><span class="field-name">convertToAxis</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/InputMapConvertToAxis/" class="type-link">InputMapConvertToAxis</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#convertToAxis"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitKeyDown"><code><span class="field-name">emitKeyDown</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapImpl.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitKeyDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Triggered when a mapped action is pressed (key down, button pressed, etc.).
@event keyDown

| Name | Type | Description |
|------|------|-------------|
| `key` | ceramic.InputMapImpl.T | The action that was pressed  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitKeyUp"><code><span class="field-name">emitKeyUp</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapImpl.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitKeyUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Triggered when a mapped action is released (key up, button released, etc.).
@event keyUp

| Name | Type | Description |
|------|------|-------------|
| `key` | ceramic.InputMapImpl.T | The action that was released  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitAxis"><code><span class="field-name">emitAxis</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapImpl.T</span><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitAxis"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Triggered when an analog axis value changes for a mapped action.
@event axis

| Name | Type | Description |
|------|------|-------------|
| `key` | ceramic.InputMapImpl.T | The action associated with the axis  |
| `value` | [Float](/api-docs/clay-native/Float/) | The new axis value (typically -1.0 to 1.0)  |

<hr class="field-separator" />

<div class="signature field-method no-description" id="keyToString"><code><span class="field-name">keyToString</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapImpl.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#keyToString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | ceramic.InputMapImpl.T |

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="keyForIndex"><code><span class="field-name">keyForIndex</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapImpl.T</span></code><a class="header-anchor" href="#keyForIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `index` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| ceramic.InputMapImpl.T |

<hr class="field-separator" />

<div class="signature field-method no-description" id="indexOfKey"><code><span class="field-name">indexOfKey</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.InputMapImpl.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#indexOfKey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | ceramic.InputMapImpl.T |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |

