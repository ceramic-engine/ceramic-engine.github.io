---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: BaseAudioContext
target: Clay (Web)
permalink: api-docs/clay-web/js/html/audio/BaseAudioContext/
---

# BaseAudioContext

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">js.html.EventTarget</a> → <strong>js.html.audio.BaseAudioContext</strong> (extern class) → <a href="/api-docs/clay-web/js/html/audio/AudioContext/">AudioContext</a></div>

The `BaseAudioContext` interface acts as a base definition for online and offline audio-processing graphs, as represented by `AudioContext` and `OfflineAudioContext` respectively.

Documentation [BaseAudioContext](https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext></div>


## Instance Members

<div class="signature field-var has-description" id="destination"><code><span class="field-name">destination</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/AudioDestinationNode/" class="type-link">AudioDestinationNode</a></code><a class="header-anchor" href="#destination"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `AudioDestinationNode` representing the final destination of all audio in the context. It can be thought of as the audio-rendering device.

<hr class="field-separator" />

<div class="signature field-var has-description" id="sampleRate"><code><span class="field-name">sampleRate</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#sampleRate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a float representing the sample rate (in samples per second) used by all nodes in this context. The sample-rate of an `AudioContext` cannot be changed.

<hr class="field-separator" />

<div class="signature field-var has-description" id="currentTime"><code><span class="field-name">currentTime</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#currentTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a double representing an ever-increasing hardware time in seconds used for scheduling. It starts at `0`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="listener"><code><span class="field-name">listener</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/AudioListener/" class="type-link">AudioListener</a></code><a class="header-anchor" href="#listener"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the `AudioListener` object, used for 3D spatialization.

<hr class="field-separator" />

<div class="signature field-var has-description" id="state"><code><span class="field-name">state</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/AudioContextState/" class="type-link">AudioContextState</a></code><a class="header-anchor" href="#state"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the current state of the `AudioContext`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onstatechange"><code><span class="field-name">onstatechange</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onstatechange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An event handler that runs when an event of type `statechange` has fired. This occurs when the `AudioContext`'s state changes, due to the calling of one of the state change methods (`AudioContext.suspend`, `AudioContext.resume`, or `AudioContext.close`).

<hr class="field-separator" />

<div class="signature field-method has-description" id="resume"><code><span class="field-name">resume</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Void/" class="type-link">Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#resume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resumes the progression of time in an audio context that has previously been suspended/paused.
| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Void](/api-docs/clay-web/Void/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createBuffer"><code><span class="field-name">createBuffer</span><span class="parenthesis">(</span><span class="arg-name">numberOfChannels</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">sampleRate</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/AudioBuffer/" class="type-link">AudioBuffer</a></code><a class="header-anchor" href="#createBuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new, empty `AudioBuffer` object, which can then be populated by data and played via an `AudioBufferSourceNode`.

| Name | Type |
|------|------|
| `numberOfChannels` | [Int](/api-docs/clay-web/Int/) |
| `length` | [Int](/api-docs/clay-web/Int/) |
| `sampleRate` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [AudioBuffer](/api-docs/clay-web/js/html/audio/AudioBuffer/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="decodeAudioData"><code><span class="field-name">decodeAudioData</span><span class="parenthesis">(</span><span class="arg-name">audioData</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/ArrayBuffer/" class="type-link">js.lib.ArrayBuffer</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">successCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">errorCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/audio/AudioBuffer/" class="type-link">AudioBuffer</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#decodeAudioData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Asynchronously decodes audio file data contained in an `ArrayBuffer`. In this case, the ArrayBuffer is usually loaded from an `XMLHttpRequest`'s `response` attribute after setting the `responseType` to `arraybuffer`. This method only works on complete files, not fragments of audio files.

| Name | Type | Default |
|------|------|---------|
| `audioData` | [js.lib.ArrayBuffer](/api-docs/clay-web/js/lib/ArrayBuffer/) | |
| `successCallback` | Function | *(optional)* |
| `errorCallback` | Function | *(optional)* |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[AudioBuffer](/api-docs/clay-web/js/html/audio/AudioBuffer/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createBufferSource"><code><span class="field-name">createBufferSource</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/AudioBufferSourceNode/" class="type-link">AudioBufferSourceNode</a></code><a class="header-anchor" href="#createBufferSource"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates an `AudioBufferSourceNode`, which can be used to play and manipulate audio data contained within an `AudioBuffer` object. `AudioBuffer`s are created using `AudioContext.createBuffer` or returned by `AudioContext.decodeAudioData` when it successfully decodes an audio track.
| Returns |
|---------|
| [AudioBufferSourceNode](/api-docs/clay-web/js/html/audio/AudioBufferSourceNode/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createConstantSource"><code><span class="field-name">createConstantSource</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/ConstantSourceNode/" class="type-link">ConstantSourceNode</a></code><a class="header-anchor" href="#createConstantSource"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a `ConstantSourceNode` object, which is an audio source that continuously outputs a monaural (one-channel) sound signal whose samples all have the same value.
| Returns |
|---------|
| [ConstantSourceNode](/api-docs/clay-web/js/html/audio/ConstantSourceNode/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createScriptProcessor"><code><span class="field-name">createScriptProcessor</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">bufferSize</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">numberOfInputChannels</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">2</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">numberOfOutputChannels</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">2</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/ScriptProcessorNode/" class="type-link">ScriptProcessorNode</a></code><a class="header-anchor" href="#createScriptProcessor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a `ScriptProcessorNode`, which can be used for direct audio processing via JavaScript.

| Name | Type | Default |
|------|------|---------|
| `bufferSize` | [Int](/api-docs/clay-web/Int/) | `0` |
| `numberOfInputChannels` | [Int](/api-docs/clay-web/Int/) | `2` |
| `numberOfOutputChannels` | [Int](/api-docs/clay-web/Int/) | `2` |

| Returns |
|---------|
| [ScriptProcessorNode](/api-docs/clay-web/js/html/audio/ScriptProcessorNode/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createAnalyser"><code><span class="field-name">createAnalyser</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/AnalyserNode/" class="type-link">AnalyserNode</a></code><a class="header-anchor" href="#createAnalyser"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates an `AnalyserNode`, which can be used to expose audio time and frequency data and for example to create data visualisations.
| Returns |
|---------|
| [AnalyserNode](/api-docs/clay-web/js/html/audio/AnalyserNode/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createGain"><code><span class="field-name">createGain</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/GainNode/" class="type-link">GainNode</a></code><a class="header-anchor" href="#createGain"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a `GainNode`, which can be used to control the overall volume of the audio graph.
| Returns |
|---------|
| [GainNode](/api-docs/clay-web/js/html/audio/GainNode/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createDelay"><code><span class="field-name">createDelay</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">maxDelayTime</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/DelayNode/" class="type-link">DelayNode</a></code><a class="header-anchor" href="#createDelay"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a `DelayNode`, which is used to delay the incoming audio signal by a certain amount. This node is also useful to create feedback loops in a Web Audio API graph.

| Name | Type | Default |
|------|------|---------|
| `maxDelayTime` | [Float](/api-docs/clay-web/Float/) | `1.0` |

| Returns |
|---------|
| [DelayNode](/api-docs/clay-web/js/html/audio/DelayNode/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createBiquadFilter"><code><span class="field-name">createBiquadFilter</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/BiquadFilterNode/" class="type-link">BiquadFilterNode</a></code><a class="header-anchor" href="#createBiquadFilter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a `BiquadFilterNode`, which represents a second order filter configurable as several different common filter types: high-pass, low-pass, band-pass, etc
| Returns |
|---------|
| [BiquadFilterNode](/api-docs/clay-web/js/html/audio/BiquadFilterNode/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createIIRFilter"><code><span class="field-name">createIIRFilter</span><span class="parenthesis">(</span><span class="arg-name">feedforward</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">feedback</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/IIRFilterNode/" class="type-link">IIRFilterNode</a></code><a class="header-anchor" href="#createIIRFilter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates an `IIRFilterNode`, which represents a second order filter configurable as several different common filter types.

| Name | Type |
|------|------|
| `feedforward` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> |
| `feedback` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> |

| Returns |
|---------|
| [IIRFilterNode](/api-docs/clay-web/js/html/audio/IIRFilterNode/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createWaveShaper"><code><span class="field-name">createWaveShaper</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/WaveShaperNode/" class="type-link">WaveShaperNode</a></code><a class="header-anchor" href="#createWaveShaper"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a `WaveShaperNode`, which is used to implement non-linear distortion effects.
| Returns |
|---------|
| [WaveShaperNode](/api-docs/clay-web/js/html/audio/WaveShaperNode/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createPanner"><code><span class="field-name">createPanner</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/PannerNode/" class="type-link">PannerNode</a></code><a class="header-anchor" href="#createPanner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a `PannerNode`, which is used to spatialise an incoming audio stream in 3D space.
| Returns |
|---------|
| [PannerNode](/api-docs/clay-web/js/html/audio/PannerNode/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createStereoPanner"><code><span class="field-name">createStereoPanner</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/StereoPannerNode/" class="type-link">StereoPannerNode</a></code><a class="header-anchor" href="#createStereoPanner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a `StereoPannerNode`, which can be used to apply stereo panning to an audio source.
| Returns |
|---------|
| [StereoPannerNode](/api-docs/clay-web/js/html/audio/StereoPannerNode/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createConvolver"><code><span class="field-name">createConvolver</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/ConvolverNode/" class="type-link">ConvolverNode</a></code><a class="header-anchor" href="#createConvolver"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a `ConvolverNode`, which can be used to apply convolution effects to your audio graph, for example a reverberation effect.
| Returns |
|---------|
| [ConvolverNode](/api-docs/clay-web/js/html/audio/ConvolverNode/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createChannelSplitter"><code><span class="field-name">createChannelSplitter</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">numberOfOutputs</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">6</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/ChannelSplitterNode/" class="type-link">ChannelSplitterNode</a></code><a class="header-anchor" href="#createChannelSplitter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a `ChannelSplitterNode`, which is used to access the individual channels of an audio stream and process them separately.

| Name | Type | Default |
|------|------|---------|
| `numberOfOutputs` | [Int](/api-docs/clay-web/Int/) | `6` |

| Returns |
|---------|
| [ChannelSplitterNode](/api-docs/clay-web/js/html/audio/ChannelSplitterNode/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createChannelMerger"><code><span class="field-name">createChannelMerger</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">numberOfInputs</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">6</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/ChannelMergerNode/" class="type-link">ChannelMergerNode</a></code><a class="header-anchor" href="#createChannelMerger"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a `ChannelMergerNode`, which is used to combine channels from multiple audio streams into a single audio stream.

| Name | Type | Default |
|------|------|---------|
| `numberOfInputs` | [Int](/api-docs/clay-web/Int/) | `6` |

| Returns |
|---------|
| [ChannelMergerNode](/api-docs/clay-web/js/html/audio/ChannelMergerNode/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createDynamicsCompressor"><code><span class="field-name">createDynamicsCompressor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/DynamicsCompressorNode/" class="type-link">DynamicsCompressorNode</a></code><a class="header-anchor" href="#createDynamicsCompressor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a `DynamicsCompressorNode`, which can be used to apply acoustic compression to an audio signal.
| Returns |
|---------|
| [DynamicsCompressorNode](/api-docs/clay-web/js/html/audio/DynamicsCompressorNode/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createOscillator"><code><span class="field-name">createOscillator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/OscillatorNode/" class="type-link">OscillatorNode</a></code><a class="header-anchor" href="#createOscillator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates an `OscillatorNode`, a source representing a periodic waveform. It basically generates a tone.
| Returns |
|---------|
| [OscillatorNode](/api-docs/clay-web/js/html/audio/OscillatorNode/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createPeriodicWave"><code><span class="field-name">createPeriodicWave</span><span class="parenthesis">(</span><span class="arg-name">real</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Float32Array/" class="type-link">js.lib.Float32Array</a><span class="operator">,</span> <span class="arg-name">imag</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Float32Array/" class="type-link">js.lib.Float32Array</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">constraints</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/audio/PeriodicWaveConstraints/" class="type-link">PeriodicWaveConstraints</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/audio/PeriodicWave/" class="type-link">PeriodicWave</a></code><a class="header-anchor" href="#createPeriodicWave"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a `PeriodicWave`, used to define a periodic waveform that can be used to determine the output of an `OscillatorNode`.

| Name | Type | Default |
|------|------|---------|
| `real` | [js.lib.Float32Array](/api-docs/clay-web/js/lib/Float32Array/) | |
| `imag` | [js.lib.Float32Array](/api-docs/clay-web/js/lib/Float32Array/) | |
| `constraints` | [Null](/api-docs/clay-web/Null/)<[PeriodicWaveConstraints](/api-docs/clay-web/js/html/audio/PeriodicWaveConstraints/)> | *(optional)* |

| Returns |
|---------|
| [PeriodicWave](/api-docs/clay-web/js/html/audio/PeriodicWave/) |

