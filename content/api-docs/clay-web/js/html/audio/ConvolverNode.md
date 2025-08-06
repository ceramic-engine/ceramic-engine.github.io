---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: ConvolverNode
target: Clay (Web)
permalink: api-docs/clay-web/js/html/audio/ConvolverNode/
---

# ConvolverNode

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">js.html.EventTarget</a> → <a href="/api-docs/clay-web/js/html/audio/AudioNode/">AudioNode</a> → <strong>js.html.audio.ConvolverNode</strong> (extern class)</div>

The `ConvolverNode` interface is an `AudioNode` that performs a Linear Convolution on a given `AudioBuffer`, often used to achieve a reverb effect. A `ConvolverNode` always has exactly one input and one output.

Documentation [ConvolverNode](https://developer.mozilla.org/en-US/docs/Web/API/ConvolverNode) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/ConvolverNode$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/ConvolverNode></div>


## Instance Members

<div class="signature field-var has-description" id="buffer"><code><span class="field-name">buffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/AudioBuffer/" class="type-link">AudioBuffer</a></code><a class="header-anchor" href="#buffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A mono, stereo, or 4-channel `AudioBuffer` containing the (possibly multichannel) impulse response used by the `ConvolverNode` to create the reverb effect.

<hr class="field-separator" />

<div class="signature field-var has-description" id="normalize"><code><span class="field-name">normalize</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#normalize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A boolean that controls whether the impulse response from the buffer will be scaled by an equal-power normalization when the `buffer` attribute is set, or not.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">context</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/BaseAudioContext/" class="type-link">BaseAudioContext</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/audio/ConvolverOptions/" class="type-link">ConvolverOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `context` | [BaseAudioContext](/api-docs/clay-web/js/html/audio/BaseAudioContext/) | |
| `options` | [Null](/api-docs/clay-web/Null/)<[ConvolverOptions](/api-docs/clay-web/js/html/audio/ConvolverOptions/)> | *(optional)* |

