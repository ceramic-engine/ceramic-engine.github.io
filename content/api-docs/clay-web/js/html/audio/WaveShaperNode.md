---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: WaveShaperNode
target: Clay (Web)
permalink: api-docs/clay-web/js/html/audio/WaveShaperNode/
---

# WaveShaperNode

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">js.html.EventTarget</a> → <a href="/api-docs/clay-web/js/html/audio/AudioNode/">AudioNode</a> → <strong>js.html.audio.WaveShaperNode</strong> (extern class)</div>

A `WaveShaperNode` always has exactly one input and one output.

Documentation [WaveShaperNode](https://developer.mozilla.org/en-US/docs/Web/API/WaveShaperNode) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/WaveShaperNode$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/WaveShaperNode></div>


## Instance Members

<div class="signature field-var has-description" id="curve"><code><span class="field-name">curve</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Float32Array/" class="type-link">js.lib.Float32Array</a></code><a class="header-anchor" href="#curve"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `Float32Array` of numbers describing the distortion to apply.

<hr class="field-separator" />

<div class="signature field-var has-description" id="oversample"><code><span class="field-name">oversample</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/OverSampleType/" class="type-link">OverSampleType</a></code><a class="header-anchor" href="#oversample"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is an enumerated value indicating if oversampling must be used. Oversampling is a technique for creating more samples (up-sampling) before applying the distortion effect to the audio signal.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">context</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/BaseAudioContext/" class="type-link">BaseAudioContext</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/audio/WaveShaperOptions/" class="type-link">WaveShaperOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `context` | [BaseAudioContext](/api-docs/clay-web/js/html/audio/BaseAudioContext/) | |
| `options` | [Null](/api-docs/clay-web/Null/)<[WaveShaperOptions](/api-docs/clay-web/js/html/audio/WaveShaperOptions/)> | *(optional)* |

