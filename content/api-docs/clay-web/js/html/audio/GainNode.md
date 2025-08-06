---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: GainNode
target: Clay (Web)
permalink: api-docs/clay-web/js/html/audio/GainNode/
---

# GainNode

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">js.html.EventTarget</a> → <a href="/api-docs/clay-web/js/html/audio/AudioNode/">AudioNode</a> → <strong>js.html.audio.GainNode</strong> (extern class)</div>

The `GainNode` interface represents a change in volume. It is an `AudioNode` audio-processing module that causes a given gain to be applied to the input data before its propagation to the output. A `GainNode` always has exactly one input and one output, both with the same number of channels.

Documentation [GainNode](https://developer.mozilla.org/en-US/docs/Web/API/GainNode) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/GainNode$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/GainNode></div>


## Instance Members

<div class="signature field-var has-description" id="gain"><code><span class="field-name">gain</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/AudioParam/" class="type-link">AudioParam</a></code><a class="header-anchor" href="#gain"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is an a-rate `AudioParam` representing the amount of gain to apply. You have to set `AudioParam.value` or use the methods of `AudioParam` to change the effect of gain.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">context</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/BaseAudioContext/" class="type-link">BaseAudioContext</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/audio/GainOptions/" class="type-link">GainOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `context` | [BaseAudioContext](/api-docs/clay-web/js/html/audio/BaseAudioContext/) | |
| `options` | [Null](/api-docs/clay-web/Null/)<[GainOptions](/api-docs/clay-web/js/html/audio/GainOptions/)> | *(optional)* |

