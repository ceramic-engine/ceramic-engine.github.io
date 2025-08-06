---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: GamepadAxis
target: Headless
permalink: api-docs/headless/ceramic/GamepadAxis/
---

# GamepadAxis

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/GamepadAxis.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.GamepadAxis</strong> (Abstract)</div>

Represents gamepad analog stick and trigger axes.

This enum abstract defines the standard axes available on modern gamepads:
- Left analog stick (X and Y axes)
- Right analog stick (X and Y axes)
- Left and right triggers (analog pressure)

Axis values typically range from -1.0 to 1.0 for sticks (centered at 0.0)
and 0.0 to 1.0 for triggers (fully released at 0.0).

<div class="see"><strong>See:</strong> <a href="/api-docs/headless/ceramic/Input/">Input</a></div>


## Type Conversions

**From:**
- `[Int](/api-docs/headless/Int/)`

**To:**
- `[Int](/api-docs/headless/Int/)`

## Metadata

| Name | Parameters |
|------|------------|
| `:enum` | - |

