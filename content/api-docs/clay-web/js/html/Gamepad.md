---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Gamepad
target: Clay (Web)
permalink: api-docs/clay-web/js/html/Gamepad/
---

# Gamepad

<div class="type-hierarchy"><strong>js.html.Gamepad</strong> (extern class)</div>

The `Gamepad` interface of the Gamepad API defines an individual gamepad or other controller, allowing access to information such as button presses, axis positions, and id.

Documentation [Gamepad](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/Gamepad></div>


## Instance Members

<div class="signature field-var has-description" id="id"><code><span class="field-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#id"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMString` containing identifying information about the controller.

<hr class="field-separator" />

<div class="signature field-var has-description" id="index"><code><span class="field-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#index"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An integer that is auto-incremented to be unique for each device currently connected to the system.

<hr class="field-separator" />

<div class="signature field-var has-description" id="mapping"><code><span class="field-name">mapping</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/GamepadMappingType/" class="type-link">GamepadMappingType</a></code><a class="header-anchor" href="#mapping"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A string indicating whether the browser has remapped the controls on the device to a known layout.

<hr class="field-separator" />

<div class="signature field-var has-description" id="connected"><code><span class="field-name">connected</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#connected"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A boolean indicating whether the gamepad is still connected to the system.

<hr class="field-separator" />

<div class="signature field-var has-description" id="buttons"><code><span class="field-name">buttons</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/GamepadButton/" class="type-link">GamepadButton</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#buttons"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An array of `gamepadButton` objects representing the buttons present on the device.

<hr class="field-separator" />

<div class="signature field-var has-description" id="axes"><code><span class="field-name">axes</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#axes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An array representing the controls with axes present on the device (e.g. analog thumb sticks).

<hr class="field-separator" />

<div class="signature field-var has-description" id="timestamp"><code><span class="field-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#timestamp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMHighResTimeStamp` representing the last time the data for this gamepad was updated.

