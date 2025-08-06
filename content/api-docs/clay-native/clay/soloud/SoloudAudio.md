---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: SoloudAudio
target: Clay (Native)
permalink: api-docs/clay-native/clay/soloud/SoloudAudio/
---

# SoloudAudio

<div class="view-source"><a href="https://github.com/ceramic-engine/clay/blob/master/src/clay/soloud/SoloudAudio.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/clay/base/BaseAudio/">clay.base.BaseAudio</a> → <strong>clay.soloud.SoloudAudio</strong> (Class)</div>

## Static Members

<div class="signature field-var no-description" id="VOLUME_FACTOR"><code><span class="field-name">VOLUME_FACTOR</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#VOLUME_FACTOR"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="dataFromBytes"><code><span class="field-name">dataFromBytes</span><span class="parenthesis">(</span><span class="arg-name">app</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/Clay/" class="type-link">clay.Clay</a><span class="operator">,</span> <span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/Uint8Array/" class="type-link">clay.buffers.Uint8Array</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/audio/AudioFormat/" class="type-link">clay.audio.AudioFormat</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/audio/AudioData/" class="type-link">clay.audio.AudioData</a></code><a class="header-anchor" href="#dataFromBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an AudioData instance from the given bytes

| Name | Type | Default |
|------|------|---------|
| `app` | [clay.Clay](/api-docs/clay-native/clay/Clay/) | |
| `id` | [String](/api-docs/clay-native/String/) | |
| `bytes` | [clay.buffers.Uint8Array](/api-docs/clay-native/clay/buffers/Uint8Array/) | |
| `format` | [clay.audio.AudioFormat](/api-docs/clay-native/clay/audio/AudioFormat/) | *(optional)* |

| Returns |
|---------|
| [clay.audio.AudioData](/api-docs/clay-native/clay/audio/AudioData/) |

## Instance Members

<div class="signature field-var no-description" id="active"><code><span class="field-name">active</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#active"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="init"><code><span class="field-name">init</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#init"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="shutdown"><code><span class="field-name">shutdown</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#shutdown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="tick"><code><span class="field-name">tick</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#tick"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `delta` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="instanceOf"><code><span class="field-name">instanceOf</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/audio/AudioHandle/" class="type-link">clay.audio.AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/audio/AudioInstance/" class="type-link">clay.audio.AudioInstance</a></code><a class="header-anchor" href="#instanceOf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [clay.audio.AudioHandle](/api-docs/clay-native/clay/audio/AudioHandle/) |

