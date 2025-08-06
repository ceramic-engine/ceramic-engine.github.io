---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: DelayNode
target: Clay (Web)
permalink: api-docs/clay-web/js/html/audio/DelayNode/
---

# DelayNode

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">js.html.EventTarget</a> → <a href="/api-docs/clay-web/js/html/audio/AudioNode/">AudioNode</a> → <strong>js.html.audio.DelayNode</strong> (extern class)</div>

The `DelayNode` interface represents a delay-line; an `AudioNode` audio-processing module that causes a delay between the arrival of an input data and its propagation to the output.

Documentation [DelayNode](https://developer.mozilla.org/en-US/docs/Web/API/DelayNode) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/DelayNode$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/DelayNode></div>


## Instance Members

<div class="signature field-var has-description" id="delayTime"><code><span class="field-name">delayTime</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/AudioParam/" class="type-link">AudioParam</a></code><a class="header-anchor" href="#delayTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is an a-rate `AudioParam` representing the amount of delay to apply.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">context</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/BaseAudioContext/" class="type-link">BaseAudioContext</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/audio/DelayOptions/" class="type-link">DelayOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `context` | [BaseAudioContext](/api-docs/clay-web/js/html/audio/BaseAudioContext/) | |
| `options` | [Null](/api-docs/clay-web/Null/)<[DelayOptions](/api-docs/clay-web/js/html/audio/DelayOptions/)> | *(optional)* |

