---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: MediaDeviceInfo
target: Clay (Web)
permalink: api-docs/clay-web/js/html/MediaDeviceInfo/
---

# MediaDeviceInfo

<div class="type-hierarchy"><strong>js.html.MediaDeviceInfo</strong> (extern class)</div>

The `MediaDevicesInfo` interface contains information that describes a single media input or output device.

Documentation [MediaDeviceInfo](https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo></div>


## Instance Members

<div class="signature field-var has-description" id="deviceId"><code><span class="field-name">deviceId</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#deviceId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `DOMString` that is an identifier for the represented device that is persisted across sessions. It is un-guessable by other applications and unique to the origin of the calling application. It is reset when the user clears cookies (for Private Browsing, a different identifier is used that is not persisted across sessions).

<hr class="field-separator" />

<div class="signature field-var has-description" id="kind"><code><span class="field-name">kind</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/MediaDeviceKind/" class="type-link">MediaDeviceKind</a></code><a class="header-anchor" href="#kind"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an enumerated value that is either `"videoinput"`, `"audioinput"` or `"audiooutput"`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="label"><code><span class="field-name">label</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#label"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `DOMString` that is a label describing this device (for example "External USB Webcam").

<hr class="field-separator" />

<div class="signature field-var has-description" id="groupId"><code><span class="field-name">groupId</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#groupId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `DOMString` that is a group identifier. Two devices have the same group identifier if they belong to the same physical device — for example a monitor with both a built-in camera and a microphone.

<hr class="field-separator" />

<div class="signature field-method no-description" id="toJSON"><code><span class="field-name">toJSON</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#toJSON"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

