---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: GamepadButton
target: Headless
permalink: api-docs/headless/ceramic/GamepadButton/
---

# GamepadButton

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/GamepadButton.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.GamepadButton</strong> (Abstract)</div>

Represents gamepad button mappings.

This enum abstract defines the standard buttons available on modern gamepads,
following a common layout similar to Xbox/PlayStation controllers:
- Face buttons (A, B, X, Y)
- Shoulder buttons (L1/R1) and triggers (L2/R2)
- Control buttons (SELECT/BACK, START/MENU)
- Analog stick buttons (L3/R3 - pressing the sticks)
- Directional pad (D-Pad) buttons

Note: Button labels follow Xbox conventions but map to equivalent
buttons on other controllers (e.g., A maps to Cross on PlayStation).

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

