---
layout: api-docs
category: api-docs
subCategory: doc
menu: Unity
title: Input
target: Unity
permalink: api-docs/unity/backend/Input/
---

# Input

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/unity/runtime/src/backend/Input.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.Input</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/spec/Input/">spec.Input</a>, <a href="/api-docs/unity/tracker/Events/">tracker.Events</a></div>

## Instance Members

<div class="signature field-method has-description has-plugin" id="keyCodeForScanCode"><div class="plugin-name">unity</div><code><span class="field-name">keyCodeForScanCode</span><span class="parenthesis">(</span><span class="arg-name">scanCode</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ScanCode/" class="type-link">ceramic.ScanCode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/KeyCode/" class="type-link">ceramic.KeyCode</a></code><a class="header-anchor" href="#keyCodeForScanCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Key code produced by the physical key `scanCode` with the current keyboard
layout, from the display name Unity gives to that key, or `KeyCode.UNKNOWN`.
Covers the keys whose meaning depends on the layout: letters, digits and
punctuation (same key indexes as `updateKeyboardInput()`).

| Name | Type |
|------|------|
| `scanCode` | [ceramic.ScanCode](/api-docs/unity/ceramic/ScanCode/) |

| Returns |
|---------|
| [ceramic.KeyCode](/api-docs/unity/ceramic/KeyCode/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="startGamepadRumble"><div class="plugin-name">unity</div><code><span class="field-name">startGamepadRumble</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">lowFrequency</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">highFrequency</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">duration</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#startGamepadRumble"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `gamepadId` | [Int](/api-docs/unity/Int/) |
| `lowFrequency` | [Float](/api-docs/unity/Float/) |
| `highFrequency` | [Float](/api-docs/unity/Float/) |
| `duration` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="stopGamepadRumble"><div class="plugin-name">unity</div><code><span class="field-name">stopGamepadRumble</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#stopGamepadRumble"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `gamepadId` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="unbindEvents"><div class="plugin-name">unity</div><code><span class="field-name">unbindEvents</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unbindEvents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">unity</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Events

<div class="signature field-event no-description" id="event-keyDown"><code><span class="event-keyword">@event</span> <span class="field-name">keyDown</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Key/" class="type-link">ceramic.Key</a><span class="parenthesis">)</span></code><a class="header-anchor" href="#event-keyDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [ceramic.Key](/api-docs/unity/ceramic/Key/) |

<div class="event-methods"><code>onKeyDown(owner, handler)</code> <code>onceKeyDown(owner, handler)</code> <code>offKeyDown(?handler)</code> <code>listensKeyDown()</code></div>

<hr class="field-separator" />

<div class="signature field-event no-description" id="event-keyUp"><code><span class="event-keyword">@event</span> <span class="field-name">keyUp</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Key/" class="type-link">ceramic.Key</a><span class="parenthesis">)</span></code><a class="header-anchor" href="#event-keyUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [ceramic.Key](/api-docs/unity/ceramic/Key/) |

<div class="event-methods"><code>onKeyUp(owner, handler)</code> <code>onceKeyUp(owner, handler)</code> <code>offKeyUp(?handler)</code> <code>listensKeyUp()</code></div>

<hr class="field-separator" />

<div class="signature field-event no-description" id="event-gamepadAxis"><code><span class="event-keyword">@event</span> <span class="field-name">gamepadAxis</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">axisId</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span></code><a class="header-anchor" href="#event-gamepadAxis"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `gamepadId` | [Int](/api-docs/unity/Int/) |
| `axisId` | [Int](/api-docs/unity/Int/) |
| `value` | [Float](/api-docs/unity/Float/) |

<div class="event-methods"><code>onGamepadAxis(owner, handler)</code> <code>onceGamepadAxis(owner, handler)</code> <code>offGamepadAxis(?handler)</code> <code>listensGamepadAxis()</code></div>

<hr class="field-separator" />

<div class="signature field-event no-description" id="event-gamepadDown"><code><span class="event-keyword">@event</span> <span class="field-name">gamepadDown</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">buttonId</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span></code><a class="header-anchor" href="#event-gamepadDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `gamepadId` | [Int](/api-docs/unity/Int/) |
| `buttonId` | [Int](/api-docs/unity/Int/) |

<div class="event-methods"><code>onGamepadDown(owner, handler)</code> <code>onceGamepadDown(owner, handler)</code> <code>offGamepadDown(?handler)</code> <code>listensGamepadDown()</code></div>

<hr class="field-separator" />

<div class="signature field-event no-description" id="event-gamepadUp"><code><span class="event-keyword">@event</span> <span class="field-name">gamepadUp</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">buttonId</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span></code><a class="header-anchor" href="#event-gamepadUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `gamepadId` | [Int](/api-docs/unity/Int/) |
| `buttonId` | [Int](/api-docs/unity/Int/) |

<div class="event-methods"><code>onGamepadUp(owner, handler)</code> <code>onceGamepadUp(owner, handler)</code> <code>offGamepadUp(?handler)</code> <code>listensGamepadUp()</code></div>

<hr class="field-separator" />

<div class="signature field-event no-description" id="event-gamepadGyro"><code><span class="event-keyword">@event</span> <span class="field-name">gamepadGyro</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dx</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">dy</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">dz</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span></code><a class="header-anchor" href="#event-gamepadGyro"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `gamepadId` | [Int](/api-docs/unity/Int/) |
| `dx` | [Float](/api-docs/unity/Float/) |
| `dy` | [Float](/api-docs/unity/Float/) |
| `dz` | [Float](/api-docs/unity/Float/) |

<div class="event-methods"><code>onGamepadGyro(owner, handler)</code> <code>onceGamepadGyro(owner, handler)</code> <code>offGamepadGyro(?handler)</code> <code>listensGamepadGyro()</code></div>

<hr class="field-separator" />

<div class="signature field-event no-description" id="event-gamepadEnable"><code><span class="event-keyword">@event</span> <span class="field-name">gamepadEnable</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span></code><a class="header-anchor" href="#event-gamepadEnable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `gamepadId` | [Int](/api-docs/unity/Int/) |
| `name` | [String](/api-docs/unity/String/) |

<div class="event-methods"><code>onGamepadEnable(owner, handler)</code> <code>onceGamepadEnable(owner, handler)</code> <code>offGamepadEnable(?handler)</code> <code>listensGamepadEnable()</code></div>

<hr class="field-separator" />

<div class="signature field-event no-description" id="event-gamepadDisable"><code><span class="event-keyword">@event</span> <span class="field-name">gamepadDisable</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span></code><a class="header-anchor" href="#event-gamepadDisable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `gamepadId` | [Int](/api-docs/unity/Int/) |

<div class="event-methods"><code>onGamepadDisable(owner, handler)</code> <code>onceGamepadDisable(owner, handler)</code> <code>offGamepadDisable(?handler)</code> <code>listensGamepadDisable()</code></div>

## Private Members

<div class="signature field-var no-description has-plugin" id="GAMEPAD_STORAGE_SIZE"><div class="plugin-name">unity</div><code><span class="field-name">GAMEPAD_STORAGE_SIZE</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#GAMEPAD_STORAGE_SIZE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="NUM_GAMEPAD_AXES"><div class="plugin-name">unity</div><code><span class="field-name">NUM_GAMEPAD_AXES</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#NUM_GAMEPAD_AXES"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Axis slots kept per gamepad in `gamepadAxis` (left stick x/y, right stick x/y, and one spare)

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="keyCodeByName"><div class="plugin-name">unity</div><code><span class="field-name">keyCodeByName</span><span class="operator">:</span> <a href="/api-docs/unity/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#keyCodeByName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="gamepads"><div class="plugin-name">unity</div><code><span class="field-name">gamepads</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/unityengine/inputsystem/Gamepad/" class="type-link">unityengine.inputsystem.Gamepad</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#gamepads"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="gamepadPressed"><div class="plugin-name">unity</div><code><span class="field-name">gamepadPressed</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/IntIntMap/" class="type-link">ceramic.IntIntMap</a></code><a class="header-anchor" href="#gamepadPressed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="gamepadAxis"><div class="plugin-name">unity</div><code><span class="field-name">gamepadAxis</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/IntMap/" class="type-link">ceramic.IntMap</a><span class="operator">&lt;</span><a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#gamepadAxis"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Last axis values sent, to only emit changes

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="gamepadDualShockGyroControls"><div class="plugin-name">unity</div><code><span class="field-name">gamepadDualShockGyroControls</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/IntMap/" class="type-link">ceramic.IntMap</a><span class="operator">&lt;</span><a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/unityengine/inputsystem/controls/ButtonControl/" class="type-link">unityengine.inputsystem.controls.ButtonControl</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#gamepadDualShockGyroControls"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unusedGamepads"><div class="plugin-name">unity</div><code><span class="field-name">unusedGamepads</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/unityengine/inputsystem/Gamepad/" class="type-link">unityengine.inputsystem.Gamepad</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#unusedGamepads"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitKeyDown"><div class="plugin-name">unity</div><code><span class="field-name">emitKeyDown</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Key/" class="type-link">ceramic.Key</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitKeyDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

keyDown event

| Name | Type |
|------|------|
| `key` | [ceramic.Key](/api-docs/unity/ceramic/Key/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitKeyUp"><div class="plugin-name">unity</div><code><span class="field-name">emitKeyUp</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Key/" class="type-link">ceramic.Key</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitKeyUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

keyUp event

| Name | Type |
|------|------|
| `key` | [ceramic.Key](/api-docs/unity/ceramic/Key/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitGamepadAxis"><div class="plugin-name">unity</div><code><span class="field-name">emitGamepadAxis</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">axisId</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitGamepadAxis"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

gamepadAxis event

| Name | Type |
|------|------|
| `gamepadId` | [Int](/api-docs/unity/Int/) |
| `axisId` | [Int](/api-docs/unity/Int/) |
| `value` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitGamepadDown"><div class="plugin-name">unity</div><code><span class="field-name">emitGamepadDown</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">buttonId</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitGamepadDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

gamepadDown event

| Name | Type |
|------|------|
| `gamepadId` | [Int](/api-docs/unity/Int/) |
| `buttonId` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitGamepadUp"><div class="plugin-name">unity</div><code><span class="field-name">emitGamepadUp</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">buttonId</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitGamepadUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

gamepadUp event

| Name | Type |
|------|------|
| `gamepadId` | [Int](/api-docs/unity/Int/) |
| `buttonId` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitGamepadGyro"><div class="plugin-name">unity</div><code><span class="field-name">emitGamepadGyro</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dx</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">dy</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">dz</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitGamepadGyro"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

gamepadGyro event

| Name | Type |
|------|------|
| `gamepadId` | [Int](/api-docs/unity/Int/) |
| `dx` | [Float](/api-docs/unity/Float/) |
| `dy` | [Float](/api-docs/unity/Float/) |
| `dz` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitGamepadEnable"><div class="plugin-name">unity</div><code><span class="field-name">emitGamepadEnable</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitGamepadEnable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

gamepadEnable event

| Name | Type |
|------|------|
| `gamepadId` | [Int](/api-docs/unity/Int/) |
| `name` | [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitGamepadDisable"><div class="plugin-name">unity</div><code><span class="field-name">emitGamepadDisable</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitGamepadDisable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

gamepadDisable event

| Name | Type |
|------|------|
| `gamepadId` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="update"><div class="plugin-name">unity</div><code><span class="field-name">update</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#update"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `delta` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="registerInputSystemOverrides"><div class="plugin-name">unity</div><code><span class="field-name">registerInputSystemOverrides</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#registerInputSystemOverrides"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="initKeyCodesMapping"><div class="plugin-name">unity</div><code><span class="field-name">initKeyCodesMapping</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initKeyCodesMapping"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="updateKeyboardInput"><div class="plugin-name">unity</div><code><span class="field-name">updateKeyboardInput</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateKeyboardInput"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="testKey"><div class="plugin-name">unity</div><code><span class="field-name">testKey</span><span class="parenthesis">(</span><span class="arg-name">keyboard</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/inputsystem/Keyboard/" class="type-link">unityengine.inputsystem.Keyboard</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">scanCode</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">keyCode</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#testKey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `keyboard` | [unityengine.inputsystem.Keyboard](/api-docs/unity/unityengine/inputsystem/Keyboard/) | |
| `value` | [Int](/api-docs/unity/Int/) | |
| `scanCode` | [Int](/api-docs/unity/Int/) | |
| `keyCode` | [Int](/api-docs/unity/Int/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="willEmitKeyDown"><div class="plugin-name">unity</div><code><span class="field-name">willEmitKeyDown</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Key/" class="type-link">ceramic.Key</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#willEmitKeyDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [ceramic.Key](/api-docs/unity/ceramic/Key/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="willEmitKeyUp"><div class="plugin-name">unity</div><code><span class="field-name">willEmitKeyUp</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Key/" class="type-link">ceramic.Key</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#willEmitKeyUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [ceramic.Key](/api-docs/unity/ceramic/Key/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="updateGamepadInput"><div class="plugin-name">unity</div><code><span class="field-name">updateGamepadInput</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateGamepadInput"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `delta` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="updateGamepadButton"><div class="plugin-name">unity</div><code><span class="field-name">updateGamepadButton</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">button</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pressed</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateGamepadButton"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `index` | [Int](/api-docs/unity/Int/) |
| `button` | [Int](/api-docs/unity/Int/) |
| `pressed` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="updateGamepadAxis"><div class="plugin-name">unity</div><code><span class="field-name">updateGamepadAxis</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">axis</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateGamepadAxis"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `index` | [Int](/api-docs/unity/Int/) |
| `axis` | [Int](/api-docs/unity/Int/) |
| `value` | [Single](/api-docs/unity/Single/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="readDualShockGyro"><div class="plugin-name">unity</div><code><span class="field-name">readDualShockGyro</span><span class="parenthesis">(</span><span class="arg-name">gyroControl0</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/inputsystem/controls/ButtonControl/" class="type-link">unityengine.inputsystem.controls.ButtonControl</a><span class="operator">,</span> <span class="arg-name">gyroControl1</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/inputsystem/controls/ButtonControl/" class="type-link">unityengine.inputsystem.controls.ButtonControl</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#readDualShockGyro"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `gyroControl0` | [unityengine.inputsystem.controls.ButtonControl](/api-docs/unity/unityengine/inputsystem/controls/ButtonControl/) |
| `gyroControl1` | [unityengine.inputsystem.controls.ButtonControl](/api-docs/unity/unityengine/inputsystem/controls/ButtonControl/) |

| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:allow` | Main |

