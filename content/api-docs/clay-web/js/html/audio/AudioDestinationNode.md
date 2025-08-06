---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: AudioDestinationNode
target: Clay (Web)
permalink: api-docs/clay-web/js/html/audio/AudioDestinationNode/
---

# AudioDestinationNode

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">js.html.EventTarget</a> → <a href="/api-docs/clay-web/js/html/audio/AudioNode/">AudioNode</a> → <strong>js.html.audio.AudioDestinationNode</strong> (extern class)</div>

`AudioDestinationNode` has no output (as it is the output, no more `AudioNode` can be linked after it in the audio graph) and one input. The number of channels in the input must be between `0` and the `maxChannelCount` value or an exception is raised.

Documentation [AudioDestinationNode](https://developer.mozilla.org/en-US/docs/Web/API/AudioDestinationNode) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/AudioDestinationNode$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/AudioDestinationNode></div>


## Instance Members

<div class="signature field-var has-description" id="maxChannelCount"><code><span class="field-name">maxChannelCount</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#maxChannelCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is an `unsigned long` defining the maximum number of channels that the physical device can handle.

