---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: Audio
target: Clay (Native)
permalink: api-docs/clay-native/backend/Audio/
---

# Audio

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/clay/runtime/src/backend/Audio.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.Audio</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-native/spec/Audio/">spec.Audio</a></div>

Clay backend audio implementation providing comprehensive sound management.

This class handles:
- Audio resource loading and caching with reference counting
- Sound playback control (play, pause, stop, loop)
- Audio properties manipulation (volume, pan, pitch, position)
- Streaming audio support for large files
- Real-time audio filters and effects processing
- Multi-bus audio system for grouping and mixing
- Web Audio context management for browser compatibility
- Platform-specific optimizations (native vs web)

The audio system uses Clay's underlying audio engine which supports:
- On web: Web Audio API with AudioWorklet support
- On native: Custom audio mixing with SDL audio backend

Audio resources are cached and reference counted to avoid redundant loading
and ensure proper memory management.

## Instance Members

<div class="signature field-method has-description has-plugin" id="load"><div class="plugin-name">clay</div><code><span class="field-name">load</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/backend/LoadAudioOptions/" class="type-link">LoadAudioOptions</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">_done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#load"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Loads an audio resource from a file path or URL.

The method handles:
- Local file loading (relative to assets path)
- URL loading (http/https)
- Cached resource reuse with reference counting
- Asynchronous and synchronous loading modes
- Streaming mode for large audio files



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `path` | [String](/api-docs/clay-native/String/) | | The path to the audio file (relative to assets or absolute/URL)  |
| `options` | [Null](/api-docs/clay-native/Null/)<[LoadAudioOptions](/api-docs/clay-native/backend/LoadAudioOptions/)> | *(optional)* | Optional loading configuration: - loadMethod: SYNC for synchronous loading, ASYNC (default) for asynchronous - stream: true to stream large files instead of loading entirely in memory - immediate: Custom immediate callback queue for synchronization  |
| `_done` | Function | | Callback invoked with the loaded resource or null on failure |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="createFromSamplesBuffer"><div class="plugin-name">clay</div><code><span class="field-name">createFromSamplesBuffer</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Float32Array/" class="type-link">Float32Array</a><span class="operator">,</span> <span class="arg-name">samples</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">channels</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">sampleRate</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">interleaved</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/AudioResource/" class="type-link">AudioResource</a></code><a class="header-anchor" href="#createFromSamplesBuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates an audio resource from raw PCM sample data.

This is useful for:
- Procedurally generated audio
- Audio synthesis
- Converting from other audio formats



| Name | Type | Description |
|------|------|-------------|
| `buffer` | [Float32Array](/api-docs/clay-native/backend/Float32Array/) | The raw PCM samples as 32-bit floats  |
| `samples` | [Int](/api-docs/clay-native/Int/) | Number of sample frames (total samples / channels)  |
| `channels` | [Int](/api-docs/clay-native/Int/) | Number of audio channels (1 for mono, 2 for stereo)  |
| `sampleRate` | [Float](/api-docs/clay-native/Float/) | Sample rate in Hz (e.g., 44100, 48000)  |
| `interleaved` | [Bool](/api-docs/clay-native/Bool/) | Whether samples are interleaved (LRLRLR) or planar (LLL...RRR...)  |

| Returns | Description |
|---------|-------------|
| [AudioResource](/api-docs/clay-native/backend/AudioResource/) | The created audio resource, or null on failure |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getDuration"><div class="plugin-name">clay</div><code><span class="field-name">getDuration</span><span class="parenthesis">(</span><span class="arg-name">resource</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/AudioResource/" class="type-link">AudioResource</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getDuration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the duration of an audio resource in seconds.



