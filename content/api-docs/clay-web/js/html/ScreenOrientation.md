---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: ScreenOrientation
target: Clay (Web)
permalink: api-docs/clay-web/js/html/ScreenOrientation/
---

# ScreenOrientation

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <strong>js.html.ScreenOrientation</strong> (extern class)</div>

The `ScreenOrientation` interface of the the Screen Orientation API provides information about the current orientation of the document.

Documentation [ScreenOrientation](https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation></div>


## Instance Members

<div class="signature field-var has-description" id="type"><code><span class="field-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/OrientationType/" class="type-link">OrientationType</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the document's current orientation type, one of "portrait-primary", "portrait-secondary", "landscape-primary", or "landscape-secondary".

<hr class="field-separator" />

<div class="signature field-var has-description" id="angle"><code><span class="field-name">angle</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#angle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the document's current orientation angle.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onchange"><code><span class="field-name">onchange</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onchange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired whenever is the `EventHandler` called when the screen changes orientation.

<hr class="field-separator" />

<div class="signature field-method has-description" id="lock"><code><span class="field-name">lock</span><span class="parenthesis">(</span><span class="arg-name">orientation</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/OrientationLockType/" class="type-link">OrientationLockType</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Void/" class="type-link">Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#lock"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Locks the orientation of the containing document to its default orientation and returns a `Promise`. 

| Name | Type |
|------|------|
| `orientation` | [OrientationLockType](/api-docs/clay-web/js/html/OrientationLockType/) |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Void](/api-docs/clay-web/Void/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="unlock"><code><span class="field-name">unlock</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unlock"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unlocks the orientation of the containing document from its default orientation.

