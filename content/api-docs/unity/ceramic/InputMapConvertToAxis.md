---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: InputMapConvertToAxis
target: Unity
permalink: api-docs/unity/ceramic/InputMapConvertToAxis/
---

# InputMapConvertToAxis

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/InputMapImpl.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.InputMapConvertToAxis</strong> (Class)</div>

Helper class for converting digital button inputs to analog axis values.

Used internally by InputMap to simulate analog input from digital buttons,
such as using arrow keys to simulate a joystick. Stores the target axis
index and the value to apply when activated.

## Instance Members

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Description |
|------|------|-------------|
| `index` | [Int](/api-docs/unity/Int/) | The index of the target axis action |
| `value` | [Int](/api-docs/unity/Int/) | The axis value to apply (stored as int * 1000 for precision) |

## Private Members

<div class="signature field-var has-description" id="index"><code><span class="field-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#index"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The index of the target axis action

<hr class="field-separator" />

<div class="signature field-var has-description" id="value"><code><span class="field-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#value"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The axis value to apply (stored as int * 1000 for precision)

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:structInit` | - |
| `:allow` | ceramic.InputMapImpl |

