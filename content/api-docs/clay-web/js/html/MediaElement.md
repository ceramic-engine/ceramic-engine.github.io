---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: MediaElement
target: Clay (Web)
permalink: api-docs/clay-web/js/html/MediaElement/
---

# MediaElement

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <a href="/api-docs/clay-web/js/html/Node/">Node</a> → <a href="/api-docs/clay-web/js/html/DOMElement/">DOMElement</a> → <a href="/api-docs/clay-web/js/html/Element/">Element</a> → <strong>js.html.MediaElement</strong> (extern class) → <a href="/api-docs/clay-web/js/html/AudioElement/">AudioElement</a>, <a href="/api-docs/clay-web/js/html/VideoElement/">VideoElement</a></div>

The `HTMLMediaElement` interface adds to `HTMLElement` the properties and methods needed to support basic media-related capabilities that are common to audio and video.

Documentation [HTMLMediaElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement></div>


## Static Members

<div class="signature field-var no-description" id="NETWORK_EMPTY"><code><span class="field-name">NETWORK_EMPTY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#NETWORK_EMPTY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="NETWORK_IDLE"><code><span class="field-name">NETWORK_IDLE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#NETWORK_IDLE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="NETWORK_LOADING"><code><span class="field-name">NETWORK_LOADING</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#NETWORK_LOADING"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="NETWORK_NO_SOURCE"><code><span class="field-name">NETWORK_NO_SOURCE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#NETWORK_NO_SOURCE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="HAVE_NOTHING"><code><span class="field-name">HAVE_NOTHING</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#HAVE_NOTHING"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="HAVE_METADATA"><code><span class="field-name">HAVE_METADATA</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#HAVE_METADATA"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="HAVE_CURRENT_DATA"><code><span class="field-name">HAVE_CURRENT_DATA</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#HAVE_CURRENT_DATA"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="HAVE_FUTURE_DATA"><code><span class="field-name">HAVE_FUTURE_DATA</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#HAVE_FUTURE_DATA"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="HAVE_ENOUGH_DATA"><code><span class="field-name">HAVE_ENOUGH_DATA</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#HAVE_ENOUGH_DATA"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Instance Members

<div class="signature field-var has-description" id="error"><code><span class="field-name">error</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/MediaError/" class="type-link">MediaError</a></code><a class="header-anchor" href="#error"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `MediaError` object for the most recent error, or `null` if there has not been an error.

<hr class="field-separator" />

<div class="signature field-var has-description" id="src"><code><span class="field-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#src"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that reflects the `src` HTML attribute, which contains the URL of a media resource to use.

<hr class="field-separator" />

<div class="signature field-var has-description" id="currentSrc"><code><span class="field-name">currentSrc</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#currentSrc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `DOMString` with the absolute URL of the chosen media resource.

<hr class="field-separator" />

<div class="signature field-var has-description" id="crossOrigin"><code><span class="field-name">crossOrigin</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#crossOrigin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` indicating the CORS setting for this media element.

<hr class="field-separator" />

<div class="signature field-var has-description" id="networkState"><code><span class="field-name">networkState</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#networkState"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `unsigned short` (enumeration) indicating the current state of fetching the media over the network.

<hr class="field-separator" />

<div class="signature field-var has-description" id="preload"><code><span class="field-name">preload</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#preload"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that reflects the `preload` HTML attribute, indicating what data should be preloaded, if any. Possible values are: `none`, `metadata`, `auto`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="buffered"><code><span class="field-name">buffered</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/TimeRanges/" class="type-link">TimeRanges</a></code><a class="header-anchor" href="#buffered"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `TimeRanges` object that indicates the ranges of the media source that the browser has buffered (if any) at the moment the `buffered` property is accessed.

<hr class="field-separator" />

<div class="signature field-var has-description" id="readyState"><code><span class="field-name">readyState</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#readyState"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `unsigned short` (enumeration) indicating the readiness state of the media.

<hr class="field-separator" />

<div class="signature field-var has-description" id="seeking"><code><span class="field-name">seeking</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#seeking"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Boolean` that indicates whether the media is in the process of seeking to a new position.

<hr class="field-separator" />

<div class="signature field-var has-description" id="currentTime"><code><span class="field-name">currentTime</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#currentTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `double` indicating the current playback time in seconds. Setting this value seeks the media to the new time.

<hr class="field-separator" />

<div class="signature field-var has-description" id="duration"><code><span class="field-name">duration</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#duration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `double` indicating the length of the media in seconds, or 0 if no media data is available.

<hr class="field-separator" />

<div class="signature field-var has-description" id="paused"><code><span class="field-name">paused</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#paused"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Boolean` that indicates whether the media element is paused.

<hr class="field-separator" />

<div class="signature field-var has-description" id="defaultPlaybackRate"><code><span class="field-name">defaultPlaybackRate</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#defaultPlaybackRate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `double` indicating the default playback rate for the media.

<hr class="field-separator" />

<div class="signature field-var has-description" id="playbackRate"><code><span class="field-name">playbackRate</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#playbackRate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `double` that indicates the rate at which the media is being played back. 

<hr class="field-separator" />

<div class="signature field-var has-description" id="played"><code><span class="field-name">played</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/TimeRanges/" class="type-link">TimeRanges</a></code><a class="header-anchor" href="#played"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `TimeRanges` object that contains the ranges of the media source that the browser has played, if any.

<hr class="field-separator" />

<div class="signature field-var has-description" id="seekable"><code><span class="field-name">seekable</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/TimeRanges/" class="type-link">TimeRanges</a></code><a class="header-anchor" href="#seekable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `TimeRanges` object that contains the time ranges that the user is able to seek to, if any.

<hr class="field-separator" />

<div class="signature field-var has-description" id="ended"><code><span class="field-name">ended</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#ended"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Boolean` that indicates whether the media element has finished playing.

<hr class="field-separator" />

<div class="signature field-var has-description" id="autoplay"><code><span class="field-name">autoplay</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#autoplay"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `Boolean` that reflects the `autoplay` HTML attribute, indicating whether playback should automatically begin as soon as enough media is available to do so without interruption.
Sites which automatically play audio (or videos with an audio track) can be an unpleasant experience for users, so it should be avoided when possible. If you must offer autoplay functionality, you should make it opt-in (requiring a user to specifically enable it). However, this can be useful when creating media elements whose source will be set at a later time, under user control.

<hr class="field-separator" />

<div class="signature field-var has-description" id="loop"><code><span class="field-name">loop</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#loop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `Boolean` that reflects the `loop` HTML attribute, which indicates whether the media element should start over when it reaches the end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="controls"><code><span class="field-name">controls</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#controls"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `Boolean` that reflects the `controls` HTML attribute, indicating whether user interface items for controlling the resource should be displayed.

<hr class="field-separator" />

<div class="signature field-var has-description" id="volume"><code><span class="field-name">volume</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#volume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `double` indicating the audio volume, from 0.0 (silent) to 1.0 (loudest).

<hr class="field-separator" />

<div class="signature field-var has-description" id="muted"><code><span class="field-name">muted</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#muted"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `Boolean` that determines whether audio is muted. `true` if the audio is muted and `false` otherwise.

<hr class="field-separator" />

<div class="signature field-var has-description" id="defaultMuted"><code><span class="field-name">defaultMuted</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#defaultMuted"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `Boolean` that reflects the `muted` HTML attribute, which indicates whether the media element's audio output should be muted by default.

<hr class="field-separator" />

<div class="signature field-var has-description" id="audioTracks"><code><span class="field-name">audioTracks</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/AudioTrackList/" class="type-link">AudioTrackList</a></code><a class="header-anchor" href="#audioTracks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `AudioTrackList` that lists the `AudioTrack` objects contained in the element.

<hr class="field-separator" />

<div class="signature field-var has-description" id="videoTracks"><code><span class="field-name">videoTracks</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/VideoTrackList/" class="type-link">VideoTrackList</a></code><a class="header-anchor" href="#videoTracks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the list of `VideoTrack` objects contained in the element.

Gecko supports only single track playback, and the parsing of tracks' metadata is only available for media with the Ogg container format.

<hr class="field-separator" />

<div class="signature field-var has-description" id="textTracks"><code><span class="field-name">textTracks</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/TextTrackList/" class="type-link">TextTrackList</a></code><a class="header-anchor" href="#textTracks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the list of `TextTrack` objects contained in the element.

<hr class="field-separator" />

<div class="signature field-var has-description" id="srcObject"><code><span class="field-name">srcObject</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/MediaStream/" class="type-link">MediaStream</a></code><a class="header-anchor" href="#srcObject"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `MediaStream` representing the media to play or that has played in the current `HTMLMediaElement`, or `null` if not assigned.

<hr class="field-separator" />

<div class="signature field-var has-description" id="mediaKeys"><code><span class="field-name">mediaKeys</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/eme/MediaKeys/" class="type-link">js.html.eme.MediaKeys</a></code><a class="header-anchor" href="#mediaKeys"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `MediaKeys` object or `null`. MediaKeys is a set of keys that an associated HTMLMediaElement can use for decryption of media data during playback.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onencrypted"><code><span class="field-name">onencrypted</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onencrypted"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the `EventHandler` called when the media is encrypted.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onwaitingforkey"><code><span class="field-name">onwaitingforkey</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onwaitingforkey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the `EventHandler` called when playback is blocked while waiting for an encryption key.

<hr class="field-separator" />

<div class="signature field-method has-description" id="load"><code><span class="field-name">load</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#load"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resets the media element and restarts the media resource. Any pending events are discarded. How much media data is fetched is still affected by the `preload` attribute. This method can be useful for releasing resources after any `src` attribute and `source` element descendants have been removed. Otherwise, it is usually unnecessary to use this method, unless required to rescan `source` element children after dynamic changes.

<hr class="field-separator" />

<div class="signature field-method has-description" id="canPlayType"><code><span class="field-name">canPlayType</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#canPlayType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determines whether the specified media type can be played back.

| Name | Type |
|------|------|
| `type` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fastSeek"><code><span class="field-name">fastSeek</span><span class="parenthesis">(</span><span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#fastSeek"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Directly seeks to the given time.

| Name | Type |
|------|------|
| `time` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="play"><code><span class="field-name">play</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Void/" class="type-link">Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#play"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Begins playback of the media.
| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Void](/api-docs/clay-web/Void/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="pause"><code><span class="field-name">pause</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pause"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pauses the media playback.

<hr class="field-separator" />

<div class="signature field-method has-description" id="addTextTrack"><code><span class="field-name">addTextTrack</span><span class="parenthesis">(</span><span class="arg-name">kind</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/TextTrackKind/" class="type-link">TextTrackKind</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">""</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">language</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">""</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/TextTrack/" class="type-link">TextTrack</a></code><a class="header-anchor" href="#addTextTrack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds a text track (such as a track for subtitles) to a media element.

| Name | Type | Default |
|------|------|---------|
| `kind` | [TextTrackKind](/api-docs/clay-web/js/html/TextTrackKind/) | |
| `label` | [String](/api-docs/clay-web/String/) | `""` |
| `language` | [String](/api-docs/clay-web/String/) | `""` |

| Returns |
|---------|
| [TextTrack](/api-docs/clay-web/js/html/TextTrack/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setMediaKeys"><code><span class="field-name">setMediaKeys</span><span class="parenthesis">(</span><span class="arg-name">mediaKeys</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/eme/MediaKeys/" class="type-link">js.html.eme.MediaKeys</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Void/" class="type-link">Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#setMediaKeys"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `Promise`. Sets the `MediaKeys` keys to use when decrypting media during playback.

| Name | Type |
|------|------|
| `mediaKeys` | [js.html.eme.MediaKeys](/api-docs/clay-web/js/html/eme/MediaKeys/) |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Void](/api-docs/clay-web/Void/)> |

