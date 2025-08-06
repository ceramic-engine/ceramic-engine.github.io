---
layout: api-docs
category: api-docs
subCategory: doc
menu: Unity
title: AudioClip
target: Unity
permalink: api-docs/unity/unityengine/AudioClip/
---

# AudioClip

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/unity/runtime/src/unityengine/AudioClip.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/unityengine/Object/">Object</a> → <strong>unityengine.AudioClip</strong> (extern class)</div>

Represents audio data that can be played by AudioSource components.
AudioClips are imported audio files that contain audio data in various formats.

In Ceramic's Unity backend, AudioClips are used to store and play sound effects
and music. They can be loaded from Resources or created dynamically at runtime.

Loading and playing an AudioClip:
```haxe
// AudioClips are typically loaded through Ceramic's asset system
// This is handled internally by the Unity backend
```

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/unityengine/AudioSource/">AudioSource</a>, <a href="/api-docs/unity/unityengine/AudioMixer/">AudioMixer</a></div>


## Static Members

<div class="signature field-method has-description has-plugin" id="Create"><div class="plugin-name">unity</div><code><span class="field-name">Create</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">lengthSamples</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">channels</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">frequency</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">stream</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">AudioClip</a></code><a class="header-anchor" href="#Create"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new AudioClip programmatically.
Useful for generating audio at runtime or recording from microphone.



| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/unity/String/) | Display name for the AudioClip  |
| `lengthSamples` | [Int](/api-docs/unity/Int/) | Total number of audio samples (length in seconds * frequency)  |
| `channels` | [Int](/api-docs/unity/Int/) | Number of audio channels (1 for mono, 2 for stereo)  |
| `frequency` | [Int](/api-docs/unity/Int/) | Sample rate in Hz (e.g., 44100)  |
| `stream` | [Bool](/api-docs/unity/Bool/) | Whether to create as streaming clip (true) or in-memory (false)  |

| Returns | Description |
|---------|-------------|
| [AudioClip](/api-docs/unity/unityengine/AudioClip/) | Newly created AudioClip ready for SetData() calls * Creating a 1-second sine wave: ```haxe var clip = AudioClip.Create("sine", 44100, 1, 44100, false); // Then use SetData() to fill with audio samples ``` |

## Instance Members

<div class="signature field-var has-description has-plugin" id="ambisonic"><div class="plugin-name">unity</div><code><span class="field-name">ambisonic</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#ambisonic"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns whether the AudioClip contains ambisonic audio (multi-channel surround).
Ambisonic audio captures full 360-degree sound fields.

Read-only property set during audio import.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="channels"><div class="plugin-name">unity</div><code><span class="field-name">channels</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#channels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The number of audio channels in the clip.
Common values:
- 1: Mono (single channel)
- 2: Stereo (left and right channels)
- 6: 5.1 surround sound

Read-only property determined by the source audio file.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="frequency"><div class="plugin-name">unity</div><code><span class="field-name">frequency</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#frequency"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The sample frequency of the clip in Hertz (samples per second).
Common values:
- 22050: Low quality
- 44100: CD quality
- 48000: Professional audio

Read-only property determined by the source audio file.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="length"><div class="plugin-name">unity</div><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The length of the audio clip in seconds.
Calculated as: total samples / frequency

Read-only property useful for determining playback duration.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="loadInBackground"><div class="plugin-name">unity</div><code><span class="field-name">loadInBackground</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#loadInBackground"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to load the audio data in the background (non-blocking).
When true, audio loads asynchronously without freezing the main thread.

Should be set before the clip starts loading.
Check loadState to determine when loading is complete.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="loadState"><div class="plugin-name">unity</div><code><span class="field-name">loadState</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/AudioDataLoadState/" class="type-link">AudioDataLoadState</a></code><a class="header-anchor" href="#loadState"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The current loading state of the audio data.
Indicates whether the audio is loaded, loading, or failed.

Particularly useful when loadInBackground is true to check
if the audio is ready to play.

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/unityengine/AudioDataLoadState/">AudioDataLoadState</a></div>


<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="loadType"><div class="plugin-name">unity</div><code><span class="field-name">loadType</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/AudioClipLoadType/" class="type-link">AudioClipLoadType</a></code><a class="header-anchor" href="#loadType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

How the audio clip was loaded into memory.
Determines memory usage and performance characteristics:
- Decompress on load: Faster playback, uses more memory
- Compressed in memory: Balanced memory/CPU usage
- Streaming: Minimal memory, continuous disk access

Read-only property set during import.

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/unityengine/AudioClipLoadType/">AudioClipLoadType</a></div>


<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="SetData"><div class="plugin-name">unity</div><code><span class="field-name">SetData</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">offsetSamples</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#SetData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fills the AudioClip with audio sample data.
Must be called after Create() to populate a procedural AudioClip.



| Name | Type | Description |
|------|------|-------------|
| `data` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Single](/api-docs/unity/Single/)> | Array of audio samples as floating-point values (-1.0 to 1.0) Interleaved for multi-channel (e.g., L,R,L,R for stereo)  |
| `offsetSamples` | [Int](/api-docs/unity/Int/) | Starting position in the clip to write data  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | True if data was successfully written, false otherwise * Note: The data array length must match the clip's channel count and not exceed the remaining samples from offsetSamples. |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |

