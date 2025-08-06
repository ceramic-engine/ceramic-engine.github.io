---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: MediaElementAudioSourceNode
target: Clay (Web)
permalink: api-docs/clay-web/js/html/audio/MediaElementAudioSourceNode/
---

# MediaElementAudioSourceNode

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">js.html.EventTarget</a> → <a href="/api-docs/clay-web/js/html/audio/AudioNode/">AudioNode</a> → <strong>js.html.audio.MediaElementAudioSourceNode</strong> (extern class)</div>

A `MediaElementSourceNode` has no inputs and exactly one output, and is created using the `AudioContext.createMediaElementSource` method. The amount of channels in the output equals the number of channels of the audio referenced by the `HTMLMediaElement` used in the creation of the node, or is 1 if the `HTMLMediaElement` has no audio.

Documentation [MediaElementAudioSourceNode](https://developer.mozilla.org/en-US/docs/Web/API/MediaElementAudioSourceNode) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/MediaElementAudioSourceNode$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/MediaElementAudioSourceNode></div>


## Instance Members

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">context</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/AudioContext/" class="type-link">AudioContext</a><span class="operator">,</span> <span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/MediaElementAudioSourceOptions/" class="type-link">MediaElementAudioSourceOptions</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `context` | [AudioContext](/api-docs/clay-web/js/html/audio/AudioContext/) |
| `options` | [MediaElementAudioSourceOptions](/api-docs/clay-web/js/html/audio/MediaElementAudioSourceOptions/) |