| Name | Type | Description |
|------|------|-------------|
| `resource` | [AudioResource](/api-docs/clay-native/backend/AudioResource/) | The audio resource to query  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-native/Float/) | Duration in seconds, or 0 if unknown |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="resumeAudioContext"><div class="plugin-name">clay</div><code><span class="field-name">resumeAudioContext</span><span class="parenthesis">(</span><span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resumeAudioContext"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

No-op on native platforms where audio context is always active.


| Name | Type | Description |
|------|------|-------------|
| `done` | Function | Always called with true |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="supportsHotReloadPath"><div class="plugin-name">clay</div><code><span class="field-name">supportsHotReloadPath</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#supportsHotReloadPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Indicates whether this backend supports hot-reloading audio files.

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | true (Clay backend supports audio hot-reload) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="destroy"><div class="plugin-name">clay</div><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="arg-name">audio</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/AudioResource/" class="type-link">AudioResource</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Destroys an audio resource and frees associated memory.

Uses reference counting - the resource is only truly destroyed
when all references are released.



| Name | Type | Description |
|------|------|-------------|
| `audio` | [AudioResource](/api-docs/clay-native/backend/AudioResource/) | The audio resource to destroy |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="mute"><div class="plugin-name">clay</div><code><span class="field-name">mute</span><span class="parenthesis">(</span><span class="arg-name">audio</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/AudioResource/" class="type-link">AudioResource</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/AudioHandle/" class="type-link">AudioHandle</a></code><a class="header-anchor" href="#mute"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a muted audio handle (not implemented in Clay backend).


| Name | Type | Description |
|------|------|-------------|
| `audio` | [AudioResource](/api-docs/clay-native/backend/AudioResource/) | The audio resource  |

| Returns | Description |
|---------|-------------|
| [AudioHandle](/api-docs/clay-native/backend/AudioHandle/) | -1 (invalid handle) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="play"><div class="plugin-name">clay</div><code><span class="field-name">play</span><span class="parenthesis">(</span><span class="arg-name">audio</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/AudioResource/" class="type-link">AudioResource</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">volume</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.5</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pan</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pitch</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">position</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">loop</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">bus</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/AudioHandle/" class="type-link">AudioHandle</a></code><a class="header-anchor" href="#play"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Plays an audio resource with specified parameters.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `audio` | [AudioResource](/api-docs/clay-native/backend/AudioResource/) | | The audio resource to play  |
| `volume` | [Float](/api-docs/clay-native/Float/) | `0.5` | Playback volume (0.0 to 1.0, default 0.5)  |
| `pan` | [Float](/api-docs/clay-native/Float/) | `0` | Stereo panning (-1.0 left to 1.0 right, 0 center)  |
| `pitch` | [Float](/api-docs/clay-native/Float/) | `1` | Playback speed/pitch multiplier (1.0 = normal)  |
| `position` | [Float](/api-docs/clay-native/Float/) | `0` | Start position in seconds  |
| `loop` | [Bool](/api-docs/clay-native/Bool/) | `false` | Whether to loop the audio  |
| `bus` | [Int](/api-docs/clay-native/Int/) | `0` | Audio bus index for routing (0 = master)  |

| Returns | Description |
|---------|-------------|
| [AudioHandle](/api-docs/clay-native/backend/AudioHandle/) | Handle for controlling this audio instance, or -1 if failed |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="pause"><div class="plugin-name">clay</div><code><span class="field-name">pause</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/AudioHandle/" class="type-link">AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pause"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pauses audio playback.


| Name | Type | Description |
|------|------|-------------|
| `handle` | [AudioHandle](/api-docs/clay-native/backend/AudioHandle/) | The audio instance handle |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="resume"><div class="plugin-name">clay</div><code><span class="field-name">resume</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/AudioHandle/" class="type-link">AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resumes paused audio playback.


| Name | Type | Description |
|------|------|-------------|
| `handle` | [AudioHandle](/api-docs/clay-native/backend/AudioHandle/) | The audio instance handle |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="stop"><div class="plugin-name">clay</div><code><span class="field-name">stop</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/AudioHandle/" class="type-link">AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#stop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Stops audio playback and releases the handle.


| Name | Type | Description |
|------|------|-------------|
| `handle` | [AudioHandle](/api-docs/clay-native/backend/AudioHandle/) | The audio instance handle |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getVolume"><div class="plugin-name">clay</div><code><span class="field-name">getVolume</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/AudioHandle/" class="type-link">AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getVolume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the current volume of an audio instance.


| Name | Type | Description |
|------|------|-------------|
| `handle` | [AudioHandle](/api-docs/clay-native/backend/AudioHandle/) | The audio instance handle  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-native/Float/) | Volume level (0.0 to 1.0) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setVolume"><div class="plugin-name">clay</div><code><span class="field-name">setVolume</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/AudioHandle/" class="type-link">AudioHandle</a><span class="operator">,</span> <span class="arg-name">volume</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setVolume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the volume of an audio instance.


| Name | Type | Description |
|------|------|-------------|
| `handle` | [AudioHandle](/api-docs/clay-native/backend/AudioHandle/) | The audio instance handle  |
| `volume` | [Float](/api-docs/clay-native/Float/) | New volume level (0.0 to 1.0) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getPan"><div class="plugin-name">clay</div><code><span class="field-name">getPan</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/AudioHandle/" class="type-link">AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getPan"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the current stereo pan position.


| Name | Type | Description |
|------|------|-------------|
| `handle` | [AudioHandle](/api-docs/clay-native/backend/AudioHandle/) | The audio instance handle  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-native/Float/) | Pan value (-1.0 left to 1.0 right, 0 center) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setPan"><div class="plugin-name">clay</div><code><span class="field-name">setPan</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/AudioHandle/" class="type-link">AudioHandle</a><span class="operator">,</span> <span class="arg-name">pan</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setPan"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the stereo pan position.
Note: Pan cannot be changed for streaming sounds.


| Name | Type | Description |
|------|------|-------------|
| `handle` | [AudioHandle](/api-docs/clay-native/backend/AudioHandle/) | The audio instance handle  |
| `pan` | [Float](/api-docs/clay-native/Float/) | New pan value (-1.0 left to 1.0 right, 0 center) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getPitch"><div class="plugin-name">clay</div><code><span class="field-name">getPitch</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/AudioHandle/" class="type-link">AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getPitch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the current pitch/speed multiplier.


| Name | Type | Description |
|------|------|-------------|
| `handle` | [AudioHandle](/api-docs/clay-native/backend/AudioHandle/) | The audio instance handle  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-native/Float/) | Pitch multiplier (1.0 = normal speed) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setPitch"><div class="plugin-name">clay</div><code><span class="field-name">setPitch</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/AudioHandle/" class="type-link">AudioHandle</a><span class="operator">,</span> <span class="arg-name">pitch</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setPitch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the pitch/speed multiplier.
Note: Pitch cannot be changed for streaming sounds.


