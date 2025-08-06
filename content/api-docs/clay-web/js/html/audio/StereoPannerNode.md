---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: StereoPannerNode
target: Clay (Web)
permalink: api-docs/clay-web/js/html/audio/StereoPannerNode/
---

# StereoPannerNode

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">js.html.EventTarget</a> → <a href="/api-docs/clay-web/js/html/audio/AudioNode/">AudioNode</a> → <strong>js.html.audio.StereoPannerNode</strong> (extern class)</div>

The `pan` property takes a unitless value between `-1` (full left pan) and `1` (full right pan). This interface was introduced as a much simpler way to apply a simple panning effect than having to use a full `PannerNode`.

Documentation [StereoPannerNode](https://developer.mozilla.org/en-US/docs/Web/API/StereoPannerNode) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/StereoPannerNode$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/StereoPannerNode></div>


## Instance Members

<div class="signature field-var has-description" id="pan"><code><span class="field-name">pan</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/AudioParam/" class="type-link">AudioParam</a></code><a class="header-anchor" href="#pan"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is an a-rate `AudioParam` representing the amount of panning to apply.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">context</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/BaseAudioContext/" class="type-link">BaseAudioContext</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/audio/StereoPannerOptions/" class="type-link">StereoPannerOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `context` | [BaseAudioContext](/api-docs/clay-web/js/html/audio/BaseAudioContext/) | |
| `options` | [Null](/api-docs/clay-web/Null/)<[StereoPannerOptions](/api-docs/clay-web/js/html/audio/StereoPannerOptions/)> | *(optional)* |

