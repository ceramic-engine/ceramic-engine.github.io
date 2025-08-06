---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: PannerNode
target: Clay (Web)
permalink: api-docs/clay-web/js/html/audio/PannerNode/
---

# PannerNode

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">js.html.EventTarget</a> → <a href="/api-docs/clay-web/js/html/audio/AudioNode/">AudioNode</a> → <strong>js.html.audio.PannerNode</strong> (extern class)</div>

A `PannerNode` always has exactly one input and one output: the input can be mono or stereo but the output is always stereo (2 channels); you can't have panning effects without at least two audio channels!

Documentation [PannerNode](https://developer.mozilla.org/en-US/docs/Web/API/PannerNode) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/PannerNode$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/PannerNode></div>


## Instance Members

<div class="signature field-var has-description" id="panningModel"><code><span class="field-name">panningModel</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/PanningModelType/" class="type-link">PanningModelType</a></code><a class="header-anchor" href="#panningModel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An enumerated value determining which spatialisation algorithm to use to position the audio in 3D space.

<hr class="field-separator" />

<div class="signature field-var has-description" id="positionX"><code><span class="field-name">positionX</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/AudioParam/" class="type-link">AudioParam</a></code><a class="header-anchor" href="#positionX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Represents the horizontal position of the audio in a right-hand cartesian coordinate sytem. The default is 0. While this `AudioParam` cannot be directly changed, its value can be altered using its `AudioParam.value` property. The default is value is 0.

<hr class="field-separator" />

<div class="signature field-var has-description" id="positionY"><code><span class="field-name">positionY</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/AudioParam/" class="type-link">AudioParam</a></code><a class="header-anchor" href="#positionY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Represents the vertical position of the audio in a right-hand cartesian coordinate sytem. The default is 0. While this `AudioParam` cannot be directly changed, its value can be altered using its `AudioParam.value` property. The default is value is 0.

<hr class="field-separator" />

<div class="signature field-var has-description" id="positionZ"><code><span class="field-name">positionZ</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/AudioParam/" class="type-link">AudioParam</a></code><a class="header-anchor" href="#positionZ"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Represents the longitudinal (back and forth) position of the audio in a right-hand cartesian coordinate sytem. The default is 0. While this `AudioParam` cannot be directly changed, its value can be altered using its `AudioParam.value` property. The default is value is 0.

<hr class="field-separator" />

<div class="signature field-var has-description" id="orientationX"><code><span class="field-name">orientationX</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/AudioParam/" class="type-link">AudioParam</a></code><a class="header-anchor" href="#orientationX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Represents the horizontal position of the audio source's vector in a right-hand cartesian coordinate sytem. While this `AudioParam` cannot be directly changed, its value can be altered using its `AudioParam.value` property. The default is value is 1.

<hr class="field-separator" />

<div class="signature field-var has-description" id="orientationY"><code><span class="field-name">orientationY</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/AudioParam/" class="type-link">AudioParam</a></code><a class="header-anchor" href="#orientationY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Represents the vertical position of the audio source's vector in a right-hand cartesian coordinate sytem. The default is 0. While this `AudioParam` cannot be directly changed, its value can be altered using its `AudioParam.value` property. The default is value is 0.

<hr class="field-separator" />

<div class="signature field-var has-description" id="orientationZ"><code><span class="field-name">orientationZ</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/AudioParam/" class="type-link">AudioParam</a></code><a class="header-anchor" href="#orientationZ"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Represents the longitudinal (back and forth) position of the audio source's vector in a right-hand cartesian coordinate sytem. The default is 0. While this `AudioParam` cannot be directly changed, its value can be altered using its `AudioParam.value` property. The default is value is 0.

<hr class="field-separator" />

<div class="signature field-var has-description" id="distanceModel"><code><span class="field-name">distanceModel</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/DistanceModelType/" class="type-link">DistanceModelType</a></code><a class="header-anchor" href="#distanceModel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An enumerated value determining which algorithm to use to reduce the volume of the audio source as it moves away from the listener.

<hr class="field-separator" />

<div class="signature field-var has-description" id="refDistance"><code><span class="field-name">refDistance</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#refDistance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A double value representing the reference distance for reducing volume as the audio source moves further from the listener.

<hr class="field-separator" />

<div class="signature field-var has-description" id="maxDistance"><code><span class="field-name">maxDistance</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#maxDistance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A double value representing the maximum distance between the audio source and the listener, after which the volume is not reduced any further.

<hr class="field-separator" />

<div class="signature field-var has-description" id="rolloffFactor"><code><span class="field-name">rolloffFactor</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#rolloffFactor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A double value describing how quickly the volume is reduced as the source moves away from the listener. This value is used by all distance models.

<hr class="field-separator" />

<div class="signature field-var has-description" id="coneInnerAngle"><code><span class="field-name">coneInnerAngle</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#coneInnerAngle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a double value describing the angle, in degrees, of a cone inside of which there will be no volume reduction.

<hr class="field-separator" />

<div class="signature field-var has-description" id="coneOuterAngle"><code><span class="field-name">coneOuterAngle</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#coneOuterAngle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A double value describing the angle, in degrees, of a cone outside of which the volume will be reduced by a constant value, defined by the `coneOuterGain` attribute.

<hr class="field-separator" />

<div class="signature field-var has-description" id="coneOuterGain"><code><span class="field-name">coneOuterGain</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#coneOuterGain"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A double value describing the amount of volume reduction outside the cone defined by the `coneOuterAngle` attribute. Its default value is `0`, meaning that no sound can be heard.

<hr class="field-separator" />

<div class="signature field-method has-description" id="setPosition"><code><span class="field-name">setPosition</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Defines the position of the audio source relative to the listener (represented by an `AudioListener` object stored in the `AudioContext.listener` attribute.)

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |
| `z` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setOrientation"><code><span class="field-name">setOrientation</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setOrientation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Defines the direction the audio source is playing in.

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |
| `z` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">context</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/BaseAudioContext/" class="type-link">BaseAudioContext</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/audio/PannerOptions/" class="type-link">PannerOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `context` | [BaseAudioContext](/api-docs/clay-web/js/html/audio/BaseAudioContext/) | |
| `options` | [Null](/api-docs/clay-web/Null/)<[PannerOptions](/api-docs/clay-web/js/html/audio/PannerOptions/)> | *(optional)* |

