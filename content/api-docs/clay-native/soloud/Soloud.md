---
layout: api-docs
category: api-docs
subCategory: doc
menu: Soloud
title: Soloud
target: Clay (Native)
permalink: api-docs/clay-native/soloud/Soloud/
---

# Soloud

<div class="view-source"><a href="https://github.com/jeremyfa/linc_soloud/blob/master/soloud/Soloud.hx">View source</a></div>

<div class="type-hierarchy"><strong>soloud.Soloud</strong> (extern class)</div>

Soloud core class.

## Static Members

<div class="signature field-var no-description" id="LINC"><code><span class="field-name">LINC</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#LINC"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="create"><code><span class="field-name">create</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Soloud</a></code><a class="header-anchor" href="#create"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Soloud](/api-docs/clay-native/soloud/Soloud/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="createFilterFunction"><code><span class="field-name">createFilterFunction</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">createFunc</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Callable/" class="type-link">cpp.Callable</a><span class="operator">&lt;</span><span class="type-name">Function</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">destroyFunc</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Callable/" class="type-link">cpp.Callable</a><span class="operator">&lt;</span><span class="type-name">Function</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">filterFunc</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Callable/" class="type-link">cpp.Callable</a><span class="operator">&lt;</span><span class="type-name">Function</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Filter/" class="type-link">Filter</a></code><a class="header-anchor" href="#createFilterFunction"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `id` | [Int](/api-docs/clay-native/Int/) |
| `createFunc` | [cpp.Callable](/api-docs/clay-native/cpp/Callable/)<Function> |
| `destroyFunc` | [cpp.Callable](/api-docs/clay-native/cpp/Callable/)<Function> |
| `filterFunc` | [cpp.Callable](/api-docs/clay-native/cpp/Callable/)<Function> |

| Returns |
|---------|
| [Filter](/api-docs/clay-native/soloud/Filter/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroyFilterFunction"><code><span class="field-name">destroyFilterFunction</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroyFilterFunction"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `id` | [Int](/api-docs/clay-native/Int/) |

## Instance Members

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="init"><code><span class="field-name">init</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/SoloudFlags/" class="type-link">SoloudFlags</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">backend</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/SoloudBackends/" class="type-link">SoloudBackends</a> <span class="operator">=</span> <span class="default-value">AUTO</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">samplerate</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">bufferSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">channels</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a> <span class="operator">=</span> <span class="default-value">2</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Result/" class="type-link">Result</a></code><a class="header-anchor" href="#init"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initialize SoLoud. Must be called before SoLoud can be used.

| Name | Type | Default |
|------|------|---------|
| `flags` | [SoloudFlags](/api-docs/clay-native/soloud/SoloudFlags/) | `0` |
| `backend` | [SoloudBackends](/api-docs/clay-native/soloud/SoloudBackends/) | `AUTO` |
| `samplerate` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) | `0` |
| `bufferSize` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) | `0` |
| `channels` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) | `2` |