| Name | Type | Description |
|------|------|-------------|
| `handle` | [AudioHandle](/api-docs/clay-native/backend/AudioHandle/) | The audio instance handle  |
| `pitch` | [Float](/api-docs/clay-native/Float/) | New pitch multiplier (1.0 = normal, 2.0 = double speed) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getPosition"><div class="plugin-name">clay</div><code><span class="field-name">getPosition</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/AudioHandle/" class="type-link">AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the current playback position in seconds.


| Name | Type | Description |
|------|------|-------------|
| `handle` | [AudioHandle](/api-docs/clay-native/backend/AudioHandle/) | The audio instance handle  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-native/Float/) | Position in seconds from the start |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setPosition"><div class="plugin-name">clay</div><code><span class="field-name">setPosition</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/AudioHandle/" class="type-link">AudioHandle</a><span class="operator">,</span> <span class="arg-name">position</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the playback position (seeks to a time).
Note: Position cannot be changed for streaming sounds.


| Name | Type | Description |
|------|------|-------------|
| `handle` | [AudioHandle](/api-docs/clay-native/backend/AudioHandle/) | The audio instance handle  |
| `position` | [Float](/api-docs/clay-native/Float/) | New position in seconds |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="addFilter"><div class="plugin-name">clay</div><code><span class="field-name">addFilter</span><span class="parenthesis">(</span><span class="arg-name">bus</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AudioFilter/" class="type-link">ceramic.AudioFilter</a><span class="operator">,</span> <span class="arg-name">onReady</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addFilter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds an audio filter to a specific bus for real-time processing.

Filters are processed in the order they are added. The system supports:
- Multiple filters per bus
- Real-time parameter updates
- AudioWorklet processing on web
- Native filter processing on desktop/mobile



| Name | Type | Description |
|------|------|-------------|
| `bus` | [Int](/api-docs/clay-native/Int/) | The audio bus to add the filter to (0 = master)  |
| `filter` | [ceramic.AudioFilter](/api-docs/clay-native/ceramic/AudioFilter/) | The audio filter instance to add  |
| `onReady` | Function | Callback when the filter is ready for processing |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="removeFilter"><div class="plugin-name">clay</div><code><span class="field-name">removeFilter</span><span class="parenthesis">(</span><span class="arg-name">bus</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">filterId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeFilter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes an audio filter from a bus.



| Name | Type | Description |
|------|------|-------------|
| `bus` | [Int](/api-docs/clay-native/Int/) | The audio bus containing the filter  |
| `filterId` | [Int](/api-docs/clay-native/Int/) | The unique ID of the filter to remove |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="filterParamsChanged"><div class="plugin-name">clay</div><code><span class="field-name">filterParamsChanged</span><span class="parenthesis">(</span><span class="arg-name">bus</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">filterId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#filterParamsChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Notifies the audio system that filter parameters have changed.

This triggers an update of the filter's processing parameters.
On web, parameters are sent to the AudioWorklet.
On native, parameters are marked dirty for the next process cycle.



| Name | Type | Description |
|------|------|-------------|
| `bus` | [Int](/api-docs/clay-native/Int/) | The audio bus containing the filter  |
| `filterId` | [Int](/api-docs/clay-native/Int/) | The unique ID of the filter that changed |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">clay</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new Audio backend instance.

## Private Members

<div class="signature field-var has-description has-plugin" id="audioFiltersLock"><div class="plugin-name">clay</div><code><span class="field-name">audioFiltersLock</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/SpinLock/" class="type-link">ceramic.SpinLock</a></code><a class="header-anchor" href="#audioFiltersLock"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Global lock for thread-safe filter operations

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="filterLocksByBus"><div class="plugin-name">clay</div><code><span class="field-name">filterLocksByBus</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/SpinLock/" class="type-link">ceramic.SpinLock</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#filterLocksByBus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Per-bus locks for fine-grained thread safety

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="filterIdsByBus"><div class="plugin-name">clay</div><code><span class="field-name">filterIdsByBus</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/backend/AudioFilterInfo/" class="type-link">AudioFilterInfo</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#filterIdsByBus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Active filters indexed by bus number

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="activeBusFilters"><div class="plugin-name">clay</div><code><span class="field-name">activeBusFilters</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#activeBusFilters"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tracks which buses have active filters

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="busFilterReadyCallbacks"><div class="plugin-name">clay</div><code><span class="field-name">busFilterReadyCallbacks</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Function</span><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#busFilterReadyCallbacks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Callbacks waiting for bus filter creation

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="postWorkletSyncCallbacks"><div class="plugin-name">clay</div><code><span class="field-name">postWorkletSyncCallbacks</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Function</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#postWorkletSyncCallbacks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Callbacks to execute after worklet synchronization

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="nextSamplesBufferIndex"><div class="plugin-name">clay</div><code><span class="field-name">nextSamplesBufferIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#nextSamplesBufferIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="loadingAudioCallbacks"><div class="plugin-name">clay</div><code><span class="field-name">loadingAudioCallbacks</span><span class="operator">:</span> <a href="/api-docs/clay-native/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#loadingAudioCallbacks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Callbacks for audio resources currently loading

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="loadedAudioResources"><div class="plugin-name">clay</div><code><span class="field-name">loadedAudioResources</span><span class="operator">:</span> <a href="/api-docs/clay-native/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#loadedAudioResources"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cached audio resources indexed by path

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="loadedAudioRetainCount"><div class="plugin-name">clay</div><code><span class="field-name">loadedAudioRetainCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#loadedAudioRetainCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reference count for each loaded audio resource

