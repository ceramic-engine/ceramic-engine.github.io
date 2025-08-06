---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: AudioParam
target: Clay (Web)
permalink: api-docs/clay-web/js/html/audio/AudioParam/
---

# AudioParam

<div class="type-hierarchy"><strong>js.html.audio.AudioParam</strong> (extern class)</div>

The Web Audio API's `AudioParam` interface represents an audio-related parameter, usually a parameter of an `AudioNode` (such as `GainNode.gain`).

Documentation [AudioParam](https://developer.mozilla.org/en-US/docs/Web/API/AudioParam) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/AudioParam$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/AudioParam></div>


## Instance Members

<div class="signature field-var has-description" id="value"><code><span class="field-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#value"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Represents the parameter's current volume as a floating point value; initially set to the value of `AudioParam.defaultValue`. Though it can be set, any modifications happening while there are automation events scheduled — that is events scheduled using the methods of the `AudioParam` — are ignored, without raising any exception.

<hr class="field-separator" />

<div class="signature field-var has-description" id="defaultValue"><code><span class="field-name">defaultValue</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#defaultValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Represents the initial volume of the attribute as defined by the specific `AudioNode` creating the `AudioParam`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="minValue"><code><span class="field-name">minValue</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#minValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Represents the minimum possible value for the parameter's nominal (effective) range. 

<hr class="field-separator" />

<div class="signature field-var has-description" id="maxValue"><code><span class="field-name">maxValue</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#maxValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Represents the maximum possible value for the parameter's nominal (effective) range. 

<hr class="field-separator" />

<div class="signature field-method has-description" id="setValueAtTime"><code><span class="field-name">setValueAtTime</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">startTime</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">AudioParam</a></code><a class="header-anchor" href="#setValueAtTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Schedules an instant change to the value of the `AudioParam` at a precise time, as measured against `AudioContext.currentTime`. The new value is given by the `value` parameter.

| Name | Type |
|------|------|
| `value` | [Float](/api-docs/clay-web/Float/) |
| `startTime` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [AudioParam](/api-docs/clay-web/js/html/audio/AudioParam/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="linearRampToValueAtTime"><code><span class="field-name">linearRampToValueAtTime</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">endTime</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">AudioParam</a></code><a class="header-anchor" href="#linearRampToValueAtTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Schedules a gradual linear change in the value of the `AudioParam`. The change starts at the time specified for the previous event, follows a linear ramp to the new value given in the `value` parameter, and reaches the new value at the time given in the `endTime` parameter.

| Name | Type |
|------|------|
| `value` | [Float](/api-docs/clay-web/Float/) |
| `endTime` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [AudioParam](/api-docs/clay-web/js/html/audio/AudioParam/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="exponentialRampToValueAtTime"><code><span class="field-name">exponentialRampToValueAtTime</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">endTime</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">AudioParam</a></code><a class="header-anchor" href="#exponentialRampToValueAtTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Schedules a gradual exponential change in the value of the `AudioParam`. The change starts at the time specified for the previous event, follows an exponential ramp to the new value given in the `value` parameter, and reaches the new value at the time given in the `endTime` parameter.

| Name | Type |
|------|------|
| `value` | [Float](/api-docs/clay-web/Float/) |
| `endTime` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [AudioParam](/api-docs/clay-web/js/html/audio/AudioParam/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setTargetAtTime"><code><span class="field-name">setTargetAtTime</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">startTime</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">timeConstant</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">AudioParam</a></code><a class="header-anchor" href="#setTargetAtTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Schedules the start of a change to the value of the `AudioParam`. The change starts at the time specified in `startTime` and exponentially moves towards the value given by the `target` parameter. The exponential decay rate is defined by the `timeConstant` parameter, which is a time measured in seconds.

| Name | Type |
|------|------|
| `target` | [Float](/api-docs/clay-web/Float/) |
| `startTime` | [Float](/api-docs/clay-web/Float/) |
| `timeConstant` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [AudioParam](/api-docs/clay-web/js/html/audio/AudioParam/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setValueCurveAtTime"><code><span class="field-name">setValueCurveAtTime</span><span class="parenthesis">(</span><span class="arg-name">values</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">startTime</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">duration</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">AudioParam</a></code><a class="header-anchor" href="#setValueCurveAtTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Schedules the values of the `AudioParam` to follow a set of values, defined by an array of floating-point numbers scaled to fit into the given interval, starting at a given start time and spanning a given duration of time.

| Name | Type |
|------|------|
| `values` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> |
| `startTime` | [Float](/api-docs/clay-web/Float/) |
| `duration` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [AudioParam](/api-docs/clay-web/js/html/audio/AudioParam/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="cancelScheduledValues"><code><span class="field-name">cancelScheduledValues</span><span class="parenthesis">(</span><span class="arg-name">startTime</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">AudioParam</a></code><a class="header-anchor" href="#cancelScheduledValues"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cancels all scheduled future changes to the `AudioParam`.

| Name | Type |
|------|------|
| `startTime` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [AudioParam](/api-docs/clay-web/js/html/audio/AudioParam/) |

