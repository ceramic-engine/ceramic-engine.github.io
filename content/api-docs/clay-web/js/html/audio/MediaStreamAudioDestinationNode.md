---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: MediaStreamAudioDestinationNode
target: Clay (Web)
permalink: api-docs/clay-web/js/html/audio/MediaStreamAudioDestinationNode/
---

# MediaStreamAudioDestinationNode

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">js.html.EventTarget</a> → <a href="/api-docs/clay-web/js/html/audio/AudioNode/">AudioNode</a> → <strong>js.html.audio.MediaStreamAudioDestinationNode</strong> (extern class)</div>

Inherits properties from its parent, `AudioNode`.

Documentation [MediaStreamAudioDestinationNode](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioDestinationNode) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioDestinationNode$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioDestinationNode></div>


## Instance Members

<div class="signature field-var has-description" id="stream"><code><span class="field-name">stream</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/MediaStream/" class="type-link">js.html.MediaStream</a></code><a class="header-anchor" href="#stream"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `MediaStream` containing a single `AudioMediaStreamTrack` with the same number of channels as the node itself. You can use this property to get a stream out of the audio graph and feed it into another construct, such as a Media Recorder.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">context</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/AudioContext/" class="type-link">AudioContext</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/audio/AudioNodeOptions/" class="type-link">AudioNodeOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `context` | [AudioContext](/api-docs/clay-web/js/html/audio/AudioContext/) | |
| `options` | [Null](/api-docs/clay-web/Null/)<[AudioNodeOptions](/api-docs/clay-web/js/html/audio/AudioNodeOptions/)> | *(optional)* |

