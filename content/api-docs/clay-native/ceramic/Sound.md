---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Sound
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/Sound/
---

# Sound

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Sound.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">Entity</a> → <strong>ceramic.Sound</strong> (Class)</div>

Represents a loaded sound that can be played multiple times.

Sound instances are typically created by loading audio assets,
but can also be created from raw PCM sample data.

Features:
- Multiple simultaneous playback instances
- Volume, pan, and pitch control
- Bus routing for audio processing
- Group-based mixing
- Looping support

Each time you call `play()`, a new SoundPlayer instance is created,
allowing the same sound to be played multiple times simultaneously.

```haxe
// Load and play a sound
var sound = assets.sound('jump');
sound.volume = 0.8;
sound.play();

// Play with custom parameters
var player = sound.play(0, true, 0.5, -0.3, 1.2);

// Create sound from raw samples
var customSound = Sound.fromSamplesBuffer(
    samples, frameCount, 2, 44100, true
);
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/SoundPlayer/">SoundPlayer</a>, <a href="/api-docs/clay-native/ceramic/SoundAsset/">SoundAsset</a>, <a href="/api-docs/clay-native/ceramic/AudioMixer/">AudioMixer</a></div>


## Static Members

<div class="signature field-method has-description" id="fromSamplesBuffer"><code><span class="field-name">fromSamplesBuffer</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Float32Array/" class="type-link">Float32Array</a><span class="operator">,</span> <span class="arg-name">samples</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">channels</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">sampleRate</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">interleaved</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Sound</a></code><a class="header-anchor" href="#fromSamplesBuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new sound from raw PCM sample data.
Useful for procedural audio generation or custom audio processing.



| Name | Type | Description |
|------|------|-------------|
| `buffer` | [Float32Array](/api-docs/clay-native/ceramic/Float32Array/) | Float32Array containing the raw PCM samples  |
| `samples` | [Int](/api-docs/clay-native/Int/) | Number of sample frames (total samples divided by channel count)  |
| `channels` | [Int](/api-docs/clay-native/Int/) | Number of audio channels (1 = mono, 2 = stereo, etc.)  |
| `sampleRate` | [Float](/api-docs/clay-native/Float/) | Sample rate in Hz (e.g., 44100, 48000)  |
| `interleaved` | [Bool](/api-docs/clay-native/Bool/) | Whether the PCM data is interleaved (LRLRLR...) or planar (LLL...RRR...)  |

| Returns | Description |
|---------|-------------|
| [Sound](/api-docs/clay-native/ceramic/Sound/) | A new Sound instance ready to be played |

## Instance Members

<div class="signature field-var has-description" id="backendItem"><code><span class="field-name">backendItem</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/AudioResource/" class="type-link">backend.AudioResource</a></code><a class="header-anchor" href="#backendItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The backend audio resource containing the actual audio data.

<hr class="field-separator" />

<div class="signature field-var has-description" id="asset"><code><span class="field-name">asset</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/SoundAsset/" class="type-link">SoundAsset</a></code><a class="header-anchor" href="#asset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The asset this sound was loaded from, if any.
Automatically destroyed when the sound is destroyed.

<hr class="field-separator" />

<div class="signature field-var has-description" id="bus"><code><span class="field-name">bus</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#bus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default bus to play this sound on.
0 = master bus (default)
Higher numbers route through different audio processing chains.

<hr class="field-separator" />

<div class="signature field-var has-description" id="group"><code><span class="field-name">group</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#group"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The mixer group this sound belongs to.
Each group has its own AudioMixer for collective volume/pan/pitch control.
Setting this will automatically create the mixer if it doesn't exist.

<hr class="field-separator" />

<div class="signature field-var has-description" id="volume"><code><span class="field-name">volume</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#volume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default volume when playing this sound.
Range: 0.0 (silent) to 1.0 (full volume)
This is multiplied with the mixer volume.

<hr class="field-separator" />

<div class="signature field-var has-description" id="pan"><code><span class="field-name">pan</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pan"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default pan when playing this sound.
Range: -1.0 (full left) to 1.0 (full right)
0.0 = center (default)

<hr class="field-separator" />

<div class="signature field-var has-description" id="pitch"><code><span class="field-name">pitch</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pitch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default pitch when playing this sound.
1.0 = normal pitch (default)
0.5 = one octave lower
2.0 = one octave higher

<hr class="field-separator" />

<div class="signature field-var has-description" id="duration"><code><span class="field-name">duration</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#duration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sound duration in seconds.
Read-only property calculated from the audio data.

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="play"><code><span class="field-name">play</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">position</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">loop</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">volume</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pan</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pitch</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">bus</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/SoundPlayer/" class="type-link">SoundPlayer</a></code><a class="header-anchor" href="#play"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Play the sound with optional parameters.
Creates a new SoundPlayer instance for this playback.

If volume/pan/pitch are not provided, the sound's default values are used.
The final values are also affected by the mixer group settings.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `position` | [Float](/api-docs/clay-native/Float/) | `0` | Start position in seconds (0 = beginning)  |
| `loop` | [Bool](/api-docs/clay-native/Bool/) | `false` | Whether to loop the sound continuously  |
| `volume` | [Float](/api-docs/clay-native/Float/) | *(optional)* | Volume override (0-1, null = use default)  |
| `pan` | [Float](/api-docs/clay-native/Float/) | *(optional)* | Pan override (-1 to 1, null = use default)  |
| `pitch` | [Float](/api-docs/clay-native/Float/) | *(optional)* | Pitch override (1 = normal, null = use default)  |
| `bus` | [Int](/api-docs/clay-native/Int/) | *(optional)* | Bus to play on (null = use sound's default bus)  |

| Returns | Description |
|---------|-------------|
| [SoundPlayer](/api-docs/clay-native/ceramic/SoundPlayer/) | A SoundPlayer instance to control this specific playback |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">backendItem</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/AudioResource/" class="type-link">backend.AudioResource</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new Sound from a backend audio resource.
Usually you don't call this directly - use asset loading or fromSamplesBuffer instead.


| Name | Type | Description |
|------|------|-------------|
| `backendItem` | [backend.AudioResource](/api-docs/clay-native/backend/AudioResource/) | The backend audio resource |

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

