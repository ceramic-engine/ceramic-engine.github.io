---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: AudioFilterWorklet
target: Unity
permalink: api-docs/unity/ceramic/AudioFilterWorklet/
---

# AudioFilterWorklet

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/AudioFilterWorklet.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.AudioFilterWorklet</strong> (Class) → <a href="/api-docs/unity/ceramic/HighPassFilterWorklet/">HighPassFilterWorklet</a>, <a href="/api-docs/unity/ceramic/LowPassFilterWorklet/">LowPassFilterWorklet</a></div>

The actual worklet class that will do the audio processing of a given `AudioFilter`.

AudioFilterWorklet is the base class for implementing custom audio effects and
processors. Each worklet runs in the audio processing pipeline and can modify
audio data in real-time.

Features:
- Thread-safe parameter access (atomic operations on native platforms)
- Automatic parameter management via @param metadata
- Support for boolean, int, and float parameters
- Per-bus audio processing

To create a custom filter:
1. Extend this class
2. Mark parameters with @param metadata
3. Override the process() method
4. Create an AudioFilter wrapper for public API

```haxe
class MyEchoWorklet extends AudioFilterWorklet {
    var delayBuffer:Array<Float> = [];
    var writePos:Int = 0;
    override function process(buffer:AudioFilterBuffer, samples:Int,
                             channels:Int, sampleRate:Float, time:Float):Void {
        // Implement echo effect here
    }
}
```

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/ceramic/AudioFilter/">AudioFilter</a>, <a href="/api-docs/unity/ceramic/AudioFilters/">AudioFilters</a>, <a href="/api-docs/unity/ceramic/AudioFilterBuffer/">AudioFilterBuffer</a></div>


## Instance Members

<div class="signature field-var has-description" id="filterId"><code><span class="field-name">filterId</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#filterId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The id of the audio filter this worklet is associated with

<hr class="field-separator" />

<div class="signature field-var no-description" id="bus"><code><span class="field-name">bus</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#bus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="active"><code><span class="field-name">active</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#active"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="numParams"><code><span class="field-name">numParams</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#numParams"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Return the number of parameters this filter has.
(automatically generated from fields marked with `@param`, no need to override it)
| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="process"><code><span class="field-name">process</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/AudioFilterBuffer/" class="type-link">AudioFilterBuffer</a><span class="operator">,</span> <span class="arg-name">samples</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">channels</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">sampleRate</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#process"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Process audio buffer in place. Override this method to implement custom filtering.
CAUTION: this may be called from a background thread


| Name | Type | Description |
|------|------|-------------|
| `buffer` | [AudioFilterBuffer](/api-docs/unity/ceramic/AudioFilterBuffer/) | The audio buffer to process (modify in place, planar layout: one channel after another, not interleaved)  |
| `samples` | [Int](/api-docs/unity/Int/) | Number of samples per channel  |
| `channels` | [Int](/api-docs/unity/Int/) | Number of audio channels (1 = mono, 2 = stereo)  |
| `sampleRate` | [Float](/api-docs/unity/Float/) | Sample rate in Hz  |
| `time` | [Float](/api-docs/unity/Float/) | Current playback time in seconds |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">filterId</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">bus</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new audio filter worklet.


| Name | Type | Description |
|------|------|-------------|
| `filterId` | [Int](/api-docs/unity/Int/) | Unique identifier for this filter instance  |
| `bus` | [Int](/api-docs/unity/Int/) | Audio bus ID where this filter will process audio |

## Private Members

<div class="signature field-var has-description" id="params"><code><span class="field-name">params</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#params"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal storage for filter parameters.
Populated automatically from fields marked with @param metadata.

<hr class="field-separator" />

<div class="signature field-method has-description" id="getBool"><code><span class="field-name">getBool</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#getBool"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get a boolean parameter at the given position (0-based).
Parameters are stored as floats where 0 = false, non-zero = true.


| Name | Type | Description |
|------|------|-------------|
| `index` | [Int](/api-docs/unity/Int/) | Parameter index (order matches |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | Boolean value of the parameter |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getInt"><code><span class="field-name">getInt</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getInt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get an int parameter at the given position (0-based).
The float value is truncated to an integer.


| Name | Type | Description |
|------|------|-------------|
| `index` | [Int](/api-docs/unity/Int/) | Parameter index (order matches |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/unity/Int/) | Integer value of the parameter |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getFloat"><code><span class="field-name">getFloat</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get a float parameter at the given position (0-based).


| Name | Type | Description |
|------|------|-------------|
| `index` | [Int](/api-docs/unity/Int/) | Parameter index (order matches |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/unity/Float/) | Float value of the parameter |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

