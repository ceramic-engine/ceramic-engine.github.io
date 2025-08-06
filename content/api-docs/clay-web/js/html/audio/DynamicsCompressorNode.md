---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: DynamicsCompressorNode
target: Clay (Web)
permalink: api-docs/clay-web/js/html/audio/DynamicsCompressorNode/
---

# DynamicsCompressorNode

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">js.html.EventTarget</a> → <a href="/api-docs/clay-web/js/html/audio/AudioNode/">AudioNode</a> → <strong>js.html.audio.DynamicsCompressorNode</strong> (extern class)</div>

Inherits properties from its parent, `AudioNode`.

Documentation [DynamicsCompressorNode](https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode></div>


## Instance Members

<div class="signature field-var has-description" id="threshold"><code><span class="field-name">threshold</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/AudioParam/" class="type-link">AudioParam</a></code><a class="header-anchor" href="#threshold"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a k-rate `AudioParam` representing the decibel value above which the compression will start taking effect.

<hr class="field-separator" />

<div class="signature field-var has-description" id="knee"><code><span class="field-name">knee</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/AudioParam/" class="type-link">AudioParam</a></code><a class="header-anchor" href="#knee"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a k-rate `AudioParam` containing a decibel value representing the range above the threshold where the curve smoothly transitions to the compressed portion.

<hr class="field-separator" />

<div class="signature field-var has-description" id="ratio"><code><span class="field-name">ratio</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/AudioParam/" class="type-link">AudioParam</a></code><a class="header-anchor" href="#ratio"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a k-rate `AudioParam` representing the amount of change, in dB, needed in the input for a 1 dB change in the output.

<hr class="field-separator" />

<div class="signature field-var has-description" id="reduction"><code><span class="field-name">reduction</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#reduction"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `float` representing the amount of gain reduction currently applied by the compressor to the signal.

<hr class="field-separator" />

<div class="signature field-var has-description" id="attack"><code><span class="field-name">attack</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/AudioParam/" class="type-link">AudioParam</a></code><a class="header-anchor" href="#attack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a k-rate `AudioParam` representing the amount of time, in seconds, required to reduce the gain by 10 dB.

<hr class="field-separator" />

<div class="signature field-var has-description" id="release"><code><span class="field-name">release</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/AudioParam/" class="type-link">AudioParam</a></code><a class="header-anchor" href="#release"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a k-rate `AudioParam` representing the amount of time, in seconds, required to increase the gain by 10 dB.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">context</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/BaseAudioContext/" class="type-link">BaseAudioContext</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/audio/DynamicsCompressorOptions/" class="type-link">DynamicsCompressorOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `context` | [BaseAudioContext](/api-docs/clay-web/js/html/audio/BaseAudioContext/) | |
| `options` | [Null](/api-docs/clay-web/Null/)<[DynamicsCompressorOptions](/api-docs/clay-web/js/html/audio/DynamicsCompressorOptions/)> | *(optional)* |

