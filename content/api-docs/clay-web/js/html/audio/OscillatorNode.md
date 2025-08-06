---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: OscillatorNode
target: Clay (Web)
permalink: api-docs/clay-web/js/html/audio/OscillatorNode/
---

# OscillatorNode

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">js.html.EventTarget</a> → <a href="/api-docs/clay-web/js/html/audio/AudioNode/">AudioNode</a> → <a href="/api-docs/clay-web/js/html/audio/AudioScheduledSourceNode/">AudioScheduledSourceNode</a> → <strong>js.html.audio.OscillatorNode</strong> (extern class)</div>

The `OscillatorNode` interface represents a periodic waveform, such as a sine wave. It is an `AudioScheduledSourceNode` audio-processing module that causes a specified frequency of a given wave to be created—in effect, a constant tone.

Documentation [OscillatorNode](https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode></div>


## Instance Members

<div class="signature field-var has-description" id="type"><code><span class="field-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/OscillatorType/" class="type-link">OscillatorType</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A string which specifies the shape of waveform to play; this can be one of a number of standard values, or `custom` to use a `PeriodicWave` to describe a custom waveform. Different waves will produce different tones. Standard values are `"sine"`, `"square"`, `"sawtooth"`, `"triangle"` and `"custom"`. The default is `"sine"`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="frequency"><code><span class="field-name">frequency</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/AudioParam/" class="type-link">AudioParam</a></code><a class="header-anchor" href="#frequency"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An a-rate `AudioParam` representing the frequency of oscillation in hertz (though the AudioParam` returned is read-only, the value it represents is not). The default value is 440 Hz (a standard middle-A note).

<hr class="field-separator" />

<div class="signature field-var has-description" id="detune"><code><span class="field-name">detune</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/AudioParam/" class="type-link">AudioParam</a></code><a class="header-anchor" href="#detune"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An a-rate `AudioParam` representing detuning of oscillation in cents (though the AudioParam` returned is read-only, the value it represents is not). The default value is 0.

<hr class="field-separator" />

<div class="signature field-method has-description" id="setPeriodicWave"><code><span class="field-name">setPeriodicWave</span><span class="parenthesis">(</span><span class="arg-name">periodicWave</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/PeriodicWave/" class="type-link">PeriodicWave</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setPeriodicWave"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a `PeriodicWave` which describes a periodic waveform to be used instead of one of the standard waveforms; calling this sets the `type` to `custom`. This replaces the now-obsolete `OscillatorNode.setWaveTable()` method.

| Name | Type |
|------|------|
| `periodicWave` | [PeriodicWave](/api-docs/clay-web/js/html/audio/PeriodicWave/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">context</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/BaseAudioContext/" class="type-link">BaseAudioContext</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/audio/OscillatorOptions/" class="type-link">OscillatorOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `context` | [BaseAudioContext](/api-docs/clay-web/js/html/audio/BaseAudioContext/) | |
| `options` | [Null](/api-docs/clay-web/Null/)<[OscillatorOptions](/api-docs/clay-web/js/html/audio/OscillatorOptions/)> | *(optional)* |

