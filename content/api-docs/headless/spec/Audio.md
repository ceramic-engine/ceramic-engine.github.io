---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spec
title: Audio
target: Headless
permalink: api-docs/headless/spec/Audio/
---

# Audio

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/spec/Audio.hx">View source</a></div>

<div class="type-hierarchy"><strong>spec.Audio</strong> (Interface) → <a href="/api-docs/headless/backend/Audio/">backend.Audio</a></div>

Backend interface for audio operations.

This interface defines the contract that all backend implementations (Clay, Unity, Headless, Web)
must fulfill to provide audio functionality in Ceramic. It handles loading, playback control,
real-time effects, and bus management.

The audio system uses a bus-based architecture where sounds can be routed to different buses
(0-7) for group control and effects processing.

## Instance Members

<div class="signature field-method has-description" id="load"><code><span class="field-name">load</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/backend/LoadAudioOptions/" class="type-link">backend.LoadAudioOptions</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#load"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Loads an audio file from the specified path.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `path` | [String](/api-docs/headless/String/) | | The path to the audio file (relative to assets directory)  |
| `options` | [Null](/api-docs/headless/Null/)<[backend.LoadAudioOptions](/api-docs/headless/backend/LoadAudioOptions/)> | *(optional)* | Optional loading configuration (streaming, format hints, etc.)  |
| `done` | Function | | Callback invoked with the loaded AudioResource or null on failure |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createFromSamplesBuffer"><code><span class="field-name">createFromSamplesBuffer</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Float32Array/" class="type-link">backend.Float32Array</a><span class="operator">,</span> <span class="arg-name">samples</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">channels</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">sampleRate</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">interleaved</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/backend/AudioResource/" class="type-link">backend.AudioResource</a></code><a class="header-anchor" href="#createFromSamplesBuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates an audio resource from raw PCM sample data.


| Name | Type | Description |
|------|------|-------------|
| `buffer` | [backend.Float32Array](/api-docs/headless/backend/Float32Array/) | The raw audio sample data as 32-bit floats (-1.0 to 1.0 range)  |
| `samples` | [Int](/api-docs/headless/Int/) | The total number of samples in the buffer  |
| `channels` | [Int](/api-docs/headless/Int/) | The number of audio channels (1 for mono, 2 for stereo)  |
| `sampleRate` | [Float](/api-docs/headless/Float/) | The sample rate in Hz (e.g., 44100, 48000)  |
| `interleaved` | [Bool](/api-docs/headless/Bool/) | Whether samples are interleaved (L,R,L,R) or planar (L,L,L...,R,R,R)  |

| Returns | Description |
|---------|-------------|
| [backend.AudioResource](/api-docs/headless/backend/AudioResource/) | A new AudioResource containing the audio data |

<hr class="field-separator" />

<div class="signature field-method has-description" id="supportsHotReloadPath"><code><span class="field-name">supportsHotReloadPath</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#supportsHotReloadPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if the backend supports hot-reloading of audio files.
When true, the audio system can detect file changes and reload automatically.

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if hot-reload is supported, false otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getDuration"><code><span class="field-name">getDuration</span><span class="parenthesis">(</span><span class="arg-name">audio</span><span class="operator">:</span> <a href="/api-docs/headless/backend/AudioResource/" class="type-link">backend.AudioResource</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getDuration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the duration of an audio resource in seconds.