| Returns |
|---------|
| [Result](/api-docs/clay-native/soloud/Result/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deinit"><code><span class="field-name">deinit</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#deinit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Deinitialize SoLoud. Must be called before shutting down.

<hr class="field-separator" />

<div class="signature field-method has-description" id="getVersion"><code><span class="field-name">getVersion</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a></code><a class="header-anchor" href="#getVersion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Query SoLoud version number (should equal to SOLOUD_VERSION macro)
| Returns |
|---------|
| [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getErrorString"><code><span class="field-name">getErrorString</span><span class="parenthesis">(</span><span class="arg-name">aErrorCode</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/SoloudErrors/" class="type-link">SoloudErrors</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/ConstCharStar/" class="type-link">cpp.ConstCharStar</a></code><a class="header-anchor" href="#getErrorString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Translate error number to an asciiz string

| Name | Type |
|------|------|
| `aErrorCode` | [SoloudErrors](/api-docs/clay-native/soloud/SoloudErrors/) |

| Returns |
|---------|
| [cpp.ConstCharStar](/api-docs/clay-native/cpp/ConstCharStar/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getBackendId"><code><span class="field-name">getBackendId</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/SoloudBackends/" class="type-link">SoloudBackends</a></code><a class="header-anchor" href="#getBackendId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns current backend ID (BACKENDS enum)
| Returns |
|---------|
| [SoloudBackends](/api-docs/clay-native/soloud/SoloudBackends/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getBackendString"><code><span class="field-name">getBackendString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/ConstCharStar/" class="type-link">cpp.ConstCharStar</a></code><a class="header-anchor" href="#getBackendString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns current backend string. May be NULL.
| Returns |
|---------|
| [cpp.ConstCharStar](/api-docs/clay-native/cpp/ConstCharStar/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getBackendChannels"><code><span class="field-name">getBackendChannels</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a></code><a class="header-anchor" href="#getBackendChannels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns current backend channel count (1 mono, 2 stereo, etc)
| Returns |
|---------|
| [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getBackendSamplerate"><code><span class="field-name">getBackendSamplerate</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a></code><a class="header-anchor" href="#getBackendSamplerate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns current backend sample rate
| Returns |
|---------|
| [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getBackendBufferSize"><code><span class="field-name">getBackendBufferSize</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a></code><a class="header-anchor" href="#getBackendBufferSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns current backend buffer size
| Returns |
|---------|
| [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setSpeakerPosition"><code><span class="field-name">setSpeakerPosition</span><span class="parenthesis">(</span><span class="arg-name">aChannel</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="operator">,</span> <span class="arg-name">aX</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aY</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aZ</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Result/" class="type-link">Result</a></code><a class="header-anchor" href="#setSpeakerPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set speaker position in 3d space

| Name | Type |
|------|------|
| `aChannel` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |
| `aX` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aY` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aZ` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

| Returns |
|---------|
| [Result](/api-docs/clay-native/soloud/Result/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getSpeakerPosition"><code><span class="field-name">getSpeakerPosition</span><span class="parenthesis">(</span><span class="arg-name">aChannel</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="operator">,</span> <span class="arg-name">aX</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Reference/" class="type-link">cpp.Reference</a><span class="operator">,</span> <span class="arg-name">aY</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Reference/" class="type-link">cpp.Reference</a><span class="operator">,</span> <span class="arg-name">aZ</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Reference/" class="type-link">cpp.Reference</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Result/" class="type-link">Result</a></code><a class="header-anchor" href="#getSpeakerPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get speaker position in 3d space

| Name | Type |
|------|------|
| `aChannel` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |
| `aX` | [cpp.Reference](/api-docs/clay-native/cpp/Reference/) |
| `aY` | [cpp.Reference](/api-docs/clay-native/cpp/Reference/) |
| `aZ` | [cpp.Reference](/api-docs/clay-native/cpp/Reference/) |

| Returns |
|---------|
| [Result](/api-docs/clay-native/soloud/Result/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="play"><code><span class="field-name">play</span><span class="parenthesis">(</span><span class="arg-name">aSound</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/AudioSource/" class="type-link">AudioSource</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aVolume</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">-1.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aPan</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aPaused</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aBus</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a></code><a class="header-anchor" href="#play"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Start playing a sound. Returns voice handle, which can be ignored or used to alter the playing sound's parameters. Negative volume means to use default.

| Name | Type | Default |
|------|------|---------|
| `aSound` | [AudioSource](/api-docs/clay-native/soloud/AudioSource/) | |
| `aVolume` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `-1.0` |
| `aPan` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `0.0` |
| `aPaused` | [Bool](/api-docs/clay-native/Bool/) | `false` |
| `aBus` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) | `0` |

| Returns |
|---------|
| [Handle](/api-docs/clay-native/soloud/Handle/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="playClocked"><code><span class="field-name">playClocked</span><span class="parenthesis">(</span><span class="arg-name">aSoundTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a><span class="operator">,</span> <span class="arg-name">aSound</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/AudioSource/" class="type-link">AudioSource</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aVolume</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">-1.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aPan</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aBus</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a></code><a class="header-anchor" href="#playClocked"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Start playing a sound delayed in relation to other sounds called via this function. Negative volume means to use default.

| Name | Type | Default |
|------|------|---------|
| `aSoundTime` | [Time](/api-docs/clay-native/soloud/Time/) | |
| `aSound` | [AudioSource](/api-docs/clay-native/soloud/AudioSource/) | |
| `aVolume` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `-1.0` |
| `aPan` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `0.0` |
| `aBus` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) | `0` |

| Returns |
|---------|
| [Handle](/api-docs/clay-native/soloud/Handle/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="play3d"><code><span class="field-name">play3d</span><span class="parenthesis">(</span><span class="arg-name">aSound</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/AudioSource/" class="type-link">AudioSource</a><span class="operator">,</span> <span class="arg-name">aPosX</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aPosY</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aPosZ</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aVelX</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aVelY</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aVelZ</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aVolume</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aPaused</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aBus</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a></code><a class="header-anchor" href="#play3d"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Start playing a 3d audio source

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
| `aBus` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) | `0` |

| Returns |
|---------|
| [Handle](/api-docs/clay-native/soloud/Handle/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="play3dClocked"><code><span class="field-name">play3dClocked</span><span class="parenthesis">(</span><span class="arg-name">aSoundTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a><span class="operator">,</span> <span class="arg-name">aSound</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/AudioSource/" class="type-link">AudioSource</a><span class="operator">,</span> <span class="arg-name">aPosX</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aPosY</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aPosZ</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aVelX</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aVelY</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aVelZ</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aVolume</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aBus</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a></code><a class="header-anchor" href="#play3dClocked"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Start playing a 3d audio source, delayed in relation to other sounds called via this function.

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
| `aBus` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) | `0` |

| Returns |
|---------|
| [Handle](/api-docs/clay-native/soloud/Handle/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="playBackground"><code><span class="field-name">playBackground</span><span class="parenthesis">(</span><span class="arg-name">aSound</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/AudioSource/" class="type-link">AudioSource</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aVolume</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">-1.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aPaused</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aBus</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a></code><a class="header-anchor" href="#playBackground"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Start playing a sound without any panning. It will be played at full volume.

| Name | Type | Default |
|------|------|---------|
| `aSound` | [AudioSource](/api-docs/clay-native/soloud/AudioSource/) | |
| `aVolume` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `-1.0` |
| `aPaused` | [Bool](/api-docs/clay-native/Bool/) | `false` |
| `aBus` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) | `0` |

| Returns |
|---------|
| [Handle](/api-docs/clay-native/soloud/Handle/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="seek"><code><span class="field-name">seek</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="operator">,</span> <span class="arg-name">aSeconds</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Result/" class="type-link">Result</a></code><a class="header-anchor" href="#seek"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Seek the audio stream to certain point in time. Some streams can't seek backwards. Relative play speed affects time.

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |
| `aSeconds` | [Time](/api-docs/clay-native/soloud/Time/) |

| Returns |
|---------|
| [Result](/api-docs/clay-native/soloud/Result/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="stop"><code><span class="field-name">stop</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#stop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Stop the sound.

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="stopAll"><code><span class="field-name">stopAll</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#stopAll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Stop all voices.

<hr class="field-separator" />

<div class="signature field-method has-description" id="stopAudioSource"><code><span class="field-name">stopAudioSource</span><span class="parenthesis">(</span><span class="arg-name">aSound</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/AudioSource/" class="type-link">AudioSource</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#stopAudioSource"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Stop all voices that play this sound source

| Name | Type |
|------|------|
| `aSound` | [AudioSource](/api-docs/clay-native/soloud/AudioSource/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="countAudioSource"><code><span class="field-name">countAudioSource</span><span class="parenthesis">(</span><span class="arg-name">aSound</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/AudioSource/" class="type-link">AudioSource</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Int32/" class="type-link">cpp.Int32</a></code><a class="header-anchor" href="#countAudioSource"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Count voices that play this audio source

| Name | Type |
|------|------|
| `aSound` | [AudioSource](/api-docs/clay-native/soloud/AudioSource/) |

| Returns |
|---------|
| [cpp.Int32](/api-docs/clay-native/cpp/Int32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setFilterParameter"><code><span class="field-name">setFilterParameter</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="operator">,</span> <span class="arg-name">aFilterId</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="operator">,</span> <span class="arg-name">aAttributeId</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="operator">,</span> <span class="arg-name">aValue</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFilterParameter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set a live filter parameter. Use 0 for the global filters.

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |
| `aFilterId` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |
| `aAttributeId` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |
| `aValue` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getFilterParameter"><code><span class="field-name">getFilterParameter</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="operator">,</span> <span class="arg-name">aFilterId</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="operator">,</span> <span class="arg-name">aAttributeId</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#getFilterParameter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get a live filter parameter. Use 0 for the global filters.

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |
| `aFilterId` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |
| `aAttributeId` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |

| Returns |
|---------|
| [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fadeFilterParameter"><code><span class="field-name">fadeFilterParameter</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="operator">,</span> <span class="arg-name">aFilterId</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="operator">,</span> <span class="arg-name">aAttributeId</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="operator">,</span> <span class="arg-name">aTo</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#fadeFilterParameter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fade a live filter parameter. Use 0 for the global filters.

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |
| `aFilterId` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |
| `aAttributeId` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |
| `aTo` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aTime` | [Time](/api-docs/clay-native/soloud/Time/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="oscillateFilterParameter"><code><span class="field-name">oscillateFilterParameter</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="operator">,</span> <span class="arg-name">aFilterId</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="operator">,</span> <span class="arg-name">aAttributeId</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="operator">,</span> <span class="arg-name">aFrom</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aTo</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#oscillateFilterParameter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Oscillate a live filter parameter. Use 0 for the global filters.

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |
| `aFilterId` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |
| `aAttributeId` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |
| `aFrom` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aTo` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aTime` | [Time](/api-docs/clay-native/soloud/Time/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getStreamTime"><code><span class="field-name">getStreamTime</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a></code><a class="header-anchor" href="#getStreamTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get current play time, in seconds.

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |

| Returns |
|---------|
| [Time](/api-docs/clay-native/soloud/Time/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getStreamPosition"><code><span class="field-name">getStreamPosition</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a></code><a class="header-anchor" href="#getStreamPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get current sample position, in seconds.

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |

| Returns |
|---------|
| [Time](/api-docs/clay-native/soloud/Time/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getPause"><code><span class="field-name">getPause</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#getPause"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get current pause state.

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getVolume"><code><span class="field-name">getVolume</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#getVolume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get current volume.

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |

| Returns |
|---------|
| [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getOverallVolume"><code><span class="field-name">getOverallVolume</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#getOverallVolume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get current overall volume (set volume * 3d volume)

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |

| Returns |
|---------|
| [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getPan"><code><span class="field-name">getPan</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#getPan"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get current pan.

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |

| Returns |
|---------|
| [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getSamplerate"><code><span class="field-name">getSamplerate</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#getSamplerate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get current sample rate.

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |

| Returns |
|---------|
| [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getProtectVoice"><code><span class="field-name">getProtectVoice</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#getProtectVoice"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get current voice protection state.

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getActiveVoiceCount"><code><span class="field-name">getActiveVoiceCount</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a></code><a class="header-anchor" href="#getActiveVoiceCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get the current number of busy voices.
| Returns |
|---------|
| [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getVoiceCount"><code><span class="field-name">getVoiceCount</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a></code><a class="header-anchor" href="#getVoiceCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get the current number of voices in SoLoud
| Returns |
|---------|
| [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isValidVoiceHandle"><code><span class="field-name">isValidVoiceHandle</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isValidVoiceHandle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Check if the handle is still valid, or if the sound has stopped.

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getRelativePlaySpeed"><code><span class="field-name">getRelativePlaySpeed</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#getRelativePlaySpeed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get current relative play speed.

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |

| Returns |
|---------|
| [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getPostClipScaler"><code><span class="field-name">getPostClipScaler</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#getPostClipScaler"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get current post-clip scaler value.
| Returns |
|---------|
| [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getGlobalVolume"><code><span class="field-name">getGlobalVolume</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#getGlobalVolume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get current global volume
| Returns |
|---------|
| [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getMaxActiveVoiceCount"><code><span class="field-name">getMaxActiveVoiceCount</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a></code><a class="header-anchor" href="#getMaxActiveVoiceCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get current maximum active voice setting
| Returns |
|---------|
| [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getLooping"><code><span class="field-name">getLooping</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#getLooping"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Query whether a voice is set to loop.

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getLoopPoint"><code><span class="field-name">getLoopPoint</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a></code><a class="header-anchor" href="#getLoopPoint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get voice loop point value

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |

| Returns |
|---------|
| [Time](/api-docs/clay-native/soloud/Time/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setLoopPoint"><code><span class="field-name">setLoopPoint</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="operator">,</span> <span class="arg-name">aLoopPoint</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setLoopPoint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set voice loop point value

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |
| `aLoopPoint` | [Time](/api-docs/clay-native/soloud/Time/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setLooping"><code><span class="field-name">setLooping</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="operator">,</span> <span class="arg-name">aLooping</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setLooping"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set voice's loop state

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |
| `aLooping` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setMaxActiveVoiceCount"><code><span class="field-name">setMaxActiveVoiceCount</span><span class="parenthesis">(</span><span class="arg-name">aVoiceCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Result/" class="type-link">Result</a></code><a class="header-anchor" href="#setMaxActiveVoiceCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set current maximum active voice setting

| Name | Type |
|------|------|
| `aVoiceCount` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |

| Returns |
|---------|
| [Result](/api-docs/clay-native/soloud/Result/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setInaudibleBehavior"><code><span class="field-name">setInaudibleBehavior</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="operator">,</span> <span class="arg-name">aMustTick</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">aKill</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setInaudibleBehavior"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set behavior for inaudible sounds

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |
| `aMustTick` | [Bool](/api-docs/clay-native/Bool/) |
| `aKill` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setGlobalVolume"><code><span class="field-name">setGlobalVolume</span><span class="parenthesis">(</span><span class="arg-name">aVolume</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setGlobalVolume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the global volume

| Name | Type |
|------|------|
| `aVolume` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setPostClipScaler"><code><span class="field-name">setPostClipScaler</span><span class="parenthesis">(</span><span class="arg-name">aScaler</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setPostClipScaler"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the post clip scaler value

| Name | Type |
|------|------|
| `aScaler` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setPause"><code><span class="field-name">setPause</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="operator">,</span> <span class="arg-name">aPause</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setPause"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the pause state

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |
| `aPause` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setPauseAll"><code><span class="field-name">setPauseAll</span><span class="parenthesis">(</span><span class="arg-name">aPause</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setPauseAll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pause all voices

| Name | Type |
|------|------|
| `aPause` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setRelativePlaySpeed"><code><span class="field-name">setRelativePlaySpeed</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="operator">,</span> <span class="arg-name">aSpeed</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Result/" class="type-link">Result</a></code><a class="header-anchor" href="#setRelativePlaySpeed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the relative play speed

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |
| `aSpeed` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

| Returns |
|---------|
| [Result](/api-docs/clay-native/soloud/Result/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setProtectVoice"><code><span class="field-name">setProtectVoice</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="operator">,</span> <span class="arg-name">aProtect</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setProtectVoice"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the voice protection state

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |
| `aProtect` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setSamplerate"><code><span class="field-name">setSamplerate</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="operator">,</span> <span class="arg-name">aSamplerate</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setSamplerate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the sample rate

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |
| `aSamplerate` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setPan"><code><span class="field-name">setPan</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="operator">,</span> <span class="arg-name">aPan</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setPan"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set panning value; -1 is left, 0 is center, 1 is right

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |
| `aPan` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setPanAbsolute"><code><span class="field-name">setPanAbsolute</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="operator">,</span> <span class="arg-name">aLVolume</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aRVolume</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aLBVolume</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aRBVolume</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aCVolume</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aSVolume</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setPanAbsolute"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set absolute left/right volumes

| Name | Type | Default |
|------|------|---------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) | |
| `aLVolume` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | |
| `aRVolume` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | |
| `aLBVolume` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `0` |
| `aRBVolume` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `0` |
| `aCVolume` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `0` |
| `aSVolume` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `0` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setVolume"><code><span class="field-name">setVolume</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="operator">,</span> <span class="arg-name">aVolume</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setVolume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set overall volume

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |
| `aVolume` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setDelaySamples"><code><span class="field-name">setDelaySamples</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="operator">,</span> <span class="arg-name">aSamples</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setDelaySamples"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set delay, in samples, before starting to play samples. Calling this on a live sound will cause glitches.

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |
| `aSamples` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fadeVolume"><code><span class="field-name">fadeVolume</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="operator">,</span> <span class="arg-name">aTo</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#fadeVolume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set up volume fader

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |
| `aTo` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aTime` | [Time](/api-docs/clay-native/soloud/Time/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fadePan"><code><span class="field-name">fadePan</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="operator">,</span> <span class="arg-name">aTo</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#fadePan"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set up panning fader

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |
| `aTo` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aTime` | [Time](/api-docs/clay-native/soloud/Time/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fadeRelativePlaySpeed"><code><span class="field-name">fadeRelativePlaySpeed</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="operator">,</span> <span class="arg-name">aTo</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#fadeRelativePlaySpeed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set up relative play speed fader

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |
| `aTo` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aTime` | [Time](/api-docs/clay-native/soloud/Time/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fadeGlobalVolume"><code><span class="field-name">fadeGlobalVolume</span><span class="parenthesis">(</span><span class="arg-name">aTo</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#fadeGlobalVolume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set up global volume fader

| Name | Type |
|------|------|
| `aTo` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aTime` | [Time](/api-docs/clay-native/soloud/Time/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="schedulePause"><code><span class="field-name">schedulePause</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="operator">,</span> <span class="arg-name">aTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#schedulePause"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Schedule a stream to pause

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |
| `aTime` | [Time](/api-docs/clay-native/soloud/Time/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="scheduleStop"><code><span class="field-name">scheduleStop</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="operator">,</span> <span class="arg-name">aTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#scheduleStop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Schedule a stream to stop

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |
| `aTime` | [Time](/api-docs/clay-native/soloud/Time/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="oscillateVolume"><code><span class="field-name">oscillateVolume</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="operator">,</span> <span class="arg-name">aFrom</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aTo</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#oscillateVolume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set up volume oscillator

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |
| `aFrom` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aTo` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aTime` | [Time](/api-docs/clay-native/soloud/Time/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="oscillatePan"><code><span class="field-name">oscillatePan</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="operator">,</span> <span class="arg-name">aFrom</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aTo</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#oscillatePan"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set up panning oscillator

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |
| `aFrom` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aTo` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aTime` | [Time](/api-docs/clay-native/soloud/Time/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="oscillateRelativePlaySpeed"><code><span class="field-name">oscillateRelativePlaySpeed</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="operator">,</span> <span class="arg-name">aFrom</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aTo</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#oscillateRelativePlaySpeed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set up relative play speed oscillator

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |
| `aFrom` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aTo` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aTime` | [Time](/api-docs/clay-native/soloud/Time/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="oscillateGlobalVolume"><code><span class="field-name">oscillateGlobalVolume</span><span class="parenthesis">(</span><span class="arg-name">aFrom</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aTo</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#oscillateGlobalVolume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set up global volume oscillator

| Name | Type |
|------|------|
| `aFrom` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aTo` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aTime` | [Time](/api-docs/clay-native/soloud/Time/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setGlobalFilter"><code><span class="field-name">setGlobalFilter</span><span class="parenthesis">(</span><span class="arg-name">aFilterId</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="operator">,</span> <span class="arg-name">aFilter</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Filter/" class="type-link">Filter</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setGlobalFilter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set global filters. Set to NULL to clear the filter.

| Name | Type |
|------|------|
| `aFilterId` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |
| `aFilter` | [Filter](/api-docs/clay-native/soloud/Filter/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setVisualizationEnable"><code><span class="field-name">setVisualizationEnable</span><span class="parenthesis">(</span><span class="arg-name">aEnable</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setVisualizationEnable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enable or disable visualization data gathering

| Name | Type |
|------|------|
| `aEnable` | [Bool](/api-docs/clay-native/Bool/) |

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

Get approximate output volume for a channel for visualization. Visualization has to be enabled before use.

| Name | Type |
|------|------|
| `aChannel` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |

| Returns |
|---------|
| [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getLoopCount"><code><span class="field-name">getLoopCount</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a></code><a class="header-anchor" href="#getLoopCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get current loop count. Returns 0 if is:Handle not valid. (All audio sources may not update loop count)

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |

| Returns |
|---------|
| [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getInfo"><code><span class="field-name">getInfo</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="operator">,</span> <span class="arg-name">aInfoKey</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#getInfo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get audiosource-specific information from a voice.

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |
| `aInfoKey` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |

| Returns |
|---------|
| [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createVoiceGroup"><code><span class="field-name">createVoiceGroup</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a></code><a class="header-anchor" href="#createVoiceGroup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a voice group. Returns 0 if unable (out of voice groups / out of memory)
| Returns |
|---------|
| [Handle](/api-docs/clay-native/soloud/Handle/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="destroyVoiceGroup"><code><span class="field-name">destroyVoiceGroup</span><span class="parenthesis">(</span><span class="arg-name">aVoiceGroupHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Result/" class="type-link">Result</a></code><a class="header-anchor" href="#destroyVoiceGroup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Destroy a voice group.

| Name | Type |
|------|------|
| `aVoiceGroupHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |

| Returns |
|---------|
| [Result](/api-docs/clay-native/soloud/Result/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addVoiceToGroup"><code><span class="field-name">addVoiceToGroup</span><span class="parenthesis">(</span><span class="arg-name">aVoiceGroupHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="operator">,</span> <span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Result/" class="type-link">Result</a></code><a class="header-anchor" href="#addVoiceToGroup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Add a voice to:Handle a voice group

| Name | Type |
|------|------|
| `aVoiceGroupHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |

| Returns |
|---------|
| [Result](/api-docs/clay-native/soloud/Result/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isVoiceGroup"><code><span class="field-name">isVoiceGroup</span><span class="parenthesis">(</span><span class="arg-name">aVoiceGroupHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isVoiceGroup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is this a:Handle valid voice group?

| Name | Type |
|------|------|
| `aVoiceGroupHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isVoiceGroupEmpty"><code><span class="field-name">isVoiceGroupEmpty</span><span class="parenthesis">(</span><span class="arg-name">aVoiceGroupHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isVoiceGroupEmpty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is this voice group empty?

| Name | Type |
|------|------|
| `aVoiceGroupHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="update3dAudio"><code><span class="field-name">update3dAudio</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#update3dAudio"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Perform 3d audio parameter update

<hr class="field-separator" />

<div class="signature field-method has-description" id="set3dSoundSpeed"><code><span class="field-name">set3dSoundSpeed</span><span class="parenthesis">(</span><span class="arg-name">aSpeed</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Result/" class="type-link">Result</a></code><a class="header-anchor" href="#set3dSoundSpeed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the speed of sound constant for doppler

| Name | Type |
|------|------|
| `aSpeed` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

| Returns |
|---------|
| [Result](/api-docs/clay-native/soloud/Result/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="get3dSoundSpeed"><code><span class="field-name">get3dSoundSpeed</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#get3dSoundSpeed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get the current speed of sound constant for doppler
| Returns |
|---------|
| [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="set3dListenerParameters"><code><span class="field-name">set3dListenerParameters</span><span class="parenthesis">(</span><span class="arg-name">aPosX</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aPosY</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aPosZ</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aAtX</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aAtY</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aAtZ</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aUpX</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aUpY</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aUpZ</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aVelocityX</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aVelocityY</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aVelocityZ</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#set3dListenerParameters"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set 3d listener parameters

| Name | Type | Default |
|------|------|---------|
| `aPosX` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | |
| `aPosY` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | |
| `aPosZ` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | |
| `aAtX` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | |
| `aAtY` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | |
| `aAtZ` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | |
| `aUpX` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | |
| `aUpY` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | |
| `aUpZ` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | |
| `aVelocityX` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `0.0` |
| `aVelocityY` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `0.0` |
| `aVelocityZ` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `0.0` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="set3dListenerPosition"><code><span class="field-name">set3dListenerPosition</span><span class="parenthesis">(</span><span class="arg-name">aPosX</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aPosY</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aPosZ</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#set3dListenerPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set 3d listener position

| Name | Type |
|------|------|
| `aPosX` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aPosY` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aPosZ` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="set3dListenerAt"><code><span class="field-name">set3dListenerAt</span><span class="parenthesis">(</span><span class="arg-name">aAtX</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aAtY</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aAtZ</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#set3dListenerAt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set 3d listener "at" vector

| Name | Type |
|------|------|
| `aAtX` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aAtY` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aAtZ` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="set3dListenerUp"><code><span class="field-name">set3dListenerUp</span><span class="parenthesis">(</span><span class="arg-name">aUpX</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aUpY</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aUpZ</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#set3dListenerUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

set 3d listener "up" vector

| Name | Type |
|------|------|
| `aUpX` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aUpY` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aUpZ` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="set3dListenerVelocity"><code><span class="field-name">set3dListenerVelocity</span><span class="parenthesis">(</span><span class="arg-name">aVelocityX</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aVelocityY</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aVelocityZ</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#set3dListenerVelocity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set 3d listener velocity

| Name | Type |
|------|------|
| `aVelocityX` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aVelocityY` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aVelocityZ` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="set3dSourceParameters"><code><span class="field-name">set3dSourceParameters</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="operator">,</span> <span class="arg-name">aPosX</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aPosY</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aPosZ</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aVelocityX</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aVelocityY</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aVelocityZ</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#set3dSourceParameters"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set 3d audio source parameters

| Name | Type | Default |
|------|------|---------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) | |
| `aPosX` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | |
| `aPosY` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | |
| `aPosZ` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | |
| `aVelocityX` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `0.0` |
| `aVelocityY` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `0.0` |
| `aVelocityZ` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `0.0` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="set3dSourcePosition"><code><span class="field-name">set3dSourcePosition</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="operator">,</span> <span class="arg-name">aPosX</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aPosY</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aPosZ</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#set3dSourcePosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set 3d audio source position

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |
| `aPosX` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aPosY` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aPosZ` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="set3dSourceVelocity"><code><span class="field-name">set3dSourceVelocity</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="operator">,</span> <span class="arg-name">aVelocityX</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aVelocityY</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aVelocityZ</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#set3dSourceVelocity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set 3d audio source velocity

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |
| `aVelocityX` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aVelocityY` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aVelocityZ` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="set3dSourceMinMaxDistance"><code><span class="field-name">set3dSourceMinMaxDistance</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="operator">,</span> <span class="arg-name">aMinDistance</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aMaxDistance</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#set3dSourceMinMaxDistance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set 3d audio source min/max distance (distance < min means max volume)

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |
| `aMinDistance` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aMaxDistance` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="set3dSourceAttenuation"><code><span class="field-name">set3dSourceAttenuation</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="operator">,</span> <span class="arg-name">aAttenuationModel</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="operator">,</span> <span class="arg-name">aAttenuationRolloffFactor</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#set3dSourceAttenuation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set 3d audio source attenuation parameters

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |
| `aAttenuationModel` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |
| `aAttenuationRolloffFactor` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="set3dSourceDopplerFactor"><code><span class="field-name">set3dSourceDopplerFactor</span><span class="parenthesis">(</span><span class="arg-name">aVoiceHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Handle/" class="type-link">Handle</a><span class="operator">,</span> <span class="arg-name">aDopplerFactor</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#set3dSourceDopplerFactor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set 3d audio source doppler factor to reduce or enhance doppler effect. Default = 1.0

| Name | Type |
|------|------|
| `aVoiceHandle` | [Handle](/api-docs/clay-native/soloud/Handle/) |
| `aDopplerFactor` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="mix"><code><span class="field-name">mix</span><span class="parenthesis">(</span><span class="arg-name">aBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Pointer/" class="type-link">cpp.Pointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">aSamples</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#mix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns mixed samples:cpp.Float32 in buffer. Called by the back-end, or user with null driver.

| Name | Type |
|------|------|
| `aBuffer` | [cpp.Pointer](/api-docs/clay-native/cpp/Pointer/)<[cpp.Float32](/api-docs/clay-native/cpp/Float32/)> |
| `aSamples` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="mixSigned16"><code><span class="field-name">mixSigned16</span><span class="parenthesis">(</span><span class="arg-name">aBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Pointer/" class="type-link">cpp.Pointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/UInt16/" class="type-link">cpp.UInt16</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">aSamples</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#mixSigned16"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns mixed 16-bit signed integer samples in buffer. Called by the back-end, or user with null driver.

| Name | Type |
|------|------|
| `aBuffer` | [cpp.Pointer](/api-docs/clay-native/cpp/Pointer/)<[cpp.UInt16](/api-docs/clay-native/cpp/UInt16/)> |
| `aSamples` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:include` | "linc_soloud.h" |

