---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: MediaStream
target: Clay (Web)
permalink: api-docs/clay-web/js/html/MediaStream/
---

# MediaStream

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <strong>js.html.MediaStream</strong> (extern class) → <a href="/api-docs/clay-web/js/html/CanvasCaptureMediaStream/">CanvasCaptureMediaStream</a></div>

The `MediaStream` interface represents a stream of media content. A stream consists of several tracks such as video or audio tracks. Each track is specified as an instance of `MediaStreamTrack`.

Documentation [MediaStream](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/MediaStream></div>


## Instance Members

<div class="signature field-var has-description" id="id"><code><span class="field-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#id"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMString` containing 36 characters denoting a universally unique identifier (UUID) for the object.

<hr class="field-separator" />

<div class="signature field-var has-description" id="active"><code><span class="field-name">active</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#active"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A Boolean value that returns `true` if the `MediaStream` is active, or `false` otherwise.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onaddtrack"><code><span class="field-name">onaddtrack</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onaddtrack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An `EventHandler` containing the action to perform when an `addtrack` event is fired when a new `MediaStreamTrack` object is added.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onremovetrack"><code><span class="field-name">onremovetrack</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onremovetrack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An `EventHandler` containing the action to perform when a `removetrack` event is fired when a  `MediaStreamTrack` object is removed from it.

<hr class="field-separator" />

<div class="signature field-var no-description" id="currentTime"><code><span class="field-name">currentTime</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#currentTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="getAudioTracks"><code><span class="field-name">getAudioTracks</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/AudioStreamTrack/" class="type-link">AudioStreamTrack</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getAudioTracks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a list of the `MediaStreamTrack` objects stored in the MediaStream` object that have their kind` attribute set to "audio"`. The order is not defined, and may not only vary from one browser to another, but also from one call to another.
| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[AudioStreamTrack](/api-docs/clay-web/js/html/AudioStreamTrack/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getVideoTracks"><code><span class="field-name">getVideoTracks</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/VideoStreamTrack/" class="type-link">VideoStreamTrack</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getVideoTracks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a list of the `MediaStreamTrack` objects stored in the `MediaStream` object that have their `kind` attribute set to `"video"`. The order is not defined, and may not only vary from one browser to another, but also from one call to another.
| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[VideoStreamTrack](/api-docs/clay-web/js/html/VideoStreamTrack/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getTracks"><code><span class="field-name">getTracks</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/MediaStreamTrack/" class="type-link">MediaStreamTrack</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getTracks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a list of all `MediaStreamTrack` objects stored in the `MediaStream` object, regardless of the value of the `kind` attribute. The order is not defined, and may not only vary from one browser to another, but also from one call to another.
| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[MediaStreamTrack](/api-docs/clay-web/js/html/MediaStreamTrack/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getTrackById"><code><span class="field-name">getTrackById</span><span class="parenthesis">(</span><span class="arg-name">trackId</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/MediaStreamTrack/" class="type-link">MediaStreamTrack</a></code><a class="header-anchor" href="#getTrackById"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the track whose ID corresponds to the one given in parameters, trackid`. If no parameter is given, or if no track with that ID does exist, it returns null`. If several tracks have the same ID, it returns the first one.

| Name | Type |
|------|------|
| `trackId` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [MediaStreamTrack](/api-docs/clay-web/js/html/MediaStreamTrack/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addTrack"><code><span class="field-name">addTrack</span><span class="parenthesis">(</span><span class="arg-name">track</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/MediaStreamTrack/" class="type-link">MediaStreamTrack</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addTrack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Stores a copy of the `MediaStreamTrack` given as argument. If the track has already been added to the `MediaStream` object, nothing happens.

| Name | Type |
|------|------|
| `track` | [MediaStreamTrack](/api-docs/clay-web/js/html/MediaStreamTrack/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="removeTrack"><code><span class="field-name">removeTrack</span><span class="parenthesis">(</span><span class="arg-name">track</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/MediaStreamTrack/" class="type-link">MediaStreamTrack</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeTrack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes the `MediaStreamTrack` given as argument. If the track is not part of the MediaStream` object, nothing happens.

| Name | Type |
|------|------|
| `track` | [MediaStreamTrack](/api-docs/clay-web/js/html/MediaStreamTrack/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clone"><code><span class="field-name">clone</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">MediaStream</a></code><a class="header-anchor" href="#clone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a clone of the `MediaStream` object. The clone will, however, have a unique value for `MediaStream.id`.
| Returns |
|---------|
| [MediaStream](/api-docs/clay-web/js/html/MediaStream/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">tracks</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/MediaStreamTrack/" class="type-link">MediaStreamTrack</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `tracks` | [Array](/api-docs/clay-web/Array/)<[MediaStreamTrack](/api-docs/clay-web/js/html/MediaStreamTrack/)> |

