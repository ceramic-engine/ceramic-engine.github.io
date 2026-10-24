---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: GamepadLabels
target: Headless
permalink: api-docs/headless/ceramic/GamepadLabels/
---

# GamepadLabels

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/GamepadLabels.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.GamepadLabels</strong> (Abstract)</div>

The labels printed on the buttons of a gamepad, to show the right ones to the player.

`GamepadButton` is positional on every backend (`A` is the bottom face button), so the
same `GamepadButton` is printed differently depending on the gamepad: the bottom face
button is `A` on Xbox, Cross on PlayStation, and `B` on Nintendo.

Resolved from the name of the gamepad when it is enabled, see `Input.gamepadLabels()`.

## Type Conversions

**From:**
- `[Int](/api-docs/headless/Int/)`

**To:**
- `[Int](/api-docs/headless/Int/)`

## Metadata

| Name | Parameters |
|------|------------|
| `:enum` | - |

