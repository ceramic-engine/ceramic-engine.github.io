---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: AudioFilters
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/AudioFilters/
---

# AudioFilters

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/AudioFilters.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.AudioFilters</strong> (Class)</div>

Internal manager for audio filter worklets across audio buses.

AudioFilters handles the lifecycle and processing of audio filter worklets,
which are small processing units that modify audio in real-time. It manages:
- Thread-safe registration and removal of worklets
- Organizing worklets by audio bus
- Synchronizing worklet changes between threads
- Processing audio through active worklets

This class is used internally by the audio backend and should not be
accessed directly. Use AudioFilter and AudioMixer for public audio
filtering functionality.

Thread Safety:
- On native platforms (sys), uses mutexes and atomic operations
- Ensures safe access from both main thread and audio thread
- Batches worklet changes to minimize lock contention

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/ceramic/AudioFilter/">AudioFilter</a>, <a href="/api-docs/clay-web/ceramic/AudioFilterWorklet/">AudioFilterWorklet</a>, <a href="/api-docs/clay-web/ceramic/AudioMixer/">AudioMixer</a>, <a href="/api-docs/clay-web/ceramic/Audio/">Audio</a></div>


## Private Members

<div class="signature field-var no-description" id="workletsDirty"><code><span class="field-name">workletsDirty</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#workletsDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="pendingWorklets"><code><span class="field-name">pendingWorklets</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/AudioFilterWorklet/" class="type-link">AudioFilterWorklet</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#pendingWorklets"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="toRemoveWorklets"><code><span class="field-name">toRemoveWorklets</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/AudioFilterWorklet/" class="type-link">AudioFilterWorklet</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#toRemoveWorklets"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="workletsByBus"><code><span class="field-name">workletsByBus</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/AudioFilterWorklet/" class="type-link">AudioFilterWorklet</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#workletsByBus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="syncWorklets"><code><span class="field-name">syncWorklets</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#syncWorklets"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Synchronizes pending worklet changes with the active worklet lists.

This method processes queued additions and removals of worklets,
updating the per-bus worklet arrays. Called by the audio backend
before processing audio to ensure all worklet changes are applied.

Thread-safe on native platforms using mutex locks.

<hr class="field-separator" />

<div class="signature field-method has-description" id="createWorklet"><code><span class="field-name">createWorklet</span><span class="parenthesis">(</span><span class="arg-name">bus</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">filterId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">workletClass</span><span class="operator">:</span> <a href="/api-docs/clay-web/Class/" class="type-link">Class</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/AudioFilterWorklet/" class="type-link">AudioFilterWorklet</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/AudioFilterWorklet/" class="type-link">AudioFilterWorklet</a></code><a class="header-anchor" href="#createWorklet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new audio filter worklet and queues it for addition.



| Name | Type | Description |
|------|------|-------------|
| `bus` | [Int](/api-docs/clay-web/Int/) | The audio bus ID where this worklet will process audio  |
| `filterId` | [Int](/api-docs/clay-web/Int/) | Unique identifier for the filter  |
| `workletClass` | [Class](/api-docs/clay-web/Class/)<[AudioFilterWorklet](/api-docs/clay-web/ceramic/AudioFilterWorklet/)> | The worklet class to instantiate  |

| Returns | Description |
|---------|-------------|
| [AudioFilterWorklet](/api-docs/clay-web/ceramic/AudioFilterWorklet/) | The created worklet instance |

<hr class="field-separator" />

<div class="signature field-method has-description" id="destroyWorklet"><code><span class="field-name">destroyWorklet</span><span class="parenthesis">(</span><span class="arg-name">bus</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">filterId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroyWorklet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Destroys an audio filter worklet by queuing it for removal.

Searches for the worklet with the given filterId across all buses
and pending additions, then marks it for removal during the next sync.



| Name | Type | Description |
|------|------|-------------|
| `bus` | [Int](/api-docs/clay-web/Int/) | The audio bus ID (currently unused but kept for API consistency)  |
| `filterId` | [Int](/api-docs/clay-web/Int/) | Unique identifier of the filter to destroy |

<hr class="field-separator" />

<div class="signature field-method has-description" id="beginUpdateFilterWorkletParams"><code><span class="field-name">beginUpdateFilterWorkletParams</span><span class="parenthesis">(</span><span class="arg-name">bus</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">filterId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#beginUpdateFilterWorkletParams"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Begins a parameter update operation for a filter worklet.

On native platforms, this acquires the necessary locks to ensure
thread-safe parameter updates. Must be paired with endUpdateFilterWorkletParams.



| Name | Type | Description |
|------|------|-------------|
| `bus` | [Int](/api-docs/clay-web/Int/) | The audio bus ID  |
| `filterId` | [Int](/api-docs/clay-web/Int/) | Unique identifier of the filter being updated |

<hr class="field-separator" />

<div class="signature field-method has-description" id="endUpdateFilterWorkletParams"><code><span class="field-name">endUpdateFilterWorkletParams</span><span class="parenthesis">(</span><span class="arg-name">bus</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">filterId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#endUpdateFilterWorkletParams"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Ends a parameter update operation for a filter worklet.

Releases locks acquired by beginUpdateFilterWorkletParams.



| Name | Type | Description |
|------|------|-------------|
| `bus` | [Int](/api-docs/clay-web/Int/) | The audio bus ID  |
| `filterId` | [Int](/api-docs/clay-web/Int/) | Unique identifier of the filter being updated |

<hr class="field-separator" />

<div class="signature field-method has-description" id="processBusAudioWorklets"><code><span class="field-name">processBusAudioWorklets</span><span class="parenthesis">(</span><span class="arg-name">bus</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/AudioFilterBuffer/" class="type-link">AudioFilterBuffer</a><span class="operator">,</span> <span class="arg-name">samples</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">channels</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">sampleRate</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#processBusAudioWorklets"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Processes audio through all active worklets on a specific bus.

Called by the audio backend during audio processing. Applies each
worklet's processing in sequence to the provided audio buffer.



| Name | Type | Description |
|------|------|-------------|
| `bus` | [Int](/api-docs/clay-web/Int/) | The audio bus ID to process  |
| `buffer` | [AudioFilterBuffer](/api-docs/clay-web/ceramic/AudioFilterBuffer/) | The audio buffer containing samples to process  |
| `samples` | [Int](/api-docs/clay-web/Int/) | Number of samples per channel in the buffer  |
| `channels` | [Int](/api-docs/clay-web/Int/) | Number of audio channels (1 for mono, 2 for stereo)  |
| `sampleRate` | [Float](/api-docs/clay-web/Float/) | Sample rate in Hz (e.g., 44100, 48000)  |
| `time` | [Float](/api-docs/clay-web/Float/) | Current audio time in seconds |

