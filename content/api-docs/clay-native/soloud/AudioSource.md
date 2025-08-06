---
layout: api-docs
category: api-docs
subCategory: doc
menu: Soloud
title: AudioSource
target: Clay (Native)
permalink: api-docs/clay-native/soloud/AudioSource/
---

# AudioSource

<div class="view-source"><a href="https://github.com/jeremyfa/linc_soloud/blob/master/soloud/AudioSource.hx">View source</a></div>

<div class="type-hierarchy"><strong>soloud.AudioSource</strong> (extern class) → <a href="/api-docs/clay-native/soloud/Wav/">Wav</a>, <a href="/api-docs/clay-native/soloud/WavStream/">WavStream</a></div>

Base class for audio sources

## Static Members

<div class="signature field-method no-description" id="create"><code><span class="field-name">create</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">AudioSource</a></code><a class="header-anchor" href="#create"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [AudioSource](/api-docs/clay-native/soloud/AudioSource/) |

## Instance Members

<div class="signature field-var has-description" id="mFlags"><code><span class="field-name">mFlags</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/AudioSourceFlags/" class="type-link">AudioSourceFlags</a></code><a class="header-anchor" href="#mFlags"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flags. See AudioSource::FLAGS

<hr class="field-separator" />

<div class="signature field-var has-description" id="mBaseSamplerate"><code><span class="field-name">mBaseSamplerate</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#mBaseSamplerate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Base sample rate, used to initialize instances

<hr class="field-separator" />

<div class="signature field-var has-description" id="mVolume"><code><span class="field-name">mVolume</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#mVolume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default volume for created instances

<hr class="field-separator" />

<div class="signature field-var has-description" id="mChannels"><code><span class="field-name">mChannels</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a></code><a class="header-anchor" href="#mChannels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Number of channels this audio source produces

<hr class="field-separator" />

<div class="signature field-var has-description" id="mAudioSourceID"><code><span class="field-name">mAudioSourceID</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a></code><a class="header-anchor" href="#mAudioSourceID"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sound source ID. Assigned by SoLoud the first time it's played.

<hr class="field-separator" />

<div class="signature field-var has-description" id="m3dMinDistance"><code><span class="field-name">m3dMinDistance</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#m3dMinDistance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

3d min distance

<hr class="field-separator" />

<div class="signature field-var has-description" id="m3dMaxDistance"><code><span class="field-name">m3dMaxDistance</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#m3dMaxDistance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

3d max distance

<hr class="field-separator" />

<div class="signature field-var has-description" id="m3dAttenuationRolloff"><code><span class="field-name">m3dAttenuationRolloff</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#m3dAttenuationRolloff"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

3d attenuation rolloff factor

<hr class="field-separator" />

<div class="signature field-var has-description" id="m3dAttenuationModel"><code><span class="field-name">m3dAttenuationModel</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a></code><a class="header-anchor" href="#m3dAttenuationModel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

3d attenuation model

<hr class="field-separator" />

<div class="signature field-var has-description" id="m3dDopplerFactor"><code><span class="field-name">m3dDopplerFactor</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#m3dDopplerFactor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

3d doppler factor

<hr class="field-separator" />

<div class="signature field-var has-description" id="mFilter"><code><span class="field-name">mFilter</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Pointer/" class="type-link">cpp.Pointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/soloud/Filter/" class="type-link">Filter</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#mFilter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Filter pointer

<hr class="field-separator" />

<div class="signature field-var has-description" id="mSoloud"><code><span class="field-name">mSoloud</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Soloud/" class="type-link">Soloud</a></code><a class="header-anchor" href="#mSoloud"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pointer to the Soloud object. Needed to stop all instances in dtor.

<hr class="field-separator" />

<div class="signature field-var has-description" id="mCollider"><code><span class="field-name">mCollider</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/AudioCollider/" class="type-link">AudioCollider</a></code><a class="header-anchor" href="#mCollider"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pointer to a custom audio collider object

<hr class="field-separator" />

<div class="signature field-var has-description" id="mAttenuator"><code><span class="field-name">mAttenuator</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/AudioAttenuator/" class="type-link">AudioAttenuator</a></code><a class="header-anchor" href="#mAttenuator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pointer to custom attenuator object

<hr class="field-separator" />

<div class="signature field-var has-description" id="mColliderData"><code><span class="field-name">mColliderData</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Int32/" class="type-link">cpp.Int32</a></code><a class="header-anchor" href="#mColliderData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

User data related to audio collider

<hr class="field-separator" />

