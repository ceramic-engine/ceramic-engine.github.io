---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: GamepadEvent
target: Clay (Web)
permalink: api-docs/clay-web/js/html/GamepadEvent/
---

# GamepadEvent

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/Event/">Event</a> → <strong>js.html.GamepadEvent</strong> (extern class)</div>

The GamepadEvent interface of the Gamepad API contains references to gamepads connected to the system, which is what the gamepad events `Window.gamepadconnected` and `Window.gamepaddisconnected` are fired in response to.

Documentation [GamepadEvent](https://developer.mozilla.org/en-US/docs/Web/API/GamepadEvent) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/GamepadEvent$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/GamepadEvent></div>


## Instance Members

<div class="signature field-var has-description" id="gamepad"><code><span class="field-name">gamepad</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Gamepad/" class="type-link">Gamepad</a></code><a class="header-anchor" href="#gamepad"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Gamepad` object, providing access to the associated gamepad data for the event fired.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">eventInitDict</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/GamepadEventInit/" class="type-link">GamepadEventInit</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `type` | [String](/api-docs/clay-web/String/) | |
| `eventInitDict` | [Null](/api-docs/clay-web/Null/)<[GamepadEventInit](/api-docs/clay-web/js/html/GamepadEventInit/)> | *(optional)* |

