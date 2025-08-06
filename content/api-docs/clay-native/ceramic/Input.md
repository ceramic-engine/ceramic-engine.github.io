---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Input
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/Input/
---

# Input

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Input.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">Entity</a> → <strong>ceramic.Input</strong> (Class)</div>

Manages all input handling for keyboard and gamepad devices.

The Input system provides:
- Keyboard input detection (key press, release, and hold states)
- Gamepad support (buttons, analog axes, gyroscope)
- Input state queries (pressed, just pressed, just released)
- Gamepad vibration/rumble control
- Integration with UI elements to prevent input conflicts

The system tracks three states for inputs:
- Just pressed: True only on the frame the input was pressed
- Pressed: True while the input is held down
- Just released: True only on the frame the input was released

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/Key/">Key</a>, <a href="/api-docs/clay-native/ceramic/KeyCode/">KeyCode</a>, <a href="/api-docs/clay-native/ceramic/ScanCode/">ScanCode</a>, <a href="/api-docs/clay-native/ceramic/GamepadButton/">GamepadButton</a>, <a href="/api-docs/clay-native/ceramic/GamepadAxis/">GamepadAxis</a></div>


## Instance Members

<div class="signature field-var has-description" id="activeGamepads"><code><span class="field-name">activeGamepads</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#activeGamepads"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

List of currently connected gamepad IDs.
Updated automatically when gamepads are connected or disconnected.

<hr class="field-separator" />