<div class="signature field-var has-description" id="mLoopPoint"><code><span class="field-name">mLoopPoint</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a></code><a class="header-anchor" href="#mLoopPoint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When looping, start playing from this time

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="setVolume"><code><span class="field-name">setVolume</span><span class="parenthesis">(</span><span class="arg-name">aVolume</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setVolume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set default volume for instances

| Name | Type |
|------|------|
| `aVolume` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setLooping"><code><span class="field-name">setLooping</span><span class="parenthesis">(</span><span class="arg-name">aLoop</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setLooping"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the looping of the instances created from this audio source

| Name | Type |
|------|------|
| `aLoop` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setSingleInstance"><code><span class="field-name">setSingleInstance</span><span class="parenthesis">(</span><span class="arg-name">aSingleInstance</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setSingleInstance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set whether only one instance of this sound should ever be playing at the same time

| Name | Type |
|------|------|
| `aSingleInstance` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="set3dMinMaxDistance"><code><span class="field-name">set3dMinMaxDistance</span><span class="parenthesis">(</span><span class="arg-name">aMinDistance</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aMaxDistance</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#set3dMinMaxDistance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the minimum and maximum distances for 3d audio source (closer to min distance = max vol)

| Name | Type |
|------|------|
| `aMinDistance` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aMaxDistance` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="set3dAttenuation"><code><span class="field-name">set3dAttenuation</span><span class="parenthesis">(</span><span class="arg-name">aAttenuationModel</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="operator">,</span> <span class="arg-name">aAttenuationRolloffFactor</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#set3dAttenuation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set attenuation model and rolloff factor for 3d audio source

| Name | Type |
|------|------|
| `aAttenuationModel` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |
| `aAttenuationRolloffFactor` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="set3dDopplerFactor"><code><span class="field-name">set3dDopplerFactor</span><span class="parenthesis">(</span><span class="arg-name">aDopplerFactor</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#set3dDopplerFactor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set doppler factor to reduce or enhance doppler effect, default = 1.0

| Name | Type |
|------|------|
| `aDopplerFactor` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="set3dListenerRelative"><code><span class="field-name">set3dListenerRelative</span><span class="parenthesis">(</span><span class="arg-name">aListenerRelative</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#set3dListenerRelative"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the coordinates for this audio source to be relative to listener's coordinates.

| Name | Type |
|------|------|
| `aListenerRelative` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="set3dDistanceDelay"><code><span class="field-name">set3dDistanceDelay</span><span class="parenthesis">(</span><span class="arg-name">aDistanceDelay</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#set3dDistanceDelay"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enable delaying the start of the sound based on the distance.

| Name | Type |
|------|------|
| `aDistanceDelay` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="set3dCollider"><code><span class="field-name">set3dCollider</span><span class="parenthesis">(</span><span class="arg-name">aCollider</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/AudioCollider/" class="type-link">AudioCollider</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aUserData</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Int32/" class="type-link">cpp.Int32</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#set3dCollider"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set a custom 3d audio collider. Set to NULL to disable.

| Name | Type | Default |
|------|------|---------|
| `aCollider` | [AudioCollider](/api-docs/clay-native/soloud/AudioCollider/) | |
| `aUserData` | [cpp.Int32](/api-docs/clay-native/cpp/Int32/) | `0` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="set3dAttenuator"><code><span class="field-name">set3dAttenuator</span><span class="parenthesis">(</span><span class="arg-name">aAttenuator</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/AudioAttenuator/" class="type-link">AudioAttenuator</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#set3dAttenuator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set a custom attenuator. Set to NULL to disable.

| Name | Type |
|------|------|
| `aAttenuator` | [AudioAttenuator](/api-docs/clay-native/soloud/AudioAttenuator/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setInaudibleBehavior"><code><span class="field-name">setInaudibleBehavior</span><span class="parenthesis">(</span><span class="arg-name">aMustTick</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">aKill</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setInaudibleBehavior"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set behavior for inaudible sounds

| Name | Type |
|------|------|
| `aMustTick` | [Bool](/api-docs/clay-native/Bool/) |
| `aKill` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setLoopPoint"><code><span class="field-name">setLoopPoint</span><span class="parenthesis">(</span><span class="arg-name">aLoopPoint</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setLoopPoint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set time to jump to when looping

| Name | Type |
|------|------|
| `aLoopPoint` | [Time](/api-docs/clay-native/soloud/Time/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getLoopPoint"><code><span class="field-name">getLoopPoint</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a></code><a class="header-anchor" href="#getLoopPoint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get current loop point value
| Returns |
|---------|
| [Time](/api-docs/clay-native/soloud/Time/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setFilter"><code><span class="field-name">setFilter</span><span class="parenthesis">(</span><span class="arg-name">aFilterId</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="operator">,</span> <span class="arg-name">aFilter</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Filter/" class="type-link">Filter</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFilter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set filter. Set to NULL to clear the filter.

| Name | Type |
|------|------|
| `aFilterId` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |
| `aFilter` | [Filter](/api-docs/clay-native/soloud/Filter/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createInstance"><code><span class="field-name">createInstance</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/AudioSourceInstance/" class="type-link">AudioSourceInstance</a></code><a class="header-anchor" href="#createInstance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create instance from the audio source. Called from within Soloud class.
| Returns |
|---------|
| [AudioSourceInstance](/api-docs/clay-native/soloud/AudioSourceInstance/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="stop"><code><span class="field-name">stop</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#stop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Stop all instances of this audio source

## Metadata

| Name | Parameters |
|------|------------|
| `:include` | "linc_soloud.h" |

