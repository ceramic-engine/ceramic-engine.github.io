---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: AudioNode
target: Clay (Web)
permalink: api-docs/clay-web/js/html/audio/AudioNode/
---

# AudioNode

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">js.html.EventTarget</a> → <strong>js.html.audio.AudioNode</strong> (extern class) → <a href="/api-docs/clay-web/js/html/audio/AnalyserNode/">AnalyserNode</a>, <a href="/api-docs/clay-web/js/html/audio/AudioDestinationNode/">AudioDestinationNode</a>, <a href="/api-docs/clay-web/js/html/audio/AudioScheduledSourceNode/">AudioScheduledSourceNode</a>, <a href="/api-docs/clay-web/js/html/audio/BiquadFilterNode/">BiquadFilterNode</a>, <a href="/api-docs/clay-web/js/html/audio/ChannelMergerNode/">ChannelMergerNode</a>, <a href="/api-docs/clay-web/js/html/audio/ChannelSplitterNode/">ChannelSplitterNode</a>, <a href="/api-docs/clay-web/js/html/audio/ConvolverNode/">ConvolverNode</a>, <a href="/api-docs/clay-web/js/html/audio/DelayNode/">DelayNode</a>, <a href="/api-docs/clay-web/js/html/audio/DynamicsCompressorNode/">DynamicsCompressorNode</a>, <a href="/api-docs/clay-web/js/html/audio/GainNode/">GainNode</a>, <a href="/api-docs/clay-web/js/html/audio/IIRFilterNode/">IIRFilterNode</a>, <a href="/api-docs/clay-web/js/html/audio/MediaElementAudioSourceNode/">MediaElementAudioSourceNode</a>, <a href="/api-docs/clay-web/js/html/audio/MediaStreamAudioDestinationNode/">MediaStreamAudioDestinationNode</a>, <a href="/api-docs/clay-web/js/html/audio/MediaStreamAudioSourceNode/">MediaStreamAudioSourceNode</a>, <a href="/api-docs/clay-web/js/html/audio/PannerNode/">PannerNode</a>, <a href="/api-docs/clay-web/js/html/audio/ScriptProcessorNode/">ScriptProcessorNode</a>, <a href="/api-docs/clay-web/js/html/audio/StereoPannerNode/">StereoPannerNode</a>, <a href="/api-docs/clay-web/js/html/audio/WaveShaperNode/">WaveShaperNode</a></div>

The `AudioNode` interface is a generic interface for representing an audio processing module. Examples include:

Documentation [AudioNode](https://developer.mozilla.org/en-US/docs/Web/API/AudioNode) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/AudioNode$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/AudioNode></div>


## Instance Members

<div class="signature field-var has-description" id="context"><code><span class="field-name">context</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/BaseAudioContext/" class="type-link">BaseAudioContext</a></code><a class="header-anchor" href="#context"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the associated `BaseAudioContext`, that is the object representing the processing graph the node is participating in.

<hr class="field-separator" />

<div class="signature field-var has-description" id="numberOfInputs"><code><span class="field-name">numberOfInputs</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#numberOfInputs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the number of inputs feeding the node. Source nodes are defined as nodes having a `numberOfInputs` property with a value of `0`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="numberOfOutputs"><code><span class="field-name">numberOfOutputs</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#numberOfOutputs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the number of outputs coming out of the node. Destination nodes — like `AudioDestinationNode` — have a value of `0` for this attribute.

<hr class="field-separator" />

<div class="signature field-var has-description" id="channelCount"><code><span class="field-name">channelCount</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#channelCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Represents an integer used to determine how many channels are used when up-mixing and down-mixing connections to any inputs to the node. Its usage and precise definition depend on the value of `AudioNode.channelCountMode`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="channelCountMode"><code><span class="field-name">channelCountMode</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/ChannelCountMode/" class="type-link">ChannelCountMode</a></code><a class="header-anchor" href="#channelCountMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Represents an enumerated value describing the way channels must be matched between the node's inputs and outputs.

<hr class="field-separator" />

<div class="signature field-var has-description" id="channelInterpretation"><code><span class="field-name">channelInterpretation</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/ChannelInterpretation/" class="type-link">ChannelInterpretation</a></code><a class="header-anchor" href="#channelInterpretation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Represents an enumerated value describing the meaning of the channels. This interpretation will define how audio up-mixing and down-mixing will happen.

The possible values are `"speakers"` or `"discrete"`.

<hr class="field-separator" />

<div class="signature field-method has-description" id="connect"><code><span class="field-name">connect</span><span class="parenthesis">(</span><span class="arg-name">destination</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/AudioParam/" class="type-link">AudioParam</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#connect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Allows us to connect the output of this node to be input into another node, either as audio data or as the value of an `AudioParam`.

| Name | Type | Default |
|------|------|---------|
| `destination` | [AudioParam](/api-docs/clay-web/js/html/audio/AudioParam/) | |
| `output` | [Int](/api-docs/clay-web/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="disconnect"><code><span class="field-name">disconnect</span><span class="parenthesis">(</span><span class="arg-name">destination</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/AudioParam/" class="type-link">AudioParam</a><span class="operator">,</span> <span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#disconnect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Allows us to disconnect the current node from another one it is already connected to.

| Name | Type |
|------|------|
| `destination` | [AudioParam](/api-docs/clay-web/js/html/audio/AudioParam/) |
| `output` | [Int](/api-docs/clay-web/Int/) |

