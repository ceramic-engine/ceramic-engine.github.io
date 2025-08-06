---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: BiquadFilterNode
target: Clay (Web)
permalink: api-docs/clay-web/js/html/audio/BiquadFilterNode/
---

# BiquadFilterNode

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">js.html.EventTarget</a> → <a href="/api-docs/clay-web/js/html/audio/AudioNode/">AudioNode</a> → <strong>js.html.audio.BiquadFilterNode</strong> (extern class)</div>

The `BiquadFilterNode` interface represents a simple low-order filter, and is created using the `AudioContext.createBiquadFilter()` method. It is an `AudioNode` that can represent different kinds of filters, tone control devices, and graphic equalizers.

Documentation [BiquadFilterNode](https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode></div>


## Instance Members

<div class="signature field-var has-description" id="type"><code><span class="field-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/BiquadFilterType/" class="type-link">BiquadFilterType</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a string value defining the kind of filtering algorithm the node is implementing.<br>

<table class="standard-table">
The meaning of the different parameters depending of the type of the filter (detune has the same meaning regardless, so isn't listed below)

<tr>
<code>type</code>
Description
<code>frequency</code>
<code>Q</code>
<code>gain</code>
</tr>

<tr>
<code>lowpass</code>
<td>Standard second-order resonant lowpass filter with 12dB/octave rolloff. Frequencies below the cutoff pass through; frequencies above it are attenuated.</td>
<td>The cutoff frequency.</td>
<td>Indicates how peaked the frequency is around the cutoff. The greater the value is, the greater is the peak.</td>
<td>Not used</td>
</tr>
<tr>
<code>highpass</code>
<td>Standard second-order resonant highpass filter with 12dB/octave rolloff. Frequencies below the cutoff are attenuated; frequencies above it pass through.</td>
<td>The cutoff frequency.</td>
<td>Indicates how peaked the frequency is around the cutoff. The greater the value, the greater the peak.</td>
<td>Not used</td>
</tr>
<tr>
<code>bandpass</code>
<td>Standard second-order bandpass filter. Frequencies outside the given range of frequencies are attenuated; the frequencies inside it pass through.</td>
<td>The center of the range of frequencies.</td>
<td>Controls the width of the frequency band. The greater the <code>Q</code> value, the smaller the frequency band.</td>
<td>Not used</td>
</tr>
<tr>
<code>lowshelf</code>
<td>Standard second-order lowshelf filter. Frequencies lower than the frequency get a boost, or an attenuation; frequencies over it are unchanged.</td>
<td>The upper limit of the frequencies getting a boost or an attenuation.</td>
<td>Not used</td>
<td>The boost, in dB, to be applied; if negative, it will be an attenuation.</td>
</tr>
<tr>
<code>highshelf</code>
<td>Standard second-order highshelf filter. Frequencies higher than the frequency get a boost or an attenuation; frequencies lower than it are unchanged.</td>
<td>The lower limit of the frequencies getting a boost or an attenuation.</td>
<td>Not used</td>
<td>The boost, in dB, to be applied; if negative, it will be an attenuation.</td>
</tr>
<tr>
<code>peaking</code>
<td>Frequencies inside the range get a boost or an attenuation; frequencies outside it are unchanged.</td>
<td>The middle of the frequency range getting a boost or an attenuation.</td>
<td>Controls the width of the frequency band. The greater the <code>Q</code> value, the smaller the frequency band.</td>
<td>The boost, in dB, to be applied; if negative, it will be an attenuation.</td>
</tr>
<tr>
<code>notch</code>
<td>Standard notch filter, also called a band-stop or band-rejection filter. It is the opposite of a bandpass filter: frequencies outside the give range of frequencies pass through; frequencies inside it are attenuated.</td>
<td>The center of the range of frequencies.</td>
<td>Controls the width of the frequency band. The greater the <code>Q</code> value, the smaller the frequency band.</td>
<td>Not used</td>
</tr>
<tr>
<code>allpass</code>
<td>Standard second-order allpass filter. It lets all frequencies through, but changes the phase-relationship between the various frequencies.</td>
<td>The frequency with the maximal group delay, that is, the frequency where the center of the phase transition occurs.</td>
<td>Controls how sharp the transition is at the medium frequency. The larger this parameter is, the sharper and larger the transition will be.</td>
<td>Not used</td>
</tr>

</table>

<hr class="field-separator" />

<div class="signature field-var has-description" id="frequency"><code><span class="field-name">frequency</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/AudioParam/" class="type-link">AudioParam</a></code><a class="header-anchor" href="#frequency"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is an a-rate `AudioParam`, a double representing a frequency in the current filtering algorithm measured in hertz (Hz).

<hr class="field-separator" />

<div class="signature field-var has-description" id="detune"><code><span class="field-name">detune</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/AudioParam/" class="type-link">AudioParam</a></code><a class="header-anchor" href="#detune"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is an a-rate `AudioParam` representing detuning of the frequency in cents.

<hr class="field-separator" />

<div class="signature field-var has-description" id="Q"><code><span class="field-name">Q</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/AudioParam/" class="type-link">AudioParam</a></code><a class="header-anchor" href="#Q"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is an a-rate `AudioParam`, a double representing a Q factor, or quality factor.

<hr class="field-separator" />

<div class="signature field-var has-description" id="gain"><code><span class="field-name">gain</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/AudioParam/" class="type-link">AudioParam</a></code><a class="header-anchor" href="#gain"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is an a-rate `AudioParam`, a double representing the gain used in the current filtering algorithm.

<hr class="field-separator" />

<div class="signature field-method has-description" id="getFrequencyResponse"><code><span class="field-name">getFrequencyResponse</span><span class="parenthesis">(</span><span class="arg-name">frequencyHz</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Float32Array/" class="type-link">js.lib.Float32Array</a><span class="operator">,</span> <span class="arg-name">magResponse</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Float32Array/" class="type-link">js.lib.Float32Array</a><span class="operator">,</span> <span class="arg-name">phaseResponse</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Float32Array/" class="type-link">js.lib.Float32Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#getFrequencyResponse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

From the current filter parameter settings this method calculates the frequency response for frequencies specified in the provided array of frequencies.

| Name | Type |
|------|------|
| `frequencyHz` | [js.lib.Float32Array](/api-docs/clay-web/js/lib/Float32Array/) |
| `magResponse` | [js.lib.Float32Array](/api-docs/clay-web/js/lib/Float32Array/) |
| `phaseResponse` | [js.lib.Float32Array](/api-docs/clay-web/js/lib/Float32Array/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">context</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/BaseAudioContext/" class="type-link">BaseAudioContext</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/audio/BiquadFilterOptions/" class="type-link">BiquadFilterOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `context` | [BaseAudioContext](/api-docs/clay-web/js/html/audio/BaseAudioContext/) | |
| `options` | [Null](/api-docs/clay-web/Null/)<[BiquadFilterOptions](/api-docs/clay-web/js/html/audio/BiquadFilterOptions/)> | *(optional)* |

