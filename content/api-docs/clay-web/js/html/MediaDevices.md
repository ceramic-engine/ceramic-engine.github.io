---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: MediaDevices
target: Clay (Web)
permalink: api-docs/clay-web/js/html/MediaDevices/
---

# MediaDevices

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <strong>js.html.MediaDevices</strong> (extern class)</div>

The `MediaDevices` interface provides access to connected media input devices like cameras and microphones, as well as screen sharing. In essence, it lets you obtain access to any hardware source of media data.

Documentation [MediaDevices](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices></div>


## Instance Members

<div class="signature field-var has-description" id="ondevicechange"><code><span class="field-name">ondevicechange</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#ondevicechange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The event handler for the `devicechange` event. This event is delivered to the `MediaDevices` object when a media input or output device is attached to or removed from the user's computer.

<hr class="field-separator" />

<div class="signature field-method no-description" id="getSupportedConstraints"><code><span class="field-name">getSupportedConstraints</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/MediaTrackSupportedConstraints/" class="type-link">MediaTrackSupportedConstraints</a></code><a class="header-anchor" href="#getSupportedConstraints"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [MediaTrackSupportedConstraints](/api-docs/clay-web/js/html/MediaTrackSupportedConstraints/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="enumerateDevices"><code><span class="field-name">enumerateDevices</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/MediaDeviceInfo/" class="type-link">MediaDeviceInfo</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#enumerateDevices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Array](/api-docs/clay-web/Array/)<[MediaDeviceInfo](/api-docs/clay-web/js/html/MediaDeviceInfo/)>> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getUserMedia"><code><span class="field-name">getUserMedia</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">constraints</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/MediaStreamConstraints/" class="type-link">MediaStreamConstraints</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/MediaStream/" class="type-link">MediaStream</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getUserMedia"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `constraints` | [Null](/api-docs/clay-web/Null/)<[MediaStreamConstraints](/api-docs/clay-web/js/html/MediaStreamConstraints/)> | *(optional)* |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[MediaStream](/api-docs/clay-web/js/html/MediaStream/)> |

