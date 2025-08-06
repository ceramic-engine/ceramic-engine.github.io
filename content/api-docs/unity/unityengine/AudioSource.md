---
layout: api-docs
category: api-docs
subCategory: doc
menu: Unity
title: AudioSource
target: Unity
permalink: api-docs/unity/unityengine/AudioSource/
---

# AudioSource

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/unity/runtime/src/unityengine/AudioSource.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/unityengine/Object/">Object</a> → <a href="/api-docs/unity/unityengine/Component/">Component</a> → <a href="/api-docs/unity/unityengine/Behaviour/">Behaviour</a> → <strong>unityengine.AudioSource</strong> (extern class)</div>

Component that plays AudioClips in 3D or 2D space.
The primary way to play sounds in Unity, supporting spatial audio,
effects, and mixer routing.

In Ceramic's Unity backend, AudioSources are pooled and managed
to efficiently play sounds through the audio bus system.

Key features:
- 3D spatial audio with distance attenuation
- Pitch and volume control
- Looping and time control
- Integration with AudioMixer for effects
- Doppler effect simulation

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/unityengine/AudioClip/">AudioClip</a>, <a href="/api-docs/unity/unityengine/AudioMixer/">AudioMixer</a>, <a href="/api-docs/unity/unityengine/AudioMixerGroup/">AudioMixerGroup</a></div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="bypassEffects"><div class="plugin-name">unity</div><code><span class="field-name">bypassEffects</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#bypassEffects"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Bypasses all effects applied by the AudioMixerGroup.
When true, audio plays without any mixer effects (reverb, etc.).
Useful for UI sounds or when effects cause issues.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="bypassListenerEffects"><div class="plugin-name">unity</div><code><span class="field-name">bypassListenerEffects</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#bypassListenerEffects"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Bypasses effects applied to the AudioListener.
When true, ignores global effects on the listener.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="bypassReverbZones"><div class="plugin-name">unity</div><code><span class="field-name">bypassReverbZones</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#bypassReverbZones"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Bypasses reverb zones in the scene.
When true, this source ignores any reverb zone effects.
Useful for UI or non-diegetic sounds.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="clip"><div class="plugin-name">unity</div><code><span class="field-name">clip</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/AudioClip/" class="type-link">AudioClip</a></code><a class="header-anchor" href="#clip"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The AudioClip to play.
Set this before calling Play() or enable playOnAwake.
Can be changed during playback for crossfading effects.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="dopplerLevel"><div class="plugin-name">unity</div><code><span class="field-name">dopplerLevel</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a></code><a class="header-anchor" href="#dopplerLevel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Doppler effect intensity (0-5).
0 = No doppler effect
1 = Realistic doppler
>1 = Exaggerated effect

Simulates pitch changes from relative motion.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="ignoreListenerPause"><div class="plugin-name">unity</div><code><span class="field-name">ignoreListenerPause</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#ignoreListenerPause"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this source continues playing when AudioListener.pause is true.
Useful for menu sounds that should play during game pause.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="ignoreListenerVolume"><div class="plugin-name">unity</div><code><span class="field-name">ignoreListenerVolume</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#ignoreListenerVolume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this source ignores AudioListener.volume.
When true, only this source's volume property affects loudness.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="isPlaying"><div class="plugin-name">unity</div><code><span class="field-name">isPlaying</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isPlaying"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the AudioSource is currently playing.
Read-only. Check this to determine playback state.

Returns false when paused, stopped, or finished.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="isVirtual"><div class="plugin-name">unity</div><code><span class="field-name">isVirtual</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isVirtual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether Unity has virtualized this AudioSource.
Virtual sources are too quiet/far to hear but continue
updating position for when they become audible again.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="loop"><div class="plugin-name">unity</div><code><span class="field-name">loop</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#loop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the sound repeats after finishing.
When true, playback restarts from beginning after reaching end.
Essential for background music and ambient sounds.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="maxDistance"><div class="plugin-name">unity</div><code><span class="field-name">maxDistance</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a></code><a class="header-anchor" href="#maxDistance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Maximum distance for 3D sound attenuation.
Beyond this distance, volume remains at minimum.
Works with minDistance to define falloff curve.

Default: 500.0

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="minDistance"><div class="plugin-name">unity</div><code><span class="field-name">minDistance</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a></code><a class="header-anchor" href="#minDistance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Distance at which 3D sound begins attenuating.
Within this distance, sound plays at full volume.

