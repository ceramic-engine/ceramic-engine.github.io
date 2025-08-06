---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: MouseEvent
target: Clay (Web)
permalink: api-docs/clay-web/js/html/MouseEvent/
---

# MouseEvent

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/Event/">Event</a> → <a href="/api-docs/clay-web/js/html/UIEvent/">UIEvent</a> → <strong>js.html.MouseEvent</strong> (extern class) → <a href="/api-docs/clay-web/js/html/WheelEvent/">WheelEvent</a></div>

The `MouseEvent` interface represents events that occur due to the user interacting with a pointing device (such as a mouse). Common events using this interface include `click`, `dblclick`, `mouseup`, `mousedown`.

Documentation [MouseEvent](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent></div>


## Instance Members

<div class="signature field-var has-description" id="screenX"><code><span class="field-name">screenX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#screenX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The X coordinate of the mouse pointer in global (screen) coordinates.

<hr class="field-separator" />

<div class="signature field-var has-description" id="screenY"><code><span class="field-name">screenY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#screenY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The Y coordinate of the mouse pointer in global (screen) coordinates.

<hr class="field-separator" />

<div class="signature field-var has-description" id="clientX"><code><span class="field-name">clientX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#clientX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The X coordinate of the mouse pointer in local (DOM content) coordinates.

<hr class="field-separator" />

<div class="signature field-var has-description" id="clientY"><code><span class="field-name">clientY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#clientY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The Y coordinate of the mouse pointer in local (DOM content) coordinates.

<hr class="field-separator" />

<div class="signature field-var has-description" id="x"><code><span class="field-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#x"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Alias for `MouseEvent.clientX`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="y"><code><span class="field-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Alias for `MouseEvent.clientY`

<hr class="field-separator" />

<div class="signature field-var has-description" id="offsetX"><code><span class="field-name">offsetX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#offsetX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The X coordinate of the mouse pointer relative to the position of the padding edge of the target node.

<hr class="field-separator" />

<div class="signature field-var has-description" id="offsetY"><code><span class="field-name">offsetY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#offsetY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The Y coordinate of the mouse pointer relative to the position of the padding edge of the target node.

<hr class="field-separator" />

<div class="signature field-var has-description" id="ctrlKey"><code><span class="field-name">ctrlKey</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#ctrlKey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `true` if the control key was down when the mouse event was fired.

<hr class="field-separator" />

<div class="signature field-var has-description" id="shiftKey"><code><span class="field-name">shiftKey</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#shiftKey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `true` if the shift key was down when the mouse event was fired.

<hr class="field-separator" />

<div class="signature field-var has-description" id="altKey"><code><span class="field-name">altKey</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#altKey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `true` if the alt key was down when the mouse event was fired.

<hr class="field-separator" />

<div class="signature field-var has-description" id="metaKey"><code><span class="field-name">metaKey</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#metaKey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `true` if the meta key was down when the mouse event was fired.

<hr class="field-separator" />

<div class="signature field-var has-description" id="button"><code><span class="field-name">button</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#button"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The button number that was pressed (if applicable) when the mouse event was fired.

<hr class="field-separator" />

<div class="signature field-var has-description" id="buttons"><code><span class="field-name">buttons</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#buttons"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The buttons being depressed (if any) when the mouse event was fired.

<hr class="field-separator" />

<div class="signature field-var has-description" id="relatedTarget"><code><span class="field-name">relatedTarget</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/EventTarget/" class="type-link">EventTarget</a></code><a class="header-anchor" href="#relatedTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The secondary target for the event, if there is one.

<hr class="field-separator" />

<div class="signature field-var has-description" id="region"><code><span class="field-name">region</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#region"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the id of the hit region affected by the event. If no hit region is affected, `null` is returned.

<hr class="field-separator" />

<div class="signature field-var has-description" id="movementX"><code><span class="field-name">movementX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#movementX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The X coordinate of the mouse pointer relative to the position of the last `mousemove` event.

<hr class="field-separator" />

<div class="signature field-var has-description" id="movementY"><code><span class="field-name">movementY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#movementY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The Y coordinate of the mouse pointer relative to the position of the last `mousemove` event.

<hr class="field-separator" />

<div class="signature field-method has-description" id="initMouseEvent"><code><span class="field-name">initMouseEvent</span><span class="parenthesis">(</span><span class="arg-name">typeArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">canBubbleArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">cancelableArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">viewArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Window/" class="type-link">Window</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">detailArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">screenXArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">screenYArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">clientXArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">clientYArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">ctrlKeyArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">altKeyArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">shiftKeyArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">metaKeyArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">buttonArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">relatedTargetArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/EventTarget/" class="type-link">EventTarget</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initMouseEvent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initializes the value of a `MouseEvent` created. If the event has already being dispatched, this method does nothing.

| Name | Type | Default |
|------|------|---------|
| `typeArg` | [String](/api-docs/clay-web/String/) | |
| `canBubbleArg` | [Bool](/api-docs/clay-web/Bool/) | `false` |
| `cancelableArg` | [Bool](/api-docs/clay-web/Bool/) | `false` |
| `viewArg` | [Window](/api-docs/clay-web/js/html/Window/) | *(optional)* |
| `detailArg` | [Int](/api-docs/clay-web/Int/) | `0` |
| `screenXArg` | [Int](/api-docs/clay-web/Int/) | `0` |
| `screenYArg` | [Int](/api-docs/clay-web/Int/) | `0` |
| `clientXArg` | [Int](/api-docs/clay-web/Int/) | `0` |
| `clientYArg` | [Int](/api-docs/clay-web/Int/) | `0` |
| `ctrlKeyArg` | [Bool](/api-docs/clay-web/Bool/) | `false` |
| `altKeyArg` | [Bool](/api-docs/clay-web/Bool/) | `false` |
| `shiftKeyArg` | [Bool](/api-docs/clay-web/Bool/) | `false` |
| `metaKeyArg` | [Bool](/api-docs/clay-web/Bool/) | `false` |
| `buttonArg` | [Int](/api-docs/clay-web/Int/) | `0` |
| `relatedTargetArg` | [EventTarget](/api-docs/clay-web/js/html/EventTarget/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getModifierState"><code><span class="field-name">getModifierState</span><span class="parenthesis">(</span><span class="arg-name">keyArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#getModifierState"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the current state of the specified modifier key. See the `KeyboardEvent.getModifierState`() for details.

| Name | Type |
|------|------|
| `keyArg` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="initNSMouseEvent"><code><span class="field-name">initNSMouseEvent</span><span class="parenthesis">(</span><span class="arg-name">typeArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">canBubbleArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">cancelableArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">viewArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Window/" class="type-link">Window</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">detailArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">screenXArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">screenYArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">clientXArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">clientYArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">ctrlKeyArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">altKeyArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">shiftKeyArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">metaKeyArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">buttonArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">relatedTargetArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/EventTarget/" class="type-link">EventTarget</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pressure</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">inputSourceArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initNSMouseEvent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `typeArg` | [String](/api-docs/clay-web/String/) | |
| `canBubbleArg` | [Bool](/api-docs/clay-web/Bool/) | `false` |
| `cancelableArg` | [Bool](/api-docs/clay-web/Bool/) | `false` |
| `viewArg` | [Window](/api-docs/clay-web/js/html/Window/) | *(optional)* |
| `detailArg` | [Int](/api-docs/clay-web/Int/) | `0` |
| `screenXArg` | [Int](/api-docs/clay-web/Int/) | `0` |
| `screenYArg` | [Int](/api-docs/clay-web/Int/) | `0` |
| `clientXArg` | [Int](/api-docs/clay-web/Int/) | `0` |
| `clientYArg` | [Int](/api-docs/clay-web/Int/) | `0` |
| `ctrlKeyArg` | [Bool](/api-docs/clay-web/Bool/) | `false` |
| `altKeyArg` | [Bool](/api-docs/clay-web/Bool/) | `false` |
| `shiftKeyArg` | [Bool](/api-docs/clay-web/Bool/) | `false` |
| `metaKeyArg` | [Bool](/api-docs/clay-web/Bool/) | `false` |
| `buttonArg` | [Int](/api-docs/clay-web/Int/) | `0` |
| `relatedTargetArg` | [EventTarget](/api-docs/clay-web/js/html/EventTarget/) | *(optional)* |
| `pressure` | [Float](/api-docs/clay-web/Float/) | `0.0` |
| `inputSourceArg` | [Int](/api-docs/clay-web/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">typeArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">mouseEventInitDict</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/MouseEventInit/" class="type-link">MouseEventInit</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `typeArg` | [String](/api-docs/clay-web/String/) | |
| `mouseEventInitDict` | [Null](/api-docs/clay-web/Null/)<[MouseEventInit](/api-docs/clay-web/js/html/MouseEventInit/)> | *(optional)* |

