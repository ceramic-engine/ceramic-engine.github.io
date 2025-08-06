---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: AudioTrack
target: Clay (Web)
permalink: api-docs/clay-web/js/html/AudioTrack/
---

# AudioTrack

<div class="type-hierarchy"><strong>js.html.AudioTrack</strong> (extern class)</div>

The `AudioTrack` interface represents a single audio track from one of the HTML media elements, `audio` or `video`.

Documentation [AudioTrack](https://developer.mozilla.org/en-US/docs/Web/API/AudioTrack) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/AudioTrack$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/AudioTrack></div>


## Instance Members

<div class="signature field-var has-description" id="id"><code><span class="field-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#id"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMString` which uniquely identifies the track within the media. This ID can be used to locate a specific track within an audio track list by calling `AudioTrackList.getTrackById()`. The ID can also be used as the fragment part of the URL if the media supports seeking by media fragment per the Media Fragments URI specification.

<hr class="field-separator" />

<div class="signature field-var has-description" id="kind"><code><span class="field-name">kind</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#kind"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMString` specifying the category into which the track falls. For example, the main audio track would have a `kind` of `"main"`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="label"><code><span class="field-name">label</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#label"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMString` providing a human-readable label for the track. For example, an audio commentary track for a movie might have a `label` of `"Commentary with director John Q. Public and actors John Doe and Jane Eod."` This string is empty if no label is provided.

<hr class="field-separator" />

<div class="signature field-var has-description" id="language"><code><span class="field-name">language</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#language"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMString` specifying the audio track's primary language, or an empty string if unknown. The language is specified as a BCP 47 ({{RFC(5646)}}) language code, such as `"en-US"` or `"pt-BR"`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="enabled"><code><span class="field-name">enabled</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#enabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A Boolean value which controls whether or not the audio track's sound is enabled. Setting this value to `false` mutes the track's audio.

