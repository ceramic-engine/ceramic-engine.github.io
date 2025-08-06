---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: MediaStreamAudioSourceNode
target: Clay (Web)
permalink: api-docs/clay-web/js/html/audio/MediaStreamAudioSourceNode/
---

# MediaStreamAudioSourceNode

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">js.html.EventTarget</a> → <a href="/api-docs/clay-web/js/html/audio/AudioNode/">AudioNode</a> → <strong>js.html.audio.MediaStreamAudioSourceNode</strong> (extern class)</div>

A `MediaStreamAudioSourceNode` has no inputs and exactly one output, and is created using the `AudioContext.createMediaStreamSource` method. The number of channels in the output equals the number of channels in `AudioMediaStreamTrack`. If there is no valid media stream, then the number of output channels will be one silent channel.

Documentation [MediaStreamAudioSourceNode](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioSourceNode) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioSourceNode$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioSourceNode></div>


## Instance Members

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">context</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/AudioContext/" class="type-link">AudioContext</a><span class="operator">,</span> <span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/MediaStreamAudioSourceOptions/" class="type-link">MediaStreamAudioSourceOptions</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `context` | [AudioContext](/api-docs/clay-web/js/html/audio/AudioContext/) |
| `options` | [MediaStreamAudioSourceOptions](/api-docs/clay-web/js/html/audio/MediaStreamAudioSourceOptions/) |

