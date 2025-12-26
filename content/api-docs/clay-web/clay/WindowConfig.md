---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: WindowConfig
target: Clay (Web)
permalink: api-docs/clay-web/clay/WindowConfig/
---

# WindowConfig

<div class="view-source"><a href="https://github.com/ceramic-engine/clay/blob/master/src-opengl/clay/Config.hx">View source</a></div>

<div class="type-hierarchy"><strong>clay.WindowConfig</strong> (Class)</div>

Window configuration information for creating windows

## Instance Members

<div class="signature field-var has-description" id="fullscreen"><code><span class="field-name">fullscreen</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#fullscreen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

create in fullscreen, default: false, `mobile` true

<hr class="field-separator" />

<div class="signature field-var has-description" id="trueFullscreen"><code><span class="field-name">trueFullscreen</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#trueFullscreen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If false, the users native window/desktop resolution will be used instead of the specified window size. default: false
On native, changing the users video mode is less than ideal, so trueFullscreen is commonly discouraged.

<hr class="field-separator" />

<div class="signature field-var has-description" id="resizable"><code><span class="field-name">resizable</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#resizable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

allow the window to be resized, default: true

<hr class="field-separator" />

<div class="signature field-var has-description" id="borderless"><code><span class="field-name">borderless</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#borderless"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

create as a borderless window, default: false

<hr class="field-separator" />

<div class="signature field-var has-description" id="x"><code><span class="field-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#x"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

window x at creation. Leave this alone to use the OS default.

<hr class="field-separator" />

<div class="signature field-var has-description" id="y"><code><span class="field-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

window y at creation. Leave this alone to use the OS default.

<hr class="field-separator" />

<div class="signature field-var has-description" id="width"><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

window width at creation, default: 960

<hr class="field-separator" />

<div class="signature field-var has-description" id="height"><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

window height at creation, default: 640

<hr class="field-separator" />

<div class="signature field-var has-description" id="title"><code><span class="field-name">title</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#title"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

window title, default: 'clay app'

<hr class="field-separator" />

<div class="signature field-var has-description" id="noInput"><code><span class="field-name">noInput</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#noInput"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

disables input arriving at/from this window. default: false

<hr class="field-separator" />

<div class="signature field-var has-description" id="backgroundSleep"><code><span class="field-name">backgroundSleep</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#backgroundSleep"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Time in seconds to sleep when in the background.
Setting this to zero disables the behavior.
This has no effect on the web target,
as there is no concept of sleep there (and browsers usually throttle background tabs).
Higher sleep times (i.e 1/10 or 1/30) use less cpu. default: 1/15

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">fullscreen</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">trueFullscreen</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">resizable</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">borderless</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">title</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">noInput</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">backgroundSleep</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `fullscreen` | [Null](/api-docs/clay-web/Null/)<[Bool](/api-docs/clay-web/Bool/)> | *(optional)* | create in fullscreen, default: false, `mobile` true |
| `trueFullscreen` | [Null](/api-docs/clay-web/Null/)<[Bool](/api-docs/clay-web/Bool/)> | *(optional)* | If false, the users native window/desktop resolution will be used instead of the specified window size. default: false On native, changing the users video mode is less than ideal, so trueFullscreen is commonly discouraged. |
| `resizable` | [Null](/api-docs/clay-web/Null/)<[Bool](/api-docs/clay-web/Bool/)> | *(optional)* | allow the window to be resized, default: true |
| `borderless` | [Null](/api-docs/clay-web/Null/)<[Bool](/api-docs/clay-web/Bool/)> | *(optional)* | create as a borderless window, default: false |
| `x` | [Null](/api-docs/clay-web/Null/)<[Int](/api-docs/clay-web/Int/)> | *(optional)* | window x at creation. Leave this alone to use the OS default. |
| `y` | [Null](/api-docs/clay-web/Null/)<[Int](/api-docs/clay-web/Int/)> | *(optional)* | window y at creation. Leave this alone to use the OS default. |
| `width` | [Null](/api-docs/clay-web/Null/)<[Int](/api-docs/clay-web/Int/)> | *(optional)* | window width at creation, default: 960 |
| `height` | [Null](/api-docs/clay-web/Null/)<[Int](/api-docs/clay-web/Int/)> | *(optional)* | window height at creation, default: 640 |
| `title` | [Null](/api-docs/clay-web/Null/)<[String](/api-docs/clay-web/String/)> | *(optional)* | window title, default: 'clay app' |
| `noInput` | [Null](/api-docs/clay-web/Null/)<[Bool](/api-docs/clay-web/Bool/)> | *(optional)* | disables input arriving at/from this window. default: false |
| `backgroundSleep` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* | Time in seconds to sleep when in the background. Setting this to zero disables the behavior. This has no effect on the web target, as there is no concept of sleep there (and browsers usually throttle background tabs). Higher sleep times (i.e 1/10 or 1/30) use less cpu. default: 1/15 |

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |
| `:publicFields` | - |

