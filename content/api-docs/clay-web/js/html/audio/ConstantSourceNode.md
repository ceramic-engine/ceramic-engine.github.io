---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: ConstantSourceNode
target: Clay (Web)
permalink: api-docs/clay-web/js/html/audio/ConstantSourceNode/
---

# ConstantSourceNode

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">js.html.EventTarget</a> → <a href="/api-docs/clay-web/js/html/audio/AudioNode/">AudioNode</a> → <a href="/api-docs/clay-web/js/html/audio/AudioScheduledSourceNode/">AudioScheduledSourceNode</a> → <strong>js.html.audio.ConstantSourceNode</strong> (extern class)</div>

The `ConstantSourceNode` interface—part of the Web Audio API—represents an audio source (based upon `AudioScheduledSourceNode`) whose output is single unchanging value. This makes it useful for cases in which you need a constant value coming in from an audio source. In addition, it can be used like a constructible `AudioParam` by automating the value of its `offset` or by connecting another node to it; see Controlling multiple parameters with ConstantSourceNode.

Documentation [ConstantSourceNode](https://developer.mozilla.org/en-US/docs/Web/API/ConstantSourceNode) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/ConstantSourceNode$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/ConstantSourceNode></div>


## Instance Members

<div class="signature field-var has-description" id="offset"><code><span class="field-name">offset</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/AudioParam/" class="type-link">AudioParam</a></code><a class="header-anchor" href="#offset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An `AudioParam` which specifies the value that this source continuously outputs. The default value is 1.0.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">context</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/BaseAudioContext/" class="type-link">BaseAudioContext</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/audio/ConstantSourceOptions/" class="type-link">ConstantSourceOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `context` | [BaseAudioContext](/api-docs/clay-web/js/html/audio/BaseAudioContext/) | |
| `options` | [Null](/api-docs/clay-web/Null/)<[ConstantSourceOptions](/api-docs/clay-web/js/html/audio/ConstantSourceOptions/)> | *(optional)* |

