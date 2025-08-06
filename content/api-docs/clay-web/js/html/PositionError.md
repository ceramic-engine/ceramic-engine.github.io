---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: PositionError
target: Clay (Web)
permalink: api-docs/clay-web/js/html/PositionError/
---

# PositionError

<div class="type-hierarchy"><strong>js.html.PositionError</strong> (extern class)</div>

The `PositionError` interface represents the reason of an error occurring when using the geolocating device.

Documentation [PositionError](https://developer.mozilla.org/en-US/docs/Web/API/PositionError) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/PositionError$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/PositionError></div>


## Static Members

<div class="signature field-var no-description" id="PERMISSION_DENIED"><code><span class="field-name">PERMISSION_DENIED</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#PERMISSION_DENIED"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="POSITION_UNAVAILABLE"><code><span class="field-name">POSITION_UNAVAILABLE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#POSITION_UNAVAILABLE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TIMEOUT"><code><span class="field-name">TIMEOUT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TIMEOUT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Instance Members

<div class="signature field-var has-description" id="code"><code><span class="field-name">code</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#code"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an <code>unsigned short</code> representing the error code. The following values are possible:
<table class="standard-table">

<tr>
Value
Associated constant
Description
</tr>
<tr>
<td><code>1</code></td>
<td><code>PERMISSION_DENIED</code></td>
<td>The acquisition of the geolocation information failed because the page didn't have the permission to do it.</td>
</tr>
<tr>
<td><code>2</code></td>
<td><code>POSITION_UNAVAILABLE</code></td>
<td>The acquisition of the geolocation failed because at least one internal source of position returned an internal error.</td>
</tr>
<tr>
<td><code>3</code></td>
<td><code>TIMEOUT</code></td>
<td>The time allowed to acquire the geolocation, defined by <code>PositionOptions.timeout</code> information was reached before the information was obtained.</td>
</tr>

</table>

<hr class="field-separator" />

<div class="signature field-var has-description" id="message"><code><span class="field-name">message</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#message"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a human-readable `DOMString` describing the details of the error. Specifications note that this is primarily intended for debugging use and not to be shown directly in a user interface.

