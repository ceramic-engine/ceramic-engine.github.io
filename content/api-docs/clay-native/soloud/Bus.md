---
layout: api-docs
category: api-docs
subCategory: doc
menu: Soloud
title: Bus
target: Clay (Native)
permalink: api-docs/clay-native/soloud/Bus/
---

# Bus

<div class="view-source"><a href="https://github.com/jeremyfa/linc_soloud/blob/master/soloud/Bus.hx">View source</a></div>

<div class="type-hierarchy"><strong>soloud.Bus</strong> (extern class)</div>

Base class for busses

## Static Members

<div class="signature field-method no-description" id="create"><code><span class="field-name">create</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Bus</a></code><a class="header-anchor" href="#create"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bus](/api-docs/clay-native/soloud/Bus/) |

## Instance Members

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="setFilter"><code><span class="field-name">setFilter</span><span class="parenthesis">(</span><span class="arg-name">aFilterId</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="operator">,</span> <span class="arg-name">aFilter</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Filter/" class="type-link">Filter</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFilter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set filter. Set to NULL to clear the filter.

| Name | Type |
|------|------|
| `aFilterId` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |
| `aFilter` | [Filter](/api-docs/clay-native/soloud/Filter/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="play"><code><span class="field-name">play</span><span class="parenthesis">(</span><span class="arg-name">aSound</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/AudioSource/" class="type-link">AudioSource</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aVolume</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">-1.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aPan</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aPaused</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a></code><a class="header-anchor" href="#play"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Play sound through the bus

| Name | Type | Default |
|------|------|---------|
| `aSound` | [AudioSource](/api-docs/clay-native/soloud/AudioSource/) | |
| `aVolume` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `-1.0` |
| `aPan` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `0.0` |
| `aPaused` | [Bool](/api-docs/clay-native/Bool/) | `false` |

| Returns |
|---------|
| [Handle](/api-docs/clay-native/soloud/Handle/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="playClocked"><code><span class="field-name">playClocked</span><span class="parenthesis">(</span><span class="arg-name">aSoundTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a><span class="operator">,</span> <span class="arg-name">aSound</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/AudioSource/" class="type-link">AudioSource</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aVolume</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">-1.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aPan</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a></code><a class="header-anchor" href="#playClocked"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Play sound through the bus, delayed in relation to other sounds called via this function.

| Name | Type | Default |
|------|------|---------|
| `aSoundTime` | [Time](/api-docs/clay-native/soloud/Time/) | |
| `aSound` | [AudioSource](/api-docs/clay-native/soloud/AudioSource/) | |
| `aVolume` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `-1.0` |
| `aPan` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `0.0` |

| Returns |
|---------|
| [Handle](/api-docs/clay-native/soloud/Handle/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="play3d"><code><span class="field-name">play3d</span><span class="parenthesis">(</span><span class="arg-name">aSound</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/AudioSource/" class="type-link">AudioSource</a><span class="operator">,</span> <span class="arg-name">aPosX</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aPosY</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aPosZ</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aVelX</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aVelY</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aVelZ</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aVolume</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aPaused</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a></code><a class="header-anchor" href="#play3d"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Start playing a 3d audio source through the bus

| Name | Type | Default |
|------|------|---------|
| `aSound` | [AudioSource](/api-docs/clay-native/soloud/AudioSource/) | |
| `aPosX` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | |
| `aPosY` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | |
| `aPosZ` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | |
| `aVelX` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `0.0` |
| `aVelY` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `0.0` |
| `aVelZ` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `0.0` |
| `aVolume` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `1.0` |
| `aPaused` | [Bool](/api-docs/clay-native/Bool/) | `false` |

| Returns |
|---------|
| [Handle](/api-docs/clay-native/soloud/Handle/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="play3dClocked"><code><span class="field-name">play3dClocked</span><span class="parenthesis">(</span><span class="arg-name">aSoundTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a><span class="operator">,</span> <span class="arg-name">aSound</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/AudioSource/" class="type-link">AudioSource</a><span class="operator">,</span> <span class="arg-name">aPosX</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aPosY</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aPosZ</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aVelX</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aVelY</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aVelZ</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aVolume</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a></code><a class="header-anchor" href="#play3dClocked"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Start playing a 3d audio source through the bus, delayed in relation to other sounds called via this function.

| Name | Type | Default |
|------|------|---------|
| `aSoundTime` | [Time](/api-docs/clay-native/soloud/Time/) | |
| `aSound` | [AudioSource](/api-docs/clay-native/soloud/AudioSource/) | |
| `aPosX` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | |
| `aPosY` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | |
| `aPosZ` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | |
| `aVelX` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `0.0` |
| `aVelY` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `0.0` |
| `aVelZ` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `0.0` |
| `aVolume` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `1.0` |

| Returns |
|---------|
| [Handle](/api-docs/clay-native/soloud/Handle/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setChannels"><code><span class="field-name">setChannels</span><span class="parenthesis">(</span><span class="arg-name">aChannels</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Result/" class="type-link">Result</a></code><a class="header-anchor" href="#setChannels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set number of channels for the bus (default 2)

| Name | Type |
|------|------|
| `aChannels` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |

| Returns |
|---------|
| [Result](/api-docs/clay-native/soloud/Result/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setVisualizationEnable"><code><span class="field-name">setVisualizationEnable</span><span class="parenthesis">(</span><span class="arg-name">aEnable</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setVisualizationEnable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enable or disable visualization data gathering

| Name | Type |
|------|------|
| `aEnable` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="annexSound"><code><span class="field-name">annexSound</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#annexSound"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Move a live sound to this bus

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="calcFFT"><code><span class="field-name">calcFFT</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Pointer/" class="type-link">cpp.Pointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#calcFFT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculate and get 256 floats of FFT data for visualization. Visualization has to be enabled before use.
| Returns |
|---------|
| [cpp.Pointer](/api-docs/clay-native/cpp/Pointer/)<[cpp.Float32](/api-docs/clay-native/cpp/Float32/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getWave"><code><span class="field-name">getWave</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Pointer/" class="type-link">cpp.Pointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getWave"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get 256 floats of wave data for visualization. Visualization has to be enabled before use.
| Returns |
|---------|
| [cpp.Pointer](/api-docs/clay-native/cpp/Pointer/)<[cpp.Float32](/api-docs/clay-native/cpp/Float32/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getApproximateVolume"><code><span class="field-name">getApproximateVolume</span><span class="parenthesis">(</span><span class="arg-name">aChannel</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#getApproximateVolume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get approximate volume for output channel for visualization. Visualization has to be enabled before use.

| Name | Type |
|------|------|
| `aChannel` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |

| Returns |
|---------|
| [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getActiveVoiceCount"><code><span class="field-name">getActiveVoiceCount</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a></code><a class="header-anchor" href="#getActiveVoiceCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get number of immediate child voices to this bus
| Returns |
|---------|
| [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getResampler"><code><span class="field-name">getResampler</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a></code><a class="header-anchor" href="#getResampler"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get current the resampler for this bus
| Returns |
|---------|
| [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setResampler"><code><span class="field-name">setResampler</span><span class="parenthesis">(</span><span class="arg-name">aResampler</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setResampler"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the resampler for this bus

| Name | Type |
|------|------|
| `aResampler` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="stop"><code><span class="field-name">stop</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#stop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This is equivalent of calling soloud.stopAudioSource() with the sound source

## Metadata

| Name | Parameters |
|------|------------|
| `:include` | "linc_soloud.h" |

