---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: GamepadButton
target: Clay (Web)
permalink: api-docs/clay-web/js/html/GamepadButton/
---

# GamepadButton

<div class="type-hierarchy"><strong>js.html.GamepadButton</strong> (extern class)</div>

The `GamepadButton` interface defines an individual button of a gamepad or other controller, allowing access to the current state of different types of buttons available on the control device.

Documentation [GamepadButton](https://developer.mozilla.org/en-US/docs/Web/API/GamepadButton) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/GamepadButton$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/GamepadButton></div>


## Instance Members

<div class="signature field-var has-description" id="pressed"><code><span class="field-name">pressed</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#pressed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A boolean value indicating whether the button is currently pressed (`true`) or unpressed (`false`).

<hr class="field-separator" />

<div class="signature field-var no-description" id="touched"><code><span class="field-name">touched</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#touched"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="value"><code><span class="field-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#value"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A double value used to represent the current state of analog buttons, such as the triggers on many modern gamepads. The values are normalized to the range 0.0 —1.0, with 0.0 representing a button that is not pressed, and 1.0 representing a button that is fully pressed.

