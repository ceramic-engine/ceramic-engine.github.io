---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: ClayEvents
target: Clay (Native)
permalink: api-docs/clay-native/backend/ClayEvents/
---

# ClayEvents

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/clay/runtime/src/backend/ClayEvents.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/clay/Events/">clay.Events</a> → <strong>backend.ClayEvents</strong> (Class)</div>

Event handler for the Clay backend that bridges low-level Clay engine events
to high-level Ceramic framework events.

This class processes all input events from the Clay engine including:
- Mouse events (desktop/web platforms)
- Touch events (mobile platforms)
- Keyboard events
- Gamepad events with button mapping and axis-to-button conversion
- Application lifecycle events
- Window events
- Text input events

Platform-specific behavior:
- Desktop (Mac/Windows/Linux): Mouse input only, no touch
- Mobile (iOS/Android): Touch input only, no mouse
- Web: Mouse input with optional gamepad button remapping

The class includes gamepad normalization to ensure consistent button
mappings across different controller types and platforms.

## Instance Members

<div class="signature field-method has-description has-plugin" id="ready"><div class="plugin-name">clay</div><code><span class="field-name">ready</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ready"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when the Clay engine is ready.
Initializes the backend reference and triggers the ready callback.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="tick"><div class="plugin-name">clay</div><code><span class="field-name">tick</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#tick"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called every frame update.


| Name | Type | Description |
|------|------|-------------|
| `delta` | [Float](/api-docs/clay-native/Float/) | Time elapsed since last frame in seconds |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="render"><div class="plugin-name">clay</div><code><span class="field-name">render</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#render"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when a frame needs to be rendered.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="sdlEvent"><div class="plugin-name">clay</div><code><span class="field-name">sdlEvent</span><span class="parenthesis">(</span><span class="arg-name">event</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLEvent/" class="type-link">clay.sdl.SDLEvent</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#sdlEvent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles raw SDL events for platform-specific functionality.


| Name | Type | Description |
|------|------|-------------|
| `event` | [clay.sdl.SDLEvent](/api-docs/clay-native/clay/sdl/SDLEvent/) | The SDL event to process |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="appEvent"><div class="plugin-name">clay</div><code><span class="field-name">appEvent</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/AppEventType/" class="type-link">clay.AppEventType</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#appEvent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles application lifecycle events.


| Name | Type | Description |
|------|------|-------------|
| `type` | [clay.AppEventType](/api-docs/clay-native/clay/AppEventType/) | The type of application event |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="mouseDown"><div class="plugin-name">clay</div><code><span class="field-name">mouseDown</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">button</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">windowId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#mouseDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles mouse button press events.
Converts physical pixel coordinates to logical coordinates using screen density.
Ensures proper handling of multiple presses of the same button by triggering mouseUp first.

Platform availability: Desktop (Mac/Windows/Linux) and Web only.



| Name | Type | Description |
|------|------|-------------|
| `x` | [Int](/api-docs/clay-native/Int/) | Physical X coordinate in pixels  |
| `y` | [Int](/api-docs/clay-native/Int/) | Physical Y coordinate in pixels  |
| `button` | [Int](/api-docs/clay-native/Int/) | Mouse button ID (0=left, 1=middle, 2=right)  |
| `timestamp` | [Float](/api-docs/clay-native/Float/) | Event timestamp in seconds  |
| `windowId` | [Int](/api-docs/clay-native/Int/) | ID of the window that received the event |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="mouseUp"><div class="plugin-name">clay</div><code><span class="field-name">mouseUp</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">button</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">windowId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#mouseUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles mouse button release events.
Converts physical pixel coordinates to logical coordinates using screen density.
Ignores mouse up events for buttons that weren't previously pressed down.

Platform availability: Desktop (Mac/Windows/Linux) and Web only.



| Name | Type | Description |
|------|------|-------------|
| `x` | [Int](/api-docs/clay-native/Int/) | Physical X coordinate in pixels  |
| `y` | [Int](/api-docs/clay-native/Int/) | Physical Y coordinate in pixels  |
| `button` | [Int](/api-docs/clay-native/Int/) | Mouse button ID (0=left, 1=middle, 2=right)  |
| `timestamp` | [Float](/api-docs/clay-native/Float/) | Event timestamp in seconds  |
| `windowId` | [Int](/api-docs/clay-native/Int/) | ID of the window that received the event |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="mouseMove"><div class="plugin-name">clay</div><code><span class="field-name">mouseMove</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">xrel</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">yrel</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">windowId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#mouseMove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles mouse movement events.
Converts physical pixel coordinates to logical coordinates using screen density.
Updates internal mouse position tracking and emits movement events.

