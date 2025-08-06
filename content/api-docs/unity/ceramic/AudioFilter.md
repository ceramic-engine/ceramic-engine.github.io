---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: AudioFilter
target: Unity
permalink: api-docs/unity/ceramic/AudioFilter/
---

# AudioFilter

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/AudioFilter.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">Entity</a> → <strong>ceramic.AudioFilter</strong> (Class) → <a href="/api-docs/unity/ceramic/HighPassFilter/">HighPassFilter</a>, <a href="/api-docs/unity/ceramic/LowPassFilter/">LowPassFilter</a></div>

Base class for audio filters that can process audio buffers in real-time.

AudioFilter is an abstract class for creating custom audio effects that can be
attached to audio buses for real-time processing. Filters process audio data
as it flows through the bus, allowing effects like reverb, distortion, EQ, etc.

To create a custom filter:
1. Extend this class
2. Mark parameters with `@param` metadata
3. Implement the `workletClass()` method
4. Create a corresponding AudioFilterWorklet class

The macro system automatically generates getters/setters for `@param` fields
and handles thread-safe parameter updates.

```haxe
class MyFilter extends AudioFilter {
    override function workletClass():Class<AudioFilterWorklet> {
        return MyFilterWorklet;
    }
}

// Use the filter
var filter = new MyFilter();
app.audio.addFilter(filter, 0); // Add to master bus
```

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/ceramic/AudioFilterWorklet/">AudioFilterWorklet</a>, <a href="/api-docs/unity/ceramic/LowPassFilter/">LowPassFilter</a>, <a href="/api-docs/unity/ceramic/HighPassFilter/">HighPassFilter</a></div>


## Instance Members

<div class="signature field-var has-description" id="filterId"><code><span class="field-name">filterId</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#filterId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The unique identifier for this filter instance.
Automatically assigned on creation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="bus"><code><span class="field-name">bus</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#bus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The bus index this filter is currently attached to.
-1 means the filter is not attached to any bus.
Read-only - use Audio.addFilter/removeFilter to change.

<hr class="field-separator" />

<div class="signature field-var has-description" id="active"><code><span class="field-name">active</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#active"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this filter is currently processing audio.
Set to false to bypass the filter while keeping it attached.

<hr class="field-separator" />

<div class="signature field-method no-description" id="acquireParams"><code><span class="field-name">acquireParams</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#acquireParams"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="releaseParams"><code><span class="field-name">releaseParams</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#releaseParams"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="workletClass"><code><span class="field-name">workletClass</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Class/" class="type-link">Class</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/AudioFilterWorklet/" class="type-link">AudioFilterWorklet</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#workletClass"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Return the AudioFilterWorklet class that implements the actual audio processing.
This method must be overridden by subclasses to specify their worklet implementation.
The worklet class handles the real-time audio processing on the audio thread.

| Returns | Description |
|---------|-------------|
| [Class](/api-docs/unity/Class/)<[AudioFilterWorklet](/api-docs/unity/ceramic/AudioFilterWorklet/)> | The worklet class to instantiate for this filter |

<hr class="field-separator" />

<div class="signature field-method has-description" id="numParams"><code><span class="field-name">numParams</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#numParams"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Return the number of parameters this filter has.
This is automatically generated by the macro system based on `@param` fields.
Subclasses should not override this method.

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/unity/Int/) | Number of parameters |

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description" id="paramsLock"><code><span class="field-name">paramsLock</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/SpinLock/" class="type-link">SpinLock</a></code><a class="header-anchor" href="#paramsLock"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="paramsAcquireLock"><code><span class="field-name">paramsAcquireLock</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/SpinLock/" class="type-link">SpinLock</a></code><a class="header-anchor" href="#paramsAcquireLock"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="params"><code><span class="field-name">params</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#params"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="paramsChanged"><code><span class="field-name">paramsChanged</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#paramsChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="paramsAcquired"><code><span class="field-name">paramsAcquired</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#paramsAcquired"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitReady"><code><span class="field-name">emitReady</span><span class="parenthesis">(</span><span class="arg-name">bus</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitReady"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired when the audio filter is successfully attached to a given bus.
When this event is emitted, the filter is fully initialized and processing audio.
The underlying audio worklet has been created and connected to the audio graph.


| Name | Type | Description |
|------|------|-------------|
| `bus` | [Int](/api-docs/unity/Int/) | The bus index this filter is now attached to |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getBool"><code><span class="field-name">getBool</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#getBool"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get a boolean parameter at the given position.
Used internally by generated property getters.


| Name | Type | Description |
|------|------|-------------|
| `index` | [Int](/api-docs/unity/Int/) | Parameter index (0-based)  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | Boolean value (false if null) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getInt"><code><span class="field-name">getInt</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getInt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get an integer parameter at the given position.
Used internally by generated property getters.


| Name | Type | Description |
|------|------|-------------|
| `index` | [Int](/api-docs/unity/Int/) | Parameter index (0-based)  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/unity/Int/) | Integer value (0 if null) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getFloat"><code><span class="field-name">getFloat</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get a float parameter at the given position.
Used internally by generated property getters.


| Name | Type | Description |
|------|------|-------------|
| `index` | [Int](/api-docs/unity/Int/) | Parameter index (0-based)  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/unity/Float/) | Float value (0.0 if null) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setBool"><code><span class="field-name">setBool</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setBool"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `index` | [Int](/api-docs/unity/Int/) |
| `value` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setInt"><code><span class="field-name">setInt</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setInt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `index` | [Int](/api-docs/unity/Int/) |
| `value` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setFloat"><code><span class="field-name">setFloat</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `index` | [Int](/api-docs/unity/Int/) |
| `value` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="attach"><code><span class="field-name">attach</span><span class="parenthesis">(</span><span class="arg-name">bus</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#attach"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when filter is attached to a bus

| Name | Type |
|------|------|
| `bus` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="detach"><code><span class="field-name">detach</span><span class="parenthesis">(</span><span class="arg-name">bus</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#detach"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when filter is detached from a bus

| Name | Type |
|------|------|
| `bus` | [Int](/api-docs/unity/Int/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | ceramic.macros.AudioFiltersMacro.buildFilter() |