| Returns |
|---------|
| [clay.audio.AudioInstance](/api-docs/clay-native/clay/audio/AudioInstance/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="play"><code><span class="field-name">play</span><span class="parenthesis">(</span><span class="arg-name">source</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/audio/AudioSource/" class="type-link">clay.audio.AudioSource</a><span class="operator">,</span> <span class="arg-name">volume</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">paused</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">bus</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/audio/AudioHandle/" class="type-link">clay.audio.AudioHandle</a></code><a class="header-anchor" href="#play"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `source` | [clay.audio.AudioSource](/api-docs/clay-native/clay/audio/AudioSource/) |
| `volume` | [Float](/api-docs/clay-native/Float/) |
| `paused` | [Bool](/api-docs/clay-native/Bool/) |
| `bus` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [clay.audio.AudioHandle](/api-docs/clay-native/clay/audio/AudioHandle/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="loop"><code><span class="field-name">loop</span><span class="parenthesis">(</span><span class="arg-name">source</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/audio/AudioSource/" class="type-link">clay.audio.AudioSource</a><span class="operator">,</span> <span class="arg-name">volume</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">paused</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">bus</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/audio/AudioHandle/" class="type-link">clay.audio.AudioHandle</a></code><a class="header-anchor" href="#loop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `source` | [clay.audio.AudioSource](/api-docs/clay-native/clay/audio/AudioSource/) |
| `volume` | [Float](/api-docs/clay-native/Float/) |
| `paused` | [Bool](/api-docs/clay-native/Bool/) |
| `bus` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [clay.audio.AudioHandle](/api-docs/clay-native/clay/audio/AudioHandle/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="createBusFilter"><code><span class="field-name">createBusFilter</span><span class="parenthesis">(</span><span class="arg-name">busIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">createFunc</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Callable/" class="type-link">cpp.Callable</a><span class="operator">&lt;</span><span class="type-name">Function</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">destroyFunc</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Callable/" class="type-link">cpp.Callable</a><span class="operator">&lt;</span><span class="type-name">Function</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">filterFunc</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Callable/" class="type-link">cpp.Callable</a><span class="operator">&lt;</span><span class="type-name">Function</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#createBusFilter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `busIndex` | [Int](/api-docs/clay-native/Int/) |
| `createFunc` | [cpp.Callable](/api-docs/clay-native/cpp/Callable/)<Function> |
| `destroyFunc` | [cpp.Callable](/api-docs/clay-native/cpp/Callable/)<Function> |
| `filterFunc` | [cpp.Callable](/api-docs/clay-native/cpp/Callable/)<Function> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="stop"><code><span class="field-name">stop</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/audio/AudioHandle/" class="type-link">clay.audio.AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#stop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [clay.audio.AudioHandle](/api-docs/clay-native/clay/audio/AudioHandle/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="suspend"><code><span class="field-name">suspend</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#suspend"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="resume"><code><span class="field-name">resume</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="pan"><code><span class="field-name">pan</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/audio/AudioHandle/" class="type-link">clay.audio.AudioHandle</a><span class="operator">,</span> <span class="arg-name">pan</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pan"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [clay.audio.AudioHandle](/api-docs/clay-native/clay/audio/AudioHandle/) |
| `pan` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="volume"><code><span class="field-name">volume</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/audio/AudioHandle/" class="type-link">clay.audio.AudioHandle</a><span class="operator">,</span> <span class="arg-name">volume</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#volume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [clay.audio.AudioHandle](/api-docs/clay-native/clay/audio/AudioHandle/) |
| `volume` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pitch"><code><span class="field-name">pitch</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/audio/AudioHandle/" class="type-link">clay.audio.AudioHandle</a><span class="operator">,</span> <span class="arg-name">pitch</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pitch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [clay.audio.AudioHandle](/api-docs/clay-native/clay/audio/AudioHandle/) |
| `pitch` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="position"><code><span class="field-name">position</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/audio/AudioHandle/" class="type-link">clay.audio.AudioHandle</a><span class="operator">,</span> <span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#position"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [clay.audio.AudioHandle](/api-docs/clay-native/clay/audio/AudioHandle/) |
| `time` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pause"><code><span class="field-name">pause</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/audio/AudioHandle/" class="type-link">clay.audio.AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pause"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [clay.audio.AudioHandle](/api-docs/clay-native/clay/audio/AudioHandle/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="unPause"><code><span class="field-name">unPause</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/audio/AudioHandle/" class="type-link">clay.audio.AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unPause"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [clay.audio.AudioHandle](/api-docs/clay-native/clay/audio/AudioHandle/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="positionOf"><code><span class="field-name">positionOf</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/audio/AudioHandle/" class="type-link">clay.audio.AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#positionOf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [clay.audio.AudioHandle](/api-docs/clay-native/clay/audio/AudioHandle/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="panOf"><code><span class="field-name">panOf</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/audio/AudioHandle/" class="type-link">clay.audio.AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#panOf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [clay.audio.AudioHandle](/api-docs/clay-native/clay/audio/AudioHandle/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pitchOf"><code><span class="field-name">pitchOf</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/audio/AudioHandle/" class="type-link">clay.audio.AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pitchOf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [clay.audio.AudioHandle](/api-docs/clay-native/clay/audio/AudioHandle/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="volumeOf"><code><span class="field-name">volumeOf</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/audio/AudioHandle/" class="type-link">clay.audio.AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#volumeOf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [clay.audio.AudioHandle](/api-docs/clay-native/clay/audio/AudioHandle/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="stateOf"><code><span class="field-name">stateOf</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/audio/AudioHandle/" class="type-link">clay.audio.AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/audio/AudioState/" class="type-link">clay.audio.AudioState</a></code><a class="header-anchor" href="#stateOf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [clay.audio.AudioHandle](/api-docs/clay-native/clay/audio/AudioHandle/) |

| Returns |
|---------|
| [clay.audio.AudioState](/api-docs/clay-native/clay/audio/AudioState/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="loopOf"><code><span class="field-name">loopOf</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/audio/AudioHandle/" class="type-link">clay.audio.AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#loopOf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [clay.audio.AudioHandle](/api-docs/clay-native/clay/audio/AudioHandle/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isSynchronous"><code><span class="field-name">isSynchronous</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isSynchronous"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="loadData"><code><span class="field-name">loadData</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">isStream</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/audio/AudioFormat/" class="type-link">clay.audio.AudioFormat</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">async</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/audio/AudioData/" class="type-link">clay.audio.AudioData</a></code><a class="header-anchor" href="#loadData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `path` | [String](/api-docs/clay-native/String/) | |
| `isStream` | [Bool](/api-docs/clay-native/Bool/) | |
| `format` | [clay.audio.AudioFormat](/api-docs/clay-native/clay/audio/AudioFormat/) | |
| `async` | [Bool](/api-docs/clay-native/Bool/) | `false` |
| `callback` | Function | *(optional)* |

| Returns |
|---------|
| [clay.audio.AudioData](/api-docs/clay-native/clay/audio/AudioData/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="dataFromPCM"><code><span class="field-name">dataFromPCM</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">pcmData</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/Float32Array/" class="type-link">clay.buffers.Float32Array</a><span class="operator">,</span> <span class="arg-name">sampleFrames</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">channels</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">sampleRate</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">interleaved</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/audio/AudioFormat/" class="type-link">clay.audio.AudioFormat</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/audio/AudioData/" class="type-link">clay.audio.AudioData</a></code><a class="header-anchor" href="#dataFromPCM"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates AudioData from raw PCM Float32 samples.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `id` | [String](/api-docs/clay-native/String/) | | Unique identifier for this audio data  |
| `pcmData` | [clay.buffers.Float32Array](/api-docs/clay-native/clay/buffers/Float32Array/) | | Float32Array containing the raw PCM samples  |
| `sampleFrames` | [Int](/api-docs/clay-native/Int/) | | Number of sample frames (samples per channel)  |
| `channels` | [Int](/api-docs/clay-native/Int/) | | Number of audio channels (1 = mono, 2 = stereo, etc.)  |
| `sampleRate` | [Float](/api-docs/clay-native/Float/) | | Sample rate in Hz (e.g., 44100)  |
| `interleaved` | [Bool](/api-docs/clay-native/Bool/) | `true` | Whether the PCM data is interleaved (LRLRLR...) or planar (LLL...RRR...)  |
| `format` | [clay.audio.AudioFormat](/api-docs/clay-native/clay/audio/AudioFormat/) | *(optional)* | Optional audio format information  |
| `callback` | Function | *(optional)* | Optional callback when AudioData is ready |

| Returns |
|---------|
| [clay.audio.AudioData](/api-docs/clay-native/clay/audio/AudioData/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">app</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/Clay/" class="type-link">clay.Clay</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `app` | [clay.Clay](/api-docs/clay-native/clay/Clay/) |

## Private Members

<div class="signature field-var no-description" id="soloud"><code><span class="field-name">soloud</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Soloud/" class="type-link">soloud.Soloud</a></code><a class="header-anchor" href="#soloud"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="suspended"><code><span class="field-name">suspended</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#suspended"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="handleSeq"><code><span class="field-name">handleSeq</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#handleSeq"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="instances"><code><span class="field-name">instances</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/IntMap/" class="type-link">clay.IntMap</a></code><a class="header-anchor" href="#instances"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="handles"><code><span class="field-name">handles</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#handles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="suspendedHandles"><code><span class="field-name">suspendedHandles</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#suspendedHandles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="bussesByIndex"><code><span class="field-name">bussesByIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/clay/soloud/SoloudBus/" class="type-link">SoloudBus</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#bussesByIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="audioDataFromFile"><code><span class="field-name">audioDataFromFile</span><span class="parenthesis">(</span><span class="arg-name">app</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/Clay/" class="type-link">clay.Clay</a><span class="operator">,</span> <span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">isStream</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/audio/AudioFormat/" class="type-link">clay.audio.AudioFormat</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/audio/AudioData/" class="type-link">clay.audio.AudioData</a></code><a class="header-anchor" href="#audioDataFromFile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `app` | [clay.Clay](/api-docs/clay-native/clay/Clay/) |
| `path` | [String](/api-docs/clay-native/String/) |
| `isStream` | [Bool](/api-docs/clay-native/Bool/) |
| `format` | [clay.audio.AudioFormat](/api-docs/clay-native/clay/audio/AudioFormat/) |

| Returns |
|---------|
| [clay.audio.AudioData](/api-docs/clay-native/clay/audio/AudioData/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="audioDataFromBytes"><code><span class="field-name">audioDataFromBytes</span><span class="parenthesis">(</span><span class="arg-name">app</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/Clay/" class="type-link">clay.Clay</a><span class="operator">,</span> <span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/Uint8Array/" class="type-link">clay.buffers.Uint8Array</a><span class="operator">,</span> <span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/audio/AudioFormat/" class="type-link">clay.audio.AudioFormat</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/audio/AudioData/" class="type-link">clay.audio.AudioData</a></code><a class="header-anchor" href="#audioDataFromBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `app` | [clay.Clay](/api-docs/clay-native/clay/Clay/) |
| `id` | [String](/api-docs/clay-native/String/) |
| `bytes` | [clay.buffers.Uint8Array](/api-docs/clay-native/clay/buffers/Uint8Array/) |
| `format` | [clay.audio.AudioFormat](/api-docs/clay-native/clay/audio/AudioFormat/) |

| Returns |
|---------|
| [clay.audio.AudioData](/api-docs/clay-native/clay/audio/AudioData/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleSourceDestroyed"><code><span class="field-name">handleSourceDestroyed</span><span class="parenthesis">(</span><span class="arg-name">source</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/audio/AudioSource/" class="type-link">clay.audio.AudioSource</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleSourceDestroyed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `source` | [clay.audio.AudioSource](/api-docs/clay-native/clay/audio/AudioSource/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleInstanceDestroyed"><code><span class="field-name">handleInstanceDestroyed</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/audio/AudioHandle/" class="type-link">clay.audio.AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleInstanceDestroyed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [clay.audio.AudioHandle](/api-docs/clay-native/clay/audio/AudioHandle/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="soundOf"><code><span class="field-name">soundOf</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/audio/AudioHandle/" class="type-link">clay.audio.AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/soloud/SoloudSound/" class="type-link">SoloudSound</a></code><a class="header-anchor" href="#soundOf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [clay.audio.AudioHandle](/api-docs/clay-native/clay/audio/AudioHandle/) |

| Returns |
|---------|
| [SoloudSound](/api-docs/clay-native/clay/soloud/SoloudSound/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="resolveBus"><code><span class="field-name">resolveBus</span><span class="parenthesis">(</span><span class="arg-name">busIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Bus/" class="type-link">soloud.Bus</a></code><a class="header-anchor" href="#resolveBus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `busIndex` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [soloud.Bus](/api-docs/clay-native/soloud/Bus/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroySound"><code><span class="field-name">destroySound</span><span class="parenthesis">(</span><span class="arg-name">sound</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/soloud/SoloudSound/" class="type-link">SoloudSound</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroySound"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `sound` | [SoloudSound](/api-docs/clay-native/clay/soloud/SoloudSound/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:headerCode` | "#include <SDL3/SDL.h>" |
| `:allow` | clay.audio.AudioInstance |
| `:allow` | clay.audio.AudioSource |

