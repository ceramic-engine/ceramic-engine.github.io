---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: TouchEvent
target: Clay (Web)
permalink: api-docs/clay-web/js/html/TouchEvent/
---

# TouchEvent

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/Event/">Event</a> → <a href="/api-docs/clay-web/js/html/UIEvent/">UIEvent</a> → <strong>js.html.TouchEvent</strong> (extern class)</div>

The `TouchEvent` interface represents an event sent when the state of contacts with a touch-sensitive surface changes. This surface can be a touch screen or trackpad, for example. The event can describe one or more points of contact with the screen and includes support for detecting movement, addition and removal of contact points, and so forth.

Documentation [TouchEvent](https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent></div>


## Instance Members

<div class="signature field-var has-description" id="touches"><code><span class="field-name">touches</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/TouchList/" class="type-link">TouchList</a></code><a class="header-anchor" href="#touches"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `TouchList` of all the `Touch` objects representing all current points of contact with the surface, regardless of target or changed status.

<hr class="field-separator" />

<div class="signature field-var has-description" id="targetTouches"><code><span class="field-name">targetTouches</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/TouchList/" class="type-link">TouchList</a></code><a class="header-anchor" href="#targetTouches"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `TouchList` of all the `Touch` objects that are both currently in contact with the touch surface and were also started on the same element that is the target of the event.

<hr class="field-separator" />

<div class="signature field-var has-description" id="changedTouches"><code><span class="field-name">changedTouches</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/TouchList/" class="type-link">TouchList</a></code><a class="header-anchor" href="#changedTouches"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `TouchList` of all the `Touch` objects representing individual points of contact whose states changed between the previous touch event and this one.

<hr class="field-separator" />

<div class="signature field-var has-description" id="altKey"><code><span class="field-name">altKey</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#altKey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A Boolean value indicating whether or not the alt key was down when the touch event was fired.

<hr class="field-separator" />

<div class="signature field-var has-description" id="metaKey"><code><span class="field-name">metaKey</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#metaKey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A Boolean value indicating whether or not the meta key was down when the touch event was fired.

<hr class="field-separator" />

<div class="signature field-var has-description" id="ctrlKey"><code><span class="field-name">ctrlKey</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#ctrlKey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A Boolean value indicating whether or not the control key was down when the touch event was fired.

<hr class="field-separator" />

<div class="signature field-var has-description" id="shiftKey"><code><span class="field-name">shiftKey</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#shiftKey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A Boolean value indicating whether or not the shift key was down when the touch event was fired.

<hr class="field-separator" />

<div class="signature field-method no-description" id="initTouchEvent"><code><span class="field-name">initTouchEvent</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">canBubble</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">cancelable</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">view</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Window/" class="type-link">Window</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">detail</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">ctrlKey</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">altKey</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">shiftKey</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">metaKey</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">touches</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/TouchList/" class="type-link">TouchList</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">targetTouches</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/TouchList/" class="type-link">TouchList</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">changedTouches</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/TouchList/" class="type-link">TouchList</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initTouchEvent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `type` | [String](/api-docs/clay-web/String/) | |
| `canBubble` | [Bool](/api-docs/clay-web/Bool/) | `false` |
| `cancelable` | [Bool](/api-docs/clay-web/Bool/) | `false` |
| `view` | [Window](/api-docs/clay-web/js/html/Window/) | *(optional)* |
| `detail` | [Int](/api-docs/clay-web/Int/) | `0` |
| `ctrlKey` | [Bool](/api-docs/clay-web/Bool/) | `false` |
| `altKey` | [Bool](/api-docs/clay-web/Bool/) | `false` |
| `shiftKey` | [Bool](/api-docs/clay-web/Bool/) | `false` |
| `metaKey` | [Bool](/api-docs/clay-web/Bool/) | `false` |
| `touches` | [TouchList](/api-docs/clay-web/js/html/TouchList/) | *(optional)* |
| `targetTouches` | [TouchList](/api-docs/clay-web/js/html/TouchList/) | *(optional)* |
| `changedTouches` | [TouchList](/api-docs/clay-web/js/html/TouchList/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">eventInitDict</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/TouchEventInit/" class="type-link">TouchEventInit</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `type` | [String](/api-docs/clay-web/String/) | |
| `eventInitDict` | [Null](/api-docs/clay-web/Null/)<[TouchEventInit](/api-docs/clay-web/js/html/TouchEventInit/)> | *(optional)* |

