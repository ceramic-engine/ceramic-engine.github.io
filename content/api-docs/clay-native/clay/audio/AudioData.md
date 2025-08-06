---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: AudioData
target: Clay (Native)
permalink: api-docs/clay-native/clay/audio/AudioData/
---

# AudioData

<div class="view-source"><a href="https://github.com/ceramic-engine/clay/blob/master/src/clay/audio/AudioData.hx">View source</a></div>

<div class="type-hierarchy"><strong>clay.audio.AudioData</strong> (Class) → <a href="/api-docs/clay-native/clay/soloud/SoloudAudioData/">clay.soloud.SoloudAudioData</a></div>

An audio data object contains information about audio samples or streams, ready to be used.
`AudioData` objects typically come from the `app.assets.audio` API or `app.audio.module.data_from_path`,
since the implemenation details of decoding audio and streams are module level implementation details.
This is stored by `AudioSource` and `AssetAudio` objects for example.

## Instance Members

<div class="signature field-var has-description" id="app"><code><span class="field-name">app</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/Clay/" class="type-link">clay.Clay</a></code><a class="header-anchor" href="#app"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Access to the snow runtime

<hr class="field-separator" />

<div class="signature field-var has-description" id="id"><code><span class="field-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#id"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The associated id for the data

<hr class="field-separator" />

<div class="signature field-var has-description" id="rate"><code><span class="field-name">rate</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#rate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The sample rate in samples per second

<hr class="field-separator" />

<div class="signature field-var has-description" id="length"><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The PCM length in samples

<hr class="field-separator" />

<div class="signature field-var has-description" id="duration"><code><span class="field-name">duration</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#duration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The duration in seconds of the PCM buffer

<hr class="field-separator" />

<div class="signature field-var has-description" id="channels"><code><span class="field-name">channels</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#channels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The number of channels for this data

<hr class="field-separator" />

<div class="signature field-var has-description" id="bitsPerSample"><code><span class="field-name">bitsPerSample</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#bitsPerSample"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The number of bits per sample for this data

<hr class="field-separator" />

<div class="signature field-var has-description" id="format"><code><span class="field-name">format</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/audio/AudioFormat/" class="type-link">AudioFormat</a></code><a class="header-anchor" href="#format"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The audio format type of the sample data

<hr class="field-separator" />

<div class="signature field-var has-description" id="isStream"><code><span class="field-name">isStream</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isStream"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether or not this data is a stream of samples

<hr class="field-separator" />

<div class="signature field-var has-description" id="destroyed"><code><span class="field-name">destroyed</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#destroyed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether or not this data has been destroyed

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">app</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/Clay/" class="type-link">clay.Clay</a><span class="operator">,</span> <span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/audio/AudioDataOptions/" class="type-link">AudioDataOptions</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `app` | [clay.Clay](/api-docs/clay-native/clay/Clay/) |
| `options` | [AudioDataOptions](/api-docs/clay-native/clay/audio/AudioDataOptions/) |

## Private Members

<div class="signature field-method no-description" id="seek"><code><span class="field-name">seek</span><span class="parenthesis">(</span><span class="arg-name">to</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#seek"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `to` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="portion"><code><span class="field-name">portion</span><span class="parenthesis">(</span><span class="arg-name">into</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/Uint8Array/" class="type-link">clay.buffers.Uint8Array</a><span class="operator">,</span> <span class="arg-name">start</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">len</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">intoResult</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#portion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `into` | [clay.buffers.Uint8Array](/api-docs/clay-native/clay/buffers/Uint8Array/) |
| `start` | [Int](/api-docs/clay-native/Int/) |
| `len` | [Int](/api-docs/clay-native/Int/) |
| `intoResult` | [Array](/api-docs/clay-native/Array/)<[Int](/api-docs/clay-native/Int/)> |

| Returns |
|---------|
| [Array](/api-docs/clay-native/Array/)<[Int](/api-docs/clay-native/Int/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:allow` | clay.audio.AudioInstance |
| `:structInit` | - |

