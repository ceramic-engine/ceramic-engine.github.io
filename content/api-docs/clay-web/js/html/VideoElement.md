---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: VideoElement
target: Clay (Web)
permalink: api-docs/clay-web/js/html/VideoElement/
---

# VideoElement

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <a href="/api-docs/clay-web/js/html/Node/">Node</a> → <a href="/api-docs/clay-web/js/html/DOMElement/">DOMElement</a> → <a href="/api-docs/clay-web/js/html/Element/">Element</a> → <a href="/api-docs/clay-web/js/html/MediaElement/">MediaElement</a> → <strong>js.html.VideoElement</strong> (extern class)</div>

The `HTMLVideoElement` interface provides special properties and methods for manipulating video objects. It also inherits properties and methods of `HTMLMediaElement` and `HTMLElement`.

Documentation [HTMLVideoElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement></div>


## Instance Members

<div class="signature field-var has-description" id="width"><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that reflects the `width` HTML attribute, which specifies the width of the display area, in CSS pixels.

<hr class="field-separator" />

<div class="signature field-var has-description" id="height"><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that reflects the `height` HTML attribute, which specifies the height of the display area, in CSS pixels.

<hr class="field-separator" />

<div class="signature field-var has-description" id="videoWidth"><code><span class="field-name">videoWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#videoWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `unsigned long` containing the intrinsic width of the resource in CSS pixels, taking into account the dimensions, aspect ratio, clean aperture, resolution, and so forth, as defined for the format used by the resource. If the element's ready state is `HAVE_NOTHING`, the value is `0`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="videoHeight"><code><span class="field-name">videoHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#videoHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `unsigned long` containing the intrinsic height of the resource in CSS pixels, taking into account the dimensions, aspect ratio, clean aperture, resolution, and so forth, as defined for the format used by the resource. If the element's ready state is `HAVE_NOTHING`, the value is `0`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="poster"><code><span class="field-name">poster</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#poster"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that reflects the `poster` HTML attribute, which specifies an image to show while no video data is available.

<hr class="field-separator" />

<div class="signature field-method has-description" id="getVideoPlaybackQuality"><code><span class="field-name">getVideoPlaybackQuality</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/VideoPlaybackQuality/" class="type-link">VideoPlaybackQuality</a></code><a class="header-anchor" href="#getVideoPlaybackQuality"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `VideoPlaybackQuality` objects that contains the current playback metrics.
| Returns |
|---------|
| [VideoPlaybackQuality](/api-docs/clay-web/js/html/VideoPlaybackQuality/) |

