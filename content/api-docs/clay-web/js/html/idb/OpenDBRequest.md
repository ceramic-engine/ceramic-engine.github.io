---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: OpenDBRequest
target: Clay (Web)
permalink: api-docs/clay-web/js/html/idb/OpenDBRequest/
---

# OpenDBRequest

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">js.html.EventTarget</a> → <a href="/api-docs/clay-web/js/html/idb/Request/">Request</a> → <strong>js.html.idb.OpenDBRequest</strong> (extern class)</div>

Also inherits methods from its parents `IDBRequest` and `EventTarget`.

Documentation [IDBOpenDBRequest](https://developer.mozilla.org/en-US/docs/Web/API/IDBOpenDBRequest) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/IDBOpenDBRequest$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/IDBOpenDBRequest></div>


## Instance Members

<div class="signature field-var has-description" id="onblocked"><code><span class="field-name">onblocked</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onblocked"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The event handler for the blocked event. This event is triggered when the `upgradeneeded` event should be triggered because of a version change but the database is still in use (i.e. not closed) somewhere, even after the `versionchange` event was sent.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onupgradeneeded"><code><span class="field-name">onupgradeneeded</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onupgradeneeded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The event handler for the `upgradeneeded` event, fired when a database of a bigger version number than the existing stored database is loaded.

