---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Touch
target: Clay (Web)
permalink: api-docs/clay-web/js/html/Touch/
---

# Touch

<div class="type-hierarchy"><strong>js.html.Touch</strong> (extern class)</div>

The `Touch` interface represents a single contact point on a touch-sensitive device. The contact point is commonly a finger or stylus and the device may be a touchscreen or trackpad.

Documentation [Touch](https://developer.mozilla.org/en-US/docs/Web/API/Touch) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/Touch$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/Touch></div>


## Instance Members

<div class="signature field-var has-description" id="identifier"><code><span class="field-name">identifier</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#identifier"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a unique identifier for this `Touch` object. A given touch point (say, by a finger) will have the same identifier for the duration of its movement around the surface. This lets you ensure that you're tracking the same touch all the time.

<hr class="field-separator" />

<div class="signature field-var has-description" id="target"><code><span class="field-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/EventTarget/" class="type-link">EventTarget</a></code><a class="header-anchor" href="#target"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the `Element` on which the touch point started when it was first placed on the surface, even if the touch point has since moved outside the interactive area of that element or even been removed from the document.

<hr class="field-separator" />

<div class="signature field-var has-description" id="screenX"><code><span class="field-name">screenX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#screenX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the X coordinate of the touch point relative to the left edge of the screen.

<hr class="field-separator" />

<div class="signature field-var has-description" id="screenY"><code><span class="field-name">screenY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#screenY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the Y coordinate of the touch point relative to the top edge of the screen.

<hr class="field-separator" />

<div class="signature field-var has-description" id="clientX"><code><span class="field-name">clientX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#clientX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the X coordinate of the touch point relative to the left edge of the browser viewport, not including any scroll offset.

<hr class="field-separator" />

<div class="signature field-var has-description" id="clientY"><code><span class="field-name">clientY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#clientY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the Y coordinate of the touch point relative to the top edge of the browser viewport, not including any scroll offset.

<hr class="field-separator" />

<div class="signature field-var has-description" id="pageX"><code><span class="field-name">pageX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#pageX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the X coordinate of the touch point relative to the left edge of the document. Unlike `clientX`, this value includes the horizontal scroll offset, if any.

<hr class="field-separator" />

<div class="signature field-var has-description" id="pageY"><code><span class="field-name">pageY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#pageY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the Y coordinate of the touch point relative to the top of the document. Unlike `clientY,` this value includes the vertical scroll offset, if any.

<hr class="field-separator" />

<div class="signature field-var has-description" id="radiusX"><code><span class="field-name">radiusX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#radiusX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the X radius of the ellipse that most closely circumscribes the area of contact with the screen. The value is in pixels of the same scale as `screenX`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="radiusY"><code><span class="field-name">radiusY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#radiusY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the Y radius of the ellipse that most closely circumscribes the area of contact with the screen. The value is in pixels of the same scale as `screenY`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="rotationAngle"><code><span class="field-name">rotationAngle</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#rotationAngle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the angle (in degrees) that the ellipse described by radiusX and radiusY must be rotated, clockwise, to most accurately cover the area of contact between the user and the surface.

<hr class="field-separator" />

<div class="signature field-var has-description" id="force"><code><span class="field-name">force</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#force"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the amount of pressure being applied to the surface by the user, as a `float` between `0.0` (no pressure) and `1.0` (maximum pressure).

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">touchInitDict</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/TouchInit/" class="type-link">TouchInit</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `touchInitDict` | [TouchInit](/api-docs/clay-web/js/html/TouchInit/) |

