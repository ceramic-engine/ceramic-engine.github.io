---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: TrackElement
target: Clay (Web)
permalink: api-docs/clay-web/js/html/TrackElement/
---

# TrackElement

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <a href="/api-docs/clay-web/js/html/Node/">Node</a> → <a href="/api-docs/clay-web/js/html/DOMElement/">DOMElement</a> → <a href="/api-docs/clay-web/js/html/Element/">Element</a> → <strong>js.html.TrackElement</strong> (extern class)</div>

The `HTMLTrackElement`

Documentation [HTMLTrackElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTrackElement) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTrackElement$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/HTMLTrackElement></div>


## Static Members

<div class="signature field-var no-description" id="NONE"><code><span class="field-name">NONE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#NONE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="LOADING"><code><span class="field-name">LOADING</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#LOADING"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="LOADED"><code><span class="field-name">LOADED</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#LOADED"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ERROR"><code><span class="field-name">ERROR</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ERROR"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Instance Members

<div class="signature field-var has-description" id="kind"><code><span class="field-name">kind</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#kind"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that reflects the `kind` HTML attribute, indicating how the text track is meant to be used. Possible values are: subtitles, captions, descriptions, chapters, metadata.

<hr class="field-separator" />

<div class="signature field-var has-description" id="src"><code><span class="field-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#src"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that reflects the `src` HTML attribute, indicating the address of the text track data.

<hr class="field-separator" />

<div class="signature field-var has-description" id="srclang"><code><span class="field-name">srclang</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#srclang"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that reflects the `srclang` HTML attribute, indicating the language of the text track data.

<hr class="field-separator" />

<div class="signature field-var has-description" id="label"><code><span class="field-name">label</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#label"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that reflects the `label` HTML attribute, indicating a user-readable title for the track.

<hr class="field-separator" />

<div class="signature field-var has-description" id="default_"><code><span class="field-name">default_</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#default_"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `Boolean` reflects the `default` HTML attribute, indicating that the track is to be enabled if the user's preferences do not indicate that another track would be more appropriate.

<hr class="field-separator" />

<div class="signature field-var has-description" id="readyState"><code><span class="field-name">readyState</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#readyState"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns  an <code>unsigned short</code> that show the readiness state of the track:
<table class="standard-table">

<tr>
<td class="header">Constant</td>
<td class="header">Value</td>
<td class="header">Description</td>
</tr>
<tr>
<td><code>NONE</code></td>
<td>0</td>
<td>Indicates that the text track's cues have not been obtained.</td>
</tr>
<tr>
<td><code>LOADING</code></td>
<td>1</td>
<td>Indicates that the text track is loading and there have been no fatal errors encountered so far. Further cues might still be added to the track by the parser.</td>
</tr>
<tr>
<td><code>LOADED</code></td>
<td>2</td>
<td>Indicates that the text track has been loaded with no fatal errors.</td>
</tr>
<tr>
<td><code>ERROR</code></td>
<td>3</td>
<td>Indicates that the text track was enabled, but when the user agent attempted to obtain it, this failed in some way. Some or all of the cues are likely missing and will not be obtained.</td>
</tr>

</table>

<hr class="field-separator" />

<div class="signature field-var has-description" id="track"><code><span class="field-name">track</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/TextTrack/" class="type-link">TextTrack</a></code><a class="header-anchor" href="#track"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `TextTrack` is the track element's text track data.

