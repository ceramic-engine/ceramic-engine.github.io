---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: AudioBuffer
target: Clay (Web)
permalink: api-docs/clay-web/js/html/audio/AudioBuffer/
---

# AudioBuffer

<div class="type-hierarchy"><strong>js.html.audio.AudioBuffer</strong> (extern class)</div>

Objects of these types are designed to hold small audio snippets, typically less than 45 s. For longer sounds, objects implementing the `MediaElementAudioSourceNode` are more suitable. The buffer contains data in the following format:  non-interleaved IEEE754 32-bit linear PCM with a nominal range between `-1` and `+1`, that is, 32bits floating point buffer, with each samples between -1.0 and 1.0. If the `AudioBuffer` has multiple channels, they are stored in separate buffer.

Documentation [AudioBuffer](https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer></div>


## Instance Members

<div class="signature field-var has-description" id="sampleRate"><code><span class="field-name">sampleRate</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#sampleRate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a float representing the sample rate, in samples per second, of the PCM data stored in the buffer.

<hr class="field-separator" />

<div class="signature field-var has-description" id="length"><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an integer representing the length, in sample-frames, of the PCM data stored in the buffer.

<hr class="field-separator" />

<div class="signature field-var has-description" id="duration"><code><span class="field-name">duration</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#duration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a double representing the duration, in seconds, of the PCM data stored in the buffer.

<hr class="field-separator" />

<div class="signature field-var has-description" id="numberOfChannels"><code><span class="field-name">numberOfChannels</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#numberOfChannels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an integer representing the number of discrete audio channels described by the PCM data stored in the buffer.

<hr class="field-separator" />

<div class="signature field-method has-description" id="getChannelData"><code><span class="field-name">getChannelData</span><span class="parenthesis">(</span><span class="arg-name">channel</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Float32Array/" class="type-link">js.lib.Float32Array</a></code><a class="header-anchor" href="#getChannelData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Float32Array` containing the PCM data associated with the channel, defined by the `channel` parameter (with `0` representing the first channel).

| Name | Type |
|------|------|
| `channel` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [js.lib.Float32Array](/api-docs/clay-web/js/lib/Float32Array/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="copyFromChannel"><code><span class="field-name">copyFromChannel</span><span class="parenthesis">(</span><span class="arg-name">destination</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Float32Array/" class="type-link">js.lib.Float32Array</a><span class="operator">,</span> <span class="arg-name">channelNumber</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">startInChannel</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#copyFromChannel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Copies the samples from the specified channel of the `AudioBuffer` to the `destination` array.

| Name | Type | Default |
|------|------|---------|
| `destination` | [js.lib.Float32Array](/api-docs/clay-web/js/lib/Float32Array/) | |
| `channelNumber` | [Int](/api-docs/clay-web/Int/) | |
| `startInChannel` | [Int](/api-docs/clay-web/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="copyToChannel"><code><span class="field-name">copyToChannel</span><span class="parenthesis">(</span><span class="arg-name">source</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Float32Array/" class="type-link">js.lib.Float32Array</a><span class="operator">,</span> <span class="arg-name">channelNumber</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">startInChannel</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#copyToChannel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Copies the samples to the specified channel of the `AudioBuffer`, from the `source` array.

| Name | Type | Default |
|------|------|---------|
| `source` | [js.lib.Float32Array](/api-docs/clay-web/js/lib/Float32Array/) | |
| `channelNumber` | [Int](/api-docs/clay-web/Int/) | |
| `startInChannel` | [Int](/api-docs/clay-web/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/AudioBufferOptions/" class="type-link">AudioBufferOptions</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `options` | [AudioBufferOptions](/api-docs/clay-web/js/html/audio/AudioBufferOptions/) |

