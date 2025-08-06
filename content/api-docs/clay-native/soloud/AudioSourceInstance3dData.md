---
layout: api-docs
category: api-docs
subCategory: doc
menu: Soloud
title: AudioSourceInstance3dData
target: Clay (Native)
permalink: api-docs/clay-native/soloud/AudioSourceInstance3dData/
---

# AudioSourceInstance3dData

<div class="view-source"><a href="https://github.com/jeremyfa/linc_soloud/blob/master/soloud/AudioSource.hx">View source</a></div>

<div class="type-hierarchy"><strong>soloud.AudioSourceInstance3dData</strong> (extern class)</div>

## Static Members

<div class="signature field-method no-description" id="create"><code><span class="field-name">create</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">AudioSourceInstance3dData</a></code><a class="header-anchor" href="#create"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [AudioSourceInstance3dData](/api-docs/clay-native/soloud/AudioSourceInstance3dData/) |

## Instance Members

<div class="signature field-var has-description" id="m3dPosition"><code><span class="field-name">m3dPosition</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Pointer/" class="type-link">cpp.Pointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#m3dPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

3d position

<hr class="field-separator" />

<div class="signature field-var has-description" id="m3dVelocity"><code><span class="field-name">m3dVelocity</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Pointer/" class="type-link">cpp.Pointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#m3dVelocity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

3d velocity

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

<div class="signature field-var has-description" id="mCollider"><code><span class="field-name">mCollider</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/AudioCollider/" class="type-link">AudioCollider</a></code><a class="header-anchor" href="#mCollider"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pointer to a custom audio collider object

<hr class="field-separator" />

<div class="signature field-var has-description" id="mAttenuator"><code><span class="field-name">mAttenuator</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/AudioAttenuator/" class="type-link">AudioAttenuator</a></code><a class="header-anchor" href="#mAttenuator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pointer to a custom audio attenuator object

<hr class="field-separator" />

<div class="signature field-var has-description" id="mColliderData"><code><span class="field-name">mColliderData</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Int32/" class="type-link">cpp.Int32</a></code><a class="header-anchor" href="#mColliderData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

User data related to audio collider

<hr class="field-separator" />

<div class="signature field-var has-description" id="mDopplerValue"><code><span class="field-name">mDopplerValue</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#mDopplerValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Doppler sample rate multiplier

<hr class="field-separator" />

<div class="signature field-var has-description" id="m3dVolume"><code><span class="field-name">m3dVolume</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#m3dVolume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Overall 3d volume

<hr class="field-separator" />

<div class="signature field-var has-description" id="mChannelVolume"><code><span class="field-name">mChannelVolume</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Pointer/" class="type-link">cpp.Pointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#mChannelVolume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Channel volume

<hr class="field-separator" />

<div class="signature field-var has-description" id="mFlags"><code><span class="field-name">mFlags</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/AudioSourceFlags/" class="type-link">AudioSourceFlags</a></code><a class="header-anchor" href="#mFlags"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Copy of flags

<hr class="field-separator" />

<div class="signature field-var has-description" id="mHandle"><code><span class="field-name">mHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a></code><a class="header-anchor" href="#mHandle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Latest handle for this voice

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="init"><code><span class="field-name">init</span><span class="parenthesis">(</span><span class="arg-name">aSource</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/AudioSource/" class="type-link">AudioSource</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#init"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set settings from audiosource

| Name | Type |
|------|------|
| `aSource` | [AudioSource](/api-docs/clay-native/soloud/AudioSource/) |

