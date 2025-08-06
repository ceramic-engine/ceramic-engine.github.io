---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: AudioTrackList
target: Clay (Web)
permalink: api-docs/clay-web/js/html/AudioTrackList/
---

# AudioTrackList

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <strong>js.html.AudioTrackList</strong> (extern class)</div>

The `AudioTrackList` interface is used to represent a list of the audio tracks contained within a given HTML media element, with each track represented by a separate `AudioTrack` object in the list.

Documentation [AudioTrackList](https://developer.mozilla.org/en-US/docs/Web/API/AudioTrackList) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/AudioTrackList$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/AudioTrackList></div>


## Instance Members

<div class="signature field-var has-description" id="length"><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The number of tracks in the list.

<hr class="field-separator" />

<div class="signature field-var no-description" id="onchange"><code><span class="field-name">onchange</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onchange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onaddtrack"><code><span class="field-name">onaddtrack</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onaddtrack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onremovetrack"><code><span class="field-name">onremovetrack</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onremovetrack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="getTrackById"><code><span class="field-name">getTrackById</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/AudioTrack/" class="type-link">AudioTrack</a></code><a class="header-anchor" href="#getTrackById"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `id` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [AudioTrack](/api-docs/clay-web/js/html/AudioTrack/) |

