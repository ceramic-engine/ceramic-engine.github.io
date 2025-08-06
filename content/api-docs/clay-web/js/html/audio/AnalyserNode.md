---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: AnalyserNode
target: Clay (Web)
permalink: api-docs/clay-web/js/html/audio/AnalyserNode/
---

# AnalyserNode

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">js.html.EventTarget</a> → <a href="/api-docs/clay-web/js/html/audio/AudioNode/">AudioNode</a> → <strong>js.html.audio.AnalyserNode</strong> (extern class)</div>

The `AnalyserNode` interface represents a node able to provide real-time frequency and time-domain analysis information. It is an `AudioNode` that passes the audio stream unchanged from the input to the output, but allows you to take the generated data, process it, and create audio visualizations.

Documentation [AnalyserNode](https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode></div>


## Instance Members

<div class="signature field-var has-description" id="fftSize"><code><span class="field-name">fftSize</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#fftSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is an unsigned long value representing the size of the FFT (Fast Fourier Transform) to be used to determine the frequency domain.

<hr class="field-separator" />

<div class="signature field-var has-description" id="frequencyBinCount"><code><span class="field-name">frequencyBinCount</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#frequencyBinCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is an unsigned long value half that of the FFT size. This generally equates to the number of data values you will have to play with for the visualization.

<hr class="field-separator" />

<div class="signature field-var has-description" id="minDecibels"><code><span class="field-name">minDecibels</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#minDecibels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a double value representing the minimum power value in the scaling range for the FFT analysis data, for conversion to unsigned byte values — basically, this specifies the minimum value for the range of results when using `getByteFrequencyData()`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="maxDecibels"><code><span class="field-name">maxDecibels</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#maxDecibels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a double value representing the maximum power value in the scaling range for the FFT analysis data, for conversion to unsigned byte values — basically, this specifies the maximum value for the range of results when using `getByteFrequencyData()`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="smoothingTimeConstant"><code><span class="field-name">smoothingTimeConstant</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#smoothingTimeConstant"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a double value representing the averaging constant with the last analysis frame — basically, it makes the transition between values over time smoother.

<hr class="field-separator" />

<div class="signature field-method has-description" id="getFloatFrequencyData"><code><span class="field-name">getFloatFrequencyData</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Float32Array/" class="type-link">js.lib.Float32Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#getFloatFrequencyData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Copies the current frequency data into a `Float32Array` array passed into it.

| Name | Type |
|------|------|
| `array` | [js.lib.Float32Array](/api-docs/clay-web/js/lib/Float32Array/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getByteFrequencyData"><code><span class="field-name">getByteFrequencyData</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Uint8Array/" class="type-link">js.lib.Uint8Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#getByteFrequencyData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Copies the current frequency data into a `Uint8Array` (unsigned byte array) passed into it.

| Name | Type |
|------|------|
| `array` | [js.lib.Uint8Array](/api-docs/clay-web/js/lib/Uint8Array/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getFloatTimeDomainData"><code><span class="field-name">getFloatTimeDomainData</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Float32Array/" class="type-link">js.lib.Float32Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#getFloatTimeDomainData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Copies the current waveform, or time-domain, data into a `Float32Array` array passed into it.

| Name | Type |
|------|------|
| `array` | [js.lib.Float32Array](/api-docs/clay-web/js/lib/Float32Array/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getByteTimeDomainData"><code><span class="field-name">getByteTimeDomainData</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Uint8Array/" class="type-link">js.lib.Uint8Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#getByteTimeDomainData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Copies the current waveform, or time-domain, data into a `Uint8Array` (unsigned byte array) passed into it.

| Name | Type |
|------|------|
| `array` | [js.lib.Uint8Array](/api-docs/clay-web/js/lib/Uint8Array/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">context</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/BaseAudioContext/" class="type-link">BaseAudioContext</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/audio/AnalyserOptions/" class="type-link">AnalyserOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `context` | [BaseAudioContext](/api-docs/clay-web/js/html/audio/BaseAudioContext/) | |
| `options` | [Null](/api-docs/clay-web/Null/)<[AnalyserOptions](/api-docs/clay-web/js/html/audio/AnalyserOptions/)> | *(optional)* |

