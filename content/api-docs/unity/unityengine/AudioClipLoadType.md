---
layout: api-docs
category: api-docs
subCategory: doc
menu: Unity
title: AudioClipLoadType
target: Unity
permalink: api-docs/unity/unityengine/AudioClipLoadType/
---

# AudioClipLoadType

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/unity/runtime/src/unityengine/AudioClipLoadType.hx">View source</a></div>

<div class="type-hierarchy"><strong>unityengine.AudioClipLoadType</strong> (extern class)</div>

Determines how audio data is loaded and stored in memory.
This affects memory usage, loading time, and CPU usage during playback.

The load type is typically set during audio import in Unity, but
understanding these modes helps optimize audio performance in Ceramic.

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/unityengine/AudioClip/">AudioClip</a></div>


## Static Members

<div class="signature field-var has-description has-plugin" id="DecompressOnLoad"><div class="plugin-name">unity</div><code><span class="field-name">DecompressOnLoad</span><span class="operator">:</span> <a href="#" class="type-link">AudioClipLoadType</a></code><a class="header-anchor" href="#DecompressOnLoad"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Audio is decompressed completely when loaded.

Characteristics:
- Highest memory usage (stores uncompressed PCM data)
- Fastest playback performance (no runtime decompression)
- Longer initial load time
- Best for: Short, frequently-played sounds (SFX, UI sounds)

Memory usage: ~10MB per minute of stereo audio at 44.1kHz

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="CompressedInMemory"><div class="plugin-name">unity</div><code><span class="field-name">CompressedInMemory</span><span class="operator">:</span> <a href="#" class="type-link">AudioClipLoadType</a></code><a class="header-anchor" href="#CompressedInMemory"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Audio remains compressed in memory and decompresses during playback.

Characteristics:
- Moderate memory usage (stores compressed data)
- Slight CPU overhead during playback for decompression
- Faster loading than DecompressOnLoad
- Best for: Medium-length sounds, ambient audio

Uses Vorbis compression on most platforms.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="Streaming"><div class="plugin-name">unity</div><code><span class="field-name">Streaming</span><span class="operator">:</span> <a href="#" class="type-link">AudioClipLoadType</a></code><a class="header-anchor" href="#Streaming"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Audio streams from disk during playback.

Characteristics:
- Minimal memory usage (small buffer only)
- Continuous disk access during playback
- Cannot be played multiple times simultaneously
- Slight playback latency when starting
- Best for: Long music tracks, background ambience

Note: Requires reliable disk/storage access speed.

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |

