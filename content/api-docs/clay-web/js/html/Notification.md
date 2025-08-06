---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Notification
target: Clay (Web)
permalink: api-docs/clay-web/js/html/Notification/
---

# Notification

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <strong>js.html.Notification</strong> (extern class)</div>

The `Notification` interface of the Notifications API is used to configure and display desktop notifications to the user.

Documentation [Notification](https://developer.mozilla.org/en-US/docs/Web/API/Notification) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/Notification$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/Notification></div>


## Static Members

<div class="signature field-var has-description" id="permission"><code><span class="field-name">permission</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/NotificationPermission/" class="type-link">NotificationPermission</a></code><a class="header-anchor" href="#permission"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A string representing the current permission to display notifications. Possible values are:

`denied` — The user refuses to have notifications displayed.
`granted` — The user accepts having notifications displayed.
`default` — The user choice is unknown and therefore the browser will act as if the value were denied.

## Instance Members

<div class="signature field-var has-description" id="onclick"><code><span class="field-name">onclick</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onclick"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A handler for the `click` event. It is triggered each time the user clicks on the notification.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onshow"><code><span class="field-name">onshow</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onshow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A handler for the `show` event. It is triggered when the notification is displayed.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onerror"><code><span class="field-name">onerror</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onerror"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A handler for the `error` event. It is triggered each time the notification encounters an error.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onclose"><code><span class="field-name">onclose</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onclose"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A handler for the `close` event. It is triggered when the user closes the notification.

<hr class="field-separator" />

<div class="signature field-var has-description" id="title"><code><span class="field-name">title</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#title"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The title of the notification as specified in the first parameter of the constructor.

<hr class="field-separator" />

<div class="signature field-var has-description" id="dir"><code><span class="field-name">dir</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/NotificationDirection/" class="type-link">NotificationDirection</a></code><a class="header-anchor" href="#dir"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The text direction of the notification as specified in the constructor's `options` parameter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="lang"><code><span class="field-name">lang</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#lang"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The language code of the notification as specified in the constructor's `options` parameter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="body"><code><span class="field-name">body</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#body"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The body string of the notification as specified in the constructor's `options` parameter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="tag"><code><span class="field-name">tag</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#tag"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The ID of the notification (if any) as specified in the constructor's `options` parameter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="icon"><code><span class="field-name">icon</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#icon"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The URL of the image used as an icon of the notification as specified in the constructor's `options` parameter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="data"><code><span class="field-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#data"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a structured clone of the notification’s data.

<hr class="field-separator" />

<div class="signature field-method has-description" id="close"><code><span class="field-name">close</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#close"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Programmatically closes a notification.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">title</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/NotificationOptions/" class="type-link">NotificationOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `title` | [String](/api-docs/clay-web/String/) | |
| `options` | [Null](/api-docs/clay-web/Null/)<[NotificationOptions](/api-docs/clay-web/js/html/NotificationOptions/)> | *(optional)* |

