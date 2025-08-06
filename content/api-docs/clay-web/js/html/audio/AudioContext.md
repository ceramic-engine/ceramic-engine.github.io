---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: AudioContext
target: Clay (Web)
permalink: api-docs/clay-web/js/html/audio/AudioContext/
---

# AudioContext

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">js.html.EventTarget</a> → <a href="/api-docs/clay-web/js/html/audio/BaseAudioContext/">BaseAudioContext</a> → <strong>js.html.audio.AudioContext</strong> (extern class)</div>

The `AudioContext` interface represents an audio-processing graph built from audio modules linked together, each represented by an `AudioNode`.

Documentation [AudioContext](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/AudioContext></div>


## Instance Members

<div class="signature field-method has-description" id="suspend"><code><span class="field-name">suspend</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Void/" class="type-link">Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#suspend"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Suspends the progression of time in the audio context, temporarily halting audio hardware access and reducing CPU/battery usage in the process.
| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Void](/api-docs/clay-web/Void/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="close"><code><span class="field-name">close</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Void/" class="type-link">Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#close"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Closes the audio context, releasing any system audio resources that it uses.
| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Void](/api-docs/clay-web/Void/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createMediaElementSource"><code><span class="field-name">createMediaElementSource</span><span class="parenthesis">(</span><span class="arg-name">mediaElement</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/MediaElement/" class="type-link">js.html.MediaElement</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/MediaElementAudioSourceNode/" class="type-link">MediaElementAudioSourceNode</a></code><a class="header-anchor" href="#createMediaElementSource"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a `MediaElementAudioSourceNode` associated with an `HTMLMediaElement`. This can be used to play and manipulate audio from `video` or `audio` elements.

| Name | Type |
|------|------|
| `mediaElement` | [js.html.MediaElement](/api-docs/clay-web/js/html/MediaElement/) |

| Returns |
|---------|
| [MediaElementAudioSourceNode](/api-docs/clay-web/js/html/audio/MediaElementAudioSourceNode/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createMediaStreamSource"><code><span class="field-name">createMediaStreamSource</span><span class="parenthesis">(</span><span class="arg-name">mediaStream</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/MediaStream/" class="type-link">js.html.MediaStream</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/MediaStreamAudioSourceNode/" class="type-link">MediaStreamAudioSourceNode</a></code><a class="header-anchor" href="#createMediaStreamSource"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a `MediaStreamAudioSourceNode` associated with a `MediaStream` representing an audio stream which may come from the local computer microphone or other sources.

| Name | Type |
|------|------|
| `mediaStream` | [js.html.MediaStream](/api-docs/clay-web/js/html/MediaStream/) |

| Returns |
|---------|
| [MediaStreamAudioSourceNode](/api-docs/clay-web/js/html/audio/MediaStreamAudioSourceNode/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createMediaStreamDestination"><code><span class="field-name">createMediaStreamDestination</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/MediaStreamAudioDestinationNode/" class="type-link">MediaStreamAudioDestinationNode</a></code><a class="header-anchor" href="#createMediaStreamDestination"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a `MediaStreamAudioDestinationNode` associated with a `MediaStream` representing an audio stream which may be stored in a local file or sent to another computer.
| Returns |
|---------|
| [MediaStreamAudioDestinationNode](/api-docs/clay-web/js/html/audio/MediaStreamAudioDestinationNode/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">contextOptions</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/audio/AudioContextOptions/" class="type-link">AudioContextOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `contextOptions` | [Null](/api-docs/clay-web/Null/)<[AudioContextOptions](/api-docs/clay-web/js/html/audio/AudioContextOptions/)> | *(optional)* |

