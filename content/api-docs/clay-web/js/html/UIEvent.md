---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: UIEvent
target: Clay (Web)
permalink: api-docs/clay-web/js/html/UIEvent/
---

# UIEvent

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/Event/">Event</a> → <strong>js.html.UIEvent</strong> (extern class) → <a href="/api-docs/clay-web/js/html/KeyboardEvent/">KeyboardEvent</a>, <a href="/api-docs/clay-web/js/html/MouseEvent/">MouseEvent</a>, <a href="/api-docs/clay-web/js/html/TouchEvent/">TouchEvent</a></div>

The `UIEvent` interface represents simple user interface events.

Documentation [UIEvent](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/UIEvent></div>


## Static Members

<div class="signature field-var no-description" id="SCROLL_PAGE_UP"><code><span class="field-name">SCROLL_PAGE_UP</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SCROLL_PAGE_UP"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SCROLL_PAGE_DOWN"><code><span class="field-name">SCROLL_PAGE_DOWN</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SCROLL_PAGE_DOWN"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Instance Members

<div class="signature field-var has-description" id="view"><code><span class="field-name">view</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Window/" class="type-link">Window</a></code><a class="header-anchor" href="#view"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `WindowProxy` that contains the view that generated the event.

<hr class="field-separator" />

<div class="signature field-var has-description" id="detail"><code><span class="field-name">detail</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#detail"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `long` with details about the event, depending on the event type.

<hr class="field-separator" />

<div class="signature field-var has-description" id="layerX"><code><span class="field-name">layerX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#layerX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the horizontal coordinate of the event relative to the current layer.

<hr class="field-separator" />

<div class="signature field-var has-description" id="layerY"><code><span class="field-name">layerY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#layerY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the vertical coordinate of the event relative to the current layer.

<hr class="field-separator" />

<div class="signature field-var has-description" id="pageX"><code><span class="field-name">pageX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#pageX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the horizontal coordinate of the event relative to the whole document.

<hr class="field-separator" />

<div class="signature field-var has-description" id="pageY"><code><span class="field-name">pageY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#pageY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the vertical coordinate of the event relative to the whole document.

<hr class="field-separator" />

<div class="signature field-var has-description" id="which"><code><span class="field-name">which</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#which"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the numeric `keyCode` of the key pressed, or the character code (`charCode`) for an alphanumeric key pressed.

<hr class="field-separator" />

<div class="signature field-var no-description" id="rangeParent"><code><span class="field-name">rangeParent</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a></code><a class="header-anchor" href="#rangeParent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="rangeOffset"><code><span class="field-name">rangeOffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#rangeOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="initUIEvent"><code><span class="field-name">initUIEvent</span><span class="parenthesis">(</span><span class="arg-name">aType</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aCanBubble</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aCancelable</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aView</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Window/" class="type-link">Window</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aDetail</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initUIEvent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initializes a `UIEvent` object. If the event has already being dispatched, this method does nothing.

| Name | Type | Default |
|------|------|---------|
| `aType` | [String](/api-docs/clay-web/String/) | |
| `aCanBubble` | [Bool](/api-docs/clay-web/Bool/) | `false` |
| `aCancelable` | [Bool](/api-docs/clay-web/Bool/) | `false` |
| `aView` | [Window](/api-docs/clay-web/js/html/Window/) | *(optional)* |
| `aDetail` | [Int](/api-docs/clay-web/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">eventInitDict</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/UIEventInit/" class="type-link">UIEventInit</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `type` | [String](/api-docs/clay-web/String/) | |
| `eventInitDict` | [Null](/api-docs/clay-web/Null/)<[UIEventInit](/api-docs/clay-web/js/html/UIEventInit/)> | *(optional)* |

