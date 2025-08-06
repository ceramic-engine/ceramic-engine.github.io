---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: IIRFilterNode
target: Clay (Web)
permalink: api-docs/clay-web/js/html/audio/IIRFilterNode/
---

# IIRFilterNode

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">js.html.EventTarget</a> → <a href="/api-docs/clay-web/js/html/audio/AudioNode/">AudioNode</a> → <strong>js.html.audio.IIRFilterNode</strong> (extern class)</div>

The `IIRFilterNode` interface of the Web Audio API is a `AudioNode` processor which implements a general infinite impulse response (IIR)  filter; this type of filter can be used to implement tone control devices and graphic equalizers as well. It lets the parameters of the filter response be specified, so that it can be tuned as needed.

Documentation [IIRFilterNode](https://developer.mozilla.org/en-US/docs/Web/API/IIRFilterNode) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/IIRFilterNode$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/IIRFilterNode></div>


## Instance Members

<div class="signature field-method no-description" id="getFrequencyResponse"><code><span class="field-name">getFrequencyResponse</span><span class="parenthesis">(</span><span class="arg-name">frequencyHz</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Float32Array/" class="type-link">js.lib.Float32Array</a><span class="operator">,</span> <span class="arg-name">magResponse</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Float32Array/" class="type-link">js.lib.Float32Array</a><span class="operator">,</span> <span class="arg-name">phaseResponse</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Float32Array/" class="type-link">js.lib.Float32Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#getFrequencyResponse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `frequencyHz` | [js.lib.Float32Array](/api-docs/clay-web/js/lib/Float32Array/) |
| `magResponse` | [js.lib.Float32Array](/api-docs/clay-web/js/lib/Float32Array/) |
| `phaseResponse` | [js.lib.Float32Array](/api-docs/clay-web/js/lib/Float32Array/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">context</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/BaseAudioContext/" class="type-link">BaseAudioContext</a><span class="operator">,</span> <span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/IIRFilterOptions/" class="type-link">IIRFilterOptions</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `context` | [BaseAudioContext](/api-docs/clay-web/js/html/audio/BaseAudioContext/) |
| `options` | [IIRFilterOptions](/api-docs/clay-web/js/html/audio/IIRFilterOptions/) |

