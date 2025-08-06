---
layout: api-docs
category: api-docs
subCategory: doc
menu: Unity
title: AudioDataLoadState
target: Unity
permalink: api-docs/unity/unityengine/AudioDataLoadState/
---

# AudioDataLoadState

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/unity/runtime/src/unityengine/AudioDataLoadState.hx">View source</a></div>

<div class="type-hierarchy"><strong>unityengine.AudioDataLoadState</strong> (extern class)</div>

Represents the loading state of an AudioClip's audio data.
Used to track asynchronous loading progress and handle loading failures.

This is particularly important when AudioClip.loadInBackground is true,
as you need to check the state before attempting playback.

Checking if audio is ready:
```haxe
if (audioClip.loadState == AudioDataLoadState.Loaded) {
    // Safe to play the audio
}
```

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/unityengine/AudioClip/">AudioClip</a></div>


## Static Members

<div class="signature field-var has-description has-plugin" id="Unloaded"><div class="plugin-name">unity</div><code><span class="field-name">Unloaded</span><span class="operator">:</span> <a href="#" class="type-link">AudioDataLoadState</a></code><a class="header-anchor" href="#Unloaded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Audio data has not been loaded yet.

This is the initial state for:
- Streaming AudioClips before first play
- Background-loaded clips before loading starts
- Clips that have been explicitly unloaded

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="Loading"><div class="plugin-name">unity</div><code><span class="field-name">Loading</span><span class="operator">:</span> <a href="#" class="type-link">AudioDataLoadState</a></code><a class="header-anchor" href="#Loading"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Audio data is currently being loaded.

Occurs when:
- Background loading is in progress
- Streaming clip is buffering initial data

Playback attempts during this state may fail or wait.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="Loaded"><div class="plugin-name">unity</div><code><span class="field-name">Loaded</span><span class="operator">:</span> <a href="#" class="type-link">AudioDataLoadState</a></code><a class="header-anchor" href="#Loaded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Audio data is fully loaded and ready for playback.

This state indicates:
- All audio samples are available in memory
- The clip can be played without delay
- Multiple simultaneous playbacks are possible (non-streaming)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="Failed"><div class="plugin-name">unity</div><code><span class="field-name">Failed</span><span class="operator">:</span> <a href="#" class="type-link">AudioDataLoadState</a></code><a class="header-anchor" href="#Failed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Audio data loading has failed.

Common failure reasons:
- File not found or corrupted
- Unsupported audio format
- Insufficient memory
- Disk read error (for streaming clips)

Clips in this state cannot be played.

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |

