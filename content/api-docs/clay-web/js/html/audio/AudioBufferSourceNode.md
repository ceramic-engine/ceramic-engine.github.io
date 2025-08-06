---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: AudioBufferSourceNode
target: Clay (Web)
permalink: api-docs/clay-web/js/html/audio/AudioBufferSourceNode/
---

# AudioBufferSourceNode

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">js.html.EventTarget</a> → <a href="/api-docs/clay-web/js/html/audio/AudioNode/">AudioNode</a> → <a href="/api-docs/clay-web/js/html/audio/AudioScheduledSourceNode/">AudioScheduledSourceNode</a> → <strong>js.html.audio.AudioBufferSourceNode</strong> (extern class)</div>

The `AudioBufferSourceNode` interface is an `AudioScheduledSourceNode` which represents an audio source consisting of in-memory audio data, stored in an `AudioBuffer`. It's especially useful for playing back audio which has particularly stringent timing accuracy requirements, such as for sounds that must match a specific rhythm and can be kept in memory rather than being played from disk or the network.

Documentation [AudioBufferSourceNode](https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode></div>


## Instance Members

<div class="signature field-var has-description" id="buffer"><code><span class="field-name">buffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/AudioBuffer/" class="type-link">AudioBuffer</a></code><a class="header-anchor" href="#buffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An `AudioBuffer` that defines the audio asset to be played, or when set to the value `null`, defines a single channel of silence (in which every sample is 0.0).

<hr class="field-separator" />

<div class="signature field-var has-description" id="playbackRate"><code><span class="field-name">playbackRate</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/AudioParam/" class="type-link">AudioParam</a></code><a class="header-anchor" href="#playbackRate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An a-rate `AudioParam` that defines the speed factor at which the audio asset will be played, where a value of 1.0 is the sound's natural sampling rate. Since no pitch correction is applied on the output, this can be used to change the pitch of the sample. This value is compounded with `detune` to determine the final playback rate.

<hr class="field-separator" />

<div class="signature field-var has-description" id="detune"><code><span class="field-name">detune</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/AudioParam/" class="type-link">AudioParam</a></code><a class="header-anchor" href="#detune"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a k-rate `AudioParam` representing detuning of playback in cents. This value is compounded with `playbackRate` to determine the speed at which the sound is played. Its default value is `0` (meaning no detuning), and its nominal range is -∞ to ∞.

<hr class="field-separator" />

<div class="signature field-var has-description" id="loop"><code><span class="field-name">loop</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#loop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A Boolean attribute indicating if the audio asset must be replayed when the end of the `AudioBuffer` is reached. Its default value is `false`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="loopStart"><code><span class="field-name">loopStart</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#loopStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A floating-point value indicating the time, in seconds, at which playback of the `AudioBuffer` must begin when `loop` is `true`. Its default value is `0` (meaning that at the beginning of each loop, playback begins at the start of the audio buffer).

<hr class="field-separator" />

<div class="signature field-var has-description" id="loopEnd"><code><span class="field-name">loopEnd</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#loopEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A floating-point number indicating the time, in seconds, at which playback of the `AudioBuffer` stops and loops back to the time indicated by `loopStart`, if `loop` is `true`. The default value is `0`.

<hr class="field-separator" />

<div class="signature field-method has-description" id="start"><code><span class="field-name">start</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">when</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">grainOffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">grainDuration</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#start"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Used to schedule playback of the audio data contained in the buffer, or to begin playback immediately.

| Name | Type | Default |
|------|------|---------|
| `when` | [Float](/api-docs/clay-web/Float/) | `0.0` |
| `grainOffset` | [Float](/api-docs/clay-web/Float/) | `0.0` |
| `grainDuration` | [Float](/api-docs/clay-web/Float/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">context</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/BaseAudioContext/" class="type-link">BaseAudioContext</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/audio/AudioBufferSourceOptions/" class="type-link">AudioBufferSourceOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `context` | [BaseAudioContext](/api-docs/clay-web/js/html/audio/BaseAudioContext/) | |
| `options` | [Null](/api-docs/clay-web/Null/)<[AudioBufferSourceOptions](/api-docs/clay-web/js/html/audio/AudioBufferSourceOptions/)> | *(optional)* |