Platform availability: Desktop (Mac/Windows/Linux) and Web only.



| Name | Type | Description |
|------|------|-------------|
| `x` | [Int](/api-docs/clay-native/Int/) | Physical X coordinate in pixels  |
| `y` | [Int](/api-docs/clay-native/Int/) | Physical Y coordinate in pixels  |
| `xrel` | [Int](/api-docs/clay-native/Int/) | Relative X movement in pixels (not used)  |
| `yrel` | [Int](/api-docs/clay-native/Int/) | Relative Y movement in pixels (not used)  |
| `timestamp` | [Float](/api-docs/clay-native/Float/) | Event timestamp in seconds  |
| `windowId` | [Int](/api-docs/clay-native/Int/) | ID of the window that received the event |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="mouseWheel"><div class="plugin-name">clay</div><code><span class="field-name">mouseWheel</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">windowId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#mouseWheel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles mouse wheel scroll events.
Passes through wheel delta values directly without coordinate transformation.

Platform availability: Desktop (Mac/Windows/Linux) and Web only.



| Name | Type | Description |
|------|------|-------------|
| `x` | [Float](/api-docs/clay-native/Float/) | Horizontal scroll delta (positive = right, negative = left)  |
| `y` | [Float](/api-docs/clay-native/Float/) | Vertical scroll delta (positive = up, negative = down)  |
| `timestamp` | [Float](/api-docs/clay-native/Float/) | Event timestamp in seconds  |
| `windowId` | [Int](/api-docs/clay-native/Int/) | ID of the window that received the event |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="keyDown"><div class="plugin-name">clay</div><code><span class="field-name">keyDown</span><span class="parenthesis">(</span><span class="arg-name">keyCode</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/KeyCode/" class="type-link">clay.KeyCode</a><span class="operator">,</span> <span class="arg-name">scanCode</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/ScanCode/" class="type-link">clay.ScanCode</a><span class="operator">,</span> <span class="arg-name">repeat</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">mod</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/ModState/" class="type-link">clay.ModState</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">windowId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#keyDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles keyboard key press events.
Emits both input events for game logic and text input events for text editing.
Supports key repeating when a key is held down.



| Name | Type | Description |
|------|------|-------------|
| `keyCode` | [clay.KeyCode](/api-docs/clay-native/clay/KeyCode/) | Virtual key code representing the key's logical meaning  |
| `scanCode` | [clay.ScanCode](/api-docs/clay-native/clay/ScanCode/) | Physical scan code representing the key's hardware position  |
| `repeat` | [Bool](/api-docs/clay-native/Bool/) | Whether this is a repeat event from holding the key down  |
| `mod` | [clay.ModState](/api-docs/clay-native/clay/ModState/) | Modifier key state (Shift, Ctrl, Alt, etc.)  |
| `timestamp` | [Float](/api-docs/clay-native/Float/) | Event timestamp in seconds  |
| `windowId` | [Int](/api-docs/clay-native/Int/) | ID of the window that received the event |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="keyUp"><div class="plugin-name">clay</div><code><span class="field-name">keyUp</span><span class="parenthesis">(</span><span class="arg-name">keyCode</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/KeyCode/" class="type-link">clay.KeyCode</a><span class="operator">,</span> <span class="arg-name">scanCode</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/ScanCode/" class="type-link">clay.ScanCode</a><span class="operator">,</span> <span class="arg-name">repeat</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">mod</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/ModState/" class="type-link">clay.ModState</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">windowId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#keyUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles keyboard key release events.
Emits both input events for game logic and text input events for text editing.



| Name | Type | Description |
|------|------|-------------|
| `keyCode` | [clay.KeyCode](/api-docs/clay-native/clay/KeyCode/) | Virtual key code representing the key's logical meaning  |
| `scanCode` | [clay.ScanCode](/api-docs/clay-native/clay/ScanCode/) | Physical scan code representing the key's hardware position  |
| `repeat` | [Bool](/api-docs/clay-native/Bool/) | Should always be false for key up events  |
| `mod` | [clay.ModState](/api-docs/clay-native/clay/ModState/) | Modifier key state (Shift, Ctrl, Alt, etc.)  |
| `timestamp` | [Float](/api-docs/clay-native/Float/) | Event timestamp in seconds  |
| `windowId` | [Int](/api-docs/clay-native/Int/) | ID of the window that received the event |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="gamepadAxis"><div class="plugin-name">clay</div><code><span class="field-name">gamepadAxis</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">axisId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#gamepadAxis"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles gamepad analog stick and trigger movement events.
Auto-enables gamepads on first input. Converts triggers to button presses when value >= 0.5.
Rounds axis values to reduce noise and only emits events when values change meaningfully.

Platform behavior:
- Desktop: Full gamepad support with axis-to-button mapping for triggers
- Web: Gamepad support with potential button remapping for Nintendo controllers
- iOS: Disabled by default



| Name | Type | Description |
|------|------|-------------|
| `id` | [Int](/api-docs/clay-native/Int/) | Gamepad device ID (0-3 typically)  |
| `axisId` | [Int](/api-docs/clay-native/Int/) | Axis identifier (0=left stick X, 1=left stick Y, 2=right stick X, etc.)  |
| `value` | [Float](/api-docs/clay-native/Float/) | Axis value from -1.0 to 1.0 (or 0.0 to 1.0 for triggers)  |
| `timestamp` | [Float](/api-docs/clay-native/Float/) | Event timestamp in seconds |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="gamepadDown"><div class="plugin-name">clay</div><code><span class="field-name">gamepadDown</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">buttonId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#gamepadDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles gamepad button press events.
Auto-enables gamepads on first input and applies platform-specific button remapping.
Prevents duplicate button press events and handles Nintendo controller button swapping on web.

Button mapping:
- Standard: 0=A, 1=B, 2=X, 3=Y, 4=LB, 5=RB, etc.
- Nintendo on Web: A/B and X/Y positions are swapped to match Nintendo layout
- SDL platforms: Uses custom mapping to match HTML5 gamepad API



| Name | Type | Description |
|------|------|-------------|
| `id` | [Int](/api-docs/clay-native/Int/) | Gamepad device ID (0-3 typically)  |
| `buttonId` | [Int](/api-docs/clay-native/Int/) | Physical button identifier from the platform  |
| `value` | [Float](/api-docs/clay-native/Float/) | Button pressure (0.0 to 1.0, usually 0.0 or 1.0 for digital buttons)  |
| `timestamp` | [Float](/api-docs/clay-native/Float/) | Event timestamp in seconds |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="gamepadUp"><div class="plugin-name">clay</div><code><span class="field-name">gamepadUp</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">buttonId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#gamepadUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles gamepad button release events.
Auto-enables gamepads on first input and applies the same button remapping as gamepadDown.
Only emits events for buttons that were previously pressed to prevent spurious releases.

Uses identical button mapping logic to gamepadDown to ensure consistent behavior.



| Name | Type | Description |
|------|------|-------------|
| `id` | [Int](/api-docs/clay-native/Int/) | Gamepad device ID (0-3 typically)  |
| `buttonId` | [Int](/api-docs/clay-native/Int/) | Physical button identifier from the platform  |
| `value` | [Float](/api-docs/clay-native/Float/) | Button pressure (usually 0.0 for button release)  |
| `timestamp` | [Float](/api-docs/clay-native/Float/) | Event timestamp in seconds |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="gamepadGyro"><div class="plugin-name">clay</div><code><span class="field-name">gamepadGyro</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dx</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">dy</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">dz</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#gamepadGyro"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles gamepad gyroscope/motion sensor events.
Auto-enables gamepads on first input and applies scaling to convert raw sensor data
to degrees per second. On web with native bridge, this is handled elsewhere.

The scaling factor (360.0 / 1550.0) converts platform-specific gyro units
to standard degrees per second for consistent cross-platform behavior.

Platform availability:
- Desktop: Gyro data from supported controllers (PS4, PS5, Switch Pro)
- Web: Available unless ceramic_native_bridge is used
- Mobile: Depends on controller support



| Name | Type | Description |
|------|------|-------------|
| `id` | [Int](/api-docs/clay-native/Int/) | Gamepad device ID  |
| `dx` | [Float](/api-docs/clay-native/Float/) | Gyro rotation rate around X-axis (raw platform units)  |
| `dy` | [Float](/api-docs/clay-native/Float/) | Gyro rotation rate around Y-axis (raw platform units)  |
| `dz` | [Float](/api-docs/clay-native/Float/) | Gyro rotation rate around Z-axis (raw platform units)  |
| `timestamp` | [Float](/api-docs/clay-native/Float/) | Event timestamp in seconds |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="gamepadDevice"><div class="plugin-name">clay</div><code><span class="field-name">gamepadDevice</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/GamepadDeviceEventType/" class="type-link">clay.GamepadDeviceEventType</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#gamepadDevice"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles gamepad connection and disconnection events.
Manages gamepad lifecycle including proper cleanup of pressed buttons on disconnect
and initialization of button state on connect. Uses temporary tracking to prevent
immediate re-detection of removed gamepads.

When a gamepad is removed:
- All pressed buttons are released with gamepadUp events
- The gamepad is disabled and marked as temporarily removed
- Removal tracking is cleared on the next frame update

When a gamepad is added:
- Button state is initialized to all unpressed
- Gamepad-specific configuration is applied (button swapping, etc.)
- The gamepad is enabled and ready for input



| Name | Type | Description |
|------|------|-------------|
| `id` | [Int](/api-docs/clay-native/Int/) | Gamepad device ID  |
| `name` | [String](/api-docs/clay-native/String/) | Gamepad name/identifier string for device detection  |
| `type` | [clay.GamepadDeviceEventType](/api-docs/clay-native/clay/GamepadDeviceEventType/) | Device event type (DEVICE_ADDED or DEVICE_REMOVED)  |
| `timestamp` | [Float](/api-docs/clay-native/Float/) | Event timestamp in seconds |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="text"><div class="plugin-name">clay</div><code><span class="field-name">text</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">start</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/TextEventType/" class="type-link">clay.TextEventType</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">windowId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#text"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles text input events for text editing functionality.
Only processes text input when text input mode is active, allowing for
proper text editing in text fields while ignoring text when not needed.

This is separate from keyboard events and provides the actual character input
including support for international keyboards, input methods, and composed text.



| Name | Type | Description |
|------|------|-------------|
| `text` | [String](/api-docs/clay-native/String/) | The text string that was input (may be multiple characters)  |
| `start` | [Int](/api-docs/clay-native/Int/) | Starting position for text editing (not used)  |
| `length` | [Int](/api-docs/clay-native/Int/) | Length of text selection/replacement (not used)  |
| `type` | [clay.TextEventType](/api-docs/clay-native/clay/TextEventType/) | Type of text event (input, editing, etc.)  |
| `timestamp` | [Float](/api-docs/clay-native/Float/) | Event timestamp in seconds  |
| `windowId` | [Int](/api-docs/clay-native/Int/) | ID of the window that received the event |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="windowEvent"><div class="plugin-name">clay</div><code><span class="field-name">windowEvent</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/WindowEventType/" class="type-link">clay.WindowEventType</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">windowId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#windowEvent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles window-related events such as focus changes, resize, and fullscreen transitions.
Most events are handled automatically by the Clay engine, but fullscreen state changes
need to be synchronized with the Ceramic app settings.

Fullscreen events:
- ENTER_FULLSCREEN: Updates app settings to reflect fullscreen state
- EXIT_FULLSCREEN: Updates app settings to reflect windowed state

Other events (SHOWN, HIDDEN, MINIMIZED, etc.) are currently not handled but
could be extended for application-specific window management needs.



| Name | Type | Description |
|------|------|-------------|
| `type` | [clay.WindowEventType](/api-docs/clay-native/clay/WindowEventType/) | The type of window event that occurred  |
| `timestamp` | [Float](/api-docs/clay-native/Float/) | Event timestamp in seconds  |
| `windowId` | [Int](/api-docs/clay-native/Int/) | ID of the window that generated the event  |
| `x` | [Int](/api-docs/clay-native/Int/) | X coordinate data (usage depends on event type)  |
| `y` | [Int](/api-docs/clay-native/Int/) | Y coordinate data (usage depends on event type) |

## Private Members

<div class="signature field-var has-description has-plugin" id="GAMEPAD_STORAGE_SIZE"><div class="plugin-name">clay</div><code><span class="field-name">GAMEPAD_STORAGE_SIZE</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#GAMEPAD_STORAGE_SIZE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal value to store gamepad state.
Each gamepad can have up to 32 buttons/axes tracked.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="backend"><div class="plugin-name">clay</div><code><span class="field-name">backend</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Backend/" class="type-link">Backend</a></code><a class="header-anchor" href="#backend"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reference to the main backend instance

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="lastDensity"><div class="plugin-name">clay</div><code><span class="field-name">lastDensity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lastDensity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cached screen density to detect changes

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="lastWidth"><div class="plugin-name">clay</div><code><span class="field-name">lastWidth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lastWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cached screen width to detect changes

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="lastHeight"><div class="plugin-name">clay</div><code><span class="field-name">lastHeight</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lastHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cached screen height to detect changes

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="mouseDownButtons"><div class="plugin-name">clay</div><code><span class="field-name">mouseDownButtons</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/IntBoolMap/" class="type-link">ceramic.IntBoolMap</a></code><a class="header-anchor" href="#mouseDownButtons"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tracks which mouse buttons are currently pressed

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="mouseX"><div class="plugin-name">clay</div><code><span class="field-name">mouseX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#mouseX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current mouse X position in logical coordinates

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="mouseY"><div class="plugin-name">clay</div><code><span class="field-name">mouseY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#mouseY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current mouse Y position in logical coordinates

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="activeGamepads"><div class="plugin-name">clay</div><code><span class="field-name">activeGamepads</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/IntBoolMap/" class="type-link">ceramic.IntBoolMap</a></code><a class="header-anchor" href="#activeGamepads"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tracks currently connected gamepad IDs

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="removedGamepads"><div class="plugin-name">clay</div><code><span class="field-name">removedGamepads</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/IntBoolMap/" class="type-link">ceramic.IntBoolMap</a></code><a class="header-anchor" href="#removedGamepads"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Temporarily tracks removed gamepads to prevent immediate re-detection

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="swapAbGamepads"><div class="plugin-name">clay</div><code><span class="field-name">swapAbGamepads</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/IntBoolMap/" class="type-link">ceramic.IntBoolMap</a></code><a class="header-anchor" href="#swapAbGamepads"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tracks which gamepads need A/B button swapping (Nintendo controllers)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="swapXyGamepads"><div class="plugin-name">clay</div><code><span class="field-name">swapXyGamepads</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/IntBoolMap/" class="type-link">ceramic.IntBoolMap</a></code><a class="header-anchor" href="#swapXyGamepads"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tracks which gamepads need X/Y button swapping (Nintendo controllers)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="gamepadAxisToButton"><div class="plugin-name">clay</div><code><span class="field-name">gamepadAxisToButton</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/IntIntMap/" class="type-link">ceramic.IntIntMap</a></code><a class="header-anchor" href="#gamepadAxisToButton"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Maps gamepad axis IDs to virtual button IDs (for triggers)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="gamepadButtonMapping"><div class="plugin-name">clay</div><code><span class="field-name">gamepadButtonMapping</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/IntIntMap/" class="type-link">ceramic.IntIntMap</a></code><a class="header-anchor" href="#gamepadButtonMapping"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Remaps physical button IDs to standardized button IDs

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="gamepadPressedValues"><div class="plugin-name">clay</div><code><span class="field-name">gamepadPressedValues</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/IntIntMap/" class="type-link">ceramic.IntIntMap</a></code><a class="header-anchor" href="#gamepadPressedValues"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Stores pressed state for each gamepad button (packed storage)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="gamepadAxisValues"><div class="plugin-name">clay</div><code><span class="field-name">gamepadAxisValues</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/IntFloatMap/" class="type-link">ceramic.IntFloatMap</a></code><a class="header-anchor" href="#gamepadAxisValues"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cached gamepad axis values for change detection (packed storage)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="gamepadGyroValues"><div class="plugin-name">clay</div><code><span class="field-name">gamepadGyroValues</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/IntMap/" class="type-link">ceramic.IntMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#gamepadGyroValues"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cached gyroscope values for change detection

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="gamepadsEnabled"><div class="plugin-name">clay</div><code><span class="field-name">gamepadsEnabled</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#gamepadsEnabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether gamepad input processing is enabled

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handleReady"><div class="plugin-name">clay</div><code><span class="field-name">handleReady</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleReady"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Callback invoked when the event system is ready

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="configureGamepadMapping"><div class="plugin-name">clay</div><code><span class="field-name">configureGamepadMapping</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#configureGamepadMapping"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Configures gamepad button mapping to normalize differences between
SDL gamepad API and HTML5 gamepad API. This ensures consistent
button IDs across platforms.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="triggerResizeIfNeeded"><div class="plugin-name">clay</div><code><span class="field-name">triggerResizeIfNeeded</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#triggerResizeIfNeeded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if screen dimensions or density have changed and triggers
a resize event if needed. This handles cases where the engine
might miss resize events.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">clay</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">handleReady</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new Clay events handler.


| Name | Type | Description |
|------|------|-------------|
| `handleReady` | Function | Callback invoked when the event system is ready |

## Metadata

| Name | Parameters |
|------|------------|
| `:access` | backend.Backend |
| `:access` | backend.Screen |
| `:access` | backend.Input |
| `:access` | backend.TextInput |
| `:access` | ceramic.App |