| Name | Type | Description |
|------|------|-------------|
| `audio` | [backend.AudioResource](/api-docs/headless/backend/AudioResource/) | The audio resource to query  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/headless/Float/) | The duration in seconds, or -1 if unknown (e.g., for streams) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="resumeAudioContext"><code><span class="field-name">resumeAudioContext</span><span class="parenthesis">(</span><span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resumeAudioContext"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resumes the audio context after user interaction.
This is required on web platforms where audio contexts start suspended
until user interaction occurs (click, touch, etc.).


| Name | Type | Description |
|------|------|-------------|
| `done` | Function | Callback invoked with true on success, false on failure |

<hr class="field-separator" />

<div class="signature field-method has-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="arg-name">audio</span><span class="operator">:</span> <a href="/api-docs/headless/backend/AudioResource/" class="type-link">backend.AudioResource</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Destroys an audio resource and frees its memory.
After calling this, the AudioResource should not be used.


| Name | Type | Description |
|------|------|-------------|
| `audio` | [backend.AudioResource](/api-docs/headless/backend/AudioResource/) | The audio resource to destroy |

<hr class="field-separator" />

<div class="signature field-method has-description" id="mute"><code><span class="field-name">mute</span><span class="parenthesis">(</span><span class="arg-name">audio</span><span class="operator">:</span> <a href="/api-docs/headless/backend/AudioResource/" class="type-link">backend.AudioResource</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/backend/AudioHandle/" class="type-link">backend.AudioHandle</a></code><a class="header-anchor" href="#mute"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a muted audio handle without actually playing the sound.
Useful for pre-allocating handles or silent placeholders.


| Name | Type | Description |
|------|------|-------------|
| `audio` | [backend.AudioResource](/api-docs/headless/backend/AudioResource/) | The audio resource to create a handle for  |

| Returns | Description |
|---------|-------------|
| [backend.AudioHandle](/api-docs/headless/backend/AudioHandle/) | A muted AudioHandle that can be controlled like a playing sound |

<hr class="field-separator" />

<div class="signature field-method has-description" id="play"><code><span class="field-name">play</span><span class="parenthesis">(</span><span class="arg-name">audio</span><span class="operator">:</span> <a href="/api-docs/headless/backend/AudioResource/" class="type-link">backend.AudioResource</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">volume</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.5</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pan</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pitch</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">position</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">loop</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">bus</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/backend/AudioHandle/" class="type-link">backend.AudioHandle</a></code><a class="header-anchor" href="#play"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Plays an audio resource with the specified parameters.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `audio` | [backend.AudioResource](/api-docs/headless/backend/AudioResource/) | | The audio resource to play  |
| `volume` | [Float](/api-docs/headless/Float/) | `0.5` | The playback volume (0.0 to 1.0, default 0.5)  |
| `pan` | [Float](/api-docs/headless/Float/) | `0` | The stereo panning (-1.0 for left, 0.0 for center, 1.0 for right)  |
| `pitch` | [Float](/api-docs/headless/Float/) | `1` | The playback pitch/speed multiplier (1.0 is normal speed)  |
| `position` | [Float](/api-docs/headless/Float/) | `0` | The starting position in seconds  |
| `loop` | [Bool](/api-docs/headless/Bool/) | `false` | Whether to loop playback when reaching the end  |
| `bus` | [Int](/api-docs/headless/Int/) | `0` | The audio bus to route this sound through (0-7)  |

| Returns | Description |
|---------|-------------|
| [backend.AudioHandle](/api-docs/headless/backend/AudioHandle/) | An AudioHandle for controlling the playing sound |

<hr class="field-separator" />

<div class="signature field-method has-description" id="pause"><code><span class="field-name">pause</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/headless/backend/AudioHandle/" class="type-link">backend.AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pause"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pauses playback of an audio handle.
The sound can be resumed from the same position with resume().


| Name | Type | Description |
|------|------|-------------|
| `handle` | [backend.AudioHandle](/api-docs/headless/backend/AudioHandle/) | The audio handle to pause |

<hr class="field-separator" />

<div class="signature field-method has-description" id="resume"><code><span class="field-name">resume</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/headless/backend/AudioHandle/" class="type-link">backend.AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resumes playback of a paused audio handle.
Playback continues from where it was paused.


| Name | Type | Description |
|------|------|-------------|
| `handle` | [backend.AudioHandle](/api-docs/headless/backend/AudioHandle/) | The audio handle to resume |

<hr class="field-separator" />

<div class="signature field-method has-description" id="stop"><code><span class="field-name">stop</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/headless/backend/AudioHandle/" class="type-link">backend.AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#stop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Stops playback of an audio handle.
Unlike pause, this cannot be resumed - the handle becomes invalid.


| Name | Type | Description |
|------|------|-------------|
| `handle` | [backend.AudioHandle](/api-docs/headless/backend/AudioHandle/) | The audio handle to stop |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getVolume"><code><span class="field-name">getVolume</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/headless/backend/AudioHandle/" class="type-link">backend.AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getVolume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the current volume of an audio handle.


| Name | Type | Description |
|------|------|-------------|
| `handle` | [backend.AudioHandle](/api-docs/headless/backend/AudioHandle/) | The audio handle to query  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/headless/Float/) | The current volume (0.0 to 1.0) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setVolume"><code><span class="field-name">setVolume</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/headless/backend/AudioHandle/" class="type-link">backend.AudioHandle</a><span class="operator">,</span> <span class="arg-name">volume</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setVolume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the volume of an audio handle.


| Name | Type | Description |
|------|------|-------------|
| `handle` | [backend.AudioHandle](/api-docs/headless/backend/AudioHandle/) | The audio handle to modify  |
| `volume` | [Float](/api-docs/headless/Float/) | The new volume (0.0 to 1.0) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getPan"><code><span class="field-name">getPan</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/headless/backend/AudioHandle/" class="type-link">backend.AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getPan"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the current stereo panning of an audio handle.


| Name | Type | Description |
|------|------|-------------|
| `handle` | [backend.AudioHandle](/api-docs/headless/backend/AudioHandle/) | The audio handle to query  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/headless/Float/) | The current pan value (-1.0 for left, 0.0 for center, 1.0 for right) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setPan"><code><span class="field-name">setPan</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/headless/backend/AudioHandle/" class="type-link">backend.AudioHandle</a><span class="operator">,</span> <span class="arg-name">pan</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setPan"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the stereo panning of an audio handle.


| Name | Type | Description |
|------|------|-------------|
| `handle` | [backend.AudioHandle](/api-docs/headless/backend/AudioHandle/) | The audio handle to modify  |
| `pan` | [Float](/api-docs/headless/Float/) | The new pan value (-1.0 for left, 0.0 for center, 1.0 for right) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getPitch"><code><span class="field-name">getPitch</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/headless/backend/AudioHandle/" class="type-link">backend.AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getPitch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the current pitch/speed multiplier of an audio handle.


| Name | Type | Description |
|------|------|-------------|
| `handle` | [backend.AudioHandle](/api-docs/headless/backend/AudioHandle/) | The audio handle to query  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/headless/Float/) | The current pitch multiplier (1.0 is normal speed) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setPitch"><code><span class="field-name">setPitch</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/headless/backend/AudioHandle/" class="type-link">backend.AudioHandle</a><span class="operator">,</span> <span class="arg-name">pitch</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setPitch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the pitch/speed multiplier of an audio handle.
This affects both pitch and playback speed proportionally.


