---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: PermissionStatus
target: Clay (Web)
permalink: api-docs/clay-web/js/html/PermissionStatus/
---

# PermissionStatus

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <strong>js.html.PermissionStatus</strong> (extern class)</div>

The `PermissionStatus` interface of the Permissions API provides the state of an object and an event handler for monitoring changes to said state.

Documentation [PermissionStatus](https://developer.mozilla.org/en-US/docs/Web/API/PermissionStatus) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/PermissionStatus$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/PermissionStatus></div>


## Instance Members

<div class="signature field-var has-description" id="state"><code><span class="field-name">state</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/PermissionState/" class="type-link">PermissionState</a></code><a class="header-anchor" href="#state"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the state of a requested permission; one of `'granted'`, `'denied'`, or `'prompt'`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onchange"><code><span class="field-name">onchange</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onchange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An event called whenever `PermissionStatus.status` changes.