<div class="signature field-method has-description" id="keyPressed"><code><span class="field-name">keyPressed</span><span class="parenthesis">(</span><span class="arg-name">keyCode</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/KeyCode/" class="type-link">KeyCode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#keyPressed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if a key is currently pressed (held down).
Returns true for every frame while the key is held.


| Name | Type | Description |
|------|------|-------------|
| `keyCode` | [KeyCode](/api-docs/clay-native/ceramic/KeyCode/) | The key code to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if the key is currently pressed |

<hr class="field-separator" />

<div class="signature field-method has-description" id="keyJustPressed"><code><span class="field-name">keyJustPressed</span><span class="parenthesis">(</span><span class="arg-name">keyCode</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/KeyCode/" class="type-link">KeyCode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#keyJustPressed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if a key was just pressed this frame.
Returns true only on the frame the key was initially pressed.


| Name | Type | Description |
|------|------|-------------|
| `keyCode` | [KeyCode](/api-docs/clay-native/ceramic/KeyCode/) | The key code to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if the key was just pressed this frame |

<hr class="field-separator" />

<div class="signature field-method has-description" id="keyJustReleased"><code><span class="field-name">keyJustReleased</span><span class="parenthesis">(</span><span class="arg-name">keyCode</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/KeyCode/" class="type-link">KeyCode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#keyJustReleased"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if a key was just released this frame.
Returns true only on the frame the key was released.


| Name | Type | Description |
|------|------|-------------|
| `keyCode` | [KeyCode](/api-docs/clay-native/ceramic/KeyCode/) | The key code to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if the key was just released this frame |

<hr class="field-separator" />

<div class="signature field-method has-description" id="scanPressed"><code><span class="field-name">scanPressed</span><span class="parenthesis">(</span><span class="arg-name">scanCode</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ScanCode/" class="type-link">ScanCode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#scanPressed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if a key is currently pressed using scan code.
Scan codes represent physical key positions and are layout-independent.


| Name | Type | Description |
|------|------|-------------|
| `scanCode` | [ScanCode](/api-docs/clay-native/ceramic/ScanCode/) | The scan code to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if the key is currently pressed |

<hr class="field-separator" />

<div class="signature field-method has-description" id="scanJustPressed"><code><span class="field-name">scanJustPressed</span><span class="parenthesis">(</span><span class="arg-name">scanCode</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ScanCode/" class="type-link">ScanCode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#scanJustPressed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if a key was just pressed this frame using scan code.


| Name | Type | Description |
|------|------|-------------|
| `scanCode` | [ScanCode](/api-docs/clay-native/ceramic/ScanCode/) | The scan code to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if the key was just pressed this frame |

<hr class="field-separator" />

<div class="signature field-method has-description" id="scanJustReleased"><code><span class="field-name">scanJustReleased</span><span class="parenthesis">(</span><span class="arg-name">scanCode</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ScanCode/" class="type-link">ScanCode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#scanJustReleased"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if a key was just released this frame using scan code.


| Name | Type | Description |
|------|------|-------------|
| `scanCode` | [ScanCode](/api-docs/clay-native/ceramic/ScanCode/) | The scan code to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if the key was just released this frame |

<hr class="field-separator" />

<div class="signature field-method has-description" id="gamepadPressed"><code><span class="field-name">gamepadPressed</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">button</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/GamepadButton/" class="type-link">GamepadButton</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#gamepadPressed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if a gamepad button is currently pressed.


| Name | Type | Description |
|------|------|-------------|
| `gamepadId` | [Int](/api-docs/clay-native/Int/) | The ID of the gamepad to check  |
| `button` | [GamepadButton](/api-docs/clay-native/ceramic/GamepadButton/) | The button to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if the button is currently pressed |

<hr class="field-separator" />

<div class="signature field-method has-description" id="gamepadJustPressed"><code><span class="field-name">gamepadJustPressed</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">button</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/GamepadButton/" class="type-link">GamepadButton</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#gamepadJustPressed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if a gamepad button was just pressed this frame.


| Name | Type | Description |
|------|------|-------------|
| `gamepadId` | [Int](/api-docs/clay-native/Int/) | The ID of the gamepad to check  |
| `button` | [GamepadButton](/api-docs/clay-native/ceramic/GamepadButton/) | The button to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if the button was just pressed this frame |

<hr class="field-separator" />

<div class="signature field-method has-description" id="gamepadJustReleased"><code><span class="field-name">gamepadJustReleased</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">button</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/GamepadButton/" class="type-link">GamepadButton</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#gamepadJustReleased"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if a gamepad button was just released this frame.


| Name | Type | Description |
|------|------|-------------|
| `gamepadId` | [Int](/api-docs/clay-native/Int/) | The ID of the gamepad to check  |
| `button` | [GamepadButton](/api-docs/clay-native/ceramic/GamepadButton/) | The button to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if the button was just released this frame |

<hr class="field-separator" />

<div class="signature field-method has-description" id="gamepadAxisValue"><code><span class="field-name">gamepadAxisValue</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">axis</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/GamepadAxis/" class="type-link">GamepadAxis</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#gamepadAxisValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the current value of a gamepad analog axis.


| Name | Type | Description |
|------|------|-------------|
| `gamepadId` | [Int](/api-docs/clay-native/Int/) | The ID of the gamepad to check  |
| `axis` | [GamepadAxis](/api-docs/clay-native/ceramic/GamepadAxis/) | The axis to check (e.g., LEFT_X, RIGHT_TRIGGER)  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-native/Float/) | The axis value (-1.0 to 1.0 for sticks, 0.0 to 1.0 for triggers) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="gamepadGyroDeltaX"><code><span class="field-name">gamepadGyroDeltaX</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#gamepadGyroDeltaX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the accumulated gyroscope delta for the X axis since last frame.


| Name | Type | Description |
|------|------|-------------|
| `gamepadId` | [Int](/api-docs/clay-native/Int/) | The ID of the gamepad  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-native/Float/) | Angular velocity around X axis (radians/second) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="gamepadGyroDeltaY"><code><span class="field-name">gamepadGyroDeltaY</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#gamepadGyroDeltaY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the accumulated gyroscope delta for the Y axis since last frame.


| Name | Type | Description |
|------|------|-------------|
| `gamepadId` | [Int](/api-docs/clay-native/Int/) | The ID of the gamepad  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-native/Float/) | Angular velocity around Y axis (radians/second) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="gamepadGyroDeltaZ"><code><span class="field-name">gamepadGyroDeltaZ</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#gamepadGyroDeltaZ"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the accumulated gyroscope delta for the Z axis since last frame.


| Name | Type | Description |
|------|------|-------------|
| `gamepadId` | [Int](/api-docs/clay-native/Int/) | The ID of the gamepad  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-native/Float/) | Angular velocity around Z axis (radians/second) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="startGamepadRumble"><code><span class="field-name">startGamepadRumble</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">duration</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">lowFrequency</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">highFrequency</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#startGamepadRumble"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Starts a controller rumble.


| Name | Type | Description |
|------|------|-------------|
| `gamepadId` | [Int](/api-docs/clay-native/Int/) | The id of the gamepad getting rumble  |
| `duration` | [Float](/api-docs/clay-native/Float/) | The duration, in seconds  |
| `lowFrequency` | [Float](/api-docs/clay-native/Float/) | Low frequency: value between 0 and 1  |
| `highFrequency` | [Float](/api-docs/clay-native/Float/) | High frequency: value between 0 and 1 |

<hr class="field-separator" />

<div class="signature field-method has-description" id="stopGamepadRumble"><code><span class="field-name">stopGamepadRumble</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#stopGamepadRumble"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Stops any active rumble on the specified gamepad.


| Name | Type | Description |
|------|------|-------------|
| `gamepadId` | [Int](/api-docs/clay-native/Int/) | The ID of the gamepad |

<hr class="field-separator" />

<div class="signature field-method has-description" id="gamepadName"><code><span class="field-name">gamepadName</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#gamepadName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the name/description of a connected gamepad.


| Name | Type | Description |
|------|------|-------------|
| `gamepadId` | [Int](/api-docs/clay-native/Int/) | The ID of the gamepad  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-native/String/) | The gamepad name, or null if not connected |

## Private Members

<div class="signature field-var has-description" id="GAMEPAD_STORAGE_SIZE"><code><span class="field-name">GAMEPAD_STORAGE_SIZE</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#GAMEPAD_STORAGE_SIZE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal value to store gamepad state

<hr class="field-separator" />

<div class="signature field-var no-description" id="pressedScanCodes"><code><span class="field-name">pressedScanCodes</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/IntIntMap/" class="type-link">IntIntMap</a></code><a class="header-anchor" href="#pressedScanCodes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="pressedKeyCodes"><code><span class="field-name">pressedKeyCodes</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/IntIntMap/" class="type-link">IntIntMap</a></code><a class="header-anchor" href="#pressedKeyCodes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="pressedGamepadButtons"><code><span class="field-name">pressedGamepadButtons</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/IntIntMap/" class="type-link">IntIntMap</a></code><a class="header-anchor" href="#pressedGamepadButtons"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="gamepadAxisValues"><code><span class="field-name">gamepadAxisValues</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/IntFloatMap/" class="type-link">IntFloatMap</a></code><a class="header-anchor" href="#gamepadAxisValues"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="gamepadGyroDeltas"><code><span class="field-name">gamepadGyroDeltas</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/IntMap/" class="type-link">IntMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#gamepadGyroDeltas"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="gamepadGyroKeys"><code><span class="field-name">gamepadGyroKeys</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#gamepadGyroKeys"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="gamepadNames"><code><span class="field-name">gamepadNames</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/IntMap/" class="type-link">IntMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#gamepadNames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitKeyDown"><code><span class="field-name">emitKeyDown</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Key/" class="type-link">Key</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitKeyDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Triggered when a key from the keyboard is being pressed.
This event fires repeatedly while a key is held down.
@event keyDown

| Name | Type | Description |
|------|------|-------------|
| `key` | [Key](/api-docs/clay-native/ceramic/Key/) | The key being pressed, containing both keyCode and scanCode  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitKeyUp"><code><span class="field-name">emitKeyUp</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Key/" class="type-link">Key</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitKeyUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Triggered when a key from the keyboard is being released.
@event keyUp

| Name | Type | Description |
|------|------|-------------|
| `key` | [Key](/api-docs/clay-native/ceramic/Key/) | The key being released, containing both keyCode and scanCode  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitGamepadAxis"><code><span class="field-name">emitGamepadAxis</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">axis</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/GamepadAxis/" class="type-link">GamepadAxis</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitGamepadAxis"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Triggered when a gamepad analog axis value changes.
@event gamepadAxis

| Name | Type | Description |
|------|------|-------------|
| `gamepadId` | [Int](/api-docs/clay-native/Int/) | The ID of the gamepad (0-based index)  |
| `axis` | [GamepadAxis](/api-docs/clay-native/ceramic/GamepadAxis/) | The axis that changed (e.g., LEFT_X, RIGHT_TRIGGER)  |
| `value` | [Float](/api-docs/clay-native/Float/) | The new axis value (-1.0 to 1.0 for sticks, 0.0 to 1.0 for triggers)  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitGamepadDown"><code><span class="field-name">emitGamepadDown</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">button</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/GamepadButton/" class="type-link">GamepadButton</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitGamepadDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Triggered when a gamepad button is pressed.
@event gamepadDown

| Name | Type | Description |
|------|------|-------------|
| `gamepadId` | [Int](/api-docs/clay-native/Int/) | The ID of the gamepad (0-based index)  |
| `button` | [GamepadButton](/api-docs/clay-native/ceramic/GamepadButton/) | The button being pressed  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitGamepadUp"><code><span class="field-name">emitGamepadUp</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">button</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/GamepadButton/" class="type-link">GamepadButton</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitGamepadUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Triggered when a gamepad button is released.
@event gamepadUp

| Name | Type | Description |
|------|------|-------------|
| `gamepadId` | [Int](/api-docs/clay-native/Int/) | The ID of the gamepad (0-based index)  |
| `button` | [GamepadButton](/api-docs/clay-native/ceramic/GamepadButton/) | The button being released  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitGamepadGyro"><code><span class="field-name">emitGamepadGyro</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dx</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">dy</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">dz</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitGamepadGyro"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Triggered when gamepad gyroscope data is received.
@event gamepadGyro

| Name | Type | Description |
|------|------|-------------|
| `gamepadId` | [Int](/api-docs/clay-native/Int/) | The ID of the gamepad (0-based index)  |
| `dx` | [Float](/api-docs/clay-native/Float/) | Angular velocity around X axis (radians/second)  |
| `dy` | [Float](/api-docs/clay-native/Float/) | Angular velocity around Y axis (radians/second)  |
| `dz` | [Float](/api-docs/clay-native/Float/) | Angular velocity around Z axis (radians/second)  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitGamepadEnable"><code><span class="field-name">emitGamepadEnable</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitGamepadEnable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Triggered when a gamepad is connected and enabled.
@event gamepadEnable

| Name | Type | Description |
|------|------|-------------|
| `gamepadId` | [Int](/api-docs/clay-native/Int/) | The ID assigned to the gamepad (0-based index)  |
| `name` | [String](/api-docs/clay-native/String/) | The name/description of the gamepad device  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitGamepadDisable"><code><span class="field-name">emitGamepadDisable</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitGamepadDisable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Triggered when a gamepad is disconnected or disabled.
@event gamepadDisable

| Name | Type | Description |
|------|------|-------------|
| `gamepadId` | [Int](/api-docs/clay-native/Int/) | The ID of the gamepad being disabled  |

<hr class="field-separator" />

<div class="signature field-method no-description" id="resetDeltas"><code><span class="field-name">resetDeltas</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resetDeltas"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="willEmitKeyDown"><code><span class="field-name">willEmitKeyDown</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Key/" class="type-link">Key</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#willEmitKeyDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [Key](/api-docs/clay-native/ceramic/Key/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="willEmitKeyUp"><code><span class="field-name">willEmitKeyUp</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Key/" class="type-link">Key</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#willEmitKeyUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [Key](/api-docs/clay-native/ceramic/Key/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="willEmitGamepadEnable"><code><span class="field-name">willEmitGamepadEnable</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#willEmitGamepadEnable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `gamepadId` | [Int](/api-docs/clay-native/Int/) |
| `name` | [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="willEmitGamepadDisable"><code><span class="field-name">willEmitGamepadDisable</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#willEmitGamepadDisable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `gamepadId` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="willEmitGamepadDown"><code><span class="field-name">willEmitGamepadDown</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">button</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/GamepadButton/" class="type-link">GamepadButton</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#willEmitGamepadDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `gamepadId` | [Int](/api-docs/clay-native/Int/) |
| `button` | [GamepadButton](/api-docs/clay-native/ceramic/GamepadButton/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="willEmitGamepadUp"><code><span class="field-name">willEmitGamepadUp</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">button</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/GamepadButton/" class="type-link">GamepadButton</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#willEmitGamepadUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `gamepadId` | [Int](/api-docs/clay-native/Int/) |
| `button` | [GamepadButton](/api-docs/clay-native/ceramic/GamepadButton/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="willEmitGamepadGyro"><code><span class="field-name">willEmitGamepadGyro</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dx</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">dy</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">dz</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#willEmitGamepadGyro"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `gamepadId` | [Int](/api-docs/clay-native/Int/) |
| `dx` | [Float](/api-docs/clay-native/Float/) |
| `dy` | [Float](/api-docs/clay-native/Float/) |
| `dz` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="willEmitGamepadAxis"><code><span class="field-name">willEmitGamepadAxis</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">axis</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/GamepadAxis/" class="type-link">GamepadAxis</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#willEmitGamepadAxis"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `gamepadId` | [Int](/api-docs/clay-native/Int/) |
| `axis` | [GamepadAxis](/api-docs/clay-native/ceramic/GamepadAxis/) |
| `value` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Private constructor. Input is managed as a singleton through App.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="canEmitKeyDown"><div class="plugin-name">elements</div><code><span class="field-name">canEmitKeyDown</span><span class="parenthesis">(</span><span class="arg-name">owner</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Entity/" class="type-link">Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#canEmitKeyDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `owner` | [Entity](/api-docs/clay-native/ceramic/Entity/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="canEmitKeyUp"><div class="plugin-name">elements</div><code><span class="field-name">canEmitKeyUp</span><span class="parenthesis">(</span><span class="arg-name">owner</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Entity/" class="type-link">Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#canEmitKeyUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `owner` | [Entity](/api-docs/clay-native/ceramic/Entity/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="canEmitGamepadDown"><div class="plugin-name">elements</div><code><span class="field-name">canEmitGamepadDown</span><span class="parenthesis">(</span><span class="arg-name">owner</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Entity/" class="type-link">Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#canEmitGamepadDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `owner` | [Entity](/api-docs/clay-native/ceramic/Entity/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="canEmitGamepadUp"><div class="plugin-name">elements</div><code><span class="field-name">canEmitGamepadUp</span><span class="parenthesis">(</span><span class="arg-name">owner</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Entity/" class="type-link">Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#canEmitGamepadUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `owner` | [Entity](/api-docs/clay-native/ceramic/Entity/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:allow` | ceramic.App |

