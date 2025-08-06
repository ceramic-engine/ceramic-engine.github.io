---
layout: api-docs
category: api-docs
subCategory: doc
menu: Headless
title: Input
target: Headless
permalink: api-docs/headless/backend/Input/
---

# Input

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/headless/runtime/src/backend/Input.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.Input</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/headless/spec/Input/">spec.Input</a>, <a href="/api-docs/headless/tracker/Events/">tracker.Events</a></div>

## Instance Members

<div class="signature field-method no-description has-plugin" id="startGamepadRumble"><div class="plugin-name">headless</div><code><span class="field-name">startGamepadRumble</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">lowFrequency</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">highFrequency</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">duration</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#startGamepadRumble"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `gamepadId` | [Int](/api-docs/headless/Int/) |
| `lowFrequency` | [Float](/api-docs/headless/Float/) |
| `highFrequency` | [Float](/api-docs/headless/Float/) |
| `duration` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="stopGamepadRumble"><div class="plugin-name">headless</div><code><span class="field-name">stopGamepadRumble</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#stopGamepadRumble"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `gamepadId` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="unbindEvents"><div class="plugin-name">headless</div><code><span class="field-name">unbindEvents</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unbindEvents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">headless</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-method has-description has-plugin" id="emitKeyDown"><div class="plugin-name">headless</div><code><span class="field-name">emitKeyDown</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Key/" class="type-link">ceramic.Key</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitKeyDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

keyDown event

| Name | Type |
|------|------|
| `key` | [ceramic.Key](/api-docs/headless/ceramic/Key/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitKeyUp"><div class="plugin-name">headless</div><code><span class="field-name">emitKeyUp</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Key/" class="type-link">ceramic.Key</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitKeyUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

keyUp event

| Name | Type |
|------|------|
| `key` | [ceramic.Key](/api-docs/headless/ceramic/Key/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitGamepadAxis"><div class="plugin-name">headless</div><code><span class="field-name">emitGamepadAxis</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">axisId</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitGamepadAxis"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

gamepadAxis event

| Name | Type |
|------|------|
| `gamepadId` | [Int](/api-docs/headless/Int/) |
| `axisId` | [Int](/api-docs/headless/Int/) |
| `value` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitGamepadDown"><div class="plugin-name">headless</div><code><span class="field-name">emitGamepadDown</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">buttonId</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitGamepadDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

gamepadDown event

| Name | Type |
|------|------|
| `gamepadId` | [Int](/api-docs/headless/Int/) |
| `buttonId` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitGamepadUp"><div class="plugin-name">headless</div><code><span class="field-name">emitGamepadUp</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">buttonId</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitGamepadUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

gamepadUp event

| Name | Type |
|------|------|
| `gamepadId` | [Int](/api-docs/headless/Int/) |
| `buttonId` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitGamepadGyro"><div class="plugin-name">headless</div><code><span class="field-name">emitGamepadGyro</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dx</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">dy</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">dz</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitGamepadGyro"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

gamepadGyro event

| Name | Type |
|------|------|
| `gamepadId` | [Int](/api-docs/headless/Int/) |
| `dx` | [Float](/api-docs/headless/Float/) |
| `dy` | [Float](/api-docs/headless/Float/) |
| `dz` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitGamepadEnable"><div class="plugin-name">headless</div><code><span class="field-name">emitGamepadEnable</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitGamepadEnable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

gamepadEnable event

| Name | Type |
|------|------|
| `gamepadId` | [Int](/api-docs/headless/Int/) |
| `name` | [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitGamepadDisable"><div class="plugin-name">headless</div><code><span class="field-name">emitGamepadDisable</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitGamepadDisable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

gamepadDisable event

| Name | Type |
|------|------|
| `gamepadId` | [Int](/api-docs/headless/Int/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

