---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: WheelEvent
target: Clay (Web)
permalink: api-docs/clay-web/js/html/WheelEvent/
---

# WheelEvent

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/Event/">Event</a> → <a href="/api-docs/clay-web/js/html/UIEvent/">UIEvent</a> → <a href="/api-docs/clay-web/js/html/MouseEvent/">MouseEvent</a> → <strong>js.html.WheelEvent</strong> (extern class)</div>

The `WheelEvent` interface represents events that occur due to the user moving a mouse wheel or similar input device.

Documentation [WheelEvent](https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent></div>


## Static Members

<div class="signature field-var no-description" id="DOM_DELTA_PIXEL"><code><span class="field-name">DOM_DELTA_PIXEL</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DOM_DELTA_PIXEL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DOM_DELTA_LINE"><code><span class="field-name">DOM_DELTA_LINE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DOM_DELTA_LINE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DOM_DELTA_PAGE"><code><span class="field-name">DOM_DELTA_PAGE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DOM_DELTA_PAGE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Instance Members

<div class="signature field-var has-description" id="deltaX"><code><span class="field-name">deltaX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#deltaX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `double` representing the horizontal scroll amount.

<hr class="field-separator" />

<div class="signature field-var has-description" id="deltaY"><code><span class="field-name">deltaY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#deltaY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `double` representing the vertical scroll amount.

<hr class="field-separator" />

<div class="signature field-var has-description" id="deltaZ"><code><span class="field-name">deltaZ</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#deltaZ"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `double` representing the scroll amount for the z-axis.

<hr class="field-separator" />

<div class="signature field-var has-description" id="deltaMode"><code><span class="field-name">deltaMode</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#deltaMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an <code>unsigned long</code> representing the unit of the delta values scroll amount. Permitted values are:
<table class="standard-table">

<tr>
<td class="header">Constant</td>
<td class="header">Value</td>
<td class="header">Description</td>
</tr>
<tr>
<td><code>DOM_DELTA_PIXEL</code></td>
<td><code>0x00</code></td>
<td>The delta values are specified in pixels.</td>
</tr>
<tr>
<td><code>DOM_DELTA_LINE</code></td>
<td><code>0x01</code></td>
<td>The delta values are specified in lines.</td>
</tr>
<tr>
<td><code>DOM_DELTA_PAGE</code></td>
<td><code>0x02</code></td>
<td>The delta values are specified in pages.</td>
</tr>

</table>

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">eventInitDict</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/WheelEventInit/" class="type-link">WheelEventInit</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `type` | [String](/api-docs/clay-web/String/) | |
| `eventInitDict` | [Null](/api-docs/clay-web/Null/)<[WheelEventInit](/api-docs/clay-web/js/html/WheelEventInit/)> | *(optional)* |