Default: 1.0

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="mute"><div class="plugin-name">unity</div><code><span class="field-name">mute</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#mute"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Mutes the AudioSource.
When true, no sound is produced but playback continues.
Different from volume=0 as it completely bypasses audio processing.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="panStereo"><div class="plugin-name">unity</div><code><span class="field-name">panStereo</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a></code><a class="header-anchor" href="#panStereo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Stereo pan position (-1 to 1).
-1 = Full left
0 = Center
1 = Full right

Only affects 2D sounds (spatialBlend = 0).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="pitch"><div class="plugin-name">unity</div><code><span class="field-name">pitch</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a></code><a class="header-anchor" href="#pitch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pitch multiplier (0.1 to 3.0).
1.0 = Normal pitch
0.5 = One octave lower
2.0 = One octave higher

Note: Extreme values may cause artifacts.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="playOnAwake"><div class="plugin-name">unity</div><code><span class="field-name">playOnAwake</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#playOnAwake"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to start playing immediately when enabled.
If true and clip is set, playback begins automatically.
Useful for ambient sounds in scenes.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="priority"><div class="plugin-name">unity</div><code><span class="field-name">priority</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#priority"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Priority for voice management (0-256).
0 = Highest priority (never virtualized)
256 = Lowest priority (first to be virtualized)

Unity virtualizes lower priority sounds when too many play.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="reverbZoneMix"><div class="plugin-name">unity</div><code><span class="field-name">reverbZoneMix</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a></code><a class="header-anchor" href="#reverbZoneMix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Amount of reverb zone effect applied (0-1.1).
0 = No reverb
1 = Full reverb
>1 = Amplified reverb

Requires reverb zones in scene.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="spatialize"><div class="plugin-name">unity</div><code><span class="field-name">spatialize</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#spatialize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enables 3D spatialization plugins.
When true, compatible spatial audio plugins can process
this source for binaural or ambisonic output.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="time"><div class="plugin-name">unity</div><code><span class="field-name">time</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a></code><a class="header-anchor" href="#time"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current playback position in seconds.
Can be set to seek to specific time.
Clamped between 0 and clip.length.

Use for scrubbing or syncing multiple sources.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="timeSamples"><div class="plugin-name">unity</div><code><span class="field-name">timeSamples</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#timeSamples"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current playback position in PCM samples.
More precise than time for sample-accurate sync.
Range: 0 to (clip.samples - 1)

Useful for beat-matching or precise loops.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="volume"><div class="plugin-name">unity</div><code><span class="field-name">volume</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a></code><a class="header-anchor" href="#volume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Volume/amplitude multiplier (0-1).
0 = Silent
1 = Full volume

Applied before mixer group processing.
Use logarithmic scaling for perceptual linearity.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="outputAudioMixerGroup"><div class="plugin-name">unity</div><code><span class="field-name">outputAudioMixerGroup</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/AudioMixerGroup/" class="type-link">AudioMixerGroup</a></code><a class="header-anchor" href="#outputAudioMixerGroup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Routes audio output to specific mixer group.
If null, outputs to master mixer.

Use this to apply group effects and manage
multiple sounds together (e.g., all SFX).

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="Pause"><div class="plugin-name">unity</div><code><span class="field-name">Pause</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Pause"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pauses playback, maintaining current position.
Call UnPause() to resume from same position.
Unlike Stop(), doesn't reset playback position.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="Play"><div class="plugin-name">unity</div><code><span class="field-name">Play</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Play"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Starts playing the assigned AudioClip.
If already playing, restarts from beginning.
Requires clip to be assigned.

Basic playback:
```haxe
source.clip = myClip;
source.volume = 0.8;
source.Play();
```

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="PlayDelayed"><div class="plugin-name">unity</div><code><span class="field-name">PlayDelayed</span><span class="parenthesis">(</span><span class="arg-name">delay</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#PlayDelayed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Schedules playback to start after a delay.
Useful for timing sounds with animations or music.



| Name | Type | Description |
|------|------|-------------|
| `delay` | [Single](/api-docs/unity/Single/) | Seconds to wait before playing (must be positive) * Note: Uses audio DSP time for sample-accurate scheduling. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="Stop"><div class="plugin-name">unity</div><code><span class="field-name">Stop</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Stop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Stops playback and resets position to beginning.
If Play() is called after Stop(), playback starts from 0.
Use Pause() instead to maintain position.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="UnPause"><div class="plugin-name">unity</div><code><span class="field-name">UnPause</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#UnPause"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resumes playback after Pause().
Continues from the position where Pause() was called.
Has no effect if not currently paused.

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |

