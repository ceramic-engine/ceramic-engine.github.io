---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: VideoPlaybackQuality
target: Clay (Web)
permalink: api-docs/clay-web/js/html/VideoPlaybackQuality/
---

# VideoPlaybackQuality

<div class="type-hierarchy"><strong>js.html.VideoPlaybackQuality</strong> (extern class)</div>

The `VideoPlaybackQuality` interface represents the set of metrics describing the playback quality of a video.

Documentation [VideoPlaybackQuality](https://developer.mozilla.org/en-US/docs/Web/API/VideoPlaybackQuality) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/VideoPlaybackQuality$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/VideoPlaybackQuality></div>


## Instance Members

<div class="signature field-var has-description" id="creationTime"><code><span class="field-name">creationTime</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#creationTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMHighResTimeStamp` containing the time in miliseconds since the start of the navigation and the creation of the object.

<hr class="field-separator" />

<div class="signature field-var has-description" id="totalVideoFrames"><code><span class="field-name">totalVideoFrames</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#totalVideoFrames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An `unsigned long` giving the number of video frames created and dropped since the creation of the associated `HTMLVideoElement`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="droppedVideoFrames"><code><span class="field-name">droppedVideoFrames</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#droppedVideoFrames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An `unsigned long` giving the number of video frames dropped since the creation of the associated `HTMLVideoElement`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="corruptedVideoFrames"><code><span class="field-name">corruptedVideoFrames</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#corruptedVideoFrames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An `unsigned long` giving the number of video frames corrupted since the creation of the associated `HTMLVideoElement`. A corrupted frame may be created or dropped.

