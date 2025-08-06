---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: Input
target: Clay (Web)
permalink: api-docs/clay-web/backend/Input/
---

# Input

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/clay/runtime/src/backend/Input.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.Input</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-web/spec/Input/">spec.Input</a>, <a href="/api-docs/clay-web/tracker/Events/">tracker.Events</a></div>

Clay backend input handling implementation.

This class provides the input event system for the Clay backend, handling:
- Keyboard input events (key presses and releases)
- Gamepad/controller input including analog sticks, buttons, and gyroscope
- Gamepad haptic feedback (rumble/vibration)

Input events are forwarded from the Clay runtime (SDL on native platforms)
and dispatched through Ceramic's event system. The backend supports multiple
simultaneous gamepads and provides normalized analog stick values.

## Instance Members

<div class="signature field-method has-description has-plugin" id="startGamepadRumble"><div class="plugin-name">clay</div><code><span class="field-name">startGamepadRumble</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">lowFrequency</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">highFrequency</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">duration</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#startGamepadRumble"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Starts haptic feedback (rumble/vibration) on a gamepad.

Modern gamepads typically have two rumble motors:
- Low frequency motor: Creates a strong, rumbly vibration
- High frequency motor: Creates a weaker, buzzy vibration



| Name | Type | Description |
|------|------|-------------|
| `gamepadId` | [Int](/api-docs/clay-web/Int/) | The ID of the gamepad to rumble  |
| `lowFrequency` | [Float](/api-docs/clay-web/Float/) | Intensity of the low frequency motor (0.0 to 1.0)  |
| `highFrequency` | [Float](/api-docs/clay-web/Float/) | Intensity of the high frequency motor (0.0 to 1.0)  |
| `duration` | [Float](/api-docs/clay-web/Float/) | Duration of the rumble effect in seconds (0 for infinite) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="stopGamepadRumble"><div class="plugin-name">clay</div><code><span class="field-name">stopGamepadRumble</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#stopGamepadRumble"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Stops any active haptic feedback on a gamepad.



| Name | Type | Description |
|------|------|-------------|
| `gamepadId` | [Int](/api-docs/clay-web/Int/) | The ID of the gamepad to stop rumbling |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="unbindEvents"><div class="plugin-name">clay</div><code><span class="field-name">unbindEvents</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unbindEvents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">clay</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new Input backend instance.
Input events are automatically dispatched by the Clay runtime.

## Private Members

<div class="signature field-method has-description has-plugin" id="emitKeyDown"><div class="plugin-name">clay</div><code><span class="field-name">emitKeyDown</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Key/" class="type-link">ceramic.Key</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitKeyDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired when a keyboard key is pressed down.


| Name | Type | Description |
|------|------|-------------|
| `key` | [ceramic.Key](/api-docs/clay-web/ceramic/Key/) | The key that was pressed, including both key code and scan code information |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitKeyUp"><div class="plugin-name">clay</div><code><span class="field-name">emitKeyUp</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Key/" class="type-link">ceramic.Key</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitKeyUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired when a keyboard key is released.


| Name | Type | Description |
|------|------|-------------|
| `key` | [ceramic.Key](/api-docs/clay-web/ceramic/Key/) | The key that was released, including both key code and scan code information |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitGamepadAxis"><div class="plugin-name">clay</div><code><span class="field-name">emitGamepadAxis</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">axisId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitGamepadAxis"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired when a gamepad analog stick or trigger moves.


| Name | Type | Description |
|------|------|-------------|
| `gamepadId` | [Int](/api-docs/clay-web/Int/) | The ID of the gamepad (0-based index)  |
| `axisId` | [Int](/api-docs/clay-web/Int/) | The axis identifier (e.g., 0=left stick X, 1=left stick Y)  |
| `value` | [Float](/api-docs/clay-web/Float/) | The normalized axis value, typically -1.0 to 1.0 for sticks, 0.0 to 1.0 for triggers |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitGamepadDown"><div class="plugin-name">clay</div><code><span class="field-name">emitGamepadDown</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">buttonId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitGamepadDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired when a gamepad button is pressed down.


| Name | Type | Description |
|------|------|-------------|
| `gamepadId` | [Int](/api-docs/clay-web/Int/) | The ID of the gamepad (0-based index)  |
| `buttonId` | [Int](/api-docs/clay-web/Int/) | The button identifier (mapped to standard gamepad layout) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitGamepadUp"><div class="plugin-name">clay</div><code><span class="field-name">emitGamepadUp</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">buttonId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitGamepadUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired when a gamepad button is released.


| Name | Type | Description |
|------|------|-------------|
| `gamepadId` | [Int](/api-docs/clay-web/Int/) | The ID of the gamepad (0-based index)  |
| `buttonId` | [Int](/api-docs/clay-web/Int/) | The button identifier (mapped to standard gamepad layout) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitGamepadGyro"><div class="plugin-name">clay</div><code><span class="field-name">emitGamepadGyro</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dx</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">dy</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">dz</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitGamepadGyro"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired when gamepad gyroscope data is received (if supported by the controller).


| Name | Type | Description |
|------|------|-------------|
| `gamepadId` | [Int](/api-docs/clay-web/Int/) | The ID of the gamepad (0-based index)  |
| `dx` | [Float](/api-docs/clay-web/Float/) | Angular velocity around X axis (pitch) in degrees per second  |
| `dy` | [Float](/api-docs/clay-web/Float/) | Angular velocity around Y axis (yaw) in degrees per second  |
| `dz` | [Float](/api-docs/clay-web/Float/) | Angular velocity around Z axis (roll) in degrees per second |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitGamepadEnable"><div class="plugin-name">clay</div><code><span class="field-name">emitGamepadEnable</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitGamepadEnable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired when a gamepad is connected and recognized.


| Name | Type | Description |
|------|------|-------------|
| `gamepadId` | [Int](/api-docs/clay-web/Int/) | The ID assigned to the gamepad (0-based index)  |
| `name` | [String](/api-docs/clay-web/String/) | The name/description of the gamepad device |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitGamepadDisable"><div class="plugin-name">clay</div><code><span class="field-name">emitGamepadDisable</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitGamepadDisable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired when a gamepad is disconnected.


| Name | Type | Description |
|------|------|-------------|
| `gamepadId` | [Int](/api-docs/clay-web/Int/) | The ID of the disconnected gamepad |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

