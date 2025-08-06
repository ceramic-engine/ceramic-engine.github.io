---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: AudioScheduledSourceNode
target: Clay (Web)
permalink: api-docs/clay-web/js/html/audio/AudioScheduledSourceNode/
---

# AudioScheduledSourceNode

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">js.html.EventTarget</a> → <a href="/api-docs/clay-web/js/html/audio/AudioNode/">AudioNode</a> → <strong>js.html.audio.AudioScheduledSourceNode</strong> (extern class) → <a href="/api-docs/clay-web/js/html/audio/AudioBufferSourceNode/">AudioBufferSourceNode</a>, <a href="/api-docs/clay-web/js/html/audio/ConstantSourceNode/">ConstantSourceNode</a>, <a href="/api-docs/clay-web/js/html/audio/OscillatorNode/">OscillatorNode</a></div>

The `AudioScheduledSourceNode` interface—part of the Web Audio API—is a parent interface for several types of audio source node interfaces which share the ability to be started and stopped, optionally at specified times. Specifically, this interface defines the `start()` and `stop()` methods, as well as the `onended` event handler.

Documentation [AudioScheduledSourceNode](https://developer.mozilla.org/en-US/docs/Web/API/AudioScheduledSourceNode) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/AudioScheduledSourceNode$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/AudioScheduledSourceNode></div>


## Instance Members

<div class="signature field-var has-description" id="onended"><code><span class="field-name">onended</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onended"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A function to be called when the `ended` event is fired, indicating that the node has finished playing.

<hr class="field-separator" />

<div class="signature field-method has-description" id="start"><code><span class="field-name">start</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">when</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#start"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `when` | [Float](/api-docs/clay-web/Float/) | `0.0` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="stop"><code><span class="field-name">stop</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">when</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#stop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `when` | [Float](/api-docs/clay-web/Float/) | `0.0` |