| Name | Type | Description |
|------|------|-------------|
| `handle` | [backend.AudioHandle](/api-docs/headless/backend/AudioHandle/) | The audio handle to modify  |
| `pitch` | [Float](/api-docs/headless/Float/) | The new pitch multiplier (0.5 = half speed/octave down, 2.0 = double speed/octave up) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getPosition"><code><span class="field-name">getPosition</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/headless/backend/AudioHandle/" class="type-link">backend.AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the current playback position of an audio handle.


| Name | Type | Description |
|------|------|-------------|
| `handle` | [backend.AudioHandle](/api-docs/headless/backend/AudioHandle/) | The audio handle to query  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/headless/Float/) | The current position in seconds |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setPosition"><code><span class="field-name">setPosition</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/headless/backend/AudioHandle/" class="type-link">backend.AudioHandle</a><span class="operator">,</span> <span class="arg-name">position</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the playback position of an audio handle.


| Name | Type | Description |
|------|------|-------------|
| `handle` | [backend.AudioHandle](/api-docs/headless/backend/AudioHandle/) | The audio handle to modify  |
| `position` | [Float](/api-docs/headless/Float/) | The new position in seconds |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addFilter"><code><span class="field-name">addFilter</span><span class="parenthesis">(</span><span class="arg-name">bus</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/AudioFilter/" class="type-link">ceramic.AudioFilter</a><span class="operator">,</span> <span class="arg-name">onReady</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addFilter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds an audio filter to a bus for real-time effects processing.
Filters are processed in the order they are added.


| Name | Type | Description |
|------|------|-------------|
| `bus` | [Int](/api-docs/headless/Int/) | The audio bus number (0-7) to add the filter to  |
| `filter` | [ceramic.AudioFilter](/api-docs/headless/ceramic/AudioFilter/) | The AudioFilter instance to add (e.g., LowPassFilter, HighPassFilter)  |
| `onReady` | Function | Callback invoked when the filter is ready to process audio |

<hr class="field-separator" />

<div class="signature field-method has-description" id="removeFilter"><code><span class="field-name">removeFilter</span><span class="parenthesis">(</span><span class="arg-name">bus</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">filterId</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeFilter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes an audio filter from a bus.


| Name | Type | Description |
|------|------|-------------|
| `bus` | [Int](/api-docs/headless/Int/) | The audio bus number (0-7) to remove the filter from  |
| `filterId` | [Int](/api-docs/headless/Int/) | The ID of the filter to remove (from AudioFilter.id) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="filterParamsChanged"><code><span class="field-name">filterParamsChanged</span><span class="parenthesis">(</span><span class="arg-name">bus</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">filterId</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#filterParamsChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Notifies the backend that a filter's parameters have changed.
This allows the backend to update real-time processing accordingly.


| Name | Type | Description |
|------|------|-------------|
| `bus` | [Int](/api-docs/headless/Int/) | The audio bus number (0-7) containing the filter  |
| `filterId` | [Int](/api-docs/headless/Int/) | The ID of the filter whose parameters changed |

